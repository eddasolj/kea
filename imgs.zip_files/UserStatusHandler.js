function UserStatusHandler(c){function f(a){if(c.updateStatusEnabled){var b=window[c.onUpdateInboxFuncName];"function"===typeof b&&b(a.UnreadMessages,a.UnreadOffice365CloudEmailMessages,a.UnreadGmailCloudEmailMessages,a.UnseenNotifications,a.UnreadEmailMessages,a.TopEmailAccountId)}!d&&a.AutoLogout&&(a=document.getElementById("AutoLogout"))&&(b=document.createEvent("Event"),b.initEvent("autologout",!0,!0),a.dispatchEvent(b))}function e(){CCL.CommonFunctions.safeAjaxPost({url:c.keepAliveServiceUrl}).done(f)}
var d=!0;this.initialize=function(a,b){c.updateStatusEnabled&&setTimeout(e,a);setInterval(function(){d=!1;e()},b)}};