(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["9a65978e"],{"1b69":function(e,t,n){"use strict";var s=n("cb0f"),r=n.n(s);r.a},"7aef":function(e,t,n){"use strict";var s=n("8723"),r=n.n(s);r.a},8723:function(e,t,n){},b65a:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex column",staticStyle:{height:"100%",width:"100%"}},e._l(e.permissions[0].operations,(function(t,s){return Boolean(t.checked)?n("q-btn",{key:"btn"+s,staticClass:"btn-fixed-width",attrs:{color:"primary",label:t.name}}):e._e()})),1)},r=[],o=(n("c5f6"),{name:"RenderOperationsComponent",props:{resources_id:Number},created:function(){},methods:{},computed:{selectedUser:function(){var e=this.$store.state.users.selected;return e},permissions:function(){var e=JSON.parse(JSON.stringify(this.$store.state.permissions.users.permissions)),t=_.filter(e,{resources_id:this.resources_id});return console.log("permissions...",t),t}}}),a=o,i=(n("7aef"),n("2877")),c=n("eebe"),u=n.n(c),l=n("9c40"),p=Object(i["a"])(a,s,r,!1,null,null,null);t["a"]=p.exports;u()(p,"components",{QBtn:l["a"]})},c885:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex flex-start column pad-page"},[n("RenderOperationsComponent",{attrs:{resources_id:2}})],1)},r=[],o=n("b65a"),a={name:"PageSynchronization",components:{RenderOperationsComponent:o["a"]}},i=a,c=(n("1b69"),n("2877")),u=n("eebe"),l=n.n(u),p=n("9989"),f=Object(c["a"])(i,s,r,!1,null,"5f6a6b64",null);t["default"]=f.exports;l()(f,"components",{QPage:p["a"]})},cb0f:function(e,t,n){}}]);