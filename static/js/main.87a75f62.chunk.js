(this["webpackJsonptoy-project1"]=this["webpackJsonptoy-project1"]||[]).push([[0],{36:function(e,t,n){e.exports=n(66)},41:function(e,t,n){},46:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),u=(n(41),n(33)),l=n(2),i=n(8),s=(n(46),function(e){var t=e.navProp;return a.createElement("div",null,t)}),p=n(11),E=n.n(p),m=n(15),d=n(35),v=n(32),f=n.n(v),h=function(){var e=Object(m.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://api.github.com/users/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.b)(),t=Object(a.useState)(""),n=Object(d.a)(t,2),o=n[0],c=n[1];return r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"github id",onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{onClick:Object(m.a)(E.a.mark((function t(){var n,a,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(o);case 2:n=t.sent,a=JSON.stringify(n).split(","),r="",a.forEach((function(e){r+=e+"<br/>"})),document.getElementsByClassName("log")[0].innerHTML=r,e({type:"SET_CURRENT_USER",payload:n});case 8:case"end":return t.stop()}}),t)})))},"GET GITHUB INFO"),r.a.createElement("div",null,r.a.createElement("h4",null,"INFO :"),r.a.createElement("p",{className:"log"})))},g="counter/INCREASE",y="counter/DECREASE",O=function(){var e=Object(i.c)((function(e){return e.counter})),t=Object(i.b)();return r.a.createElement("div",null,r.a.createElement("div",{style:{padding:"15px"}},"Counter",r.a.createElement("br",null),r.a.createElement("input",{type:"button",value:"+1",onClick:function(){return t({type:g})}}),r.a.createElement("input",{type:"button",value:"-1",onClick:function(){return t({type:y})}}),r.a.createElement("input",{type:"button",value:"+5",onClick:function(){return t({type:"counter/INCREASE_BY",payload:5})}}),r.a.createElement("hr",null),"Number : ",e?e.count:"bad"))},j=function(){var e=Object(i.c)((function(e){return e.auth}));return a.createElement("div",null,a.createElement("img",{className:"bonobono",src:"./bonobono.jpg"}),a.createElement("div",{className:"foo"},a.createElement(s,{navProp:"This is navigation"}),a.createElement("h1",null,"Hello ",e.isAuthenticated?e.user.login:""),a.createElement(b,null),a.createElement(O,null)))},w=function(){return r.a.createElement(u.a,{basename:"/bonobono"},r.a.createElement(l.a,{exact:!0,path:"/",component:j}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=n(9),N=n(34),R=n(20),S={isAuthenticated:!1,user:{},loading:!1},k={},x={count:0},T=Object(C.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(R.a)(Object(R.a)({},e),{},{isAuthenticated:!0,user:t.payload});default:return e}},counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{count:e.count+1};case y:return{count:e.count-1};case"counter/INCREASE_BY":return{count:e.count+t.payload};default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),A=function(e){return function(t){return function(n){console.log("current state",e.getState()),console.log("action",n);var a=t(n);return console.log("next state",e.getState()),console.log("\n"),a}}},I=[N.a,A],_=Object(C.e)(T,{},Object(C.d)(C.a.apply(void 0,I)));c.a.render(r.a.createElement(i.a,{store:_},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.87a75f62.chunk.js.map