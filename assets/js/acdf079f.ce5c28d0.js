"use strict";(self.webpackChunkd_note=self.webpackChunkd_note||[]).push([[9750],{6229:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var t=s(5893),r=s(1151);const c={},l="\u51fd\u5b50",o={id:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/10.\u51fd\u5b50",title:"\u51fd\u5b50",description:"Functor",source:"@site/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/10.\u51fd\u5b50.md",sourceDirName:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell",slug:"/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/10.\u51fd\u5b50",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/10.\u51fd\u5b50",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"computerBasicSidebar",previous:{title:"\u6a21\u5757",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/9.\u6a21\u5757"},next:{title:"HDL",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/HDL/@\u5e8f\u8a00"}},i={},d=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u8303\u7574\u8bba",id:"\u8303\u7574\u8bba",level:2},{value:"Identity",id:"identity",level:2},{value:"Const",id:"const",level:2}];function a(e){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u51fd\u5b50",children:"\u51fd\u5b50"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Functor"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5b9a\u4e49",children:"\u5b9a\u4e49"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-haskell",children:"class Functor f where\n    fmap :: (a -> b) -> f a -> f b\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u610f\u601d\u662f\u73b0\u5728\u6709\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u4e00\u4e2a\u5c06a\u7c7b\u578b\u5904\u7406\u6210b\u7c7b\u578b\u7684\u51fd\u6570"}),"\n",(0,t.jsx)(n.li,{children:"\u4e00\u4e2a\u5305\u542ba\u7c7b\u578b\u7684f\u7c7b\u578b\u5bb9\u5668"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u73b0\u5728\u6784\u9020\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u7684\u529f\u80fd\u662f\u4f7f\u7528\u51fd\u6570\u5c06\u539f\u5bb9\u5668\u8f6c\u6362\u4e3a\u5305\u542bb\u7c7b\u578b\u7684f\u7c7b\u578b\u5bb9\u5668",(0,t.jsx)(n.br,{}),"\n","\u6bd4\u5982",(0,t.jsx)(n.code,{children:"Java"}),"\u4e2d\u7684",(0,t.jsx)(n.code,{children:"Stream"}),"\u7684",(0,t.jsx)(n.code,{children:"map"}),"\u65b9\u6cd5",(0,t.jsx)(n.br,{}),"\n","\u53ef\u4ee5\u5c06\u4e00\u4e2a\u5217\u8868\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u5355\u72ec\u5904\u7406\uff0c\u7136\u540e\u5c06\u6bcf\u4e2a\u5143\u7d20\u653e\u5230\u4e00\u4e2a\u65b0\u7684\u5217\u8868\u4e2d"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u5c06\u8fd9\u6837\u201c\u6bcf\u4e2a\u5143\u7d20\u5355\u72ec\u5904\u7406\u201d\u7684\u51fd\u6570\u8bb0\u4f5c",(0,t.jsx)(n.code,{children:"fmap"}),(0,t.jsx)(n.br,{}),"\n","\u5c06\u80fd\u591f\u88ab",(0,t.jsx)(n.code,{children:"fmap"}),"\u5904\u7406\u7684\u7c7b\u578b\u79f0\u4f5c",(0,t.jsx)(n.code,{children:"\u51fd\u5b50"}),"\uff08\u6bd4\u5982",(0,t.jsx)(n.code,{children:"Java"}),"\u4e2d\u7684\u5217\u8868\uff09"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8303\u7574\u8bba",children:"\u8303\u7574\u8bba"}),"\n",(0,t.jsx)(n.p,{children:"\u5f85\u8865\u5145..."}),"\n",(0,t.jsx)(n.h2,{id:"identity",children:"Identity"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6052\u7b49\u51fd\u5b50"}),(0,t.jsx)(n.br,{}),"\n","\u4e00\u4e2a\u5305\u88c5\u503c\uff0c\u5bf9\u503c\u5e94\u7528\u51fd\u6570\u7684\u7b80\u5355\u5bb9\u5668"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-haskell",children:"instance Functor Identity where\n    fmap f (Identity a) = Identity (f a)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"const",children:"Const"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u5e38\u91cf\u51fd\u5b50"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var t=s(7294);const r={},c=t.createContext(r);function l(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);