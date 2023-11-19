const fs = require("fs");
const path = require('path');

const CATEGORY_INDEX_NAME = ['序言', '引入', '导航']
const CATEGORY_NAME_CAPITALIZATION = true;

function parseDir(filename, parent = null) {
  const stats = fs.lstatSync(filename);
  const info = {}

  // 如果是分类
  if (stats.isDirectory()) {
    //如果是根目录
    if (parent == null) {
      return sortItems(
        fs.readdirSync(filename)
          .map(function (childBaseName) {
            return parseDir(filename + '/' + childBaseName, info);
          })
          .filter(child => child != null)
      );
    }
    //如果是子目录
    else {
      info.type = 'category'
      const catName = path.basename(filename);

      if (CATEGORY_NAME_CAPITALIZATION) {
        info.label = catName.charAt(0).toUpperCase() + catName.substring(1);
      } else {
        info.label = catName;
      }

      info.items = fs.readdirSync(filename)
        .map(function (childBaseName) {
          return parseDir(filename + '/' + childBaseName, info);
        })
        .filter(child => child != null);

      //文件夹里啥也没有，而且不是索引分类，也不是特殊文件夹，输出警告
      if (info.items.length == 0 && info.link == null) {
        if (catName[0] != '.') {
          console.warn("Warning: Category '" + filename + "' is empty.");
        }
        return null;
      }

      // 如果是当前分类是父分类的索引分类，则将其设置为父分类的链接（就是一个索引分类（多级目录）只有一个文件，整个多级目录服务于那个父目录）
      if (Object.keys(parent).length != 0 && CATEGORY_INDEX_NAME.some(i => info.label.includes(i))) {
        parent.link = info.link;
        return null;
      }

      sortItems(info.items);
    }
    return info;
  }
  // 如果是文件
  else {
    // 删除 `filename.md` 和 `docs/`
    const tmpPath = filename.split("/");
    let docPath = '';

    tmpPath.pop();
    tmpPath.splice(0, 1);
    tmpPath.map((name) => docPath = docPath + name + '/');

    //如果是文章
    if (path.basename(filename).endsWith('mdx') || path.basename(filename).endsWith('md')) {
      info.type = 'doc';
      const docName = path.basename(filename, path.extname(filename));

      // 如果是分类的索引markdown文件，则将其设置为分类的链接
      if (Object.keys(parent).length != 0 && CATEGORY_INDEX_NAME.some(i => path.basename(filename).includes(i))) {
        parent.link = {
          type: 'doc',
          id: docPath + docName
        };
        return null;
      }

      info.id = docPath + docName;
      info.label = docName;
      return info;
    }
  }
  return null;
}

// 排序
function sortItems(items) {
  items.sort((a, b) => {
    var re = /(\D+|\d+)/g;
    var partsA = a.label.match(re);
    var partsB = b.label.match(re);
    //"abc123def456" -> ["abc", "123", "def", "456"]

    for (var i = 0; i < Math.min(partsA.length, partsB.length); i++) {
      var partA = partsA[i];
      var partB = partsB[i];

      if (partA !== partB) {
        if (!isNaN(partA) && !isNaN(partB)) {
          return parseInt(partA) - parseInt(partB);
        } else {
          return partA.localeCompare(partB, 'zh-CN');
        }
      }
    }

    return partsA.length - partsB.length;
  });
  return items;
}

const sidebars = {
  ruleSidebar: parseDir('docs/notes/@写作规范'),
  noteSidebar: parseDir('docs/notes/笔记'),
}

module.exports = sidebars;
