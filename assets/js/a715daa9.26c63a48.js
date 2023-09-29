"use strict";(self.webpackChunkd_note=self.webpackChunkd_note||[]).push([[5079],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=i(r),f=o,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||a;return r?n.createElement(d,p(p({ref:t},u),{},{components:r})):n.createElement(d,p({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,p[1]=l;for(var i=2;i<a;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1177:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={},p="re",l={unversionedId:"notes/\u7b14\u8bb0/\u7f16\u7a0b\u8bed\u8a00/Python/re",id:"notes/\u7b14\u8bb0/\u7f16\u7a0b\u8bed\u8a00/Python/re",title:"re",description:"re\u662f\u4e2a\u7528\u6765\u5904\u7406\u5b57\u7b26\u4e32\u7684\u5e93",source:"@site/docs/notes/\u7b14\u8bb0/\u7f16\u7a0b\u8bed\u8a00/Python/re.md",sourceDirName:"notes/\u7b14\u8bb0/\u7f16\u7a0b\u8bed\u8a00/Python",slug:"/notes/\u7b14\u8bb0/\u7f16\u7a0b\u8bed\u8a00/Python/re",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u7f16\u7a0b\u8bed\u8a00/Python/re",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"noteSidebar",previous:{title:"Python",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u7f16\u7a0b\u8bed\u8a00/Python/@\u5e8f\u8a00"},next:{title:"\u6784\u5efa\u5de5\u5177",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u7f16\u7a0b\u8bed\u8a00/\u6784\u5efa\u5de5\u5177/@\u5e8f\u8a00"}},c={},i=[{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2},{value:"findall",id:"findall",level:3},{value:"\u4e00\u4e9b\u4e1c\u897f",id:"\u4e00\u4e9b\u4e1c\u897f",level:2}],u={toc:i},s="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"re"},"re"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"import re\n")),(0,o.kt)("p",null,"re\u662f\u4e2a\u7528\u6765\u5904\u7406\u5b57\u7b26\u4e32\u7684\u5e93",(0,o.kt)("br",{parentName:"p"}),"\n","\u5c31\u56fe\u5b83\u7684\u6b63\u5219\u6765\u7684"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,o.kt)("h3",{id:"findall"},"findall"),(0,o.kt)("p",null,"\u8fd4\u56destring\u4e2d\u6240\u6709\u4e0epattern\u5339\u914d\u7684\u5168\u90e8\u5b57\u7b26\u4e32,\u8fd4\u56de\u5f62\u5f0f\u4e3a\u6570\u7ec4",(0,o.kt)("br",{parentName:"p"}),"\n","pattern\u662f\u6b63\u5219\u8868\u8fbe\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"re.findall(pattern, string, flags=0)\n")),(0,o.kt)("h2",{id:"\u4e00\u4e9b\u4e1c\u897f"},"\u4e00\u4e9b\u4e1c\u897f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"flag")),(0,o.kt)("p",{parentName:"blockquote"},"\u63cf\u8ff0"),(0,o.kt)("p",{parentName:"blockquote"},"re.I",(0,o.kt)("br",{parentName:"p"}),"\n","\u5ffd\u7565\u5927\u5c0f\u5199"),(0,o.kt)("p",{parentName:"blockquote"},"re.M",(0,o.kt)("br",{parentName:"p"}),"\n","\u591a\u884c\u6a21\u5f0f"),(0,o.kt)("p",{parentName:"blockquote"},"re.S",(0,o.kt)("br",{parentName:"p"}),"\n","\u70b9\u4efb\u610f\u5339\u914d\u6a21\u5f0f"),(0,o.kt)("p",{parentName:"blockquote"},"re.L",(0,o.kt)("br",{parentName:"p"}),"\n","\u4f7f\u9884\u5b9a\u4e49\u5b57\u7b26\u7c7b \\w \\W \\b \\B \\s \\S \u53d6\u51b3\u4e8e\u5f53\u524d\u533a\u57df\u8bbe\u5b9a"),(0,o.kt)("p",{parentName:"blockquote"},"re.U",(0,o.kt)("br",{parentName:"p"}),"\n","\u4f7f\u9884\u5b9a\u4e49\u5b57\u7b26\u7c7b \\w \\W \\b \\B \\s \\S \u53d6\u51b3\u4e8eunicode\u5b9a\u4e49\u7684\u5b57\u7b26\u5c5e\u6027"),(0,o.kt)("p",{parentName:"blockquote"},"re.X",(0,o.kt)("br",{parentName:"p"}),"\n","\u8be6\u7ec6\u6a21\u5f0f\uff0c\u6b63\u5219\u8868\u8fbe\u5f0f\u53ef\u4ee5\u662f\u591a\u884c\u7684\uff0c\u5ffd\u7565\u7a7a\u767d\u5b57\u7b26\uff0c\u53ef\u4ee5\u52a0\u6ce8\u91ca")))}m.isMDXComponent=!0}}]);