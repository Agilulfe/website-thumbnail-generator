(function(t){function e(e){for(var r,i,u=e[0],l=e[1],s=e[2],p=0,f=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 offset-md-3 py-5"},[n("h1",[t._v("Generate a thumbnail of a website")]),n("form",{on:{submit:function(e){return e.preventDefault(),t.makeWebsiteThumbnail(e)}}},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.websiteUrl,expression:"websiteUrl"}],staticClass:"form-control",attrs:{type:"text",id:"website-input",placeholder:"Enter a website"},domProps:{value:t.websiteUrl},on:{input:function(e){e.target.composing||(t.websiteUrl=e.target.value)}}})]),t._m(0)]),n("img",{attrs:{src:t.thumbnailUrl}})])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-primary"},[t._v("Generate!")])])}],i=n("bc3a"),u=n.n(i),l={name:"App",data:function(){return{websiteUrl:"",thumbnailUrl:""}},methods:{makeWebsiteThumbnail:function(){var t=this;u.a.post("http://localhost:3000/api/thumbnail",{url:this.websiteUrl,width:1920,height:1080,output:"json",thumbnail_width:300}).then((function(e){t.thumbnailUrl=e.data.screenshot})).catch((function(t){window.alert("The API returned an error: ".concat(t))}))}}},s=l,c=(n("034f"),n("2877")),p=Object(c["a"])(s,o,a,!1,null,null,null),f=p.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(f)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.10b7595c.js.map