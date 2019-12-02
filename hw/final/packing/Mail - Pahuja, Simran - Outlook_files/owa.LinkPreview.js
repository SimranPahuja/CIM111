self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.LinkPreview.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[320],{14330:function(e,t,n){"use strict";n.r(t);var r=n(3588),i=n(4807);function o(e,t){Object(r.b)(e,t),e.hasOwnProperty("videoPlayer")&&Object(i.a)(e)}var a=n(7520),l=n(7521),c=n(6322),u=n(1242),d=n(40),s=n(4698),m=new RegExp("\x3c!--"+s.b+"--\x3e.*?\x3c!--"+s.a+"--\x3e","gim");var h=n(3758),f=700,p=function(){function e(){var e=this;this.onResize=function(){var t=e.editor&&e.editor.getScrollContainer();t&&(t.clientWidth<f?e.setPreviewSize(c.a.Compact):e.setPreviewSize(c.a.Standard))},this.linkPreviewObjects=[],this.featureEnabled=Object(d.a)().UserOptions.LinkPreviewEnabled}return e.prototype.getName=function(){return"LinkPreview"},e.prototype.initialize=function(e){this.editor=e,u.a.importAndExecute(this.onResize),this.onResize()},e.prototype.dispose=function(){this.linkPreviewObjects=null,this.editor=null,this.isDisposed=!0,u.c.importAndExecute(this.onResize)},e.prototype.onPluginEvent=function(e){var t,n;if(this.featureEnabled)if(6===e.eventType){var r=e;if("AutoLink"===r.source&&r.data&&r.data instanceof HTMLAnchorElement){var i=r.data;this.generateLinkPreviewBelowAnchor(i)}else"SetContent"===r.source&&this.rehydrateLinkPreviewsInEditorBody()}else if(7===e.eventType){var o=e;o.content=(n=o.content)?n.replace(m,""):n}else if(0===e.eventType){var a=e,l=a.rawEvent;this.onKeyDownEvent(a,l)}else if(8===e.eventType){var c=e.fragment;if((null===(t=c)||void 0===t?void 0:t.childNodes)&&1==c.childNodes.length){var u=c.firstElementChild;if(u instanceof HTMLAnchorElement){i=u;this.generateLinkPreviewBelowAnchor(i)}}}else 9===e.eventType&&this.rehydrateLinkPreviewsInEditorBody()},e.onLinkPreviewRemoved=function(e){return function(t){e.editor&&t&&t.border&&t.border.parentElement&&(e.moveCursorBelowElement(t.border),e.editor.deleteNode(t.border),e.linkPreviewObjects=e.linkPreviewObjects.filter(function(e){return e!=t}))}},e.prototype.isImageLink=function(e){var t=e.href;return!!t&&!!t.match(".(bmp|gif|jpe?g|png)$")},e.prototype.onImageLoadedIntoEditor=function(e){var t=e.target;t&&(t.onload=null,t.onerror=null)},e.prototype.onImageError=function(e){var t=e.target;t&&(t.onload=null,t.onerror=null,null!=t.parentNode&&t.parentNode.removeChild(t))},e.prototype.generateLinkPreviewBelowAnchor=function(t){var n=this;this.isImageLink(t)?this.tryInsertImageIntoEditor(t):Object(a.a)(t,!0).then(function(r){r&&!n.isDisposed&&(n.linkPreviewObjects.push(r),Object(c.b)(r,n.previewSize),n.insertLinkPreview(t,r.border),o(r,e.onLinkPreviewRemoved(n)))})},e.prototype.insertLinkPreview=function(e,t){this.editor&&(this.insertLinkPreviewElementIntoEditor(t,e),t.parentNode&&t.parentNode.insertBefore(this.editor.getDocument().createElement("br"),t.nextSibling))},e.prototype.tryInsertImageIntoEditor=function(e){if(this.editor){var t=this.editor.getDocument().createElement("img");t.onload=this.onImageLoadedIntoEditor,t.onerror=this.onImageError,t.style.maxWidth="100%",t.src=e.href,this.insertLinkPreviewElementIntoEditor(t,e)}},e.prototype.insertLinkPreviewElementIntoEditor=function(e,t){var n=this.editor.getDocument().createElement("span");this.editor.insertNode(n,{insertOnNewLine:!1,position:3,replaceSelection:!1,updateCursor:!0}),this.moveCursorBelowElement(t),this.editor.insertNode(e,{insertOnNewLine:!0,position:3,replaceSelection:!1,updateCursor:!0}),this.moveCursorBelowElement(n),this.editor.deleteNode(n),this.editor.triggerContentChangedEvent("LinkPreview"),this.editor.addUndoSnapshot()},e.prototype.rehydrateLinkPreviewsInEditorBody=function(){var t=this;this.editor.queryElements("[id^=LPBorder]",function(n){Object(l.a)(n).then(function(n){t.isDisposed||(t.linkPreviewObjects.push(n),o(n,e.onLinkPreviewRemoved(t)))})})},e.prototype.setPreviewSize=function(e){var t=this;e!=this.previewSize&&(this.previewSize=e,this.linkPreviewObjects&&this.linkPreviewObjects.forEach(function(e){Object(c.b)(e,t.previewSize)}))},e.prototype.moveCursorBelowElement=function(e){this.editor.select(e,-3)},e.prototype.onKeyDownEvent=function(e,t){if(this.linkPreviewObjects&&this.linkPreviewObjects.length>0&&(8==t.which||46==t.which)){var n=this.editor.getBlockTraverser(3);if(!n)return;var r=n.currentBlockElement&&n.currentBlockElement.getEndNode();if(r){var i=null,o=this.findLinkPreviewAboveElement(r);if(o)i=o;else if(8==t.which){n.getPreviousInlineElement()||(i=this.findLinkPreviewBeforeOrAfterElement(r,!0))}else if(46==t.which){n.getNextInlineElement()||(i=this.findLinkPreviewBeforeOrAfterElement(r,!1))}i&&(this.editor.deleteNode(i),this.preventDefaultEventAndStopPropagation(e),this.editor.addUndoSnapshot())}}},e.prototype.findLinkPreviewAboveElement=function(e){if(h.x(e,h.r)){var t=h.v(e.id,h.g),n=this.editor.queryElements("."+t);return n?n[0]:null}return null},e.prototype.findLinkPreviewBeforeOrAfterElement=function(e,t){var n=t?e.previousSibling:e.nextSibling;return h.x(n,h.g)?n:null},e.prototype.preventDefaultEventAndStopPropagation=function(e){e.rawEvent.preventDefault(),e.rawEvent.stopPropagation()},e}();t.default=p},14392:function(e,t,n){"use strict";n.r(t);var r=n(4807);function i(e){e.hasOwnProperty("videoPlayer")&&Object(r.a)(e)}n.d(t,"addInteractiveElementsForReadingPane",function(){return i})},1690:function(e,t,n){"use strict";var r=n(4),i=Object(r.createStore)("bposStore",{bposNavBarData:null})();t.a=i},1929:function(e,t,n){"use strict";var r=n(1690),i=n(4),o=Object(i.action)("SET_BPOS_NAV_BAR_DATA ",function(e){return{bposNavBarData:e}});Object(i.mutator)(o,function(e){r.a.bposNavBarData=e.bposNavBarData});var a=n(2322),l=n.n(a);var c=n(2214),u=n(71),d=Object(i.action)("LOAD_BposNavBarData"),s=d;function m(){return r.a.bposNavBarData}Object(i.orchestrator)(d,function(e){Object(u.s)()||l()().then(function(e){o(e),Object(c.a)()})}),n.d(t,"b",function(){return s}),n.d(t,"a",function(){return m})},2214:function(e,t,n){"use strict";var r=n(4);t.a=Object(r.action)("ON_BPOS_NAV_BAR_DATA_LOADED")},2322:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(129);t.default=function(e){return r.makeServiceRequest("GetBposShellInfoNavBarData",{},e)}},3412:function(e,t,n){"use strict";var r=n(151),i=n(248);function o(e,t){var n;try{n=Object(i.parse)(e).hostname}catch(e){return Object(r.m)("isLinkPrefixedWithBaseUrl"),!1}return n===Object(i.parse)(t).hostname&&e!==t}var a=n(1929),l=n(65),c=n(62),u=["https://microsoft.sharepoint.com","https://microsoft-my.sharepoint.com","https://microsoft.sharepoint-df.com","https://microsoft-my.sharepoint-df.com"];function d(e){if(!e)return Object(r.m)("isSharePointLinkCalledWithoutUrl"),!1;var t=Object(a.a)();return t?!(!t.SPO_MySiteHostUrl||!o(e,t.SPO_MySiteHostUrl))||(!(!t.SPO_RootSiteUrl||!o(e,t.SPO_RootSiteUrl))||!!Object(l.f)("doc-SharePoint-dogfoodUser")&&u.some(function(t){return o(e,t)})):(c.d.info("isSharePointLink:bposNavBarData is null"),!1)}function s(e){return!!e&&(e.indexOf("?at=")>0||e.indexOf("&at=")>0)}n.d(t,"a",function(){return o}),n.d(t,"b",function(){return d}),n.d(t,"c",function(){return s})},3588:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return m}),n.d(t,"b",function(){return h});var r,i=n(7516),o=n(5),a=n(3758),l=n(16),c=n(25),u="contenteditable",d=n(7517),s=n(297);function m(e,t){var n,r=window.btoa(t.url);r=(r=(r=r.replace(new RegExp("\\+","g"),"-")).replace(new RegExp("/","g"),":")).replace(new RegExp("=","g"),"."),t.border=document.createElement("div"),t.border.id=a.g+"_"+e+r,t.border.className=a.g+a.w(),t.border.setAttribute(u,"false"),(n=t.border).style.width="100%",n.style.marginTop="16px",n.style.marginBottom="16px",n.style.position="relative",n.style.maxWidth="800px",n.style.minWidth="424px"}function h(e,t){e.closeButtonContainer=document.createElement("div"),e.closeButtonContainer.id=a.v(e.border.className,a.j),e.closeButtonContainer.className=d.closeButtonContainer,e.closeButtonContainer.tabIndex=0,e.closeButtonContainer.title=Object(o.a)(i.a),e.closeButtonContainer.setAttribute("role","button");var n=document.createElement("span");n.id=a.v(e.border.className,a.k),n.className=s(d.icon,Object(l.getIconClassName)("Cancel")),e.closeButtonContainer.appendChild(n),e.border.appendChild(document.createComment(a.d)),e.border.appendChild(e.closeButtonContainer),e.border.appendChild(document.createComment(a.c));var r=function(n){n instanceof KeyboardEvent&&n.keyCode!=a.e||(n.stopPropagation(),e.anchor&&(e.anchor.id=a.u+a.w()),t(e))};e.closeButtonContainer.addEventListener("click",r),e.closeButtonContainer.addEventListener(Object(c.d)()?"keydown":"keyup",r)}!function(e){e[e.WebpagePreview=0]="WebpagePreview",e[e.VideoPreview=1]="VideoPreview"}(r||(r={}))},3758:function(e,t,n){"use strict";n.d(t,"r",function(){return r}),n.d(t,"u",function(){return i}),n.d(t,"f",function(){return o}),n.d(t,"g",function(){return a}),n.d(t,"i",function(){return l}),n.d(t,"h",function(){return c}),n.d(t,"l",function(){return u}),n.d(t,"o",function(){return d}),n.d(t,"n",function(){return s}),n.d(t,"p",function(){return m}),n.d(t,"s",function(){return h}),n.d(t,"t",function(){return f}),n.d(t,"q",function(){return p}),n.d(t,"m",function(){return v}),n.d(t,"k",function(){return b}),n.d(t,"j",function(){return g}),n.d(t,"a",function(){return y}),n.d(t,"b",function(){return w}),n.d(t,"d",function(){return C}),n.d(t,"c",function(){return P}),n.d(t,"e",function(){return E}),n.d(t,"w",function(){return x}),n.d(t,"v",function(){return O}),n.d(t,"x",function(){return k});var r="LP",i=r+"NoLP",o=r+"lnk",a=r+"Border",l="GT",c="BVT",u=r+"Container",d=r+"ImageContainer",s=r+"ImageAnchor",m=r+"ThumbnailImageId",h=r+"Title",f=r+"UrlAnchor",p=r+"Metadata",v=r+"Description",b=r+"CloseButton",g=r+"CloseButtonContainer",y="BingRTPLinkPreview:#Exchange",w="BingVideoLinkPreview:#Exchange",C="owa-remove-on-send-start",P="owa-remove-on-send-end",E=13;function x(){return Math.floor(1e5+9e5*Math.random()).toString()}function O(e,t){return t+((n=e)&&n.slice(-6));var n}function k(e,t){var n;return(null===(n=e)||void 0===n?void 0:n.id)&&0==e.id.indexOf(t)}},4191:function(e,t,n){"use strict";n.d(t,"b",function(){return p}),n.d(t,"c",function(){return v}),n.d(t,"d",function(){return b}),n.d(t,"a",function(){return y});var r=n(0),i=n(3588),o=n(3758),a=n(6322),l=n(94),c=n(62),u=160,d=240,s=d/u,m=160,h=106,f=160;function p(e,t,n){var r={type:i.a.WebpagePreview,description:e.Description,title:e.Title,url:e.Url,thumbnailImageUrl:e.ImageUrl,anchor:t};return Object(i.c)(o.i,r),y(r,n),r}function v(e){return Object(r.__awaiter)(this,void 0,void 0,function(){var t,n,a,l,c,u,d,s,m;return Object(r.__generator)(this,function(r){return e.style.position="relative",t=g(e,o.l),n=g(e,o.o),a=g(e,o.n),l=g(e,o.p),c=g(e,o.s),u=g(e,o.t),d=g(e,o.q),s=g(e,o.m),(m={border:e,type:i.a.WebpagePreview,description:s?s.innerHTML:null,title:u?u.innerText:null,url:u?u.href:null,thumbnailImageUrl:l?l.src:null,table:t,thumbnailImageContainer:n,thumbnailImageAnchor:a,thumbnailImageElement:l,titleContainer:c,titleUrlAnchor:u,metadataContainer:d,descriptionContainer:s}).thumbnailImageContainer&&(m.thumbnailImageContainer.style.position="relative"),[2,Promise.resolve(m)]})})}function b(e,t){var n;(null===(n=e.thumbnailImageElement)||void 0===n?void 0:n.naturalWidth)&&w(e.thumbnailImageElement,e.thumbnailImageContainer,t)}function g(e,t){var n=e.querySelectorAll("[id^="+t+"]");return n&&n.length>0?n[0]:null}function y(e,t){!function(e){e.table=document.createElement("table"),e.table.id=o.v(e.border.className,o.l),e.table.setAttribute("role","presentation"),e.border.appendChild(e.table)}(e);var n=document.createElement("tr");if(n.vAlign="top",n.style.borderSpacing="0px",e.table.appendChild(n),function(e,t){e.style.padding="12px",e.style.width="100%",e.style.borderWidth="1px",e.style.borderStyle="solid",e.style.borderColor="#c8c8c8",e.style.borderRadius="2px",t&&(e.style.paddingRight="36px")}(e.table,t),e.thumbnailImageUrl){var r=document.createElement("td");n.appendChild(r),function(e,t,n){t.thumbnailImageContainer=document.createElement("div"),t.thumbnailImageContainer.id=o.v(t.border.className,o.o),r=t.thumbnailImageContainer,r.style.position="relative",r.style.marginRight="12px",r.style.height="160px",r.style.overflow="hidden",t.thumbnailImageAnchor=document.createElement("a"),C(t.thumbnailImageAnchor,n),t.thumbnailImageAnchor.id=o.v(t.border.className,o.n),t.thumbnailImageAnchor.href=t.url,t.thumbnailImageElement=document.createElement("img"),t.thumbnailImageElement.id=o.v(t.border.className,o.p),t.thumbnailImageElement.alt="",function(e,t,n,r){t.complete&&0!==t.naturalWidth?w(t,n,r):(t.style.display="none",t.src=e,w(t,n,a.a.Default),t.onload=function(e){w(e.target,n,r),t.style.display="block"},t.onerror=function(e){c.d.warn("Error loading image for link preview")})}(t.thumbnailImageUrl,t.thumbnailImageElement,t.thumbnailImageContainer,a.a.Standard),t.thumbnailImageAnchor.appendChild(t.thumbnailImageElement),t.thumbnailImageContainer.appendChild(t.thumbnailImageAnchor),e.appendChild(t.thumbnailImageContainer);var r}(r,e,t)}var i=document.createElement("td");i.style.width="100%",e.title&&function(e,t,n){t.titleContainer=document.createElement("div"),t.titleContainer.id=o.v(t.border.className,o.s),i=t.titleContainer,i.style.fontSize="21px",i.style.fontWeight="300",i.style.marginRight="40px",i.style.fontFamily='"wf_segoe-ui_light","Segoe UI Light","Segoe WP Light","Segoe UI","Segoe WP",Tahoma,Arial,sans-serif',i.style.marginBottom="12px",i.style.marginRight="8px",t.titleUrlAnchor=document.createElement("a"),C(t.titleUrlAnchor,n),t.titleUrlAnchor.id=o.v(t.border.className,o.t),t.titleUrlAnchor.href=t.url,t.titleUrlAnchor.text=t.title,r=t.titleUrlAnchor,r.style.textDecoration="none",r.style.color=Object(l.g)().themePrimary,t.titleContainer.appendChild(t.titleUrlAnchor),e.appendChild(t.titleContainer);var r;var i}(i,e,t),e.description&&function(e,t){t.descriptionContainer=document.createElement("div"),t.descriptionContainer.textContent=t.description,t.descriptionContainer.id=o.v(t.border.className,o.m),n=t.descriptionContainer,n.style.fontSize="14px",n.style.maxHeight="100px",n.style.color="#666666",n.style.fontFamily='"wf_segoe-ui_normal","Segoe UI","Segoe WP",Tahoma,Arial,sans-serif',n.style.marginBottom="12px",n.style.marginRight="8px",n.style.overflow="hidden",e.appendChild(t.descriptionContainer);var n}(i,e),function(e,t){t.metadataContainer=document.createElement("div"),t.metadataContainer.textContent=t.titleUrlAnchor.hostname,t.metadataContainer.id=o.v(t.border.className,o.q),n=t.metadataContainer,n.style.fontSize="14px",n.style.fontWeight="400",n.style.color="#a6a6a6",n.style.fontFamily='"wf_segoe-ui_normal","Segoe UI","Segoe WP",Tahoma,Arial,sans-serif',e.appendChild(t.metadataContainer);var n}(i,e),n.appendChild(i)}function w(e,t,n){if(n!==a.a.Default){var r,i,o,l;switch(n){case a.a.Standard:i=d,r=u;break;case a.a.Compact:i=f,r=h}var c=e.naturalWidth>0&&e.naturalHeight>0?e.naturalWidth/e.naturalHeight:s;e.naturalWidth==e.naturalHeight?(l=r,o=r):e.naturalWidth>e.naturalHeight?(l=i,o=i/c,t.style.width=i+"px",t.style.height=o+"px"):(l=r*c,o=r,t.style.width=i+"px",t.style.height=o+"px"),e.width=l,e.height=o}else e.height=m}function C(e,t){t&&(e.onmouseenter=function(){e.removeAttribute("title")}),e.target="_blank"}},4192:function(e,t,n){"use strict";n.r(t);var r=n(7520);n.d(t,"createLinkPreview",function(){return r.a});var i=n(7521);n.d(t,"rehydrateLinkPreview",function(){return i.a})},4698:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return i});var r="owa-remove-on-send-start",i="owa-remove-on-send-end"},4807:function(e,t,n){"use strict";var r=n(0),i=n(3588),o=n(3758),a=n(4191),l=n(1),c=n(141),u=n(103),d=n(62),s=n(266),m=n(5675),h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onDismissVideoPlayer=function(e){d.d.info("Dismiss Video Player"),e.stopPropagation(),t.props.onClose()},t.setAndResizeVideoPlayerContent=function(e){if(e){e.innerHTML=t.props.videoPlayerHtml;var n=e.querySelectorAll("iframe");n&&1===n.length&&(n[0].setAttribute("width","800px"),n[0].setAttribute("height","530px"))}},t}return Object(r.__extends)(t,e),t.prototype.render=function(){return l.createElement("div",{className:m.videoPlayerBackground,onClick:this.onDismissVideoPlayer},l.createElement("div",{className:m.videoContainer,onClick:this.onPlayerClicked},l.createElement(s.a,{className:m.closeButtonIcon,iconProps:{iconName:"ChromeClose"},onClick:this.onDismissVideoPlayer}),l.createElement("div",{ref:this.setAndResizeVideoPlayerContent})))},t.prototype.onPlayerClicked=function(e){e.stopPropagation()},t=Object(r.__decorate)([u.observer],t)}(l.Component),f=null;var p=n(6323),v=n(16);n.d(t,"b",function(){return w}),n.d(t,"c",function(){return C}),n.d(t,"a",function(){return P}),n.d(t,"d",function(){return E});var b=n(5675),g=n(297),y="rehydrate";function w(e,t,n){var r={type:i.a.VideoPreview,description:e.Description,title:e.Title,url:e.Url,thumbnailImageUrl:e.ImageUrl,anchor:t,videoUrl:e.Url,videoPlayer:e.EmbeddedHtml,motionThumbnail:e.MotionThumbnailUrl};return Object(i.c)(o.h,r),Object(a.a)(r,n),r}function C(e){return Object(r.__awaiter)(this,void 0,void 0,function(){var t;return Object(r.__generator)(this,function(n){switch(n.label){case 0:return[4,Object(a.c)(e)];case 1:return(t=n.sent()).type=i.a.VideoPreview,t.videoUrl=t.url,t.videoPlayer=null,t.motionThumbnail=null,t.playVideoButtonContainer=null,t.thumbnailImageContainer&&(t.thumbnailImageContainer.style.position="relative"),[2,Object(p.a)(t.videoUrl,y).then(function(e){return e.LinkPreview.__type==o.b&&(t.videoPlayer=e.LinkPreview.EmbeddedHtml),t})]}})})}function P(e){var t=document.createElement("span");t.className=g([b.playButtonIcon,Object(v.getIconClassName)("Play")]),e.playVideoButtonContainer=document.createElement("div"),e.playVideoButtonContainer.className=b.playButtonContainer,e.playVideoButtonContainer.appendChild(t),e.thumbnailImageContainer.onclick=function(t){var n;return t.stopPropagation(),e.videoPlayer&&(n=e.videoPlayer,f||((f=document.createElement("div")).id="BingVideoPlayer",document.body.appendChild(f)),c.render(l.createElement(h,{videoPlayerHtml:n,onClose:function(){c.unmountComponentAtNode(f)}}),f)),!1},e.thumbnailImageContainer.appendChild(document.createComment(o.d)),e.thumbnailImageContainer.appendChild(e.playVideoButtonContainer),e.thumbnailImageContainer.appendChild(document.createComment(o.c))}function E(e,t){Object(a.d)(e,t)}},5675:function(e,t,n){var r=n(7519),i=n(44);"string"==typeof r&&(r=[[e.i,r]]);for(var o=0;o<r.length;o++)i.loadStyles(r[o][1],!1);r.locals&&(e.exports=r.locals)},5676:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(129),i=n(5677);t.default=function(e,t){return void 0===e.getLinkPreviewRequest||e.getLinkPreviewRequest.__type||(e.getLinkPreviewRequest=i.default(e.getLinkPreviewRequest)),r.makeServiceRequest("GetLinkPreview",e,t)}},5677:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"GetLinkPreviewRequest:#Exchange"},e)}},6322:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return l});var r,i=n(3588),o=n(4807),a=n(4191);function l(e,t){if(e)switch(e.type){case i.a.WebpagePreview:return Object(a.d)(e,t);case i.a.VideoPreview:return Object(o.d)(e,t)}}!function(e){e[e.Standard=0]="Standard",e[e.Compact=1]="Compact",e[e.Default=2]="Default"}(r||(r={}))},6323:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(0),i=n(5676),o=n.n(i);function a(e,t){return Object(r.__awaiter)(this,void 0,void 0,function(){var n;return Object(r.__generator)(this,function(r){return n=function(e,t){return{Url:e,Id:t}}(e,t),[2,o()({getLinkPreviewRequest:n})]})})}},7516:function(e){e.exports={a:"mya"}},7517:function(e,t,n){var r=n(7518),i=n(44);"string"==typeof r&&(r=[[e.i,r]]);for(var o=0;o<r.length;o++)i.loadStyles(r[o][1],!1);r.locals&&(e.exports=r.locals)},7518:function(e,t,n){(t=e.exports=n(43)(!1)).push([e.i,'._2G1t7TsffMpTdsxcutbAaz{position:absolute;width:32px;height:32px;top:4px;cursor:pointer;pointer-events:all}html[dir] ._2G1t7TsffMpTdsxcutbAaz{text-align:center}html[dir=ltr] ._2G1t7TsffMpTdsxcutbAaz{right:4px}html[dir=rtl] ._2G1t7TsffMpTdsxcutbAaz{left:4px}._2G1t7TsffMpTdsxcutbAaz:hover ._17cZVF34hdKub7ce2cOnAW{color:"[theme:neutralPrimary, default:#333333]"}._17cZVF34hdKub7ce2cOnAW{font-size:17px;font-weight:300;color:"[theme:neutralSecondary, default:#666666]";position:relative;display:block;line-height:32px;pointer-events:none}html[dir] ._17cZVF34hdKub7ce2cOnAW{margin:auto}',""]),t.locals={closeButtonContainer:"_2G1t7TsffMpTdsxcutbAaz",icon:"_17cZVF34hdKub7ce2cOnAW"}},7519:function(e,t,n){(t=e.exports=n(43)(!1)).push([e.i,'.A2S5YFyxbb6bJVzndk8Nx{position:relative;display:block;color:"[theme:white, default:#ffffff]";line-height:30px;font-size:24px;pointer-events:none}html[dir] .A2S5YFyxbb6bJVzndk8Nx{margin:auto;text-align:center}.A2S5YFyxbb6bJVzndk8Nx:hover{color:"[theme:neutralSecondary, default:#666666]"}.jmB2bBZZdRmb2Uqcoc-VE{position:absolute;top:0;bottom:0;width:30px;height:30px;cursor:pointer}html[dir] .jmB2bBZZdRmb2Uqcoc-VE{margin:auto;border-radius:50%;border-color:"[theme:white, default:#ffffff]";border-width:2px;border-style:solid}html[dir=ltr] .jmB2bBZZdRmb2Uqcoc-VE,html[dir=rtl] .jmB2bBZZdRmb2Uqcoc-VE{right:0;left:0}.jmB2bBZZdRmb2Uqcoc-VE:hover{color:"[theme:neutralSecondary, default:#666666]"}html[dir] .jmB2bBZZdRmb2Uqcoc-VE:hover{background-color:"[theme:blackTranslucent40, default:rgba(0, 0, 0, .4)]"}._23lC86I4ZY7S0mZ0vxfEjR{position:absolute;top:0;width:100%;height:100%}html[dir] ._23lC86I4ZY7S0mZ0vxfEjR{background-color:"[theme:blackTranslucent40, default:rgba(0, 0, 0, .4)]"}html[dir=ltr] ._23lC86I4ZY7S0mZ0vxfEjR{left:0}html[dir=rtl] ._23lC86I4ZY7S0mZ0vxfEjR{right:0}._2WkuJE1WDGpXPnmMF6N5Om{position:absolute;top:0;bottom:0;width:800px;height:530px}html[dir] ._2WkuJE1WDGpXPnmMF6N5Om{margin:auto;background-color:"[theme:black, default:#000000]"}html[dir=ltr] ._2WkuJE1WDGpXPnmMF6N5Om,html[dir=rtl] ._2WkuJE1WDGpXPnmMF6N5Om{right:0;left:0}._10gfNYx87CSaS0i-Aas05b{position:absolute;top:10px;color:"[theme:neutralQuaternary, default:#d0d0d0]"}html[dir=ltr] ._10gfNYx87CSaS0i-Aas05b{right:10px}html[dir=rtl] ._10gfNYx87CSaS0i-Aas05b{left:10px}._10gfNYx87CSaS0i-Aas05b:hover{color:"[theme:neutralTertiary, default:#a6a6a6]"}',""]),t.locals={playButtonIcon:"A2S5YFyxbb6bJVzndk8Nx",playButtonContainer:"jmB2bBZZdRmb2Uqcoc-VE",videoPlayerBackground:"_23lC86I4ZY7S0mZ0vxfEjR",videoContainer:"_2WkuJE1WDGpXPnmMF6N5Om",closeButtonIcon:"_10gfNYx87CSaS0i-Aas05b"}},7520:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(0),i=n(3758),o=n(4191),a=n(4807),l=n(6323),c=n(62),u=n(3412);function d(e,t){return Object(r.__awaiter)(this,void 0,void 0,function(){var n,d;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return n=null,0!==e.id.indexOf(i.f)&&0!==e.id.indexOf(i.u)?[3,1]:[3,3];case 1:return Object(u.b)(e.href)?[2,n]:(e.id&&e.id.length>0?e.id=i.f+e.id:e.id=i.f+i.w(),[4,Object(l.a)(e.href,e.id)]);case 2:(d=r.sent())?n=function(e,t,n){if(e.Error)c.d.info("GetLinkPreview returned error response: "+e.Error);else if(!e.IsDisabled)return function(e,t,n){if(e)switch(e.__type){case i.a:return Object(o.b)(e,t,n);case i.b:return Object(a.b)(e,t,n)}return null}(e.LinkPreview,t,n);return null}(d,e,t):c.d.error("No response for getLinkPreview request with id: "+e.id),r.label=3;case 3:return[2,n]}})})}},7521:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(0),i=n(3758),o=n(4191),a=n(4807);function l(e){return Object(r.__awaiter)(this,void 0,void 0,function(){return Object(r.__generator)(this,function(t){if(0===e.id.indexOf(i.g))switch(n=e.id,r=n.split("_"),r&&r.length>1&&0===r[1].indexOf(i.i)?i.i:0===r[1].indexOf(i.h)?i.h:null){case i.i:return[2,Object(o.c)(e)];case i.h:return[2,Object(a.c)(e)]}var n,r;return[2,Promise.reject("div did not match a known link preview type")]})})}}}]);
//# sourceMappingURL=owa.LinkPreview.js.map
self.scriptsLoaded['owa.LinkPreview.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.LinkPreview.js'] = (new Date()).getTime();