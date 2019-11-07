// ==UserScript==
// @name         wamei-reply
// @namespace    wamei
// @version      0.5
// @author       wamei
// @match        https://*.slack.com/*
// ==/UserScript==

!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";class s{constructor(e,t,n){this.id=e,this.name=t,this.image=n}}const r="wamei:",a={},i={};t.a=new class{getUserId(){var e=JSON.parse(localStorage.getItem("localConfig_v2"));return e.teams[e.lastActiveTeamId].user_id}onElementInserted(e,t){if(this.elementInsertedSelector||(this.elementInsertedSelector={}),!this.elementInsertedSelector[e]){this.elementInsertedSelector[e]=[],window.elementInsertedSelectorCount||(window.elementInsertedSelectorCount=0);const t=++window.elementInsertedSelectorCount,n=document.createElement("style");n.innerHTML=`@-webkit-keyframes elementInserted${t} { 0% {opacity: 0;} 100% {opacity: 1;} }`,document.querySelector("head").appendChild(n);const s=document.createElement("style");s.innerHTML=`${e} { -webkit-animation: elementInserted${t} 0.001s 1; }`,document.querySelector("head").appendChild(s),document.addEventListener("webkitAnimationStart",n=>{n.animationName==`elementInserted${t}`&&this.elementInsertedSelector[e].forEach(e=>{e(n.target)})})}this.elementInsertedSelector[e].push(t)}executeOnLoad(e,t){const n=()=>{let s=e();return s?t(s):setTimeout(n,1)};n()}getUserFromUserId(e){return a[e]}getUserFromName(e){return this.getUserFromUserId(i[e])}getUserFromMessageElement(e){for(e=e.closest(".c-virtual_list__item");;){let t=e.querySelector('a[data-message-sender^="U"]');if(t){const n=t.dataset.messageSender,r=t.innerText,l=e.querySelector("img.c-avatar__image").src,o=new s(n,r,l);return a[n]=o,i[r]=n,o}if(!(e=e.previousElementSibling))return new s(null,null,null)}}delegate(e,t,n,s){e.addEventListener(t,e=>{const t=e.target.closest(n);t&&s(e,t)})}createMessageLink(e,t,n){return`&lt;${e}|Re:&gt; <span data-id="${t}" data-label="@${n}" spellcheck="false" class="c-member_slug c-member_slug--link ts_tip_texty">@${n}</span>`}get settings(){return{set(e,t){try{localStorage.setItem(r+e,JSON.stringify(t))}catch(e){}},get(e){try{const t=localStorage.getItem(r+e);return null==t?null:JSON.parse(t)}catch(e){return null}}}}}},function(e,t,n){"use strict";n.d(t,"a",function(){return s});class s{constructor(e){this.target=e}get inputElement(){return this.target}focus(){const e=document.createRange(),t=window.getSelection();e.setStartAfter(this.inputElement.lastChild),e.collapse(!0),t.removeAllRanges(),t.addRange(e),this.inputElement.focus()}normalize(e){return e.replace(/(<\/blockquote>)/g,"$1\n").replace(/<br>/g,"\n")}convertNewline(e){return"<p>"+e.replace(/\n/g,"</p><p>")+"</p>"}quoteText(e){return(">"+e.replace(/\n/g,"\n>").replace(/<.+?>/g,"")).replace(/>http/g,"> http")}isEmpty(){return this.inputElement.classList.contains("ql-blank")}clear(){this.inputElement.innerHTML=""}appendText(e){this.inputElement.innerHTML+=this.convertNewline(this.normalize(e))}appendQuotedText(e){this.inputElement.innerHTML+=this.convertNewline(this.quoteText(this.normalize(e)))}}},,,,,function(e,t,n){"use strict";n.r(t);class s{constructor(e,t,n){this.user=e,this.uri=t,this.text=n,this.selected=""}}var r=n(0);var a=new class{constructor(){this.buttons=[]}append(e){return this.buttons.unshift(e),this}applyButtons(e,t){const n=e.closest(".c-virtual_list__item"),a=r.a.getUserFromMessageElement(n);let i=n.querySelector(".c-message__body, .c-message_kit__text"),l=i?i.innerHTML:null;l||(l=(i=n.querySelector(".message_body"))?i.innerHTML.replace('<span class="constrain_triple_clicks"></span>',"").trim():""),l=l.replace(/<a href="(https:\/\/.+?)" .+?>Re:<\/a><a .+?>@(.+?)<\/a>/gm,r.a.createMessageLink("$1",a.id,"$2"));let o="";n.querySelectorAll(".c-message__attachments, .c-message_kit__attachments").forEach(e=>{e.classList.contains("c-message_attachment__delete")||e.querySelectorAll(".c-message_attachment__body .c-message_attachment__row").forEach(e=>{o+=`\n> ${e.innerHTML}`;const t=e.querySelector("a.c-message_attachment__title_link");t&&(o+=`\n> ${t.getAttribute("href")}`)})});const c=n.closest(".c-virtual_list__item").querySelector("a.c-timestamp, a.timestamp").getAttribute("href"),u=new s(a,c,l+o);this.buttons.forEach(n=>{const s=n.createElement(t,u);s.addEventListener("mousedown",()=>{u.selected=window.getSelection().toString()||""}),n.isAvailable(u)&&e.insertBefore(s,e.firstElementChild)})}},i=n(1);class l{constructor(e,t,n){this.callback=e,this.template=t,this.tooltip=n}isAvailable(e){return!0}createElement(e,t){const n=document.createElement("div");n.innerHTML=this.template;const s=n.firstElementChild;n.innerHTML=this.tooltip,n.style.position="relative";const r=n.firstElementChild;return r.style.position="absolute",r.style.zIndex="99999",r.style.display="none",r.style.width="200px",s.appendChild(n),s.addEventListener("click",()=>{this.callback(e,t)}),s.addEventListener("mouseover",()=>{r.style.display="block";const e=s.getClientRects()[0],t=r.getClientRects()[0];r.style.top=`${-e.height-t.height}px`,r.style.left=`${e.width-t.width/2}px`}),s.addEventListener("mouseleave",()=>{r.style.display="none"}),s}}class o{static create(e,t,n,s){return s||(s=""),new l(n,`<button class="c-button-unstyled c-message_actions__button"type="button" aria-label="${e}"><i class="c-icon c-icon--${t}" type="${t}" aria-hidden="true" style="${s}"></i></button>\n`,`<div tabindex="-1" role="presentation" style="outline: none; transition-duration: 80ms; animation-duration: 80ms;"><div role="presentation"><div id="slack-kit-tooltip" role="tooltip" class="c-tooltip__tip c-tooltip__tip--top" data-qa="tooltip-tip">${e}<div class="c-tooltip__tip__arrow"></div></div></div></div>`)}}!function(){const e=o.create("メッセージを引用する","small-quote",function(e,t){e.isEmpty()&&e.clear(),null!=t.user.id&&e.appendQuotedText(`*${t.user.name}*`),""!=t.selected?e.appendQuotedText(`${t.selected}`):e.appendQuotedText(`${t.text}`),e.appendText(""),e.focus()}),t=o.create("メッセージに返信する","share-action",function(e,t){if(!t.user.id)return;e.isEmpty()&&e.clear();const n=0==t.uri.indexOf("/")?location.origin+t.uri:t.uri;e.appendText(r.a.createMessageLink(n,t.user.id,t.user.name)),""!=t.selected&&e.appendQuotedText(`${t.selected}`),e.appendText(""),e.focus()},"transform: scale(-1, 1);");t.isAvailable=function(e){return!!e.user.id},a.append(t),a.append(e),r.a.onElementInserted(".c-message_actions__container",e=>{const t=e.closest(".c-virtual_list__item");let n;try{const e=t.getAttribute("id").replace(/threads_view_(root-)?(.+?-\d+\.\d+)(-\d+\.\d+)?/,"$2").replace(".","\\.");n=document.querySelector(`#threads_view_footer-${e} .ql-editor`)}catch(e){}n||(n=t.parentElement.querySelector(".ql-editor")),n||(n=document.querySelector(".p-message_input .ql-editor")),a.applyButtons(e,new i.a(n))});r.a.onElementInserted(".c-message, .c-message_kit__message, ts-message",e=>{const t=e.querySelector(".c-message__broadcast_preamble");t&&(t.style.fontSize="10px");const n=e.querySelector(".c-message__broadcast_preamble_link");n&&(n.style.color="#717274"),e.querySelectorAll("blockquote b:not(.wamei-treated), .special_formatting_quote b:not(.wamei-treated)").forEach(e=>{const t=e.innerText;e.classList.add("wamei-treated");const n=r.a.getUserFromName(t);n&&(e.innerHTML=`<img class="c-message_attachment__author_icon" alt="${n.name}" src="${n.image}" width="16" height="16">${n.name}`)})}),r.a.executeOnLoad(()=>XMLHttpRequest.prototype.open,()=>{const e=XMLHttpRequest.prototype.open,t=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(n,s){return-1!=s.indexOf("/api/chat.postMessage")&&(this.send=function(e){if("message"!=e.get("type"))return t.call(this,e);const n=e.get("text");let s=n.match(new RegExp("&lt;(.*(/archives/.+)|Re:)&gt;"));if(s){if(!e.get("thread_ts")){e.append("thread_ts",function(e){let t=e.match(/\/archives\/.+\/p(\d+)(\?thread_ts=(\d+\.\d+))?.*/);if(t[3])return t[3];if(t[1]){let e=t[1];return`${e.slice(0,e.length-6)}.${e.slice(-6)}`}return null}(s[2])),e.append("reply_broadcast","true")}e.delete("text"),e.append("text",n.replace(new RegExp("&lt;(.*(/archives/.+)|Re:)&gt;","gm"),"<$1>")),e.append("unfurl_links","false")}return t.call(this,e)}),e.apply(this,arguments)}})}()}]);