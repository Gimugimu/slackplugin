// ==UserScript==
// @name         wamei-plugins
// @namespace    wamei
// @version      0.1
// @author       wamei
// @match        https://*.slack.com/*
// ==/UserScript==

!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";class a{constructor(e,t,n){this.id=e,this.name=t,this.image=n}}const r="wamei:";const s=new class{getUserId(){var e=JSON.parse(localStorage.getItem("localConfig_v2"));return e.teams[e.lastActiveTeamId].user_id}onElementInserted(e,t){if(!this.elementInsertedSelector){this.elementInsertedSelector={};let e=document.createElement("style");e.innerHTML="@-webkit-keyframes elementInserted { 0% {opacity: 0;} 100% {opacity: 1;} }",document.querySelector("head").appendChild(e)}if(!this.elementInsertedSelector[e]){this.elementInsertedSelector[e]=[];let t=document.createElement("style");t.innerHTML=`${e} { -webkit-animation: elementInserted 0.001s 1; }`,document.querySelector("head").appendChild(t),document.addEventListener("webkitAnimationStart",t=>{"elementInserted"==t.animationName&&this.elementInsertedSelector[e].forEach(e=>{e(t.target)})})}this.elementInsertedSelector[e].push(t)}executeOnLoad(e,t){const n=()=>{let a=e();return a?t(a):setTimeout(n,1)};n()}getUserFromMessageElement(e){for(e=e.closest(".c-virtual_list__item, ts-message");;){let t=e.querySelector('a[data-message-sender^="U"]');if(t){const n=t.dataset.messageSender,r=t.innerText,s=e.querySelector("img.c-avatar__image").src;return new a(n,r,s)}if(e=e.previousElementSibling)return new a(null,null,null)}}get settings(){return{set(e,t){try{localStorage.setItem(r+e,JSON.stringify(t))}catch(e){}},get(e){try{const t=localStorage.getItem(r+e);return null==t?null:JSON.parse(t)}catch(e){return null}}}}getUserIdFromMessage(e){for(e=e.closest(".c-virtual_list__item, ts-message");;){let t=e.find(".c-message__gutter a.c-avatar, a.c-message_kit__avatar, a.member_image").attr("href");if(t)return t.split("/")[2];if(0==(e=e.prev()).length)return null}}getMessageUriFromMessage(e){return e.closest(".c-virtual_list__item, ts-message").find("a.c-timestamp, a.timestamp").attr("href")}createMessageLink(e,t,n){return`&lt;${e}|Re:&gt; <span data-id="${t}" data-label="@${n}" spellcheck="false" class="c-member_slug c-member_slug--link ts_tip_texty">@${n}</span>`}getTSfromUri(e){let t=e.match(/\/archives\/.+\/p(\d+)(\?thread_ts=(\d+\.\d+))?.*/);if(t[3])return t[3];if(t[1]){let e=t[1];return`${e.slice(0,e.length-6)}.${e.slice(-6)}`}return null}getUserByUserId(e){let t,n=(t=0==e.indexOf("B")?TS.model.bots:TS.model.members).filter(t=>t.id==e);return 0==n.length?null:((n=n[0]).is_bot=!(!1===n.is_bot),n.display_name=n._display_name_normalized_lc||n._real_name_normalized_lc||n.name,n.avatar_icon=n.is_bot?n.icons.image_36:n.profile.image_24,n)}getUserByName(e){let t;return 0==(t=TS.model.members.filter(t=>t._display_name_normalized_lc==e||t._real_name_normalized_lc==e)).length&&(t=TS.model.bots.filter(t=>t.name==e)),0==t.length?null:((t=t[0]).is_bot=!(!1===t.is_bot),t.display_name=t._display_name_normalized_lc||t._real_name_normalized_lc||t.name,t.avatar_icon=t.is_bot?t.icons.image_36:t.profile.image_24,t)}delegate(e,t,n,a){e.addEventListener(t,e=>{const t=e.target.closest(n);t&&a(e,t)})}};t.a=s},,function(e,t,n){"use strict";n.r(t);var a=n(0);!function(){const e=(e,t)=>{e.querySelector(t)&&(e.style.backgroundColor="#ddebd7",e.addEventListener("mouseover",()=>{e.style.backgroundColor="#e7efe4"}),e.addEventListener("mouseout",()=>{e.style.backgroundColor="#ddebd7"}))};a.a.onElementInserted(".c-message, .c-message_kit__message, ts-message",t=>{e(t,"a.c-member_slug--mention"),e(t,'span[data-broadcast-id="BKhere"]'),e(t,'span[data-broadcast-id="BKchannel"]')})}()},function(e,t,n){"use strict";n.r(t),n(0).a.executeOnLoad(()=>window.WebSocket&&window.WebSocket.prototype.send,()=>{const e=window.WebSocket.prototype.send;window.WebSocket.prototype.send=function(t){let n=JSON.parse(t);n&&n.type&&"typing"==n.type||e.call(this,t)}})},function(e,t,n){"use strict";n.r(t);class a{constructor(e,t){this.url=e,this.user=t}mount(e){const t=document.createElement("div");t.innerHTML=`\n<div class="ReactModalPortal">\n   <div class="ReactModal__Overlay ReactModal__Overlay--after-open c-fullscreen_modal p-file_viewer__modal_overlay">\n      <div class="c-fullscreen_modal__content c-fullscreen_modal__content--before-open c-fullscreen_modal__content--after-open" tabindex="-1" role="dialog" aria-label="${this.url}">\n         <div class="c-fullscreen_modal__body p-file_viewer__body c-fullscreen_modal__body--full_bleed">\n            <div class="c-fullscreen_modal__body__content c-fullscreen_modal__body__content--full_bleed">\n               <div class="p-file_viewer">\n                  <div class="p-file_viewer__header">\n                     <div class="p-file_viewer__header__meta">\n                        <span class="p-file_viewer__header__meta__avatar c-avatar" style="height: 36px; line-height: 36px; width: 36px;"><img class="c-avatar__image" src="${this.user.image}" alt=""></span>\n                        <div class="p-file_viewer__header__meta__stack">\n                           <div class="p-file_viewer__header__meta__title" data-qa="file_viewer_header_title">${this.url}</div>\n                           <div class="p-file_viewer__header__meta__minor"><span class="p-file_viewer__header__meta__name">${this.user.name}</span></div>\n                        </div>\n                     </div>\n                     <div class="p-file_viewer__header__actions">\n                        <div class="p-file_viewer__header__separator"></div>\n                        <button class="close c-button-unstyled c-icon_button c-icon_button--null p-file_viewer__header__button" type="button"><i class="c-icon c-icon--times" type="times" aria-hidden="true"></i></button>\n                     </div>\n                  </div>\n                  <div class="p-file_viewer__content">\n                     <div class="p-image_viewer">\n                        <img class="p-image_viewer__image" src="${this.url}">\n                     </div>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>`,e.appendChild(t),t.addEventListener("keydown",e=>(e.preventDefault(),e.stopPropagation(),27===e.keyCode&&t.remove(),!1)),t.querySelectorAll(".close, .p-image_viewer").forEach(e=>{e.addEventListener("click",()=>{t.remove()})}),t.focus()}}var r=n(0);r.a.onElementInserted(".c-message, .c-message_kit__message, ts-message",e=>{(e=>{e.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"], a[href$=".gif"], a[href$=".bmp"]').forEach(e=>{const t=decodeURIComponent(e.href.replace(/^https:\/\/slack-redir.net\/link\?url=/,""));if(e.innerText!=t)return;if(e.classList.contains("c-message_attachment__image"))return;if(e.classList.contains("c-message__file_link"))return;if(e.nextElementSibling&&e.nextElementSibling.classList.contains("c-message_attachment_inline"))return;const n=r.a.getUserFromMessageElement(e),s=document.createElement("span");s.classList.add("c-message_attachment_inline"),s.innerHTML=`\n<div data-expanded="true" data-qa-expandable-container-is-expanded="true">\n  <a role="link" tabindex="0" target="_blank" class="c-message_attachment__image" href="${t}" rel="noopener noreferrer" style="text-indent: 0;"><img src="${t}" style="max-width: 360px; max-height:210px;"></a>\n</div>`,s.addEventListener("click",e=>(e.preventDefault(),e.stopPropagation(),new a(t,n).mount(document.body),!1)),e.parentElement.insertBefore(s,e.nextSibling)})})(e)})},,function(e,t,n){"use strict";n.r(t);n(4),n(2),n(3)}]);