(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,n,a){e.exports=a("2f39")},"2f39":function(e,n,a){"use strict";a.r(n);var t=a("967e"),r=a.n(t),o=(a("96cf"),a("fa84")),u=a.n(o),c=(a("7d6e"),a("e54f"),a("62f2"),a("7e6d"),a("2b0e")),i=a("b05d"),s=a("4d5a"),p=a("9898"),l=a("f2cc"),f=a("c7a0"),b=a("2ea3"),d=a("65c6"),h=a("6ac5"),v=a("9c40"),m=a("0016"),w=a("497d"),k=a("6ab5"),y=a("033f"),Q=a("e208"),x=a("714f"),g=a("2a19");c["a"].use(i["a"],{config:{},components:{QLayout:s["a"],QHeader:p["a"],QDrawer:l["a"],QPageContainer:f["a"],QPage:b["a"],QToolbar:d["a"],QToolbarTitle:h["a"],QBtn:v["a"],QIcon:m["a"],QList:w["a"],QItem:k["a"],QItemSection:y["a"],QItemLabel:Q["a"]},directives:{Ripple:x["a"]},plugins:{Notify:g["a"]}});var I=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{attrs:{id:"q-app"}},[a("router-view")],1)},j=[],A={name:"App"},L=A,C=a("2877"),D=Object(C["a"])(L,I,j,!1,null,null,null),S=D.exports,T=a("2f62");c["a"].use(T["a"]);var V=function(){var e=new T["a"].Store({modules:{},strict:!1});return e},z=a("a18c"),B=function(){var e="function"===typeof V?V({Vue:c["a"]}):V,n="function"===typeof z["a"]?Object(z["a"])({Vue:c["a"],store:e}):z["a"];e.$router=n;var a={el:"#q-app",router:n,store:e,render:function(e){return e(S)}};return{app:a,store:e,router:n}},$=a("a925"),q={failed:"Action failed",success:"Action was successful"},J={"en-us":q};c["a"].use($["a"]);var N=new $["a"]({locale:"en-us",fallbackLocale:"en-us",messages:J}),O=function(e){var n=e.app;n.i18n=N},P=a("59ca"),R=a.n(P),W=(a("ea7b"),a("66ce"),a("e71f"),{apiKey:"AIzaSyDMNW8Lt6-sC96kae2GWaab69-kz8kDbT4",authDomain:"vuejs-norte.firebaseapp.com",databaseURL:"https://vuejs-norte.firebaseio.com",projectId:"vuejs-norte",storageBucket:"vuejs-norte.appspot.com",messagingSenderId:"686873595132",appId:"1:686873595132:web:86c33b8725838691"}),_=function(){var e=u()(r.a.mark(function e(n){var a,t,o,u,c;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=n.Vue,t=R.a.initializeApp(W),o=R.a.auth(),u=R.a.database(),c=R.a.firestore(),a.prototype.$firebase={app:t,auth:o,database:u,firestore:c};case 6:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),E=B(),G=E.app,H=E.store,K=E.router;function M(){return U.apply(this,arguments)}function U(){return U=u()(r.a.mark(function e(){var n,a;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=[O,_],a=0;case 2:if(!(a<n.length)){e.next=20;break}if("function"===typeof n[a]){e.next=5;break}return e.abrupt("continue",17);case 5:return e.prev=5,e.next=8,n[a]({app:G,router:K,store:H,Vue:c["a"],ssrContext:null});case 8:e.next=17;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!e.t0||!e.t0.url){e.next=15;break}return window.location.href=e.t0.url,e.abrupt("return");case 15:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 17:a++,e.next=2;break;case 20:new c["a"](G);case 21:case"end":return e.stop()}},e,null,[[5,10]])})),U.apply(this,arguments)}M()},"7e6d":function(e,n,a){},a18c:function(e,n,a){"use strict";var t=a("2b0e"),r=a("8c4f"),o=a("4db1"),u=a.n(o),c=[{path:"/",component:function(){return a.e("581d1e20").then(a.bind(null,"29bc"))},children:[{path:"/",redirect:"/inicio"},{label:"Início",path:"inicio",component:function(){return a.e("ed149402").then(a.bind(null,"8b24"))}},{label:"Comunidade",path:"comunidade",component:function(){return a.e("cbad4926").then(a.bind(null,"0080"))}},{label:"Links",path:"links",component:function(){return a.e("6bb3c554").then(a.bind(null,"4492"))}}]}];c.push({path:"*",component:function(){return a.e("4b47640d").then(a.bind(null,"e51e"))}});var i=c.filter(function(e){return!!e.children&&Array.isArray(e.children)}).reduce(function(e,n){return[].concat(u()(e),u()(n.children))},[]).filter(function(e){return!!e.label}).map(function(e){var n=e.label,a=e.path;return{label:n,route:a}}),s=c;a.d(n,"b",function(){return i}),t["a"].use(r["a"]);n["a"]=function(){var e=new r["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:s,mode:"hash",base:""});return e}}},[[0,"runtime","vendor"]]]);