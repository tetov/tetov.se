"use strict";(self.webpackChunktetov_xyz=self.webpackChunktetov_xyz||[]).push([[390],{3723:function(e,t,a){a.d(t,{G:function(){return O},L:function(){return f},M:function(){return C},P:function(){return x},_:function(){return s},a:function(){return o},b:function(){return d},d:function(){return u},g:function(){return m},h:function(){return l}});var r=a(7294),n=(a(2369),a(5697)),i=a.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var c=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData},u=function(e){var t,a,r;return null==(t=c(e))||null==(a=t.images)||null==(r=a.fallback)?void 0:r.src};function d(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function m(e,t,a,r,n,i,s,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var g,p=["children"],h=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,a=s(e,p);return r.createElement(r.Fragment,null,r.createElement(h,o({},a)),t,null)},v=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],b=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,u=s(e,v);return r.createElement("img",o({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},w=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=s(e,y),u=c.sizes||(null==t?void 0:t.sizes),d=r.createElement(b,o({},c,t,{sizes:u,shouldLoad:l}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:u})})),d):d};b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},w.displayName="Picture",w.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var E=["fallback"],x=function(e){var t=e.fallback,a=s(e,E);return t?r.createElement(w,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};x.displayName="Placeholder",x.propTypes={fallback:n.string,sources:null==(g=w.propTypes)?void 0:g.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var C=function(e){return r.createElement(r.Fragment,null,r.createElement(w,o({},e)),r.createElement("noscript",null,r.createElement(w,o({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=w.propTypes;var L,k,N=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},I={image:i().object.isRequired,alt:N},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],P=new Set,_=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,m=e.class,g=e.onStartLoad,p=e.onLoad,h=e.onError,f=s(e,T),v=i.width,y=i.height,b=i.layout,w=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(v,y,b),E=w.style,x=w.className,C=s(w,S),N=(0,r.useRef)(),I=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(d=m);var _=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,v,y);return(0,r.useEffect)((function(){L||(L=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=N.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),r.addEventListener("load",(function e(){r.removeEventListener("load",e),null==p||p({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)}))),void P.add(I)):k&&P.has(I)?void 0:(L.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;N.current&&(N.current.innerHTML=r(o({isLoading:!0,isLoaded:P.has(I),image:i},f)),P.has(I)||(e=requestAnimationFrame((function(){N.current&&(t=n(N.current,I,P,c,g,p,h))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){P.has(I)&&k&&(N.current.innerHTML=k(o({isLoading:P.has(I),isLoaded:P.has(I),image:i},f)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[i]),(0,r.createElement)(n,o({},C,{style:o({},E,c,{backgroundColor:u}),className:x+(d?" "+d:""),ref:N,dangerouslySetInnerHTML:{__html:_},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(_,e):null}));O.propTypes=I,O.displayName="GatsbyImage";var A,R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],q=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),j={src:i().string.isRequired,alt:N,width:q,height:q,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},M=(A=O,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=s(e,R);return n&&console.warn(n),a?r.createElement(A,o({image:a},i)):(console.warn("Image not loaded",t),null)});M.displayName="StaticImage",M.propTypes=j},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},1750:function(e,t,a){a.d(t,{d2:function(){return i},Ml:function(){return l},K3:function(){return u},m7:function(){return d},p2:function(){return m},Vi:function(){return g}});var r=a(3723),n=a(7294),i=function(e){var t=e.pathname,a=e.articleClass,i=e.articleType,o=e.bodyItemProp,s=e.html,c=e.title,d=e.date,m=e.machineReadableDate,p=e.bannerImageData,h=e.imageAlt;return n.createElement("article",{className:a,itemScope:!0,itemType:"http://schema.org/"+i},n.createElement(u,{itemProp:"headline",url:"/"+t},c),n.createElement(g,{machineReadableDate:m},d&&n.createElement("p",{className:"mb-4 text-4xl lg:text-6xl leading-tight"},d)),p&&n.createElement(r.G,{alt:h||"Cover image for "+c,image:p,loading:"eager",className:"mb-8 md:mb-16",imgClassName:"shadow-sm hover:shadow-md transition-shadow duration-200"}),n.createElement(l,{content:s,itemProp:o}))},o=a(9931),s=a.n(o),l=function(e){var t=e.content,a=e.itemProp,r=e.className;return n.createElement("section",{className:s()("e-content max-w-2xl mx-auto",r,"markdown-styles-module--markdown--66c1a"),dangerouslySetInnerHTML:{__html:t},itemProp:a})},c=a(1082),u=function(e){var t=e.url,a=e.itemProp,r=void 0===a?"headline":a,i=e.children;return n.createElement("header",{className:"text-center md:justify-between mb-16 md:mb-12"},n.createElement("h2",{className:"mt-4 w-2/3 text-2xl md:text-4xl font-light inline-block leading-relaxed"},n.createElement(c.Link,{to:t,className:"p-name link-style-alt u-url",itemProp:r},i)))},d=function(e){var t=e.nodes;return n.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-8"},t.map((function(e){return n.createElement(m,Object.assign({key:e.id},e))})))},m=function(e){var t,a=e.excerpt,i=e.fields,o=i.slug,s=i.category,l=e.frontmatter,u=l.title,d=l.description,m=l.image,g=l.imageAlt,p=null==m||null===(t=m.childImageSharp)||void 0===t?void 0:t.previewImg;if("projs"===s&&!p)throw new Error("Missing preview image.");if(!(d||a))throw new Error("Missing blurb (neither description nor excerpt present).");return n.createElement("div",null,n.createElement(c.Link,{to:"/"+o+"/",className:"link-style-alt"},p&&n.createElement(r.G,{alt:g||"Cover image for "+u,image:p,loading:"lazy",className:"mb-5"}),n.createElement("h3",{className:"text-3xl mb-3 leading-snug"},u)),n.createElement("div",{className:"mb-4"},n.createElement("p",{className:"text-lg leading-relaxed mb-4",dangerouslySetInnerHTML:{__html:d||a||""}})))},g=function(e){var t=e.children,a=e.machineReadableDate,r=e.className,i=e.itemProp;return n.createElement("time",{className:r||"dt-published",itemProp:i||"dateCreated",dateTime:a},t)}}}]);
//# sourceMappingURL=f8742f24121da61ad6659b0bd05f87f33b67ca2c-1215c722f4db1e6fc2ed.js.map