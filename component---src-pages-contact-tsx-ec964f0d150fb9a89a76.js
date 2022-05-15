/*! For license information please see component---src-pages-contact-tsx-ec964f0d150fb9a89a76.js.LICENSE.txt */
(self.webpackChunktetov_xyz=self.webpackChunktetov_xyz||[]).push([[650],{5900:function(t,e){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var a=typeof n;if("string"===a||"number"===a)t.push(n);else if(Array.isArray(n)){if(n.length){var l=i.apply(null,n);l&&t.push(l)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var o in n)r.call(n,o)&&n[o]&&t.push(o);else t.push(n.toString())}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(n=function(){return i}.apply(e,[]))||(t.exports=n)}()},1046:function(t,e,n){"use strict";n.d(e,{w_:function(){return u}});var r=n(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(i),l=function(){return(l=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},o=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n};function c(t){return t&&t.map((function(t,e){return r.createElement(t.tag,l({key:e},t.attr),c(t.child))}))}function u(t){return function(e){return r.createElement(s,l({attr:l({},t.attr)},e),c(t.child))}}function s(t){var e=function(e){var n,i=t.attr,a=t.size,c=t.title,u=o(t,["attr","size","title"]),s=a||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,u,{className:n,style:l(l({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),t.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(t){return e(t)})):e(i)}},5424:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var r={};n.r(r),n.d(r,{RiGenderlessFill:function(){return c.TA6},RiGithubFill:function(){return c.q7V},RiInstagramFill:function(){return c.Nrw},RiKey2Fill:function(){return c._K6},RiLinkedinBoxFill:function(){return c.tsq},RiMailFill:function(){return c.YTS},RiMastodonFill:function(){return c.y3U},RiSmartphoneFill:function(){return c.CUj},RiTwitterFill:function(){return c.x2F},RiUserSmileFill:function(){return c.Q$W},SiMatrix:function(){return u.RMl},SiSignal:function(){return u.D83}});var i=n(9756),a=n(5900),l=n.n(a),o=n(7294),c=n(2309),u=n(9463),s=["children"],f=["children"],p=function(t){var e=t.children,n=(0,i.Z)(t,s);return o.createElement("a",Object.assign({rel:"me external"},n),e)},d=function(t){var e=t.children,n=(0,i.Z)(t,f);return o.createElement("span",n,e)},m=function(t){var e=t.contactData,n=e.text,i=e.url,a=e.icon,c=e.hcard,u=t.className,s=t.iconProp,f=void 0===s?{}:s;f["aria-hidden"]=!0;var m=a?r[a]:void 0,v={children:o.createElement(o.Fragment,null,a&&o.createElement(m,f),n||""),className:(c||u)&&l()(c,u),href:i||void 0},h=i?p:d;return o.createElement(h,v)}},4508:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return s}});var r=n(7294),i=n(5900),a=n.n(i),l=n(5444),o=n(5424),c=function(){var t=(0,l.useStaticQuery)("210739144").allContactData.nodes;return r.createElement("div",{id:"contact",className:"h-card md:px-44 text-center text-lg"},t.map((function(t){return r.createElement(o.Z,{contactData:t,key:t.id,className:a()(t.hcard,"align-middle inline-block mx-4 whitespace-nowrap",{"hover:text-purple":Boolean(t.url)}),iconProp:{size:"2em",className:"p-2 inline-block"}})})))},u=n(1300),s=function(){return r.createElement(u.Z,{title:"Contact",description:"Anton Tetov's contact details",subHeading:"Want to say hi?"},r.createElement(c,null))}}}]);
//# sourceMappingURL=component---src-pages-contact-tsx-ec964f0d150fb9a89a76.js.map