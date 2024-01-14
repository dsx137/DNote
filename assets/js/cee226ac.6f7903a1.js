"use strict";(self.webpackChunkd_note=self.webpackChunkd_note||[]).push([[4691],{9751:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(5893),o=t(1151);const a={},l="Qt Installer FrameWork",i={id:"notes/\u7b14\u8bb0/\u6846\u67b6/Qt/Qt Installer FrameWork",title:"Qt Installer FrameWork",description:"Qt\u7684\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u7528\u6765\u5236\u4f5c\u5b89\u88c5\u7a0b\u5e8f",source:"@site/docs/notes/\u7b14\u8bb0/\u6846\u67b6/Qt/Qt Installer FrameWork.md",sourceDirName:"notes/\u7b14\u8bb0/\u6846\u67b6/Qt",slug:"/notes/\u7b14\u8bb0/\u6846\u67b6/Qt/Qt Installer FrameWork",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u6846\u67b6/Qt/Qt Installer FrameWork",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"noteSidebar",previous:{title:"Qt",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u6846\u67b6/Qt/@\u5e8f\u8a00"},next:{title:"\u7f16\u7a0b\u6982\u5ff5",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u5176\u4ed6/\u7f16\u7a0b\u6982\u5ff5"}},c={},s=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u6587\u4ef6\u76ee\u5f55\u7ed3\u6784",id:"\u6587\u4ef6\u76ee\u5f55\u7ed3\u6784",level:3},{value:"config.xml",id:"configxml",level:3},{value:"package.xml",id:"packagexml",level:3},{value:"installscript.qs",id:"installscriptqs",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"qt-installer-framework",children:"Qt Installer FrameWork"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Qt\u7684\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u7528\u6765\u5236\u4f5c\u5b89\u88c5\u7a0b\u5e8f"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://doc.qt.io/qtinstallerframework/index.html",children:"\u5b98\u65b9\u624b\u518c"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,r.jsx)(n.h3,{id:"\u6587\u4ef6\u76ee\u5f55\u7ed3\u6784",children:"\u6587\u4ef6\u76ee\u5f55\u7ed3\u6784"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\u251c\u2500output\n        \u2514\u2500config\n                config.xml\n        \u2514\u2500packages\n                \u2514\u2500com.yourname.component1\n                        \u2514\u2500data\n                            yourprogram\n                        \u2514\u2500meta\n                            intallscript.qs\n                            package.xml\n                \u2514\u2500com.yourname.component2\n                        \u2514\u2500data\n                            yourprogram\n                        \u2514\u2500meta\n                            intallscript.qs\n                            package.xml     \n"})}),"\n",(0,r.jsx)(n.h3,{id:"configxml",children:"config.xml"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://doc.qt.io/qtinstallerframework/ifw-globalconfig.html",children:"Configuration File"})}),"\n",(0,r.jsx)(n.h3,{id:"packagexml",children:"package.xml"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://doc.qt.io/qtinstallerframework/ifw-component-description.html",children:"Package Directory"})}),"\n",(0,r.jsx)(n.h3,{id:"installscriptqs",children:"installscript.qs"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'function Component(){\n    // default constructor\n}\n\nComponent.prototype.createOperations = function(){\n    // call default implementation to actually install README.txt!\n    component.createOperations();\n    if (systemInfo.productType === "windows") {\n        component.addOperation("CreateShortcut",\n                                   "@TargetDir@/app.exe",// target\n                                   "@DesktopDir@/app.lnk",// link-path\n                                   "workingDirectory=@TargetDir@",// working-dir\n                                   "iconPath=@TargetDir@/app.exe","iconId=0",// icon\n                                   "description=Start App");// description\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"binarycreator -c config/config.xml -p packages installer.exe"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var r=t(7294);const o={},a=r.createContext(o);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);