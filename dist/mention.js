!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}({5:function(e,t){!function(){"use strict";const e=e=>{e.css("background-color","#ddebd7").hover(function(){$(this).css("background-color","#e7efe4")},function(){$(this).css("background-color","#ddebd7")})},t=document.querySelector("div.client_main_container");new MutationObserver(t=>{t.forEach(t=>{const n=$(t.target).find("div.c-message");e(n.has('a[data-member-id="'+TS.model.user.id+'"]')),e(n.has('span[data-broadcast-id="BKhere"]')),e(n.has('span[data-broadcast-id="BKchannel"]'))})}).observe(t,{childList:!0,subtree:!0})}()}});