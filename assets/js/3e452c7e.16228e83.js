"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[637],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=i(t),f=a,u=p["".concat(l,".").concat(f)]||p[f]||d[f]||s;return t?r.createElement(u,o(o({ref:n},m),{},{components:t})):r.createElement(u,o({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var i=2;i<s;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3562:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=t(7462),a=t(3366),s=(t(7294),t(3905)),o=["components"],c={title:"Custom Base Class"},l=void 0,i={unversionedId:"base_class",id:"base_class",title:"Custom Base Class",description:"Use inheritance to share functionality between common commands. Here is an example of a command base class that has some common shared flags.",source:"@site/../docs/base_class.md",sourceDirName:".",slug:"/base_class",permalink:"/docs/base_class",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/base_class.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1691080055,formattedLastUpdatedAt:"Aug 3, 2023",frontMatter:{title:"Custom Base Class"},sidebar:"docs",previous:{title:"NSIS Installer Customization",permalink:"/docs/nsis-installer_customization"},next:{title:"Prompting",permalink:"/docs/prompting"}},m={},p=[],d={toc:p},f="wrapper";function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,s.kt)(f,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Use inheritance to share functionality between common commands. Here is an example of a command base class that has some common shared flags."),(0,s.kt)("p",null,"For large CLIs with multiple plugins, it's useful to put this base class into its own npm package to be shared."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/baseCommand.ts\nimport {Command, Flags, Interfaces} from '@oclif/core'\n\nenum LogLevel {\n  debug = 'debug',\n  info = 'info',\n  warn = 'warn',\n  error = 'error',\n}\n\nexport type Flags<T extends typeof Command> = Interfaces.InferredFlags<typeof BaseCommand['baseFlags'] & T['flags']>\nexport type Args<T extends typeof Command> = Interfaces.InferredArgs<T['args']>\n\nexport abstract class BaseCommand<T extends typeof Command> extends Command {\n  // add the --json flag\n  static enableJsonFlag = true\n\n  // define flags that can be inherited by any command that extends BaseCommand\n  static baseFlags = {\n    'log-level': Flags.custom<LogLevel>({\n      summary: 'Specify level for logging.',\n      options: Object.values(LogLevel),\n      helpGroup: 'GLOBAL',\n    })(),\n  }\n\n  protected flags!: Flags<T>\n  protected args!: Args<T>\n\n  public async init(): Promise<void> {\n    await super.init()\n    const {args, flags} = await this.parse({\n      flags: this.ctor.flags,\n      baseFlags: (super.ctor as typeof BaseCommand).baseFlags,\n      args: this.ctor.args,\n      strict: this.ctor.strict,\n    })\n    this.flags = flags as Flags<T>\n    this.args = args as Args<T>\n  }\n\n  protected async catch(err: Error & {exitCode?: number}): Promise<any> {\n    // add any custom logic to handle errors from the command\n    // or simply return the parent class error handling\n    return super.catch(err)\n  }\n\n  protected async finally(_: Error | undefined): Promise<any> {\n    // called after run and catch regardless of whether or not the command errored\n    return super.finally(_)\n  }\n}\n\n// src/commands/my-command.ts\n\nexport default class MyCommand extends BaseCommand<typeof MyCommand> {\n  static summary = 'child class that extends BaseCommand'\n\n  static examples = [\n    '<%= config.bin %> <%= command.id %>',\n    '<%= config.bin %> <%= command.id %> --json',\n    '<%= config.bin %> <%= command.id %> --log-level debug',\n  ]\n\n  static flags = {\n    name: Flags.string({\n      char: 'n',\n      summary: 'Name to print.',\n      required: true,\n    }),\n  }\n\n  public async run(): Promise<Flags<typeof MyCommand>> {\n    for (const [flag, value] of Object.entries(this.flags)) {\n      this.log(`${flag}: ${value}`)\n    }\n\n    return this.flags\n  }\n}\n")),(0,s.kt)("p",null,"For a more complex example, ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/salesforcecli/sf-plugins-core/blob/main/src/sfCommand.ts"},"here's")," how we do this for the Salesforce CLI."))}u.isMDXComponent=!0}}]);