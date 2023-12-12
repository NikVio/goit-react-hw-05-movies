"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[110],{8866:function(n,t,r){r.d(t,{a:function(){return c}});var e=r(8881),a=r(184),c=function(){return(0,a.jsx)(e.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})}},4541:function(n,t,r){r.d(t,{D$:function(){return d},_r:function(){return f},bI:function(){return s},wr:function(){return o},zU:function(){return p}});var e=r(5861),a=r(7757),c=r.n(a),u=r(340),i="53d3f6e1440c02fced3811e600aa63b7";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},7110:function(n,t,r){r.r(t),r.d(t,{default:function(){return v}});var e=r(3433),a=r(5861),c=r(9439),u=r(7757),i=r.n(u),o=r(8866),s=r(4541),p=r(2791),f=r(7689),d=r(1087),x=r(2069),h=r(184);function v(){var n=(0,p.useState)([]),t=(0,c.Z)(n,2),r=t[0],u=t[1],v=(0,p.useState)(!1),l=(0,c.Z)(v,2),g=l[0],m=l[1],w=(0,p.useState)(!1),b=(0,c.Z)(w,2),Z=b[0],k=b[1],y=(0,f.TH)();return(0,p.useEffect)((function(){var n=new AbortController,t=function(){var t=(0,a.Z)(i().mark((function t(){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(!0),t.prev=1,k(!1),t.next=5,(0,s.wr)({signal:n.signal});case 5:r=t.sent,a=r.results,u((function(n){return[].concat((0,e.Z)(n),(0,e.Z)(a))})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),k(t.t0.message);case 13:return t.prev=13,m(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){n.abort()}}),[]),(0,h.jsxs)("div",{children:[g&&(0,h.jsx)(o.a,{}),Z&&(0,h.jsx)("p",{children:"Oops, something went wrong. try reloading the page"}),r&&(0,h.jsxs)("div",{children:[(0,h.jsx)(x.Tg,{children:"Trending Movies"}),(0,h.jsx)(x.vp,{children:r.map((function(n,t){var r=n.title,e=n.id,a=n.poster_path;return(0,h.jsx)(x.fg,{children:(0,h.jsxs)(d.rU,{to:"/movies/".concat(e),state:{from:y},children:[a&&(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(a),alt:r,width:"auto"}),(0,h.jsx)(x.eA,{children:r})]})},t)}))})]})]})}},2069:function(n,t,r){r.d(t,{Tg:function(){return f},eA:function(){return d},fg:function(){return p},vp:function(){return s}});var e,a,c,u,i=r(168),o=r(5867),s=o.ZP.ul(e||(e=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n"]))),p=o.ZP.li(a||(a=(0,i.Z)(["\n  width: calc((100% - 96px) / 5);\n  height: auto;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n  }\n"]))),f=o.ZP.h1(c||(c=(0,i.Z)(["\n  margin-left: 40px;\n  margin-bottom: 20px;\n"]))),d=o.ZP.div(u||(u=(0,i.Z)(["\n  color: #2e859e;\n  font-weight: bold;\n  line-height: 16px;\n  font-size: 16px;\n  padding: 10px;\n  text-align: center;\n"])))}}]);
//# sourceMappingURL=110.8fe90589.chunk.js.map