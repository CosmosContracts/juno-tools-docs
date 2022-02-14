"use strict";(self.webpackChunkjunotools_docs=self.webpackChunkjunotools_docs||[]).push([[610],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9031:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},s="Guide",p={unversionedId:"dashboards/airdrop/guide",id:"dashboards/airdrop/guide",title:"Guide",description:"In this guide, we'll go over the steps of airdropping tokens.",source:"@site/docs/02-dashboards/02-airdrop/02-guide.md",sourceDirName:"02-dashboards/02-airdrop",slug:"/dashboards/airdrop/guide",permalink:"/docs/dashboards/airdrop/guide",editUrl:"https://github.com/CosmosContracts/juno-tools-docs/edit/main/docs/02-dashboards/02-airdrop/02-guide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/dashboards/airdrop/introduction"},next:{title:"Introduction",permalink:"/docs/dashboards/cw-1/introduction"}},d=[{value:"Connect your wallet",id:"connect-your-wallet",children:[],level:2},{value:"Create",id:"create",children:[{value:"Example Files",id:"example-files",children:[{value:"Timestamp",id:"timestamp",children:[],level:4},{value:"Height",id:"height",children:[],level:4},{value:"Null type",id:"null-type",children:[],level:4}],level:3},{value:"File Upload",id:"file-upload",children:[],level:3}],level:2},{value:"Register",id:"register",children:[],level:2},{value:"Fund",id:"fund",children:[],level:2},{value:"Claim",id:"claim",children:[],level:2}],c={toc:d};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"guide"},"Guide"),(0,r.kt)("p",null,"In this guide, we'll go over the steps of airdropping tokens."),(0,r.kt)("h2",{id:"connect-your-wallet"},"Connect your wallet"),(0,r.kt)("p",null,"To start airdropping your tokens, head to ",(0,r.kt)("a",{parentName:"p",href:"https://test.juno.tools"},"juno.tools")," and connect\nyour ",(0,r.kt)("a",{parentName:"p",href:"https://wallet.keplr.app/"},"Keplr wallet"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Don't have a crypto wallet for interacting with Juno? Get Keplr!")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Keplr is a web wallet for interacting with web3 applications in the interchain. You can install the keplr extension from ",(0,r.kt)("a",{parentName:"p",href:"https://www.keplr.app/"},"here")," if you don't have it already."))),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Get some $JUNO!")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To interact with Junotools and airdrop your CW-20 tokens, you'll need $JUNO. You can pick some up on ",(0,r.kt)("a",{parentName:"p",href:"https://osmosis.zone/"},"Osmosis"),"."))),(0,r.kt)("h2",{id:"create"},"Create"),(0,r.kt)("p",null,"Before creating an airdrop, you need to decide on a few things"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," which will be shown on the ",(0,r.kt)("a",{parentName:"li",href:"https://test.juno.tools/airdrops/list/"},"available airdrops page"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"accounts")," holds all the ",(0,r.kt)("inlineCode",{parentName:"li"},"addresses")," and their respective claimable ",(0,r.kt)("inlineCode",{parentName:"li"},"amount"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cw20TokenAddress")," address of the cw20 token that will be airdropped."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"start")," refers to the block number or the block timestamp, depending on the ",(0,r.kt)("inlineCode",{parentName:"li"},"startType"),", that airdrop will become claimable. Setting it to ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," will make the airdrop claimable at the next block."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"startType")," can be set to either block number (height), block timestamp (timestamp), or null if the ",(0,r.kt)("inlineCode",{parentName:"li"},"start")," is also null."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expiration")," refers to the block number or the block timestamp, depending on the ",(0,r.kt)("inlineCode",{parentName:"li"},"expirationType"),", that airdrop will expire. Setting it to ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," will keep the airdrop alive until every drop is claimed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expirationType")," can be set to either block number (height), block timestamp (timestamp), or null if the ",(0,r.kt)("inlineCode",{parentName:"li"},"expiration")," is also null."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"totalAmount")," is the number of tokens to be airdropped.")),(0,r.kt)("h3",{id:"example-files"},"Example Files"),(0,r.kt)("p",null,"To create an airdrop, you must provide a JSON file with the parameters explained above."),(0,r.kt)("p",null,"We have provided example JSON files below to ease the process. In newer versions, all the actions will be handled through the UI with the exception of an expected CSV file upload to read addresses and amounts."),(0,r.kt)("h4",{id:"timestamp"},"Timestamp"),(0,r.kt)("p",null,"Every block has a timestamp according to the time it's proposed. You can use the timestamp as an indicator for the airdrop start and expiration times."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When start and expiration fields are taken as timestamps, they should be UNIX timestamps in seconds. So Monday, February 14, 2022, 9:00:00 AM becomes 1644829200. This is what the user needs to put in the JSON file. Unix timestamp in seconds can be obtained using an ",(0,r.kt)("a",{parentName:"p",href:"https://www.epochconverter.com/"},"epoch converter")))),(0,r.kt)("p",null,"To create an airdrop starting at ",(0,r.kt)("strong",{parentName:"p"},"February 14, 2022, 9:00:00 AM")," and ending at ",(0,r.kt)("strong",{parentName:"p"},"February 15, 2022, 9:00:00 AM"),", the example file look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n"name": "Tension",\n"accounts": [\n  {\n    "address": "juno1qhcrmfmgdt6e550a544lzup5htv0svnk2uxagl",\n    "amount": 100\n  },\n  {\n    "address": "juno1d90w4s4pcup6qceyrvckj35zwwy2j4u2pwfnax",\n    "amount": 100\n  }\n],\n"cw20TokenAddress": "juno15q5gxnj6lxk4t08cllajcq3wvlwelzus3hz4tfz9uphpa6rjrwpq7uplvd",\n"start": "1644829200",\n"startType": "timestamp",\n"expiration": "1644915600",\n"expirationType": "timestamp",\n"totalAmount": "200"\n}\n')),(0,r.kt)("h4",{id:"height"},"Height"),(0,r.kt)("p",null,"As of the 14th of February, the current block height in Juno is 1890000. The average block time in Juno is around 6.3 seconds. Following this piece of information, you can estimate the block time you want the airdrop to expire."),(0,r.kt)("p",null,"For example, if you want your airdrop to last for a day then you'll need to add ",(0,r.kt)("strong",{parentName:"p"},"60 ","*"," 60 ","*"," 24 / 6.3 = ~13714")," to your block height."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n"name": "Tension",\n"accounts": [\n  {\n    "address": "juno1qhcrmfmgdt6e550a544lzup5htv0svnk2uxagl",\n    "amount": 100\n  },\n  {\n    "address": "juno1d90w4s4pcup6qceyrvckj35zwwy2j4u2pwfnax",\n    "amount": 100\n  }\n],\n"cw20TokenAddress": "juno15q5gxnj6lxk4t08cllajcq3wvlwelzus3hz4tfz9uphpa6rjrwpq7uplvd",\n"start": "1890000",\n"startType": "height",\n"expiration": "1903714",\n"expirationType": "height",\n"totalAmount": "200"\n}\n')),(0,r.kt)("h4",{id:"null-type"},"Null type"),(0,r.kt)("p",null,"If you want your airdrop to start immediately after the initialization and funding processes you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"startType")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("p",null,"On the other hand, for if you don't want your airdrops to expire until every drop is claimed you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"expirationType")," to null."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n"name": "Tension",\n"accounts": [\n  {\n    "address": "juno1qhcrmfmgdt6e550a544lzup5htv0svnk2uxagl",\n    "amount": 100\n  },\n  {\n    "address": "juno1d90w4s4pcup6qceyrvckj35zwwy2j4u2pwfnax",\n    "amount": 100\n  }\n],\n"cw20TokenAddress": "juno15q5gxnj6lxk4t08cllajcq3wvlwelzus3hz4tfz9uphpa6rjrwpq7uplvd",\n"start": "null",\n"startType": "null",\n"expiration": "null",\n"expirationType": "null",\n"totalAmount": "200"\n}\n\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It's possible to mix the types to start the airdrop at a certain timestamp but also keep the airdrop alive until every drop is claimed. It can be achieved by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," to a UNIX timestamp, ",(0,r.kt)("inlineCode",{parentName:"p"},"startType")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"expirationType")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")))),(0,r.kt)("h3",{id:"file-upload"},"File Upload"),(0,r.kt)("p",null,"When the JSON file is ready, head to the ",(0,r.kt)("a",{parentName:"p",href:"https://test.juno.tools/airdrops/create"},"Create Airdrop page")," and upload the JSON file."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4736).Z,width:"2880",height:"1580"})),(0,r.kt)("p",null,"Uploaded JSON will be prompted to the screen, make sure that you uploaded the correct file."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(524).Z,width:"2880",height:"1580"})),(0,r.kt)("p",null,"When you are done, you can press the ",(0,r.kt)("strong",{parentName:"p"},"Create Airdrop")," button to deploy the contract."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Depending on the size of the airdrop, It could take time for your airdrop to process and build a Merkle tree.\nThe next version will include an optimized Merkle tree build."))),(0,r.kt)("h2",{id:"register"},"Register"),(0,r.kt)("p",null,"Now that the contract is deployed, it can be registered to the JunoTools. You will be directed to the airdrop register page automatically."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It's always a good idea to save the contract address manually in case a browser-related issue occurs, so you won't have to deploy the contract again. This way you can manually register and fund your airdrops."))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3205).Z,width:"2880",height:"1580"})),(0,r.kt)("h2",{id:"fund"},"Fund"),(0,r.kt)("p",null,"There are 2 ways to fund an airdrop"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fund with Transfer"),": Anyone with the airdrop address can fund it if they have the balance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fund with Mint"),": Only the creator and the minter of the token can fund the airdrop directly from minting.\nAfter the airdrop is funded and the ",(0,r.kt)("inlineCode",{parentName:"li"},"start")," time/block has passed, the airdrop will be claimable.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5696).Z,width:"2880",height:"1578"})),(0,r.kt)("h2",{id:"claim"},"Claim"),(0,r.kt)("p",null,"Now that you successfully started the airdrop, it will be shown on the ",(0,r.kt)("a",{parentName:"p",href:"https://test.juno.tools/airdrops/list"},"Available Airdrops page.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6182).Z,width:"2880",height:"1580"})),(0,r.kt)("p",null,"You can see the airdrop you have allocated to by checking out ",(0,r.kt)("strong",{parentName:"p"},"Your Allocation")," row."),(0,r.kt)("p",null,"To claim an airdrop, press the ",(0,r.kt)("strong",{parentName:"p"},"Claim")," button on the same row, followed by pressing ",(0,r.kt)("strong",{parentName:"p"},"Claim Drop")," on the directed page."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9398).Z,width:"2880",height:"1580"})),(0,r.kt)("p",null,"Congrats! You have successfully learned how to create your own airdrop and claim it."))}m.isMDXComponent=!0},6182:function(e,t,n){t.Z=n.p+"assets/images/available-airdrops-cbe8b6bd782f8b4d93eeb8ebf9d643bc.png"},9398:function(e,t,n){t.Z=n.p+"assets/images/claim-airdrop-65a62a8ec487c944480f7656bac5acb7.png"},4736:function(e,t,n){t.Z=n.p+"assets/images/create-airdrop-1-e9b63ae4bb9d5ac5f6fc5460482d3e51.png"},524:function(e,t,n){t.Z=n.p+"assets/images/create-airdrop-2-cfb163ee0fb2e7eb05cc1e56afa12e37.png"},5696:function(e,t,n){t.Z=n.p+"assets/images/fund-airdrop-0d7e97b3ee0c347ce22a11f3440e51e5.png"},3205:function(e,t,n){t.Z=n.p+"assets/images/register-airdrop-e19446f364630f3798c00dddfeba986e.png"}}]);