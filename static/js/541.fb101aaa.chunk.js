"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541],{2541:function(e,r,t){t.r(r);var n=t(5861),a=t(9439),c=t(7757),u=t.n(c),o=t(7689),s=t(2791),i=t(2690),p=t(184);r.default=function(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),t=r[0],c=r[1],f=(0,o.UO)().id;return(0,s.useEffect)((function(){function e(){return e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.fU)(r);case 3:t=e.sent,c(t.cast),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),e.apply(this,arguments)}!function(r){e.apply(this,arguments)}(f)}),[f]),(0,p.jsx)("div",{children:(0,p.jsx)("ul",{children:t.map((function(e){var r=e.id,t=e.name,n=e.character,a=e.profile_path;return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:"http://image.tmdb.org/t/p/w185".concat(a),alt:t}),(0,p.jsxs)("h3",{children:[" ",t," "]}),(0,p.jsxs)("p",{children:["Character: ",n]})]},r)}))})})}},2690:function(e,r,t){t.d(r,{fU:function(){return f},h6:function(){return s},l2:function(){return p},sv:function(){return l},wr:function(){return i}});var n=t(5861),a=t(7757),c=t.n(a),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="70dafc4dedeb92246e41153ac2fb24f3",s=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,u.Z.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(r,"&page=").concat(t,"&include_adult=false"));case 3:if((n=e.sent).data.total_results){e.next=6;break}return e.abrupt("return",Promise.reject(new Error('\u041f\u043e \u0437\u0430\u043f\u0438\u0442\u0443 "'.concat(r,'" \u0444\u0456\u043b\u044c\u043c\u0456\u0432 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e'))));case 6:return e.abrupt("return",n.data);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/week?api_key=".concat(o));case 2:if((r=e.sent).data.total_results){e.next=5;break}return e.abrupt("return",Promise.reject(new Error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u043e\u0448\u0443\u043a\u0443")));case 5:return e.abrupt("return",r.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(r,"?api_key=").concat(o,"&language=en-US"));case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return",Promise.reject(new Error('\u041f\u043e \u0437\u0430\u043f\u0438\u0442\u0443 "'.concat(r,'" \u0444\u0456\u043b\u044c\u043ca \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e'))));case 5:return console.log(t),e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(r,"/credits?api_key=").concat(o,"&language=en-US"));case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return",Promise.reject(new Error('\u041f\u043e \u0437\u0430\u043f\u0438\u0442\u0443 "'.concat(r,'" \u0444\u0456\u043b\u044c\u043ca \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e'))));case 5:return e.abrupt("return",t.data);case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(r,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:if((t=e.sent).data.total_pages){e.next=5;break}return e.abrupt("return",Promise.reject(new Error('\u041f\u043e \u0437\u0430\u043f\u0438\u0442\u0443 "'.concat(r,'" \u0444\u0456\u043b\u044c\u043ca \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e'))));case 5:return e.abrupt("return",t.data);case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=541.fb101aaa.chunk.js.map