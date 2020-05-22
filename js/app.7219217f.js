(function(t){function e(e){for(var a,s,c=e[0],i=e[1],u=e[2],p=0,d=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/food-alarm/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"85ec":function(t,e,n){},8659:function(t,e,n){},"8f79":function(t,e,n){"use strict";var a=n("8659"),o=n.n(a);o.a},"9b6e":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,o,r,s,c=n("2b0e"),i=n("289d"),u=(n("5abe"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("MainDisplay")],1)}),l=[],p=n("d4ec"),d=n("262e"),f=n("2caf"),h=n("9ab4"),b=n("60a3"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"clock-column column"},[n("AnalogClock")],1),n("div",{staticClass:"column is-full"},[n("b-button",{attrs:{loading:t.alarmaLoading,type:"is-primary",disabled:!t.startAllowed,expanded:""},on:{click:t.iniciarAlarma}},[t._v(" Iniciar ")])],1),n("div",{staticClass:"column is-full"},[n("b-button",{attrs:{loading:t.stopLoading,type:"is-primary",disabled:!t.stopAllowed,expanded:""},on:{click:t.pararAlarma}},[t._v(" Parar ")])],1)])])},v=[],m=(n("d3b7"),n("bee2")),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clock-container"},[n("figure",{staticClass:"analog-clock"},[n("figcaption",{staticClass:"analog-clock__face"},t._l(60,(function(t){return n("span",{key:t,staticClass:"analog-clock__notch",class:{"-long":!(t%5)},style:{transform:"rotate("+6*t+"deg)"}})})),0),n("span",{staticClass:"analog-clock__hand -seconds",style:t.seconds}),n("span",{staticClass:"analog-clock__hand -minutes",style:t.minutes}),n("span",{staticClass:"analog-clock__hand -hours",style:t.hours})])])},O=[],j=(n("e439"),n("63ae")),k=(a=Object(b["c"])("tick"),o=Object(b["c"])("minute"),Object(b["a"])((s=function(t){Object(d["a"])(n,t);var e=Object(f["a"])(n);function n(){return Object(p["a"])(this,n),e.apply(this,arguments)}return Object(m["a"])(n,[{key:"data",value:function(){return{tick:0,time:{hours:0,minutes:0,seconds:0},rotation:{hours:0,minutes:0,seconds:0}}}},{key:"onTickChange",value:function(){this.rotation.seconds+=6,this.rotation.minutes+=.1}},{key:"onMinuteChange",value:function(t,e){e!==t&&(this.rotation.hours+=.5)}},{key:"updateTime",value:function(t){var e=this;this.tick+=1,this.time={hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()},setTimeout((function(){return e.updateTime(new Date)}),1e3-(new Date).getMilliseconds())}},{key:"mounted",value:function(){var t=new Date;this.updateTime(t);var e=[t.getHours(),t.getMinutes(),t.getSeconds()],n=e[0],a=e[1],o=e[2];this.rotation={hours:30*n+.5*a,minutes:6*a+.1*o,seconds:6*o}}},{key:"hours",get:function(){return{transform:"translate3d(-50%, 0, 0) rotate(".concat(this.rotation.hours,"deg)")}}},{key:"minutes",get:function(){return{transform:"translate3d(-50%, 0, 0) rotate(".concat(this.rotation.minutes,"deg)")}}},{key:"seconds",get:function(){return{transform:"translate3d(-50%, 0, 0) rotate(".concat(this.rotation.seconds,"deg)")}}}]),n}(b["b"]),Object(j["a"])(s.prototype,"onTickChange",[a],Object.getOwnPropertyDescriptor(s.prototype,"onTickChange"),s.prototype),Object(j["a"])(s.prototype,"onMinuteChange",[o],Object.getOwnPropertyDescriptor(s.prototype,"onMinuteChange"),s.prototype),r=s))||r),_=k,w=(n("f5b9"),n("2877")),C=Object(w["a"])(_,y,O,!1,null,"18ad7798",null),A=C.exports,S="https://angelm340.ddns.net/sound/",M=function(t){Object(d["a"])(n,t);var e=Object(f["a"])(n);function n(){var t;return Object(p["a"])(this,n),t=e.apply(this,arguments),t.alarmaLoading=!1,t.stopLoading=!1,t.startAllowed=!1,t.stopAllowed=!1,t}return Object(m["a"])(n,[{key:"iniciarAlarma",value:function(){var t=this;this.alarmaLoading=!0,fetch("".concat(S,"?start")).then((function(){t.alarmaLoading=!1,t.getStatus()}))}},{key:"pararAlarma",value:function(){var t=this;this.stopLoading=!0,fetch("".concat(S,"?stop")).then((function(){t.stopLoading=!1,t.getStatus()}))}},{key:"getStatus",value:function(){var t=this;fetch("".concat(S,"?status")).then((function(t){return t.json()})).then((function(e){var n=e.status;"SOUNDING"===n?(t.startAllowed=!1,t.stopAllowed=!0):"STOPPED"===n&&(t.startAllowed=!0,t.stopAllowed=!1)}))}},{key:"mounted",value:function(){this.getStatus()}}]),n}(b["b"]);M=Object(h["a"])([Object(b["a"])({components:{AnalogClock:A}})],M);var P=M,x=P,T=(n("8f79"),Object(w["a"])(x,g,v,!1,null,"2dc77d77",null)),D=T.exports,L=function(t){Object(d["a"])(n,t);var e=Object(f["a"])(n);function n(){return Object(p["a"])(this,n),e.apply(this,arguments)}return n}(b["b"]);L=Object(h["a"])([Object(b["a"])({components:{MainDisplay:D}})],L);var E=L,$=E,H=(n("034f"),Object(w["a"])($,u,l,!1,null,null,null)),I=H.exports;c["a"].use(i["a"]),c["a"].config.productionTip=!1,new c["a"]({render:function(t){return t(I)}}).$mount("#app")},f5b9:function(t,e,n){"use strict";var a=n("9b6e"),o=n.n(a);o.a}});
//# sourceMappingURL=app.7219217f.js.map