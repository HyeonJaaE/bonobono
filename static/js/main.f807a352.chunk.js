(this["webpackJsonptoy-project1"]=this["webpackJsonptoy-project1"]||[]).push([[0],{39:function(e,t,n){e.exports=n(70)},44:function(e,t,n){},49:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),u=(n(44),n(36)),l=n(2),i=n(8),s=(n(49),function(e){var t=e.navProp;return a.createElement("div",null,t)}),m=n(12),E=n.n(m),p=n(17),b=n(10),h=n(35),f=n.n(h),v=function(){var e=Object(p.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://api.github.com/users/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d="SET_CURRENT_USER",g=function(){var e=Object(i.b)(),t=Object(a.useState)(""),n=Object(b.a)(t,2),o=n[0],c=n[1];return r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"github id",onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{onClick:Object(p.a)(E.a.mark((function t(){var n,a,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(o);case 2:n=t.sent,a=JSON.stringify(n).split(","),r="",a.forEach((function(e){r+=e+"<br/>"})),document.getElementsByClassName("log")[0].innerHTML=r,e({type:d,payload:n});case 8:case"end":return t.stop()}}),t)})))},"GET GITHUB INFO"),r.a.createElement("div",null,r.a.createElement("h4",null,"INFO :"),r.a.createElement("p",{className:"log"})))},y="counter/INCREASE",O="counter/DECREASE",j=function(){var e=Object(i.c)((function(e){return e.counter})),t=Object(a.useState)(0),n=Object(b.a)(t,2),o=n[0],c=n[1],u=Object(i.b)();return r.a.createElement("div",null,r.a.createElement("div",{style:{padding:"15px"}},"Counter",r.a.createElement("br",null),r.a.createElement("input",{type:"button",value:"+1",onClick:function(){return u({type:y})}}),r.a.createElement("input",{type:"button",value:"-1",onClick:function(){return u({type:O})}}),r.a.createElement("input",{type:"number",onChange:function(e){c(Number(e.target.value))}}),r.a.createElement("input",{type:"button",value:"+"+o,onClick:function(){return u(function(e){return{type:"counter/INCREASE_BY",payload:e}}(o))}}),r.a.createElement("hr",null),"Number : ",e?e.count:"bad"))},w=n(38),C=(n(68),function(e){return Math.floor(Math.random()*e)}),S=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)([0,0,0]),u=Object(b.a)(c,2),l=u[0],i=u[1],s=Object(a.useState)({honesty:0,choose:0,done:!1,result:-1}),m=Object(b.a)(s,2),E=m[0],p=m[1];Object(a.useEffect)((function(){p({honesty:C(101),choose:C(3),done:!1,result:-1})}),[n]),Object(a.useEffect)((function(){if(console.log("info",E),-1!==E.result){var e=l;e[E.result]+=1,i(Object(w.a)(e))}}),[E]);return r.a.createElement("div",{className:"rsp"},r.a.createElement("div",null,r.a.createElement("h1",null,"\ubcf4\ub178\ubcf4\ub178\ub791 \uac00\uc704\ubc14\uc704\ubcf4\ud558\uae30"),r.a.createElement("p",null,"\ubcf4\ub178\ubcf4\ub178\uac00 \uac70\uc9d3\ub9d0 \ud588\uc744 \ud655\ub960 ",E.honesty,"%"),r.a.createElement("h3",null,"(\u30fb\u221e\u30fb) : ",E.done?["\ubc14\uc704","\uac00\uc704","\ubcf4"][E.choose]:["\ub098 \uc774\ubc88\uc5d0 \ubc14\uc704 \ub0bc\uaebc\uc57c~","\uc774\ubc88\uc5d4 \uac00\uc704 \ub0bc\uac70\uc57c","\ubcf4\uc790\uae30 \ub0bc\uac70\uc57c"][E.choose]),r.a.createElement("p",{onClick:function(e){console.log("\ub0b4\uac00 \ub0b8 \uac83:",e.target.value);var t=C(101),n=E.choose,a=0;if(E.honesty>=t)for(console.log("\uac70\uc9d3\ub9d0\uc774\ub2e4");E.choose===n;)n=C(3);switch(e.target.value){case"r":0===n&&(a=1),1===n&&(a=0),2===n&&(a=2);break;case"s":0===n&&(a=2),1===n&&(a=1),2===n&&(a=0);break;case"p":0===n&&(a=0),1===n&&(a=2),2===n&&(a=1)}p({honesty:E.honesty,choose:n,done:!0,result:a})}},"\ub098\ub294 \ubb34\uc5bc \ub0bc\uae4c :",r.a.createElement("br",null),r.a.createElement("button",{value:"r"},"\ubc14\uc704"),r.a.createElement("button",{value:"s"},"\uac00\uc704"),r.a.createElement("button",{value:"p"},"\ubcf4")),E.done?r.a.createElement("div",null,["\uc2b9\ub9ac","\ube44\uae40","\ud328\ubc30"][E.result],r.a.createElement("button",{onClick:function(){return o(!n)}},"\uacc4\uc18d"),r.a.createElement("br",null),l):r.a.createElement("p",null,l)),r.a.createElement("div",null))},k=function(){var e=Object(i.c)((function(e){return e.auth}));return a.createElement("div",null,a.createElement("img",{className:"bonobono",src:"/bonobono/bonobono.jpg"}),a.createElement("div",{className:"foo"},a.createElement(s,{navProp:"This is navigation"}),a.createElement("h1",null,"Hello ",e.isAuthenticated?e.user.login:""),a.createElement(g,null),a.createElement(j,null),a.createElement(S,null)))},N=function(){return r.a.createElement(u.a,{basename:"/bonobono"},r.a.createElement(l.a,{exact:!0,path:"/",component:k}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=n(9),x=n(37),A=n(23),I={isAuthenticated:!1,user:{}},T={},B={count:0},_=Object(R.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(A.a)(Object(A.a)({},e),{},{isAuthenticated:!0,user:t.payload});default:return e}},counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{count:e.count+1};case O:return{count:e.count-1};case"counter/INCREASE_BY":return{count:e.count+t.payload};default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),G=function(e){return function(t){return function(n){console.log("current state",e.getState()),console.log("action",n);var a=t(n);return console.log("next state",e.getState()),console.log("\n"),a}}},H=[x.a,G],J=Object(R.e)(_,{},Object(R.d)(R.a.apply(void 0,H)));c.a.render(r.a.createElement(i.a,{store:J},r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.f807a352.chunk.js.map