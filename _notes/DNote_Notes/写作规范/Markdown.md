---
---

# Markdown

Markdown除了posts文件夹以外的文件必须写metadata，不然jekyll读不出来

换行要在行尾加\\

markdownlint的配置文件是.markdownlint.jsonc，谨慎更改

+ [HTML内的Markdown](https://qa.1r1g.com/sf/ask/958011211/)
  + 如果HTML标记具有markdown ="0"属性,则不会在该HTML标记内部进行解析(除了解析HTML span标记).
  + 如果HTML标记具有markdown ="1"属性,则标记的内容将被解析为span级别元素.
  + 如果HTML标记具有markdown ="block"属性,则会发出警告,因为HTML跨度不能包含块级元素,并且该属性将被忽略.
  + 如果HTML标记具有markdown ="span"属性,则标记的内容将被解析为span级别元素.

使用如下代码来屏蔽掉Jekyll Kramdown对code解析

```html
<span style='display: none'>{::nomarkdown}</span>
<!-- your code -->
<span style='display: none'>{:/nomarkdown}</span>
```
