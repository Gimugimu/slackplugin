// ==UserScript==
// @name         wamei-message-font-size
// @namespace    wamei
// @version      0.8
// @author       wamei
// @match        https://*.slack.com/*
// ==/UserScript==

!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}({0:function(e,t,n){"use strict";class s{constructor(e,t,n){this.id=e,this.name=t,this.image=n}}const r="wamei:",i={},o={};t.a=new class{getUserId(){var e=JSON.parse(localStorage.getItem("localConfig_v2"));return e.teams[e.lastActiveTeamId].user_id}onElementInserted(e,t){if(this.elementInsertedSelector||(this.elementInsertedSelector={}),!this.elementInsertedSelector[e]){this.elementInsertedSelector[e]=[],window.elementInsertedSelectorCount||(window.elementInsertedSelectorCount=0);const t=++window.elementInsertedSelectorCount,n=document.createElement("style");n.innerHTML=`@-webkit-keyframes elementInserted${t} { 0% {opacity: 0;} 100% {opacity: 1;} }`,document.querySelector("head").appendChild(n);const s=document.createElement("style");s.innerHTML=`${e} { -webkit-animation: elementInserted${t} 0.001s 1; }`,document.querySelector("head").appendChild(s),document.addEventListener("webkitAnimationStart",n=>{n.animationName==`elementInserted${t}`&&this.elementInsertedSelector[e].forEach(e=>{e(n.target)})})}this.elementInsertedSelector[e].push(t)}executeOnLoad(e,t){const n=()=>{let s=e();return s?t(s):setTimeout(n,1)};n()}getUserFromUserId(e){return i[e]}getUserFromName(e){return this.getUserFromUserId(o[e])}getUserFromMessageElement(e){for(e=e.closest(".c-virtual_list__item");;){let t=e.querySelector('a[data-message-sender^="U"]');if(t){const n=t.dataset.messageSender,r=t.innerText,l=e.querySelector("img.c-avatar__image").src,a=new s(n,r,l);return i[n]=a,o[r]=n,a}if(!(e=e.previousElementSibling))return new s(null,null,null)}}delegate(e,t,n,s){e.addEventListener(t,e=>{const t=e.target.closest(n);t&&s(e,t)})}createMessageLink(e,t,n){return`&lt;${e}|Re:&gt; <span data-id="${t}" data-label="@${n}" spellcheck="false" class="c-member_slug c-member_slug--link ts_tip_texty">@${n}</span>`}get settings(){return{set(e,t){try{localStorage.setItem(r+e,JSON.stringify(t))}catch(e){}},get(e){try{const t=localStorage.getItem(r+e);return null==t?null:JSON.parse(t)}catch(e){return null}}}}}},11:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(2);const i="font-size";class o extends r.a{constructor(){super(),this.defaultSize=14,this.minSize=8,this.fontSize=s.a.settings.set(i)-0||this.defaultSize,this.set()}increase(){this.fontSize++,this.set(),this.save()}decrease(){this.fontSize--,this.fontSize<this.minSize&&(this.fontSize=this.minSize),this.set(),this.save()}reset(){this.fontSize=this.defaultSize,this.set(),this.save()}set(){this.style(`[lang="ja-JP"] .c-message { font-size: ${this.fontSize}px; } pre.c-mrkdwn__pre { font-size: ${this.fontSize}px; line-height: 1; }`)}save(){s.a.settings.set(i,this.fontSize)}}!function(){const e=new o;document.body.addEventListener("keyup",t=>{t.altKey&&(187==t.keyCode?e.increase():189==t.keyCode?e.decrease():48==t.keyCode&&e.reset())})}()},2:function(e,t,n){"use strict";n.d(t,"a",function(){return s});class s{constructor(){this.element=document.createElement("style"),this.css=document.createElement("p"),this.add()}css(e,t){return this.css.style.setProperty(e,t),this.element.innerHTML=this.css.getAttribute("style"),this}style(e){return this.css.setAttribute("style",e),this.element.innerHTML=this.css.getAttribute("style"),this}add(){document.body.appendChild(this.element)}remove(){this.element.remove()}}}});