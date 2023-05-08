function PersonalResponsiveMenuInit(l){function p(a){jQuery.ajax({type:"GET",url:t.personalMessageSourceUrl,success:function(b){C=b;H=new Date;e.updateMessageCounterBasedOnCookie();a&&g(b)},error:CommonFunctions.alertAjaxError})}function g(b){a.messageDialogContent.empty().html(b);b=-(a.inboxMenuLink.width()/2+ +a.inboxMenuLink.css("padding-right").replace("px","")+ +a.inboxMenuLink.css("border-right-width").replace("px","")+ +a.inboxMenuLink.css("margin-right").replace("px",""));var d=-(a.inboxMenuLink.height()/
2+ +a.inboxMenuLink.css("padding-bottom").replace("px","")+ +a.inboxMenuLink.css("border-bottom-width").replace("px","")+ +a.inboxMenuLink.css("margin-bottom").replace("px",""));m.openDialogAt(b,d,!0);c.isAndroidBrowser||u();y(a.inboxMenuLink.closest("li"),!0);L();M()}function z(){I&&clearTimeout(I);I=setTimeout(u,200)}function u(){var b=a.messageDialogContent,d=A.height()-b.offset().top-(b.outerHeight(!0)-b.height());b.css({"max-height":0>d?0:d,"overflow-y":"auto"})}function q(){return{width:400,
setFocus:!1,marginTop:38,marginBottom:0,noTitle:!0,showArrow:!0,align:"center",valign:"bottom",closeButtonTooltip:e.settings.terms.close,cssClass:D.popupContainer,customScripts:{beforeCloseDialog:null}}}function f(b){h=N(b,a.notificationLink,a.notificationDialogContent);h.setBeforeCloseDialog(function(){y(a.notificationLink.closest("li"),!!a.notificationsBadge.text())});h.hideHeader();h.hideFooter();h.toggleCloseLink(!1)}function B(b){m=N(b,a.inboxMenuLink,a.messageDialogContent);m.setBeforeCloseDialog(function(){y(a.inboxMenuLink.closest("li"),
!!a.messagesBadge.text())});m.hideHeader();m.hideFooter();m.toggleCloseLink(!1)}function N(a,d,c){a.toggleElement=d;return new ContextDialog(c,a)}function Q(){if(h.isOpened()){var b=a.notificationDialogContent.find("li."+D.unreadNotificationItem);0<b.length&&CCL.CommonFunctions.safeAjaxPost({url:t.updateReadNotifications,data:{notifications:R(b).join()}});CCL.CommonFunctions.safeAjaxPost({url:t.updateAllNotificationsAsSeen});b=h.isOpened();k(0,a.notificationLink,a.notificationsBadge,!!b)}}function R(a){return a.map(function(a,
b){return jQuery(b).data("id")}).toArray()}function k(a,d,c,e){y(d.closest("li"),e);c.text(E(a,!0));c.toggle(0<a)}function y(a,d){a.toggleClass(D.opaque,d)}function M(){a.messageDialogContent.find("#"+c.messageCounterIds.internalMessagesCounter).text(J(E(r)))}function L(){if(!window.itslearning.settings.app.is_instant_message_system_enabled){var b=c.primaryCloudEmailType===CloudEmailType.office365?J(E(v,!1)):J(E(w,!1));a.messageDialogContent.find("#"+c.messageCounterIds.cloudMessagesCounter).text(b)}}
function E(a,d){return void 0===a||0>=a?"":d&&100<=a?"99+":a}function J(a){return""===a?"":" ("+a+")"}function S(a,d,c,e){var b=a?"touchstart":"click",f=c.find("li:first-child > button");c.find("a").click(function(){c.hide();e&&e()});d.on(b+" keydown",function(a){if(a.type===b||a.which===CCL.CommonConstants.keyCodes.arrowDown)"false"===$(".c-messages-popup").attr("aria-hidden")&&$(".c-messages__overlay").click(),c.toggle(),f.focus()});$(document).on(b+" "+CCL.CommonTriggers.clickInInnerFrame,function(a){if(c.is(":visible")){a=
a.target;var b=$(a),O=a===d.get(0)||1===b.closest(d).length;b=!O&&(a===c.get(0)||1===b.closest(c).length);var g=c.find("li:last-child > a");O||b||(c.hide(),window.FreshdeskChat&&window.FreshdeskChat.destroy(),e&&e());g.keydown(a,function(a){a.which!==CCL.CommonConstants.keyCodes.tab||a.shiftKey||(a.preventDefault(),f.focus())});f.keydown(a,function(a){a.shiftKey&&a.which===CCL.CommonConstants.keyCodes.tab&&(a.preventDefault(),g.focus())})}});c.keydown(function(a){a.which===CCL.CommonConstants.keyCodes.escape&&
($(c).hide(),e&&e(),d.focus())})}window[l]=this;var e=this,A=jQuery(window),a,c,t,D,x,h,m,I,K=0,n=0,v=0,w=0,r=0,P,C,F=0,H,G;e.initialize=function(){a=e.controls;c=e.settings;t=e.settings.urls;D=e.settings.cssClasses;x=e.settings.queryStringParameters;G=e.toggleMenuLinkFunction;a.personalMenuLink.on("click",function(){"false"===jQuery(InstantMessageSelectors.popupSelector).attr("aria-hidden")&&jQuery(InstantMessageSelectors.overlaySelector).click();G()});var b=document.querySelector("button[name=closePersonalMenu]");
b&&b.addEventListener("click",function(){a.personalMenuDropDown.hide();G();a.personalMenuLink.focus()});S(c.isIos,a.personalMenuLink,a.personalMenuDropDown,G);a.searchBoxMobile.on("click touchstart touchend",function(a){a.stopPropagation()});a.searchBoxMobile.on(c.searchTextEvent,function(a,b){itslTop.location.href=t.searchMainPageNavigateUrl.replace(c.searchPlaceholder,encodeURIComponent(encodeURIComponent(b)))});a.notificationLink.click(function(b){if(!c.showPersonalNotificationsAsOverlay)if(h.isOpened())h.closeDialog(),
a.notificationLink.attr("aria-expanded",!1);else{jQuery(InstantMessageSelectors.overlaySelector).click();var d=-(a.notificationLink.width()/2+ +a.notificationLink.css("padding-right").replace("px","")+ +a.notificationLink.css("border-right-width").replace("px","")+ +a.notificationLink.css("margin-right").replace("px","")),e=-(a.notificationLink.height()/2+ +a.notificationLink.css("padding-bottom").replace("px","")+ +a.notificationLink.css("border-bottom-width").replace("px","")+ +a.notificationLink.css("margin-bottom").replace("px",
""));jQuery.ajax({type:"GET",url:t.personalNotificationSourceUrl,success:function(b){a.notificationDialogContent.html(b);h.openDialogAt(d,e,!0);y(a.notificationLink.closest("li"),!0);setTimeout(Q,3E3);$helpButton=a.notificationDialogContent.find("a").first();$emptyMessage=a.notificationDialogContent.find(".itsl-notifications-popup-empty-message");(isEmpty=0<$emptyMessage.length)?($helpButton.keydown(function(a){a.keyCode==CCL.CommonConstants.keyCodes.tab&&a.shiftKey&&(a.preventDefault(),$emptyMessage.focus())}),
$emptyMessage.keydown(function(a){a.keyCode!=CCL.CommonConstants.keyCodes.tab||a.shiftKey||(a.preventDefault(),$helpButton.focus())})):($showAllLink=a.notificationDialogContent.find(".itsl-notifications-popup-footer-box > a"),$helpButton.keydown(function(a){a.keyCode==CCL.CommonConstants.keyCodes.tab&&a.shiftKey&&(a.preventDefault(),$showAllLink.focus())}),$showAllLink.keydown(function(a){a.keyCode!=CCL.CommonConstants.keyCodes.tab||a.shiftKey||(a.preventDefault(),$helpButton.focus())}));$helpButton.focus();
a.notificationLink.attr("aria-expanded",!0);$(".ccl-notification-popup").keydown(function(b){b.keyCode==CCL.CommonConstants.keyCodes.escape&&a.notificationLink.attr("aria-expanded",!1)})},error:CommonFunctions.alertAjaxError})}});c.shouldOpenMessagesPopUp&&(a.inboxMenuLink.click(function(a){m.isOpened()?m.closeDialog():((a=!C)||(a=H?18E4<(new Date).getTime()-H.getTime():!1),a?p(!0):g(C))}),c.isAndroidBrowser||A.resize(z),A.on("load",function(){p()}));k(0,a.notificationLink,a.notificationsBadge,!1);
k(0,a.office365CloudEmailIconLink,a.office365CloudEmailBadge,!1);k(0,a.gmailCloudEmailIconLink,a.gmailCloudEmailBadge,!1);k(0,a.inboxMenuLink,a.messagesBadge,!1);k(0,a.emailMenuLink,a.emailBadge,!1);CommonFunctions.attachPostMessageEventListener(A,CommonWindowMessages.MessageNames.unseenNotificationCounterChanged,function(b){var c=0<b.extendedData||h.isOpened();k(b.extendedData,a.notificationLink,a.notificationsBadge,!!c)});CommonFunctions.attachPostMessageEventListener(A,CommonWindowMessages.MessageNames.openGroupChat,
function(a){var b="true"===jQuery(InstantMessageSelectors.popupSelector).attr("aria-hidden")?!0:!1,c=jQuery("#l-header").is(":hidden");b&&"function"===typeof window.InstantMessageOpenWindowForCollaboration&&window.InstantMessageOpenWindowForCollaboration(a.collaborationId,function(){jQuery(InstantMessageSelectors.popupSelector).attr("aria-hidden","false");jQuery(InstantMessageSelectors.overlaySelector).removeClass("is-hidden")},c)});f(q());c.shouldOpenMessagesPopUp&&B(q());c.hasInternalMessages&&
(P=new RegExp("[\\?&]"+c.onlineInfoCookie.unreadMessagesKey+"=([^&#]*)"));c.hasEmail&&(numberOfUnreadEmailCookieRegex=new RegExp("[\\?&]"+c.onlineInfoCookie.unreadEmailKey+"=([^&#]*)"))};e.setUnreadInternalMessages=function(a){c.hasInternalMessages&&a!==n&&(n=a,M())};e.setUnreadEmailMessages=function(a,d){c.hasEmail&&a!==r&&(r=a,F=d)};e.setUnreadCloudEmailMessages=function(a,d){!c.hasCloudEmail||v===a&&w===d||(v=a,w=d,L())};e.updateMessageCounterBasedOnCookie=function(){if(c.hasInternalMessages){var a=
P.exec(jQuery.cookie(c.onlineInfoCookie.name));a&&a.length&&(n=parseInt(a[1]),e.setCounts())}};e.setCounts=function(){K&&n!==K&&e.invalidateCache();if(F&&0<F&&window.itslearning.settings.app.is_instant_message_system_enabled){var b=e.controls.emailMenuLink.attr("href"),d=b.getQueryStringParameter(x.textURL);d=d.setQueryStringParameter(x.emailAccountsRedirect,"False");d=d.setQueryStringParameter(x.emailRedirect,"True");d=d.setQueryStringParameter(x.accountID,F);e.controls.emailMenuLink.attr("href",
b.setQueryStringParameter(x.textURL,d))}K=n;b=0;0<n&&(c.hasInternalMessages||c.hasEmail)&&(b+=n,window.itslearning.settings.app.is_instant_message_system_enabled&&(window.itslearning.instantmessaging.unreadInternalMessages=n));(0<v||0<w)&&c.hasCloudEmail&&(window.itslearning.settings.app.is_instant_message_system_enabled?(k(v,a.office365CloudEmailIconLink,a.office365CloudEmailBadge,!1),k(w,a.gmailCloudEmailIconLink,a.gmailCloudEmailBadge,!1)):b=c.primaryCloudEmailType===CloudEmailType.office365?b+
v:b+w);!window.itslearning.settings.app.is_instant_message_system_enabled&&c.hasEmail&&(b+=r);0<r&&c.hasEmail&&k(r,a.emailMenuLink,a.emailBadge,!!(0<r));if(c.hasInternalMessages||c.hasCloudEmail||c.hasEmail)d=0<b||e.settings.shouldOpenMessagesPopUp&&m.isOpened(),k(b,a.inboxMenuLink,a.messagesBadge,!!d);CommonFunctions.makePostMessageCall(window.itslTop,new CommonWindowMessages.GenericMessageWithData(CommonWindowMessages.MessageNames.unseenNotificationCounterChanged,e.unseenNotifications));window.itslearning.settings.app.is_instant_message_system_enabled&&
(b=jQuery.Event("UpdateUnreadMessagesCount"),jQuery(window).trigger(b))};e.invalidateCache=function(){C=void 0};return e}
var CloudEmailType={office365:"Office365",gmail:"Gmail"},InstantMessageSelectors={largeHeaderLogo:".l-logo",mainMenuSelector:"ul.l-main-menu-items",overlayClass:"c-messages__overlay",overlaySelector:".c-messages__overlay",overlayLargeSelector:"c-messages__overlay--largeHeader",overlayBlackClass:"c-messages__overlay--black",popupSelector:".c-messages-popup",popupIconSelector:".l-personal-menu-instantmessage",popupIconSelectedClass:"l-personal-menu-icon-instantmessage-selected"};
function FlyOutPopupInit(l,p){jQuery(InstantMessageSelectors.popupSelector).load(l);p||(jQuery("body").append('<div class="'+InstantMessageSelectors.overlayClass+' is-hidden"></div>'),0<jQuery(InstantMessageSelectors.largeHeaderLogo).length&&jQuery(InstantMessageSelectors.overlaySelector).addClass(InstantMessageSelectors.overlayLargeSelector),jQuery(InstantMessageSelectors.popupIconSelector).on("click",function(){var g=jQuery(this);"true"===jQuery(InstantMessageSelectors.popupSelector).attr("aria-hidden")?
(jQuery(InstantMessageSelectors.popupSelector).attr("aria-hidden","false"),jQuery(InstantMessageSelectors.overlaySelector).removeClass("is-hidden"),jQuery(InstantMessageSelectors.mainMenuSelector).on("click",function(g){jQuery(InstantMessageSelectors.mainMenuSelector).off("click");"false"===jQuery(InstantMessageSelectors.popupSelector).attr("aria-hidden")&&jQuery(InstantMessageSelectors.overlaySelector).click()}),"undefined"!==typeof window.InstantMessageOpenWindow&&window.InstantMessageOpenWindow()):
jQuery(InstantMessageSelectors.overlaySelector).click();jQuery(g).closest("li").toggleClass(InstantMessageSelectors.popupIconSelectedClass)}),jQuery(InstantMessageSelectors.overlaySelector).on("click",function(g){g=jQuery(g.target);if(g.hasClass(InstantMessageSelectors.overlayClass)||g.hasClass(InstantMessageSelectors.overlayBlackClass))jQuery(this).closest("li").toggleClass(InstantMessageSelectors.popupIconSelectedClass),jQuery(InstantMessageSelectors.overlaySelector).removeClass(InstantMessageSelectors.overlayBlackClass),
jQuery(InstantMessageSelectors.overlaySelector).addClass("is-hidden"),jQuery(InstantMessageSelectors.popupSelector).attr("aria-hidden","true"),"undefined"!==typeof window.InstantMessageCloseWindow&&window.InstantMessageCloseWindow()}))}
function OpenInstantMessageSendNew(l){"undefined"!==typeof window.showInstantMessageSendNew&&(jQuery(InstantMessageSelectors.popupSelector).attr("aria-hidden","false"),jQuery(InstantMessageSelectors.popupIconSelector).closest("li").addClass(InstantMessageSelectors.popupIconSelectedClass),jQuery(InstantMessageSelectors.overlaySelector).removeClass("is-hidden"),window.showInstantMessageSendNew(l))}
function OpenInstantMessageModal(){"undefined"!==typeof window.InstantMessageOpenModalWindow?openInstentMessageModalWindow():window.setTimeout(openInstentMessageModalWindow,3E3)}
function openInstentMessageModalWindow(){"undefined"!==typeof window.InstantMessageOpenModalWindow&&(jQuery(InstantMessageSelectors.popupSelector).attr("aria-hidden","false"),jQuery(InstantMessageSelectors.popupIconSelector).closest("li").addClass(InstantMessageSelectors.popupIconSelectedClass),jQuery(InstantMessageSelectors.overlaySelector).removeClass("is-hidden"),window.InstantMessageOpenModalWindow())}
jQuery(function(){if(window.itslearning.settings.app.is_instant_message_system_enabled){var l=function(f){f?10>=z&&(z+=1,window.clearInterval(u),u=window.setInterval(p,3E4)):(window.clearInterval(u),z=0)},p=function(){jQuery.connection.hub.start().done(function(){var f="";localStorage.getItem("instantmessage-channelid")&&(f=localStorage.getItem("instantmessage-channelid"));var B="/restapi/personal/instantmessages/communicationchannel/{channelId}/v1".replace("{channelId}",jQuery.connection.hub.id);
5<f.length&&(B=B+"?unregister="+f);f={};f[itslearning.settings.app.antiForgeryHeaderName]=itslearning.settings.app.antiForgeryHeaderValue;CCL.CommonFunctions.safeAjaxPost({url:B,headers:f}).done(function(){g(!0);l(!1);console.log("SignalR connection registered. ChannelId: "+jQuery.connection.hub.id)});localStorage.setItem("instantmessage-channelid",jQuery.connection.hub.id)}).fail(function(f){g(!1);l(!0);console.log("Error starting SignalR connection: "+f)})},g=function(f){var g=jQuery.Event("SignalRConnectionStatus");
jQuery(window).trigger(g,f);window.dispatchEvent(new CustomEvent("SignalRConnectionStatus2",{detail:{status:f}}))},z=0,u;jQuery.connection.hub.url=window.itslearning.settings.app.signal_r_endpoint;var q=jQuery.connection.instantMessageHub;"undefined"!==typeof q&&null!==q&&(q.client.alertNewMessage=function(f){f=JSON.parse(f);var g=jQuery.Event("NewSignalRInstantMessage");jQuery(window).trigger(g,f);window.dispatchEvent(new CustomEvent("NewSignalRInstantMessage2",{detail:{thread:f}}))},q.client.alertThreadDeleted=
function(f){var g=jQuery.Event("SignalRThreadDeleted");jQuery(window).trigger(g,f)});p();jQuery.connection.hub.connectionSlow(function(){console.log("We are currently experiencing difficulties with the connection.")});jQuery.connection.hub.reconnecting(function(){g(!1);console.log("SignalR connection reconnecting.")});jQuery.connection.hub.disconnected(function(){g(!1);console.log("SignalR connection disconnected.");l(!0)});jQuery.connection.hub.reconnected(function(){g(!0);console.log("SignalR connection reconnected.");
l(!1)})}});