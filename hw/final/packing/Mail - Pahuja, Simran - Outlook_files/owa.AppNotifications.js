self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.AppNotifications.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[122],{9326:function(i,t,o){"use strict";o.r(t);var c=o(909),r=o(4888),n=!1;function e(){if(!n){n=!0;var i={subscriptionId:"NewMailNotification",requiresExplicitSubscribe:!0,subscriptionParameters:{NotificationType:"NewMailNotification"}};c.g.importAndExecute(i,r.a)}}var s=o(4889),a=!1;function u(){if(!a){a=!0;var i={subscriptionId:"ReminderNotifications",requiresExplicitSubscribe:!0,subscriptionParameters:{NotificationType:"ReminderNotification"}};c.g.importAndExecute(i,s.a)}}var f=o(4890),b=!1;function p(){if(!b){b=!0;var i={subscriptionId:"SocialActivityNotification",requiresExplicitSubscribe:!0,subscriptionParameters:{NotificationType:"SocialActivityNotification"}};c.g.importAndExecute(i,f.a)}}o.d(t,"subscribeToNewMailNotifications",function(){return e}),o.d(t,"subscribeToReminderNotifications",function(){return u}),o.d(t,"subscribeToSocialActivityNotifications",function(){return p})}},0,[609,370]]);
//# sourceMappingURL=owa.AppNotifications.js.map
self.scriptsLoaded['owa.AppNotifications.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.AppNotifications.js'] = (new Date()).getTime();