// ==UserScript==
// @name         wamei-resize-sidebar
// @namespace    wamei
// @version      0.5
// @author       wamei
// @match        https://*.slack.com/*
// ==/UserScript==

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}({0:function(e,t,n){"use strict";class r{constructor(e,t,n){this.id=e,this.name=t,this.image=n}}const s="wamei:",l={},i={};t.a=new class{getUserId(){var e=JSON.parse(localStorage.getItem("localConfig_v2"));return e.teams[e.lastActiveTeamId].user_id}onElementInserted(e,t){if(this.elementInsertedSelector||(this.elementInsertedSelector={}),!this.elementInsertedSelector[e]){this.elementInsertedSelector[e]=[],window.elementInsertedSelectorCount||(window.elementInsertedSelectorCount=0);const t=++window.elementInsertedSelectorCount,n=document.createElement("style");n.innerHTML=`@-webkit-keyframes elementInserted${t} { 0% {opacity: 0;} 100% {opacity: 1;} }`,document.querySelector("head").appendChild(n);const r=document.createElement("style");r.innerHTML=`${e} { -webkit-animation: elementInserted${t} 0.001s 1; }`,document.querySelector("head").appendChild(r),document.addEventListener("webkitAnimationStart",n=>{n.animationName==`elementInserted${t}`&&this.elementInsertedSelector[e].forEach(e=>{e(n.target)})})}this.elementInsertedSelector[e].push(t)}executeOnLoad(e,t){const n=()=>{let r=e();return r?t(r):setTimeout(n,1)};n()}getUserFromUserId(e){return l[e]}getUserFromName(e){return this.getUserFromUserId(i[e])}getUserFromMessageElement(e){for(e=e.closest(".c-virtual_list__item");;){let t=e.querySelector('a[data-message-sender^="U"]');if(t){const n=t.dataset.messageSender,s=t.innerText,a=e.querySelector("img.c-avatar__image").src,o=new r(n,s,a);return l[n]=o,i[s]=n,o}if(!(e=e.previousElementSibling))return new r(null,null,null)}}delegate(e,t,n,r){e.addEventListener(t,e=>{const t=e.target.closest(n);t&&r(e,t)})}createMessageLink(e,t,n){return`&lt;${e}|Re:&gt; <span data-id="${t}" data-label="@${n}" spellcheck="false" class="c-member_slug c-member_slug--link ts_tip_texty">@${n}</span>`}get settings(){return{set(e,t){try{localStorage.setItem(s+e,JSON.stringify(t))}catch(e){}},get(e){try{const t=localStorage.getItem(s+e);return null==t?null:JSON.parse(t)}catch(e){return null}}}}}},10:function(e,t,n){"use strict";n.r(t);var r=n(0);!function(){const e=e=>e?(e>500&&(e=500),$(".client_channels_list_container").css("flex-basis",`${e}px`),$(".p-channel_sidebar").css("width",`${e}px`),$("#col_channels").css("width",`${e}px`),$("#loading-zone").css("left",`${e}px`),e):e,t="sidebar-width",n=r.a.settings.get(t);e(n),r.a.executeOnLoad("$('.p-channel_sidebar__section_heading').length > 0",()=>{e(n);const s=$('<div class="wamei-sidebar-resizer" style="position:absolute;right:-3px;top:0;height:100%;width:3px;cursor:col-resize;z-index:1000;" draggable="true"></div>').on("drag",t=>{e(t.clientX)}).on("dragend",n=>{let s=n.clientX;s=e(s),r.a.settings.set(t,s)});$(".client_channels_list_container").css("max-width","500px").append(s)})}()}});