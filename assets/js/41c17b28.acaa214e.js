"use strict";(self.webpackChunkd_note=self.webpackChunkd_note||[]).push([[8519],{61190:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/\u6784\u5efa\u5de5\u5177/Gradle","title":"Gradle","description":"\u4e3b\u8981\u7528\u4e8eJava","source":"@site/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/\u6784\u5efa\u5de5\u5177/Gradle.md","sourceDirName":"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/\u6784\u5efa\u5de5\u5177","slug":"/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/\u6784\u5efa\u5de5\u5177/Gradle","permalink":"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/\u6784\u5efa\u5de5\u5177/Gradle","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"computerBasicSidebar","previous":{"title":"CMake","permalink":"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/\u6784\u5efa\u5de5\u5177/CMake"},"next":{"title":"Maven","permalink":"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/\u6784\u5efa\u5de5\u5177/Maven"}}');var l=r(74848),a=r(28453);const s={},d="Gradle",o={},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u9879\u76ee",id:"\u9879\u76ee",level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:3}];function i(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"gradle",children:"Gradle"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u4e3b\u8981\u7528\u4e8eJava"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u4e0b\u8f7d",(0,l.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/downloads/",children:"JDK"}),"\u548c",(0,l.jsx)(n.a,{href:"https://gradle.org/releases/",children:"Gradle"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u538b\u5e76\u914d\u7f6e\u73af\u5883\u53d8\u91cf",(0,l.jsx)(n.code,{children:"GRADLE_HOME"}),"=",(0,l.jsx)(n.code,{children:".../gradle/"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u5728",(0,l.jsx)(n.code,{children:"Path"}),"\u4e2d\u6dfb\u52a0",(0,l.jsx)(n.code,{children:"%GRADLE_HOME%\\bin"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9879\u76ee",children:"\u9879\u76ee"}),"\n",(0,l.jsx)(n.h3,{id:"\u76ee\u5f55\u7ed3\u6784",children:"\u76ee\u5f55\u7ed3\u6784"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"\u251c\u2500\u2500 gradle\n\u2502\xa0\xa0 \u2514\u2500\u2500 wrapper\n\u2502\xa0\xa0     \u251c\u2500\u2500 gradle-wrapper.jar\n\u2502\xa0\xa0     \u2514\u2500\u2500 gradle-wrapper.properties\n\u251c\u2500\u2500 gradlew //Gradle Wrapper Linux\n\u251c\u2500\u2500 gradlew.bat //Gradle Wrapper Windows\n\u251c\u2500\u2500 settings.gradle //\u603b\u9879\u76ee\u914d\u7f6e\uff08\u552f\u4e00\uff09\n\u251c\u2500\u2500 build.gradle //\u6784\u5efa\u914d\u7f6e\n\u251c\u2500\u2500 gradle.properties //Gradle\u914d\u7f6e\uff08\u5168\u5c40\uff09\n\u2502\n\u251c\u2500\u2500 app //\u5b50\u9879\u76ee\n\u2502\xa0\xa0 \u251c\u2500\u2500 build.gradle //\u6784\u5efa\u914d\u7f6e\n\u2502\xa0\xa0 \u251c\u2500\u2500 gradle.properties //Gradle\u914d\u7f6e\uff08\u5c40\u90e8\uff09\n\u2502\xa0\xa0 \u2514\u2500\u2500 ...\n\u2502\n\u251c\u2500\u2500 build //\u6784\u5efa\u8f93\u51fa\n\u2502\n\u2514\u2500\u2500 src //\u6e90\u7801\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>d});var t=r(96540);const l={},a=t.createContext(l);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);