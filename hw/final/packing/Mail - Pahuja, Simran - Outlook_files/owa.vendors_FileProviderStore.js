self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.vendors~FileProviderStore.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[589],{1015:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"FolderResponseShape:#Exchange"},e)}},1054:function(e,t,r){var n=r(1270),o=36e5,u=6e4,a=2,i=/[T ]/,s=/:/,c=/^(\d{2})$/,l=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],d=/^(\d{4})/,f=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],_=/^-(\d{2})$/,p=/^-?(\d{3})$/,v=/^-?(\d{2})-?(\d{2})$/,g=/^-?W(\d{2})$/,y=/^-?W(\d{2})-?(\d{1})$/,h=/^(\d{2}([.,]\d*)?)$/,b=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,m=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,x=/([Z+-].*)$/,C=/^(Z)$/,k=/^([+-])(\d{2})$/,P=/^([+-])(\d{2}):?(\d{2})$/;function O(e,t,r){t=t||0,r=r||0;var n=new Date(0);n.setUTCFullYear(e,0,4);var o=7*t+r+1-(n.getUTCDay()||7);return n.setUTCDate(n.getUTCDate()+o),n}e.exports=function(e,t){if(n(e))return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var r=(t||{}).additionalDigits;r=null==r?a:Number(r);var M=function(e){var t,r={},n=e.split(i);if(s.test(n[0])?(r.date=null,t=n[0]):(r.date=n[0],t=n[1]),t){var o=x.exec(t);o?(r.time=t.replace(o[1],""),r.timezone=o[1]):r.time=t}return r}(e),j=function(e,t){var r,n=l[t],o=f[t];if(r=d.exec(e)||o.exec(e)){var u=r[1];return{year:parseInt(u,10),restDateString:e.slice(u.length)}}if(r=c.exec(e)||n.exec(e)){var a=r[1];return{year:100*parseInt(a,10),restDateString:e.slice(a.length)}}return{year:null}}(M.date,r),B=j.year,S=function(e,t){if(null===t)return null;var r,n,o,u;if(0===e.length)return(n=new Date(0)).setUTCFullYear(t),n;if(r=_.exec(e))return n=new Date(0),o=parseInt(r[1],10)-1,n.setUTCFullYear(t,o),n;if(r=p.exec(e)){n=new Date(0);var a=parseInt(r[1],10);return n.setUTCFullYear(t,0,a),n}if(r=v.exec(e)){n=new Date(0),o=parseInt(r[1],10)-1;var i=parseInt(r[2],10);return n.setUTCFullYear(t,o,i),n}if(r=g.exec(e))return u=parseInt(r[1],10)-1,O(t,u);if(r=y.exec(e)){u=parseInt(r[1],10)-1;var s=parseInt(r[2],10)-1;return O(t,u,s)}return null}(j.restDateString,B);if(S){var T,E=S.getTime(),D=0;return M.time&&(D=function(e){var t,r,n;if(t=h.exec(e))return(r=parseFloat(t[1].replace(",",".")))%24*o;if(t=b.exec(e))return r=parseInt(t[1],10),n=parseFloat(t[2].replace(",",".")),r%24*o+n*u;if(t=m.exec(e)){r=parseInt(t[1],10),n=parseInt(t[2],10);var a=parseFloat(t[3].replace(",","."));return r%24*o+n*u+1e3*a}return null}(M.time)),M.timezone?(R=M.timezone,T=(q=C.exec(R))?0:(q=k.exec(R))?(w=60*parseInt(q[2],10),"+"===q[1]?-w:w):(q=P.exec(R))?(w=60*parseInt(q[2],10)+parseInt(q[3],10),"+"===q[1]?-w:w):0):(T=new Date(E+D).getTimezoneOffset(),T=new Date(E+D+T*u).getTimezoneOffset()),new Date(E+D+T*u)}var R,q,w;return new Date(e)}},1079:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"CreateFolderRequest:#Exchange"},e)}},1080:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(129),o=r(1186);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("CreateFolder",e,t)}},1114:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"SetFolderField:#Exchange"},e)}},1128:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"UpdateFolderRequest:#Exchange"},e)}},1129:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(129),o=r(1267);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("UpdateFolder",e,t)}},1186:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"CreateFolderJsonRequest:#Exchange"},e)}},11918:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(129),o=r(8840);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("RemoveAttachmentDataProvider",e,t)}},11920:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(129),o=r(8841);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("GetAllAttachmentDataProviders",e,t)}},1251:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"And:#Exchange"},e)}},1265:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"IsLessThanOrEqualTo:#Exchange"},e)}},1266:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(129);t.default=function(e,t){return n.makeServiceRequest("AddSharedFolders",e,t)}},1267:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"UpdateFolderJsonRequest:#Exchange"},e)}},1268:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"FindFolderJsonRequest:#Exchange"},e)}},1270:function(e,t){e.exports=function(e){return e instanceof Date}},1300:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"FindItemRequest:#Exchange"},e)}},1301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(129),o=r(1405);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("FindItem",e,t)}},1370:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"StartSearchSessionJsonRequest:#Exchange"},e)}},1371:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"EndSearchSessionJsonRequest:#Exchange"},e)}},1383:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"GetAccessTokenForDataProviderRequest:#Exchange"},e)}},1400:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"IsGreaterThanOrEqualTo:#Exchange"},e)}},1405:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"FindItemJsonRequest:#Exchange"},e)}},1457:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"DynamicRefinerQueryType:#Exchange"},e)}},1458:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"PrimaryMailboxSearchScopeType:#Exchange"},e)}},1459:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"SingleLargeArchiveSearchScopeType:#Exchange"},e)}},1460:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"SearchFolderScopeType:#Exchange"},e)}},1461:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"SingleGroupSearchScopeType:#Exchange"},e)}},1462:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"ExecuteSearchJsonRequest:#Exchange"},e)}},1463:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"ExecuteSearchRequest:#Exchange"},e)}},1464:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"StartSearchSessionRequest:#Exchange"},e)}},1465:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(129),o=r(1370);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("StartSearchSession",e,t)}},1466:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"EndSearchSessionRequest:#Exchange"},e)}},1467:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(129),o=r(1371);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("EndSearchSession",e,t)}},1587:function(e,t,r){var n=r(1054);e.exports=function(e,t){var r=n(e).getTime(),o=Number(t);return new Date(r+o)}},161:function(e,t,r){"use strict";function n(){var e=Object.create(null),t=0,r=0,n=0,o=!1;function u(t){n--,delete e[t]}this.put=function(t,r,o,a){if(void 0!==o&&("number"!=typeof o||isNaN(o)||o<=0))throw new Error("Cache timeout must be a positive number");if(void 0!==a&&"function"!=typeof a)throw new Error("Cache timeout callback must be a function");var i=e[t];i?clearTimeout(i.timeout):n++;var s={value:r,expire:o+Date.now()};return isNaN(s.expire)||(s.timeout=setTimeout(function(){u(t),a&&a(t,r)}.bind(this),o)),e[t]=s,r},this.del=function(t){var r=!0,n=e[t];return n?(clearTimeout(n.timeout),!isNaN(n.expire)&&n.expire<Date.now()&&(r=!1)):r=!1,r&&u(t),r},this.clear=function(){for(var u in e)clearTimeout(e[u].timeout);n=0,e=Object.create(null),o&&(t=0,r=0)},this.get=function(u){var a=e[u];if(void 0!==a){if(isNaN(a.expire)||a.expire>=Date.now())return o&&t++,a.value;o&&r++,n--,delete e[u]}else o&&r++;return null},this.size=function(){return n},this.memsize=function(){var t,r=0;for(t in e)r++;return r},this.debug=function(e){o=e},this.hits=function(){return t},this.misses=function(){return r},this.keys=function(){return Object.keys(e)},this.exportJson=function(){var t={};for(var r in e){var n=e[r];t[r]={value:n.value,expire:n.expire||"NaN"}}return JSON.stringify(t)},this.importJson=function(t,r){var n=JSON.parse(t),o=Date.now(),u=r&&r.skipDuplicates;for(var a in n)if(n.hasOwnProperty(a)){if(u)if(e[a])continue;var i=n[a],s=i.expire-o;if(s<=0){this.del(a);continue}s=s>0?s:void 0,this.put(a,i.value,s)}return this.size()}}e.exports=new n,e.exports.Cache=n},197:function(e,t,r){"use strict";r.d(t,"b",function(){return u}),r.d(t,"a",function(){return a});var n=r(16),o=r(306);function u(e){var t,r,o,u,a,i=e.semanticColors,s=e.palette,c=i.buttonBackground,l=i.buttonBackgroundPressed,d=i.buttonBackgroundHovered,f=i.buttonText,_=i.buttonTextHovered,p=i.buttonTextChecked,v=i.buttonTextCheckedHovered;return{root:{backgroundColor:c,color:f},rootHovered:{backgroundColor:d,color:_,selectors:(t={},t[n.HighContrastSelector]={borderColor:"Highlight",color:"Highlight"},t)},rootPressed:{backgroundColor:l,color:p},rootExpanded:{backgroundColor:l,color:p},rootChecked:{backgroundColor:l,color:p},rootCheckedHovered:{backgroundColor:l,color:v},rootDisabled:{selectors:(r={},r[n.HighContrastSelector]={color:"GrayText",borderColor:"GrayText",backgroundColor:"Window"},r)},splitButtonContainer:{selectors:(o={},o[n.HighContrastSelector]={border:"none"},o)},splitButtonMenuButton:{color:s.white,backgroundColor:"transparent",selectors:{":hover":{backgroundColor:s.neutralLight,selectors:(u={},u[n.HighContrastSelector]={color:"Highlight"},u)}}},splitButtonMenuButtonDisabled:{backgroundColor:i.buttonBackgroundDisabled,selectors:{":hover":{backgroundColor:i.buttonBackgroundDisabled}}},splitButtonDivider:{backgroundColor:s.neutralTertiaryAlt,position:"absolute",width:1,right:31,top:8,bottom:8,selectors:(a={},a[n.HighContrastSelector]={backgroundColor:"WindowText"},a)},splitButtonDividerDisabled:{backgroundColor:e.palette.neutralTertiaryAlt},splitButtonMenuButtonChecked:{backgroundColor:s.neutralQuaternaryAlt,selectors:{":hover":{backgroundColor:s.neutralQuaternaryAlt}}},splitButtonMenuButtonExpanded:{backgroundColor:s.neutralQuaternaryAlt,selectors:{":hover":{backgroundColor:s.neutralQuaternaryAlt}}},splitButtonMenuIcon:{color:i.buttonText},splitButtonMenuIconDisabled:{color:i.buttonTextDisabled}}}function a(e){var t,r,u,a,i,s,c,l,d,f=e.palette,_=e.semanticColors;return{root:{backgroundColor:_.primaryButtonBackground,color:_.primaryButtonText,border:"none",selectors:(t={},t[n.HighContrastSelector]={color:"Window",backgroundColor:"WindowText",MsHighContrastAdjust:"none"},t["."+o.a+" &:focus"]={selectors:{":after":{border:"none",outlineColor:f.white}}},t)},rootHovered:{backgroundColor:_.primaryButtonBackgroundHovered,color:_.primaryButtonTextHovered,selectors:(r={},r[n.HighContrastSelector]={color:"Window",backgroundColor:"Highlight"},r)},rootPressed:{backgroundColor:_.primaryButtonBackgroundPressed,color:_.primaryButtonTextPressed,selectors:(u={},u[n.HighContrastSelector]={color:"Window",backgroundColor:"WindowText",MsHighContrastAdjust:"none"},u)},rootExpanded:{backgroundColor:_.primaryButtonBackgroundPressed,color:_.primaryButtonTextPressed},rootChecked:{backgroundColor:_.primaryButtonBackgroundPressed,color:_.primaryButtonTextPressed},rootCheckedHovered:{backgroundColor:_.primaryButtonBackgroundPressed,color:_.primaryButtonTextPressed},rootDisabled:{selectors:(a={},a[n.HighContrastSelector]={color:"GrayText",borderColor:"GrayText",backgroundColor:"Window"},a)},splitButtonContainer:{selectors:(i={},i[n.HighContrastSelector]={border:"none"},i)},splitButtonDivider:{backgroundColor:f.neutralTertiaryAlt,position:"absolute",width:1,right:31,top:8,bottom:8,selectors:(s={},s[n.HighContrastSelector]={backgroundColor:"Window"},s)},splitButtonMenuButton:{backgroundColor:_.primaryButtonBackground,color:_.primaryButtonText,selectors:(c={},c[n.HighContrastSelector]={backgroundColor:"WindowText"},c[":hover"]={backgroundColor:_.primaryButtonBackgroundHovered,selectors:(l={},l[n.HighContrastSelector]={color:"Highlight"},l)},c)},splitButtonMenuButtonDisabled:{backgroundColor:_.primaryButtonBackgroundDisabled,selectors:{":hover":{backgroundColor:_.primaryButtonBackgroundDisabled}}},splitButtonMenuButtonChecked:{backgroundColor:_.primaryButtonBackgroundPressed,selectors:{":hover":{backgroundColor:_.primaryButtonBackgroundPressed}}},splitButtonMenuButtonExpanded:{backgroundColor:_.primaryButtonBackgroundPressed,selectors:{":hover":{backgroundColor:_.primaryButtonBackgroundPressed}}},splitButtonMenuIcon:{color:_.primaryButtonText},splitButtonMenuIconDisabled:{color:f.neutralTertiary,selectors:(d={},d[n.HighContrastSelector]={color:"GrayText"},d)}}}},2038:function(e,t,r){var n=r(1587),o=6e4;e.exports=function(e,t){var r=Number(t);return n(e,r*o)}},2039:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(129),o=r(1383);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("GetAccessTokenforDataProvider",e,t)}},254:function(e,t,r){"use strict";var n=r(0),o=r(1),u=r(163),a=r(156),i=r(464),s=r(16),c=r(159),l=r(162),d=r(193),f=r(197),_=Object(c.b)(function(e,t,r){var n=Object(l.a)(e),o=Object(d.a)(e),u={root:{minWidth:"80px",height:"32px"},label:{fontWeight:s.FontWeights.semibold}};return Object(s.concatStyleSets)(n,u,r?Object(f.a)(e):Object(f.b)(e),o,t)});r.d(t,"a",function(){return p});var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._skipComponentRefResolution=!0,t}return n.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.primary,r=void 0!==t&&t,i=e.styles,s=e.theme;return o.createElement(u.a,n.__assign({},this.props,{variantClassName:r?"ms-Button--primary":"ms-Button--default",styles:_(s,i,r),onRenderDescription:a.b}))},t=n.__decorate([Object(i.a)("DefaultButton",["theme","styles"],!0)],t)}(a.a)},298:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"TokenRequest:#Exchange"},e)}},339:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(129),o=r(298);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("GetAccessTokenforResource",e,t)}},3546:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"AttachmentItemsPagingDetails:#Exchange"},e)}},3547:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"SearchAttachmentDataProviderItemsRequest:#Exchange"},e)}},4516:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"AttachmentItemsSort:#Exchange"},e)}},4517:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(129),o=r(3547);t.default=function(e,t){return void 0===e.request||e.request.__type||(e.request=o.default(e.request)),n.makeServiceRequest("SearchAttachmentDataProviderItems",e,t)}},4518:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"AttachmentThumbnailInfo:#Exchange"},e)}},4519:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"OneDriveProScope:#Exchange"},e)}},4520:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(129),o=r(4521);t.default=function(e,t){return void 0===e.request||e.request.__type||(e.request=o.default(e.request)),n.makeServiceRequest("GetAttachmentDataProviderItems",e,t)}},4521:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"GetAttachmentDataProviderItemsRequest:#Exchange"},e)}},743:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"PropertyUri:#Exchange"},e)}},825:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"IndexedPageView:#Exchange"},e)}},842:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"ItemResponseShape:#Exchange"},e)}},8840:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"RemoveAttachmentDataProviderRequest:#Exchange"},e)}},8841:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"GetAttachmentDataProvidersRequest:#Exchange"},e)}},931:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"Folder:#Exchange"},e)}},967:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"Constant:#Exchange"},e)}},968:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"FieldURIOrConstantType:#Exchange"},e)}},969:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"RestrictionType:#Exchange"},e)}},981:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(129),o=r(1268);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("FindFolder",e,t)}},982:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"FindFolderRequest:#Exchange"},e)}},991:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"UnifiedGroupIdentity:#Exchange"},e)}}}]);
//# sourceMappingURL=owa.vendors~FileProviderStore.js.map
self.scriptsLoaded['owa.vendors~FileProviderStore.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.vendors~FileProviderStore.js'] = (new Date()).getTime();