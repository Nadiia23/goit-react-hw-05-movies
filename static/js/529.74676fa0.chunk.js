"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[529],{436:function(r,e,t){t.d(e,{Hg:function(){return s},Wf:function(){return o},dV:function(){return i},q5:function(){return p},yo:function(){return f}});var n=t(861),a=t(757),u=t.n(a),c=t(44).ZP.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"c7319c856c6453f29ecfc93fd160b989"}}),s=function(){var r=(0,n.Z)(u().mark((function r(){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/trending/movie/day");case 2:return e=r.sent,t=e.data,r.abrupt("return",t.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(e));case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/search/movie",{params:e});case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(e,"/credits"));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(e,"/reviews"));case 2:return t=r.sent,n=t.data,console.log(n),r.abrupt("return",n);case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},529:function(r,e,t){t.r(e),t.d(e,{default:function(){return h}});var n=t(861),a=t(885),u=t(757),c=t.n(u),s=t(436),i=t(791),o=t(470),f="reviews_reviewsList__nV1RP",p="reviews_reviewsListItem__+3vVL",v="reviews_author__N306i",l="reviews_reviewsContent__srwgO",d=t(184);var h=function(){var r=(0,i.useState)(),e=(0,a.Z)(r,2),t=e[0],u=e[1],h=(0,o.UO)().movieId;return(0,i.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,s.q5)(h);case 2:e=r.sent,console.log(e.results),u(e.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[h]),(0,d.jsx)("ul",{className:f,children:null===t||void 0===t?void 0:t.map((function(r){return(0,d.jsxs)("li",{className:p,children:[(0,d.jsxs)("p",{className:v,children:["Author: ",r.author]}),(0,d.jsx)("p",{className:l,children:r.content})]},r.id)}))})}}}]);
//# sourceMappingURL=529.74676fa0.chunk.js.map