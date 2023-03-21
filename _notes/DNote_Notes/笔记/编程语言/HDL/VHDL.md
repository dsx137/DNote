---
---

# VHDL

>**Very High Speed Integrated Circuit Hardware Description Language**

## 数据

### 数据对象

>数据的前缀，用于约束数据的性质

+ `CONSTANT`：常量
+ `VARIABLE`：变量，只能在进程和子程序中使用，不存在延时，没有物理意义
+ `SIGNAL`：信号，不允许在进程和子程序中定义，是物理结构

`数据对象 数据名:数据类型:=值`

### 数据类型

#### 预定义数据类型

+ 在STD的STANDARD包中：
  + `BOOLEAN`
  + `BIT`
  + `BIT_VECTOR`：位矢量，位数组
  + `CHARACTOR`
  + `INTEGER`
    + `NATURAL`：自然数
    + `POSITIVE`：正整数
  + `REAL`：实数
  + `TIME`
  + `STRING`

+ 在IEEE的STD_LOGIC_1164中：
  + `STD_LOGIC`：标准逻辑位
  + `STD_LOGIC_VECTOR`：标准逻辑矢量

#### 自定义数据类型

+ `枚举类型`
  + `TYPE name IS(state1,state2,state3,...)`
+ `整数类型`：不写RANGE默认32位
  + `TYPE name IS INTEGER RANGE value to value`
+ `子类型`：原数据类型的一个子集
  + `SUBTYPE name IS type RANGE value to value`
+ `数组类型`
  + `非限制性数组`：当声明数据时再定义范围
    + `TYPE name IS array(TYPE range<>) of TYPE`
  + `限制性数组`：范围在类型声明时就已经定义
    + `TYPE name IS array(value to value) of TYPE` 

## 结构

### 实体

>Entity
>模块的声明

```vhdl
  ENTITY entityName IS
    GENERIC(
      name:type:=value;
      name:type:=value;
      ...);
    PORT(
      name:mode type;
      name:mode type;
      ...);
  END entiyName;
```

|PORT MODE|（被）读|读方向|（被）写|写方向|
|-|-|-|-|-|
|IN（输入）|$\checkmark$|内|X|-|
|OUT（输出）|X|-|$\checkmark$|外|
|INOUT（双向）|$\checkmark$|内外|$\checkmark$|内外|
|BUFFER（缓冲）|$\checkmark$|内外|$\checkmark$|内|

+ IN : 输入，只读
+ OUT: 输出，只写
+ INOUT: 缓冲，双向
+ BUFFER: 输入输出，双向，只能由模块内部修改

特例：

+ 首先：
  + `驱动（Driver）`：是一个实例或过程，试图控制一个信号的值1。一个信号可以有一个或多个驱动，取决于它的类型和连接方式。
  + `源（Source）`：是一个为信号提供值的过程或端口。一个信号只能有一个源，否则会出现错误。
  + `解析函数（Resolution Function）`：是一个用于确定多个驱动情况下信号值的函数。只有可解析的类型，如std_logic或std_logic_vector，才能使用解析函数。

### 结构体

>Architecture
>模块的定义

### 配置

>Configuration

### 程序包和程序包体

>Package
>头文件

### 库

>Library
>命名空间
