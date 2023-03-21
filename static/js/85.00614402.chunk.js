"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[85],{3085:function(e,r,n){n.r(r),n.d(r,{default:function(){return k}});var t,a,c,i,o=n(5861),s=n(9439),u=n(7757),p=n.n(u),d=n(2791),l=n(1087),f=n(7689),x=n(168),h=n(6444),v=((0,h.ZP)(l.OL)(t||(t=(0,x.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n"]))),h.ZP.div(a||(a=(0,x.Z)(["\n    max-width: 1280px;\n    margin: 0 auto;\n    padding: 0 16px;\n    border-bottom: 1px solid black;\n  "])))),g=h.ZP.div(c||(c=(0,x.Z)(["\n    gap: 68px;\n    padding: 40px 72px 40px 36px;\n    display: flex;\n"]))),b=h.ZP.img(i||(i=(0,x.Z)(["\n    display: block;\n    width: 264px;\n    height: 374px;\n    object-fit: cover;\n    border-radius: 5px;\n    border: 1px solid #d1cdcd;\n"]))),m=n(184),w=function(e){var r,n,t=e.movie,a=t.poster_path,c=t.title,i=t.release_date,o=t.vote_average,s=t.genres,u=t.overview,p=s.map((function(e){return e.name})).join(" "),x="http://image.tmdb.org/t/p/w500/".concat(a),h=(0,f.TH)(),w=(0,d.useRef)(null!==(r=null===(n=h.state)||void 0===n?void 0:n.from)&&void 0!==r?r:"/movies");return console.log(t),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(v,{children:[(0,m.jsx)(l.rU,{to:w.current,children:" \u2190 Go Back "}),(0,m.jsxs)(g,{children:[(0,m.jsx)("div",{children:(0,m.jsx)(b,{src:x,alt:c})}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("h2",{children:["Adition information ",c," (",i.slice(0,4),") "]}),(0,m.jsxs)("p",{children:["User Score:  ",Math.round(10*o),"% "]}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsxs)("p",{children:[u," "]}),(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)("p",{children:p})]})]})]}),(0,m.jsx)(v,{children:(0,m.jsxs)("ul",{children:[(0,m.jsxs)("li",{children:[" ",(0,m.jsx)(l.rU,{to:"cast",children:"Cast"})," "]}),(0,m.jsxs)("li",{children:[" ",(0,m.jsx)(l.rU,{to:"reviews",children:"Reviews"})," "]})]})})]})},j=n(2690),k=function(){var e=(0,d.useState)(""),r=(0,s.Z)(e,2),n=r[0],t=r[1],a=(0,f.UO)().id;return(0,d.useEffect)((function(){function e(){return e=(0,o.Z)(p().mark((function e(r){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,j.l2)(r);case 3:n=e.sent,t(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),e.apply(this,arguments)}!function(r){e.apply(this,arguments)}(a)}),[a]),(0,m.jsxs)("div",{children:[n&&(0,m.jsx)(w,{movie:n}),(0,m.jsx)(d.Suspense,{fallback:(0,m.jsx)("div",{children:"Loading subpage..."}),children:(0,m.jsx)(f.j3,{})})]})}},2690:function(e,r,n){n.d(r,{fU:function(){return d},h6:function(){return s},l2:function(){return p},sv:function(){return l},wr:function(){return u}});var t=n(5861),a=n(7757),c=n.n(a),i=n(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="70dafc4dedeb92246e41153ac2fb24f3",s=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,i.Z.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(r,"&page=").concat(n,"&include_adult=false"));case 3:if((t=e.sent).data.total_results){e.next=6;break}return e.abrupt("return",Promise.reject(new Error('\u041f\u043e \u0437\u0430\u043f\u0438\u0442\u0443 "'.concat(r,'" \u0444\u0456\u043b\u044c\u043c\u0456\u0432 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e'))));case 6:return e.abrupt("return",t.data);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/week?api_key=".concat(o));case 2:if((r=e.sent).data.total_results){e.next=5;break}return e.abrupt("return",Promise.reject(new Error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u043e\u0448\u0443\u043a\u0443")));case 5:return e.abrupt("return",r.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(r,"?api_key=").concat(o,"&language=en-US"));case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return",Promise.reject(new Error('\u041f\u043e \u0437\u0430\u043f\u0438\u0442\u0443 "'.concat(r,'" \u0444\u0456\u043b\u044c\u043ca \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e'))));case 5:return console.log(n),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(r,"/credits?api_key=").concat(o,"&language=en-US"));case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return",Promise.reject(new Error('\u041f\u043e \u0437\u0430\u043f\u0438\u0442\u0443 "'.concat(r,'" \u0444\u0456\u043b\u044c\u043ca \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e'))));case 5:return e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(r,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:if((n=e.sent).data.total_pages){e.next=5;break}return e.abrupt("return",Promise.reject(new Error('\u041f\u043e \u0437\u0430\u043f\u0438\u0442\u0443 "'.concat(r,'" \u0444\u0456\u043b\u044c\u043ca \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e'))));case 5:return e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=85.00614402.chunk.js.map