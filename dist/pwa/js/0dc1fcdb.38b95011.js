(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["0dc1fcdb"],{"4c67":function(t,e,a){"use strict";var n=a("c7b8"),s=a.n(n);s.a},"7a24":function(t,e,a){"use strict";var n=a("d84f"),s=a.n(n);s.a},"95e2":function(t){t.exports=JSON.parse('[{"id":1,"name":"Ryan Dahl"},{"id":2,"name":"Yukihiro Matsumoto"},{"id":3,"name":"Guido Van Rossum"},{"id":4,"name":"Bjarne Stroustrup"},{"id":5,"name":"Anders Hejlsberg"}]')},c7b8:function(t,e,a){},d84f:function(t,e,a){},e68b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-start column pad-page"},[a("q-card",[a("q-tabs",{attrs:{align:"left",dense:"","no-caps":"","inline-label":"","narrow-indicator":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab",{attrs:{name:"users",icon:"person",label:"Users"}}),a("q-tab",{attrs:{name:"roles",icon:"group",label:"Roles"}}),a("q-tab",{attrs:{name:"resources",icon:"multiline_chart",label:"Resources"}}),a("q-tab",{attrs:{name:"operations",icon:"post_add",label:"Operations"}})],1),a("q-separator"),a("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{staticStyle:{height:"75vh"},attrs:{name:"users"}},[a("UserComponent")],1),a("q-tab-panel",{staticStyle:{height:"75vh"},attrs:{name:"roles"}},[t._v("\n        roles\n      ")]),a("q-tab-panel",{staticStyle:{height:"75vh"},attrs:{name:"resources"}},[t._v("\n        resources\n      ")]),a("q-tab-panel",{staticStyle:{height:"75vh"},attrs:{name:"operations"}},[t._v("\n        operations\n      ")])],1)],1)],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex pad-page",staticStyle:{"background-color":"#fbf3f3",height:"100%",width:"100%"}},[a("q-input",{staticStyle:{"background-color":"white",width:"calc(100% - 42px)","margin-bottom":"1px",position:"absolute"},attrs:{dense:"",square:"",outlined:"",placeholder:"search user"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}}),a("q-icon",{attrs:{name:"add"}})]},proxy:!0}]),model:{value:t.searchUser,callback:function(e){t.searchUser=e},expression:"searchUser"}}),a("div",{staticStyle:{width:"100%",height:"calc(100% - 45px)","overflow-y":"auto","overflow-x":"hidden","margin-top":"45px"}},t._l(1,(function(t,e){return a("div",{key:"user"+e,staticStyle:{"background-color":"white",height:"5vh",width:"100%","margin-bottom":"1px",position:"relative"},attrs:{clas:"flex row items-center justify-center"}},[a("div",{staticStyle:{"background-color":"green",height:"100%",width:"35px",float:"left"}}),a("div",{staticStyle:{"background-color":"red",height:"100%",width:"35px",float:"left"}}),a("div",{staticStyle:{"background-color":"orange",height:"100%",width:"calc(100% - 120px)",float:"left"}}),a("div",{staticStyle:{"background-color":"red",height:"100%",width:"50px",float:"right"}})])})),0)],1)},o=[],i=a("95e2"),c={name:"UsersComponent",data:function(){return{searchUser:""}},computed:{users:function(){var t=this.$store.state.users.list.data;return null==t&&this.$store.commit("users/setList",i),null==t?i:t}}},l=c,u=(a("4c67"),a("2877")),d=a("eebe"),p=a.n(d),b=a("27f9"),h=a("0016"),f=a("05c0"),m=Object(u["a"])(l,r,o,!1,null,"56c0709f",null),g=m.exports;p()(m,"components",{QInput:b["a"],QIcon:h["a"],QTooltip:f["a"]});var v={name:"PageUserManagement",components:{UserComponent:g},data:function(){return{tab:"users"}}},x=v,w=(a("7a24"),a("9989")),y=a("f09f"),q=a("429b"),S=a("7460"),k=a("eb85"),_=a("adad"),Q=a("823b"),U=Object(u["a"])(x,n,s,!1,null,"7c17e32b",null);e["default"]=U.exports;p()(U,"components",{QPage:w["a"],QCard:y["a"],QTabs:q["a"],QTab:S["a"],QSeparator:k["a"],QTabPanels:_["a"],QTabPanel:Q["a"]})}}]);