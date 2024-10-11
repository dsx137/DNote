"use strict";(self.webpackChunkd_note=self.webpackChunkd_note||[]).push([[2524],{3511:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var t=i(4848),d=i(8453);const s={},r="\u5806",a={id:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u6570\u636e\u7ed3\u6784/\u5806",title:"\u5806",description:"\u4f18\u5148\u961f\u5217",source:"@site/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u6570\u636e\u7ed3\u6784/\u5806.md",sourceDirName:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u6570\u636e\u7ed3\u6784",slug:"/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u6570\u636e\u7ed3\u6784/\u5806",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u6570\u636e\u7ed3\u6784/\u5806",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"computerBasicSidebar",previous:{title:"2.\u56fe",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u6570\u636e\u7ed3\u6784/2.\u56fe"},next:{title:"\u6570\u5b57\u7535\u8def",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u6570\u5b57\u7535\u8def/@\u5e8f\u8a00"}},l={},o=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u5b58\u50a8\u7ed3\u6784",id:"\u5b58\u50a8\u7ed3\u6784",level:2},{value:"\u4e8c\u53c9\u5806",id:"\u4e8c\u53c9\u5806",level:3},{value:"D-\u5806",id:"d-\u5806",level:3},{value:"\u6590\u6ce2\u90a3\u5951\u5806",id:"\u6590\u6ce2\u90a3\u5951\u5806",level:3},{value:"\u4e8c\u9879\u5f0f\u5806",id:"\u4e8c\u9879\u5f0f\u5806",level:3},{value:"\u4f18\u5148\u961f\u5217",id:"\u4f18\u5148\u961f\u5217",level:2},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49-1",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u5806",children:"\u5806"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://blog.csdn.net/ACM_hades/article/details/89671679",children:"\u4f18\u5148\u961f\u5217"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5b9a\u4e49",children:"\u5b9a\u4e49"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u7236\u8282\u70b9"}),"\u4e00\u5b9a\u662f\u5176",(0,t.jsx)(n.strong,{children:"\u6240\u6709\u5b50\u5b59\u8282\u70b9"}),"\u7684\u6700\u503c\u7684\u4e00\u9897\u5b8c\u5168\u4e8c\u53c9\u6811\uff08\u8be5\u5b9a\u4e49\u5f85\u8865\u5145\uff0c\u5b58\u7591\uff09"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5b58\u50a8\u7ed3\u6784",children:"\u5b58\u50a8\u7ed3\u6784"}),"\n",(0,t.jsx)(n.h3,{id:"\u4e8c\u53c9\u5806",children:"\u4e8c\u53c9\u5806"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Heap {\npublic:\n    int* heap;\n    int size;\n    Heap(int data[], int size) {\n        this->size = 0;\n        heap = new int[size];\n        for (int i = 0;i < size;i++)\n            this->push(data[i]);\n    }\n    void push(int x) {\n        int index = size++;\n        while (index > 0) {\n            int parentIndex = (index + 1) / 2 - 1;\n            if (heap[parentIndex] < x) break;\n            heap[index] = heap[parentIndex];\n            index = parentIndex;\n        }\n        heap[index] = x;\n    }\n    int pop() {\n        int result = heap[0];//\u83b7\u53d6\u6700\u503c\n        int x = heap[--size];//\u867d\u7136\u6ca1\u6709\u5bf9\u6839\u8282\u70b9\u76f4\u63a5\u8d4b\u503c\uff0c\u4f46\u662f\u4e0b\u9762\u7b49\u6548\u4e3a\u6839\u8282\u70b9\u503c\u4e3ax\n        int index = 0;\n        //\u548c\u5b50\u8282\u70b9\u6bd4\u8f83\u5927\u5c0f\uff0c\u4e0d\u65ad\u5411\u4e0b\u7ef4\u62a4\u5806\n        while ((index + 1) * 2 <= size) {\n            int lIndex = (index + 1) * 2 - 1;\n            int rIndex = (index + 1) * 2;\n            int MinIndex = lIndex;\n            if (rIndex <= size && heap[rIndex] < heap[MinIndex])\n                MinIndex = rIndex;\n            if (heap[MinIndex] >= x) break;\n            heap[index] = heap[MinIndex];\n            index = MinIndex;\n        }\n        heap[index] = x;\n        return result;\n    }\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"d-\u5806",children:"D-\u5806"}),"\n",(0,t.jsx)(n.h3,{id:"\u6590\u6ce2\u90a3\u5951\u5806",children:"\u6590\u6ce2\u90a3\u5951\u5806"}),"\n",(0,t.jsx)(n.h3,{id:"\u4e8c\u9879\u5f0f\u5806",children:"\u4e8c\u9879\u5f0f\u5806"}),"\n",(0,t.jsx)(n.h2,{id:"\u4f18\u5148\u961f\u5217",children:"\u4f18\u5148\u961f\u5217"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u9879\u7f16\u8f91\u4e0d\u5b8c\u5168"}),"\n",(0,t.jsx)(n.h3,{id:"\u5b9a\u4e49-1",children:"\u5b9a\u4e49"}),"\n",(0,t.jsx)(n.p,{children:"\u53ef\u4ee5\u63d2\u5165\u65b0\u5143\u7d20\n\u53ef\u4ee5\u5feb\u901f\u53d6\u51fa\u6240\u6709\u5143\u7d20\u7684\u6700\u503c"})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(6540);const d={},s=t.createContext(d);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);