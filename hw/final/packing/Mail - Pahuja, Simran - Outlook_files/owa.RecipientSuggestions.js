self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.RecipientSuggestions.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[427],{1052:function(e,t,n){"use strict";n.d(t,"c",function(){return u}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a});var r=n(34),i=n(50);function u(){var e=Object(r.getCookie)("targetServer"),t="DefaultAnchorMailbox"+(e?"_"+e.toLocaleLowerCase():"");return Object(r.getCookie)(t)}function o(){var e="",t=Object(i.a)().pathname.split("/").filter(function(e){return e.length});return t.length>=2&&t[1].match(/.+@.+/)&&(e=t[1]),e}function a(){var e=o();return e||(e=u()),e}},1199:function(e,t,n){"use strict";n.d(t,"b",function(){return i});var r=n(4),i=Object(r.createStore)("substratepeoplesuggestions",{sessionMaskedRecipients:[]}),u=i();t.a=u},121:function(e,t,n){"use strict";var r=n(336);n.d(t,"a",function(){return r.a})},1245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"FindPeopleJsonRequest:#Exchange"},e)}},1411:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"PersonaResponseShape:#Exchange"},e)}},1445:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(4),i=n(812),u=Object(r.mutatorAction)("updateBindStatus",function(e){Object(i.a)().status=e})},1480:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"FindPeopleRequest:#Exchange"},e)}},1481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(129),i=n(1245);t.default=function(e,t){return void 0===e||e.__type||(e=i.default(e)),r.makeServiceRequest("FindPeople",e,t)}},153:function(e,t,n){"use strict";function r(e,t){Object.keys(t).forEach(function(n){return e.set(n,t[n])})}function i(e){var t=e.requestOptions;return t||(t={headers:new Headers}),t.datapoint=t.datapoint||{},t.datapoint.mailbox="Default",t}n.d(t,"b",function(){return r}),n.d(t,"a",function(){return i})},1600:function(e,t,n){"use strict";var r=n(4),i=Object(r.createStore)("recipientcommon",{fallbackToFindPeople:!1})();t.a=i},161:function(e,t,n){"use strict";function r(){var e=Object.create(null),t=0,n=0,r=0,i=!1;function u(t){r--,delete e[t]}this.put=function(t,n,i,o){if(void 0!==i&&("number"!=typeof i||isNaN(i)||i<=0))throw new Error("Cache timeout must be a positive number");if(void 0!==o&&"function"!=typeof o)throw new Error("Cache timeout callback must be a function");var a=e[t];a?clearTimeout(a.timeout):r++;var c={value:n,expire:i+Date.now()};return isNaN(c.expire)||(c.timeout=setTimeout(function(){u(t),o&&o(t,n)}.bind(this),i)),e[t]=c,n},this.del=function(t){var n=!0,r=e[t];return r?(clearTimeout(r.timeout),!isNaN(r.expire)&&r.expire<Date.now()&&(n=!1)):n=!1,n&&u(t),n},this.clear=function(){for(var u in e)clearTimeout(e[u].timeout);r=0,e=Object.create(null),i&&(t=0,n=0)},this.get=function(u){var o=e[u];if(void 0!==o){if(isNaN(o.expire)||o.expire>=Date.now())return i&&t++,o.value;i&&n++,r--,delete e[u]}else i&&n++;return null},this.size=function(){return r},this.memsize=function(){var t,n=0;for(t in e)n++;return n},this.debug=function(e){i=e},this.hits=function(){return t},this.misses=function(){return n},this.keys=function(){return Object.keys(e)},this.exportJson=function(){var t={};for(var n in e){var r=e[n];t[n]={value:r.value,expire:r.expire||"NaN"}}return JSON.stringify(t)},this.importJson=function(t,n){var r=JSON.parse(t),i=Date.now(),u=n&&n.skipDuplicates;for(var o in r)if(r.hasOwnProperty(o)){if(u)if(e[o])continue;var a=r[o],c=a.expire-i;if(c<=0){this.del(o);continue}c=c>0?c:void 0,this.put(o,a.value,c)}return this.size()}}e.exports=new r,e.exports.Cache=r},164:function(e,t,n){"use strict";var r=n(4),i=Object(r.action)("addAccount",function(e){return{primarySmtpAddress:e.primarySmtpAddress,account:e}}),u=Object(r.action)("removeAccount",function(e){return{primarySmtpAddress:e}}),o=Object(r.action)("updateAccount",function(e,t,n){return{primarySmtpAddress:e,accountToken:t,accountTokenExpiresIn:n}}),a=Object(r.action)("updateOWAConnectedAccountStatus",function(e,t){return{primarySmtpAddress:e,isAccountValid:t}}),c=n(0),s=n(21),d=n(7);Object(r.mutator)(i,function(e){var t=e.account;l().accountsMap.set(t.primarySmtpAddress,t)}),Object(r.mutator)(u,function(e){var t=e.primarySmtpAddress;l().accountsMap.delete(t)}),Object(r.mutator)(o,function(e){var t=e.primarySmtpAddress,n=e.accountToken,r=e.accountTokenExpiresIn,i=l().accountsMap.get(t);i.token=n,i.tokenExpiry=Object(d.j)(Object(d.Ob)(),parseInt(r))}),Object(r.mutator)(a,function(e){var t=e.primarySmtpAddress,n=e.isAccountValid;l().accountsMap.get(t).isAccountValid=n});var l=Object(r.createStore)("OWAAccountsStore",{accountsMap:new s.ObservableMap({})}),f=n(160);function p(e){return void 0!==h(e)}function b(){return Object(c.__spread)(l().accountsMap.values())}function h(e){return l().accountsMap.get(e)}function v(e){return p(e)?h(e).accountProviderType:null}function O(e){return"Outlook"==e.accountProviderType?'MSAuth1.0 usertoken="'+e.token+'", type="MSACT"':"Google"==e.accountProviderType||"ICloud"==e.accountProviderType?"Bearer "+e.token:Object(f.a)(e.accountProviderType)}function g(e,t){return function(n){var r=h(n);return r?r[e]:t}}g("accountUniqueId","0");var m=g("isAccountValid",!0),j=g("accountProviderType",null),y=function(e){return"Outlook"==j(e)};n.d(t,"a",function(){return i}),n.d(t,"i",function(){return u}),n.d(t,"k",function(){return o}),n.d(t,"j",function(){return a}),n.d(t,"f",function(){return b}),n.d(t,"c",function(){return h}),n.d(t,"b",function(){return v}),n.d(t,"e",function(){return O}),n.d(t,"d",function(){return m}),n.d(t,"h",function(){return y}),n.d(t,"g",function(){return p})},1656:function(e,t,n){"use strict";var r=n(5),i=n(1199);function u(e,t,n){var u=e.EmailAddresses,s=e.DisplayName,d=e.Text,l=e.PDLItemId,f=e.ADObjectId,p=e.PersonaId,b=e.FeatureData,h=e.Id,v=e.ReferenceId,O=e.ImAddress,g=e.JobTitle,m=e.PeopleSubtype,j=u?u[0]:null;if(!n&&function(e){return Object(i.b)().sessionMaskedRecipients[e]}(j))return null;var y={EmailAddress:j,Name:Object(r.g)(s)?d:s,MailboxType:c(m),RoutingType:o(m),ItemId:l?{Id:l,__type:"ItemId:#Exchange"}:null};return{DisplayName:s,ADObjectId:f,FeatureData:b,Id:h,ImAddress:O,EmailAddress:y,EmailAddresses:[y],PersonaTypeString:a(m),PersonaId:{Id:p},Title:g,ReferenceId:v,TransactionId:t}}function o(e){return"PersonalDistributionList"==e?"MAPIPDL":"SMTP"}function a(e){switch(e){case"PublicDistributionList":case"PersonalDistributionList":return"DistributionList";case"UnifiedGroup":return"ModernGroup";case"OrganizationUser":case"PersonalContact":case"ImplicitContact":case"OrganizationContact":return"Person";case"LinkedIn":return"LinkedIn";case"ImplicitGroup":return"ImplicitGroup";default:return"Unknown"}}function c(e){switch(e){case"PublicDistributionList":return"PublicDL";case"PersonalDistributionList":return"PrivateDL";case"UnifiedGroup":return"GroupMailbox";case"ImplicitGroup":return"RecommendedGroup";case"OrganizationUser":return"InternalMailbox";case"LinkedIn":return"LinkedIn";case"PersonalContact":case"OrganizationContact":case"ImplicitContact":case"Guest":case"Unknown":return"ExternalMailbox";default:return e}}n.d(t,"a",function(){return u})},1698:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"ContextProperty:#Exchange"},e)}},201:function(e,t,n){"use strict";var r=n(0),i=n(52),u=new i.c(function(){return n.e(541).then(n.bind(null,14388))}),o=new i.a(u,function(e){return e.getAndUpdateRefreshToken}),a=n(164),c=n(323),s=n(151),d="X-AnchorMailbox",l="Authorization",f="X-OwaWebSessionType";function p(e){return Object(r.__awaiter)(this,void 0,void 0,function(){var t,n,i,u,p;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return t={},(n=Object(a.c)(e))?(i=n.token,t[d]=n.anchorMailbox,u=Object(c.g)(n.tokenExpiry),i||Object(s.m)("[getConnectedAccountHeaders] Invalid account token"),!u&&i?[3,2]:[4,o.importAndExecute(n.accountId,e)]):[3,3];case 1:(i=r.sent())||(i="",Object(s.m)("[getConnectedAccountHeaders] Token refresh failed")),r.label=2;case 2:p=void 0,"Outlook"==n.accountProviderType?(p='MSAuth1.0 usertoken="'+i+'", type="MSACT"',t[f]=1..toString()):"Google"!=n.accountProviderType&&"ICloud"!=n.accountProviderType||(p="Bearer "+i,t[f]=2..toString()),t[l]=p,r.label=3;case 3:return[2,t]}})})}var b=n(153);function h(e){return Object(r.__awaiter)(this,void 0,void 0,function(){var t,n;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return t=Object(b.a)(e),n=t,[4,v(e.primarySmtpAddress)];case 1:return n.headers=r.sent(),t.authNeededOnUnAuthorized=!1,t.datapoint=t.datapoint||{},t.datapoint.mailbox="Connected",[2,t]}})})}function v(e){return Object(r.__awaiter)(this,void 0,void 0,function(){var t,n;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return t=new Headers,[4,p(e)];case 1:return n=r.sent(),Object(b.b)(t,n),[2,t]}})})}n.d(t,"a",function(){return p}),n.d(t,"b",function(){return h})},246:function(e,t,n){"use strict";var r=n(0),i=n(153);function u(e){return{"X-OWA-ExplicitLogonUser":e,"X-AnchorMailbox":e}}function o(e,t){t&&e&&Object(i.b)(t,u(e))}function a(e,t){var n,i=t.requestOptions?t.requestOptions:{},u=(null===(n=i.headers)||void 0===n?void 0:n.set)?i.headers:new Headers;return i.datapoint=i.datapoint||{},i.datapoint.mailbox="Explicit",o(e,u),Object(r.__assign)(Object(r.__assign)({},i),{headers:u})}var c=n(201),s=n(160),d=n(131);function l(e){return Object(r.__awaiter)(this,void 0,void 0,function(){var t;return Object(r.__generator)(this,function(n){switch(n.label){case 0:if(!e)return[3,7];switch(e.type){case d.a.GroupMailbox:return[3,1];case d.a.UserMailbox:return[3,2]}return[3,5];case 1:return[2,u(e.deprecatedMailboxId)];case 2:return t={},e.primarySmtpAddress==Object(d.e)().primarySmtpAddress?[3,4]:[4,Object(c.a)(e.primarySmtpAddress)];case 3:t=n.sent(),n.label=4;case 4:return[2,t];case 5:return[2,Object(s.a)(e.type)];case 6:return[3,8];case 7:return[2,{}];case 8:return[2]}})})}var f=n(164),p=n(180);function b(){var e=Object(p.createDefaultHeaders)();return e.prefer='exchange.Behavior="CalendarInternal"',e}function h(e){void 0===e&&(e=null);var t={};return Object(f.g)(e)?(t=b(),Object(c.a)(e).then(function(e){return Object.keys(e).forEach(function(n){return t[n]=e[n]}),t})):Promise.resolve(t)}function v(e){return Object(r.__awaiter)(this,void 0,void 0,function(){return Object(r.__generator)(this,function(t){switch(t.label){case 0:if(!e)return[3,7];switch(e.type){case d.a.GroupMailbox:return[3,1];case d.a.UserMailbox:return[3,2]}return[3,5];case 1:return[2,a(e.deprecatedMailboxId,e)];case 2:return e.primarySmtpAddress==Object(d.e)().primarySmtpAddress?[3,4]:[4,Object(c.b)(e)];case 3:return[2,t.sent()];case 4:return[2,Object(i.a)(e)];case 5:return[2,Object(s.a)(e.type)];case 6:return[3,8];case 7:return[2,null];case 8:return[2]}})})}var O=n(41);function g(e,t,n){var r=new Headers;return n&&r.set("X-OWA-CANARY",Object(O.getOwaCanaryCookie)()),t&&r.set("X-OWA-ActionName",t),e&&o(e,r),r}n.d(t,"a",function(){return a}),n.d(t,"d",function(){return l}),n.d(t,"b",function(){return h}),n.d(t,"c",function(){return b}),n.d(t,"e",function(){return v}),n.d(t,"f",function(){return g}),n.d(t,"g",function(){return o})},251:function(e,t,n){"use strict";var r=function(){function e(e,t,n){this.maxParallelTasks=e,this.taskCallback=t,this.taskDelay=n,this.taskList=[],this.numberOfTasksRunning=0}return e.prototype.add=function(e){this.taskList.unshift(e),this.scheduleTask()},e.prototype.clear=function(){this.taskList.splice(0,this.taskList.length)},e.prototype.canRunMoreTasks=function(){return this.numberOfTasksRunning<this.maxParallelTasks&&this.taskList.length>0},e.prototype.scheduleTask=function(){var e=this;this.canRunMoreTasks()&&setTimeout(function(){e.tryRunTask()},this.taskDelay)},e.prototype.tryRunTask=function(){this.canRunMoreTasks()&&this.runTask()},e.prototype.onTaskComplete=function(){this.numberOfTasksRunning--,this.scheduleTask()},e.prototype.runTask=function(){var e=this,t=this.taskList.pop();this.numberOfTasksRunning++,this.taskCallback(t).then(function(){e.onTaskComplete()}).catch(function(){e.onTaskComplete()}),this.scheduleTask()},e}();n.d(t,"a",function(){return r})},2582:function(e,t,n){"use strict";n.r(t);var r=n(0),i=function(){function e(e){var t=this;this.pendingCallbacks=[],this.ongoingCallbacks=0,this.handlePromiseResolution=function(){if(t.ongoingCallbacks--,t.ongoingCallbacks<t.queueSize&&t.pendingCallbacks.length){var e=t.pendingCallbacks.shift();t.ongoingCallbacks++,e().then(t.handlePromiseResolution)}},this.queueSize=e}return e.prototype.queueTask=function(e){if(this.ongoingCallbacks>=this.queueSize){var t=Object(r.__read)(function(e){var t,n;return[function(){var r=e();return r.then(t,n),r},new Promise(function(e,r){t=e,n=r})]}(e),2),n=t[0],i=t[1];return this.pendingCallbacks.push(n),i}this.ongoingCallbacks++;var u=e();return u.then(this.handlePromiseResolution),u},e}(),u=n(319),o=n(4017),a=n(808),c=function(e){return e.RoutingType&&"EX"===e.RoutingType.toUpperCase()?Object(r.__assign)(Object(r.__assign)({},e),{EmailAddress:e.OriginalDisplayName}):e},s=n(131),d=n(246),l=n(1698),f=n.n(l),p=n(1245),b=n.n(p),h=n(1480),v=n.n(h),O=n(825),g=n.n(O),m=n(1411),j=n.n(m),y=n(743),_=n.n(y),k=n(1481),S=n.n(k),I=n(191),P=n(71),A=20,w=10,T="owa.react.compose";function x(e){return g()({BasePoint:"Beginning",Offset:0,MaxEntriesReturned:e?A:w})}function C(e){return{__type:"FindPeopleContextInfo:#Exchange",RecipientsTo:e}}function R(e,t,n,r,i,u){var o=function(e,t,n){var r,i=["Mailbox"];return t&&!Object(P.s)()&&i.push("Directory"),v()({IndexedPageItemView:x(t),PersonaShape:(r=[_()({FieldURI:"PersonaEmailAddress"}),_()({FieldURI:"EmailAddresses"}),_()({FieldURI:"PersonaDisplayName"}),_()({FieldURI:"PersonaDisplayNames"}),_()({FieldURI:"PersonaId"}),_()({FieldURI:"PersonaType"})],j()({BaseShape:"IdOnly",AdditionalProperties:r})),QuerySources:i,QueryString:e,SearchPeopleSuggestionIndex:!0,ShouldResolveOneOffEmailAddress:!1,Context:[f()({Key:"AppName",Value:"OWA"}),f()({Key:"AppScenario",Value:T})],ContextInfo:C(n||[])})}(t,n,u),a=Object(s.e)(e);return Object(d.e)(a).then(function(e){return S()(b()({Header:Object(I.getJsonRequestHeader)(),Body:o}),e).then(function(e){var t=e.Body;return t.ResultSet=t.ResultSet.map(function(e){return e.EmailAddress&&(e.EmailAddress=c(e.EmailAddress)),e}),t})})}function M(){return Object(a.a)()?o.a:R}var E=n(1656),D=new i(3),L=function(e){return void 0!==e.Groups},U=function(e){return"People"===e.Type&&1===e.Suggestions.length};function N(e,t){var n;return Object(r.__awaiter)(this,void 0,void 0,function(){var i,o,a,c,s,d;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return i=M(),o=Object(u.a)(),[4,D.queueTask(function(){return i(e,t,!0,o,null,[])})];case 1:return a=r.sent(),L(a)?1!==(c=a.Groups.filter(U)).length?[2,null]:(s=null===(n=a.Instrumentation)||void 0===n?void 0:n.TraceId,[2,Object(E.a)(c[0].Suggestions[0],s,!0)]):1!==a.ResultSet.length?[2,null]:[2,void 0!==(d=a.ResultSet[0]).EmailAddress?d:null]}})})}var B=function(e,t,n,r,i,u){return M()(e,t,n,r,i,u)};n.d(t,"searchSuggestionsForSinglePersona",function(){return N}),n.d(t,"searchSuggestions",function(){return B})},298:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"TokenRequest:#Exchange"},e)}},336:function(e,t,n){"use strict";function r(e){return e>=200&&e<300}n.d(t,"a",function(){return r})},339:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(129),i=n(298);t.default=function(e,t){return void 0===e||e.__type||(e=i.default(e)),r.makeServiceRequest("GetAccessTokenforResource",e,t)}},3505:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(65),i=["Id","ADObjectId","DisplayName","EmailAddresses","PeopleSubtype","PeopleType","PDLItemId","PersonaId","ImAddress","JobTitle"];function u(){return Object(r.f)("rp-peopleSuggestionsTrie")?i.concat(["FeatureData"]):i}},4017:function(e,t,n){"use strict";var r=n(0),i=n(164),u=n(201),o=n(966);function a(){return"Bound"==Object(o.f)().status}var c=n(65),s=n(319),d=n(121),l=n(112),f=n(1052),p=n(245),b=n(3505),h=n(467),v=n(62);n.d(t,"a",function(){return S});var O="/search/api/v1/init?",g="https://outlook.office365.com/search",m="https://substrate.office.com/SubstrateSearch-Internal.ReadWrite",j="/search/api/v1/suggestions?",y="owa.react.compose",_="20",k="5";function S(e,t,n,i,u,o){var a,c;return Object(r.__awaiter)(this,void 0,void 0,function(){var d,f,p,b;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return""!=t?[3,1]:[2,I()];case 1:return[4,P(t,n,o)];case 2:return d=r.sent(),f=function(e,t){return{AppName:"OWA",Scenario:{Name:y},Cvid:t||Object(s.a)(),EntityRequests:[e]}}(d,null===(a=u)||void 0===a?void 0:a.conversationId),p=l.d,b=[j+w(),f,i,!1],[4,T(e,null===(c=u)||void 0===c?void 0:c.clientSessionId)];case 3:return[2,p.apply(void 0,b.concat([r.sent(),!0,!0,!1])).then(function(e){return e}).catch(function(e){return v.d.info(e),null})]}})})}function I(){return Object(r.__awaiter)(this,void 0,void 0,function(){var e,t,n,i,u,o;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return Object(p.a)()&&Object(c.f)("rp-linkedInPeopleSuggestions")&&a()?((e={}).headers=new Headers,[4,Object(h.getDelegationTokenForOwa)(m)]):[3,3];case 1:return t=r.sent(),e.headers.set("X-User-Context","litoken=bearer"),e.headers.set("Authorization","Bearer "+t),(n=Object(f.c)())&&e.headers.append("X-AnchorMailbox",n),e.method="GET",[4,fetch(window.location.origin+O+w(),e)];case 2:return(i=r.sent())&&200==i.status?[2,i]:(v.d.error("makeInitRequest: Unsuccessful response status"),[2,null]);case 3:return u=l.b,o=[O+w(),void 0,!0],[4,T(null)];case 4:return[2,u.apply(void 0,o.concat([r.sent(),!0,!1])).then(function(e){return Object(d.a)(e.status)?e.json():null}).catch(function(e){return v.d.error(e),null})]}})})}function P(e,t,n){return Object(r.__awaiter)(this,void 0,void 0,function(){var i,u;return Object(r.__generator)(this,function(r){return i=Object(c.f)("rp-linkedInPeopleSuggestions")&&a(),u={Query:{QueryString:e},EntityType:"People",Provenances:A(t,i),Size:t?_:k},n&&n.length>0&&(u.Context=function(e){var t={};e&&(t.RecipientsTo=e.toString());return t}(n)),u.Fields=Object(b.a)(),[2,u]})})}function A(e,t){var n=["Mailbox"];return e&&!Object(p.a)()&&n.push("Directory"),t&&n.push("LinkedIn"),n}function w(){var e={scenario:y};return Object.keys(e).map(function(t){return t+"="+e[t]}).join("&")}function T(e,t){return Object(r.__awaiter)(this,void 0,void 0,function(){var n,o;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return n={},t&&(n["client-session-id"]=t),Object(c.f)("rp-linkedInPeopleSuggestions")&&a()?Object(p.a)()?(n["X-User-Context"]="litoken=bearer",[3,3]):[3,1]:[3,3];case 1:return[4,Object(h.getAccessTokenforResource)(g)];case 2:o=r.sent(),n["X-User-Context"]="litoken="+o,r.label=3;case 3:return e&&Object(i.g)(e)?[2,Object(u.a)(e).then(function(e){return Object.keys(e).forEach(function(t){return n[t]=e[t]}),n})]:[2,n]}})})}},743:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"PropertyUri:#Exchange"},e)}},808:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(40),i=n(65),u=n(1600);function o(){var e,t,n=Object(r.a)(),o=null===(t=null===(e=n)||void 0===e?void 0:e.SessionSettings)||void 0===t?void 0:t.IsExplicitLogon,a=Object(i.f)("rp-3SPeopleSuggestions")||Object(i.f)("rp-linkedInPeopleSuggestions");return!u.a.fallbackToFindPeople&&a&&!o&&n.SessionSettings.IsSubstrateSearchServiceAvailable}},812:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(4),i=Object(r.createStore)("linkedInStore",{status:null})},825:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"IndexedPageView:#Exchange"},e)}},966:function(e,t,n){"use strict";var r=n(52),i=n(1445),u=n(151);var o=n(812);function a(){return"Unbound"===Object(o.a)().status}function c(){return"Bound"===Object(o.a)().status}function s(){var e=Object(o.a)();return null==e.status||"OptOut"==e.status||"OptOutBound"==e.status||"DisabledBound"==e.status}n.d(t,"a",function(){return l}),n.d(t,"b",function(){return f}),n.d(t,"e",function(){return a}),n.d(t,"f",function(){return o.a}),n.d(t,"c",function(){return c}),n.d(t,"d",function(){return s});var d=new r.c(function(){return Promise.all([n.e(4),n.e(321)]).then(n.bind(null,14240))}),l=new r.a(d,function(e){return e.connectToLinkedIn}),f=new r.a(d,function(e){return e.initializeBindStatus});"undefined"!=typeof window&&void 0!==window.Owa&&(window.Owa.completeLinkedInBind=function(e){Object(u.m)("linkedInBindComplete",[e]),Object(i.a)(e?"Unbound":"Bound")})}},0,[565,110,541]]);
//# sourceMappingURL=owa.RecipientSuggestions.js.map
self.scriptsLoaded['owa.RecipientSuggestions.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.RecipientSuggestions.js'] = (new Date()).getTime();