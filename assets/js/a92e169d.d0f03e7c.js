"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=r,u=m["".concat(i,".").concat(f)]||m[f]||d[f]||o;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],c={title:"Global Flags"},i=void 0,s={unversionedId:"global_flags",id:"global_flags",title:"Global Flags",description:"There are some instances where you might want to define a flag once for all of your commands. In this case you can add a global flag to an abstract base Command class. For example,",source:"@site/../docs/global_flags.md",sourceDirName:".",slug:"/global_flags",permalink:"/docs/global_flags",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/global_flags.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1696451636,formattedLastUpdatedAt:"Oct 4, 2023",frontMatter:{title:"Global Flags"},sidebar:"docs",previous:{title:"Flexible Taxonomy",permalink:"/docs/flexible_taxonomy"},next:{title:"Single Command CLI",permalink:"/docs/single_command_cli"}},p={},m=[],d={toc:m},f="wrapper";function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)(f,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are some instances where you might want to define a flag once for all of your commands. In this case you can add a global flag to an abstract base ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," class. For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Command, Flags } from '@oclif/core';\n\nexport abstract class BaseCommand extends Command {\n  static baseFlags = {\n    interactive: Flags.boolean({\n      char: 'i',\n      description: 'Run command in interactive mode',\n    }),\n  };\n}\n")),(0,o.kt)("p",null,"Any command that extends ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseCommand")," will now have an ",(0,o.kt)("inlineCode",{parentName:"p"},"--interactive")," flag on it."))}u.isMDXComponent=!0}}]);