"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[88217],{17108:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=o(85893),n=o(11151);const a={},s="OpenFeature Remote Evaluation Protocol (OFREP)",i={id:"experimental/ofrep",title:"OpenFeature Remote Evaluation Protocol (OFREP)",description:"Experimental",source:"@site/versioned_docs/version-v1.28.2/experimental/ofrep.md",sourceDirName:"experimental",slug:"/experimental/ofrep",permalink:"/docs/v1.28.2/experimental/ofrep",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.28.2/experimental/ofrep.md",tags:[],version:"v1.28.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Frequently Asked Questions",permalink:"/docs/v1.28.2/faq"}},l={},c=[{value:"How to test it?",id:"how-to-test-it",level:2},{value:"Want to start even faster?",id:"want-to-start-even-faster",level:3}];function p(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"openfeature-remote-evaluation-protocol-ofrep",children:"OpenFeature Remote Evaluation Protocol (OFREP)"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{src:"https://img.shields.io/badge/Status-Experimental-red.svg",alt:"Experimental"}),(0,r.jsx)(t.br,{}),"\n","\u26a0\ufe0f Note that this a work in progress and the protocol is subject to change. \u26a0\ufe0f"]}),"\n",(0,r.jsx)(t.p,{children:"OpenFeature Remote Flag Evaluation Protocol is an API specification for feature flagging that allows the use of generic\nproviders to connect to any feature flag management systems that supports the protocol."}),"\n",(0,r.jsx)(t.p,{children:"Currently, the protocol is in the early stages of development and is not yet ready for production use, but GO Feature Flag\nis supporting the protocol and is the first implementation of the protocol.\nWe are part of the leading team in the protocol, and we try to follow the specification during the early stages of the protocol\nto allow people to try it and be able to develop the providers."}),"\n",(0,r.jsx)(t.h2,{id:"how-to-test-it",children:"How to test it?"}),"\n",(0,r.jsxs)(t.p,{children:["The OFREP implementation is part of the GO Feature Flag Relay Proxy.\nWe have a new API endpoints ",(0,r.jsx)(t.code,{children:"/ofrep/v1/evaluate/flags/{key}"})," and ",(0,r.jsx)(t.code,{children:"/ofrep/v1/evaluate/flags"})," that you can use to test the protocol."]}),"\n",(0,r.jsxs)(t.p,{children:["You just have to start the GO Feature Flag Relay Proxy (starting from version ",(0,r.jsx)(t.code,{children:"v1.24.0"}),") and use the API to evaluate your flags.\nFor this, follow the instruction on how to use the relay-proxy ",(0,r.jsx)(t.a,{href:"/docs/v1.28.2/relay_proxy/getting_started",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"want-to-start-even-faster",children:"Want to start even faster?"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"curl https://gist.githubusercontent.com/thomaspoignant/181a067291a04bd1fbb55468629625d2/raw/eacfc2ae1036c1cfef669b41ec7b54c119639c0c/goff-proxy.yaml -o goff-proxy.yaml\ndocker run -p 1031:1031 -v $(pwd)/goff-proxy.yaml:/goff/goff-proxy.yaml thomaspoignant/go-feature-flag:latest\n"})}),"\n",(0,r.jsx)(t.p,{children:"This will launch a GO Feature Flag Relay Proxy with a configuration file that will retrieve the flags from the test server."}),"\n",(0,r.jsxs)(t.p,{children:["Swagger is enabled, so you can directly go to ",(0,r.jsx)(t.a,{href:"http://localhost:1031/swagger/index.html",children:"http://localhost:1031/swagger/index.html"})," to test the OFREP endpoints (the API Key to use is ",(0,r.jsx)(t.code,{children:"apikey1"}),")."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>s});var r=o(67294);const n={},a=r.createContext(n);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);