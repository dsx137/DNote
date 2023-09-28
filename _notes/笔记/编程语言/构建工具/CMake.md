---
---

# CMake

>主要用于C/C++

---

## 安装

## 在编译ASM文件时的注意事项

使用MSVC编译ASM时使用的是MASM编译器\
然后ASM文件一定要放在该项目的根目录下\
因为CMake在生成构建系统时不会自动创建父目录和源代码目录以外的文件夹\
而且源代码目录是后生成的，还是找不到

如果非要分开写，那就会很残疾

可以像这样：

```CMake
foreach(libasm IN LISTS libasms)
    get_filename_component(libasm_basename ${libasm} NAME_WE)
    set(obj_file ${CMAKE_CURRENT_BINARY_DIR}/${libasm_basename}.obj)
    message(STATUS "Compiling ${libasm_basename}.asm to ${obj_file}")
    set_source_files_properties(${libasm} PROPERTIES COMPILE_FLAGS "/Fo${obj_file} ${ASFLAGS64}")
endforeach()
```

就是用`/Fo`指定输出目录（否则ml64找不到输出目录就会报错）\
但是我无论怎么指定`${CMAKE_BUILD_TYPE}`都无效，获取不到值，很奇怪，所以暂时不建议用这个
