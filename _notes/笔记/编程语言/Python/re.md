---
---

# re

```py
import re
```

re是个用来处理字符串的库\
就图它的正则来的

---

## 函数

### findall

返回string中所有与pattern匹配的全部字符串,返回形式为数组\
pattern是正则表达式

```py
re.findall(pattern, string, flags=0)
```

## 一些东西

>**flag**
>
>描述
>
>re.I\
>忽略大小写
>
>re.M\
>多行模式
>
>re.S\
>点任意匹配模式
>
>re.L\
>使预定义字符类 \w \W \b \B \s \S 取决于当前区域设定
>
>re.U\
>使预定义字符类 \w \W \b \B \s \S 取决于unicode定义的字符属性
>
>re.X\
>详细模式，正则表达式可以是多行的，忽略空白字符，可以加注释
