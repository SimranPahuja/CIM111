self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.AllowedOptions.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[119],{12599:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(129),o=n(12600);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),r.makeServiceRequest("GetAllowedOptions",e,t)}},12600:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"GetAllowedOptionsRequest:#Exchange"},e)}},14262:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(4),i=n(3361),u=Object(o.mutatorAction)("SET_ALLOWED_OPTIONS",function(e){Object(i.a)().allowedOptions=e}),a=n(12599),c=n.n(a),d=n(874);var s=n(245),l=void 0;function f(){return Object(r.__awaiter)(this,void 0,void 0,function(){return Object(r.__generator)(this,function(e){switch(e.label){case 0:return Object(s.a)()?[3,2]:(l||(l=c()({Header:Object(d.getJsonRequestHeader)()}).then(function(e){return u(e.AllowedOptions)})),[4,l]);case 1:e.sent(),e.label=2;case 2:return[2]}})})}n.d(t,"loadAllowedOptions",function(){return f})},874:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(477),o=n(478),i=n(475),u=n(468);t.getJsonRequestHeader=function(e){return r.default({RequestServerVersion:"Exchange2015",TimeZoneContext:o.default({TimeZoneDefinition:i.default({Id:null!=e?e:"Pacific Standard Time"})})})},t.getExtendedPropertyUri=function(e,t,n){return u.default({PropertySetId:e,PropertyName:t,PropertyType:n})}}}]);
//# sourceMappingURL=owa.AllowedOptions.js.map
self.scriptsLoaded['owa.AllowedOptions.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.AllowedOptions.js'] = (new Date()).getTime();