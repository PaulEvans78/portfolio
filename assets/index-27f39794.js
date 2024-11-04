function yp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Ic(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zc={exports:{}},vo={},Rc={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gr=Symbol.for("react.element"),xp=Symbol.for("react.portal"),wp=Symbol.for("react.fragment"),Sp=Symbol.for("react.strict_mode"),kp=Symbol.for("react.profiler"),Cp=Symbol.for("react.provider"),Ep=Symbol.for("react.context"),jp=Symbol.for("react.forward_ref"),Pp=Symbol.for("react.suspense"),_p=Symbol.for("react.memo"),$p=Symbol.for("react.lazy"),Xs=Symbol.iterator;function Ip(e){return e===null||typeof e!="object"?null:(e=Xs&&e[Xs]||e["@@iterator"],typeof e=="function"?e:null)}var Tc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nc=Object.assign,Lc={};function Xn(e,t,n){this.props=e,this.context=t,this.refs=Lc,this.updater=n||Tc}Xn.prototype.isReactComponent={};Xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Oc(){}Oc.prototype=Xn.prototype;function Ba(e,t,n){this.props=e,this.context=t,this.refs=Lc,this.updater=n||Tc}var Va=Ba.prototype=new Oc;Va.constructor=Ba;Nc(Va,Xn.prototype);Va.isPureReactComponent=!0;var bs=Array.isArray,Ac=Object.prototype.hasOwnProperty,Wa={current:null},Mc={key:!0,ref:!0,__self:!0,__source:!0};function Fc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Ac.call(t,r)&&!Mc.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Gr,type:e,key:o,ref:l,props:i,_owner:Wa.current}}function zp(e,t){return{$$typeof:Gr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ha(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gr}function Rp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zs=/\/+/g;function rl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rp(""+e.key):t.toString(36)}function Ci(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Gr:case xp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+rl(l,0):r,bs(i)?(n="",e!=null&&(n=e.replace(Zs,"$&/")+"/"),Ci(i,t,n,"",function(u){return u})):i!=null&&(Ha(i)&&(i=zp(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Zs,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",bs(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+rl(o,a);l+=Ci(o,t,n,s,i)}else if(s=Ip(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+rl(o,a++),l+=Ci(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ti(e,t,n){if(e==null)return e;var r=[],i=0;return Ci(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Tp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},Ei={transition:null},Np={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Ei,ReactCurrentOwner:Wa};function Dc(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:ti,forEach:function(e,t,n){ti(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ti(e,function(){t++}),t},toArray:function(e){return ti(e,function(t){return t})||[]},only:function(e){if(!Ha(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Xn;V.Fragment=wp;V.Profiler=kp;V.PureComponent=Ba;V.StrictMode=Sp;V.Suspense=Pp;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Np;V.act=Dc;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Nc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Wa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Ac.call(t,s)&&!Mc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Gr,type:e.type,key:i,ref:o,props:r,_owner:l}};V.createContext=function(e){return e={$$typeof:Ep,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cp,_context:e},e.Consumer=e};V.createElement=Fc;V.createFactory=function(e){var t=Fc.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:jp,render:e}};V.isValidElement=Ha;V.lazy=function(e){return{$$typeof:$p,_payload:{_status:-1,_result:e},_init:Tp}};V.memo=function(e,t){return{$$typeof:_p,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=Ei.transition;Ei.transition={};try{e()}finally{Ei.transition=t}};V.unstable_act=Dc;V.useCallback=function(e,t){return Fe.current.useCallback(e,t)};V.useContext=function(e){return Fe.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};V.useEffect=function(e,t){return Fe.current.useEffect(e,t)};V.useId=function(){return Fe.current.useId()};V.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Fe.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};V.useRef=function(e){return Fe.current.useRef(e)};V.useState=function(e){return Fe.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Fe.current.useTransition()};V.version="18.3.1";Rc.exports=V;var E=Rc.exports;const pe=Ic(E),Lp=yp({__proto__:null,default:pe},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op=E,Ap=Symbol.for("react.element"),Mp=Symbol.for("react.fragment"),Fp=Object.prototype.hasOwnProperty,Dp=Op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Up={key:!0,ref:!0,__self:!0,__source:!0};function Uc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Fp.call(t,r)&&!Up.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ap,type:e,key:o,ref:l,props:i,_owner:Dp.current}}vo.Fragment=Mp;vo.jsx=Uc;vo.jsxs=Uc;zc.exports=vo;var f=zc.exports,Ml={},Bc={exports:{}},be={},Vc={exports:{}},Wc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,A){var F=_.length;_.push(A);e:for(;0<F;){var G=F-1>>>1,$=_[G];if(0<i($,A))_[G]=A,_[F]=$,F=G;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var A=_[0],F=_.pop();if(F!==A){_[0]=F;e:for(var G=0,$=_.length,z=$>>>1;G<z;){var L=2*(G+1)-1,D=_[L],y=L+1,H=_[y];if(0>i(D,F))y<$&&0>i(H,D)?(_[G]=H,_[y]=F,G=y):(_[G]=D,_[L]=F,G=L);else if(y<$&&0>i(H,F))_[G]=H,_[y]=F,G=y;else break e}}return A}function i(_,A){var F=_.sortIndex-A.sortIndex;return F!==0?F:_.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],h=1,m=null,g=3,k=!1,w=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(_){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=_)r(u),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(u)}}function x(_){if(v=!1,p(_),!w)if(n(s)!==null)w=!0,qe(j);else{var A=n(u);A!==null&&we(x,A.startTime-_)}}function j(_,A){w=!1,v&&(v=!1,d(N),N=-1),k=!0;var F=g;try{for(p(A),m=n(s);m!==null&&(!(m.expirationTime>A)||_&&!fe());){var G=m.callback;if(typeof G=="function"){m.callback=null,g=m.priorityLevel;var $=G(m.expirationTime<=A);A=e.unstable_now(),typeof $=="function"?m.callback=$:m===n(s)&&r(s),p(A)}else r(s);m=n(s)}if(m!==null)var z=!0;else{var L=n(u);L!==null&&we(x,L.startTime-A),z=!1}return z}finally{m=null,g=F,k=!1}}var R=!1,T=null,N=-1,W=5,M=-1;function fe(){return!(e.unstable_now()-M<W)}function ue(){if(T!==null){var _=e.unstable_now();M=_;var A=!0;try{A=T(!0,_)}finally{A?ge():(R=!1,T=null)}}else R=!1}var ge;if(typeof c=="function")ge=function(){c(ue)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,xe=Oe.port2;Oe.port1.onmessage=ue,ge=function(){xe.postMessage(null)}}else ge=function(){C(ue,0)};function qe(_){T=_,R||(R=!0,ge())}function we(_,A){N=C(function(){_(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||k||(w=!0,qe(j))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var A=3;break;default:A=g}var F=g;g=A;try{return _()}finally{g=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,A){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var F=g;g=_;try{return A()}finally{g=F}},e.unstable_scheduleCallback=function(_,A,F){var G=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?G+F:G):F=G,_){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=F+$,_={id:h++,callback:A,priorityLevel:_,startTime:F,expirationTime:$,sortIndex:-1},F>G?(_.sortIndex=F,t(u,_),n(s)===null&&_===n(u)&&(v?(d(N),N=-1):v=!0,we(x,F-G))):(_.sortIndex=$,t(s,_),w||k||(w=!0,qe(j))),_},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(_){var A=g;return function(){var F=g;g=A;try{return _.apply(this,arguments)}finally{g=F}}}})(Wc);Vc.exports=Wc;var Bp=Vc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp=E,Xe=Bp;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hc=new Set,_r={};function mn(e,t){Un(e,t),Un(e+"Capture",t)}function Un(e,t){for(_r[e]=t,e=0;e<t.length;e++)Hc.add(t[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fl=Object.prototype.hasOwnProperty,Wp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Js={},qs={};function Hp(e){return Fl.call(qs,e)?!0:Fl.call(Js,e)?!1:Wp.test(e)?qs[e]=!0:(Js[e]=!0,!1)}function Qp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yp(e,t,n,r){if(t===null||typeof t>"u"||Qp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qa=/[\-:]([a-z])/g;function Ya(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qa,Ya);Ie[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qa,Ya);Ie[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qa,Ya);Ie[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ga(e,t,n,r){var i=Ie.hasOwnProperty(t)?Ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Yp(t,n,i,r)&&(n=null),r||i===null?Hp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zt=Vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ni=Symbol.for("react.element"),Sn=Symbol.for("react.portal"),kn=Symbol.for("react.fragment"),Ka=Symbol.for("react.strict_mode"),Dl=Symbol.for("react.profiler"),Qc=Symbol.for("react.provider"),Yc=Symbol.for("react.context"),Xa=Symbol.for("react.forward_ref"),Ul=Symbol.for("react.suspense"),Bl=Symbol.for("react.suspense_list"),ba=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Gc=Symbol.for("react.offscreen"),eu=Symbol.iterator;function nr(e){return e===null||typeof e!="object"?null:(e=eu&&e[eu]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,il;function dr(e){if(il===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);il=t&&t[1]||""}return`
`+il+e}var ol=!1;function ll(e,t){if(!e||ol)return"";ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{ol=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dr(e):""}function Gp(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=ll(e.type,!1),e;case 11:return e=ll(e.type.render,!1),e;case 1:return e=ll(e.type,!0),e;default:return""}}function Vl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kn:return"Fragment";case Sn:return"Portal";case Dl:return"Profiler";case Ka:return"StrictMode";case Ul:return"Suspense";case Bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yc:return(e.displayName||"Context")+".Consumer";case Qc:return(e._context.displayName||"Context")+".Provider";case Xa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ba:return t=e.displayName||null,t!==null?t:Vl(e.type)||"Memo";case Nt:t=e._payload,e=e._init;try{return Vl(e(t))}catch{}}return null}function Kp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vl(t);case 8:return t===Ka?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xp(e){var t=Kc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ri(e){e._valueTracker||(e._valueTracker=Xp(e))}function Xc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Kc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wl(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function tu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bc(e,t){t=t.checked,t!=null&&Ga(e,"checked",t,!1)}function Hl(e,t){bc(e,t);var n=bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ql(e,t.type,bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function nu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ql(e,t,n){(t!=="number"||Di(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ru(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(fr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bt(n)}}function Zc(e,t){var n=bt(t.value),r=bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function iu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ii,qc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ii=ii||document.createElement("div"),ii.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ii.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bp=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(e){bp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hr[t]=hr[e]})});function ed(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hr.hasOwnProperty(e)&&hr[e]?(""+t).trim():t+"px"}function td(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ed(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Zp=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kl(e,t){if(t){if(Zp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Xl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bl=null;function Za(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zl=null,On=null,An=null;function ou(e){if(e=br(e)){if(typeof Zl!="function")throw Error(P(280));var t=e.stateNode;t&&(t=ko(t),Zl(e.stateNode,e.type,t))}}function nd(e){On?An?An.push(e):An=[e]:On=e}function rd(){if(On){var e=On,t=An;if(An=On=null,ou(e),t)for(e=0;e<t.length;e++)ou(t[e])}}function id(e,t){return e(t)}function od(){}var al=!1;function ld(e,t,n){if(al)return e(t,n);al=!0;try{return id(e,t,n)}finally{al=!1,(On!==null||An!==null)&&(od(),rd())}}function Ir(e,t){var n=e.stateNode;if(n===null)return null;var r=ko(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Jl=!1;if(Pt)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){Jl=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{Jl=!1}function Jp(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var gr=!1,Ui=null,Bi=!1,ql=null,qp={onError:function(e){gr=!0,Ui=e}};function em(e,t,n,r,i,o,l,a,s){gr=!1,Ui=null,Jp.apply(qp,arguments)}function tm(e,t,n,r,i,o,l,a,s){if(em.apply(this,arguments),gr){if(gr){var u=Ui;gr=!1,Ui=null}else throw Error(P(198));Bi||(Bi=!0,ql=u)}}function hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ad(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lu(e){if(hn(e)!==e)throw Error(P(188))}function nm(e){var t=e.alternate;if(!t){if(t=hn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return lu(i),e;if(o===r)return lu(i),t;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function sd(e){return e=nm(e),e!==null?ud(e):null}function ud(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ud(e);if(t!==null)return t;e=e.sibling}return null}var cd=Xe.unstable_scheduleCallback,au=Xe.unstable_cancelCallback,rm=Xe.unstable_shouldYield,im=Xe.unstable_requestPaint,de=Xe.unstable_now,om=Xe.unstable_getCurrentPriorityLevel,Ja=Xe.unstable_ImmediatePriority,dd=Xe.unstable_UserBlockingPriority,Vi=Xe.unstable_NormalPriority,lm=Xe.unstable_LowPriority,fd=Xe.unstable_IdlePriority,yo=null,yt=null;function am(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(yo,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:cm,sm=Math.log,um=Math.LN2;function cm(e){return e>>>=0,e===0?32:31-(sm(e)/um|0)|0}var oi=64,li=4194304;function pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=pr(a):(o&=l,o!==0&&(r=pr(o)))}else l=n&~i,l!==0?r=pr(l):o!==0&&(r=pr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),i=1<<n,r|=e[n],t&=~i;return r}function dm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-ft(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=dm(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function ea(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pd(){var e=oi;return oi<<=1,!(oi&4194240)&&(oi=64),e}function sl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function pm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ft(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function qa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Z=0;function md(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hd,es,gd,vd,yd,ta=!1,ai=[],Ut=null,Bt=null,Vt=null,zr=new Map,Rr=new Map,Ot=[],mm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function su(e,t){switch(e){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(t.pointerId)}}function ir(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=br(t),t!==null&&es(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function hm(e,t,n,r,i){switch(t){case"focusin":return Ut=ir(Ut,e,t,n,r,i),!0;case"dragenter":return Bt=ir(Bt,e,t,n,r,i),!0;case"mouseover":return Vt=ir(Vt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return zr.set(o,ir(zr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Rr.set(o,ir(Rr.get(o)||null,e,t,n,r,i)),!0}return!1}function xd(e){var t=rn(e.target);if(t!==null){var n=hn(t);if(n!==null){if(t=n.tag,t===13){if(t=ad(n),t!==null){e.blockedOn=t,yd(e.priority,function(){gd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=na(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bl=r,n.target.dispatchEvent(r),bl=null}else return t=br(n),t!==null&&es(t),e.blockedOn=n,!1;t.shift()}return!0}function uu(e,t,n){ji(e)&&n.delete(t)}function gm(){ta=!1,Ut!==null&&ji(Ut)&&(Ut=null),Bt!==null&&ji(Bt)&&(Bt=null),Vt!==null&&ji(Vt)&&(Vt=null),zr.forEach(uu),Rr.forEach(uu)}function or(e,t){e.blockedOn===t&&(e.blockedOn=null,ta||(ta=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,gm)))}function Tr(e){function t(i){return or(i,e)}if(0<ai.length){or(ai[0],e);for(var n=1;n<ai.length;n++){var r=ai[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ut!==null&&or(Ut,e),Bt!==null&&or(Bt,e),Vt!==null&&or(Vt,e),zr.forEach(t),Rr.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)xd(n),n.blockedOn===null&&Ot.shift()}var Mn=zt.ReactCurrentBatchConfig,Hi=!0;function vm(e,t,n,r){var i=Z,o=Mn.transition;Mn.transition=null;try{Z=1,ts(e,t,n,r)}finally{Z=i,Mn.transition=o}}function ym(e,t,n,r){var i=Z,o=Mn.transition;Mn.transition=null;try{Z=4,ts(e,t,n,r)}finally{Z=i,Mn.transition=o}}function ts(e,t,n,r){if(Hi){var i=na(e,t,n,r);if(i===null)yl(e,t,r,Qi,n),su(e,r);else if(hm(i,e,t,n,r))r.stopPropagation();else if(su(e,r),t&4&&-1<mm.indexOf(e)){for(;i!==null;){var o=br(i);if(o!==null&&hd(o),o=na(e,t,n,r),o===null&&yl(e,t,r,Qi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else yl(e,t,r,null,n)}}var Qi=null;function na(e,t,n,r){if(Qi=null,e=Za(r),e=rn(e),e!==null)if(t=hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ad(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qi=e,null}function wd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(om()){case Ja:return 1;case dd:return 4;case Vi:case lm:return 16;case fd:return 536870912;default:return 16}default:return 16}}var Mt=null,ns=null,Pi=null;function Sd(){if(Pi)return Pi;var e,t=ns,n=t.length,r,i="value"in Mt?Mt.value:Mt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Pi=i.slice(e,1<r?1-r:void 0)}function _i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function si(){return!0}function cu(){return!1}function Ze(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?si:cu,this.isPropagationStopped=cu,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=si)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=si)},persist:function(){},isPersistent:si}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rs=Ze(bn),Xr=le({},bn,{view:0,detail:0}),xm=Ze(Xr),ul,cl,lr,xo=le({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&e.type==="mousemove"?(ul=e.screenX-lr.screenX,cl=e.screenY-lr.screenY):cl=ul=0,lr=e),ul)},movementY:function(e){return"movementY"in e?e.movementY:cl}}),du=Ze(xo),wm=le({},xo,{dataTransfer:0}),Sm=Ze(wm),km=le({},Xr,{relatedTarget:0}),dl=Ze(km),Cm=le({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Em=Ze(Cm),jm=le({},bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pm=Ze(jm),_m=le({},bn,{data:0}),fu=Ze(_m),$m={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Im={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zm[e])?!!t[e]:!1}function is(){return Rm}var Tm=le({},Xr,{key:function(e){if(e.key){var t=$m[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Im[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:is,charCode:function(e){return e.type==="keypress"?_i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nm=Ze(Tm),Lm=le({},xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pu=Ze(Lm),Om=le({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:is}),Am=Ze(Om),Mm=le({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fm=Ze(Mm),Dm=le({},xo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Um=Ze(Dm),Bm=[9,13,27,32],os=Pt&&"CompositionEvent"in window,vr=null;Pt&&"documentMode"in document&&(vr=document.documentMode);var Vm=Pt&&"TextEvent"in window&&!vr,kd=Pt&&(!os||vr&&8<vr&&11>=vr),mu=String.fromCharCode(32),hu=!1;function Cd(e,t){switch(e){case"keyup":return Bm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ed(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function Wm(e,t){switch(e){case"compositionend":return Ed(t);case"keypress":return t.which!==32?null:(hu=!0,mu);case"textInput":return e=t.data,e===mu&&hu?null:e;default:return null}}function Hm(e,t){if(Cn)return e==="compositionend"||!os&&Cd(e,t)?(e=Sd(),Pi=ns=Mt=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kd&&t.locale!=="ko"?null:t.data;default:return null}}var Qm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qm[e.type]:t==="textarea"}function jd(e,t,n,r){nd(r),t=Yi(t,"onChange"),0<t.length&&(n=new rs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yr=null,Nr=null;function Ym(e){Ad(e,0)}function wo(e){var t=Pn(e);if(Xc(t))return e}function Gm(e,t){if(e==="change")return t}var Pd=!1;if(Pt){var fl;if(Pt){var pl="oninput"in document;if(!pl){var vu=document.createElement("div");vu.setAttribute("oninput","return;"),pl=typeof vu.oninput=="function"}fl=pl}else fl=!1;Pd=fl&&(!document.documentMode||9<document.documentMode)}function yu(){yr&&(yr.detachEvent("onpropertychange",_d),Nr=yr=null)}function _d(e){if(e.propertyName==="value"&&wo(Nr)){var t=[];jd(t,Nr,e,Za(e)),ld(Ym,t)}}function Km(e,t,n){e==="focusin"?(yu(),yr=t,Nr=n,yr.attachEvent("onpropertychange",_d)):e==="focusout"&&yu()}function Xm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wo(Nr)}function bm(e,t){if(e==="click")return wo(t)}function Zm(e,t){if(e==="input"||e==="change")return wo(t)}function Jm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:Jm;function Lr(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fl.call(t,i)||!mt(e[i],t[i]))return!1}return!0}function xu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wu(e,t){var n=xu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xu(n)}}function $d(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$d(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Id(){for(var e=window,t=Di();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Di(e.document)}return t}function ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qm(e){var t=Id(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$d(n.ownerDocument.documentElement,n)){if(r!==null&&ls(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=wu(n,o);var l=wu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var eh=Pt&&"documentMode"in document&&11>=document.documentMode,En=null,ra=null,xr=null,ia=!1;function Su(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ia||En==null||En!==Di(r)||(r=En,"selectionStart"in r&&ls(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xr&&Lr(xr,r)||(xr=r,r=Yi(ra,"onSelect"),0<r.length&&(t=new rs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function ui(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jn={animationend:ui("Animation","AnimationEnd"),animationiteration:ui("Animation","AnimationIteration"),animationstart:ui("Animation","AnimationStart"),transitionend:ui("Transition","TransitionEnd")},ml={},zd={};Pt&&(zd=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function So(e){if(ml[e])return ml[e];if(!jn[e])return e;var t=jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zd)return ml[e]=t[n];return e}var Rd=So("animationend"),Td=So("animationiteration"),Nd=So("animationstart"),Ld=So("transitionend"),Od=new Map,ku="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(e,t){Od.set(e,t),mn(t,[e])}for(var hl=0;hl<ku.length;hl++){var gl=ku[hl],th=gl.toLowerCase(),nh=gl[0].toUpperCase()+gl.slice(1);Jt(th,"on"+nh)}Jt(Rd,"onAnimationEnd");Jt(Td,"onAnimationIteration");Jt(Nd,"onAnimationStart");Jt("dblclick","onDoubleClick");Jt("focusin","onFocus");Jt("focusout","onBlur");Jt(Ld,"onTransitionEnd");Un("onMouseEnter",["mouseout","mouseover"]);Un("onMouseLeave",["mouseout","mouseover"]);Un("onPointerEnter",["pointerout","pointerover"]);Un("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rh=new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));function Cu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,tm(r,t,void 0,e),e.currentTarget=null}function Ad(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Cu(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Cu(i,a,u),o=s}}}if(Bi)throw e=ql,Bi=!1,ql=null,e}function te(e,t){var n=t[ua];n===void 0&&(n=t[ua]=new Set);var r=e+"__bubble";n.has(r)||(Md(t,e,2,!1),n.add(r))}function vl(e,t,n){var r=0;t&&(r|=4),Md(n,e,r,t)}var ci="_reactListening"+Math.random().toString(36).slice(2);function Or(e){if(!e[ci]){e[ci]=!0,Hc.forEach(function(n){n!=="selectionchange"&&(rh.has(n)||vl(n,!1,e),vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ci]||(t[ci]=!0,vl("selectionchange",!1,t))}}function Md(e,t,n,r){switch(wd(t)){case 1:var i=vm;break;case 4:i=ym;break;default:i=ts}n=i.bind(null,t,n,e),i=void 0,!Jl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function yl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=rn(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}ld(function(){var u=o,h=Za(n),m=[];e:{var g=Od.get(e);if(g!==void 0){var k=rs,w=e;switch(e){case"keypress":if(_i(n)===0)break e;case"keydown":case"keyup":k=Nm;break;case"focusin":w="focus",k=dl;break;case"focusout":w="blur",k=dl;break;case"beforeblur":case"afterblur":k=dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=du;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Sm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Am;break;case Rd:case Td:case Nd:k=Em;break;case Ld:k=Fm;break;case"scroll":k=xm;break;case"wheel":k=Um;break;case"copy":case"cut":case"paste":k=Pm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=pu}var v=(t&4)!==0,C=!v&&e==="scroll",d=v?g!==null?g+"Capture":null:g;v=[];for(var c=u,p;c!==null;){p=c;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,d!==null&&(x=Ir(c,d),x!=null&&v.push(Ar(c,x,p)))),C)break;c=c.return}0<v.length&&(g=new k(g,w,null,n,h),m.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",g&&n!==bl&&(w=n.relatedTarget||n.fromElement)&&(rn(w)||w[_t]))break e;if((k||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,k?(w=n.relatedTarget||n.toElement,k=u,w=w?rn(w):null,w!==null&&(C=hn(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(k=null,w=u),k!==w)){if(v=du,x="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=pu,x="onPointerLeave",d="onPointerEnter",c="pointer"),C=k==null?g:Pn(k),p=w==null?g:Pn(w),g=new v(x,c+"leave",k,n,h),g.target=C,g.relatedTarget=p,x=null,rn(h)===u&&(v=new v(d,c+"enter",w,n,h),v.target=p,v.relatedTarget=C,x=v),C=x,k&&w)t:{for(v=k,d=w,c=0,p=v;p;p=xn(p))c++;for(p=0,x=d;x;x=xn(x))p++;for(;0<c-p;)v=xn(v),c--;for(;0<p-c;)d=xn(d),p--;for(;c--;){if(v===d||d!==null&&v===d.alternate)break t;v=xn(v),d=xn(d)}v=null}else v=null;k!==null&&Eu(m,g,k,v,!1),w!==null&&C!==null&&Eu(m,C,w,v,!0)}}e:{if(g=u?Pn(u):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var j=Gm;else if(gu(g))if(Pd)j=Zm;else{j=Xm;var R=Km}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=bm);if(j&&(j=j(e,u))){jd(m,j,n,h);break e}R&&R(e,g,u),e==="focusout"&&(R=g._wrapperState)&&R.controlled&&g.type==="number"&&Ql(g,"number",g.value)}switch(R=u?Pn(u):window,e){case"focusin":(gu(R)||R.contentEditable==="true")&&(En=R,ra=u,xr=null);break;case"focusout":xr=ra=En=null;break;case"mousedown":ia=!0;break;case"contextmenu":case"mouseup":case"dragend":ia=!1,Su(m,n,h);break;case"selectionchange":if(eh)break;case"keydown":case"keyup":Su(m,n,h)}var T;if(os)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Cn?Cd(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(kd&&n.locale!=="ko"&&(Cn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Cn&&(T=Sd()):(Mt=h,ns="value"in Mt?Mt.value:Mt.textContent,Cn=!0)),R=Yi(u,N),0<R.length&&(N=new fu(N,e,null,n,h),m.push({event:N,listeners:R}),T?N.data=T:(T=Ed(n),T!==null&&(N.data=T)))),(T=Vm?Wm(e,n):Hm(e,n))&&(u=Yi(u,"onBeforeInput"),0<u.length&&(h=new fu("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:u}),h.data=T))}Ad(m,t)})}function Ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ir(e,n),o!=null&&r.unshift(Ar(e,o,i)),o=Ir(e,t),o!=null&&r.push(Ar(e,o,i))),e=e.return}return r}function xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Eu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=Ir(n,o),s!=null&&l.unshift(Ar(n,s,a))):i||(s=Ir(n,o),s!=null&&l.push(Ar(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var ih=/\r\n?/g,oh=/\u0000|\uFFFD/g;function ju(e){return(typeof e=="string"?e:""+e).replace(ih,`
`).replace(oh,"")}function di(e,t,n){if(t=ju(t),ju(e)!==t&&n)throw Error(P(425))}function Gi(){}var oa=null,la=null;function aa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sa=typeof setTimeout=="function"?setTimeout:void 0,lh=typeof clearTimeout=="function"?clearTimeout:void 0,Pu=typeof Promise=="function"?Promise:void 0,ah=typeof queueMicrotask=="function"?queueMicrotask:typeof Pu<"u"?function(e){return Pu.resolve(null).then(e).catch(sh)}:sa;function sh(e){setTimeout(function(){throw e})}function xl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Tr(t)}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _u(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zn=Math.random().toString(36).slice(2),vt="__reactFiber$"+Zn,Mr="__reactProps$"+Zn,_t="__reactContainer$"+Zn,ua="__reactEvents$"+Zn,uh="__reactListeners$"+Zn,ch="__reactHandles$"+Zn;function rn(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_u(e);e!==null;){if(n=e[vt])return n;e=_u(e)}return t}e=n,n=e.parentNode}return null}function br(e){return e=e[vt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function ko(e){return e[Mr]||null}var ca=[],_n=-1;function qt(e){return{current:e}}function ne(e){0>_n||(e.current=ca[_n],ca[_n]=null,_n--)}function ee(e,t){_n++,ca[_n]=e.current,e.current=t}var Zt={},Le=qt(Zt),We=qt(!1),un=Zt;function Bn(e,t){var n=e.type.contextTypes;if(!n)return Zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function He(e){return e=e.childContextTypes,e!=null}function Ki(){ne(We),ne(Le)}function $u(e,t,n){if(Le.current!==Zt)throw Error(P(168));ee(Le,t),ee(We,n)}function Fd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,Kp(e)||"Unknown",i));return le({},n,r)}function Xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,un=Le.current,ee(Le,e),ee(We,We.current),!0}function Iu(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Fd(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,ne(We),ne(Le),ee(Le,e)):ne(We),ee(We,n)}var St=null,Co=!1,wl=!1;function Dd(e){St===null?St=[e]:St.push(e)}function dh(e){Co=!0,Dd(e)}function en(){if(!wl&&St!==null){wl=!0;var e=0,t=Z;try{var n=St;for(Z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,Co=!1}catch(i){throw St!==null&&(St=St.slice(e+1)),cd(Ja,en),i}finally{Z=t,wl=!1}}return null}var $n=[],In=0,bi=null,Zi=0,et=[],tt=0,cn=null,kt=1,Ct="";function tn(e,t){$n[In++]=Zi,$n[In++]=bi,bi=e,Zi=t}function Ud(e,t,n){et[tt++]=kt,et[tt++]=Ct,et[tt++]=cn,cn=e;var r=kt;e=Ct;var i=32-ft(r)-1;r&=~(1<<i),n+=1;var o=32-ft(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,kt=1<<32-ft(t)+i|n<<i|r,Ct=o+e}else kt=1<<o|n<<i|r,Ct=e}function as(e){e.return!==null&&(tn(e,1),Ud(e,1,0))}function ss(e){for(;e===bi;)bi=$n[--In],$n[In]=null,Zi=$n[--In],$n[In]=null;for(;e===cn;)cn=et[--tt],et[tt]=null,Ct=et[--tt],et[tt]=null,kt=et[--tt],et[tt]=null}var Ke=null,Ge=null,re=!1,dt=null;function Bd(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,Ge=Wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:kt,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,Ge=null,!0):!1;default:return!1}}function da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fa(e){if(re){var t=Ge;if(t){var n=t;if(!zu(e,t)){if(da(e))throw Error(P(418));t=Wt(n.nextSibling);var r=Ke;t&&zu(e,t)?Bd(r,n):(e.flags=e.flags&-4097|2,re=!1,Ke=e)}}else{if(da(e))throw Error(P(418));e.flags=e.flags&-4097|2,re=!1,Ke=e}}}function Ru(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function fi(e){if(e!==Ke)return!1;if(!re)return Ru(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!aa(e.type,e.memoizedProps)),t&&(t=Ge)){if(da(e))throw Vd(),Error(P(418));for(;t;)Bd(e,t),t=Wt(t.nextSibling)}if(Ru(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=Ke?Wt(e.stateNode.nextSibling):null;return!0}function Vd(){for(var e=Ge;e;)e=Wt(e.nextSibling)}function Vn(){Ge=Ke=null,re=!1}function us(e){dt===null?dt=[e]:dt.push(e)}var fh=zt.ReactCurrentBatchConfig;function ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function pi(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Tu(e){var t=e._init;return t(e._payload)}function Wd(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=Gt(d,c),d.index=0,d.sibling=null,d}function o(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,p,x){return c===null||c.tag!==6?(c=_l(p,d.mode,x),c.return=d,c):(c=i(c,p),c.return=d,c)}function s(d,c,p,x){var j=p.type;return j===kn?h(d,c,p.props.children,x,p.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Nt&&Tu(j)===c.type)?(x=i(c,p.props),x.ref=ar(d,c,p),x.return=d,x):(x=Li(p.type,p.key,p.props,null,d.mode,x),x.ref=ar(d,c,p),x.return=d,x)}function u(d,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=$l(p,d.mode,x),c.return=d,c):(c=i(c,p.children||[]),c.return=d,c)}function h(d,c,p,x,j){return c===null||c.tag!==7?(c=sn(p,d.mode,x,j),c.return=d,c):(c=i(c,p),c.return=d,c)}function m(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=_l(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ni:return p=Li(c.type,c.key,c.props,null,d.mode,p),p.ref=ar(d,null,c),p.return=d,p;case Sn:return c=$l(c,d.mode,p),c.return=d,c;case Nt:var x=c._init;return m(d,x(c._payload),p)}if(fr(c)||nr(c))return c=sn(c,d.mode,p,null),c.return=d,c;pi(d,c)}return null}function g(d,c,p,x){var j=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:a(d,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ni:return p.key===j?s(d,c,p,x):null;case Sn:return p.key===j?u(d,c,p,x):null;case Nt:return j=p._init,g(d,c,j(p._payload),x)}if(fr(p)||nr(p))return j!==null?null:h(d,c,p,x,null);pi(d,p)}return null}function k(d,c,p,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(p)||null,a(c,d,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ni:return d=d.get(x.key===null?p:x.key)||null,s(c,d,x,j);case Sn:return d=d.get(x.key===null?p:x.key)||null,u(c,d,x,j);case Nt:var R=x._init;return k(d,c,p,R(x._payload),j)}if(fr(x)||nr(x))return d=d.get(p)||null,h(c,d,x,j,null);pi(c,x)}return null}function w(d,c,p,x){for(var j=null,R=null,T=c,N=c=0,W=null;T!==null&&N<p.length;N++){T.index>N?(W=T,T=null):W=T.sibling;var M=g(d,T,p[N],x);if(M===null){T===null&&(T=W);break}e&&T&&M.alternate===null&&t(d,T),c=o(M,c,N),R===null?j=M:R.sibling=M,R=M,T=W}if(N===p.length)return n(d,T),re&&tn(d,N),j;if(T===null){for(;N<p.length;N++)T=m(d,p[N],x),T!==null&&(c=o(T,c,N),R===null?j=T:R.sibling=T,R=T);return re&&tn(d,N),j}for(T=r(d,T);N<p.length;N++)W=k(T,d,N,p[N],x),W!==null&&(e&&W.alternate!==null&&T.delete(W.key===null?N:W.key),c=o(W,c,N),R===null?j=W:R.sibling=W,R=W);return e&&T.forEach(function(fe){return t(d,fe)}),re&&tn(d,N),j}function v(d,c,p,x){var j=nr(p);if(typeof j!="function")throw Error(P(150));if(p=j.call(p),p==null)throw Error(P(151));for(var R=j=null,T=c,N=c=0,W=null,M=p.next();T!==null&&!M.done;N++,M=p.next()){T.index>N?(W=T,T=null):W=T.sibling;var fe=g(d,T,M.value,x);if(fe===null){T===null&&(T=W);break}e&&T&&fe.alternate===null&&t(d,T),c=o(fe,c,N),R===null?j=fe:R.sibling=fe,R=fe,T=W}if(M.done)return n(d,T),re&&tn(d,N),j;if(T===null){for(;!M.done;N++,M=p.next())M=m(d,M.value,x),M!==null&&(c=o(M,c,N),R===null?j=M:R.sibling=M,R=M);return re&&tn(d,N),j}for(T=r(d,T);!M.done;N++,M=p.next())M=k(T,d,N,M.value,x),M!==null&&(e&&M.alternate!==null&&T.delete(M.key===null?N:M.key),c=o(M,c,N),R===null?j=M:R.sibling=M,R=M);return e&&T.forEach(function(ue){return t(d,ue)}),re&&tn(d,N),j}function C(d,c,p,x){if(typeof p=="object"&&p!==null&&p.type===kn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ni:e:{for(var j=p.key,R=c;R!==null;){if(R.key===j){if(j=p.type,j===kn){if(R.tag===7){n(d,R.sibling),c=i(R,p.props.children),c.return=d,d=c;break e}}else if(R.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Nt&&Tu(j)===R.type){n(d,R.sibling),c=i(R,p.props),c.ref=ar(d,R,p),c.return=d,d=c;break e}n(d,R);break}else t(d,R);R=R.sibling}p.type===kn?(c=sn(p.props.children,d.mode,x,p.key),c.return=d,d=c):(x=Li(p.type,p.key,p.props,null,d.mode,x),x.ref=ar(d,c,p),x.return=d,d=x)}return l(d);case Sn:e:{for(R=p.key;c!==null;){if(c.key===R)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=i(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=$l(p,d.mode,x),c.return=d,d=c}return l(d);case Nt:return R=p._init,C(d,c,R(p._payload),x)}if(fr(p))return w(d,c,p,x);if(nr(p))return v(d,c,p,x);pi(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,p),c.return=d,d=c):(n(d,c),c=_l(p,d.mode,x),c.return=d,d=c),l(d)):n(d,c)}return C}var Wn=Wd(!0),Hd=Wd(!1),Ji=qt(null),qi=null,zn=null,cs=null;function ds(){cs=zn=qi=null}function fs(e){var t=Ji.current;ne(Ji),e._currentValue=t}function pa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fn(e,t){qi=e,cs=zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(cs!==e)if(e={context:e,memoizedValue:t,next:null},zn===null){if(qi===null)throw Error(P(308));zn=e,qi.dependencies={lanes:0,firstContext:e}}else zn=zn.next=e;return t}var on=null;function ps(e){on===null?on=[e]:on.push(e)}function Qd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ps(t)):(n.next=i.next,i.next=n),t.interleaved=n,$t(e,r)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Lt=!1;function ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$t(e,n)}return i=r.interleaved,i===null?(t.next=t,ps(r)):(t.next=i.next,i.next=t),r.interleaved=t,$t(e,n)}function $i(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qa(e,n)}}function Nu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var i=e.updateQueue;Lt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=s))}if(o!==null){var m=i.baseState;l=0,h=u=s=null,a=o;do{var g=a.lane,k=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,v=a;switch(g=t,k=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){m=w.call(k,m,g);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,g=typeof w=="function"?w.call(k,m,g):w,g==null)break e;m=le({},m,g);break e;case 2:Lt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else k={eventTime:k,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=k,s=m):h=h.next=k,l|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(h===null&&(s=m),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);fn|=l,e.lanes=l,e.memoizedState=m}}function Lu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Zr={},xt=qt(Zr),Fr=qt(Zr),Dr=qt(Zr);function ln(e){if(e===Zr)throw Error(P(174));return e}function hs(e,t){switch(ee(Dr,t),ee(Fr,e),ee(xt,Zr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gl(t,e)}ne(xt),ee(xt,t)}function Hn(){ne(xt),ne(Fr),ne(Dr)}function Gd(e){ln(Dr.current);var t=ln(xt.current),n=Gl(t,e.type);t!==n&&(ee(Fr,e),ee(xt,n))}function gs(e){Fr.current===e&&(ne(xt),ne(Fr))}var ie=qt(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sl=[];function vs(){for(var e=0;e<Sl.length;e++)Sl[e]._workInProgressVersionPrimary=null;Sl.length=0}var Ii=zt.ReactCurrentDispatcher,kl=zt.ReactCurrentBatchConfig,dn=0,oe=null,ve=null,Se=null,no=!1,wr=!1,Ur=0,ph=0;function Re(){throw Error(P(321))}function ys(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function xs(e,t,n,r,i,o){if(dn=o,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ii.current=e===null||e.memoizedState===null?vh:yh,e=n(r,i),wr){o=0;do{if(wr=!1,Ur=0,25<=o)throw Error(P(301));o+=1,Se=ve=null,t.updateQueue=null,Ii.current=xh,e=n(r,i)}while(wr)}if(Ii.current=ro,t=ve!==null&&ve.next!==null,dn=0,Se=ve=oe=null,no=!1,t)throw Error(P(300));return e}function ws(){var e=Ur!==0;return Ur=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?oe.memoizedState=Se=e:Se=Se.next=e,Se}function ot(){if(ve===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=Se===null?oe.memoizedState:Se.next;if(t!==null)Se=t,ve=e;else{if(e===null)throw Error(P(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Se===null?oe.memoizedState=Se=e:Se=Se.next=e}return Se}function Br(e,t){return typeof t=="function"?t(e):t}function Cl(e){var t=ot(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ve,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var h=u.lane;if((dn&h)===h)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=m,l=r):s=s.next=m,oe.lanes|=h,fn|=h}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,mt(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,oe.lanes|=o,fn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function El(e){var t=ot(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);mt(o,t.memoizedState)||(Ve=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Kd(){}function Xd(e,t){var n=oe,r=ot(),i=t(),o=!mt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ve=!0),r=r.queue,Ss(Jd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,Vr(9,Zd.bind(null,n,r,i,t),void 0,null),ke===null)throw Error(P(349));dn&30||bd(n,t,i)}return i}function bd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zd(e,t,n,r){t.value=n,t.getSnapshot=r,qd(t)&&ef(e)}function Jd(e,t,n){return n(function(){qd(t)&&ef(e)})}function qd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function ef(e){var t=$t(e,1);t!==null&&pt(t,e,1,-1)}function Ou(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:e},t.queue=e,e=e.dispatch=gh.bind(null,oe,e),[t.memoizedState,e]}function Vr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function tf(){return ot().memoizedState}function zi(e,t,n,r){var i=gt();oe.flags|=e,i.memoizedState=Vr(1|t,n,void 0,r===void 0?null:r)}function Eo(e,t,n,r){var i=ot();r=r===void 0?null:r;var o=void 0;if(ve!==null){var l=ve.memoizedState;if(o=l.destroy,r!==null&&ys(r,l.deps)){i.memoizedState=Vr(t,n,o,r);return}}oe.flags|=e,i.memoizedState=Vr(1|t,n,o,r)}function Au(e,t){return zi(8390656,8,e,t)}function Ss(e,t){return Eo(2048,8,e,t)}function nf(e,t){return Eo(4,2,e,t)}function rf(e,t){return Eo(4,4,e,t)}function of(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lf(e,t,n){return n=n!=null?n.concat([e]):null,Eo(4,4,of.bind(null,t,e),n)}function ks(){}function af(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ys(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sf(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ys(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function uf(e,t,n){return dn&21?(mt(n,t)||(n=pd(),oe.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function mh(e,t){var n=Z;Z=n!==0&&4>n?n:4,e(!0);var r=kl.transition;kl.transition={};try{e(!1),t()}finally{Z=n,kl.transition=r}}function cf(){return ot().memoizedState}function hh(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},df(e))ff(t,n);else if(n=Qd(e,t,n,r),n!==null){var i=Me();pt(n,e,r,i),pf(n,t,r)}}function gh(e,t,n){var r=Yt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(df(e))ff(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,mt(a,l)){var s=t.interleaved;s===null?(i.next=i,ps(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Qd(e,t,i,r),n!==null&&(i=Me(),pt(n,e,r,i),pf(n,t,r))}}function df(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function ff(e,t){wr=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qa(e,n)}}var ro={readContext:it,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},vh={readContext:it,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Au,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zi(4194308,4,of.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return zi(4,2,e,t)},useMemo:function(e,t){var n=gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hh.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:Ou,useDebugValue:ks,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=Ou(!1),t=e[0];return e=mh.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,i=gt();if(re){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ke===null)throw Error(P(349));dn&30||bd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Au(Jd.bind(null,r,o,e),[e]),r.flags|=2048,Vr(9,Zd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=gt(),t=ke.identifierPrefix;if(re){var n=Ct,r=kt;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ph++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},yh={readContext:it,useCallback:af,useContext:it,useEffect:Ss,useImperativeHandle:lf,useInsertionEffect:nf,useLayoutEffect:rf,useMemo:sf,useReducer:Cl,useRef:tf,useState:function(){return Cl(Br)},useDebugValue:ks,useDeferredValue:function(e){var t=ot();return uf(t,ve.memoizedState,e)},useTransition:function(){var e=Cl(Br)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Kd,useSyncExternalStore:Xd,useId:cf,unstable_isNewReconciler:!1},xh={readContext:it,useCallback:af,useContext:it,useEffect:Ss,useImperativeHandle:lf,useInsertionEffect:nf,useLayoutEffect:rf,useMemo:sf,useReducer:El,useRef:tf,useState:function(){return El(Br)},useDebugValue:ks,useDeferredValue:function(e){var t=ot();return ve===null?t.memoizedState=e:uf(t,ve.memoizedState,e)},useTransition:function(){var e=El(Br)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Kd,useSyncExternalStore:Xd,useId:cf,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ma(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jo={isMounted:function(e){return(e=e._reactInternals)?hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),i=Yt(e),o=jt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ht(e,o,i),t!==null&&(pt(t,e,i,r),$i(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),i=Yt(e),o=jt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ht(e,o,i),t!==null&&(pt(t,e,i,r),$i(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=Yt(e),i=jt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ht(e,i,r),t!==null&&(pt(t,e,r,n),$i(t,e,r))}};function Mu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Lr(n,r)||!Lr(i,o):!0}function mf(e,t,n){var r=!1,i=Zt,o=t.contextType;return typeof o=="object"&&o!==null?o=it(o):(i=He(t)?un:Le.current,r=t.contextTypes,o=(r=r!=null)?Bn(e,i):Zt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Fu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&jo.enqueueReplaceState(t,t.state,null)}function ha(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ms(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=it(o):(o=He(t)?un:Le.current,i.context=Bn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ma(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&jo.enqueueReplaceState(i,i.state,null),eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Qn(e,t){try{var n="",r=t;do n+=Gp(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ga(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var wh=typeof WeakMap=="function"?WeakMap:Map;function hf(e,t,n){n=jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oo||(oo=!0,Pa=r),ga(e,t)},n}function gf(e,t,n){n=jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ga(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ga(e,t),typeof r!="function"&&(Qt===null?Qt=new Set([this]):Qt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Du(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new wh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Lh.bind(null,e,t,n),t.then(e,e))}function Uu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jt(-1,1),t.tag=2,Ht(n,t,1))),n.lanes|=1),e)}var Sh=zt.ReactCurrentOwner,Ve=!1;function Ae(e,t,n,r){t.child=e===null?Hd(t,null,n,r):Wn(t,e.child,n,r)}function Vu(e,t,n,r,i){n=n.render;var o=t.ref;return Fn(t,i),r=xs(e,t,n,r,o,i),n=ws(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(re&&n&&as(t),t.flags|=1,Ae(e,t,r,i),t.child)}function Wu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!zs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,vf(e,t,o,r,i)):(e=Li(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Lr,n(l,r)&&e.ref===t.ref)return It(e,t,i)}return t.flags|=1,e=Gt(o,r),e.ref=t.ref,e.return=t,t.child=e}function vf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Lr(o,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,It(e,t,i)}return va(e,t,n,r,i)}function yf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Tn,Ye),Ye|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Tn,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ee(Tn,Ye),Ye|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ee(Tn,Ye),Ye|=r;return Ae(e,t,i,n),t.child}function xf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function va(e,t,n,r,i){var o=He(n)?un:Le.current;return o=Bn(t,o),Fn(t,i),n=xs(e,t,n,r,o,i),r=ws(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(re&&r&&as(t),t.flags|=1,Ae(e,t,n,i),t.child)}function Hu(e,t,n,r,i){if(He(n)){var o=!0;Xi(t)}else o=!1;if(Fn(t,i),t.stateNode===null)Ri(e,t),mf(t,n,r),ha(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=it(u):(u=He(n)?un:Le.current,u=Bn(t,u));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Fu(t,l,r,u),Lt=!1;var g=t.memoizedState;l.state=g,eo(t,r,l,i),s=t.memoizedState,a!==r||g!==s||We.current||Lt?(typeof h=="function"&&(ma(t,n,h,r),s=t.memoizedState),(a=Lt||Mu(t,n,a,r,g,s,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Yd(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ut(t.type,a),l.props=u,m=t.pendingProps,g=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=it(s):(s=He(n)?un:Le.current,s=Bn(t,s));var k=n.getDerivedStateFromProps;(h=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||g!==s)&&Fu(t,l,r,s),Lt=!1,g=t.memoizedState,l.state=g,eo(t,r,l,i);var w=t.memoizedState;a!==m||g!==w||We.current||Lt?(typeof k=="function"&&(ma(t,n,k,r),w=t.memoizedState),(u=Lt||Mu(t,n,u,r,g,w,s)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ya(e,t,n,r,o,i)}function ya(e,t,n,r,i,o){xf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Iu(t,n,!1),It(e,t,o);r=t.stateNode,Sh.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Wn(t,e.child,null,o),t.child=Wn(t,null,a,o)):Ae(e,t,a,o),t.memoizedState=r.state,i&&Iu(t,n,!0),t.child}function wf(e){var t=e.stateNode;t.pendingContext?$u(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$u(e,t.context,!1),hs(e,t.containerInfo)}function Qu(e,t,n,r,i){return Vn(),us(i),t.flags|=256,Ae(e,t,n,r),t.child}var xa={dehydrated:null,treeContext:null,retryLane:0};function wa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sf(e,t,n){var r=t.pendingProps,i=ie.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(ie,i&1),e===null)return fa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=$o(l,r,0,null),e=sn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=wa(n),t.memoizedState=xa,e):Cs(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return kh(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Gt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Gt(a,o):(o=sn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?wa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=xa,r}return o=e.child,e=o.sibling,r=Gt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cs(e,t){return t=$o({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mi(e,t,n,r){return r!==null&&us(r),Wn(t,e.child,null,n),e=Cs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kh(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=jl(Error(P(422))),mi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=$o({mode:"visible",children:r.children},i,0,null),o=sn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Wn(t,e.child,null,l),t.child.memoizedState=wa(l),t.memoizedState=xa,o);if(!(t.mode&1))return mi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(P(419)),r=jl(o,r,void 0),mi(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ve||a){if(r=ke,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,$t(e,i),pt(r,e,i,-1))}return Is(),r=jl(Error(P(421))),mi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Oh.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ge=Wt(i.nextSibling),Ke=t,re=!0,dt=null,e!==null&&(et[tt++]=kt,et[tt++]=Ct,et[tt++]=cn,kt=e.id,Ct=e.overflow,cn=t),t=Cs(t,r.children),t.flags|=4096,t)}function Yu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),pa(e.return,t,n)}function Pl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function kf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ae(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yu(e,n,t);else if(e.tag===19)Yu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Pl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Pl(t,!0,n,null,o);break;case"together":Pl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ri(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ch(e,t,n){switch(t.tag){case 3:wf(t),Vn();break;case 5:Gd(t);break;case 1:He(t.type)&&Xi(t);break;case 4:hs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(Ji,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?Sf(e,t,n):(ee(ie,ie.current&1),e=It(e,t,n),e!==null?e.sibling:null);ee(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return kf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,yf(e,t,n)}return It(e,t,n)}var Cf,Sa,Ef,jf;Cf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sa=function(){};Ef=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ln(xt.current);var o=null;switch(n){case"input":i=Wl(e,i),r=Wl(e,r),o=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),o=[];break;case"textarea":i=Yl(e,i),r=Yl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gi)}Kl(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_r.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_r.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&te("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};jf=function(e,t,n,r){n!==r&&(t.flags|=4)};function sr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Eh(e,t,n){var r=t.pendingProps;switch(ss(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return He(t.type)&&Ki(),Te(t),null;case 3:return r=t.stateNode,Hn(),ne(We),ne(Le),vs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(Ia(dt),dt=null))),Sa(e,t),Te(t),null;case 5:gs(t);var i=ln(Dr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ef(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Te(t),null}if(e=ln(xt.current),fi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[vt]=t,r[Mr]=o,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<mr.length;i++)te(mr[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":tu(r,o),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},te("invalid",r);break;case"textarea":ru(r,o),te("invalid",r)}Kl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&di(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&di(r.textContent,a,e),i=["children",""+a]):_r.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&te("scroll",r)}switch(n){case"input":ri(r),nu(r,o,!0);break;case"textarea":ri(r),iu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Gi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[vt]=t,e[Mr]=r,Cf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Xl(n,r),n){case"dialog":te("cancel",e),te("close",e),i=r;break;case"iframe":case"object":case"embed":te("load",e),i=r;break;case"video":case"audio":for(i=0;i<mr.length;i++)te(mr[i],e);i=r;break;case"source":te("error",e),i=r;break;case"img":case"image":case"link":te("error",e),te("load",e),i=r;break;case"details":te("toggle",e),i=r;break;case"input":tu(e,r),i=Wl(e,r),te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),te("invalid",e);break;case"textarea":ru(e,r),i=Yl(e,r),te("invalid",e);break;default:i=r}Kl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?td(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&qc(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&$r(e,s):typeof s=="number"&&$r(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(_r.hasOwnProperty(o)?s!=null&&o==="onScroll"&&te("scroll",e):s!=null&&Ga(e,o,s,l))}switch(n){case"input":ri(e),nu(e,r,!1);break;case"textarea":ri(e),iu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Gi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)jf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=ln(Dr.current),ln(xt.current),fi(t)){if(r=t.stateNode,n=t.memoizedProps,r[vt]=t,(o=r.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){case 3:di(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&di(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=t,t.stateNode=r}return Te(t),null;case 13:if(ne(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ge!==null&&t.mode&1&&!(t.flags&128))Vd(),Vn(),t.flags|=98560,o=!1;else if(o=fi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[vt]=t}else Vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),o=!1}else dt!==null&&(Ia(dt),dt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?ye===0&&(ye=3):Is())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return Hn(),Sa(e,t),e===null&&Or(t.stateNode.containerInfo),Te(t),null;case 10:return fs(t.type._context),Te(t),null;case 17:return He(t.type)&&Ki(),Te(t),null;case 19:if(ne(ie),o=t.memoizedState,o===null)return Te(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)sr(o,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=to(e),l!==null){for(t.flags|=128,sr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(ie,ie.current&1|2),t.child}e=e.sibling}o.tail!==null&&de()>Yn&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304)}else{if(!r)if(e=to(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!re)return Te(t),null}else 2*de()-o.renderingStartTime>Yn&&n!==1073741824&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=de(),t.sibling=null,n=ie.current,ee(ie,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return $s(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ye&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function jh(e,t){switch(ss(t),t.tag){case 1:return He(t.type)&&Ki(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),ne(We),ne(Le),vs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gs(t),null;case 13:if(ne(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(ie),null;case 4:return Hn(),null;case 10:return fs(t.type._context),null;case 22:case 23:return $s(),null;case 24:return null;default:return null}}var hi=!1,Ne=!1,Ph=typeof WeakSet=="function"?WeakSet:Set,O=null;function Rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function ka(e,t,n){try{n()}catch(r){se(e,t,r)}}var Gu=!1;function _h(e,t){if(oa=Hi,e=Id(),ls(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,h=0,m=e,g=null;t:for(;;){for(var k;m!==n||i!==0&&m.nodeType!==3||(a=l+i),m!==o||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(k=m.firstChild)!==null;)g=m,m=k;for(;;){if(m===e)break t;if(g===n&&++u===i&&(a=l),g===o&&++h===r&&(s=l),(k=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=k}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(la={focusedElem:e,selectionRange:n},Hi=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,C=w.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?v:ut(t.type,v),C);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(x){se(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return w=Gu,Gu=!1,w}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ka(t,n,o)}i=i.next}while(i!==r)}}function Po(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ca(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Pf(e){var t=e.alternate;t!==null&&(e.alternate=null,Pf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[Mr],delete t[ua],delete t[uh],delete t[ch])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _f(e){return e.tag===5||e.tag===3||e.tag===4}function Ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gi));else if(r!==4&&(e=e.child,e!==null))for(Ea(e,t,n),e=e.sibling;e!==null;)Ea(e,t,n),e=e.sibling}function ja(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ja(e,t,n),e=e.sibling;e!==null;)ja(e,t,n),e=e.sibling}var _e=null,ct=!1;function Tt(e,t,n){for(n=n.child;n!==null;)$f(e,t,n),n=n.sibling}function $f(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(yo,n)}catch{}switch(n.tag){case 5:Ne||Rn(n,t);case 6:var r=_e,i=ct;_e=null,Tt(e,t,n),_e=r,ct=i,_e!==null&&(ct?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(ct?(e=_e,n=n.stateNode,e.nodeType===8?xl(e.parentNode,n):e.nodeType===1&&xl(e,n),Tr(e)):xl(_e,n.stateNode));break;case 4:r=_e,i=ct,_e=n.stateNode.containerInfo,ct=!0,Tt(e,t,n),_e=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ka(n,t,l),i=i.next}while(i!==r)}Tt(e,t,n);break;case 1:if(!Ne&&(Rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){se(n,t,a)}Tt(e,t,n);break;case 21:Tt(e,t,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,Tt(e,t,n),Ne=r):Tt(e,t,n);break;default:Tt(e,t,n)}}function Xu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ph),t.forEach(function(r){var i=Ah.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:_e=a.stateNode,ct=!1;break e;case 3:_e=a.stateNode.containerInfo,ct=!0;break e;case 4:_e=a.stateNode.containerInfo,ct=!0;break e}a=a.return}if(_e===null)throw Error(P(160));$f(o,l,i),_e=null,ct=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){se(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)If(t,e),t=t.sibling}function If(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),ht(e),r&4){try{Sr(3,e,e.return),Po(3,e)}catch(v){se(e,e.return,v)}try{Sr(5,e,e.return)}catch(v){se(e,e.return,v)}}break;case 1:st(t,e),ht(e),r&512&&n!==null&&Rn(n,n.return);break;case 5:if(st(t,e),ht(e),r&512&&n!==null&&Rn(n,n.return),e.flags&32){var i=e.stateNode;try{$r(i,"")}catch(v){se(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&bc(i,o),Xl(a,l);var u=Xl(a,o);for(l=0;l<s.length;l+=2){var h=s[l],m=s[l+1];h==="style"?td(i,m):h==="dangerouslySetInnerHTML"?qc(i,m):h==="children"?$r(i,m):Ga(i,h,m,u)}switch(a){case"input":Hl(i,o);break;case"textarea":Zc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?Ln(i,!!o.multiple,k,!1):g!==!!o.multiple&&(o.defaultValue!=null?Ln(i,!!o.multiple,o.defaultValue,!0):Ln(i,!!o.multiple,o.multiple?[]:"",!1))}i[Mr]=o}catch(v){se(e,e.return,v)}}break;case 6:if(st(t,e),ht(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){se(e,e.return,v)}}break;case 3:if(st(t,e),ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(t.containerInfo)}catch(v){se(e,e.return,v)}break;case 4:st(t,e),ht(e);break;case 13:st(t,e),ht(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ps=de())),r&4&&Xu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Ne=(u=Ne)||h,st(t,e),Ne=u):st(t,e),ht(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(O=e,h=e.child;h!==null;){for(m=O=h;O!==null;){switch(g=O,k=g.child,g.tag){case 0:case 11:case 14:case 15:Sr(4,g,g.return);break;case 1:Rn(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){se(r,n,v)}}break;case 5:Rn(g,g.return);break;case 22:if(g.memoizedState!==null){Zu(m);continue}}k!==null?(k.return=g,O=k):Zu(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=ed("display",l))}catch(v){se(e,e.return,v)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(v){se(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:st(t,e),ht(e),r&4&&Xu(e);break;case 21:break;default:st(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_f(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($r(i,""),r.flags&=-33);var o=Ku(e);ja(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Ku(e);Ea(e,a,l);break;default:throw Error(P(161))}}catch(s){se(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $h(e,t,n){O=e,zf(e)}function zf(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||hi;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Ne;a=hi;var u=Ne;if(hi=l,(Ne=s)&&!u)for(O=i;O!==null;)l=O,s=l.child,l.tag===22&&l.memoizedState!==null?Ju(i):s!==null?(s.return=l,O=s):Ju(i);for(;o!==null;)O=o,zf(o),o=o.sibling;O=i,hi=a,Ne=u}bu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):bu(e)}}function bu(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ne||Po(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Lu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Lu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Tr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ne||t.flags&512&&Ca(t)}catch(g){se(t,t.return,g)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Zu(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Ju(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Po(4,t)}catch(s){se(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){se(t,i,s)}}var o=t.return;try{Ca(t)}catch(s){se(t,o,s)}break;case 5:var l=t.return;try{Ca(t)}catch(s){se(t,l,s)}}}catch(s){se(t,t.return,s)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var Ih=Math.ceil,io=zt.ReactCurrentDispatcher,Es=zt.ReactCurrentOwner,rt=zt.ReactCurrentBatchConfig,Q=0,ke=null,me=null,$e=0,Ye=0,Tn=qt(0),ye=0,Wr=null,fn=0,_o=0,js=0,kr=null,Be=null,Ps=0,Yn=1/0,wt=null,oo=!1,Pa=null,Qt=null,gi=!1,Ft=null,lo=0,Cr=0,_a=null,Ti=-1,Ni=0;function Me(){return Q&6?de():Ti!==-1?Ti:Ti=de()}function Yt(e){return e.mode&1?Q&2&&$e!==0?$e&-$e:fh.transition!==null?(Ni===0&&(Ni=pd()),Ni):(e=Z,e!==0||(e=window.event,e=e===void 0?16:wd(e.type)),e):1}function pt(e,t,n,r){if(50<Cr)throw Cr=0,_a=null,Error(P(185));Kr(e,n,r),(!(Q&2)||e!==ke)&&(e===ke&&(!(Q&2)&&(_o|=n),ye===4&&At(e,$e)),Qe(e,r),n===1&&Q===0&&!(t.mode&1)&&(Yn=de()+500,Co&&en()))}function Qe(e,t){var n=e.callbackNode;fm(e,t);var r=Wi(e,e===ke?$e:0);if(r===0)n!==null&&au(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&au(n),t===1)e.tag===0?dh(qu.bind(null,e)):Dd(qu.bind(null,e)),ah(function(){!(Q&6)&&en()}),n=null;else{switch(md(r)){case 1:n=Ja;break;case 4:n=dd;break;case 16:n=Vi;break;case 536870912:n=fd;break;default:n=Vi}n=Ff(n,Rf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Rf(e,t){if(Ti=-1,Ni=0,Q&6)throw Error(P(327));var n=e.callbackNode;if(Dn()&&e.callbackNode!==n)return null;var r=Wi(e,e===ke?$e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ao(e,r);else{t=r;var i=Q;Q|=2;var o=Nf();(ke!==e||$e!==t)&&(wt=null,Yn=de()+500,an(e,t));do try{Th();break}catch(a){Tf(e,a)}while(1);ds(),io.current=o,Q=i,me!==null?t=0:(ke=null,$e=0,t=ye)}if(t!==0){if(t===2&&(i=ea(e),i!==0&&(r=i,t=$a(e,i))),t===1)throw n=Wr,an(e,0),At(e,r),Qe(e,de()),n;if(t===6)At(e,r);else{if(i=e.current.alternate,!(r&30)&&!zh(i)&&(t=ao(e,r),t===2&&(o=ea(e),o!==0&&(r=o,t=$a(e,o))),t===1))throw n=Wr,an(e,0),At(e,r),Qe(e,de()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:nn(e,Be,wt);break;case 3:if(At(e,r),(r&130023424)===r&&(t=Ps+500-de(),10<t)){if(Wi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=sa(nn.bind(null,e,Be,wt),t);break}nn(e,Be,wt);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-ft(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ih(r/1960))-r,10<r){e.timeoutHandle=sa(nn.bind(null,e,Be,wt),r);break}nn(e,Be,wt);break;case 5:nn(e,Be,wt);break;default:throw Error(P(329))}}}return Qe(e,de()),e.callbackNode===n?Rf.bind(null,e):null}function $a(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=ao(e,t),e!==2&&(t=Be,Be=n,t!==null&&Ia(t)),e}function Ia(e){Be===null?Be=e:Be.push.apply(Be,e)}function zh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!mt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~js,t&=~_o,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function qu(e){if(Q&6)throw Error(P(327));Dn();var t=Wi(e,0);if(!(t&1))return Qe(e,de()),null;var n=ao(e,t);if(e.tag!==0&&n===2){var r=ea(e);r!==0&&(t=r,n=$a(e,r))}if(n===1)throw n=Wr,an(e,0),At(e,t),Qe(e,de()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nn(e,Be,wt),Qe(e,de()),null}function _s(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Yn=de()+500,Co&&en())}}function pn(e){Ft!==null&&Ft.tag===0&&!(Q&6)&&Dn();var t=Q;Q|=1;var n=rt.transition,r=Z;try{if(rt.transition=null,Z=1,e)return e()}finally{Z=r,rt.transition=n,Q=t,!(Q&6)&&en()}}function $s(){Ye=Tn.current,ne(Tn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lh(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(ss(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ki();break;case 3:Hn(),ne(We),ne(Le),vs();break;case 5:gs(r);break;case 4:Hn();break;case 13:ne(ie);break;case 19:ne(ie);break;case 10:fs(r.type._context);break;case 22:case 23:$s()}n=n.return}if(ke=e,me=e=Gt(e.current,null),$e=Ye=t,ye=0,Wr=null,js=_o=fn=0,Be=kr=null,on!==null){for(t=0;t<on.length;t++)if(n=on[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}on=null}return e}function Tf(e,t){do{var n=me;try{if(ds(),Ii.current=ro,no){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if(dn=0,Se=ve=oe=null,wr=!1,Ur=0,Es.current=null,n===null||n.return===null){ye=1,Wr=t,me=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=$e,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var k=Uu(l);if(k!==null){k.flags&=-257,Bu(k,l,a,o,t),k.mode&1&&Du(o,u,t),t=k,s=u;var w=t.updateQueue;if(w===null){var v=new Set;v.add(s),t.updateQueue=v}else w.add(s);break e}else{if(!(t&1)){Du(o,u,t),Is();break e}s=Error(P(426))}}else if(re&&a.mode&1){var C=Uu(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Bu(C,l,a,o,t),us(Qn(s,a));break e}}o=s=Qn(s,a),ye!==4&&(ye=2),kr===null?kr=[o]:kr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=hf(o,s,t);Nu(o,d);break e;case 1:a=s;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Qt===null||!Qt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=gf(o,a,t);Nu(o,x);break e}}o=o.return}while(o!==null)}Of(n)}catch(j){t=j,me===n&&n!==null&&(me=n=n.return);continue}break}while(1)}function Nf(){var e=io.current;return io.current=ro,e===null?ro:e}function Is(){(ye===0||ye===3||ye===2)&&(ye=4),ke===null||!(fn&268435455)&&!(_o&268435455)||At(ke,$e)}function ao(e,t){var n=Q;Q|=2;var r=Nf();(ke!==e||$e!==t)&&(wt=null,an(e,t));do try{Rh();break}catch(i){Tf(e,i)}while(1);if(ds(),Q=n,io.current=r,me!==null)throw Error(P(261));return ke=null,$e=0,ye}function Rh(){for(;me!==null;)Lf(me)}function Th(){for(;me!==null&&!rm();)Lf(me)}function Lf(e){var t=Mf(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?Of(e):me=t,Es.current=null}function Of(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jh(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,me=null;return}}else if(n=Eh(n,t,Ye),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ye===0&&(ye=5)}function nn(e,t,n){var r=Z,i=rt.transition;try{rt.transition=null,Z=1,Nh(e,t,n,r)}finally{rt.transition=i,Z=r}return null}function Nh(e,t,n,r){do Dn();while(Ft!==null);if(Q&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(pm(e,o),e===ke&&(me=ke=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gi||(gi=!0,Ff(Vi,function(){return Dn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=rt.transition,rt.transition=null;var l=Z;Z=1;var a=Q;Q|=4,Es.current=null,_h(e,n),If(n,e),qm(la),Hi=!!oa,la=oa=null,e.current=n,$h(n),im(),Q=a,Z=l,rt.transition=o}else e.current=n;if(gi&&(gi=!1,Ft=e,lo=i),o=e.pendingLanes,o===0&&(Qt=null),am(n.stateNode),Qe(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=Pa,Pa=null,e;return lo&1&&e.tag!==0&&Dn(),o=e.pendingLanes,o&1?e===_a?Cr++:(Cr=0,_a=e):Cr=0,en(),null}function Dn(){if(Ft!==null){var e=md(lo),t=rt.transition,n=Z;try{if(rt.transition=null,Z=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,lo=0,Q&6)throw Error(P(331));var i=Q;for(Q|=4,O=e.current;O!==null;){var o=O,l=o.child;if(O.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(O=u;O!==null;){var h=O;switch(h.tag){case 0:case 11:case 15:Sr(8,h,o)}var m=h.child;if(m!==null)m.return=h,O=m;else for(;O!==null;){h=O;var g=h.sibling,k=h.return;if(Pf(h),h===u){O=null;break}if(g!==null){g.return=k,O=g;break}O=k}}}var w=o.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}O=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,O=l;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Sr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,O=d;break e}O=o.return}}var c=e.current;for(O=c;O!==null;){l=O;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,O=p;else e:for(l=c;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Po(9,a)}}catch(j){se(a,a.return,j)}if(a===l){O=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,O=x;break e}O=a.return}}if(Q=i,en(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(yo,e)}catch{}r=!0}return r}finally{Z=n,rt.transition=t}}return!1}function ec(e,t,n){t=Qn(n,t),t=hf(e,t,1),e=Ht(e,t,1),t=Me(),e!==null&&(Kr(e,1,t),Qe(e,t))}function se(e,t,n){if(e.tag===3)ec(e,e,n);else for(;t!==null;){if(t.tag===3){ec(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qt===null||!Qt.has(r))){e=Qn(n,e),e=gf(t,e,1),t=Ht(t,e,1),e=Me(),t!==null&&(Kr(t,1,e),Qe(t,e));break}}t=t.return}}function Lh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,ke===e&&($e&n)===n&&(ye===4||ye===3&&($e&130023424)===$e&&500>de()-Ps?an(e,0):js|=n),Qe(e,t)}function Af(e,t){t===0&&(e.mode&1?(t=li,li<<=1,!(li&130023424)&&(li=4194304)):t=1);var n=Me();e=$t(e,t),e!==null&&(Kr(e,t,n),Qe(e,n))}function Oh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Af(e,n)}function Ah(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Af(e,n)}var Mf;Mf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,Ch(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,re&&t.flags&1048576&&Ud(t,Zi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ri(e,t),e=t.pendingProps;var i=Bn(t,Le.current);Fn(t,n),i=xs(null,t,r,e,i,n);var o=ws();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(r)?(o=!0,Xi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ms(t),i.updater=jo,t.stateNode=i,i._reactInternals=t,ha(t,r,e,n),t=ya(null,t,r,!0,o,n)):(t.tag=0,re&&o&&as(t),Ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ri(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Fh(r),e=ut(r,e),i){case 0:t=va(null,t,r,e,n);break e;case 1:t=Hu(null,t,r,e,n);break e;case 11:t=Vu(null,t,r,e,n);break e;case 14:t=Wu(null,t,r,ut(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),va(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Hu(e,t,r,i,n);case 3:e:{if(wf(t),e===null)throw Error(P(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Yd(e,t),eo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Qn(Error(P(423)),t),t=Qu(e,t,r,n,i);break e}else if(r!==i){i=Qn(Error(P(424)),t),t=Qu(e,t,r,n,i);break e}else for(Ge=Wt(t.stateNode.containerInfo.firstChild),Ke=t,re=!0,dt=null,n=Hd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vn(),r===i){t=It(e,t,n);break e}Ae(e,t,r,n)}t=t.child}return t;case 5:return Gd(t),e===null&&fa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,aa(r,i)?l=null:o!==null&&aa(r,o)&&(t.flags|=32),xf(e,t),Ae(e,t,l,n),t.child;case 6:return e===null&&fa(t),null;case 13:return Sf(e,t,n);case 4:return hs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wn(t,null,r,n):Ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Vu(e,t,r,i,n);case 7:return Ae(e,t,t.pendingProps,n),t.child;case 8:return Ae(e,t,t.pendingProps.children,n),t.child;case 12:return Ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ee(Ji,r._currentValue),r._currentValue=l,o!==null)if(mt(o.value,l)){if(o.children===i.children&&!We.current){t=It(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=jt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),pa(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(P(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),pa(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fn(t,n),i=it(i),r=r(i),t.flags|=1,Ae(e,t,r,n),t.child;case 14:return r=t.type,i=ut(r,t.pendingProps),i=ut(r.type,i),Wu(e,t,r,i,n);case 15:return vf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Ri(e,t),t.tag=1,He(r)?(e=!0,Xi(t)):e=!1,Fn(t,n),mf(t,r,i),ha(t,r,i,n),ya(null,t,r,!0,e,n);case 19:return kf(e,t,n);case 22:return yf(e,t,n)}throw Error(P(156,t.tag))};function Ff(e,t){return cd(e,t)}function Mh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,r){return new Mh(e,t,n,r)}function zs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fh(e){if(typeof e=="function")return zs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xa)return 11;if(e===ba)return 14}return 2}function Gt(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Li(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")zs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case kn:return sn(n.children,i,o,t);case Ka:l=8,i|=8;break;case Dl:return e=nt(12,n,t,i|2),e.elementType=Dl,e.lanes=o,e;case Ul:return e=nt(13,n,t,i),e.elementType=Ul,e.lanes=o,e;case Bl:return e=nt(19,n,t,i),e.elementType=Bl,e.lanes=o,e;case Gc:return $o(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qc:l=10;break e;case Yc:l=9;break e;case Xa:l=11;break e;case ba:l=14;break e;case Nt:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=nt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function sn(e,t,n,r){return e=nt(7,e,r,t),e.lanes=n,e}function $o(e,t,n,r){return e=nt(22,e,r,t),e.elementType=Gc,e.lanes=n,e.stateNode={isHidden:!1},e}function _l(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function $l(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dh(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sl(0),this.expirationTimes=sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rs(e,t,n,r,i,o,l,a,s){return e=new Dh(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=nt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ms(o),e}function Uh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Df(e){if(!e)return Zt;e=e._reactInternals;e:{if(hn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(He(n))return Fd(e,n,t)}return t}function Uf(e,t,n,r,i,o,l,a,s){return e=Rs(n,r,!0,e,i,o,l,a,s),e.context=Df(null),n=e.current,r=Me(),i=Yt(n),o=jt(r,i),o.callback=t??null,Ht(n,o,i),e.current.lanes=i,Kr(e,i,r),Qe(e,r),e}function Io(e,t,n,r){var i=t.current,o=Me(),l=Yt(i);return n=Df(n),t.context===null?t.context=n:t.pendingContext=n,t=jt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ht(i,t,l),e!==null&&(pt(e,i,l,o),$i(e,i,l)),l}function so(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function tc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ts(e,t){tc(e,t),(e=e.alternate)&&tc(e,t)}function Bh(){return null}var Bf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ns(e){this._internalRoot=e}zo.prototype.render=Ns.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Io(e,t,null,null)};zo.prototype.unmount=Ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){Io(null,e,null,null)}),t[_t]=null}};function zo(e){this._internalRoot=e}zo.prototype.unstable_scheduleHydration=function(e){if(e){var t=vd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&xd(e)}};function Ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nc(){}function Vh(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=so(l);o.call(u)}}var l=Uf(t,r,e,0,null,!1,!1,"",nc);return e._reactRootContainer=l,e[_t]=l.current,Or(e.nodeType===8?e.parentNode:e),pn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=so(s);a.call(u)}}var s=Rs(e,0,!1,null,null,!1,!1,"",nc);return e._reactRootContainer=s,e[_t]=s.current,Or(e.nodeType===8?e.parentNode:e),pn(function(){Io(t,s,n,r)}),s}function To(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=so(l);a.call(s)}}Io(t,l,e,i)}else l=Vh(n,t,e,i,r);return so(l)}hd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pr(t.pendingLanes);n!==0&&(qa(t,n|1),Qe(t,de()),!(Q&6)&&(Yn=de()+500,en()))}break;case 13:pn(function(){var r=$t(e,1);if(r!==null){var i=Me();pt(r,e,1,i)}}),Ts(e,1)}};es=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=Me();pt(t,e,134217728,n)}Ts(e,134217728)}};gd=function(e){if(e.tag===13){var t=Yt(e),n=$t(e,t);if(n!==null){var r=Me();pt(n,e,t,r)}Ts(e,t)}};vd=function(){return Z};yd=function(e,t){var n=Z;try{return Z=e,t()}finally{Z=n}};Zl=function(e,t,n){switch(t){case"input":if(Hl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ko(r);if(!i)throw Error(P(90));Xc(r),Hl(r,i)}}}break;case"textarea":Zc(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};id=_s;od=pn;var Wh={usingClientEntryPoint:!1,Events:[br,Pn,ko,nd,rd,_s]},ur={findFiberByHostInstance:rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hh={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sd(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||Bh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vi.isDisabled&&vi.supportsFiber)try{yo=vi.inject(Hh),yt=vi}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wh;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ls(t))throw Error(P(200));return Uh(e,t,null,n)};be.createRoot=function(e,t){if(!Ls(e))throw Error(P(299));var n=!1,r="",i=Bf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Rs(e,1,!1,null,null,n,!1,r,i),e[_t]=t.current,Or(e.nodeType===8?e.parentNode:e),new Ns(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=sd(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return pn(e)};be.hydrate=function(e,t,n){if(!Ro(t))throw Error(P(200));return To(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!Ls(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Bf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Uf(t,null,e,1,n??null,i,!1,o,l),e[_t]=t.current,Or(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new zo(t)};be.render=function(e,t,n){if(!Ro(t))throw Error(P(200));return To(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!Ro(e))throw Error(P(40));return e._reactRootContainer?(pn(function(){To(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};be.unstable_batchedUpdates=_s;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ro(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return To(e,t,n,!1,r)};be.version="18.3.1-next-f1338f8080-20240426";function Vf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vf)}catch(e){console.error(e)}}Vf(),Bc.exports=be;var Qh=Bc.exports,rc=Qh;Ml.createRoot=rc.createRoot,Ml.hydrateRoot=rc.hydrateRoot;var Wf={exports:{}},J={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Os=Symbol.for("react.element"),As=Symbol.for("react.portal"),No=Symbol.for("react.fragment"),Lo=Symbol.for("react.strict_mode"),Oo=Symbol.for("react.profiler"),Ao=Symbol.for("react.provider"),Mo=Symbol.for("react.context"),Yh=Symbol.for("react.server_context"),Fo=Symbol.for("react.forward_ref"),Do=Symbol.for("react.suspense"),Uo=Symbol.for("react.suspense_list"),Bo=Symbol.for("react.memo"),Vo=Symbol.for("react.lazy"),Gh=Symbol.for("react.offscreen"),Hf;Hf=Symbol.for("react.module.reference");function lt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Os:switch(e=e.type,e){case No:case Oo:case Lo:case Do:case Uo:return e;default:switch(e=e&&e.$$typeof,e){case Yh:case Mo:case Fo:case Vo:case Bo:case Ao:return e;default:return t}}case As:return t}}}J.ContextConsumer=Mo;J.ContextProvider=Ao;J.Element=Os;J.ForwardRef=Fo;J.Fragment=No;J.Lazy=Vo;J.Memo=Bo;J.Portal=As;J.Profiler=Oo;J.StrictMode=Lo;J.Suspense=Do;J.SuspenseList=Uo;J.isAsyncMode=function(){return!1};J.isConcurrentMode=function(){return!1};J.isContextConsumer=function(e){return lt(e)===Mo};J.isContextProvider=function(e){return lt(e)===Ao};J.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Os};J.isForwardRef=function(e){return lt(e)===Fo};J.isFragment=function(e){return lt(e)===No};J.isLazy=function(e){return lt(e)===Vo};J.isMemo=function(e){return lt(e)===Bo};J.isPortal=function(e){return lt(e)===As};J.isProfiler=function(e){return lt(e)===Oo};J.isStrictMode=function(e){return lt(e)===Lo};J.isSuspense=function(e){return lt(e)===Do};J.isSuspenseList=function(e){return lt(e)===Uo};J.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===No||e===Oo||e===Lo||e===Do||e===Uo||e===Gh||typeof e=="object"&&e!==null&&(e.$$typeof===Vo||e.$$typeof===Bo||e.$$typeof===Ao||e.$$typeof===Mo||e.$$typeof===Fo||e.$$typeof===Hf||e.getModuleId!==void 0)};J.typeOf=lt;Wf.exports=J;var Qf=Wf.exports;function Kh(e){function t($,z,L,D,y){for(var H=0,I=0,ae=0,K=0,b,B,Ee=0,Ue=0,Y,ze=Y=b=0,X=0,je=0,er=0,Pe=0,ei=L.length,tr=ei-1,at,U="",ce="",tl="",nl="",Rt;X<ei;){if(B=L.charCodeAt(X),X===tr&&I+K+ae+H!==0&&(I!==0&&(B=I===47?10:47),K=ae=H=0,ei++,tr++),I+K+ae+H===0){if(X===tr&&(0<je&&(U=U.replace(g,"")),0<U.trim().length)){switch(B){case 32:case 9:case 59:case 13:case 10:break;default:U+=L.charAt(X)}B=59}switch(B){case 123:for(U=U.trim(),b=U.charCodeAt(0),Y=1,Pe=++X;X<ei;){switch(B=L.charCodeAt(X)){case 123:Y++;break;case 125:Y--;break;case 47:switch(B=L.charCodeAt(X+1)){case 42:case 47:e:{for(ze=X+1;ze<tr;++ze)switch(L.charCodeAt(ze)){case 47:if(B===42&&L.charCodeAt(ze-1)===42&&X+2!==ze){X=ze+1;break e}break;case 10:if(B===47){X=ze+1;break e}}X=ze}}break;case 91:B++;case 40:B++;case 34:case 39:for(;X++<tr&&L.charCodeAt(X)!==B;);}if(Y===0)break;X++}switch(Y=L.substring(Pe,X),b===0&&(b=(U=U.replace(m,"").trim()).charCodeAt(0)),b){case 64:switch(0<je&&(U=U.replace(g,"")),B=U.charCodeAt(1),B){case 100:case 109:case 115:case 45:je=z;break;default:je=qe}if(Y=t(z,je,Y,B,y+1),Pe=Y.length,0<_&&(je=n(qe,U,er),Rt=a(3,Y,je,z,ge,ue,Pe,B,y,D),U=je.join(""),Rt!==void 0&&(Pe=(Y=Rt.trim()).length)===0&&(B=0,Y="")),0<Pe)switch(B){case 115:U=U.replace(R,l);case 100:case 109:case 45:Y=U+"{"+Y+"}";break;case 107:U=U.replace(c,"$1 $2"),Y=U+"{"+Y+"}",Y=xe===1||xe===2&&o("@"+Y,3)?"@-webkit-"+Y+"@"+Y:"@"+Y;break;default:Y=U+Y,D===112&&(Y=(ce+=Y,""))}else Y="";break;default:Y=t(z,n(z,U,er),Y,D,y+1)}tl+=Y,Y=er=je=ze=b=0,U="",B=L.charCodeAt(++X);break;case 125:case 59:if(U=(0<je?U.replace(g,""):U).trim(),1<(Pe=U.length))switch(ze===0&&(b=U.charCodeAt(0),b===45||96<b&&123>b)&&(Pe=(U=U.replace(" ",":")).length),0<_&&(Rt=a(1,U,z,$,ge,ue,ce.length,D,y,D))!==void 0&&(Pe=(U=Rt.trim()).length)===0&&(U="\0\0"),b=U.charCodeAt(0),B=U.charCodeAt(1),b){case 0:break;case 64:if(B===105||B===99){nl+=U+L.charAt(X);break}default:U.charCodeAt(Pe-1)!==58&&(ce+=i(U,b,B,U.charCodeAt(2)))}er=je=ze=b=0,U="",B=L.charCodeAt(++X)}}switch(B){case 13:case 10:I===47?I=0:1+b===0&&D!==107&&0<U.length&&(je=1,U+="\0"),0<_*F&&a(0,U,z,$,ge,ue,ce.length,D,y,D),ue=1,ge++;break;case 59:case 125:if(I+K+ae+H===0){ue++;break}default:switch(ue++,at=L.charAt(X),B){case 9:case 32:if(K+H+I===0)switch(Ee){case 44:case 58:case 9:case 32:at="";break;default:B!==32&&(at=" ")}break;case 0:at="\\0";break;case 12:at="\\f";break;case 11:at="\\v";break;case 38:K+I+H===0&&(je=er=1,at="\f"+at);break;case 108:if(K+I+H+Oe===0&&0<ze)switch(X-ze){case 2:Ee===112&&L.charCodeAt(X-3)===58&&(Oe=Ee);case 8:Ue===111&&(Oe=Ue)}break;case 58:K+I+H===0&&(ze=X);break;case 44:I+ae+K+H===0&&(je=1,at+="\r");break;case 34:case 39:I===0&&(K=K===B?0:K===0?B:K);break;case 91:K+I+ae===0&&H++;break;case 93:K+I+ae===0&&H--;break;case 41:K+I+H===0&&ae--;break;case 40:if(K+I+H===0){if(b===0)switch(2*Ee+3*Ue){case 533:break;default:b=1}ae++}break;case 64:I+ae+K+H+ze+Y===0&&(Y=1);break;case 42:case 47:if(!(0<K+H+ae))switch(I){case 0:switch(2*B+3*L.charCodeAt(X+1)){case 235:I=47;break;case 220:Pe=X,I=42}break;case 42:B===47&&Ee===42&&Pe+2!==X&&(L.charCodeAt(Pe+2)===33&&(ce+=L.substring(Pe,X+1)),at="",I=0)}}I===0&&(U+=at)}Ue=Ee,Ee=B,X++}if(Pe=ce.length,0<Pe){if(je=z,0<_&&(Rt=a(2,ce,je,$,ge,ue,Pe,D,y,D),Rt!==void 0&&(ce=Rt).length===0))return nl+ce+tl;if(ce=je.join(",")+"{"+ce+"}",xe*Oe!==0){switch(xe!==2||o(ce,2)||(Oe=0),Oe){case 111:ce=ce.replace(x,":-moz-$1")+ce;break;case 112:ce=ce.replace(p,"::-webkit-input-$1")+ce.replace(p,"::-moz-$1")+ce.replace(p,":-ms-input-$1")+ce}Oe=0}}return nl+ce+tl}function n($,z,L){var D=z.trim().split(C);z=D;var y=D.length,H=$.length;switch(H){case 0:case 1:var I=0;for($=H===0?"":$[0]+" ";I<y;++I)z[I]=r($,z[I],L).trim();break;default:var ae=I=0;for(z=[];I<y;++I)for(var K=0;K<H;++K)z[ae++]=r($[K]+" ",D[I],L).trim()}return z}function r($,z,L){var D=z.charCodeAt(0);switch(33>D&&(D=(z=z.trim()).charCodeAt(0)),D){case 38:return z.replace(d,"$1"+$.trim());case 58:return $.trim()+z.replace(d,"$1"+$.trim());default:if(0<1*L&&0<z.indexOf("\f"))return z.replace(d,($.charCodeAt(0)===58?"":"$1")+$.trim())}return $+z}function i($,z,L,D){var y=$+";",H=2*z+3*L+4*D;if(H===944){$=y.indexOf(":",9)+1;var I=y.substring($,y.length-1).trim();return I=y.substring(0,$).trim()+I+";",xe===1||xe===2&&o(I,1)?"-webkit-"+I+I:I}if(xe===0||xe===2&&!o(y,1))return y;switch(H){case 1015:return y.charCodeAt(10)===97?"-webkit-"+y+y:y;case 951:return y.charCodeAt(3)===116?"-webkit-"+y+y:y;case 963:return y.charCodeAt(5)===110?"-webkit-"+y+y:y;case 1009:if(y.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+y+y;case 978:return"-webkit-"+y+"-moz-"+y+y;case 1019:case 983:return"-webkit-"+y+"-moz-"+y+"-ms-"+y+y;case 883:if(y.charCodeAt(8)===45)return"-webkit-"+y+y;if(0<y.indexOf("image-set(",11))return y.replace(fe,"$1-webkit-$2")+y;break;case 932:if(y.charCodeAt(4)===45)switch(y.charCodeAt(5)){case 103:return"-webkit-box-"+y.replace("-grow","")+"-webkit-"+y+"-ms-"+y.replace("grow","positive")+y;case 115:return"-webkit-"+y+"-ms-"+y.replace("shrink","negative")+y;case 98:return"-webkit-"+y+"-ms-"+y.replace("basis","preferred-size")+y}return"-webkit-"+y+"-ms-"+y+y;case 964:return"-webkit-"+y+"-ms-flex-"+y+y;case 1023:if(y.charCodeAt(8)!==99)break;return I=y.substring(y.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+I+"-webkit-"+y+"-ms-flex-pack"+I+y;case 1005:return w.test(y)?y.replace(k,":-webkit-")+y.replace(k,":-moz-")+y:y;case 1e3:switch(I=y.substring(13).trim(),z=I.indexOf("-")+1,I.charCodeAt(0)+I.charCodeAt(z)){case 226:I=y.replace(j,"tb");break;case 232:I=y.replace(j,"tb-rl");break;case 220:I=y.replace(j,"lr");break;default:return y}return"-webkit-"+y+"-ms-"+I+y;case 1017:if(y.indexOf("sticky",9)===-1)break;case 975:switch(z=(y=$).length-10,I=(y.charCodeAt(z)===33?y.substring(0,z):y).substring($.indexOf(":",7)+1).trim(),H=I.charCodeAt(0)+(I.charCodeAt(7)|0)){case 203:if(111>I.charCodeAt(8))break;case 115:y=y.replace(I,"-webkit-"+I)+";"+y;break;case 207:case 102:y=y.replace(I,"-webkit-"+(102<H?"inline-":"")+"box")+";"+y.replace(I,"-webkit-"+I)+";"+y.replace(I,"-ms-"+I+"box")+";"+y}return y+";";case 938:if(y.charCodeAt(5)===45)switch(y.charCodeAt(6)){case 105:return I=y.replace("-items",""),"-webkit-"+y+"-webkit-box-"+I+"-ms-flex-"+I+y;case 115:return"-webkit-"+y+"-ms-flex-item-"+y.replace(N,"")+y;default:return"-webkit-"+y+"-ms-flex-line-pack"+y.replace("align-content","").replace(N,"")+y}break;case 973:case 989:if(y.charCodeAt(3)!==45||y.charCodeAt(4)===122)break;case 931:case 953:if(M.test($)===!0)return(I=$.substring($.indexOf(":")+1)).charCodeAt(0)===115?i($.replace("stretch","fill-available"),z,L,D).replace(":fill-available",":stretch"):y.replace(I,"-webkit-"+I)+y.replace(I,"-moz-"+I.replace("fill-",""))+y;break;case 962:if(y="-webkit-"+y+(y.charCodeAt(5)===102?"-ms-"+y:"")+y,L+D===211&&y.charCodeAt(13)===105&&0<y.indexOf("transform",10))return y.substring(0,y.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+y}return y}function o($,z){var L=$.indexOf(z===1?":":"{"),D=$.substring(0,z!==3?L:10);return L=$.substring(L+1,$.length-1),A(z!==2?D:D.replace(W,"$1"),L,z)}function l($,z){var L=i(z,z.charCodeAt(0),z.charCodeAt(1),z.charCodeAt(2));return L!==z+";"?L.replace(T," or ($1)").substring(4):"("+z+")"}function a($,z,L,D,y,H,I,ae,K,b){for(var B=0,Ee=z,Ue;B<_;++B)switch(Ue=we[B].call(h,$,Ee,L,D,y,H,I,ae,K,b)){case void 0:case!1:case!0:case null:break;default:Ee=Ue}if(Ee!==z)return Ee}function s($){switch($){case void 0:case null:_=we.length=0;break;default:if(typeof $=="function")we[_++]=$;else if(typeof $=="object")for(var z=0,L=$.length;z<L;++z)s($[z]);else F=!!$|0}return s}function u($){return $=$.prefix,$!==void 0&&(A=null,$?typeof $!="function"?xe=1:(xe=2,A=$):xe=0),u}function h($,z){var L=$;if(33>L.charCodeAt(0)&&(L=L.trim()),G=L,L=[G],0<_){var D=a(-1,z,L,L,ge,ue,0,0,0,0);D!==void 0&&typeof D=="string"&&(z=D)}var y=t(qe,L,z,0,0);return 0<_&&(D=a(-2,y,L,L,ge,ue,y.length,0,0,0),D!==void 0&&(y=D)),G="",Oe=0,ue=ge=1,y}var m=/^\0+/g,g=/[\0\r\f]/g,k=/: */g,w=/zoo|gra/,v=/([,: ])(transform)/g,C=/,\r+?/g,d=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,x=/:(read-only)/g,j=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,T=/([\s\S]*?);/g,N=/-self|flex-/g,W=/[^]*?(:[rp][el]a[\w-]+)[^]*/,M=/stretch|:\s*\w+\-(?:conte|avail)/,fe=/([^-])(image-set\()/,ue=1,ge=1,Oe=0,xe=1,qe=[],we=[],_=0,A=null,F=0,G="";return h.use=s,h.set=u,e!==void 0&&u(e),h}var Xh={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function bh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Zh=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ic=bh(function(e){return Zh.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Yf={exports:{}},q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ce=typeof Symbol=="function"&&Symbol.for,Ms=Ce?Symbol.for("react.element"):60103,Fs=Ce?Symbol.for("react.portal"):60106,Wo=Ce?Symbol.for("react.fragment"):60107,Ho=Ce?Symbol.for("react.strict_mode"):60108,Qo=Ce?Symbol.for("react.profiler"):60114,Yo=Ce?Symbol.for("react.provider"):60109,Go=Ce?Symbol.for("react.context"):60110,Ds=Ce?Symbol.for("react.async_mode"):60111,Ko=Ce?Symbol.for("react.concurrent_mode"):60111,Xo=Ce?Symbol.for("react.forward_ref"):60112,bo=Ce?Symbol.for("react.suspense"):60113,Jh=Ce?Symbol.for("react.suspense_list"):60120,Zo=Ce?Symbol.for("react.memo"):60115,Jo=Ce?Symbol.for("react.lazy"):60116,qh=Ce?Symbol.for("react.block"):60121,e0=Ce?Symbol.for("react.fundamental"):60117,t0=Ce?Symbol.for("react.responder"):60118,n0=Ce?Symbol.for("react.scope"):60119;function Je(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ms:switch(e=e.type,e){case Ds:case Ko:case Wo:case Qo:case Ho:case bo:return e;default:switch(e=e&&e.$$typeof,e){case Go:case Xo:case Jo:case Zo:case Yo:return e;default:return t}}case Fs:return t}}}function Gf(e){return Je(e)===Ko}q.AsyncMode=Ds;q.ConcurrentMode=Ko;q.ContextConsumer=Go;q.ContextProvider=Yo;q.Element=Ms;q.ForwardRef=Xo;q.Fragment=Wo;q.Lazy=Jo;q.Memo=Zo;q.Portal=Fs;q.Profiler=Qo;q.StrictMode=Ho;q.Suspense=bo;q.isAsyncMode=function(e){return Gf(e)||Je(e)===Ds};q.isConcurrentMode=Gf;q.isContextConsumer=function(e){return Je(e)===Go};q.isContextProvider=function(e){return Je(e)===Yo};q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ms};q.isForwardRef=function(e){return Je(e)===Xo};q.isFragment=function(e){return Je(e)===Wo};q.isLazy=function(e){return Je(e)===Jo};q.isMemo=function(e){return Je(e)===Zo};q.isPortal=function(e){return Je(e)===Fs};q.isProfiler=function(e){return Je(e)===Qo};q.isStrictMode=function(e){return Je(e)===Ho};q.isSuspense=function(e){return Je(e)===bo};q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Wo||e===Ko||e===Qo||e===Ho||e===bo||e===Jh||typeof e=="object"&&e!==null&&(e.$$typeof===Jo||e.$$typeof===Zo||e.$$typeof===Yo||e.$$typeof===Go||e.$$typeof===Xo||e.$$typeof===e0||e.$$typeof===t0||e.$$typeof===n0||e.$$typeof===qh)};q.typeOf=Je;Yf.exports=q;var r0=Yf.exports,Us=r0,i0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Kf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Bs={};Bs[Us.ForwardRef]=l0;Bs[Us.Memo]=Kf;function oc(e){return Us.isMemo(e)?Kf:Bs[e.$$typeof]||i0}var a0=Object.defineProperty,s0=Object.getOwnPropertyNames,lc=Object.getOwnPropertySymbols,u0=Object.getOwnPropertyDescriptor,c0=Object.getPrototypeOf,ac=Object.prototype;function Xf(e,t,n){if(typeof t!="string"){if(ac){var r=c0(t);r&&r!==ac&&Xf(e,r,n)}var i=s0(t);lc&&(i=i.concat(lc(t)));for(var o=oc(e),l=oc(t),a=0;a<i.length;++a){var s=i[a];if(!o0[s]&&!(n&&n[s])&&!(l&&l[s])&&!(o&&o[s])){var u=u0(t,s);try{a0(e,s,u)}catch{}}}}return e}var d0=Xf;const f0=Ic(d0);function Et(){return(Et=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var sc=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},za=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Qf.typeOf(e)},uo=Object.freeze([]),Kt=Object.freeze({});function Hr(e){return typeof e=="function"}function uc(e){return e.displayName||e.name||"Component"}function Vs(e){return e&&typeof e.styledComponentId=="string"}var Gn=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ws=typeof window<"u"&&"HTMLElement"in window,p0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Jr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var m0=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&Jr(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var a=o;a<l;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),u=0,h=r.length;u<h;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,a=o;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Oi=new Map,co=new Map,Er=1,yi=function(e){if(Oi.has(e))return Oi.get(e);for(;co.has(Er);)Er++;var t=Er++;return Oi.set(e,t),co.set(t,e),t},h0=function(e){return co.get(e)},g0=function(e,t){t>=Er&&(Er=t+1),Oi.set(e,t),co.set(t,e)},v0="style["+Gn+'][data-styled-version="5.3.9"]',y0=new RegExp("^"+Gn+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),x0=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},w0=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var a=l.match(y0);if(a){var s=0|parseInt(a[1],10),u=a[2];s!==0&&(g0(u,s),x0(e,u,a[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},S0=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},bf=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var s=a.childNodes,u=s.length;u>=0;u--){var h=s[u];if(h&&h.nodeType===1&&h.hasAttribute(Gn))return h}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Gn,"active"),r.setAttribute("data-styled-version","5.3.9");var l=S0();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},k0=function(){function e(n){var r=this.element=bf(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,a=o.length;l<a;l++){var s=o[l];if(s.ownerNode===i)return s}Jr(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),C0=function(){function e(n){var r=this.element=bf(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),E0=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),cc=Ws,j0={isServer:!Ws,useCSSOMInjection:!p0},Zf=function(){function e(n,r,i){n===void 0&&(n=Kt),r===void 0&&(r={}),this.options=Et({},j0,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Ws&&cc&&(cc=!1,function(o){for(var l=document.querySelectorAll(v0),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(Gn)!=="active"&&(w0(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return yi(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Et({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new E0(l):o?new k0(l):new C0(l),new m0(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(yi(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(yi(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(yi(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var a=h0(l);if(a!==void 0){var s=n.names.get(a),u=r.getGroup(l);if(s&&u&&s.size){var h=Gn+".g"+l+'[id="'+a+'"]',m="";s!==void 0&&s.forEach(function(g){g.length>0&&(m+=g+",")}),o+=""+u+h+'{content:"'+m+`"}/*!sc*/
`}}}return o}(this)},e}(),P0=/(a)(d)/gi,dc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ra(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=dc(t%52)+n;return(dc(t%52)+n).replace(P0,"$1-$2")}var Nn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jf=function(e){return Nn(5381,e)};function _0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Hr(n)&&!Vs(n))return!1}return!0}var $0=Jf("5.3.9"),I0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&_0(t),this.componentId=n,this.baseHash=Nn($0,n),this.baseStyle=r,Zf.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=Kn(this.rules,t,n,r).join(""),a=Ra(Nn(this.baseHash,l)>>>0);if(!n.hasNameForId(i,a)){var s=r(l,"."+a,void 0,i);n.insertRules(i,a,s)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,h=Nn(this.baseHash,r.hash),m="",g=0;g<u;g++){var k=this.rules[g];if(typeof k=="string")m+=k;else if(k){var w=Kn(k,t,n,r),v=Array.isArray(w)?w.join(""):w;h=Nn(h,v+g),m+=v}}if(m){var C=Ra(h>>>0);if(!n.hasNameForId(i,C)){var d=r(m,"."+C,void 0,i);n.insertRules(i,C,d)}o.push(C)}}return o.join(" ")},e}(),z0=/^\s*\/\/.*$/gm,R0=[":","[",".","#"];function T0(e){var t,n,r,i,o=e===void 0?Kt:e,l=o.options,a=l===void 0?Kt:l,s=o.plugins,u=s===void 0?uo:s,h=new Kh(a),m=[],g=function(v){function C(d){if(d)try{v(d+"}")}catch{}}return function(d,c,p,x,j,R,T,N,W,M){switch(d){case 1:if(W===0&&c.charCodeAt(0)===64)return v(c+";"),"";break;case 2:if(N===0)return c+"/*|*/";break;case 3:switch(N){case 102:case 112:return v(p[0]+c),"";default:return c+(M===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach(C)}}}(function(v){m.push(v)}),k=function(v,C,d){return C===0&&R0.indexOf(d[n.length])!==-1||d.match(i)?v:"."+t};function w(v,C,d,c){c===void 0&&(c="&");var p=v.replace(z0,""),x=C&&d?d+" "+C+" { "+p+" }":p;return t=c,n=C,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),h(d||!C?"":C,x)}return h.use([].concat(u,[function(v,C,d){v===2&&d.length&&d[0].lastIndexOf(n)>0&&(d[0]=d[0].replace(r,k))},g,function(v){if(v===-2){var C=m;return m=[],C}}])),w.hash=u.length?u.reduce(function(v,C){return C.name||Jr(15),Nn(v,C.name)},5381).toString():"",w}var qf=pe.createContext();qf.Consumer;var ep=pe.createContext(),N0=(ep.Consumer,new Zf),Ta=T0();function L0(){return E.useContext(qf)||N0}function O0(){return E.useContext(ep)||Ta}var tp=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ta);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return Jr(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ta),this.name+t.hash},e}(),A0=/([A-Z])/,M0=/([A-Z])/g,F0=/^ms-/,D0=function(e){return"-"+e.toLowerCase()};function fc(e){return A0.test(e)?e.replace(M0,D0).replace(F0,"-ms-"):e}var pc=function(e){return e==null||e===!1||e===""};function Kn(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,a=e.length;l<a;l+=1)(i=Kn(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(pc(e))return"";if(Vs(e))return"."+e.styledComponentId;if(Hr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return Kn(s,t,n,r)}var u;return e instanceof tp?n?(e.inject(n,r),e.getName(r)):e:za(e)?function h(m,g){var k,w,v=[];for(var C in m)m.hasOwnProperty(C)&&!pc(m[C])&&(Array.isArray(m[C])&&m[C].isCss||Hr(m[C])?v.push(fc(C)+":",m[C],";"):za(m[C])?v.push.apply(v,h(m[C],C)):v.push(fc(C)+": "+(k=C,(w=m[C])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||k in Xh?String(w).trim():w+"px")+";"));return g?[g+" {"].concat(v,["}"]):v}(e):e.toString()}var mc=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function qo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Hr(e)||za(e)?mc(Kn(sc(uo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:mc(Kn(sc(e,n)))}var U0=function(e,t,n){return n===void 0&&(n=Kt),e.theme!==n.theme&&e.theme||t||n.theme},B0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,V0=/(^-|-$)/g;function Il(e){return e.replace(B0,"-").replace(V0,"")}var np=function(e){return Ra(Jf(e)>>>0)};function xi(e){return typeof e=="string"&&!0}var Na=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},W0=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function H0(e,t,n){var r=e[n];Na(t)&&Na(r)?rp(r,t):e[n]=t}function rp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(Na(l))for(var a in l)W0(a)&&H0(e,l[a],a)}return e}var ip=pe.createContext();ip.Consumer;var zl={};function op(e,t,n){var r=Vs(e),i=!xi(e),o=t.attrs,l=o===void 0?uo:o,a=t.componentId,s=a===void 0?function(c,p){var x=typeof c!="string"?"sc":Il(c);zl[x]=(zl[x]||0)+1;var j=x+"-"+np("5.3.9"+x+zl[x]);return p?p+"-"+j:j}(t.displayName,t.parentComponentId):a,u=t.displayName,h=u===void 0?function(c){return xi(c)?"styled."+c:"Styled("+uc(c)+")"}(e):u,m=t.displayName&&t.componentId?Il(t.displayName)+"-"+t.componentId:t.componentId||s,g=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,k=t.shouldForwardProp;r&&e.shouldForwardProp&&(k=t.shouldForwardProp?function(c,p,x){return e.shouldForwardProp(c,p,x)&&t.shouldForwardProp(c,p,x)}:e.shouldForwardProp);var w,v=new I0(n,m,r?e.componentStyle:void 0),C=v.isStatic&&l.length===0,d=function(c,p){return function(x,j,R,T){var N=x.attrs,W=x.componentStyle,M=x.defaultProps,fe=x.foldedComponentIds,ue=x.shouldForwardProp,ge=x.styledComponentId,Oe=x.target,xe=function(D,y,H){D===void 0&&(D=Kt);var I=Et({},y,{theme:D}),ae={};return H.forEach(function(K){var b,B,Ee,Ue=K;for(b in Hr(Ue)&&(Ue=Ue(I)),Ue)I[b]=ae[b]=b==="className"?(B=ae[b],Ee=Ue[b],B&&Ee?B+" "+Ee:B||Ee):Ue[b]}),[I,ae]}(U0(j,E.useContext(ip),M)||Kt,j,N),qe=xe[0],we=xe[1],_=function(D,y,H,I){var ae=L0(),K=O0(),b=y?D.generateAndInjectStyles(Kt,ae,K):D.generateAndInjectStyles(H,ae,K);return b}(W,T,qe),A=R,F=we.$as||j.$as||we.as||j.as||Oe,G=xi(F),$=we!==j?Et({},j,{},we):j,z={};for(var L in $)L[0]!=="$"&&L!=="as"&&(L==="forwardedAs"?z.as=$[L]:(ue?ue(L,ic,F):!G||ic(L))&&(z[L]=$[L]));return j.style&&we.style!==j.style&&(z.style=Et({},j.style,{},we.style)),z.className=Array.prototype.concat(fe,ge,_!==ge?_:null,j.className,we.className).filter(Boolean).join(" "),z.ref=A,E.createElement(F,z)}(w,c,p,C)};return d.displayName=h,(w=pe.forwardRef(d)).attrs=g,w.componentStyle=v,w.displayName=h,w.shouldForwardProp=k,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):uo,w.styledComponentId=m,w.target=r?e.target:e,w.withComponent=function(c){var p=t.componentId,x=function(R,T){if(R==null)return{};var N,W,M={},fe=Object.keys(R);for(W=0;W<fe.length;W++)N=fe[W],T.indexOf(N)>=0||(M[N]=R[N]);return M}(t,["componentId"]),j=p&&p+"-"+(xi(c)?c:Il(uc(c)));return op(c,Et({},x,{attrs:g,componentId:j}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?rp({},e.defaultProps,c):c}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&f0(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var La=function(e){return function t(n,r,i){if(i===void 0&&(i=Kt),!Qf.isValidElementType(r))return Jr(1,String(r));var o=function(){return n(r,i,qo.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,Et({},i,{},l))},o.attrs=function(l){return t(n,r,Et({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(op,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){La[e]=La(e)});function Hs(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=qo.apply(void 0,[e].concat(n)).join(""),o=np(i);return new tp(o,i)}const S=La,cr=48,Q0=({color:e="currentColor",direction:t="left",distance:n="md",duration:r=.4,easing:i="cubic-bezier(0, 0, 0, 1)",hideOutline:o=!0,label:l,lines:a=3,onToggle:s,render:u,rounded:h=!1,size:m=32,toggle:g,toggled:k,disabled:w=!1,animateOnMount:v=!1})=>{const[C,d]=E.useState(!1),[c,p]=E.useState(!1);E.useEffect(()=>{p(!0)},[]);const x=Math.max(12,Math.min(cr,m)),j=Math.round((cr-x)/2),R=x/12,T=Math.round(R),W=x/(a*((n==="lg"?.25:n==="sm"?.75:.5)+(a===3?1:1.25))),M=Math.round(W),fe=T*a+M*(a-1),ue=Math.round((cr-fe)/2),ge=a===3?n==="lg"?4.0425:n==="sm"?5.1625:4.6325:n==="lg"?6.7875:n==="sm"?8.4875:7.6675,Oe=(R-T+(W-M))/(a===3?1:2),xe=parseFloat((x/ge-Oe/(4/3)).toFixed(2)),qe=Math.max(0,r),we={cursor:w?"not-allowed":"pointer",height:`${cr}px`,position:"relative",transition:`${qe}s ${i}`,userSelect:"none",width:`${cr}px`},_={background:e,height:`${T}px`,left:`${j}px`,position:"absolute"};o&&(we.outline="none"),h&&(_.borderRadius="9em");const A=()=>{const z=k!==void 0?k:C;return v&&!c?!z:z},F=g||d,G=A();return u({barHeight:T,barStyles:_,burgerStyles:we,easing:i,handler:()=>{F(!G),typeof s=="function"&&s(!G)},isLeft:t==="left",isToggled:G,label:l,margin:M,move:xe,time:qe,topOffset:ue,width:x})};function Oa(){return Oa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oa.apply(this,arguments)}const Y0=e=>pe.createElement(Q0,Oa({},e,{render:t=>pe.createElement("div",{className:"hamburger-react","aria-label":t.label,"aria-expanded":t.isToggled,onClick:e.disabled?void 0:t.handler,onKeyUp:e.disabled?void 0:n=>n.key==="Enter"&&t.handler(),role:"button",style:{...t.burgerStyles,transform:`${t.isToggled?`rotate(${180*(t.isLeft?-1:1)}deg)`:"none"}`},tabIndex:0},pe.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset}px`,transition:`${t.time}s ${t.easing}`,transform:`${t.isToggled?`rotate(${45*(t.isLeft?-1:1)}deg) translate(${t.move*(t.isLeft?-1:1)}px, ${t.move}px)`:"none"}`}}),pe.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset+t.barHeight+t.margin}px`,transition:`${t.time}s ${t.easing}`,opacity:`${t.isToggled?"0":"1"}`}}),pe.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset+t.barHeight*2+t.margin*2}px`,transition:`${t.time}s ${t.easing}`,transform:`${t.isToggled?`rotate(${45*(t.isLeft?1:-1)}deg) translate(${t.move*(t.isLeft?-1:1)}px, ${t.move*-1}px)`:"none"}`}}))}));/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qr(){return Qr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qr.apply(this,arguments)}var Dt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Dt||(Dt={}));const hc="popstate";function G0(e){e===void 0&&(e={});function t(i,o){let{pathname:l="/",search:a="",hash:s=""}=gn(i.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Aa("",{pathname:l,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let l=i.document.querySelector("base"),a="";if(l&&l.getAttribute("href")){let s=i.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof o=="string"?o:fo(o))}function r(i,o){Qs(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return X0(t,n,r,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function K0(){return Math.random().toString(36).substr(2,8)}function gc(e,t){return{usr:e.state,key:e.key,idx:t}}function Aa(e,t,n,r){return n===void 0&&(n=null),Qr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?gn(t):t,{state:n,key:t&&t.key||r||K0()})}function fo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function gn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function X0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Dt.Pop,s=null,u=h();u==null&&(u=0,l.replaceState(Qr({},l.state,{idx:u}),""));function h(){return(l.state||{idx:null}).idx}function m(){a=Dt.Pop;let C=h(),d=C==null?null:C-u;u=C,s&&s({action:a,location:v.location,delta:d})}function g(C,d){a=Dt.Push;let c=Aa(v.location,C,d);n&&n(c,C),u=h()+1;let p=gc(c,u),x=v.createHref(c);try{l.pushState(p,"",x)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(x)}o&&s&&s({action:a,location:v.location,delta:1})}function k(C,d){a=Dt.Replace;let c=Aa(v.location,C,d);n&&n(c,C),u=h();let p=gc(c,u),x=v.createHref(c);l.replaceState(p,"",x),o&&s&&s({action:a,location:v.location,delta:0})}function w(C){let d=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof C=="string"?C:fo(C);return c=c.replace(/ $/,"%20"),he(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let v={get action(){return a},get location(){return e(i,l)},listen(C){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(hc,m),s=C,()=>{i.removeEventListener(hc,m),s=null}},createHref(C){return t(i,C)},createURL:w,encodeLocation(C){let d=w(C);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:g,replace:k,go(C){return l.go(C)}};return v}var vc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vc||(vc={}));function b0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?gn(t):t,i=Ys(r.pathname||"/",n);if(i==null)return null;let o=lp(e);Z0(o);let l=null;for(let a=0;l==null&&a<o.length;++a){let s=u1(i);l=l1(o[a],s)}return l}function lp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(he(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Xt([r,s.relativePath]),h=n.concat(s);o.children&&o.children.length>0&&(he(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),lp(o.children,t,h,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:i1(u,o.index),routesMeta:h})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of ap(o.path))i(o,l,s)}),t}function ap(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=ap(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Z0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:o1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const J0=/^:[\w-]+$/,q0=3,e1=2,t1=1,n1=10,r1=-2,yc=e=>e==="*";function i1(e,t){let n=e.split("/"),r=n.length;return n.some(yc)&&(r+=r1),t&&(r+=e1),n.filter(i=>!yc(i)).reduce((i,o)=>i+(J0.test(o)?q0:o===""?t1:n1),r)}function o1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function l1(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",h=a1({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!h)return null;Object.assign(r,h.params);let m=a.route;o.push({params:r,pathname:Xt([i,h.pathname]),pathnameBase:p1(Xt([i,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(i=Xt([i,h.pathnameBase]))}return o}function a1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=s1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,h,m)=>{let{paramName:g,isOptional:k}=h;if(g==="*"){let v=a[m]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const w=a[m];return k&&!w?u[g]=void 0:u[g]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function s1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Qs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function u1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Qs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ys(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function c1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?gn(e):e;return{pathname:n?n.startsWith("/")?n:d1(n,t):t,search:m1(r),hash:h1(i)}}function d1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function f1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function sp(e,t){let n=f1(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function up(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=gn(e):(i=Qr({},e),he(!i.pathname||!i.pathname.includes("?"),Rl("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),Rl("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),Rl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let m=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}a=m>=0?t[m]:"/"}let s=c1(i,a),u=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||h)&&(s.pathname+="/"),s}const Xt=e=>e.join("/").replace(/\/\/+/g,"/"),p1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),m1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,h1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function g1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cp=["post","put","patch","delete"];new Set(cp);const v1=["get",...cp];new Set(v1);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yr(){return Yr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yr.apply(this,arguments)}const Gs=E.createContext(null),y1=E.createContext(null),vn=E.createContext(null),el=E.createContext(null),yn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),dp=E.createContext(null);function x1(e,t){let{relative:n}=t===void 0?{}:t;qr()||he(!1);let{basename:r,navigator:i}=E.useContext(vn),{hash:o,pathname:l,search:a}=pp(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:Xt([r,l])),i.createHref({pathname:s,search:a,hash:o})}function qr(){return E.useContext(el)!=null}function Jn(){return qr()||he(!1),E.useContext(el).location}function fp(e){E.useContext(vn).static||E.useLayoutEffect(e)}function w1(){let{isDataRoute:e}=E.useContext(yn);return e?N1():S1()}function S1(){qr()||he(!1);let e=E.useContext(Gs),{basename:t,future:n,navigator:r}=E.useContext(vn),{matches:i}=E.useContext(yn),{pathname:o}=Jn(),l=JSON.stringify(sp(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return fp(()=>{a.current=!0}),E.useCallback(function(u,h){if(h===void 0&&(h={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let m=up(u,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Xt([t,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[t,r,l,o,e])}function pp(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(vn),{matches:i}=E.useContext(yn),{pathname:o}=Jn(),l=JSON.stringify(sp(i,r.v7_relativeSplatPath));return E.useMemo(()=>up(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function k1(e,t){return C1(e,t)}function C1(e,t,n,r){qr()||he(!1);let{navigator:i}=E.useContext(vn),{matches:o}=E.useContext(yn),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=Jn(),h;if(t){var m;let C=typeof t=="string"?gn(t):t;s==="/"||(m=C.pathname)!=null&&m.startsWith(s)||he(!1),h=C}else h=u;let g=h.pathname||"/",k=g;if(s!=="/"){let C=s.replace(/^\//,"").split("/");k="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let w=b0(e,{pathname:k}),v=$1(w&&w.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:Xt([s,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?s:Xt([s,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,n,r);return t&&v?E.createElement(el.Provider,{value:{location:Yr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Dt.Pop}},v):v}function E1(){let e=T1(),t=g1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,o)}const j1=E.createElement(E1,null);class P1 extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(yn.Provider,{value:this.props.routeContext},E.createElement(dp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _1(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(Gs);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(yn.Provider,{value:t},r)}function $1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=l.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);h>=0||he(!1),l=l.slice(0,Math.min(l.length,h+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<l.length;h++){let m=l[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=h),m.route.id){let{loaderData:g,errors:k}=n,w=m.route.loader&&g[m.route.id]===void 0&&(!k||k[m.route.id]===void 0);if(m.route.lazy||w){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((h,m,g)=>{let k,w=!1,v=null,C=null;n&&(k=a&&m.route.id?a[m.route.id]:void 0,v=m.route.errorElement||j1,s&&(u<0&&g===0?(L1("route-fallback",!1),w=!0,C=null):u===g&&(w=!0,C=m.route.hydrateFallbackElement||null)));let d=t.concat(l.slice(0,g+1)),c=()=>{let p;return k?p=v:w?p=C:m.route.Component?p=E.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=h,E.createElement(_1,{match:m,routeContext:{outlet:h,matches:d,isDataRoute:n!=null},children:p})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?E.createElement(P1,{location:n.location,revalidation:n.revalidation,component:v,error:k,children:c(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):c()},null)}var mp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(mp||{}),po=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(po||{});function I1(e){let t=E.useContext(Gs);return t||he(!1),t}function z1(e){let t=E.useContext(y1);return t||he(!1),t}function R1(e){let t=E.useContext(yn);return t||he(!1),t}function hp(e){let t=R1(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function T1(){var e;let t=E.useContext(dp),n=z1(po.UseRouteError),r=hp(po.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function N1(){let{router:e}=I1(mp.UseNavigateStable),t=hp(po.UseNavigateStable),n=E.useRef(!1);return fp(()=>{n.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Yr({fromRouteId:t},o)))},[e,t])}const xc={};function L1(e,t,n){!t&&!xc[e]&&(xc[e]=!0)}function Ma(e){he(!1)}function O1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Dt.Pop,navigator:o,static:l=!1,future:a}=e;qr()&&he(!1);let s=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:s,navigator:o,static:l,future:Yr({v7_relativeSplatPath:!1},a)}),[s,a,o,l]);typeof r=="string"&&(r=gn(r));let{pathname:h="/",search:m="",hash:g="",state:k=null,key:w="default"}=r,v=E.useMemo(()=>{let C=Ys(h,s);return C==null?null:{location:{pathname:C,search:m,hash:g,state:k,key:w},navigationType:i}},[s,h,m,g,k,w,i]);return v==null?null:E.createElement(vn.Provider,{value:u},E.createElement(el.Provider,{children:n,value:v}))}function A1(e){let{children:t,location:n}=e;return k1(Fa(t),n)}new Promise(()=>{});function Fa(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let o=[...t,i];if(r.type===E.Fragment){n.push.apply(n,Fa(r.props.children,o));return}r.type!==Ma&&he(!1),!r.props.index||!r.props.children||he(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Fa(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Da(){return Da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Da.apply(this,arguments)}function M1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function F1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function D1(e,t){return e.button===0&&(!t||t==="_self")&&!F1(e)}const U1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],B1="6";try{window.__reactRouterVersion=B1}catch{}const V1="startTransition",wc=Lp[V1];function W1(e){let{basename:t,children:n,future:r,window:i}=e,o=E.useRef();o.current==null&&(o.current=G0({window:i,v5Compat:!0}));let l=o.current,[a,s]=E.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},h=E.useCallback(m=>{u&&wc?wc(()=>s(m)):s(m)},[s,u]);return E.useLayoutEffect(()=>l.listen(h),[l,h]),E.createElement(O1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const H1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Q1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ks=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:u,preventScrollReset:h,unstable_viewTransition:m}=t,g=M1(t,U1),{basename:k}=E.useContext(vn),w,v=!1;if(typeof u=="string"&&Q1.test(u)&&(w=u,H1))try{let p=new URL(window.location.href),x=u.startsWith("//")?new URL(p.protocol+u):new URL(u),j=Ys(x.pathname,k);x.origin===p.origin&&j!=null?u=j+x.search+x.hash:v=!0}catch{}let C=x1(u,{relative:i}),d=Y1(u,{replace:l,state:a,target:s,preventScrollReset:h,relative:i,unstable_viewTransition:m});function c(p){r&&r(p),p.defaultPrevented||d(p)}return E.createElement("a",Da({},g,{href:w||C,onClick:v||o?r:c,ref:n,target:s}))});var Sc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Sc||(Sc={}));var kc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(kc||(kc={}));function Y1(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a}=t===void 0?{}:t,s=w1(),u=Jn(),h=pp(e,{relative:l});return E.useCallback(m=>{if(D1(m,n)){m.preventDefault();let g=r!==void 0?r:fo(u)===fo(h);s(e,{replace:g,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a})}},[u,s,h,r,i,n,e,o,l,a])}const Cc="/portfolio/assets/Spline_logo-4fef882f.gif",G1=S.nav`
  position: absolute;
  left: 0%;
  grid-area: top;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 150;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1em;
  padding-left: 1em;
  box-sizing: border-box;
  background-color: var(--main-hero-backgroundcolor);
  top: ${({visible:e})=>e?"0":"-160px"};
  transition: top 0.6s;

  @media screen and (max-width: 960px) {
    font-size: 16px;
  }

  @media screen and (max-width: 767px) {
    justify-items: flex-end;
    justify-content: space-between;
    margin-top: 0;
    padding-top: 0.5em;
  }
`,K1=S.div`
  width: 300px;
  height: 100%;

  @media screen and (max-width: 478px) {
    width: 100px;
  }
`,X1=S.div`
  display: flex;

  @media screen and (max-width: 960px) {
    width: 100%;

    justify-content: center;
    margin-bottom: 4em;
  }
`,b1=S.img`
  text-align: center;
  width: 80px;
  margin-top: 0em;

  @media screen and (max-width: 960px) {
    margin-top: 1.5em;
  }

  @media screen and (max-width: 767px) {
    margin-top: 1em;
  }
`,Z1=S.img`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    margin-top: 100px;
    width: 100px;
  }
`,J1=S.div`
  display: flex;
  width: 600px;
  height: 100%;
  padding-left: 0.5em;
  text-align: left;

  @media screen and (max-width: 767px) {
    padding-left: 0em;
  }
`,q1=S.ul`
  width: auto;
  display: flex;
  list-style-type: none;
  margin-left: 1em;

  @media screen and (max-width: 960px) {
    position: fixed;
    flex-direction: column;
    padding-top: 0em;
    top: 0px;
    right: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--main-hero-backgroundcolor);
    opacity: ${({open:e})=>e?"1":"0"};
    visibility: ${({open:e})=>e?"visible":"hidden"};
    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0em;
    margin-left: 0em;
    padding-right: 0em;
    padding-inline-start: 0px;
  }

  @media screen and (max-width: 960px) {
    padding-top: 4em;
  }

  @media screen and (max-width: 478px) {
    width: 100%;
  }
`,eg=S(Ks)`
  display: flex;
  justify-self: flex-end;
  align-self: flex-end;
  color: var(--main-font-color);
  text-decoration: none;
  text-align: right;
  margin: 1em 2em 0em 0em;
  color: var(--main-font-color);

  &:hover {
    text-decoration: underline;
    color: var(--main-navbar-hover-color);
  }

  &.active {
    text-decoration: underline;
    color: var(--main-navbar-active-color);
  }

  @media screen and (max-width: 960px) {
    justify-content: center;
    align-self: center;
    margin: 1em 0em 0em 0em;
    font-size: 32px;

    &:hover {
      text-decoration: none;
      color: var(--main-navbar-hover-color);
    }
  }
`,tg=S.a`
  display: flex;
  align-self: flex-end;
  text-decoration: none;
  text-align: right;
  margin: 0em 2em 0em 0em;
  color: var(--main-font-color);

  &:hover {
    text-decoration: underline;
    color: var(--main-navbar-hover-color);
  }

  &.active {
    text-decoration: underline;
  }

  @media screen and (max-width: 960px) {
    justify-content: center;
    align-self: center;
    font-size: 32px;

    margin: 1em 0em 0em 0em;

    &:hover {
      text-decoration: none;
    }
  }
`,ng=S.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    color: var(--main-font-color);
    margin-top: 1em;
    margin-right: 2em;
  }
`,rg=({footerRef:e})=>{const t=Jn(),[n,r]=E.useState(!1),[i,o]=E.useState(t.pathname),[l,a]=E.useState(!1),[s,u]=E.useState(window.pageYOffset),[h,m]=E.useState(!0);E.useEffect(()=>{o(t.pathname);const v=()=>{const C=window.pageYOffset;m(s>C||C<10),u(C)};return window.addEventListener("scroll",v),()=>window.removeEventListener("scroll",v)},[t.pathname,s]);const g=()=>{e.current&&e.current.scrollIntoView({behavior:"smooth"}),r(!1),a(!1)},k=()=>{r(!1),a(!1)},w=[{id:1,to:"/",text:"Home"},{id:2,to:"https://www.paulevans-dop.com/",text:"Cinematography",isExternal:!0},{id:3,to:"/about",text:"About"},{id:4,to:"#",text:"Contact",onClick:g}];return f.jsxs(G1,{visible:h,children:[f.jsx(K1,{children:f.jsx(Ks,{to:"/",onClick:k,children:f.jsx(J1,{children:f.jsx(b1,{src:Cc,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A revolving logo showing the initals PE and a cartton version of Paul Evans.."})})})}),f.jsxs(q1,{open:n,children:[w.map(v=>v.isExternal?f.jsx(tg,{href:v.to,onClick:v.onClick||k,className:i===v.to?"active":"",children:v.text},v.id):f.jsx(eg,{to:v.to,onClick:v.onClick||k,className:i===v.to?"active":"",children:v.text},v.id)),f.jsx(X1,{children:f.jsx(Z1,{src:Cc,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A revolving logo showing the initals PE and a cartton version of Paul Evans.."})})]}),f.jsx(ng,{children:f.jsx("div",{onClick:()=>{r(!n),a(!l)},children:f.jsx(Y0,{toggled:l})})})]})},ig="/portfolio/assets/showcase1-4574d875.mp4",og=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,jr=S.p`
  font-size: 16px;
  display: none;
`,Ai=S.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 0em 2em 0.5em 3em;
  border-radius: 24px;

  transform: translateY(46%); //Intial state
  transition: transform 0.5s ease-in-out;

  @media (max-width: 960px) {
    transform: translateY(42%);
    padding: 0em 2em 1em 2em;
  }

  @media (max-width: 478px) {
    justify-content: flex-end;
    padding: 0em 2em 2em 1em;
  }
`,lg=S.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-self: center;
  width: 100%;
  aspect-ratio: 16 / 9;
  font-size: 1.2rem;
  overflow: hidden;
  border-radius: 24px;

  &:hover ${Ai} {
    transform: translateY(0%); // Slide up
    background-color: #060606ac;
    justify-content: center;
  }

  &:hover ${jr} {
    display: flex;
  }

  @media (max-width: 960px) {
    ${Ai} {
      transform: translateY(0%);
    }

    ${jr} {
      display: flex;
    }

    &:hover ${Ai} {
      transform: translateY(0%);
      background-color: transparent;
    }

    &:hover ${jr} {
      display: none;
    }
  }

  @media (max-width: 478px) {
    aspect-ratio: 4 / 5;
  }
`,ag=S.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: var(--main-font-color);
  padding: 0em 0em 2em 0em;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    padding: 0em 0em 2em 0em;
  }
`,sg=S.div`
  width: 20%;
  text-align: justify;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
  }
`,ug=S.div`
  display: flex;
  justify-content: center;
  color: var(--main-font-color);
  padding: 2em 0em 2em 0em;
`,cg=S.div`
  width: 20%;
  text-align: justify;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
  }
`,dg=S.div`
  width: 20%;
  text-align: justify;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
  }
`,fg=S.div`
  width: 20%;
  text-align: justify;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
  }
`,pg=S.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
  border-radius: 24px;
`,wi=S.p`
  font-size: 16px;
`,Si=S.p`
  font-size: 16px;
  font-weight: 600;
`,mg=S.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000056;
  border-radius: 24px;
`,hg=S.div`
  &:hover {
    color: var(--main-button-hover-color);
  }
`,gg=pe.forwardRef((e,t)=>f.jsxs(og,{ref:t,children:[f.jsx(ug,{children:f.jsx("h2",{children:"Cinematography"})}),f.jsxs(ag,{children:[f.jsxs(sg,{children:[f.jsx(Si,{children:"Paul Evans FSF."}),f.jsx(wi,{children:"Expertise in both film and digital formats. Thrives on blending live-action footage with VFX, creating visually captivating worlds that amplify storytelling."})]}),f.jsxs(cg,{children:[f.jsx(Si,{children:"Narrative Selected Titles:"}),f.jsx(wi,{children:"The Last Journey or the Vikings, Viaplay | Streams, SVT | Vi Forever, SVT"})]}),f.jsxs(dg,{children:[f.jsx(Si,{children:"Commercials Selected Brands:"}),f.jsx(wi,{children:"Volvo | Ikea | Fruit-Tella | Burger King | Call of Duty | Renault | Stadium | Gant | Doritos | ICA | Verisure | Aller Media | Grandiosa"})]}),f.jsxs(fg,{children:[f.jsx(Si,{children:"Music Promos Selected Artists:"}),f.jsx(wi,{children:"Katy Perry| Ghost | MØ | Viagra Boys | Darin | Albin Lee Meldau | Ansiktet"})]})]}),f.jsx("a",{href:"https://paulevans-dop.com/",target:"_blank",rel:"noopener noreferrer",children:f.jsxs(lg,{children:[f.jsx(pg,{src:ig,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A showreel showing clips from different productions."}),f.jsx(mg,{children:f.jsxs(Ai,{children:[f.jsx("h3",{children:"Paul Evans fsf"}),f.jsx(jr,{children:"Captivating audiences and elevating stories. Working in Narrative, Commercials, Music Videos and Still Photography."}),f.jsx(hg,{children:f.jsx(jr,{children:"See work .."})})]})})]})})]})),vg="/portfolio/assets/faceHat-ffd7caab.png",yg="/portfolio/assets/palm-07082ae2.png",xg="/portfolio/assets/pen-3560c3bf.png",wg="/portfolio/assets/mobile-6c5bf217.png",Sg="/portfolio/assets/camera-2c8ce49b.png",kg="/portfolio/assets/film-d85f6017.png",Cg="/portfolio/assets/lines-a56af81d.png",Eg=S.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  padding: 8em 1em 0.5em 1em;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 767px) {
    padding: 8em 0em 0.5em 0em;
  }
`,jg=S.div`
position: relative;
   width: 50%;
   height: 100%;
   min-height: 550px;
   overflow: hidden;
   display: flex;
   align-items: center;
   justify-content: center;
   padding-left: 2em;

   @media (max-width: 960px) {
     min-height: 200px;
     padding-left: 0em;
   }
`,Pg=S.img`
  position: absolute;
  bottom: -100%;
   width: 90%;
   height: 100%;
   aspect-ratio: 1 / 1;
   object-fit: contain;

   animation: slideUpFade 30s ease-in-out infinite; /* Repeat animation */
   animation-delay: 2s;

  @keyframes slideUpFade {
    0% {
      bottom: -100%;
      opacity: 1;
    }
    10% {
      bottom: 0;
      opacity: 1;
    }
    50% {
      bottom: 0;
      opacity: 1;
    }
    60% {
      bottom: 0;
      opacity: 1;
    }
    85% {
      bottom: 0;
      opacity: 0; 
    }
    100% {
      bottom: -100%;
      opacity: 0; 
    }
  }
`,_g=S.img`
  position: absolute;
  bottom: 0%;
   width: 90%;
   height: 100%;
   aspect-ratio: 1 / 1;
   object-fit: contain;
   opacity: 0;
   animation: fadeUp 30s ease-in-out infinite; /* Repeat animation */
   animation-delay: 3s;

  @keyframes fadeUp {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0; 
    }
    15% {
      opacity: 1; 
    }
    50% {
      opacity: 1; 
    }
    60% {
      opacity: 0; 
    }
    85% {
      opacity: 0; 
    }
    100% {
      opacity: 0; 
    }
  }
`,$g=S.img`
  position: absolute;
  bottom: 0%;
   width: 90%;
   height: 100%;
   aspect-ratio: 1 / 1;
   object-fit: contain;
   opacity: 0;
   animation: fadeUp 30s ease-in-out infinite; /* Repeat animation */
   animation-delay: 4s;

  @keyframes fadeUp {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0; 
    }
    15% {
      opacity: 1; 
    }
    50% {
      opacity: 1; 
    }
    60% {
      opacity: 0; 
    }
    85% {
      opacity: 0; 
    }
    100% {
      opacity: 0; 
    }
  }
`,Ig=S.img`
  position: absolute;
  bottom: 0%;
   width: 90%;
   height: 100%;
   aspect-ratio: 1 / 1;
   object-fit: contain;
   opacity: 0;
   animation: fadeUp 30s ease-in-out infinite; /* Repeat animation */
   animation-delay: 5s;

  @keyframes fadeUp {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0; 
    }
    15% {
      opacity: 1; 
    }
    50% {
      opacity: 1; 
    }
    60% {
      opacity: 0; 
    }
    85% {
      opacity: 0; 
    }
    100% {
      opacity: 0; 
    }
  }
`,zg=S.img`
  position: absolute;
  bottom: 0%;
   width: 90%;
   height: 100%;
   aspect-ratio: 1 / 1;
   object-fit: contain;
   opacity: 0;
   animation: fadeUp 30s ease-in-out infinite; /* Repeat animation */
   animation-delay: 6s;

  @keyframes fadeUp {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0; 
    }
    15% {
      opacity: 1; 
    }
    50% {
      opacity: 1; 
    }
    60% {
      opacity: 0; 
    }
    85% {
      opacity: 0; 
    }
    100% {
      opacity: 0; 
    }
  }
`,Rg=S.img`
  position: absolute;
  bottom: 0%;
   width: 90%;
   height: 100%;
   aspect-ratio: 1 / 1;
   object-fit: contain;
   opacity: 0;
   animation: fadeUp 30s ease-in-out infinite; /* Repeat animation */
   animation-delay: 7s;

  @keyframes fadeUp {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0; 
    }
    15% {
      opacity: 1; 
    }
    50% {
      opacity: 1; 
    }
    60% {
      opacity: 0; 
    }
    85% {
      opacity: 0; 
    }
    100% {
      opacity: 0; 
    }
  }
`,Tg=S.img`
  position: absolute;
  bottom: 0%;
   width: 90%;
   height: 100%;
   aspect-ratio: 1 / 1;
   object-fit: contain;
   opacity: 0;
   animation: fadeUp 30s ease-in-out infinite; /* Repeat animation */
   animation-delay: 8s;

  @keyframes fadeUp {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0; 
    }
    15% {
      opacity: 1; 
    }
    50% {
      opacity: 1; 
    }
    60% {
      opacity: 0; 
    }
    85% {
      opacity: 0; 
    }
    100% {
      opacity: 0; 
    }
  }
`,Ng=S.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  min-height: 550px;
  font-size: 1.2rem;
  overflow: hidden;

  @media (max-width: 960px) {
    width: 90%;
    align-items: center;
    min-height: 400px;
    padding: 0em 0em 1em 0em;
  }
`,Lg=S.div`
  width: 100%;
`,Tl=S.p`
  color: var(--main-p-color);
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 2em;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`,Og=()=>f.jsxs(Eg,{children:[f.jsxs(Ng,{children:[f.jsxs(Lg,{children:[f.jsx("h1",{children:"Paul Evans"}),f.jsx(Tl,{children:"Experience Designer"})]}),f.jsx(Tl,{children:"Hi!"}),f.jsx(Tl,{children:"I am a passionate creative with over 20 years of experience in branding, storytelling, and content creation, blending my background in film production with UX/UI design and web development. My passion for storytelling continues to inform my approach, allowing me to create compelling narratives and experiences that connect with audiences across digital and physical platforms."})]}),f.jsxs(jg,{children:[f.jsx(Pg,{src:vg}),f.jsx(_g,{src:yg}),f.jsx($g,{src:xg}),f.jsx(Ig,{src:wg}),f.jsx(zg,{src:Sg}),f.jsx(Rg,{src:kg}),f.jsx(Tg,{src:Cg})]})]}),Ec="/portfolio/assets/aiReel-5e8dda4f.mp4",Ag=e=>{const t=document.createElement("video");t.src=e,t.preload="auto",t.load()},Mg=S.div`
  grid-area: cinema;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,Pr=S.p`
  font-size: 16px;
  display: none;
`,Mi=S.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 0em 2em 0.5em 2em;
  border-radius: 24px;

  transform: translateY(46%); //Intial state
  transition: transform 0.5s ease-in-out;

  @media (max-width: 960px) {
    transform: translateY(42%);
    padding: 0em 2em 1em 1em;
  }

  @media (max-width: 478px) {
    justify-content: flex-end;
    padding: 0em 2em 2em 1em;
  }
`,Fg=S.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-self: center;
  width: 100%;
  aspect-ratio: 16 / 9;
  font-size: 1.2rem;
  overflow: hidden;
  border-radius: 24px;

  &:hover ${Mi} {
    transform: translateY(0%); // Slide up
    background-color: #060606ac;
    justify-content: center;
  }

  &:hover ${Pr} {
    display: flex;
  }

  @media (max-width: 960px) {
    ${Mi} {
      transform: translateY(0%);
    }

    ${Pr} {
      display: flex;
    }

    &:hover ${Mi} {
      transform: translateY(0%);
      background-color: transparent;
    }

    &:hover ${Pr} {
      display: none;
    }
  }

  @media (max-width: 478px) {
    aspect-ratio: 4 / 5;
  }
`,Dg=S.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: var(--main-font-color);
  padding: 0em 0em 2em 0em;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    padding: 0em 0em 2em 0em;
  }
`,Ug=S.div`
  width: 90%;
  text-align: justify;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
  }
`,Bg=S.div`
  display: flex;
  justify-content: center;
  color: var(--main-font-color);
  padding: 2em 0em 2em 0em;
`,Vg=S.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
  border-radius: 24px;
`,Wg=S.p`
  font-size: 16px;
`,Hg=S.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000056;
  border-radius: 24px;
`,Qg=S.div`
  &:hover {
    color: var(--main-button-hover-color);
  }
`,Yg=S.a`
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
  color: var(--main-button-color);

  &:hover {
    color: var(--main-button-hover-color);
  }
`,Gg=S.div`
  display: flex;
  justify-self: center;
  justify-content: center;
  width: 90%;
  color: var(--main-font-color);
  padding: 3em 0em 3em 0em;
`,Kg=S.p`
  font-size: 14px;
  text-align: center;
  height: 20px;
`;function Xg(){return E.useEffect(()=>{Ag(Ec)},[]),f.jsxs(Mg,{children:[f.jsx(Bg,{children:f.jsx("h2",{children:"Emerging Tech"})}),f.jsx(Dg,{children:f.jsxs(Ug,{children:[f.jsx(Wg,{children:"My interests expand into emerging technologies such as AI, augmented reality (AR), digital signage, and projection, with a strong focus on how they can be used to create captivating, immersive experiences. Coming from a background in traditional film and photography, I deeply value the importance of responsible AI use. I view AI as a powerful tool to complement our creative work, not replace it—challenging us, expanding our creative boundaries, and increasing efficiency. Through this lens, I explore how technology can redefine visual storytelling and audience engagement without losing the human touch. I regularly share insights and industry trends on LinkedIn—join me there to see more of what I’m exploring in this space."}),f.jsx(Yg,{href:"https://www.linkedin.com/in/paul-evans-3a74605/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})]})}),f.jsx("a",{href:"https://www.linkedin.com/in/paul-evans-3a74605/",target:"_blank",rel:"noopener noreferrer",children:f.jsxs(Fg,{children:[f.jsx(Vg,{src:Ec,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A showreel of Ai generated video."}),f.jsx(Hg,{children:f.jsxs(Mi,{children:[f.jsx("h3",{children:"AI"}),f.jsx(Pr,{children:"Keeping up to date with emerging technologies such as AI and implenting them into my creative process."}),f.jsx(Qg,{children:f.jsx(Pr,{children:"LinkedIn .."})})]})})]})}),f.jsx(Gg,{children:f.jsxs(Kg,{children:["AI generated video for concepts. Disclaimer: This video was created independently and is not affiliated with or endorsed by any brands."," "]})})]})}const bg="/portfolio/assets/lipusplus_brand_film_hammarby-2024_short-ef8fdbe1.mp4",jc="/portfolio/assets/lipusplus_brand_film_hammarby-2024-c0930dc4.mp4",Zg="/portfolio/assets/lipusImg1-7cdc177f.avif",Jg="/portfolio/assets/lipusImg2-ee8a227c.avif",qg="/portfolio/assets/lipusImg3-5217c55b.avif",ev="/portfolio/assets/lipusImg4-64802f65.avif";var gp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ua=pe.createContext&&pe.createContext(gp),tv=["attr","size","title"];function nv(e,t){if(e==null)return{};var n=rv(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function rv(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function mo(){return mo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mo.apply(this,arguments)}function Pc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ho(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pc(Object(n),!0).forEach(function(r){iv(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function iv(e,t,n){return t=ov(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ov(e){var t=lv(e,"string");return typeof t=="symbol"?t:t+""}function lv(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function vp(e){return e&&e.map((t,n)=>pe.createElement(t.tag,ho({key:n},t.attr),vp(t.child)))}function qn(e){return t=>pe.createElement(av,mo({attr:ho({},e.attr)},t),vp(e.child))}function av(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=nv(e,tv),a=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),pe.createElement("svg",mo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:ho(ho({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&pe.createElement("title",null,o),e.children)};return Ua!==void 0?pe.createElement(Ua.Consumer,null,n=>t(n)):t(gp)}function sv(e){return qn({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",fill:"currentColor"},child:[]}]})(e)}const uv=Hs`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,cv=S.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  animation: ${uv} 0.5s ease-out;
`,dv=S.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--main-modal-backgroundcolor);
`,fv=S.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 2rem;
  color: var(--secondary-font-color);
  cursor: pointer;
  z-index: 100;
`,pv=({isOpen:e,onClose:t,children:n})=>e?f.jsx(cv,{onClick:t,children:f.jsxs(dv,{onClick:r=>r.stopPropagation(),children:[f.jsx(fv,{onClick:t,children:f.jsx(sv,{})}),n]})}):null,mv=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,hv=S.div`
  width: auto;
  display: none;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 20px;

  @media screen and (max-width: 478px) {
    padding-top: 0px;
  }
`,go=S.p`
  font-size: 16px;
  display: none;
`,Fi=S.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 0em 2em 0.5em 2em;
  border-radius: 24px;
  z-index: 3;

  transform: translateY(48%); /* Initially positioned off the bottom */
  transition: transform 0.5s ease-in-out;

  @media (max-width: 960px) {
    transform: translateY(44%);
  }

  @media (max-width: 478px) {
    transform: translateY(48%);
    padding: 0em 2em 0.5em 1em;
  }
`,gv=S.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  padding: 0em 2em 0.5em 1em;

  @media screen and (max-width: 960px) {
    padding: 0em 2em 1em 1em;
  }

  @media (max-width: 478px) {
    justify-content: flex-end;
    padding: 12em 2em 2em 1em;
  }
`,vv=S.section`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-left: 2%;
  margin-right: 2%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  align-self: left;
  justify-self: center;
  flex-direction: column;
  border-radius: 24px;
  cursor: pointer;

  &:hover ${Fi} {
    transform: translateY(0%); /* Slide up into view */
    background-color: #060606ac;
    justify-content: center;
  }

  &:hover ${go} {
    display: flex;
  }

  &:hover ${hv} {
    display: flex;
  }

  @media (max-width: 960px) {
    ${Fi} {
      transform: translateY(0%);
    }

    ${go} {
      display: flex;
    }

    &:hover ${Fi} {
      transform: translateY(0%);
      background-color: transparent;
    }
  }

  @media (max-width: 478px) {
    aspect-ratio: 4 / 5;
  }
`,yv=S.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: var(--main-font-color);
  padding: 0em 0em 2em 0em;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
`,xv=S.div`
  display: flex;
  justify-content: center;
  color: var(--main-font-color);
  padding: 2em 0em 2em 0em;
`,wv=S.div`
  display: flex;
  justify-self: center;
  justify-content: center;
  width: 90%;
  color: var(--main-font-color);
  padding: 0em 0em 3em 0em;
`,Sv=S.p`
  font-size: 14px;
  text-align: center;
`,kv=S.div`
  width: 20%;
  text-align: justify;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
  }
`,Cv=S.div`
  width: 20%;
  text-align: justify;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
    margin-top: 1em;
  }
`,Ev=S.div`
  width: 20%;
  text-align: justify;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
  }
`,Nl=S.p`
  font-size: 16px;
`,Ll=S.p`
  font-size: 16px;
  font-weight: 600;
`,jv=S.a`
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
  color: var(--main-button-color);

  &:hover {
    color: var(--main-button-hover-color);
  }
`,Pv=S.div`
  display: Grid;
  grid-template-areas:
    "image1 image2"
    "image3 image4";
  row-gap: 40px;
  column-gap: 4%;
  width: 100%;
  padding: 1em 0em 3em 0em;

  @media (max-width: 767px) {
    grid-template-areas:
      "image1"
      "image2"
      "image3"
      "image4";
  }
`,_v=S.div`
  grid-area: image1;
  display: flex;
  justify-content: flex-end;
  height: 100%;

  @media (max-width: 767px) {
    justify-content: center;
  }
`,$v=S.div`
  grid-area: image2;
  display: flex;
  justify-content: flex-start;
  height: 100%;

  @media (max-width: 767px) {
    justify-content: center;
  }
`,Iv=S.div`
  grid-area: image3;
  display: flex;
  justify-content: flex-end;
  height: 100%;

  @media (max-width: 767px) {
    justify-content: center;
  }
`,zv=S.div`
  grid-area: image4;
  display: flex;
  justify-content: flex-start;
  height: 100%;

  @media (max-width: 767px) {
    justify-content: center;
  }
`,ki=S.img`
  width: 80%;
  object-fit: cover;
  border-radius: 24px;
`,Rv=S.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 1;
`,Tv=S.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.32);
  z-index: 2;
`,Nv=S.div`
  &:hover {
    color: var(--main-button-hover-color);
  }
`,Lv=({scrollToEvent:e})=>{const t=E.useRef(null),n=E.useRef(null),[r,i]=E.useState(!1),[o,l]=E.useState(!1);E.useEffect(()=>{const u=()=>{l(window.innerWidth<1024)};return u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]),E.useEffect(()=>{const u=setTimeout(()=>{t.current&&t.current.play()},1e3);return()=>clearTimeout(u)},[]);const a=()=>{o?setTimeout(()=>{if(n.current){const u=n.current;u.pause(),u.currentTime=0;const h=u.play();h!==void 0&&h.then(()=>{u.requestFullscreen().catch(m=>{console.log("Error attempting to enable full-screen mode:",m)})}).catch(m=>{console.log("Failed to play the video automatically:",m)})}},0):i(!0)},s=()=>{i(!1),t.current&&t.current.play()};return E.useEffect(()=>{const u=()=>{document.fullscreenElement||n.current&&(n.current.pause(),n.current.currentTime=0)};return document.addEventListener("fullscreenchange",u),()=>{document.removeEventListener("fullscreenchange",u)}},[]),f.jsxs(mv,{children:[f.jsx(xv,{children:f.jsx("h2",{children:"UX / UI & Frontend"})}),f.jsxs(yv,{children:[f.jsxs(kv,{children:[f.jsx(Ll,{children:"LipusPlus - Positioning in Healthtech"}),f.jsx(Nl,{children:"Designed and created an enticing and informative landing page, to attract physiotherapists and elite athletes to LipusPlus webinars on the Return to Play concept."}),f.jsx(jv,{href:"https://www.lipusplus.com/casestudies/hammarby",target:"_blank",rel:"noopener noreferrer",children:"lipusplus.com"})]}),f.jsxs(Cv,{children:[f.jsx(Ll,{children:"Role"}),f.jsx(Nl,{children:"UX / UI Designer | Frontend Developer | Content Creator"})]}),f.jsxs(Ev,{children:[f.jsx(Ll,{children:"Tools & Skills"}),f.jsx(Nl,{children:"Figma | Webflow | Vimeo | JavaScript | Adobe Creative Suite | Cinematography | Storytelling"})]})]}),f.jsxs(Pv,{children:[f.jsx(_v,{children:f.jsx(ki,{src:Zg,alt:"A screen shot from LipusPlus homepage."})}),f.jsx($v,{children:f.jsx(ki,{src:Jg,alt:"A screen shot from LipusPlus homepage."})}),f.jsx(Iv,{children:f.jsx(ki,{src:ev,alt:"A screen shot from LipusPlus homepage."})}),f.jsx(zv,{children:f.jsx(ki,{src:qg,alt:"A screen shot from LipusPlus homepage."})})]}),f.jsx(wv,{children:f.jsx(Sv,{children:"Screen shots from LipusPlus.com. A Landingpage showcasing the partnership between LipusPlus and Hammarby Handball."})}),f.jsxs(vv,{onClick:a,children:[f.jsx(Rv,{ref:t,src:bg,loop:!0,muted:!0,playsInline:!0,preload:"auto",alt:"Background video"}),f.jsx(Tv,{}),f.jsx(Fi,{children:f.jsxs(gv,{children:[f.jsx("h3",{children:"LIPUSPLUS"}),f.jsx(go,{children:"Brand film highlighting LipusPlus's partnership with Hammarby Handball."}),f.jsx(Nv,{children:f.jsx(go,{children:"Watch here"})})]})}),f.jsx(pv,{isOpen:r,onClose:s,children:f.jsx("video",{controls:!0,autoPlay:!0,preload:"auto",children:f.jsx("source",{src:jc,type:"video/mp4"})})}),f.jsx("video",{ref:n,style:{display:"none"},src:jc,type:"video/mp4",controls:!0,preload:"auto"})]})]})},Ov="/portfolio/assets/ebie_insuranceStatus-27353622.mp4",Av="/portfolio/assets/ebie_application-97876537.mp4",Mv=S.div`
  display: inline-block;
  width: 100%;
`,Fv=S.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: var(--main-font-color);
  padding: 0em 0em 2em 0em;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
`,Dv=S.div`
  display: flex;
  justify-content: center;
  color: var(--main-font-color);
  padding: 2em 0em 2em 0em;
`,Uv=S.div`
  display: flex;
  justify-self: center;
  justify-content: center;
  width: 100%;
  color: var(--main-font-color);
  padding: 0em 0em 3em 0em;

  @media (max-width: 767px) {
    padding: 0em 0em 0em 0em;
    height: 20px;
  }
`,Bv=S.p`
  font-size: 14px;
  text-align: center;
`,Vv=S.div`
  width: 30%;
  text-align: justify;
  padding-right: 4em;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
    padding-right: 0em;
  }
`,Wv=S.div`
  width: 30%;
  text-align: justify;
  padding-left: 4em;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
    padding-left: 0em;
  }
`,Hv=S.div`
  width: 30%;
  text-align: justify;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
  }
`,Ol=S.p`
  font-size: 16px;
`,Al=S.p`
  font-size: 16px;
  font-weight: 600;
`,Qv=S.div`
  display: Grid;
  grid-template-areas:
    "image1 image2"
    "image3 image4";
  row-gap: 40px;
  column-gap: 4%;
  width: 100%;
  padding: 1em 0em 3em 0em;

  @media (max-width: 767px) {
    grid-template-areas:
      "image1"
      "image2"
      "image3"
      "image4";
    padding: 1em 0em 0em 0em;
  }
`,Yv=S.div`
  grid-area: image1;
  display: flex;
  justify-content: flex-end;
  height: 100%;

  @media (max-width: 767px) {
    justify-content: center;
  }
`,Gv=S.div`
  grid-area: image2;
  display: flex;
  justify-content: flex-start;
  height: 100%;

  @media (max-width: 767px) {
    justify-content: center;
  }
`,_c=S.video`
  position: absolute;
  width: 100%;
  height: 95%;
  position: relative;
  align-self: center;
  object-fit: cover;
  border-radius: 24px;

  @media (max-width: 960px) {
    height: 96%;
  }

  @media (max-width: 960px) {
    height: 100%;
  }
`,Kv=({scrollToEvent:e})=>{const t=E.useRef(null),n=E.useRef(null),[r,i]=E.useState(!1);return E.useEffect(()=>{const o=()=>{i(window.innerWidth<1024)};return o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),E.useEffect(()=>{const o=setTimeout(()=>{t.current&&t.current.play()},1e3);return()=>clearTimeout(o)},[]),E.useEffect(()=>{const o=()=>{document.fullscreenElement||n.current&&(n.current.pause(),n.current.currentTime=0)};return document.addEventListener("fullscreenchange",o),()=>{document.removeEventListener("fullscreenchange",o)}},[]),f.jsxs(Mv,{children:[f.jsx(Dv,{children:f.jsx("h2",{children:"UX / UI "})}),f.jsxs(Fv,{children:[f.jsxs(Vv,{children:[f.jsx(Al,{children:"Ebie - Group Insurance"}),f.jsx(Ol,{children:"Created and implemented a completely new and user-friendly function into Ebies design system, that simplifies applying and managing of group insurance."})]}),f.jsxs(Wv,{children:[f.jsx(Al,{children:"Role"}),f.jsx(Ol,{children:"UX & UI Designer"})]}),f.jsxs(Hv,{children:[f.jsx(Al,{children:"Tools & Skills"}),f.jsx(Ol,{children:"Figma | Useberry | Google forms"})]})]}),f.jsxs(Qv,{children:[f.jsx(Yv,{children:f.jsx(_c,{src:Ov,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A showreel showing clips from different productions."})}),f.jsx(Gv,{children:f.jsx(_c,{src:Av,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A showreel showing clips from different productions."})})]}),f.jsx(Uv,{children:f.jsx(Bv,{children:"Prototypes for Ebie's Group Insurance. "})})]})},Xv=S.section`
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
`,bv=S.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  background-color: var(--main-hero-backgroundcolor);
  color: var(--main-font-color);

  @media screen and (max-width: 960px) {
    justify-self: center;
  }
`,Zv=S.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
    justify-content: center;
    text-align: center;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

`,Jv=S.p`
  margin-top: 3em;
  font-family: "Gravitas One", serif;
  font-weight: 500;
  color: var(--main-button-color);
  cursor: pointer;

  &:hover {
    color: var(--main-button-hover-color);
  }
`,qv=({cinemaCardRef:e})=>{const t=()=>{e.current&&e.current.scrollIntoView({behavior:"smooth"})};return f.jsx(Xv,{children:f.jsx(bv,{children:f.jsxs(Zv,{children:[f.jsx("h2",{children:"What I Bring to the Table "}),f.jsx("p",{children:"Whether you’re looking to generate leads, raise conversion rates, or increase brand awareness and loyalty, my diverse expertise offers efficiency, creativity, and a friendly, collaborative attitude. I excel in ideation, content production, UX, UI, and implementation. My process begins with brainstorming and extends all the way through to the completion of immersive experiences."}),f.jsx(Jv,{onClick:t,children:"See my work below"})]})})})},ey=S.section`
  max-width: 94vw;
  min-width: 94vw;
  display: flex;
  flex-direction: column;
  align-self: center;
  row-gap: 28px;
  align-content: center;
  padding-top: 140px;

  @media screen and (max-width: 960px) {
    padding-top: 90px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 70px;
  }
`,wn=S.div`
  width: 95%;
  height: 80px;
  align-self: center;
  margin: 0em 0em 2em 0em;
  border-bottom: 1px solid #1e1e1ee6;
`,ty=()=>{const e=E.useRef(null);return f.jsxs(ey,{children:[f.jsx(Og,{}),f.jsx(wn,{}),f.jsx(qv,{cinemaCardRef:e}),f.jsx(wn,{}),f.jsx(gg,{ref:e}),f.jsx(wn,{}),f.jsx(Lv,{}),f.jsx(wn,{}),f.jsx(Xg,{}),f.jsx(wn,{}),f.jsx(Kv,{}),f.jsx(wn,{})]})},ny="/portfolio/assets/meAbout-b0dd0af4.avif",ry=Hs`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,iy=S.section`
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 2%;
  grid-template-areas: "Image Context";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`,oy=S.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding-left: 4%;
  padding-right: 4%;
  background-color: var(--main-hero-backgroundcolor);
  color: var(--main-font-color);

  @media screen and (max-width: 960px) {
    justify-self: center;
  }
`,ly=S.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (max-width: 960px) {
    justify-self: center;
    justify-content: center;
    text-align: center;
  }
`,ay=S.p`
  text-align: justify;
`,sy=S.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 24px;
`,uy=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;

  ${({isLoaded:e})=>e&&qo`
      animation: ${ry} 1s ease-out forwards;
    `}
`,cy=()=>{const[e,t]=E.useState(!1),n=E.useRef(null);return E.useEffect(()=>{const r=()=>{t(!0)},i=n.current;if(i)if(i.complete)r();else return i.addEventListener("load",r),()=>{i.removeEventListener("load",r)}},[]),f.jsxs(iy,{children:[f.jsx(oy,{children:f.jsxs(ly,{children:[f.jsx("h2",{children:"About me "}),f.jsx(ay,{children:"I bring a unique combination of creative and technical expertise. I am competent with design tools such as Figma and Adobe Creative Suite as well as Useberry for testing. When it comes to frontend I am skilled in html, css, javascript and React. My interests also extend into AI, particularly image and video generation, and AR. Merging traditional filmmaking techniques with the latest technologies. I have a calm and methodical approach to life, which enables me to navigate challenges with ease. I enjoy working with people from diverse backgrounds and ages. Something thats engerises ans inspires immensely. My strong willpower and determination helps me stay focused on the goals, even during difficult times."})]})}),f.jsx(sy,{children:f.jsx(uy,{ref:n,src:ny,alt:"Paul Evans watching the ocean",isLoaded:e})})]})},dy="/portfolio/assets/camper-588e3c53.avif",fy=Hs`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,py=S.section`
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 2%;
  grid-template-areas: "Context Image";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`,my=S.div`
width: 90%;
display: flex;
  flex-direction: column;
  padding-left: 4%;
  padding-right: 4%;
  background-color: var(--main-hero-backgroundcolor);
  color: var(--main-font-color);

  @media screen and (max-width: 960px) {
    justify-self: center;
  }
`,hy=S.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (max-width: 960px) {
    justify-self: center;
    justify-content: center;
    text-align: center;
  }
`,gy=S.p`
  text-align: justify;
`,vy=S.p`
  text-align: justify;
  margin-top: 2em;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
`,yy=S.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 24px;
`,xy=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  visibility: hidden;
  border-radius: 24px;

  ${({isInView:e})=>e&&qo`
      visibility: visible;
      animation: ${fy} 1s ease-out forwards;
    `}
`,wy=()=>{const e=E.useRef(null),[t,n]=E.useState(!1);return E.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),f.jsxs(py,{children:[f.jsx(my,{children:f.jsxs(hy,{children:[f.jsx("h2",{children:"For fun"}),f.jsx(gy,{children:"Surfing and traveling are my two biggest passions. When I'm not paddling out into the sea I like to work out at the gym or swim in the lake. I also cherish the time I spend with my family and friends, cooking and watching movies and TV shows."}),f.jsx(vy,{children:'"Work like a captain, play like a pirate" - Christina Lauren'})]})}),f.jsx(yy,{children:f.jsx(xy,{ref:e,src:dy,alt:"A surfboard propped up against a mobile home",isInView:t})})]})},Sy=S.section`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-left: 2%;
  padding-right: 2%;
  align-content: center;
  margin-top: 180px;
  margin-bottom: 30px;

  @media screen and (max-width: 960px) {
    margin-top: 120px;
  }
`,ky=()=>(E.useRef(null),f.jsxs(Sy,{children:[f.jsx(cy,{}),f.jsx(wy,{})]}));function Cy(e){return qn({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Ey(e){return qn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM21.3 229.2H21c.1-.1.2-.3.3-.4zM97 319.8H64V192h33zm113.2 0h-28.7v-86.4l-11.6 86.4h-20.6l-12.2-84.5v84.5h-29V192h42.8c3.3 19.8 6 39.9 8.7 59.9l7.6-59.9h43zm11.4 0V192h24.6c17.6 0 44.7-1.6 49 20.9 1.7 7.6 1.4 16.3 1.4 24.4 0 88.5 11.1 82.6-75 82.5zm160.9-29.2c0 15.7-2.4 30.9-22.2 30.9-9 0-15.2-3-20.9-9.8l-1.9 8.1h-29.8V192h31.7v41.7c6-6.5 12-9.2 20.9-9.2 21.4 0 22.2 12.8 22.2 30.1zM265 229.9c0-9.7 1.6-16-10.3-16v83.7c12.2.3 10.3-8.7 10.3-18.4zm85.5 26.1c0-5.4 1.1-12.7-6.2-12.7-6 0-4.9 8.9-4.9 12.7 0 .6-1.1 39.6 1.1 44.7.8 1.6 2.2 2.4 3.8 2.4 7.8 0 6.2-9 6.2-14.4z"},child:[]}]})(e)}function jy(e){return qn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function Py(e){return qn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function _y(e){return qn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"},child:[]}]})(e)}S.div`
  overflowy: scroll;
  height: 2500px;
`;const $y=S.div`
  position: fixed;
  width: 100%;
  left: 94%;
  bottom: 40px;
  height: 50px;
  font-size: 4rem;
  z-index: 200;
  cursor: pointer;
  color: var(--main-button-color);

  @media screen and (max-width: 1225px) {
    left: 92%;
    } 
  
  @media screen and (max-width: 960px) {
    left: 90%;
  }

  @media screen and (max-width: 960px) {
    left: 85%;
  }

  
  @media screen and (max-width: 478px) {
    font-size: 3rem;
    left: 80%;
  }
`,Iy=S.div`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1); 
    color: var(--main-button-hover-color); 
  }

  @media (max-width: 960px) {
    &:hover {
      transform: none; 
      color: inherit; 
    }
  }
`,zy=()=>{const[e,t]=E.useState(!1),n=()=>{const i=document.documentElement.scrollTop;i>1200?t(!0):i<=1200&&t(!1)},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return window.addEventListener("scroll",n),f.jsx($y,{children:f.jsx(Iy,{children:f.jsx(_y,{onClick:r,style:{display:e?"inline":"none",borderRadius:"50%"}})})})},Ry="/portfolio/assets/Spline_logo-dc9eec6b.mp4",Ty=[{id:1,href:"https://github.com/PaulEvans78",icon:f.jsx(Cy,{}),des:"Github",target:"_blank",rel:"noopener noreferrer"},{id:2,href:"https://www.linkedin.com/in/paul-evans-3a74605/",icon:f.jsx(Py,{}),des:"LinkedIn",target:"_blank",rel:"noopener noreferrer"},{id:3,href:"https://www.instagram.com/paulevans_official/",icon:f.jsx(jy,{}),des:"Instagram",target:"_blank",rel:"noopener noreferrer"},{id:4,href:"https://www.imdb.com/name/nm3171341/?ref_=ttfc_fc_cr",icon:f.jsx(Ey,{}),des:"Imdb",target:"_blank",rel:"noopener noreferrer"}],Ny=S.footer`
  background-color: var(--main-hero-backgroundcolor);
  max-width: 100vw;
  min-width: 100vw;
  z-index: 98;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  padding-bottom: 6em;

  line-height: 24px;
  color: var(--main-font-color);

  @media screen and (max-width: 960px) {
    background-image: none;

    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 4em;
  }
`,Ly=S.div`
  display: flex;
  flex-direction: column;
  padding-top: 4em;
  padding-right: 2em;
  text-align: right;

  @media screen and (max-width: 960px) {
    padding-top: 2em;
    padding-right: 0em;
    text-align: center;
  }

  @media screen and (max-width: 767px) {
    text-align: center;
    margin-bottom: 3em;
  }
`,Oy=S.p`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  text-decoration: underline;
  color: var(--main-button-color);
  margin-bottom: -0.5em;

  &:hover {
    color: var(--main-button-hover-color);
  }

  @media screen and (max-width: 960px) {
    &:hover {
      color: inherit;
    }
  }

  @media screen and (max-width: 767px) {
    margin-left: 0em;
  }
`,Ay=S.p`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  text-decoration: underline;
  color: var(--main-button-color);

  &:hover {
    color: var(--main-button-hover-color);
  }

  @media screen and (max-width: 960px) {
    &:hover {
      color: inherit;
    }
  }

  @media screen and (max-width: 767px) {
    margin-left: 0em;
  }
`,My=S.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  justify-items: center;
  padding-top: 4em;

  @media screen and (max-width: 960px) {
    padding-top: 2em;
    margin-left: 0em;
  }

  @media screen and (max-width: 478px) {
    flex-direction: column;
    margin-right: 0em;
  }
`,Fy=S.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 1em 0em 2em;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: var(--main-button-hover-color);
  }

  @media screen and (max-width: 960px) {
    &:hover {
      color: inherit;
    }
  }

  @media screen and (max-width: 767px) {
    margin: 0em 2em 0em 2em;
  }
`,Dy=S.p`
  display: flex;
  flex-direction: column;
  align-content: center;
  font-size: 12px;
  line-height: 18px;
  color: var(--main-font-color);
  text-align: center;
  margin-top: 0.5em;

  &:hover {
    color: var(--main-button-hover-color);
  }

  @media screen and (max-width: 960px) {
    &:hover {
      color: inherit;
    }
  }
`,Uy=S.div`
  display: flex;
  padding-left: 2em;

  @media screen and (max-width: 960px) {
    width: 100%;
    justify-content: center;

    margin-bottom: 2em;
    padding-left: 0em;
  }

  @media screen and (max-width: 767px) {
    padding-left: 0;
    margin-bottom: 20px;
  }
`,By=S.video`
  text-align: center;
  justify-self: center;
  width: 120px;
  margin-top: 4em;

  @media screen and (max-width: 960px) {
    width: 120px;
  }
`,$c=S.p`
  font-size: 16px;
  font-weight: 500;
  margin: 2px;

  @media screen and (max-width: 960px) {
    margin: 8px;
  }
`,Vy=pe.forwardRef((e,t)=>f.jsxs(Ny,{ref:t,children:[f.jsx(Uy,{children:f.jsx(Ks,{to:"/",children:f.jsx(By,{src:Ry,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A revolving logo showing the initals PE and a cartton version of Paul Evans.."})})}),f.jsx(Wy,{}),f.jsxs(Ly,{children:[f.jsx($c,{children:"Copyright 2024."}),f.jsx($c,{children:"Paul Evans."}),f.jsx(Oy,{children:f.jsx("a",{href:"mailto:paul@paulevans.se",children:"paul@paulevans.se"})}),f.jsx(Ay,{children:f.jsx("a",{href:"tel:+46739908858",children:"+46739908858"})})]})]})),Wy=()=>f.jsx(My,{children:f.jsx(Ua.Provider,{value:{size:"2em"},children:Ty.map(e=>f.jsxs(Fy,{href:e.href,target:e.target,rel:e.rel,children:[e.icon,f.jsx(Dy,{children:e.des})]},e.id))})}),Hy=()=>{const{pathname:e}=Jn();return E.useEffect(()=>{window.scrollTo(0,0)},[e]),null},Qy=S.div`
  min-height: 100%;
  max-width: 100vw;
`,Yy=S.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: space-evenly;
`,Gy=()=>{const e=E.useRef(null);return f.jsxs(W1,{children:[f.jsx(Hy,{}),f.jsxs(Qy,{children:[f.jsx(rg,{footerRef:e}),f.jsxs(Yy,{children:[f.jsxs(A1,{children:[f.jsx(Ma,{path:"/",element:f.jsx(ty,{})}),f.jsx(Ma,{path:"/about",element:f.jsx(ky,{})})]}),f.jsx(Vy,{ref:e})]}),f.jsx(zy,{})]})]})};Ml.createRoot(document.getElementById("root")).render(f.jsx(pe.StrictMode,{children:f.jsx(Gy,{})}));
