(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home"],{2532:function(t,e,r){"use strict";var n=r("23e7"),o=r("5a34"),i=r("1d80"),a=r("ab13");n({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,o=r("69f3"),i=r("7dd0"),a="String Iterator",c=o.set,s=o.getterFor(a);i(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,e=s(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},4151:function(t,e,r){"use strict";r("99af"),r("4de4"),r("caad"),r("2532");function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t){if(Array.isArray(t))return n(t)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0");function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("fb6a"),r("b0c0"),r("25f0");function a(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return o(t)||i(t)||a(t)||c()}var u=r("5530"),l=r("2f62");e["a"]={methods:Object(u["a"])(Object(u["a"])({},Object(l["d"])("api",["SET_FAVORITES"])),{},{setFavorite:function(t){var e=this.$ls.get("favorites")||[],r=[];r=e.includes(t)?e.filter((function(e){return e!==t})):[].concat(s(e),[t]),this.SET_FAVORITES(r),this.$ls.set("favorites",r)}})}},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),i=r("9bdd"),a=r("e95a"),c=r("50c4"),s=r("8418"),u=r("35a1");t.exports=function(t){var e,r,l,f,d,v,p=o(t),h="function"==typeof this?this:Array,m=arguments.length,g=m>1?arguments[1]:void 0,b=void 0!==g,y=u(p),S=0;if(b&&(g=n(g,m>2?arguments[2]:void 0,2)),void 0==y||h==Array&&a(y))for(e=c(p.length),r=new h(e);e>S;S++)v=b?g(p[S],S):p[S],s(r,S,v);else for(f=y.call(p),d=f.next,r=new h;!(l=d.call(f)).done;S++)v=b?i(f,g,[l.value,S],!0):l.value,s(r,S,v);return r.length=S,r}},"5a34":function(t,e,r){var n=r("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},6547:function(t,e,r){var n=r("a691"),o=r("1d80"),i=function(t){return function(e,r){var i,a,c=String(o(e)),s=n(r),u=c.length;return s<0||s>=u?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?t?c.charAt(s):i:t?c.slice(s,s+2):a-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"6aee":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"scroll",rawName:"v-scroll",value:{handler:t.handler},expression:"{\n    handler\n  }"}],staticClass:"container-fluid py-3"},[r("ui-gallery",t._l(t.images,(function(e,n){return r("p-card",{key:"dog-"+n,attrs:{src:e,active:t.favorites.includes(e)},on:{click:function(e){return t.$emit("set-favorite",e)}}})})),1)],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card",on:{click:function(e){return t.$emit("click",t.src)}}},[r("ui-picture",{attrs:{src:t.src}}),r("i",{staticClass:"card-icon"},[t.active?r("ui-icon",{attrs:{name:"heart-solid"}}):r("ui-icon",{attrs:{name:"heart"}})],1)],1)},a=[],c={name:"p-card",props:{src:{type:String,default:""},active:{type:Boolean,default:!1}}},s=c,u=r("2877"),l=Object(u["a"])(s,i,a,!1,null,null,null),f=l.exports,d={name:"p-list",components:{pCard:f},props:{images:{type:Array,default:function(){return[]}},favorites:{type:Array,default:function(){return[]}}},methods:{handler:function(){this.$emit("on-scroll")}}},v=d,p=Object(u["a"])(v,n,o,!1,null,null,null);e["a"]=p.exports},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),i=r("1c7e"),a=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:o})},ab13:function(t,e,r){var n=r("b622"),o=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[o]=!1,"/./"[t](e)}catch(n){}}return!1}},bb51:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p-list",{attrs:{images:t.randomDogsList,favorites:t.favorites},on:{"set-favorite":t.setFavorite,"on-scroll":t.onScroll}})},o=[],i=(r("96cf"),r("1da1")),a=r("5530"),c=r("6aee"),s=r("4151"),u=r("2f62"),l={name:"home-page",components:{pList:c["a"]},mixins:[s["a"]],computed:Object(a["a"])({},Object(u["c"])("api",["randomDogsList","favorites","isRandomDogsAction"])),methods:Object(a["a"])(Object(a["a"])({},Object(u["b"])("api",["getRandomDogsList","getMoreRandomDogsList"])),{},{onScroll:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=.95,n=(window.scrollY||document.documentElement.scrollTop)+window.innerHeight,o=document.documentElement.offsetHeight*r,!(n>=o)||t.isRandomDogsAction){e.next=6;break}return e.next=6,t.getMoreRandomDogsList();case 6:case"end":return e.stop()}}),e)})))()}}),mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getRandomDogsList();case 2:case"end":return e.stop()}}),e)})))()}},f=l,d=r("2877"),v=Object(d["a"])(f,n,o,!1,null,null,null);e["default"]=v.exports},caad:function(t,e,r){"use strict";var n=r("23e7"),o=r("4d64").includes,i=r("44d2"),a=r("ae40"),c=a("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!c},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("e260"),a=r("9112"),c=r("b622"),s=c("iterator"),u=c("toStringTag"),l=i.values;for(var f in o){var d=n[f],v=d&&d.prototype;if(v){if(v[s]!==l)try{a(v,s,l)}catch(h){v[s]=l}if(v[u]||a(v,u,f),o[f])for(var p in i)if(v[p]!==i[p])try{a(v,p,i[p])}catch(h){v[p]=i[p]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),i=r("da84"),a=r("5135"),c=r("861d"),s=r("9bf2").f,u=r("e893"),l=i.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(d,l);var v=d.prototype=l.prototype;v.constructor=d;var p=v.toString,h="Symbol(test)"==String(l("test")),m=/^Symbol\((.*)\)[^)]+$/;s(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=p.call(t);if(a(f,t))return"";var r=h?e.slice(7,-1):e.replace(m,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("861d"),i=r("e8b5"),a=r("23cb"),c=r("50c4"),s=r("fc6a"),u=r("8418"),l=r("b622"),f=r("1dde"),d=r("ae40"),v=f("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),h=l("species"),m=[].slice,g=Math.max;n({target:"Array",proto:!0,forced:!v||!p},{slice:function(t,e){var r,n,l,f=s(this),d=c(f.length),v=a(t,d),p=a(void 0===e?d:e,d);if(i(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?o(r)&&(r=r[h],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return m.call(f,v,p);for(n=new(void 0===r?Array:r)(g(p-v,0)),l=0;v<p;v++,l++)v in f&&u(n,l,f[v]);return n.length=l,n}})}}]);
//# sourceMappingURL=Home.6cc7615f.js.map