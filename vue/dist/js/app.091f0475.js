(function(t){function e(e){for(var s,u,i=e[0],o=e[1],c=e[2],l=0,v=[];l<i.length;l++)u=i[l],a[u]&&v.push(a[u][0]),a[u]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,u=1;u<n.length;u++){var o=n[u];0!==a[o]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},r=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"07b90307"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise(function(e,s){n=a[t]=[e,s]});e.push(n[2]=s);var r,o=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(t),r=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,u=new Error("Loading chunk "+t+" failed.\n("+s+": "+r+")");u.type=s,u.request=r,n[1](u)}a[t]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,o.appendChild(c)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01cb":function(t,e,n){},"0f7a":function(t,e,n){"use strict";var s=n("9f70"),a=n.n(s);a.a},"1ebb":function(t,e,n){"use strict";var s=n("3d39"),a=n.n(s);a.a},2856:function(t,e,n){},"35d7":function(t,e,n){},"3d39":function(t,e,n){},"3f1c":function(t,e,n){"use strict";var s=n("c211"),a=n.n(s);a.a},4682:function(t,e,n){"use strict";var s=n("fd07"),a=n.n(s);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),a=n("8323"),r=n.n(a),u=n("263c"),i=n.n(u),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("div",{staticClass:"date"},[t._v(t._s(t.$store.state.date))]),n("div",[n("span",{staticClass:"logo"},[t._v("Coordinates")]),n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("router-link",{attrs:{to:"/upcoming"}},[t._v("Upcoming")])],1)]),n("div",{staticClass:"uk-container uk-container-expand",attrs:{id:"content"}},[n("router-view")],1)])},c=[],l=(n("5c0b"),n("2877")),d={},v=Object(l["a"])(d,o,c,!1,null,null,null);v.options.__file="App.vue";var f=v.exports,p=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"today"},[n("h1",[t._v("Today")]),n("EventsToday"),t.adding?n("NewEvent",{on:{ok:function(e){t.adding=!1},cxl:function(e){t.adding=!1}}}):t._e(),t.adding?t._e():n("div",[n("button",{on:{click:function(e){t.adding=!0}}},[n("span",{attrs:{"uk-icon":"plus"}}),t._v("New Entry")])])],1)},h=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.events,function(e){return n("div",{staticClass:"event"},[n("div",{staticClass:"dates"},[t._v(t._s(e.dates.start)+" – "+t._s(e.dates.end))]),n("div",{staticClass:"title"},[t._v(t._s(e.user_id)+" "+t._s(e.status))]),n("div",{staticClass:"notes"},[t._v(t._s(e.notes))])])}))},b=[],g=n("2ef0"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{staticClass:"user"},[n("UserSelect",{model:{value:t.value.user_id,callback:function(e){t.$set(t.value,"user_id",e)},expression:"value.user_id"}})],1),n("td",{staticClass:"status"},[n("StatusSelect",{model:{value:t.value.status,callback:function(e){t.$set(t.value,"status",e)},expression:"value.status"}})],1),n("td",{staticClass:"start"},[n("DateSelect",{model:{value:t.value.dates.start,callback:function(e){t.$set(t.value.dates,"start",e)},expression:"value.dates.start"}})],1),n("td",{staticClass:"end"},[n("DateSelect",{model:{value:t.value.dates.end,callback:function(e){t.$set(t.value.dates,"end",e)},expression:"value.dates.end"}})],1),n("td",{staticClass:"notes"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value.notes,expression:"value.notes"}],domProps:{value:t.value.notes},on:{input:function(e){e.target.composing||t.$set(t.value,"notes",e.target.value)}}}),n("button",{on:{click:function(e){t.$emit("ok",t.value)}}},[n("span",{attrs:{"uk-icon":"check"}})]),n("button",{on:{click:function(e){t.$emit("cxl")}}},[n("span",{attrs:{"uk-icon":"close"}})])])])},k=[],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"uk-inline"},[n("Datepicker",{staticClass:"date",attrs:{format:"yyyy-MM-dd"},on:{input:function(e){t.$emit("input",t.date)}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)},C=[],x=n("fa33"),y={name:"DateSelect",props:["value"],components:{Datepicker:x["a"]},data:function(){return{date:this.value}}},S=y,$=(n("0f7a"),Object(l["a"])(S,E,C,!1,null,null,null));$.options.__file="DateSelect.vue";var O=$.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"uk-inline"},[n("button",{staticClass:"uk-button uk-button-default"},[t._v(t._s(t.status||" "))]),n("div",{attrs:{"uk-dropdown":"mode: click"}},[n("ul",{staticClass:"uk-nav uk-dropdown-nav"},t._l(t.statuses,function(e){return n("li",{key:e},[n("span",{on:{click:function(n){t.setStatus(e)}}},[t._v(t._s(e))])])}))])])},D=[],R={name:"StatusSelect",props:["value"],data:function(){return{status:this.value}},computed:{statuses:function(){return this.$store.state.statuses}},methods:{setStatus:function(t){this.status=t,this.$emit("input",t)}}},T=R,U=(n("4682"),Object(l["a"])(T,j,D,!1,null,"6f19de22",null));U.options.__file="StatusSelect.vue";var P=U.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"uk-inline"},[n("button",{staticClass:"uk-button uk-button-default"},[t._v(t._s(t.userId||" "))]),n("div",{attrs:{"uk-dropdown":"mode: click"}},[n("ul",{staticClass:"uk-nav uk-dropdown-nav"},t._l(t.users,function(e){return n("li",{key:e.user_id},[n("span",{on:{click:function(n){t.setUser(e.user_id)}}},[t._v(t._s(e.user_id))])])}))])])},N=[],A={name:"UserSelect",props:["value"],data:function(){return{userId:this.value}},computed:{users:function(){return this.$store.state.users}},methods:{setUser:function(t){this.userId=t,this.$emit("input",t)}}},I=A,F=(n("fef1"),Object(l["a"])(I,M,N,!1,null,"5122de9e",null));F.options.__file="UserSelect.vue";var B=F.exports,J={props:["value"],components:{DateSelect:O,StatusSelect:P,UserSelect:B},data:function(){return{}}},Y=J,H=(n("7643"),n("b894"),Object(l["a"])(Y,w,k,!1,null,"029ee3c7",null));H.options.__file="EventRowEdit.vue";var L=H.exports,q=(n("96cf"),n("3040"));function z(t){return 200<=t&&t<300}function G(t){return K.apply(this,arguments)}function K(){return K=Object(q["a"])(regeneratorRuntime.mark(function t(e){var n,s,a,r=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e="/api/v1"+e,t.next=4,fetch(e,n);case 4:if(s=t.sent,z(s.status)){t.next=8;break}return console.log("fetch",e,"failed:",s),t.abrupt("return");case 8:return t.next=10,s.json();case 10:if(a=t.sent,z(a.status_code)){t.next=14;break}return console.log("fetch",e,"failed:",a),t.abrupt("return");case 14:return t.abrupt("return",a);case 15:case"end":return t.stop()}},t,this)})),K.apply(this,arguments)}function Q(){return V.apply(this,arguments)}function V(){return V=Object(q["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,G("/statuses");case 2:return t.abrupt("return",t.sent.statuses);case 3:case"end":return t.stop()}},t,this)})),V.apply(this,arguments)}function W(){return X.apply(this,arguments)}function X(){return X=Object(q["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,G("/users");case 2:return t.abrupt("return",t.sent.users);case 3:case"end":return t.stop()}},t,this)})),X.apply(this,arguments)}function Z(){return tt.apply(this,arguments)}function tt(){return tt=Object(q["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,G("/events");case 2:return t.abrupt("return",t.sent.events);case 3:case"end":return t.stop()}},t,this)})),tt.apply(this,arguments)}function et(t){return nt.apply(this,arguments)}function nt(){return nt=Object(q["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n={user_id:e.user_id,status:e.status,dates:{start:e.dates.start.toISOString().substring(0,10),end:e.dates.end.toISOString().substring(0,10)},notes:e.notes},t.next=3,G("/events",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 3:return t.abrupt("return",t.sent.event);case 4:case"end":return t.stop()}},t,this)})),nt.apply(this,arguments)}function st(t){return at.apply(this,arguments)}function at(){return at=Object(q["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,G("/events/"+e,{method:"DELETE"});case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}},t,this)})),at.apply(this,arguments)}function rt(){var t=new Date;return new Date(t.getFullYear(),t.getMonth(),t.getDate())}function ut(){var t=rt();return{user_id:null,status:null,dates:{start:t,end:t},notes:""}}n("f576");function it(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate())}function ot(t){return t?t.getFullYear()+"-"+(t.getMonth()+1+"").padStart(2,"0")+"-"+(t.getDate()+"").padStart(2,"0"):""}function ct(t,e,n){return(!e||e<=t)&&(!n||t<=n)}function lt(t,e,n,s){return(!t||!s||t<=s)&&(!n||!e||n<=e)}var dt={props:[],components:{EventRowEdit:L},data:function(){return{newEvent:null}},computed:{events:function(){var t=this;return Object(g["sortBy"])(Object(g["filter"])(this.$store.state.events,function(e){return ct(t.$store.state.date,e.dates.start,e.dates.end)}),function(t){return t.dates.start})}},methods:{inRange:ct,addEvent:function(t){var e=this;this.adding=!1,et(t).then(function(t){e.$store.commit("addEvent",t)})}}},vt=dt,ft=(n("e878"),Object(l["a"])(vt,_,b,!1,null,"54fad9d0",null));ft.options.__file="EventsToday.vue";var pt=ft.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form"},[n("label",[t._v("User")]),n("UserSelect",{staticClass:"user",model:{value:t.value.user_id,callback:function(e){t.$set(t.value,"user_id",e)},expression:"value.user_id"}}),n("label",[t._v("Status")]),n("StatusSelect",{staticClass:"status",model:{value:t.value.status,callback:function(e){t.$set(t.value,"status",e)},expression:"value.status"}}),n("label",[t._v("Start Date")]),n("DateSelect",{model:{value:t.value.dates.start,callback:function(e){t.$set(t.value.dates,"start",e)},expression:"value.dates.start"}}),n("label",[t._v("End Date")]),n("DateSelect",{model:{value:t.value.dates.end,callback:function(e){t.$set(t.value.dates,"end",e)},expression:"value.dates.end"}}),n("label",[t._v("Notes")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.value.notes,expression:"value.notes"}],domProps:{value:t.value.notes},on:{input:function(e){e.target.composing||t.$set(t.value,"notes",e.target.value)}}}),n("div",{staticClass:"buttons"},[n("button",{on:{click:function(e){t.addEvent()}}},[t._v("Add")]),n("button",{on:{click:function(e){t.$emit("cxl")}}},[t._v("Cancel")])])],1)},ht=[],_t={props:[],components:{DateSelect:O,StatusSelect:P,UserSelect:B},data:function(){return console.log(ut()),{value:ut()}},methods:{addEvent:function(){var t=this;et(this.value).then(function(e){t.$store.commit("addEvent",e),t.$emit("ok",e),console.log("before",t.value.user_id),t.$set(t,"value",ut()),console.log("after",t.value.user_id)})}}},bt=_t,gt=(n("1ebb"),Object(l["a"])(bt,mt,ht,!1,null,"02bc176c",null));gt.options.__file="NewEvent.vue";var wt=gt.exports,kt={name:"home",components:{EventsToday:pt,NewEvent:wt},data:function(){return{adding:!1}}},Et=kt,Ct=(n("9138"),Object(l["a"])(Et,m,h,!1,null,"1b5ab358",null));Ct.options.__file="Home.vue";var xt=Ct.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Upcoming Coordinates")]),n("EventTable",{attrs:{start:t.$store.state.date}})],1)},St=[],$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",{staticClass:"event-table"},[t._m(0),n("tbody",[t._m(1),t._l(t.events,function(e){return n("tr",{class:{current:t.inRange(t.$store.state.date,e.dates.start,e.dates.end)}},[n("td",{staticClass:"user"},[n("div",{staticClass:"field"},[t._v(t._s(e.user_id))])]),n("td",{staticClass:"status"},[n("div",{staticClass:"field"},[t._v(t._s(e.status))])]),n("td",{staticClass:"start-date"},[n("div",{staticClass:"field"},[t._v(t._s(e.dates.start))])]),n("td",{staticClass:"end-date"},[n("div",{staticClass:"field"},[t._v(t._s(e.dates.end))])]),n("td",{staticClass:"notes"},[n("span",{staticClass:"field"},[t._v(t._s(e.notes))]),n("span",{staticClass:"delete",on:{click:function(n){t.onDelete(e)}}},[n("span",{attrs:{"uk-icon":"trash",ratio:"0.8"}})])])])}),t._m(2),t.adding?n("EventRowEdit",{on:{cxl:function(e){t.adding=!1},ok:function(e){t.addEvent(e)}},model:{value:t.newEvent,callback:function(e){t.newEvent=e},expression:"newEvent"}}):t._e()],2)]),t.adding?t._e():n("button",{on:{click:function(e){t.onAdd()}}},[t._v("Add")])])},Ot=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{staticClass:"user"},[n("div",{staticClass:"field"},[t._v("Colleage")])]),n("th",{staticClass:"status"},[n("div",{staticClass:"field"},[t._v("Coordinates")])]),n("th",{staticClass:"start-date"},[n("div",{staticClass:"field"},[t._v("From")])]),n("th",{staticClass:"end-date"},[n("div",{staticClass:"field"},[t._v("To")])]),n("th",{staticClass:"notes"},[n("div",{staticClass:"field"})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"spacer"},[n("td")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"spacer"},[n("td")])}],jt={props:["start","end"],components:{EventRowEdit:L},data:function(){return{adding:!1,newEvent:null}},computed:{events:function(){var t=this;return Object(g["sortBy"])(Object(g["filter"])(this.$store.state.events,function(e){return lt(t.start,t.end,e.dates.start,e.dates.end)}),function(t){return t.dates.start})}},methods:{inRange:ct,onAdd:function(){this.newEvent=ut(),this.adding=!0},onDelete:function(){var t=Object(q["a"])(regeneratorRuntime.mark(function t(e){var n,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n="Delete "+e.user_id+" "+e.status+"?",t.next=3,r.a.modal.confirm(n);case 3:return t.next=5,st(e.event_id);case 5:s=t.sent,this.$store.commit("deleteEvent",s);case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),addEvent:function(t){var e=this;this.adding=!1,et(t).then(function(t){e.$store.commit("addEvent",t)})}}},Dt=jt,Rt=(n("3f1c"),Object(l["a"])(Dt,$t,Ot,!1,null,null,null));Rt.options.__file="EventTable.vue";var Tt=Rt.exports,Ut={name:"Upcoming",components:{EventTable:Tt},computed:{}},Pt=Ut,Mt=(n("a81e"),Object(l["a"])(Pt,yt,St,!1,null,"64458730",null));Mt.options.__file="Upcoming.vue";var Nt=Mt.exports;s["a"].use(p["a"]);var At=new p["a"]({routes:[{path:"/",name:"home",component:xt},{path:"/upcoming",name:"Upcoming",component:Nt},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),It=n("2f62");s["a"].use(It["a"]);var Ft=new It["a"].Store({state:{statuses:[],users:[],events:[],date:null},_updateDate:function(){var t=this;this.setTime(),window.setTimeout(function(){return t._tick()},1e3-this.state.time%1e3)},mutations:{setDate:function(t,e){t.date=e},setStatuses:function(t,e){t.statuses=e},setUsers:function(t,e){t.users=e},addEvent:function(t,e){t.events.push(e)},deleteEvent:function(t,e){t.events=t.events.filter(function(t){return t.event_id!=e})},refreshEvents:function(t,e){t.events=e}},actions:{}});function Bt(){var t=new Date,e=it(t);Ft.commit("setDate",ot(e));var n=864e5-(t-e);window.setTimeout(Bt,n)}Bt();var Jt=180;function Yt(){Z().then(function(t){Ft.commit("refreshEvents",t)}).catch(function(t){console.log("searchEvents:",t)}),window.setTimeout(Yt,1e3*Jt)}Yt();var Ht=Ft;r.a.use(i.a),window.UIkit=r.a,s["a"].config.productionTip=!1,new s["a"]({router:At,store:Ht,render:function(t){return t(f)},created:function(){var t=this;Q().then(function(e){t.$store.commit("setStatuses",e)}),W().then(function(e){t.$store.commit("setUsers",e)})}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("2856"),a=n.n(s);a.a},7643:function(t,e,n){"use strict";var s=n("ffd8"),a=n.n(s);a.a},9036:function(t,e,n){},9138:function(t,e,n){"use strict";var s=n("01cb"),a=n.n(s);a.a},"9f70":function(t,e,n){},a81e:function(t,e,n){"use strict";var s=n("35d7"),a=n.n(s);a.a},b894:function(t,e,n){"use strict";var s=n("9036"),a=n.n(s);a.a},c211:function(t,e,n){},cdff:function(t,e,n){},e878:function(t,e,n){"use strict";var s=n("cdff"),a=n.n(s);a.a},ee10:function(t,e,n){},fd07:function(t,e,n){},fef1:function(t,e,n){"use strict";var s=n("ee10"),a=n.n(s);a.a},ffd8:function(t,e,n){}});
//# sourceMappingURL=app.091f0475.js.map