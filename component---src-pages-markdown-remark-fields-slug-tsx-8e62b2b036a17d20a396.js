"use strict";(self.webpackChunktetov_xyz=self.webpackChunktetov_xyz||[]).push([[536],{8055:function(e,t,a){a.r(t),a.d(t,{Head:function(){return s}});var r=a(3723),n=a(7294),o=a(4666),l=a(2596),i=a(7713);t.default=e=>{var t,a,r,l;let{data:{markdownRemark:s},location:{pathname:m}}=e;if(!s)throw new TypeError("MarkdownRemark null on node.");if(!s.fields||!s.frontmatter)throw new TypeError("Fields or FrontMatter null on node");if(!s.html)throw new Error("Content contains no HTML content.");const c=s.fields.category;if(!c)throw new Error("No category set on node's fields.");const d={};if("special"===c&&"cv"===s.fields.slug)d.className="cv-screen prose dark:prose-invert prose-a:link-style",d.articleMarkup={articleMF2Class:"h-resume",articleType:"Person"},d.date=s.frontmatter.date;else if("posts"===c)d.articleMarkup={articleMF2Class:"h-entry",articleType:"BlogEntry",bodyItemProp:"articleBody"},d.date=s.frontmatter.date;else{if("projs"!==c)throw new Error("Node doesn't match any prop templates.");d.articleMarkup={articleMF2Class:"h-entry",articleType:"CreativeWork",bodyItemProp:"about"}}return d.className=null!==(t=d.className)&&void 0!==t?t:"prose dark:prose-invert prose-a:link-style",n.createElement(i.Z,{pathname:m},n.createElement(o.d2,Object.assign({pathname:m,html:null!==(a=s.html)&&void 0!==a?a:"",title:s.frontmatter.title,bannerImageData:null===(r=s.frontmatter.image)||void 0===r||null===(l=r.childImageSharp)||void 0===l?void 0:l.bannerImgData,imageAlt:s.frontmatter.imageAlt||void 0,imageCaption:s.frontmatter.imageCaption||void 0,machineReadableDate:s.frontmatter.machineReadableDate},d)))};const s=e=>{let{location:{pathname:t},data:{markdownRemark:{frontmatter:{title:a,description:o,image:i,machineReadableDate:s},excerpt:m}}}=e;return n.createElement(l.Z,{pathname:t,imageUrl:(0,r.d)(i),pageTitle:a,description:o||m||""},n.createElement("meta",{property:"og:type",content:"article",id:"og:type"}),s&&n.createElement("meta",{property:"og:article:published_time",content:s}))}}}]);
//# sourceMappingURL=component---src-pages-markdown-remark-fields-slug-tsx-8e62b2b036a17d20a396.js.map