"use strict";(self.webpackChunkd_note=self.webpackChunkd_note||[]).push([[85],{1340:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>i});var r=t(4848),o=t(8453);const s={},l="\u6742\u9879",d={id:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u73b0\u4ee3C++/\u6742\u9879",title:"\u6742\u9879",description:"\u627e\u4e0d\u5230\u5730\u65b9\u653e\u4e86",source:"@site/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u73b0\u4ee3C++/\u6742\u9879.md",sourceDirName:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u73b0\u4ee3C++",slug:"/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u73b0\u4ee3C++/\u6742\u9879",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u73b0\u4ee3C++/\u6742\u9879",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"computerBasicSidebar",previous:{title:"\u53f3\u503c\u5f15\u7528",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u73b0\u4ee3C++/\u53f3\u503c\u5f15\u7528"},next:{title:"\u667a\u80fd\u6307\u9488",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u73b0\u4ee3C++/\u667a\u80fd\u6307\u9488"}},c={},i=[{value:"new",id:"new",level:2},{value:"operator new(operator new[])/operator delete(operator delete[])",id:"operator-newoperator-newoperator-deleteoperator-delete",level:3},{value:"placement new",id:"placement-new",level:3},{value:"new operator/delete operator",id:"new-operatordelete-operator",level:3},{value:"nullptr",id:"nullptr",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u6742\u9879",children:"\u6742\u9879"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u627e\u4e0d\u5230\u5730\u65b9\u653e\u4e86"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"new",children:"new"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"new"}),"\u5173\u952e\u5b57\u672c\u8eab\u5e76\u4e0d\u662f\u73b0\u4ee3\u5185\u5bb9\uff0c\u8fd9\u91cc\u8bb2\u7684\u662f\u73b0\u4ee3\u7684\u7279\u6027"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"operator-newoperator-newoperator-deleteoperator-delete",children:"operator new(operator new[])/operator delete(operator delete[])"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5206\u914d\u5185\u5b58\uff0c\u76f8\u5f53\u4e8eC\u4e2d\u7684",(0,r.jsx)(n.code,{children:"malloc"}),"\uff0c\u6784\u9020\u51fd\u6570\u4e0d\u4f1a\u88ab\u8c03\u7528\uff08\u4e0d\u4f1a\u521d\u59cb\u5316\uff09"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://blog.csdn.net/liugan528/article/details/125437433",children:"\u56db\u4e07\u5b57\u957f\u6587\u8bf4operator new & operator delete"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"std::string* s1=(std::string*)operator new(sizeof(std::string));//\u5206\u914d\u5185\u5b58\nstd::string* s2=(std::string*)operator new[](sizeof(std::string)*10);//\u5206\u914d\u5185\u5b58\uff08\u6570\u7ec4\uff09\noperator delete(s1);//\u91ca\u653e\u5185\u5b58\noperator delete[](s2);//\u91ca\u653e\u5185\u5b58\uff08\u6570\u7ec4\uff09\n"})}),"\n",(0,r.jsx)(n.h3,{id:"placement-new",children:"placement new"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728\u7528\u6237\u6307\u5b9a\u7684\u5185\u5b58\u4f4d\u7f6e\u4e0a\uff08\u5df2\u7ecf\u9884\u5148\u5206\u914d\u597d\u7684\u5185\u5b58\uff09\u6784\u5efa\u65b0\u7684\u5bf9\u8c61"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4ec0\u4e48\u610f\u601d\uff1f\u53ef\u80fd\u6709\u70b9\u8ff7\u832b\uff1f",(0,r.jsx)(n.br,{}),"\n","\u53ef\u4ee5\u7528operator new\u5206\u914d\u5185\u5b58\uff0c\u7136\u540e\u7528Placement New\u6784\u9020\u5bf9\u8c61\uff08\u521d\u59cb\u5316\uff09"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'int main()\n{\n    std::string* s1 = (std::string*)malloc(sizeof(std::string));\n    std::string* s2 = new(s1) std::string("hello world");//\u8fd9\u91cc\u540cnew operator/delete operator\u4e2d\u7684\u6784\u9020\u8c03\u7528\u60c5\u51b5\n    std::cout << *s1 << std::endl;//\u8f93\u51fahello world\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"new-operatordelete-operator",children:"new operator/delete operator"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u5206\u914d\u5185\u5b58\u5e76\u521d\u59cb\u5316"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5b9e\u9645\u4e0a\u662f",(0,r.jsx)(n.code,{children:"operator new"}),"\u548c",(0,r.jsx)(n.code,{children:"placement new"}),"\u7684\u7ed3\u5408"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'std::string* s1=new std::string();//\u5206\u914d\u5185\u5b58\u5e76\u8c03\u7528\u9ed8\u8ba4\u6784\u9020\nstd::string* s1=new std::string("hello world");//\u6709\u53c2\u6784\u9020\nstd::string* s3=new std::string;//\u5206\u914d\u5185\u5b58\u5e76\u8c03\u7528\u9ed8\u8ba4\u6784\u9020\uff0c\u4f46\u662f\u8001\u7248\u672c\u7f16\u8bd1\u5668\u53ef\u80fd\u4e0d\u4f1a\u8c03\u7528\u6784\u9020\uff08\u4e0d\u4f1a\u521d\u59cb\u5316\uff09\ndelete s1,s2,s3;//\u91ca\u653e\u5185\u5b58\n'})}),"\n",(0,r.jsx)(n.h2,{id:"nullptr",children:"nullptr"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u7a7a\u6307\u9488"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["C\u4e2d\u6709",(0,r.jsx)(n.code,{children:"NULL"}),"\uff0c\u662f\u4e00\u4e2a\u5b8f\u5b9a\u4e49\uff0c\u901a\u5e38\u662f0\uff08",(0,r.jsx)(n.code,{children:"#define NULL 0"}),"\uff09",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"NULL"}),"\u7684\u7c7b\u578b\u4e0d\u660e\u786e\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e00\u4e9b\u95ee\u9898\uff08\u6bd4\u5982\u7c7b\u578b\u8f6c\u6362\uff09"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'//\u4e00\u79cdNULL\u4f1a\u51fa\u9519\u7684\u60c5\u51b5\nvoid NumOrPointer(int a){\n    std::cout<<"int"<<std::endl;\n}\nvoid NumOrPointer(int* a){\n    std::cout<<"pointer"<<std::endl;\n}\n\nint main(){\n    NumOrPointer(NULL);//\u8f93\u51faint\n    NumOrPointer(nullptr);//\u8f93\u51fapointer\n    return 0;\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"nullptr"}),"\u53ef\u4ee5\u88ab\u8f6c\u6362\u4e3a\u4efb\u4f55\u6307\u9488\u7c7b\u578b\uff0c\u800c\u4e14\u4e0d\u4f1a\u88ab\u8f6c\u6362\u4e3a\u6574\u578b\uff08",(0,r.jsx)(n.code,{children:"nullptr"}),"\u7684\u7c7b\u578b\u662f",(0,r.jsx)(n.code,{children:"nullptr_t"}),"\uff09",(0,r.jsx)(n.br,{}),"\n","\u6240\u4ee5\u5728\u8868\u793a\u7a7a\u6307\u9488\u7684\u65f6\u5019\u5c3d\u91cf\u4f7f\u7528",(0,r.jsx)(n.code,{children:"nullptr"}),"\u800c\u975e",(0,r.jsx)(n.code,{children:"NULL"})]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var r=t(6540);const o={},s=r.createContext(o);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);