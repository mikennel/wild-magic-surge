(function(t){function e(e){for(var o,r,i=e[0],u=e[1],c=e[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);h&&h(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(o=!1)}o&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},s={app:0},a=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-0245011d":"b569877f","chunk-1558df3f":"da92e238","chunk-29dd6846":"6ec78b1d","chunk-355576ec":"6f2ba07f","chunk-41a0372a":"1a706680","chunk-d98b432a":"6fb26caf"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-0245011d":1,"chunk-1558df3f":1,"chunk-29dd6846":1,"chunk-355576ec":1,"chunk-41a0372a":1,"chunk-d98b432a":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-0245011d":"8670a52f","chunk-1558df3f":"f28ac6b3","chunk-29dd6846":"af782283","chunk-355576ec":"d89f6d73","chunk-41a0372a":"55adad45","chunk-d98b432a":"26fb46a9"}[t]+".css",s=u.p+o,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var c=a[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===o||l===s))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===o||l===s)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var o=e&&e.target&&e.target.src||s,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[t],h.parentNode.removeChild(h),n(a)},h.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){r[t]=0})));var o=s[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,n){o=s[t]=[e,n]}));e.push(o[2]=a);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(h);var n=s[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}s[t]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var h=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0fb2":function(t,e,n){"use strict";var o=n("3bc4"),r=n.n(o);r.a},1:function(t,e){},"3bc4":function(t,e,n){},"44ec":function(t,e,n){},"56cc":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("modals-main"),n("router-view"),n("pro-toast"),n("loading")],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pro-toast-main"},[n("div",{staticClass:"pro-toast-container"},[n("transition-group",{attrs:{name:"from-bottom",mode:"out-in"}},t._l(t.toasts,(function(e){return n("div",{key:e.id,staticClass:"toast"},[t._v(t._s(e.copy))])})),0)],1)])},i=[],u={name:"ProToast",data(){return{testIf:!1,toasts:[]}},methods:{readyListener(){this.$proOn("toast",t=>{let e=t;"string"===typeof t&&(e={copy:t,time:2e3}),e.id=String(Math.random()),this.onToastAdd(e)})},onToastAdd(t){this.toasts.push(t),setTimeout(()=>{const e=this.toasts.findIndex(e=>e.id===t.id);this.toasts.splice(e,1)},t.time||2500)}},mounted(){this.readyListener()}},c=u,l=(n("aee6"),n("2877")),d=Object(l["a"])(c,a,i,!1,null,"7f726cb5",null),h=d.exports,p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"loading-main"},[o("transition",{attrs:{name:"fade"}},[t.seeLoading?o("div",{staticClass:"loading-container"},[o("div",{staticClass:"image"},[o("img",{attrs:{src:n("f964")}})])]):t._e()])],1)},f=[],m={name:"Loading",data(){return{seeLoading:!1}},methods:{readyListeners(){this.$proOn("setLoading",t=>{this.seeLoading=t})}},mounted(){this.readyListeners()}},g=m,b=(n("0fb2"),Object(l["a"])(g,p,f,!1,null,"23d4fa61",null)),y=b.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("transition",{attrs:{name:"fade"}},[Object.keys(this.modalsOptions).length?n("div",{staticClass:"modals-main"},t._l(t.componentsList,(function(e,o){return t.shouldIncludeComp(e)?n("div",{staticClass:"modals-container",on:{click:function(n){return t.$modals.hide(e)}}},[n("span",{on:{click:function(t){t.stopPropagation()}}},[n(e,{tag:"component",attrs:{options:t.modalsOptions[e]}})],1)]):t._e()})),0):t._e()])],1)},w=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert-modal modal-main"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"title"},[t._v("ALERT")]),n("div",{staticClass:"content"},[t._v(t._s(t.options.message))]),n("div",{staticClass:"action"},[n("div",{staticClass:"button",on:{click:function(e){return t.$modals.hide()}}},[t._v("Close")])])])])},k=[],O={name:"AlertModal",props:{options:{required:!0}}},C=O,E=Object(l["a"])(C,$,k,!1,null,null,null),M=E.exports,L={name:"ModalsMain",components:{alert:M},data(){return{modalsOptions:{}}},computed:{seeModals(){return Object.keys(this.modalsOptions).length},componentsList(){return Object.keys(this.$options.components).filter(t=>"ModalsMain"!==t)}},methods:{shouldIncludeComp(t){return Object.keys(this.modalsOptions).includes(t)},setUpListeners(){this.$proOn("showModal",t=>{t&&this.componentsList.includes(t.name)?(this.modalsOptions[t.name]=t,this.$forceUpdate()):alert(`Could not find and show the following modal: ${t&&t.name}`)}),this.$proOn("hideModal",t=>{t?delete this.modalsOptions[t]:this.modalsOptions={},this.$forceUpdate()})}},mounted(){this.setUpListeners()}},S=L,_=(n("d404"),Object(l["a"])(S,v,w,!1,null,null,null)),j=_.exports,A={name:"App",components:{"pro-toast":h,loading:y,"modals-main":j},methods:{getEntities(t){return t},async listenForUser(){this.$auth.onAuthStateChanged(async t=>{if(this.$store.commit("update",{auth:t}),t){const e=await this.getEntities(t.uid);console.log(e),this.$router.push({name:"FileDashboard"})}})}},mounted(){this.listenForUser()}},I=A,x=(n("cf25"),Object(l["a"])(I,r,s,!1,null,null,null)),T=x.exports,P=n("8c4f");o["a"].use(P["a"]);const D={main:()=>n.e("chunk-29dd6846").then(n.bind(null,"d0d9"))},U={main:()=>n.e("chunk-0245011d").then(n.bind(null,"c22f")),home:()=>n.e("chunk-355576ec").then(n.bind(null,"9ffa")),signUp:()=>n.e("chunk-41a0372a").then(n.bind(null,"a885"))},N={main:()=>n.e("chunk-1558df3f").then(n.bind(null,"9b4f")),dashboard:()=>n.e("chunk-d98b432a").then(n.bind(null,"6775"))},z=t=>{const e=n("56d7"),o=e.auth;if(!o.currentUser)return t.next({name:"PublicHome",query:{redirect:t.to.fullPath}});t.next()},F=new P["a"]({mode:"history",base:"/",routes:[{path:"/",component:U.main,children:[{path:"/",name:"PublicHome",component:U.home,meta:{transIndex:0}},{path:"sign-up",name:"PublicSignUp",component:U.signUp,meta:{transIndex:30}}]},{path:"/files",component:N.main,beforeEnter:(t,e,n)=>{z({to:t,from:e,next:n})},children:[{path:"/",name:"FileDashboard",component:N.dashboard,meta:{transIndex:50}}]},{path:"admin",component:D.main}]});var J=F,q=n("2f62");o["a"].use(q["a"]);var B=new q["a"].Store({state:{inquiries:[],categories:[],auth:null,user:null,org:null,userOrgs:[],orgUserRelationships:[]},mutations:{update(t,e){Object.keys(e).forEach(n=>t[n]=e[n])},logout(t){t.auth=null;const e=n("56d7").auth;e.signOut()}},actions:{async getInterviewData(t,{thisVue:e,next:n}){const o=t=>new Promise(async n=>n((await e.$firestore.collection(t).get()).docs.map(t=>t.data()))),r=await o("categories"),s=await o("inquiries");t.commit("update",{inquiries:s,categories:r}),n()}}}),H=n("59ca"),K=(n("ea7b"),n("e71f"),n("588e"),n("9483"));Object(K["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var R=n("2b27"),V=n.n(R),Y={install:function(t){t.prototype.$cookies.updateJSON=function(t,e){let n=this.get(t);n||(this.set(t,{}),n=this.get(t));const o={...n,...e};this.set(t,o)}}},G=n("28dd");const W=new o["a"];var X={install:function(t){t.prototype.$proOn=function(t,e){W.$on(t,e)},t.prototype.$proEmit=function(t,e){W.$emit(t,e)}}},Z={install:function(t){t.prototype.$proErrors=function(){const t=this.formOptions||{};return Object.keys(t).map(e=>{const n=e.split("."),o=n.reduce((function(t,e){return null!==t&&void 0!==t?t[e]:null}),this.form),r=t[e].errorIf&&t[e].errorIf(o);return r}).filter(t=>t)},t.prototype.$putExistingForm=function(){const t=this.form||{},e=this.$cookies.get("nh-interview")||{};Object.keys(t).forEach(n=>{void 0!==e[n]&&(t[n]=e[n])})}}};const Q="localhost"===window.location.hostname,tt=JSON.parse('{"apiKey":"AIzaSyAlNAvL2gzbXDxzJrSCKIqVvdk-fM9IP5Y","authDomain":"wild-magic-surge.firebaseapp.com","databaseURL":"https://wild-magic-surge.firebaseio.com","projectId":"wild-magic-surge","storageBucket":"wild-magic-surge.appspot.com","messagingSenderId":"640277948120","appId":"1:640277948120:web:ca884860de845c08ac59ad","measurementId":"G-M54CEBH1K8"}'),et=tt.projectId,nt=Q?`http://localhost:5000/${et}/us-central1/`:`https://us-central1-${et}.cloudfunctions.net/`,ot=()=>{return new Promise(t=>{if(!bt.currentUser)return console.log("Tried to get security header but there was no user."),t({});bt.currentUser.getIdToken(!0).then(e=>{const n={headers:{authorization:"Bearer "+e}};t(n)})})},rt=["put","post","get","delete"];var st={install:t=>{t.prototype.$HTTP=function(t){return new Promise(async(e,n)=>{if(!t.uri&&!t.fullUri)return n("Options must include a valid string for either 'uri' or 'fullUri'");if(!rt.includes(String(t.method).toLowerCase()))return n(`Method must be one of the following: ${rt}`);const o=[];if(o.push(t.fullUri||`${nt}${t.uri}`),["put","post"].includes(t.method)&&o.push(t.body),!1!==t.secure){const t=await ot();o.push(t)}this.$http[t.method](...o).then(e).catch(n)})}}},at={install:function(t){t.prototype.$toast=function(t){this.$proEmit("toast",t)}}};const it=[{short:"Jan",long:"January"},{short:"Feb",long:"February"},{short:"Mar",long:"March"},{short:"Apr",long:"April"},{short:"May",long:"May"},{short:"Jun",long:"June"},{short:"Jul",long:"July"},{short:"Aug",long:"August"},{short:"Sep",long:"September"},{short:"Oct",long:"October"},{short:"Nov",long:"November"},{short:"Dec",long:"December"}],ut=[{short:"Sun",long:"Sunday"},{short:"Mon",long:"Monday"},{short:"Tue",long:"Tuesday"},{short:"Wed",long:"Wednesday"},{short:"Thu",long:"Thursday"},{short:"Fri",long:"Friday"},{short:"Sat",long:"Saturday"}],ct=t=>{const e=[1,21,31],n=[2,22],o=[3,23];return e.includes(t)?"st":n.includes(t)?"nd":o.includes(t)?"rd":"th"};var lt={install:t=>{t.prototype.$getTimeComponents=t=>{const e=new Date(t);return{year:e.getFullYear(),month:e.getMonth(),shortMonth:it[e.getMonth()].short,fullMonth:it[e.getMonth()].long,date:e.getDate(),dateEnding:ct(e.getDate()),day:e.getDay(),hour:(e.getHours()+12)%12,meridian:e.getHours()<12?"am":"pm",minutes:e.getMinutes(),shortDay:ut[e.getDay()].short,longDay:ut[e.getDay()].long}},t.prototype.$getMonthName=(t,e=!0)=>{return it[t][e?"long":"short"]},t.prototype.$buildDate=function(t,e){const n=this.$getTimeComponents(t);return Object.keys(n).forEach(t=>{e=e.replace(`{${t}}`,n[t])}),e}}};const dt={phone:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,email:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,url:/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,ein:/^\d{2}\-?\d{7}$/,routing:/^\d{9}$/},ht=(t,e)=>{const n=new RegExp(dt[t]);return n.test(e)};var pt={install:function(t){t.prototype.$regex={is:function(t){return{a:function(e){return ht(e,t)},an:function(e){return ht(e,t)}}}}}},ft={install:function(t){t.prototype.$showLoading=function(){this.$proEmit("setLoading",!0)},t.prototype.$hideLoading=function(){this.$proEmit("setLoading",!1)},t.prototype.$flashLoading=function(t){this.$showLoading(),setTimeout(t,250),setTimeout(()=>this.$hideLoading(),500)}}},mt={install:function(t,e){t.prototype.$modals={show(t){e.$proEmit("showModal",t)},hide(t){e.$proEmit("hideModal",t)}}}};n.d(e,"firebase",(function(){return gt})),n.d(e,"auth",(function(){return bt})),n.d(e,"ThisVue",(function(){return yt}));const gt=H["initializeApp"](JSON.parse('{"apiKey":"AIzaSyAlNAvL2gzbXDxzJrSCKIqVvdk-fM9IP5Y","authDomain":"wild-magic-surge.firebaseapp.com","databaseURL":"https://wild-magic-surge.firebaseio.com","projectId":"wild-magic-surge","storageBucket":"wild-magic-surge.appspot.com","messagingSenderId":"640277948120","appId":"1:640277948120:web:ca884860de845c08ac59ad","measurementId":"G-M54CEBH1K8"}')),bt=gt.auth();o["a"].use({install:t=>{t.prototype.$firestore=gt.firestore(),t.prototype.$auth=bt,t.prototype.$storage=gt.storage()}}),o["a"].use(V.a),o["a"].use(Y),o["a"].use(G["a"]),o["a"].use(X),o["a"].use(Z),o["a"].use(st),o["a"].use(at),o["a"].use(lt),o["a"].use(pt),o["a"].use(ft),o["a"].config.productionTip=!1;const yt=new o["a"]({el:"#app",router:J,store:B,render:function(t){return t(T)}});o["a"].use(mt,yt)},aee6:function(t,e,n){"use strict";var o=n("44ec"),r=n.n(o);r.a},cf25:function(t,e,n){"use strict";var o=n("56cc"),r=n.n(o);r.a},d404:function(t,e,n){"use strict";var o=n("fb32"),r=n.n(o);r.a},f964:function(t,e,n){t.exports=n.p+"img/loading-dots.f2bff61d.svg"},fb32:function(t,e,n){}});
//# sourceMappingURL=app.1fc19dae.js.map