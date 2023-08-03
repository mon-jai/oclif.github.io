"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7905],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7985:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],i={title:"Table"},s=void 0,c={unversionedId:"table",id:"table",title:"Table",description:"ux.table",source:"@site/../docs/table.md",sourceDirName:".",slug:"/table",permalink:"/docs/table",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/table.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1691080055,formattedLastUpdatedAt:"Aug 3, 2023",frontMatter:{title:"Table"},sidebar:"docs",previous:{title:"Spinner",permalink:"/docs/spinner"},next:{title:"Notifications",permalink:"/docs/notifications"}},u={},p=[{value:"<code>ux.table</code>",id:"uxtable",level:2}],m={toc:p},d="wrapper";function f(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"uxtable"},(0,o.kt)("inlineCode",{parentName:"h2"},"ux.table")),(0,o.kt)("p",null,"Displays tabular data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"ux.table(data, columns, options)\n")),(0,o.kt)("p",null,"Where:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data"),": array of data objects to display"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"columns"),": ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/oclif/core/blob/main/src/cli-ux/styled/table.ts"},"Table.Columns")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options"),": ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/oclif/core/blob/main/src/cli-ux/styled/table.ts"},"Table.Options"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ux.table.flags()")," returns an object containing all the table flags to include in your command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  columns: Flags.string({exclusive: ['additional'], description: 'only show provided columns (comma-seperated)'}),\n  sort: Flags.string({description: 'property to sort by (prepend '-' for descending)'}),\n  filter: Flags.string({description: 'filter property by partial string matching, ex: name=foo'}),\n  csv: Flags.boolean({exclusive: ['no-truncate'], description: 'output is csv format'}),\n  extended: Flags.boolean({char: 'x', description: 'show extra columns'}),\n  'no-truncate': Flags.boolean({exclusive: ['csv'], description: 'do not truncate output to fit screen'}),\n  'no-header': Flags.boolean({exclusive: ['csv'], description: 'hide table header from output'}),\n}\n")),(0,o.kt)("p",null,"Passing ",(0,o.kt)("inlineCode",{parentName:"p"},"{only: ['columns']}")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"{except: ['columns']}")," as an argument into ",(0,o.kt)("inlineCode",{parentName:"p"},"cli.table.flags()")," will allow/block those flags from the returned object."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ux.Table.Columns")," defines the table columns and their display options."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const columns: ux.Table.Columns = {\n  // where `.name` is a property of a data object\n  name: {}, // \"Name\" inferred as the column header\n  id: {\n    header: 'ID', // override column header\n    minWidth: '10', // column must display at this width or greater\n    extended: true, // only display this column when the --extended flag is present\n    get: row => `US-O1-${row.id}`, // custom getter for data row object\n  },\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ux.Table.Options")," defines the table options, most of which are the parsed flags from the user for display customization, all of which are optional."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const options: ux.Table.Options = {\n  printLine: myLogger, // custom logger\n  columns: flags.columns,\n  sort: flags.sort,\n  filter: flags.filter,\n  csv: flags.csv,\n  extended: flags.extended,\n  'no-truncate': flags['no-truncate'],\n  'no-header': flags['no-header'],\n}\n")),(0,o.kt)("p",null,"Example class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Command, ux} from '@oclif/core'\nimport axios from 'axios'\n\nexport default class Users extends Command {\n  static flags = {\n    ...ux.table.flags()\n  }\n\n  async run() {\n    const {flags} = await this.parse(Users)\n    const {data: users} = await axios.get('https://jsonplaceholder.typicode.com/users')\n\n    ux.table(users, {\n      name: {\n        minWidth: 7,\n      },\n      company: {\n        get: row => row.company && row.company.name\n      },\n      id: {\n        header: 'ID',\n        extended: true\n      }\n    }, {\n      printLine: this.log.bind(this),\n      ...flags, // parsed flags\n    })\n  }\n}\n")),(0,o.kt)("p",null,"Displays:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ example-cli users\nName                     Company\nLeanne Graham            Romaguera-Crona\nErvin Howell             Deckow-Crist\nClementine Bauch         Romaguera-Jacobson\nPatricia Lebsack         Robel-Corkery\nChelsey Dietrich         Keebler LLC\nMrs. Dennis Schulist     Considine-Lockman\nKurtis Weissnat          Johns Group\nNicholas Runolfsdottir V Abernathy Group\nGlenna Reichert          Yost and Sons\nClementina DuBuque       Hoeger LLC\n\n$ example-cli users --extended\nName                     Company            ID\nLeanne Graham            Romaguera-Crona    1\nErvin Howell             Deckow-Crist       2\nClementine Bauch         Romaguera-Jacobson 3\nPatricia Lebsack         Robel-Corkery      4\nChelsey Dietrich         Keebler LLC        5\nMrs. Dennis Schulist     Considine-Lockman  6\nKurtis Weissnat          Johns Group        7\nNicholas Runolfsdottir V Abernathy Group    8\nGlenna Reichert          Yost and Sons      9\nClementina DuBuque       Hoeger LLC         10\n\n$ example-cli users --columns=name\nName\nLeanne Graham\nErvin Howell\nClementine Bauch\nPatricia Lebsack\nChelsey Dietrich\nMrs. Dennis Schulist\nKurtis Weissnat\nNicholas Runolfsdottir V\nGlenna Reichert\nClementina DuBuque\n\n$ example-cli users --filter="company=Group"\nName                     Company\nKurtis Weissnat          Johns Group\nNicholas Runolfsdottir V Abernathy Group\n\n$ example-cli users --sort=company\nName                     Company\nNicholas Runolfsdottir V Abernathy Group\nMrs. Dennis Schulist     Considine-Lockman\nErvin Howell             Deckow-Crist\nClementina DuBuque       Hoeger LLC\nKurtis Weissnat          Johns Group\nChelsey Dietrich         Keebler LLC\nPatricia Lebsack         Robel-Corkery\nLeanne Graham            Romaguera-Crona\nClementine Bauch         Romaguera-Jacobson\nGlenna Reichert          Yost and Sons\n')))}f.isMDXComponent=!0}}]);