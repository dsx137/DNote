"use strict";(self.webpackChunkd_note=self.webpackChunkd_note||[]).push([[1395],{85700:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/3.\u5c40\u90e8\u58f0\u660e","title":"\u5c40\u90e8\u58f0\u660e","description":"\u5728\u8868\u8fbe\u5f0f\u4e2d\u58f0\u660e","source":"@site/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/3.\u5c40\u90e8\u58f0\u660e.md","sourceDirName":"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell","slug":"/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/3.\u5c40\u90e8\u58f0\u660e","permalink":"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/3.\u5c40\u90e8\u58f0\u660e","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"computerBasicSidebar","previous":{"title":"2.\u51fd\u6570\u7684\u57fa\u672c\u8bed\u6cd5","permalink":"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/2.\u51fd\u6570\u7684\u57fa\u672c\u8bed\u6cd5"},"next":{"title":"4.\u51fd\u6570\u7684\u8865\u5145\u8bed\u6cd5","permalink":"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/4.\u51fd\u6570\u7684\u8865\u5145\u8bed\u6cd5"}}');var l=t(74848),r=t(28453);const o={},c="\u5c40\u90e8\u58f0\u660e",a={},i=[{value:"let",id:"let",level:2},{value:"where",id:"where",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u5c40\u90e8\u58f0\u660e",children:"\u5c40\u90e8\u58f0\u660e"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5728\u8868\u8fbe\u5f0f\u4e2d\u58f0\u660e"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5c40\u90e8\u503c\u4ec5\u5728\u4f5c\u7528\u57df\u5185\u53ef\u89c1",(0,l.jsx)(n.br,{}),"\n","\u4f7f\u7528\u7f29\u8fdb\u6765\u8868\u793a\u4f5c\u7528\u57df"]}),"\n",(0,l.jsx)(n.h2,{id:"let",children:"let"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-haskell",children:"f x =\n    let y = x * x\n    -- \u53ef\u4ee5\u5199\u591a\u884c\uff0clet\u4e0d\u91cd\u590d\u5199\n     in y + 2\n\nf x =\n    let y :: Int\n        y = x * x\n    {-  n :: Int\n        n = 2 -}\n     in y + 2\n"})}),"\n",(0,l.jsx)(n.h2,{id:"where",children:"where"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-haskell",children:"f x = y + 2\n    where y = x * x\n    -- \u53ef\u4ee5\u5199\u591a\u884c\uff0cwhere\u4e0d\u91cd\u590d\u5199\n\nf x = y + 2\n    where y :: Int\n          y = x * x\n      {-  n :: Int\n          n = 2 -}\n    y = myf x\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-haskell",children:"f x = y + 2\n  where\n    myf :: Int -> Int\n    myf n =\n        let p = 1\n         in n + p\n    y = myf x\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const l={},r=s.createContext(l);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);