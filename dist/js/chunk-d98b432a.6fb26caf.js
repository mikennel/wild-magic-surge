(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d98b432a"],{"0670":function(t,e,n){"use strict";var o=n("7fb5"),s=n.n(o);s.a},6775:function(t,e,n){"use strict";n.r(e);var o={};n.r(o),n.d(o,"breakApartAndFormatTime",(function(){return r})),n.d(o,"getMonthName",(function(){return u})),n.d(o,"toShortTime",(function(){return c})),n.d(o,"toHumanTime",(function(){return d}));var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"file-dashboard-main"},[n("div",{staticClass:"file-dashboard-container"},[n("div",{staticClass:"previous-files-holder"},[n("div",{staticClass:"title"},[t._v("Previous Files")]),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("div",{staticClass:"files no-files"},[n("div",{staticClass:"copy"},[t._v("You have no previous files. Click 'Start New File' to get started ---\x3e")])])])],1),n("div",{staticClass:"file-areas-holder"},[n("div",{staticClass:"file-area new",on:{click:t.onNewFile}},[t._m(0)])])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"copy"},[n("div",{staticClass:"action"},[t._v("Start New File")])])])}];const i=[{short:"Jan",long:"January"},{short:"Feb",long:"February"},{short:"Mar",long:"March"},{short:"Apr",long:"April"},{short:"May",long:"May"},{short:"Jun",long:"June"},{short:"Jul",long:"July"},{short:"Aug",long:"August"},{short:"Sep",long:"September"},{short:"Oct",long:"October"},{short:"Nov",long:"November"},{short:"Dec",long:"December"}],r=t=>{let[e,n]=t.split(":");return n="00"===n?"0":n,l(e,n)},l=(t,e)=>{let n=t%12;n=0===n?12:n;const o=e<10?"0"+e:e,s=t>12?"PM":"AM",a=`${n}:${o} ${s}`;return-1!==a.indexOf("undefined")?"Not a time":a},u=(t,e=!0)=>{const n=i[t];if(n)return n[e?"long":"short"];console.debug("Month could not be determined due to invalid date.")},c=t=>{const e=new Date(t),n=e.getMonth()+1,o=e.getDate(),s=e.getFullYear(),a=l(e.getHours(),e.getMinutes());return`${n}/${o}/${s} ${a}`},d=(t,e=!0,n=!0)=>{const o=new Date(Number(t)),s=i[o.getMonth()][n?"short":"long"],a=o.getDate(),r=o.getFullYear(),u=l(o.getHours(),o.getMinutes());return`${s} ${a}, ${r}${e?", "+u:""}`};var h={name:"FileDashboard",data(){return{time:o,files:[],loading:!0}},methods:{onNewFile(){this.$modals.show({name:"alert",message:"This is an example of a modal. Instead of showing this alert, the button just pushed should likely have some other functionality."})}},mounted(){this.loading=!1,this.$hideLoading()}},g=h,f=(n("0670"),n("2877")),m=Object(f["a"])(g,s,a,!1,null,"3e68fca3",null);e["default"]=m.exports},"7fb5":function(t,e,n){}}]);
//# sourceMappingURL=chunk-d98b432a.6fb26caf.js.map