!function(e){var t={};function n(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(module,__webpack_exports__,__webpack_require__){"use strict";const PREFIX="wamei:";class Util{getUserIdFromMessage(e){for(e=e.closest(".c-virtual_list__item, ts-message");;){let t=e.find(".c-message__gutter a.c-avatar, a.message_sender").attr("href");if(t)return t.split("/")[2];if(0==(e=e.prev()).length)return null}}getMessageUriFromMessage(e){return e.closest(".c-virtual_list__item, ts-message").find("a.c-timestamp, a.timestamp").attr("href")}getUserByUserId(e){let t,n=(t=0==e.indexOf("B")?TS.model.bots:TS.model.members).filter(t=>t.id==e);return 0==n.length?null:((n=n[0]).is_bot=!(!1===n.is_bot),n.display_name=n._display_name_normalized_lc||n._real_name_normalized_lc||n.name,n.avatar_icon=n.is_bot?n.icons.image_36:n.profile.image_24,n)}getUserByName(e){let t;return 0==(t=TS.model.members.filter(t=>t._display_name_normalized_lc==e||t._real_name_normalized_lc==e)).length&&(t=TS.model.bots.filter(t=>t.name==e)),0==t.length?null:((t=t[0]).is_bot=!(!1===t.is_bot),t.display_name=t._display_name_normalized_lc||t._real_name_normalized_lc||t.name,t.avatar_icon=t.is_bot?t.icons.image_36:t.profile.image_24,t)}executeOnLoad(target,callback){const checker=()=>{let loaded=eval(target);return loaded?callback(loaded):setTimeout(checker,1)};checker()}get settings(){return{set(e,t){try{localStorage.setItem(PREFIX+e,JSON.stringify(t))}catch(e){}},get(e){try{const t=localStorage.getItem(PREFIX+e);return null==t?null:JSON.parse(t)}catch(e){return null}}}}}const util=new Util;__webpack_exports__.a=util},,function(e,t,n){"use strict";n.r(t);var a=n(0);!function(){const e=document.querySelector("div#messages_container");new MutationObserver(e=>{e.forEach(e=>{$(e.target).find("div.c-message").find("a:contains(.png), a:contains(.jpg), a:contains(.jpeg), a:contains(.gif), a:contains(.bmp)").not(".c-message_attachment__image").not(".c-message__file_link").each((e,t)=>{const n=$(t);if(n.next("span.c-message_attachment_inline").length>0)return;const s=n.attr("href"),i=decodeURIComponent(s.replace(/^https:\/\/slack-redir.net\/link\?url=/,""));if(n.parents(".c-message_attachment").find(`.c-message_attachment__image[href="${s}"], .c-message_attachment__image[href="${i}"]`).length>0)return;const r=a.a.getUserIdFromMessage(n.closest(".c-virtual_list__item"));n.after($(`\n<span class="c-message_attachment_inline">\n  <div data-expanded="true" data-qa-expandable-container-is-expanded="true">\n    <a role="link" tabindex="0" target="_blank" class="c-message_attachment__image" href="${i}" rel="noopener noreferrer" style="text-indent: 0;"><img src="${i}" style="max-width: 360px; max-height:210px;"></a>\n  </div>\n</span>`).click(e=>{event.preventDefault(),event.stopPropagation();const t=new class{constructor(e,t){this.url=e,this.user=t,this.initElement()}initElement(){this.$element=$(`\n<div id="fs_modal" role="dialog" tabindex="-1" class="fs_modal_file_viewer active" aria-labelledby="fs_modal_header" style="transition: 200ms;">\n  <div class="contents_container fs_modal_file_viewer_content">\n    <div class="contents">\n      <header class="fs_modal_file_viewer_header external">\n\n        <div class="file_header_detailed" style="margin-left: 5px;">\n          <span class=" member_preview_link member_image thumb_48" data-member-id="${this.user.id}" data-thumb-size="48" style="background-image: url('${this.user.profile.image_48}')" aria-hidden="true">  </span>\n          <h2 class="title no_jumbomoji"></h2>\n          <p class="file_meta">\n            <a href="/team/${this.user.id}" target="/team/${this.user.id}" class="message_sender color_U9S39304X color_684b6c member member_preview_link " data-member-id="${this.user.id}">${this.user._real_name_normalized_lc}</a>\n            <span class="bullet" aria-hidden="true"></span>\n          </p>\n        </div>\n\n        <div class="controls">\n          <a href="${this.url}" rel="noreferrer" target="_blank" class="open_btn control_btn btn_icon btn ts_icon ts_icon_external_link ts_tip ts_tip_bottom">\n            <span class="ts_tip_tip">オリジナルを開く</span>\n          </a>\n          <button id="fs_modal_close_btn" class="close_btn control_btn btn_icon btn ts_icon ts_icon_times ts_tip ts_tip_bottom ts_tip_right">\n            <div class="ts_tip_tip">閉じる\n              <div class="muted_tooltip_info">(esc)</div>\n            </div>\n          </button>\n        </div>\n      </header>\n\n      <div class="viewer" id="fs_modal_image_viewer">\n        <div class="images">\n          <figure class="scaled">\n            <img src="${this.url}" alt="" class="scaled_image no_zoom">\n          </figure>\n          <figure class="actual_pixel">\n            <div class="actual_pixel_center">\n              <img src="${this.url}" alt="" class="actual_pixel_image">\n            </div>\n          </figure>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>`).keydown(e=>(event.preventDefault(),event.stopPropagation(),27===e.keyCode&&this.$element.remove(),!1)),this.$element.find("#fs_modal_close_btn, #fs_modal_image_viewer").click(()=>{this.$element.remove()})}}(i,TS.model.members.find(e=>e.id==r));return $("body").append(t.$element),t.$element.get(0).focus(),!1}))})})}).observe(e,{childList:!0,subtree:!0})}()}]);