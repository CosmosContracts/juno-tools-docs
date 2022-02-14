"use strict";(self.webpackChunkjunotools_docs=self.webpackChunkjunotools_docs||[]).push([[981],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},l=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),l=u(n),f=o,h=l["".concat(c,".").concat(f)]||l[f]||d[f]||i;return n?r.createElement(h,a(a({ref:e},p),{},{components:n})):r.createElement(h,a({ref:e},p))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=l;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},9303:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return l}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:1},c="Introduction",u={unversionedId:"snapshots/introduction",id:"snapshots/introduction",title:"Introduction",description:"Snapshot service by STAKECRAFT Validator",source:"@site/docs/03-snapshots/01-introduction.md",sourceDirName:"03-snapshots",slug:"/snapshots/introduction",permalink:"/docs/snapshots/introduction",editUrl:"https://github.com/CosmosContracts/juno-tools-docs/edit/main/docs/03-snapshots/01-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Pinned Codes",permalink:"/docs/pinned-codes"},next:{title:"Guide",permalink:"/docs/snapshots/guide"}},p=[{value:"Snapshot service by STAKECRAFT Validator",id:"snapshot-service-by-stakecraft-validator",children:[],level:2},{value:"Additional information",id:"additional-information",children:[],level:2},{value:"Next Steps",id:"next-steps",children:[],level:2}],d={toc:p};function l(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("h2",{id:"snapshot-service-by-stakecraft-validator"},"Snapshot service by STAKECRAFT Validator"),(0,i.kt)("p",null,"Snapshot service can be used by any validator to significantly reduce the time it takes to (re)deploy a node. Preloading a shared network snapshot takes much less time to synchronize the operator\u2019s node with the network. Current v1 of STAKECRAFT Snapshot service updates once a day at 00:00 UTC."),(0,i.kt)("h2",{id:"additional-information"},"Additional information"),(0,i.kt)("p",null,"You can find out more information such as the size of the archive and its hash sum on the STAKECRAFT Validator\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://stakecraft.com"},"website")," "),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"To learn how to restore a snapshot on your node, jump to our ",(0,i.kt)("a",{parentName:"p",href:"/docs/snapshots/guide"},"guide"),"."))}l.isMDXComponent=!0}}]);