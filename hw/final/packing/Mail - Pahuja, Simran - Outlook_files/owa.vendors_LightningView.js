self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.vendors~LightningView.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[603,593],{1166:function(e,t,o){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},1296:function(e,t,o){"use strict";var s=o(700),n=o(0),r=o(1),i=o(314),a=o(156),c=o(664),l=Object(i.a)(),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._link=r.createRef(),t._onClick=function(e){var o=t.props,s=o.onClick;o.disabled?e.preventDefault():s&&s(e)},t}return n.__extends(t,e),t.prototype.render=function(){var e=this,t=this.props,o=t.disabled,s=t.children,i=t.className,a=t.href,u=t.theme,p=t.styles,d=t.keytipProps,h=l(p,{className:i,isButton:!a,isDisabled:o,theme:u}),f=this._getRootType(this.props);return r.createElement(c.a,{keytipProps:d,ariaDescribedBy:this.props["aria-describedby"],disabled:o},function(t){return r.createElement(f,n.__assign({},t,e._adjustPropsForRootType(f,e.props),{className:h.root,onClick:e._onClick,ref:e._link,"aria-disabled":o}),s)})},t.prototype.focus=function(){var e=this._link.current;e&&e.focus&&e.focus()},t.prototype._adjustPropsForRootType=function(e,t){t.children,t.as;var o=t.disabled,s=t.target,r=t.href,i=(t.theme,t.getStyles,t.styles,t.componentRef,n.__rest(t,["children","as","disabled","target","href","theme","getStyles","styles","componentRef"]));return"string"==typeof e?"a"===e?n.__assign({target:s,href:o?void 0:r},i):"button"===e?n.__assign({type:"button",disabled:o},i):n.__assign({},i,{disabled:o}):n.__assign({target:s,href:r,disabled:o},i)},t.prototype._getRootType=function(e){return e.as?e.as:e.href?"a":"button"},t}(a.a),p=o(16),d={root:"ms-Link"};o.d(t,"a",function(){return h});var h=Object(s.a)(u,function(e){var t,o,s,n=e.className,r=e.isButton,i=e.isDisabled,a=e.theme,c=a.semanticColors,l=c.link,u=c.linkHovered,h=c.disabledText,f=c.focusBorder,_=Object(p.getGlobalClassNames)(d,a);return{root:[_.root,a.fonts.medium,{color:l,outline:"none",fontSize:"inherit",fontWeight:"inherit",selectors:(t={".ms-Fabric--isFocusVisible &:focus":{boxShadow:"0 0 0 1px "+f+" inset",selectors:(o={},o[p.HighContrastSelector]={outline:"1px solid WindowText"},o)}},t[p.HighContrastSelector]={borderBottom:"none"},t)},r&&{background:"none",backgroundColor:"transparent",border:"none",cursor:"pointer",display:"inline",margin:0,overflow:"inherit",padding:0,textAlign:"left",textOverflow:"inherit",userSelect:"text",borderBottom:"1px solid transparent",selectors:(s={},s[p.HighContrastSelectorBlack]={color:"#FFFF00"},s[p.HighContrastSelectorWhite]={color:"#00009F"},s)},!r&&{textDecoration:"none"},i&&["is-disabled",{color:h,cursor:"default"},{selectors:{"&:link, &:visited":{pointerEvents:"none"}}}],!i&&{selectors:{"&:active, &:hover, &:active:hover":{color:u,textDecoration:"underline"},"&:focus":{color:l}}},_.root,n]}},void 0,{scope:"Link"})},348:function(e,t,o){"use strict";o.d(t,"a",function(){return c});var s=o(0),n=o(1),r=o(314),i=o(156),a=Object(r.a)(),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.className,o=e.styles,s=e.theme;return this._classNames=a(o,{theme:s,className:t}),n.createElement("div",{className:this._classNames.actions},n.createElement("div",{className:this._classNames.actionsRight},this._renderChildrenAsActions()))},t.prototype._renderChildrenAsActions=function(){var e=this;return n.Children.map(this.props.children,function(t){return t?n.createElement("span",{className:e._classNames.action},t):null})},t}(i.a)},349:function(e,t,o){"use strict";var s=o(700),n=o(348),r=o(16),i={actions:"ms-Dialog-actions",action:"ms-Dialog-action",actionsRight:"ms-Dialog-actionsRight"};o.d(t,"a",function(){return a});var a=Object(s.a)(n.a,function(e){var t=e.className,o=e.theme,s=Object(r.getGlobalClassNames)(i,o);return{actions:[s.actions,{position:"relative",width:"100%",minHeight:"24px",lineHeight:"24px",margin:"16px 0 0",fontSize:"0",selectors:{".ms-Button":{lineHeight:"normal"}}},t],action:[s.action,{margin:"0 4px"}],actionsRight:[s.actionsRight,{textAlign:"right",marginRight:"-4px",fontSize:"0"}]}},void 0,{scope:"DialogFooter"})},353:function(e,t,o){"use strict";o.d(t,"a",function(){return c});var s=o(0),n=o(1),r=o(156),i=o(464),a=o(254),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._skipComponentRefResolution=!0,t}return s.__extends(t,e),t.prototype.render=function(){return n.createElement(a.a,s.__assign({},this.props,{primary:!0,onRenderDescription:r.b}))},t=s.__decorate([Object(i.a)("PrimaryButton",["theme","styles"],!0)],t)}(r.a)},474:function(e,t,o){"use strict";var s=o(700),n=o(0),r=o(1),i=o(314),a=o(704),c=o(70),l=o(186),u=o(156),p=o(661),d=o(16),h=d.AnimationVariables.durationValue2,f={root:"ms-Modal",main:"ms-Dialog-main",scrollableContent:"ms-Modal-scrollableContent",isOpen:"is-open",layer:"ms-Modal-Layer"},_=o(667),m=o(729),v=o(715),g=o(114),y=o(66),b=o(503),D=o(159),S=Object(D.b)(function(e,t){return{root:Object(d.mergeStyles)(e,t&&{touchAction:"none",selectors:{"& *":{userSelect:"none"}}})}}),F=o(190),C={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}},O=function(e){function t(t){var o=e.call(this,t)||this;return o._currentEventType=C.mouse,o._events=[],o._onMouseDown=function(e){var t=r.Children.only(o.props.children).props.onMouseDown;return t&&t(e),o._currentEventType=C.mouse,o._onDragStart(e)},o._onMouseUp=function(e){var t=r.Children.only(o.props.children).props.onMouseUp;return t&&t(e),o._currentEventType=C.mouse,o._onDragStop(e)},o._onTouchStart=function(e){var t=r.Children.only(o.props.children).props.onTouchStart;return t&&t(e),o._currentEventType=C.touch,o._onDragStart(e)},o._onTouchEnd=function(e){var t=r.Children.only(o.props.children).props.onTouchEnd;t&&t(e),o._currentEventType=C.touch,o._onDragStop(e)},o._onDragStart=function(e){if("number"==typeof e.button&&0!==e.button)return!1;if(!(o.props.handleSelector&&!o._matchesSelector(e.target,o.props.handleSelector)||o.props.preventDragSelector&&o._matchesSelector(e.target,o.props.preventDragSelector))){o._touchId=o._getTouchId(e);var t=o._getControlPosition(e);if(void 0!==t){var s=o._createDragDataFromPosition(t);o.props.onStart&&o.props.onStart(e,s),o.setState({isDragging:!0,lastPosition:t}),o._events=[Object(F.a)(document.body,o._currentEventType.move,o._onDrag),Object(F.a)(document.body,o._currentEventType.stop,o._onDragStop)]}}},o._onDrag=function(e){"touchmove"===e.type&&e.preventDefault();var t=o._getControlPosition(e);if(t){var s=o._createUpdatedDragData(o._createDragDataFromPosition(t)),n=s.position;o.props.onDragChange&&o.props.onDragChange(e,s),o.setState({position:n,lastPosition:t})}},o._onDragStop=function(e){if(o.state.isDragging){var t=o._getControlPosition(e);if(t){var s=o._createDragDataFromPosition(t);o.setState({isDragging:!1,lastPosition:void 0}),o.props.onStop&&o.props.onStop(e,s),o.props.position&&o.setState({position:o.props.position}),o._events.forEach(function(e){return e()})}}},o.state={isDragging:!1,position:o.props.position||{x:0,y:0},lastPosition:void 0},o}return n.__extends(t,e),t.prototype.componentDidUpdate=function(e){!this.props.position||e.position&&this.props.position===e.position||this.setState({position:this.props.position})},t.prototype.componentWillUnmount=function(){this._events.forEach(function(e){return e()})},t.prototype.render=function(){var e=r.Children.only(this.props.children),t=e.props,o=this.props.position,s=this.state,i=s.position,a=s.isDragging,c=i.x,l=i.y;return o&&!a&&(c=o.x,l=o.y),r.cloneElement(e,{style:n.__assign({},t.style,{transform:"translate("+c+"px, "+l+"px)"}),className:S(t.className,this.state.isDragging).root,onMouseDown:this._onMouseDown,onMouseUp:this._onMouseUp,onTouchStart:this._onTouchStart,onTouchEnd:this._onTouchEnd})},t.prototype._getControlPosition=function(e){var t=this._getActiveTouch(e);if(void 0===this._touchId||t){var o=t||e;return{x:o.clientX,y:o.clientY}}},t.prototype._getActiveTouch=function(e){return e.targetTouches&&this._findTouchInTouchList(e.targetTouches)||e.changedTouches&&this._findTouchInTouchList(e.changedTouches)},t.prototype._getTouchId=function(e){var t=e.targetTouches&&e.targetTouches[0]||e.changedTouches&&e.changedTouches[0];if(t)return t.identifier},t.prototype._matchesSelector=function(e,t){if(!e||e===document.body)return!1;var o=e.matches||e.webkitMatchesSelector||e.msMatchesSelector;return!!o&&(o.call(e,t)||this._matchesSelector(e.parentElement,t))},t.prototype._findTouchInTouchList=function(e){if(void 0!==this._touchId)for(var t=0;t<e.length;t++)if(e[t].identifier===this._touchId)return e[t]},t.prototype._createDragDataFromPosition=function(e){var t=this.state.lastPosition;return void 0===t?{delta:{x:0,y:0},lastPosition:e,position:e}:{delta:{x:e.x-t.x,y:e.y-t.y},lastPosition:t,position:e}},t.prototype._createUpdatedDragData=function(e){var t=this.state.position;return{position:{x:t.x+e.delta.x,y:t.y+e.delta.y},delta:e.delta,lastPosition:t}},t}(r.Component),T={eventBubblingEnabled:!1},M=Object(i.a)(),x=function(e){function t(t){var o=e.call(this,t)||this;return o._focusTrapZone=r.createRef(),o._allowScrollOnModal=function(e){e?Object(a.b)(e,o._events):o._events.off(o._scrollableContent),o._scrollableContent=e},o._onModalContextMenuClose=function(){o.setState({isModalMenuOpen:!1})},o._onModalClose=function(){o._lastSetX=0,o._lastSetY=0,o.setState({isModalMenuOpen:!1,isInKeyboardMoveMode:!1,isOpen:!1,x:0,y:0}),o.props.onDismissed&&o.props.onDismissed()},o._onDragStart=function(){o.setState({isModalMenuOpen:!1,isInKeyboardMoveMode:!1})},o._onDrag=function(e,t){var s=o.state,n=s.x,r=s.y;o.setState({x:n+t.delta.x,y:r+t.delta.y})},o._onDragStop=function(){o.focus()},o._onDialogKeyUp=function(e){e.altKey&&e.ctrlKey&&e.keyCode===c.a.space&&(o.setState({isModalMenuOpen:!o.state.isModalMenuOpen}),e.preventDefault(),e.stopPropagation())},o._onDialogKeyDown=function(e){if(e.altKey&&e.ctrlKey&&e.keyCode===c.a.space)return e.preventDefault(),void e.stopPropagation();if(o.state.isModalMenuOpen&&(e.altKey||e.keyCode===c.a.escape)&&o.setState({isModalMenuOpen:!1}),!o.state.isInKeyboardMoveMode||e.keyCode!==c.a.escape&&e.keyCode!==c.a.enter||(o.setState({isInKeyboardMoveMode:!1}),e.preventDefault(),e.stopPropagation()),o.state.isInKeyboardMoveMode){var t=!0,s=o._getMoveDelta(e);switch(e.keyCode){case c.a.escape:o.setState({x:o._lastSetX,y:o._lastSetY});case c.a.enter:o._lastSetX=0,o._lastSetY=0,o.setState({isInKeyboardMoveMode:!1});break;case c.a.up:o.setState({y:o.state.y-s});break;case c.a.down:o.setState({y:o.state.y+s});break;case c.a.left:o.setState({x:o.state.x-s});break;case c.a.right:o.setState({x:o.state.x+s});break;default:t=!1}t&&(e.preventDefault(),e.stopPropagation())}},o._onEnterKeyboardMoveMode=function(){o._lastSetX=o.state.x,o._lastSetY=o.state.y,o.setState({isInKeyboardMoveMode:!0,isModalMenuOpen:!1})},o._onExitKeyboardMoveMode=function(){o._lastSetX=0,o._lastSetY=0,o.setState({isInKeyboardMoveMode:!1})},o.state={id:Object(l.a)("Modal"),isOpen:t.isOpen,isVisible:t.isOpen,hasBeenOpened:t.isOpen,x:0,y:0},o._lastSetX=0,o._lastSetY=0,o._warnDeprecations({onLayerDidMount:"layerProps.onLayerDidMount"}),o}return n.__extends(t,e),t.prototype.UNSAFE_componentWillReceiveProps=function(e){if(clearTimeout(this._onModalCloseTimer),e.isOpen)if(this.state.isOpen){if(this.setState({hasBeenOpened:!0,isVisible:!0}),e.topOffsetFixed){var t=document.getElementsByClassName("ms-Dialog-main"),o=void 0;t.length>0&&(o=t[0].getBoundingClientRect(),this.setState({modalRectangleTop:o.top}))}}else this.setState({isOpen:!0});!e.isOpen&&this.state.isOpen&&(this._onModalCloseTimer=this._async.setTimeout(this._onModalClose,1e3*parseFloat(h)),this.setState({isVisible:!1}))},t.prototype.componentDidUpdate=function(e,t){e.isOpen||t.isVisible||this.setState({isVisible:!0})},t.prototype.render=function(){var e=this.props,t=e.className,o=e.containerClassName,s=e.scrollableContentClassName,i=e.elementToFocusOnDismiss,a=e.firstFocusableSelector,c=e.forceFocusInsideTrap,l=e.ignoreExternalFocusing,u=e.isBlocking,d=e.isClickableOutsideFocusTrap,h=e.isDarkOverlay,f=e.onDismiss,D=e.layerProps,S=e.overlay,F=e.responsiveMode,C=e.titleAriaId,x=e.styles,k=e.subtitleAriaId,E=e.theme,I=e.topOffsetFixed,N=e.onLayerDidMount,j=e.isModeless,B=e.dragOptions,w=this.state,P=w.isOpen,R=w.isVisible,H=w.hasBeenOpened,K=w.modalRectangleTop,A=w.x,L=w.y,Z=w.isInKeyboardMoveMode;if(!P)return null;var U=void 0===D?"":D.className,V=M(x,{theme:E,className:t,containerClassName:o,scrollableContentClassName:s,isOpen:P,isVisible:R,hasBeenOpened:H,modalRectangleTop:K,topOffsetFixed:I,isModeless:j,layerClassName:U,isDefaultDragHandle:B&&!B.dragHandleSelector}),W=n.__assign({},T,this.props.layerProps,{onLayerDidMount:D&&D.onLayerDidMount?D.onLayerDidMount:N,insertFirst:j,className:V.layer}),Y=r.createElement(p.a,{componentRef:this._focusTrapZone,className:V.main,elementToFocusOnDismiss:i,isClickableOutsideFocusTrap:j||d||!u,ignoreExternalFocusing:l,forceFocusInsideTrap:j?!j:c,firstFocusableSelector:a,focusPreviouslyFocusedInnerElement:!0,onKeyDown:B?this._onDialogKeyDown:void 0,onKeyUp:B?this._onDialogKeyUp:void 0,onBlur:Z?this._onExitKeyboardMoveMode:void 0},B&&Z&&r.createElement("div",{className:V.keyboardMoveIconContainer},B.keyboardMoveIconProps?r.createElement(b.a,n.__assign({},B.keyboardMoveIconProps)):r.createElement(b.a,{iconName:"move",className:V.keyboardMoveIcon})),r.createElement("div",{ref:this._allowScrollOnModal,className:V.scrollableContent,"data-is-scrollable":!0},B&&this.state.isModalMenuOpen&&r.createElement(B.menu,{items:[{key:"move",text:B.moveMenuItemText,onClick:this._onEnterKeyboardMoveMode},{key:"close",text:B.closeMenuItemText,onClick:this._onModalClose}],onDismiss:this._onModalContextMenuClose,alignTargetEdge:!0,coverTarget:!0,directionalHint:y.a.topLeftEdge,directionalHintFixed:!0,shouldFocusOnMount:!0,target:this._scrollableContent}),this.props.children));return F>=g.a.small?r.createElement(m.a,n.__assign({},W),r.createElement(v.a,{role:j||!u?"dialog":"alertdialog","aria-modal":!j,ariaLabelledBy:C,ariaDescribedBy:k,onDismiss:f},r.createElement("div",{className:V.root},!j&&r.createElement(_.a,n.__assign({isDarkThemed:h,onClick:u?void 0:f},S)),B?r.createElement(O,{handleSelector:B.dragHandleSelector||"."+V.main.split(" ")[0],preventDragSelector:"button",onStart:this._onDragStart,onDragChange:this._onDrag,onStop:this._onDragStop,position:{x:A,y:L}},Y):Y))):null},t.prototype.focus=function(){this._focusTrapZone.current&&this._focusTrapZone.current.focus()},t.prototype._getMoveDelta=function(e){var t=10;return e.shiftKey?e.ctrlKey||(t=50):e.ctrlKey&&(t=1),t},t.defaultProps={isOpen:!1,isDarkOverlay:!0,isBlocking:!1,className:"",containerClassName:""},t=n.__decorate([g.b],t)}(u.a);o.d(t,"a",function(){return k});var k=Object(s.a)(x,function(e){var t,o=e.className,s=e.containerClassName,n=e.scrollableContentClassName,r=e.isOpen,i=e.isVisible,a=e.hasBeenOpened,c=e.modalRectangleTop,l=e.theme,u=e.topOffsetFixed,p=e.isModeless,_=e.layerClassName,m=e.isDefaultDragHandle,v=l.palette,g=l.effects,y=l.fonts,b=Object(d.getGlobalClassNames)(f,l);return{root:[b.root,y.medium,{backgroundColor:"transparent",position:p?"absolute":"fixed",height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",opacity:0,pointerEvents:"none",transition:"opacity "+h},u&&a&&{alignItems:"flex-start"},r&&b.isOpen,i&&{opacity:1,pointerEvents:"auto"},o],main:[b.main,{boxShadow:g.elevation64,borderRadius:g.roundedCorner2,backgroundColor:v.white,boxSizing:"border-box",position:"relative",textAlign:"left",outline:"3px solid transparent",maxHeight:"100%",overflowY:"auto",zIndex:p?d.ZIndexes.Layer:void 0},u&&a&&{top:c},m&&{cursor:"move"},s],scrollableContent:[b.scrollableContent,{overflowY:"auto",flexGrow:1,maxHeight:"100vh",selectors:(t={},t["@supports (-webkit-overflow-scrolling: touch)"]={maxHeight:window.innerHeight},t)},n],layer:p&&[_,b.layer,{position:"static",width:"unset",height:"unset"}],keyboardMoveIconContainer:{position:"absolute",display:"flex",justifyContent:"center",width:"100%",padding:"3px 0px"},keyboardMoveIcon:{fontSize:y.xLargePlus.fontSize,width:"24px"}}},void 0,{scope:"Modal"})},661:function(e,t,o){"use strict";o.d(t,"a",function(){return p});var s=o(0),n=o(1),r=o(132),i=o(74),a=o(421),c=o(150),l=o(190),u=o(115),p=function(e){function t(o){var s=e.call(this,o)||this;return s._root=n.createRef(),s._firstBumper=n.createRef(),s._lastBumper=n.createRef(),s._hasFocus=!1,s._onRootFocus=function(e){s.props.onFocus&&s.props.onFocus(e),s._hasFocus=!0},s._onRootBlur=function(e){s.props.onBlur&&s.props.onBlur(e);var t=e.relatedTarget;null===e.relatedTarget&&(t=s._getDocument().activeElement),Object(r.a)(s._root.current,t)||(s._hasFocus=!1)},s._onFirstBumperFocus=function(){s._onBumperFocus(!0)},s._onLastBumperFocus=function(){s._onBumperFocus(!1)},s._onBumperFocus=function(e){if(!s.props.disabled){var t=e===s._hasFocus?s._lastBumper.current:s._firstBumper.current;if(s._root.current){var o=e===s._hasFocus?Object(i.i)(s._root.current,t,!0,!1):Object(i.f)(s._root.current,t,!0,!1);o&&(s._isBumper(o)?s.focus():o.focus())}}},s._onFocusCapture=function(e){s.props.onFocusCapture&&s.props.onFocusCapture(e),e.target===e.currentTarget||s._isBumper(e.target)||(s._previouslyFocusedElementInTrapZone=e.target)},s._forceFocusInTrap=function(e){if(!s.props.disabled&&t._focusStack.length&&s===t._focusStack[t._focusStack.length-1]){var o=s._getDocument().activeElement;Object(r.a)(s._root.current,o)||(s.focus(),s._hasFocus=!0,e.preventDefault(),e.stopPropagation())}},s._forceClickInTrap=function(e){if(!s.props.disabled&&t._focusStack.length&&s===t._focusStack[t._focusStack.length-1]){var o=e.target;o&&!Object(r.a)(s._root.current,o)&&(s.focus(),s._hasFocus=!0,e.preventDefault(),e.stopPropagation())}},Object(a.a)(s),s}return s.__extends(t,e),t.prototype.componentDidMount=function(){this._bringFocusIntoZone(),this._updateEventHandlers(this.props)},t.prototype.UNSAFE_componentWillReceiveProps=function(e){var t=e.elementToFocusOnDismiss;t&&this._previouslyFocusedElementOutsideTrapZone!==t&&(this._previouslyFocusedElementOutsideTrapZone=t),this._updateEventHandlers(e)},t.prototype.componentDidUpdate=function(e){var t=void 0===e.forceFocusInsideTrap||e.forceFocusInsideTrap,o=void 0===this.props.forceFocusInsideTrap||this.props.forceFocusInsideTrap,s=void 0!==e.disabled&&e.disabled,n=void 0!==this.props.disabled&&this.props.disabled;!t&&o||s&&!n?this._bringFocusIntoZone():(t&&!o||!s&&n)&&this._returnFocusToInitiator()},t.prototype.componentWillUnmount=function(){this.props.disabled&&!this.props.forceFocusInsideTrap&&Object(r.a)(this._root.current,this._getDocument().activeElement)||this._returnFocusToInitiator()},t.prototype.render=function(){var e=this.props,t=e.className,o=e.disabled,r=void 0!==o&&o,i=e.ariaLabelledBy,a=Object(c.j)(this.props,c.h),l={style:{pointerEvents:"none",position:"fixed"},tabIndex:r?-1:0,"data-is-visible":!0};return n.createElement("div",s.__assign({},a,{className:t,ref:this._root,"aria-labelledby":i,onFocusCapture:this._onFocusCapture,onFocus:this._onRootFocus,onBlur:this._onRootBlur}),n.createElement("div",s.__assign({},l,{ref:this._firstBumper,onFocus:this._onFirstBumperFocus})),this.props.children,n.createElement("div",s.__assign({},l,{ref:this._lastBumper,onFocus:this._onLastBumperFocus})))},t.prototype.focus=function(){var e=this.props,t=e.focusPreviouslyFocusedInnerElement,o=e.firstFocusableSelector;if(t&&this._previouslyFocusedElementInTrapZone&&Object(r.a)(this._root.current,this._previouslyFocusedElementInTrapZone))this._focusAsync(this._previouslyFocusedElementInTrapZone);else{var s="string"==typeof o?o:o&&o(),n=null;this._root.current&&(s&&(n=this._root.current.querySelector("."+s)),n||(n=Object(i.j)(this._root.current,this._root.current.firstChild,!1,!1,!1,!0))),n&&this._focusAsync(n)}},t.prototype._focusAsync=function(e){this._isBumper(e)||Object(i.b)(e)},t.prototype._bringFocusIntoZone=function(){var e=this.props,o=e.elementToFocusOnDismiss,s=e.disabled,n=void 0!==s&&s,i=e.disableFirstFocus,a=void 0!==i&&i;n||(t._focusStack.push(this),this._previouslyFocusedElementOutsideTrapZone=o||this._getDocument().activeElement,a||Object(r.a)(this._root.current,this._previouslyFocusedElementOutsideTrapZone)||this.focus())},t.prototype._returnFocusToInitiator=function(){var e=this,o=this.props.ignoreExternalFocusing;t._focusStack=t._focusStack.filter(function(t){return e!==t});var s=this._getDocument(),n=s.activeElement;o||!this._previouslyFocusedElementOutsideTrapZone||"function"!=typeof this._previouslyFocusedElementOutsideTrapZone.focus||!Object(r.a)(this._root.current,n)&&n!==s.body||this._focusAsync(this._previouslyFocusedElementOutsideTrapZone)},t.prototype._updateEventHandlers=function(e){var t=e.isClickableOutsideFocusTrap,o=void 0!==t&&t,s=e.forceFocusInsideTrap,n=void 0===s||s;n&&!this._disposeFocusHandler?this._disposeFocusHandler=Object(l.a)(window,"focus",this._forceFocusInTrap,!0):!n&&this._disposeFocusHandler&&(this._disposeFocusHandler(),this._disposeFocusHandler=void 0),o||this._disposeClickHandler?o&&this._disposeClickHandler&&(this._disposeClickHandler(),this._disposeClickHandler=void 0):this._disposeClickHandler=Object(l.a)(window,"click",this._forceClickInTrap,!0)},t.prototype._isBumper=function(e){return e===this._firstBumper.current||e===this._lastBumper.current},t.prototype._getDocument=function(){return Object(u.a)(this._root.current)},t._focusStack=[],t}(n.Component)},667:function(e,t,o){"use strict";var s=o(700),n=o(0),r=o(1),i=o(314),a=o(704),c=o(150),l=o(156),u=Object(i.a)(),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.componentDidMount=function(){Object(a.c)()},t.prototype.componentWillUnmount=function(){Object(a.d)()},t.prototype.render=function(){var e=this.props,t=e.isDarkThemed,o=e.className,s=e.theme,i=e.styles,a=Object(c.j)(this.props,c.h),l=u(i,{theme:s,className:o,isDark:t});return r.createElement("div",n.__assign({},a,{className:l.root}))},t}(l.a),d=o(16),h={root:"ms-Overlay",rootDark:"ms-Overlay--dark"};o.d(t,"a",function(){return f});var f=Object(s.a)(p,function(e){var t,o=e.className,s=e.theme,n=e.isNone,r=e.isDark,i=s.palette,a=Object(d.getGlobalClassNames)(h,s);return{root:[a.root,s.fonts.medium,{backgroundColor:i.whiteTranslucent40,top:0,right:0,bottom:0,left:0,position:"absolute",selectors:(t={},t[d.HighContrastSelector]={border:"1px solid WindowText",opacity:0},t)},n&&{visibility:"hidden"},r&&[a.rootDark,{backgroundColor:i.blackTranslucent40}],o]}},void 0,{scope:"Overlay"})}}]);
//# sourceMappingURL=owa.vendors~LightningView.js.map
self.scriptsLoaded['owa.vendors~LightningView.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.vendors~LightningView.js'] = (new Date()).getTime();