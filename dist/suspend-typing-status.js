!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(module,__webpack_exports__,__webpack_require__){"use strict";class Util{getUserIdFromMessage(e){for(e=e.closest(".c-virtual_list__item");;){let t=e.find(".c-message__gutter a.c-avatar").attr("href");if(t)return t.split("/")[2];if(0==(e=e.prev()).length)return null}}executeOnLoad(target,callback){const checker=()=>{let loaded=eval(target);return loaded?callback(loaded):setTimeout(checker,1)};checker()}}const util=new Util;__webpack_exports__.a=util},,,function(e,t,r){"use strict";r.r(t),r(0).a.executeOnLoad("window.WebSocket.prototype.send",()=>{const e=window.WebSocket.prototype.send;window.WebSocket.prototype.send=function(t){let r=JSON.parse(t);r&&r.type&&"typing"==r.type||e.call(this,t)}})}]);