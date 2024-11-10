"use strict";(self.webpackChunkd_note=self.webpackChunkd_note||[]).push([[5215],{7085:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"notes/\u7b14\u8bb0/\u6846\u67b6/SpringBoot/@\u5e8f\u8a00/\u5e8f\u8a00","title":"SpringBoot","description":"SpringBoot\u5b98\u7f51","source":"@site/docs/notes/\u7b14\u8bb0/\u6846\u67b6/SpringBoot/@\u5e8f\u8a00/\u5e8f\u8a00.md","sourceDirName":"notes/\u7b14\u8bb0/\u6846\u67b6/SpringBoot/@\u5e8f\u8a00","slug":"/notes/\u7b14\u8bb0/\u6846\u67b6/SpringBoot/@\u5e8f\u8a00/\u5e8f\u8a00","permalink":"/DNote/docs/notes/\u7b14\u8bb0/\u6846\u67b6/SpringBoot/@\u5e8f\u8a00/\u5e8f\u8a00","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"frameworkSidebar","previous":{"title":"0.\u5f00\u59cb","permalink":"/DNote/docs/notes/\u7b14\u8bb0/\u6846\u67b6/Servlet/0.\u5f00\u59cb"},"next":{"title":"1.\u63a7\u5236\u5668","permalink":"/DNote/docs/notes/\u7b14\u8bb0/\u6846\u67b6/SpringBoot/\u57fa\u7840/1.\u63a7\u5236\u5668"}}');var s=r(74848),t=r(28453);const o={},l="SpringBoot",c={},a=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u9879\u76ee\u7ed3\u6784",id:"\u9879\u76ee\u7ed3\u6784",level:2},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"MVC\u6846\u67b6",id:"mvc\u6846\u67b6",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"springboot",children:"SpringBoot"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://spring.io",children:"SpringBoot\u5b98\u7f51"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u6700\u6d41\u884c\u7684Web\u540e\u7aef\u6846\u67b6\uff08\u4e0d\u4ec5\u9650\u4e8eWeb\u5e94\u7528\uff09\uff0c\u57fa\u4e8eSpring",(0,s.jsx)(e.br,{}),"\n","\u5728Spring\u4e0a\u5f15\u5165\u4e86\u201c",(0,s.jsx)(e.a,{href:"../../../%E5%85%B6%E4%BB%96/%E7%BC%96%E7%A8%8B%E6%A6%82%E5%BF%B5#%E7%BA%A6%E5%AE%9A%E4%BC%98%E4%BA%8E%E9%85%8D%E7%BD%AE",children:"\u7ea6\u5b9a\u4f18\u4e8e\u914d\u7f6e"}),"\u201d\u7684\u7406\u5ff5\uff0c\u7b80\u5316\u4e86\u914d\u7f6e\u8fc7\u7a0b",(0,s.jsx)(e.br,{}),"\n","\u5b83\u5305\u542b\u4e86\u9ed8\u8ba4\u914d\u7f6e\uff0c\u5e76\u4e14\u63d0\u4f9b\u4e86Starters\uff08\u542f\u52a8\u5668\uff09\uff0c\u8fd9\u4e9bstarter\u4f1a\u81ea\u52a8\u5bfc\u5165\u9879\u76ee\u6240\u9700\u7684\u4f9d\u8d56\u96c6",(0,s.jsx)(e.br,{}),"\n","\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0\u5c11\u91cf\u7684\u914d\u7f6e\u5c5e\u6027\u6765\u8986\u76d6\u9ed8\u8ba4\u914d\u7f6e\uff0c\u800c\u4e0d\u662f\u4ece\u96f6\u5f00\u59cb\u7f16\u5199\u6240\u6709\u914d\u7f6e",(0,s.jsx)(e.br,{}),"\n","\u5185\u7f6e\u4e86\u5d4c\u5165\u5f0f\u7684Servlet\u5bb9\u5668\uff0c\u7a0b\u5e8f\u53ef\u4ee5\u88ab\u6253\u5305\u6210\u53ef\u6267\u884c\u7684JAR\u76f4\u63a5\u8fd0\u884c\uff0c\u65e0\u9700\u989d\u5916\u7684\u90e8\u7f72\u6b65\u9aa4"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5Gradle\u4e3a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-groovy",children:"plugins {\n    id 'java'\n    id 'org.springframework.boot' version '3.1.5'\n    id 'io.spring.dependency-management' version '1.1.3'\n}\n\ndependencies {\n    implementation 'org.springframework.boot:spring-boot-starter-web'\n    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'\n    testImplementation 'org.springframework.boot:spring-boot-starter-test'\n    developmentOnly 'org.springframework.boot:spring-boot-devtools'\n    ...\n    // \u9700\u8981\u4ec0\u4e48\u5e93\u5c31\u5f15\u5165\u4ec0\u4e48\u5e93\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(e.a,{href:"https://start.spring.io",children:"Spring Initializr"}),"\u6765\u751f\u6210\u9879\u76ee\u6846\u67b6"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9879\u76ee\u7ed3\u6784",children:"\u9879\u76ee\u7ed3\u6784"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-txt",children:"\u251c\u2500\u2500 ...                                 // \u6784\u5efa\u5de5\u5177\u3001\u8bc1\u4e66\u3001README\u7b49\n\u2502\xa0 \n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 main\n    \u2502\xa0\xa0 \u251c\u2500\u2500 java\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 net\n    \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 example\n    \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 Example.java\n    \u2502\xa0\xa0 \u2502\xa0\n    \u2502\xa0\xa0 \u2514\u2500\u2500 resources\n    \u2502\xa0\xa0     \u251c\u2500\u2500 templates               // \u89c6\u56fe\u6a21\u677f\n    \u2502\xa0\xa0     \u251c\u2500\u2500 static                  // \u9759\u6001\u8d44\u6e90\n    \u2502\xa0\xa0     \u2514\u2500\u2500 application.properties  // SpringBoot\u7684\u914d\u7f6e\u6587\u4ef6\n    \u2502\xa0\xa0       \n    \u2514\u2500\u2500 test\n        \u2514\u2500\u2500 java\n            \u2514\u2500\u2500 net\n                \u2514\u2500\u2500 example\n                    \u2514\u2500\u2500 ExampleTest.java\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6982\u5ff5",children:"\u6982\u5ff5"}),"\n",(0,s.jsx)(e.h3,{id:"mvc\u6846\u67b6",children:"MVC\u6846\u67b6"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["Model-View-Controller",(0,s.jsx)(e.br,{}),"\n","\u6a21\u578b-\u89c6\u56fe-\u63a7\u5236\u5668"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"MVC\u793a\u4f8b\u56fe",src:r(34768).A+"",width:"810",height:"427"})}),"\n",(0,s.jsx)(e.p,{children:"Spring\u4f7f\u7528\u7684Web\u6846\u67b6\u662fSpring MVC\uff0c\u903b\u8f91\u5982\u56fe"}),"\n",(0,s.jsx)(e.p,{children:"\u7b80\u5355\u6765\u8bf4MVC\u7684\u529f\u80fd\u5206\u522b\u662f\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"\u6a21\u578b"}),"\uff1a\u76f4\u63a5\u4e0e\u540e\u9762\u7684\u6570\u636e\u4ea4\u4e92"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"\u89c6\u56fe"}),"\uff1a\u5c31\u662f\u7528\u6237\u76f4\u63a5\u770b\u5230\u7684\u90e8\u5206"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"\u63a7\u5236\u5668"}),"\uff1a\u5904\u7406\u8bf7\u6c42"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u91cc\u6709\u4e24\u79cd\u60c5\u51b5\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"\u524d\u540e\u5206\u79bb"}),"\uff1a\u524d\u7aef\u548c\u540e\u7aef\u5206\u522b\u72ec\u7acb\u5f00\u53d1\uff0c\u901a\u8fc7API\u8fdb\u884c\u4ea4\u4e92\uff0c\u89c6\u56fe\u7531\u524d\u7aef\u6e32\u67d3"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"\u524d\u540e\u4e0d\u5206\u79bb"})," \uff1a\u524d\u7aef\u548c\u540e\u7aef\u4e00\u8d77\u5f00\u53d1\uff0c\u540e\u7aef\u76f4\u63a5\u8fd4\u56deHTML\uff0c\u89c6\u56fe\u7531\u540e\u7aef\u6e32\u67d3"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u542f\u52a8",children:"\u542f\u52a8"}),"\n",(0,s.jsxs)(e.p,{children:["\u4f7f\u7528",(0,s.jsx)(e.a,{href:"https://start.spring.io",children:"Spring Initializr"}),"\u751f\u6210\u597d\u9879\u76ee\u6846\u67b6\u540e\u4f1a\u6709\u8fd9\u4e48\u4e00\u4e2a\u4e3b\u7c7b"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"@SpringBootApplication // SpringBoot\u9879\u76ee\u7684\u4e3b\u7c7b\u5fc5\u987b\u5e26\u8fd9\u4e2a\u6ce8\u89e3\npublic class DemoApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(DemoApplication.class, args);\n    }\n\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5148\u522b\u53bb\u7ba1\u4ed6"}),"\n",(0,s.jsx)(e.p,{children:"\u65b0\u5efa\u4e00\u4e2aController\u7c7b\uff08\u524d\u63d0\u662f\u5fc5\u987b\u6709spring-boot-starter-web\u4f9d\u8d56\uff09"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'@RestController\npublic class ControllerDemo {\n    @GetMapping("/")\n    public String index() {\n        return "index";\n    }\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u7136\u540e\u76f4\u63a5\u70b9gradle\u7684",(0,s.jsx)(e.code,{children:"bootRun"}),"\u4efb\u52a1\uff0c\u8bbf\u95ee",(0,s.jsx)(e.code,{children:"http://localhost:8080/"}),"\u5c31\u53ef\u4ee5\u770b\u5230",(0,s.jsx)(e.code,{children:"index"}),"\u4e86"]})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},34768:(n,e,r)=>{r.d(e,{A:()=>i});const i=r.p+"assets/images/MVC\u793a\u4f8b\u56fe-9c47effd1387f8f9c8a4c8c903220ccd.png"},28453:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>l});var i=r(96540);const s={},t=i.createContext(s);function o(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);