(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{368:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),d=p(n),O=r,j=d["".concat(o,".").concat(O)]||d[O]||u[O]||c;return n?a.a.createElement(j,l(l({ref:t},i),{},{components:n})):a.a.createElement(j,l({ref:t},i))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=O;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<c;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),c=(n(0),n(368)),o={id:"options-scrollEdgeAppearance",title:"Scroll Edge Appearance Options",sidebar_label:"Scroll Edge Appearance"},l={unversionedId:"api/options-scrollEdgeAppearance",id:"version-7.7.0/api/options-scrollEdgeAppearance",isDocsHomePage:!1,title:"Scroll Edge Appearance Options",description:"Controls the top bar background styling.",source:"@site/versioned_docs/version-7.7.0/api/options-scrollEdgeAppearance.mdx",slug:"/api/options-scrollEdgeAppearance",permalink:"/react-native-navigation/7.7.0/api/options-scrollEdgeAppearance",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.7.0/api/options-scrollEdgeAppearance.mdx",version:"7.7.0",sidebar_label:"Scroll Edge Appearance"},b=[{value:"<code>active</code>",id:"active",children:[]},{value:"<code>color</code>",id:"color",children:[]},{value:"<code>translucent</code>",id:"translucent",children:[]},{value:"<code>borderColor</code>",id:"bordercolor",children:[]},{value:"<code>noBorder</code>",id:"noborder",children:[]}],i={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Controls the top bar background styling."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const options = {\n  topBar: {\n    scrollEdgeAppearance: {\n      background: {},\n      active: true,\n    },\n  },\n};\n")),Object(c.b)("h3",{id:"active"},Object(c.b)("inlineCode",{parentName:"h3"},"active")),Object(c.b)("p",null,"Since this might be considered as a breaking change (meaning that previous configs might behave different), you'll need to\npass active ",Object(c.b)("inlineCode",{parentName:"p"},"true/false")," to activate this option.\n| Type | Required | Platform |\n| ----- | -------- | -------- |\n| Bool | No | iOS |"),Object(c.b)("h3",{id:"color"},Object(c.b)("inlineCode",{parentName:"h3"},"color")),Object(c.b)("p",null,"Set the background color."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Platform"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Color"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"iOS")))),Object(c.b)("h3",{id:"translucent"},Object(c.b)("inlineCode",{parentName:"h3"},"translucent")),Object(c.b)("p",null,"Allows the Scroll Edge Appearance to be translucent (blurred)."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Platform"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"iOS")))),Object(c.b)("h3",{id:"bordercolor"},Object(c.b)("inlineCode",{parentName:"h3"},"borderColor")),Object(c.b)("p",null,"Change the topBar border color."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Platform"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Color"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Both")))),Object(c.b)("h3",{id:"noborder"},Object(c.b)("inlineCode",{parentName:"h3"},"noBorder")),Object(c.b)("p",null,"Disables border at the bottom of the TopBar."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Platform"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"iOS")))))}p.isMDXComponent=!0}}]);