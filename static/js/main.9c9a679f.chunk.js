(this["webpackJsonptoy-project1"]=this["webpackJsonptoy-project1"]||[]).push([[0],{36:function(e,t,n){e.exports=n(66)},41:function(e,t,n){},46:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),u=(n(41),n(33)),i=n(2),l=n(10),s=function(e){var t=e.navProp;return a.createElement("div",null,t)},m=(n(46),n(11)),p=n.n(m),h=n(15),v=n(35),d=n(32),g=n.n(d),f=function(){var e=Object(h.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://api.github.com/users/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.b)(),t=Object(a.useState)(""),n=Object(v.a)(t,2),o=n[0],c=n[1];return r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"github id",onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{onClick:Object(h.a)(p.a.mark((function t(){var n,a,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(o);case 2:n=t.sent,a=JSON.stringify(n).split(","),r="",a.forEach((function(e){r+=e+"<br/>"})),document.getElementsByClassName("log")[0].innerHTML=r,e({type:"SET_CURRENT_USER",payload:n});case 8:case"end":return t.stop()}}),t)})))},"GET GITHUB INFO"),r.a.createElement("div",null,r.a.createElement("h4",null,"INFO :"),r.a.createElement("p",{className:"log"})))},b=function(){var e=Object(l.c)((function(e){return e.auth}));return a.createElement("div",null,a.createElement("img",{className:"bonobono",src:"https://lh3.googleusercontent.com/proxy/H0D6NjBYlo8h5Frmj7EcWIOK59aQLeC4vUrIr61KW2CuL62CdTc4yrVHKHhgvTCA98Ox69FMgACeT1qgcsFMugWLOYMmnptkSCNdJDvvvhnLFKWHc5FP9o-91FimRPu9untu8m592kljaiTYbs0R0GWPww6YIXgpamvS"}),a.createElement("div",{className:"foo"},a.createElement(s,{navProp:"This is navigation"}),a.createElement("h1",null,"Hello ",e.isAuthenticated?e.user.login:""),a.createElement(E,null)))},O=function(){return r.a.createElement(u.a,{basename:"/bonobono"},r.a.createElement(i.a,{exact:!0,path:"/",component:b}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=n(8),j=n(34),w=n(20),T={isAuthenticated:!1,user:{},loading:!1},C={},N=Object(y.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(w.a)(Object(w.a)({},e),{},{isAuthenticated:!0,user:t.payload});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),R=function(e){return function(t){return function(n){console.log("current state",e.getState()),console.log("action",n);var a=t(n);return console.log("next state",e.getState()),console.log("\n"),a}}},S=[j.a,R],x=Object(y.e)(N,{},Object(y.d)(y.a.apply(void 0,S)));c.a.render(r.a.createElement(l.a,{store:x},r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.9c9a679f.chunk.js.map