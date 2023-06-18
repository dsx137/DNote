---
---

# Qt Installer FrameWork

>Qt的一个组件，可以用来制作安装程序

[官方手册](https://doc.qt.io/qtinstallerframework/index.html)

---

## 配置

### 文件目录结构

```bash
├─output
        └─config
                config.xml
        └─packages
                └─com.yourname.component1
                        └─data
                            yourprogram
                        └─meta
                            intallscript.qs
                            package.xml
                └─com.yourname.component2
                        └─data
                            yourprogram
                        └─meta
                            intallscript.qs
                            package.xml     
```

### config.xml

[Configuration File](https://doc.qt.io/qtinstallerframework/ifw-globalconfig.html)

### package.xml

[Package Directory](https://doc.qt.io/qtinstallerframework/ifw-component-description.html)

### installscript.qs

```js
function Component(){
    // default constructor
}

Component.prototype.createOperations = function(){
    // call default implementation to actually install README.txt!
    component.createOperations();
    if (systemInfo.productType === "windows") {
        component.addOperation("CreateShortcut",
                                   "@TargetDir@/app.exe",// target
                                   "@DesktopDir@/app.lnk",// link-path
                                   "workingDirectory=@TargetDir@",// working-dir
                                   "iconPath=@TargetDir@/app.exe","iconId=0",// icon
                                   "description=Start App");// description
    }
}
```

## 使用

`binarycreator -c config/config.xml -p packages installer.exe`
