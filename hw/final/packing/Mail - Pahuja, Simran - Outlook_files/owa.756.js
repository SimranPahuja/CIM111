self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.756.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[756],{14326:function(e,t,o){"use strict";o.r(t);var a=o(0),r=o(2271),c=o(1522),i=o(1753),n=o(731),l=o(2588),s=o(857),d=o(2137),p=o(1056),m=o(893);function b(e){return[{command:Object(r.b)().deleteMail,handler:function(){return function(e){var t=y(e);if(Object(s.e)(t.tableQuery))return;c.D.importAndExecute(t,n.O.expandedConversationViewState.selectedNodeIds,Object(a.__spread)(t.selectedRowKeys.keys()),t.isInVirtualSelectAllMode,!1)}(e.props.tableViewId)}},{command:Object(r.b)().softDeleteMail,handler:function(){return function(e){var t=y(e);if(Object(s.e)(t.tableQuery))return;c.D.importAndExecute(t,n.O.expandedConversationViewState.selectedNodeIds,Object(a.__spread)(t.selectedRowKeys.keys()),t.isInVirtualSelectAllMode,!0)}(e.props.tableViewId)}},{command:Object(r.b)().forward,handler:function(){return t=e.props.tableViewId,o=y(t),void l.d.importAndExecute(o,n.O.expandedConversationViewState.selectedNodeIds,Object(a.__spread)(o.selectedRowKeys.keys()));var t,o}},{command:Object(r.b)().replyAll,handler:function(){return t=e.props.tableViewId,o=y(t),void l.e.importAndExecute(o,n.O.expandedConversationViewState.selectedNodeIds,Object(a.__spread)(o.selectedRowKeys.keys()),!0);var t,o}},{command:Object(r.b)().reply,handler:function(){return function(e){var t=y(e);if(Object(s.e)(t.tableQuery))return;l.e.importAndExecute(t,n.O.expandedConversationViewState.selectedNodeIds,Object(a.__spread)(t.selectedRowKeys.keys()),!1)}(e.props.tableViewId)}},{command:Object(r.b)().toggleFlag,handler:function(){return function(e){var t=y(e);if(Object(s.e)(t.tableQuery))return;c.F.importAndExecute(t,n.O.expandedConversationViewState.selectedNodeIds,Object(a.__spread)(t.selectedRowKeys.keys()))}(e.props.tableViewId)}},{command:Object(r.b)().markAsRead,handler:function(){u(e.props.tableViewId,!0)}},{command:Object(r.b)().markAsUnread,handler:function(){u(e.props.tableViewId,!1)}},{command:Object(r.b)().markAsJunk,handler:function(){return function(e){var t=y(e);if(Object(s.e)(t.tableQuery))return;c.E.importAndExecute(t,n.O.expandedConversationViewState.selectedNodeIds,Object(a.__spread)(t.selectedRowKeys.keys()))}(e.props.tableViewId)}},{command:Object(r.b)().archiveMail,handler:function(){return function(e){var t=y(e);if(Object(s.e)(t.tableQuery))return;c.C.importAndExecute(t,n.O.expandedConversationViewState.selectedNodeIds,Object(a.__spread)(t.selectedRowKeys.keys()))}(e.props.tableViewId)}},{command:Object(r.b)().openMail,handler:function(){return t=e.props.tableViewId,o=y(t),void d.c.importAndExecute(o,n.O.expandedConversationViewState.selectedNodeIds,Object(a.__spread)(o.selectedRowKeys.keys()),p.a.KeyboardEnter);var t,o}},{command:Object(r.b)().openMailInPopout,handler:function(){return t=e.props.tableViewId,o=y(t),void d.c.importAndExecute(o,n.O.expandedConversationViewState.selectedNodeIds,Object(a.__spread)(o.selectedRowKeys.keys()),p.a.KeyboardShiftEnter);var t,o}},{command:Object(r.b)().home,handler:function(){return t=e.props.tableViewId,void((o=y(t)).rowKeys.length>0&&Object(m.r)(o,o.rowKeys[0],!0,p.a.KeyboardHome));var t,o}},{command:Object(r.b)().end,handler:function(){return t=e.props.tableViewId,void((o=y(t)).rowKeys.length>0&&Object(m.r)(o,o.rowKeys[o.rowKeys.length-1],!0,p.a.KeyboardEnd));var t,o}},{command:Object(r.b)().selectAll,handler:function(){return t=e.props.tableViewId,o=y(t),void(Object(n.q)(o)||Object(m.s)(o));var t,o}},{command:Object(r.b)().deselectAll,handler:function(){return t=e.props.tableViewId,o=y(t),void(Object(n.q)(o)?Object(m.s)(o):Object(m.j)(o,p.a.Reset));var t,o}},{command:"down",handler:function(){return t=e.props.tableViewId,void d.b.importAndExecute(n.d.Next,y(t),p.a.KeyboardUpDown,!0);var t},options:{stopPropagation:!1}},{command:"up",handler:function(){return t=e.props.tableViewId,void d.b.importAndExecute(n.d.Previous,y(t),p.a.KeyboardUpDown,!0);var t},options:{stopPropagation:!1}},{command:"ctrl+down",handler:function(){return t=e.props.tableViewId,void d.b.importAndExecute(n.d.Next,y(t),p.a.KeyboardUpDown,!1);var t},options:{stopPropagation:!1}},{command:"ctrl+up",handler:function(){return t=e.props.tableViewId,void d.b.importAndExecute(n.d.Previous,y(t),p.a.KeyboardUpDown,!1);var t},options:{stopPropagation:!1}},{command:"shift+down",handler:function(){h(e.props.tableViewId,n.d.Next,!1)},options:{stopPropagation:!1}},{command:"shift+ctrl+down",handler:function(){h(e.props.tableViewId,n.d.Next,!0)},options:{stopPropagation:!1}},{command:"shift+up",handler:function(){h(e.props.tableViewId,n.d.Previous,!1)},options:{stopPropagation:!1}},{command:"shift+ctrl+up",handler:function(){h(e.props.tableViewId,n.d.Previous,!0)},options:{stopPropagation:!1}},{command:Object(r.b)().selectUnselectMessage,handler:function(){return t=e.props.tableViewId,void d.a.importAndExecute(y(t),p.a.KeyboardCtrlSpace);var t}}]}function h(e,t,o){Object(m.d)(y(e),p.a.KeyboardUpDown,t,o)}function u(e,t){var o=y(e),r=o.isInVirtualSelectAllMode,c=r?[]:Object(a.__spread)(o.selectedRowKeys.keys()),l=r?o.virutalSelectAllExclusionList:[];i.g.importAndExecute(o,n.O.expandedConversationViewState.selectedNodeIds,r,c,l,t)}function y(e){return n.O.tableViews.get(e)}var g=o(5169),f=o(4051),w=o(6660);function O(e){return[{command:Object(r.b)().moveToFolder,handler:function(t){return j(t,e.props.mailListTableProps.tableViewId,g.a.MoveTo)}},{command:Object(r.b)().categorize,handler:function(t){return j(t,e.props.mailListTableProps.tableViewId,g.a.Categorize)}},{command:"left",handler:function(){return Object(m.c)(e.props.mailListItemDataProps.rowKey)}},{command:"right",handler:function(){return function(e,t,o){if(!e||Object(w.a)(t))return;Object(m.r)(n.O.tableViews.get(o),t,!0,p.a.MailListItemTwisty)}(e.props.mailListItemDataProps.shouldShowTwisty,e.props.mailListItemDataProps.rowKey,e.props.mailListTableProps.tableViewId)}}]}function j(e,t,o){var a=n.O.tableViews.get(t);if(!Object(s.e)(a.tableQuery)&&a.selectedRowKeys.size>0){var r=e.currentTarget.getBoundingClientRect();Object(f.b)({x:r.right,y:r.top},o)}}o.d(t,"setupMailListContentKeys",function(){return b}),o.d(t,"setupMailListItemContainerKeys",function(){return O})},2093:function(e){e.exports={a:"Ana"}},2271:function(e,t,o){"use strict";o.d(t,"a",function(){return y}),o.d(t,"b",function(){return g});var a=o(0),r=o(3102),c=o(2760),i=o(2093),n=o(5),l=o(65),s=o(1053),d=o(25),p="writeEmail",m="emailList",b="readEmail",h="goTo",u="emailActions";function y(){return[{category:p,displayName:Object(n.a)(c.T)},{category:m,displayName:Object(n.a)(c.h)},{category:b,displayName:Object(n.a)(c.J)},{category:h,displayName:Object(n.a)(c.q)},{category:u,displayName:Object(n.a)(c.g)}]}function g(){var e={};return Object(l.f)("cmp-quickSwitcher")&&(e.goToQuickSwitcher={category:h,description:Object(n.a)(c.u),hotmail:"ctrl+shift+k",yahoo:"ctrl+shift+k",gmail:"ctrl+shift+k",owa:"ctrl+shift+k"}),Object(a.__assign)({newMail:{category:p,description:Object(n.a)(c.D),hotmail:["n"],yahoo:"n",gmail:"c",owa:["n"]},sendMail:{category:p,description:Object(n.a)(c.O),hotmail:Object(d.i)()?["ctrl+enter"]:["ctrl+enter","alt+s"],yahoo:"alt+s",gmail:"ctrl+enter",owa:Object(d.i)()?["ctrl+enter"]:["ctrl+enter","alt+s"]},reply:{category:p,description:Object(n.a)(c.L),hotmail:"r",yahoo:"r",gmail:"r",owa:["r","ctrl+r"]},replyAll:{category:p,description:Object(n.a)(c.K),hotmail:["a","shift+r"],yahoo:"a",gmail:"a",owa:["shift+r","ctrl+shift+r"]},forward:{category:p,description:Object(n.a)(c.n),hotmail:"shift+f",yahoo:"f",gmail:"f",owa:["shift+f","ctrl+shift+f"]},saveDraft:{category:p,description:Object(n.a)(c.M),hotmail:"ctrl+s",yahoo:"ctrl+s",gmail:"ctrl+s",owa:"ctrl+s"},discardDraft:{category:p,description:Object(n.a)(c.f),hotmail:"esc",owa:"esc"},gotoMail:{category:h,description:Object(n.a)(c.s),hotmail:"ctrl+shift+1",yahoo:"ctrl+shift+1",gmail:"ctrl+shift+1",owa:"ctrl+shift+1"},gotoCalendar:{category:h,description:Object(n.a)(c.o),hotmail:"ctrl+shift+2",yahoo:"ctrl+shift+2",gmail:"ctrl+shift+2",owa:"ctrl+shift+2"},gotoPeople:{category:h,description:Object(n.a)(c.t),hotmail:"ctrl+shift+3",yahoo:"ctrl+shift+3",gmail:"ctrl+shift+3",owa:"ctrl+shift+3"},goToToDo:{category:h,description:Object(s.a)()?Object(n.a)(c.x):Object(n.a)(c.w),hotmail:"ctrl+shift+4",yahoo:"ctrl+shift+4",gmail:"ctrl+shift+4",owa:"ctrl+shift+4"},gotoInbox:{category:h,description:Object(n.a)(c.r),hotmail:"g i",yahoo:"m",gmail:"g i",owa:"g i"},gotoDrafts:{category:h,description:Object(n.a)(c.p),hotmail:"g d",gmail:"g d",owa:"g d"},gotoSent:{category:h,description:Object(n.a)(c.v),hotmail:"g s",gmail:"g t",owa:"g s"},gotoSearch:{category:h,description:Object(n.a)(c.N),hotmail:"/",yahoo:"s",gmail:"/",owa:"alt+q"},undoAction:{category:u,description:Object(n.a)(c.S),hotmail:"ctrl+z",yahoo:"ctrl+z",gmail:"ctrl+z",owa:"ctrl+z"},selectUnselectMessage:{category:m,description:Object(n.a)(c.R),hotmail:"ctrl+space",yahoo:"ctrl+space",gmail:["x","ctrl+x"],owa:"ctrl+space"},selectAll:{category:m,description:Object(n.a)(r.a),hotmail:"ctrl+a",yahoo:"ctrl+a",gmail:"ctrl+a",owa:"ctrl+a"},deselectAll:{category:m,description:Object(n.a)(c.c),hotmail:"esc",yahoo:"esc",gmail:"esc",owa:"esc"},home:{category:m,description:Object(n.a)(c.y),hotmail:["home","ctrl+home"],yahoo:["home","ctrl+home"],gmail:["home","ctrl+home"],owa:["home","ctrl+home"]},end:{category:m,description:Object(n.a)(c.i),hotmail:["end","ctrl+end"],yahoo:["end","ctrl+end"],gmail:["end","ctrl+end"],owa:["end","ctrl+end"]},deleteMail:{category:u,description:Object(n.a)(c.e),hotmail:"del",yahoo:"del",gmail:"#",owa:"del"},openMail:{category:b,description:Object(n.a)(c.F),hotmail:["o","enter"],gmail:["o","enter"],owa:["o","enter"]},openMailInPopout:{category:b,description:Object(n.a)(c.G),hotmail:"shift+enter",gmail:"shift+enter",owa:"shift+enter",yahoo:"shift+enter"},closeMail:{category:b,description:Object(n.a)(c.d),hotmail:"esc",yahoo:"esc",gmail:"u",owa:"esc"},openNextItem:{category:b,description:Object(n.a)(c.H),hotmail:"ctrl+.",yahoo:"ctrl+.",gmail:"j",owa:"ctrl+."},openPrevItem:{category:b,description:Object(n.a)(c.I),hotmail:"ctrl+,",yahoo:"ctrl+,",gmail:"k",owa:"ctrl+,"},focusNextItemPart:{category:b,description:Object(n.a)(c.l),hotmail:".",gmail:"n",owa:"."},focusPrevItemPart:{category:b,description:Object(n.a)(c.m),hotmail:",",gmail:"p",owa:","},expandCollapseAll:{category:b,description:Object(n.a)(c.j),hotmail:"x",owa:"x"},softDeleteMail:{category:u,description:Object(n.a)(c.Q),hotmail:"shift+del",yahoo:"shift+del",gmail:"shift+del",owa:"shift+del"},newFolder:{category:u,description:Object(n.a)(c.E),hotmail:"shift+e",yahoo:"ctrl+shift+e",owa:"shift+e"},markAsRead:{category:u,description:Object(n.a)(c.B),hotmail:"q",yahoo:"k",gmail:"shift+i",owa:Object(d.i)()?"q":["q","ctrl+q"]},markAsUnread:{category:u,description:Object(n.a)(c.C),hotmail:"u",yahoo:"shift+k",gmail:"shift+u",owa:["u","ctrl+u"]},toggleFlag:{category:u,description:Object(n.a)(c.k),hotmail:"ins",yahoo:"l",gmail:"s",owa:"ins"},archiveMail:{category:u,description:Object(n.a)(c.a),hotmail:"e",gmail:"e",owa:"e"},markAsJunk:{category:u,description:Object(n.a)(c.A),hotmail:"j",gmail:"shift+1",owa:"j"},moveToFolder:{category:u,description:Object(n.a)(i.a),hotmail:"v",gmail:"v",owa:"v"},categorize:{category:u,description:Object(n.a)(c.b),hotmail:"c",gmail:"l",owa:"c"},insertHyperlink:{category:p,description:Object(n.a)(c.z),hotmail:"ctrl+k",gmail:"ctrl+k",owa:"ctrl+k"},keyboardShortcuts:{category:h,description:Object(n.a)(c.P),hotmail:"?",gmail:"?",owa:"?",yahoo:"?"}},e)}},2760:function(e){e.exports={T:"pec",h:"qec",J:"rec",q:"sec",g:"tec",u:"uec",D:"vec",O:"wec",L:"xec",K:"yec",n:"zec",M:"Aec",f:"Bec",s:"Cec",o:"Dec",t:"Eec",w:"Fec",x:"Gec",r:"Hec",p:"Iec",v:"Jec",N:"Kec",S:"Lec",c:"Mec",y:"Nec",i:"Oec",e:"Pec",F:"Qec",G:"Rec",d:"Sec",H:"Tec",I:"Uec",l:"Vec",m:"Wec",j:"Xec",Q:"Yec",E:"Zec",B:"_ec",C:"$ec",k:"afc",a:"bfc",A:"cfc",b:"dfc",z:"efc",P:"ffc",R:"gfc"}}},0,[3,5,8,13,422,634,21,25,38,489,0,1,2,578,189,7,379,73,358,49,347]]);
//# sourceMappingURL=owa.756.js.map
self.scriptsLoaded['owa.756.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.756.js'] = (new Date()).getTime();