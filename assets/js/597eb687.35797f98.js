"use strict";(self.webpackChunkd_note=self.webpackChunkd_note||[]).push([[2247],{2223:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var o=s(5893),a=s(1151);const l={},r="\u81ea\u5b9a\u4e49\u7c7b\u578b",t={id:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/8.\u81ea\u5b9a\u4e49\u7c7b\u578b",title:"\u81ea\u5b9a\u4e49\u7c7b\u578b",description:"data",source:"@site/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/8.\u81ea\u5b9a\u4e49\u7c7b\u578b.md",sourceDirName:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell",slug:"/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/8.\u81ea\u5b9a\u4e49\u7c7b\u578b",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/8.\u81ea\u5b9a\u4e49\u7c7b\u578b",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"computerBasicSidebar",previous:{title:"\u5217\u8868\u64cd\u4f5c",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/7.\u5217\u8868\u64cd\u4f5c"},next:{title:"\u6742\u9879",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/99.\u6742\u9879"}},i={},c=[{value:"data",id:"data",level:2},{value:"class",id:"class",level:2},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u7c7b\u578b\u7ea6\u675f",id:"\u7c7b\u578b\u7ea6\u675f",level:3},{value:"type",id:"type",level:2},{value:"newtype",id:"newtype",level:2}];function d(e){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u81ea\u5b9a\u4e49\u7c7b\u578b",children:"\u81ea\u5b9a\u4e49\u7c7b\u578b"}),"\n",(0,o.jsx)(n.h2,{id:"data",children:"data"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u6709\u70b9\u50cfC\u91cc\u9762\u7684struct",(0,o.jsx)(n.br,{}),"\n","\u7528\u6765\u5b9a\u4e49\u6570\u636e\u7684\u7ed3\u6784"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-haskell",children:'data Position = MakePosition Double Double -- MakePosition\u662f\u6784\u9020\u51fd\u6570\nMakePosition 1.5 2 :: Position\n\n-- \u4e2d\u7f00\u6784\u9020\u51fd\u6570\ndata Position = Double :+ Double -- \u5fc5\u987b\u52a0\u5192\u53f7\n1.5 :+ 2 :: Position\n\n-- \u7a7a\u6784\u9020\u51fd\u6570\uff08\u53ef\u4ee5\u89c6\u4e3a\u4e00\u4e2a\u8be5\u7c7b\u578b\u7684\u503c\uff09\ndata Color = Red -- \u6b64\u5904Red\u5c31\u662f\u7a7a\u6784\u9020\u51fd\u6570\n\n-- \u591a\u4e2a\u6784\u9020\u51fd\u6570\ndata Color = Red | Green | Blue\n\n-- \u53c2\u6570\u5316\u7684\u6570\u636e\u7c7b\u578b\ndata UserInfo a b = NoInfo | NameInfo a | AgeInfo b\n\n-- \u8bb0\u5f55\ndata Person\n    = Student\n        { name :: String\n        , age :: Int\n        }\n    | Teacher\n        { name :: String\n        , rank :: String\n        }\n\njohnDoe :: Person\njohnDoe = Student { name = "John Doe", age = 15 } -- \u521b\u5efa\u8bb0\u5f55\n\njohnsName :: String\njohnsName = name johnDoe -- \u8bbf\u95ee\u8bb0\u5f55\u7684\u5b57\u6bb5\n\nolderJohn :: Person\nolderJohn = johnDoe { age = 16 } -- \u66f4\u65b0\u8bb0\u5f55\n\n-- GADTs\uff08\u901a\u7528\u4ee3\u6570\u6570\u636e\u7c7b\u578b\uff09\uff1a\u663e\u5f0f\u7cbe\u786e\u5730\u6307\u5b9a\u4e0d\u540c\u6784\u9020\u51fd\u6570\u7c7b\u578b\ndata Expr a where\n    IntLit   :: Int -> Expr Int\n    BoolLit  :: Bool -> Expr Bool\n    Add      :: Expr Int -> Expr Int -> Expr Int\n'})}),"\n",(0,o.jsx)(n.h2,{id:"class",children:"class"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u7c7b\u578b\u7c7b"}),(0,o.jsx)(n.br,{}),"\n","\u6709\u70b9\u50cfinterface",(0,o.jsx)(n.br,{}),"\n","\u4e3a\u4e00\u7c7b\u6570\u636e\u7c7b\u578b\u5b9a\u4e49\u4e00\u7ec4\u529f\u80fd"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"\u5b9a\u4e49",children:"\u5b9a\u4e49"}),"\n",(0,o.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u7c7b\u578b\u7c7b\u4e0d\u662f\u6570\u636e\u7c7b\u578b\uff0c\u7c7b\u578b\u7c7b\u662f\u4e8b\u5148\u7ea6\u5b9a\u597d\u7684\u4e00\u7ec4\u51fd\u6570",(0,o.jsx)(n.br,{}),"\n","\u7136\u540e\u7528",(0,o.jsx)(n.code,{children:"instance"}),"\u4e3a\u6570\u636e\u7c7b\u578b\u5b9e\u73b0\u8fd9\u4e2a\u7c7b\u578b\u7c7b\u4e2d\u7684\u51fd\u6570\uff08\u4e00\u822c\u6765\u8bf4\u5fc5\u987b\u5b9e\u73b0\u5168\u90e8\u51fd\u6570\uff09"]}),"\n",(0,o.jsxs)(n.p,{children:["\u7c7b\u578b\u7c7b\u4e0d\u4ec5\u4ec5\u662f\u4e3a\u4e86\u8ba9\u591a\u79cd\u6570\u636e\u7c7b\u578b\u9002\u914d\u540c\u4e00\u4e2a\u51fd\u6570",(0,o.jsx)(n.br,{}),"\n","\u66f4\u591a\u7684\u662f\u4e3a\u4e86\u89e3\u51b3\u591a\u6001\u548c\u91cd\u8f7d\u7684\u95ee\u9898"]}),"\n",(0,o.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u7c7b\u578b\u7c7b\u4e2d\u5b9a\u4e49\u7684\u51fd\u6570\u4e5f\u5c5e\u4e8e\u6240\u5904\u6a21\u5757\u7684\u5168\u5c40\u547d\u540d\u7a7a\u95f4\u5185\uff0c\u4e5f\u5c31\u662f\u8bf4\u8ddf\u4f60\u7684\u5176\u4ed6\u51fd\u6570\u4e0d\u80fd\u91cd\u540d",(0,o.jsx)(n.br,{}),"\n","\u800c\u4e14\u7c7b\u578b\u7c7b\u4e2d\u5b9a\u4e49\u7684\u51fd\u6570\u53ea\u80fd\u7531\u7c7b\u578b\u7c7b\u7684\u8bed\u6cd5\u53bb\u7ed1\u5b9a\uff0c\u4e0d\u80fd\u76f4\u63a5\u5728\u5168\u5c40\u7ed1\u5b9a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-haskell",children:'data Color = Red | Green | Blue | Transparent | NoColor\n\nclass Describe a where -- \u5b9a\u4e49Describe\u884c\u4e3a\u8fd9\u4e2a\u7c7b\u578b\u7c7b\uff0c\u8fd9\u91cc\u7684a\u662f\u4efb\u610f\u53ef\u80fd\u7684\u6570\u636e\u7c7b\u578b\n    describe :: a -> String\n    -- \u8fd9\u91cc\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5bf9\u51fd\u6570\u8fdb\u884c\u7ed1\u5b9a\uff0c\u6bd4\u5982describe x = "This is x."\n\ninstance Describe Color where -- \u4e3aColor\u6570\u636e\u7c7b\u578b\u5b9e\u73b0Describe\u7c7b\u578b\u7c7b\uff08\u53ea\u80fd\u7ed1\u5b9aDescribe\u4e2d\u51fa\u73b0\u8fc7\u7684\u51fd\u6570\uff09\n    describe Red = "This is red."\n    describe Green = "This is green."\n    describe Blue = "This is blue."\n    describe _ = "Unknown color."\n'})}),"\n",(0,o.jsx)(n.h3,{id:"\u7c7b\u578b\u7ea6\u675f",children:"\u7c7b\u578b\u7ea6\u675f"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u7ea6\u675f\u67d0\u79cd\u6570\u636e\u7c7b\u578b\u5fc5\u987b\u5b9e\u73b0\u67d0\u4e2a\u7c7b\u578b\u7c7b"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u53ef\u4ee5\u9ad8\u5ea6\u62bd\u8c61\u51fa\u4e00\u79cd\u8bed\u6cd5\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"TypeClass1 a, TypeClass2 b, ... => ActualType\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5c31\u662f\u8bf4\uff0c\u5728\u5de6\u8fb9\u89c4\u5b9a",(0,o.jsx)(n.code,{children:"a"}),"\u662f\u5b9e\u73b0\u4e86",(0,o.jsx)(n.code,{children:"TypeClass1"}),"\u7684\u6570\u636e\u7c7b\u578b\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u5728\u53f3\u8fb9\u4f7f\u7528",(0,o.jsx)(n.code,{children:"a"}),"\u7c7b\u578b"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-haskell",children:"-- \u51fd\u6570\u7b7e\u540d\nfunctionName :: TypeClass1 a => a -> ...\n\n-- \u6570\u636e\u7c7b\u578b\u5b9a\u4e49\ndata DataType a where\n    ConstructorName :: TypeClass1 a => a -> DataType a\n\n-- \u7c7b\u578b\u7c7b\u5b9a\u4e49\nclass TypeClass1 a => TypeClass2 a where\n    ...\n\n-- \u7c7b\u578b\u5b9e\u4f8b\u5b9a\u4e49\ninstance (TypeClass1 a, TypeClass2 a) => TypeClass3 [a] where\n    ...\n"})}),"\n",(0,o.jsx)(n.h2,{id:"type",children:"type"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u7c7b\u578b\u522b\u540d"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-haskell",children:"type Position = (Double, Double)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"newtype",children:"newtype"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u5b9a\u4e49\u65b0\u7684\u7c7b\u578b\uff0c\u4f46\u662f\u53ea\u6709\u4e00\u4e2a\u6784\u9020\u51fd\u6570",(0,o.jsx)(n.br,{}),"\n","\u7528\u4e8e\u521b\u5efa\u53ea\u6709\u4e00\u4e2a\u6210\u5206\u7684\u65b0\u7c7b\u578b\uff0c\u6ca1\u6709\u8fd0\u884c\u65f6\u7684\u989d\u5916\u6210\u672c",(0,o.jsx)(n.br,{}),"\n","\u9002\u5408\u4e8e\u5f53\u4f60\u60f3\u8ba9\u67d0\u4e2a\u7c7b\u578b\u6709\u7279\u6b8a\u542b\u4e49\u4f46\u53c8\u4e0d\u60f3\u589e\u52a0\u989d\u5916\u7684\u5904\u7406\u6210\u672c\u65f6\u4f7f\u7528"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-haskell",children:"newtype Position = MakePosition (Double, Double)\nMakePosition (1.5, 2) :: Position\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>r});var o=s(7294);const a={},l=o.createContext(a);function r(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);