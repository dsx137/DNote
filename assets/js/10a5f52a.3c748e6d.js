"use strict";(self.webpackChunkd_note=self.webpackChunkd_note||[]).push([[126],{27108:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u57fa\u672c/\u4f4d\u57df","title":"\u4f4d\u57df","description":"Bit Field","source":"@site/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u57fa\u672c/\u4f4d\u57df.md","sourceDirName":"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u57fa\u672c","slug":"/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u57fa\u672c/\u4f4d\u57df","permalink":"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u57fa\u672c/\u4f4d\u57df","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"computerBasicSidebar","previous":{"title":"\u203b\u7591\u96be\u6742\u75c7","permalink":"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u57fa\u672c/\u203b\u7591\u96be\u6742\u75c7"},"next":{"title":"\u5f15\u7528","permalink":"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u57fa\u672c/\u5f15\u7528"}}');var r=t(74848),o=t(28453);const i={},c="\u4f4d\u57df",l={},d=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u4e00\u4e9b\u6027\u8d28",id:"\u4e00\u4e9b\u6027\u8d28",level:2},{value:"Union\u4e0b\u7684\u4f4d\u57df",id:"union\u4e0b\u7684\u4f4d\u57df",level:2}];function u(n){const e={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u4f4d\u57df",children:"\u4f4d\u57df"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Bit Field"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5b9a\u4e49",children:"\u5b9a\u4e49"}),"\n",(0,r.jsxs)(e.p,{children:["\u7b80\u5355\u7684\u8bf4\uff0c\u4f4d\u57df\u5c31\u662f\u5c0f\u4e00\u70b9\u7684\u666e\u901a\u53d8\u91cf",(0,r.jsx)(e.br,{}),"\n","\u4f4d\u57df\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u5b58\u50a8\u65b9\u5f0f\uff0c\u53ef\u4ee5\u7528\u5c0f\u4e8esizeof(type)\u7684\u5927\u5c0f\u8fdb\u884c\u5b58\u50a8"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"\u4e00\u4e9b\u6027\u8d28",children:"\u4e00\u4e9b\u6027\u8d28"}),"\n",(0,r.jsxs)(e.p,{children:["\u4f4d\u57df\u6309\u987a\u5e8f\u4ece\u4f4e\u4f4d\u5230\u9ad8\u4f4d\u6392\u5217",(0,r.jsx)(e.br,{}),"\n","\u540c\u4e00\u7ea7\u4e0b\u7684\u4f4d\u57df\u9075\u5faa\u4e00\u5b9a\u7684\u89c4\u5f8b\u8fdb\u884c\u538b\u7f29\uff1a"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u4f4d\u57df\u7684\u4e3b\u8981\u76ee\u7684\u662f\u538b\u7f29\u5b58\u50a8\uff0c\u5176\u5927\u81f4\u89c4\u5219\u4e3a\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u5982\u679c\u76f8\u90bb\u4f4d\u57df\u5b57\u6bb5\u7684\u7c7b\u578b\u76f8\u540c\uff0c\u4e14\u5176\u4f4d\u5bbd\u4e4b\u548c\u5c0f\u4e8e\u7c7b\u578b\u7684sizeof\u5927\u5c0f\uff0c\u5219\u540e\u9762\u7684\u5b57\u6bb5\u5c06\u7d27\u90bb\u524d\u4e00\u4e2a\u5b57\u6bb5\u5b58\u50a8\uff0c\u76f4\u5230\u4e0d\u80fd\u5bb9\u7eb3\u4e3a\u6b62\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u5982\u679c\u76f8\u90bb\u4f4d\u57df\u5b57\u6bb5\u7684\u7c7b\u578b\u76f8\u540c\uff0c\u4f46\u5176\u4f4d\u5bbd\u4e4b\u548c\u5927\u4e8e\u7c7b\u578b\u7684sizeof\u5927\u5c0f\uff0c\u5219\u540e\u9762\u7684\u5b57\u6bb5\u5c06\u4ece\u65b0\u7684\u5b58\u50a8\u5355\u5143\u5f00\u59cb\uff0c\u5176\u504f\u79fb\u91cf\u4e3a\u5176\u7c7b\u578b\u5927\u5c0f\u7684\u6574\u6570\u500d\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u5982\u679c\u76f8\u90bb\u7684\u4f4d\u57df\u5b57\u6bb5\u7684\u7c7b\u578b\u4e0d\u540c\uff0c\u5219\u5404\u7f16\u8bd1\u5668\u7684\u5177\u4f53\u5b9e\u73b0\u6709\u5dee\u5f02\uff0cVC6\u91c7\u53d6\u4e0d\u538b\u7f29\u65b9\u5f0f\uff0cDev-C++\u91c7\u53d6\u538b\u7f29\u65b9\u5f0f\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u5982\u679c\u4f4d\u57df\u5b57\u6bb5\u4e4b\u95f4\u7a7f\u63d2\u7740\u975e\u4f4d\u57df\u5b57\u6bb5\uff0c\u5219\u4e0d\u8fdb\u884c\u538b\u7f29\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u6574\u4e2a\u7ed3\u6784\u4f53\u7684\u603b\u5927\u5c0f\u4e3a\u6700\u5bbd\u57fa\u672c\u7c7b\u578b\u6210\u5458\u5927\u5c0f\u7684\u6574\u6570\u500d\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"union\u4e0b\u7684\u4f4d\u57df",children:"Union\u4e0b\u7684\u4f4d\u57df"}),"\n",(0,r.jsxs)(e.p,{children:["\u4f4d\u57df\u5199\u5728union\u4e0b\uff0c\u5c31\u4f1a\u53d7\u5230union\u5f71\u54cd",(0,r.jsx)(e.br,{}),"\n","union\u6240\u6709\u53d8\u91cf\u5171\u7528\u4e00\u4e2a\u5185\u5b58",(0,r.jsx)(e.br,{}),"\n","\u6240\u4ee5\u6240\u6709\u7684\u4f4d\u57df\u90fd\u7528\u7684\u662f\u4e00\u5757\u5185\u5b58\uff0c\u5c31\u4e0d\u5b58\u5728\u987a\u5e8f",(0,r.jsx)(e.br,{}),"\n","\u7edf\u4e00\u4ece\u6700\u4f4e\u4f4d\u5f00\u59cb\u5b58\u50a8",(0,r.jsx)(e.br,{}),"\n","\u6240\u4ee5\u5728union\u4e2d\u76f4\u63a5\u4f7f\u7528\u4f4d\u57df\u548c\u666e\u901a\u53d8\u91cf\u6ca1\u6709\u4efb\u4f55\u533a\u522b",(0,r.jsx)(e.br,{}),"\n","\u5982\u679c\u8981\u5448\u73b0\u201c\u5206\u5757\u201d\u7684\u529f\u80fd",(0,r.jsx)(e.br,{}),"\n","\u5c31\u8981\u5728union\u4e2d\u5d4c\u5957\u4e00\u4e2astruct",(0,r.jsx)(e.br,{}),"\n","\u666e\u901a\u7684\u53d8\u91cf\u4e5f\u662f\u4e00\u6837\u7684"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"union Test{\n    struct{\n        int c : 8;\n        int b : 8;\n        int a : 16;\n        //\u4ece\u4f4e\u4f4d\u5230\u9ad8\u4f4d\uff0c\u5012\u7740\u5199\n    }\n    int total;\n    //\u8fd9\u6837total\u5c31\u662f\u4e8c\u8fdb\u5236\u4f4d\u8fd0\u7b97\u7684a+b+c\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>c});var s=t(96540);const r={},o=s.createContext(r);function i(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);