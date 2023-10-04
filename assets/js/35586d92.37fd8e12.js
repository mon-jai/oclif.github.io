"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1160],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9046:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={title:"Plugin Loading"},p=void 0,s={unversionedId:"plugin_loading",id:"plugin_loading",title:"Plugin Loading",description:"Below is a diagram that outlines how a plugin is loaded into the CLI.",source:"@site/../docs/plugin_loading.md",sourceDirName:".",slug:"/plugin_loading",permalink:"/docs/plugin_loading",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/plugin_loading.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1696451636,formattedLastUpdatedAt:"Oct 4, 2023",frontMatter:{title:"Plugin Loading"},sidebar:"docs",previous:{title:"Command Execution",permalink:"/docs/command_execution"},next:{title:"Commands",permalink:"/docs/commands"}},u={},d=[{value:"Plugin Resolution Order",id:"plugin-resolution-order",level:3},{value:"Manifests Improve Performance",id:"manifests-improve-performance",level:3},{value:"Plugin Loading Diagram",id:"plugin-loading-diagram",level:2}],c={toc:d},m="wrapper";function g(e){var n=e.components,l=(0,i.Z)(e,a);return(0,o.kt)(m,(0,r.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Below is a diagram that outlines how a plugin is loaded into the CLI."),(0,o.kt)("p",null,"There are a couple of important takeaways from this diagram:"),(0,o.kt)("h3",{id:"plugin-resolution-order"},"Plugin Resolution Order"),(0,o.kt)("p",null,"Plugins are resolved in the following order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"User plugins (i.e. plugins installed by the users)"),(0,o.kt)("li",{parentName:"ol"},"Dev plugins (i.e. plugins listed under ",(0,o.kt)("inlineCode",{parentName:"li"},"devPlugins"),")"),(0,o.kt)("li",{parentName:"ol"},"Core plugins (i.e. plugins listed under ",(0,o.kt)("inlineCode",{parentName:"li"},"plugins"),")")),(0,o.kt)("h3",{id:"manifests-improve-performance"},"Manifests Improve Performance"),(0,o.kt)("p",null,"When loading a plugin, oclif needs to require each command file in order to get the static properties of the command - the ",(0,o.kt)("inlineCode",{parentName:"p"},"description"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"examples"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"flags"),", etc..."),(0,o.kt)("p",null,"However, oclif can skip this step if the plugin has an ",(0,o.kt)("inlineCode",{parentName:"p"},"oclif.manifest.json")," (generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"oclif manifest"),"). The manifest caches all of these properties so that there's no need to require every single command on every command execution."),(0,o.kt)("h2",{id:"plugin-loading-diagram"},"Plugin Loading Diagram"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"plugin loading",src:t(1944).Z,width:"8787",height:"5576"})))}g.isMDXComponent=!0},1944:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/plugin-loading-63d248baba4db7ba0a9340ef6b0c0856.jpg"}}]);