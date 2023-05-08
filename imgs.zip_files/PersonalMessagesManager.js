function PersonalMessagesManager(y){function v(a){return $(String.format("<div class='{0}'></div>",d.sendSuccessResult)).append(String.format("<img src='{0}' alt='' />",h.sendSuccessImageSrc)).append(String.format("<span>{0}</span>",String.format(g.messageSentTo,CCL.CommonFunctions.htmlEncode(a))))}function z(a){return $(String.format("<div class='{0}'></div>",d.sendFailedResult)).append("<span>"+g.failedToSendMessage+"</span>").append($("<a href='#'>"+g.retrySend+"</a>").on(c.settings.clickOrTouch,
function(b){a();b.preventDefault();$(this).parent().remove()}))}function w(a){a.parent().find('input[type="submit"]').prop("disabled",""===a.val().trim())}function A(a,b){var f=b.find("."+d.attachmentsContainer);0<f.length&&0===f.find("ul").length&&$.ajax({type:"GET",url:h.getAttachmentsUrl,data:{messageId:a},success:function(a){f.append(a)},error:CommonFunctions.alertAjaxError})}function B(a,b,f){$.ajax({type:"PUT",url:h.markMessageAsReadUrl.replace("(messageId)",a).replace("(messageOrigin)",f),
data:{MessageId:a,IsRead:!0},headers:q}).done(function(){r(b,n.markedAsRead)}).fail(CommonFunctions.alertAjaxError)}function x(a,b,f,d,c,e,g,l){$.ajax({type:"POST",url:h.sendMessageUrl,data:{initialId:b,to:f,subject:d,isNewMessage:g,text:a.messageBody,messageOrigin:l},headers:q}).done(function(){a.sendMessageSuccessCallback();c&&c()}).fail(function(a,b,f){e?e(a,b,f):CommonFunctions.alertAjaxError()}).always(function(){a.sendMessageCompleteCallback()})}function r(a,b){a=a.closest("li."+d.messageItem);
var f={lastItemDeleted:!1,updateCounter:b===n.deleted||b===n.markedAsRead};b===n.deleted?(0===a.siblings("li."+d.messageItem).length&&(f.lastItemDeleted=!0),a.remove()):a.removeClass(d.unreadMessageItem);if(c.callbacks.onMessageAction)c.callbacks.onMessageAction(f)}window[y]=this;var c=this,n={deleted:0,markedAsRead:1,toggledFavoriteStatus:2},g,h,q,d,k,u,p,e;c.callbacks={};c.initialize=function(){g=c.settings.terms;h=c.settings.urls;var a={};a[c.settings.antiforgery.HeaderName]=c.settings.antiforgery.HeaderValue;
q=a;d=c.settings.cssClasses;p=c.settings.messageOrigins;e=c.settings.kpi;k=c.settings.clientIds;c.settings.clientInstanceNames.participantsInputClientInstanceName&&(u=c.settings.clientInstanceNames.participantsInputClientInstanceName);setTimeout(function(){$("."+d.messageItem).each(function(){var a=$(this);a.find(String.format(".{0} a",d.textToggle)).on(c.settings.clickOrTouch,function(){var b=a.find("."+d.text).get(0);b=$(b);b.hasClass(d.collapsed)?(b.removeClass(d.collapsed),$(this).text(g.showLess)):
(b.addClass(d.collapsed),$(this).text(g.showMore));return!1})}).on("keyup","."+d.sendMessageInlineReply+" textarea",function(a){w($(a.target))})},0);$("."+d.messageItem).find("."+d.sendMessageInlineReply).hide()};c.toggleNewMessage=function(a,b){a.toggle();a.is(":visible")&&(window[u].focus(),b==p.dropDown&&CommonFunctions.measureKpi(e.url,e.section,e.measurements.createNewMessage,e.context))};c.toggleMessage=function(a,b,f,c){var m=b.closest("li."+d.messageItem),t=b.find("."+d.text),h=b.find("."+
d.textToggle);m.find(String.format(".{0} .{1}",d.head,d.subject)).toggleClass(d.collapsed);var l=b.find("*[data-message-text]");if(0<l.length){var k=$("<div></div>").html(l.data("message-text"));l.prepend(k);l.removeAttr("data-message-text")}b.toggle();b.is(":visible")?(f===p.dropDown&&CommonFunctions.measureKpi(e.url,e.section,e.measurements.viewMessage,e.context),m.hasClass(d.unreadMessageItem)&&B(a,b,f),b=t.find("div").height(),t.toggleClass(d.collapsed,130<=b),h.toggle(130<=b),A(a,m),c.length&&
c.is(":visible")&&c.find("textarea").focus()):(t.toggleClass(d.collapsed,!0),h.find("a").text(g.showMore))};c.toggleReplyMessage=function(a,b){a.toggle();var c=a.find("textarea");w(c);a.is(":visible")&&(c.focus(),b==p.dropDown&&CommonFunctions.measureKpi(e.url,e.section,e.measurements.replyToMessage,e.context))};c.deleteMessage=function(a,b,c){confirm(g.deleteConfirmation)&&$.ajax({type:"DELETE",url:h.deleteMessageUrl.replace("(messageId)",a).replace("(messageOrigin)",c),headers:q}).done(function(){r(b,
n.deleted)}).fail(CommonFunctions.alertAjaxError)};c.sendMessage=function(a,b,c,e,g,h,k,l){x(a,c,e,h,function(){l();var a=$("#"+b);a.after(function(){return v(g)});a.next("."+d.sendSuccessResult).delay(2E3).fadeOut(300).promise().done(function(){$(this).remove()})},void 0,!1,k)};c.sendQuickMessage=function(a,b,f,e,h,k,n,l,q){var m=window[u],t=$("#"+b),p=$("#"+f),r=$("#"+h);m.hasText()?(r.show(),$("#"+k).html(g.messagingValidationInvalidRecipients+"<br />"+m.getText()),a.sendMessageCompleteCallback()):
(b=m.mapLabelsField("UserName").join(),x(a,-1,b,t.val(),function(){e();r.hide();p.after(v(m.mapLabelsField("Name").join(", ")));p.next("."+d.sendSuccessResult).delay(2E3).fadeOut(300).promise().done(function(){c.toggleControlsWhenNewMessage(!1);$("#"+n).toggle();$(this).remove()});m.clear();t.val("");l()},function(){e();r.hide();p.after(z(e))},!0,q))};c.toggleFavoriteMessage=function(a,b,c){var e=b.prev("input[type=hidden]"),f=1===parseInt(e.val());$.ajax({type:"POST",url:h.toggleFavoriteMessageUrl.replace("(messageId)",
a).replace("(isFavorite)",!f).replace("(messageOrigin)",c),headers:q}).done(function(){b.prop("title",f?g.addToFavorite:g.removeFromFavorite);b.children("img").toggleClass(d.favorite,!f).toggleClass(d.notFavorite,f);e.val(f?0:1);r(b,n.toggledFavoriteStatus)}).fail(CommonFunctions.alertAjaxError)};c.toggleControlsWhenNewMessage=function(a){var b=$("."+d.messageItem);b.toggle(!a);k.emptyMessageContainer&&$("#"+k.emptyMessageContainer).toggle(0==b.length&&!a);k.cloudInboxContainer&&$("#"+k.cloudInboxContainer).toggle(!a);
if(k.messagesLink){var c=$("#"+k.messagesLink);c.toggle(!a,function(){c.is(":visible")&&c.css("display","inline-block")})}};return c};
