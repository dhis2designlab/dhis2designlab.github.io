(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(150),o=t(147);n.default=function(){return i.a.createElement(r.b,null,i.a.createElement(o.b,null,"This page does not exist."))}},147:function(e,n,t){"use strict";var a=t(145),i=(a.c.div.withConfig({displayName:"layout__Row",componentId:"sc-149u8t2-0"})(["display:flex;flex-direction:row;",""],function(e){var n=e.wrapped,t=e.reversed;return n?Object(a.b)(["flex-wrap:wrap;"]):t?Object(a.b)(["flex-direction:row-reverse;"]):void 0}),a.c.div.withConfig({displayName:"layout__Col",componentId:"sc-149u8t2-1"})(["display:flex;flex-direction:column;",""],function(e){var n=e.wrapped,t=e.reversed;return n?Object(a.b)(["flex-wrap:wrap;"]):t?Object(a.b)(["flex-direction:column-reverse;"]):void 0}),a.c.div.withConfig({displayName:"spacing__Margin",componentId:"sc-1gfoqjx-0"})(["",""],function(e){var n=e.margin;return Object(a.b)(["margin:","px;"],n)}),a.c.div.withConfig({displayName:"spacing__MarginTop",componentId:"sc-1gfoqjx-1"})(["",""],function(e){var n=e.margin;return Object(a.b)(["margin-top:","px;"],n)}),a.c.div.withConfig({displayName:"spacing__MarginBottom",componentId:"sc-1gfoqjx-2"})(["",""],function(e){var n=e.margin;return Object(a.b)(["margin-bottom:","px;"],n)}),a.c.div.withConfig({displayName:"spacing__Padding",componentId:"sc-1gfoqjx-3"})(["",""],function(e){var n=e.padding;return Object(a.b)(["padding:","px;"],n)}),a.c.div.withConfig({displayName:"spacing__OptionSpacer",componentId:"sc-1gfoqjx-4"})(["margin-right:40px;"]),t(160)),r=a.c.h1.withConfig({displayName:"typography__Title",componentId:"sc-1eq4h48-0"})(["font-weight:500;"]),o=a.c.h2.withConfig({displayName:"typography__Heading",componentId:"sc-1eq4h48-1"})(["color:#0d0d0e;font-size:1.25rem;line-height:1.6;font-weight:500;"]),c=a.c.div.withConfig({displayName:"typography__Text",componentId:"sc-1eq4h48-2"})(["color:#0d0d0e;"]);a.c.div.withConfig({displayName:"typography__Label",componentId:"sc-1eq4h48-3"})(["white-space:nowrap;padding:0px 12px 12px 16px;line-height:24px;font-weight:500;",""],function(e){var n=e.required,t=e.disabled;return n&&!t&&Object(a.b)(["::after{content:'*';color:",";padding-left:4px;}"],i.a.red600)});t.d(n,"c",function(){return r}),t.d(n,"a",function(){return o}),t.d(n,"b",function(){return c})},148:function(e,n,t){var a;e.exports=(a=t(149))&&a.default||a},149:function(e,n,t){"use strict";t.r(n);t(34);var a=t(0),i=t.n(a),r=t(4),o=t.n(r),c=t(55),p=t(2),l=function(e){var n=e.location,t=p.default.getResourcesForPathnameSync(n.pathname);return t?i.a.createElement(c.a,Object.assign({location:n,pageResources:t},t.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=l},150:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=t(4),o=t.n(r),c=t(33),p=t.n(c);t(148),i.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func;var l=t(147),d=t(145),s=t(168),m=d.c.div.withConfig({displayName:"style__Spacer",componentId:"sc-1779rvf-0"})(["margin:16px;"]),u=d.c.div.withConfig({displayName:"style__Container",componentId:"sc-1779rvf-1"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:end;align-content:space-between;padding:8px;"]),f=Object(d.c)(s.a).withConfig({displayName:"style__StyledCard",componentId:"sc-1779rvf-2"})(["height:200px !important;width:360px !important;padding:16px;text-align:center;&:hover{box-shadow:rgba(64,75,90,0.30) 0px 0px 1px 0px,rgba(64,75,90,0.30) 0px 14px 28px -6px;cursor:pointer;}"]),g=(d.c.article.withConfig({displayName:"style__Content",componentId:"sc-1779rvf-3"})(["height:100%;width:100%;color:unset;"]),d.c.p.withConfig({displayName:"style__Summary",componentId:"sc-1779rvf-4"})(["padding-top:24px;color:#0d0d0e;"])),h=function(e){var n=e.title,t=e.summary,a=e.path;return i.a.createElement(m,null,i.a.createElement(p.a,{to:a},i.a.createElement(f,null,i.a.createElement(l.a,null,n),i.a.createElement(g,null,t))))},x=function(e){var n=e.guides;return i.a.createElement(u,null,n.map(function(e){return i.a.createElement(h,{title:e.title,summary:e.summary,path:e.path})}))},y=t(151),w=t.n(y);t(152);function b(){var e=w()(["\n    html {\n        height: 100%;\n    }\n    body {\n        background-color: rgb(240, 240, 240);\n        margin: 0;\n        padding: 0;\n        font-family: Roboto;\n        height: 100%;\n    }\n"]);return b=function(){return e},e}var v=Object(d.a)(b()),_=d.c.section.withConfig({displayName:"style__Container",componentId:"sc-1m3h2lw-0"})(["display:flex;height:100%;"]),C=d.c.main.withConfig({displayName:"style__Main",componentId:"sc-1m3h2lw-1"})(["max-width:1600px;width:100%;"]),I=d.c.aside.withConfig({displayName:"style__Sidebar",componentId:"sc-1m3h2lw-2"})(["display:flex;flex-direction:column;height:100%;padding:16px;"]),j=function(e){var n=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(v,null),i.a.createElement(l.c,null,"DHIS2 design lab"),i.a.createElement(_,null,i.a.createElement(I,null,i.a.createElement("p",null,"I'm a sidebar!")),i.a.createElement(C,null,n)))};t.d(n,"a",function(){return x}),t.d(n,"b",function(){return j})}}]);
//# sourceMappingURL=component---src-pages-404-js-051388e669abf2c9ffd6.js.map