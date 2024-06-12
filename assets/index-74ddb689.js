function fp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Ac(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gc={exports:{}},Ao={},vc={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=Symbol.for("react.element"),pp=Symbol.for("react.portal"),hp=Symbol.for("react.fragment"),mp=Symbol.for("react.strict_mode"),Ap=Symbol.for("react.profiler"),gp=Symbol.for("react.provider"),vp=Symbol.for("react.context"),yp=Symbol.for("react.forward_ref"),xp=Symbol.for("react.suspense"),wp=Symbol.for("react.memo"),Sp=Symbol.for("react.lazy"),Ws=Symbol.iterator;function Cp(e){return e===null||typeof e!="object"?null:(e=Ws&&e[Ws]||e["@@iterator"],typeof e=="function"?e:null)}var yc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xc=Object.assign,wc={};function tr(e,t,n){this.props=e,this.context=t,this.refs=wc,this.updater=n||yc}tr.prototype.isReactComponent={};tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sc(){}Sc.prototype=tr.prototype;function Ta(e,t,n){this.props=e,this.context=t,this.refs=wc,this.updater=n||yc}var La=Ta.prototype=new Sc;La.constructor=Ta;xc(La,tr.prototype);La.isPureReactComponent=!0;var Us=Array.isArray,Cc=Object.prototype.hasOwnProperty,Fa={current:null},kc={key:!0,ref:!0,__self:!0,__source:!0};function jc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Cc.call(t,r)&&!kc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:qr,type:e,key:o,ref:l,props:i,_owner:Fa.current}}function kp(e,t){return{$$typeof:qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ma(e){return typeof e=="object"&&e!==null&&e.$$typeof===qr}function jp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vs=/\/+/g;function nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jp(""+e.key):t.toString(36)}function Ei(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case qr:case pp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+nl(l,0):r,Us(i)?(n="",e!=null&&(n=e.replace(Vs,"$&/")+"/"),Ei(i,t,n,"",function(c){return c})):i!=null&&(Ma(i)&&(i=kp(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Vs,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Us(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+nl(o,s);l+=Ei(o,t,n,u,i)}else if(u=Cp(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+nl(o,s++),l+=Ei(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ai(e,t,n){if(e==null)return e;var r=[],i=0;return Ei(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Ep(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},Pi={transition:null},Pp={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:Pi,ReactCurrentOwner:Fa};function Ec(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:ai,forEach:function(e,t,n){ai(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ai(e,function(){t++}),t},toArray:function(e){return ai(e,function(t){return t})||[]},only:function(e){if(!Ma(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=tr;V.Fragment=hp;V.Profiler=Ap;V.PureComponent=Ta;V.StrictMode=mp;V.Suspense=xp;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pp;V.act=Ec;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Fa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Cc.call(t,u)&&!kc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:qr,type:e.type,key:i,ref:o,props:r,_owner:l}};V.createContext=function(e){return e={$$typeof:vp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gp,_context:e},e.Consumer=e};V.createElement=jc;V.createFactory=function(e){var t=jc.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:yp,render:e}};V.isValidElement=Ma;V.lazy=function(e){return{$$typeof:Sp,_payload:{_status:-1,_result:e},_init:Ep}};V.memo=function(e,t){return{$$typeof:wp,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=Pi.transition;Pi.transition={};try{e()}finally{Pi.transition=t}};V.unstable_act=Ec;V.useCallback=function(e,t){return De.current.useCallback(e,t)};V.useContext=function(e){return De.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return De.current.useDeferredValue(e)};V.useEffect=function(e,t){return De.current.useEffect(e,t)};V.useId=function(){return De.current.useId()};V.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return De.current.useMemo(e,t)};V.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};V.useRef=function(e){return De.current.useRef(e)};V.useState=function(e){return De.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return De.current.useTransition()};V.version="18.3.1";vc.exports=V;var k=vc.exports;const ge=Ac(k),Ip=fp({__proto__:null,default:ge},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np=k,zp=Symbol.for("react.element"),Rp=Symbol.for("react.fragment"),Op=Object.prototype.hasOwnProperty,Bp=Np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tp={key:!0,ref:!0,__self:!0,__source:!0};function Pc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Op.call(t,r)&&!Tp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:zp,type:e,key:o,ref:l,props:i,_owner:Bp.current}}Ao.Fragment=Rp;Ao.jsx=Pc;Ao.jsxs=Pc;gc.exports=Ao;var a=gc.exports,Rl={},Ic={exports:{}},qe={},Nc={exports:{}},zc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,F){var D=P.length;P.push(F);e:for(;0<D;){var $=D-1>>>1,I=P[$];if(0<i(I,F))P[$]=F,P[D]=I,D=$;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var F=P[0],D=P.pop();if(D!==F){P[0]=D;e:for(var $=0,I=P.length,z=I>>>1;$<z;){var T=2*($+1)-1,G=P[T],y=T+1,Y=P[y];if(0>i(G,D))y<I&&0>i(Y,G)?(P[$]=Y,P[y]=D,$=y):(P[$]=G,P[T]=D,$=T);else if(y<I&&0>i(Y,D))P[$]=Y,P[y]=D,$=y;else break e}}return F}function i(P,F){var D=P.sortIndex-F.sortIndex;return D!==0?D:P.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],m=1,h=null,A=3,S=!1,w=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var F=n(c);F!==null;){if(F.callback===null)r(c);else if(F.startTime<=P)r(c),F.sortIndex=F.expirationTime,t(u,F);else break;F=n(c)}}function x(P){if(v=!1,p(P),!w)if(n(u)!==null)w=!0,nt(j);else{var F=n(c);F!==null&&xe(x,F.startTime-P)}}function j(P,F){w=!1,v&&(v=!1,f(B),B=-1),S=!0;var D=A;try{for(p(F),h=n(u);h!==null&&(!(h.expirationTime>F)||P&&!fe());){var $=h.callback;if(typeof $=="function"){h.callback=null,A=h.priorityLevel;var I=$(h.expirationTime<=F);F=e.unstable_now(),typeof I=="function"?h.callback=I:h===n(u)&&r(u),p(F)}else r(u);h=n(u)}if(h!==null)var z=!0;else{var T=n(c);T!==null&&xe(x,T.startTime-F),z=!1}return z}finally{h=null,A=D,S=!1}}var R=!1,O=null,B=-1,Q=5,M=-1;function fe(){return!(e.unstable_now()-M<Q)}function ue(){if(O!==null){var P=e.unstable_now();M=P;var F=!0;try{F=O(!0,P)}finally{F?me():(R=!1,O=null)}}else R=!1}var me;if(typeof d=="function")me=function(){d(ue)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,ye=Le.port2;Le.port1.onmessage=ue,me=function(){ye.postMessage(null)}}else me=function(){C(ue,0)};function nt(P){O=P,R||(R=!0,me())}function xe(P,F){B=C(function(){P(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,nt(j))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return A},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(P){switch(A){case 1:case 2:case 3:var F=3;break;default:F=A}var D=A;A=F;try{return P()}finally{A=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,F){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var D=A;A=P;try{return F()}finally{A=D}},e.unstable_scheduleCallback=function(P,F,D){var $=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?$+D:$):D=$,P){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=D+I,P={id:m++,callback:F,priorityLevel:P,startTime:D,expirationTime:I,sortIndex:-1},D>$?(P.sortIndex=D,t(c,P),n(u)===null&&P===n(c)&&(v?(f(B),B=-1):v=!0,xe(x,D-$))):(P.sortIndex=I,t(u,P),w||S||(w=!0,nt(j))),P},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(P){var F=A;return function(){var D=A;A=F;try{return P.apply(this,arguments)}finally{A=D}}}})(zc);Nc.exports=zc;var Lp=Nc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp=k,Je=Lp;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rc=new Set,Br={};function yn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(Br[e]=t,e=0;e<t.length;e++)Rc.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ol=Object.prototype.hasOwnProperty,Mp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qs={},Ys={};function Dp(e){return Ol.call(Ys,e)?!0:Ol.call(Qs,e)?!1:Mp.test(e)?Ys[e]=!0:(Qs[e]=!0,!1)}function Gp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wp(e,t,n,r){if(t===null||typeof t>"u"||Gp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ge(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new Ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Da=/[\-:]([a-z])/g;function Ga(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Da,Ga);Ne[t]=new Ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Da,Ga);Ne[t]=new Ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Da,Ga);Ne[t]=new Ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wa(e,t,n,r){var i=Ne.hasOwnProperty(t)?Ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wp(t,n,i,r)&&(n=null),r||i===null?Dp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tt=Fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,si=Symbol.for("react.element"),Pn=Symbol.for("react.portal"),In=Symbol.for("react.fragment"),Ua=Symbol.for("react.strict_mode"),Bl=Symbol.for("react.profiler"),Oc=Symbol.for("react.provider"),Bc=Symbol.for("react.context"),Va=Symbol.for("react.forward_ref"),Tl=Symbol.for("react.suspense"),Ll=Symbol.for("react.suspense_list"),Qa=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),Tc=Symbol.for("react.offscreen"),bs=Symbol.iterator;function ur(e){return e===null||typeof e!="object"?null:(e=bs&&e[bs]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,rl;function vr(e){if(rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rl=t&&t[1]||""}return`
`+rl+e}var il=!1;function ol(e,t){if(!e||il)return"";il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{il=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vr(e):""}function Up(e){switch(e.tag){case 5:return vr(e.type);case 16:return vr("Lazy");case 13:return vr("Suspense");case 19:return vr("SuspenseList");case 0:case 2:case 15:return e=ol(e.type,!1),e;case 11:return e=ol(e.type.render,!1),e;case 1:return e=ol(e.type,!0),e;default:return""}}function Fl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case In:return"Fragment";case Pn:return"Portal";case Bl:return"Profiler";case Ua:return"StrictMode";case Tl:return"Suspense";case Ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bc:return(e.displayName||"Context")+".Consumer";case Oc:return(e._context.displayName||"Context")+".Provider";case Va:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qa:return t=e.displayName||null,t!==null?t:Fl(e.type)||"Memo";case Dt:t=e._payload,e=e._init;try{return Fl(e(t))}catch{}}return null}function Vp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fl(t);case 8:return t===Ua?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qp(e){var t=Lc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ui(e){e._valueTracker||(e._valueTracker=Qp(e))}function Fc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Lc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ml(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Hs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=tn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Mc(e,t){t=t.checked,t!=null&&Wa(e,"checked",t,!1)}function Dl(e,t){Mc(e,t);var n=tn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gl(e,t.type,tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $s(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gl(e,t,n){(t!=="number"||Gi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yr=Array.isArray;function Wn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+tn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(yr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:tn(n)}}function Dc(e,t){var n=tn(t.value),r=tn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _s(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ul(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ci,Wc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ci=ci||document.createElement("div"),ci.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ci.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yp=["Webkit","ms","Moz","O"];Object.keys(Cr).forEach(function(e){Yp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cr[t]=Cr[e]})});function Uc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cr.hasOwnProperty(e)&&Cr[e]?(""+t).trim():t+"px"}function Vc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Uc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var bp=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vl(e,t){if(t){if(bp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Ql(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yl=null;function Ya(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bl=null,Un=null,Vn=null;function Zs(e){if(e=ni(e)){if(typeof bl!="function")throw Error(E(280));var t=e.stateNode;t&&(t=wo(t),bl(e.stateNode,e.type,t))}}function Qc(e){Un?Vn?Vn.push(e):Vn=[e]:Un=e}function Yc(){if(Un){var e=Un,t=Vn;if(Vn=Un=null,Zs(e),t)for(e=0;e<t.length;e++)Zs(t[e])}}function bc(e,t){return e(t)}function Hc(){}var ll=!1;function $c(e,t,n){if(ll)return e(t,n);ll=!0;try{return bc(e,t,n)}finally{ll=!1,(Un!==null||Vn!==null)&&(Hc(),Yc())}}function Lr(e,t){var n=e.stateNode;if(n===null)return null;var r=wo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Hl=!1;if(zt)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){Hl=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{Hl=!1}function Hp(e,t,n,r,i,o,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var kr=!1,Wi=null,Ui=!1,$l=null,$p={onError:function(e){kr=!0,Wi=e}};function Xp(e,t,n,r,i,o,l,s,u){kr=!1,Wi=null,Hp.apply($p,arguments)}function _p(e,t,n,r,i,o,l,s,u){if(Xp.apply(this,arguments),kr){if(kr){var c=Wi;kr=!1,Wi=null}else throw Error(E(198));Ui||(Ui=!0,$l=c)}}function xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ks(e){if(xn(e)!==e)throw Error(E(188))}function Zp(e){var t=e.alternate;if(!t){if(t=xn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ks(i),e;if(o===r)return Ks(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function _c(e){return e=Zp(e),e!==null?Zc(e):null}function Zc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zc(e);if(t!==null)return t;e=e.sibling}return null}var Kc=Je.unstable_scheduleCallback,Js=Je.unstable_cancelCallback,Kp=Je.unstable_shouldYield,Jp=Je.unstable_requestPaint,de=Je.unstable_now,qp=Je.unstable_getCurrentPriorityLevel,ba=Je.unstable_ImmediatePriority,Jc=Je.unstable_UserBlockingPriority,Vi=Je.unstable_NormalPriority,eh=Je.unstable_LowPriority,qc=Je.unstable_IdlePriority,go=null,St=null;function th(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(go,e,void 0,(e.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:ih,nh=Math.log,rh=Math.LN2;function ih(e){return e>>>=0,e===0?32:31-(nh(e)/rh|0)|0}var di=64,fi=4194304;function xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=xr(s):(o&=l,o!==0&&(r=xr(o)))}else l=n&~i,l!==0?r=xr(l):o!==0&&(r=xr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-At(t),i=1<<n,r|=e[n],t&=~i;return r}function oh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-At(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=oh(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Xl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ed(){var e=di;return di<<=1,!(di&4194240)&&(di=64),e}function al(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ei(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-At(t),e[t]=n}function ah(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-At(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ha(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-At(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var K=0;function td(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nd,$a,rd,id,od,_l=!1,pi=[],bt=null,Ht=null,$t=null,Fr=new Map,Mr=new Map,Wt=[],sh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qs(e,t){switch(e){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":Fr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(t.pointerId)}}function dr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ni(t),t!==null&&$a(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function uh(e,t,n,r,i){switch(t){case"focusin":return bt=dr(bt,e,t,n,r,i),!0;case"dragenter":return Ht=dr(Ht,e,t,n,r,i),!0;case"mouseover":return $t=dr($t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Fr.set(o,dr(Fr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Mr.set(o,dr(Mr.get(o)||null,e,t,n,r,i)),!0}return!1}function ld(e){var t=un(e.target);if(t!==null){var n=xn(t);if(n!==null){if(t=n.tag,t===13){if(t=Xc(n),t!==null){e.blockedOn=t,od(e.priority,function(){rd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yl=r,n.target.dispatchEvent(r),Yl=null}else return t=ni(n),t!==null&&$a(t),e.blockedOn=n,!1;t.shift()}return!0}function eu(e,t,n){Ii(e)&&n.delete(t)}function ch(){_l=!1,bt!==null&&Ii(bt)&&(bt=null),Ht!==null&&Ii(Ht)&&(Ht=null),$t!==null&&Ii($t)&&($t=null),Fr.forEach(eu),Mr.forEach(eu)}function fr(e,t){e.blockedOn===t&&(e.blockedOn=null,_l||(_l=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,ch)))}function Dr(e){function t(i){return fr(i,e)}if(0<pi.length){fr(pi[0],e);for(var n=1;n<pi.length;n++){var r=pi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bt!==null&&fr(bt,e),Ht!==null&&fr(Ht,e),$t!==null&&fr($t,e),Fr.forEach(t),Mr.forEach(t),n=0;n<Wt.length;n++)r=Wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wt.length&&(n=Wt[0],n.blockedOn===null);)ld(n),n.blockedOn===null&&Wt.shift()}var Qn=Tt.ReactCurrentBatchConfig,Yi=!0;function dh(e,t,n,r){var i=K,o=Qn.transition;Qn.transition=null;try{K=1,Xa(e,t,n,r)}finally{K=i,Qn.transition=o}}function fh(e,t,n,r){var i=K,o=Qn.transition;Qn.transition=null;try{K=4,Xa(e,t,n,r)}finally{K=i,Qn.transition=o}}function Xa(e,t,n,r){if(Yi){var i=Zl(e,t,n,r);if(i===null)gl(e,t,r,bi,n),qs(e,r);else if(uh(i,e,t,n,r))r.stopPropagation();else if(qs(e,r),t&4&&-1<sh.indexOf(e)){for(;i!==null;){var o=ni(i);if(o!==null&&nd(o),o=Zl(e,t,n,r),o===null&&gl(e,t,r,bi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else gl(e,t,r,null,n)}}var bi=null;function Zl(e,t,n,r){if(bi=null,e=Ya(r),e=un(e),e!==null)if(t=xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bi=e,null}function ad(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qp()){case ba:return 1;case Jc:return 4;case Vi:case eh:return 16;case qc:return 536870912;default:return 16}default:return 16}}var Vt=null,_a=null,Ni=null;function sd(){if(Ni)return Ni;var e,t=_a,n=t.length,r,i="value"in Vt?Vt.value:Vt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Ni=i.slice(e,1<r?1-r:void 0)}function zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hi(){return!0}function tu(){return!1}function et(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?hi:tu,this.isPropagationStopped=tu,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Za=et(nr),ti=le({},nr,{view:0,detail:0}),ph=et(ti),sl,ul,pr,vo=le({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ka,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pr&&(pr&&e.type==="mousemove"?(sl=e.screenX-pr.screenX,ul=e.screenY-pr.screenY):ul=sl=0,pr=e),sl)},movementY:function(e){return"movementY"in e?e.movementY:ul}}),nu=et(vo),hh=le({},vo,{dataTransfer:0}),mh=et(hh),Ah=le({},ti,{relatedTarget:0}),cl=et(Ah),gh=le({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),vh=et(gh),yh=le({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xh=et(yh),wh=le({},nr,{data:0}),ru=et(wh),Sh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ch={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kh[e])?!!t[e]:!1}function Ka(){return jh}var Eh=le({},ti,{key:function(e){if(e.key){var t=Sh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ch[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ka,charCode:function(e){return e.type==="keypress"?zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ph=et(Eh),Ih=le({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iu=et(Ih),Nh=le({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ka}),zh=et(Nh),Rh=le({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Oh=et(Rh),Bh=le({},vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Th=et(Bh),Lh=[9,13,27,32],Ja=zt&&"CompositionEvent"in window,jr=null;zt&&"documentMode"in document&&(jr=document.documentMode);var Fh=zt&&"TextEvent"in window&&!jr,ud=zt&&(!Ja||jr&&8<jr&&11>=jr),ou=String.fromCharCode(32),lu=!1;function cd(e,t){switch(e){case"keyup":return Lh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function Mh(e,t){switch(e){case"compositionend":return dd(t);case"keypress":return t.which!==32?null:(lu=!0,ou);case"textInput":return e=t.data,e===ou&&lu?null:e;default:return null}}function Dh(e,t){if(Nn)return e==="compositionend"||!Ja&&cd(e,t)?(e=sd(),Ni=_a=Vt=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ud&&t.locale!=="ko"?null:t.data;default:return null}}var Gh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gh[e.type]:t==="textarea"}function fd(e,t,n,r){Qc(r),t=Hi(t,"onChange"),0<t.length&&(n=new Za("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Er=null,Gr=null;function Wh(e){Cd(e,0)}function yo(e){var t=On(e);if(Fc(t))return e}function Uh(e,t){if(e==="change")return t}var pd=!1;if(zt){var dl;if(zt){var fl="oninput"in document;if(!fl){var su=document.createElement("div");su.setAttribute("oninput","return;"),fl=typeof su.oninput=="function"}dl=fl}else dl=!1;pd=dl&&(!document.documentMode||9<document.documentMode)}function uu(){Er&&(Er.detachEvent("onpropertychange",hd),Gr=Er=null)}function hd(e){if(e.propertyName==="value"&&yo(Gr)){var t=[];fd(t,Gr,e,Ya(e)),$c(Wh,t)}}function Vh(e,t,n){e==="focusin"?(uu(),Er=t,Gr=n,Er.attachEvent("onpropertychange",hd)):e==="focusout"&&uu()}function Qh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yo(Gr)}function Yh(e,t){if(e==="click")return yo(t)}function bh(e,t){if(e==="input"||e==="change")return yo(t)}function Hh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:Hh;function Wr(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ol.call(t,i)||!vt(e[i],t[i]))return!1}return!0}function cu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function du(e,t){var n=cu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cu(n)}}function md(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?md(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ad(){for(var e=window,t=Gi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gi(e.document)}return t}function qa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $h(e){var t=Ad(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&md(n.ownerDocument.documentElement,n)){if(r!==null&&qa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=du(n,o);var l=du(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xh=zt&&"documentMode"in document&&11>=document.documentMode,zn=null,Kl=null,Pr=null,Jl=!1;function fu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jl||zn==null||zn!==Gi(r)||(r=zn,"selectionStart"in r&&qa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pr&&Wr(Pr,r)||(Pr=r,r=Hi(Kl,"onSelect"),0<r.length&&(t=new Za("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function mi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rn={animationend:mi("Animation","AnimationEnd"),animationiteration:mi("Animation","AnimationIteration"),animationstart:mi("Animation","AnimationStart"),transitionend:mi("Transition","TransitionEnd")},pl={},gd={};zt&&(gd=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function xo(e){if(pl[e])return pl[e];if(!Rn[e])return e;var t=Rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in gd)return pl[e]=t[n];return e}var vd=xo("animationend"),yd=xo("animationiteration"),xd=xo("animationstart"),wd=xo("transitionend"),Sd=new Map,pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){Sd.set(e,t),yn(t,[e])}for(var hl=0;hl<pu.length;hl++){var ml=pu[hl],_h=ml.toLowerCase(),Zh=ml[0].toUpperCase()+ml.slice(1);rn(_h,"on"+Zh)}rn(vd,"onAnimationEnd");rn(yd,"onAnimationIteration");rn(xd,"onAnimationStart");rn("dblclick","onDoubleClick");rn("focusin","onFocus");rn("focusout","onBlur");rn(wd,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kh=new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));function hu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_p(r,t,void 0,e),e.currentTarget=null}function Cd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;hu(i,s,c),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;hu(i,s,c),o=u}}}if(Ui)throw e=$l,Ui=!1,$l=null,e}function te(e,t){var n=t[ra];n===void 0&&(n=t[ra]=new Set);var r=e+"__bubble";n.has(r)||(kd(t,e,2,!1),n.add(r))}function Al(e,t,n){var r=0;t&&(r|=4),kd(n,e,r,t)}var Ai="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Ai]){e[Ai]=!0,Rc.forEach(function(n){n!=="selectionchange"&&(Kh.has(n)||Al(n,!1,e),Al(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ai]||(t[Ai]=!0,Al("selectionchange",!1,t))}}function kd(e,t,n,r){switch(ad(t)){case 1:var i=dh;break;case 4:i=fh;break;default:i=Xa}n=i.bind(null,t,n,e),i=void 0,!Hl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function gl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=un(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}$c(function(){var c=o,m=Ya(n),h=[];e:{var A=Sd.get(e);if(A!==void 0){var S=Za,w=e;switch(e){case"keypress":if(zi(n)===0)break e;case"keydown":case"keyup":S=Ph;break;case"focusin":w="focus",S=cl;break;case"focusout":w="blur",S=cl;break;case"beforeblur":case"afterblur":S=cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=mh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=zh;break;case vd:case yd:case xd:S=vh;break;case wd:S=Oh;break;case"scroll":S=ph;break;case"wheel":S=Th;break;case"copy":case"cut":case"paste":S=xh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=iu}var v=(t&4)!==0,C=!v&&e==="scroll",f=v?A!==null?A+"Capture":null:A;v=[];for(var d=c,p;d!==null;){p=d;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=Lr(d,f),x!=null&&v.push(Vr(d,x,p)))),C)break;d=d.return}0<v.length&&(A=new S(A,w,null,n,m),h.push({event:A,listeners:v}))}}if(!(t&7)){e:{if(A=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",A&&n!==Yl&&(w=n.relatedTarget||n.fromElement)&&(un(w)||w[Rt]))break e;if((S||A)&&(A=m.window===m?m:(A=m.ownerDocument)?A.defaultView||A.parentWindow:window,S?(w=n.relatedTarget||n.toElement,S=c,w=w?un(w):null,w!==null&&(C=xn(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(S=null,w=c),S!==w)){if(v=nu,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=iu,x="onPointerLeave",f="onPointerEnter",d="pointer"),C=S==null?A:On(S),p=w==null?A:On(w),A=new v(x,d+"leave",S,n,m),A.target=C,A.relatedTarget=p,x=null,un(m)===c&&(v=new v(f,d+"enter",w,n,m),v.target=p,v.relatedTarget=C,x=v),C=x,S&&w)t:{for(v=S,f=w,d=0,p=v;p;p=En(p))d++;for(p=0,x=f;x;x=En(x))p++;for(;0<d-p;)v=En(v),d--;for(;0<p-d;)f=En(f),p--;for(;d--;){if(v===f||f!==null&&v===f.alternate)break t;v=En(v),f=En(f)}v=null}else v=null;S!==null&&mu(h,A,S,v,!1),w!==null&&C!==null&&mu(h,C,w,v,!0)}}e:{if(A=c?On(c):window,S=A.nodeName&&A.nodeName.toLowerCase(),S==="select"||S==="input"&&A.type==="file")var j=Uh;else if(au(A))if(pd)j=bh;else{j=Qh;var R=Vh}else(S=A.nodeName)&&S.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(j=Yh);if(j&&(j=j(e,c))){fd(h,j,n,m);break e}R&&R(e,A,c),e==="focusout"&&(R=A._wrapperState)&&R.controlled&&A.type==="number"&&Gl(A,"number",A.value)}switch(R=c?On(c):window,e){case"focusin":(au(R)||R.contentEditable==="true")&&(zn=R,Kl=c,Pr=null);break;case"focusout":Pr=Kl=zn=null;break;case"mousedown":Jl=!0;break;case"contextmenu":case"mouseup":case"dragend":Jl=!1,fu(h,n,m);break;case"selectionchange":if(Xh)break;case"keydown":case"keyup":fu(h,n,m)}var O;if(Ja)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else Nn?cd(e,n)&&(B="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(ud&&n.locale!=="ko"&&(Nn||B!=="onCompositionStart"?B==="onCompositionEnd"&&Nn&&(O=sd()):(Vt=m,_a="value"in Vt?Vt.value:Vt.textContent,Nn=!0)),R=Hi(c,B),0<R.length&&(B=new ru(B,e,null,n,m),h.push({event:B,listeners:R}),O?B.data=O:(O=dd(n),O!==null&&(B.data=O)))),(O=Fh?Mh(e,n):Dh(e,n))&&(c=Hi(c,"onBeforeInput"),0<c.length&&(m=new ru("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=O))}Cd(h,t)})}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Lr(e,n),o!=null&&r.unshift(Vr(e,o,i)),o=Lr(e,t),o!=null&&r.push(Vr(e,o,i))),e=e.return}return r}function En(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=Lr(n,o),u!=null&&l.unshift(Vr(n,u,s))):i||(u=Lr(n,o),u!=null&&l.push(Vr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Jh=/\r\n?/g,qh=/\u0000|\uFFFD/g;function Au(e){return(typeof e=="string"?e:""+e).replace(Jh,`
`).replace(qh,"")}function gi(e,t,n){if(t=Au(t),Au(e)!==t&&n)throw Error(E(425))}function $i(){}var ql=null,ea=null;function ta(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var na=typeof setTimeout=="function"?setTimeout:void 0,em=typeof clearTimeout=="function"?clearTimeout:void 0,gu=typeof Promise=="function"?Promise:void 0,tm=typeof queueMicrotask=="function"?queueMicrotask:typeof gu<"u"?function(e){return gu.resolve(null).then(e).catch(nm)}:na;function nm(e){setTimeout(function(){throw e})}function vl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Dr(t)}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),wt="__reactFiber$"+rr,Qr="__reactProps$"+rr,Rt="__reactContainer$"+rr,ra="__reactEvents$"+rr,rm="__reactListeners$"+rr,im="__reactHandles$"+rr;function un(e){var t=e[wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vu(e);e!==null;){if(n=e[wt])return n;e=vu(e)}return t}e=n,n=e.parentNode}return null}function ni(e){return e=e[wt]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function On(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function wo(e){return e[Qr]||null}var ia=[],Bn=-1;function on(e){return{current:e}}function ne(e){0>Bn||(e.current=ia[Bn],ia[Bn]=null,Bn--)}function ee(e,t){Bn++,ia[Bn]=e.current,e.current=t}var nn={},Te=on(nn),He=on(!1),hn=nn;function $n(e,t){var n=e.type.contextTypes;if(!n)return nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function $e(e){return e=e.childContextTypes,e!=null}function Xi(){ne(He),ne(Te)}function yu(e,t,n){if(Te.current!==nn)throw Error(E(168));ee(Te,t),ee(He,n)}function jd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,Vp(e)||"Unknown",i));return le({},n,r)}function _i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nn,hn=Te.current,ee(Te,e),ee(He,He.current),!0}function xu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=jd(e,t,hn),r.__reactInternalMemoizedMergedChildContext=e,ne(He),ne(Te),ee(Te,e)):ne(He),ee(He,n)}var jt=null,So=!1,yl=!1;function Ed(e){jt===null?jt=[e]:jt.push(e)}function om(e){So=!0,Ed(e)}function ln(){if(!yl&&jt!==null){yl=!0;var e=0,t=K;try{var n=jt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}jt=null,So=!1}catch(i){throw jt!==null&&(jt=jt.slice(e+1)),Kc(ba,ln),i}finally{K=t,yl=!1}}return null}var Tn=[],Ln=0,Zi=null,Ki=0,rt=[],it=0,mn=null,Et=1,Pt="";function an(e,t){Tn[Ln++]=Ki,Tn[Ln++]=Zi,Zi=e,Ki=t}function Pd(e,t,n){rt[it++]=Et,rt[it++]=Pt,rt[it++]=mn,mn=e;var r=Et;e=Pt;var i=32-At(r)-1;r&=~(1<<i),n+=1;var o=32-At(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Et=1<<32-At(t)+i|n<<i|r,Pt=o+e}else Et=1<<o|n<<i|r,Pt=e}function es(e){e.return!==null&&(an(e,1),Pd(e,1,0))}function ts(e){for(;e===Zi;)Zi=Tn[--Ln],Tn[Ln]=null,Ki=Tn[--Ln],Tn[Ln]=null;for(;e===mn;)mn=rt[--it],rt[it]=null,Pt=rt[--it],rt[it]=null,Et=rt[--it],rt[it]=null}var Ke=null,Ze=null,re=!1,mt=null;function Id(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,Ze=Xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:Et,overflow:Pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,Ze=null,!0):!1;default:return!1}}function oa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function la(e){if(re){var t=Ze;if(t){var n=t;if(!wu(e,t)){if(oa(e))throw Error(E(418));t=Xt(n.nextSibling);var r=Ke;t&&wu(e,t)?Id(r,n):(e.flags=e.flags&-4097|2,re=!1,Ke=e)}}else{if(oa(e))throw Error(E(418));e.flags=e.flags&-4097|2,re=!1,Ke=e}}}function Su(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function vi(e){if(e!==Ke)return!1;if(!re)return Su(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ta(e.type,e.memoizedProps)),t&&(t=Ze)){if(oa(e))throw Nd(),Error(E(418));for(;t;)Id(e,t),t=Xt(t.nextSibling)}if(Su(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=Xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=Ke?Xt(e.stateNode.nextSibling):null;return!0}function Nd(){for(var e=Ze;e;)e=Xt(e.nextSibling)}function Xn(){Ze=Ke=null,re=!1}function ns(e){mt===null?mt=[e]:mt.push(e)}var lm=Tt.ReactCurrentBatchConfig;function hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cu(e){var t=e._init;return t(e._payload)}function zd(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=Jt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,x){return d===null||d.tag!==6?(d=El(p,f.mode,x),d.return=f,d):(d=i(d,p),d.return=f,d)}function u(f,d,p,x){var j=p.type;return j===In?m(f,d,p.props.children,x,p.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Dt&&Cu(j)===d.type)?(x=i(d,p.props),x.ref=hr(f,d,p),x.return=f,x):(x=Mi(p.type,p.key,p.props,null,f.mode,x),x.ref=hr(f,d,p),x.return=f,x)}function c(f,d,p,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Pl(p,f.mode,x),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function m(f,d,p,x,j){return d===null||d.tag!==7?(d=pn(p,f.mode,x,j),d.return=f,d):(d=i(d,p),d.return=f,d)}function h(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=El(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case si:return p=Mi(d.type,d.key,d.props,null,f.mode,p),p.ref=hr(f,null,d),p.return=f,p;case Pn:return d=Pl(d,f.mode,p),d.return=f,d;case Dt:var x=d._init;return h(f,x(d._payload),p)}if(yr(d)||ur(d))return d=pn(d,f.mode,p,null),d.return=f,d;yi(f,d)}return null}function A(f,d,p,x){var j=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:s(f,d,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case si:return p.key===j?u(f,d,p,x):null;case Pn:return p.key===j?c(f,d,p,x):null;case Dt:return j=p._init,A(f,d,j(p._payload),x)}if(yr(p)||ur(p))return j!==null?null:m(f,d,p,x,null);yi(f,p)}return null}function S(f,d,p,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,s(d,f,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case si:return f=f.get(x.key===null?p:x.key)||null,u(d,f,x,j);case Pn:return f=f.get(x.key===null?p:x.key)||null,c(d,f,x,j);case Dt:var R=x._init;return S(f,d,p,R(x._payload),j)}if(yr(x)||ur(x))return f=f.get(p)||null,m(d,f,x,j,null);yi(d,x)}return null}function w(f,d,p,x){for(var j=null,R=null,O=d,B=d=0,Q=null;O!==null&&B<p.length;B++){O.index>B?(Q=O,O=null):Q=O.sibling;var M=A(f,O,p[B],x);if(M===null){O===null&&(O=Q);break}e&&O&&M.alternate===null&&t(f,O),d=o(M,d,B),R===null?j=M:R.sibling=M,R=M,O=Q}if(B===p.length)return n(f,O),re&&an(f,B),j;if(O===null){for(;B<p.length;B++)O=h(f,p[B],x),O!==null&&(d=o(O,d,B),R===null?j=O:R.sibling=O,R=O);return re&&an(f,B),j}for(O=r(f,O);B<p.length;B++)Q=S(O,f,B,p[B],x),Q!==null&&(e&&Q.alternate!==null&&O.delete(Q.key===null?B:Q.key),d=o(Q,d,B),R===null?j=Q:R.sibling=Q,R=Q);return e&&O.forEach(function(fe){return t(f,fe)}),re&&an(f,B),j}function v(f,d,p,x){var j=ur(p);if(typeof j!="function")throw Error(E(150));if(p=j.call(p),p==null)throw Error(E(151));for(var R=j=null,O=d,B=d=0,Q=null,M=p.next();O!==null&&!M.done;B++,M=p.next()){O.index>B?(Q=O,O=null):Q=O.sibling;var fe=A(f,O,M.value,x);if(fe===null){O===null&&(O=Q);break}e&&O&&fe.alternate===null&&t(f,O),d=o(fe,d,B),R===null?j=fe:R.sibling=fe,R=fe,O=Q}if(M.done)return n(f,O),re&&an(f,B),j;if(O===null){for(;!M.done;B++,M=p.next())M=h(f,M.value,x),M!==null&&(d=o(M,d,B),R===null?j=M:R.sibling=M,R=M);return re&&an(f,B),j}for(O=r(f,O);!M.done;B++,M=p.next())M=S(O,f,B,M.value,x),M!==null&&(e&&M.alternate!==null&&O.delete(M.key===null?B:M.key),d=o(M,d,B),R===null?j=M:R.sibling=M,R=M);return e&&O.forEach(function(ue){return t(f,ue)}),re&&an(f,B),j}function C(f,d,p,x){if(typeof p=="object"&&p!==null&&p.type===In&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case si:e:{for(var j=p.key,R=d;R!==null;){if(R.key===j){if(j=p.type,j===In){if(R.tag===7){n(f,R.sibling),d=i(R,p.props.children),d.return=f,f=d;break e}}else if(R.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Dt&&Cu(j)===R.type){n(f,R.sibling),d=i(R,p.props),d.ref=hr(f,R,p),d.return=f,f=d;break e}n(f,R);break}else t(f,R);R=R.sibling}p.type===In?(d=pn(p.props.children,f.mode,x,p.key),d.return=f,f=d):(x=Mi(p.type,p.key,p.props,null,f.mode,x),x.ref=hr(f,d,p),x.return=f,f=x)}return l(f);case Pn:e:{for(R=p.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=Pl(p,f.mode,x),d.return=f,f=d}return l(f);case Dt:return R=p._init,C(f,d,R(p._payload),x)}if(yr(p))return w(f,d,p,x);if(ur(p))return v(f,d,p,x);yi(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=El(p,f.mode,x),d.return=f,f=d),l(f)):n(f,d)}return C}var _n=zd(!0),Rd=zd(!1),Ji=on(null),qi=null,Fn=null,rs=null;function is(){rs=Fn=qi=null}function os(e){var t=Ji.current;ne(Ji),e._currentValue=t}function aa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yn(e,t){qi=e,rs=Fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(be=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(rs!==e)if(e={context:e,memoizedValue:t,next:null},Fn===null){if(qi===null)throw Error(E(308));Fn=e,qi.dependencies={lanes:0,firstContext:e}}else Fn=Fn.next=e;return t}var cn=null;function ls(e){cn===null?cn=[e]:cn.push(e)}function Od(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ls(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function as(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,b&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ot(e,n)}return i=r.interleaved,i===null?(t.next=t,ls(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ot(e,n)}function Ri(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ha(e,n)}}function ku(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var i=e.updateQueue;Gt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=u))}if(o!==null){var h=i.baseState;l=0,m=c=u=null,s=o;do{var A=s.lane,S=s.eventTime;if((r&A)===A){m!==null&&(m=m.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,v=s;switch(A=t,S=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){h=w.call(S,h,A);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,A=typeof w=="function"?w.call(S,h,A):w,A==null)break e;h=le({},h,A);break e;case 2:Gt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,A=i.effects,A===null?i.effects=[s]:A.push(s))}else S={eventTime:S,lane:A,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=S,u=h):m=m.next=S,l|=A;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;A=s,s=A.next,A.next=null,i.lastBaseUpdate=A,i.shared.pending=null}}while(1);if(m===null&&(u=h),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);gn|=l,e.lanes=l,e.memoizedState=h}}function ju(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var ri={},Ct=on(ri),Yr=on(ri),br=on(ri);function dn(e){if(e===ri)throw Error(E(174));return e}function ss(e,t){switch(ee(br,t),ee(Yr,e),ee(Ct,ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ul(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ul(t,e)}ne(Ct),ee(Ct,t)}function Zn(){ne(Ct),ne(Yr),ne(br)}function Td(e){dn(br.current);var t=dn(Ct.current),n=Ul(t,e.type);t!==n&&(ee(Yr,e),ee(Ct,n))}function us(e){Yr.current===e&&(ne(Ct),ne(Yr))}var ie=on(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xl=[];function cs(){for(var e=0;e<xl.length;e++)xl[e]._workInProgressVersionPrimary=null;xl.length=0}var Oi=Tt.ReactCurrentDispatcher,wl=Tt.ReactCurrentBatchConfig,An=0,oe=null,Ae=null,we=null,no=!1,Ir=!1,Hr=0,am=0;function Re(){throw Error(E(321))}function ds(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function fs(e,t,n,r,i,o){if(An=o,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oi.current=e===null||e.memoizedState===null?dm:fm,e=n(r,i),Ir){o=0;do{if(Ir=!1,Hr=0,25<=o)throw Error(E(301));o+=1,we=Ae=null,t.updateQueue=null,Oi.current=pm,e=n(r,i)}while(Ir)}if(Oi.current=ro,t=Ae!==null&&Ae.next!==null,An=0,we=Ae=oe=null,no=!1,t)throw Error(E(300));return e}function ps(){var e=Hr!==0;return Hr=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?oe.memoizedState=we=e:we=we.next=e,we}function st(){if(Ae===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=we===null?oe.memoizedState:we.next;if(t!==null)we=t,Ae=e;else{if(e===null)throw Error(E(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},we===null?oe.memoizedState=we=e:we=we.next=e}return we}function $r(e,t){return typeof t=="function"?t(e):t}function Sl(e){var t=st(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,c=o;do{var m=c.lane;if((An&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=h,l=r):u=u.next=h,oe.lanes|=m,gn|=m}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=s,vt(r,t.memoizedState)||(be=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,oe.lanes|=o,gn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Cl(e){var t=st(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);vt(o,t.memoizedState)||(be=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ld(){}function Fd(e,t){var n=oe,r=st(),i=t(),o=!vt(r.memoizedState,i);if(o&&(r.memoizedState=i,be=!0),r=r.queue,hs(Gd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,Xr(9,Dd.bind(null,n,r,i,t),void 0,null),Se===null)throw Error(E(349));An&30||Md(n,t,i)}return i}function Md(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Dd(e,t,n,r){t.value=n,t.getSnapshot=r,Wd(t)&&Ud(e)}function Gd(e,t,n){return n(function(){Wd(t)&&Ud(e)})}function Wd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function Ud(e){var t=Ot(e,1);t!==null&&gt(t,e,1,-1)}function Eu(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},t.queue=e,e=e.dispatch=cm.bind(null,oe,e),[t.memoizedState,e]}function Xr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vd(){return st().memoizedState}function Bi(e,t,n,r){var i=xt();oe.flags|=e,i.memoizedState=Xr(1|t,n,void 0,r===void 0?null:r)}function Co(e,t,n,r){var i=st();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var l=Ae.memoizedState;if(o=l.destroy,r!==null&&ds(r,l.deps)){i.memoizedState=Xr(t,n,o,r);return}}oe.flags|=e,i.memoizedState=Xr(1|t,n,o,r)}function Pu(e,t){return Bi(8390656,8,e,t)}function hs(e,t){return Co(2048,8,e,t)}function Qd(e,t){return Co(4,2,e,t)}function Yd(e,t){return Co(4,4,e,t)}function bd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hd(e,t,n){return n=n!=null?n.concat([e]):null,Co(4,4,bd.bind(null,t,e),n)}function ms(){}function $d(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ds(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xd(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ds(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _d(e,t,n){return An&21?(vt(n,t)||(n=ed(),oe.lanes|=n,gn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=n)}function sm(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=wl.transition;wl.transition={};try{e(!1),t()}finally{K=n,wl.transition=r}}function Zd(){return st().memoizedState}function um(e,t,n){var r=Kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kd(e))Jd(t,n);else if(n=Od(e,t,n,r),n!==null){var i=Me();gt(n,e,r,i),qd(n,t,r)}}function cm(e,t,n){var r=Kt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kd(e))Jd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,vt(s,l)){var u=t.interleaved;u===null?(i.next=i,ls(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Od(e,t,i,r),n!==null&&(i=Me(),gt(n,e,r,i),qd(n,t,r))}}function Kd(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Jd(e,t){Ir=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ha(e,n)}}var ro={readContext:at,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},dm={readContext:at,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Pu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Bi(4194308,4,bd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Bi(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=um.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:Eu,useDebugValue:ms,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=Eu(!1),t=e[0];return e=sm.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,i=xt();if(re){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),Se===null)throw Error(E(349));An&30||Md(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Pu(Gd.bind(null,r,o,e),[e]),r.flags|=2048,Xr(9,Dd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=xt(),t=Se.identifierPrefix;if(re){var n=Pt,r=Et;n=(r&~(1<<32-At(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=am++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fm={readContext:at,useCallback:$d,useContext:at,useEffect:hs,useImperativeHandle:Hd,useInsertionEffect:Qd,useLayoutEffect:Yd,useMemo:Xd,useReducer:Sl,useRef:Vd,useState:function(){return Sl($r)},useDebugValue:ms,useDeferredValue:function(e){var t=st();return _d(t,Ae.memoizedState,e)},useTransition:function(){var e=Sl($r)[0],t=st().memoizedState;return[e,t]},useMutableSource:Ld,useSyncExternalStore:Fd,useId:Zd,unstable_isNewReconciler:!1},pm={readContext:at,useCallback:$d,useContext:at,useEffect:hs,useImperativeHandle:Hd,useInsertionEffect:Qd,useLayoutEffect:Yd,useMemo:Xd,useReducer:Cl,useRef:Vd,useState:function(){return Cl($r)},useDebugValue:ms,useDeferredValue:function(e){var t=st();return Ae===null?t.memoizedState=e:_d(t,Ae.memoizedState,e)},useTransition:function(){var e=Cl($r)[0],t=st().memoizedState;return[e,t]},useMutableSource:Ld,useSyncExternalStore:Fd,useId:Zd,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function sa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ko={isMounted:function(e){return(e=e._reactInternals)?xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),i=Kt(e),o=Nt(r,i);o.payload=t,n!=null&&(o.callback=n),t=_t(e,o,i),t!==null&&(gt(t,e,i,r),Ri(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),i=Kt(e),o=Nt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=_t(e,o,i),t!==null&&(gt(t,e,i,r),Ri(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=Kt(e),i=Nt(n,r);i.tag=2,t!=null&&(i.callback=t),t=_t(e,i,r),t!==null&&(gt(t,e,r,n),Ri(t,e,r))}};function Iu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Wr(n,r)||!Wr(i,o):!0}function ef(e,t,n){var r=!1,i=nn,o=t.contextType;return typeof o=="object"&&o!==null?o=at(o):(i=$e(t)?hn:Te.current,r=t.contextTypes,o=(r=r!=null)?$n(e,i):nn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ko,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Nu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ko.enqueueReplaceState(t,t.state,null)}function ua(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},as(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=at(o):(o=$e(t)?hn:Te.current,i.context=$n(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(sa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ko.enqueueReplaceState(i,i.state,null),eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Kn(e,t){try{var n="",r=t;do n+=Up(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ca(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hm=typeof WeakMap=="function"?WeakMap:Map;function tf(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oo||(oo=!0,xa=r),ca(e,t)},n}function nf(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ca(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ca(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function zu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Im.bind(null,e,t,n),t.then(e,e))}function Ru(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ou(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,_t(n,t,1))),n.lanes|=1),e)}var mm=Tt.ReactCurrentOwner,be=!1;function Fe(e,t,n,r){t.child=e===null?Rd(t,null,n,r):_n(t,e.child,n,r)}function Bu(e,t,n,r,i){n=n.render;var o=t.ref;return Yn(t,i),r=fs(e,t,n,r,o,i),n=ps(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bt(e,t,i)):(re&&n&&es(t),t.flags|=1,Fe(e,t,r,i),t.child)}function Tu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Cs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,rf(e,t,o,r,i)):(e=Mi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Wr,n(l,r)&&e.ref===t.ref)return Bt(e,t,i)}return t.flags|=1,e=Jt(o,r),e.ref=t.ref,e.return=t,t.child=e}function rf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Wr(o,r)&&e.ref===t.ref)if(be=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(be=!0);else return t.lanes=e.lanes,Bt(e,t,i)}return da(e,t,n,r,i)}function of(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Dn,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Dn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ee(Dn,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ee(Dn,_e),_e|=r;return Fe(e,t,i,n),t.child}function lf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function da(e,t,n,r,i){var o=$e(n)?hn:Te.current;return o=$n(t,o),Yn(t,i),n=fs(e,t,n,r,o,i),r=ps(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bt(e,t,i)):(re&&r&&es(t),t.flags|=1,Fe(e,t,n,i),t.child)}function Lu(e,t,n,r,i){if($e(n)){var o=!0;_i(t)}else o=!1;if(Yn(t,i),t.stateNode===null)Ti(e,t),ef(t,n,r),ua(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=at(c):(c=$e(n)?hn:Te.current,c=$n(t,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Nu(t,l,r,c),Gt=!1;var A=t.memoizedState;l.state=A,eo(t,r,l,i),u=t.memoizedState,s!==r||A!==u||He.current||Gt?(typeof m=="function"&&(sa(t,n,m,r),u=t.memoizedState),(s=Gt||Iu(t,n,s,r,A,u,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Bd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:pt(t.type,s),l.props=c,h=t.pendingProps,A=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=at(u):(u=$e(n)?hn:Te.current,u=$n(t,u));var S=n.getDerivedStateFromProps;(m=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||A!==u)&&Nu(t,l,r,u),Gt=!1,A=t.memoizedState,l.state=A,eo(t,r,l,i);var w=t.memoizedState;s!==h||A!==w||He.current||Gt?(typeof S=="function"&&(sa(t,n,S,r),w=t.memoizedState),(c=Gt||Iu(t,n,c,r,A,w,u)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),r=!1)}return fa(e,t,n,r,o,i)}function fa(e,t,n,r,i,o){lf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&xu(t,n,!1),Bt(e,t,o);r=t.stateNode,mm.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=_n(t,e.child,null,o),t.child=_n(t,null,s,o)):Fe(e,t,s,o),t.memoizedState=r.state,i&&xu(t,n,!0),t.child}function af(e){var t=e.stateNode;t.pendingContext?yu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&yu(e,t.context,!1),ss(e,t.containerInfo)}function Fu(e,t,n,r,i){return Xn(),ns(i),t.flags|=256,Fe(e,t,n,r),t.child}var pa={dehydrated:null,treeContext:null,retryLane:0};function ha(e){return{baseLanes:e,cachePool:null,transitions:null}}function sf(e,t,n){var r=t.pendingProps,i=ie.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(ie,i&1),e===null)return la(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Po(l,r,0,null),e=pn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ha(n),t.memoizedState=pa,e):As(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Am(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Jt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Jt(s,o):(o=pn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ha(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=pa,r}return o=e.child,e=o.sibling,r=Jt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function As(e,t){return t=Po({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xi(e,t,n,r){return r!==null&&ns(r),_n(t,e.child,null,n),e=As(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Am(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=kl(Error(E(422))),xi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Po({mode:"visible",children:r.children},i,0,null),o=pn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&_n(t,e.child,null,l),t.child.memoizedState=ha(l),t.memoizedState=pa,o);if(!(t.mode&1))return xi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(E(419)),r=kl(o,r,void 0),xi(e,t,l,r)}if(s=(l&e.childLanes)!==0,be||s){if(r=Se,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ot(e,i),gt(r,e,i,-1))}return Ss(),r=kl(Error(E(421))),xi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Nm.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ze=Xt(i.nextSibling),Ke=t,re=!0,mt=null,e!==null&&(rt[it++]=Et,rt[it++]=Pt,rt[it++]=mn,Et=e.id,Pt=e.overflow,mn=t),t=As(t,r.children),t.flags|=4096,t)}function Mu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),aa(e.return,t,n)}function jl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function uf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Fe(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mu(e,n,t);else if(e.tag===19)Mu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jl(t,!0,n,null,o);break;case"together":jl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ti(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gm(e,t,n){switch(t.tag){case 3:af(t),Xn();break;case 5:Td(t);break;case 1:$e(t.type)&&_i(t);break;case 4:ss(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(Ji,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?sf(e,t,n):(ee(ie,ie.current&1),e=Bt(e,t,n),e!==null?e.sibling:null);ee(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return uf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,of(e,t,n)}return Bt(e,t,n)}var cf,ma,df,ff;cf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ma=function(){};df=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,dn(Ct.current);var o=null;switch(n){case"input":i=Ml(e,i),r=Ml(e,r),o=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),o=[];break;case"textarea":i=Wl(e,i),r=Wl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$i)}Vl(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Br.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Br.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&te("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};ff=function(e,t,n,r){n!==r&&(t.flags|=4)};function mr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vm(e,t,n){var r=t.pendingProps;switch(ts(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return $e(t.type)&&Xi(),Oe(t),null;case 3:return r=t.stateNode,Zn(),ne(He),ne(Te),cs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mt!==null&&(Ca(mt),mt=null))),ma(e,t),Oe(t),null;case 5:us(t);var i=dn(br.current);if(n=t.type,e!==null&&t.stateNode!=null)df(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return Oe(t),null}if(e=dn(Ct.current),vi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[wt]=t,r[Qr]=o,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<wr.length;i++)te(wr[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Hs(r,o),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},te("invalid",r);break;case"textarea":Xs(r,o),te("invalid",r)}Vl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&gi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&gi(r.textContent,s,e),i=["children",""+s]):Br.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&te("scroll",r)}switch(n){case"input":ui(r),$s(r,o,!0);break;case"textarea":ui(r),_s(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=$i)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[wt]=t,e[Qr]=r,cf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ql(n,r),n){case"dialog":te("cancel",e),te("close",e),i=r;break;case"iframe":case"object":case"embed":te("load",e),i=r;break;case"video":case"audio":for(i=0;i<wr.length;i++)te(wr[i],e);i=r;break;case"source":te("error",e),i=r;break;case"img":case"image":case"link":te("error",e),te("load",e),i=r;break;case"details":te("toggle",e),i=r;break;case"input":Hs(e,r),i=Ml(e,r),te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),te("invalid",e);break;case"textarea":Xs(e,r),i=Wl(e,r),te("invalid",e);break;default:i=r}Vl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Vc(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Wc(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Tr(e,u):typeof u=="number"&&Tr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Br.hasOwnProperty(o)?u!=null&&o==="onScroll"&&te("scroll",e):u!=null&&Wa(e,o,u,l))}switch(n){case"input":ui(e),$s(e,r,!1);break;case"textarea":ui(e),_s(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Wn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=$i)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)ff(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=dn(br.current),dn(Ct.current),vi(t)){if(r=t.stateNode,n=t.memoizedProps,r[wt]=t,(o=r.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){case 3:gi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return Oe(t),null;case 13:if(ne(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ze!==null&&t.mode&1&&!(t.flags&128))Nd(),Xn(),t.flags|=98560,o=!1;else if(o=vi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[wt]=t}else Xn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),o=!1}else mt!==null&&(Ca(mt),mt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?ve===0&&(ve=3):Ss())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return Zn(),ma(e,t),e===null&&Ur(t.stateNode.containerInfo),Oe(t),null;case 10:return os(t.type._context),Oe(t),null;case 17:return $e(t.type)&&Xi(),Oe(t),null;case 19:if(ne(ie),o=t.memoizedState,o===null)return Oe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)mr(o,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=to(e),l!==null){for(t.flags|=128,mr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(ie,ie.current&1|2),t.child}e=e.sibling}o.tail!==null&&de()>Jn&&(t.flags|=128,r=!0,mr(o,!1),t.lanes=4194304)}else{if(!r)if(e=to(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!re)return Oe(t),null}else 2*de()-o.renderingStartTime>Jn&&n!==1073741824&&(t.flags|=128,r=!0,mr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=de(),t.sibling=null,n=ie.current,ee(ie,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return ws(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function ym(e,t){switch(ts(t),t.tag){case 1:return $e(t.type)&&Xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zn(),ne(He),ne(Te),cs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return us(t),null;case 13:if(ne(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(ie),null;case 4:return Zn(),null;case 10:return os(t.type._context),null;case 22:case 23:return ws(),null;case 24:return null;default:return null}}var wi=!1,Be=!1,xm=typeof WeakSet=="function"?WeakSet:Set,L=null;function Mn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function Aa(e,t,n){try{n()}catch(r){se(e,t,r)}}var Du=!1;function wm(e,t){if(ql=Yi,e=Ad(),qa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,m=0,h=e,A=null;t:for(;;){for(var S;h!==n||i!==0&&h.nodeType!==3||(s=l+i),h!==o||r!==0&&h.nodeType!==3||(u=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(S=h.firstChild)!==null;)A=h,h=S;for(;;){if(h===e)break t;if(A===n&&++c===i&&(s=l),A===o&&++m===r&&(u=l),(S=h.nextSibling)!==null)break;h=A,A=h.parentNode}h=S}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ea={focusedElem:e,selectionRange:n},Yi=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,C=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:pt(t.type,v),C);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(x){se(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return w=Du,Du=!1,w}function Nr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Aa(t,n,o)}i=i.next}while(i!==r)}}function jo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ga(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pf(e){var t=e.alternate;t!==null&&(e.alternate=null,pf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[Qr],delete t[ra],delete t[rm],delete t[im])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hf(e){return e.tag===5||e.tag===3||e.tag===4}function Gu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function va(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$i));else if(r!==4&&(e=e.child,e!==null))for(va(e,t,n),e=e.sibling;e!==null;)va(e,t,n),e=e.sibling}function ya(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ya(e,t,n),e=e.sibling;e!==null;)ya(e,t,n),e=e.sibling}var Pe=null,ht=!1;function Ft(e,t,n){for(n=n.child;n!==null;)mf(e,t,n),n=n.sibling}function mf(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(go,n)}catch{}switch(n.tag){case 5:Be||Mn(n,t);case 6:var r=Pe,i=ht;Pe=null,Ft(e,t,n),Pe=r,ht=i,Pe!==null&&(ht?(e=Pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(ht?(e=Pe,n=n.stateNode,e.nodeType===8?vl(e.parentNode,n):e.nodeType===1&&vl(e,n),Dr(e)):vl(Pe,n.stateNode));break;case 4:r=Pe,i=ht,Pe=n.stateNode.containerInfo,ht=!0,Ft(e,t,n),Pe=r,ht=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Aa(n,t,l),i=i.next}while(i!==r)}Ft(e,t,n);break;case 1:if(!Be&&(Mn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){se(n,t,s)}Ft(e,t,n);break;case 21:Ft(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,Ft(e,t,n),Be=r):Ft(e,t,n);break;default:Ft(e,t,n)}}function Wu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xm),t.forEach(function(r){var i=zm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Pe=s.stateNode,ht=!1;break e;case 3:Pe=s.stateNode.containerInfo,ht=!0;break e;case 4:Pe=s.stateNode.containerInfo,ht=!0;break e}s=s.return}if(Pe===null)throw Error(E(160));mf(o,l,i),Pe=null,ht=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){se(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Af(t,e),t=t.sibling}function Af(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),yt(e),r&4){try{Nr(3,e,e.return),jo(3,e)}catch(v){se(e,e.return,v)}try{Nr(5,e,e.return)}catch(v){se(e,e.return,v)}}break;case 1:dt(t,e),yt(e),r&512&&n!==null&&Mn(n,n.return);break;case 5:if(dt(t,e),yt(e),r&512&&n!==null&&Mn(n,n.return),e.flags&32){var i=e.stateNode;try{Tr(i,"")}catch(v){se(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Mc(i,o),Ql(s,l);var c=Ql(s,o);for(l=0;l<u.length;l+=2){var m=u[l],h=u[l+1];m==="style"?Vc(i,h):m==="dangerouslySetInnerHTML"?Wc(i,h):m==="children"?Tr(i,h):Wa(i,m,h,c)}switch(s){case"input":Dl(i,o);break;case"textarea":Dc(i,o);break;case"select":var A=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?Wn(i,!!o.multiple,S,!1):A!==!!o.multiple&&(o.defaultValue!=null?Wn(i,!!o.multiple,o.defaultValue,!0):Wn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Qr]=o}catch(v){se(e,e.return,v)}}break;case 6:if(dt(t,e),yt(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){se(e,e.return,v)}}break;case 3:if(dt(t,e),yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(v){se(e,e.return,v)}break;case 4:dt(t,e),yt(e);break;case 13:dt(t,e),yt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ys=de())),r&4&&Wu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(c=Be)||m,dt(t,e),Be=c):dt(t,e),yt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(L=e,m=e.child;m!==null;){for(h=L=m;L!==null;){switch(A=L,S=A.child,A.tag){case 0:case 11:case 14:case 15:Nr(4,A,A.return);break;case 1:Mn(A,A.return);var w=A.stateNode;if(typeof w.componentWillUnmount=="function"){r=A,n=A.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){se(r,n,v)}}break;case 5:Mn(A,A.return);break;case 22:if(A.memoizedState!==null){Vu(h);continue}}S!==null?(S.return=A,L=S):Vu(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,u=h.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Uc("display",l))}catch(v){se(e,e.return,v)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){se(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:dt(t,e),yt(e),r&4&&Wu(e);break;case 21:break;default:dt(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hf(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Tr(i,""),r.flags&=-33);var o=Gu(e);ya(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Gu(e);va(e,s,l);break;default:throw Error(E(161))}}catch(u){se(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sm(e,t,n){L=e,gf(e)}function gf(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||wi;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||Be;s=wi;var c=Be;if(wi=l,(Be=u)&&!c)for(L=i;L!==null;)l=L,u=l.child,l.tag===22&&l.memoizedState!==null?Qu(i):u!==null?(u.return=l,L=u):Qu(i);for(;o!==null;)L=o,gf(o),o=o.sibling;L=i,wi=s,Be=c}Uu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):Uu(e)}}function Uu(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||jo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ju(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ju(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Dr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Be||t.flags&512&&ga(t)}catch(A){se(t,t.return,A)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Vu(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Qu(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jo(4,t)}catch(u){se(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){se(t,i,u)}}var o=t.return;try{ga(t)}catch(u){se(t,o,u)}break;case 5:var l=t.return;try{ga(t)}catch(u){se(t,l,u)}}}catch(u){se(t,t.return,u)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var Cm=Math.ceil,io=Tt.ReactCurrentDispatcher,gs=Tt.ReactCurrentOwner,lt=Tt.ReactCurrentBatchConfig,b=0,Se=null,pe=null,Ie=0,_e=0,Dn=on(0),ve=0,_r=null,gn=0,Eo=0,vs=0,zr=null,Ye=null,ys=0,Jn=1/0,kt=null,oo=!1,xa=null,Zt=null,Si=!1,Qt=null,lo=0,Rr=0,wa=null,Li=-1,Fi=0;function Me(){return b&6?de():Li!==-1?Li:Li=de()}function Kt(e){return e.mode&1?b&2&&Ie!==0?Ie&-Ie:lm.transition!==null?(Fi===0&&(Fi=ed()),Fi):(e=K,e!==0||(e=window.event,e=e===void 0?16:ad(e.type)),e):1}function gt(e,t,n,r){if(50<Rr)throw Rr=0,wa=null,Error(E(185));ei(e,n,r),(!(b&2)||e!==Se)&&(e===Se&&(!(b&2)&&(Eo|=n),ve===4&&Ut(e,Ie)),Xe(e,r),n===1&&b===0&&!(t.mode&1)&&(Jn=de()+500,So&&ln()))}function Xe(e,t){var n=e.callbackNode;lh(e,t);var r=Qi(e,e===Se?Ie:0);if(r===0)n!==null&&Js(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Js(n),t===1)e.tag===0?om(Yu.bind(null,e)):Ed(Yu.bind(null,e)),tm(function(){!(b&6)&&ln()}),n=null;else{switch(td(r)){case 1:n=ba;break;case 4:n=Jc;break;case 16:n=Vi;break;case 536870912:n=qc;break;default:n=Vi}n=jf(n,vf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vf(e,t){if(Li=-1,Fi=0,b&6)throw Error(E(327));var n=e.callbackNode;if(bn()&&e.callbackNode!==n)return null;var r=Qi(e,e===Se?Ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ao(e,r);else{t=r;var i=b;b|=2;var o=xf();(Se!==e||Ie!==t)&&(kt=null,Jn=de()+500,fn(e,t));do try{Em();break}catch(s){yf(e,s)}while(1);is(),io.current=o,b=i,pe!==null?t=0:(Se=null,Ie=0,t=ve)}if(t!==0){if(t===2&&(i=Xl(e),i!==0&&(r=i,t=Sa(e,i))),t===1)throw n=_r,fn(e,0),Ut(e,r),Xe(e,de()),n;if(t===6)Ut(e,r);else{if(i=e.current.alternate,!(r&30)&&!km(i)&&(t=ao(e,r),t===2&&(o=Xl(e),o!==0&&(r=o,t=Sa(e,o))),t===1))throw n=_r,fn(e,0),Ut(e,r),Xe(e,de()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:sn(e,Ye,kt);break;case 3:if(Ut(e,r),(r&130023424)===r&&(t=ys+500-de(),10<t)){if(Qi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=na(sn.bind(null,e,Ye,kt),t);break}sn(e,Ye,kt);break;case 4:if(Ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-At(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cm(r/1960))-r,10<r){e.timeoutHandle=na(sn.bind(null,e,Ye,kt),r);break}sn(e,Ye,kt);break;case 5:sn(e,Ye,kt);break;default:throw Error(E(329))}}}return Xe(e,de()),e.callbackNode===n?vf.bind(null,e):null}function Sa(e,t){var n=zr;return e.current.memoizedState.isDehydrated&&(fn(e,t).flags|=256),e=ao(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&Ca(t)),e}function Ca(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function km(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!vt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ut(e,t){for(t&=~vs,t&=~Eo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-At(t),r=1<<n;e[n]=-1,t&=~r}}function Yu(e){if(b&6)throw Error(E(327));bn();var t=Qi(e,0);if(!(t&1))return Xe(e,de()),null;var n=ao(e,t);if(e.tag!==0&&n===2){var r=Xl(e);r!==0&&(t=r,n=Sa(e,r))}if(n===1)throw n=_r,fn(e,0),Ut(e,t),Xe(e,de()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,Ye,kt),Xe(e,de()),null}function xs(e,t){var n=b;b|=1;try{return e(t)}finally{b=n,b===0&&(Jn=de()+500,So&&ln())}}function vn(e){Qt!==null&&Qt.tag===0&&!(b&6)&&bn();var t=b;b|=1;var n=lt.transition,r=K;try{if(lt.transition=null,K=1,e)return e()}finally{K=r,lt.transition=n,b=t,!(b&6)&&ln()}}function ws(){_e=Dn.current,ne(Dn)}function fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,em(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(ts(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xi();break;case 3:Zn(),ne(He),ne(Te),cs();break;case 5:us(r);break;case 4:Zn();break;case 13:ne(ie);break;case 19:ne(ie);break;case 10:os(r.type._context);break;case 22:case 23:ws()}n=n.return}if(Se=e,pe=e=Jt(e.current,null),Ie=_e=t,ve=0,_r=null,vs=Eo=gn=0,Ye=zr=null,cn!==null){for(t=0;t<cn.length;t++)if(n=cn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}cn=null}return e}function yf(e,t){do{var n=pe;try{if(is(),Oi.current=ro,no){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if(An=0,we=Ae=oe=null,Ir=!1,Hr=0,gs.current=null,n===null||n.return===null){ve=1,_r=t,pe=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=Ie,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=s,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var A=m.alternate;A?(m.updateQueue=A.updateQueue,m.memoizedState=A.memoizedState,m.lanes=A.lanes):(m.updateQueue=null,m.memoizedState=null)}var S=Ru(l);if(S!==null){S.flags&=-257,Ou(S,l,s,o,t),S.mode&1&&zu(o,c,t),t=S,u=c;var w=t.updateQueue;if(w===null){var v=new Set;v.add(u),t.updateQueue=v}else w.add(u);break e}else{if(!(t&1)){zu(o,c,t),Ss();break e}u=Error(E(426))}}else if(re&&s.mode&1){var C=Ru(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ou(C,l,s,o,t),ns(Kn(u,s));break e}}o=u=Kn(u,s),ve!==4&&(ve=2),zr===null?zr=[o]:zr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=tf(o,u,t);ku(o,f);break e;case 1:s=u;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Zt===null||!Zt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=nf(o,s,t);ku(o,x);break e}}o=o.return}while(o!==null)}Sf(n)}catch(j){t=j,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(1)}function xf(){var e=io.current;return io.current=ro,e===null?ro:e}function Ss(){(ve===0||ve===3||ve===2)&&(ve=4),Se===null||!(gn&268435455)&&!(Eo&268435455)||Ut(Se,Ie)}function ao(e,t){var n=b;b|=2;var r=xf();(Se!==e||Ie!==t)&&(kt=null,fn(e,t));do try{jm();break}catch(i){yf(e,i)}while(1);if(is(),b=n,io.current=r,pe!==null)throw Error(E(261));return Se=null,Ie=0,ve}function jm(){for(;pe!==null;)wf(pe)}function Em(){for(;pe!==null&&!Kp();)wf(pe)}function wf(e){var t=kf(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?Sf(e):pe=t,gs.current=null}function Sf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ym(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,pe=null;return}}else if(n=vm(n,t,_e),n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ve===0&&(ve=5)}function sn(e,t,n){var r=K,i=lt.transition;try{lt.transition=null,K=1,Pm(e,t,n,r)}finally{lt.transition=i,K=r}return null}function Pm(e,t,n,r){do bn();while(Qt!==null);if(b&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ah(e,o),e===Se&&(pe=Se=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Si||(Si=!0,jf(Vi,function(){return bn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=lt.transition,lt.transition=null;var l=K;K=1;var s=b;b|=4,gs.current=null,wm(e,n),Af(n,e),$h(ea),Yi=!!ql,ea=ql=null,e.current=n,Sm(n),Jp(),b=s,K=l,lt.transition=o}else e.current=n;if(Si&&(Si=!1,Qt=e,lo=i),o=e.pendingLanes,o===0&&(Zt=null),th(n.stateNode),Xe(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=xa,xa=null,e;return lo&1&&e.tag!==0&&bn(),o=e.pendingLanes,o&1?e===wa?Rr++:(Rr=0,wa=e):Rr=0,ln(),null}function bn(){if(Qt!==null){var e=td(lo),t=lt.transition,n=K;try{if(lt.transition=null,K=16>e?16:e,Qt===null)var r=!1;else{if(e=Qt,Qt=null,lo=0,b&6)throw Error(E(331));var i=b;for(b|=4,L=e.current;L!==null;){var o=L,l=o.child;if(L.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(L=c;L!==null;){var m=L;switch(m.tag){case 0:case 11:case 15:Nr(8,m,o)}var h=m.child;if(h!==null)h.return=m,L=h;else for(;L!==null;){m=L;var A=m.sibling,S=m.return;if(pf(m),m===c){L=null;break}if(A!==null){A.return=S,L=A;break}L=S}}}var w=o.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}L=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,L=l;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Nr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,L=f;break e}L=o.return}}var d=e.current;for(L=d;L!==null;){l=L;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,L=p;else e:for(l=d;L!==null;){if(s=L,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:jo(9,s)}}catch(j){se(s,s.return,j)}if(s===l){L=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,L=x;break e}L=s.return}}if(b=i,ln(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(go,e)}catch{}r=!0}return r}finally{K=n,lt.transition=t}}return!1}function bu(e,t,n){t=Kn(n,t),t=tf(e,t,1),e=_t(e,t,1),t=Me(),e!==null&&(ei(e,1,t),Xe(e,t))}function se(e,t,n){if(e.tag===3)bu(e,e,n);else for(;t!==null;){if(t.tag===3){bu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=Kn(n,e),e=nf(t,e,1),t=_t(t,e,1),e=Me(),t!==null&&(ei(t,1,e),Xe(t,e));break}}t=t.return}}function Im(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(Ie&n)===n&&(ve===4||ve===3&&(Ie&130023424)===Ie&&500>de()-ys?fn(e,0):vs|=n),Xe(e,t)}function Cf(e,t){t===0&&(e.mode&1?(t=fi,fi<<=1,!(fi&130023424)&&(fi=4194304)):t=1);var n=Me();e=Ot(e,t),e!==null&&(ei(e,t,n),Xe(e,n))}function Nm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cf(e,n)}function zm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Cf(e,n)}var kf;kf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return be=!1,gm(e,t,n);be=!!(e.flags&131072)}else be=!1,re&&t.flags&1048576&&Pd(t,Ki,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ti(e,t),e=t.pendingProps;var i=$n(t,Te.current);Yn(t,n),i=fs(null,t,r,e,i,n);var o=ps();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(o=!0,_i(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,as(t),i.updater=ko,t.stateNode=i,i._reactInternals=t,ua(t,r,e,n),t=fa(null,t,r,!0,o,n)):(t.tag=0,re&&o&&es(t),Fe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ti(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Om(r),e=pt(r,e),i){case 0:t=da(null,t,r,e,n);break e;case 1:t=Lu(null,t,r,e,n);break e;case 11:t=Bu(null,t,r,e,n);break e;case 14:t=Tu(null,t,r,pt(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),da(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Lu(e,t,r,i,n);case 3:e:{if(af(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Bd(e,t),eo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Kn(Error(E(423)),t),t=Fu(e,t,r,n,i);break e}else if(r!==i){i=Kn(Error(E(424)),t),t=Fu(e,t,r,n,i);break e}else for(Ze=Xt(t.stateNode.containerInfo.firstChild),Ke=t,re=!0,mt=null,n=Rd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xn(),r===i){t=Bt(e,t,n);break e}Fe(e,t,r,n)}t=t.child}return t;case 5:return Td(t),e===null&&la(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ta(r,i)?l=null:o!==null&&ta(r,o)&&(t.flags|=32),lf(e,t),Fe(e,t,l,n),t.child;case 6:return e===null&&la(t),null;case 13:return sf(e,t,n);case 4:return ss(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_n(t,null,r,n):Fe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Bu(e,t,r,i,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ee(Ji,r._currentValue),r._currentValue=l,o!==null)if(vt(o.value,l)){if(o.children===i.children&&!He.current){t=Bt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Nt(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),aa(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(E(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),aa(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Fe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Yn(t,n),i=at(i),r=r(i),t.flags|=1,Fe(e,t,r,n),t.child;case 14:return r=t.type,i=pt(r,t.pendingProps),i=pt(r.type,i),Tu(e,t,r,i,n);case 15:return rf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Ti(e,t),t.tag=1,$e(r)?(e=!0,_i(t)):e=!1,Yn(t,n),ef(t,r,i),ua(t,r,i,n),fa(null,t,r,!0,e,n);case 19:return uf(e,t,n);case 22:return of(e,t,n)}throw Error(E(156,t.tag))};function jf(e,t){return Kc(e,t)}function Rm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new Rm(e,t,n,r)}function Cs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Om(e){if(typeof e=="function")return Cs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Va)return 11;if(e===Qa)return 14}return 2}function Jt(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Cs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case In:return pn(n.children,i,o,t);case Ua:l=8,i|=8;break;case Bl:return e=ot(12,n,t,i|2),e.elementType=Bl,e.lanes=o,e;case Tl:return e=ot(13,n,t,i),e.elementType=Tl,e.lanes=o,e;case Ll:return e=ot(19,n,t,i),e.elementType=Ll,e.lanes=o,e;case Tc:return Po(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Oc:l=10;break e;case Bc:l=9;break e;case Va:l=11;break e;case Qa:l=14;break e;case Dt:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=ot(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function pn(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function Po(e,t,n,r){return e=ot(22,e,r,t),e.elementType=Tc,e.lanes=n,e.stateNode={isHidden:!1},e}function El(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function Pl(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=al(0),this.expirationTimes=al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=al(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ks(e,t,n,r,i,o,l,s,u){return e=new Bm(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ot(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},as(o),e}function Tm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ef(e){if(!e)return nn;e=e._reactInternals;e:{if(xn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if($e(n))return jd(e,n,t)}return t}function Pf(e,t,n,r,i,o,l,s,u){return e=ks(n,r,!0,e,i,o,l,s,u),e.context=Ef(null),n=e.current,r=Me(),i=Kt(n),o=Nt(r,i),o.callback=t??null,_t(n,o,i),e.current.lanes=i,ei(e,i,r),Xe(e,r),e}function Io(e,t,n,r){var i=t.current,o=Me(),l=Kt(i);return n=Ef(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_t(i,t,l),e!==null&&(gt(e,i,l,o),Ri(e,i,l)),l}function so(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function js(e,t){Hu(e,t),(e=e.alternate)&&Hu(e,t)}function Lm(){return null}var If=typeof reportError=="function"?reportError:function(e){console.error(e)};function Es(e){this._internalRoot=e}No.prototype.render=Es.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Io(e,t,null,null)};No.prototype.unmount=Es.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vn(function(){Io(null,e,null,null)}),t[Rt]=null}};function No(e){this._internalRoot=e}No.prototype.unstable_scheduleHydration=function(e){if(e){var t=id();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wt.length&&t!==0&&t<Wt[n].priority;n++);Wt.splice(n,0,e),n===0&&ld(e)}};function Ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $u(){}function Fm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=so(l);o.call(c)}}var l=Pf(t,r,e,0,null,!1,!1,"",$u);return e._reactRootContainer=l,e[Rt]=l.current,Ur(e.nodeType===8?e.parentNode:e),vn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=so(u);s.call(c)}}var u=ks(e,0,!1,null,null,!1,!1,"",$u);return e._reactRootContainer=u,e[Rt]=u.current,Ur(e.nodeType===8?e.parentNode:e),vn(function(){Io(t,u,n,r)}),u}function Ro(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=so(l);s.call(u)}}Io(t,l,e,i)}else l=Fm(n,t,e,i,r);return so(l)}nd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xr(t.pendingLanes);n!==0&&(Ha(t,n|1),Xe(t,de()),!(b&6)&&(Jn=de()+500,ln()))}break;case 13:vn(function(){var r=Ot(e,1);if(r!==null){var i=Me();gt(r,e,1,i)}}),js(e,1)}};$a=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=Me();gt(t,e,134217728,n)}js(e,134217728)}};rd=function(e){if(e.tag===13){var t=Kt(e),n=Ot(e,t);if(n!==null){var r=Me();gt(n,e,t,r)}js(e,t)}};id=function(){return K};od=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};bl=function(e,t,n){switch(t){case"input":if(Dl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wo(r);if(!i)throw Error(E(90));Fc(r),Dl(r,i)}}}break;case"textarea":Dc(e,n);break;case"select":t=n.value,t!=null&&Wn(e,!!n.multiple,t,!1)}};bc=xs;Hc=vn;var Mm={usingClientEntryPoint:!1,Events:[ni,On,wo,Qc,Yc,xs]},Ar={findFiberByHostInstance:un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dm={bundleType:Ar.bundleType,version:Ar.version,rendererPackageName:Ar.rendererPackageName,rendererConfig:Ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_c(e),e===null?null:e.stateNode},findFiberByHostInstance:Ar.findFiberByHostInstance||Lm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ci.isDisabled&&Ci.supportsFiber)try{go=Ci.inject(Dm),St=Ci}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mm;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ps(t))throw Error(E(200));return Tm(e,t,null,n)};qe.createRoot=function(e,t){if(!Ps(e))throw Error(E(299));var n=!1,r="",i=If;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ks(e,1,!1,null,null,n,!1,r,i),e[Rt]=t.current,Ur(e.nodeType===8?e.parentNode:e),new Es(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=_c(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return vn(e)};qe.hydrate=function(e,t,n){if(!zo(t))throw Error(E(200));return Ro(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!Ps(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=If;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Pf(t,null,e,1,n??null,i,!1,o,l),e[Rt]=t.current,Ur(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new No(t)};qe.render=function(e,t,n){if(!zo(t))throw Error(E(200));return Ro(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!zo(e))throw Error(E(40));return e._reactRootContainer?(vn(function(){Ro(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};qe.unstable_batchedUpdates=xs;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zo(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ro(e,t,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function Nf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nf)}catch(e){console.error(e)}}Nf(),Ic.exports=qe;var Gm=Ic.exports,Xu=Gm;Rl.createRoot=Xu.createRoot,Rl.hydrateRoot=Xu.hydrateRoot;var zf={exports:{}},J={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Is=Symbol.for("react.element"),Ns=Symbol.for("react.portal"),Oo=Symbol.for("react.fragment"),Bo=Symbol.for("react.strict_mode"),To=Symbol.for("react.profiler"),Lo=Symbol.for("react.provider"),Fo=Symbol.for("react.context"),Wm=Symbol.for("react.server_context"),Mo=Symbol.for("react.forward_ref"),Do=Symbol.for("react.suspense"),Go=Symbol.for("react.suspense_list"),Wo=Symbol.for("react.memo"),Uo=Symbol.for("react.lazy"),Um=Symbol.for("react.offscreen"),Rf;Rf=Symbol.for("react.module.reference");function ut(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Is:switch(e=e.type,e){case Oo:case To:case Bo:case Do:case Go:return e;default:switch(e=e&&e.$$typeof,e){case Wm:case Fo:case Mo:case Uo:case Wo:case Lo:return e;default:return t}}case Ns:return t}}}J.ContextConsumer=Fo;J.ContextProvider=Lo;J.Element=Is;J.ForwardRef=Mo;J.Fragment=Oo;J.Lazy=Uo;J.Memo=Wo;J.Portal=Ns;J.Profiler=To;J.StrictMode=Bo;J.Suspense=Do;J.SuspenseList=Go;J.isAsyncMode=function(){return!1};J.isConcurrentMode=function(){return!1};J.isContextConsumer=function(e){return ut(e)===Fo};J.isContextProvider=function(e){return ut(e)===Lo};J.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Is};J.isForwardRef=function(e){return ut(e)===Mo};J.isFragment=function(e){return ut(e)===Oo};J.isLazy=function(e){return ut(e)===Uo};J.isMemo=function(e){return ut(e)===Wo};J.isPortal=function(e){return ut(e)===Ns};J.isProfiler=function(e){return ut(e)===To};J.isStrictMode=function(e){return ut(e)===Bo};J.isSuspense=function(e){return ut(e)===Do};J.isSuspenseList=function(e){return ut(e)===Go};J.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Oo||e===To||e===Bo||e===Do||e===Go||e===Um||typeof e=="object"&&e!==null&&(e.$$typeof===Uo||e.$$typeof===Wo||e.$$typeof===Lo||e.$$typeof===Fo||e.$$typeof===Mo||e.$$typeof===Rf||e.getModuleId!==void 0)};J.typeOf=ut;zf.exports=J;var Of=zf.exports;function Vm(e){function t(I,z,T,G,y){for(var Y=0,N=0,ae=0,X=0,Z,U,ke=0,We=0,H,ze=H=Z=0,_=0,je=0,ar=0,Ee=0,li=T.length,sr=li-1,ct,W="",ce="",el="",tl="",Lt;_<li;){if(U=T.charCodeAt(_),_===sr&&N+X+ae+Y!==0&&(N!==0&&(U=N===47?10:47),X=ae=Y=0,li++,sr++),N+X+ae+Y===0){if(_===sr&&(0<je&&(W=W.replace(A,"")),0<W.trim().length)){switch(U){case 32:case 9:case 59:case 13:case 10:break;default:W+=T.charAt(_)}U=59}switch(U){case 123:for(W=W.trim(),Z=W.charCodeAt(0),H=1,Ee=++_;_<li;){switch(U=T.charCodeAt(_)){case 123:H++;break;case 125:H--;break;case 47:switch(U=T.charCodeAt(_+1)){case 42:case 47:e:{for(ze=_+1;ze<sr;++ze)switch(T.charCodeAt(ze)){case 47:if(U===42&&T.charCodeAt(ze-1)===42&&_+2!==ze){_=ze+1;break e}break;case 10:if(U===47){_=ze+1;break e}}_=ze}}break;case 91:U++;case 40:U++;case 34:case 39:for(;_++<sr&&T.charCodeAt(_)!==U;);}if(H===0)break;_++}switch(H=T.substring(Ee,_),Z===0&&(Z=(W=W.replace(h,"").trim()).charCodeAt(0)),Z){case 64:switch(0<je&&(W=W.replace(A,"")),U=W.charCodeAt(1),U){case 100:case 109:case 115:case 45:je=z;break;default:je=nt}if(H=t(z,je,H,U,y+1),Ee=H.length,0<P&&(je=n(nt,W,ar),Lt=s(3,H,je,z,me,ue,Ee,U,y,G),W=je.join(""),Lt!==void 0&&(Ee=(H=Lt.trim()).length)===0&&(U=0,H="")),0<Ee)switch(U){case 115:W=W.replace(R,l);case 100:case 109:case 45:H=W+"{"+H+"}";break;case 107:W=W.replace(d,"$1 $2"),H=W+"{"+H+"}",H=ye===1||ye===2&&o("@"+H,3)?"@-webkit-"+H+"@"+H:"@"+H;break;default:H=W+H,G===112&&(H=(ce+=H,""))}else H="";break;default:H=t(z,n(z,W,ar),H,G,y+1)}el+=H,H=ar=je=ze=Z=0,W="",U=T.charCodeAt(++_);break;case 125:case 59:if(W=(0<je?W.replace(A,""):W).trim(),1<(Ee=W.length))switch(ze===0&&(Z=W.charCodeAt(0),Z===45||96<Z&&123>Z)&&(Ee=(W=W.replace(" ",":")).length),0<P&&(Lt=s(1,W,z,I,me,ue,ce.length,G,y,G))!==void 0&&(Ee=(W=Lt.trim()).length)===0&&(W="\0\0"),Z=W.charCodeAt(0),U=W.charCodeAt(1),Z){case 0:break;case 64:if(U===105||U===99){tl+=W+T.charAt(_);break}default:W.charCodeAt(Ee-1)!==58&&(ce+=i(W,Z,U,W.charCodeAt(2)))}ar=je=ze=Z=0,W="",U=T.charCodeAt(++_)}}switch(U){case 13:case 10:N===47?N=0:1+Z===0&&G!==107&&0<W.length&&(je=1,W+="\0"),0<P*D&&s(0,W,z,I,me,ue,ce.length,G,y,G),ue=1,me++;break;case 59:case 125:if(N+X+ae+Y===0){ue++;break}default:switch(ue++,ct=T.charAt(_),U){case 9:case 32:if(X+Y+N===0)switch(ke){case 44:case 58:case 9:case 32:ct="";break;default:U!==32&&(ct=" ")}break;case 0:ct="\\0";break;case 12:ct="\\f";break;case 11:ct="\\v";break;case 38:X+N+Y===0&&(je=ar=1,ct="\f"+ct);break;case 108:if(X+N+Y+Le===0&&0<ze)switch(_-ze){case 2:ke===112&&T.charCodeAt(_-3)===58&&(Le=ke);case 8:We===111&&(Le=We)}break;case 58:X+N+Y===0&&(ze=_);break;case 44:N+ae+X+Y===0&&(je=1,ct+="\r");break;case 34:case 39:N===0&&(X=X===U?0:X===0?U:X);break;case 91:X+N+ae===0&&Y++;break;case 93:X+N+ae===0&&Y--;break;case 41:X+N+Y===0&&ae--;break;case 40:if(X+N+Y===0){if(Z===0)switch(2*ke+3*We){case 533:break;default:Z=1}ae++}break;case 64:N+ae+X+Y+ze+H===0&&(H=1);break;case 42:case 47:if(!(0<X+Y+ae))switch(N){case 0:switch(2*U+3*T.charCodeAt(_+1)){case 235:N=47;break;case 220:Ee=_,N=42}break;case 42:U===47&&ke===42&&Ee+2!==_&&(T.charCodeAt(Ee+2)===33&&(ce+=T.substring(Ee,_+1)),ct="",N=0)}}N===0&&(W+=ct)}We=ke,ke=U,_++}if(Ee=ce.length,0<Ee){if(je=z,0<P&&(Lt=s(2,ce,je,I,me,ue,Ee,G,y,G),Lt!==void 0&&(ce=Lt).length===0))return tl+ce+el;if(ce=je.join(",")+"{"+ce+"}",ye*Le!==0){switch(ye!==2||o(ce,2)||(Le=0),Le){case 111:ce=ce.replace(x,":-moz-$1")+ce;break;case 112:ce=ce.replace(p,"::-webkit-input-$1")+ce.replace(p,"::-moz-$1")+ce.replace(p,":-ms-input-$1")+ce}Le=0}}return tl+ce+el}function n(I,z,T){var G=z.trim().split(C);z=G;var y=G.length,Y=I.length;switch(Y){case 0:case 1:var N=0;for(I=Y===0?"":I[0]+" ";N<y;++N)z[N]=r(I,z[N],T).trim();break;default:var ae=N=0;for(z=[];N<y;++N)for(var X=0;X<Y;++X)z[ae++]=r(I[X]+" ",G[N],T).trim()}return z}function r(I,z,T){var G=z.charCodeAt(0);switch(33>G&&(G=(z=z.trim()).charCodeAt(0)),G){case 38:return z.replace(f,"$1"+I.trim());case 58:return I.trim()+z.replace(f,"$1"+I.trim());default:if(0<1*T&&0<z.indexOf("\f"))return z.replace(f,(I.charCodeAt(0)===58?"":"$1")+I.trim())}return I+z}function i(I,z,T,G){var y=I+";",Y=2*z+3*T+4*G;if(Y===944){I=y.indexOf(":",9)+1;var N=y.substring(I,y.length-1).trim();return N=y.substring(0,I).trim()+N+";",ye===1||ye===2&&o(N,1)?"-webkit-"+N+N:N}if(ye===0||ye===2&&!o(y,1))return y;switch(Y){case 1015:return y.charCodeAt(10)===97?"-webkit-"+y+y:y;case 951:return y.charCodeAt(3)===116?"-webkit-"+y+y:y;case 963:return y.charCodeAt(5)===110?"-webkit-"+y+y:y;case 1009:if(y.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+y+y;case 978:return"-webkit-"+y+"-moz-"+y+y;case 1019:case 983:return"-webkit-"+y+"-moz-"+y+"-ms-"+y+y;case 883:if(y.charCodeAt(8)===45)return"-webkit-"+y+y;if(0<y.indexOf("image-set(",11))return y.replace(fe,"$1-webkit-$2")+y;break;case 932:if(y.charCodeAt(4)===45)switch(y.charCodeAt(5)){case 103:return"-webkit-box-"+y.replace("-grow","")+"-webkit-"+y+"-ms-"+y.replace("grow","positive")+y;case 115:return"-webkit-"+y+"-ms-"+y.replace("shrink","negative")+y;case 98:return"-webkit-"+y+"-ms-"+y.replace("basis","preferred-size")+y}return"-webkit-"+y+"-ms-"+y+y;case 964:return"-webkit-"+y+"-ms-flex-"+y+y;case 1023:if(y.charCodeAt(8)!==99)break;return N=y.substring(y.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+N+"-webkit-"+y+"-ms-flex-pack"+N+y;case 1005:return w.test(y)?y.replace(S,":-webkit-")+y.replace(S,":-moz-")+y:y;case 1e3:switch(N=y.substring(13).trim(),z=N.indexOf("-")+1,N.charCodeAt(0)+N.charCodeAt(z)){case 226:N=y.replace(j,"tb");break;case 232:N=y.replace(j,"tb-rl");break;case 220:N=y.replace(j,"lr");break;default:return y}return"-webkit-"+y+"-ms-"+N+y;case 1017:if(y.indexOf("sticky",9)===-1)break;case 975:switch(z=(y=I).length-10,N=(y.charCodeAt(z)===33?y.substring(0,z):y).substring(I.indexOf(":",7)+1).trim(),Y=N.charCodeAt(0)+(N.charCodeAt(7)|0)){case 203:if(111>N.charCodeAt(8))break;case 115:y=y.replace(N,"-webkit-"+N)+";"+y;break;case 207:case 102:y=y.replace(N,"-webkit-"+(102<Y?"inline-":"")+"box")+";"+y.replace(N,"-webkit-"+N)+";"+y.replace(N,"-ms-"+N+"box")+";"+y}return y+";";case 938:if(y.charCodeAt(5)===45)switch(y.charCodeAt(6)){case 105:return N=y.replace("-items",""),"-webkit-"+y+"-webkit-box-"+N+"-ms-flex-"+N+y;case 115:return"-webkit-"+y+"-ms-flex-item-"+y.replace(B,"")+y;default:return"-webkit-"+y+"-ms-flex-line-pack"+y.replace("align-content","").replace(B,"")+y}break;case 973:case 989:if(y.charCodeAt(3)!==45||y.charCodeAt(4)===122)break;case 931:case 953:if(M.test(I)===!0)return(N=I.substring(I.indexOf(":")+1)).charCodeAt(0)===115?i(I.replace("stretch","fill-available"),z,T,G).replace(":fill-available",":stretch"):y.replace(N,"-webkit-"+N)+y.replace(N,"-moz-"+N.replace("fill-",""))+y;break;case 962:if(y="-webkit-"+y+(y.charCodeAt(5)===102?"-ms-"+y:"")+y,T+G===211&&y.charCodeAt(13)===105&&0<y.indexOf("transform",10))return y.substring(0,y.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+y}return y}function o(I,z){var T=I.indexOf(z===1?":":"{"),G=I.substring(0,z!==3?T:10);return T=I.substring(T+1,I.length-1),F(z!==2?G:G.replace(Q,"$1"),T,z)}function l(I,z){var T=i(z,z.charCodeAt(0),z.charCodeAt(1),z.charCodeAt(2));return T!==z+";"?T.replace(O," or ($1)").substring(4):"("+z+")"}function s(I,z,T,G,y,Y,N,ae,X,Z){for(var U=0,ke=z,We;U<P;++U)switch(We=xe[U].call(m,I,ke,T,G,y,Y,N,ae,X,Z)){case void 0:case!1:case!0:case null:break;default:ke=We}if(ke!==z)return ke}function u(I){switch(I){case void 0:case null:P=xe.length=0;break;default:if(typeof I=="function")xe[P++]=I;else if(typeof I=="object")for(var z=0,T=I.length;z<T;++z)u(I[z]);else D=!!I|0}return u}function c(I){return I=I.prefix,I!==void 0&&(F=null,I?typeof I!="function"?ye=1:(ye=2,F=I):ye=0),c}function m(I,z){var T=I;if(33>T.charCodeAt(0)&&(T=T.trim()),$=T,T=[$],0<P){var G=s(-1,z,T,T,me,ue,0,0,0,0);G!==void 0&&typeof G=="string"&&(z=G)}var y=t(nt,T,z,0,0);return 0<P&&(G=s(-2,y,T,T,me,ue,y.length,0,0,0),G!==void 0&&(y=G)),$="",Le=0,ue=me=1,y}var h=/^\0+/g,A=/[\0\r\f]/g,S=/: */g,w=/zoo|gra/,v=/([,: ])(transform)/g,C=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,x=/:(read-only)/g,j=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,O=/([\s\S]*?);/g,B=/-self|flex-/g,Q=/[^]*?(:[rp][el]a[\w-]+)[^]*/,M=/stretch|:\s*\w+\-(?:conte|avail)/,fe=/([^-])(image-set\()/,ue=1,me=1,Le=0,ye=1,nt=[],xe=[],P=0,F=null,D=0,$="";return m.use=u,m.set=c,e!==void 0&&c(e),m}var Qm={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ym(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var bm=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,_u=Ym(function(e){return bm.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Bf={exports:{}},q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ce=typeof Symbol=="function"&&Symbol.for,zs=Ce?Symbol.for("react.element"):60103,Rs=Ce?Symbol.for("react.portal"):60106,Vo=Ce?Symbol.for("react.fragment"):60107,Qo=Ce?Symbol.for("react.strict_mode"):60108,Yo=Ce?Symbol.for("react.profiler"):60114,bo=Ce?Symbol.for("react.provider"):60109,Ho=Ce?Symbol.for("react.context"):60110,Os=Ce?Symbol.for("react.async_mode"):60111,$o=Ce?Symbol.for("react.concurrent_mode"):60111,Xo=Ce?Symbol.for("react.forward_ref"):60112,_o=Ce?Symbol.for("react.suspense"):60113,Hm=Ce?Symbol.for("react.suspense_list"):60120,Zo=Ce?Symbol.for("react.memo"):60115,Ko=Ce?Symbol.for("react.lazy"):60116,$m=Ce?Symbol.for("react.block"):60121,Xm=Ce?Symbol.for("react.fundamental"):60117,_m=Ce?Symbol.for("react.responder"):60118,Zm=Ce?Symbol.for("react.scope"):60119;function tt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case zs:switch(e=e.type,e){case Os:case $o:case Vo:case Yo:case Qo:case _o:return e;default:switch(e=e&&e.$$typeof,e){case Ho:case Xo:case Ko:case Zo:case bo:return e;default:return t}}case Rs:return t}}}function Tf(e){return tt(e)===$o}q.AsyncMode=Os;q.ConcurrentMode=$o;q.ContextConsumer=Ho;q.ContextProvider=bo;q.Element=zs;q.ForwardRef=Xo;q.Fragment=Vo;q.Lazy=Ko;q.Memo=Zo;q.Portal=Rs;q.Profiler=Yo;q.StrictMode=Qo;q.Suspense=_o;q.isAsyncMode=function(e){return Tf(e)||tt(e)===Os};q.isConcurrentMode=Tf;q.isContextConsumer=function(e){return tt(e)===Ho};q.isContextProvider=function(e){return tt(e)===bo};q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===zs};q.isForwardRef=function(e){return tt(e)===Xo};q.isFragment=function(e){return tt(e)===Vo};q.isLazy=function(e){return tt(e)===Ko};q.isMemo=function(e){return tt(e)===Zo};q.isPortal=function(e){return tt(e)===Rs};q.isProfiler=function(e){return tt(e)===Yo};q.isStrictMode=function(e){return tt(e)===Qo};q.isSuspense=function(e){return tt(e)===_o};q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Vo||e===$o||e===Yo||e===Qo||e===_o||e===Hm||typeof e=="object"&&e!==null&&(e.$$typeof===Ko||e.$$typeof===Zo||e.$$typeof===bo||e.$$typeof===Ho||e.$$typeof===Xo||e.$$typeof===Xm||e.$$typeof===_m||e.$$typeof===Zm||e.$$typeof===$m)};q.typeOf=tt;Bf.exports=q;var Km=Bf.exports,Bs=Km,Jm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},eA={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Lf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ts={};Ts[Bs.ForwardRef]=eA;Ts[Bs.Memo]=Lf;function Zu(e){return Bs.isMemo(e)?Lf:Ts[e.$$typeof]||Jm}var tA=Object.defineProperty,nA=Object.getOwnPropertyNames,Ku=Object.getOwnPropertySymbols,rA=Object.getOwnPropertyDescriptor,iA=Object.getPrototypeOf,Ju=Object.prototype;function Ff(e,t,n){if(typeof t!="string"){if(Ju){var r=iA(t);r&&r!==Ju&&Ff(e,r,n)}var i=nA(t);Ku&&(i=i.concat(Ku(t)));for(var o=Zu(e),l=Zu(t),s=0;s<i.length;++s){var u=i[s];if(!qm[u]&&!(n&&n[u])&&!(l&&l[u])&&!(o&&o[u])){var c=rA(t,u);try{tA(e,u,c)}catch{}}}}return e}var oA=Ff;const lA=Ac(oA);function It(){return(It=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var qu=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},ka=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Of.typeOf(e)},uo=Object.freeze([]),qt=Object.freeze({});function Zr(e){return typeof e=="function"}function ec(e){return e.displayName||e.name||"Component"}function Ls(e){return e&&typeof e.styledComponentId=="string"}var qn=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Fs=typeof window<"u"&&"HTMLElement"in window,aA=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function ii(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var sA=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&ii(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var s=o;s<l;s++)this.groupSizes[s]=0}for(var u=this.indexOfGroup(n+1),c=0,m=r.length;c<m;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,s=o;s<l;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),Di=new Map,co=new Map,Or=1,ki=function(e){if(Di.has(e))return Di.get(e);for(;co.has(Or);)Or++;var t=Or++;return Di.set(e,t),co.set(t,e),t},uA=function(e){return co.get(e)},cA=function(e,t){t>=Or&&(Or=t+1),Di.set(e,t),co.set(t,e)},dA="style["+qn+'][data-styled-version="5.3.9"]',fA=new RegExp("^"+qn+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),pA=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},hA=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var s=l.match(fA);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(cA(c,u),pA(e,c,s[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(l)}}},mA=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Mf=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){for(var u=s.childNodes,c=u.length;c>=0;c--){var m=u[c];if(m&&m.nodeType===1&&m.hasAttribute(qn))return m}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(qn,"active"),r.setAttribute("data-styled-version","5.3.9");var l=mA();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},AA=function(){function e(n){var r=this.element=Mf(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,s=o.length;l<s;l++){var u=o[l];if(u.ownerNode===i)return u}ii(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),gA=function(){function e(n){var r=this.element=Mf(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),vA=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),tc=Fs,yA={isServer:!Fs,useCSSOMInjection:!aA},Df=function(){function e(n,r,i){n===void 0&&(n=qt),r===void 0&&(r={}),this.options=It({},yA,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Fs&&tc&&(tc=!1,function(o){for(var l=document.querySelectorAll(dA),s=0,u=l.length;s<u;s++){var c=l[s];c&&c.getAttribute(qn)!=="active"&&(hA(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return ki(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(It({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new vA(l):o?new AA(l):new gA(l),new sA(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(ki(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(ki(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(ki(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var s=uA(l);if(s!==void 0){var u=n.names.get(s),c=r.getGroup(l);if(u&&c&&u.size){var m=qn+".g"+l+'[id="'+s+'"]',h="";u!==void 0&&u.forEach(function(A){A.length>0&&(h+=A+",")}),o+=""+c+m+'{content:"'+h+`"}/*!sc*/
`}}}return o}(this)},e}(),xA=/(a)(d)/gi,nc=function(e){return String.fromCharCode(e+(e>25?39:97))};function ja(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=nc(t%52)+n;return(nc(t%52)+n).replace(xA,"$1-$2")}var Gn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Gf=function(e){return Gn(5381,e)};function wA(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Zr(n)&&!Ls(n))return!1}return!0}var SA=Gf("5.3.9"),CA=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&wA(t),this.componentId=n,this.baseHash=Gn(SA,n),this.baseStyle=r,Df.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=er(this.rules,t,n,r).join(""),s=ja(Gn(this.baseHash,l)>>>0);if(!n.hasNameForId(i,s)){var u=r(l,"."+s,void 0,i);n.insertRules(i,s,u)}o.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,m=Gn(this.baseHash,r.hash),h="",A=0;A<c;A++){var S=this.rules[A];if(typeof S=="string")h+=S;else if(S){var w=er(S,t,n,r),v=Array.isArray(w)?w.join(""):w;m=Gn(m,v+A),h+=v}}if(h){var C=ja(m>>>0);if(!n.hasNameForId(i,C)){var f=r(h,"."+C,void 0,i);n.insertRules(i,C,f)}o.push(C)}}return o.join(" ")},e}(),kA=/^\s*\/\/.*$/gm,jA=[":","[",".","#"];function EA(e){var t,n,r,i,o=e===void 0?qt:e,l=o.options,s=l===void 0?qt:l,u=o.plugins,c=u===void 0?uo:u,m=new Vm(s),h=[],A=function(v){function C(f){if(f)try{v(f+"}")}catch{}}return function(f,d,p,x,j,R,O,B,Q,M){switch(f){case 1:if(Q===0&&d.charCodeAt(0)===64)return v(d+";"),"";break;case 2:if(B===0)return d+"/*|*/";break;case 3:switch(B){case 102:case 112:return v(p[0]+d),"";default:return d+(M===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(C)}}}(function(v){h.push(v)}),S=function(v,C,f){return C===0&&jA.indexOf(f[n.length])!==-1||f.match(i)?v:"."+t};function w(v,C,f,d){d===void 0&&(d="&");var p=v.replace(kA,""),x=C&&f?f+" "+C+" { "+p+" }":p;return t=d,n=C,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),m(f||!C?"":C,x)}return m.use([].concat(c,[function(v,C,f){v===2&&f.length&&f[0].lastIndexOf(n)>0&&(f[0]=f[0].replace(r,S))},A,function(v){if(v===-2){var C=h;return h=[],C}}])),w.hash=c.length?c.reduce(function(v,C){return C.name||ii(15),Gn(v,C.name)},5381).toString():"",w}var Wf=ge.createContext();Wf.Consumer;var Uf=ge.createContext(),PA=(Uf.Consumer,new Df),Ea=EA();function IA(){return k.useContext(Wf)||PA}function NA(){return k.useContext(Uf)||Ea}var Vf=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ea);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return ii(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ea),this.name+t.hash},e}(),zA=/([A-Z])/,RA=/([A-Z])/g,OA=/^ms-/,BA=function(e){return"-"+e.toLowerCase()};function rc(e){return zA.test(e)?e.replace(RA,BA).replace(OA,"-ms-"):e}var ic=function(e){return e==null||e===!1||e===""};function er(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,s=e.length;l<s;l+=1)(i=er(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(ic(e))return"";if(Ls(e))return"."+e.styledComponentId;if(Zr(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var u=e(t);return er(u,t,n,r)}var c;return e instanceof Vf?n?(e.inject(n,r),e.getName(r)):e:ka(e)?function m(h,A){var S,w,v=[];for(var C in h)h.hasOwnProperty(C)&&!ic(h[C])&&(Array.isArray(h[C])&&h[C].isCss||Zr(h[C])?v.push(rc(C)+":",h[C],";"):ka(h[C])?v.push.apply(v,m(h[C],C)):v.push(rc(C)+": "+(S=C,(w=h[C])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||S in Qm?String(w).trim():w+"px")+";"));return A?[A+" {"].concat(v,["}"]):v}(e):e.toString()}var oc=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ir(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Zr(e)||ka(e)?oc(er(qu(uo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:oc(er(qu(e,n)))}var TA=function(e,t,n){return n===void 0&&(n=qt),e.theme!==n.theme&&e.theme||t||n.theme},LA=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,FA=/(^-|-$)/g;function Il(e){return e.replace(LA,"-").replace(FA,"")}var Qf=function(e){return ja(Gf(e)>>>0)};function ji(e){return typeof e=="string"&&!0}var Pa=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},MA=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function DA(e,t,n){var r=e[n];Pa(t)&&Pa(r)?Yf(r,t):e[n]=t}function Yf(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(Pa(l))for(var s in l)MA(s)&&DA(e,l[s],s)}return e}var bf=ge.createContext();bf.Consumer;var Nl={};function Hf(e,t,n){var r=Ls(e),i=!ji(e),o=t.attrs,l=o===void 0?uo:o,s=t.componentId,u=s===void 0?function(d,p){var x=typeof d!="string"?"sc":Il(d);Nl[x]=(Nl[x]||0)+1;var j=x+"-"+Qf("5.3.9"+x+Nl[x]);return p?p+"-"+j:j}(t.displayName,t.parentComponentId):s,c=t.displayName,m=c===void 0?function(d){return ji(d)?"styled."+d:"Styled("+ec(d)+")"}(e):c,h=t.displayName&&t.componentId?Il(t.displayName)+"-"+t.componentId:t.componentId||u,A=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,S=t.shouldForwardProp;r&&e.shouldForwardProp&&(S=t.shouldForwardProp?function(d,p,x){return e.shouldForwardProp(d,p,x)&&t.shouldForwardProp(d,p,x)}:e.shouldForwardProp);var w,v=new CA(n,h,r?e.componentStyle:void 0),C=v.isStatic&&l.length===0,f=function(d,p){return function(x,j,R,O){var B=x.attrs,Q=x.componentStyle,M=x.defaultProps,fe=x.foldedComponentIds,ue=x.shouldForwardProp,me=x.styledComponentId,Le=x.target,ye=function(G,y,Y){G===void 0&&(G=qt);var N=It({},y,{theme:G}),ae={};return Y.forEach(function(X){var Z,U,ke,We=X;for(Z in Zr(We)&&(We=We(N)),We)N[Z]=ae[Z]=Z==="className"?(U=ae[Z],ke=We[Z],U&&ke?U+" "+ke:U||ke):We[Z]}),[N,ae]}(TA(j,k.useContext(bf),M)||qt,j,B),nt=ye[0],xe=ye[1],P=function(G,y,Y,N){var ae=IA(),X=NA(),Z=y?G.generateAndInjectStyles(qt,ae,X):G.generateAndInjectStyles(Y,ae,X);return Z}(Q,O,nt),F=R,D=xe.$as||j.$as||xe.as||j.as||Le,$=ji(D),I=xe!==j?It({},j,{},xe):j,z={};for(var T in I)T[0]!=="$"&&T!=="as"&&(T==="forwardedAs"?z.as=I[T]:(ue?ue(T,_u,D):!$||_u(T))&&(z[T]=I[T]));return j.style&&xe.style!==j.style&&(z.style=It({},j.style,{},xe.style)),z.className=Array.prototype.concat(fe,me,P!==me?P:null,j.className,xe.className).filter(Boolean).join(" "),z.ref=F,k.createElement(D,z)}(w,d,p,C)};return f.displayName=m,(w=ge.forwardRef(f)).attrs=A,w.componentStyle=v,w.displayName=m,w.shouldForwardProp=S,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):uo,w.styledComponentId=h,w.target=r?e.target:e,w.withComponent=function(d){var p=t.componentId,x=function(R,O){if(R==null)return{};var B,Q,M={},fe=Object.keys(R);for(Q=0;Q<fe.length;Q++)B=fe[Q],O.indexOf(B)>=0||(M[B]=R[B]);return M}(t,["componentId"]),j=p&&p+"-"+(ji(d)?d:Il(ec(d)));return Hf(d,It({},x,{attrs:A,componentId:j}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?Yf({},e.defaultProps,d):d}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&lA(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var Ia=function(e){return function t(n,r,i){if(i===void 0&&(i=qt),!Of.isValidElementType(r))return ii(1,String(r));var o=function(){return n(r,i,ir.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,It({},i,{},l))},o.attrs=function(l){return t(n,r,It({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(Hf,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Ia[e]=Ia(e)});function wn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=ir.apply(void 0,[e].concat(n)).join(""),o=Qf(i);return new Vf(o,i)}const g=Ia,gr=48,GA=({color:e="currentColor",direction:t="left",distance:n="md",duration:r=.4,easing:i="cubic-bezier(0, 0, 0, 1)",hideOutline:o=!0,label:l,lines:s=3,onToggle:u,render:c,rounded:m=!1,size:h=32,toggle:A,toggled:S,disabled:w=!1,animateOnMount:v=!1})=>{const[C,f]=k.useState(!1),[d,p]=k.useState(!1);k.useEffect(()=>{p(!0)},[]);const x=Math.max(12,Math.min(gr,h)),j=Math.round((gr-x)/2),R=x/12,O=Math.round(R),Q=x/(s*((n==="lg"?.25:n==="sm"?.75:.5)+(s===3?1:1.25))),M=Math.round(Q),fe=O*s+M*(s-1),ue=Math.round((gr-fe)/2),me=s===3?n==="lg"?4.0425:n==="sm"?5.1625:4.6325:n==="lg"?6.7875:n==="sm"?8.4875:7.6675,Le=(R-O+(Q-M))/(s===3?1:2),ye=parseFloat((x/me-Le/(4/3)).toFixed(2)),nt=Math.max(0,r),xe={cursor:w?"not-allowed":"pointer",height:`${gr}px`,position:"relative",transition:`${nt}s ${i}`,userSelect:"none",width:`${gr}px`},P={background:e,height:`${O}px`,left:`${j}px`,position:"absolute"};o&&(xe.outline="none"),m&&(P.borderRadius="9em");const F=()=>{const z=S!==void 0?S:C;return v&&!d?!z:z},D=A||f,$=F();return c({barHeight:O,barStyles:P,burgerStyles:xe,easing:i,handler:()=>{D(!$),typeof u=="function"&&u(!$)},isLeft:t==="left",isToggled:$,label:l,margin:M,move:ye,time:nt,topOffset:ue,width:x})};function Na(){return Na=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Na.apply(this,arguments)}const WA=e=>ge.createElement(GA,Na({},e,{render:t=>ge.createElement("div",{className:"hamburger-react","aria-label":t.label,"aria-expanded":t.isToggled,onClick:e.disabled?void 0:t.handler,onKeyUp:e.disabled?void 0:n=>n.key==="Enter"&&t.handler(),role:"button",style:{...t.burgerStyles,transform:`${t.isToggled?`rotate(${180*(t.isLeft?-1:1)}deg)`:"none"}`},tabIndex:0},ge.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset}px`,transition:`${t.time}s ${t.easing}`,transform:`${t.isToggled?`rotate(${45*(t.isLeft?-1:1)}deg) translate(${t.move*(t.isLeft?-1:1)}px, ${t.move}px)`:"none"}`}}),ge.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset+t.barHeight+t.margin}px`,transition:`${t.time}s ${t.easing}`,opacity:`${t.isToggled?"0":"1"}`}}),ge.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset+t.barHeight*2+t.margin*2}px`,transition:`${t.time}s ${t.easing}`,transform:`${t.isToggled?`rotate(${45*(t.isLeft?1:-1)}deg) translate(${t.move*(t.isLeft?-1:1)}px, ${t.move*-1}px)`:"none"}`}}))}));/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kr(){return Kr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Kr.apply(this,arguments)}var Yt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Yt||(Yt={}));const lc="popstate";function UA(e){e===void 0&&(e={});function t(i,o){let{pathname:l="/",search:s="",hash:u=""}=Sn(i.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),za("",{pathname:l,search:s,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let l=i.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");s=c===-1?u:u.slice(0,c)}return s+"#"+(typeof o=="string"?o:fo(o))}function r(i,o){Ms(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return QA(t,n,r,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ms(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function VA(){return Math.random().toString(36).substr(2,8)}function ac(e,t){return{usr:e.state,key:e.key,idx:t}}function za(e,t,n,r){return n===void 0&&(n=null),Kr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Sn(t):t,{state:n,key:t&&t.key||r||VA()})}function fo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Sn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function QA(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=Yt.Pop,u=null,c=m();c==null&&(c=0,l.replaceState(Kr({},l.state,{idx:c}),""));function m(){return(l.state||{idx:null}).idx}function h(){s=Yt.Pop;let C=m(),f=C==null?null:C-c;c=C,u&&u({action:s,location:v.location,delta:f})}function A(C,f){s=Yt.Push;let d=za(v.location,C,f);n&&n(d,C),c=m()+1;let p=ac(d,c),x=v.createHref(d);try{l.pushState(p,"",x)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(x)}o&&u&&u({action:s,location:v.location,delta:1})}function S(C,f){s=Yt.Replace;let d=za(v.location,C,f);n&&n(d,C),c=m();let p=ac(d,c),x=v.createHref(d);l.replaceState(p,"",x),o&&u&&u({action:s,location:v.location,delta:0})}function w(C){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof C=="string"?C:fo(C);return d=d.replace(/ $/,"%20"),he(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let v={get action(){return s},get location(){return e(i,l)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(lc,h),u=C,()=>{i.removeEventListener(lc,h),u=null}},createHref(C){return t(i,C)},createURL:w,encodeLocation(C){let f=w(C);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:A,replace:S,go(C){return l.go(C)}};return v}var sc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(sc||(sc={}));function YA(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Sn(t):t,i=Ds(r.pathname||"/",n);if(i==null)return null;let o=$f(e);bA(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let u=r0(i);l=e0(o[s],u)}return l}function $f(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let u={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(he(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=en([r,u.relativePath]),m=n.concat(u);o.children&&o.children.length>0&&(he(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),$f(o.children,t,m,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:JA(c,o.index),routesMeta:m})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let u of Xf(o.path))i(o,l,u)}),t}function Xf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Xf(r.join("/")),s=[];return s.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function bA(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:qA(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const HA=/^:[\w-]+$/,$A=3,XA=2,_A=1,ZA=10,KA=-2,uc=e=>e==="*";function JA(e,t){let n=e.split("/"),r=n.length;return n.some(uc)&&(r+=KA),t&&(r+=XA),n.filter(i=>!uc(i)).reduce((i,o)=>i+(HA.test(o)?$A:o===""?_A:ZA),r)}function qA(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function e0(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let s=n[l],u=l===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",m=t0({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c);if(!m)return null;Object.assign(r,m.params);let h=s.route;o.push({params:r,pathname:en([i,m.pathname]),pathnameBase:a0(en([i,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(i=en([i,m.pathnameBase]))}return o}function t0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=n0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,m,h)=>{let{paramName:A,isOptional:S}=m;if(A==="*"){let v=s[h]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const w=s[h];return S&&!w?c[A]=void 0:c[A]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function n0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ms(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function r0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ms(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ds(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function i0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Sn(e):e;return{pathname:n?n.startsWith("/")?n:o0(n,t):t,search:s0(r),hash:u0(i)}}function o0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function l0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function _f(e,t){let n=l0(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Zf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Sn(e):(i=Kr({},e),he(!i.pathname||!i.pathname.includes("?"),zl("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),zl("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),zl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let h=t.length-1;if(!r&&l.startsWith("..")){let A=l.split("/");for(;A[0]==="..";)A.shift(),h-=1;i.pathname=A.join("/")}s=h>=0?t[h]:"/"}let u=i0(i,s),c=l&&l!=="/"&&l.endsWith("/"),m=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||m)&&(u.pathname+="/"),u}const en=e=>e.join("/").replace(/\/\/+/g,"/"),a0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),s0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,u0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function c0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Kf=["post","put","patch","delete"];new Set(Kf);const d0=["get",...Kf];new Set(d0);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jr(){return Jr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jr.apply(this,arguments)}const Gs=k.createContext(null),f0=k.createContext(null),Cn=k.createContext(null),Jo=k.createContext(null),kn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Jf=k.createContext(null);function p0(e,t){let{relative:n}=t===void 0?{}:t;oi()||he(!1);let{basename:r,navigator:i}=k.useContext(Cn),{hash:o,pathname:l,search:s}=ep(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:en([r,l])),i.createHref({pathname:u,search:s,hash:o})}function oi(){return k.useContext(Jo)!=null}function or(){return oi()||he(!1),k.useContext(Jo).location}function qf(e){k.useContext(Cn).static||k.useLayoutEffect(e)}function h0(){let{isDataRoute:e}=k.useContext(kn);return e?P0():m0()}function m0(){oi()||he(!1);let e=k.useContext(Gs),{basename:t,future:n,navigator:r}=k.useContext(Cn),{matches:i}=k.useContext(kn),{pathname:o}=or(),l=JSON.stringify(_f(i,n.v7_relativeSplatPath)),s=k.useRef(!1);return qf(()=>{s.current=!0}),k.useCallback(function(c,m){if(m===void 0&&(m={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let h=Zf(c,JSON.parse(l),o,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:en([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,l,o,e])}function ep(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(Cn),{matches:i}=k.useContext(kn),{pathname:o}=or(),l=JSON.stringify(_f(i,r.v7_relativeSplatPath));return k.useMemo(()=>Zf(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function A0(e,t){return g0(e,t)}function g0(e,t,n,r){oi()||he(!1);let{navigator:i}=k.useContext(Cn),{matches:o}=k.useContext(kn),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=or(),m;if(t){var h;let C=typeof t=="string"?Sn(t):t;u==="/"||(h=C.pathname)!=null&&h.startsWith(u)||he(!1),m=C}else m=c;let A=m.pathname||"/",S=A;if(u!=="/"){let C=u.replace(/^\//,"").split("/");S="/"+A.replace(/^\//,"").split("/").slice(C.length).join("/")}let w=YA(e,{pathname:S}),v=S0(w&&w.map(C=>Object.assign({},C,{params:Object.assign({},s,C.params),pathname:en([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:en([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,n,r);return t&&v?k.createElement(Jo.Provider,{value:{location:Jr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Yt.Pop}},v):v}function v0(){let e=E0(),t=c0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,o)}const y0=k.createElement(v0,null);class x0 extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(kn.Provider,{value:this.props.routeContext},k.createElement(Jf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function w0(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(Gs);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(kn.Provider,{value:t},r)}function S0(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let m=l.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);m>=0||he(!1),l=l.slice(0,Math.min(l.length,m+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<l.length;m++){let h=l[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=m),h.route.id){let{loaderData:A,errors:S}=n,w=h.route.loader&&A[h.route.id]===void 0&&(!S||S[h.route.id]===void 0);if(h.route.lazy||w){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((m,h,A)=>{let S,w=!1,v=null,C=null;n&&(S=s&&h.route.id?s[h.route.id]:void 0,v=h.route.errorElement||y0,u&&(c<0&&A===0?(I0("route-fallback",!1),w=!0,C=null):c===A&&(w=!0,C=h.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,A+1)),d=()=>{let p;return S?p=v:w?p=C:h.route.Component?p=k.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,k.createElement(w0,{match:h,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||A===0)?k.createElement(x0,{location:n.location,revalidation:n.revalidation,component:v,error:S,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var tp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(tp||{}),po=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(po||{});function C0(e){let t=k.useContext(Gs);return t||he(!1),t}function k0(e){let t=k.useContext(f0);return t||he(!1),t}function j0(e){let t=k.useContext(kn);return t||he(!1),t}function np(e){let t=j0(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function E0(){var e;let t=k.useContext(Jf),n=k0(po.UseRouteError),r=np(po.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function P0(){let{router:e}=C0(tp.UseNavigateStable),t=np(po.UseNavigateStable),n=k.useRef(!1);return qf(()=>{n.current=!0}),k.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Jr({fromRouteId:t},o)))},[e,t])}const cc={};function I0(e,t,n){!t&&!cc[e]&&(cc[e]=!0)}function Sr(e){he(!1)}function N0(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Yt.Pop,navigator:o,static:l=!1,future:s}=e;oi()&&he(!1);let u=t.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:u,navigator:o,static:l,future:Jr({v7_relativeSplatPath:!1},s)}),[u,s,o,l]);typeof r=="string"&&(r=Sn(r));let{pathname:m="/",search:h="",hash:A="",state:S=null,key:w="default"}=r,v=k.useMemo(()=>{let C=Ds(m,u);return C==null?null:{location:{pathname:C,search:h,hash:A,state:S,key:w},navigationType:i}},[u,m,h,A,S,w,i]);return v==null?null:k.createElement(Cn.Provider,{value:c},k.createElement(Jo.Provider,{children:n,value:v}))}function z0(e){let{children:t,location:n}=e;return A0(Ra(t),n)}new Promise(()=>{});function Ra(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let o=[...t,i];if(r.type===k.Fragment){n.push.apply(n,Ra(r.props.children,o));return}r.type!==Sr&&he(!1),!r.props.index||!r.props.children||he(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ra(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oa(){return Oa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oa.apply(this,arguments)}function R0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function O0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function B0(e,t){return e.button===0&&(!t||t==="_self")&&!O0(e)}const T0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],L0="6";try{window.__reactRouterVersion=L0}catch{}const F0="startTransition",dc=Ip[F0];function M0(e){let{basename:t,children:n,future:r,window:i}=e,o=k.useRef();o.current==null&&(o.current=UA({window:i,v5Compat:!0}));let l=o.current,[s,u]=k.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},m=k.useCallback(h=>{c&&dc?dc(()=>u(h)):u(h)},[u,c]);return k.useLayoutEffect(()=>l.listen(m),[l,m]),k.createElement(N0,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const D0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",G0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qo=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:u,to:c,preventScrollReset:m,unstable_viewTransition:h}=t,A=R0(t,T0),{basename:S}=k.useContext(Cn),w,v=!1;if(typeof c=="string"&&G0.test(c)&&(w=c,D0))try{let p=new URL(window.location.href),x=c.startsWith("//")?new URL(p.protocol+c):new URL(c),j=Ds(x.pathname,S);x.origin===p.origin&&j!=null?c=j+x.search+x.hash:v=!0}catch{}let C=p0(c,{relative:i}),f=W0(c,{replace:l,state:s,target:u,preventScrollReset:m,relative:i,unstable_viewTransition:h});function d(p){r&&r(p),p.defaultPrevented||f(p)}return k.createElement("a",Oa({},A,{href:w||C,onClick:v||o?r:d,ref:n,target:u}))});var fc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(fc||(fc={}));var pc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(pc||(pc={}));function W0(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s}=t===void 0?{}:t,u=h0(),c=or(),m=ep(e,{relative:l});return k.useCallback(h=>{if(B0(h,n)){h.preventDefault();let A=r!==void 0?r:fo(c)===fo(m);u(e,{replace:A,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s})}},[c,u,m,r,i,n,e,o,l,s])}const U0="/portfolio/assets/paulEvansCreativeLogo-77817caa.avif",rp="data:image/avif;base64,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",V0=g.nav`
  grid-area: top;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index:150;
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
    /* padding-left: 0em; */
  }
`,Q0=g.div`
  width: 180px;
  height: 100%;
`,Y0=g.div`
  display: flex;

  @media screen and (max-width: 960px) {
    width: 100%;

    justify-content: center;
    margin-bottom: 4em;
  }
`,b0=g.img`
  text-align: center;
  width: 80px;
  margin-top: 1.5em;
  

  @media screen and (max-width: 767px) {
    width: 60px;
    margin-top: 1em;
  }
`,H0=g.img`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    margin-top: 100px;
    width: 250px;
  }
`,$0=g.div`
  float: left;
  width: 200px;
  height: 100%;
  padding-left: 0.5em;
  text-align: left;

  @media screen and (max-width: 960px) {
    /* padding-left: 3em; */
  }

  @media screen and (max-width: 767px) {
    padding-left: 0em;
  }
`,X0=g.ul`
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
`,_0=g(qo)`
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
`,Z0=g.a`
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
`,K0=g.div`
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
`,J0=({footerRef:e})=>{const t=or(),[n,r]=k.useState(!1),[i,o]=k.useState(t.pathname),[l,s]=k.useState(!1),[u,c]=k.useState(window.pageYOffset),[m,h]=k.useState(!0);k.useEffect(()=>{o(t.pathname);const v=()=>{const C=window.pageYOffset;h(u>C||C<10),c(C)};return window.addEventListener("scroll",v),()=>window.removeEventListener("scroll",v)},[t.pathname,u]);const A=()=>{e.current&&e.current.scrollIntoView({behavior:"smooth"}),r(!1),s(!1)},S=()=>{r(!1),s(!1)},w=[{id:1,to:"/",text:"Home"},{id:2,to:"/casestudies",text:"Case Studies"},{id:3,to:"https://www.paulevans-dop.com/",text:"Cinematography",isExternal:!0},{id:4,to:"/about",text:"About"},{id:5,to:"#",text:"Contact",onClick:A}];return a.jsxs(V0,{visible:m,children:[a.jsx(Q0,{children:a.jsx(qo,{to:"/",onClick:S,children:a.jsx($0,{children:a.jsx(b0,{src:U0,alt:"the letters P and E merged together to form the logo Paul Evans Creative"})})})}),a.jsxs(X0,{open:n,children:[w.map(v=>v.isExternal?a.jsx(Z0,{href:v.to,onClick:v.onClick||S,className:i===v.to?"active":"",children:v.text},v.id):a.jsx(_0,{to:v.to,onClick:v.onClick||S,className:i===v.to?"active":"",children:v.text},v.id)),a.jsx(Y0,{children:a.jsx(H0,{src:rp,alt:"the letters P and E merged together to form the logo Paul Evans Creative"})})]}),a.jsx(K0,{children:a.jsx("div",{onClick:()=>{r(!n),s(!l)},children:a.jsx(WA,{toggled:l})})})]})},q0=wn`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,eg=g.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #171717;
`,tg=g.div`
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
    padding-top: 140px;
  }

  @media screen and (max-width: 767px) {
    /* padding-top: 120px; */
    padding-top: 160px;
    padding-bottom: 80px;
  }

  @media screen and (max-width: 478px) {
    padding-left: 40px;
  }

  @media screen and (max-width: 320px) {
    padding-top: 160px;
    padding-bottom: 60px;
    padding-left: 20px;
  }
`,ng=g.div`
  animation: ${q0} 1s ease-out 0.5s forwards;
`,rg=g.p`
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
`,ig=()=>a.jsx(eg,{children:a.jsxs(tg,{children:[a.jsx("h1",{children:"Paul Evans"}),a.jsx(ng,{children:a.jsx("h2",{children:"Digital Experience Designer"})}),a.jsx(rg,{children:"I am a passionate creative who's professional background spans over 20 years, during which time I have worn many hats. Cinematographer, UX / UI designer, frontend developer and not to mention concept developer and writer. This experience brings a unique perspective to Visual Design. Combining these skills to create the ultimate Brand and Customer Experience is something that excites and drives me."})]})}),og="/portfolio/assets/showcase1-e3ff3470.mp4";var ip={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ba=ge.createContext&&ge.createContext(ip),lg=["attr","size","title"];function ag(e,t){if(e==null)return{};var n=sg(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function sg(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ho.apply(this,arguments)}function hc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function mo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hc(Object(n),!0).forEach(function(r){ug(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ug(e,t,n){return t=cg(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cg(e){var t=dg(e,"string");return typeof t=="symbol"?t:t+""}function dg(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function op(e){return e&&e.map((t,n)=>ge.createElement(t.tag,mo({key:n},t.attr),op(t.child)))}function jn(e){return t=>ge.createElement(fg,ho({attr:mo({},e.attr)},t),op(e.child))}function fg(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=ag(e,lg),s=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),ge.createElement("svg",ho({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:u,style:mo(mo({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&ge.createElement("title",null,o),e.children)};return Ba!==void 0?ge.createElement(Ba.Consumer,null,n=>t(n)):t(ip)}function pg(e){return jn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM21.3 229.2H21c.1-.1.2-.3.3-.4zM97 319.8H64V192h33zm113.2 0h-28.7v-86.4l-11.6 86.4h-20.6l-12.2-84.5v84.5h-29V192h42.8c3.3 19.8 6 39.9 8.7 59.9l7.6-59.9h43zm11.4 0V192h24.6c17.6 0 44.7-1.6 49 20.9 1.7 7.6 1.4 16.3 1.4 24.4 0 88.5 11.1 82.6-75 82.5zm160.9-29.2c0 15.7-2.4 30.9-22.2 30.9-9 0-15.2-3-20.9-9.8l-1.9 8.1h-29.8V192h31.7v41.7c6-6.5 12-9.2 20.9-9.2 21.4 0 22.2 12.8 22.2 30.1zM265 229.9c0-9.7 1.6-16-10.3-16v83.7c12.2.3 10.3-8.7 10.3-18.4zm85.5 26.1c0-5.4 1.1-12.7-6.2-12.7-6 0-4.9 8.9-4.9 12.7 0 .6-1.1 39.6 1.1 44.7.8 1.6 2.2 2.4 3.8 2.4 7.8 0 6.2-9 6.2-14.4z"},child:[]}]})(e)}function hg(e){return jn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function mg(e){return jn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function lr(e){return jn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"},child:[]}]})(e)}function Ag(e){return jn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"},child:[]}]})(e)}function lp(e){return jn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"},child:[]}]})(e)}const gg=g.div`
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
`,vg=g.div`
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
`,yg=g.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`,xg=({onClick:e})=>a.jsxs(gg,{children:[a.jsx(vg,{children:a.jsx("a",{href:"https://paulevans-dop.com/",target:"_blank",rel:"noopener noreferrer",children:a.jsx(lr,{onClick:e,size:80})})}),a.jsx(yg,{children:"See Cinematography Reel"})]}),wg=g.div`
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
`,Sg=g.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
`,Cg=g.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000052;
`,kg=g.div`
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
`,jg=g.div`
  margin-top: auto;
`;function Eg(e){const t=k.useRef(null);return k.useEffect(()=>{const n=setTimeout(()=>{t.current&&t.current.play()},4e3);return()=>clearTimeout(n)},[]),a.jsxs(wg,{children:[a.jsx(Sg,{ref:t,src:og,loop:!0,muted:!0,playsInline:!0,alt:"A showreel showing clips from different productions."}),a.jsx(Cg,{children:a.jsxs(kg,{children:[a.jsx("h3",{children:"Cinematographer"}),a.jsx("p",{children:"Member of fsf Föreningen Severiges Filmfotografer (The Association of Swedish Film Cinematographers). Working in Narrative, Commercials, Music Videos and Still Photography."}),a.jsx(jg,{children:a.jsx(xg,{})})]})})]})}const Pg="/portfolio/assets/conceptReel-4e8f05ad.mp4",Ig=g.div`
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
`,Ng=g.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: left;
  object-fit: cover;
`,zg=g.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000042;
`,Rg=g.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: left;
  width: 85%;
  height: 100%;
  padding-left: 40px;

  @media screen and (max-width: 960px) {
    width: 90%;
  }

  @media screen and (max-width: 478px) {
    padding-left: 20px;
  }
`,Og=g.div`
  margin-top: auto;
  padding-bottom: 20px;
`;function Bg(e){const t=k.useRef(null);return k.useEffect(()=>{const n=setTimeout(()=>{t.current&&t.current.play()},6e3);return()=>clearTimeout(n)},[]),a.jsxs(Ig,{children:[a.jsx(Ng,{ref:t,src:Pg,loop:!0,muted:!0,playsInline:!0,alt:"A video showing animated AI images made for TV concepts."}),a.jsx(zg,{children:a.jsxs(Rg,{children:[a.jsx("h3",{children:"Writer. Concept Developer"}),a.jsx("p",{children:"As a writer and concept developer, I have had concepts optioned, and I have been commissioned to write concepts based on briefs provided by TV channels and streaming services."}),a.jsx(Og,{children:a.jsx("p",{children:"I have found AI tools such as Midjourney, Runway, and Photoshop to be invaluable tools, enhancing my ability to pitch and develop unique projects."})})]})})]})}const Tg="/portfolio/assets/uxuiReel-e01a0e6b.mp4",Lg=g.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  padding-bottom: 10px;
  color: #e437e2;

  
`,Fg=g.div`
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
`,Mg=g.p`
  color: white;
  font-size: 20px;
  font-weight: 600;
`,Dg=({onClick:e})=>{const t=()=>{e()};return a.jsxs(Lg,{children:[a.jsx(Fg,{children:a.jsx(qo,{to:"/casestudies",children:a.jsx(lr,{onClick:t,size:80})})}),a.jsx(Mg,{children:"See Case Studies"})]})},Gg=g.div`
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
`,Wg=g.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
`,Ug=g.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #000000a0;
`,Vg=g.div`
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
`,Qg=g.div`
  margin-top: auto;
`;function Yg(e){return a.jsxs(Gg,{children:[a.jsx(Wg,{src:Tg,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"Design frames changing randomly "}),a.jsx(Ug,{children:a.jsxs(Vg,{children:[a.jsx("h3",{children:"UX / UI Designer"}),a.jsx("p",{children:"My unique experience enhances visual storytelling and user engagement, creating seamless and captivating interactions."}),a.jsx(Qg,{children:a.jsx(Dg,{})})]})})]})}const bg=g.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  padding-bottom: 10px;
  /* color: #e1bb3e;  */
  color: #e437e2;
`,Hg=g.div`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1); 
    color: #9804e2; 
  }

  @media (max-width: 960px) {
    &:hover {
      transform: none; 
      color: inherit; 
    }
  }
`,$g=g.p`
  color: #000000;
  font-size: 20px;
  font-weight: 600;
`,Xg=({onClick:e})=>a.jsxs(bg,{children:[a.jsx(Hg,{children:a.jsx("a",{href:"https://github.com/PaulEvans78",target:"_blank",rel:"noopener noreferrer",children:a.jsx(lr,{onClick:e,size:80})})}),a.jsx($g,{children:"Go to GitHub"})]}),_g="data:image/avif;base64,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",Zg="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAGNbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAsaWxvYwAAAABEAAACAAEAAAABAAADiAAAAfAAAgAAAAEAAAG1AAAB0wAAAEJpaW5mAAAAAAACAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAAAaaW5mZQIAAAAAAgAAYXYwMUFscGhhAAAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAAw2lwcnAAAACdaXBjbwAAABRpc3BlAAAAAAAAAHgAAAB4AAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQBBYYHAAADy21kYXQSAAoGGBm792FQMsYDEgAKKFDYAsLyjFo30pTtGU3AprQDWuPWfiKO+UiJ6EzD+II/WS4l4BjmY2ofsD4UVg0FduFHPfdGebqmDbZogjz8NVmGLNmvd1wZBili3DkP5CI2o5pZTYFM4gKz8agxQATWZ1TlrNqXta5vvfgPNjGiIZtDUOGwrXNnHLDVjvkLfxMBwqbR0m2IbPrNONVikzkKkyvUc28tZ0OyUJpViZEa6JafpNNpkcjPfAqWweGQn/GcVnzk0Yoqyx10vZ8PizT1YVGcXlyZK/CQWXX1FhfNvTy5B24MWdf7MYW1yiLPyoN770KqUQhYQ4qRESByRLLmnrwEp5hckW1jCOGDkP0LY/ntYGOUyA5bLZqmNySV9t5XOWdZ4GdE+R8FXeS1rBb0B22SeIQg1USJH0KWoUcLH2qF8BXOV/ZSmatXYza1poj526IoyW+Dh7DTvUka0T/SSTrr4EWAIEO7rbAjp4/wR7gEy3QOsWMd7tPNE0tAbaJj3XVDYfXVQiTrmT9N57UyC0p+sSo9LNlVQ9f83M9WtrTbCdfKSccpekK4r/kSVCw09VdOtqfRt8xeT/Ktw3MRZIN2BQi7zkUx8XtpTYEi88rSMhIACgkYGbv3YIEBA0Iy4ANEgACiiihQ1/8mS+0VYnR6q4fJskn/zmz5r8/HO5RC/jcpiT7EXgL7nkn1z3wNWGtgLDEtWNwmPHhYKeugM5Qo0tp0EfAf4j3dOIJc8xkYorcoGN9MkydGBjENigCMQaXlYSXwkN070NiXYlB4ejGnMubTT8WLIWAbiS0EttIlksRTP0XNGN3mRVxR52JrG7VnTo2JXBQf0edMgT7qZtcAmCm7R+YX21UGxCrtNNWyv2vXC8EzRhHwjHaQBaTIc5wf/quoIkhCrJDKkLUWjVdkg6zy11aYNP8qwVMoGr0Fjm+qkqpGDa+iDYUqrRafPaZob8256SRAguMSThE+ks7O0ONlOFENmYyuAsuXbV1oni9V8AH0be/2sXschwRldONXLFzd24TiflNcG96KQ50n9/lAWz8JQwXpIhZkCfjnn////hk7J0GInAd03cB+TSFkV4iNo68ldi91rtW9YbMkMDzm/gnBauTH7fEaUrKs/X+hgaO45zjMNMko+4tM5vRVcakZfbISHhY/O4ul7PXExhgHNvN3ildIQ+whdE57JqjcorGtGkh8cVXVSGocklKhtQZw/ZyMEl5HxqimrgpWe26RkJCJ82t6vySxwJNWgq26QWi///PIQydTjAZ1ZTA=",Kg="data:image/avif;base64,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",Jg="data:image/avif;base64,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",qg="data:image/avif;base64,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",e1="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAGNbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAsaWxvYwAAAABEAAACAAEAAAABAAADiAAAAwMAAgAAAAEAAAG1AAAB0wAAAEJpaW5mAAAAAAACAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAAAaaW5mZQIAAAAAAgAAYXYwMUFscGhhAAAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAAw2lwcnAAAACdaXBjbwAAABRpc3BlAAAAAAAAAHgAAAB4AAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQBBYYHAAAE3m1kYXQSAAoGGBm792FQMsYDEgAKKFDYAsLyjFo30pTtGU3AprQDWuPWfiKO+UiJ6EzD+II/WS4l4BjmY2ofsD4UVg0FduFHPfdGebqmDbZogjz8NVmGLNmvd1wZBili3DkP5CI2o5pZTYFM4gKz8agxQATWZ1TlrNqXta5vvfgPNjGiIZtDUOGwrXNnHLDVjvkLfxMBwqbR0m2IbPrNONVikzkKkyvUc28tZ0OyUJpViZEa6JafpNNpkcjPfAqWweGQn/GcVnzk0Yoqyx10vZ8PizT1YVGcXlyZK/CQWXX1FhfNvTy5B24MWdf7MYW1yiLPyoN770KqUQhYQ4qRESByRLLmnrwEp5hckW1jCOGDkP0LY/ntYGOUyA5bLZqmNySV9t5XOWdZ4GdE+R8FXeS1rBb0B22SeIQg1USJH0KWoUcLH2qF8BXOV/ZSmatXYza1poj526IoyW+Dh7DTvUka0T/SSTrr4EWAIEO7rbAjp4/wR7gEy3QOsWMd7tPNE0tAbaJj3XVDYfXVQiTrmT9N57UyC0p+sSo9LNlVQ9f83M9WtrTbCdfKSccpekK4r/kSVCw09VdOtqfRt8xeT/Ktw3MRZIN2BQi7zkUx8XtpTYEi88rSMhIACgkYGbv3YIEBA0Iy8wUSAAKKKKFA1/8v+8S4kO4MpRUFHt4u8ZHyQAHeVyKB9/R3QjSQ40Ui/H9rQBAW9zOcmsK7OAdJMSJGAs3n8eghe9f37lIZSt1eJnBCgNqQ+4zebs2hVXmFhHCkhbNL5SLyfkqooMttSnDROkTdn4v/13sgDKSHPbwga+F4j6Sp99vBTGmMZeGH34g53dn/gVSwG9CVLPE+InM5du+CufCeYo4UE07mR4BsVu3epA9rATHdU8OJXcNoZIK019jfS4MoemX6xi+SmkV1emsP0iFptP0HqNptomg8fC+F1UCDM85ybe0Pda3ZHBalGX7HVT/55j2IB96DmCXON1qVH4ebTJ+ZRAMxu/n43OVQ5Ifl4L4wyF9LunI+47mUz1bipcqWewElyCky8UMZV+tVol2Kmh7ct6AYDAXPtje8w7xIEAjOzyIX8lREGr7Q8okgLZJX0lskvrCram1wD1333PK+D8LAKwTRefSqMK4W024Fkeqyx5Xk/0vx8n/xQ1xMH4olMtNRvsQ3Ox2eaDbbblgQJqicwBRGv+hWRAdM/cu0wM6T3jDJPNrywa01nggQjnyyXAgYExIVMmkhg8M6wRV+vONmPqRTsSPUoLOkMH8tkQp9TPengSLgW+5Q3+xB7P+CdmXbFZbCAfC2LzAElDGRU6LXqhN12G9652lKc/2Y2UIea5UwuKrU62gKzrGqVadf/z8vUyupEvmCTusdLCY3GqBn19+IA2wNaWVcw1GMT4yUZxAvB3BYFXan24aGbjhB1nwizrW6OwMkmr0EJOtejaTFq407n4gDi43XBg8MqVKI4TwhWJk71lgZD3eI8K+ve0O/5gJrTmnFqeR6ErzFJZd62qv2Lyw53Fa6+z97V/d5CsgnrNStsZLJtLp1Gh7SwG23iDrnMXhYF1ndzL9XeUZwmVNvlhUtfP1drwgtZzBpANE0w+iHUhGOZ8LBmHopsGBsc8d3Q+PPzu4ltsZrSrzxPbi94mOuLJYAlq/umpJ2UA==",t1="data:image/avif;base64,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",n1="data:image/avif;base64,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",r1=g.div`
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
`,i1=g.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 40px;
`,o1=g.div`
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
`,l1=g.div`
  display: grid;
  row-gap: 16px;
  row-gap: 40px;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 30% 30% 30%;

  padding-left: 60px;
`,Mt=g.img`
  width: 50%;
  height: auto;
  @media screen and (max-width: 478px) {
    width: 40%;
  }
`,a1=g.div`
  margin-top: auto;
`;function s1(){return a.jsxs(r1,{children:[a.jsx(i1,{children:a.jsxs(l1,{children:[a.jsx(Mt,{src:_g,alt:"React Logo."}),a.jsx(Mt,{src:Zg,alt:"Webflow Logo."}),a.jsx(Mt,{src:Kg,alt:"Figma Logo."}),a.jsx(Mt,{src:Jg,alt:"GitHub Logo."}),a.jsx(Mt,{src:qg,alt:"HTML Logo."}),a.jsx(Mt,{src:e1,alt:"CSS Logo."}),a.jsx(Mt,{src:t1,alt:"Javascript Logo."}),a.jsx(Mt,{src:n1,alt:"Photoshop Logo."})]})}),a.jsxs(o1,{children:[a.jsx("h3",{children:"Frontend Dev"}),a.jsx("p",{children:"With a solid understanding of HTML, CSS, JavaScript, and React, I have created visually appealing and user-friendly interfaces for various clients."}),a.jsx(a1,{children:a.jsx(Xg,{})})]})]})}const u1="/portfolio/assets/lipusplus_brand_film_hammarby-2024_short-0c3de834.mp4",c1=g.div`
width: 200px;
display: flex;
flex-direction: column;
align-items: flex-start;
padding-top: 30px;
color: #e437e2;

@media screen and (max-width: 478px) {
    align-items: center;
  }

`,d1=g.div`
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
`,f1=g.p`
color: white;
font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`,p1=({onClick:e})=>a.jsxs(c1,{children:[a.jsx(d1,{children:a.jsx(lp,{onClick:e,size:80})}),a.jsx(f1,{children:"Play Film"})]}),h1=g.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: #d5d5d5;

  @media screen and (max-width: 478px) {
    align-items: center;
  }
`,m1=g.div`
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
`,A1=g.p`
  color: white;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`,g1=({onClick:e})=>a.jsxs(h1,{children:[a.jsx(m1,{children:a.jsx(lr,{onClick:()=>setModalOpen(!0),size:80})}),a.jsx(A1,{children:"See Case Study"})]}),v1="/portfolio/assets/lipusPlusLogoWhite-b2e2b769.avif",y1="/portfolio/assets/lipusplus_brand_film_hammarby-2024-c0930dc4.mp4",x1=wn`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,w1=g.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  animation: ${x1} 0.5s ease-out;
`,S1=g.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #171717;
`,C1=g.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 3rem;
  color: #ffffff;
  cursor: pointer;
  z-index: 100;
`,k1=g.div`
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  display: flex;
  justify-content: center;
  align-items: center;
`,j1=g.video`
  width: 100%; /* Full width */
  height: auto; /* Maintain aspect ratio */
`,E1=({isOpen:e,onClose:t})=>e?a.jsx(w1,{children:a.jsxs(S1,{children:[a.jsx(C1,{onClick:t,children:"×"}),a.jsx(k1,{children:a.jsx(j1,{controls:!0,autoPlay:!0,children:a.jsx("source",{src:y1,type:"video/mp4"})})})]})}):null,P1=g.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`,I1=g.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 1;
`,N1=g.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.32);
  z-index: 2;
`,z1=g.div`
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
`,R1=g.div`
  display: flex;
  padding-top: 30px;
  margin-bottom: 30px;
`,O1=g.img`
  width: 30%;
  height: auto;

  @media screen and (max-width: 478px) {
    width: 50%;
  }
`,B1=g.div`
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
`,T1=({scrollToEvent:e})=>{const t=k.useRef(null),[n,r]=k.useState(!1);return k.useEffect(()=>{const i=setTimeout(()=>{t.current&&t.current.play()},1e3);return()=>clearTimeout(i)},[]),a.jsxs(P1,{children:[a.jsx(I1,{ref:t,src:u1,loop:!0,muted:!0,playsInline:!0,alt:"Background video"}),a.jsx(N1,{}),a.jsxs(z1,{children:[a.jsx(R1,{children:a.jsx(O1,{src:v1,alt:"LipusPlus logo"})}),a.jsx("h4",{children:"Meet the Physio of Hammarby Handball"}),a.jsx("p",{children:"Brand film highlighting LipusPlus's partnership with Hammarby Handball, showcasing through testimonals the effectiveness of the modality."}),a.jsxs(B1,{children:[a.jsx(p1,{onClick:()=>r(!0)}),a.jsx(g1,{onClick:e})]})]}),a.jsx(E1,{isOpen:n,onClose:()=>r(!1)})]})},ap="/portfolio/assets/lipusPlusLogo-022851c3.avif",sp="/portfolio/assets/lipusHeroImg-44921e74.avif",L1=g.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: #e437e2;
`,F1=g.div`
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
`,M1=g.p`
  color: #040404;
  font-size: 20px;
  font-weight: 600;
`,D1=({onClick:e})=>a.jsxs(L1,{children:[a.jsx(F1,{children:a.jsx(qo,{to:"/lipusplus",children:a.jsx(lr,{onClick:e,size:80})})}),a.jsx(M1,{children:"See Case Study"})]}),G1=wn`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,W1=g.section`
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
`,U1=g.div`
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
`,V1=g.div`
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
`,Q1=g.img`
  width: 40%;
  height: auto;
`,Y1=g.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  font-size: 14px;
  z-index: 2;
  /* margin-top: ; */
`,b1=g.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,H1=g.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({isInView:e})=>e&&ir`
      animation: ${G1} 1s ease-out forwards;
    `}
`,up=()=>{const e=k.useRef(null),[t,n]=k.useState(!1);return k.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),a.jsxs(W1,{children:[a.jsxs(U1,{children:[a.jsx("h4",{children:"UX Case study"}),a.jsx(V1,{children:a.jsx(Q1,{src:ap,alt:"The logo for LipuspLus"})}),a.jsx("p",{children:"LipusPlus aims to attract physiotherapists and elite athletes to its webinars on the Return to Play concept. An enticing and informative landing page is needed to generate leads for these webinars."}),a.jsx(D1,{})]}),a.jsxs(b1,{children:[a.jsx(Y1,{children:"Photo by Peder Rotkirch."}),a.jsx(H1,{ref:e,src:sp,alt:"A hammarby handball player in green and white stripes holds a ball.",isInView:t})]})]})},cp="/portfolio/assets/vikings-23b289a3.mp4",$1="/portfolio/assets/viaplayLogo-c60ae164.avif",X1=g.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: #d5d5d5;

  @media screen and (max-width: 478px) {
    align-items: center;
  }
`,_1=g.div`
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
`,Z1=g.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`,K1=({onClick:e})=>a.jsxs(X1,{children:[a.jsx(_1,{children:a.jsx("a",{href:"https://paulevans-dop.com/",target:"_blank",rel:"noopener noreferrer",children:a.jsx(lr,{onClick:e,size:80})})}),a.jsx(Z1,{children:"See Cinematography Reel"})]}),J1=g.div`
width: 200px;
display: flex;
flex-direction: column;
align-items: flex-start;
padding-top: 30px;
color: #e437e2;

@media screen and (max-width: 478px) {
    align-items: center;
  }

`,q1=g.div`
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
`,ev=g.p`
color: white;
font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`,tv=({onClick:e})=>a.jsxs(J1,{children:[a.jsx(q1,{children:a.jsx(lp,{onClick:e,size:80})}),a.jsx(ev,{children:"Play Trailer"})]});function nv(e){return jn({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",fill:"currentColor"},child:[]}]})(e)}const rv=wn`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,iv=g.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  animation: ${rv} 0.5s ease-out;
`,ov=g.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #171717;
`,lv=g.button`
  position: absolute;
  top: 30px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 3rem;
  color: #ffffff;
  cursor: pointer;
  z-index: 100;
`,av=g.div`
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  display: flex;
  justify-content: center;
  align-items: center;
`,sv=g.video`
  width: 100%; /* Full width */
  height: auto; /* Maintain aspect ratio */
`,uv=({isOpen:e,onClose:t})=>e?a.jsx(iv,{children:a.jsxs(ov,{children:[a.jsx(lv,{onClick:t,children:a.jsx(nv,{})}),a.jsx(av,{children:a.jsx(sv,{controls:!0,autoPlay:!0,children:a.jsx("source",{src:cp,type:"video/mp4"})})})]})}):null,cv=g.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`,dv=g.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 1;
`,fv=g.div`
position: relative;
  width: 60%;
  height: 500px;
  padding-top: 280px;
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
`,pv=g.div`
  display: flex;
  padding-top: 30px;
  margin-bottom: 30px;
`,hv=g.img`
  width: 30%;
  height: auto;
`,mv=g.div`
 width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media screen and (max-width: 478px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`,Av=({scrollToEvent:e})=>{const t=k.useRef(null),[n,r]=k.useState(!1);return k.useEffect(()=>{const i=setTimeout(()=>{t.current&&t.current.play()},1e3);return()=>clearTimeout(i)},[]),a.jsxs(cv,{children:[a.jsx(dv,{ref:t,src:cp,loop:!0,muted:!0,playsInline:!0,alt:"Background video"}),a.jsxs(fv,{children:[a.jsx(pv,{children:a.jsx(hv,{src:$1,alt:"Viaplays logo"})}),a.jsx("h4",{children:"The Last Journey of the Vikings"}),a.jsx("p",{children:"In collaboration with director James Valesquez, Mopar Studios and Viaplay, I served as the series cinematographer. The production took place in both Sweden and Ireland."}),a.jsxs(mv,{children:[a.jsx(tv,{onClick:()=>r(!0)}),a.jsx(K1,{})]})]}),a.jsx(uv,{isOpen:n,onClose:()=>r(!1)})]})},gv="data:image/avif;base64,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",vv="/portfolio/assets/unsplash_gvZSZfQomPA-7cf6c728.avif",yv=g.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: #e437e2;
`,xv=g.div`
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
`,wv=g.p`
  color: #040404;
  font-size: 20px;
  font-weight: 600;
  
`,Sv=({onClick:e})=>a.jsxs(yv,{children:[a.jsx(xv,{}),a.jsx(wv,{children:"See Case Study"})]}),Cv=wn`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,kv=g.section`
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
`,jv=g.div`
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
`,Ev=g.div`
  display: flex;
  padding-bottom: 30px;
  padding-top: 30px;
`,Pv=g.img`
  width: 40%;
  height: auto;
`,Iv=g.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  font-size: 14px;
  z-index: 2;
`,Nv=g.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,zv=g.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({isInView:e})=>e&&ir`
      animation: ${Cv} 1s ease-out forwards;
    `}
`,dp=()=>{const e=k.useRef(null),[t,n]=k.useState(!1);return k.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),a.jsxs(kv,{children:[a.jsxs(jv,{children:[a.jsx("h4",{children:"UX Case study"}),a.jsx(Ev,{children:a.jsx(Pv,{src:gv,alt:"The logo for Ebie"})}),a.jsx("p",{children:"Create and implement a completely new and user-friendly function within the platform that makes it easy for property owners to apply for and manage group insurance. Simplify the application and the overview for insurance status."}),a.jsx(Sv,{})]}),a.jsxs(Nv,{children:[a.jsx(Iv,{children:"Photo Unsplash."}),a.jsx(zv,{ref:e,src:vv,alt:"A view of Stockholm city with NK in the distance.",isInView:t})]})]})},Rv="/portfolio/assets/hidden-7e893598.avif",Ov="/portfolio/assets/BESTSHORTFILMSPECIALAWARD-EasternEuropeFilmFestival-December2022-489d2b56.avif",Bv=g.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`,Tv=g.img`
  position: absolute;
  width: 100%;
  height: 100%;
  align-self: flex-start;
  object-fit: cover;
  z-index: 2;
`,Lv=g.div`
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
`,Fv=g.div`
  display: flex;
  padding-top: 30px;
`,Mv=g.img`
  width: 50%;
  height: auto;
`,Dv=g.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  font-size: 14px;
  z-index: 3;
`,Gv=({scrollToEvent:e})=>a.jsxs(Bv,{children:[a.jsx(Dv,{children:"Photography by Nisse Virgin."}),a.jsx(Tv,{src:Rv,alt:"A short film poster. A Man sits with his back to camera contemplating"}),a.jsxs(Lv,{children:[a.jsx("h4",{children:"Hidden"}),a.jsx("p",{children:"My passion for storytelling led me to create a short film, which I directed, produced, and wrote. This film went on to win the Special award for Best Short Film at the Eastern European Short Film Festival."}),a.jsx(Fv,{children:a.jsx(Mv,{src:Ov,alt:"A wreath for Winner Eastern European Short Film Festival "})})]})]}),Wv=g.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
`,mc=g.section`
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
`,Uv=()=>{const e=k.useRef(null),t=()=>{e.current&&e.current.scrollIntoView({behavior:"smooth"})};return a.jsxs(Wv,{children:[a.jsx(ig,{}),a.jsxs(mc,{children:[a.jsx(Yg,{}),a.jsx(s1,{})]}),a.jsx(T1,{scrollToEvent:t}),a.jsxs(mc,{children:[a.jsx(Eg,{}),a.jsx(Bg,{})]}),a.jsx("div",{ref:e}),a.jsx(up,{}),a.jsx(Av,{}),a.jsx(dp,{}),a.jsx(Gv,{})]})},Vv=g.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
  margin-top: 170px;
`,Qv=()=>(k.useRef(null),a.jsxs(Vv,{children:[a.jsx(up,{}),a.jsx(dp,{})]})),Yv="/portfolio/assets/meAbout-b0dd0af4.avif",bv=wn`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,Hv=g.section`
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
`,$v=g.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  width: 75%;
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
`,Xv=g.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,_v=g.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({isInView:e})=>e&&ir`
      animation: ${bv} 1s ease-out forwards;
    `}
`,Zv=()=>{const e=k.useRef(null),[t,n]=k.useState(!1);return k.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),a.jsxs(Hv,{children:[a.jsxs($v,{children:[a.jsx("h3",{children:"About me "}),a.jsx("p",{children:"“Hi, I’m Paul! I have worked as a creative for over 20 years. In need of a platform to showcase my work, I taught myself how to code. In 2020, I decided to study web design to gain structure and further insight into the platforms and methods used. My interests extend into AI, particularly image and video generation and recently started developing tools that incorporate AI to aid in my creative work. I have a calm and methodical approach to life, which enables me to navigate challenges with ease. My strong willpower and determination help me stay focused on the goals, even during difficult times."})]}),a.jsx(Xv,{children:a.jsx(_v,{ref:e,src:Yv,alt:"Paul Evans watching the ocean",isInView:t})})]})},Kv="/portfolio/assets/camper-588e3c53.avif",Jv=wn`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,qv=g.section`
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
`,ey=g.div`
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
`,ty=g.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,ny=g.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({isInView:e})=>e&&ir`
      animation: ${Jv} 1s ease-out forwards;
    `}
`,ry=()=>{const e=k.useRef(null),[t,n]=k.useState(!1);return k.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),a.jsxs(qv,{children:[a.jsxs(ey,{children:[a.jsx("h3",{children:"For fun "}),a.jsx("p",{children:"Surfing and traveling are my two biggest passions. When I'm not paddling out into the sea I like to work out at the gym or swim in the lake. I also cherish the time I spend with my family, friends cooking and watching movies and tv shows."})]}),a.jsx(ty,{children:a.jsx(ny,{ref:e,src:Kv,alt:"A surf board propped up against a mobilehome",isInView:t})})]})},iy=g.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
  margin-top: 170px;
`;g.section`
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
`;const oy=()=>(k.useRef(null),a.jsxs(iy,{children:[a.jsx(Zv,{}),a.jsx(ry,{})]})),ly="/portfolio/assets/challenges-70c5b3a7.avif",ay="/portfolio/assets/fans-667fbfce.avif",sy="/portfolio/assets/research-b4a1f59e.avif",uy="/portfolio/assets/mapping-36b1fe68.avif",cy="/portfolio/assets/lipus-00a0d7ff.avif",dy="/portfolio/assets/physio-5d7e362e.avif",fy="/portfolio/assets/athlete-40b4363a.avif",py="/portfolio/assets/insights-cb84265a.avif",hy="/portfolio/assets/webinar-a29d8525.avif",my="/portfolio/assets/designOne-714b1c62.avif",Ay="/portfolio/assets/designTwo-c55bd744.avif",gy="/portfolio/assets/webflow-f9b4ae15.avif",vy="/portfolio/assets/reflection-72e94f6a.avif",yy=g.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
  margin-top: 170px;
`,xy=g.div`
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
`,wy=g.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Image Context ";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`,Sy=g.div`
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
`,Cy=g.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Image Context ";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`,ky=g.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Context Image ";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`,jy=g.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Image Context ";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`,Ey=g.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Context Image ";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`,Py=g.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Image Context ";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`,Iy=g.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Context Image ";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`,Ny=g.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Image Context ";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`,zy=g.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Context Image ";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`,Ry=g.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Image Context ";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`,Oy=g.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Context Image ";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`,By=g.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Image Context ";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`,Ue=g.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  height: 100%;
  /* width: 70%; */
  padding-top: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 60px;
  color: #2c2c2c;

  /* @media screen and (max-width: 767px) {
    padding-left: 60px;
  } */

  @media screen and (max-width: 478px) {
    padding-top: 30px;
    padding-left: 40px;
  }

  @media screen and (max-width: 360px) {
    width: 90%;
    padding-top: 15px;
    padding-left: 20px;
  }
`,Ty=g.div`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
`,Ly=g.img`
  width: 40%;
  height: auto;
`,ft=g.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  font-size: 14px;
  z-index: 2;
  color: #cdcccc;
  /* margin-top: ; */
`,Ve=g.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,Qe=g.img`
  width: 100%;
  height: 800px;
  object-fit: cover;

  ${({isInView:e})=>e&&css`
      animation: ${slideInFromRight} 1s ease-out forwards;
    `}
`,Fy=()=>a.jsxs(yy,{children:[a.jsxs(xy,{children:[a.jsxs(Ue,{children:[a.jsx("h4",{children:"UX Case study"}),a.jsx(Ty,{children:a.jsx(Ly,{src:ap,alt:"The logo for LipuspLus"})}),a.jsx("h5",{children:"My role"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("span",{className:"boldlarge",children:"UX / UI Designer"})}),a.jsx("li",{children:a.jsx("span",{className:"boldlarge",children:"Frontend Developer"})}),a.jsx("li",{children:a.jsx("span",{className:"boldlarge",children:"Content Creator"})})]})]}),a.jsxs(Ve,{children:[a.jsx(ft,{children:"Photo by Peder Rotkirch."}),a.jsx(Qe,{src:sp,alt:"A hammarby handball player in green and white stripes holds a ball."})]})]}),a.jsxs(wy,{children:[a.jsxs(Ue,{children:[a.jsx("h5",{children:"Challenges"}),a.jsxs("ul",{children:[a.jsx("li",{children:"Understanding Elite Athletes and Physiotherapists everyday struggles."}),a.jsx("li",{children:"Minimal experience with webinars."}),a.jsx("li",{children:"Working with Webflow, which was new to me."})]})]}),a.jsxs(Ve,{children:[a.jsx(ft,{children:"From LipusPlus.com"}),a.jsx(Qe,{src:ly,alt:"A hammarby handball player is lead of the court by the team physio."})]})]}),a.jsxs(Sy,{children:[a.jsxs(Ue,{children:[a.jsx("h5",{children:"Brief"}),a.jsx("p",{children:"LipusPlus aims to attract physiotherapists and elite athletes to its webinars on the Return to Play concept. An enticing and informative landing page is needed to generate leads for these webinars."}),a.jsx("h5",{children:"Goal"}),a.jsx("p",{children:"Create a user-friendly landing page. Connect with the target group. Convince the user to register for the event. Provide a seamless experience for visitors from registration to processing. Strive for a high conversion rate and satisfaction for both LipusPlus and the participants before, during and after the event. Generate leads for sales processing."})]}),a.jsxs(Ve,{children:[a.jsx(ft,{children:"Image from LipusPlus"}),a.jsx(Qe,{src:ay,alt:"Hammarby fans encourgae their team."})]})]}),a.jsxs(Cy,{children:[a.jsxs(Ue,{children:[a.jsx("h5",{children:"Key Questions"}),a.jsxs("ul",{children:[a.jsx("li",{children:"How can we make the message and the offer on the landing page clear and attractive to the target group?"}),a.jsx("li",{children:"How can we optimise the landing page to increase the conversion rate and get more visitors to sign up for webinars?"}),a.jsx("li",{children:"How can we stimulate people to spread the word about the webinar in their surroundings?"})]})]}),a.jsxs(Ve,{children:[a.jsx(ft,{children:"Anne Hopfgarten. Image from LipusPlus"}),a.jsx(Qe,{src:sy,alt:"Anne Hopfgarten sitting for an interview."})]})]}),a.jsxs(ky,{children:[a.jsxs(Ue,{children:[a.jsx("h5",{children:"Qualitative Research"}),a.jsxs("ul",{children:[a.jsxs("li",{children:[a.jsx("span",{className:"bold",children:"Seminar: "})," LipusPlus"]}),a.jsxs("li",{children:[a.jsx("span",{className:"bold",children:"Observation: "})," LipusPlus Sales Member"]}),a.jsxs("li",{children:[a.jsx("span",{className:"bold",children:"Observation: "})," LipusPlus Clinician "]}),a.jsxs("li",{children:[a.jsx("span",{className:"bold",children:"Interview: "})," Physiotherapist"]}),a.jsxs("li",{children:[a.jsx("span",{className:"bold",children:"Interview: "})," Elite athlete"]})]})]}),a.jsx(Ve,{children:a.jsx(Qe,{src:uy,alt:"Mapping of the users needs."})})]}),a.jsxs(jy,{children:[a.jsxs(Ue,{children:[a.jsx("h5",{children:"Results"}),a.jsx("p",{children:a.jsx("span",{className:"bold",children:"LipusPlus"})}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Challenges: "})," Struggles with conversion rates due to a lack of evidence and information about the modality."]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Needs: "})," A convenient platform to present and discuss current and ongoing studies and results."]})]}),a.jsxs(Ve,{children:[a.jsx(ft,{children:"Photo by Peder Rotkirch, Lipusplus."}),a.jsx(Qe,{src:cy,alt:"A hammarby handball player uses the LipusPlus modality.."})]})]}),a.jsxs(Ey,{children:[a.jsxs(Ue,{children:[a.jsx("h5",{children:"Results"}),a.jsx("p",{children:a.jsx("span",{className:"bold",children:"Physiotherapist"})}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Concerns: "})," Need evidence that LipusPlus is effective and safe. Rely on endorsements from prominent clubs and figures in their sport."]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Priorities: "})," They aim to get their patients back to their sport quickly and safely. Their reputation and job are at stake. They question why they should choose LipusPlus over proven traditional methods."]})]}),a.jsxs(Ve,{children:[a.jsx(ft,{children:"Image from LipusPlus."}),a.jsx(Qe,{src:dy,alt:"Anne Hopfgarten. Hammarby physio."})]})]}),a.jsxs(Py,{children:[a.jsxs(Ue,{children:[a.jsx("h5",{children:"Results"}),a.jsx("p",{children:a.jsx("span",{className:"bold",children:"Athlete"})}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Concerns: "})," Need evidence that LipusPlus is effective and safe. They often rely on endorsements from prominent figures in their sport and trusted physiotherapists."]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Goals: "})," Want to return to their sport as quickly as possible since their income and career goals depend on it."]})]}),a.jsxs(Ve,{children:[a.jsx(ft,{children:"Image from LipusPlus."}),a.jsx(Qe,{src:fy,alt:"Ludvig Lindeberg celebrates winning."})]})]}),a.jsxs(Iy,{children:[a.jsxs(Ue,{children:[a.jsx("h5",{children:"Insights"}),a.jsxs("ul",{children:[a.jsx("li",{children:"There is skepticism towards Medtech companies."}),a.jsx("li",{children:"Build trust not just through evidence but also an understanding of users everyday struggles and lifestyles."}),a.jsx("li",{children:"A shift towards a sports lifestyle focus, emphasising partnerships rather than just Medtech, would be more inspirational and trustworthy."}),a.jsx("li",{children:"It is essential for the user that the landing page works on all devices and is responsive. "}),a.jsx("li",{children:"Our users lead busy lives, on the go. Headlines, clear and captivating. Copy, persuasive and engaging. We need to get their attention directly."}),a.jsx("li",{children:"Clearly show the offer and benefits of Return to Play."}),a.jsx("li",{children:"Clearly communicate the value and benefits of attending the webinar, emphasising credible evidence and success stories."})]})]}),a.jsxs(Ve,{children:[a.jsx(ft,{children:"Photo unsplash."}),a.jsx(Qe,{src:py,alt:"An athlete is lying down on the track."})]})]}),a.jsxs(Ny,{children:[a.jsxs(Ue,{children:[a.jsx("h5",{children:"Webinar Requirements"}),a.jsxs("ul",{children:[a.jsx("li",{children:"The webinar platform should be a stable and proven streaming  service. "}),a.jsx("li",{children:"Data collection through the registration form is a must."}),a.jsx("li",{children:"Email Automation."}),a.jsx("li",{children:"Option to connect to Hubspot. "}),a.jsx("li",{children:"Simple and easy to understand registration forms."}),a.jsx("li",{children:"Custom Registration forms."})]}),a.jsx("p",{children:"With approximately 260 million users, Vimeo met all our requirements. Since LipusPlus already hosted content on Vimeo, it streamlined our video showcasing process."})]}),a.jsxs(Ve,{children:[a.jsx(ft,{children:"Photo from Vimeo."}),a.jsx(Qe,{src:hy,alt:"A vimeo webinar screen."})]})]}),a.jsxs(zy,{children:[a.jsxs(Ue,{children:[a.jsx("h5",{children:"Design"}),a.jsx("p",{children:"Building and improving upon an existing design system. We created "}),a.jsxs("ul",{children:[a.jsx("li",{children:"Through emotional content we highlighted partnerships for credibility. "}),a.jsx("li",{children:"Clearly outlined the benefits and starting price of the Return to Play program. "}),a.jsx("li",{children:"Assure the user that the webinar would discuss evidence from LipusPlus studies. "}),a.jsx("li",{children:"Engaging Content. "}),a.jsx("li",{children:"Showcase evidence and studies."}),a.jsx("li",{children:"Clear and Compelling Headlines and persuasive Copywriting. "}),a.jsx("li",{children:"User-Friendly Registration Form with a prominent CTA button. "}),a.jsx("li",{children:"Social Proofing. "}),a.jsx("li",{children:"Follow-Up Communication. "})]})]}),a.jsx(Ve,{children:a.jsx(Qe,{src:my,alt:"Frames from LipusPlus HiFi Designs."})})]}),a.jsxs(Ry,{children:[a.jsxs(Ue,{children:[a.jsx("h5",{children:"Design"}),a.jsx("p",{children:"Building and improving upon an existing design system. We created "}),a.jsxs("ul",{children:[a.jsx("li",{children:"Through emotional content we highlighted partnerships for credibility. "}),a.jsx("li",{children:"Clearly outlined the benefits and starting price of the Return to Play program. "}),a.jsx("li",{children:"Assure the user that the webinar would discuss evidence from LipusPlus studies. "})]})]}),a.jsx(Ve,{children:a.jsx(Qe,{src:Ay,alt:"Frames from LipusPlus HiFi Designs."})})]}),a.jsxs(Oy,{children:[a.jsxs(Ue,{children:[a.jsx("h5",{children:"Frontend"}),a.jsx("p",{children:"The existing LipusPlus homepage was initially created and is presently hosted via Webflow. A key stipulation for this project was to continue using Webflow. "}),a.jsx("p",{children:"See the live page here."}),a.jsx("span",{className:"bold",children:a.jsx("a",{href:"https://www.lipusplus.com/casestudies/hammarby",children:"LipusPlus.com"})})]}),a.jsxs(Ve,{children:[a.jsx(ft,{children:"Screen shot from Webflow."}),a.jsx(Qe,{src:gy,alt:"Webflow. Desktop ."})]})]}),a.jsxs(By,{children:[a.jsxs(Ue,{children:[a.jsx("h5",{children:"Reflection"}),a.jsx("p",{children:"This project was incredibly exciting for me for several reasons. Firstly, I had the opportunity to leverage my previous experience as a filmmaker, from conceptualizing and planning to filming interviews and sports coverage. Secondly, this project allowed me to align user needs with brand objectives, chieving the cohesive brand feel that LipusPlus has been striving for. Finally, I had the chance to work with Webflow, exploring a new platform and expanding my skills—an experience I thoroughly enjoyed.  "}),a.jsx("p",{children:"In conclusion, this project has not only met its goals but also provided a strong template for future case studies, webinars and other promotions. However there is always room for improvement. One area would be creating our own registration form instead of using the embedded Vimeo form. This change would give better design control and allow for a more cohesive user experience."}),a.jsx("p",{children:"This project has been a valuable learning experience. It demonstrated the importance of thorough research, user-centric design, and effective communication. The real-world application of our work and the positive feedback from LipusPlus has been immensely rewarding."})]}),a.jsxs(Ve,{children:[a.jsx(ft,{children:"Photo by Peder Rotkirch, LipusPlus."}),a.jsx(Qe,{src:vy,alt:"The lipusPlus modality"})]})]})]});g.div`
  overflowy: scroll;
  height: 2500px;
`;const My=g.div`
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
`,Dy=g.div`
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
`,Gy=()=>{const[e,t]=k.useState(!1),n=()=>{const i=document.documentElement.scrollTop;i>300?t(!0):i<=300&&t(!1)},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return window.addEventListener("scroll",n),a.jsx(My,{children:a.jsx(Dy,{children:a.jsx(Ag,{onClick:r,style:{display:e?"inline":"none",boxShadow:"10px 18px 40px #3e3e3e",borderRadius:"50%"}})})})},Wy=[{id:1,href:"https://www.linkedin.com/in/paul-evans-3a74605/",icon:a.jsx(mg,{}),des:"LinkedIn"},{id:2,href:"https://www.instagram.com/paulevanscreative/",icon:a.jsx(hg,{}),des:"Instagram"},{id:3,href:"https://www.imdb.com/name/nm3171341/?ref_=ttfc_fc_cr",icon:a.jsx(pg,{}),des:"Imdb"}],Uy=g.footer`
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

  @media screen and (max-width: 960px) {
    background-image: none;
    
    flex-direction: column;
    align-items: center;
  }
`,Vy=g.div`
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
    /* padding-top: 0em; */
  }
`,Qy=g.p`
  display: flex;
  flex-direction: column;
  color: whitesmoke;

  margin-bottom: -0.5em;
  text-shadow: 2px 2px 4px black;

  &:hover {
    color: #9804e2;; 
  }

  @media screen and (max-width: 960px) {
    

    &:hover {
      color: inherit; 
    }
  }

  @media screen and (max-width: 767px) {
    margin-left: 0em;

   
  }
`,Yy=g.p`
  display: flex;
  flex-direction: column;
  color: whitesmoke;

  text-shadow: 2px 2px 4px black;

  &:hover {
    color: #9804e2;; 
  }

  @media screen and (max-width: 960px) {
    

    &:hover {
      color: inherit; 
    }
  }

  @media screen and (max-width: 767px) {
    margin-left: 0em;

   
  }
`,by=g.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  justify-items: center;
  margin-right: 2em;
  padding-top: 4em;

  @media screen and (max-width: 960px) {
    padding-top: 2em;
    margin-right: 0em;
  }

  @media screen and (max-width: 767px) {
    /* margin-right: 1em; */
  }

  @media screen and (max-width: 320px) {
    flex-direction: column;
    margin-right: 0em;
  }
`,Hy=g.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 1em 0em 2em;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.1); 
    color: #9804e2;
    
  }

  @media screen and (max-width: 960px) {
    

    &:hover {
      color: inherit; 
    }
  }

  @media screen and (max-width: 767px) {
    margin: 0em 2em 0em 2em;

  }
`,$y=g.p`
  display: flex;
  flex-direction: column;
  align-content: center;
  font-size: 12px;
  line-height: 18px;
  color: whitesmoke;
  text-align: center;
  margin-top: 0.5em;

  &:hover {
    color: #9804e2;; 
  }

  @media screen and (max-width: 960px) {
    

    &:hover {
      color: inherit; 
    }
  }

 
`,Xy=g.div`
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
`,_y=g.img`
  text-align: center;
  justify-self: center;
  width: 120px;
  margin-top: 4em;

  @media screen and (max-width: 960px) {
    width: 120px;
  }
`,Zy=ge.forwardRef((e,t)=>a.jsxs(Uy,{ref:t,children:[a.jsx(Xy,{children:a.jsx(_y,{src:rp,alt:"the letters P and E merged together to form the logo Paul Evans Creative"})}),a.jsx(Ky,{}),a.jsxs(Vy,{children:[a.jsx("p",{children:"Paul Evans. Copyright 2024."}),a.jsx(Qy,{children:a.jsx("a",{href:"mailto:paul.evans.creative@gmail.com",children:"paul.evans.creative@gmail.com"})}),a.jsx(Yy,{children:a.jsx("a",{href:"tel:+46739908858",children:"+46739908858"})})]})]})),Ky=()=>a.jsx(by,{children:a.jsx(Ba.Provider,{value:{size:"2em"},children:Wy.map(e=>a.jsxs(Hy,{href:e.href,children:[e.icon,a.jsx($y,{children:e.des})]},e.id))})}),Jy=()=>{const{pathname:e}=or();return k.useEffect(()=>{window.scrollTo(0,0)},[e]),null},qy=g.div`
  min-height: 100%;
  max-width: 100vw;
`,ex=g.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: space-evenly;
`,tx=()=>{const e=k.useRef(null);return a.jsxs(M0,{children:[a.jsx(Jy,{}),a.jsxs(qy,{children:[a.jsx(J0,{footerRef:e}),a.jsxs(ex,{children:[a.jsxs(z0,{children:[a.jsx(Sr,{path:"/",element:a.jsx(Uv,{})}),a.jsx(Sr,{path:"/casestudies",element:a.jsx(Qv,{})}),a.jsx(Sr,{path:"/about",element:a.jsx(oy,{})}),a.jsx(Sr,{path:"/lipusplus",element:a.jsx(Fy,{})})]}),a.jsx(Zy,{ref:e})]}),a.jsx(Gy,{})]})]})};Rl.createRoot(document.getElementById("root")).render(a.jsx(ge.StrictMode,{children:a.jsx(tx,{})}));
