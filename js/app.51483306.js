(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},i=[];function a(e){return s.p+"js/"+({Breed:"Breed",Favorites:"Favorites",Home:"Home"}[e]||e)+"."+{Breed:"b183e4ec",Favorites:"fc6a73e2",Home:"6cc7615f"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(e);var u=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,n[1](u)}o[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dogs-vue/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"__app__"},[n("p-header"),n("router-view")],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[n("img",{staticClass:"logo-img",attrs:{src:e.logo,alt:"dogs-vue"}})]),n("button",{staticClass:"menu",on:{click:e.onToggleActive}},[e.active?n("ui-icon",{attrs:{name:"close"}}):n("ui-icon",{attrs:{name:"menu"}})],1),n("nav",{class:["nav",{active:e.active}]},[n("router-link",{staticClass:"ui-button",attrs:{to:{name:"Home"}}},[e._v("Случайные собачки")]),n("ui-select",{attrs:{options:e.allBreedsList,value:e.breed},on:{input:e.onSelectBreed},scopedSlots:e._u([{key:"arrow",fn:function(){return[n("ui-icon",{attrs:{name:"arrow-down"}})]},proxy:!0}])}),n("router-link",{staticClass:"ui-button",attrs:{to:{name:"Favorites"}}},[e._v("Избранное")])],1)],1)},s=[],c=(n("96cf"),n("1da1")),u=n("5530"),l=n("2f62"),f="/dogs-vue",d={name:"p-header",computed:Object(u["a"])(Object(u["a"])({},Object(l["c"])("api",["allBreedsList"])),{},{breed:function(){return this.$route.params.breed}}),watch:{"$route.params":function(){this.active=!1}},data:function(){return{active:!1,logo:"".concat(f,"/img/logo.png")}},methods:Object(u["a"])(Object(u["a"])({},Object(l["b"])("api",["getAllBreedsList"])),{},{onToggleActive:function(){this.active=!this.active},onSelectBreed:function(e){this.$router.push({name:"Breed",params:{breed:e}})}}),mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getAllBreedsList();case 2:case"end":return t.stop()}}),t)})))()}},m=d,p=n("2877"),v=Object(p["a"])(m,a,s,!1,null,null,null),g=v.exports,h={name:"app",components:{pHeader:g}},b=h,_=Object(p["a"])(b,o,i,!1,null,null,null),w=_.exports,S=n("9483");Object(S["a"])("".concat("/dogs-vue/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var O=n("8c4f");r["a"].use(O["a"]);var E=[{path:"/",name:"Home",component:function(){return n.e("Home").then(n.bind(null,"bb51"))}},{path:"/favorites",name:"Favorites",component:function(){return n.e("Favorites").then(n.bind(null,"48d5"))}},{path:"/b",redirect:{name:"Home"}},{path:"/b/:breed",name:"Breed",component:function(){return n.e("Breed").then(n.bind(null,"8cbe"))}}],D=new O["a"]({mode:"hash",base:"/dogs-vue/",routes:E}),T=D,y={get:function(e){return JSON.parse(localStorage.getItem(e))},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))},remove:function(e){localStorage.removeItem(e)},clear:function(){localStorage.clear()}},L=(n("99af"),{SET_ALL_BREEDS_LIST:function(e,t){e.allBreedsList=t},SET_RANDOM_DOGS_LIST:function(e,t){e.randomDogsList=t},SET_MORE_RANDOM_DOGS_LIST:function(e,t){e.randomDogsList=e.randomDogsList.concat(t)},SET_FAVORITES:function(e,t){e.favorites=t},SET_IS_RANDOM_DOGS_ACTION:function(e,t){e.isRandomDogsAction=t},SET_BREED_DOGS_LIST:function(e,t){e.breedDogsList=t},SET_MORE_BREED_DOGS_LIST:function(e,t){e.breedDogsList=e.breedDogsList.concat(t)},SET_IS_BREED_DOGS_ACTION:function(e,t){e.isBreedDogsAction=t}}),x=(n("b64b"),n("bc3a")),R=n.n(x),k=n("6e87"),j=n.n(k),C=R.a.create({baseURL:"https://dog.ceo/api"}),B={getAllBreedsList:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,C({url:"/breeds/list/all",method:"GET"});case 4:return r=t.sent,o=r.data,i=Object.keys(j.a.get(o,"message",[])),n("SET_ALL_BREEDS_LIST",i),t.abrupt("return",Promise.resolve(i));case 11:return t.prev=11,t.t0=t["catch"](1),t.abrupt("return",Promise.reject(t.t0));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()},getRandomDogsList:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,C({url:"/breeds/image/random/20",method:"GET"});case 4:return r=t.sent,o=r.data,i=j.a.get(o,"message",[]),n("SET_RANDOM_DOGS_LIST",i),t.abrupt("return",Promise.resolve(i));case 11:return t.prev=11,t.t0=t["catch"](1),t.abrupt("return",Promise.reject(t.t0));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()},getMoreRandomDogsList:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,n("SET_IS_RANDOM_DOGS_ACTION",!0),t.prev=2,t.next=5,C({url:"/breeds/image/random/20",method:"GET"});case 5:return r=t.sent,o=r.data,i=j.a.get(o,"message",[]),n("SET_MORE_RANDOM_DOGS_LIST",i),n("SET_IS_RANDOM_DOGS_ACTION",!1),t.abrupt("return",Promise.resolve(i));case 13:return t.prev=13,t.t0=t["catch"](2),n("SET_IS_RANDOM_DOGS_ACTION",!1),t.abrupt("return",Promise.reject(t.t0));case 17:case"end":return t.stop()}}),t,null,[[2,13]])})))()},getBreedRandomDogsList:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,o,i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,C({url:"/breed/".concat(t,"/images/random/20"),method:"GET"});case 4:return o=n.sent,i=o.data,a=j.a.get(i,"message",[]),r("SET_BREED_DOGS_LIST",a),n.abrupt("return",Promise.resolve(a));case 11:return n.prev=11,n.t0=n["catch"](1),n.abrupt("return",Promise.reject(n.t0));case 14:case"end":return n.stop()}}),n,null,[[1,11]])})))()},getMoreBreedRandomDogsList:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,o,i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,r("SET_IS_BREED_DOGS_ACTION",!0),n.prev=2,n.next=5,C({url:"/breed/".concat(t,"/images/random/20"),method:"GET"});case 5:return o=n.sent,i=o.data,a=j.a.get(i,"message",[]),r("SET_MORE_BREED_DOGS_LIST",a),r("SET_IS_BREED_DOGS_ACTION",!1),n.abrupt("return",Promise.resolve(a));case 13:return n.prev=13,n.t0=n["catch"](2),r("SET_IS_BREED_DOGS_ACTION",!1),n.abrupt("return",Promise.reject(n.t0));case 17:case"end":return n.stop()}}),n,null,[[2,13]])})))()}},A={allBreedsList:function(e){return e.allBreedsList},randomDogsList:function(e){return e.randomDogsList},breedDogsList:function(e){return e.breedDogsList},favorites:function(e){return e.favorites},isRandomDogsAction:function(e){return e.isRandomDogsAction},isBreedDogsAction:function(e){return e.isBreedDogsAction}},I={namespaced:!0,state:{allBreedsList:[],randomDogsList:[],breedDogsList:[],favorites:y.get("favorites")||[],isRandomDogsAction:!1,isBreedDogsAction:!1},mutations:L,actions:B,getters:A};r["a"].use(l["a"]);var P=new l["a"].Store({modules:{api:I}}),N={install:function(e){Object.defineProperties(e.prototype,{$ls:{get:function(){return y}}})}};function G(e){return e instanceof Object&&e.constructor===Object}function M(e){return"string"===typeof e}function $(e){return"function"===typeof e}var F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=!1;return function(){n||(e.apply(this,arguments),n=!0,setTimeout((function(){n=!1}),t))}};function H(e,t){if(G(t.value))if($(t.value.handler)){var n=F((function(e){t.value.handler(e)}),t.value.debounce||100),r=t.value.isThisElementScroll,o=t.options||{passive:!0};r?e.addEventListener("scroll",n,o):window.addEventListener("scroll",n,o),e._onScroll={callback:n,options:o,isThisElementScroll:r},t.modifiers&&t.modifiers.quiet||n()}else{var i="[Vue-scroll:] '".concat(t.expression,"' params handler is not a function or undefined, but has to be");console.warn(i)}else{var a="[Vue-scroll:] '".concat(t.expression,"' is not a object, but has to be");console.warn(a)}}function q(e){if(e._onScroll){var t=e._onScroll,n=t.callback,r=t.options,o=t.isThisElementScroll;o?e.removeEventListener("scroll",n,r):window.removeEventListener("scroll",n,r),delete e._onScroll}}var J={inserted:H,unbind:q};function V(e,t){if("function"!==typeof t.value){var n="[Vue-outside:] '".concat(t.expression,"' is not a function, but has to be");console.warn(n)}var r=t.modifiers.bubble,o=function(n){(r||!e.contains(n.target)&&e!==n.target)&&t.value(n)};e.__vueClickOutside__=o,setTimeout((function(){window.addEventListener("click",o)}),0)}function U(e){window.removeEventListener("click",e.__vueClickOutside__),e.__vueClickOutside__=null}var z={bind:V,unbind:U},K={install:function(e){e.directive("scroll",J),e.directive("outside",z)}},Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"ui-button",on:{click:function(t){return e.$emit("click",t)}}},[e._t("default")],2)},W=[],X={name:"ui-button"},Y=X,Z=Object(p["a"])(Y,Q,W,!1,null,null,null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"outside",rawName:"v-outside",value:e.onCLose,expression:"onCLose"}],staticClass:"ui-select"},[n("a",{class:["ui-select-current",{active:e.active}],attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.onClickSelect(t)}}},[n("span",{staticClass:"ui-select-value"},[e._v(e._s(e.value))]),n("span",{staticClass:"ui-select-arrow"},[e._t("arrow")],2)]),n("transition",{attrs:{name:"fade"}},[e.active?n("div",{staticClass:"ui-select-wrap"},e._l(e.filteredOptions,(function(t,r){return n("a",{key:"option-"+r,staticClass:"ui-select-option",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),e.onClickOption(t)}}},[e._v(e._s(t))])})),0):e._e()])],1)},ne=[],re=(n("4de4"),{name:"ui-select",props:{value:{type:String,default:"Выберите значение"},options:{type:Array,default:function(){return[]}}},data:function(){return{active:!1}},computed:{filteredOptions:function(){var e=this;return this.options.filter((function(t){return t!==e.value}))}},methods:{onClickOption:function(e){this.active=!1,this.$emit("input",e),this.$emit("toggle",this.active)},onClickSelect:function(){this.active=!this.active,this.$emit("toggle",this.active)},onCLose:function(){this.active=!1,this.$emit("toggle",this.active)}}}),oe=re,ie=Object(p["a"])(oe,te,ne,!1,null,null,null),ae=ie.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("picture",{class:["ui-picture","ui-picture-format--"+e.format]},[n("img",{staticClass:"ui-picture--img",attrs:{src:e.imgPath,alt:e.alt}})])},ce=[],ue=(n("4d63"),n("ac1f"),n("25f0"),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(M(e)){var n=new Image;return n.src=e,n.style.display="none",document.body.appendChild(n),new Promise((function(e){n.onload=function(){e(this.src),document.body.removeChild(n)},n.onerror=function(){e(t),document.body.removeChild(n)}}))}return Promise.resolve(t)}),le=new RegExp("^(?:[a-z]+:)?//","i"),fe="/dogs-vue",de="".concat(fe,"/img/no-image.jpg"),me={name:"ui-picture",props:{src:{type:String,default:de},alt:{type:String,default:"no-image"},format:{type:String,default:"4x3"}},watch:{src:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!le.test(e)){n.next=7;break}return n.next=3,ue(e,de);case 3:t.imgPath=n.sent,t.$emit("onload"),n.next=8;break;case 7:t.imgPath=e;case 8:case"end":return n.stop()}}),n)})))()}},data:function(){return{imgPath:de}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!le.test(e.src)){t.next=4;break}return t.next=3,ue(e.src,de);case 3:e.imgPath=t.sent;case 4:case"end":return t.stop()}}),t)})))()}},pe=me,ve=Object(p["a"])(pe,se,ce,!1,null,null,null),ge=ve.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui-gallery"},[e._t("default")],2)},be=[],_e={name:"ui-gallery"},we=_e,Se=Object(p["a"])(we,he,be,!1,null,null,null),Oe=Se.exports,Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{class:["ui-icon","ui-icon--"+e.name],attrs:{xmlns:"http://www.w3.org/2000/svg"}},[e.title?n("title",[e._v(e._s(e.title))]):e._e(),n("use",{attrs:{"xlink:href":e.iconPath,"xmlns:xlink":"http://www.w3.org/1999/xlink"}})])},De=[],Te=(n("b0c0"),{name:"ui-icon",props:{name:{type:String,required:!0,default:""},title:{type:String,default:""}},computed:{iconPath:function(){var e=n("6f32")("./".concat(this.name,".svg"));return Object.prototype.hasOwnProperty.call(e,"default")&&(e=e.default),e.url}}}),ye=Te,Le=Object(p["a"])(ye,Ee,De,!1,null,null,null),xe=Le.exports,Re={install:function(e){e.component("ui-button",ee),e.component("ui-select",ae),e.component("ui-picture",ge),e.component("ui-gallery",Oe),e.component("ui-icon",xe)}};n("c1c3");r["a"].use(N),r["a"].use(K),r["a"].use(Re),r["a"].config.productionTip=!1,new r["a"]({router:T,store:P,render:function(e){return e(w)}}).$mount("#app")},"6f32":function(e,t,n){var r={"./arrow-down.svg":"c874","./close.svg":"8b1b","./heart-solid.svg":"b877","./heart.svg":"7d16","./menu.svg":"d17f"};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id="6f32"},"7d16":function(e,t,n){"use strict";n.r(t),t["default"]={id:"heart-usage",viewBox:"0 0 32 32",url:n.p+"img/icons.7c7c26f9.svg#heart",toString:function(){return this.url}}},"8b1b":function(e,t,n){"use strict";n.r(t),t["default"]={id:"close-usage",viewBox:"0 0 32 32",url:n.p+"img/icons.7c7c26f9.svg#close",toString:function(){return this.url}}},b877:function(e,t,n){"use strict";n.r(t),t["default"]={id:"heart-solid-usage",viewBox:"0 0 32 32",url:n.p+"img/icons.7c7c26f9.svg#heart-solid",toString:function(){return this.url}}},c1c3:function(e,t,n){},c874:function(e,t,n){"use strict";n.r(t),t["default"]={id:"arrow-down-usage",viewBox:"0 0 32 32",url:n.p+"img/icons.7c7c26f9.svg#arrow-down",toString:function(){return this.url}}},d17f:function(e,t,n){"use strict";n.r(t),t["default"]={id:"menu-usage",viewBox:"0 0 32 32",url:n.p+"img/icons.7c7c26f9.svg#menu",toString:function(){return this.url}}}});
//# sourceMappingURL=app.51483306.js.map