self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.FilterContextMenu.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[249],{11228:function(e){e.exports={i:"mNb",j:"nNb",k:"oNb",a:"pNb",b:"qNb",g:"rNb",f:"sNb",d:"tNb",h:"uNb",c:"vNb",e:"wNb"}},11229:function(e){e.exports={a:"dNb",b:"eNb",d:"fNb",c:"gNb"}},11230:function(e,t,n){var r=n(11231),i=n(44);"string"==typeof r&&(r=[[e.i,r]]);for(var o=0;o<r.length;o++)i.loadStyles(r[o][1],!1);r.locals&&(e.exports=r.locals)},11231:function(e,t,n){(t=e.exports=n(43)(!1)).push([e.i,'._2HxQ4wKES5wjvIgnjfLcQK,._3HGhEMHDY2i8us0auVPsuI{cursor:pointer;font-size:14px;font-weight:400;color:"[theme:themePrimary, default:#0078D4]";font-weight:600;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;height:32px}html[dir] ._2HxQ4wKES5wjvIgnjfLcQK,html[dir] ._3HGhEMHDY2i8us0auVPsuI{padding:0 8px;border-radius:2px;margin-top:5px}html[dir=ltr] ._2HxQ4wKES5wjvIgnjfLcQK,html[dir=ltr] ._3HGhEMHDY2i8us0auVPsuI{margin-left:auto;margin-right:-8px}html[dir=rtl] ._2HxQ4wKES5wjvIgnjfLcQK,html[dir=rtl] ._3HGhEMHDY2i8us0auVPsuI{margin-right:auto;margin-left:-8px}html[dir] ._2HxQ4wKES5wjvIgnjfLcQK:hover,html[dir] ._3HGhEMHDY2i8us0auVPsuI{background-color:"[theme:neutralLighter, default:#f4f4f4]"}html[dir] .SNcGPM0gk8ayZzwzROpZX{margin-bottom:8px}html[dir] ._3lIR1LfENBYPLTyCDNhq5k{margin-top:6px}._2oQ9sQfC-vORW35CueNgmA{font-weight:400;font-size:10px;color:"[theme:themePrimary, default:#0078D4]"}html[dir=ltr] ._2oQ9sQfC-vORW35CueNgmA{padding-left:4px}html[dir=rtl] ._2oQ9sQfC-vORW35CueNgmA{padding-right:4px}',""]),t.locals={filterAll:"_2HxQ4wKES5wjvIgnjfLcQK",filterAllOpened:"_3HGhEMHDY2i8us0auVPsuI",filterPivots:"SNcGPM0gk8ayZzwzROpZX",filterContents:"_3lIR1LfENBYPLTyCDNhq5k",icon:"_2oQ9sQfC-vORW35CueNgmA"}},14268:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(11228),o=n(5),s=n(11229),a=n(5450);function c(e){switch(e){case 1:return Object(o.a)(s.a);case 3:return Object(o.a)(s.b);case 7:return Object(o.a)(s.d);case 5:return Object(o.a)(s.c);case 8:return Object(o.a)(a.a);default:throw new Error("Sort not implemented")}}var l=n(5167),u=n(103),d=n(4263),p=n(731),f=n(1),m=n(128),b=n(723),h=n(66),g=n(65),w=n(5558),x=n(884),C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onSortSelected=function(e,n){t.props.dismissContextMenu(),d.c.importAndExecute(n.data.sortColumn,n.data.sortOrder,t.props.tableViewId,t.props.filterMenuSource)},t.onFilterSelected=function(e,n){t.props.dismissContextMenu();var r=n.data;d.b.importAndExecute(r,t.props.filterMenuSource)},t}return Object(r.__extends)(t,e),t.prototype.createMenuItems=function(){var e=this,t=this.props.supportedViewFilters.filter(function(e){return!(Object(x.c)()&&("Mentioned"===e||"ToOrCcMe"===e))}).map(function(t){return e.getViewFilterMenuItems(t)});t.push({key:"divider",name:"-"});var n=p.O.tableViews.get(this.props.tableViewId).tableQuery.folderId;t.push({key:"sortBy",name:Object(o.a)(i.i),items:this.getSortMenuItems()});var r=w.a.tryImportForRender();if(r){var s=r(n,this.props.dismissContextMenu,"filterMenu");s&&(t.push({key:"divider",name:"-"}),t.push(s))}return t},t.prototype.getSortMenuItems=function(){var e=this,t=p.O.tableViews.get(this.props.tableViewId),n=Object(p.D)(t),r=n.sortDirection==p.c.ASCENDING_SORT_DIR,s=n.sortColumn,a=p.c.getSupportedSortColumns(t.tableQuery.folderId),l=[];if(Object(g.f)("tri-filterMenuRedesign")){var u=[];a.forEach(function(t){var r=s==t;u.push({key:t.toString(),name:c(t),data:{sortOrder:r?n.sortDirection:null,sortColumn:t},onClick:e.onSortSelected,canCheck:!0,isChecked:r})}),l.push({key:"sortBySection",itemType:m.a.Section,sectionProps:{bottomDivider:!0,title:Object(o.a)(i.j),items:u}});var d=this.getSortDirectionStrings(s),f=d.ascendingString,b=d.descendingString,h=[{key:"ascending",name:f,data:{sortOrder:"Ascending",sortColumn:s},onClick:this.onSortSelected,canCheck:!0,isChecked:r},{key:"descending",name:b,data:{sortOrder:"Descending",sortColumn:s},onClick:this.onSortSelected,canCheck:!0,isChecked:!r}];l.push({key:"sortOrderSection",itemType:m.a.Section,sectionProps:{bottomDivider:!0,title:Object(o.a)(i.k),items:h}})}else a.forEach(function(t){l.push({key:t.toString(),name:c(t),data:{sortOrder:null,sortColumn:t},onClick:e.onSortSelected,iconProps:{iconName:s==t?r?"Up":"Down":null}})});return l},t.prototype.getSortDirectionStrings=function(e){switch(e){case 1:return{ascendingString:Object(o.a)(i.g),descendingString:Object(o.a)(i.f)};case 3:case 8:return{ascendingString:Object(o.a)(i.a),descendingString:Object(o.a)(i.b)};case 7:return{ascendingString:Object(o.a)(i.h),descendingString:Object(o.a)(i.d)};case 5:return{ascendingString:Object(o.a)(i.e),descendingString:Object(o.a)(i.c)};default:throw new Error("Sort not implemented")}},t.prototype.getViewFilterMenuItems=function(e){return{key:e.toString(),name:Object(l.a)(e),data:e,canCheck:!0,isChecked:this.props.currentViewFilter==e,onClick:this.onFilterSelected}},t.prototype.render=function(){var e=this.props,t=e.dismissContextMenu,n=e.contextMenuTargetElement,r=this.createMenuItems();return f.createElement(b.a,{shouldFocusOnMount:!0,target:n,directionalHint:h.a.bottomRightEdge,onDismiss:t,items:r})},t=Object(r.__decorate)([u.observer],t)}(f.Component),S=n(4833),O=n(503),j=n(1297),y=n(6502),v=n(768),M=n(297),k=n(11230),I=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onFilterClick=function(e){e.stopPropagation();var n=y.a.filterContextMenuDisplayState;"All"==Object(p.I)(p.O.tableViews.get(t.props.tableViewId))?n?t.dismissContextMenu():Object(y.c)():d.b.importAndExecute("All",t.props.filterMenuSource)},t.onKeyDownOnFilter=function(e){13!==e.keyCode&&32!==e.keyCode||(e.preventDefault(),t.onFilterClick(e))},t}return Object(r.__extends)(t,e),t.prototype.dismissContextMenu=function(){Object(y.b)(),j.b.importAndExecute()},t.prototype.render=function(){var e=this,t=Object(p.I)(p.O.tableViews.get(this.props.tableViewId)),n="All"==t,i=M(this.props.containerClassName,this.props.isInboxWithPivots&&k.filterPivots,y.a.filterContextMenuDisplayState?k.filterAllOpened:k.filterAll),s={role:v.a.button};return f.createElement("div",Object(r.__assign)({ref:function(t){return e.container=t},className:i,onClick:this.onFilterClick,onKeyDown:this.onKeyDownOnFilter},Object(v.b)(s),{tabIndex:0}),f.createElement("div",{className:k.filterContents},n?Object(o.a)(S.b):Object(l.a)(t),f.createElement(O.a,{className:k.icon,iconName:n?"ChevronDownMed":"Cancel"})),y.a.filterContextMenuDisplayState&&f.createElement(C,{currentViewFilter:t,supportedViewFilters:this.props.supportedViewFilters,dismissContextMenu:this.dismissContextMenu,contextMenuTargetElement:this.container,filterMenuSource:this.props.filterMenuSource,tableViewId:this.props.tableViewId}))},t=Object(r.__decorate)([u.observer],t)}(f.Component);n.d(t,"MailFilterContextMenu",function(){return C}),n.d(t,"MailListFilterMenu",function(){return I})},5450:function(e){e.exports={a:"yIb"}},5558:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(52),i=new r.c(function(){return n.e(393).then(n.bind(null,8343))}),o=new r.b(i,function(e){return e.getPauseInboxContextMenuItem})}},0,[3,5,8,13,422,1,2,22,577,185,0,578,189,7,379,16,361,10,626,444,6,355,79,4,12,131,37,127,38,73,358,49,353,609,370,335,342,376,541,716]]);
//# sourceMappingURL=owa.FilterContextMenu.js.map
self.scriptsLoaded['owa.FilterContextMenu.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.FilterContextMenu.js'] = (new Date()).getTime();