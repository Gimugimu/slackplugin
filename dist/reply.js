!function(e){var t={};function s(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=4)}([function(module,__webpack_exports__,__webpack_require__){"use strict";const PREFIX="wamei:";class Util{getUserIdFromMessage(e){for(e=e.closest(".c-virtual_list__item, ts-message");;){let t=e.find(".c-message__gutter a.c-avatar, a.message_sender").attr("href");if(t)return t.split("/")[2];if(0==(e=e.prev()).length)return null}}getMessageUriFromMessage(e){return e.closest(".c-virtual_list__item, ts-message").find("a.c-timestamp, a.timestamp").attr("href")}getUserByUserId(e){let t,s=(t=0==e.indexOf("B")?TS.model.bots:TS.model.members).filter(t=>t.id==e);return 0==s.length?null:((s=s[0]).is_bot=!(!1===s.is_bot),s.display_name=s._display_name_normalized_lc||s._real_name_normalized_lc||s.name,s.avatar_icon=s.is_bot?s.icons.image_36:s.profile.image_24,s)}getUserByName(e){let t;return 0==(t=TS.model.members.filter(t=>t._display_name_normalized_lc==e||t._real_name_normalized_lc==e)).length&&(t=TS.model.bots.filter(t=>t.name==e)),0==t.length?null:((t=t[0]).is_bot=!(!1===t.is_bot),t.display_name=t._display_name_normalized_lc||t._real_name_normalized_lc||t.name,t.avatar_icon=t.is_bot?t.icons.image_36:t.profile.image_24,t)}executeOnLoad(target,callback){const checker=()=>{let loaded=eval(target);return loaded?callback(loaded):setTimeout(checker,1)};checker()}get settings(){return{set(e,t){try{localStorage.setItem(PREFIX+e,JSON.stringify(t))}catch(e){}},get(e){try{const t=localStorage.getItem(PREFIX+e);return null==t?null:JSON.parse(t)}catch(e){return null}}}}}const util=new Util;__webpack_exports__.a=util},function(e,t,s){"use strict";s.d(t,"a",function(){return a});class a{constructor(e){this.selector=e}get $input(){return $(this.selector).find(".ql-editor")}focus(){const e=this.$input.get(0),t=document.createRange(),s=window.getSelection();t.setStartAfter(e.lastChild),t.collapse(!0),s.removeAllRanges(),s.addRange(t),e.focus()}normalize(e){return e.replace(/(<\/blockquote>)/g,"$1\n").replace(/<br>/g,"\n")}convertNewline(e){return"<p>"+e.replace(/\n/g,"</p><p>")+"</p>"}quoteText(e){return(">"+e.replace(/\n/g,"\n>").replace(/<.+?>/g,"")).replace(/>http/g,"> http")}isEmpty(){return this.$input.is(".ql-blank")}clear(){this.$input.empty()}appendText(e){this.$input.append(this.convertNewline(this.normalize(e)))}appendQuotedText(e){this.$input.append(this.convertNewline(this.quoteText(this.normalize(e))))}}},,,function(e,t,s){"use strict";s.r(t);class a{constructor(e,t,s,a){this.userId=e,this.messageUri=t,this.wholeMessage=s,this.selectorInput=a,this.selectedMessage=""}}var n=s(0);var i=new class{constructor(){this.classAdded="wamei-added",this.buttons=[],this.mount()}append(e){return this.buttons.unshift(e),this}mount(){const e=document.querySelector("div#messages_container");this.mainObserver=new MutationObserver(e=>{e.forEach(e=>{this.applyButtons($(e.target).find("div.c-message_actions__container"),"#msg_input")})}),this.mainObserver.observe(e,{childList:!0,subtree:!0});const t=document.querySelector("div#convo_scroller");return this.threadObserver=new MutationObserver(e=>{e.forEach(e=>{this.applyButtons($(e.target).closest("div.action_hover_container"),"div#convo_scroller .message_input")})}),this.threadObserver.observe(t,{childList:!0,attributes:!0,subtree:!0}),this}applyButtons(e,t){e.not(`.${this.classAdded}`).addClass(this.classAdded).each((e,s)=>{const i=$(s),r=i.closest(".c-virtual_list__item, ts-message"),o=r.find(".c-message__body, .message_body").html()||"";let l="";r.find(".c-message__attachments").not(":has(.c-message_attachment__delete)").find(".c-message_attachment__body .c-message_attachment__row").each((e,t)=>{l+=`\n> ${$(t).html()}`;const s=$(t).find("a.c-message_attachment__title_link");s.length>0&&(l+=`\n> ${s.attr("href")}`)});const c=n.a.getMessageUriFromMessage(r),d=n.a.getUserIdFromMessage(r),u=new a(d,c,o+l,t);this.buttons.forEach(e=>{const t=e.createElement(u);t.on("mousedown",()=>{u.selectedMessage=window.getSelection().toString()||""}),e.isAvailable(u)&&i.prepend(t)})})}unmount(){return this.mainObserver&&this.mainObserver.disconnect(),this.threadObserver&&this.threadObserver.disconnect(),this}},r=s(1);class o{constructor(e,t,s){this.selectorMessage=".c-virtual_list__item",this.label=e,this.iconClass=t,this.callback=s}isAvailable(e){return!0}createElement(e){const t=$(`<button class="btn_msg_action c-button-unstyled c-message_actions__button ${this.label}" type="button" aria-haspopup="true" aria-label="${this.label}"><i class="c-icon ${this.iconClass}" aria-hidden="true"></i></button>`).click(()=>{this.callback(e)}).hover(()=>{const e=t.offset(),s=$(`<div class="ReactModal__Content ReactModal__Content--after-open popover" tabindex="-1" aria-label="popover" style="position: absolute; left: ${e.left}px; top: ${e.top}px; outline: none; z-index:100000;"><div><div class="c-tooltip__tip c-tooltip__tip--top" data-qa="tooltip-tip">${this.label}<div class="c-tooltip__tip__arrow"></div></div></div></div>`).hide();$(document.body).append($(`<div class="ReactModalPortal" id="${this.label}-tooltip"></div>`).append('<div class="ReactModal__Overlay ReactModal__Overlay--after-open c-popover c-popover--no-pointer c-popover--z_below_menu c-popover--fade" aria-modal="true"></div>').append(s)),s.css("left",e.left-s.width()/2+20).css("top",e.top-s.height()).fadeIn(200)},()=>{$(`#${this.label}-tooltip`).remove()});return t}}!function(){const e=new o("メッセージを引用する","ts_icon_quote",function(e){const t=new r.a(e.selectorInput);if(t.isEmpty()&&t.clear(),null!=e.userId){const s=n.a.getUserByUserId(e.userId);s&&t.appendQuotedText(`*${s.display_name}*`)}""!=e.selectedMessage?t.appendQuotedText(`${e.selectedMessage}`):t.appendQuotedText(`${e.wholeMessage}`),t.appendText(""),t.focus()}),t=new o("メッセージに返信する",'c-icon--share-action" style="transform: scale(-1, 1);"',function(e){const t=new r.a(e.selectorInput),s=n.a.getUserByUserId(e.userId);if(!s)return;t.isEmpty()&&t.clear();const a=0==e.messageUri.indexOf("/")?location.origin+e.messageUri:e.messageUri;t.appendText(`&lt;${a}|Re:&gt;<span data-id="${e.userId}" data-label="@${s.display_name}" spellcheck="false" class="c-member_slug c-member_slug--link ts_tip_texty">@${s.display_name}</span>`),""!=e.selectedMessage&&t.appendQuotedText(`${e.selectedMessage}`),t.appendText(""),t.focus()});t.isAvailable=function(e){return!!e.userId},i.append(t),i.append(e);const s="wamei-quote-icon-treated",a=document.querySelector("div.client_container");new MutationObserver(e=>{e.forEach(e=>{$(e.target).find(`div.c-message blockquote b:not(.${s}), .message_body .special_formatting_quote b:not(.${s})`).each((e,t)=>{const a=$(t),i=a.text();a.addClass(s);const r=n.a.getUserByName(i);r&&a.html(`<img class="c-message_attachment__author_icon" alt="${r.display_name}" src="${r.avatar_icon}" width="16" height="16">${r.display_name}`)})})}).observe(a,{childList:!0,subtree:!0}),n.a.executeOnLoad("TS.client.ui.sendMessage",()=>{const e=TS.client.ui.sendMessage;TS.client.ui.sendMessage=function(t,s,a,n){let i=s.match(/<.*(\/archives\/.+)\|Re:>/);if(i){TS.chat_history.add(s);let e={channel:t.id,unfurl_links:!1,text:s.replace(/<(@.+?)\|@.+?>/gm,"<$1>")};if(a)e.thread_ts=a.thread_ts,e.reply_broadcast=n;else{let t=i[1].match(/\/archives\/.+\/p(\d+)(\?thread_ts=(\d+\.\d+))?.*/);if(t[3])e.thread_ts=t[3];else{let s=t[1];e.thread_ts=`${s.slice(0,s.length-6)}.${s.slice(-6)}`}e.reply_broadcast=!0}TS.interop.api.call("chat.postMessage",e,(e,t)=>{console.log(t)})}else e.apply(this,arguments)}})}()}]);