self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailHotKeys.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[341],{2093:function(t){t.exports={a:"Ana"}},2271:function(t,e,a){"use strict";a.d(e,"a",function(){return p}),a.d(e,"b",function(){return b});var o=a(0),c=a(3102),i=a(2760),r=a(2093),l=a(5),n=a(65),s=a(1053),h=a(25),m="writeEmail",g="emailList",d="readEmail",y="goTo",f="emailActions";function p(){return[{category:m,displayName:Object(l.a)(i.T)},{category:g,displayName:Object(l.a)(i.h)},{category:d,displayName:Object(l.a)(i.J)},{category:y,displayName:Object(l.a)(i.q)},{category:f,displayName:Object(l.a)(i.g)}]}function b(){var t={};return Object(n.f)("cmp-quickSwitcher")&&(t.goToQuickSwitcher={category:y,description:Object(l.a)(i.u),hotmail:"ctrl+shift+k",yahoo:"ctrl+shift+k",gmail:"ctrl+shift+k",owa:"ctrl+shift+k"}),Object(o.__assign)({newMail:{category:m,description:Object(l.a)(i.D),hotmail:["n"],yahoo:"n",gmail:"c",owa:["n"]},sendMail:{category:m,description:Object(l.a)(i.O),hotmail:Object(h.i)()?["ctrl+enter"]:["ctrl+enter","alt+s"],yahoo:"alt+s",gmail:"ctrl+enter",owa:Object(h.i)()?["ctrl+enter"]:["ctrl+enter","alt+s"]},reply:{category:m,description:Object(l.a)(i.L),hotmail:"r",yahoo:"r",gmail:"r",owa:["r","ctrl+r"]},replyAll:{category:m,description:Object(l.a)(i.K),hotmail:["a","shift+r"],yahoo:"a",gmail:"a",owa:["shift+r","ctrl+shift+r"]},forward:{category:m,description:Object(l.a)(i.n),hotmail:"shift+f",yahoo:"f",gmail:"f",owa:["shift+f","ctrl+shift+f"]},saveDraft:{category:m,description:Object(l.a)(i.M),hotmail:"ctrl+s",yahoo:"ctrl+s",gmail:"ctrl+s",owa:"ctrl+s"},discardDraft:{category:m,description:Object(l.a)(i.f),hotmail:"esc",owa:"esc"},gotoMail:{category:y,description:Object(l.a)(i.s),hotmail:"ctrl+shift+1",yahoo:"ctrl+shift+1",gmail:"ctrl+shift+1",owa:"ctrl+shift+1"},gotoCalendar:{category:y,description:Object(l.a)(i.o),hotmail:"ctrl+shift+2",yahoo:"ctrl+shift+2",gmail:"ctrl+shift+2",owa:"ctrl+shift+2"},gotoPeople:{category:y,description:Object(l.a)(i.t),hotmail:"ctrl+shift+3",yahoo:"ctrl+shift+3",gmail:"ctrl+shift+3",owa:"ctrl+shift+3"},goToToDo:{category:y,description:Object(s.a)()?Object(l.a)(i.x):Object(l.a)(i.w),hotmail:"ctrl+shift+4",yahoo:"ctrl+shift+4",gmail:"ctrl+shift+4",owa:"ctrl+shift+4"},gotoInbox:{category:y,description:Object(l.a)(i.r),hotmail:"g i",yahoo:"m",gmail:"g i",owa:"g i"},gotoDrafts:{category:y,description:Object(l.a)(i.p),hotmail:"g d",gmail:"g d",owa:"g d"},gotoSent:{category:y,description:Object(l.a)(i.v),hotmail:"g s",gmail:"g t",owa:"g s"},gotoSearch:{category:y,description:Object(l.a)(i.N),hotmail:"/",yahoo:"s",gmail:"/",owa:"alt+q"},undoAction:{category:f,description:Object(l.a)(i.S),hotmail:"ctrl+z",yahoo:"ctrl+z",gmail:"ctrl+z",owa:"ctrl+z"},selectUnselectMessage:{category:g,description:Object(l.a)(i.R),hotmail:"ctrl+space",yahoo:"ctrl+space",gmail:["x","ctrl+x"],owa:"ctrl+space"},selectAll:{category:g,description:Object(l.a)(c.a),hotmail:"ctrl+a",yahoo:"ctrl+a",gmail:"ctrl+a",owa:"ctrl+a"},deselectAll:{category:g,description:Object(l.a)(i.c),hotmail:"esc",yahoo:"esc",gmail:"esc",owa:"esc"},home:{category:g,description:Object(l.a)(i.y),hotmail:["home","ctrl+home"],yahoo:["home","ctrl+home"],gmail:["home","ctrl+home"],owa:["home","ctrl+home"]},end:{category:g,description:Object(l.a)(i.i),hotmail:["end","ctrl+end"],yahoo:["end","ctrl+end"],gmail:["end","ctrl+end"],owa:["end","ctrl+end"]},deleteMail:{category:f,description:Object(l.a)(i.e),hotmail:"del",yahoo:"del",gmail:"#",owa:"del"},openMail:{category:d,description:Object(l.a)(i.F),hotmail:["o","enter"],gmail:["o","enter"],owa:["o","enter"]},openMailInPopout:{category:d,description:Object(l.a)(i.G),hotmail:"shift+enter",gmail:"shift+enter",owa:"shift+enter",yahoo:"shift+enter"},closeMail:{category:d,description:Object(l.a)(i.d),hotmail:"esc",yahoo:"esc",gmail:"u",owa:"esc"},openNextItem:{category:d,description:Object(l.a)(i.H),hotmail:"ctrl+.",yahoo:"ctrl+.",gmail:"j",owa:"ctrl+."},openPrevItem:{category:d,description:Object(l.a)(i.I),hotmail:"ctrl+,",yahoo:"ctrl+,",gmail:"k",owa:"ctrl+,"},focusNextItemPart:{category:d,description:Object(l.a)(i.l),hotmail:".",gmail:"n",owa:"."},focusPrevItemPart:{category:d,description:Object(l.a)(i.m),hotmail:",",gmail:"p",owa:","},expandCollapseAll:{category:d,description:Object(l.a)(i.j),hotmail:"x",owa:"x"},softDeleteMail:{category:f,description:Object(l.a)(i.Q),hotmail:"shift+del",yahoo:"shift+del",gmail:"shift+del",owa:"shift+del"},newFolder:{category:f,description:Object(l.a)(i.E),hotmail:"shift+e",yahoo:"ctrl+shift+e",owa:"shift+e"},markAsRead:{category:f,description:Object(l.a)(i.B),hotmail:"q",yahoo:"k",gmail:"shift+i",owa:Object(h.i)()?"q":["q","ctrl+q"]},markAsUnread:{category:f,description:Object(l.a)(i.C),hotmail:"u",yahoo:"shift+k",gmail:"shift+u",owa:["u","ctrl+u"]},toggleFlag:{category:f,description:Object(l.a)(i.k),hotmail:"ins",yahoo:"l",gmail:"s",owa:"ins"},archiveMail:{category:f,description:Object(l.a)(i.a),hotmail:"e",gmail:"e",owa:"e"},markAsJunk:{category:f,description:Object(l.a)(i.A),hotmail:"j",gmail:"shift+1",owa:"j"},moveToFolder:{category:f,description:Object(l.a)(r.a),hotmail:"v",gmail:"v",owa:"v"},categorize:{category:f,description:Object(l.a)(i.b),hotmail:"c",gmail:"l",owa:"c"},insertHyperlink:{category:m,description:Object(l.a)(i.z),hotmail:"ctrl+k",gmail:"ctrl+k",owa:"ctrl+k"},keyboardShortcuts:{category:y,description:Object(l.a)(i.P),hotmail:"?",gmail:"?",owa:"?",yahoo:"?"}},t)}},2760:function(t){t.exports={T:"pec",h:"qec",J:"rec",q:"sec",g:"tec",u:"uec",D:"vec",O:"wec",L:"xec",K:"yec",n:"zec",M:"Aec",f:"Bec",s:"Cec",o:"Dec",t:"Eec",w:"Fec",x:"Gec",r:"Hec",p:"Iec",v:"Jec",N:"Kec",S:"Lec",c:"Mec",y:"Nec",i:"Oec",e:"Pec",F:"Qec",G:"Rec",d:"Sec",H:"Tec",I:"Uec",l:"Vec",m:"Wec",j:"Xec",Q:"Yec",E:"Zec",B:"_ec",C:"$ec",k:"afc",a:"bfc",A:"cfc",b:"dfc",z:"efc",P:"ffc",R:"gfc"}},3102:function(t){t.exports={a:"hfc"}},4303:function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return r});var o=a(52),c=new o.c(function(){return Promise.all([a.e(593),a.e(290)]).then(a.bind(null,6483))}),i=Object(o.d)(c,function(t){return t.HotkeysMap}),r=new o.a(c,function(t){return t.setIsHotkeysMapVisible})},9337:function(t,e,a){"use strict";a.r(e);var o=a(2271),c=a(888),i=a(1237);function r(){return[{command:Object(o.b)().undoAction,handler:l}]}function l(){Object(c.h)()||i.e.importAndExecute("Keyboard")}var n=a(1),s=a(4303),h=a(65),m=a(1127);function g(){var t=Object(o.b)(),e=[];return Object.keys(t).map(function(a){("focusNextItemPart"!=a&&"focusPrevItemPart"!=a||Object(h.f)("rp-selectionUI"))&&e.push(t[a])}),n.createElement(s.a,{commandCategories:Object(o.a)(),goToOptions:d,hotkeyCommands:e})}function d(){m.e.importAndExecute("general","accessibility")}a.d(e,"setupUndoHotKeys",function(){return r}),a.d(e,"MailHotkeysMap",function(){return g})}},0,[0,1,2,578,189,7,379,4,12,37,127]]);
//# sourceMappingURL=owa.MailHotKeys.js.map
self.scriptsLoaded['owa.MailHotKeys.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailHotKeys.js'] = (new Date()).getTime();