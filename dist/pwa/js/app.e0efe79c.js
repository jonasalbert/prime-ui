(function(e){function t(t){for(var r,i,o=t[0],u=t[1],d=t[2],c=0,l=[];c<o.length;c++)i=o[c],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&l.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(l.length)l.shift()();return s.push.apply(s,d||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var o=n[i];0!==a[o]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},i={app:0},a={app:0},s=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"01f5208a":"a56a3303","1b57efe0":"d6c3f7dc","23fe5ed9":"e09d532c","2d22c0ff":"92503a68","4b47640d":"0cebc80e","65f53143":"369de301","9a65978e":"1146a56f"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"01f5208a":1,"1b57efe0":1,"23fe5ed9":1,"65f53143":1,"9a65978e":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"01f5208a":"1a921aee","1b57efe0":"16136b40","23fe5ed9":"d0a8018e","2d22c0ff":"31d6cfe0","4b47640d":"31d6cfe0","65f53143":"fe7c7ea5","9a65978e":"cbdb8d35"}[e]+".css",a=u.p+r,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var d=s[o],c=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(c===r||c===a))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){d=l[o],c=d.getAttribute("data-href");if(c===r||c===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete i[e],f.parentNode.removeChild(f),n(s)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var d,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=o(e);var l=new Error;d=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}a[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:c})}),12e4);c.onerror=c.onload=d,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],c=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var f=c;s.push([0,"vendor"]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"22af":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"someGetter",(function(){return o}));var i={};n.r(i),n.d(i,"setList",(function(){return l})),n.d(i,"setIsLoadingList",(function(){return f})),n.d(i,"setSelected",(function(){return p})),n.d(i,"add",(function(){return m})),n.d(i,"del",(function(){return v})),n.d(i,"update",(function(){return _}));var a={};n.r(a),n.d(a,"someAction",(function(){return b}));var s={list:{data:[],isLoading:!1},selected:{}};function o(){}n("20d6"),n("7514");var u=n("2b0e"),d=n("2ef0"),c=n.n(d);function l(e,t){u["a"].set(e.list,"data",t)}function f(e,t){u["a"].set(e.list,"isLoading",t)}function p(e,t){console.log("setSelected value...",t);var n=c.a.find(e.list.data,{selected:1});console.log("setSelected...",n),void 0!==n&&(n.selected=0),t.selected=1,console.log("setSelected value...",t),u["a"].set(e,"selected",t)}function m(e,t){e.list.data.push(t)}function v(e,t){var n=e.list.data.findIndex((function(e){return e.id===t.id}));e.list.data.splice(n,1)}function _(e,t){console.log("update...",t);var n=e.list.data.findIndex((function(e){return e.id===t.id}));e.list.data.splice(n,1,t)}function b(){}t["default"]={namespaced:!0,getters:r,mutations:i,actions:a,state:s}},"2da9":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"someGetter",(function(){return o}));var i={};n.r(i),n.d(i,"someMutation",(function(){return u}));var a={};n.r(a),n.d(a,"someAction",(function(){return d}));var s=function(){return{}};function o(){}function u(){}function d(){}t["default"]={namespaced:!0,getters:r,mutations:i,actions:a,state:s}},"2f39":function(e,t,n){"use strict";n.r(t);var r=n("967e"),i=n.n(r),a=(n("a481"),n("96cf"),n("fa84")),s=n.n(a),o=(n("7d6e"),n("e54f"),n("985d"),n("0047"),n("2b0e")),u=n("1f91"),d=n("42d2"),c=n("b05d");o["a"].use(c["a"],{config:{},lang:u["a"],iconSet:d["a"]});var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},f=[],p={name:"App"},m=p,v=n("2877"),b=Object(v["a"])(m,l,f,!1,null,null,null),h=b.exports,g=n("4360"),y=n("8c4f"),x=(n("f751"),n("ac6a"),n("cadf"),n("06db"),n("8615"),n("95e2")),L=n("4200"),w=n("ecd1"),S=n("bb77"),k=n("595c"),O=function(){var e=g["default"].state.users.list.data;0==e.length&&g["default"].commit("users/setList",x);var t=g["default"].state.roles.list.data;0==t.length&&g["default"].commit("roles/setList",L);var n=g["default"].state.resources.list.data;0==n.length&&g["default"].commit("resources/setList",w);var r=g["default"].state.operations.list.data;0==r.length&&g["default"].commit("operations/setList",S);var i=g["default"].state.permissions.users.data;0==i.length&&g["default"].commit("permissions/setListUsers",k);var a=P(k,w,"resources_id"),s=_.map(a,(function(e){return _.extend({selected:!1,edited:!1},e)}));console.log("RESULT...",s)},P=function(e,t,n){return Object.values([].concat(e,t).reduce((function(e,t){var r=e[t[n]]||{};return r=Object.assign({},r,t),e[t[n]]=r,e}),{}))},j=[{path:"/",component:function(){return Promise.all([n.e("vendor"),n.e("2d22c0ff")]).then(n.bind(null,"f241"))},beforeEnter:function(e,t,n){O(),n()},children:[{path:"",component:function(){return Promise.all([n.e("vendor"),n.e("1b57efe0")]).then(n.bind(null,"e68b"))}}]},{path:"/page",component:function(){return Promise.all([n.e("vendor"),n.e("2d22c0ff")]).then(n.bind(null,"f241"))},beforeEnter:function(e,t,n){O(),n()},children:[{path:"usermanagement",name:"usermanagement",component:function(){return Promise.all([n.e("vendor"),n.e("1b57efe0")]).then(n.bind(null,"e68b"))}},{path:"synchronization",name:"synchronization",component:function(){return Promise.all([n.e("vendor"),n.e("9a65978e")]).then(n.bind(null,"c885"))}},{path:"files201",name:"files201",component:function(){return Promise.all([n.e("vendor"),n.e("65f53143")]).then(n.bind(null,"783e"))}},{path:"timeandattendance",name:"timeandattendance",component:function(){return Promise.all([n.e("vendor"),n.e("01f5208a")]).then(n.bind(null,"757e"))}},{path:"payslip",name:"payslip",component:function(){return Promise.all([n.e("vendor"),n.e("23fe5ed9")]).then(n.bind(null,"29f0"))}}]}];j.push({path:"*",component:function(){return Promise.all([n.e("vendor"),n.e("4b47640d")]).then(n.bind(null,"e51e"))}});var A=j;o["a"].use(y["a"]);var N=function(){var e=new y["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:A,mode:"hash",base:""});return e},I=function(){return E.apply(this,arguments)};function E(){return E=s()(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof g["default"]){e.next=6;break}return e.next=3,Object(g["default"])({Vue:o["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=g["default"];case 7:if(t=e.t0,"function"!==typeof N){e.next=14;break}return e.next=11,N({Vue:o["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=N;case 15:return n=e.t1,t.$router=n,r={el:"#q-app",router:n,store:t,render:function(e){return e(h)}},e.abrupt("return",{app:r,store:t,router:n});case 19:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}var U=n("9483");Object(U["a"])("service-worker.js",{ready:function(){0},registered:function(){0},cached:function(){0},updatefound:function(){0},updated:function(){0},offline:function(){0},error:function(e){0}});var M=n("bc3a"),T=n.n(M);function C(){return D.apply(this,arguments)}function D(){return D=s()(i.a.mark((function e(){var t,n,r,a,s,u,d,c,l;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,n=t.app,r=t.store,a=t.router,s=!0,u=function(e){s=!1,window.location.href=e},d=window.location.href.replace(window.location.origin,""),c=[void 0],l=0;case 11:if(!(!0===s&&l<c.length)){e.next=29;break}if("function"===typeof c[l]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,c[l]({app:n,router:a,store:r,Vue:o["a"],ssrContext:null,redirect:u,urlPath:d});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:l++,e.next=11;break;case 29:if(!1!==s){e.next=31;break}return e.abrupt("return");case 31:new o["a"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),D.apply(this,arguments)}o["a"].prototype.$axios=T.a,/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&n.e("vendor").then(n.t.bind(null,"a0db",7)),C()},4200:function(e){e.exports=JSON.parse('[{"id":1,"name":"Admin","selected":0},{"id":2,"name":"Support","selected":0},{"id":3,"name":"Accountant","selected":0},{"id":4,"name":"Auditor","selected":0}]')},"429b":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"someGetter",(function(){return o}));var i={};n.r(i),n.d(i,"setList",(function(){return l})),n.d(i,"setIsLoadingList",(function(){return f})),n.d(i,"setSelected",(function(){return p})),n.d(i,"add",(function(){return m})),n.d(i,"del",(function(){return v})),n.d(i,"update",(function(){return _}));var a={};n.r(a),n.d(a,"someAction",(function(){return g}));var s={list:{data:[],isLoading:!1},selected:{}};function o(){}n("20d6"),n("7514");var u=n("2b0e"),d=n("2ef0"),c=n.n(d);function l(e,t){u["a"].set(e.list,"data",t)}function f(e,t){u["a"].set(e.list,"isLoading",t)}function p(e,t){var n=c.a.find(e.list.data,{selected:1});void 0!==n&&(n.selected=0),t.selected=1,u["a"].set(e,"selected",t)}function m(e,t){var n=c.a.maxBy(e.list.data,(function(e){return e.prime_number}));t.prime_number=h(n.prime_number),e.list.data.push(t)}function v(e,t){var n=e.list.data.findIndex((function(e){return e.id===t.id}));e.list.data.splice(n,1)}function _(e,t){console.log("update...",t);var n=e.list.data.findIndex((function(e){return e.id===t.id}));e.list.data.splice(n,1,t)}var b=function(e){for(var t=2;t<=Math.sqrt(e);t++)if(e%t===0)return!1;return!0},h=function(e){for(var t=e+1;;t++)if(2===t||b(t))return t};function g(){}t["default"]={namespaced:!0,getters:r,mutations:i,actions:a,state:s}},4360:function(e,t,n){"use strict";n.r(t);n("a481"),n("ac6a"),n("cadf"),n("06db");var r=n("2b0e"),i=n("2f62"),a=n("bba4"),s=n.n(a);r["a"].use(i["a"]);var o=n("8c74"),u={};o.keys().forEach((function(e){if("./"!==e&&"./index.js"!==e){var t=s()(e.replace(/(\.\/|\.js)/g,""));u[t]=o(e).default}}));var d=new i["a"].Store({modules:u,strict:!1});t["default"]=d},"595c":function(e){e.exports=JSON.parse('[{"id":1,"users_id":1,"resources_id":1,"prime_formula_operations":223092870},{"id":2,"users_id":1,"resources_id":2,"prime_formula_operations":223092870},{"id":3,"users_id":1,"resources_id":3,"prime_formula_operations":223092870},{"id":4,"users_id":1,"resources_id":4,"prime_formula_operations":223092870},{"id":5,"users_id":1,"resources_id":5,"prime_formula_operations":223092870},{"id":6,"users_id":2,"resources_id":1,"prime_formula_operations":13},{"id":7,"users_id":2,"resources_id":2,"prime_formula_operations":13},{"id":8,"users_id":2,"resources_id":3,"prime_formula_operations":13},{"id":9,"users_id":2,"resources_id":4,"prime_formula_operations":13},{"id":10,"users_id":2,"resources_id":5,"prime_formula_operations":13},{"id":11,"users_id":3,"resources_id":1,"prime_formula_operations":2624622},{"id":12,"users_id":3,"resources_id":2,"prime_formula_operations":2624622},{"id":13,"users_id":3,"resources_id":3,"prime_formula_operations":2624622},{"id":14,"users_id":3,"resources_id":4,"prime_formula_operations":2624622},{"id":15,"users_id":3,"resources_id":5,"prime_formula_operations":2624622},{"id":16,"users_id":4,"resources_id":1,"prime_formula_operations":13},{"id":17,"users_id":4,"resources_id":2,"prime_formula_operations":13},{"id":18,"users_id":4,"resources_id":3,"prime_formula_operations":13},{"id":19,"users_id":4,"resources_id":4,"prime_formula_operations":13},{"id":20,"users_id":4,"resources_id":5,"prime_formula_operations":13},{"id":21,"users_id":5,"resources_id":1,"prime_formula_operations":13},{"id":22,"users_id":5,"resources_id":2,"prime_formula_operations":13},{"id":23,"users_id":5,"resources_id":3,"prime_formula_operations":13},{"id":24,"users_id":5,"resources_id":4,"prime_formula_operations":13},{"id":25,"users_id":5,"resources_id":5,"prime_formula_operations":13}]')},"8c74":function(e,t,n){var r={"./":"4360","./general/":"a01f","./module-example/":"2da9","./operations/":"429b","./permissions/":"9c00","./resources/":"c08d","./roles/":"22af","./users/":"d30e"};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id="8c74"},"95e2":function(e){e.exports=JSON.parse('[{"id":1,"name":"Ryan Dahl","selected":0},{"id":2,"name":"Yukihiro Matsumoto","selected":0},{"id":3,"name":"Guido Van Rossum","selected":0},{"id":4,"name":"Bjarne Stroustrup","selected":0},{"id":5,"name":"Anders Hejlsberg","selected":0}]')},"9c00":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"someGetter",(function(){return o}));var i={};n.r(i),n.d(i,"setListUsers",(function(){return d})),n.d(i,"setListUsersRoles",(function(){return c})),n.d(i,"setListRoles",(function(){return l})),n.d(i,"setUsersPermissions",(function(){return f})),n.d(i,"saveUsers",(function(){return p}));var a={};n.r(a),n.d(a,"someAction",(function(){return m}));var s={users:{data:[],permissions:[],isLoading:!1,selected:{}},users_roles:{data:[],isLoading:!1,selected:{}},roles:{data:[],isLoading:!1,selected:{}}};function o(){}n("20d6");var u=n("2b0e");n("2ef0");function d(e,t){u["a"].set(e.users,"data",t)}function c(e,t){u["a"].set(e.users_roles,"data",t)}function l(e,t){u["a"].set(e.roles,"data",t)}function f(e,t){u["a"].set(e.users,"permissions",t)}function p(e,t){var n=t.id,r=t.prime_formula_operations,i=e.users.data.findIndex((function(e){return e.id===n})),a=e.users.data[i];a.prime_formula_operations=r,console.log("saveUsers new value...",a),e.users.data.splice(i,1,a)}function m(){}t["default"]={namespaced:!0,getters:r,mutations:i,actions:a,state:s}},a01f:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"someGetter",(function(){return o}));var i={};n.r(i),n.d(i,"setFeaturesName",(function(){return d}));var a={};n.r(a),n.d(a,"someAction",(function(){return c}));var s={main:{featuresName:""}};function o(){}var u=n("2b0e");function d(e,t){u["a"].set(e.main,"featuresName",t)}function c(){}t["default"]={namespaced:!0,getters:r,mutations:i,actions:a,state:s}},bb77:function(e){e.exports=JSON.parse('[{"id":1,"name":"Approved","prime_number":2,"selected":0},{"id":2,"name":"Disapproved","prime_number":3,"selected":0},{"id":3,"name":"Add","prime_number":5,"selected":0},{"id":4,"name":"Update","prime_number":7,"selected":0},{"id":5,"name":"Delete","prime_number":11,"selected":0},{"id":6,"name":"View","prime_number":13,"selected":0},{"id":7,"name":"Draft","prime_number":17,"selected":0},{"id":8,"name":"Terminated","prime_number":19,"selected":0},{"id":9,"name":"Processed","prime_number":23,"selected":0}]')},c08d:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"someGetter",(function(){return o}));var i={};n.r(i),n.d(i,"someMutation",(function(){return l})),n.d(i,"setList",(function(){return f})),n.d(i,"setIsLoadingList",(function(){return p})),n.d(i,"setSelected",(function(){return m})),n.d(i,"add",(function(){return v})),n.d(i,"del",(function(){return _})),n.d(i,"update",(function(){return b}));var a={};n.r(a),n.d(a,"someAction",(function(){return h}));var s={list:{data:[],isLoading:!1},selected:{}};function o(){}n("20d6"),n("7514");var u=n("2b0e"),d=n("2ef0"),c=n.n(d);function l(){}function f(e,t){u["a"].set(e.list,"data",t)}function p(e,t){u["a"].set(e.list,"isLoading",t)}function m(e,t){console.log("setSelected value...",t);var n=c.a.find(e.list.data,{selected:1});console.log("setSelected...",n),void 0!==n&&(n.selected=0),t.selected=1,console.log("setSelected value...",t),u["a"].set(e,"selected",t)}function v(e,t){e.list.data.push(t)}function _(e,t){var n=e.list.data.findIndex((function(e){return e.id===t.id}));e.list.data.splice(n,1)}function b(e,t){console.log("update...",t);var n=e.list.data.findIndex((function(e){return e.id===t.id}));e.list.data.splice(n,1,t)}function h(){}t["default"]={namespaced:!0,getters:r,mutations:i,actions:a,state:s}},d30e:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"someGetter",(function(){return o}));var i={};n.r(i),n.d(i,"setList",(function(){return l})),n.d(i,"setIsLoadingList",(function(){return f})),n.d(i,"setSelected",(function(){return p})),n.d(i,"add",(function(){return m})),n.d(i,"del",(function(){return v})),n.d(i,"update",(function(){return _}));var a={};n.r(a),n.d(a,"someAction",(function(){return b}));var s={list:{data:[],isLoading:!1},selected:{}};function o(){}n("20d6"),n("7514");var u=n("2b0e"),d=n("2ef0"),c=n.n(d);function l(e,t){u["a"].set(e.list,"data",t)}function f(e,t){u["a"].set(e.list,"isLoading",t)}function p(e,t){console.log("setSelected value...",t);var n=c.a.find(e.list.data,{selected:1});console.log("setSelected...",n),void 0!==n&&(n.selected=0),t.selected=1,console.log("setSelected value...",t),u["a"].set(e,"selected",t)}function m(e,t){e.list.data.push(t)}function v(e,t){var n=e.list.data.findIndex((function(e){return e.id===t.id}));e.list.data.splice(n,1)}function _(e,t){console.log("update...",t);var n=e.list.data.findIndex((function(e){return e.id===t.id}));e.list.data.splice(n,1,t)}function b(){}t["default"]={namespaced:!0,getters:r,mutations:i,actions:a,state:s}},ecd1:function(e){e.exports=JSON.parse('[{"resources_id":1,"name":"User Management","icon":"group","link":"usermanagement","routeName":"usermanagement","description":"Lorem Ipsum is simply dummy text...","selected":0},{"resources_id":2,"name":"Synchronization","icon":"loop","link":"synchronization","routeName":"synchronization","description":"Lorem Ipsum is simply dummy text...","selected":0},{"resources_id":3,"name":"201 Files","icon":"file_copy","link":"files201","routeName":"files201","description":"Lorem Ipsum is simply dummy text...","selected":0},{"resources_id":4,"name":"Time and Attendance","icon":"access_alarm","link":"timeandattendance","routeName":"timeandattendance","description":"Lorem Ipsum is simply dummy text...","selected":0},{"resources_id":5,"name":"Payslip","icon":"insert_drive_file","link":"payslip","routeName":"payslip","description":"Lorem Ipsum is simply dummy text...","selected":0}]')}});