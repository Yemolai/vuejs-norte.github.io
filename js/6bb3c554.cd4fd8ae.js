(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["6bb3c554"],{"26d0":function(t,e,r){"use strict";var a=r("88a5"),n=r.n(a);n.a},4492:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",{staticClass:"flex column content"},[r("h1",{staticClass:"text-h1 title"},[t._v("Links")]),r("p",[t._v("\n    Material de Apoio para Desenvolvedores.\n  ")]),r("h2",{staticClass:"title text-h2"},[t._v("\n    📃 Blogs e Artigos\n  ")]),r("q-markup-table",{staticClass:"table",attrs:{"wrap-cells":"",flat:"",bordered:""}},[r("thead",[r("tr",[r("th",[t._v("Link")]),r("th",[t._v("Assunto")])])]),r("tbody",t._l(t.blogs,function(e,a){return r("tr",{key:"blog-"+a},[r("td",[r("a",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(e.title)+"\n          ")])]),r("td",[t._v(t._s(e.description))])])}),0)]),r("h2",{staticClass:"title text-h2"},[t._v("\n    🎓 Cursos\n  ")]),r("q-markup-table",{staticClass:"table",attrs:{"wrap-cells":"",flat:"",bordered:""}},[r("thead",[r("tr",[r("th",[t._v("Link")]),r("th",[t._v("Descrição")])])]),r("tbody",t._l(t.cursos,function(e,a){return r("tr",{key:"curso-"+a},[r("td",[r("a",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(e.title)+"\n          ")])]),r("td",[t._v(t._s(e.description))])])}),0)]),r("h2",{staticClass:"title text-h2"},[t._v("\n    🌇 Comunidades Locais\n  ")]),r("q-markup-table",{staticClass:"table",attrs:{"wrap-cells":"",flat:"",bordered:""}},[r("thead",[r("tr",[r("th",[t._v("Comunidade")]),r("th",[t._v("Links")])])]),r("tbody",t._l(t.comunidades,function(e,a){return r("tr",{key:"comu-"+a},[r("td",[t._v(t._s(e.name))]),r("td",t._l(Object.keys(e.links),function(n){return r("a",{key:"comu-"+a+"-"+n,attrs:{href:e.links[n],target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(n)+"\n          ")])}),0)])}),0)]),r("h2",{staticClass:"title text-h2"},[t._v("\n    🎥 Vídeos Youtube\n  ")]),r("q-markup-table",{staticClass:"table",attrs:{"wrap-cells":"",flat:"",bordered:""}},[r("thead",[r("tr",[r("th",[t._v("Link")]),r("th",[t._v("Assunto")])])]),r("tbody",t._l(t.videos,function(e,a){return r("tr",{key:"video-"+a},[r("td",[r("a",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(e.title)+"\n          ")])]),r("td",[t._v(t._s(e.description))])])}),0)])],1)},n=[],s=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("c47a")),o=r.n(s),l=r("967e"),i=r.n(l),c=(r("96cf"),r("fa84")),u=r.n(c),d=(r("6762"),r("2fdb"),r("2b0e")),b=r("dde5"),p=d["a"].extend({name:"QMarkupTable",props:{dense:Boolean,dark:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:function(t){return["horizontal","vertical","cell","none"].includes(t)}},wrapCells:Boolean},computed:{classes:function(){return"q-table--".concat(this.separator,"-separator")+(!0===this.dark?" q-table--dark q-table__card--dark":"")+(!0===this.dense?" q-table--dense":"")+(!0===this.flat?" q-table--flat":"")+(!0===this.bordered?" q-table--bordered":"")+(!0===this.square?" q-table--square":"")+(!1===this.wrapCells?" q-table--no-wrap":"")}},render:function(t){return t("div",{staticClass:"q-markup-table q-table__container q-table__card",class:this.classes,on:this.$listeners},[t("table",{staticClass:"q-table"},Object(b["a"])(this,"default"))])}});function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(r,!0).forEach(function(e){o()(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var _={name:"PageLinks",components:{QMarkupTable:p},mounted:function(){this.loadData()},data:function(){return{blogs:[],cursos:[],comunidades:[],videos:[]}},methods:{loadData:function(){var t=u()(i.a.mark(function t(){return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.loadCollectionData("blogs");case 2:return this.blogs=t.sent,t.next=5,this.loadCollectionData("cursos");case 5:return this.cursos=t.sent,t.next=8,this.loadCollectionData("comunidades");case 8:return this.comunidades=t.sent,t.next=11,this.loadCollectionData("videos");case 11:this.videos=t.sent;case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),loadCollectionData:function(){var t=u()(i.a.mark(function t(e){var r,a,n;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=this.$firebase.firestore.collection(e),t.next=3,r.get();case 3:return a=t.sent,n=a.docs.map(function(t){return f({},t.data(),{ref:t})}),t.abrupt("return",n);case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},v=_,k=(r("26d0"),r("2877")),m=Object(k["a"])(v,a,n,!1,null,null,null);e["default"]=m.exports},"88a5":function(t,e,r){}}]);