import MessageMenu from './class/message-menu.js';
import MessageInput from './class/message-input.js';
import MenuActionButton from './class/menu-action-button.js';
import Util from './class/util.js';

(function() {
    'use strict';

    const quoteButton = new MenuActionButton('メッセージを引用する', 'ts_icon_quote', function(message) {
        const messageInput = new MessageInput(message.selectorInput);
        if (messageInput.isEmpty()) {
            messageInput.clear();
        }
        if (message.userId != null) {
            const user = Util.getUserByUserId(message.userId);
            if (user) {
                messageInput.appendQuotedText(`*${user.display_name}*`);
            }
        }
        if (message.selectedMessage != '') {
            messageInput.appendQuotedText(`${message.selectedMessage}`);
        } else {
            messageInput.appendQuotedText(`${message.wholeMessage}`);
        }
        messageInput.appendText('');
        messageInput.focus();
    });

    const replyButton = new MenuActionButton('メッセージに返信する', 'c-icon--share-action" style="transform: scale(-1, 1);"', function(message) {
        const messageInput = new MessageInput(message.selectorInput);
        const user = Util.getUserByUserId(message.userId);
        if (!user) {
            return;
        }
        if (messageInput.isEmpty()) {
            messageInput.clear();
        }
        messageInput.appendText(`&lt;${location.origin}${message.messageUri}|Re:&gt;<span data-id="${message.userId}" data-label="@${user.display_name}" spellcheck="false" class="c-member_slug c-member_slug--link ts_tip_texty">@${user.display_name}</span>`);
        if (message.selectedMessage != '') {
            messageInput.appendQuotedText(`${message.selectedMessage}`);
        }
        messageInput.appendText('');
        messageInput.focus();
    });
    replyButton.isAvailable = function(message) {
        if (!message.userId) {
            return false;
        }
        return true;
    };

    MessageMenu.append(replyButton);
    MessageMenu.append(quoteButton);

    const treatedClass = 'wamei-quote-icon-treated';
    const target = document.querySelector('div.client_container');
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            $(mutation.target)
                .find(`div.c-message blockquote b:not(.${treatedClass}), .message_body .special_formatting_quote b:not(.${treatedClass})`).each((i, elm) => {
                    const $this = $(elm);
                    const name = $this.text();
                    $this.addClass(treatedClass);
                    const user = Util.getUserByName(name);
                    if (!user) {
                        return;
                    }
                    $this.html(`<img class="c-message_attachment__author_icon" alt="${user.display_name}" src="${user.avatar_icon}" width="16" height="16">${user.display_name}`);
                });
        });
    });
    const config = {
        childList: true,
        subtree: true,
    };
    observer.observe(target, config);

    Util.executeOnLoad('TS.client.ui.sendMessage', () => {
        const _old = TS.client.ui.sendMessage;
        TS.client.ui.sendMessage = function(params, text, thread) {
            let matched = text.match(/<.*\/archives\/.+\|Re:>/);
            if (matched) {
                TS.chat_history.add(text);
                let message = {
                    channel: params.id,
                    unfurl_links: false,
                    text: text.replace(/<(@.+?)\|@.+?>/gm, '<$1>'),
                };
                if (thread) {
                    message['thread_ts'] = thread['thread_ts'];
                }
                TS.interop.api.call('chat.postMessage', message, (e, data) => {console.log(data);});
                return;
            }
            _old.apply(this, arguments);
        };
    });
})();
