(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"/uZM":function(e,t,a){e.exports={container:"layout-module--container--3BoYY",content:"layout-module--content--zUuRj"}},Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("xr34"),c=a("Wbzz"),o=a("aOmW"),i=a.n(o),u=function(e){e.siteTitle,l.data;return r.a.createElement("header",{className:i.a.header},r.a.createElement("nav",null,r.a.createElement("ul",{className:i.a.navList},r.a.createElement("li",null,r.a.createElement(c.a,{className:i.a.navItem,activeClassName:i.a.activeNavItem,to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(c.a,{className:i.a.navItem,activeClassName:i.a.activeNavItem,to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(c.a,{className:i.a.navItem,activeClassName:i.a.activeNavItem,to:"/blog"},"Blog")),r.a.createElement("li",null,r.a.createElement(c.a,{className:i.a.navItem,activeClassName:i.a.activeNavItem,to:"/contact"},"Contact")),r.a.createElement("div",{className:i.a.spacer}),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/"},r.a.createElement("p",null,"TRAILOOT"))))))},s=a("IaHe"),m=a("SxA4"),f=a.n(m),d=function(){var e=s.data;return r.a.createElement("footer",{className:f.a.footer},r.a.createElement("p",null,e.site.siteMetadata.author," ©"))},v=(a("sg+I"),a("/uZM")),N=a.n(v);t.a=function(e){return r.a.createElement("div",{className:N.a.container},r.a.createElement("div",{className:N.a.content},r.a.createElement(u,null),e.children),r.a.createElement(d,null))}},IaHe:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":"Valentin Vareskic"}}}}')},SxA4:function(e,t,a){e.exports={footer:"footer-module--footer--cvZzG"}},UR57:function(e,t,a){e.exports={trail:"blog-module--trail--3Kx8t"}},Wbzz:function(e,t,a){"use strict";a("xfY5");var n=a("q1tI"),r=a.n(n),l=a("+ZDr"),c=a.n(l);a.d(t,"a",(function(){return c.a}));a("lw3w"),a("emEt").default.enqueue,r.a.createContext({})},aOmW:function(e,t,a){e.exports={header:"header-module--header--2NYIJ",navList:"header-module--nav-list--1ob9s",title:"header-module--title--2Ml1U",navItem:"header-module--nav-item---V6P3",activeNavItem:"header-module--active-nav-item--2MbjT",spacer:"header-module--spacer--2Xbsn"}},c851:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return i}));var n=a("q1tI"),r=a.n(n),l=a("UR57"),c=a.n(l),o=a("Bl7J"),i="3210822286";t.default=function(e){return r.a.createElement(o.a,null,r.a.createElement("div",{className:c.a.trail},r.a.createElement("h1",null,e.data.markdownRemark.frontmatter.title),r.a.createElement("p",null,e.data.markdownRemark.frontmatter.date),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.markdownRemark.html}})))}},lw3w:function(e,t,a){var n;e.exports=(n=a("rzlk"))&&n.default||n},qncB:function(e,t,a){var n=a("XKFU"),r=a("vhPU"),l=a("eeVq"),c=a("/e88"),o="["+c+"]",i=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),s=function(e,t,a){var r={},o=l((function(){return!!c[e]()||"​"!="​"[e]()})),i=r[e]=o?t(m):c[e];a&&(r[a]=i),n(n.P+n.F*o,"String",r)},m=s.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(u,"")),e};e.exports=s},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var n=a("q1tI"),r=a.n(n),l=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},"sg+I":function(e,t,a){},xfY5:function(e,t,a){"use strict";var n=a("dyZX"),r=a("aagx"),l=a("LZWt"),c=a("Xbzi"),o=a("apmT"),i=a("eeVq"),u=a("kJMx").f,s=a("EemH").f,m=a("hswa").f,f=a("qncB").trim,d=n.Number,v=d,N=d.prototype,E="Number"==l(a("Kuth")(N)),I="trim"in String.prototype,p=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){var a,n,r,l=(t=I?t.trim():f(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+t}for(var c,i=t.slice(2),u=0,s=i.length;u<s;u++)if((c=i.charCodeAt(u))<48||c>r)return NaN;return parseInt(i,n)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof d&&(E?i((function(){N.valueOf.call(a)})):"Number"!=l(a))?c(new v(p(t)),a,d):p(t)};for(var h,g=a("nh4g")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;g.length>x;x++)r(v,h=g[x])&&!r(d,h)&&m(d,h,s(v,h));d.prototype=N,N.constructor=d,a("KroJ")(n,"Number",d)}},xr34:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Trailoot"}}}}')}}]);
//# sourceMappingURL=component---src-templates-blog-js-c33adc7a675d572bcd7d.js.map