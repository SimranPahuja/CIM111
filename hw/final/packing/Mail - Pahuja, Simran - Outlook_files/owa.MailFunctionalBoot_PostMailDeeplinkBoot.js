self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailFunctionalBoot~PostMailDeeplinkBoot.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[72],{1124:function(n,e,t){"use strict";t.d(e,"b",function(){return u}),t.d(e,"a",function(){return c});var r=t(0),i=void 0,o=new Promise(function(n){i=n});function u(n){var e;null===(e=i)||void 0===e||e(n)}function c(){return Object(r.__awaiter)(this,void 0,void 0,function(){return Object(r.__generator)(this,function(n){return[2,Promise.race([o,new Promise(function(n,e){setTimeout(function(){return e()},45e3)})])]})})}},1199:function(n,e,t){"use strict";t.d(e,"b",function(){return i});var r=t(4),i=Object(r.createStore)("substratepeoplesuggestions",{sessionMaskedRecipients:[]}),o=i();e.a=o},1248:function(n,e,t){"use strict";var r=t(52),i=t(0),o=t(1199),u=t(69),c=Object(u.action)("addSessionMaskedRecipient")(function(n){return Object(i.__awaiter)(this,void 0,void 0,function(){return Object(i.__generator)(this,function(e){return o.a.sessionMaskedRecipients[n]=!0,[2]})})});t.d(e,"b",function(){return s}),t.d(e,"a",function(){return c});var a=new r.c(function(){return Promise.all([t.e(4),t.e(466)]).then(t.bind(null,14367))}),s=new r.a(a,function(n){return n.execute3SPrimeCall})},1445:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(4),i=t(812),o=Object(r.mutatorAction)("updateBindStatus",function(n){Object(i.a)().status=n})},1600:function(n,e,t){"use strict";var r=t(4),i=Object(r.createStore)("recipientcommon",{fallbackToFindPeople:!1})();e.a=i},1676:function(n,e,t){"use strict";t.d(e,"a",function(){return c});var r=t(1677),i=t(1189),o=t(1396),u=t(65);function c(n){if(Object(u.f)("fwk-skypeBusinessV2")&&n){var e=Object(r.b)(n),t=function(n){switch(n){case"Offline":return o.b.offline;case"Away":case"BeRightBack":return o.b.away;case"Busy":case"IdleBusy":return o.b.busy;case"DoNotDisturb":return o.b.dnd;case"Online":case"IdleOnline":return o.b.online;case"None":return o.b.none}}(i.a.presences.get(e));return t||void 0}}},1677:function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"b",function(){return i});var r="sip:";function i(n){if(!n)return null;var e=n.toLowerCase();return 0!=e.indexOf(r)&&(e=r+e),e}},2954:function(n,e,t){"use strict";t.d(e,"a",function(){return c});var r=t(52),i=t(65),o=new r.c(function(){return Promise.all([t.e(4),t.e(226)]).then(t.bind(null,4253))}),u=new r.a(o,function(n){return n.initializeErrorHandlerDevtools});function c(){Object(i.f)("fwk-devTools")&&Object(i.f)("fwk-errorpopup")&&u.importAndExecute()}},3130:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(4),i=Object(r.createStore)("chatStore",{isChatCalloutShown:!1,chatProvider:0});i()},3361:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(4),i=Object(r.createStore)("allowedOptions",{allowedOptions:[]})},3420:function(n,e,t){"use strict";var r=t(52),i=t(3361),o=t(245);function u(n){return Object(o.a)()||n.every(function(n){return Object(i.a)().allowedOptions.includes(n)})}t.d(e,"b",function(){return a}),t.d(e,"a",function(){return u});var c=new r.c(function(){return t.e(119).then(t.bind(null,14262))}),a=new r.a(c,function(n){return n.loadAllowedOptions})},3548:function(n,e,t){"use strict";t.d(e,"b",function(){return i});var r=t(4),i=Object(r.createStore)("mruFolderCache",{mruFolders:[],isInitialized:!1}),o=i();e.a=o},3813:function(n,e,t){"use strict";t.d(e,"a",function(){return o}),t.d(e,"b",function(){return u});var r=t(52),i=new r.c(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(151)]).then(t.bind(null,6524))}),o=new r.a(i,function(n){return n.initializeAccountAndCalendars}),u=new r.a(i,function(n){return n.initializeCalendarsDataForModule})},3919:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(129),i=t(3920);e.default=function(n,e){return void 0===n.request||n.request.__type||(n.request=i.default(n.request)),r.makeServiceRequest("SetFocusedInboxConfiguration",n,e)}},3920:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(0);e.default=function(n){return r.__assign({__type:"SetFocusedInboxConfigurationRequest:#Exchange"},n)}},4501:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(52),i=new r.c(function(){return Promise.all([t.e(28),t.e(705),t.e(675)]).then(t.bind(null,6500))}),o=new r.a(i,function(n){return n.registerAndInitializeSharedABT})},4502:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(52),i=new r.c(function(){return t.e(503).then(t.bind(null,6525))}),o=new r.a(i,function(n){return n.validateCache})},4523:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(129);e.default=function(n){return r.makeServiceRequest("GetFolderMruConfiguration",{},n)}},4766:function(n,e,t){"use strict";var r="shortcut icon",i="image/x-icon";function o(n){if(document){var e=document.querySelector('link[rel="'+r+'"]');e||((e=document.createElement("link")).rel=r,e.type=i,document.head.appendChild(e)),e.href=n}}var u,c=t(21);function a(n){u&&u(),u=Object(c.autorun)(function(){o(n.get())})}t.d(e,"a",function(){return o}),t.d(e,"b",function(){return a})},4769:function(n,e,t){"use strict";var r=t(52),i=t(4523),o=t.n(i);var u=t(3548),c=t(737),a=t(69),s=Object(a.action)("getMoveToMruList")(function(){o()().then(function(n){return n}).then(function(n){return function(n){if(null==n.FolderMruEntries||0==n.FolderMruEntries.length)u.a.mruFolders.push(Object(c.a)("inbox")),u.a.mruFolders.push(Object(c.a)("deleteditems")),u.a.mruFolders.push(Object(c.a)("archive"));else for(var e=0;e<n.FolderMruEntries.length;e++){var t=n.FolderMruEntries[e].EwsFolderIdEntry;u.a.mruFolders.push(t)}u.a.isInitialized=!0}(n)})});t.d(e,"b",function(){return f}),t.d(e,"c",function(){return l}),t.d(e,"a",function(){return s});var d=new r.c(function(){return t.e(366).then(t.bind(null,14266))}),f=new r.a(d,function(n){return n.addFolderIdToMoveToMruList}),l=new r.a(d,function(n){return n.removeFolderIdFromMoveToMruList})},4887:function(n,e,t){"use strict";t.d(e,"a",function(){return a}),t.d(e,"b",function(){return s}),t.d(e,"c",function(){return d});var r=t(52),i=t(4888);t.d(e,"d",function(){return i.a});var o=t(4889);t.d(e,"e",function(){return o.a});var u=t(4890);t.d(e,"f",function(){return u.a});var c=new r.c(function(){return t.e(122).then(t.bind(null,9326))}),a=new r.a(c,function(n){return n.subscribeToNewMailNotifications}),s=new r.a(c,function(n){return n.subscribeToReminderNotifications}),d=new r.a(c,function(n){return n.subscribeToSocialActivityNotifications})},4888:function(n,e,t){"use strict";var r=t(4);e.a=Object(r.action)("NEW_MAIL_NOTIFICATION",function(n){return{notification:n}})},4889:function(n,e,t){"use strict";var r=t(4);e.a=Object(r.action)("REMINDER_NOTIFICATION",function(n){return{notification:n}})},4890:function(n,e,t){"use strict";var r=t(4);e.a=Object(r.action)("SOCIAL_ACTIVITY_NOTIFICATION",function(n){return{notification:n}})},4936:function(n,e,t){"use strict";t.d(e,"a",function(){return u});var r=t(3919),i=t.n(r),o=t(191);function u(){var n={Header:Object(o.getJsonRequestHeader)(),IsFocusedInboxCapable:!0};return i()({request:n}).then(function(n){return n})}},4996:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(4),i=Object(r.action)("turnOffFocusedInbox")},5399:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(129);e.default=function(n){return r.makeServiceRequest("GetMailboxJunkEmailConfiguration",{},n)}},5449:function(n,e,t){"use strict";var r=t(4),i=Object(r.createStore)("TrustedSenders",{trustedSendersAndDomains:null})();e.a=i},5572:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(52),i=new r.c(function(){return Promise.all([t.e(3),t.e(5),t.e(6),t.e(7),t.e(269)]).then(t.bind(null,8276))}),o=new r.b(i,function(n){return n.editGroup})},5928:function(n,e,t){"use strict";var r=t(52),i=t(1526),o=t(40),u=t(69),c=t(337),a=t(334),s=t.n(a),d=t(300),f=t.n(d),l=t(4936),b=Object(u.action)("initializeFocusedInboxConfig")(function(){if(Object(o.a)().UserOptions.IsFocusedInboxFeatureSupported){var n=Object(o.a)().UserOptions,e=null!=n.IsFocusedInboxEnabled,t=null!=n.IsFocusedInboxOnLastUpdateTime?new Date(n.IsFocusedInboxOnLastUpdateTime).getTime():null,r=null!=n.IsFocusedInboxOnLastUpdateTime?new Date(n.IsFocusedInboxOnAdminLastUpdateTime).getTime():null;(!e||null!=t&&null!=r&&r>t)&&(Object(o.a)().UserOptions.IsFocusedInboxEnabled=n.FocusedInboxServerOverride,Object(o.a)().UserOptions.IsFocusedInboxOnLastUpdateTime=n.IsFocusedInboxOnAdminLastUpdateTime,Object(c.a)("OWA.UserOptions",[s()({DictionaryKey:f()({Type:"String",Value:["IsFocusedInboxEnabled"]}),DictionaryValue:f()({Type:"Boolean",Value:[String(n.FocusedInboxServerOverride)]})}),s()({DictionaryKey:f()({Type:"String",Value:["IsFocusedInboxOnLastUpdateTime"]}),DictionaryValue:f()({Type:"String",Value:[n.IsFocusedInboxOnAdminLastUpdateTime]})})]),Object(o.a)().UserOptions.IsFocusedInboxEnabled&&Object(l.a)())}});t.d(e,"b",function(){return v}),t.d(e,"c",function(){return O}),t.d(e,"a",function(){return b});var p=new r.c(function(){return t.e(253).then(t.bind(null,14372))}),v=new r.a(p,function(n){return n.setFocusedInboxOnOff});function O(){Object(i.subscribe)("saveFocusInboxOptionStitchName",function(n){return v.importAndExecute(n,!0)})}},7205:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(52),i=new r.c(function(){return Promise.all([t.e(3),t.e(11),t.e(24),t.e(32),t.e(263)]).then(t.bind(null,9328))}),o=new r.b(i,function(n){return n.addGroupMember})},7251:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(771);function i(n,e){var t,i,o=Object(r.getPersonaFromPersonIdOrEmailAddress)(n,e),u=o;if(null===(t=u)||void 0===t?void 0:t.favoriteId)return u.favoriteId;var c=o;return(null===(i=c)||void 0===i?void 0:i.id)?c.id:void 0}},7310:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(52),i=new r.c(function(){return t.e(372).then(t.bind(null,9297))}),o=new r.b(i,function(n){return n.initializeNotificationDiagnostics})},7311:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(52),i=new r.c(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(605),t.e(352)]).then(t.bind(null,9324))}),o=new r.a(i,function(n){return n.initializeMailOptinService})},7312:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(52),i=new r.c(function(){return t.e(424).then(t.bind(null,9312))}),o=new r.a(i,function(n){return n.initializeCache})},7313:function(n,e,t){"use strict";t.d(e,"a",function(){return u});var r=t(52),i=t(4996);t.d(e,"b",function(){return i.a});var o=new r.c(function(){return t.e(528).then(t.bind(null,9319))}),u=new r.b(o,function(n){return n.getActionByFilter})},739:function(n,e,t){"use strict";t.d(e,"s",function(){return o}),t.d(e,"A",function(){return u}),t.d(e,"d",function(){return c}),t.d(e,"v",function(){return a}),t.d(e,"y",function(){return s}),t.d(e,"z",function(){return d}),t.d(e,"x",function(){return f}),t.d(e,"w",function(){return l}),t.d(e,"e",function(){return b}),t.d(e,"f",function(){return p}),t.d(e,"h",function(){return v}),t.d(e,"l",function(){return O}),t.d(e,"B",function(){return m}),t.d(e,"j",function(){return w}),t.d(e,"t",function(){return j}),t.d(e,"u",function(){return g}),t.d(e,"a",function(){return h}),t.d(e,"k",function(){return S}),t.d(e,"r",function(){return I}),t.d(e,"i",function(){return y}),t.d(e,"b",function(){return A}),t.d(e,"m",function(){return C}),t.d(e,"c",function(){return T}),t.d(e,"g",function(){return F}),t.d(e,"q",function(){return P}),t.d(e,"n",function(){return x}),t.d(e,"p",function(){return _}),t.d(e,"o",function(){return E});var r=t(52),i=new r.c(function(){return Promise.all([t.e(3),t.e(5),t.e(78),t.e(77),t.e(114)]).then(t.bind(null,3047))}),o=new r.b(i,function(n){return n.removeExtensibilityNotification}),u=new r.b(i,function(n){return n.updatePersistentNotifications}),c=new r.b(i,function(n){return n.closeTaskPaneAddinCommand}),a=new r.b(i,function(n){return n.triggerAppointmentTimeChangedEvent}),s=new r.b(i,function(n){return n.triggerRecipientsChangedEvent}),d=new r.b(i,function(n){return n.triggerRecurrenceChangedEvent}),f=new r.b(i,function(n){return n.triggerLocationsChangedEvent}),l=new r.b(i,function(n){return n.triggerAttachmentsChangedEvent}),b=new r.b(i,function(n){return n.deinitializeAddinsForItem}),p=new r.b(i,function(n){return n.initializeAddinsForItem}),v=new r.b(i,function(n){return n.initializeExtensibilityContext}),O=new r.b(i,function(n){return n.onHostItemChanged}),m=new r.b(i,function(n){return n.whenItemHasContextualAddinKeywords}),w=new r.b(i,function(n){return n.launchTranslateCommand}),j=new r.b(i,function(n){return n.setPersistedAddin}),g=new r.b(i,function(n){return n.shouldForceOnSendCompliantBehavior}),h=(Object(r.d)(i,function(n){return n.AddinBarView}),Object(r.d)(i,function(n){return n.TaskPaneCollection})),S=new r.b(i,function(n){return n.onComposeClose}),I=new r.b(i,function(n){return n.openContextualCallout}),y=new r.b(i,function(n){return n.launchAddinCommand}),A=new r.b(i,function(n){return n.observeAddinCommandSurfaceItems}),C=new r.b(i,function(n){return n.onItemNavigation}),T=new r.b(i,function(n){return n.allowItemSendEvent}),F=new r.a(i,function(n){return n.ExecuteEntryPoint}),P=new r.a(i,function(n){return n.onNewMessageCompose}),x=new r.a(i,function(n){return n.onNewAppointmentCompose}),_=new r.a(i,function(n){return n.onNewAttachmentOnMessageCompose}),E=new r.a(i,function(n){return n.onNewAttachmentOnAppointmentCompose})},808:function(n,e,t){"use strict";t.d(e,"a",function(){return u});var r=t(40),i=t(65),o=t(1600);function u(){var n,e,t=Object(r.a)(),u=null===(e=null===(n=t)||void 0===n?void 0:n.SessionSettings)||void 0===e?void 0:e.IsExplicitLogon,c=Object(i.f)("rp-3SPeopleSuggestions")||Object(i.f)("rp-linkedInPeopleSuggestions");return!o.a.fallbackToFindPeople&&c&&!u&&t.SessionSettings.IsSubstrateSearchServiceAvailable}},812:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(4),i=Object(r.createStore)("linkedInStore",{status:null})},818:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(4),i=t(21),o=Object(r.createStore)("groupsStore",{groups:new i.ObservableMap})},8227:function(n,e,t){"use strict";var r=t(0),i=t(739),o=t(65);function u(){return Object(r.__awaiter)(this,void 0,void 0,function(){return Object(r.__generator)(this,function(n){switch(n.label){case 0:return Object(o.f)("rp-addins")?[4,i.h.import()]:[2];case 1:return n.sent()(),[2]}})})}var c=t(7310),a=t(909),s=t(2111),d=t(797),f=t(50),l=t(15);function b(){var n;return Object(r.__awaiter)(this,void 0,void 0,function(){var e,t;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return[4,c.a.import()];case 1:return e=r.sent(),t=(null===(n=window)||void 0===n?void 0:n.location)?window.location.pathname:null,[4,e()];case 2:return r.sent(),[4,a.e.importAndExecute({channelEndpoint:Object(d.r)("/owa",t)+"/notificationchannel",pingInterval:3e5,backoffMaximum:64e3,minimumReconnectInterval:1e3,readyCheckTimeout:6e4,handleSessionTimeout:function(){Object(s.c)(Object(f.a)(),Object(l.e)())}})];case 3:return r.sent(),[2]}})})}var p=t(7205),v=t(52),O=new v.c(function(){return Promise.all([t.e(28),t.e(41),t.e(87),t.e(591),t.e(264)]).then(t.bind(null,14271))}),m=new v.a(O,function(n){return n.addGroupMember}),w=t(245),j=t(857),g=t(5572),h=t(3189),S=t(3452),I=t(818),y=t(1316),A=t(7251),C=t(1222),T=t(861),F=t(731),P=t(2588),x=t(1124),_=t(2077),E=t(1404),k=t(1676),V=t(62),M=t(3130);function L(){var n=Object(M.a)().chatProvider;return 3==n||4==n?N:null}function N(n,e){var t=n.imAddressUrl;E.e.import().then(function(n){var r=n([t],void 0,4);e(r,void 0)})}var R,G,U,B,D=t(771),z=t(4),q=t(1135),K=function(n){R=n},H=function(n){G=n},J=function(n){U=n},W=function(n){B=n};function Q(n){B&&B(n)}function $(){var n=this,e={actionCallbacks:{composeMail:function(e,t,i){return Object(r.__awaiter)(n,void 0,void 0,function(){var n,o,u,c,a,s;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return n=null,o=!1,u=e?[{EmailAddress:e,Name:e}]:void 0,c=Object(F.B)(),(a=c&&Object(j.b)(c.tableQuery))&&e&&e.toLowerCase()===a.toLowerCase()?[4,h.d.import()]:[3,2];case 1:s=r.sent(),o=!s(),n=a,u=void 0,r.label=2;case 2:return P.c.importAndExecute("LivePersonaCard",n,u,t,i,o),[2]}})})},readMail:function(n,e){V.d.info("Persona action callback: readMail"),Object(_.a)(n)},toggleSubscribeToGroup:function(n,e){n.Smtp&&S.e.importAndExecute(n.Smtp,e)},editGroup:function(e){return Object(r.__awaiter)(n,void 0,void 0,function(){return Object(r.__generator)(this,function(n){switch(n.label){case 0:return[4,g.a.import()];case 1:return n.sent()(e),[2]}})})},addGroupMembers:function(e){return Object(r.__awaiter)(n,void 0,void 0,function(){return Object(r.__generator)(this,function(n){switch(n.label){case 0:return!Object(o.f)("grp-shareable-crud")||Object(w.a)()?[3,2]:[4,m.importAndExecute(e,"OWA_GroupCard")];case 1:return n.sent(),[3,4];case 2:return[4,p.a.import()];case 3:n.sent()(e),n.label=4;case 4:return[2]}})})},updateMembership:function(e,t,i,o,u){return Object(r.__awaiter)(n,void 0,void 0,function(){var n,t,o;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return!e.Smtp||i<=0?[2]:(n=e.Smtp.toLowerCase(),t=Object(F.B)(),o=t&&Object(j.b)(t.tableQuery),n!==o?[2]:[4,S.a.import()]);case 1:return r.sent()(n),[2]}})})},getStartChatCallback:L},dataCallbacks:{},dataUpdateBroadcaster:{setGroupUpdateListener:K,setGroupMembersUpdateListener:H,setGroupDeleteListener:J,updatePopupStateListener:W}};e.actionCallbacks.favoritePersona=Y,e.actionCallbacks.unfavoritePersona=X,e.dataCallbacks.getIsPersonaFavorited=function(n,e){"Group"===n.PersonaType?e({isFavorited:Object(D.isGroupInFavorites)(n.Smtp)},void 0):e({isFavorited:Object(D.isPersonaInFavorites)(n.OlsPersonaId,n.Smtp)},void 0)},e.dataCallbacks.getPresence=function(n,e){Object(o.f)("fwk-skypeBusinessV2")&&E.f.import().then(function(e){e(n)}),e(Object(k.a)(n),void 0)},Object(x.b)(e)}function Y(n,e,t){"Group"===n.PersonaType&&Object(o.f)("tri-favorites-roaming")?function(n,e){var t=Object(I.a)().groups.get(n.Smtp.toLowerCase());if(!t)return;Object(D.isGroupInFavorites)(n.Smtp)?e(!1,"Group is already favorited"):D.lazyAddFavoriteGroup.import().then(function(e){return e(n.Smtp,t.basicInformation.DisplayName,"GroupNodeFavoriteButton")}).then(function(){return e(!0,void 0)})}(n,e):function(n,e,t){if(Object(y.isFavoritingInProgress)(n.Smtp))return void e(!1,void 0);Object(y.addFavoritePersona)(void 0,n.Smtp,t.personaDisplayName,"LivePersonaCard").then(function(){return e(!0,void 0)}).catch(function(n){e(!1,n),y.lazyHandleToggleFavoritePersonaError.importAndExecute(n)})}(n,e,t)}function X(n,e){"Group"===n.PersonaType&&Object(o.f)("tri-favorites-roaming")?function(n,e){if(!Object(I.a)().groups.get(n.Smtp.toLowerCase()))return;if(Object(D.isGroupInFavorites)(n.Smtp)){var t=Object(T.c)();t.id&&t.id.toLowerCase()==n.Smtp.toLowerCase()&&Object(C.q)(n.Smtp,"groups"),D.lazyRemoveFavoriteGroup.import().then(function(e){return e(n.Smtp,"GroupNodeFavoriteButton")}).then(function(){return e(!0,void 0)})}else e(!1,"Group is already unfavorited")}(n,e):function(n,e){if(Object(y.isFavoritingInProgress)(n.Smtp))return void e(!1,void 0);var t=Object(A.a)(void 0,n.Smtp);y.lazyRemoveFavoritePersona.importAndExecute(t,"LivePersonaCard").then(function(){return e(!0,void 0)}).catch(function(n){e(!1,n),y.lazyHandleToggleFavoritePersonaError.importAndExecute(n)})}(n,e)}Object(z.orchestrator)(q.l,function(n){R&&R({Smtp:n.groupSmtp,AadObjectId:"",PersonaType:"Group",OlsPersonaId:"",photoUrl:n.photoUrl})}),Object(z.orchestrator)(q.j,function(n){G&&G({Smtp:n.groupSmtp,AadObjectId:"",PersonaType:"Group",OlsPersonaId:""})}),Object(z.orchestrator)(q.k,function(n){U&&U({Smtp:n.groupSmtp,AadObjectId:"",PersonaType:"Group",OlsPersonaId:""})}),Object(z.orchestrator)(q.q,function(n){Q(n)}),Object(z.orchestrator)(q.p,function(n){Q(n)});var Z=t(3420),nn=t(4502),en=t(1020),tn=t(2954),rn=t(966),on=t(2451),un=4194304,cn=t(737);function an(n){var e;if(Object(w.a)()){var t=n.ViewStateConfiguration.GlobalFolderViewState;return t&&!JSON.parse(t).IsConversationView?1:0}var r=n.ViewStateConfiguration.FolderViewState,i=Object(cn.a)("inbox");if(!i||!r||!r.length)return 0;var o=r.filter(function(n){return JSON.parse(n).FolderId.Id===i});return 1===((null===(e=o)||void 0===e?void 0:e.length)&&o[0]?JSON.parse(o[0]).View:1)?0:1}var sn=t(151),dn=t(834);function fn(n){if(function(n){var e,t=n.UserOptions;return Object(w.a)()?!(null===(e=t.ReactOptinSettings)||void 0===e?void 0:e.MailGraduatedFromBeta)||2===t.ClientTypeOptInState||0==(t.NewEnabledPonts&un):Object(dn.a)(32)}(n))return null;Object(sn.m)("settingUpdate");var e=n.UserOptions;return{GlobalReadingPanePositionReact:e.GlobalReadingPanePosition,ConversationSortOrderReact:e.ConversationSortOrder,GlobalListViewTypeReact:an(n)}}var ln=t(40),bn=t(337),pn=t(334),vn=t.n(pn),On=t(300),mn=t.n(On);function wn(n){var e;switch(n.UserOptions.ConversationSortOrderReact){case"Chronological":e=1;break;case"Tree":e=2;break;case"NewestOnTop":e=4;break;case"NewestOnBottom":e=8;break;case"ChronologicalNewestOnTop":e=5;break;case"ChronologicalNewestOnBottom":e=9;break;case"TreeNewestOnBottom":e=10}return e}var jn=Object(z.mutatorAction)("updateDefaultSettings",function(n){var e=Object(ln.a)();e.UserOptions.GlobalReadingPanePositionReact=n.GlobalReadingPanePositionReact,e.UserOptions.ConversationSortOrderReact=n.ConversationSortOrderReact,e.UserOptions.GlobalListViewTypeReact=n.GlobalListViewTypeReact});function gn(){var n,e=fn(Object(ln.a)());e&&(jn(e),n=Object(ln.a)(),Object(bn.a)("OWA.UserOptions",[vn()({DictionaryKey:mn()({Type:"String",Value:["GlobalReadingPanePositionReact"]}),DictionaryValue:mn()({Type:"Integer32",Value:[""+n.UserOptions.GlobalReadingPanePositionReact]})}),vn()({DictionaryKey:mn()({Type:"String",Value:["ConversationSortOrderReact"]}),DictionaryValue:mn()({Type:"Integer32",Value:[""+wn(n)]})}),vn()({DictionaryKey:mn()({Type:"String",Value:["GlobalListViewTypeReact"]}),DictionaryValue:mn()({Type:"Integer32",Value:[""+n.UserOptions.GlobalListViewTypeReact]})}),vn()({DictionaryKey:mn()({Type:"String",Value:["NewEnabledPonts"]}),DictionaryValue:mn()({Type:"Integer32",Value:[""+(n.UserOptions.NewEnabledPonts&~un)]})})]).then(function(e){"Success"!==e.Body.ResponseMessages.Items[0].ResponseClass||Object(w.a)()||Object(dn.a)(32)||(Object(dn.b)(!0,32),Object(bn.a)("OWA.ViewStateConfiguration",[vn()({DictionaryKey:mn()({Type:"String",Value:["ListViewBitFlags"]}),DictionaryValue:mn()({Type:"Integer32",Value:[""+n.ViewStateConfiguration.ListViewBitFlags]})})]))}))}var hn=t(4766),Sn=t(21),In=t(2),yn=t(248),An=Object(z.createStore)("mailFaviconStore",{unseenMessages:0}),Cn=Object(Sn.computed)(function(){return 0===An().unseenMessages||Object(F.L)(Object(cn.a)("inbox"))?Tn("resources/images/favicons/mail-seen.ico"):Tn("resources/images/favicons/mail-unseen.ico")});function Tn(n){return Object(yn.resolve)(Object(In.q)(),n)}var Fn=t(2030),Pn=t(1272),xn=t(732),_n=Object(z.mutatorAction)("SET_UNSEEN_COUNT",function(n){An().unseenMessages=n});Object(z.orchestrator)(Fn.a,function(n){return Object(r.__awaiter)(void 0,void 0,void 0,function(){return Object(r.__generator)(this,function(n){return Object(Pn.a)()===Object(xn.y)("inbox")&&_n(0),[2]})})});var En=t(4887),kn=t(71);function Vn(){Object(hn.b)(Cn)}Object(z.orchestrator)(En.d,function(n){return Object(r.__awaiter)(void 0,void 0,void 0,function(){return Object(r.__generator)(this,function(e){return(Object(Pn.a)()!==Object(xn.y)("inbox")||document.hidden)&&("Focused"!==n.notification.InferenceClassification&&Object(kn.f)().UserOptions.IsFocusedInboxEnabled||_n(An().unseenMessages+1)),[2]})})}),document&&document.addEventListener("visibilitychange",function(){Object(Pn.a)()!==Object(xn.y)("inbox")||document.hidden||_n(0)});var Mn=t(7311),Ln=t(1318),Nn=t(4331),Rn=t(764),Gn=t(7312),Un=t(808),Bn=t(4501),Dn=t(1248),zn=t(3773),qn=t(5399),Kn=t.n(qn);var Hn=t(5449),Jn=t(69),Wn=Object(Jn.action)("getTrustedSendersAndDomains")(function(){Hn.a.trustedSendersAndDomains||function(){return Object(r.__awaiter)(this,void 0,void 0,function(){return Object(r.__generator)(this,function(n){return[2,Kn()().then(function(n){return function(n){return null!=n&&null==n.ErrorMessage?n.Options.TrustedSendersAndDomains:null}(n)})]})})}().then(Object(Jn.action)("updateTrustedSendersAndDomains")(function(n){n&&(Hn.a.trustedSendersAndDomains=n)}))}),Qn=t(2011);function $n(){Qn.b.importAndExecute(gn,b,$,Vn,u,function(){return Bn.a.importAndExecute()},{condition:Object(o.f)("rp-infoBarBrandSubscription")||Object(o.f)("tri-unsubscribeLV"),task:function(){return Object(en.b)(!0)}},Wn,zn.d,function(){return zn.e.import().then(function(n){return n()})},function(){return Mn.a.importAndExecute()},tn.a,function(){return Ln.d.importAndExecute()},function(){return Gn.a.importAndExecute()},{condition:Object(Un.a)(),task:function(){return Dn.b.importAndExecute(!0)}},function(){return Z.b.importAndExecute()},function(){return a.f.importAndExecute()},function(){return Rn.f.importAndExecute()},function(){return nn.a.importAndExecute()},function(){return Nn.a.importAndExecute()},function(){return on.b.importAndExecute()},{condition:Object(o.f)("rp-linkedInViewProfile"),task:function(){return rn.b.importAndExecute()}})}t.d(e,"a",function(){return $n})},8287:function(n,e,t){"use strict";var r=t(0),i=t(8227),o=t(3813),u=t(65),c=t(902),a=t(52),s=t(4),d=t(7313),f=t(5928),l=(Object(s.orchestrator)(d.b,function(n){return Object(r.__awaiter)(void 0,void 0,void 0,function(){return Object(r.__generator)(this,function(n){return f.b.importAndExecute(!1,!1),[2]})})}),new a.c(function(){return Promise.all([t.e(50),t.e(603),t.e(318)]).then(t.bind(null,14091))})),b=new a.a(l,function(n){return n.loadLightningPrimaryView}),p=t(1316),v=t(1222),O=t(4007),m=t(2681),w=t(1260),j=t(1776),g=t(4769),h=t(1022),S=t(1522),I=t(245),y=t(6652),A=t(4887),C=t(2011);function T(){var n=this;Object(i.a)(),Object(w.l)(),Object(f.c)(),Object(j.i)(),C.b.importAndExecute(function(){return p.lazyModule.import()},{condition:Object(c.a)(),task:m.b},f.a,g.a,function(){return o.b.importAndExecute()},function(){Object(u.d)("tri-upNextV2",function(){return Object(r.__awaiter)(n,void 0,void 0,function(){return Object(r.__generator)(this,function(n){switch(n.label){case 0:return[4,y.b.import()];case 1:return n.sent()(),[2]}})})})},function(){return A.a.importAndExecute()},function(){return A.b.importAndExecute()},{condition:!Object(I.a)(),task:function(){return A.c.importAndExecute()}},{condition:Object(c.d)(),task:function(){O.d.import().then(function(n){n()})}},S.V,function(){return b.importAndExecute()},function(){return v.d.importAndExecute()},function(){return h.p.import()})}t.d(e,"a",function(){return T})},966:function(n,e,t){"use strict";var r=t(52),i=t(1445),o=t(151);var u=t(812);function c(){return"Unbound"===Object(u.a)().status}function a(){return"Bound"===Object(u.a)().status}function s(){var n=Object(u.a)();return null==n.status||"OptOut"==n.status||"OptOutBound"==n.status||"DisabledBound"==n.status}t.d(e,"a",function(){return f}),t.d(e,"b",function(){return l}),t.d(e,"e",function(){return c}),t.d(e,"f",function(){return u.a}),t.d(e,"c",function(){return a}),t.d(e,"d",function(){return s});var d=new r.c(function(){return Promise.all([t.e(4),t.e(321)]).then(t.bind(null,14240))}),f=new r.a(d,function(n){return n.connectToLinkedIn}),l=new r.a(d,function(n){return n.initializeBindStatus});"undefined"!=typeof window&&void 0!==window.Owa&&(window.Owa.completeLinkedInBind=function(n){Object(o.m)("linkedInBindComplete",[n]),Object(i.a)(n?"Unbound":"Bound")})}}]);
//# sourceMappingURL=owa.MailFunctionalBoot~PostMailDeeplinkBoot.js.map
self.scriptsLoaded['owa.MailFunctionalBoot~PostMailDeeplinkBoot.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailFunctionalBoot~PostMailDeeplinkBoot.js'] = (new Date()).getTime();