/*! For license information please see component---src-pages-contact-tsx-5b42c6f111b0d0233bbf.js.LICENSE.txt */
(self.webpackChunktetov_xyz=self.webpackChunktetov_xyz||[]).push([[650],{5900:function(t,e){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var a=typeof n;if("string"===a||"number"===a)t.push(n);else if(Array.isArray(n)){if(n.length){var o=i.apply(null,n);o&&t.push(o)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&t.push(l);else t.push(n.toString())}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(n=function(){return i}.apply(e,[]))||(t.exports=n)}()},1046:function(t,e,n){"use strict";n.d(e,{w_:function(){return u}});var r=n(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(i),o=function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},l=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n};function c(t){return t&&t.map((function(t,e){return r.createElement(t.tag,o({key:e},t.attr),c(t.child))}))}function u(t){return function(e){return r.createElement(s,o({attr:o({},t.attr)},e),c(t.child))}}function s(t){var e=function(e){var n,i=t.attr,a=t.size,c=t.title,u=l(t,["attr","size","title"]),s=a||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,u,{className:n,style:o(o({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),t.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(t){return e(t)})):e(i)}},4362:function(t,e,n){"use strict";n.d(e,{Mf:function(){return c},aY:function(){return p},hL:function(){return h}});var r={};n.r(r),n.d(r,{RiGenderlessFill:function(){return u.TA6},RiGithubFill:function(){return u.q7V},RiInstagramFill:function(){return u.Nrw},RiKey2Fill:function(){return u._K6},RiLinkedinBoxFill:function(){return u.tsq},RiMailFill:function(){return u.YTS},RiMastodonFill:function(){return u.y3U},RiSmartphoneFill:function(){return u.CUj},RiTwitterFill:function(){return u.x2F},RiUserSmileFill:function(){return u.Q$W},SiMatrix:function(){return s.RMl},SiSignal:function(){return s.D83}});var i=n(5900),a=n.n(i),o=n(5444),l=n(7294),c=function(){var t=(0,o.useStaticQuery)("293859192").allContactData.nodes;return l.createElement("div",{id:"contact",className:"h-card md:px-44 text-center text-lg"},t.map((function(t){return l.createElement(p,{contactData:t,key:t.id,className:a()(t.hcard,"align-middle inline-block mx-4 whitespace-nowrap",{"hover:text-purple":Boolean(t.url)}),iconProp:{size:"2em",className:"p-2 inline-block"}})})))},u=n(2309),s=n(9463),f=function(t){return l.createElement("a",Object.assign({rel:"me external"},t))},d=function(t){return l.createElement("span",t)},m=function(t){return l.createElement("link",Object.assign({rel:"me external"},t))},p=function(t){var e=t.contactData,n=e.text,i=e.url,o=e.icon,c=e.hcard,u=t.className,s=t.iconProp,p=void 0===s?{}:s,h=t.hidden,v=void 0!==h&&h;p["aria-hidden"]=!0;var y,g=o?r[o]:void 0,x=v?void 0:l.createElement(l.Fragment,null,o&&l.createElement(g,p),n||""),b={className:(c||u)&&a()(c,u),href:i||void 0,children:x};return y=i?v?m:f:d,l.createElement(y,b)},h=function(){var t=(0,o.useStaticQuery)("4122257487").allContactData.nodes;return l.createElement("div",{className:"h-card hidden","aria-hidden":!0},t.filter((function(t){return t.url||t.hcard})).map((function(t){return l.createElement(p,{key:t.id,contactData:t,hidden:!0})})))}},5424:function(t,e,n){"use strict";n.r(e);var r=n(4362),i=n(7145),a=n(3521),o=n(7294);e.default=function(t){var e=t.location;return o.createElement(i.Z,{pathName:e.pathname,subHeading:"Want to say hi?"},o.createElement(a.q2,{title:"Contact",excerpt:"Anton Tetov's contact details"}),o.createElement(r.Mf,null))}}}]);
//# sourceMappingURL=component---src-pages-contact-tsx-5b42c6f111b0d0233bbf.js.map