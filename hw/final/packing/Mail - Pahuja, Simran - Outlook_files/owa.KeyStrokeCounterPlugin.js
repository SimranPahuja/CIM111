self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.KeyStrokeCounterPlugin.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[311],{14280:function(t,e,n){"use strict";n.r(e);var o=n(4),i=Object(o.action)("updateKeyStrokeCounterViewStateAction",function(t,e){return{viewState:t,keyStrokeCount:e}}),r=(Object(o.mutator)(i,function(t){t.viewState.keyStrokeCount=t.keyStrokeCount}),function(){function t(t){this.adapter=t,this.keyStrokeCount=0}return t.prototype.getName=function(){return"KeyStrokeCounter"},t.prototype.initialize=function(t){},t.prototype.dispose=function(){},t.prototype.onPluginEvent=function(t){if(11===t.eventType)this.keyStrokeCount++;else if(7===t.eventType){var e=this.adapter();i(e,this.keyStrokeCount)}},t}());n.d(e,"KeyStrokeCounterPlugin",function(){return r})}}]);
//# sourceMappingURL=owa.KeyStrokeCounterPlugin.js.map
self.scriptsLoaded['owa.KeyStrokeCounterPlugin.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.KeyStrokeCounterPlugin.js'] = (new Date()).getTime();