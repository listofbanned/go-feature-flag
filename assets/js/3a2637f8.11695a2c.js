"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[9744],{38782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(85893),a=n(11151);const i={sidebar_position:52,title:"Ruby",description:"How to use the OpenFeature Ruby SDK with GO Feature Flag"},o="Ruby provider",l={id:"openfeature_sdk/server_providers/openfeature_ruby",title:"Ruby",description:"How to use the OpenFeature Ruby SDK with GO Feature Flag",source:"@site/versioned_docs/version-v1.34.2/openfeature_sdk/server_providers/openfeature_ruby.md",sourceDirName:"openfeature_sdk/server_providers",slug:"/openfeature_sdk/server_providers/openfeature_ruby",permalink:"/docs/v1.34.2/openfeature_sdk/server_providers/openfeature_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.34.2/openfeature_sdk/server_providers/openfeature_ruby.md",tags:[],version:"v1.34.2",sidebarPosition:52,frontMatter:{sidebar_position:52,title:"Ruby",description:"How to use the OpenFeature Ruby SDK with GO Feature Flag"},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/docs/v1.34.2/openfeature_sdk/server_providers/openfeature_python"},next:{title:".NET",permalink:"/docs/v1.34.2/openfeature_sdk/server_providers/openfeature_dotnet"}},s={},d=[{value:"Functionalities:",id:"functionalities",level:3},{value:"Dependency Setup",id:"dependency-setup",level:2},{value:"Gem Package Manager",id:"gem-package-manager",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Initialize the provider",id:"initialize-the-provider",level:3},{value:"Evaluate a feature flag",id:"evaluate-a-feature-flag",level:3},{value:"Features status",id:"features-status",level:2},{value:"Contributing",id:"contributing",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"ruby-provider",children:"Ruby provider"})}),"\n",(0,r.jsx)("a",{href:"https://github.com/open-feature/ruby-sdk-contrib/tree/main/providers/openfeature-go-feature-flag-provider",children:(0,r.jsx)("img",{src:"https://img.shields.io/gem/v/openfeature-go-feature-flag-provider?color=blue&style=flat-square&logo=ruby",alt:"gem"})}),"\n",(0,r.jsxs)(t.p,{children:["This repository contains the official Ruby OpenFeature provider for accessing your feature flags with ",(0,r.jsx)(t.a,{href:"https://gofeatureflag.org",children:"GO Feature Flag"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In conjuction with the ",(0,r.jsx)(t.a,{href:"https://openfeature.dev/docs/reference/concepts/provider",children:"OpenFeature SDK"})," you will be able\nto evaluate your feature flags in your Ruby applications."]}),"\n",(0,r.jsxs)(t.p,{children:["For documentation related to flags management in GO Feature Flag,\nrefer to the ",(0,r.jsx)(t.a,{href:"https://gofeatureflag.org/docs",children:"GO Feature Flag documentation website"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"functionalities",children:"Functionalities:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Manage the integration of the OpenFeature Ruby SDK and GO Feature Flag relay-proxy."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"dependency-setup",children:"Dependency Setup"}),"\n",(0,r.jsx)(t.h3,{id:"gem-package-manager",children:"Gem Package Manager"}),"\n",(0,r.jsx)(t.p,{children:"Add this line to your application's Gemfile:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"gem 'openfeature-go-feature-flag-provider'\n"})}),"\n",(0,r.jsx)(t.p,{children:"And then execute:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"bundle install\n"})}),"\n",(0,r.jsx)(t.p,{children:"Or install it yourself as:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"gem install openfeature-go-feature-flag-provider\n"})}),"\n",(0,r.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,r.jsx)(t.h3,{id:"initialize-the-provider",children:"Initialize the provider"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"OpenFeature::GoFeatureFlag::Provider"})," needs some options to be created and then set in the OpenFeature SDK."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Option"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Description"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"endpoint"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"(mandatory)"})," The URL to access to the relay-proxy.",(0,r.jsx)("br",{}),(0,r.jsxs)(t.em,{children:["(example: ",(0,r.jsx)(t.code,{children:"https://relay.proxy.gofeatureflag.org/"}),")"]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"headers"})}),(0,r.jsxs)(t.td,{children:["A ",(0,r.jsx)(t.code,{children:"Hash"})," object containing the headers to send to the relay-proxy.",(0,r.jsx)("br",{}),"*(example to send APIKey: ",(0,r.jsx)(t.code,{children:'{"Authorization" => "Bearer my-api-key"}'})]})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["The only required option to create a ",(0,r.jsx)(t.code,{children:"GoFeatureFlagProvider"})," is the URL ",(0,r.jsxs)(t.em,{children:["(",(0,r.jsx)(t.code,{children:"endpoint"}),")"]})," to your GO Feature Flag relay-proxy instance."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ruby",children:'import GOFeatureFlag\nimport OpenFeature\n\n# ...\n\noptions = OpenFeature::GoFeatureFlag::Options.new(endpoint: "http://localhost:1031")\nprovider = OpenFeature::GoFeatureFlag::Provider.new(options: options)\n\nevaluation_context = OpenFeature::SDK::EvaluationContext.new(targeting_key: "9b9450f8-ab5c-4dcf-872f-feda3f6ccb16")\n\nOpenFeature::SDK.configure do |config|\n   config.set_provider(provider)\nend\nclient = OpenFeature::SDK.build_client()\n\nbool_value = client.fetch_boolean_value(\n  flag_key: "my-boolean-flag",\n  default_value: false,\n  evaluation_context: evaluation_context\n)\n\nif bool_value \n  puts "The flag is enabled"\nelse\n  puts "The flag is disabled"\nend\n'})}),"\n",(0,r.jsx)(t.p,{children:"The evaluation context is the way for the client to specify contextual data that GO Feature Flag uses to evaluate the feature flags, it allows to define rules on the flag."}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"targeting_key"})," is mandatory for GO Feature Flag to evaluate the feature flag, it could be the id of a user, a session ID or anything you find relevant to use as identifier during the evaluation."]}),"\n",(0,r.jsx)(t.h3,{id:"evaluate-a-feature-flag",children:"Evaluate a feature flag"}),"\n",(0,r.jsxs)(t.p,{children:["The client is used to retrieve values for the current ",(0,r.jsx)(t.code,{children:"EvaluationContext"}),".\nFor example, retrieving a boolean value for the flag ",(0,r.jsx)(t.strong,{children:'"my-flag"'}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ruby",children:'client = OpenFeature::SDK.build_client()\n\nbool_value = client.fetch_boolean_value(\n  flag_key: "my-boolean-flag",\n  default_value: false,\n  evaluation_context: evaluation_context\n)\n'})}),"\n",(0,r.jsx)(t.p,{children:"GO Feature Flag supports different all OpenFeature supported types of feature flags, it means that you can use all the accessor directly"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ruby",children:"# Bool\nclient.fetch_boolean_value(flag_key: 'my-flag', default_value: false, evaluation_context: evaluation_context)\n\n# String\nclient.fetch_string_value(flag_key: 'my-flag', default_value: \"default\", evaluation_context: evaluation_context)\n\n# Number\nclient.fetch_number_value(flag_key: 'my-flag', default_value: 0, evaluation_context: evaluation_context)\n\n# Object\nclient.fetch_object_value(flag_key: 'my-flag', default_value: {\"default\" => true}, evaluation_context: evaluation_context)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"features-status",children:"Features status"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Status"}),(0,r.jsx)(t.th,{children:"Feature"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"Flag evaluation"}),(0,r.jsx)(t.td,{children:"It is possible to evaluate all the type of flags"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u274c"}),(0,r.jsx)(t.td,{children:"Caching"}),(0,r.jsx)(t.td,{children:"Mechanism is in place to refresh the cache in case of configuration change"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u274c"}),(0,r.jsx)(t.td,{children:"Event Streaming"}),(0,r.jsx)(t.td,{children:"Not supported by the SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u274c"}),(0,r.jsx)(t.td,{children:"Logging"}),(0,r.jsx)(t.td,{children:"Not supported by the SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"Flag Metadata"}),(0,r.jsx)(t.td,{children:"Not supported by the SDK"})]})]})]}),"\n",(0,r.jsxs)("sub",{children:[(0,r.jsx)(t.strong,{children:"Implemented"}),": \u2705 | In-progress: \u26a0\ufe0f | Not implemented yet: \u274c"]}),"\n",(0,r.jsx)(t.h2,{id:"contributing",children:"Contributing"}),"\n",(0,r.jsxs)(t.p,{children:["This project welcomes contributions from the community.\nIf you're interested in contributing, see the ",(0,r.jsx)(t.a,{href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/CONTRIBUTING.md",children:"contributors' guide"})," for some helpful tips."]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var r=n(67294);const a={},i=r.createContext(a);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);