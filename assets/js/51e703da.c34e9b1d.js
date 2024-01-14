"use strict";(self.webpackChunkd_note=self.webpackChunkd_note||[]).push([[2054],{6866:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var t=s(5893),o=s(1151);const r={},c="\u6761\u4ef6\u8bed\u53e5",i={id:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/6.\u6761\u4ef6\u8bed\u53e5",title:"\u6761\u4ef6\u8bed\u53e5",description:"if ... then ... else ...",source:"@site/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/6.\u6761\u4ef6\u8bed\u53e5.md",sourceDirName:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell",slug:"/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/6.\u6761\u4ef6\u8bed\u53e5",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/6.\u6761\u4ef6\u8bed\u53e5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"noteSidebar",previous:{title:"\u6a21\u5f0f\u5339\u914d",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/5.\u6a21\u5f0f\u5339\u914d"},next:{title:"\u5217\u8868\u64cd\u4f5c",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/7.\u5217\u8868\u64cd\u4f5c"}},l={},a=[{value:"if ... then ... else ...",id:"if--then--else-",level:2},{value:"case ... of ...",id:"case--of-",level:2},{value:"guard",id:"guard",level:2},{value:"\u4e3e\u4e2a\u4f8b\u5b50",id:"\u4e3e\u4e2a\u4f8b\u5b50",level:2}];function d(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u6761\u4ef6\u8bed\u53e5",children:"\u6761\u4ef6\u8bed\u53e5"}),"\n",(0,t.jsx)(n.h2,{id:"if--then--else-",children:"if ... then ... else ..."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-haskell",children:'describeNumber :: Int -> String\ndescribeNumber x = if x > 0\n    then "Positive"\n    else if x < 0\n        then "Negative"\n        else "Zero"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"case--of-",children:"case ... of ..."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u652f\u6301\u6a21\u5f0f\u5339\u914d"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-haskell",children:'describeOddEven :: Int -> String\ndescribeOddEven n = case n `mod` 2 of\n    0 -> "Even"\n    1 -> "Odd"\n    _ -> "This shouldn\'t happen for integers!"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"guard",children:"guard"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"if ... then ... else ... \u7684\u6269\u5c55"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"otherwise"}),"\u5e76\u4e0d\u5c5e\u4e8eguard\u8bed\u6cd5\uff0c\u800c\u662f",(0,t.jsx)(n.code,{children:"True"}),"\u7684\u7ed1\u5b9a\uff08\u4e5f\u5c31\u662f\u8bf4",(0,t.jsx)(n.code,{children:"otherwise"}),"\u5c31\u662f",(0,t.jsx)(n.code,{children:"True"}),"\uff09"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-haskell",children:'describeNumber :: Int -> String\ndescribeNumber x\n    | x > 0     = "Positive"\n    | x < 0     = "Negative"\n    | otherwise = "Zero"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u4e3e\u4e2a\u4f8b\u5b50",children:"\u4e3e\u4e2a\u4f8b\u5b50"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-haskell",children:"-- \u6df7\u5408\u4f7f\u7528\u4e09\u79cd\u8bed\u6cd5\n\n-- \u5b9a\u4e49\u4e0d\u540c\u7684\u7535\u5f71\u7c7b\u578b\ndata MovieType = Standard | ThreeD | IMAX\n\n-- \u5b9a\u4e49\u4e0d\u540c\u7684\u96f6\u98df\u9009\u9879\ndata Snack = Popcorn | Soda | Combo\n\n-- \u8ba1\u7b97\u7535\u5f71\u548c\u96f6\u98df\u7684\u603b\u4ef7\ncalculatePrice :: MovieType -> Maybe Snack -> Int\ncalculatePrice movieType snackOption = moviePrice + snackPrice\n  where\n    -- \u6839\u636e\u7535\u5f71\u7c7b\u578b\u8ba1\u7b97\u7535\u5f71\u7968\u4ef7\n    moviePrice = case movieType of\n      Standard -> 10   -- \u6807\u51c6\u7535\u5f71\u7968\u4ef7\u4e3a10\n      ThreeD   -> 15   -- 3D\u7535\u5f71\u7968\u4ef7\u4e3a15\n      IMAX     -> 20   -- IMAX\u7535\u5f71\u7968\u4ef7\u4e3a20\n\n    -- \u6839\u636e\u96f6\u98df\u9009\u9879\u8ba1\u7b97\u96f6\u98df\u4ef7\u683c\n    snackPrice \n      | Just Popcorn <- snackOption = 5        -- \u7206\u7c73\u82b1\u4ef7\u683c\u4e3a5\n      | Just Soda     <- snackOption = 3       -- \u6c7d\u6c34\u4ef7\u683c\u4e3a3\n      | Just Combo    <- snackOption = \n          if movieType == IMAX \n            then 5                             -- \u5982\u679c\u9009\u62e9IMAX\u7535\u5f71\uff0c\u5957\u9910\u4ef7\u683c\u4e3a5\n            else 7                             -- \u5176\u4ed6\u7535\u5f71\u7c7b\u578b\uff0c\u5957\u9910\u4ef7\u683c\u4e3a7\n      | otherwise                    = 0       -- \u6ca1\u6709\u9009\u62e9\u96f6\u98df\uff0c\u4ef7\u683c\u4e3a0\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>c});var t=s(7294);const o={},r=t.createContext(o);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);