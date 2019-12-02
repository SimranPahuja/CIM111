self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.GroupList~GroupListTree.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[69],{1044:function(t,e,o){"use strict";var n=o(4),r=o(1142),i=Object(n.mutatorAction)("setJoinButtonState",function(t,e){r.a.groupActionState.set(t.toLowerCase(),e)});e.a=i},1059:function(t,e,o){"use strict";var n=o(4),r=o(1141),i=Object(n.mutatorAction)("setFollowButtonState",function(t,e){r.a.groupActionState.set(t.toLowerCase(),e)});e.a=i},1060:function(t,e,o){"use strict";o.d(e,"a",function(){return i});var n=o(853),r=o(1142);function i(t){t=t.toLowerCase();var e=r.a.groupActionState;return e.has(t)?e.get(t):n.a.None}},1067:function(t,e,o){"use strict";o.d(e,"a",function(){return i});var n=o(853),r=o(1141);function i(t){t=t.toLowerCase();var e=r.a.groupActionState;return e.has(t)?e.get(t):n.a.None}},1076:function(t,e,o){"use strict";o.d(e,"b",function(){return i});var n=o(4),r=o(903),i=Object(n.mutatorAction)("setGroupSiteStatus",function(t,e){t=t.toLocaleLowerCase(),Object(r.a)().groupSiteStatus.has(t)&&e==Object(r.a)().groupSiteStatus.get(t)||Object(r.a)().groupSiteStatus.set(t,e)});e.a=i},1141:function(t,e,o){"use strict";var n=o(4),r=o(21);e.a=Object(n.createStore)("followButtonStore",{groupActionState:new r.ObservableMap})()},1142:function(t,e,o){"use strict";var n=o(4),r=o(21);e.a=Object(n.createStore)("joinButtonStore",{groupActionState:new r.ObservableMap})()},1486:function(t){t.exports={a:"gca"}},1487:function(t){t.exports={a:"fca"}},1503:function(t){t.exports={a:"eca"}},1504:function(t){t.exports={a:"kca"}},1544:function(t){t.exports={b:"hca",c:"ica",a:"jca"}},2802:function(t,e,o){"use strict";var n=o(1287),r=o(4),i=Object(r.mutatorAction)("toggleIsShowingAllGroups",function(){Object(n.b)().shouldShowAllGroups=!Object(n.b)().shouldShowAllGroups}),u=o(0),a=o(3545),s=o(5),c=o(3456),p=o(103),d=o(264),Droppable=o(923),l=o(868),f=o(1),h=o(824),b=o(3422),g=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onContextMenu=function(t,o){var n=e.props,r=n.onContextMenu,i=n.groupId;if(r){t.stopPropagation(),t.preventDefault();var u=i.toLowerCase(),a=Object(l.j)().groups;if(a.has(u))r(t,a.get(u))}},e.onDrop=function(t){e.props.onListNodeDrop&&e.props.onListNodeDrop(t,e.props.groupId)},e}return Object(u.__extends)(e,t),e.prototype.shouldComponentUpdate=function(t,e){return!Object(d.d)(this.props,t)},e.prototype.render=function(){var t=Object(b.a)(this.props.groupId);return f.createElement(Droppable.b,{dropViewState:t.drop,onDrop:this.onDrop,canDrop:this.props.canDropOnListNode},f.createElement(c.a,{selectGroup:this.props.selectGroup,isSelected:this.props.isSelected,renderRightCharm:this.props.renderRightCharm,renderRightCharmHover:this.props.renderRightCharmHover,chevronProps:null,customIcon:null,displayName:this.props.displayName,groupId:this.props.groupId,isDroppedOver:t.drop.isDragOver,onContextMenu:this.onContextMenu,renderCustomTreeNodeDisplay:null,customData:this.props.customData,showHoverStateOnDroppedOver:t.drop.draggableItemType==h.a.MailListRow||t.drop.draggableItemType==h.a.MultiMailListMessageRows}))},e=Object(u.__decorate)([p.observer],e)}(f.Component),C=o(3143),v=o(768),O=o(151),m=o(1598),N=o(804),S=Object(l.j)(),j=Object(n.b)(),D=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isDragOverExpandCollapseNode=!1,e.onRootNodeChevronClicked=function(t){t.stopPropagation(),e.props.toggleGroupTreeExpansion()},e.onRootContextMenu=function(t){var o=e.props.onRootNodeContextMenuOpened;o&&(t.stopPropagation(),t.preventDefault(),o(t))},e.canDropOnCollapseExpandNode=function(t){return!(j.shouldShowAllGroups||!e.props.canDropOnListNode)&&e.props.canDropOnListNode(t)},e.onDragOverCollapseExpandNode=function(t){e.isDragOverExpandCollapseNode=!0,setTimeout(function(){e.isDragOverExpandCollapseNode&&!Object(n.b)().shouldShowAllGroups&&e.toggleCollapseExpandNode()},1e3)},e.onDragLeaveCollapseExpandNode=function(){e.isDragOverExpandCollapseNode=!1},e.onCollapseExpandNodeClick=function(t){t.stopPropagation(),e.toggleCollapseExpandNode()},e.toggleCollapseExpandNode=function(){var t=j.myOrgGroups.length;Object(O.m)("GroupList_ToggleShouldShowAllGroups",{isShowMore:!j.shouldShowAllGroups,joinedGroupCount:t>=21?"21+":t}),e.props.onShowMoreEvent&&e.props.onShowMoreEvent(),i()},e}return Object(u.__extends)(e,t),e.prototype.render=function(){var t=j.myOrgGroups,e={role:v.a.tree},o=this.props.isGroupsTreeCollapsed;return f.createElement("div",Object(u.__assign)({style:this.props.style,className:this.props.className},Object(v.b)(e)),this.renderGroupRoot(o),this.renderChildren(t,o),j.withContextMenuGroup&&(j.withContextMenuGroup.isRootNode?this.props.renderRootNodeContextMenu&&this.props.renderRootNodeContextMenu(j.withContextMenuGroup):this.props.renderChildNodeContextMenu&&this.props.renderChildNodeContextMenu(j.withContextMenuGroup)),t.length>C.a&&this.renderCollapseExpandNode(o),this.props.renderGroupListCustomNodes&&this.props.renderGroupListCustomNodes())},e.prototype.renderNode=function(t){return f.createElement(g,{selectGroup:this.props.selectGroup,isSelected:this.props.isSelected,renderRightCharm:this.props.renderRightCharm,renderRightCharmHover:this.props.renderRightCharmHover,displayName:t.DisplayName,groupId:t.SmtpAddress,key:t.SmtpAddress,onContextMenu:this.props.onChildNodeContextMenuOpened,customData:this.props.customData,onListNodeDrop:this.props.onListNodeDrop,canDropOnListNode:this.props.canDropOnListNode})},e.prototype.renderGroupRoot=function(t){var e={isExpanded:!t,onClick:this.onRootNodeChevronClicked};return f.createElement(m.a,{chevronProps:e,depth:0,displayName:Object(s.a)(a.a),isRootNode:!0,key:"Groups_root",onClick:e.onClick,onContextMenu:this.onRootContextMenu,renderRightCharm:this.props.renderRootNodeRightCharm,renderRightCharmHover:this.props.renderRootNodeRightCharmHover})},e.prototype.renderChildren=function(t,e){var o=this,n=[];if(e)return n;if(j.shouldShowAllGroups){var r=[];t.forEach(function(t){var e=S.groups.get(t);r.push(e)}),r.sort(function(t,e){return t.basicInformation.DisplayName.localeCompare(e.basicInformation.DisplayName)}).forEach(function(t){n.push(o.renderNode(t.basicInformation))})}else t.slice(0,C.a).forEach(function(t){var e=S.groups.get(t);n.push(o.renderNode(e.basicInformation))});return n},e.prototype.renderCollapseExpandNode=function(t){if(t)return null;var e=j.shouldShowAllGroups?Object(s.a)(a.b):Object(s.a)(a.c),o=Object(N.a)();return f.createElement(Droppable.b,{dropViewState:o,onDrop:this.onDropOnCollapseExpandNode,canDrop:this.canDropOnCollapseExpandNode,onDragOver:this.onDragOverCollapseExpandNode,onDragLeave:this.onDragLeaveCollapseExpandNode},f.createElement(m.a,{displayName:e,isCustomActionNode:!0,isRootNode:!1,key:"groupsCollapseExpandNode",onClick:this.onCollapseExpandNodeClick,onContextMenu:this.noContextMenu,onMouseEnter:this.props.onMouseEnterShowMoreButton}))},e.prototype.onDropOnCollapseExpandNode=function(){},e.prototype.noContextMenu=function(t){t.stopPropagation(),t.preventDefault()},e=Object(u.__decorate)([p.observer],e)}(f.Component);o.d(e,"c",function(){return n.a}),o.d(e,"b",function(){return n.b}),o.d(e,"a",function(){return D})},3143:function(t,e,o){"use strict";o.d(e,"a",function(){return n}),o.d(e,"b",function(){return r});var n=5,r=100},3422:function(t,e,o){"use strict";var n=o(1287),r=o(1639),i=o(804),u=o(4),a=Object(u.mutatorAction)("setGroupNodeViewStateMutator",function(t,e){Object(n.b)().groupNodeViewStates.set(t,e)});function s(t){return Object(n.b)().groupNodeViewStates.has(t)||a(t,{drag:Object(r.a)(),drop:Object(i.a)(),isDroppingMessage:!1}),Object(n.b)().groupNodeViewStates.get(t)}o.d(e,"a",function(){return s})},3545:function(t){t.exports={a:"s7a",b:"t7a",c:"u7a"}},5446:function(t,e,o){"use strict";o.d(e,"a",function(){return i}),o.d(e,"b",function(){return u}),o.d(e,"c",function(){return a});var n=o(52),r=new n.c(function(){return o.e(285).then(o.bind(null,8905))}),i=new n.b(r,function(t){return t.addMarkAsReadDiagnostics}),u=new n.b(r,function(t){return t.addUnreadCountNotificationDiagnostics}),a=new n.b(r,function(t){return t.addUnreadCountSubscriptionDiagnostics})},5931:function(t,e,o){"use strict";var n=o(5446),r=o(6122),i=o.n(r),u=o(909),a=o(151),s=o(771),c=o(65),p=o(2802),d=o(3143),l=o(4),f=o(818),h=Object(l.mutatorAction)("UPDATE_GROUP_UNREAD_COUNT",function(t,e){var o=Object(f.a)().groups.get(t.toLowerCase());o&&(o.unreadMessageCount=e)});o.d(e,"b",function(){return C}),o.d(e,"a",function(){return v}),o.d(e,"c",function(){return m});var b={};function g(t){var e=t.id.replace("UnreadCountNotification_","");if(n.b.import().then(function(o){return o(e,t)}),"0"==t.EventType.toString()){var o=b[e];o&&(h(e.toLowerCase(),t.UnreadCount),o.firstNotificationReceived||(o.unreadCountDataPoint.end(),o.unreadCountDataPoint=null,o.firstNotificationReceived=!0))}}function C(){Object(c.f)("grp-unreadCountTop5AndFavorites")?p.c.myOrgGroups.filter(function(t,e){return e<d.a||Object(s.isGroupInFavorites)(t)}).forEach(function(t){O(t)}):v()}function v(){p.c.myOrgGroups.forEach(function(t){O(t)})}function O(t){(function(t){return!b[t]})(t=t.toLowerCase())&&u.b.import().then(function(e){var o=i()({NotificationType:"UnreadCountNotification",ChannelId:e(),MailboxId:t}),r={subscriptionId:N(t),requiresExplicitSubscribe:!0,subscriptionParameters:o};u.g.importAndExecute(r,g);var s={notificationSubscription:r,firstNotificationReceived:!1,unreadCountDataPoint:new a.a("UnreadCountNotification",{isQos:!0})};b[t]=s,n.c.import().then(function(e){return e(t,r,!1)})})}function m(t){t=t.toLowerCase();var e=b[t];if(e){var o=e.notificationSubscription;o&&(u.h.importAndExecute(o,g),delete b[t],n.c.import().then(function(e){return e(t,o,!0)}))}}function N(t){return"UnreadCountNotification_"+t}},6122:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(0);e.default=function(t){return n.__assign({__type:"SubscriptionParameters:#Exchange"},t)}},818:function(t,e,o){"use strict";o.d(e,"a",function(){return i});var n=o(4),r=o(21),i=Object(n.createStore)("groupsStore",{groups:new r.ObservableMap})},848:function(t,e,o){"use strict";o.d(e,"a",function(){return r});var n=o(818);function r(t){var e=Object(n.a)().groups.get(t.toLowerCase());return e?e.groupDetails:null}},853:function(t,e,o){"use strict";var n;!function(t){t[t.None=0]="None",t[t.Executing=1]="Executing",t[t.Succeed=2]="Succeed",t[t.FailureNotice=3]="FailureNotice",t[t.FailureRetry=4]="FailureRetry"}(n||(n={})),e.a=n},868:function(t,e,o){"use strict";var n=o(4),r=o(21),i=(Object(n.createStore)("personaPhotoStore",{personaPhotoUrls:new r.ObservableMap})(),o(875),o(818)),u=o(898),a=o(848);function s(t){var e=Object(i.a)().groups.get(t.toLowerCase());return!!e&&!e.groupDetailsError}var c=o(952),p=o(1102),d=function(){return Object(p.a)().smtpAddress},l=o(903),f=Object(n.mutatorAction)("updateGroupSiteAndDocumentUrl",function(t,e,o,n){if(2==e){var r=Object(a.a)(t);Object(c.a)(r,"Site")[0].Url=o,Object(c.a)(r,"Files")[0].Url=n}}),h=o(1076);function b(t){return t=t.toLocaleLowerCase(),Object(l.a)().groupSiteStatus.has(t)?Object(l.a)().groupSiteStatus.get(t):0}var g=function(t){var e="string"==typeof t?Object(a.a)(t):t;return e?e.ExternalDirectoryObjectId:null},C=(o(853),o(1059),o(1044),o(1067),o(1060),o(1503)),v=o(1504),O=o(1544),m=o(1486),N=o(1487),S=o(5);function j(t){var e=t.groupDetails?t.groupDetails.AccessType:t.basicInformation?t.basicInformation.AccessType:null;if(e){if(1===e)return Object(S.a)(m.a);if(3===e)return Object(S.a)(N.a)}return""}function D(t){var e=t.groupDetails?t.groupDetails.AccessType:t.basicInformation?t.basicInformation.AccessType:null;if(e){if(1===e)return Object(S.a)(O.b);if(3===e)return Object(S.a)(O.c)}return""}function x(t){var e=0;return t.members?e=t.members.totalCount:t.groupDetails&&(e=t.groupDetails.MemberCount),e?e>1?Object(S.b)(Object(S.a)(v.a),e.toString()):Object(S.b)(Object(S.a)(C.a),e.toString()):Object(S.a)(O.a)}o.d(e,"j",function(){return i.a}),o.d(e,"l",function(){return u.a}),o.d(e,"d",function(){return a.a}),o.d(e,"m",function(){return s}),o.d(e,"f",function(){return c.a}),o.d(e,"g",function(){return c.b}),o.d(e,"c",function(){return d}),o.d(e,"i",function(){return l.a}),o.d(e,"o",function(){return f}),o.d(e,"n",function(){return h.b}),o.d(e,"h",function(){return b}),o.d(e,"e",function(){return g}),o.d(e,"a",function(){return j}),o.d(e,"b",function(){return D}),o.d(e,"k",function(){return x})},875:function(t,e,o){"use strict";var n;o.d(e,"a",function(){return n}),function(t){t[t.Private=0]="Private",t[t.Public=1]="Public"}(n||(n={}))},898:function(t,e,o){"use strict";o.d(e,"a",function(){return i});var n=o(4),r=o(875),i=Object(n.createStore)("unifiedGroupsSettingsStore",{supportedClassifications:[],defaultClassification:"",namingPolicySettings:{},groupsGuidelinesLink:"",orgAllowAddGuests:!1,defaultGroupAccessType:r.a.Private,groupCreationEnabled:!1})},903:function(t,e,o){"use strict";o.d(e,"a",function(){return i});var n=o(4),r=o(21),i=Object(n.createStore)("getGroupSiteStatusStore",{groupSiteStatus:new r.ObservableMap})},952:function(t,e,o){"use strict";o.d(e,"a",function(){return r}),o.d(e,"b",function(){return i});var n=o(848),r=function(t,e){var o="string"==typeof t?Object(n.a)(t):t;if(!o||!o.GroupResources)return null;var r=o.GroupResources.filter(function(t){return t.Name===e});return!r||r.length<1?null:r},i=function(t,e){var o=r(t,e);return o&&0!=o.length?o[0].Url:null}},997:function(t,e,o){"use strict";var n,r,i,u,a,s,c,p,d,l,f,h,b,g,C;var v;o(5);function O(t,e){e,v=t}function m(){return v}o.d(e,"o",function(){return n}),o.d(e,"n",function(){return r}),o.d(e,"c",function(){return i}),o.d(e,"a",function(){return u}),o.d(e,"b",function(){return a}),o.d(e,"g",function(){return s}),o.d(e,"d",function(){return c}),o.d(e,"f",function(){return p}),o.d(e,"l",function(){return d}),o.d(e,"m",function(){return l}),o.d(e,"q",function(){return f}),o.d(e,"r",function(){return h}),o.d(e,"h",function(){return b}),o.d(e,"j",function(){return g}),o.d(e,"e",function(){return C}),o.d(e,"p",function(){}),o.d(e,"k",function(){return O}),o.d(e,"i",function(){return m})}}]);
//# sourceMappingURL=owa.GroupList~GroupListTree.js.map
self.scriptsLoaded['owa.GroupList~GroupListTree.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.GroupList~GroupListTree.js'] = (new Date()).getTime();