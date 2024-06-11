function sp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function pc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hc={exports:{}},fo={},mc={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr=Symbol.for("react.element"),up=Symbol.for("react.portal"),cp=Symbol.for("react.fragment"),dp=Symbol.for("react.strict_mode"),fp=Symbol.for("react.profiler"),pp=Symbol.for("react.provider"),hp=Symbol.for("react.context"),mp=Symbol.for("react.forward_ref"),Ap=Symbol.for("react.suspense"),gp=Symbol.for("react.memo"),vp=Symbol.for("react.lazy"),Ms=Symbol.iterator;function yp(e){return e===null||typeof e!="object"?null:(e=Ms&&e[Ms]||e["@@iterator"],typeof e=="function"?e:null)}var Ac={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gc=Object.assign,vc={};function bn(e,t,n){this.props=e,this.context=t,this.refs=vc,this.updater=n||Ac}bn.prototype.isReactComponent={};bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yc(){}yc.prototype=bn.prototype;function Na(e,t,n){this.props=e,this.context=t,this.refs=vc,this.updater=n||Ac}var Oa=Na.prototype=new yc;Oa.constructor=Na;gc(Oa,bn.prototype);Oa.isPureReactComponent=!0;var Fs=Array.isArray,xc=Object.prototype.hasOwnProperty,Ra={current:null},wc={key:!0,ref:!0,__self:!0,__source:!0};function Sc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)xc.call(t,r)&&!wc.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xr,type:e,key:o,ref:l,props:i,_owner:Ra.current}}function xp(e,t){return{$$typeof:Xr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function za(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xr}function wp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ds=/\/+/g;function Ko(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wp(""+e.key):t.toString(36)}function wi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Xr:case up:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ko(l,0):r,Fs(i)?(n="",e!=null&&(n=e.replace(Ds,"$&/")+"/"),wi(i,t,n,"",function(u){return u})):i!=null&&(za(i)&&(i=xp(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ds,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Fs(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+Ko(o,a);l+=wi(o,t,n,s,i)}else if(s=yp(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+Ko(o,a++),l+=wi(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ni(e,t,n){if(e==null)return e;var r=[],i=0;return wi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Sp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},Si={transition:null},kp={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:Si,ReactCurrentOwner:Ra};function kc(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:ni,forEach:function(e,t,n){ni(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ni(e,function(){t++}),t},toArray:function(e){return ni(e,function(t){return t})||[]},only:function(e){if(!za(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=bn;U.Fragment=cp;U.Profiler=fp;U.PureComponent=Na;U.StrictMode=dp;U.Suspense=Ap;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kp;U.act=kc;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Ra.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)xc.call(t,s)&&!wc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Xr,type:e.type,key:i,ref:o,props:r,_owner:l}};U.createContext=function(e){return e={$$typeof:hp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pp,_context:e},e.Consumer=e};U.createElement=Sc;U.createFactory=function(e){var t=Sc.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:mp,render:e}};U.isValidElement=za;U.lazy=function(e){return{$$typeof:vp,_payload:{_status:-1,_result:e},_init:Sp}};U.memo=function(e,t){return{$$typeof:gp,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Si.transition;Si.transition={};try{e()}finally{Si.transition=t}};U.unstable_act=kc;U.useCallback=function(e,t){return De.current.useCallback(e,t)};U.useContext=function(e){return De.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return De.current.useDeferredValue(e)};U.useEffect=function(e,t){return De.current.useEffect(e,t)};U.useId=function(){return De.current.useId()};U.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return De.current.useMemo(e,t)};U.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};U.useRef=function(e){return De.current.useRef(e)};U.useState=function(e){return De.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return De.current.useTransition()};U.version="18.3.1";mc.exports=U;var C=mc.exports;const ge=pc(C),Cp=sp({__proto__:null,default:ge},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep=C,jp=Symbol.for("react.element"),Pp=Symbol.for("react.fragment"),Ip=Object.prototype.hasOwnProperty,Np=Ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Op={key:!0,ref:!0,__self:!0,__source:!0};function Cc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Ip.call(t,r)&&!Op.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:jp,type:e,key:o,ref:l,props:i,_owner:Np.current}}fo.Fragment=Pp;fo.jsx=Cc;fo.jsxs=Cc;hc.exports=fo;var d=hc.exports,jl={},Ec={exports:{}},be={},jc={exports:{}},Pc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,M){var D=P.length;P.push(M);e:for(;0<D;){var H=D-1>>>1,I=P[H];if(0<i(I,M))P[H]=M,P[D]=I,D=H;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var M=P[0],D=P.pop();if(D!==M){P[0]=D;e:for(var H=0,I=P.length,O=I>>>1;H<O;){var T=2*(H+1)-1,W=P[T],v=T+1,_=P[v];if(0>i(W,D))v<I&&0>i(_,W)?(P[H]=_,P[v]=D,H=v):(P[H]=W,P[T]=D,H=T);else if(v<I&&0>i(_,D))P[H]=_,P[v]=D,H=v;else break e}}return M}function i(P,M){var D=P.sortIndex-M.sortIndex;return D!==0?D:P.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],m=1,h=null,A=3,S=!1,w=!1,g=!1,k=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=P)r(u),M.sortIndex=M.expirationTime,t(s,M);else break;M=n(u)}}function y(P){if(g=!1,p(P),!w)if(n(s)!==null)w=!0,qe(E);else{var M=n(u);M!==null&&xe(y,M.startTime-P)}}function E(P,M){w=!1,g&&(g=!1,f(B),B=-1),S=!0;var D=A;try{for(p(M),h=n(s);h!==null&&(!(h.expirationTime>M)||P&&!fe());){var H=h.callback;if(typeof H=="function"){h.callback=null,A=h.priorityLevel;var I=H(h.expirationTime<=M);M=e.unstable_now(),typeof I=="function"?h.callback=I:h===n(s)&&r(s),p(M)}else r(s);h=n(s)}if(h!==null)var O=!0;else{var T=n(u);T!==null&&xe(y,T.startTime-M),O=!1}return O}finally{h=null,A=D,S=!1}}var R=!1,z=null,B=-1,$=5,F=-1;function fe(){return!(e.unstable_now()-F<$)}function ue(){if(z!==null){var P=e.unstable_now();F=P;var M=!0;try{M=z(!0,P)}finally{M?me():(R=!1,z=null)}}else R=!1}var me;if(typeof c=="function")me=function(){c(ue)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,ye=Le.port2;Le.port1.onmessage=ue,me=function(){ye.postMessage(null)}}else me=function(){k(ue,0)};function qe(P){z=P,R||(R=!0,me())}function xe(P,M){B=k(function(){P(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,qe(E))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return A},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(A){case 1:case 2:case 3:var M=3;break;default:M=A}var D=A;A=M;try{return P()}finally{A=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,M){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var D=A;A=P;try{return M()}finally{A=D}},e.unstable_scheduleCallback=function(P,M,D){var H=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?H+D:H):D=H,P){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=D+I,P={id:m++,callback:M,priorityLevel:P,startTime:D,expirationTime:I,sortIndex:-1},D>H?(P.sortIndex=D,t(u,P),n(s)===null&&P===n(u)&&(g?(f(B),B=-1):g=!0,xe(y,D-H))):(P.sortIndex=I,t(s,P),w||S||(w=!0,qe(E))),P},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(P){var M=A;return function(){var D=A;A=M;try{return P.apply(this,arguments)}finally{A=D}}}})(Pc);jc.exports=Pc;var Rp=jc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp=C,Ze=Rp;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ic=new Set,Ir={};function mn(e,t){Gn(e,t),Gn(e+"Capture",t)}function Gn(e,t){for(Ir[e]=t,e=0;e<t.length;e++)Ic.add(t[e])}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pl=Object.prototype.hasOwnProperty,Bp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ws={},Vs={};function Tp(e){return Pl.call(Vs,e)?!0:Pl.call(Ws,e)?!1:Bp.test(e)?Vs[e]=!0:(Ws[e]=!0,!1)}function Lp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mp(e,t,n,r){if(t===null||typeof t>"u"||Lp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ba=/[\-:]([a-z])/g;function Ta(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ba,Ta);Ne[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ba,Ta);Ne[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ba,Ta);Ne[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function La(e,t,n,r){var i=Ne.hasOwnProperty(t)?Ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Mp(t,n,i,r)&&(n=null),r||i===null?Tp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ot=zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ri=Symbol.for("react.element"),Sn=Symbol.for("react.portal"),kn=Symbol.for("react.fragment"),Ma=Symbol.for("react.strict_mode"),Il=Symbol.for("react.profiler"),Nc=Symbol.for("react.provider"),Oc=Symbol.for("react.context"),Fa=Symbol.for("react.forward_ref"),Nl=Symbol.for("react.suspense"),Ol=Symbol.for("react.suspense_list"),Da=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),Rc=Symbol.for("react.offscreen"),Gs=Symbol.iterator;function or(e){return e===null||typeof e!="object"?null:(e=Gs&&e[Gs]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,Jo;function hr(e){if(Jo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jo=t&&t[1]||""}return`
`+Jo+e}var qo=!1;function el(e,t){if(!e||qo)return"";qo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{qo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?hr(e):""}function Fp(e){switch(e.tag){case 5:return hr(e.type);case 16:return hr("Lazy");case 13:return hr("Suspense");case 19:return hr("SuspenseList");case 0:case 2:case 15:return e=el(e.type,!1),e;case 11:return e=el(e.type.render,!1),e;case 1:return e=el(e.type,!0),e;default:return""}}function Rl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kn:return"Fragment";case Sn:return"Portal";case Il:return"Profiler";case Ma:return"StrictMode";case Nl:return"Suspense";case Ol:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Oc:return(e.displayName||"Context")+".Consumer";case Nc:return(e._context.displayName||"Context")+".Provider";case Fa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Da:return t=e.displayName||null,t!==null?t:Rl(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return Rl(e(t))}catch{}}return null}function Dp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rl(t);case 8:return t===Ma?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wp(e){var t=zc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ii(e){e._valueTracker||(e._valueTracker=Wp(e))}function Bc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=zc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zl(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Us(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tc(e,t){t=t.checked,t!=null&&La(e,"checked",t,!1)}function Bl(e,t){Tc(e,t);var n=Kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Tl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Tl(e,t.type,Kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $s(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Tl(e,t,n){(t!=="number"||Li(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ll(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _s(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(mr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kt(n)}}function Lc(e,t){var n=Kt(t.value),r=Kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ys(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ml(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oi,Fc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vp=["Webkit","ms","Moz","O"];Object.keys(vr).forEach(function(e){Vp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vr[t]=vr[e]})});function Dc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vr.hasOwnProperty(e)&&vr[e]?(""+t).trim():t+"px"}function Wc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Dc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Gp=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fl(e,t){if(t){if(Gp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Dl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wl=null;function Wa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vl=null,Mn=null,Fn=null;function Qs(e){if(e=Kr(e)){if(typeof Vl!="function")throw Error(j(280));var t=e.stateNode;t&&(t=go(t),Vl(e.stateNode,e.type,t))}}function Vc(e){Mn?Fn?Fn.push(e):Fn=[e]:Mn=e}function Gc(){if(Mn){var e=Mn,t=Fn;if(Fn=Mn=null,Qs(e),t)for(e=0;e<t.length;e++)Qs(t[e])}}function Uc(e,t){return e(t)}function $c(){}var tl=!1;function _c(e,t,n){if(tl)return e(t,n);tl=!0;try{return Uc(e,t,n)}finally{tl=!1,(Mn!==null||Fn!==null)&&($c(),Gc())}}function Or(e,t){var n=e.stateNode;if(n===null)return null;var r=go(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Gl=!1;if(jt)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){Gl=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{Gl=!1}function Up(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var yr=!1,Mi=null,Fi=!1,Ul=null,$p={onError:function(e){yr=!0,Mi=e}};function _p(e,t,n,r,i,o,l,a,s){yr=!1,Mi=null,Up.apply($p,arguments)}function Yp(e,t,n,r,i,o,l,a,s){if(_p.apply(this,arguments),yr){if(yr){var u=Mi;yr=!1,Mi=null}else throw Error(j(198));Fi||(Fi=!0,Ul=u)}}function An(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hs(e){if(An(e)!==e)throw Error(j(188))}function Qp(e){var t=e.alternate;if(!t){if(t=An(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Hs(i),e;if(o===r)return Hs(i),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Qc(e){return e=Qp(e),e!==null?Hc(e):null}function Hc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hc(e);if(t!==null)return t;e=e.sibling}return null}var Xc=Ze.unstable_scheduleCallback,Xs=Ze.unstable_cancelCallback,Hp=Ze.unstable_shouldYield,Xp=Ze.unstable_requestPaint,de=Ze.unstable_now,Zp=Ze.unstable_getCurrentPriorityLevel,Va=Ze.unstable_ImmediatePriority,Zc=Ze.unstable_UserBlockingPriority,Di=Ze.unstable_NormalPriority,bp=Ze.unstable_LowPriority,bc=Ze.unstable_IdlePriority,po=null,vt=null;function Kp(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(po,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:eh,Jp=Math.log,qp=Math.LN2;function eh(e){return e>>>=0,e===0?32:31-(Jp(e)/qp|0)|0}var li=64,ai=4194304;function Ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Ar(a):(o&=l,o!==0&&(r=Ar(o)))}else l=n&~i,l!==0?r=Ar(l):o!==0&&(r=Ar(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),i=1<<n,r|=e[n],t&=~i;return r}function th(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-ft(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=th(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function $l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Kc(){var e=li;return li<<=1,!(li&4194240)&&(li=64),e}function nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function rh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ft(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ga(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var K=0;function Jc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qc,Ua,ed,td,nd,_l=!1,si=[],Gt=null,Ut=null,$t=null,Rr=new Map,zr=new Map,Mt=[],ih="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zs(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":Rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zr.delete(t.pointerId)}}function ar(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Kr(t),t!==null&&Ua(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function oh(e,t,n,r,i){switch(t){case"focusin":return Gt=ar(Gt,e,t,n,r,i),!0;case"dragenter":return Ut=ar(Ut,e,t,n,r,i),!0;case"mouseover":return $t=ar($t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Rr.set(o,ar(Rr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,zr.set(o,ar(zr.get(o)||null,e,t,n,r,i)),!0}return!1}function rd(e){var t=on(e.target);if(t!==null){var n=An(t);if(n!==null){if(t=n.tag,t===13){if(t=Yc(n),t!==null){e.blockedOn=t,nd(e.priority,function(){ed(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ki(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Wl=r,n.target.dispatchEvent(r),Wl=null}else return t=Kr(n),t!==null&&Ua(t),e.blockedOn=n,!1;t.shift()}return!0}function bs(e,t,n){ki(e)&&n.delete(t)}function lh(){_l=!1,Gt!==null&&ki(Gt)&&(Gt=null),Ut!==null&&ki(Ut)&&(Ut=null),$t!==null&&ki($t)&&($t=null),Rr.forEach(bs),zr.forEach(bs)}function sr(e,t){e.blockedOn===t&&(e.blockedOn=null,_l||(_l=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,lh)))}function Br(e){function t(i){return sr(i,e)}if(0<si.length){sr(si[0],e);for(var n=1;n<si.length;n++){var r=si[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&sr(Gt,e),Ut!==null&&sr(Ut,e),$t!==null&&sr($t,e),Rr.forEach(t),zr.forEach(t),n=0;n<Mt.length;n++)r=Mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)rd(n),n.blockedOn===null&&Mt.shift()}var Dn=Ot.ReactCurrentBatchConfig,Vi=!0;function ah(e,t,n,r){var i=K,o=Dn.transition;Dn.transition=null;try{K=1,$a(e,t,n,r)}finally{K=i,Dn.transition=o}}function sh(e,t,n,r){var i=K,o=Dn.transition;Dn.transition=null;try{K=4,$a(e,t,n,r)}finally{K=i,Dn.transition=o}}function $a(e,t,n,r){if(Vi){var i=Yl(e,t,n,r);if(i===null)fl(e,t,r,Gi,n),Zs(e,r);else if(oh(i,e,t,n,r))r.stopPropagation();else if(Zs(e,r),t&4&&-1<ih.indexOf(e)){for(;i!==null;){var o=Kr(i);if(o!==null&&qc(o),o=Yl(e,t,n,r),o===null&&fl(e,t,r,Gi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else fl(e,t,r,null,n)}}var Gi=null;function Yl(e,t,n,r){if(Gi=null,e=Wa(r),e=on(e),e!==null)if(t=An(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gi=e,null}function id(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zp()){case Va:return 1;case Zc:return 4;case Di:case bp:return 16;case bc:return 536870912;default:return 16}default:return 16}}var Dt=null,_a=null,Ci=null;function od(){if(Ci)return Ci;var e,t=_a,n=t.length,r,i="value"in Dt?Dt.value:Dt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Ci=i.slice(e,1<r?1-r:void 0)}function Ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ui(){return!0}function Ks(){return!1}function Ke(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ui:Ks,this.isPropagationStopped=Ks,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ya=Ke(Kn),br=le({},Kn,{view:0,detail:0}),uh=Ke(br),rl,il,ur,ho=le({},br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ur&&(ur&&e.type==="mousemove"?(rl=e.screenX-ur.screenX,il=e.screenY-ur.screenY):il=rl=0,ur=e),rl)},movementY:function(e){return"movementY"in e?e.movementY:il}}),Js=Ke(ho),ch=le({},ho,{dataTransfer:0}),dh=Ke(ch),fh=le({},br,{relatedTarget:0}),ol=Ke(fh),ph=le({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),hh=Ke(ph),mh=le({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ah=Ke(mh),gh=le({},Kn,{data:0}),qs=Ke(gh),vh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xh[e])?!!t[e]:!1}function Qa(){return wh}var Sh=le({},br,{key:function(e){if(e.key){var t=vh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qa,charCode:function(e){return e.type==="keypress"?Ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kh=Ke(Sh),Ch=le({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eu=Ke(Ch),Eh=le({},br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qa}),jh=Ke(Eh),Ph=le({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ih=Ke(Ph),Nh=le({},ho,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Oh=Ke(Nh),Rh=[9,13,27,32],Ha=jt&&"CompositionEvent"in window,xr=null;jt&&"documentMode"in document&&(xr=document.documentMode);var zh=jt&&"TextEvent"in window&&!xr,ld=jt&&(!Ha||xr&&8<xr&&11>=xr),tu=String.fromCharCode(32),nu=!1;function ad(e,t){switch(e){case"keyup":return Rh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function Bh(e,t){switch(e){case"compositionend":return sd(t);case"keypress":return t.which!==32?null:(nu=!0,tu);case"textInput":return e=t.data,e===tu&&nu?null:e;default:return null}}function Th(e,t){if(Cn)return e==="compositionend"||!Ha&&ad(e,t)?(e=od(),Ci=_a=Dt=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ld&&t.locale!=="ko"?null:t.data;default:return null}}var Lh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lh[e.type]:t==="textarea"}function ud(e,t,n,r){Vc(r),t=Ui(t,"onChange"),0<t.length&&(n=new Ya("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wr=null,Tr=null;function Mh(e){xd(e,0)}function mo(e){var t=Pn(e);if(Bc(t))return e}function Fh(e,t){if(e==="change")return t}var cd=!1;if(jt){var ll;if(jt){var al="oninput"in document;if(!al){var iu=document.createElement("div");iu.setAttribute("oninput","return;"),al=typeof iu.oninput=="function"}ll=al}else ll=!1;cd=ll&&(!document.documentMode||9<document.documentMode)}function ou(){wr&&(wr.detachEvent("onpropertychange",dd),Tr=wr=null)}function dd(e){if(e.propertyName==="value"&&mo(Tr)){var t=[];ud(t,Tr,e,Wa(e)),_c(Mh,t)}}function Dh(e,t,n){e==="focusin"?(ou(),wr=t,Tr=n,wr.attachEvent("onpropertychange",dd)):e==="focusout"&&ou()}function Wh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mo(Tr)}function Vh(e,t){if(e==="click")return mo(t)}function Gh(e,t){if(e==="input"||e==="change")return mo(t)}function Uh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Uh;function Lr(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Pl.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function au(e,t){var n=lu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lu(n)}}function fd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pd(){for(var e=window,t=Li();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Li(e.document)}return t}function Xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $h(e){var t=pd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fd(n.ownerDocument.documentElement,n)){if(r!==null&&Xa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=au(n,o);var l=au(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _h=jt&&"documentMode"in document&&11>=document.documentMode,En=null,Ql=null,Sr=null,Hl=!1;function su(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hl||En==null||En!==Li(r)||(r=En,"selectionStart"in r&&Xa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&Lr(Sr,r)||(Sr=r,r=Ui(Ql,"onSelect"),0<r.length&&(t=new Ya("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jn={animationend:ci("Animation","AnimationEnd"),animationiteration:ci("Animation","AnimationIteration"),animationstart:ci("Animation","AnimationStart"),transitionend:ci("Transition","TransitionEnd")},sl={},hd={};jt&&(hd=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function Ao(e){if(sl[e])return sl[e];if(!jn[e])return e;var t=jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hd)return sl[e]=t[n];return e}var md=Ao("animationend"),Ad=Ao("animationiteration"),gd=Ao("animationstart"),vd=Ao("transitionend"),yd=new Map,uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(e,t){yd.set(e,t),mn(t,[e])}for(var ul=0;ul<uu.length;ul++){var cl=uu[ul],Yh=cl.toLowerCase(),Qh=cl[0].toUpperCase()+cl.slice(1);qt(Yh,"on"+Qh)}qt(md,"onAnimationEnd");qt(Ad,"onAnimationIteration");qt(gd,"onAnimationStart");qt("dblclick","onDoubleClick");qt("focusin","onFocus");qt("focusout","onBlur");qt(vd,"onTransitionEnd");Gn("onMouseEnter",["mouseout","mouseover"]);Gn("onMouseLeave",["mouseout","mouseover"]);Gn("onPointerEnter",["pointerout","pointerover"]);Gn("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hh=new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));function cu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yp(r,t,void 0,e),e.currentTarget=null}function xd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;cu(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;cu(i,a,u),o=s}}}if(Fi)throw e=Ul,Fi=!1,Ul=null,e}function te(e,t){var n=t[Jl];n===void 0&&(n=t[Jl]=new Set);var r=e+"__bubble";n.has(r)||(wd(t,e,2,!1),n.add(r))}function dl(e,t,n){var r=0;t&&(r|=4),wd(n,e,r,t)}var di="_reactListening"+Math.random().toString(36).slice(2);function Mr(e){if(!e[di]){e[di]=!0,Ic.forEach(function(n){n!=="selectionchange"&&(Hh.has(n)||dl(n,!1,e),dl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[di]||(t[di]=!0,dl("selectionchange",!1,t))}}function wd(e,t,n,r){switch(id(t)){case 1:var i=ah;break;case 4:i=sh;break;default:i=$a}n=i.bind(null,t,n,e),i=void 0,!Gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function fl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=on(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}_c(function(){var u=o,m=Wa(n),h=[];e:{var A=yd.get(e);if(A!==void 0){var S=Ya,w=e;switch(e){case"keypress":if(Ei(n)===0)break e;case"keydown":case"keyup":S=kh;break;case"focusin":w="focus",S=ol;break;case"focusout":w="blur",S=ol;break;case"beforeblur":case"afterblur":S=ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=dh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=jh;break;case md:case Ad:case gd:S=hh;break;case vd:S=Ih;break;case"scroll":S=uh;break;case"wheel":S=Oh;break;case"copy":case"cut":case"paste":S=Ah;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=eu}var g=(t&4)!==0,k=!g&&e==="scroll",f=g?A!==null?A+"Capture":null:A;g=[];for(var c=u,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Or(c,f),y!=null&&g.push(Fr(c,y,p)))),k)break;c=c.return}0<g.length&&(A=new S(A,w,null,n,m),h.push({event:A,listeners:g}))}}if(!(t&7)){e:{if(A=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",A&&n!==Wl&&(w=n.relatedTarget||n.fromElement)&&(on(w)||w[Pt]))break e;if((S||A)&&(A=m.window===m?m:(A=m.ownerDocument)?A.defaultView||A.parentWindow:window,S?(w=n.relatedTarget||n.toElement,S=u,w=w?on(w):null,w!==null&&(k=An(w),w!==k||w.tag!==5&&w.tag!==6)&&(w=null)):(S=null,w=u),S!==w)){if(g=Js,y="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(g=eu,y="onPointerLeave",f="onPointerEnter",c="pointer"),k=S==null?A:Pn(S),p=w==null?A:Pn(w),A=new g(y,c+"leave",S,n,m),A.target=k,A.relatedTarget=p,y=null,on(m)===u&&(g=new g(f,c+"enter",w,n,m),g.target=p,g.relatedTarget=k,y=g),k=y,S&&w)t:{for(g=S,f=w,c=0,p=g;p;p=wn(p))c++;for(p=0,y=f;y;y=wn(y))p++;for(;0<c-p;)g=wn(g),c--;for(;0<p-c;)f=wn(f),p--;for(;c--;){if(g===f||f!==null&&g===f.alternate)break t;g=wn(g),f=wn(f)}g=null}else g=null;S!==null&&du(h,A,S,g,!1),w!==null&&k!==null&&du(h,k,w,g,!0)}}e:{if(A=u?Pn(u):window,S=A.nodeName&&A.nodeName.toLowerCase(),S==="select"||S==="input"&&A.type==="file")var E=Fh;else if(ru(A))if(cd)E=Gh;else{E=Wh;var R=Dh}else(S=A.nodeName)&&S.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(E=Vh);if(E&&(E=E(e,u))){ud(h,E,n,m);break e}R&&R(e,A,u),e==="focusout"&&(R=A._wrapperState)&&R.controlled&&A.type==="number"&&Tl(A,"number",A.value)}switch(R=u?Pn(u):window,e){case"focusin":(ru(R)||R.contentEditable==="true")&&(En=R,Ql=u,Sr=null);break;case"focusout":Sr=Ql=En=null;break;case"mousedown":Hl=!0;break;case"contextmenu":case"mouseup":case"dragend":Hl=!1,su(h,n,m);break;case"selectionchange":if(_h)break;case"keydown":case"keyup":su(h,n,m)}var z;if(Ha)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else Cn?ad(e,n)&&(B="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(ld&&n.locale!=="ko"&&(Cn||B!=="onCompositionStart"?B==="onCompositionEnd"&&Cn&&(z=od()):(Dt=m,_a="value"in Dt?Dt.value:Dt.textContent,Cn=!0)),R=Ui(u,B),0<R.length&&(B=new qs(B,e,null,n,m),h.push({event:B,listeners:R}),z?B.data=z:(z=sd(n),z!==null&&(B.data=z)))),(z=zh?Bh(e,n):Th(e,n))&&(u=Ui(u,"onBeforeInput"),0<u.length&&(m=new qs("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:u}),m.data=z))}xd(h,t)})}function Fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ui(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Or(e,n),o!=null&&r.unshift(Fr(e,o,i)),o=Or(e,t),o!=null&&r.push(Fr(e,o,i))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function du(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=Or(n,o),s!=null&&l.unshift(Fr(n,s,a))):i||(s=Or(n,o),s!=null&&l.push(Fr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Xh=/\r\n?/g,Zh=/\u0000|\uFFFD/g;function fu(e){return(typeof e=="string"?e:""+e).replace(Xh,`
`).replace(Zh,"")}function fi(e,t,n){if(t=fu(t),fu(e)!==t&&n)throw Error(j(425))}function $i(){}var Xl=null,Zl=null;function bl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kl=typeof setTimeout=="function"?setTimeout:void 0,bh=typeof clearTimeout=="function"?clearTimeout:void 0,pu=typeof Promise=="function"?Promise:void 0,Kh=typeof queueMicrotask=="function"?queueMicrotask:typeof pu<"u"?function(e){return pu.resolve(null).then(e).catch(Jh)}:Kl;function Jh(e){setTimeout(function(){throw e})}function pl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Br(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Br(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),gt="__reactFiber$"+Jn,Dr="__reactProps$"+Jn,Pt="__reactContainer$"+Jn,Jl="__reactEvents$"+Jn,qh="__reactListeners$"+Jn,em="__reactHandles$"+Jn;function on(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hu(e);e!==null;){if(n=e[gt])return n;e=hu(e)}return t}e=n,n=e.parentNode}return null}function Kr(e){return e=e[gt]||e[Pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function go(e){return e[Dr]||null}var ql=[],In=-1;function en(e){return{current:e}}function ne(e){0>In||(e.current=ql[In],ql[In]=null,In--)}function ee(e,t){In++,ql[In]=e.current,e.current=t}var Jt={},Te=en(Jt),$e=en(!1),cn=Jt;function Un(e,t){var n=e.type.contextTypes;if(!n)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function _i(){ne($e),ne(Te)}function mu(e,t,n){if(Te.current!==Jt)throw Error(j(168));ee(Te,t),ee($e,n)}function Sd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,Dp(e)||"Unknown",i));return le({},n,r)}function Yi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,cn=Te.current,ee(Te,e),ee($e,$e.current),!0}function Au(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Sd(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,ne($e),ne(Te),ee(Te,e)):ne($e),ee($e,n)}var wt=null,vo=!1,hl=!1;function kd(e){wt===null?wt=[e]:wt.push(e)}function tm(e){vo=!0,kd(e)}function tn(){if(!hl&&wt!==null){hl=!0;var e=0,t=K;try{var n=wt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,vo=!1}catch(i){throw wt!==null&&(wt=wt.slice(e+1)),Xc(Va,tn),i}finally{K=t,hl=!1}}return null}var Nn=[],On=0,Qi=null,Hi=0,et=[],tt=0,dn=null,St=1,kt="";function nn(e,t){Nn[On++]=Hi,Nn[On++]=Qi,Qi=e,Hi=t}function Cd(e,t,n){et[tt++]=St,et[tt++]=kt,et[tt++]=dn,dn=e;var r=St;e=kt;var i=32-ft(r)-1;r&=~(1<<i),n+=1;var o=32-ft(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,St=1<<32-ft(t)+i|n<<i|r,kt=o+e}else St=1<<o|n<<i|r,kt=e}function Za(e){e.return!==null&&(nn(e,1),Cd(e,1,0))}function ba(e){for(;e===Qi;)Qi=Nn[--On],Nn[On]=null,Hi=Nn[--On],Nn[On]=null;for(;e===dn;)dn=et[--tt],et[tt]=null,kt=et[--tt],et[tt]=null,St=et[--tt],et[tt]=null}var Xe=null,He=null,re=!1,dt=null;function Ed(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,He=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:St,overflow:kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,He=null,!0):!1;default:return!1}}function ea(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ta(e){if(re){var t=He;if(t){var n=t;if(!gu(e,t)){if(ea(e))throw Error(j(418));t=_t(n.nextSibling);var r=Xe;t&&gu(e,t)?Ed(r,n):(e.flags=e.flags&-4097|2,re=!1,Xe=e)}}else{if(ea(e))throw Error(j(418));e.flags=e.flags&-4097|2,re=!1,Xe=e}}}function vu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function pi(e){if(e!==Xe)return!1;if(!re)return vu(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bl(e.type,e.memoizedProps)),t&&(t=He)){if(ea(e))throw jd(),Error(j(418));for(;t;)Ed(e,t),t=_t(t.nextSibling)}if(vu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=_t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=Xe?_t(e.stateNode.nextSibling):null;return!0}function jd(){for(var e=He;e;)e=_t(e.nextSibling)}function $n(){He=Xe=null,re=!1}function Ka(e){dt===null?dt=[e]:dt.push(e)}var nm=Ot.ReactCurrentBatchConfig;function cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function hi(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yu(e){var t=e._init;return t(e._payload)}function Pd(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Xt(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,y){return c===null||c.tag!==6?(c=wl(p,f.mode,y),c.return=f,c):(c=i(c,p),c.return=f,c)}function s(f,c,p,y){var E=p.type;return E===kn?m(f,c,p.props.children,y,p.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Tt&&yu(E)===c.type)?(y=i(c,p.props),y.ref=cr(f,c,p),y.return=f,y):(y=zi(p.type,p.key,p.props,null,f.mode,y),y.ref=cr(f,c,p),y.return=f,y)}function u(f,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Sl(p,f.mode,y),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function m(f,c,p,y,E){return c===null||c.tag!==7?(c=un(p,f.mode,y,E),c.return=f,c):(c=i(c,p),c.return=f,c)}function h(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=wl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ri:return p=zi(c.type,c.key,c.props,null,f.mode,p),p.ref=cr(f,null,c),p.return=f,p;case Sn:return c=Sl(c,f.mode,p),c.return=f,c;case Tt:var y=c._init;return h(f,y(c._payload),p)}if(mr(c)||or(c))return c=un(c,f.mode,p,null),c.return=f,c;hi(f,c)}return null}function A(f,c,p,y){var E=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(f,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ri:return p.key===E?s(f,c,p,y):null;case Sn:return p.key===E?u(f,c,p,y):null;case Tt:return E=p._init,A(f,c,E(p._payload),y)}if(mr(p)||or(p))return E!==null?null:m(f,c,p,y,null);hi(f,p)}return null}function S(f,c,p,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,a(c,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ri:return f=f.get(y.key===null?p:y.key)||null,s(c,f,y,E);case Sn:return f=f.get(y.key===null?p:y.key)||null,u(c,f,y,E);case Tt:var R=y._init;return S(f,c,p,R(y._payload),E)}if(mr(y)||or(y))return f=f.get(p)||null,m(c,f,y,E,null);hi(c,y)}return null}function w(f,c,p,y){for(var E=null,R=null,z=c,B=c=0,$=null;z!==null&&B<p.length;B++){z.index>B?($=z,z=null):$=z.sibling;var F=A(f,z,p[B],y);if(F===null){z===null&&(z=$);break}e&&z&&F.alternate===null&&t(f,z),c=o(F,c,B),R===null?E=F:R.sibling=F,R=F,z=$}if(B===p.length)return n(f,z),re&&nn(f,B),E;if(z===null){for(;B<p.length;B++)z=h(f,p[B],y),z!==null&&(c=o(z,c,B),R===null?E=z:R.sibling=z,R=z);return re&&nn(f,B),E}for(z=r(f,z);B<p.length;B++)$=S(z,f,B,p[B],y),$!==null&&(e&&$.alternate!==null&&z.delete($.key===null?B:$.key),c=o($,c,B),R===null?E=$:R.sibling=$,R=$);return e&&z.forEach(function(fe){return t(f,fe)}),re&&nn(f,B),E}function g(f,c,p,y){var E=or(p);if(typeof E!="function")throw Error(j(150));if(p=E.call(p),p==null)throw Error(j(151));for(var R=E=null,z=c,B=c=0,$=null,F=p.next();z!==null&&!F.done;B++,F=p.next()){z.index>B?($=z,z=null):$=z.sibling;var fe=A(f,z,F.value,y);if(fe===null){z===null&&(z=$);break}e&&z&&fe.alternate===null&&t(f,z),c=o(fe,c,B),R===null?E=fe:R.sibling=fe,R=fe,z=$}if(F.done)return n(f,z),re&&nn(f,B),E;if(z===null){for(;!F.done;B++,F=p.next())F=h(f,F.value,y),F!==null&&(c=o(F,c,B),R===null?E=F:R.sibling=F,R=F);return re&&nn(f,B),E}for(z=r(f,z);!F.done;B++,F=p.next())F=S(z,f,B,F.value,y),F!==null&&(e&&F.alternate!==null&&z.delete(F.key===null?B:F.key),c=o(F,c,B),R===null?E=F:R.sibling=F,R=F);return e&&z.forEach(function(ue){return t(f,ue)}),re&&nn(f,B),E}function k(f,c,p,y){if(typeof p=="object"&&p!==null&&p.type===kn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ri:e:{for(var E=p.key,R=c;R!==null;){if(R.key===E){if(E=p.type,E===kn){if(R.tag===7){n(f,R.sibling),c=i(R,p.props.children),c.return=f,f=c;break e}}else if(R.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Tt&&yu(E)===R.type){n(f,R.sibling),c=i(R,p.props),c.ref=cr(f,R,p),c.return=f,f=c;break e}n(f,R);break}else t(f,R);R=R.sibling}p.type===kn?(c=un(p.props.children,f.mode,y,p.key),c.return=f,f=c):(y=zi(p.type,p.key,p.props,null,f.mode,y),y.ref=cr(f,c,p),y.return=f,f=y)}return l(f);case Sn:e:{for(R=p.key;c!==null;){if(c.key===R)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Sl(p,f.mode,y),c.return=f,f=c}return l(f);case Tt:return R=p._init,k(f,c,R(p._payload),y)}if(mr(p))return w(f,c,p,y);if(or(p))return g(f,c,p,y);hi(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=wl(p,f.mode,y),c.return=f,f=c),l(f)):n(f,c)}return k}var _n=Pd(!0),Id=Pd(!1),Xi=en(null),Zi=null,Rn=null,Ja=null;function qa(){Ja=Rn=Zi=null}function es(e){var t=Xi.current;ne(Xi),e._currentValue=t}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wn(e,t){Zi=e,Ja=Rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ue=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Ja!==e)if(e={context:e,memoizedValue:t,next:null},Rn===null){if(Zi===null)throw Error(j(308));Rn=e,Zi.dependencies={lanes:0,firstContext:e}}else Rn=Rn.next=e;return t}var ln=null;function ts(e){ln===null?ln=[e]:ln.push(e)}function Nd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ts(t)):(n.next=i.next,i.next=n),t.interleaved=n,It(e,r)}function It(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Lt=!1;function ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Od(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,It(e,n)}return i=r.interleaved,i===null?(t.next=t,ts(r)):(t.next=i.next,i.next=t),r.interleaved=t,It(e,n)}function ji(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ga(e,n)}}function xu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bi(e,t,n,r){var i=e.updateQueue;Lt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=u:a.next=u,m.lastBaseUpdate=s))}if(o!==null){var h=i.baseState;l=0,m=u=s=null,a=o;do{var A=a.lane,S=a.eventTime;if((r&A)===A){m!==null&&(m=m.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,g=a;switch(A=t,S=n,g.tag){case 1:if(w=g.payload,typeof w=="function"){h=w.call(S,h,A);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=g.payload,A=typeof w=="function"?w.call(S,h,A):w,A==null)break e;h=le({},h,A);break e;case 2:Lt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,A=i.effects,A===null?i.effects=[a]:A.push(a))}else S={eventTime:S,lane:A,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(u=m=S,s=h):m=m.next=S,l|=A;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;A=a,a=A.next,A.next=null,i.lastBaseUpdate=A,i.shared.pending=null}}while(1);if(m===null&&(s=h),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);pn|=l,e.lanes=l,e.memoizedState=h}}function wu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Jr={},yt=en(Jr),Wr=en(Jr),Vr=en(Jr);function an(e){if(e===Jr)throw Error(j(174));return e}function rs(e,t){switch(ee(Vr,t),ee(Wr,e),ee(yt,Jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ml(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ml(t,e)}ne(yt),ee(yt,t)}function Yn(){ne(yt),ne(Wr),ne(Vr)}function Rd(e){an(Vr.current);var t=an(yt.current),n=Ml(t,e.type);t!==n&&(ee(Wr,e),ee(yt,n))}function is(e){Wr.current===e&&(ne(yt),ne(Wr))}var ie=en(0);function Ki(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ml=[];function os(){for(var e=0;e<ml.length;e++)ml[e]._workInProgressVersionPrimary=null;ml.length=0}var Pi=Ot.ReactCurrentDispatcher,Al=Ot.ReactCurrentBatchConfig,fn=0,oe=null,Ae=null,we=null,Ji=!1,kr=!1,Gr=0,rm=0;function Re(){throw Error(j(321))}function ls(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function as(e,t,n,r,i,o){if(fn=o,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pi.current=e===null||e.memoizedState===null?am:sm,e=n(r,i),kr){o=0;do{if(kr=!1,Gr=0,25<=o)throw Error(j(301));o+=1,we=Ae=null,t.updateQueue=null,Pi.current=um,e=n(r,i)}while(kr)}if(Pi.current=qi,t=Ae!==null&&Ae.next!==null,fn=0,we=Ae=oe=null,Ji=!1,t)throw Error(j(300));return e}function ss(){var e=Gr!==0;return Gr=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?oe.memoizedState=we=e:we=we.next=e,we}function ot(){if(Ae===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=we===null?oe.memoizedState:we.next;if(t!==null)we=t,Ae=e;else{if(e===null)throw Error(j(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},we===null?oe.memoizedState=we=e:we=we.next=e}return we}function Ur(e,t){return typeof t=="function"?t(e):t}function gl(e){var t=ot(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var m=u.lane;if((fn&m)===m)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,oe.lanes|=m,pn|=m}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,ht(r,t.memoizedState)||(Ue=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,oe.lanes|=o,pn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vl(e){var t=ot(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);ht(o,t.memoizedState)||(Ue=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function zd(){}function Bd(e,t){var n=oe,r=ot(),i=t(),o=!ht(r.memoizedState,i);if(o&&(r.memoizedState=i,Ue=!0),r=r.queue,us(Md.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,$r(9,Ld.bind(null,n,r,i,t),void 0,null),Se===null)throw Error(j(349));fn&30||Td(n,t,i)}return i}function Td(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ld(e,t,n,r){t.value=n,t.getSnapshot=r,Fd(t)&&Dd(e)}function Md(e,t,n){return n(function(){Fd(t)&&Dd(e)})}function Fd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function Dd(e){var t=It(e,1);t!==null&&pt(t,e,1,-1)}function Su(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:e},t.queue=e,e=e.dispatch=lm.bind(null,oe,e),[t.memoizedState,e]}function $r(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wd(){return ot().memoizedState}function Ii(e,t,n,r){var i=At();oe.flags|=e,i.memoizedState=$r(1|t,n,void 0,r===void 0?null:r)}function yo(e,t,n,r){var i=ot();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var l=Ae.memoizedState;if(o=l.destroy,r!==null&&ls(r,l.deps)){i.memoizedState=$r(t,n,o,r);return}}oe.flags|=e,i.memoizedState=$r(1|t,n,o,r)}function ku(e,t){return Ii(8390656,8,e,t)}function us(e,t){return yo(2048,8,e,t)}function Vd(e,t){return yo(4,2,e,t)}function Gd(e,t){return yo(4,4,e,t)}function Ud(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $d(e,t,n){return n=n!=null?n.concat([e]):null,yo(4,4,Ud.bind(null,t,e),n)}function cs(){}function _d(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ls(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yd(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ls(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Qd(e,t,n){return fn&21?(ht(n,t)||(n=Kc(),oe.lanes|=n,pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=n)}function im(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=Al.transition;Al.transition={};try{e(!1),t()}finally{K=n,Al.transition=r}}function Hd(){return ot().memoizedState}function om(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xd(e))Zd(t,n);else if(n=Nd(e,t,n,r),n!==null){var i=Fe();pt(n,e,r,i),bd(n,t,r)}}function lm(e,t,n){var r=Ht(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xd(e))Zd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,ht(a,l)){var s=t.interleaved;s===null?(i.next=i,ts(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Nd(e,t,i,r),n!==null&&(i=Fe(),pt(n,e,r,i),bd(n,t,r))}}function Xd(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Zd(e,t){kr=Ji=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ga(e,n)}}var qi={readContext:it,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},am={readContext:it,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:ku,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ii(4194308,4,Ud.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ii(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ii(4,2,e,t)},useMemo:function(e,t){var n=At();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=At();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=om.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:Su,useDebugValue:cs,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=Su(!1),t=e[0];return e=im.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,i=At();if(re){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),Se===null)throw Error(j(349));fn&30||Td(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ku(Md.bind(null,r,o,e),[e]),r.flags|=2048,$r(9,Ld.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=At(),t=Se.identifierPrefix;if(re){var n=kt,r=St;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Gr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sm={readContext:it,useCallback:_d,useContext:it,useEffect:us,useImperativeHandle:$d,useInsertionEffect:Vd,useLayoutEffect:Gd,useMemo:Yd,useReducer:gl,useRef:Wd,useState:function(){return gl(Ur)},useDebugValue:cs,useDeferredValue:function(e){var t=ot();return Qd(t,Ae.memoizedState,e)},useTransition:function(){var e=gl(Ur)[0],t=ot().memoizedState;return[e,t]},useMutableSource:zd,useSyncExternalStore:Bd,useId:Hd,unstable_isNewReconciler:!1},um={readContext:it,useCallback:_d,useContext:it,useEffect:us,useImperativeHandle:$d,useInsertionEffect:Vd,useLayoutEffect:Gd,useMemo:Yd,useReducer:vl,useRef:Wd,useState:function(){return vl(Ur)},useDebugValue:cs,useDeferredValue:function(e){var t=ot();return Ae===null?t.memoizedState=e:Qd(t,Ae.memoizedState,e)},useTransition:function(){var e=vl(Ur)[0],t=ot().memoizedState;return[e,t]},useMutableSource:zd,useSyncExternalStore:Bd,useId:Hd,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ra(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xo={isMounted:function(e){return(e=e._reactInternals)?An(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=Ht(e),o=Et(r,i);o.payload=t,n!=null&&(o.callback=n),t=Yt(e,o,i),t!==null&&(pt(t,e,i,r),ji(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=Ht(e),o=Et(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Yt(e,o,i),t!==null&&(pt(t,e,i,r),ji(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),r=Ht(e),i=Et(n,r);i.tag=2,t!=null&&(i.callback=t),t=Yt(e,i,r),t!==null&&(pt(t,e,r,n),ji(t,e,r))}};function Cu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Lr(n,r)||!Lr(i,o):!0}function Kd(e,t,n){var r=!1,i=Jt,o=t.contextType;return typeof o=="object"&&o!==null?o=it(o):(i=_e(t)?cn:Te.current,r=t.contextTypes,o=(r=r!=null)?Un(e,i):Jt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Eu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xo.enqueueReplaceState(t,t.state,null)}function ia(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ns(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=it(o):(o=_e(t)?cn:Te.current,i.context=Un(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ra(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&xo.enqueueReplaceState(i,i.state,null),bi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Qn(e,t){try{var n="",r=t;do n+=Fp(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function yl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function oa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cm=typeof WeakMap=="function"?WeakMap:Map;function Jd(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){to||(to=!0,ma=r),oa(e,t)},n}function qd(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){oa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){oa(e,t),typeof r!="function"&&(Qt===null?Qt=new Set([this]):Qt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cm.bind(null,e,t,n),t.then(e,e))}function Pu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Iu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Yt(n,t,1))),n.lanes|=1),e)}var dm=Ot.ReactCurrentOwner,Ue=!1;function Me(e,t,n,r){t.child=e===null?Id(t,null,n,r):_n(t,e.child,n,r)}function Nu(e,t,n,r,i){n=n.render;var o=t.ref;return Wn(t,i),r=as(e,t,n,r,o,i),n=ss(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(re&&n&&Za(t),t.flags|=1,Me(e,t,r,i),t.child)}function Ou(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!vs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ef(e,t,o,r,i)):(e=zi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Lr,n(l,r)&&e.ref===t.ref)return Nt(e,t,i)}return t.flags|=1,e=Xt(o,r),e.ref=t.ref,e.return=t,t.child=e}function ef(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Lr(o,r)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ue=!0);else return t.lanes=e.lanes,Nt(e,t,i)}return la(e,t,n,r,i)}function tf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Bn,Qe),Qe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Bn,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ee(Bn,Qe),Qe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ee(Bn,Qe),Qe|=r;return Me(e,t,i,n),t.child}function nf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function la(e,t,n,r,i){var o=_e(n)?cn:Te.current;return o=Un(t,o),Wn(t,i),n=as(e,t,n,r,o,i),r=ss(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(re&&r&&Za(t),t.flags|=1,Me(e,t,n,i),t.child)}function Ru(e,t,n,r,i){if(_e(n)){var o=!0;Yi(t)}else o=!1;if(Wn(t,i),t.stateNode===null)Ni(e,t),Kd(t,n,r),ia(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=it(u):(u=_e(n)?cn:Te.current,u=Un(t,u));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Eu(t,l,r,u),Lt=!1;var A=t.memoizedState;l.state=A,bi(t,r,l,i),s=t.memoizedState,a!==r||A!==s||$e.current||Lt?(typeof m=="function"&&(ra(t,n,m,r),s=t.memoizedState),(a=Lt||Cu(t,n,a,r,A,s,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Od(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ut(t.type,a),l.props=u,h=t.pendingProps,A=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=it(s):(s=_e(n)?cn:Te.current,s=Un(t,s));var S=n.getDerivedStateFromProps;(m=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||A!==s)&&Eu(t,l,r,s),Lt=!1,A=t.memoizedState,l.state=A,bi(t,r,l,i);var w=t.memoizedState;a!==h||A!==w||$e.current||Lt?(typeof S=="function"&&(ra(t,n,S,r),w=t.memoizedState),(u=Lt||Cu(t,n,u,r,A,w,s)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),r=!1)}return aa(e,t,n,r,o,i)}function aa(e,t,n,r,i,o){nf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Au(t,n,!1),Nt(e,t,o);r=t.stateNode,dm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=_n(t,e.child,null,o),t.child=_n(t,null,a,o)):Me(e,t,a,o),t.memoizedState=r.state,i&&Au(t,n,!0),t.child}function rf(e){var t=e.stateNode;t.pendingContext?mu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&mu(e,t.context,!1),rs(e,t.containerInfo)}function zu(e,t,n,r,i){return $n(),Ka(i),t.flags|=256,Me(e,t,n,r),t.child}var sa={dehydrated:null,treeContext:null,retryLane:0};function ua(e){return{baseLanes:e,cachePool:null,transitions:null}}function of(e,t,n){var r=t.pendingProps,i=ie.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(ie,i&1),e===null)return ta(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ko(l,r,0,null),e=un(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ua(n),t.memoizedState=sa,e):ds(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return fm(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Xt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Xt(a,o):(o=un(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ua(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=sa,r}return o=e.child,e=o.sibling,r=Xt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ds(e,t){return t=ko({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mi(e,t,n,r){return r!==null&&Ka(r),_n(t,e.child,null,n),e=ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fm(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=yl(Error(j(422))),mi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ko({mode:"visible",children:r.children},i,0,null),o=un(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&_n(t,e.child,null,l),t.child.memoizedState=ua(l),t.memoizedState=sa,o);if(!(t.mode&1))return mi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(j(419)),r=yl(o,r,void 0),mi(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ue||a){if(r=Se,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,It(e,i),pt(r,e,i,-1))}return gs(),r=yl(Error(j(421))),mi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Em.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,He=_t(i.nextSibling),Xe=t,re=!0,dt=null,e!==null&&(et[tt++]=St,et[tt++]=kt,et[tt++]=dn,St=e.id,kt=e.overflow,dn=t),t=ds(t,r.children),t.flags|=4096,t)}function Bu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function xl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function lf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Me(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bu(e,n,t);else if(e.tag===19)Bu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ki(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ki(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xl(t,!0,n,null,o);break;case"together":xl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ni(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pm(e,t,n){switch(t.tag){case 3:rf(t),$n();break;case 5:Rd(t);break;case 1:_e(t.type)&&Yi(t);break;case 4:rs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(Xi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?of(e,t,n):(ee(ie,ie.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);ee(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return lf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,tf(e,t,n)}return Nt(e,t,n)}var af,ca,sf,uf;af=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ca=function(){};sf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,an(yt.current);var o=null;switch(n){case"input":i=zl(e,i),r=zl(e,r),o=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),o=[];break;case"textarea":i=Ll(e,i),r=Ll(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$i)}Fl(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ir.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ir.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&te("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};uf=function(e,t,n,r){n!==r&&(t.flags|=4)};function dr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hm(e,t,n){var r=t.pendingProps;switch(ba(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return _e(t.type)&&_i(),ze(t),null;case 3:return r=t.stateNode,Yn(),ne($e),ne(Te),os(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(va(dt),dt=null))),ca(e,t),ze(t),null;case 5:is(t);var i=an(Vr.current);if(n=t.type,e!==null&&t.stateNode!=null)sf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return ze(t),null}if(e=an(yt.current),pi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[gt]=t,r[Dr]=o,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<gr.length;i++)te(gr[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Us(r,o),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},te("invalid",r);break;case"textarea":_s(r,o),te("invalid",r)}Fl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&fi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&fi(r.textContent,a,e),i=["children",""+a]):Ir.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&te("scroll",r)}switch(n){case"input":ii(r),$s(r,o,!0);break;case"textarea":ii(r),Ys(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=$i)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[gt]=t,e[Dr]=r,af(e,t,!1,!1),t.stateNode=e;e:{switch(l=Dl(n,r),n){case"dialog":te("cancel",e),te("close",e),i=r;break;case"iframe":case"object":case"embed":te("load",e),i=r;break;case"video":case"audio":for(i=0;i<gr.length;i++)te(gr[i],e);i=r;break;case"source":te("error",e),i=r;break;case"img":case"image":case"link":te("error",e),te("load",e),i=r;break;case"details":te("toggle",e),i=r;break;case"input":Us(e,r),i=zl(e,r),te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),te("invalid",e);break;case"textarea":_s(e,r),i=Ll(e,r),te("invalid",e);break;default:i=r}Fl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Wc(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Fc(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Nr(e,s):typeof s=="number"&&Nr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ir.hasOwnProperty(o)?s!=null&&o==="onScroll"&&te("scroll",e):s!=null&&La(e,o,s,l))}switch(n){case"input":ii(e),$s(e,r,!1);break;case"textarea":ii(e),Ys(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=$i)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)uf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=an(Vr.current),an(yt.current),pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[gt]=t,(o=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:fi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=t,t.stateNode=r}return ze(t),null;case 13:if(ne(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&He!==null&&t.mode&1&&!(t.flags&128))jd(),$n(),t.flags|=98560,o=!1;else if(o=pi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[gt]=t}else $n(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),o=!1}else dt!==null&&(va(dt),dt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?ve===0&&(ve=3):gs())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return Yn(),ca(e,t),e===null&&Mr(t.stateNode.containerInfo),ze(t),null;case 10:return es(t.type._context),ze(t),null;case 17:return _e(t.type)&&_i(),ze(t),null;case 19:if(ne(ie),o=t.memoizedState,o===null)return ze(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)dr(o,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ki(e),l!==null){for(t.flags|=128,dr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(ie,ie.current&1|2),t.child}e=e.sibling}o.tail!==null&&de()>Hn&&(t.flags|=128,r=!0,dr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ki(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),dr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!re)return ze(t),null}else 2*de()-o.renderingStartTime>Hn&&n!==1073741824&&(t.flags|=128,r=!0,dr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=de(),t.sibling=null,n=ie.current,ee(ie,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return As(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qe&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function mm(e,t){switch(ba(t),t.tag){case 1:return _e(t.type)&&_i(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yn(),ne($e),ne(Te),os(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return is(t),null;case 13:if(ne(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(ie),null;case 4:return Yn(),null;case 10:return es(t.type._context),null;case 22:case 23:return As(),null;case 24:return null;default:return null}}var Ai=!1,Be=!1,Am=typeof WeakSet=="function"?WeakSet:Set,L=null;function zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function da(e,t,n){try{n()}catch(r){se(e,t,r)}}var Tu=!1;function gm(e,t){if(Xl=Vi,e=pd(),Xa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,m=0,h=e,A=null;t:for(;;){for(var S;h!==n||i!==0&&h.nodeType!==3||(a=l+i),h!==o||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(S=h.firstChild)!==null;)A=h,h=S;for(;;){if(h===e)break t;if(A===n&&++u===i&&(a=l),A===o&&++m===r&&(s=l),(S=h.nextSibling)!==null)break;h=A,A=h.parentNode}h=S}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zl={focusedElem:e,selectionRange:n},Vi=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var g=w.memoizedProps,k=w.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?g:ut(t.type,g),k);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(y){se(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return w=Tu,Tu=!1,w}function Cr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&da(t,n,o)}i=i.next}while(i!==r)}}function wo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cf(e){var t=e.alternate;t!==null&&(e.alternate=null,cf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[Dr],delete t[Jl],delete t[qh],delete t[em])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function df(e){return e.tag===5||e.tag===3||e.tag===4}function Lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||df(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$i));else if(r!==4&&(e=e.child,e!==null))for(pa(e,t,n),e=e.sibling;e!==null;)pa(e,t,n),e=e.sibling}function ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ha(e,t,n),e=e.sibling;e!==null;)ha(e,t,n),e=e.sibling}var Pe=null,ct=!1;function zt(e,t,n){for(n=n.child;n!==null;)ff(e,t,n),n=n.sibling}function ff(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(po,n)}catch{}switch(n.tag){case 5:Be||zn(n,t);case 6:var r=Pe,i=ct;Pe=null,zt(e,t,n),Pe=r,ct=i,Pe!==null&&(ct?(e=Pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(ct?(e=Pe,n=n.stateNode,e.nodeType===8?pl(e.parentNode,n):e.nodeType===1&&pl(e,n),Br(e)):pl(Pe,n.stateNode));break;case 4:r=Pe,i=ct,Pe=n.stateNode.containerInfo,ct=!0,zt(e,t,n),Pe=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&da(n,t,l),i=i.next}while(i!==r)}zt(e,t,n);break;case 1:if(!Be&&(zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){se(n,t,a)}zt(e,t,n);break;case 21:zt(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,zt(e,t,n),Be=r):zt(e,t,n);break;default:zt(e,t,n)}}function Mu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Am),t.forEach(function(r){var i=jm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Pe=a.stateNode,ct=!1;break e;case 3:Pe=a.stateNode.containerInfo,ct=!0;break e;case 4:Pe=a.stateNode.containerInfo,ct=!0;break e}a=a.return}if(Pe===null)throw Error(j(160));ff(o,l,i),Pe=null,ct=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){se(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pf(t,e),t=t.sibling}function pf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),mt(e),r&4){try{Cr(3,e,e.return),wo(3,e)}catch(g){se(e,e.return,g)}try{Cr(5,e,e.return)}catch(g){se(e,e.return,g)}}break;case 1:st(t,e),mt(e),r&512&&n!==null&&zn(n,n.return);break;case 5:if(st(t,e),mt(e),r&512&&n!==null&&zn(n,n.return),e.flags&32){var i=e.stateNode;try{Nr(i,"")}catch(g){se(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Tc(i,o),Dl(a,l);var u=Dl(a,o);for(l=0;l<s.length;l+=2){var m=s[l],h=s[l+1];m==="style"?Wc(i,h):m==="dangerouslySetInnerHTML"?Fc(i,h):m==="children"?Nr(i,h):La(i,m,h,u)}switch(a){case"input":Bl(i,o);break;case"textarea":Lc(i,o);break;case"select":var A=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?Ln(i,!!o.multiple,S,!1):A!==!!o.multiple&&(o.defaultValue!=null?Ln(i,!!o.multiple,o.defaultValue,!0):Ln(i,!!o.multiple,o.multiple?[]:"",!1))}i[Dr]=o}catch(g){se(e,e.return,g)}}break;case 6:if(st(t,e),mt(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){se(e,e.return,g)}}break;case 3:if(st(t,e),mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Br(t.containerInfo)}catch(g){se(e,e.return,g)}break;case 4:st(t,e),mt(e);break;case 13:st(t,e),mt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(hs=de())),r&4&&Mu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(u=Be)||m,st(t,e),Be=u):st(t,e),mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(L=e,m=e.child;m!==null;){for(h=L=m;L!==null;){switch(A=L,S=A.child,A.tag){case 0:case 11:case 14:case 15:Cr(4,A,A.return);break;case 1:zn(A,A.return);var w=A.stateNode;if(typeof w.componentWillUnmount=="function"){r=A,n=A.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(g){se(r,n,g)}}break;case 5:zn(A,A.return);break;case 22:if(A.memoizedState!==null){Du(h);continue}}S!==null?(S.return=A,L=S):Du(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Dc("display",l))}catch(g){se(e,e.return,g)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(g){se(e,e.return,g)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:st(t,e),mt(e),r&4&&Mu(e);break;case 21:break;default:st(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(df(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Nr(i,""),r.flags&=-33);var o=Lu(e);ha(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Lu(e);pa(e,a,l);break;default:throw Error(j(161))}}catch(s){se(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vm(e,t,n){L=e,hf(e)}function hf(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ai;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Be;a=Ai;var u=Be;if(Ai=l,(Be=s)&&!u)for(L=i;L!==null;)l=L,s=l.child,l.tag===22&&l.memoizedState!==null?Wu(i):s!==null?(s.return=l,L=s):Wu(i);for(;o!==null;)L=o,hf(o),o=o.sibling;L=i,Ai=a,Be=u}Fu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):Fu(e)}}function Fu(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||wo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&wu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Br(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Be||t.flags&512&&fa(t)}catch(A){se(t,t.return,A)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Du(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Wu(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wo(4,t)}catch(s){se(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){se(t,i,s)}}var o=t.return;try{fa(t)}catch(s){se(t,o,s)}break;case 5:var l=t.return;try{fa(t)}catch(s){se(t,l,s)}}}catch(s){se(t,t.return,s)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var ym=Math.ceil,eo=Ot.ReactCurrentDispatcher,fs=Ot.ReactCurrentOwner,rt=Ot.ReactCurrentBatchConfig,Y=0,Se=null,pe=null,Ie=0,Qe=0,Bn=en(0),ve=0,_r=null,pn=0,So=0,ps=0,Er=null,Ge=null,hs=0,Hn=1/0,xt=null,to=!1,ma=null,Qt=null,gi=!1,Wt=null,no=0,jr=0,Aa=null,Oi=-1,Ri=0;function Fe(){return Y&6?de():Oi!==-1?Oi:Oi=de()}function Ht(e){return e.mode&1?Y&2&&Ie!==0?Ie&-Ie:nm.transition!==null?(Ri===0&&(Ri=Kc()),Ri):(e=K,e!==0||(e=window.event,e=e===void 0?16:id(e.type)),e):1}function pt(e,t,n,r){if(50<jr)throw jr=0,Aa=null,Error(j(185));Zr(e,n,r),(!(Y&2)||e!==Se)&&(e===Se&&(!(Y&2)&&(So|=n),ve===4&&Ft(e,Ie)),Ye(e,r),n===1&&Y===0&&!(t.mode&1)&&(Hn=de()+500,vo&&tn()))}function Ye(e,t){var n=e.callbackNode;nh(e,t);var r=Wi(e,e===Se?Ie:0);if(r===0)n!==null&&Xs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xs(n),t===1)e.tag===0?tm(Vu.bind(null,e)):kd(Vu.bind(null,e)),Kh(function(){!(Y&6)&&tn()}),n=null;else{switch(Jc(r)){case 1:n=Va;break;case 4:n=Zc;break;case 16:n=Di;break;case 536870912:n=bc;break;default:n=Di}n=Sf(n,mf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mf(e,t){if(Oi=-1,Ri=0,Y&6)throw Error(j(327));var n=e.callbackNode;if(Vn()&&e.callbackNode!==n)return null;var r=Wi(e,e===Se?Ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ro(e,r);else{t=r;var i=Y;Y|=2;var o=gf();(Se!==e||Ie!==t)&&(xt=null,Hn=de()+500,sn(e,t));do try{Sm();break}catch(a){Af(e,a)}while(1);qa(),eo.current=o,Y=i,pe!==null?t=0:(Se=null,Ie=0,t=ve)}if(t!==0){if(t===2&&(i=$l(e),i!==0&&(r=i,t=ga(e,i))),t===1)throw n=_r,sn(e,0),Ft(e,r),Ye(e,de()),n;if(t===6)Ft(e,r);else{if(i=e.current.alternate,!(r&30)&&!xm(i)&&(t=ro(e,r),t===2&&(o=$l(e),o!==0&&(r=o,t=ga(e,o))),t===1))throw n=_r,sn(e,0),Ft(e,r),Ye(e,de()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:rn(e,Ge,xt);break;case 3:if(Ft(e,r),(r&130023424)===r&&(t=hs+500-de(),10<t)){if(Wi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Kl(rn.bind(null,e,Ge,xt),t);break}rn(e,Ge,xt);break;case 4:if(Ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-ft(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ym(r/1960))-r,10<r){e.timeoutHandle=Kl(rn.bind(null,e,Ge,xt),r);break}rn(e,Ge,xt);break;case 5:rn(e,Ge,xt);break;default:throw Error(j(329))}}}return Ye(e,de()),e.callbackNode===n?mf.bind(null,e):null}function ga(e,t){var n=Er;return e.current.memoizedState.isDehydrated&&(sn(e,t).flags|=256),e=ro(e,t),e!==2&&(t=Ge,Ge=n,t!==null&&va(t)),e}function va(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function xm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ht(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ft(e,t){for(t&=~ps,t&=~So,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function Vu(e){if(Y&6)throw Error(j(327));Vn();var t=Wi(e,0);if(!(t&1))return Ye(e,de()),null;var n=ro(e,t);if(e.tag!==0&&n===2){var r=$l(e);r!==0&&(t=r,n=ga(e,r))}if(n===1)throw n=_r,sn(e,0),Ft(e,t),Ye(e,de()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rn(e,Ge,xt),Ye(e,de()),null}function ms(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(Hn=de()+500,vo&&tn())}}function hn(e){Wt!==null&&Wt.tag===0&&!(Y&6)&&Vn();var t=Y;Y|=1;var n=rt.transition,r=K;try{if(rt.transition=null,K=1,e)return e()}finally{K=r,rt.transition=n,Y=t,!(Y&6)&&tn()}}function As(){Qe=Bn.current,ne(Bn)}function sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bh(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(ba(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_i();break;case 3:Yn(),ne($e),ne(Te),os();break;case 5:is(r);break;case 4:Yn();break;case 13:ne(ie);break;case 19:ne(ie);break;case 10:es(r.type._context);break;case 22:case 23:As()}n=n.return}if(Se=e,pe=e=Xt(e.current,null),Ie=Qe=t,ve=0,_r=null,ps=So=pn=0,Ge=Er=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}ln=null}return e}function Af(e,t){do{var n=pe;try{if(qa(),Pi.current=qi,Ji){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ji=!1}if(fn=0,we=Ae=oe=null,kr=!1,Gr=0,fs.current=null,n===null||n.return===null){ve=1,_r=t,pe=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Ie,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,m=a,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var A=m.alternate;A?(m.updateQueue=A.updateQueue,m.memoizedState=A.memoizedState,m.lanes=A.lanes):(m.updateQueue=null,m.memoizedState=null)}var S=Pu(l);if(S!==null){S.flags&=-257,Iu(S,l,a,o,t),S.mode&1&&ju(o,u,t),t=S,s=u;var w=t.updateQueue;if(w===null){var g=new Set;g.add(s),t.updateQueue=g}else w.add(s);break e}else{if(!(t&1)){ju(o,u,t),gs();break e}s=Error(j(426))}}else if(re&&a.mode&1){var k=Pu(l);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Iu(k,l,a,o,t),Ka(Qn(s,a));break e}}o=s=Qn(s,a),ve!==4&&(ve=2),Er===null?Er=[o]:Er.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Jd(o,s,t);xu(o,f);break e;case 1:a=s;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Qt===null||!Qt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=qd(o,a,t);xu(o,y);break e}}o=o.return}while(o!==null)}yf(n)}catch(E){t=E,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(1)}function gf(){var e=eo.current;return eo.current=qi,e===null?qi:e}function gs(){(ve===0||ve===3||ve===2)&&(ve=4),Se===null||!(pn&268435455)&&!(So&268435455)||Ft(Se,Ie)}function ro(e,t){var n=Y;Y|=2;var r=gf();(Se!==e||Ie!==t)&&(xt=null,sn(e,t));do try{wm();break}catch(i){Af(e,i)}while(1);if(qa(),Y=n,eo.current=r,pe!==null)throw Error(j(261));return Se=null,Ie=0,ve}function wm(){for(;pe!==null;)vf(pe)}function Sm(){for(;pe!==null&&!Hp();)vf(pe)}function vf(e){var t=wf(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?yf(e):pe=t,fs.current=null}function yf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mm(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,pe=null;return}}else if(n=hm(n,t,Qe),n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ve===0&&(ve=5)}function rn(e,t,n){var r=K,i=rt.transition;try{rt.transition=null,K=1,km(e,t,n,r)}finally{rt.transition=i,K=r}return null}function km(e,t,n,r){do Vn();while(Wt!==null);if(Y&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(rh(e,o),e===Se&&(pe=Se=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gi||(gi=!0,Sf(Di,function(){return Vn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=rt.transition,rt.transition=null;var l=K;K=1;var a=Y;Y|=4,fs.current=null,gm(e,n),pf(n,e),$h(Zl),Vi=!!Xl,Zl=Xl=null,e.current=n,vm(n),Xp(),Y=a,K=l,rt.transition=o}else e.current=n;if(gi&&(gi=!1,Wt=e,no=i),o=e.pendingLanes,o===0&&(Qt=null),Kp(n.stateNode),Ye(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(to)throw to=!1,e=ma,ma=null,e;return no&1&&e.tag!==0&&Vn(),o=e.pendingLanes,o&1?e===Aa?jr++:(jr=0,Aa=e):jr=0,tn(),null}function Vn(){if(Wt!==null){var e=Jc(no),t=rt.transition,n=K;try{if(rt.transition=null,K=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,no=0,Y&6)throw Error(j(331));var i=Y;for(Y|=4,L=e.current;L!==null;){var o=L,l=o.child;if(L.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(L=u;L!==null;){var m=L;switch(m.tag){case 0:case 11:case 15:Cr(8,m,o)}var h=m.child;if(h!==null)h.return=m,L=h;else for(;L!==null;){m=L;var A=m.sibling,S=m.return;if(cf(m),m===u){L=null;break}if(A!==null){A.return=S,L=A;break}L=S}}}var w=o.alternate;if(w!==null){var g=w.child;if(g!==null){w.child=null;do{var k=g.sibling;g.sibling=null,g=k}while(g!==null)}}L=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,L=l;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Cr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,L=f;break e}L=o.return}}var c=e.current;for(L=c;L!==null;){l=L;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,L=p;else e:for(l=c;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wo(9,a)}}catch(E){se(a,a.return,E)}if(a===l){L=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,L=y;break e}L=a.return}}if(Y=i,tn(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(po,e)}catch{}r=!0}return r}finally{K=n,rt.transition=t}}return!1}function Gu(e,t,n){t=Qn(n,t),t=Jd(e,t,1),e=Yt(e,t,1),t=Fe(),e!==null&&(Zr(e,1,t),Ye(e,t))}function se(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qt===null||!Qt.has(r))){e=Qn(n,e),e=qd(t,e,1),t=Yt(t,e,1),e=Fe(),t!==null&&(Zr(t,1,e),Ye(t,e));break}}t=t.return}}function Cm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(Ie&n)===n&&(ve===4||ve===3&&(Ie&130023424)===Ie&&500>de()-hs?sn(e,0):ps|=n),Ye(e,t)}function xf(e,t){t===0&&(e.mode&1?(t=ai,ai<<=1,!(ai&130023424)&&(ai=4194304)):t=1);var n=Fe();e=It(e,t),e!==null&&(Zr(e,t,n),Ye(e,n))}function Em(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xf(e,n)}function jm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),xf(e,n)}var wf;wf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)Ue=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ue=!1,pm(e,t,n);Ue=!!(e.flags&131072)}else Ue=!1,re&&t.flags&1048576&&Cd(t,Hi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ni(e,t),e=t.pendingProps;var i=Un(t,Te.current);Wn(t,n),i=as(null,t,r,e,i,n);var o=ss();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(o=!0,Yi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ns(t),i.updater=xo,t.stateNode=i,i._reactInternals=t,ia(t,r,e,n),t=aa(null,t,r,!0,o,n)):(t.tag=0,re&&o&&Za(t),Me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ni(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Im(r),e=ut(r,e),i){case 0:t=la(null,t,r,e,n);break e;case 1:t=Ru(null,t,r,e,n);break e;case 11:t=Nu(null,t,r,e,n);break e;case 14:t=Ou(null,t,r,ut(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),la(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Ru(e,t,r,i,n);case 3:e:{if(rf(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Od(e,t),bi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Qn(Error(j(423)),t),t=zu(e,t,r,n,i);break e}else if(r!==i){i=Qn(Error(j(424)),t),t=zu(e,t,r,n,i);break e}else for(He=_t(t.stateNode.containerInfo.firstChild),Xe=t,re=!0,dt=null,n=Id(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($n(),r===i){t=Nt(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return Rd(t),e===null&&ta(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,bl(r,i)?l=null:o!==null&&bl(r,o)&&(t.flags|=32),nf(e,t),Me(e,t,l,n),t.child;case 6:return e===null&&ta(t),null;case 13:return of(e,t,n);case 4:return rs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_n(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Nu(e,t,r,i,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ee(Xi,r._currentValue),r._currentValue=l,o!==null)if(ht(o.value,l)){if(o.children===i.children&&!$e.current){t=Nt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Et(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?s.next=s:(s.next=m.next,m.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),na(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(j(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),na(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Wn(t,n),i=it(i),r=r(i),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,i=ut(r,t.pendingProps),i=ut(r.type,i),Ou(e,t,r,i,n);case 15:return ef(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Ni(e,t),t.tag=1,_e(r)?(e=!0,Yi(t)):e=!1,Wn(t,n),Kd(t,r,i),ia(t,r,i,n),aa(null,t,r,!0,e,n);case 19:return lf(e,t,n);case 22:return tf(e,t,n)}throw Error(j(156,t.tag))};function Sf(e,t){return Xc(e,t)}function Pm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,r){return new Pm(e,t,n,r)}function vs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Im(e){if(typeof e=="function")return vs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fa)return 11;if(e===Da)return 14}return 2}function Xt(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")vs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case kn:return un(n.children,i,o,t);case Ma:l=8,i|=8;break;case Il:return e=nt(12,n,t,i|2),e.elementType=Il,e.lanes=o,e;case Nl:return e=nt(13,n,t,i),e.elementType=Nl,e.lanes=o,e;case Ol:return e=nt(19,n,t,i),e.elementType=Ol,e.lanes=o,e;case Rc:return ko(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nc:l=10;break e;case Oc:l=9;break e;case Fa:l=11;break e;case Da:l=14;break e;case Tt:l=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=nt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function un(e,t,n,r){return e=nt(7,e,r,t),e.lanes=n,e}function ko(e,t,n,r){return e=nt(22,e,r,t),e.elementType=Rc,e.lanes=n,e.stateNode={isHidden:!1},e}function wl(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function Sl(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Nm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nl(0),this.expirationTimes=nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ys(e,t,n,r,i,o,l,a,s){return e=new Nm(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=nt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ns(o),e}function Om(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function kf(e){if(!e)return Jt;e=e._reactInternals;e:{if(An(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(_e(n))return Sd(e,n,t)}return t}function Cf(e,t,n,r,i,o,l,a,s){return e=ys(n,r,!0,e,i,o,l,a,s),e.context=kf(null),n=e.current,r=Fe(),i=Ht(n),o=Et(r,i),o.callback=t??null,Yt(n,o,i),e.current.lanes=i,Zr(e,i,r),Ye(e,r),e}function Co(e,t,n,r){var i=t.current,o=Fe(),l=Ht(i);return n=kf(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yt(i,t,l),e!==null&&(pt(e,i,l,o),ji(e,i,l)),l}function io(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Uu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xs(e,t){Uu(e,t),(e=e.alternate)&&Uu(e,t)}function Rm(){return null}var Ef=typeof reportError=="function"?reportError:function(e){console.error(e)};function ws(e){this._internalRoot=e}Eo.prototype.render=ws.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Co(e,t,null,null)};Eo.prototype.unmount=ws.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hn(function(){Co(null,e,null,null)}),t[Pt]=null}};function Eo(e){this._internalRoot=e}Eo.prototype.unstable_scheduleHydration=function(e){if(e){var t=td();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&rd(e)}};function Ss(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $u(){}function zm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=io(l);o.call(u)}}var l=Cf(t,r,e,0,null,!1,!1,"",$u);return e._reactRootContainer=l,e[Pt]=l.current,Mr(e.nodeType===8?e.parentNode:e),hn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=io(s);a.call(u)}}var s=ys(e,0,!1,null,null,!1,!1,"",$u);return e._reactRootContainer=s,e[Pt]=s.current,Mr(e.nodeType===8?e.parentNode:e),hn(function(){Co(t,s,n,r)}),s}function Po(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=io(l);a.call(s)}}Co(t,l,e,i)}else l=zm(n,t,e,i,r);return io(l)}qc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ar(t.pendingLanes);n!==0&&(Ga(t,n|1),Ye(t,de()),!(Y&6)&&(Hn=de()+500,tn()))}break;case 13:hn(function(){var r=It(e,1);if(r!==null){var i=Fe();pt(r,e,1,i)}}),xs(e,1)}};Ua=function(e){if(e.tag===13){var t=It(e,134217728);if(t!==null){var n=Fe();pt(t,e,134217728,n)}xs(e,134217728)}};ed=function(e){if(e.tag===13){var t=Ht(e),n=It(e,t);if(n!==null){var r=Fe();pt(n,e,t,r)}xs(e,t)}};td=function(){return K};nd=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};Vl=function(e,t,n){switch(t){case"input":if(Bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=go(r);if(!i)throw Error(j(90));Bc(r),Bl(r,i)}}}break;case"textarea":Lc(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};Uc=ms;$c=hn;var Bm={usingClientEntryPoint:!1,Events:[Kr,Pn,go,Vc,Gc,ms]},fr={findFiberByHostInstance:on,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tm={bundleType:fr.bundleType,version:fr.version,rendererPackageName:fr.rendererPackageName,rendererConfig:fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qc(e),e===null?null:e.stateNode},findFiberByHostInstance:fr.findFiberByHostInstance||Rm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vi.isDisabled&&vi.supportsFiber)try{po=vi.inject(Tm),vt=vi}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bm;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ss(t))throw Error(j(200));return Om(e,t,null,n)};be.createRoot=function(e,t){if(!Ss(e))throw Error(j(299));var n=!1,r="",i=Ef;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ys(e,1,!1,null,null,n,!1,r,i),e[Pt]=t.current,Mr(e.nodeType===8?e.parentNode:e),new ws(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Qc(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return hn(e)};be.hydrate=function(e,t,n){if(!jo(t))throw Error(j(200));return Po(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!Ss(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Ef;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Cf(t,null,e,1,n??null,i,!1,o,l),e[Pt]=t.current,Mr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Eo(t)};be.render=function(e,t,n){if(!jo(t))throw Error(j(200));return Po(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!jo(e))throw Error(j(40));return e._reactRootContainer?(hn(function(){Po(null,null,e,!1,function(){e._reactRootContainer=null,e[Pt]=null})}),!0):!1};be.unstable_batchedUpdates=ms;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!jo(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Po(e,t,n,!1,r)};be.version="18.3.1-next-f1338f8080-20240426";function jf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jf)}catch(e){console.error(e)}}jf(),Ec.exports=be;var Lm=Ec.exports,_u=Lm;jl.createRoot=_u.createRoot,jl.hydrateRoot=_u.hydrateRoot;var Pf={exports:{}},J={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ks=Symbol.for("react.element"),Cs=Symbol.for("react.portal"),Io=Symbol.for("react.fragment"),No=Symbol.for("react.strict_mode"),Oo=Symbol.for("react.profiler"),Ro=Symbol.for("react.provider"),zo=Symbol.for("react.context"),Mm=Symbol.for("react.server_context"),Bo=Symbol.for("react.forward_ref"),To=Symbol.for("react.suspense"),Lo=Symbol.for("react.suspense_list"),Mo=Symbol.for("react.memo"),Fo=Symbol.for("react.lazy"),Fm=Symbol.for("react.offscreen"),If;If=Symbol.for("react.module.reference");function lt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ks:switch(e=e.type,e){case Io:case Oo:case No:case To:case Lo:return e;default:switch(e=e&&e.$$typeof,e){case Mm:case zo:case Bo:case Fo:case Mo:case Ro:return e;default:return t}}case Cs:return t}}}J.ContextConsumer=zo;J.ContextProvider=Ro;J.Element=ks;J.ForwardRef=Bo;J.Fragment=Io;J.Lazy=Fo;J.Memo=Mo;J.Portal=Cs;J.Profiler=Oo;J.StrictMode=No;J.Suspense=To;J.SuspenseList=Lo;J.isAsyncMode=function(){return!1};J.isConcurrentMode=function(){return!1};J.isContextConsumer=function(e){return lt(e)===zo};J.isContextProvider=function(e){return lt(e)===Ro};J.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ks};J.isForwardRef=function(e){return lt(e)===Bo};J.isFragment=function(e){return lt(e)===Io};J.isLazy=function(e){return lt(e)===Fo};J.isMemo=function(e){return lt(e)===Mo};J.isPortal=function(e){return lt(e)===Cs};J.isProfiler=function(e){return lt(e)===Oo};J.isStrictMode=function(e){return lt(e)===No};J.isSuspense=function(e){return lt(e)===To};J.isSuspenseList=function(e){return lt(e)===Lo};J.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Io||e===Oo||e===No||e===To||e===Lo||e===Fm||typeof e=="object"&&e!==null&&(e.$$typeof===Fo||e.$$typeof===Mo||e.$$typeof===Ro||e.$$typeof===zo||e.$$typeof===Bo||e.$$typeof===If||e.getModuleId!==void 0)};J.typeOf=lt;Pf.exports=J;var Nf=Pf.exports;function Dm(e){function t(I,O,T,W,v){for(var _=0,N=0,ae=0,X=0,b,G,Ce=0,Ve=0,Q,Oe=Q=b=0,Z=0,Ee=0,rr=0,je=0,ti=T.length,ir=ti-1,at,V="",ce="",Zo="",bo="",Rt;Z<ti;){if(G=T.charCodeAt(Z),Z===ir&&N+X+ae+_!==0&&(N!==0&&(G=N===47?10:47),X=ae=_=0,ti++,ir++),N+X+ae+_===0){if(Z===ir&&(0<Ee&&(V=V.replace(A,"")),0<V.trim().length)){switch(G){case 32:case 9:case 59:case 13:case 10:break;default:V+=T.charAt(Z)}G=59}switch(G){case 123:for(V=V.trim(),b=V.charCodeAt(0),Q=1,je=++Z;Z<ti;){switch(G=T.charCodeAt(Z)){case 123:Q++;break;case 125:Q--;break;case 47:switch(G=T.charCodeAt(Z+1)){case 42:case 47:e:{for(Oe=Z+1;Oe<ir;++Oe)switch(T.charCodeAt(Oe)){case 47:if(G===42&&T.charCodeAt(Oe-1)===42&&Z+2!==Oe){Z=Oe+1;break e}break;case 10:if(G===47){Z=Oe+1;break e}}Z=Oe}}break;case 91:G++;case 40:G++;case 34:case 39:for(;Z++<ir&&T.charCodeAt(Z)!==G;);}if(Q===0)break;Z++}switch(Q=T.substring(je,Z),b===0&&(b=(V=V.replace(h,"").trim()).charCodeAt(0)),b){case 64:switch(0<Ee&&(V=V.replace(A,"")),G=V.charCodeAt(1),G){case 100:case 109:case 115:case 45:Ee=O;break;default:Ee=qe}if(Q=t(O,Ee,Q,G,v+1),je=Q.length,0<P&&(Ee=n(qe,V,rr),Rt=a(3,Q,Ee,O,me,ue,je,G,v,W),V=Ee.join(""),Rt!==void 0&&(je=(Q=Rt.trim()).length)===0&&(G=0,Q="")),0<je)switch(G){case 115:V=V.replace(R,l);case 100:case 109:case 45:Q=V+"{"+Q+"}";break;case 107:V=V.replace(c,"$1 $2"),Q=V+"{"+Q+"}",Q=ye===1||ye===2&&o("@"+Q,3)?"@-webkit-"+Q+"@"+Q:"@"+Q;break;default:Q=V+Q,W===112&&(Q=(ce+=Q,""))}else Q="";break;default:Q=t(O,n(O,V,rr),Q,W,v+1)}Zo+=Q,Q=rr=Ee=Oe=b=0,V="",G=T.charCodeAt(++Z);break;case 125:case 59:if(V=(0<Ee?V.replace(A,""):V).trim(),1<(je=V.length))switch(Oe===0&&(b=V.charCodeAt(0),b===45||96<b&&123>b)&&(je=(V=V.replace(" ",":")).length),0<P&&(Rt=a(1,V,O,I,me,ue,ce.length,W,v,W))!==void 0&&(je=(V=Rt.trim()).length)===0&&(V="\0\0"),b=V.charCodeAt(0),G=V.charCodeAt(1),b){case 0:break;case 64:if(G===105||G===99){bo+=V+T.charAt(Z);break}default:V.charCodeAt(je-1)!==58&&(ce+=i(V,b,G,V.charCodeAt(2)))}rr=Ee=Oe=b=0,V="",G=T.charCodeAt(++Z)}}switch(G){case 13:case 10:N===47?N=0:1+b===0&&W!==107&&0<V.length&&(Ee=1,V+="\0"),0<P*D&&a(0,V,O,I,me,ue,ce.length,W,v,W),ue=1,me++;break;case 59:case 125:if(N+X+ae+_===0){ue++;break}default:switch(ue++,at=T.charAt(Z),G){case 9:case 32:if(X+_+N===0)switch(Ce){case 44:case 58:case 9:case 32:at="";break;default:G!==32&&(at=" ")}break;case 0:at="\\0";break;case 12:at="\\f";break;case 11:at="\\v";break;case 38:X+N+_===0&&(Ee=rr=1,at="\f"+at);break;case 108:if(X+N+_+Le===0&&0<Oe)switch(Z-Oe){case 2:Ce===112&&T.charCodeAt(Z-3)===58&&(Le=Ce);case 8:Ve===111&&(Le=Ve)}break;case 58:X+N+_===0&&(Oe=Z);break;case 44:N+ae+X+_===0&&(Ee=1,at+="\r");break;case 34:case 39:N===0&&(X=X===G?0:X===0?G:X);break;case 91:X+N+ae===0&&_++;break;case 93:X+N+ae===0&&_--;break;case 41:X+N+_===0&&ae--;break;case 40:if(X+N+_===0){if(b===0)switch(2*Ce+3*Ve){case 533:break;default:b=1}ae++}break;case 64:N+ae+X+_+Oe+Q===0&&(Q=1);break;case 42:case 47:if(!(0<X+_+ae))switch(N){case 0:switch(2*G+3*T.charCodeAt(Z+1)){case 235:N=47;break;case 220:je=Z,N=42}break;case 42:G===47&&Ce===42&&je+2!==Z&&(T.charCodeAt(je+2)===33&&(ce+=T.substring(je,Z+1)),at="",N=0)}}N===0&&(V+=at)}Ve=Ce,Ce=G,Z++}if(je=ce.length,0<je){if(Ee=O,0<P&&(Rt=a(2,ce,Ee,I,me,ue,je,W,v,W),Rt!==void 0&&(ce=Rt).length===0))return bo+ce+Zo;if(ce=Ee.join(",")+"{"+ce+"}",ye*Le!==0){switch(ye!==2||o(ce,2)||(Le=0),Le){case 111:ce=ce.replace(y,":-moz-$1")+ce;break;case 112:ce=ce.replace(p,"::-webkit-input-$1")+ce.replace(p,"::-moz-$1")+ce.replace(p,":-ms-input-$1")+ce}Le=0}}return bo+ce+Zo}function n(I,O,T){var W=O.trim().split(k);O=W;var v=W.length,_=I.length;switch(_){case 0:case 1:var N=0;for(I=_===0?"":I[0]+" ";N<v;++N)O[N]=r(I,O[N],T).trim();break;default:var ae=N=0;for(O=[];N<v;++N)for(var X=0;X<_;++X)O[ae++]=r(I[X]+" ",W[N],T).trim()}return O}function r(I,O,T){var W=O.charCodeAt(0);switch(33>W&&(W=(O=O.trim()).charCodeAt(0)),W){case 38:return O.replace(f,"$1"+I.trim());case 58:return I.trim()+O.replace(f,"$1"+I.trim());default:if(0<1*T&&0<O.indexOf("\f"))return O.replace(f,(I.charCodeAt(0)===58?"":"$1")+I.trim())}return I+O}function i(I,O,T,W){var v=I+";",_=2*O+3*T+4*W;if(_===944){I=v.indexOf(":",9)+1;var N=v.substring(I,v.length-1).trim();return N=v.substring(0,I).trim()+N+";",ye===1||ye===2&&o(N,1)?"-webkit-"+N+N:N}if(ye===0||ye===2&&!o(v,1))return v;switch(_){case 1015:return v.charCodeAt(10)===97?"-webkit-"+v+v:v;case 951:return v.charCodeAt(3)===116?"-webkit-"+v+v:v;case 963:return v.charCodeAt(5)===110?"-webkit-"+v+v:v;case 1009:if(v.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+v+v;case 978:return"-webkit-"+v+"-moz-"+v+v;case 1019:case 983:return"-webkit-"+v+"-moz-"+v+"-ms-"+v+v;case 883:if(v.charCodeAt(8)===45)return"-webkit-"+v+v;if(0<v.indexOf("image-set(",11))return v.replace(fe,"$1-webkit-$2")+v;break;case 932:if(v.charCodeAt(4)===45)switch(v.charCodeAt(5)){case 103:return"-webkit-box-"+v.replace("-grow","")+"-webkit-"+v+"-ms-"+v.replace("grow","positive")+v;case 115:return"-webkit-"+v+"-ms-"+v.replace("shrink","negative")+v;case 98:return"-webkit-"+v+"-ms-"+v.replace("basis","preferred-size")+v}return"-webkit-"+v+"-ms-"+v+v;case 964:return"-webkit-"+v+"-ms-flex-"+v+v;case 1023:if(v.charCodeAt(8)!==99)break;return N=v.substring(v.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+N+"-webkit-"+v+"-ms-flex-pack"+N+v;case 1005:return w.test(v)?v.replace(S,":-webkit-")+v.replace(S,":-moz-")+v:v;case 1e3:switch(N=v.substring(13).trim(),O=N.indexOf("-")+1,N.charCodeAt(0)+N.charCodeAt(O)){case 226:N=v.replace(E,"tb");break;case 232:N=v.replace(E,"tb-rl");break;case 220:N=v.replace(E,"lr");break;default:return v}return"-webkit-"+v+"-ms-"+N+v;case 1017:if(v.indexOf("sticky",9)===-1)break;case 975:switch(O=(v=I).length-10,N=(v.charCodeAt(O)===33?v.substring(0,O):v).substring(I.indexOf(":",7)+1).trim(),_=N.charCodeAt(0)+(N.charCodeAt(7)|0)){case 203:if(111>N.charCodeAt(8))break;case 115:v=v.replace(N,"-webkit-"+N)+";"+v;break;case 207:case 102:v=v.replace(N,"-webkit-"+(102<_?"inline-":"")+"box")+";"+v.replace(N,"-webkit-"+N)+";"+v.replace(N,"-ms-"+N+"box")+";"+v}return v+";";case 938:if(v.charCodeAt(5)===45)switch(v.charCodeAt(6)){case 105:return N=v.replace("-items",""),"-webkit-"+v+"-webkit-box-"+N+"-ms-flex-"+N+v;case 115:return"-webkit-"+v+"-ms-flex-item-"+v.replace(B,"")+v;default:return"-webkit-"+v+"-ms-flex-line-pack"+v.replace("align-content","").replace(B,"")+v}break;case 973:case 989:if(v.charCodeAt(3)!==45||v.charCodeAt(4)===122)break;case 931:case 953:if(F.test(I)===!0)return(N=I.substring(I.indexOf(":")+1)).charCodeAt(0)===115?i(I.replace("stretch","fill-available"),O,T,W).replace(":fill-available",":stretch"):v.replace(N,"-webkit-"+N)+v.replace(N,"-moz-"+N.replace("fill-",""))+v;break;case 962:if(v="-webkit-"+v+(v.charCodeAt(5)===102?"-ms-"+v:"")+v,T+W===211&&v.charCodeAt(13)===105&&0<v.indexOf("transform",10))return v.substring(0,v.indexOf(";",27)+1).replace(g,"$1-webkit-$2")+v}return v}function o(I,O){var T=I.indexOf(O===1?":":"{"),W=I.substring(0,O!==3?T:10);return T=I.substring(T+1,I.length-1),M(O!==2?W:W.replace($,"$1"),T,O)}function l(I,O){var T=i(O,O.charCodeAt(0),O.charCodeAt(1),O.charCodeAt(2));return T!==O+";"?T.replace(z," or ($1)").substring(4):"("+O+")"}function a(I,O,T,W,v,_,N,ae,X,b){for(var G=0,Ce=O,Ve;G<P;++G)switch(Ve=xe[G].call(m,I,Ce,T,W,v,_,N,ae,X,b)){case void 0:case!1:case!0:case null:break;default:Ce=Ve}if(Ce!==O)return Ce}function s(I){switch(I){case void 0:case null:P=xe.length=0;break;default:if(typeof I=="function")xe[P++]=I;else if(typeof I=="object")for(var O=0,T=I.length;O<T;++O)s(I[O]);else D=!!I|0}return s}function u(I){return I=I.prefix,I!==void 0&&(M=null,I?typeof I!="function"?ye=1:(ye=2,M=I):ye=0),u}function m(I,O){var T=I;if(33>T.charCodeAt(0)&&(T=T.trim()),H=T,T=[H],0<P){var W=a(-1,O,T,T,me,ue,0,0,0,0);W!==void 0&&typeof W=="string"&&(O=W)}var v=t(qe,T,O,0,0);return 0<P&&(W=a(-2,v,T,T,me,ue,v.length,0,0,0),W!==void 0&&(v=W)),H="",Le=0,ue=me=1,v}var h=/^\0+/g,A=/[\0\r\f]/g,S=/: */g,w=/zoo|gra/,g=/([,: ])(transform)/g,k=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,y=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,z=/([\s\S]*?);/g,B=/-self|flex-/g,$=/[^]*?(:[rp][el]a[\w-]+)[^]*/,F=/stretch|:\s*\w+\-(?:conte|avail)/,fe=/([^-])(image-set\()/,ue=1,me=1,Le=0,ye=1,qe=[],xe=[],P=0,M=null,D=0,H="";return m.use=s,m.set=u,e!==void 0&&u(e),m}var Wm={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Vm(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Gm=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Yu=Vm(function(e){return Gm.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Of={exports:{}},q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ke=typeof Symbol=="function"&&Symbol.for,Es=ke?Symbol.for("react.element"):60103,js=ke?Symbol.for("react.portal"):60106,Do=ke?Symbol.for("react.fragment"):60107,Wo=ke?Symbol.for("react.strict_mode"):60108,Vo=ke?Symbol.for("react.profiler"):60114,Go=ke?Symbol.for("react.provider"):60109,Uo=ke?Symbol.for("react.context"):60110,Ps=ke?Symbol.for("react.async_mode"):60111,$o=ke?Symbol.for("react.concurrent_mode"):60111,_o=ke?Symbol.for("react.forward_ref"):60112,Yo=ke?Symbol.for("react.suspense"):60113,Um=ke?Symbol.for("react.suspense_list"):60120,Qo=ke?Symbol.for("react.memo"):60115,Ho=ke?Symbol.for("react.lazy"):60116,$m=ke?Symbol.for("react.block"):60121,_m=ke?Symbol.for("react.fundamental"):60117,Ym=ke?Symbol.for("react.responder"):60118,Qm=ke?Symbol.for("react.scope"):60119;function Je(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Es:switch(e=e.type,e){case Ps:case $o:case Do:case Vo:case Wo:case Yo:return e;default:switch(e=e&&e.$$typeof,e){case Uo:case _o:case Ho:case Qo:case Go:return e;default:return t}}case js:return t}}}function Rf(e){return Je(e)===$o}q.AsyncMode=Ps;q.ConcurrentMode=$o;q.ContextConsumer=Uo;q.ContextProvider=Go;q.Element=Es;q.ForwardRef=_o;q.Fragment=Do;q.Lazy=Ho;q.Memo=Qo;q.Portal=js;q.Profiler=Vo;q.StrictMode=Wo;q.Suspense=Yo;q.isAsyncMode=function(e){return Rf(e)||Je(e)===Ps};q.isConcurrentMode=Rf;q.isContextConsumer=function(e){return Je(e)===Uo};q.isContextProvider=function(e){return Je(e)===Go};q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Es};q.isForwardRef=function(e){return Je(e)===_o};q.isFragment=function(e){return Je(e)===Do};q.isLazy=function(e){return Je(e)===Ho};q.isMemo=function(e){return Je(e)===Qo};q.isPortal=function(e){return Je(e)===js};q.isProfiler=function(e){return Je(e)===Vo};q.isStrictMode=function(e){return Je(e)===Wo};q.isSuspense=function(e){return Je(e)===Yo};q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Do||e===$o||e===Vo||e===Wo||e===Yo||e===Um||typeof e=="object"&&e!==null&&(e.$$typeof===Ho||e.$$typeof===Qo||e.$$typeof===Go||e.$$typeof===Uo||e.$$typeof===_o||e.$$typeof===_m||e.$$typeof===Ym||e.$$typeof===Qm||e.$$typeof===$m)};q.typeOf=Je;Of.exports=q;var Hm=Of.exports,Is=Hm,Xm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Zm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bm={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ns={};Ns[Is.ForwardRef]=bm;Ns[Is.Memo]=zf;function Qu(e){return Is.isMemo(e)?zf:Ns[e.$$typeof]||Xm}var Km=Object.defineProperty,Jm=Object.getOwnPropertyNames,Hu=Object.getOwnPropertySymbols,qm=Object.getOwnPropertyDescriptor,eA=Object.getPrototypeOf,Xu=Object.prototype;function Bf(e,t,n){if(typeof t!="string"){if(Xu){var r=eA(t);r&&r!==Xu&&Bf(e,r,n)}var i=Jm(t);Hu&&(i=i.concat(Hu(t)));for(var o=Qu(e),l=Qu(t),a=0;a<i.length;++a){var s=i[a];if(!Zm[s]&&!(n&&n[s])&&!(l&&l[s])&&!(o&&o[s])){var u=qm(t,s);try{Km(e,s,u)}catch{}}}}return e}var tA=Bf;const nA=pc(tA);function Ct(){return(Ct=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Zu=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},ya=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Nf.typeOf(e)},oo=Object.freeze([]),Zt=Object.freeze({});function Yr(e){return typeof e=="function"}function bu(e){return e.displayName||e.name||"Component"}function Os(e){return e&&typeof e.styledComponentId=="string"}var Xn=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Rs=typeof window<"u"&&"HTMLElement"in window,rA=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function qr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var iA=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&qr(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var a=o;a<l;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),u=0,m=r.length;u<m;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,a=o;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Bi=new Map,lo=new Map,Pr=1,yi=function(e){if(Bi.has(e))return Bi.get(e);for(;lo.has(Pr);)Pr++;var t=Pr++;return Bi.set(e,t),lo.set(t,e),t},oA=function(e){return lo.get(e)},lA=function(e,t){t>=Pr&&(Pr=t+1),Bi.set(e,t),lo.set(t,e)},aA="style["+Xn+'][data-styled-version="5.3.9"]',sA=new RegExp("^"+Xn+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),uA=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},cA=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var a=l.match(sA);if(a){var s=0|parseInt(a[1],10),u=a[2];s!==0&&(lA(u,s),uA(e,u,a[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},dA=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Tf=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var s=a.childNodes,u=s.length;u>=0;u--){var m=s[u];if(m&&m.nodeType===1&&m.hasAttribute(Xn))return m}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Xn,"active"),r.setAttribute("data-styled-version","5.3.9");var l=dA();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},fA=function(){function e(n){var r=this.element=Tf(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,a=o.length;l<a;l++){var s=o[l];if(s.ownerNode===i)return s}qr(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),pA=function(){function e(n){var r=this.element=Tf(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),hA=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Ku=Rs,mA={isServer:!Rs,useCSSOMInjection:!rA},Lf=function(){function e(n,r,i){n===void 0&&(n=Zt),r===void 0&&(r={}),this.options=Ct({},mA,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Rs&&Ku&&(Ku=!1,function(o){for(var l=document.querySelectorAll(aA),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(Xn)!=="active"&&(cA(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return yi(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Ct({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new hA(l):o?new fA(l):new pA(l),new iA(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(yi(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(yi(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(yi(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var a=oA(l);if(a!==void 0){var s=n.names.get(a),u=r.getGroup(l);if(s&&u&&s.size){var m=Xn+".g"+l+'[id="'+a+'"]',h="";s!==void 0&&s.forEach(function(A){A.length>0&&(h+=A+",")}),o+=""+u+m+'{content:"'+h+`"}/*!sc*/
`}}}return o}(this)},e}(),AA=/(a)(d)/gi,Ju=function(e){return String.fromCharCode(e+(e>25?39:97))};function xa(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ju(t%52)+n;return(Ju(t%52)+n).replace(AA,"$1-$2")}var Tn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Mf=function(e){return Tn(5381,e)};function gA(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Yr(n)&&!Os(n))return!1}return!0}var vA=Mf("5.3.9"),yA=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&gA(t),this.componentId=n,this.baseHash=Tn(vA,n),this.baseStyle=r,Lf.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=Zn(this.rules,t,n,r).join(""),a=xa(Tn(this.baseHash,l)>>>0);if(!n.hasNameForId(i,a)){var s=r(l,"."+a,void 0,i);n.insertRules(i,a,s)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,m=Tn(this.baseHash,r.hash),h="",A=0;A<u;A++){var S=this.rules[A];if(typeof S=="string")h+=S;else if(S){var w=Zn(S,t,n,r),g=Array.isArray(w)?w.join(""):w;m=Tn(m,g+A),h+=g}}if(h){var k=xa(m>>>0);if(!n.hasNameForId(i,k)){var f=r(h,"."+k,void 0,i);n.insertRules(i,k,f)}o.push(k)}}return o.join(" ")},e}(),xA=/^\s*\/\/.*$/gm,wA=[":","[",".","#"];function SA(e){var t,n,r,i,o=e===void 0?Zt:e,l=o.options,a=l===void 0?Zt:l,s=o.plugins,u=s===void 0?oo:s,m=new Dm(a),h=[],A=function(g){function k(f){if(f)try{g(f+"}")}catch{}}return function(f,c,p,y,E,R,z,B,$,F){switch(f){case 1:if($===0&&c.charCodeAt(0)===64)return g(c+";"),"";break;case 2:if(B===0)return c+"/*|*/";break;case 3:switch(B){case 102:case 112:return g(p[0]+c),"";default:return c+(F===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach(k)}}}(function(g){h.push(g)}),S=function(g,k,f){return k===0&&wA.indexOf(f[n.length])!==-1||f.match(i)?g:"."+t};function w(g,k,f,c){c===void 0&&(c="&");var p=g.replace(xA,""),y=k&&f?f+" "+k+" { "+p+" }":p;return t=c,n=k,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),m(f||!k?"":k,y)}return m.use([].concat(u,[function(g,k,f){g===2&&f.length&&f[0].lastIndexOf(n)>0&&(f[0]=f[0].replace(r,S))},A,function(g){if(g===-2){var k=h;return h=[],k}}])),w.hash=u.length?u.reduce(function(g,k){return k.name||qr(15),Tn(g,k.name)},5381).toString():"",w}var Ff=ge.createContext();Ff.Consumer;var Df=ge.createContext(),kA=(Df.Consumer,new Lf),wa=SA();function CA(){return C.useContext(Ff)||kA}function EA(){return C.useContext(Df)||wa}var Wf=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=wa);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return qr(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=wa),this.name+t.hash},e}(),jA=/([A-Z])/,PA=/([A-Z])/g,IA=/^ms-/,NA=function(e){return"-"+e.toLowerCase()};function qu(e){return jA.test(e)?e.replace(PA,NA).replace(IA,"-ms-"):e}var ec=function(e){return e==null||e===!1||e===""};function Zn(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,a=e.length;l<a;l+=1)(i=Zn(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(ec(e))return"";if(Os(e))return"."+e.styledComponentId;if(Yr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return Zn(s,t,n,r)}var u;return e instanceof Wf?n?(e.inject(n,r),e.getName(r)):e:ya(e)?function m(h,A){var S,w,g=[];for(var k in h)h.hasOwnProperty(k)&&!ec(h[k])&&(Array.isArray(h[k])&&h[k].isCss||Yr(h[k])?g.push(qu(k)+":",h[k],";"):ya(h[k])?g.push.apply(g,m(h[k],k)):g.push(qu(k)+": "+(S=k,(w=h[k])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||S in Wm?String(w).trim():w+"px")+";"));return A?[A+" {"].concat(g,["}"]):g}(e):e.toString()}var tc=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function qn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Yr(e)||ya(e)?tc(Zn(Zu(oo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:tc(Zn(Zu(e,n)))}var OA=function(e,t,n){return n===void 0&&(n=Zt),e.theme!==n.theme&&e.theme||t||n.theme},RA=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zA=/(^-|-$)/g;function kl(e){return e.replace(RA,"-").replace(zA,"")}var Vf=function(e){return xa(Mf(e)>>>0)};function xi(e){return typeof e=="string"&&!0}var Sa=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},BA=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function TA(e,t,n){var r=e[n];Sa(t)&&Sa(r)?Gf(r,t):e[n]=t}function Gf(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(Sa(l))for(var a in l)BA(a)&&TA(e,l[a],a)}return e}var Uf=ge.createContext();Uf.Consumer;var Cl={};function $f(e,t,n){var r=Os(e),i=!xi(e),o=t.attrs,l=o===void 0?oo:o,a=t.componentId,s=a===void 0?function(c,p){var y=typeof c!="string"?"sc":kl(c);Cl[y]=(Cl[y]||0)+1;var E=y+"-"+Vf("5.3.9"+y+Cl[y]);return p?p+"-"+E:E}(t.displayName,t.parentComponentId):a,u=t.displayName,m=u===void 0?function(c){return xi(c)?"styled."+c:"Styled("+bu(c)+")"}(e):u,h=t.displayName&&t.componentId?kl(t.displayName)+"-"+t.componentId:t.componentId||s,A=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,S=t.shouldForwardProp;r&&e.shouldForwardProp&&(S=t.shouldForwardProp?function(c,p,y){return e.shouldForwardProp(c,p,y)&&t.shouldForwardProp(c,p,y)}:e.shouldForwardProp);var w,g=new yA(n,h,r?e.componentStyle:void 0),k=g.isStatic&&l.length===0,f=function(c,p){return function(y,E,R,z){var B=y.attrs,$=y.componentStyle,F=y.defaultProps,fe=y.foldedComponentIds,ue=y.shouldForwardProp,me=y.styledComponentId,Le=y.target,ye=function(W,v,_){W===void 0&&(W=Zt);var N=Ct({},v,{theme:W}),ae={};return _.forEach(function(X){var b,G,Ce,Ve=X;for(b in Yr(Ve)&&(Ve=Ve(N)),Ve)N[b]=ae[b]=b==="className"?(G=ae[b],Ce=Ve[b],G&&Ce?G+" "+Ce:G||Ce):Ve[b]}),[N,ae]}(OA(E,C.useContext(Uf),F)||Zt,E,B),qe=ye[0],xe=ye[1],P=function(W,v,_,N){var ae=CA(),X=EA(),b=v?W.generateAndInjectStyles(Zt,ae,X):W.generateAndInjectStyles(_,ae,X);return b}($,z,qe),M=R,D=xe.$as||E.$as||xe.as||E.as||Le,H=xi(D),I=xe!==E?Ct({},E,{},xe):E,O={};for(var T in I)T[0]!=="$"&&T!=="as"&&(T==="forwardedAs"?O.as=I[T]:(ue?ue(T,Yu,D):!H||Yu(T))&&(O[T]=I[T]));return E.style&&xe.style!==E.style&&(O.style=Ct({},E.style,{},xe.style)),O.className=Array.prototype.concat(fe,me,P!==me?P:null,E.className,xe.className).filter(Boolean).join(" "),O.ref=M,C.createElement(D,O)}(w,c,p,k)};return f.displayName=m,(w=ge.forwardRef(f)).attrs=A,w.componentStyle=g,w.displayName=m,w.shouldForwardProp=S,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):oo,w.styledComponentId=h,w.target=r?e.target:e,w.withComponent=function(c){var p=t.componentId,y=function(R,z){if(R==null)return{};var B,$,F={},fe=Object.keys(R);for($=0;$<fe.length;$++)B=fe[$],z.indexOf(B)>=0||(F[B]=R[B]);return F}(t,["componentId"]),E=p&&p+"-"+(xi(c)?c:kl(bu(c)));return $f(c,Ct({},y,{attrs:A,componentId:E}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?Gf({},e.defaultProps,c):c}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&nA(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var ka=function(e){return function t(n,r,i){if(i===void 0&&(i=Zt),!Nf.isValidElementType(r))return qr(1,String(r));var o=function(){return n(r,i,qn.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,Ct({},i,{},l))},o.attrs=function(l){return t(n,r,Ct({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}($f,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ka[e]=ka(e)});function gn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=qn.apply(void 0,[e].concat(n)).join(""),o=Vf(i);return new Wf(o,i)}const x=ka,pr=48,LA=({color:e="currentColor",direction:t="left",distance:n="md",duration:r=.4,easing:i="cubic-bezier(0, 0, 0, 1)",hideOutline:o=!0,label:l,lines:a=3,onToggle:s,render:u,rounded:m=!1,size:h=32,toggle:A,toggled:S,disabled:w=!1,animateOnMount:g=!1})=>{const[k,f]=C.useState(!1),[c,p]=C.useState(!1);C.useEffect(()=>{p(!0)},[]);const y=Math.max(12,Math.min(pr,h)),E=Math.round((pr-y)/2),R=y/12,z=Math.round(R),$=y/(a*((n==="lg"?.25:n==="sm"?.75:.5)+(a===3?1:1.25))),F=Math.round($),fe=z*a+F*(a-1),ue=Math.round((pr-fe)/2),me=a===3?n==="lg"?4.0425:n==="sm"?5.1625:4.6325:n==="lg"?6.7875:n==="sm"?8.4875:7.6675,Le=(R-z+($-F))/(a===3?1:2),ye=parseFloat((y/me-Le/(4/3)).toFixed(2)),qe=Math.max(0,r),xe={cursor:w?"not-allowed":"pointer",height:`${pr}px`,position:"relative",transition:`${qe}s ${i}`,userSelect:"none",width:`${pr}px`},P={background:e,height:`${z}px`,left:`${E}px`,position:"absolute"};o&&(xe.outline="none"),m&&(P.borderRadius="9em");const M=()=>{const O=S!==void 0?S:k;return g&&!c?!O:O},D=A||f,H=M();return u({barHeight:z,barStyles:P,burgerStyles:xe,easing:i,handler:()=>{D(!H),typeof s=="function"&&s(!H)},isLeft:t==="left",isToggled:H,label:l,margin:F,move:ye,time:qe,topOffset:ue,width:y})};function Ca(){return Ca=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ca.apply(this,arguments)}const MA=e=>ge.createElement(LA,Ca({},e,{render:t=>ge.createElement("div",{className:"hamburger-react","aria-label":t.label,"aria-expanded":t.isToggled,onClick:e.disabled?void 0:t.handler,onKeyUp:e.disabled?void 0:n=>n.key==="Enter"&&t.handler(),role:"button",style:{...t.burgerStyles,transform:`${t.isToggled?`rotate(${180*(t.isLeft?-1:1)}deg)`:"none"}`},tabIndex:0},ge.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset}px`,transition:`${t.time}s ${t.easing}`,transform:`${t.isToggled?`rotate(${45*(t.isLeft?-1:1)}deg) translate(${t.move*(t.isLeft?-1:1)}px, ${t.move}px)`:"none"}`}}),ge.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset+t.barHeight+t.margin}px`,transition:`${t.time}s ${t.easing}`,opacity:`${t.isToggled?"0":"1"}`}}),ge.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset+t.barHeight*2+t.margin*2}px`,transition:`${t.time}s ${t.easing}`,transform:`${t.isToggled?`rotate(${45*(t.isLeft?1:-1)}deg) translate(${t.move*(t.isLeft?-1:1)}px, ${t.move*-1}px)`:"none"}`}}))}));/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qr(){return Qr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qr.apply(this,arguments)}var Vt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Vt||(Vt={}));const nc="popstate";function FA(e){e===void 0&&(e={});function t(i,o){let{pathname:l="/",search:a="",hash:s=""}=vn(i.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Ea("",{pathname:l,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let l=i.document.querySelector("base"),a="";if(l&&l.getAttribute("href")){let s=i.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof o=="string"?o:ao(o))}function r(i,o){zs(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return WA(t,n,r,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function zs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function DA(){return Math.random().toString(36).substr(2,8)}function rc(e,t){return{usr:e.state,key:e.key,idx:t}}function Ea(e,t,n,r){return n===void 0&&(n=null),Qr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?vn(t):t,{state:n,key:t&&t.key||r||DA()})}function ao(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function vn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function WA(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Vt.Pop,s=null,u=m();u==null&&(u=0,l.replaceState(Qr({},l.state,{idx:u}),""));function m(){return(l.state||{idx:null}).idx}function h(){a=Vt.Pop;let k=m(),f=k==null?null:k-u;u=k,s&&s({action:a,location:g.location,delta:f})}function A(k,f){a=Vt.Push;let c=Ea(g.location,k,f);n&&n(c,k),u=m()+1;let p=rc(c,u),y=g.createHref(c);try{l.pushState(p,"",y)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(y)}o&&s&&s({action:a,location:g.location,delta:1})}function S(k,f){a=Vt.Replace;let c=Ea(g.location,k,f);n&&n(c,k),u=m();let p=rc(c,u),y=g.createHref(c);l.replaceState(p,"",y),o&&s&&s({action:a,location:g.location,delta:0})}function w(k){let f=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof k=="string"?k:ao(k);return c=c.replace(/ $/,"%20"),he(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let g={get action(){return a},get location(){return e(i,l)},listen(k){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(nc,h),s=k,()=>{i.removeEventListener(nc,h),s=null}},createHref(k){return t(i,k)},createURL:w,encodeLocation(k){let f=w(k);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:A,replace:S,go(k){return l.go(k)}};return g}var ic;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ic||(ic={}));function VA(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?vn(t):t,i=Bs(r.pathname||"/",n);if(i==null)return null;let o=_f(e);GA(o);let l=null;for(let a=0;l==null&&a<o.length;++a){let s=qA(i);l=bA(o[a],s)}return l}function _f(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(he(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=bt([r,s.relativePath]),m=n.concat(s);o.children&&o.children.length>0&&(he(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),_f(o.children,t,m,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:XA(u,o.index),routesMeta:m})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of Yf(o.path))i(o,l,s)}),t}function Yf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Yf(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function GA(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ZA(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const UA=/^:[\w-]+$/,$A=3,_A=2,YA=1,QA=10,HA=-2,oc=e=>e==="*";function XA(e,t){let n=e.split("/"),r=n.length;return n.some(oc)&&(r+=HA),t&&(r+=_A),n.filter(i=>!oc(i)).reduce((i,o)=>i+(UA.test(o)?$A:o===""?YA:QA),r)}function ZA(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function bA(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",m=KA({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!m)return null;Object.assign(r,m.params);let h=a.route;o.push({params:r,pathname:bt([i,m.pathname]),pathnameBase:r0(bt([i,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(i=bt([i,m.pathnameBase]))}return o}function KA(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=JA(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,m,h)=>{let{paramName:A,isOptional:S}=m;if(A==="*"){let g=a[h]||"";l=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}const w=a[h];return S&&!w?u[A]=void 0:u[A]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function JA(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),zs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function qA(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return zs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Bs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function e0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?vn(e):e;return{pathname:n?n.startsWith("/")?n:t0(n,t):t,search:i0(r),hash:o0(i)}}function t0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function El(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function n0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Qf(e,t){let n=n0(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Hf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=vn(e):(i=Qr({},e),he(!i.pathname||!i.pathname.includes("?"),El("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),El("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),El("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let h=t.length-1;if(!r&&l.startsWith("..")){let A=l.split("/");for(;A[0]==="..";)A.shift(),h-=1;i.pathname=A.join("/")}a=h>=0?t[h]:"/"}let s=e0(i,a),u=l&&l!=="/"&&l.endsWith("/"),m=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||m)&&(s.pathname+="/"),s}const bt=e=>e.join("/").replace(/\/\/+/g,"/"),r0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),i0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,o0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function l0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Xf=["post","put","patch","delete"];new Set(Xf);const a0=["get",...Xf];new Set(a0);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hr(){return Hr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hr.apply(this,arguments)}const Ts=C.createContext(null),s0=C.createContext(null),yn=C.createContext(null),Xo=C.createContext(null),xn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Zf=C.createContext(null);function u0(e,t){let{relative:n}=t===void 0?{}:t;ei()||he(!1);let{basename:r,navigator:i}=C.useContext(yn),{hash:o,pathname:l,search:a}=Kf(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:bt([r,l])),i.createHref({pathname:s,search:a,hash:o})}function ei(){return C.useContext(Xo)!=null}function er(){return ei()||he(!1),C.useContext(Xo).location}function bf(e){C.useContext(yn).static||C.useLayoutEffect(e)}function c0(){let{isDataRoute:e}=C.useContext(xn);return e?k0():d0()}function d0(){ei()||he(!1);let e=C.useContext(Ts),{basename:t,future:n,navigator:r}=C.useContext(yn),{matches:i}=C.useContext(xn),{pathname:o}=er(),l=JSON.stringify(Qf(i,n.v7_relativeSplatPath)),a=C.useRef(!1);return bf(()=>{a.current=!0}),C.useCallback(function(u,m){if(m===void 0&&(m={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=Hf(u,JSON.parse(l),o,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:bt([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,l,o,e])}function Kf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(yn),{matches:i}=C.useContext(xn),{pathname:o}=er(),l=JSON.stringify(Qf(i,r.v7_relativeSplatPath));return C.useMemo(()=>Hf(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function f0(e,t){return p0(e,t)}function p0(e,t,n,r){ei()||he(!1);let{navigator:i}=C.useContext(yn),{matches:o}=C.useContext(xn),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=er(),m;if(t){var h;let k=typeof t=="string"?vn(t):t;s==="/"||(h=k.pathname)!=null&&h.startsWith(s)||he(!1),m=k}else m=u;let A=m.pathname||"/",S=A;if(s!=="/"){let k=s.replace(/^\//,"").split("/");S="/"+A.replace(/^\//,"").split("/").slice(k.length).join("/")}let w=VA(e,{pathname:S}),g=v0(w&&w.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:bt([s,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?s:bt([s,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),o,n,r);return t&&g?C.createElement(Xo.Provider,{value:{location:Hr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Vt.Pop}},g):g}function h0(){let e=S0(),t=l0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,o)}const m0=C.createElement(h0,null);class A0 extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(xn.Provider,{value:this.props.routeContext},C.createElement(Zf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function g0(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(Ts);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(xn.Provider,{value:t},r)}function v0(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let m=l.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);m>=0||he(!1),l=l.slice(0,Math.min(l.length,m+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<l.length;m++){let h=l[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=m),h.route.id){let{loaderData:A,errors:S}=n,w=h.route.loader&&A[h.route.id]===void 0&&(!S||S[h.route.id]===void 0);if(h.route.lazy||w){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((m,h,A)=>{let S,w=!1,g=null,k=null;n&&(S=a&&h.route.id?a[h.route.id]:void 0,g=h.route.errorElement||m0,s&&(u<0&&A===0?(C0("route-fallback",!1),w=!0,k=null):u===A&&(w=!0,k=h.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,A+1)),c=()=>{let p;return S?p=g:w?p=k:h.route.Component?p=C.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,C.createElement(g0,{match:h,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||A===0)?C.createElement(A0,{location:n.location,revalidation:n.revalidation,component:g,error:S,children:c(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):c()},null)}var Jf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Jf||{}),so=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(so||{});function y0(e){let t=C.useContext(Ts);return t||he(!1),t}function x0(e){let t=C.useContext(s0);return t||he(!1),t}function w0(e){let t=C.useContext(xn);return t||he(!1),t}function qf(e){let t=w0(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function S0(){var e;let t=C.useContext(Zf),n=x0(so.UseRouteError),r=qf(so.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function k0(){let{router:e}=y0(Jf.UseNavigateStable),t=qf(so.UseNavigateStable),n=C.useRef(!1);return bf(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Hr({fromRouteId:t},o)))},[e,t])}const lc={};function C0(e,t,n){!t&&!lc[e]&&(lc[e]=!0)}function Ti(e){he(!1)}function E0(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Vt.Pop,navigator:o,static:l=!1,future:a}=e;ei()&&he(!1);let s=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:s,navigator:o,static:l,future:Hr({v7_relativeSplatPath:!1},a)}),[s,a,o,l]);typeof r=="string"&&(r=vn(r));let{pathname:m="/",search:h="",hash:A="",state:S=null,key:w="default"}=r,g=C.useMemo(()=>{let k=Bs(m,s);return k==null?null:{location:{pathname:k,search:h,hash:A,state:S,key:w},navigationType:i}},[s,m,h,A,S,w,i]);return g==null?null:C.createElement(yn.Provider,{value:u},C.createElement(Xo.Provider,{children:n,value:g}))}function j0(e){let{children:t,location:n}=e;return f0(ja(t),n)}new Promise(()=>{});function ja(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,ja(r.props.children,o));return}r.type!==Ti&&he(!1),!r.props.index||!r.props.children||he(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ja(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pa(){return Pa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pa.apply(this,arguments)}function P0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function I0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function N0(e,t){return e.button===0&&(!t||t==="_self")&&!I0(e)}const O0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],R0="6";try{window.__reactRouterVersion=R0}catch{}const z0="startTransition",ac=Cp[z0];function B0(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=FA({window:i,v5Compat:!0}));let l=o.current,[a,s]=C.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},m=C.useCallback(h=>{u&&ac?ac(()=>s(h)):s(h)},[s,u]);return C.useLayoutEffect(()=>l.listen(m),[l,m]),C.createElement(E0,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const T0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",L0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ls=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:u,preventScrollReset:m,unstable_viewTransition:h}=t,A=P0(t,O0),{basename:S}=C.useContext(yn),w,g=!1;if(typeof u=="string"&&L0.test(u)&&(w=u,T0))try{let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),E=Bs(y.pathname,S);y.origin===p.origin&&E!=null?u=E+y.search+y.hash:g=!0}catch{}let k=u0(u,{relative:i}),f=M0(u,{replace:l,state:a,target:s,preventScrollReset:m,relative:i,unstable_viewTransition:h});function c(p){r&&r(p),p.defaultPrevented||f(p)}return C.createElement("a",Pa({},A,{href:w||k,onClick:g||o?r:c,ref:n,target:s}))});var sc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(sc||(sc={}));var uc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(uc||(uc={}));function M0(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a}=t===void 0?{}:t,s=c0(),u=er(),m=Kf(e,{relative:l});return C.useCallback(h=>{if(N0(h,n)){h.preventDefault();let A=r!==void 0?r:ao(u)===ao(m);s(e,{replace:A,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a})}},[u,s,m,r,i,n,e,o,l,a])}const ep="/portfolio/assets/paulEvansCreativeLogo_inverted-4e0566cf.avif",F0="/portfolio/assets/paulEvansCreativeLogo-b93983b2.avif",D0=x.nav`
  grid-area: top;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 200;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1em;
  padding-left: 1em;
  background-color: #171717;
  position: fixed;
  top: ${({visible:e})=>e?"0":"-160px"}; /* Adjust according to your navbar height */
  transition: top 0.6s;

  @media screen and (max-width: 960px) {
    width: 100%;
    font-size: 16px;
  }

  @media screen and (max-width: 767px) {
    justify-items: flex-end;
    justify-content: space-between;
    margin-top: 0;
    padding-top: 0.5em;
    padding-left: 0em;
  }
`,W0=x.div`
  width: 180px;
  height: 100%;

  @media screen and (max-width: 960px) {
  }

  @media screen and (max-width: 355px) {
  }
`,V0=x.div`
  display: flex;

  @media screen and (max-width: 960px) {
    width: 100%;

    justify-content: center;
    margin-bottom: 4em;
  }
`,G0=x.img`
  text-align: center;
  width: 100px;
  margin-top: 2em;

  @media screen and (max-width: 960px) {
    display: none;
  }
`,U0=x.img`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    margin-top: 100px;
    width: 250px;
  }
`,$0=x.div`
  float: left;
  width: 200px;
  height: 100%;
  padding-left: 0.5em;
  text-align: left;

  @media screen and (max-width: 960px) {
    padding-left: 3em;
  }

  @media screen and (max-width: 767px) {
    padding-left: 0em;
  }
`,_0=x.ul`
  width: auto;
  display: flex;
  list-style-type: none;
  margin-left: 1em;
  padding-right: 2.5em;

  @media screen and (max-width: 960px) {
    position: fixed;
    flex-direction: column;
    padding-top: 0em;
    top: 0px;
    right: 0;
    height: 100vh;
    width: 100vw;
    background-color: #171717;
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
`,Y0=x(Ls)`
  display: flex;
  justify-self: flex-end;
  align-self: flex-end;
  color: #ffffff;
  text-decoration: none;
  text-align: right;
  margin: 1em 2em 0em 0em;

  &:hover {
    text-decoration: underline;
    color: #e437e2;
  }

  &.active {
    text-decoration: underline;
    color: #e437e2;
  }

  @media screen and (max-width: 960px) {
    justify-content: center;
    align-self: center;
    margin: 1em 0em 0em 0em;
    font-size: 32px;

    &:hover {
      text-decoration: none;
      color: #e437e2;
    }
  }
`,Q0=x.a`
  display: flex;
  align-self: flex-end;
  color: #ffffff;
  text-decoration: none;
  text-align: right;
  margin: 0em 2em 0em 0em;

  &:hover {
    text-decoration: underline;
    color: #e437e2;
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
`,H0=x.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    margin-top: 1em;
    margin-right: 6em;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    margin-top: 1em;
    margin-right: 2em;
  }
`,X0=({footerRef:e})=>{const t=er(),[n,r]=C.useState(!1),[i,o]=C.useState(t.pathname),[l,a]=C.useState(!1),[s,u]=C.useState(window.pageYOffset),[m,h]=C.useState(!0);C.useEffect(()=>{o(t.pathname);const g=()=>{const k=window.pageYOffset;h(s>k||k<10),u(k)};return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[t.pathname,s]);const A=()=>{e.current&&e.current.scrollIntoView({behavior:"smooth"}),r(!1),a(!1)},S=()=>{r(!1),a(!1)},w=[{id:1,to:"/",text:"Home"},{id:2,to:"/casestudies",text:"Case Studies"},{id:3,to:"https://www.paulevans-dop.com/",text:"Cinematography",isExternal:!0},{id:4,to:"/about",text:"About"},{id:5,to:"#",text:"Contact",onClick:A}];return d.jsxs(D0,{visible:m,children:[d.jsx(W0,{children:d.jsx(Ls,{to:"/",onClick:S,children:d.jsx($0,{children:d.jsx(G0,{src:ep,alt:"the letters P and E merged together to form the logo Paul Evans Creative"})})})}),d.jsxs(_0,{open:n,children:[w.map(g=>g.isExternal?d.jsx(Q0,{href:g.to,onClick:g.onClick||S,className:i===g.to?"active":"",children:g.text},g.id):d.jsx(Y0,{to:g.to,onClick:g.onClick||S,className:i===g.to?"active":"",children:g.text},g.id)),d.jsx(V0,{children:d.jsx(U0,{src:F0,alt:"the letters P and E merged together to form the logo Paul Evans Creative"})})]}),d.jsx(H0,{children:d.jsx("div",{onClick:()=>{r(!n),a(!l)},children:d.jsx(MA,{toggled:l})})})]})},Z0=gn`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,b0=x.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #171717;
`,K0=x.div`
  display: flex;
  width: 90%;
  height: 100%;
  padding-top: 200px;
  padding-left: 60px;
  padding-bottom: 200px;
  display: flex;
  flex-direction: column;
  z-index: 99;

  @media screen and (max-width: 1225px) {
    padding-top: 120px;
    padding-bottom: 150px;
  }

  @media screen and (max-width: 1025px) {
    padding-bottom: 120px;
  }

  @media screen and (max-width: 767px) {
    /* padding-top: 120px; */
    padding-bottom: 80px;
  }

  @media screen and (max-width: 478px) {
    padding-left: 40px;
  }

  @media screen and (max-width: 320px) {
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 20px;
  }
`,J0=x.div`
  animation: ${Z0} 1s ease-out 0.5s forwards;
`,q0=x.p`
  width: 70%;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  line-height: 1.4;

  @media screen and (max-width: 1225px) {
    width: 80%;
  }

  @media screen and (max-width: 1025px) {
    width: 85%;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    font-size: 20px;
  }

  @media screen and (max-width: 478px) {
    font-size: 18px;
  }

  @media screen and (max-width: 320px) {
    font-size: 16px;
  }
`,eg=()=>d.jsx(b0,{children:d.jsxs(K0,{children:[d.jsx("h1",{children:"Paul Evans"}),d.jsx(J0,{children:d.jsx("h2",{children:"Digital Experience Designer"})}),d.jsx(q0,{children:"I am a passionate creative who's professional background spans over 20 years, during which time I have worn many hats. Cinematographer, UX / UI designer, frontend developer and not to mention concept developer and writer. This experience brings a unique perspective to Visual Design. Combining these skills to create the ultimate Brand and Customer Experience is something that excites and drives me."})]})}),tg="/portfolio/assets/showcase1-e3ff3470.mp4";var tp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ia=ge.createContext&&ge.createContext(tp),ng=["attr","size","title"];function rg(e,t){if(e==null)return{};var n=ig(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ig(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function uo(){return uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uo.apply(this,arguments)}function cc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function co(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cc(Object(n),!0).forEach(function(r){og(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function og(e,t,n){return t=lg(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lg(e){var t=ag(e,"string");return typeof t=="symbol"?t:t+""}function ag(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function np(e){return e&&e.map((t,n)=>ge.createElement(t.tag,co({key:n},t.attr),np(t.child)))}function tr(e){return t=>ge.createElement(sg,uo({attr:co({},e.attr)},t),np(e.child))}function sg(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=rg(e,ng),a=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),ge.createElement("svg",uo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:co(co({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&ge.createElement("title",null,o),e.children)};return Ia!==void 0?ge.createElement(Ia.Consumer,null,n=>t(n)):t(tp)}function ug(e){return tr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM21.3 229.2H21c.1-.1.2-.3.3-.4zM97 319.8H64V192h33zm113.2 0h-28.7v-86.4l-11.6 86.4h-20.6l-12.2-84.5v84.5h-29V192h42.8c3.3 19.8 6 39.9 8.7 59.9l7.6-59.9h43zm11.4 0V192h24.6c17.6 0 44.7-1.6 49 20.9 1.7 7.6 1.4 16.3 1.4 24.4 0 88.5 11.1 82.6-75 82.5zm160.9-29.2c0 15.7-2.4 30.9-22.2 30.9-9 0-15.2-3-20.9-9.8l-1.9 8.1h-29.8V192h31.7v41.7c6-6.5 12-9.2 20.9-9.2 21.4 0 22.2 12.8 22.2 30.1zM265 229.9c0-9.7 1.6-16-10.3-16v83.7c12.2.3 10.3-8.7 10.3-18.4zm85.5 26.1c0-5.4 1.1-12.7-6.2-12.7-6 0-4.9 8.9-4.9 12.7 0 .6-1.1 39.6 1.1 44.7.8 1.6 2.2 2.4 3.8 2.4 7.8 0 6.2-9 6.2-14.4z"},child:[]}]})(e)}function cg(e){return tr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function dg(e){return tr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function nr(e){return tr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"},child:[]}]})(e)}function fg(e){return tr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"},child:[]}]})(e)}function rp(e){return tr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"},child:[]}]})(e)}const pg=x.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 24px;
  /* padding-bottom: 10px; */
  color: #e437e2;

  @media screen and (max-width: 478px) {
    align-items: center;
  }
`,hg=x.div`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1); 
    color: #9804e2;; 
  }

  @media (max-width: 960px) {
    &:hover {
      transform: none; 
      color: inherit; 
    }
  }
`,mg=x.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`,Ag=({onClick:e})=>d.jsxs(pg,{children:[d.jsx(hg,{children:d.jsx("a",{href:"https://paulevans-dop.com/",target:"_blank",rel:"noopener noreferrer",children:d.jsx(nr,{onClick:e,size:80})})}),d.jsx(mg,{children:"See Cinematography Reel"})]}),gg=x.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-width: 100%;
  aspect-ratio: 5 / 4;
  font-size: 1.2rem;
  overflow: hidden;

  @media screen and (max-width: 1225px) {
    height: 600px;
  }

  @media screen and (max-width: 478px) {
    height: 480px;
  }
`,vg=x.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
`,yg=x.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000052;
`,xg=x.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 90%;
  height: 100%;
  padding-left: 40px;

  @media screen and (max-width: 960px) {
    width: 90%;
  }

  @media screen and (max-width: 478px) {
    padding-left: 20px;
  }
`,wg=x.div`
  margin-top: auto;
`;function Sg(e){const t=C.useRef(null);return C.useEffect(()=>{const n=setTimeout(()=>{t.current&&t.current.play()},4e3);return()=>clearTimeout(n)},[]),d.jsxs(gg,{children:[d.jsx(vg,{ref:t,src:tg,loop:!0,muted:!0,playsInline:!0,alt:"A showreel showing clips from different productions."}),d.jsx(yg,{children:d.jsxs(xg,{children:[d.jsx("h3",{children:"Cinematographer"}),d.jsx("p",{children:"Member of fsf Föreningen Severiges Filmfotografer (The Association of Swedish Film Cinematographers). Working in Narrative, Commercials, Music Videos and Still Photography."}),d.jsx(wg,{children:d.jsx(Ag,{})})]})})]})}const kg="/portfolio/assets/conceptReel-4e8f05ad.mp4",Cg=x.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 0%;
  aspect-ratio: 5 / 4;
  font-size: 1.2rem;
  overflow: hidden;

  @media screen and (max-width: 1225px) {
    height: 600px;
  }

  @media screen and (max-width: 478px) {
    height: 480px;
  }
`,Eg=x.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: left;
  object-fit: cover;
`,jg=x.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000042;
`,Pg=x.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: left;
  width: 90%;
  height: 100%;
  padding-left: 40px;

  @media screen and (max-width: 960px) {
    width: 90%;
  }

  @media screen and (max-width: 478px) {
    padding-left: 20px;
  }
`,Ig=x.div`
  margin-top: auto;
  padding-bottom: 20px;
`;function Ng(e){const t=C.useRef(null);return C.useEffect(()=>{const n=setTimeout(()=>{t.current&&t.current.play()},6e3);return()=>clearTimeout(n)},[]),d.jsxs(Cg,{children:[d.jsx(Eg,{ref:t,src:kg,loop:!0,muted:!0,playsInline:!0,alt:"A video showing animated AI images made for TV concepts."}),d.jsx(jg,{children:d.jsxs(Pg,{children:[d.jsx("h3",{children:"Writer. Concept Developer"}),d.jsx("p",{children:"As a writer and concept developer, I have had concepts optioned, and I have been commissioned to write concepts based on briefs provided by TV channels and streaming services."}),d.jsx(Ig,{children:d.jsx("p",{children:"I have found AI tools such as Midjourney, Runway, and Photoshop to be invaluable tools, enhancing my ability to pitch and develop unique projects."})})]})})]})}const Og="/portfolio/assets/uxuiReel-e01a0e6b.mp4",Rg=x.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  padding-bottom: 10px;
  color: #e437e2;

  
`,zg=x.div`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1); 
    color: #9804e2;; 
  }

  @media (max-width: 960px) {
    &:hover {
      transform: none; 
      color: inherit; 
    }
  }
`,Bg=x.p`
  color: white;
  font-size: 20px;
  font-weight: 600;
`,Tg=({onClick:e})=>{const t=()=>{e()};return d.jsxs(Rg,{children:[d.jsx(zg,{children:d.jsx(Ls,{to:"/casestudies",children:d.jsx(nr,{onClick:t,size:80})})}),d.jsx(Bg,{children:"See Case Studies"})]})},Lg=x.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-width: 100%;
  aspect-ratio: 5 / 4;

  font-size: 1.2rem;
  overflow: hidden;

  @media screen and (max-width: 1225px) {
    height: 600px;
  }

  @media screen and (max-width: 478px) {
    height: 480px;
  }

  @media screen and (max-width: 767px) {
  }
`,Mg=x.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
`,Fg=x.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #000000a0;
`,Dg=x.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 90%;
  height: 100%;
  padding-left: 40px;

  @media screen and (max-width: 478px) {
    padding-left: 20px;
  }
`,Wg=x.div`
  margin-top: auto;
`;function Vg(e){return d.jsxs(Lg,{children:[d.jsx(Mg,{src:Og,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"Design frames changing randomly "}),d.jsx(Fg,{children:d.jsxs(Dg,{children:[d.jsx("h3",{children:"UX / UI Designer"}),d.jsx("p",{children:"My unique experience enhances visual storytelling and user engagement, creating seamless and captivating interactions."}),d.jsx(Wg,{children:d.jsx(Tg,{})})]})})]})}const Gg=x.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  padding-bottom: 10px;
  color: #e437e2;
`,Ug=x.div`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1); 
    color: #9804e2;; 
  }

  @media (max-width: 960px) {
    &:hover {
      transform: none; 
      color: inherit; 
    }
  }
`,$g=x.p`
  color: #000000;
  font-size: 20px;
  font-weight: 600;
`,_g=({onClick:e})=>d.jsxs(Gg,{children:[d.jsx(Ug,{children:d.jsx("a",{href:"https://github.com/PaulEvans78",target:"_blank",rel:"noopener noreferrer",children:d.jsx(nr,{onClick:e,size:80})})}),d.jsx($g,{children:"Go to GitHub"})]}),Yg="data:image/avif;base64,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",Qg="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAGNbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAsaWxvYwAAAABEAAACAAEAAAABAAADiAAAAfAAAgAAAAEAAAG1AAAB0wAAAEJpaW5mAAAAAAACAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAAAaaW5mZQIAAAAAAgAAYXYwMUFscGhhAAAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAAw2lwcnAAAACdaXBjbwAAABRpc3BlAAAAAAAAAHgAAAB4AAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQBBYYHAAADy21kYXQSAAoGGBm792FQMsYDEgAKKFDYAsLyjFo30pTtGU3AprQDWuPWfiKO+UiJ6EzD+II/WS4l4BjmY2ofsD4UVg0FduFHPfdGebqmDbZogjz8NVmGLNmvd1wZBili3DkP5CI2o5pZTYFM4gKz8agxQATWZ1TlrNqXta5vvfgPNjGiIZtDUOGwrXNnHLDVjvkLfxMBwqbR0m2IbPrNONVikzkKkyvUc28tZ0OyUJpViZEa6JafpNNpkcjPfAqWweGQn/GcVnzk0Yoqyx10vZ8PizT1YVGcXlyZK/CQWXX1FhfNvTy5B24MWdf7MYW1yiLPyoN770KqUQhYQ4qRESByRLLmnrwEp5hckW1jCOGDkP0LY/ntYGOUyA5bLZqmNySV9t5XOWdZ4GdE+R8FXeS1rBb0B22SeIQg1USJH0KWoUcLH2qF8BXOV/ZSmatXYza1poj526IoyW+Dh7DTvUka0T/SSTrr4EWAIEO7rbAjp4/wR7gEy3QOsWMd7tPNE0tAbaJj3XVDYfXVQiTrmT9N57UyC0p+sSo9LNlVQ9f83M9WtrTbCdfKSccpekK4r/kSVCw09VdOtqfRt8xeT/Ktw3MRZIN2BQi7zkUx8XtpTYEi88rSMhIACgkYGbv3YIEBA0Iy4ANEgACiiihQ1/8mS+0VYnR6q4fJskn/zmz5r8/HO5RC/jcpiT7EXgL7nkn1z3wNWGtgLDEtWNwmPHhYKeugM5Qo0tp0EfAf4j3dOIJc8xkYorcoGN9MkydGBjENigCMQaXlYSXwkN070NiXYlB4ejGnMubTT8WLIWAbiS0EttIlksRTP0XNGN3mRVxR52JrG7VnTo2JXBQf0edMgT7qZtcAmCm7R+YX21UGxCrtNNWyv2vXC8EzRhHwjHaQBaTIc5wf/quoIkhCrJDKkLUWjVdkg6zy11aYNP8qwVMoGr0Fjm+qkqpGDa+iDYUqrRafPaZob8256SRAguMSThE+ks7O0ONlOFENmYyuAsuXbV1oni9V8AH0be/2sXschwRldONXLFzd24TiflNcG96KQ50n9/lAWz8JQwXpIhZkCfjnn////hk7J0GInAd03cB+TSFkV4iNo68ldi91rtW9YbMkMDzm/gnBauTH7fEaUrKs/X+hgaO45zjMNMko+4tM5vRVcakZfbISHhY/O4ul7PXExhgHNvN3ildIQ+whdE57JqjcorGtGkh8cVXVSGocklKhtQZw/ZyMEl5HxqimrgpWe26RkJCJ82t6vySxwJNWgq26QWi///PIQydTjAZ1ZTA=",Hg="data:image/avif;base64,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",Xg="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAGNbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAsaWxvYwAAAABEAAACAAEAAAABAAAFagAAAPwAAgAAAAEAAAG1AAADtQAAAEJpaW5mAAAAAAACAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAAAaaW5mZQIAAAAAAgAAYXYwMUFscGhhAAAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAAw2lwcnAAAACdaXBjbwAAABRpc3BlAAAAAAAAAHgAAAB4AAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQBBYYHAAAEuW1kYXQSAAoGGBm792FQMqgHEgAKKFDYAsLyjFo30pl+nZ9BvMNBKn7qV+2v6RMiaHj3SzcTI9oQAzttJU2gC9mggI0KPOwABkALZ+jIYb/Dw0JR6d09BAI1o3b3Rey0PMG1mthHRISSEmCaWoxLN9j8TSuxZRrQAzMFaYtE0SH74iBwklbPIFZpcwOdbAAvW9JIg0hPERziF9QWcrseIk9uZkFV+Ll/On12KGuKXQ9sS89n21C7vkEWfP/hhG/HLUsgujdYZcjEmK3uanVcEhvZV2xcUBdgEceS686U7XTAFHRn3/ZZSsR9KpHEVpsaUb8GgChhWQzeVZbsU4GPXqo78K6QUDzut0nRbnRHBG3nNPuYqAXuS6DhPMpT6+OaCD+ixjIO421UIxdwU4JaaT8pEBYENqTp9u1OFMUxPtUWfcmbzXnC2iXFCQ69+u31CwSbmUFveJelxMKFIiQE5XAKJPdYChTK6NfbXFxgTYzxRCktsUJekf33EXBynPn6bpfb64KdCWLgRRiavdIQzRSKk5MSEdxvghOoaN9vYdpKqZr9AeAZ8feW4Ao+sthTyHhFlVBTcTX/t5SZV86YOWgEVqBRTy8RX2WIShhSrWmSZzD4ZG3UI/t2RaAOHXOGnVdXUBGFXN8o0/PCBiFmC6Qn/O6Vi8soZsTyRIu+fFqX5URVTKO82hFXv2q7L0Jx48WktXkAd6I/Gp+uZvAjCfM8JyMmWN99q3WcjJmQ7on/OjHroP+nWiPkPbrSCDgWjHtk9b3CEWkvbrCPGRVaKLB6xFTtAhESwlFheZ6QiLEy9+Xd15M+3WzHYeuF4wo8e5ZepHHVIHk1MBmg/ZzYLm8F3ZOdGkEMetYEyZqBClVhm3hLdNBnCNBAWKBPGAcsnPyeN/aFAIlSdh96rYT1PVQUVe5+Wv3nSipQHaomYQ6bgZNUpL9RRUk1FgXCfC4pIaw+zzJz/NZBp06tJ6xYPoAlO99ZmSmnwO9TwDq7etW0W18yMCakuAQwNuZI3JoxsrHpU75yTqHo5ASc+rQUUJ9ns/AjKGkEp4yT08o5RaixBKD6SZWjuqc+CItkS0OBF7X5RqMku45ntrihJbEmYYo9RrYV+/9QD2qimp2rzepK8qCJLzYN+BaBzVLE9W5jW0MT50v/W8TavPx3ix2qKiopYvdm5LGD8QwdO4YBE49CfEib7ER9NI/dFCCdi7eUq2MdOoFEH6DTwQdB3lI1or3Z/FeuGxt82OUA8L1ILl+HulxgoJCtpLmeEgAKCRgZu/dggQEDQjLsARIAAooooUDX/y/7xLAkY42FtXZZkdu9QXvDH3QQXKZZvzym5yBsJ6gRzxbMZvxzI14zU3ctyMtJ4iNiqcOcoHAD1ExUsbK3/s6pBF0hLYYC1CdvnCcaLj+SFjymYNhYWWasDdP1bz+DEqF/TwmWtSNimZ9dSa5hSnzlB22X0lpiA1FT6Q4ab7dqifch59kj/Ai6kry6VXGhJcCa9U4is3c5bbT50h/oGDRf1dri3KZ+21hqt5X1DKgg5oaYcAFkM7J6wAoz/gcztxgsOkaYF9acnpTP2REgGHp05qfxbMj0gl8F9je+1IVZnW4c",Zg="data:image/avif;base64,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",bg="data:image/avif;base64,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",Kg="data:image/avif;base64,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",Jg="data:image/avif;base64,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",qg=x.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-width: 100%;
  aspect-ratio: 5 / 4;
  font-size: 1.2rem;
  overflow: hidden;

  @media screen and (max-width: 1225px) {
    height: 600px;
  }

  @media screen and (max-width: 478px) {
    height: 480px;
  }
`,e1=x.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 40px;
`,t1=x.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 85%;
  height: 100%;
  padding-left: 40px;
  color: black;

  @media screen and (max-width: 960px) {
    width: 90%;
  }

  @media screen and (max-width: 478px) {
    padding-left: 20px;
    height: 500px;
  }
`,n1=x.div`
  display: grid;
  row-gap: 16px;
  row-gap: 40px;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 30% 30% 30%;

  padding-left: 60px;
`,Bt=x.img`
  width: 50%;
  height: auto;
  @media screen and (max-width: 478px) {
    width: 40%;
  }
`,r1=x.div`
  margin-top: auto;
`;function i1(){return d.jsxs(qg,{children:[d.jsx(e1,{children:d.jsxs(n1,{children:[d.jsx(Bt,{src:Yg,alt:"React Logo."}),d.jsx(Bt,{src:Qg,alt:"Webflow Logo."}),d.jsx(Bt,{src:Hg,alt:"Figma Logo."}),d.jsx(Bt,{src:Xg,alt:"GitHub Logo."}),d.jsx(Bt,{src:Zg,alt:"HTML Logo."}),d.jsx(Bt,{src:bg,alt:"CSS Logo."}),d.jsx(Bt,{src:Kg,alt:"Javascript Logo."}),d.jsx(Bt,{src:Jg,alt:"Photoshop Logo."})]})}),d.jsxs(t1,{children:[d.jsx("h3",{children:"Frontend Dev"}),d.jsx("p",{children:"With a solid understanding of HTML, CSS, JavaScript, and React, I have created visually appealing and user-friendly interfaces for various clients."}),d.jsx(r1,{children:d.jsx(_g,{})})]})]})}const o1="/portfolio/assets/lipusplus_brand_film_hammarby-2024_short-0c3de834.mp4",l1=x.div`
width: 200px;
display: flex;
flex-direction: column;
align-items: flex-start;
padding-top: 30px;
color: #e437e2;

@media screen and (max-width: 478px) {
    align-items: center;
  }

`,a1=x.div`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1); 
    color: #9804e2;; 
  }

  @media (max-width: 960px) {
    &:hover {
      transform: none; 
      color: inherit; 
    }
  }
`,s1=x.p`
color: white;
font-size: 20px;
  font-weight: 600;
`,u1=({onClick:e})=>d.jsxs(l1,{children:[d.jsx(a1,{children:d.jsx(rp,{onClick:e,size:80})}),d.jsx(s1,{children:"Play Film"})]}),c1=x.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: #d5d5d5;

  @media screen and (max-width: 478px) {
    align-items: center;
  }
`,d1=x.div`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1); 
    color: #989898;; 
  }

  @media (max-width: 960px) {
    &:hover {
      transform: none; 
      color: inherit; 
    }
  }
`,f1=x.p`
  color: white;
  font-size: 20px;
  font-weight: 600;
`,p1=({onClick:e})=>d.jsxs(c1,{children:[d.jsx(d1,{children:d.jsx(nr,{onClick:()=>setModalOpen(!0),size:80})}),d.jsx(f1,{children:"See Case Study"})]}),h1="/portfolio/assets/lipusPlusLogoWhite-b2e2b769.avif",m1="/portfolio/assets/lipusplus_brand_film_hammarby-2024-c0930dc4.mp4",A1=gn`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,g1=x.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  animation: ${A1} 0.5s ease-out;
`,v1=x.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #171717;
`,y1=x.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 3rem;
  color: #ffffff;
  cursor: pointer;
  z-index: 100;
`,x1=x.div`
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  display: flex;
  justify-content: center;
  align-items: center;
`,w1=x.video`
  width: 100%; /* Full width */
  height: auto; /* Maintain aspect ratio */
`,S1=({isOpen:e,onClose:t})=>e?d.jsx(g1,{children:d.jsxs(v1,{children:[d.jsx(y1,{onClick:t,children:"×"}),d.jsx(x1,{children:d.jsx(w1,{controls:!0,autoPlay:!0,children:d.jsx("source",{src:m1,type:"video/mp4"})})})]})}):null,k1=x.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`,C1=x.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 1;
`,E1=x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.32);
  z-index: 2;
`,j1=x.div`
  width: 60%;
  height: 500px;
  padding-top: 280px;
  padding-left: 60px;
  padding-bottom: 180px;
  display: flex;
  flex-direction: column;
  z-index: 3;

  @media screen and (max-width: 960px) {
    padding-top: 200px;
    padding-bottom: 200px;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
    padding-top: 240px;
    padding-bottom: 240px;
  }

  @media screen and (max-width: 478px) {
    width: 90%;
    height: 650px;
    padding-left: 20px;
    padding-top: 180px;
    padding-bottom: 100px;
  }

  @media screen and (max-width: 320px) {
    padding-top: 120px;
    padding-bottom: 80px;
  }
`,P1=x.div`
  display: flex;
  padding-top: 30px;
  margin-bottom: 30px;
`,I1=x.img`
  width: 30%;
  height: auto;

  @media screen and (max-width: 478px) {
    width: 50%;
  }
`,N1=x.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 20px;

  @media screen and (max-width: 478px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`,O1=({scrollToEvent:e})=>{const t=C.useRef(null),[n,r]=C.useState(!1);return C.useEffect(()=>{const i=setTimeout(()=>{t.current&&t.current.play()},1e3);return()=>clearTimeout(i)},[]),d.jsxs(k1,{children:[d.jsx(C1,{ref:t,src:o1,loop:!0,muted:!0,playsInline:!0,alt:"Background video"}),d.jsx(E1,{}),d.jsxs(j1,{children:[d.jsx(P1,{children:d.jsx(I1,{src:h1,alt:"Viaplays logo"})}),d.jsx("h4",{children:"Meet the Physio of Hammarby Handball"}),d.jsx("p",{children:"Brand film highlighting LipusPlus's partnership with Hammarby Handball, showcasing through testimonals the effectiveness of the modality."}),d.jsxs(N1,{children:[d.jsx(u1,{onClick:()=>r(!0)}),d.jsx(p1,{onClick:e})]})]}),d.jsx(S1,{isOpen:n,onClose:()=>r(!1)})]})},R1="/portfolio/assets/lipusPlusLogo-022851c3.avif",ip="/portfolio/assets/lipusHeroImg-44921e74.avif",z1=x.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: #e437e2;
`,B1=x.div`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1); 
    color: #9804e2;; 
  }

  @media (max-width: 960px) {
    &:hover {
      transform: none; 
      color: inherit; 
    }
  }
`,T1=x.p`
  color: #040404;
  font-size: 20px;
  font-weight: 600;
  
`,op=({onClick:e})=>d.jsxs(z1,{children:[d.jsx(B1,{children:d.jsx(nr,{onClick:()=>setModalOpen(!0),size:80})}),d.jsx(T1,{children:"See Case Study"})]}),L1=gn`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,M1=x.section`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Context Image";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`,F1=x.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 80px;
  color: #2c2c2c;

  @media screen and (max-width: 767px) {
    padding-left: 60px;
  }

  @media screen and (max-width: 478px) {
    padding-top: 30px;
    padding-left: 40px;
  }

  @media screen and (max-width: 360px) {
    width: 90%;
    padding-top: 15px;
    padding-left: 20px;
  }
`,D1=x.div`
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
`,W1=x.img`
  width: 40%;
  height: auto;
`,V1=x.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  font-size: 14px;
  z-index: 2;
  /* margin-top: ; */
`,G1=x.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,U1=x.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({isInView:e})=>e&&qn`
      animation: ${L1} 1s ease-out forwards;
    `}
`,lp=()=>{const e=C.useRef(null),[t,n]=C.useState(!1);return C.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),d.jsxs(M1,{children:[d.jsxs(F1,{children:[d.jsx("h4",{children:"UX Case study"}),d.jsx(D1,{children:d.jsx(W1,{src:R1,alt:"The logo for LipuspLus"})}),d.jsx("p",{children:"LipusPlus aims to attract physiotherapists and elite athletes to its webinars on the Return to Play concept. An enticing and informative landing page is needed to generate leads for these webinars."}),d.jsx(op,{})]}),d.jsxs(G1,{children:[d.jsx(V1,{children:"Photo by Peder Rotkirch."}),d.jsx(U1,{ref:e,src:ip,alt:"A hammarby handball player in green and white stripes holds a ball.",isInView:t})]})]})},dc="/portfolio/assets/vikings-23b289a3.mp4",$1="/portfolio/assets/viaplayLogo-c60ae164.avif",_1=x.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: #d5d5d5;

  @media screen and (max-width: 478px) {
    align-items: center;
  }
`,Y1=x.div`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1); 
    color: #989898;; 
  }

  @media (max-width: 960px) {
    &:hover {
      transform: none; 
      color: inherit; 
    }
  }
`,Q1=x.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`,H1=({onClick:e})=>d.jsxs(_1,{children:[d.jsx(Y1,{children:d.jsx("a",{href:"https://paulevans-dop.com/",target:"_blank",rel:"noopener noreferrer",children:d.jsx(nr,{onClick:e,size:80})})}),d.jsx(Q1,{children:"See Cinematography Reel"})]}),X1=x.div`
width: 200px;
display: flex;
flex-direction: column;
align-items: flex-start;
padding-top: 30px;
color: #e437e2;

@media screen and (max-width: 478px) {
    align-items: center;
  }

`,Z1=x.div`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1); 
    color: #9804e2;; 
  }

  @media (max-width: 960px) {
    &:hover {
      transform: none; 
      color: inherit; 
    }
  }
`,b1=x.p`
color: white;
font-size: 20px;
  font-weight: 600;
`,K1=({onClick:e})=>d.jsxs(X1,{children:[d.jsx(Z1,{children:d.jsx(rp,{onClick:e,size:80})}),d.jsx(b1,{children:"Play Trailer"})]}),J1=gn`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,q1=x.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,ev=x.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 1;
`,tv=x.div`
  position: relative;
  width: 60%;
  height: 500px;
  padding-top: 200px;
  padding-left: 60px;
  padding-bottom: 180px;
  display: flex;
  flex-direction: column;
  z-index: 3;

  @media screen and (max-width: 960px) {
    height: 600px;
    padding-top: 120px;
    padding-bottom: 140px;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
    padding-top: 140px;
  }

  @media screen and (max-width: 478px) {
    width: 90%;
    padding-left: 20px;
    padding-bottom: 120px;
  }

  @media screen and (max-width: 320px) {
    height: 750px;
    padding-top: 100px;
    padding-bottom: 80px;
  }
`,nv=x.div`
  display: flex;
  padding-top: 30px;
  margin-bottom: 30px;
`,rv=x.img`
  width: 30%;
  height: auto;
`,iv=x.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media screen and (max-width: 478px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`,ov=x.div`
  opacity: 0;
  animation: ${J1} 1s ease-out 0.5s forwards;
`,lv=x.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`,av=x.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #171717;
`,sv=x.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 3rem;
  color: #ffffff;
  cursor: pointer;
  z-index: 100;
`,uv=x.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,cv=x.video`
  width: 100%;
  height: auto;
`,dv=({scrollToEvent:e})=>{const t=C.useRef(null),[n,r]=C.useState(!1);return C.useEffect(()=>{const i=setTimeout(()=>{t.current&&t.current.play()},1e3);return()=>clearTimeout(i)},[]),d.jsxs(q1,{children:[d.jsx(ev,{ref:t,src:dc,loop:!0,muted:!0,playsInline:!0,alt:"Background video"}),d.jsxs(tv,{children:[d.jsx(ov,{}),d.jsx(nv,{children:d.jsx(rv,{src:$1,alt:"Viaplay logo"})}),d.jsx("h4",{children:"The Last Journey of the Vikings"}),d.jsx("p",{children:"In collaboration with director James Valesquez, Mopar Studios and Viaplay, I served as the series cinematographer. The production took place in both Sweden and Ireland."}),d.jsxs(iv,{children:[d.jsx(K1,{onClick:()=>r(!0)}),d.jsx(H1,{})]})]}),n&&d.jsx(lv,{children:d.jsxs(av,{children:[d.jsx(sv,{onClick:()=>r(!1),children:"×"}),d.jsx(uv,{children:d.jsx(cv,{controls:!0,autoPlay:!0,children:d.jsx("source",{src:dc,type:"video/mp4"})})})]})})]})},fv="data:image/avif;base64,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",pv="/portfolio/assets/unsplash_gvZSZfQomPA-7cf6c728.avif",hv=gn`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,mv=x.section`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Context Image";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`,Av=x.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 80px;
  color: #2c2c2c;

  @media screen and (max-width: 767px) {
    padding-left: 60px;
  }

  @media screen and (max-width: 478px) {
    padding-top: 30px;
    padding-left: 40px;
  }

  @media screen and (max-width: 360px) {
    width: 90%;
    padding-top: 15px;
    padding-left: 20px;
  }
`,gv=x.div`
  display: flex;
  padding-bottom: 30px;
  padding-top: 30px;
`,vv=x.img`
  width: 40%;
  height: auto;
`,yv=x.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  font-size: 14px;
  z-index: 2;
`,xv=x.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,wv=x.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({isInView:e})=>e&&qn`
      animation: ${hv} 1s ease-out forwards;
    `}
`,ap=()=>{const e=C.useRef(null),[t,n]=C.useState(!1);return C.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),d.jsxs(mv,{children:[d.jsxs(Av,{children:[d.jsx("h4",{children:"UX Case study"}),d.jsx(gv,{children:d.jsx(vv,{src:fv,alt:"The logo for Ebie"})}),d.jsx("p",{children:"Create and implement a completely new and user-friendly function within the platform that makes it easy for property owners to apply for and manage group insurance. Simplify the application and the overview for insurance status."}),d.jsx(op,{})]}),d.jsxs(xv,{children:[d.jsx(yv,{children:"Photo Unsplash."}),d.jsx(wv,{ref:e,src:pv,alt:"A view of Stockholm city with NK in the distance.",isInView:t})]})]})},Sv="/portfolio/assets/hidden-7e893598.avif",kv="/portfolio/assets/BESTSHORTFILMSPECIALAWARD-EasternEuropeFilmFestival-December2022-489d2b56.avif",Cv=x.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`,Ev=x.img`
  position: absolute;
  width: 100%;
  height: 100%;
  align-self: flex-start;
  object-fit: cover;
  z-index: 2;
`,jv=x.div`
  width: 50%;
  height: 500px;
  padding-top: 280px;
  padding-left: 60px;
  padding-bottom: 180px;
  display: flex;
  flex-direction: column;
  z-index: 99;

  @media screen and (max-width: 960px) {
    padding-top: 280px;
    padding-bottom: 100px;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
  }

  @media screen and (max-width: 478px) {
    width: 90%;
    padding-top: 140px;
    padding-left: 20px;
  }

  @media screen and (max-width: 320px) {
    width: 90%;
    padding-top: 15px;
    padding-left: 20px;
  }
`,Pv=x.div`
  display: flex;
  padding-top: 30px;
`,Iv=x.img`
  width: 50%;
  height: auto;
`,Nv=x.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  font-size: 14px;
  z-index: 3;
`,Ov=({scrollToEvent:e})=>d.jsxs(Cv,{children:[d.jsx(Nv,{children:"Photography by Nisse Virgin."}),d.jsx(Ev,{src:Sv,alt:"A short film poster. A Man sits with his back to camera contemplating"}),d.jsxs(jv,{children:[d.jsx("h4",{children:"Hidden"}),d.jsx("p",{children:"My passion for storytelling led me to create a short film, which I directed, produced, and wrote. This film went on to win the Special award for Best Short Film at the Eastern European Short Film Festival."}),d.jsx(Pv,{children:d.jsx(Iv,{src:kv,alt:"A wreath for Winner Eastern European Short Film Festival "})})]})]}),Rv=x.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
`,fc=x.section`
  max-width: 100%;
  min-width: 100%;
  height: auto;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  row-gap: 16px;
  column-gap: 16px;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  }
`,zv=()=>{const e=C.useRef(null),t=()=>{e.current&&e.current.scrollIntoView({behavior:"smooth"})};return d.jsxs(Rv,{children:[d.jsx(eg,{}),d.jsxs(fc,{children:[d.jsx(Vg,{}),d.jsx(i1,{})]}),d.jsx(O1,{scrollToEvent:t}),d.jsxs(fc,{children:[d.jsx(Sg,{}),d.jsx(Ng,{})]}),d.jsx("div",{ref:e}),d.jsx(lp,{}),d.jsx(dv,{}),d.jsx(ap,{}),d.jsx(Ov,{})]})},Bv=x.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
  margin-top: 150px;
`,Tv=()=>(C.useRef(null),d.jsxs(Bv,{children:[d.jsx(lp,{}),d.jsx(ap,{})]})),Lv=gn`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,Mv=x.section`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Image Context";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`,Fv=x.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 80px;
  color: #2c2c2c;

  @media screen and (max-width: 767px) {
    padding-left: 60px;
  }

  @media screen and (max-width: 478px) {
    padding-top: 30px;
    padding-left: 40px;
  }

  @media screen and (max-width: 360px) {
    width: 90%;
    padding-top: 15px;
    padding-left: 20px;
  }
`,Dv=x.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,Wv=x.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({isInView:e})=>e&&qn`
      animation: ${Lv} 1s ease-out forwards;
    `}
`,Vv=()=>{const e=C.useRef(null),[t,n]=C.useState(!1);return C.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),d.jsxs(Mv,{children:[d.jsxs(Fv,{children:[d.jsx("h3",{children:"About me "}),d.jsx("p",{children:"“Hi, I’m Paul! I have worked as a creative for over 20 years. In need of a platform to showcase my work, I taught myself how to code. In 2020, I decided to study web design to gain structure and further insight into the platforms and methods used. My interests extend into AI, particularly image and video generation and recently started developing tools that incorporate AI to aid in my creative work. I have a calm and methodical approach to life, which enables me to navigate challenges with ease. My strong willpower and determination help me stay focused on the goals, even during difficult times."})]}),d.jsx(Dv,{children:d.jsx(Wv,{ref:e,src:ip,alt:"A hammarby handball player in green and white stripes holds a ball.",isInView:t})})]})},Gv="/portfolio/assets/camper-588e3c53.avif",Uv=gn`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,$v=x.section`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Context Image";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`,_v=x.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 80px;
  color: #2c2c2c;

  @media screen and (max-width: 767px) {
    padding-left: 60px;
  }

  @media screen and (max-width: 478px) {
    padding-top: 30px;
    padding-left: 40px;
  }

  @media screen and (max-width: 360px) {
    width: 90%;
    padding-top: 15px;
    padding-left: 20px;
  }
`,Yv=x.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,Qv=x.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({isInView:e})=>e&&qn`
      animation: ${Uv} 1s ease-out forwards;
    `}
`,Hv=()=>{const e=C.useRef(null),[t,n]=C.useState(!1);return C.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),d.jsxs($v,{children:[d.jsxs(_v,{children:[d.jsx("h3",{children:"For fun "}),d.jsx("p",{children:"Surfing and traveling are my two biggest passions. When I'm not paddling out into the sea I like to work out at the gym or swim in the lake. I also cherish the time I spend with my family, friends cooking and watching movies and tv shows."})]}),d.jsx(Yv,{children:d.jsx(Qv,{ref:e,src:Gv,alt:"A surf board propped up against a mobilehome",isInView:t})})]})},Xv=x.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
  margin-top: 150px;
`;x.section`
  max-width: 100%;
  min-width: 100%;
  height: auto;

  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  row-gap: 16px;
  column-gap: 16px;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  }
`;const Zv=()=>(C.useRef(null),d.jsxs(Xv,{children:[d.jsx(Vv,{}),d.jsx(Hv,{})]}));x.div`
  overflowy: scroll;
  height: 2500px;
`;const bv=x.div`
  position: fixed;
  width: 100%;
  left: 94%;
  bottom: 40px;
  height: 50px;
  font-size: 4rem;
  z-index: 99;
  cursor: pointer;
  color: #e437e2;

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
`,Kv=x.div`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1); 
    color: #9804e2;; 
  }

  @media (max-width: 960px) {
    &:hover {
      transform: none; 
      color: inherit; 
    }
  }
`,Jv=()=>{const[e,t]=C.useState(!1),n=()=>{const i=document.documentElement.scrollTop;i>300?t(!0):i<=300&&t(!1)},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return window.addEventListener("scroll",n),d.jsx(bv,{children:d.jsx(Kv,{children:d.jsx(fg,{onClick:r,style:{display:e?"inline":"none",boxShadow:"10px 18px 40px #3e3e3e",borderRadius:"50%"}})})})},qv=[{id:1,href:"https://www.linkedin.com/in/paul-evans-3a74605/",icon:d.jsx(dg,{}),des:"LinkedIn"},{id:2,href:"https://www.instagram.com/paulevanscreative/",icon:d.jsx(cg,{}),des:"Instagram"},{id:3,href:"https://www.imdb.com/name/nm3171341/?ref_=ttfc_fc_cr",icon:d.jsx(ug,{}),des:"Imdb"}],ey=x.footer`
  background-color: #171717;
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
  color: whitesmoke;

  @media screen and (max-width: 767px) {
    background-image: none;
    
    flex-direction: column;
    align-items: center;
  }
`,ty=x.div`
  display: flex;
  flex-direction: column;
  padding-top: 4em;

  @media screen and (max-width: 767px) {
    text-align: center;

    margin-bottom: 3em;
    padding-top: 0em;
  }
`,ny=x.p`
  display: flex;
  flex-direction: column;
  color: whitesmoke;

  margin-bottom: -0.5em;
  text-shadow: 2px 2px 4px black;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 767px) {
    margin-left: 0em;

    &:hover {
      text-decoration: none;
    }
  }
`,ry=x.p`
  display: flex;
  flex-direction: column;
  color: whitesmoke;

  text-shadow: 2px 2px 4px black;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 767px) {
    margin-left: 0em;

    &:hover {
      text-decoration: none;
    }
  }
`,iy=x.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  justify-items: center;
  margin-right: 2em;
  padding-top: 4em;

  @media screen and (max-width: 960px) {
    padding-top: 0em;
  }

  @media screen and (max-width: 767px) {
    margin-right: 1em;
  }

  @media screen and (max-width: 320px) {
    flex-direction: column;
    margin-right: 0em;
  }
`,oy=x.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 1em 0em 2em;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 767px) {
    margin: 0em 2em 0em 2em;

    &:hover {
      text-decoration: none;
    }
  }
`,ly=x.p`
  display: flex;
  flex-direction: column;
  align-content: center;
  font-size: 16px;
  line-height: 24px;
  color: whitesmoke;
  text-align: center;
  margin-top: 0.5em;
`,ay=x.div`
  display: flex;
  padding-left: 2em;

  @media screen and (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }

  @media screen and (max-width: 767px) {
    padding-left: 0;
    margin-bottom: 20px;
  }
`,sy=x.img`
  text-align: center;
  width: 180px;
  margin-top: 4em;

  @media screen and (max-width: 960px) {
    width: 120px;
  }
`,uy=ge.forwardRef((e,t)=>d.jsxs(ey,{ref:t,children:[d.jsx(ay,{children:d.jsx(sy,{src:ep,alt:"the letters P and E merged together to form the logo Paul Evans Creative"})}),d.jsxs(ty,{children:[d.jsx("p",{children:"Paul Evans. Copyright 2024."}),d.jsx(ny,{children:d.jsx("a",{href:"mailto:paul.evans.creative@gmail.com",children:"paul.evans.creative@gmail.com"})}),d.jsx(ry,{children:d.jsx("a",{href:"tel:+46739908858",children:"+46739908858"})})]}),d.jsx(cy,{})]})),cy=()=>d.jsx(iy,{children:d.jsx(Ia.Provider,{value:{size:"2em"},children:qv.map(e=>d.jsxs(oy,{href:e.href,children:[e.icon,d.jsx(ly,{children:e.des})]},e.id))})}),dy=()=>{const{pathname:e}=er();return C.useEffect(()=>{window.scrollTo(0,0)},[e]),null},fy=x.div`
  min-height: 100%;
  max-width: 100vw;
`,py=x.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: space-evenly;
`,hy=()=>{const e=C.useRef(null);return d.jsxs(B0,{children:[d.jsx(dy,{}),d.jsxs(fy,{children:[d.jsx(X0,{footerRef:e}),d.jsxs(py,{children:[d.jsxs(j0,{children:[d.jsx(Ti,{path:"/",element:d.jsx(zv,{})}),d.jsx(Ti,{path:"/casestudies",element:d.jsx(Tv,{})}),d.jsx(Ti,{path:"/about",element:d.jsx(Zv,{})})]}),d.jsx(uy,{ref:e})]}),d.jsx(Jv,{})]})]})};jl.createRoot(document.getElementById("root")).render(d.jsx(ge.StrictMode,{children:d.jsx(hy,{})}));
