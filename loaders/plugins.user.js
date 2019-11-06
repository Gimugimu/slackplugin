// ==UserScript==
// @name         wamei-plugins
// @namespace    wamei
// @version      0.4
// @author       wamei
// @match        https://*.slack.com/*
// ==/UserScript==

!function(e){var t={};function n(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";class s{constructor(e,t,n){this.id=e,this.name=t,this.image=n}}const a="wamei:",r={},i={};t.a=new class{getUserId(){var e=JSON.parse(localStorage.getItem("localConfig_v2"));return e.teams[e.lastActiveTeamId].user_id}onElementInserted(e,t){if(this.elementInsertedSelector||(this.elementInsertedSelector={}),!this.elementInsertedSelector[e]){this.elementInsertedSelector[e]=[],window.elementInsertedSelectorCount||(window.elementInsertedSelectorCount=0);const t=++window.elementInsertedSelectorCount,n=document.createElement("style");n.innerHTML=`@-webkit-keyframes elementInserted${t} { 0% {opacity: 0;} 100% {opacity: 1;} }`,document.querySelector("head").appendChild(n);const s=document.createElement("style");s.innerHTML=`${e} { -webkit-animation: elementInserted${t} 0.001s 1; }`,document.querySelector("head").appendChild(s),document.addEventListener("webkitAnimationStart",n=>{n.animationName==`elementInserted${t}`&&this.elementInsertedSelector[e].forEach(e=>{e(n.target)})})}this.elementInsertedSelector[e].push(t)}executeOnLoad(e,t){const n=()=>{let s=e();return s?t(s):setTimeout(n,1)};n()}getUserFromUserId(e){return r[e]}getUserFromName(e){return this.getUserFromUserId(i[e])}getUserFromMessageElement(e){for(e=e.closest(".c-virtual_list__item");;){let t=e.querySelector('a[data-message-sender^="U"]');if(t){const n=t.dataset.messageSender,a=t.innerText,c=e.querySelector("img.c-avatar__image").src,l=new s(n,a,c);return r[n]=l,i[a]=n,l}if(!(e=e.previousElementSibling))return new s(null,null,null)}}delegate(e,t,n,s){e.addEventListener(t,e=>{const t=e.target.closest(n);t&&s(e,t)})}createMessageLink(e,t,n){return`&lt;${e}|Re:&gt; <span data-id="${t}" data-label="@${n}" spellcheck="false" class="c-member_slug c-member_slug--link ts_tip_texty">@${n}</span>`}get settings(){return{set(e,t){try{localStorage.setItem(a+e,JSON.stringify(t))}catch(e){}},get(e){try{const t=localStorage.getItem(a+e);return null==t?null:JSON.parse(t)}catch(e){return null}}}}}},function(e,t,n){"use strict";n.d(t,"a",function(){return s});class s{constructor(e){this.target=e}get inputElement(){return this.target}focus(){const e=document.createRange(),t=window.getSelection();e.setStartAfter(this.inputElement.lastChild),e.collapse(!0),t.removeAllRanges(),t.addRange(e),this.inputElement.focus()}normalize(e){return e.replace(/(<\/blockquote>)/g,"$1\n").replace(/<br>/g,"\n")}convertNewline(e){return"<p>"+e.replace(/\n/g,"</p><p>")+"</p>"}quoteText(e){return(">"+e.replace(/\n/g,"\n>").replace(/<.+?>/g,"")).replace(/>http/g,"> http")}isEmpty(){return this.inputElement.classList.contains("ql-blank")}clear(){this.inputElement.innerHTML=""}appendText(e){this.inputElement.innerHTML+=this.convertNewline(this.normalize(e))}appendQuotedText(e){this.inputElement.innerHTML+=this.convertNewline(this.quoteText(this.normalize(e)))}}},function(e,t,n){"use strict";n.d(t,"a",function(){return s});class s{constructor(){this.element=document.createElement("style"),this.css=document.createElement("p"),this.add()}css(e,t){return this.css.style.setProperty(e,t),this.element.innerHTML=this.css.getAttribute("style"),this}style(e){return this.css.setAttribute("style",e),this.element.innerHTML=this.css.getAttribute("style"),this}add(){document.body.appendChild(this.element)}remove(){this.element.remove()}}},function(e,t,n){"use strict";n.r(t);var s=n(0);!function(){const e=(e,t)=>{e.querySelector(t)&&(e.style.backgroundColor="#ddebd7",e.addEventListener("mouseover",()=>{e.style.backgroundColor="#e7efe4"}),e.addEventListener("mouseout",()=>{e.style.backgroundColor="#ddebd7"}))};s.a.onElementInserted(".c-message, .c-message_kit__message, ts-message",t=>{e(t,"a.c-member_slug--mention"),e(t,'span[data-broadcast-id="BKhere"]'),e(t,'span[data-broadcast-id="BKchannel"]')})}()},function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(2),r=n(1);!function(){s.a.onElementInserted('div[data-qa="channel_header__buttons"]',e=>{const t=document.createElement("button");t.id="search-in-channel",t.setAttribute("aria-label","チャンネル内検索"),t.setAttribute("aria-haspopup","true"),t.setAttribute("class","c-button-unstyled p-classic_nav__model__button"),t.innerHTML='<i class="ts_icon_search_in_channel c-icon p-classic_nav__model__button__icon" aria-hidden="true"></i>',t.addEventListener("click",()=>{document.querySelector('button[data-qa="legacy_search_header"]').click(),s.a.executeOnLoad(()=>document.querySelector('.ReactModal__Content[aria-label="検索"]'),()=>{const e=new r.a(document.querySelector(".c-search__input_box .ql-editor"));let t="";switch(location.href.split("/")[5].charAt(0)){case"C":case"G":t=`#${document.querySelector('button[data-qa="channel_name"]').innerText}`;break;case"D":let n=document.querySelector('button[data-qa="channel_name"] span').innerText;t=`<ts-mention data-id="${Array.prototype.find.call(document.querySelectorAll(".c-link.c-message__sender_link"),e=>e.dataset.messageSender!=s.a.getUserId()).dataset.messageSender}" data-label="@${n}" spellcheck="false" class="c-member_slug c-member_slug--link ts_tip_texty" dir="ltr">@${n}</ts-mention>`;break;default:return void e.focus()}e.clear(),e.appendText(`in:${t} `),e.inputElement.scrollLeft=0,e.focus()})}),e.appendChild(t)});const e=new a.a;e.style(".ts_icon_search_in_channel::before { content: '\\E086' }"),e.add()}()},function(e,t,n){"use strict";n.r(t),n(0).a.executeOnLoad(()=>window.WebSocket&&window.WebSocket.prototype.send,()=>{const e=window.WebSocket.prototype.send;window.WebSocket.prototype.send=function(t){let n=JSON.parse(t);n&&n.type&&"typing"==n.type||e.call(this,t)}})},function(e,t,n){"use strict";n.r(t);class s{constructor(e,t,n){this.user=e,this.uri=t,this.text=n,this.selected=""}}var a=n(0);var r=new class{constructor(){this.buttons=[]}append(e){return this.buttons.unshift(e),this}applyButtons(e,t){const n=e.closest(".c-virtual_list__item"),r=a.a.getUserFromMessageElement(n);let i=n.querySelector(".c-message__body, .c-message_kit__text"),c=i?i.innerHTML:null;c||(c=(i=n.querySelector(".message_body"))?i.innerHTML.replace('<span class="constrain_triple_clicks"></span>',"").trim():""),c=c.replace(/<a href="(https:\/\/.+?)" .+?>Re:<\/a><a .+?>@(.+?)<\/a>/gm,a.a.createMessageLink("$1",r.id,"$2"));let l="";n.querySelectorAll(".c-message__attachments, .c-message_kit__attachments").forEach(e=>{e.classList.contains("c-message_attachment__delete")||e.querySelectorAll(".c-message_attachment__body .c-message_attachment__row").forEach(e=>{l+=`\n> ${e.innerHTML}`;const t=e.querySelector("a.c-message_attachment__title_link");t&&(l+=`\n> ${t.getAttribute("href")}`)})});const o=n.closest(".c-virtual_list__item").querySelector("a.c-timestamp, a.timestamp").getAttribute("href"),d=new s(r,o,c+l);this.buttons.forEach(n=>{const s=n.createElement(t,d);s.addEventListener("mousedown",()=>{d.selected=window.getSelection().toString()||""}),n.isAvailable(d)&&e.insertBefore(s,e.firstElementChild)})}},i=n(1);class c{constructor(e,t){this.template=e,this.callback=t}isAvailable(e){return!0}createElement(e,t){const n=document.createElement("p");n.innerHTML=this.template;const s=n.firstElementChild;return s.addEventListener("click",()=>{this.callback(e,t)}),s}}class l{static create(e,t,n,s){return s||(s=""),new c(`<button class="c-button-unstyled c-message_actions__button" type="button" aria-label="${e}"><i class="c-icon c-icon--${t}" type="${t}" aria-hidden="true" style="${s}"></i></button>`,n)}}!function(){const e=l.create("メッセージを引用する","small-quote",function(e,t){e.isEmpty()&&e.clear(),null!=t.user.id&&e.appendQuotedText(`*${t.user.name}*`),""!=t.selected?e.appendQuotedText(`${t.selected}`):e.appendQuotedText(`${t.text}`),e.appendText(""),e.focus()}),t=l.create("メッセージに返信する","share-action",function(e,t){if(!t.user.id)return;e.isEmpty()&&e.clear();const n=0==t.uri.indexOf("/")?location.origin+t.uri:t.uri;e.appendText(a.a.createMessageLink(n,t.user.id,t.user.name)),""!=t.selected&&e.appendQuotedText(`${t.selected}`),e.appendText(""),e.focus()},"transform: scale(-1, 1);");t.isAvailable=function(e){return!!e.user.id},r.append(t),r.append(e),a.a.onElementInserted(".c-message_actions__container",e=>{const t=e.closest(".c-virtual_list__item");let n;try{const e=t.getAttribute("id").replace(/threads_view_(root-)?(.+?-\d+\.\d+)(-\d+\.\d+)?/,"$2").replace(".","\\.");n=document.querySelector(`#threads_view_footer-${e} .ql-editor`)}catch(e){}n||(n=t.parentElement.querySelector(".ql-editor")),n||(n=document.querySelector(".p-message_input .ql-editor")),r.applyButtons(e,new i.a(n))});a.a.onElementInserted(".c-message, .c-message_kit__message, ts-message",e=>{const t=e.querySelector(".c-message__broadcast_preamble");t&&(t.style.fontSize="10px");const n=e.querySelector(".c-message__broadcast_preamble_link");n&&(n.style.color="#717274"),e.querySelectorAll("blockquote b:not(.wamei-treated), .special_formatting_quote b:not(.wamei-treated)").forEach(e=>{const t=e.innerText;e.classList.add("wamei-treated");const n=a.a.getUserFromName(t);n&&(e.innerHTML=`<img class="c-message_attachment__author_icon" alt="${n.name}" src="${n.image}" width="16" height="16">${n.name}`)})}),a.a.executeOnLoad(()=>XMLHttpRequest.prototype.open,()=>{const e=XMLHttpRequest.prototype.open,t=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(n,s){return-1!=s.indexOf("/api/chat.postMessage")&&(this.send=function(e){if("message"!=e.get("type"))return t.call(this,e);const n=e.get("text");let s=n.match(new RegExp("&lt;(.*(/archives/.+)|Re:)&gt;"));if(s){if(!e.get("thread_ts")){e.append("thread_ts",function(e){let t=e.match(/\/archives\/.+\/p(\d+)(\?thread_ts=(\d+\.\d+))?.*/);if(t[3])return t[3];if(t[1]){let e=t[1];return`${e.slice(0,e.length-6)}.${e.slice(-6)}`}return null}(s[2])),e.append("reply_broadcast","true")}e.delete("text"),e.append("text",n.replace(new RegExp("&lt;(.*(/archives/.+)|Re:)&gt;","gm"),"<$1>")),e.append("unfurl_links","false")}return t.call(this,e)}),e.apply(this,arguments)}})}()},function(e,t,n){"use strict";n.r(t);class s{constructor(e,t){this.url=e,this.user=t}mount(e){const t=document.createElement("div");t.innerHTML=`\n<div class="ReactModalPortal">\n   <div class="ReactModal__Overlay ReactModal__Overlay--after-open c-fullscreen_modal p-file_viewer__modal_overlay">\n      <div class="c-fullscreen_modal__content c-fullscreen_modal__content--before-open c-fullscreen_modal__content--after-open" tabindex="-1" role="dialog" aria-label="${this.url}">\n         <div class="c-fullscreen_modal__body p-file_viewer__body c-fullscreen_modal__body--full_bleed">\n            <div class="c-fullscreen_modal__body__content c-fullscreen_modal__body__content--full_bleed">\n               <div class="p-file_viewer">\n                  <div class="p-file_viewer__header">\n                     <div class="p-file_viewer__header__meta">\n                        <span class="p-file_viewer__header__meta__avatar c-avatar" style="height: 36px; line-height: 36px; width: 36px;"><img class="c-avatar__image" src="${this.user.image}" alt=""></span>\n                        <div class="p-file_viewer__header__meta__stack">\n                           <div class="p-file_viewer__header__meta__title" data-qa="file_viewer_header_title">${this.url}</div>\n                           <div class="p-file_viewer__header__meta__minor"><span class="p-file_viewer__header__meta__name">${this.user.name}</span></div>\n                        </div>\n                     </div>\n                     <div class="p-file_viewer__header__actions">\n                        <div class="p-file_viewer__header__separator"></div>\n                        <button class="close c-button-unstyled c-icon_button c-icon_button--null p-file_viewer__header__button" type="button"><i class="c-icon c-icon--times" type="times" aria-hidden="true"></i></button>\n                     </div>\n                  </div>\n                  <div class="p-file_viewer__content">\n                     <div class="p-image_viewer">\n                        <img class="p-image_viewer__image" src="${this.url}">\n                     </div>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>`,e.appendChild(t),t.addEventListener("keydown",e=>(e.preventDefault(),e.stopPropagation(),27===e.keyCode&&t.remove(),!1)),t.querySelectorAll(".close, .p-image_viewer").forEach(e=>{e.addEventListener("click",()=>{t.remove()})}),t.focus()}}var a=n(0);a.a.onElementInserted(".c-message, .c-message_kit__message, ts-message",e=>{(e=>{e.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"], a[href$=".gif"], a[href$=".bmp"]').forEach(e=>{const t=decodeURIComponent(e.href.replace(/^https:\/\/slack-redir.net\/link\?url=/,""));if(e.innerText!=t)return;if(e.classList.contains("c-message_attachment__image"))return;if(e.classList.contains("c-message__file_link"))return;if(e.nextElementSibling&&e.nextElementSibling.classList.contains("c-message_attachment_inline"))return;const n=a.a.getUserFromMessageElement(e),r=document.createElement("span");r.classList.add("c-message_attachment_inline"),r.innerHTML=`\n<div data-expanded="true" data-qa-expandable-container-is-expanded="true">\n  <a role="link" tabindex="0" target="_blank" class="c-message_attachment__image" href="${t}" rel="noopener noreferrer" style="text-indent: 0;"><img src="${t}" style="max-width: 360px; max-height:210px;"></a>\n</div>`,r.addEventListener("click",e=>(e.preventDefault(),e.stopPropagation(),new s(t,n).mount(document.body),!1)),e.parentElement.insertBefore(r,e.nextSibling)})})(e)})},,function(e,t,n){"use strict";n.r(t);n(7),n(3),n(6),n(4),n(5)}]);