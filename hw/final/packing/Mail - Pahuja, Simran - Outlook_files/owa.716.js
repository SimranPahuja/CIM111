self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.716.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[716],{1502:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"IsEqualTo:#Exchange"},e)}},2680:function(e,t,n){"use strict";var r=n(731),a=n(740);function o(e,t){var n;switch(t){case 0:n=a.a;break;case 1:n=Object(a.p)()}return{categoryName:null,folderId:e,focusedViewFilter:-1,listViewType:t,viewFilter:"All",sortBy:r.c.getDefaultSortBy(),requestShapeName:n,type:2,shouldTryToUseSessionDataResponse:!1,scenarioType:"group",inboxClassificationFilter:0}}var i=n(40);function c(){var e=Object(i.a)().UserOptions.GlobalListViewTypeReact;return null==e?0:e}n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c})},4051:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i});var r=n(748),a=n(69),o=Object(a.action)("showMailItemContextMenu")(Object(a.select)({listViewStore:function(){return r.a}})(function(e,t,n,r){r.listViewStore.itemContextMenuState={anchor:e,menuType:t,menuSource:n}})),i=Object(a.action)("hideMailItemContextMenu")(Object(a.select)({listViewStore:function(){return r.a}})(function(e){e.listViewStore.itemContextMenuState=null}))},4227:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(731),o=n(1195),i=n(748),c=n(885),s=n(4),l=Object(s.mutatorAction)("removeSingleItemFromConversation",function(e,t){var n,o,c=i.a.tableViews.get(t),s=Object(a.A)([e.itemConversationId.Id],c);try{for(var l=Object(r.__values)(s),u=l.next();!u.done;u=l.next()){d(u.value,e,t)}}catch(e){n={error:e}}finally{try{u&&!u.done&&(o=l.return)&&o.call(l)}finally{if(n)throw n.error}}});function d(e,t,n){var r=Object(o.a)(t.itemConversationId.Id),a=Object(c.a)(e,n),i=a.itemIds.indexOf(t.itemId);i>=0&&(a.itemIds.splice(i,1),t.isRead||a.unreadCount--),(i=r.globalItemIds.indexOf(t.itemId))>=0&&(r.globalItemIds.splice(i,1),t.isRead||r.globalUnreadCount--),(i=a.draftItemIds.indexOf(t.itemId))>=0&&a.draftItemIds.splice(i,1)}var u=n(2246),f=n(973),b=n(1286),v=n(52),O=n(2881),j=Object(v.e)(b.a,"clone_deleteItemsStoreUpdate",function(e){var t,n,a,o=e.itemContexts[0],i=Object(u.a)(null===(a=o)||void 0===a?void 0:a.mailboxInfo,e.parentFolderId,!0);try{for(var c=Object(r.__values)(i),s=c.next();!s.done;s=c.next()){var l=s.value;1==l.tableQuery.listViewType?I(e.itemContexts,l):0==l.tableQuery.listViewType&&m(e.itemContexts,l)}}catch(e){t={error:e}}finally{try{s&&!s.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}});function I(e,t){var n=e.map(function(e){return e.itemId}),r=Object(a.A)(n,t),o=r.filter(function(e){return t.rowKeys.indexOf(e)>=0});0!=o.length&&(Object(O.a)(o,t),y(t,r))}function m(e,t){var n,o,i,s;try{for(var d=Object(r.__values)(e),u=d.next();!u.done;u=d.next()){var f=u.value,b=Object(a.A)([f.itemConversationId.Id],t);try{for(var v=(i=void 0,Object(r.__values)(b)),j=v.next();!j.done;j=v.next()){var I=j.value,m=Object(c.a)(I,t.id);m&&(1==m.itemIds.length&&m.itemIds[0]==f.itemId?(Object(O.a)([I],t),y(t,[I])):l(f,t.id))}}catch(e){i={error:e}}finally{try{j&&!j.done&&(s=v.return)&&s.call(v)}finally{if(i)throw i.error}}}}catch(e){n={error:e}}finally{try{u&&!u.done&&(o=d.return)&&o.call(d)}finally{if(n)throw n.error}}}function y(e,t){0!==e.tableQuery.type&&2!==e.tableQuery.type||f.a.add(t,e.serverFolderId,3)}var w=n(4051),h=n(5992),p=n(893),g=n(5169),C=Object(v.e)(p.f,"clone_mailListItemExpansionOrchestrator",function(e){var t=Object(i.b)().expandedConversationViewState,n=t.selectedNodeIds;n&&-1!=n.indexOf(e.nodeId)||p.q(t.expandedRowKey,e.nodeId,t.allNodeIds,e.tableViewId),Object(w.b)(e.contextMenuAnchor,g.a.All,h.a.MailListItemPart)}),S=n(2217),x=n(2743),R=n(1669),V=n(1260),F=n(1032),T=n(1235),_=n(1426),A=n(1056),M=n(69);var L=Object(M.select)({tableViews:function(){return a.O.tableViews}})(function(e,t,n,r,o){var i=o.tableViews.get(t);0===i.tableQuery.type&&(f.a.add(e,i.serverFolderId,1),function(e,t){var n=e[e.length-1];if(t.selectedRowKeys.has(n)){var r=t.rowKeys.indexOf(n);r<t.rowKeys.length-1?Object(p.r)(t,t.rowKeys[r+1],!1,A.a.RowRemoval):Object(p.j)(t,A.a.Reset)}}(e,i)),Object(a.y)(e,t).forEach(function(e){o.tableViews.forEach(function(o){o.tableQuery.folderId==i.tableQuery.folderId&&Object(a.A)([e],o).forEach(function(e){(r(e,o.id,n),0===o.tableQuery.type)&&(Object(V.m)(o,2),function(e,t,n,r,a){var o,i=Object(S.a)(r,n);if(i<0)throw new Error("Row being pinned / unpinnned must exist in the list");var c=a?0:i+1;return i<(o=!a&&Object(_.f)(r,n.id)?Object(F.f)(n,c):Object(x.a)(e,t,n,c,!a))&&o--,-1==o?(Object(R.a)([r],n),!1):(T.a.updateRowPosition(o,r,n),!0)}(a.b.getLastDeliveryOrRenewTimeStamp(e,o),a.b.getLastDeliveryTimeStamp(e,o),o,e,n)||o.id!=t||f.a.add([e],i.serverFolderId,3))})})})}),E=n(2608),Q=n(910),U=Object(v.e)(E.a,"clone_markConversationsAsPinnedStoreUpdate",function(e){var t=e.rowKeys,n=e.tableViewId,r=e.shouldMarkAsPinned;L(t,n,r,K)});function K(e,t,n){var r=Object(c.a)(e,t);if(r)if(n){var a=Object(Q.d)();a&&(r.lastDeliveryOrRenewTimeStamp=a)}else r.lastDeliveryOrRenewTimeStamp=r.lastDeliveryTimeStamp}var k=n(2081),P=Object(M.action)("MarkConversationReadInListViewStore")(Object(M.select)({conversationItems:function(){return a.O.conversationItems}})(function(e,t,n,r,a){var o=0,i={};e.forEach(function(e){if(!(n.virutalSelectAllExclusionList.indexOf(e)>=0)){var r=Object(c.a)(e,n.id),s=function(e,t){var n=e.unreadCount;return t?-1*n:e.itemIds.length-n}(r,t);r.unreadCount+=s;var l=r.id;a.conversationItems.get(l).globalUnreadCount+=s,i[l]||(i[l]=!0,o+=s)}});var s=n.serverFolderId;r&&Object(k.a)(o,0,s,!0)}));var D=n(1854),N=Object(v.e)(D.a,"clone_markConversationAsReadStoreUpdate",function(e){var t=e.conversationIds,n=e.tableViewId,r=e.isReadValue,o=e.isExplicit,i=a.O.tableViews.get(n),c=Object(a.A)(t,i);P(c,r,i,!0),Object(a.Q)(i,r,o)?(f.a.add(c,i.serverFolderId,3),Object(R.a)(c,i)):f.a.add(c,i.serverFolderId,2)}),B=n(2609),q=n(740),z=Object(v.e)(B.a,"clone_markItemsAsPinnedStoreUpdate",function(e){var t=e.rowKeys,n=e.tableViewId,r=e.shouldMarkAsPinned;L(t,n,r,G)});function G(e,t,n){var r=Object(a.G)(e,t);if(r){var o=q.H.items.get(r.clientId.Id);if(n){var i=Object(Q.d)();i&&(o.ReceivedOrRenewTime=i)}else o.ReceivedOrRenewTime=o.DateTimeReceived}}var H=n(758);var $=Object(M.action)("MarkItemsReadInListViewStore")(Object(M.select)({items:function(){return H.a.items},conversationItems:function(){return a.O.conversationItems}})(function(e,t,n,r){var o=n?-1*t.length:t.length,i=e.tableQuery.folderId;Object(V.n)(i)&&Object(k.a)(o,0,i,!0),0==e.tableQuery.listViewType&&t.forEach(function(e){var t=r.items.get(e);if(t){var o=t.ConversationId.Id;Object(u.a)(t.MailboxInfo,t.ParentFolderId.Id,!0).forEach(function(e){return function(e,t,n,r){var o=Object(a.A)([e],t),i=t.id;o.forEach(function(t){var a=Object(c.a)(t,i),o=r.get(e);a&&(n?(a.unreadCount--,o.globalUnreadCount--):(a.unreadCount++,o.globalUnreadCount++))})}(o,e,n,r.conversationItems)})}})})),J=n(1855),W=Object(v.e)(J.a,"clone_markItemsAsReadStoreUpdateOrchestrator",function(e){var t=e.itemIds,n=e.isReadValue,r=e.isExplicit,o=e.tableViewId,i=a.O.tableViews.get(o);if(i){$(i,t,n);var c=[],s=Object(a.Q)(i,n,r);1==i.tableQuery.listViewType?c=Object(a.A)(t,i):t.forEach(function(e){var t=q.H.items.get(e).ConversationId.Id,n=Object(a.A)([t],i);n.forEach(function(e){var t=Object(a.F)(e,o);s&&0!=t.unreadCount||n.push(e)})}),0!=c.length&&(s?(f.a.add(c,i.serverFolderId,3),Object(R.a)(c,i)):f.a.add(c,i.serverFolderId,2))}}),X=n(2680),Y=n(905),Z=n(1318),ee=n(1294),te=n(2555),ne=n(1272),re=n(732),ae=Object(v.e)(te.a,"clone_onListViewTypeOptionSavedOrchestrator",function(e){return Object(r.__awaiter)(void 0,void 0,void 0,function(){var t,n,a,o,i,c;return Object(r.__generator)(this,function(r){if(t=e.newListViewType,n=Object(Y.a)().tableQuery,a=Object(ne.a)(),o=null===(c=a)||void 0===c?void 0:c.treeType,1===n.type||o===re.c||o===re.l)return[2];switch(i=2===n.type?Object(X.a)(n.folderId,t):Object(V.c)(n.folderId,t,n.scenarioType,n.focusedViewFilter,n.viewFilter,n.categoryName,n.sortBy,n.inboxClassificationFilter),Object(ee.d)(i),t){case 0:Z.n.itemReadingPaneViewState=null;break;case 1:Z.n.conversationReadingPaneViewState=null}return[2]})})}),oe=n(1244),ie=n(2261),ce=n(990),se=Object(v.e)(ie.a,"emptyFolderStoreUpdateClone",function(e){var t=e.folder,n=e.clientLastSyncTime,r=e.rowKeysToExclude;Object(oe.a)(t.FolderId.Id,!1).forEach(function(e){de(e,r),function(e,t){if(null==t)return;for(var n=0,r=0;r<t.length;r++){var a=Object(S.a)(t[r],e);a>n&&(n=a)}var o=e.rowKeys.slice(0,n).filter(function(e){return-1==t.indexOf(e)});f.a.add(o,e.serverFolderId,3)}(e,r),T.a.clear(e,n,r),le(e),Object(p.j)(e,q.c.Reset)})}),le=Object(s.mutatorAction)("updateTotalRowsInTableView",function(e){e.totalRowsInView=e.rowKeys.length}),de=Object(s.mutatorAction)("setLastEmptiedTime",function(e,t){var n=null;if(null!=t)for(var r=0;r<t.length;r++){var a=Object(ce.getLastDeliveryTimeStamp)(t[r],e);(null==n||new Date(a)<new Date(n))&&(n=a)}e.lastEmptiedTime=null!=n?new Date(n):new Date});var ue=n(1441),fe=n(1984),be=n(2032),ve=n(967),Oe=n.n(ve),je=n(968),Ie=n.n(je),me=n(1502),ye=n.n(me),we=n(743),he=n.n(we),pe=n(969),ge=n.n(pe),Ce=n(8662),Se=n.n(Ce);var xe=n(151),Re=Object(M.action)("onLoadMoreRowsSucceeded")(function(e,t,n,r){e.isLoading=!1,r(e,t,n),e.currentLoadedIndex=e.rowKeys.length}),Ve=Object(M.action)("onLoadMoreRowsFailed")(function(e,t){e.isLoading=!1,Object(xe.m)("TnS_LoadMoreRowsError",[e.tableQuery.listViewType,t])}),Fe=n(869),Te=n(1584),_e=n(1564),Ae=n(2831);function Me(e,t){var n=e.rowKeys.length-1,r=e.tableQuery,o=Object(Ae.a)(e);(function(e,t,n,r,a,o,i,c,s,l,d,u,f,b){var v=ye()({FieldURIOrConstant:Ie()({Item:Oe()({Value:t})}),Item:he()({FieldURI:"ConversationInstanceKey"})}),O=ge()({Item:v}),j=Se()({BasePoint:"Beginning",Condition:O,MaxEntriesReturned:n});return Object(fe.a)(e,j,r,a,o,i,c,s,Object(be.a)(r),l,d,u,f,b).then(function(e){return e.json().then(function(e){return e.Body})})})(Object(a.i)(r),e.rowKeys[n],t,r.viewFilter,Object(ue.a)(r),r.focusedViewFilter,r.requestShapeName,Object(Fe.c)(r).requestOptions,r.categoryName,Object(Te.a)(r.inboxClassificationFilter),Object(_e.a)(r.inboxClassificationFilter),Object(a.j)(e,!0),o,o).then(function(t){"Success"===t.ResponseClass?Re(e,t.Conversations,t.TotalConversationsInView,F.a):Ve(e,t.ResponseCode)},function(t){Ve(e)})}var Le=n(2033),Ee=n(2034);var Qe=n(1442);function Ue(e,t){var n=e.rowKeys.length-1,r=e.tableQuery;(function(e,t,n,r,a,o,i,c,s,l,d,u){var f=ye()({FieldURIOrConstant:Ie()({Item:Oe()({Value:t})}),Item:he()({FieldURI:"InstanceKey"})}),b=ge()({Item:f}),v=Se()({BasePoint:"Beginning",Condition:b,MaxEntriesReturned:n});return Object(Le.a)(e,v,r,a,o,i,c,s,Object(Ee.a)(r),l,d,u)})(Object(a.i)(r),e.rowKeys[n],t,r.viewFilter,Object(Qe.a)(r),r.focusedViewFilter,r.requestShapeName,Object(Fe.c)(r).requestOptions,r.categoryName,Object(Te.a)(r.inboxClassificationFilter),Object(_e.a)(r.inboxClassificationFilter),Object(a.j)(e,!0)).then(function(t){"Success"===t.ResponseClass?Re(e,t.RootFolder.Items,t.RootFolder.TotalItemsInView,F.b):Ve(e,t.ResponseCode)},function(t){Ve(e)})}var Ke=n(2259),ke=n(65),Pe=50;var De=Object(M.action)("loadMoreInTable")(function(e){return Object(r.__awaiter)(this,void 0,void 0,function(){var t;return Object(r.__generator)(this,function(n){if(!e)throw new Error("Selected tableview must not be null if loadMoreRows is being called.");if(e.currentLoadedIndex<e.rowKeys.length){if(e.rowKeys.length-e.currentLoadedIndex>=Pe)return e.currentLoadedIndex+=Pe,[2];e.currentLoadedIndex=e.rowKeys.length}return 0==e.tableQuery.type||2==e.tableQuery.type?function(e){switch(e.isLoading=!0,e.tableQuery.listViewType){case 0:Me(e,Pe);break;case 1:Ue(e,Pe)}}(e):1===e.tableQuery.type&&("SharedFolders"===(t=e.tableQuery).searchScope.kind?Ne(e):"PrimaryMailbox"===t.searchScope.kind&&Be(e)),[2]})})}),Ne=function(e){return Object(r.__awaiter)(void 0,void 0,void 0,function(){return Object(r.__generator)(this,function(t){switch(t.label){case 0:return[4,Ke.b.import()];case 1:return t.sent()(e.currentLoadedIndex-1,e,"loadMoreInTable",Re,Ve),[2]}})})},Be=function(e){return Object(r.__awaiter)(void 0,void 0,void 0,function(){var t,n;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return Object(ke.f)("sea-fetchOnScroll1")||Object(ke.f)("sea-fetchOnScroll2")?(t=e.rowKeys.length-1,n=e.tableQuery,t>n.lastIndexFetched?(n.lastIndexFetched=t,[4,Ke.c.import()]):[3,2]):[3,2];case 1:r.sent()(t,e,"loadMoreInTable",Re,Ve),r.label=2;case 2:return[2]}})})},qe=n(1637),ze=Object(v.e)(qe.a,"markAllAsReadOrchestratorClone",function(e){var t=e.tableView,n=e.markAsRead;if(t)switch(t.tableQuery.listViewType){case 0:P(t.rowKeys,n,t,!1);break;case 1:var r=Object(a.y)(t.rowKeys,t.id);$(t,r,n)}}),Ge=n(1582);function He(e,t){var n=t.id,r=Object(a.A)(e,t);if(0!=r.length){var o=function(e,t){for(var n=0,r=0,a=new Map,o=0;o<e.length;o++){var i=e[o],s=Object(c.a)(i,t);a.get(s.id)||(a.set(s.id,!0),n-=s.unreadCount,r-=s.itemIds.length)}return[n,r]}(r,n);Object(k.a)(o[0],o[1],t.serverFolderId,!0),0!=t.tableQuery.type&&2!=t.tableQuery.type||f.a.add(r,t.serverFolderId,3),Object(R.a)(r,t)}}var $e=Object(v.e)(Ge.a,"deleteConversationStoreUpdateClone",function(e){He(e.conversationIds,e.tableView)}),Je=n(2676);var We=n(2744),Xe=Object(v.e)(We.a,"deleteFolderStoreUpdateClone",function(e){e.folderIds.forEach(function(e){!function(e){Object(oe.a)(e,!1).forEach(function(e){return Object(Je.d)(e.id)})}(e)})});n.d(t,"deleteItemsStoreUpdateOrchestrator",function(){return j}),n.d(t,"mailListItemExpansionOrchestrators",function(){return C}),n.d(t,"markConversationsAsPinnedStoreUpdateOrchestrator",function(){return U}),n.d(t,"markConversationsAsReadStoreUpdateOrchestrator",function(){return N}),n.d(t,"markItemsAsPinnedStoreUpdateOrchestrator",function(){return z}),n.d(t,"markItemsAsReadStoreUpdateOrchestrator",function(){return W}),n.d(t,"onListViewTypeOptionSavedOrchestrator",function(){return ae}),n.d(t,"emptyFolderStoreUpdateOrchestrator",function(){return se}),n.d(t,"loadMoreInTable",function(){return De}),n.d(t,"markAllAsReadOrchestrator",function(){return ze}),n.d(t,"deleteConversationStoreUpdateOrchestrator",function(){return $e}),n.d(t,"deleteFolderStoreUpdateOrchestrator",function(){return Xe})},5169:function(e,t,n){"use strict";var r;!function(e){e[e.All=0]="All",e[e.MoveTo=1]="MoveTo",e[e.Categorize=2]="Categorize"}(r||(r={})),t.a=r},5992:function(e,t,n){"use strict";var r;!function(e){e[e.MailListItem=0]="MailListItem",e[e.MailListItemPart=1]="MailListItemPart"}(r||(r={})),t.a=r},8662:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"SeekToConditionPageView:#Exchange"},e)}}},0,[3,5,8,13,422,1,2,22,577,185,0,578,189,7,379,16,361,10,626,444,6,355,79,4,12,131,37,127,38,73,358,49,353,609,370,342,376,541]]);
//# sourceMappingURL=owa.716.js.map
self.scriptsLoaded['owa.716.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.716.js'] = (new Date()).getTime();