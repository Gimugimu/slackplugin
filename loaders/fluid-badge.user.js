// ==UserScript==
// @name         wamei-fluid-badge
// @namespace    wamei
// @version      0.6
// @author       wamei
// @match        https://*.slack.com/*
// ==/UserScript==

!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=8)}({8:function(module,exports){var updateBadge=function(){var e=TS.model.all_unread_cnt;window.fluid.dockBadge=e>0?e:""};setInterval(updateBadge,1e3);var mention_cnt=TS.model.all_unread_highlights_cnt,connect=function(){TS.interop.api.call("rtm.connect",{}).then(function(e){var n=new WebSocket(e.data.url);n.onopen=function(){n.send("Ping")},n.onerror=function(e){console.error(e),connect()},n.onmessage=function(e){var n=TS.model.all_unread_highlights_cnt;n>mention_cnt&&window.fluid.requestUserAttention(!0),mention_cnt=n}}).catch(function(e){console.error(e)})};!function(target,func){eval(target)?func():this.call(this,target,func)}("TS.interop.api.call",connect)}});