"use strict";(self.webpackChunkd_note=self.webpackChunkd_note||[]).push([[2283],{9318:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=l(4848),t=l(8453);const o={},s="\u5217\u8868\u64cd\u4f5c",i={id:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/7.\u5217\u8868\u64cd\u4f5c",title:"\u5217\u8868\u64cd\u4f5c",description:"map",source:"@site/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/7.\u5217\u8868\u64cd\u4f5c.md",sourceDirName:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell",slug:"/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/7.\u5217\u8868\u64cd\u4f5c",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/7.\u5217\u8868\u64cd\u4f5c",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"computerBasicSidebar",previous:{title:"6.\u6761\u4ef6\u8bed\u53e5",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/6.\u6761\u4ef6\u8bed\u53e5"},next:{title:"8.\u81ea\u5b9a\u4e49\u7c7b\u578b",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/8.\u81ea\u5b9a\u4e49\u7c7b\u578b"}},a={},c=[{value:"map",id:"map",level:2},{value:"filter",id:"filter",level:2},{value:"fold",id:"fold",level:2}];function d(e){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u5217\u8868\u64cd\u4f5c",children:"\u5217\u8868\u64cd\u4f5c"})}),"\n",(0,r.jsx)(n.h2,{id:"map",children:"map"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6620\u5c04"}),(0,r.jsx)(n.br,{}),"\n","\u5bf9\u5217\u8868\u4e2d\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20\u8fdb\u884c\u540c\u6837\u7684\u5904\u7406"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-haskell",children:"map (+1) [1, 2, 3] -- \u7ed3\u679c\u662f [2,3,4]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"filter",children:"filter"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u8fc7\u6ee4"}),(0,r.jsx)(n.br,{}),"\n","\u7528\u4e00\u4e2a\u8c13\u8bcd\u51fd\u6570(\u8fd4\u56de\u5e03\u5c14\u503c\u7684\u51fd\u6570)\u8fc7\u6ee4\u5217\u8868"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-haskell",children:"filter (>2) [1, 2, 3] -- True\u5c31\u901a\u8fc7\uff0cFalse\u5c31\u53bb\u6389\uff0c\u7ed3\u679c\u662f [3]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"fold",children:"fold"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6298\u53e0"}),(0,r.jsx)(n.br,{}),"\n","\u4f7f\u7528\u4e00\u4e2a\u5904\u7406\u51fd\u6570\u4f9d\u6b21\u9010\u4e2a\u5730\u628a\u5217\u8868\u4e2d\u7684\u6240\u6709\u5143\u7d20\u7ec4\u5408\u6210\u4e3a\u4e00\u4e2a\u503c"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-haskell",children:"-- 0\u662f\u521d\u59cb\u503c\uff0c\u8868\u793a\u7b2c\u4e00\u6b65\u662f0\u548c\u7b2c\u4e00\u4e2a\u6570\u8fdb\u884c\u5904\u7406\n-- \u9700\u8981\u4e00\u4e2ab->a->b\u7c7b\u578b\u7684\u5904\u7406\u51fd\u6570\n\n-- foldl\u4ece\u5de6\u5230\u53f3\uff0c\u7b2c\u4e00\u6b65\u662f0-1\nfoldl (+) 0 [1, 2, 3] -- \u7ed3\u679c\u662f 6\n\n-- foldr\u4ece\u53f3\u5230\u5de6\uff0c\u7b2c\u4e00\u6b65\u662f3-0\uff0c\u7b2c\u4e8c\u6b65\u662f2-3\nfoldr (+) 0 [1, 2, 3] -- \u7ed3\u679c\u662f 6\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-haskell",children:"foldl (||) True (repeat True) -- repeat\u751f\u6210\u65e0\u9650\u5217\u8868\n=> never returns!\n\nfoldr (||) True (repeat True)\n=> True\n\n-- \u4e3a\u4ec0\u4e48\uff1f\n-- foldl = f (f (f init a) b) c\n-- foldr = f a (f b (f c init))\n-- \u53ef\u4ee5\u770b\u5230\uff0cfoldl\u5982\u679c\u8981\u83b7\u5f97\u503c\uff0c\u8981\u904d\u5386\u5230\u5217\u8868\u6700\u540e\u4e00\u4e2a\u624d\u884c\n-- \u800cfoldr\u5728\u7b2c\u4e00\u6b65\u5c31\u76f4\u63a5\u80fd\u5224\u65adTrue\uff08\u56e0\u4e3a\u201c\u6216\u201d\u8868\u8fbe\u5f0f\u53ea\u8981\u4e00\u4e2a\u4e3aTrue\u5c31\u4e3aTrue\uff09\n-- \u6240\u4ee5\uff0c\u907f\u514d\u7528foldl\u800c\u662f\u4f7f\u7528foldl'\n\n-- \u5b83\u4eec\u7684\u5b9e\u73b0\nfoldl :: (a -> b -> a) -> a -> [b] -> a\nfoldl f z0 xs0 = lgo z0 xs0\nwhere\nlgo z [] = z\nlgo z (x:xs) = lgo (f z x) xs -- \u9012\u5f52\u8c03\u7528lgo\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f(f z x)\uff0c\u4e5f\u5c31\u662f\u5f53\u524d\u6b65\u5904\u7406\u8fc7\u540e\u7684\u6570\u636e\n\n-- seq\u662f\u4e2a\u9b54\u6cd5\n-- seq :: a -> b -> b\n-- \u7b2c\u4e00\u4e2a\u53c2\u6570 (a)\uff1a\u8fd9\u662f\u8981\u88ab\u5f3a\u5236\u6c42\u503c\u5230\u5f31\u9996\u8303\u5f0f (WHNF) \u7684\u503c\n-- \u7b2c\u4e8c\u4e2a\u53c2\u6570 (b)\uff1a\u4e00\u65e6\u7b2c\u4e00\u4e2a\u53c2\u6570\u88ab\u6c42\u503c\uff0cseq \u5c06\u8fd4\u56de\u6b64\u53c2\u6570\n\nfoldl' :: (a -> b -> a) -> a -> [b] -> a\nfoldl' f a [] = a\nfoldl' f a (x:xs) = let a' = f a x in a' `seq` foldl' f a' xs\n\nfoldr :: (a -> b -> b) -> b -> [a] -> b\nfoldr _ z [] = z\nfoldr f z (x:xs) = f x (foldr f z xs)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-haskell",children:"-- \u4e00\u4e2a\u795e\u79d8\u7684puzzle\n-- \u4f7f\u7528foldr\u5b9e\u73b0foldl\n-- id\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4f5c\u7528\u662f\u76f4\u63a5\u8f93\u51fa\u53c2\u6570\u672c\u8eab\n\n-- \u67ef\u91cc\u5316combinedFunction\uff0c\u4f7f\u5176\u53d8\u6210\u4e00\u4e2a\u63a5\u6536initial\u53c2\u6570\u7684\u51fd\u6570\nfoldLeft f initial accumulator = combinedFunction accumulator \n  where\n    -- currentFunction\u7b2c\u4e00\u6b65\u662fid\uff0c\u540e\u9762\u662fstep\u7684\u5d4c\u5957\n    --\n    --                                   \u8fd9\u90e8\u5206\u5c31\u662fcurrentFunction   \u8fd9\u90e8\u5206\u5c31\u662f(f previousValue listItem)\n    --                                       vvvvvvvvvvvvvvvvvv                    vvv\n    --                              \\previous_deep -> id(f previous_deep 3)\n    --               \\previous -> (                                         ) (f previous 2)\n    -- \\initial -> (                                                                         ) (f initial 1)\n    -- \u5c31\u662f\u5c06\u6700\u91cc\u5c42\u7684\u8ba1\u7b97\u7ed3\u679c\u4f9d\u8d56\u4e0a\u4e00\u5c42\u7684\u7ed3\u679c\uff0c\u5bfc\u81f4\u6574\u4e2a\u4f9d\u8d56\u94fe\u6761\u7ffb\u8f6c\u8fc7\u6765\u4e86\n    step listItem currentFunction = \\previousValue -> currentFunction (f previousValue listItem)\n    \n    -- \u6b64\u51fd\u6570\u6267\u884c\u5b8c\u8fd4\u56de\u4e00\u4e2a\\previousValue -> ...\u7684\u51fd\u6570\n    -- \u8fd9\u91cc\u7684\u6700\u5916\u5c42previousValue\u5b9e\u9645\u4e0a\u662finitial\uff0c\u6700\u5916\u5c42listItem\u662f\u5217\u8868\u7b2c\u4e00\u4e2a\u5143\u7d20\n    combinedFunction = foldr step id accumulator  -- initial <-\u8fd9\u91cc\u88ab\u67ef\u91cc\u5316\u4e86\uff0c\u5b9e\u53c2\u4f20\u7684\u662finitial\n\n-- \u540c\u7406\nfoldRight f initial accumulator = combinedFunction accumulator\n  where\n    step currentFunction listItem = \\previousValue -> currentFunction (f listItem previousValue)\n    combinedFunction = foldl step id accumulator\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>i});var r=l(6540);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);