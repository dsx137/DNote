---
---

# Jekyll

就是一拖四\
要先安装gem,ruby，然后cd到文件夹，bundle install安装前置\
输入jekyll s启动，版本不兼容用bundle exec jekyll s启动\
不懂github为什么要支持jekyll

---

## _config.yml

```yml
collections:
  pages:
    output: true
    permalink: /:collection/:path
    sort_by: lesson
```

`output: true` 表示这个合集下每个文件都会被渲染成独立的 html 文件\
`sort_by: lesson` 表示合集内容会根据 lesson 字段来排序\
`permalink` 表示在output文件夹（默认应该都是_site）的相对路径

### 变量

`:collection` 嗯，就是上面你设置的collection名字\
`:path` 在原文件夹里的相对路径\
`:title` 这个还没明白取决于什么\
`:year` `:month` `:day` 这个是metadata里的data，posts里面是文件名前半部分\
`:output_ext` output后的后缀\
`:categories` 这个是metadata里写的

---

## Github

这个更是重量级\
要把url设置成域名，baseurl设置成repo名，然后还要打开github仓库的actions\
github_page就会给你构建\
基本是个模板就能挂github\
网上说的那些什么参数啊都不对
