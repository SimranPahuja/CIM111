self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.InlineTranslation.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[306],{12994:function(t){t.exports={i:"nsc",j:"osc",h:"psc",f:"qsc",e:"rsc",d:"ssc",c:"tsc",a:"usc",b:"vsc",g:"wsc"}},12995:function(t,n,a){var e=a(12996),r=a(44);"string"==typeof e&&(e=[[t.i,e]]);for(var o=0;o<e.length;o++)r.loadStyles(e[o][1],!1);e.locals&&(t.exports=e.locals)},12996:function(t,n,a){(n=t.exports=a(43)(!1)).push([t.i,"html[dir] ._1eN94FfatbCko5uUefAU47{padding-top:10px}html[dir=ltr] ._1eN94FfatbCko5uUefAU47{margin-left:52px}html[dir=rtl] ._1eN94FfatbCko5uUefAU47{margin-right:52px}",""]),n.locals={translationFeedback:"_1eN94FfatbCko5uUefAU47"}},1321:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(0);n.default=function(t){return e.__assign({__type:"ItemChange:#Exchange"},t)}},13734:function(t,n,a){"use strict";a.r(n);var e=a(0),r=a(7721),o=a(65),i=a(3144),s=a(2558),u=a(62),l=15,c=40,d="Language",T="Languages",f="Locale",g="BestGuessLanguage";function b(t){return Object(e.__awaiter)(this,void 0,void 0,function(){var n,a,b,m,D,h,p;return Object(e.__generator)(this,function(e){switch(e.label){case 0:if(t.RightsManagementLicenseData)return[2,["",null]];n=null,e.label=1;case 1:return e.trys.push([1,4,,5]),[4,i.c.import()];case 2:return[4,e.sent()(t.ItemId.Id,r.d)];case 3:return n=e.sent(),[3,5];case 4:return e.sent(),u.d.info("getLocalePropertyForItem: Unable to get item property from GetItemManager."),[3,5];case 5:return a="",b=null,n&&(m=Object(s.b)(n,null,r.a),D=Object(s.b)(n,null,r.b),m?(p=JSON.parse(m.Value)[0],(h=p[d])&&(t.Preview.length<l||(t.Preview.length<c?Object(o.f)("tra-EnableShortMessage")&&h.hasOwnProperty(g)&&(a=h[g]):a=h.hasOwnProperty(g)?h[g]:h[f]))):u.d.info("getLocalePropertyForItem: No language property found for first body of item."),D&&(p=JSON.parse(D.Value)[0],b=p[T])),[2,[a||"",b]]}})})}var m={name:"InlineTranslationMessageTranslated",cosmosOnlyData:function(t,n){return t}},D={name:"InlineTranslationMessageUntranslated",cosmosOnlyData:function(t){return t}},h={name:"InlineTranslationStoreData",cosmosOnlyData:function(t,n){return t}},p={name:"InlineTranslationStoreStatus",cosmosOnlyData:function(t,n){return t}},v={name:"InlineTranslationLoadDataAndStatus",cosmosOnlyData:function(t){return t.ItemId.Id}},j=a(151),O=a(49),w=a(7722),x=Object(O.c)("storeTranslationData",v)(function(t){return Object(e.__awaiter)(this,void 0,void 0,function(){var n,a,r,o;return Object(e.__generator)(this,function(e){switch(e.label){case 0:n=null,e.label=1;case 1:return e.trys.push([1,4,,5]),[4,i.c.import()];case 2:return[4,e.sent()(t.ItemId.Id,w.d)];case 3:return n=e.sent(),[3,5];case 4:return a=e.sent(),Object(j.o)().endWithError("ServerError",new Error(a.responseMessage)),[3,5];case 5:return n?(r=Object(s.b)(n,null,w.a),o=Object(s.b)(n,null,w.b),[2,[r?r.Value:null,o?o.Value:null]]):[2,[null,null]]}})})}),S=a(740);function I(t,n){return n?t.UniqueBody.Value:t.NormalizedBody.Value}function y(t){var n,a,e=t.ConversationId.Id;if(null===(n=S.H.conversations.get(e))||void 0===n?void 0:n.conversationNodeIds){var r=t,o=S.H.conversationNodes.get(r.InternetMessageId);if(null===(a=o)||void 0===a?void 0:a.quotedTextList)return o.quotedTextList}}var _=4e5;var C=a(7719),L=a(7718),F=a(3924),E=a(468),P=a.n(E),M=a(1501),N=a.n(M),k=a(1321),R=a.n(k),A=a(745),U=a.n(A),q=a(1950),H=a.n(q);function B(t,n,a){var e=P()({PropertyName:n,DistinguishedPropertySetId:"Common",PropertyType:"String"}),r=N()({ExtendedFieldURI:e,Value:a}),o=Object(F.a)(r),i=R()({Updates:[o],ItemId:U()({Id:t})});return H()({ItemChanges:[i],ConflictResolution:"AlwaysOverwrite",MessageDisposition:"SaveOnly"})}var V=a(1909),W=a.n(V),J=a(191),G=Object(O.c)("storeTranslationData",h)(function(t,n){return Object(e.__awaiter)(this,void 0,void 0,function(){var a,r;return Object(e.__generator)(this,function(e){return a=B(t,"TranslationData",JSON.stringify(n)),r=Object(j.o)(),[2,W()({Header:Object(J.getJsonRequestHeader)(),Body:a}).then(function(t){var n=Object(S.d)(t.Body.ResponseMessages.Items[0]);return n||r.endWithError("ServerError"),n}).catch(function(t){return r.endWithError("ServerError"),!1})]})})}),$=Object(O.c)("storeTranslationData",p)(function(t,n){return Object(e.__awaiter)(this,void 0,void 0,function(){var a,r;return Object(e.__generator)(this,function(e){return a=B(t,"TranslationStatus",""+n),r=Object(j.o)(),[2,W()({Header:Object(J.getJsonRequestHeader)(),Body:a}).then(function(t){var n=Object(S.d)(t.Body.ResponseMessages.Items[0]);return n||r.endWithError("ServerError"),n}).catch(function(t){return r.endWithError("ServerError"),!1})]})})}),Q=a(319),z=a(4692),Y=a(1667),K=Object(O.c)("translateItem",m)(function(t,n,a,r,i){return void 0===a&&(a=!1),void 0===r&&(r=!1),void 0===i&&(i=!1),Object(e.__awaiter)(this,void 0,void 0,function(){var s,u,l,c,d,T,f,g,b,m,D,h,p,v,O,w,x,_,C,F,E,P;return Object(e.__generator)(this,function(e){switch(e.label){case 0:if(s=7e3,u=Object(j.o)(),l=S.H.items.get(t),c=Object(Q.a)(),d=!1,a&&(T=S.H.conversations.get(l.ConversationId.Id)),l.TranslationData.isTranslating=!0,l.TranslationData.translationFailed=!1,f=!1,g=!1,b=!1,m=[],D=function(t,n,a){return!(!a||!t.subjectTranslationData.translationText)||!(a||!n.TranslationData.subjectTranslationText)}(T,l,a),n&&!D&&(m.push(n),f=!0),null==l.TranslationData.translationText&&(l.TranslationData.isTranslatable||r)&&(Object(L.a)(l.TranslationData.itemOgmaLocale)&&!r||(h=I(l,a),m.push(h),g=!0)),a&&(p=y(l))&&(null===l.TranslationData.forwardContentTranslationText&&l.TranslationData.isForwardContentTranslatable&&!Object(L.a)(l.TranslationData.forwardContentLocale)||r)&&(p.forEach(function(t){m.push(t)}),b=!0),!(f||g||b))return[3,6];v=void 0,e.label=1;case 1:return e.trys.push([1,4,,5]),[4,z.j.import()];case 2:return[4,e.sent()(m,c)];case 3:return v=e.sent(),d=!0,[3,5];case 4:return O=e.sent(),function(t,n,a,e){if(t.TranslationData.isTranslating=!1,t.TranslationData.translationFailed=!0,a){var r=new Error("[InlineTranslation] TranslateText failed. Error:"+n+" | cid:"+e);a.endWithError("ServerError",r)}}(l,O,u,c),[2];case 5:l.TranslationData.shouldGetFeedback=!0,f&&(w=v.shift(),a?T.subjectTranslationData.translationText=w:l.TranslationData.subjectTranslationText=w,D=!0),g&&(x=v.shift(),l.TranslationData.translationText=x),b&&(l.TranslationData.forwardContentTranslationText=v),e.label=6;case 6:return l.TranslationData.isTranslating=!1,_=!1,!l.TranslationData.translationText&&!l.TranslationData.forwardContentTranslationText||!D&&n||(!Object(o.f)("tra-cacheTranslation")||l.TranslationData.isShowingTranslation||l.TranslationData.isShowingForwardContentTranslation||(_=!0),null!==l.TranslationData.translationText&&(l.TranslationData.isShowingTranslation=!0),null!==l.TranslationData.forwardContentTranslationText&&(l.TranslationData.isShowingForwardContentTranslation=!0),null!==n&&(a?T.subjectTranslationData.isShowingTranslation=!0:l.TranslationData.isShowingSubjectTranslation=!0),a||u&&u.addCustomData({conversationViewOff:!0}),(l.TranslationData.manuallyTranslated||r&&!function(t){return t.TranslationData.isTranslatable&&!Object(L.a)(t.TranslationData.itemOgmaLocale)||t.TranslationData.isForwardContentTranslatable&&!Object(L.a)(t.TranslationData.forwardContentLocale)}(l))&&(u&&u.addCustomData({manual:!0}),l.TranslationData.manuallyTranslated=!0),i&&u&&u.addCustomData({auto:!0})),Object(o.f)("rp-inlineTranslation-floodgateSurvey")&&setTimeout(function(){Y.a.import().then(function(t){t("TranslationCompleted")})},s),Object(o.f)("tra-cacheTranslation")&&d?[4,z.g.import()]:[3,9];case 7:return C=e.sent(),F=C(),E=a?T.subjectTranslationData.translationText:l.TranslationData.subjectTranslationText,P={language:F,subject:E,body:l.TranslationData.translationText,forward:l.TranslationData.forwardContentTranslationText,isConversation:a,dateTime:Date.now()},[4,G(l.ItemId.Id,P)];case 8:e.sent(),e.label=9;case 9:return _?[4,$(l.ItemId.Id,!0)]:[3,11];case 10:e.sent(),e.label=11;case 11:return[2]}})})});var X=a(69);function Z(t){try{var n=(new DOMParser).parseFromString(t,"text/html");n.querySelector('[id$="divRplyFwdMsg"]').remove();var a=n.querySelectorAll("style");if(a&&a.length>0)for(var e=0;e<a.length;e++)a[e]&&(a[e].innerText="");return n.body.textContent||""}catch(t){return""}}var tt=a(104),nt=40;var at=Object(X.action)("setItemLocale")(function(t,n,a){return Object(e.__awaiter)(this,void 0,void 0,function(){var r,i,s,u,l,c,d,T,f,g,m,D,h,p,v,j,O,w,L,F,E,P,M,N,k;return Object(e.__generator)(this,function(e){switch(e.label){case 0:return[4,z.i.import()];case 1:return r=e.sent(),[4,z.d.import()];case 2:return i=e.sent(),[4,z.c.import()];case 3:return s=e.sent(),[4,z.e.import()];case 4:return u=e.sent(),[4,z.f.import()];case 5:return l=e.sent(),[4,z.b.import()];case 6:return c=e.sent(),[4,z.a.import()];case 7:return d=e.sent(),T=!n.TranslationData.userLanguage,null!=(f=n.TranslationData.itemLocale)?[3,9]:[4,b(n)];case 8:g=e.sent(),f=g[0],n.TranslationData.quotedTextLocales=null!=g[1]?JSON.parse(g[1]):[],e.label=9;case 9:return m=i(f),[4,r()];case 10:return D=e.sent(),h=!T&&(D||u()!=n.TranslationData.userLanguage),T||h?(t&&(p=S.H.conversations.get(n.ConversationId.Id)),c()&&function(t,n){void 0===n&&(n=!1);var a=0,e=S.H.items.get(t),r=I(e,n);if(r&&(a+=r.length),n){var o=y(e);o&&o.forEach(function(t){a+=t.length})}return a<_}(n.ItemId.Id,t)?(n.TranslationData.userLanguage=u(),n.TranslationData.itemOgmaLocale=m,n.TranslationData.itemLocaleName=s(m),v=d(l(),f),Object(o.f)("rp-inlineTranslationForwardContent2")&&t?(j=[],n.TranslationData.quotedTextLocales.forEach(function(t){j.push(i(t))}),(O=function(t,n,a,e){var r,o=t,i=S.H.conversationNodes.get(o.InternetMessageId);if((null===(r=i)||void 0===r?void 0:r.hasQuotedText)&&i.quotedTextList){if(!n||n.length<=0||i.quotedTextList.length!=n.length)return"";for(var s=0;s<n.length;s++)if(!Object(tt.b)(n[s])){var u=Z(i.quotedTextList[s]);if(u&&u.length>=nt&&e(a,n[s]))return n[s]}}return null}(n,j,l(),d))?(n.TranslationData.forwardContentLocale=O,n.TranslationData.forwardContentLocaleName=s(O),n.TranslationData.isForwardContentTranslatable=!0,m||(n.TranslationData.itemOgmaLocale=O,n.TranslationData.itemLocaleName=n.TranslationData.forwardContentLocaleName)):""===O?n.TranslationData.isForwardContentTranslatable=v:(n.TranslationData.isForwardContentTranslatable=!1,n.TranslationData.forwardContentTranslationText=null)):!Object(o.f)("rp-inlineTranslationForwardContent2")&&t?n.TranslationData.isForwardContentTranslatable=v:Object(o.f)("rp-inlineTranslation-conversationViewOff")&&!t?n.TranslationData.isForwardContentTranslatable=v:n.TranslationData.isForwardContentTranslatable=!1,null==n.TranslationData.itemLocale&&(n.TranslationData.itemLocale=f),w=!0,T?Object(o.f)("tra-cacheTranslation")?[4,x(n)]:[3,12]:[3,14]):(n.TranslationData.isTranslatable=!1,n.TranslationData.isShowingTranslation=!1,n.TranslationData.translationText=null,n.TranslationData.isForwardContentTranslatable=!1,n.TranslationData.isShowingForwardContentTranslation=!1,n.TranslationData.forwardContentTranslationText=null,t?(p.subjectTranslationData.isShowingTranslation=!1,p.subjectTranslationData.translationText=null):(n.TranslationData.isShowingSubjectTranslation=!1,n.TranslationData.subjectTranslationText=null),[2])):[3,15];case 11:return F=e.sent(),[3,13];case 12:F=[null,null],e.label=13;case 13:E="true"===(L=F)[1],null!==L[1]&&(w=!1),P=JSON.parse(L[0]),M=l(),P&&P.language==M&&P.isConversation==t?(t?p.subjectTranslationData.translationText||(p.subjectTranslationData.translationText=P.subject):n.TranslationData.subjectTranslationText||(n.TranslationData.subjectTranslationText=P.subject),n.TranslationData.translationText=P.body,P.forward&&P.forward.length>0?n.TranslationData.forwardContentTranslationText=P.forward:n.TranslationData.forwardContentTranslationText=null):(E&&(w=!0,E=!1),n.TranslationData.translationText=null,n.TranslationData.forwardContentTranslationText=null),E&&(n.TranslationData.translationText&&(n.TranslationData.isShowingTranslation=!0),t?p.subjectTranslationData.translationText&&(p.subjectTranslationData.isShowingTranslation=!0):n.TranslationData.subjectTranslationText&&(n.TranslationData.isShowingSubjectTranslation=!0),Object(o.f)("rp-inlineTranslationForwardContent2")&&n.TranslationData.forwardContentTranslationText&&(n.TranslationData.isShowingForwardContentTranslation=!0),v||n.TranslationData.isForwardContentTranslatable||(n.TranslationData.manuallyTranslated=!0)),e.label=14;case 14:n.TranslationData.isTranslatable=v,h&&(n.TranslationData.isShowingTranslation=!1,n.TranslationData.translationText=null,n.TranslationData.isShowingForwardContentTranslation=!1,n.TranslationData.forwardContentTranslationText=null,t?(p.subjectTranslationData.isShowingTranslation=!1,p.subjectTranslationData.translationText=null):(n.TranslationData.isShowingSubjectTranslation=!1,n.TranslationData.subjectTranslationText=null)),Object(o.f)("rp-inlineTranslationAutomatic")&&w&&(N=n.TranslationData.isTranslatable&&Object(C.a)(n.TranslationData.itemOgmaLocale),k=!1,Object(o.f)("rp-inlineTranslationForwardContent2")&&(k=n.TranslationData.isForwardContentTranslatable&&Object(C.a)(n.TranslationData.forwardContentLocale)),(N||k)&&K(n.ItemId.Id,a,t,!1,!0)),e.label=15;case 15:return[2]}})})}),et=Object(O.c)("untranslateItem",D)(function(t,n){return void 0===n&&(n=!1),Object(e.__awaiter)(this,void 0,void 0,function(){var a,r;return Object(e.__generator)(this,function(e){switch(e.label){case 0:return a=S.H.items.get(t),n?(r=a.ConversationId.Id,S.H.conversations.get(r).subjectTranslationData.isShowingTranslation=!1):a.TranslationData.isShowingSubjectTranslation=!1,a.TranslationData.isShowingTranslation=!1,a.TranslationData.isShowingForwardContentTranslation=!1,Object(o.f)("tra-cacheTranslation")?[4,$(a.ItemId.Id,!1)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})}),rt=a(3043),ot=a(4),it=Object(ot.mutatorAction)("addExcludedLanguage",function(t){var n=Object(rt.a)(),a={feature:n.feature,targetLanguage:n.targetLanguage,translationMode:n.translationMode,excludedLanguages:Object(e.__spread)(n.excludedLanguages)};n.excludedLanguages.push(t),z.k.import().then(function(t){t(a,n)})}),st=Object(ot.mutatorAction)("setTranslationMode",function(t){var n=Object(rt.a)(),a={feature:n.feature,targetLanguage:n.targetLanguage,translationMode:n.translationMode,excludedLanguages:Object(e.__spread)(n.excludedLanguages)};n.translationMode=t,z.k.import().then(function(t){t(a,n)})}),ut=Object(ot.mutatorAction)("setWrongLanguage",function(t){var n=S.H.items.get(t);n.TranslationData.isWrongLanguage=!0,Object(j.m)("InlineTranslationWrongLanguage",[],{cosmosOnlyData:JSON.stringify({id:n.ItemId.Id,language:n.TranslationData.itemLocaleName})})}),lt=a(1),ct=a(1983),dt=a(12994),Tt=a(5),ft=a(12995);function gt(){}function bt(){}function mt(t){var n=[{logString:"Readability",uiString:Object(Tt.a)(dt.c)},{logString:"Formatting",uiString:Object(Tt.a)(dt.a)},{logString:"Other",uiString:Object(Tt.a)(dt.b)}],a=Object(e.__assign)({title:Object(Tt.a)(dt.f),subTitle:Object(Tt.a)(dt.e),ghostText:Object(Tt.a)(dt.d),categories:n},Object(o.f)("rp-inlineTranslation-DonateContent")&&{donationText:Object(Tt.a)(dt.g),donationJson:{messageContent:t.messageContent}});return lt.createElement("div",{className:ft.translationFeedback},lt.createElement(ct.b,{ribbonMessage:Object(Tt.a)(dt.i),feature:"inlineTranslation",thankYouMessage:Object(Tt.a)(dt.j),moreFeedbackRibbonMessage:Object(Tt.a)(dt.h),noFeedbackDialogParams:a,yesCallBack:gt,noCallBack:bt}))}a.d(n,"setItemLocale",function(){return at}),a.d(n,"translateItem",function(){return K}),a.d(n,"untranslateItem",function(){return et}),a.d(n,"addExcludedLanguage",function(){return it}),a.d(n,"setTranslationMode",function(){return st}),a.d(n,"setWrongLanguage",function(){return ut}),a.d(n,"TranslationFeedbackRibbon",function(){return mt})},1378:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(0);n.default=function(t){return e.__assign({__type:"SetItemField:#Exchange"},t)}},1501:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(0);n.default=function(t){return e.__assign({__type:"ExtendedPropertyType:#Exchange"},t)}},1586:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(0);n.default=function(t){return e.__assign({__type:"Message:#Exchange"},t)}},1667:function(t,n,a){"use strict";a.d(n,"a",function(){return o});var e=a(52),r=(a(776),new e.c(function(){return a.e(252).then(a.bind(null,2871))})),o=new e.b(r,function(t){return t.logFloodgateActivity})},1909:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(129),r=a(2221);n.default=function(t,n){return void 0===t||t.__type||(t=r.default(t)),e.makeServiceRequest("UpdateItem",t,n)}},1950:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(0);n.default=function(t){return e.__assign({__type:"UpdateItemRequest:#Exchange"},t)}},1983:function(t,n,a){"use strict";a.d(n,"a",function(){return o}),a.d(n,"b",function(){return i}),a.d(n,"c",function(){return s});var e=a(52),r=new e.c(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(5),a.e(239)]).then(a.bind(null,3159))}),o=Object(e.d)(r,function(t){return t.FeedbackForm}),i=Object(e.d)(r,function(t){return t.FeedbackRibbon}),s=Object(e.d)(r,function(t){return t.NewConsumerRecruitmentForm})},2221:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(0);n.default=function(t){return e.__assign({__type:"UpdateItemJsonRequest:#Exchange"},t)}},3043:function(t,n,a){"use strict";a.d(n,"a",function(){return r});var e=a(764);function r(){return Object(e.c)(e.a.Translation)}},3759:function(t,n,a){"use strict";var e;a.d(n,"a",function(){return e}),function(t){t[t.SuggestAutomatic=0]="SuggestAutomatic",t[t.Automatic=1]="Automatic",t[t.Never=2]="Never",t[t.Suggest=3]="Suggest"}(e||(e={}))},3924:function(t,n,a){"use strict";a.d(n,"a",function(){return d});var e=a(1501),r=a.n(e),o=a(468),i=a.n(o),s=a(1586),u=a.n(s),l=a(1378),c=a.n(l);function d(t){return c()({Path:i()(t.ExtendedFieldURI),Item:u()({ExtendedProperty:[r()(t)]})})}},4692:function(t,n,a){"use strict";a.d(n,"a",function(){return o}),a.d(n,"i",function(){return i}),a.d(n,"h",function(){return s}),a.d(n,"d",function(){return u}),a.d(n,"c",function(){return l}),a.d(n,"g",function(){return c}),a.d(n,"e",function(){return d}),a.d(n,"f",function(){return T}),a.d(n,"b",function(){return f}),a.d(n,"j",function(){return g}),a.d(n,"k",function(){return b});var e=a(52),r=new e.c(function(){return a.e(488).then(a.bind(null,9288))}),o=new e.b(r,function(t){return t.checkCanTranslate}),i=new e.b(r,function(t){return t.initSupportedLanguages}),s=new e.b(r,function(t){return t.initAndGetSupportedLanguageMap}),u=(new e.b(r,function(t){return t.getLocaleOfSupportedLanguageMap}),new e.b(r,function(t){return t.getOgmaSupportedLanguageTag})),l=(new e.b(r,function(t){return t.getDetectedLanguage}),new e.b(r,function(t){return t.getLanguageNameFromTag})),c=(new e.b(r,function(t){return t.getUserLanguageName}),new e.b(r,function(t){return t.getUserLanguageTag})),d=new e.b(r,function(t){return t.getTargetLanguageName}),T=new e.b(r,function(t){return t.getTargetLanguageTag}),f=new e.b(r,function(t){return t.getIsUserLocaleSupported}),g=new e.b(r,function(t){return t.translateText}),b=new e.b(r,function(t){return t.updateTranslationOptions})},765:function(t,n,a){"use strict";a.d(n,"a",function(){return e}),a.d(n,"b",function(){return r}),a.d(n,"c",function(){return o}),a.d(n,"d",function(){return i}),a.d(n,"e",function(){return s}),a.d(n,"i",function(){return u}),a.d(n,"m",function(){return l}),a.d(n,"n",function(){return c}),a.d(n,"o",function(){return d}),a.d(n,"p",function(){return T}),a.d(n,"q",function(){return f}),a.d(n,"l",function(){return g}),a.d(n,"h",function(){return b}),a.d(n,"k",function(){return m}),a.d(n,"j",function(){return D}),a.d(n,"f",function(){return h}),a.d(n,"g",function(){return p});var e="Click",r=356,o=928,i=String.fromCharCode(57345),s=new RegExp(i,"g"),u=String.fromCharCode(160),l=/\s/g,c=String.fromCharCode(57344),d=new RegExp(c,"g"),T="searchSuggestionsCallout",f="searchSuggestion-",g=38,b=52,m="searchBoxId",D="searchBoxAnchorId",h="folderScopeButtonId",p="folderScopeWrapperId"},7718:function(t,n,a){"use strict";a.d(n,"a",function(){return o});var e=a(3043),r=a(3759);function o(t){var n=Object(e.a)();return n.translationMode===r.a.Never||n.excludedLanguages.includes(t)}},7719:function(t,n,a){"use strict";a.d(n,"a",function(){return o});var e=a(3759),r=a(3043);function o(t){var n=Object(r.a)();return n.translationMode===e.a.Automatic&&!n.excludedLanguages.includes(t)}},7721:function(t,n,a){"use strict";a.d(n,"a",function(){return s}),a.d(n,"b",function(){return u}),a.d(n,"d",function(){return l});var e=a(65),r=a(758),o=a(468),i=a.n(o),s="EntityExtraction/ExtractLanguage1.0",u="EntityExtraction/ExtractQuotedTextLanguages1.0",l="InlineTranslationLocale",c=[i()({PropertyName:s,DistinguishedPropertySetId:"Common",PropertyType:"String"}),i()({PropertyName:u,DistinguishedPropertySetId:"Common",PropertyType:"String"})],d={featureId:l,propertyPaths:c,isPropertyExistedOnItem:function(t){var n,a=r.a.items.get(t);return(null===(n=a)||void 0===n?void 0:n.TranslationData)&&null!=a.TranslationData.itemLocale},shouldGetItemPropertiesFromServer:function(t,n){return!!(Object(e.f)("rp-inlineTranslation")&&0==n||Object(e.f)("rp-inlineTranslation-conversationViewOff"))&&!r.a.items.get(t).RightsManagementLicenseData}};n.c=d},7722:function(t,n,a){"use strict";a.d(n,"a",function(){return s}),a.d(n,"b",function(){return u}),a.d(n,"d",function(){return l});var e=a(65),r=a(758),o=a(468),i=a.n(o),s="TranslationData",u="TranslationStatus",l="InlineTranslationDataAndStatus",c=[i()({PropertyName:s,DistinguishedPropertySetId:"Common",PropertyType:"String"}),i()({PropertyName:u,DistinguishedPropertySetId:"Common",PropertyType:"String"})],d={featureId:l,propertyPaths:c,isPropertyExistedOnItem:function(t){var n,a=r.a.items.get(t);return(null===(n=a)||void 0===n?void 0:n.TranslationData)&&null!=a.TranslationData.userLanguage},shouldGetItemPropertiesFromServer:function(t,n){return!!(Object(e.f)("rp-inlineTranslation")&&Object(e.f)("tra-cacheTranslation")&&0==n||Object(e.f)("rp-inlineTranslation-conversationViewOff")&&Object(e.f)("tra-cacheTranslation"))&&!r.a.items.get(t).RightsManagementLicenseData}};n.c=d}},0,[0,1,2,578,189,5,239,3,8,10,626,444,252,260,488]]);
//# sourceMappingURL=owa.InlineTranslation.js.map
self.scriptsLoaded['owa.InlineTranslation.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.InlineTranslation.js'] = (new Date()).getTime();