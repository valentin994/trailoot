(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"/uZM":function(e,t,a){e.exports={container:"layout-module--container--3BoYY",content:"layout-module--content--zUuRj"}},Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("xr34"),o=a("Wbzz"),c=a("aOmW"),s=a.n(c),i=function(e){e.siteTitle;var t=l.data;return r.a.createElement("header",{className:s.a.header},r.a.createElement("h1",null,r.a.createElement(o.a,{className:s.a.title,to:"/"},t.site.siteMetadata.title)),r.a.createElement("nav",null,r.a.createElement("ul",{className:s.a.navList},r.a.createElement("li",null,r.a.createElement(o.a,{className:s.a.navItem,activeClassName:s.a.activeNavItem,to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.a,{className:s.a.navItem,activeClassName:s.a.activeNavItem,to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(o.a,{className:s.a.navItem,activeClassName:s.a.activeNavItem,to:"/blog"},"Blog")),r.a.createElement("li",null,r.a.createElement(o.a,{className:s.a.navItem,activeClassName:s.a.activeNavItem,to:"/contact"},"Contact")))))},u=a("IaHe"),m=a("SxA4"),f=a.n(m),d=function(){var e=u.data;return r.a.createElement("footer",{className:f.a.footer},r.a.createElement("p",null,"footer ",e.site.siteMetadata.author))},v=(a("sg+I"),a("/uZM")),p=a.n(v);t.a=function(e){return r.a.createElement("div",{className:p.a.container},r.a.createElement("div",{className:p.a.content},r.a.createElement(i,null),e.children),r.a.createElement(d,null))}},IaHe:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":"Valentin Vareskic"}}}}')},SxA4:function(e,t,a){e.exports={footer:"footer-module--footer--cvZzG"}},UBO4:function(e,t,a){e.exports={posts:"blog-module--posts--3uQTR",post:"blog-module--post--2PWe7"}},Wbzz:function(e,t,a){"use strict";a("xfY5");var n=a("q1tI"),r=a.n(n),l=a("+ZDr"),o=a.n(l);a.d(t,"a",(function(){return o.a}));a("lw3w"),a("emEt").default.enqueue,r.a.createContext({})},aOmW:function(e,t,a){e.exports={header:"header-module--header--2NYIJ",navList:"header-module--nav-list--1ob9s",title:"header-module--title--2Ml1U",navItem:"header-module--nav-item---V6P3",activeNavItem:"header-module--active-nav-item--2MbjT"}},lw3w:function(e,t,a){var n;e.exports=(n=a("rzlk"))&&n.default||n},qncB:function(e,t,a){var n=a("XKFU"),r=a("vhPU"),l=a("eeVq"),o=a("/e88"),c="["+o+"]",s=RegExp("^"+c+c+"*"),i=RegExp(c+c+"*$"),u=function(e,t,a){var r={},c=l((function(){return!!o[e]()||"​"!="​"[e]()})),s=r[e]=c?t(m):o[e];a&&(r[a]=s),n(n.P+n.F*c,"String",r)},m=u.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(i,"")),e};e.exports=u},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var n=a("q1tI"),r=a.n(n),l=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},"sg+I":function(e,t,a){},vx99:function(e,t,a){"use strict";a.r(t);var n=a("yQfR"),r=a("q1tI"),l=a.n(r),o=a("Bl7J"),c=a("Wbzz"),s=a("UBO4"),i=a.n(s);t.default=function(){var e=n.data;return console.log(e),l.a.createElement("div",null,l.a.createElement(o.a,null,l.a.createElement("h1",null,"Blog"),l.a.createElement("p",null,"Posts"),l.a.createElement("ol",{className:i.a.posts},e.allMarkdownRemark.edges.map((function(e){return l.a.createElement("li",{className:i.a.post},l.a.createElement(c.a,{to:e.node.fields.slug},l.a.createElement("h2",null,e.node.frontmatter.title),l.a.createElement("p",null,e.node.frontmatter.date)))})))))}},xfY5:function(e,t,a){"use strict";var n=a("dyZX"),r=a("aagx"),l=a("LZWt"),o=a("Xbzi"),c=a("apmT"),s=a("eeVq"),i=a("kJMx").f,u=a("EemH").f,m=a("hswa").f,f=a("qncB").trim,d=n.Number,v=d,p=d.prototype,N="Number"==l(a("Kuth")(p)),E="trim"in String.prototype,I=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var a,n,r,l=(t=E?t.trim():f(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+t}for(var o,s=t.slice(2),i=0,u=s.length;i<u;i++)if((o=s.charCodeAt(i))<48||o>r)return NaN;return parseInt(s,n)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof d&&(N?s((function(){p.valueOf.call(a)})):"Number"!=l(a))?o(new v(I(t)),a,d):I(t)};for(var g,h=a("nh4g")?i(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;h.length>b;b++)r(v,g=h[b])&&!r(d,g)&&m(d,g,u(v,g));d.prototype=p,p.constructor=d,a("KroJ")(n,"Number",d)}},xr34:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Trailoot"}}}}')},yQfR:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"title":"The great react bcam","date":"25-06-2020"},"fields":{"slug":"react"}}},{"node":{"frontmatter":{"title":"The great escape","date":"25-06-2020"},"fields":{"slug":"gatsby"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-blog-js-bedb25bfd5f54a129641.js.map