self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.ImmersiveReaderContainer.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[297],{11417:function(e){e.exports={a:"hxc"}},11418:function(e,r,t){var i=t(11419),n=t(44);"string"==typeof i&&(i=[[e.i,i]]);for(var o=0;o<i.length;o++)n.loadStyles(i[o][1],!1);i.locals&&(e.exports=i.locals)},11419:function(e,r,t){(r=e.exports=t(43)(!1)).push([e.i,"._1gop7q4bCchow_bCsGR2xp{top:0;bottom:0;position:absolute;z-index:3001}html[dir=ltr] ._1gop7q4bCchow_bCsGR2xp,html[dir=rtl] ._1gop7q4bCchow_bCsGR2xp{left:0;right:0}._3Aug-3iJYlDVJH1X_Xo95r{position:fixed;top:0;bottom:0;width:100%;height:100%}html[dir] ._3Aug-3iJYlDVJH1X_Xo95r{border:0;margin:0;padding:0}html[dir=ltr] ._3Aug-3iJYlDVJH1X_Xo95r,html[dir=rtl] ._3Aug-3iJYlDVJH1X_Xo95r{left:0;right:0}",""]),r.locals={immersiveReaderContainer:"_1gop7q4bCchow_bCsGR2xp",immersiveReaderIframe:"_3Aug-3iJYlDVJH1X_Xo95r"}},3196:function(e,r,t){"use strict";var i=t(4);r.a=Object(i.action)("SHOW_IN_IMMERSIVE_READER",function(e,r,t){return{itemId:e,actionSource:r,subActionSource:t}})},5076:function(e,r,t){"use strict";var i=t(0),n=t(5162),o=t(5),a=t(4),s=t(3196),d=function(e){return new Promise(function(r){return setTimeout(function(){r()},e)})},c=t(5163),m=t.n(c);function u(e,r,t,i){return m()({itemId:e,sessionId:r,version:t},i)}var l=t(151),v=t(772),p=t(745),R=t.n(p),f=(Object(a.orchestrator)(s.a,function(e){return Object(i.__awaiter)(void 0,void 0,void 0,function(){var r,t,a,s,c,m,p,b,I,S,_,w,O,j;return Object(i.__generator)(this,function(i){switch(i.label){case 0:if(r=e.itemId,t=C(),!r||t.isLoading||0!==t.immersiveReaderFrameState)return[2];(a=new l.a("ShowInImmersiveReader")).addCustomData({sessionId:t.sessionId,subAction:e.subActionSource}),a.addActionSource(e.actionSource),f(!0),g(!0),s=(new Date).getUTCMilliseconds(),c=!0,m=null,p=null,i.label=1;case 1:return i.trys.push([1,7,8,9]),[4,u(R()({Id:r.Id}),t.sessionId,"2.0",null===(j=r.mailboxInfo)||void 0===j?void 0:j.requestOptions)];case 2:if(b=i.sent(),a.addCheckmark("ImmersiveReaderProcessText_Done"),b&&b.ReaderModelJson?m=JSON.parse(b.ReaderModelJson):(c=!1,p="Response from service call was null or did not contain a ReaderModelJson"),!c)return[3,6];I=(new Date).getUTCMilliseconds(),S=(I-s).toString(),null,m.launchToPostMessageSentDurationInMs=S,h({messageType:"LinguisticModel",messageValue:m}),_=120,w=0,i.label=3;case 3:return w<_&&1===C().immersiveReaderFrameState?[4,d(500)]:[3,5];case 4:return i.sent(),w++,[3,3];case 5:1===C().immersiveReaderFrameState&&(c=!1,p="Frame never got to Ready state"),i.label=6;case 6:return[3,9];case 7:return O=i.sent(),c=!1,a.addCheckmark("CaughtException"),p=O.toString(),[3,9];case 8:return f(!1),[7];case 9:return c?a.end():(g(!1),a.endWithError("ServerError",new Error(p)),Object(v.b)(Object(o.a)(n.b),Object(o.a)(n.a),!1,{hideCancelButton:!0})),[2]}})})}),Object(a.mutatorAction)("toggleImmersiveReaderLoadingState",function(e){C().isLoading=e})),g=Object(a.mutatorAction)("toggleImmersiveReaderShowingState",function(e){C().immersiveReaderFrameState=e?1:0}),h=Object(a.mutatorAction)("setImmersiveReaderApiResponse",function(e){C().apiResponse=e}),b=t(319),I={sessionId:Object(b.a)(),isLoading:!1,immersiveReaderFrameState:0,apiResponse:null},C=Object(a.createStore)("immersivereader",I),S=C(),_=Object(a.mutatorAction)("setImmersiveReaderFrameReady",function(){C().immersiveReaderFrameState=2}),w=Object(a.mutatorAction)("closeImmersiveReader",function(){var e=C();e.immersiveReaderFrameState=0,e.apiResponse=null});t.d(r,"e",function(){return S}),t.d(r,"b",function(){return C}),t.d(r,"c",function(){return _}),t.d(r,"a",function(){return w}),t.d(r,"d",function(){return s.a})},5162:function(e){e.exports={b:"xwc",a:"ywc"}},5163:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=t(129),n=t(745);r.default=function(e,r){return void 0===e.itemId||e.itemId.__type||(e.itemId=n.default(e.itemId)),i.makeServiceRequest("ImmersiveReaderProcessText",e,r)}},9359:function(e,r,t){"use strict";t.r(r);var i=t(0),n=t(11417),o=t(5),a=t(21),s=t(103),d=t(1),c=t(151),m=t(65),u=t(40),l=t(5076),v=t(11418),p=function(e){function r(r){var t=e.call(this,r)||this;return t.onReceivePostMessage=function(e){e&&0!==l.e.immersiveReaderFrameState&&0===t.immersiveReaderUrl.toLowerCase().indexOf(e.origin.toLowerCase())&&("ImmersiveReader-ReadyForContent"===e.data?(t.dp&&t.dp.addCheckmark("ReceivedReadyForContent"),Object(l.c)(),t.immersiveReaderFrame.focus()):"CloseImmersiveReader"===e.data&&(t.dp&&t.dp.addCheckmark("ReceivedCloseReader"),t.receivedCloseCallback=!0,Object(l.a)()))},t.immersiveReaderUrl=t.getImmersiveReaderUrl(),t}return Object(i.__extends)(r,e),r.prototype.componentDidMount=function(){var e=this;window.addEventListener("message",this.onReceivePostMessage,!1),this.autorunDisposer=Object(a.autorun)(function(){l.e.apiResponse&&2===l.e.immersiveReaderFrameState&&e.immersiveReaderFrame&&(e.dp&&e.dp.addCheckmark("SendingPostMessageToFrame"),e.immersiveReaderFrame.contentWindow.postMessage(JSON.stringify(l.e.apiResponse),"*"))})},r.prototype.componentWillUnmount=function(){window.removeEventListener("message",this.onReceivePostMessage,!1),this.autorunDisposer()},r.prototype.render=function(){var e=this;return 0===l.e.immersiveReaderFrameState||this.dp?0===l.e.immersiveReaderFrameState&&this.dp&&(this.receivedCloseCallback?this.dp.end():this.dp.endWithError("ServerError",new Error("Did not receive close callback")),this.dp=null):(this.dp=new c.a("ImmersiveReaderContainer"),this.dp.addCustomData({sessionId:l.e.sessionId}),this.receivedCloseCallback=!1),0!==l.e.immersiveReaderFrameState?d.createElement("div",{className:v.immersiveReaderContainer},d.createElement("iframe",{id:"immersive-reader-iframe",className:v.immersiveReaderIframe,title:Object(o.a)(n.a),allowFullScreen:!0,src:this.immersiveReaderUrl,ref:function(r){e.dp&&e.dp.addCheckmark("GotFrameRef"),e.immersiveReaderFrame=r}})):null},r.prototype.getImmersiveReaderUrl=function(){var e="https://learningtools.onenote.com/learningtoolsapp/reader";Object(m.f)("rp-immersiveReaderDogfood")&&(e="https://learningtools.edog.onenote.com/learningtoolsapp/reader");var r=Object(u.a)().SessionSettings.UserCulture;return e+"?exitCallback=CloseImmersiveReader&appId=OWA&sessionId="+l.e.sessionId+"&ui="+r+"&appSubId=React"},r=Object(i.__decorate)([s.observer],r)}(d.Component);t.d(r,"ImmersiveReaderContainer",function(){return p})}},0,[0,1,2,578,189]]);
//# sourceMappingURL=owa.ImmersiveReaderContainer.js.map
self.scriptsLoaded['owa.ImmersiveReaderContainer.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.ImmersiveReaderContainer.js'] = (new Date()).getTime();