---
---

# Gradle

>主要用于Java

## 安装

1. 下载[JDK](https://www.oracle.com/java/technologies/downloads/)和[Gradle](https://gradle.org/releases/)
2. 解压并配置环境变量`GRADLE_HOME`=`.../gradle/`
3. 在`Path`中添加`%GRADLE_HOME%\bin`

## 项目

### 目录结构

```text
├── gradle
│   └── wrapper
│       ├── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── gradlew //Gradle Wrapper Linux
├── gradlew.bat //Gradle Wrapper Windows
├── settings.gradle //总项目配置（唯一）
├── build.gradle //构建配置
├── gradle.properties //Gradle配置（全局）
│
├── app //子项目
│   ├── build.gradle //构建配置
│   ├── gradle.properties //Gradle配置（局部）
│   └── ...
│
├── build //构建输出
│
└── src //源码
```
