function Sp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Cc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jc={exports:{}},Co={},kc={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var li=Symbol.for("react.element"),Cp=Symbol.for("react.portal"),jp=Symbol.for("react.fragment"),kp=Symbol.for("react.strict_mode"),Ep=Symbol.for("react.profiler"),Ip=Symbol.for("react.provider"),Pp=Symbol.for("react.context"),Np=Symbol.for("react.forward_ref"),Bp=Symbol.for("react.suspense"),Tp=Symbol.for("react.memo"),zp=Symbol.for("react.lazy"),Hs=Symbol.iterator;function Rp(e){return e===null||typeof e!="object"?null:(e=Hs&&e[Hs]||e["@@iterator"],typeof e=="function"?e:null)}var Ec={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ic=Object.assign,Pc={};function ur(e,t,n){this.props=e,this.context=t,this.refs=Pc,this.updater=n||Ec}ur.prototype.isReactComponent={};ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Nc(){}Nc.prototype=ur.prototype;function Ga(e,t,n){this.props=e,this.context=t,this.refs=Pc,this.updater=n||Ec}var Wa=Ga.prototype=new Nc;Wa.constructor=Ga;Ic(Wa,ur.prototype);Wa.isPureReactComponent=!0;var Xs=Array.isArray,Bc=Object.prototype.hasOwnProperty,Qa={current:null},Tc={key:!0,ref:!0,__self:!0,__source:!0};function zc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Bc.call(t,r)&&!Tc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:li,type:e,key:o,ref:l,props:i,_owner:Qa.current}}function Op(e,t){return{$$typeof:li,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ua(e){return typeof e=="object"&&e!==null&&e.$$typeof===li}function Lp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $s=/\/+/g;function sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lp(""+e.key):t.toString(36)}function Ri(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case li:case Cp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+sl(l,0):r,Xs(i)?(n="",e!=null&&(n=e.replace($s,"$&/")+"/"),Ri(i,t,n,"",function(c){return c})):i!=null&&(Ua(i)&&(i=Op(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace($s,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Xs(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+sl(o,s);l+=Ri(o,t,n,u,i)}else if(u=Rp(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+sl(o,s++),l+=Ri(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function hi(e,t,n){if(e==null)return e;var r=[],i=0;return Ri(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Fp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},Oi={transition:null},Mp={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:Oi,ReactCurrentOwner:Qa};function Rc(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:hi,forEach:function(e,t,n){hi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hi(e,function(){t++}),t},toArray:function(e){return hi(e,function(t){return t})||[]},only:function(e){if(!Ua(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=ur;Q.Fragment=jp;Q.Profiler=Ep;Q.PureComponent=Ga;Q.StrictMode=kp;Q.Suspense=Bp;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mp;Q.act=Rc;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ic({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Qa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Bc.call(t,u)&&!Tc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:li,type:e.type,key:i,ref:o,props:r,_owner:l}};Q.createContext=function(e){return e={$$typeof:Pp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ip,_context:e},e.Consumer=e};Q.createElement=zc;Q.createFactory=function(e){var t=zc.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:Np,render:e}};Q.isValidElement=Ua;Q.lazy=function(e){return{$$typeof:zp,_payload:{_status:-1,_result:e},_init:Fp}};Q.memo=function(e,t){return{$$typeof:Tp,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Oi.transition;Oi.transition={};try{e()}finally{Oi.transition=t}};Q.unstable_act=Rc;Q.useCallback=function(e,t){return De.current.useCallback(e,t)};Q.useContext=function(e){return De.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return De.current.useDeferredValue(e)};Q.useEffect=function(e,t){return De.current.useEffect(e,t)};Q.useId=function(){return De.current.useId()};Q.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return De.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};Q.useRef=function(e){return De.current.useRef(e)};Q.useState=function(e){return De.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return De.current.useTransition()};Q.version="18.3.1";kc.exports=Q;var j=kc.exports;const ge=Cc(j),Dp=Sp({__proto__:null,default:ge},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp=j,Gp=Symbol.for("react.element"),Wp=Symbol.for("react.fragment"),Qp=Object.prototype.hasOwnProperty,Up=bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vp={key:!0,ref:!0,__self:!0,__source:!0};function Oc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Qp.call(t,r)&&!Vp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Gp,type:e,key:o,ref:l,props:i,_owner:Up.current}}Co.Fragment=Wp;Co.jsx=Oc;Co.jsxs=Oc;jc.exports=Co;var a=jc.exports,Ml={},Lc={exports:{}},ot={},Fc={exports:{}},Mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,F){var D=I.length;I.push(F);e:for(;0<D;){var X=D-1>>>1,P=I[X];if(0<i(P,F))I[X]=F,I[D]=P,D=X;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var F=I[0],D=I.pop();if(D!==F){I[0]=D;e:for(var X=0,P=I.length,B=P>>>1;X<B;){var O=2*(X+1)-1,b=I[O],x=O+1,V=I[x];if(0>i(b,D))x<P&&0>i(V,b)?(I[X]=V,I[x]=D,X=x):(I[X]=b,I[O]=D,X=O);else if(x<P&&0>i(V,D))I[X]=V,I[x]=D,X=x;else break e}}return F}function i(I,F){var D=I.sortIndex-F.sortIndex;return D!==0?D:I.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],m=1,h=null,g=3,S=!1,w=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var F=n(c);F!==null;){if(F.callback===null)r(c);else if(F.startTime<=I)r(c),F.sortIndex=F.expirationTime,t(u,F);else break;F=n(c)}}function y(I){if(v=!1,p(I),!w)if(n(u)!==null)w=!0,st(k);else{var F=n(c);F!==null&&ye(y,F.startTime-I)}}function k(I,F){w=!1,v&&(v=!1,f(R),R=-1),S=!0;var D=g;try{for(p(F),h=n(u);h!==null&&(!(h.expirationTime>F)||I&&!fe());){var X=h.callback;if(typeof X=="function"){h.callback=null,g=h.priorityLevel;var P=X(h.expirationTime<=F);F=e.unstable_now(),typeof P=="function"?h.callback=P:h===n(u)&&r(u),p(F)}else r(u);h=n(u)}if(h!==null)var B=!0;else{var O=n(c);O!==null&&ye(y,O.startTime-F),B=!1}return B}finally{h=null,g=D,S=!1}}var T=!1,z=null,R=-1,U=5,M=-1;function fe(){return!(e.unstable_now()-M<U)}function ue(){if(z!==null){var I=e.unstable_now();M=I;var F=!0;try{F=z(!0,I)}finally{F?me():(T=!1,z=null)}}else T=!1}var me;if(typeof d=="function")me=function(){d(ue)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,xe=Le.port2;Le.port1.onmessage=ue,me=function(){xe.postMessage(null)}}else me=function(){C(ue,0)};function st(I){z=I,T||(T=!0,me())}function ye(I,F){R=C(function(){I(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,st(k))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(I){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var D=g;g=F;try{return I()}finally{g=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,F){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var D=g;g=I;try{return F()}finally{g=D}},e.unstable_scheduleCallback=function(I,F,D){var X=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?X+D:X):D=X,I){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=D+P,I={id:m++,callback:F,priorityLevel:I,startTime:D,expirationTime:P,sortIndex:-1},D>X?(I.sortIndex=D,t(c,I),n(u)===null&&I===n(c)&&(v?(f(R),R=-1):v=!0,ye(y,D-X))):(I.sortIndex=P,t(u,I),w||S||(w=!0,st(k))),I},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(I){var F=g;return function(){var D=g;g=F;try{return I.apply(this,arguments)}finally{g=D}}}})(Mc);Fc.exports=Mc;var Yp=Fc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp=j,it=Yp;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dc=new Set,Gr={};function En(e,t){er(e,t),er(e+"Capture",t)}function er(e,t){for(Gr[e]=t,e=0;e<t.length;e++)Dc.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dl=Object.prototype.hasOwnProperty,Xp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ks={},Zs={};function $p(e){return Dl.call(Zs,e)?!0:Dl.call(Ks,e)?!1:Xp.test(e)?Zs[e]=!0:(Ks[e]=!0,!1)}function Kp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zp(e,t,n,r){if(t===null||typeof t>"u"||Kp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function be(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new be(e,5,!1,e.toLowerCase(),null,!1,!1)});var Va=/[\-:]([a-z])/g;function Ya(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Va,Ya);Ne[t]=new be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Va,Ya);Ne[t]=new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Va,Ya);Ne[t]=new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new be(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new be(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ha(e,t,n,r){var i=Ne.hasOwnProperty(t)?Ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zp(t,n,i,r)&&(n=null),r||i===null?$p(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Gt=Hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mi=Symbol.for("react.element"),Ln=Symbol.for("react.portal"),Fn=Symbol.for("react.fragment"),Xa=Symbol.for("react.strict_mode"),bl=Symbol.for("react.profiler"),bc=Symbol.for("react.provider"),Gc=Symbol.for("react.context"),$a=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Wl=Symbol.for("react.suspense_list"),Ka=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Wc=Symbol.for("react.offscreen"),_s=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=_s&&e[_s]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,ul;function Er(e){if(ul===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ul=t&&t[1]||""}return`
`+ul+e}var cl=!1;function dl(e,t){if(!e||cl)return"";cl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{cl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Er(e):""}function _p(e){switch(e.tag){case 5:return Er(e.type);case 16:return Er("Lazy");case 13:return Er("Suspense");case 19:return Er("SuspenseList");case 0:case 2:case 15:return e=dl(e.type,!1),e;case 11:return e=dl(e.type.render,!1),e;case 1:return e=dl(e.type,!0),e;default:return""}}function Ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fn:return"Fragment";case Ln:return"Portal";case bl:return"Profiler";case Xa:return"StrictMode";case Gl:return"Suspense";case Wl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gc:return(e.displayName||"Context")+".Consumer";case bc:return(e._context.displayName||"Context")+".Provider";case $a:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ka:return t=e.displayName||null,t!==null?t:Ql(e.type)||"Memo";case Vt:t=e._payload,e=e._init;try{return Ql(e(t))}catch{}}return null}function qp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ql(t);case 8:return t===Xa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jp(e){var t=Qc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ai(e){e._valueTracker||(e._valueTracker=Jp(e))}function Uc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ul(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vc(e,t){t=t.checked,t!=null&&Ha(e,"checked",t,!1)}function Vl(e,t){Vc(e,t);var n=sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yl(e,t.type,sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Js(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yl(e,t,n){(t!=="number"||Hi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ir=Array.isArray;function $n(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+sn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function eu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Ir(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:sn(n)}}function Yc(e,t){var n=sn(t.value),r=sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function tu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gi,Xc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gi=gi||document.createElement("div"),gi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eh=["Webkit","ms","Moz","O"];Object.keys(Br).forEach(function(e){eh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Br[t]=Br[e]})});function $c(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Br.hasOwnProperty(e)&&Br[e]?(""+t).trim():t+"px"}function Kc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$c(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var th=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $l(e,t){if(t){if(th[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zl=null;function Za(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _l=null,Kn=null,Zn=null;function nu(e){if(e=ui(e)){if(typeof _l!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Po(t),_l(e.stateNode,e.type,t))}}function Zc(e){Kn?Zn?Zn.push(e):Zn=[e]:Kn=e}function _c(){if(Kn){var e=Kn,t=Zn;if(Zn=Kn=null,nu(e),t)for(e=0;e<t.length;e++)nu(t[e])}}function qc(e,t){return e(t)}function Jc(){}var fl=!1;function ed(e,t,n){if(fl)return e(t,n);fl=!0;try{return qc(e,t,n)}finally{fl=!1,(Kn!==null||Zn!==null)&&(Jc(),_c())}}function Qr(e,t){var n=e.stateNode;if(n===null)return null;var r=Po(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var ql=!1;if(Ft)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){ql=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{ql=!1}function nh(e,t,n,r,i,o,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Tr=!1,Xi=null,$i=!1,Jl=null,rh={onError:function(e){Tr=!0,Xi=e}};function ih(e,t,n,r,i,o,l,s,u){Tr=!1,Xi=null,nh.apply(rh,arguments)}function oh(e,t,n,r,i,o,l,s,u){if(ih.apply(this,arguments),Tr){if(Tr){var c=Xi;Tr=!1,Xi=null}else throw Error(E(198));$i||($i=!0,Jl=c)}}function In(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function td(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ru(e){if(In(e)!==e)throw Error(E(188))}function lh(e){var t=e.alternate;if(!t){if(t=In(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ru(i),e;if(o===r)return ru(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function nd(e){return e=lh(e),e!==null?rd(e):null}function rd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=rd(e);if(t!==null)return t;e=e.sibling}return null}var id=it.unstable_scheduleCallback,iu=it.unstable_cancelCallback,ah=it.unstable_shouldYield,sh=it.unstable_requestPaint,de=it.unstable_now,uh=it.unstable_getCurrentPriorityLevel,_a=it.unstable_ImmediatePriority,od=it.unstable_UserBlockingPriority,Ki=it.unstable_NormalPriority,ch=it.unstable_LowPriority,ld=it.unstable_IdlePriority,jo=null,It=null;function dh(e){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(jo,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:hh,fh=Math.log,ph=Math.LN2;function hh(e){return e>>>=0,e===0?32:31-(fh(e)/ph|0)|0}var vi=64,xi=4194304;function Pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Pr(s):(o&=l,o!==0&&(r=Pr(o)))}else l=n&~i,l!==0?r=Pr(l):o!==0&&(r=Pr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-wt(t),i=1<<n,r|=e[n],t&=~i;return r}function mh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ah(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-wt(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=mh(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function ea(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ad(){var e=vi;return vi<<=1,!(vi&4194240)&&(vi=64),e}function pl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ai(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=n}function gh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-wt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function qa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-wt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var _=0;function sd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ud,Ja,cd,dd,fd,ta=!1,yi=[],_t=null,qt=null,Jt=null,Ur=new Map,Vr=new Map,Ht=[],vh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ou(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":Ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(t.pointerId)}}function xr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ui(t),t!==null&&Ja(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function xh(e,t,n,r,i){switch(t){case"focusin":return _t=xr(_t,e,t,n,r,i),!0;case"dragenter":return qt=xr(qt,e,t,n,r,i),!0;case"mouseover":return Jt=xr(Jt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ur.set(o,xr(Ur.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Vr.set(o,xr(Vr.get(o)||null,e,t,n,r,i)),!0}return!1}function pd(e){var t=An(e.target);if(t!==null){var n=In(t);if(n!==null){if(t=n.tag,t===13){if(t=td(n),t!==null){e.blockedOn=t,fd(e.priority,function(){cd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=na(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zl=r,n.target.dispatchEvent(r),Zl=null}else return t=ui(n),t!==null&&Ja(t),e.blockedOn=n,!1;t.shift()}return!0}function lu(e,t,n){Li(e)&&n.delete(t)}function yh(){ta=!1,_t!==null&&Li(_t)&&(_t=null),qt!==null&&Li(qt)&&(qt=null),Jt!==null&&Li(Jt)&&(Jt=null),Ur.forEach(lu),Vr.forEach(lu)}function yr(e,t){e.blockedOn===t&&(e.blockedOn=null,ta||(ta=!0,it.unstable_scheduleCallback(it.unstable_NormalPriority,yh)))}function Yr(e){function t(i){return yr(i,e)}if(0<yi.length){yr(yi[0],e);for(var n=1;n<yi.length;n++){var r=yi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&yr(_t,e),qt!==null&&yr(qt,e),Jt!==null&&yr(Jt,e),Ur.forEach(t),Vr.forEach(t),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)pd(n),n.blockedOn===null&&Ht.shift()}var _n=Gt.ReactCurrentBatchConfig,_i=!0;function wh(e,t,n,r){var i=_,o=_n.transition;_n.transition=null;try{_=1,es(e,t,n,r)}finally{_=i,_n.transition=o}}function Sh(e,t,n,r){var i=_,o=_n.transition;_n.transition=null;try{_=4,es(e,t,n,r)}finally{_=i,_n.transition=o}}function es(e,t,n,r){if(_i){var i=na(e,t,n,r);if(i===null)Cl(e,t,r,qi,n),ou(e,r);else if(xh(i,e,t,n,r))r.stopPropagation();else if(ou(e,r),t&4&&-1<vh.indexOf(e)){for(;i!==null;){var o=ui(i);if(o!==null&&ud(o),o=na(e,t,n,r),o===null&&Cl(e,t,r,qi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Cl(e,t,r,null,n)}}var qi=null;function na(e,t,n,r){if(qi=null,e=Za(r),e=An(e),e!==null)if(t=In(e),t===null)e=null;else if(n=t.tag,n===13){if(e=td(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qi=e,null}function hd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uh()){case _a:return 1;case od:return 4;case Ki:case ch:return 16;case ld:return 536870912;default:return 16}default:return 16}}var $t=null,ts=null,Fi=null;function md(){if(Fi)return Fi;var e,t=ts,n=t.length,r,i="value"in $t?$t.value:$t.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Fi=i.slice(e,1<r?1-r:void 0)}function Mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wi(){return!0}function au(){return!1}function lt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wi:au,this.isPropagationStopped=au,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wi)},persist:function(){},isPersistent:wi}),t}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ns=lt(cr),si=le({},cr,{view:0,detail:0}),Ch=lt(si),hl,ml,wr,ko=le({},si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(hl=e.screenX-wr.screenX,ml=e.screenY-wr.screenY):ml=hl=0,wr=e),hl)},movementY:function(e){return"movementY"in e?e.movementY:ml}}),su=lt(ko),jh=le({},ko,{dataTransfer:0}),kh=lt(jh),Eh=le({},si,{relatedTarget:0}),Al=lt(Eh),Ih=le({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ph=lt(Ih),Nh=le({},cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bh=lt(Nh),Th=le({},cr,{data:0}),uu=lt(Th),zh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Oh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Oh[e])?!!t[e]:!1}function rs(){return Lh}var Fh=le({},si,{key:function(e){if(e.key){var t=zh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rs,charCode:function(e){return e.type==="keypress"?Mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mh=lt(Fh),Dh=le({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cu=lt(Dh),bh=le({},si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rs}),Gh=lt(bh),Wh=le({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qh=lt(Wh),Uh=le({},ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vh=lt(Uh),Yh=[9,13,27,32],is=Ft&&"CompositionEvent"in window,zr=null;Ft&&"documentMode"in document&&(zr=document.documentMode);var Hh=Ft&&"TextEvent"in window&&!zr,Ad=Ft&&(!is||zr&&8<zr&&11>=zr),du=String.fromCharCode(32),fu=!1;function gd(e,t){switch(e){case"keyup":return Yh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mn=!1;function Xh(e,t){switch(e){case"compositionend":return vd(t);case"keypress":return t.which!==32?null:(fu=!0,du);case"textInput":return e=t.data,e===du&&fu?null:e;default:return null}}function $h(e,t){if(Mn)return e==="compositionend"||!is&&gd(e,t)?(e=md(),Fi=ts=$t=null,Mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ad&&t.locale!=="ko"?null:t.data;default:return null}}var Kh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kh[e.type]:t==="textarea"}function xd(e,t,n,r){Zc(r),t=Ji(t,"onChange"),0<t.length&&(n=new ns("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rr=null,Hr=null;function Zh(e){Bd(e,0)}function Eo(e){var t=Gn(e);if(Uc(t))return e}function _h(e,t){if(e==="change")return t}var yd=!1;if(Ft){var gl;if(Ft){var vl="oninput"in document;if(!vl){var hu=document.createElement("div");hu.setAttribute("oninput","return;"),vl=typeof hu.oninput=="function"}gl=vl}else gl=!1;yd=gl&&(!document.documentMode||9<document.documentMode)}function mu(){Rr&&(Rr.detachEvent("onpropertychange",wd),Hr=Rr=null)}function wd(e){if(e.propertyName==="value"&&Eo(Hr)){var t=[];xd(t,Hr,e,Za(e)),ed(Zh,t)}}function qh(e,t,n){e==="focusin"?(mu(),Rr=t,Hr=n,Rr.attachEvent("onpropertychange",wd)):e==="focusout"&&mu()}function Jh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Eo(Hr)}function em(e,t){if(e==="click")return Eo(t)}function tm(e,t){if(e==="input"||e==="change")return Eo(t)}function nm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:nm;function Xr(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Dl.call(t,i)||!Ct(e[i],t[i]))return!1}return!0}function Au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gu(e,t){var n=Au(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Au(n)}}function Sd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cd(){for(var e=window,t=Hi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hi(e.document)}return t}function os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rm(e){var t=Cd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sd(n.ownerDocument.documentElement,n)){if(r!==null&&os(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=gu(n,o);var l=gu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var im=Ft&&"documentMode"in document&&11>=document.documentMode,Dn=null,ra=null,Or=null,ia=!1;function vu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ia||Dn==null||Dn!==Hi(r)||(r=Dn,"selectionStart"in r&&os(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Or&&Xr(Or,r)||(Or=r,r=Ji(ra,"onSelect"),0<r.length&&(t=new ns("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dn)))}function Si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bn={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionend:Si("Transition","TransitionEnd")},xl={},jd={};Ft&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function Io(e){if(xl[e])return xl[e];if(!bn[e])return e;var t=bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jd)return xl[e]=t[n];return e}var kd=Io("animationend"),Ed=Io("animationiteration"),Id=Io("animationstart"),Pd=Io("transitionend"),Nd=new Map,xu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cn(e,t){Nd.set(e,t),En(t,[e])}for(var yl=0;yl<xu.length;yl++){var wl=xu[yl],om=wl.toLowerCase(),lm=wl[0].toUpperCase()+wl.slice(1);cn(om,"on"+lm)}cn(kd,"onAnimationEnd");cn(Ed,"onAnimationIteration");cn(Id,"onAnimationStart");cn("dblclick","onDoubleClick");cn("focusin","onFocus");cn("focusout","onBlur");cn(Pd,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));En("onBeforeInput",["compositionend","keypress","textInput","paste"]);En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),am=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));function yu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,oh(r,t,void 0,e),e.currentTarget=null}function Bd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;yu(i,s,c),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;yu(i,s,c),o=u}}}if($i)throw e=Jl,$i=!1,Jl=null,e}function te(e,t){var n=t[ua];n===void 0&&(n=t[ua]=new Set);var r=e+"__bubble";n.has(r)||(Td(t,e,2,!1),n.add(r))}function Sl(e,t,n){var r=0;t&&(r|=4),Td(n,e,r,t)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[Ci]){e[Ci]=!0,Dc.forEach(function(n){n!=="selectionchange"&&(am.has(n)||Sl(n,!1,e),Sl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ci]||(t[Ci]=!0,Sl("selectionchange",!1,t))}}function Td(e,t,n,r){switch(hd(t)){case 1:var i=wh;break;case 4:i=Sh;break;default:i=es}n=i.bind(null,t,n,e),i=void 0,!ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Cl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=An(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}ed(function(){var c=o,m=Za(n),h=[];e:{var g=Nd.get(e);if(g!==void 0){var S=ns,w=e;switch(e){case"keypress":if(Mi(n)===0)break e;case"keydown":case"keyup":S=Mh;break;case"focusin":w="focus",S=Al;break;case"focusout":w="blur",S=Al;break;case"beforeblur":case"afterblur":S=Al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=kh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Gh;break;case kd:case Ed:case Id:S=Ph;break;case Pd:S=Qh;break;case"scroll":S=Ch;break;case"wheel":S=Vh;break;case"copy":case"cut":case"paste":S=Bh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=cu}var v=(t&4)!==0,C=!v&&e==="scroll",f=v?g!==null?g+"Capture":null:g;v=[];for(var d=c,p;d!==null;){p=d;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Qr(d,f),y!=null&&v.push(Kr(d,y,p)))),C)break;d=d.return}0<v.length&&(g=new S(g,w,null,n,m),h.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",g&&n!==Zl&&(w=n.relatedTarget||n.fromElement)&&(An(w)||w[Mt]))break e;if((S||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,S?(w=n.relatedTarget||n.toElement,S=c,w=w?An(w):null,w!==null&&(C=In(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(S=null,w=c),S!==w)){if(v=su,y="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=cu,y="onPointerLeave",f="onPointerEnter",d="pointer"),C=S==null?g:Gn(S),p=w==null?g:Gn(w),g=new v(y,d+"leave",S,n,m),g.target=C,g.relatedTarget=p,y=null,An(m)===c&&(v=new v(f,d+"enter",w,n,m),v.target=p,v.relatedTarget=C,y=v),C=y,S&&w)t:{for(v=S,f=w,d=0,p=v;p;p=Rn(p))d++;for(p=0,y=f;y;y=Rn(y))p++;for(;0<d-p;)v=Rn(v),d--;for(;0<p-d;)f=Rn(f),p--;for(;d--;){if(v===f||f!==null&&v===f.alternate)break t;v=Rn(v),f=Rn(f)}v=null}else v=null;S!==null&&wu(h,g,S,v,!1),w!==null&&C!==null&&wu(h,C,w,v,!0)}}e:{if(g=c?Gn(c):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var k=_h;else if(pu(g))if(yd)k=tm;else{k=Jh;var T=qh}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=em);if(k&&(k=k(e,c))){xd(h,k,n,m);break e}T&&T(e,g,c),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&Yl(g,"number",g.value)}switch(T=c?Gn(c):window,e){case"focusin":(pu(T)||T.contentEditable==="true")&&(Dn=T,ra=c,Or=null);break;case"focusout":Or=ra=Dn=null;break;case"mousedown":ia=!0;break;case"contextmenu":case"mouseup":case"dragend":ia=!1,vu(h,n,m);break;case"selectionchange":if(im)break;case"keydown":case"keyup":vu(h,n,m)}var z;if(is)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Mn?gd(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Ad&&n.locale!=="ko"&&(Mn||R!=="onCompositionStart"?R==="onCompositionEnd"&&Mn&&(z=md()):($t=m,ts="value"in $t?$t.value:$t.textContent,Mn=!0)),T=Ji(c,R),0<T.length&&(R=new uu(R,e,null,n,m),h.push({event:R,listeners:T}),z?R.data=z:(z=vd(n),z!==null&&(R.data=z)))),(z=Hh?Xh(e,n):$h(e,n))&&(c=Ji(c,"onBeforeInput"),0<c.length&&(m=new uu("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=z))}Bd(h,t)})}function Kr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ji(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Qr(e,n),o!=null&&r.unshift(Kr(e,o,i)),o=Qr(e,t),o!=null&&r.push(Kr(e,o,i))),e=e.return}return r}function Rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=Qr(n,o),u!=null&&l.unshift(Kr(n,u,s))):i||(u=Qr(n,o),u!=null&&l.push(Kr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var sm=/\r\n?/g,um=/\u0000|\uFFFD/g;function Su(e){return(typeof e=="string"?e:""+e).replace(sm,`
`).replace(um,"")}function ji(e,t,n){if(t=Su(t),Su(e)!==t&&n)throw Error(E(425))}function eo(){}var oa=null,la=null;function aa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sa=typeof setTimeout=="function"?setTimeout:void 0,cm=typeof clearTimeout=="function"?clearTimeout:void 0,Cu=typeof Promise=="function"?Promise:void 0,dm=typeof queueMicrotask=="function"?queueMicrotask:typeof Cu<"u"?function(e){return Cu.resolve(null).then(e).catch(fm)}:sa;function fm(e){setTimeout(function(){throw e})}function jl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yr(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dr=Math.random().toString(36).slice(2),Et="__reactFiber$"+dr,Zr="__reactProps$"+dr,Mt="__reactContainer$"+dr,ua="__reactEvents$"+dr,pm="__reactListeners$"+dr,hm="__reactHandles$"+dr;function An(e){var t=e[Et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[Et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ju(e);e!==null;){if(n=e[Et])return n;e=ju(e)}return t}e=n,n=e.parentNode}return null}function ui(e){return e=e[Et]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Po(e){return e[Zr]||null}var ca=[],Wn=-1;function dn(e){return{current:e}}function ne(e){0>Wn||(e.current=ca[Wn],ca[Wn]=null,Wn--)}function ee(e,t){Wn++,ca[Wn]=e.current,e.current=t}var un={},Oe=dn(un),$e=dn(!1),wn=un;function tr(e,t){var n=e.type.contextTypes;if(!n)return un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(e){return e=e.childContextTypes,e!=null}function to(){ne($e),ne(Oe)}function ku(e,t,n){if(Oe.current!==un)throw Error(E(168));ee(Oe,t),ee($e,n)}function zd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,qp(e)||"Unknown",i));return le({},n,r)}function no(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||un,wn=Oe.current,ee(Oe,e),ee($e,$e.current),!0}function Eu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=zd(e,t,wn),r.__reactInternalMemoizedMergedChildContext=e,ne($e),ne(Oe),ee(Oe,e)):ne($e),ee($e,n)}var Tt=null,No=!1,kl=!1;function Rd(e){Tt===null?Tt=[e]:Tt.push(e)}function mm(e){No=!0,Rd(e)}function fn(){if(!kl&&Tt!==null){kl=!0;var e=0,t=_;try{var n=Tt;for(_=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,No=!1}catch(i){throw Tt!==null&&(Tt=Tt.slice(e+1)),id(_a,fn),i}finally{_=t,kl=!1}}return null}var Qn=[],Un=0,ro=null,io=0,ut=[],ct=0,Sn=null,zt=1,Rt="";function hn(e,t){Qn[Un++]=io,Qn[Un++]=ro,ro=e,io=t}function Od(e,t,n){ut[ct++]=zt,ut[ct++]=Rt,ut[ct++]=Sn,Sn=e;var r=zt;e=Rt;var i=32-wt(r)-1;r&=~(1<<i),n+=1;var o=32-wt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,zt=1<<32-wt(t)+i|n<<i|r,Rt=o+e}else zt=1<<o|n<<i|r,Rt=e}function ls(e){e.return!==null&&(hn(e,1),Od(e,1,0))}function as(e){for(;e===ro;)ro=Qn[--Un],Qn[Un]=null,io=Qn[--Un],Qn[Un]=null;for(;e===Sn;)Sn=ut[--ct],ut[ct]=null,Rt=ut[--ct],ut[ct]=null,zt=ut[--ct],ut[ct]=null}var rt=null,nt=null,re=!1,yt=null;function Ld(e,t){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Iu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rt=e,nt=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rt=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Sn!==null?{id:zt,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,rt=e,nt=null,!0):!1;default:return!1}}function da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fa(e){if(re){var t=nt;if(t){var n=t;if(!Iu(e,t)){if(da(e))throw Error(E(418));t=en(n.nextSibling);var r=rt;t&&Iu(e,t)?Ld(r,n):(e.flags=e.flags&-4097|2,re=!1,rt=e)}}else{if(da(e))throw Error(E(418));e.flags=e.flags&-4097|2,re=!1,rt=e}}}function Pu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rt=e}function ki(e){if(e!==rt)return!1;if(!re)return Pu(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!aa(e.type,e.memoizedProps)),t&&(t=nt)){if(da(e))throw Fd(),Error(E(418));for(;t;)Ld(e,t),t=en(t.nextSibling)}if(Pu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=rt?en(e.stateNode.nextSibling):null;return!0}function Fd(){for(var e=nt;e;)e=en(e.nextSibling)}function nr(){nt=rt=null,re=!1}function ss(e){yt===null?yt=[e]:yt.push(e)}var Am=Gt.ReactCurrentBatchConfig;function Sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Ei(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nu(e){var t=e._init;return t(e._payload)}function Md(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=on(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,y){return d===null||d.tag!==6?(d=zl(p,f.mode,y),d.return=f,d):(d=i(d,p),d.return=f,d)}function u(f,d,p,y){var k=p.type;return k===Fn?m(f,d,p.props.children,y,p.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Vt&&Nu(k)===d.type)?(y=i(d,p.props),y.ref=Sr(f,d,p),y.return=f,y):(y=Vi(p.type,p.key,p.props,null,f.mode,y),y.ref=Sr(f,d,p),y.return=f,y)}function c(f,d,p,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Rl(p,f.mode,y),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function m(f,d,p,y,k){return d===null||d.tag!==7?(d=yn(p,f.mode,y,k),d.return=f,d):(d=i(d,p),d.return=f,d)}function h(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=zl(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case mi:return p=Vi(d.type,d.key,d.props,null,f.mode,p),p.ref=Sr(f,null,d),p.return=f,p;case Ln:return d=Rl(d,f.mode,p),d.return=f,d;case Vt:var y=d._init;return h(f,y(d._payload),p)}if(Ir(d)||gr(d))return d=yn(d,f.mode,p,null),d.return=f,d;Ei(f,d)}return null}function g(f,d,p,y){var k=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:s(f,d,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case mi:return p.key===k?u(f,d,p,y):null;case Ln:return p.key===k?c(f,d,p,y):null;case Vt:return k=p._init,g(f,d,k(p._payload),y)}if(Ir(p)||gr(p))return k!==null?null:m(f,d,p,y,null);Ei(f,p)}return null}function S(f,d,p,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,s(d,f,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case mi:return f=f.get(y.key===null?p:y.key)||null,u(d,f,y,k);case Ln:return f=f.get(y.key===null?p:y.key)||null,c(d,f,y,k);case Vt:var T=y._init;return S(f,d,p,T(y._payload),k)}if(Ir(y)||gr(y))return f=f.get(p)||null,m(d,f,y,k,null);Ei(d,y)}return null}function w(f,d,p,y){for(var k=null,T=null,z=d,R=d=0,U=null;z!==null&&R<p.length;R++){z.index>R?(U=z,z=null):U=z.sibling;var M=g(f,z,p[R],y);if(M===null){z===null&&(z=U);break}e&&z&&M.alternate===null&&t(f,z),d=o(M,d,R),T===null?k=M:T.sibling=M,T=M,z=U}if(R===p.length)return n(f,z),re&&hn(f,R),k;if(z===null){for(;R<p.length;R++)z=h(f,p[R],y),z!==null&&(d=o(z,d,R),T===null?k=z:T.sibling=z,T=z);return re&&hn(f,R),k}for(z=r(f,z);R<p.length;R++)U=S(z,f,R,p[R],y),U!==null&&(e&&U.alternate!==null&&z.delete(U.key===null?R:U.key),d=o(U,d,R),T===null?k=U:T.sibling=U,T=U);return e&&z.forEach(function(fe){return t(f,fe)}),re&&hn(f,R),k}function v(f,d,p,y){var k=gr(p);if(typeof k!="function")throw Error(E(150));if(p=k.call(p),p==null)throw Error(E(151));for(var T=k=null,z=d,R=d=0,U=null,M=p.next();z!==null&&!M.done;R++,M=p.next()){z.index>R?(U=z,z=null):U=z.sibling;var fe=g(f,z,M.value,y);if(fe===null){z===null&&(z=U);break}e&&z&&fe.alternate===null&&t(f,z),d=o(fe,d,R),T===null?k=fe:T.sibling=fe,T=fe,z=U}if(M.done)return n(f,z),re&&hn(f,R),k;if(z===null){for(;!M.done;R++,M=p.next())M=h(f,M.value,y),M!==null&&(d=o(M,d,R),T===null?k=M:T.sibling=M,T=M);return re&&hn(f,R),k}for(z=r(f,z);!M.done;R++,M=p.next())M=S(z,f,R,M.value,y),M!==null&&(e&&M.alternate!==null&&z.delete(M.key===null?R:M.key),d=o(M,d,R),T===null?k=M:T.sibling=M,T=M);return e&&z.forEach(function(ue){return t(f,ue)}),re&&hn(f,R),k}function C(f,d,p,y){if(typeof p=="object"&&p!==null&&p.type===Fn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case mi:e:{for(var k=p.key,T=d;T!==null;){if(T.key===k){if(k=p.type,k===Fn){if(T.tag===7){n(f,T.sibling),d=i(T,p.props.children),d.return=f,f=d;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Vt&&Nu(k)===T.type){n(f,T.sibling),d=i(T,p.props),d.ref=Sr(f,T,p),d.return=f,f=d;break e}n(f,T);break}else t(f,T);T=T.sibling}p.type===Fn?(d=yn(p.props.children,f.mode,y,p.key),d.return=f,f=d):(y=Vi(p.type,p.key,p.props,null,f.mode,y),y.ref=Sr(f,d,p),y.return=f,f=y)}return l(f);case Ln:e:{for(T=p.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=Rl(p,f.mode,y),d.return=f,f=d}return l(f);case Vt:return T=p._init,C(f,d,T(p._payload),y)}if(Ir(p))return w(f,d,p,y);if(gr(p))return v(f,d,p,y);Ei(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=zl(p,f.mode,y),d.return=f,f=d),l(f)):n(f,d)}return C}var rr=Md(!0),Dd=Md(!1),oo=dn(null),lo=null,Vn=null,us=null;function cs(){us=Vn=lo=null}function ds(e){var t=oo.current;ne(oo),e._currentValue=t}function pa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function qn(e,t){lo=e,us=Vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Xe=!0),e.firstContext=null)}function pt(e){var t=e._currentValue;if(us!==e)if(e={context:e,memoizedValue:t,next:null},Vn===null){if(lo===null)throw Error(E(308));Vn=e,lo.dependencies={lanes:0,firstContext:e}}else Vn=Vn.next=e;return t}var gn=null;function fs(e){gn===null?gn=[e]:gn.push(e)}function bd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,fs(t)):(n.next=i.next,i.next=n),t.interleaved=n,Dt(e,r)}function Dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Yt=!1;function ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Dt(e,n)}return i=r.interleaved,i===null?(t.next=t,fs(r)):(t.next=i.next,i.next=t),r.interleaved=t,Dt(e,n)}function Di(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qa(e,n)}}function Bu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ao(e,t,n,r){var i=e.updateQueue;Yt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=u))}if(o!==null){var h=i.baseState;l=0,m=c=u=null,s=o;do{var g=s.lane,S=s.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,v=s;switch(g=t,S=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){h=w.call(S,h,g);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,g=typeof w=="function"?w.call(S,h,g):w,g==null)break e;h=le({},h,g);break e;case 2:Yt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else S={eventTime:S,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=S,u=h):m=m.next=S,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(m===null&&(u=h),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);jn|=l,e.lanes=l,e.memoizedState=h}}function Tu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var ci={},Pt=dn(ci),_r=dn(ci),qr=dn(ci);function vn(e){if(e===ci)throw Error(E(174));return e}function hs(e,t){switch(ee(qr,t),ee(_r,e),ee(Pt,ci),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xl(t,e)}ne(Pt),ee(Pt,t)}function ir(){ne(Pt),ne(_r),ne(qr)}function Wd(e){vn(qr.current);var t=vn(Pt.current),n=Xl(t,e.type);t!==n&&(ee(_r,e),ee(Pt,n))}function ms(e){_r.current===e&&(ne(Pt),ne(_r))}var ie=dn(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var El=[];function As(){for(var e=0;e<El.length;e++)El[e]._workInProgressVersionPrimary=null;El.length=0}var bi=Gt.ReactCurrentDispatcher,Il=Gt.ReactCurrentBatchConfig,Cn=0,oe=null,Ae=null,we=null,uo=!1,Lr=!1,Jr=0,gm=0;function Te(){throw Error(E(321))}function gs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function vs(e,t,n,r,i,o){if(Cn=o,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bi.current=e===null||e.memoizedState===null?wm:Sm,e=n(r,i),Lr){o=0;do{if(Lr=!1,Jr=0,25<=o)throw Error(E(301));o+=1,we=Ae=null,t.updateQueue=null,bi.current=Cm,e=n(r,i)}while(Lr)}if(bi.current=co,t=Ae!==null&&Ae.next!==null,Cn=0,we=Ae=oe=null,uo=!1,t)throw Error(E(300));return e}function xs(){var e=Jr!==0;return Jr=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?oe.memoizedState=we=e:we=we.next=e,we}function ht(){if(Ae===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=we===null?oe.memoizedState:we.next;if(t!==null)we=t,Ae=e;else{if(e===null)throw Error(E(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},we===null?oe.memoizedState=we=e:we=we.next=e}return we}function ei(e,t){return typeof t=="function"?t(e):t}function Pl(e){var t=ht(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,c=o;do{var m=c.lane;if((Cn&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=h,l=r):u=u.next=h,oe.lanes|=m,jn|=m}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=s,Ct(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,oe.lanes|=o,jn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Nl(e){var t=ht(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ct(o,t.memoizedState)||(Xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Qd(){}function Ud(e,t){var n=oe,r=ht(),i=t(),o=!Ct(r.memoizedState,i);if(o&&(r.memoizedState=i,Xe=!0),r=r.queue,ys(Hd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,ti(9,Yd.bind(null,n,r,i,t),void 0,null),Se===null)throw Error(E(349));Cn&30||Vd(n,t,i)}return i}function Vd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yd(e,t,n,r){t.value=n,t.getSnapshot=r,Xd(t)&&$d(e)}function Hd(e,t,n){return n(function(){Xd(t)&&$d(e)})}function Xd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function $d(e){var t=Dt(e,1);t!==null&&St(t,e,1,-1)}function zu(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:e},t.queue=e,e=e.dispatch=ym.bind(null,oe,e),[t.memoizedState,e]}function ti(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Kd(){return ht().memoizedState}function Gi(e,t,n,r){var i=kt();oe.flags|=e,i.memoizedState=ti(1|t,n,void 0,r===void 0?null:r)}function Bo(e,t,n,r){var i=ht();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var l=Ae.memoizedState;if(o=l.destroy,r!==null&&gs(r,l.deps)){i.memoizedState=ti(t,n,o,r);return}}oe.flags|=e,i.memoizedState=ti(1|t,n,o,r)}function Ru(e,t){return Gi(8390656,8,e,t)}function ys(e,t){return Bo(2048,8,e,t)}function Zd(e,t){return Bo(4,2,e,t)}function _d(e,t){return Bo(4,4,e,t)}function qd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jd(e,t,n){return n=n!=null?n.concat([e]):null,Bo(4,4,qd.bind(null,t,e),n)}function ws(){}function ef(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function tf(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function nf(e,t,n){return Cn&21?(Ct(n,t)||(n=ad(),oe.lanes|=n,jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=n)}function vm(e,t){var n=_;_=n!==0&&4>n?n:4,e(!0);var r=Il.transition;Il.transition={};try{e(!1),t()}finally{_=n,Il.transition=r}}function rf(){return ht().memoizedState}function xm(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},of(e))lf(t,n);else if(n=bd(e,t,n,r),n!==null){var i=Me();St(n,e,r,i),af(n,t,r)}}function ym(e,t,n){var r=rn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(of(e))lf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Ct(s,l)){var u=t.interleaved;u===null?(i.next=i,fs(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=bd(e,t,i,r),n!==null&&(i=Me(),St(n,e,r,i),af(n,t,r))}}function of(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function lf(e,t){Lr=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function af(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qa(e,n)}}var co={readContext:pt,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},wm={readContext:pt,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:Ru,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Gi(4194308,4,qd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gi(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xm.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:zu,useDebugValue:ws,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=zu(!1),t=e[0];return e=vm.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,i=kt();if(re){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),Se===null)throw Error(E(349));Cn&30||Vd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ru(Hd.bind(null,r,o,e),[e]),r.flags|=2048,ti(9,Yd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=kt(),t=Se.identifierPrefix;if(re){var n=Rt,r=zt;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sm={readContext:pt,useCallback:ef,useContext:pt,useEffect:ys,useImperativeHandle:Jd,useInsertionEffect:Zd,useLayoutEffect:_d,useMemo:tf,useReducer:Pl,useRef:Kd,useState:function(){return Pl(ei)},useDebugValue:ws,useDeferredValue:function(e){var t=ht();return nf(t,Ae.memoizedState,e)},useTransition:function(){var e=Pl(ei)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Qd,useSyncExternalStore:Ud,useId:rf,unstable_isNewReconciler:!1},Cm={readContext:pt,useCallback:ef,useContext:pt,useEffect:ys,useImperativeHandle:Jd,useInsertionEffect:Zd,useLayoutEffect:_d,useMemo:tf,useReducer:Nl,useRef:Kd,useState:function(){return Nl(ei)},useDebugValue:ws,useDeferredValue:function(e){var t=ht();return Ae===null?t.memoizedState=e:nf(t,Ae.memoizedState,e)},useTransition:function(){var e=Nl(ei)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Qd,useSyncExternalStore:Ud,useId:rf,unstable_isNewReconciler:!1};function vt(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ha(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var To={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),i=rn(e),o=Lt(r,i);o.payload=t,n!=null&&(o.callback=n),t=tn(e,o,i),t!==null&&(St(t,e,i,r),Di(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),i=rn(e),o=Lt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=tn(e,o,i),t!==null&&(St(t,e,i,r),Di(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=rn(e),i=Lt(n,r);i.tag=2,t!=null&&(i.callback=t),t=tn(e,i,r),t!==null&&(St(t,e,r,n),Di(t,e,r))}};function Ou(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Xr(n,r)||!Xr(i,o):!0}function sf(e,t,n){var r=!1,i=un,o=t.contextType;return typeof o=="object"&&o!==null?o=pt(o):(i=Ke(t)?wn:Oe.current,r=t.contextTypes,o=(r=r!=null)?tr(e,i):un),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=To,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Lu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&To.enqueueReplaceState(t,t.state,null)}function ma(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ps(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=pt(o):(o=Ke(t)?wn:Oe.current,i.context=tr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ha(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&To.enqueueReplaceState(i,i.state,null),ao(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,t){try{var n="",r=t;do n+=_p(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Bl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Aa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jm=typeof WeakMap=="function"?WeakMap:Map;function uf(e,t,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){po||(po=!0,Ea=r),Aa(e,t)},n}function cf(e,t,n){n=Lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Aa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Aa(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Fu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Dm.bind(null,e,t,n),t.then(e,e))}function Mu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Du(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Lt(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e)}var km=Gt.ReactCurrentOwner,Xe=!1;function Fe(e,t,n,r){t.child=e===null?Dd(t,null,n,r):rr(t,e.child,n,r)}function bu(e,t,n,r,i){n=n.render;var o=t.ref;return qn(t,i),r=vs(e,t,n,r,o,i),n=xs(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bt(e,t,i)):(re&&n&&ls(t),t.flags|=1,Fe(e,t,r,i),t.child)}function Gu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ns(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,df(e,t,o,r,i)):(e=Vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Xr,n(l,r)&&e.ref===t.ref)return bt(e,t,i)}return t.flags|=1,e=on(o,r),e.ref=t.ref,e.return=t,t.child=e}function df(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Xr(o,r)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,bt(e,t,i)}return ga(e,t,n,r,i)}function ff(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Hn,tt),tt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Hn,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ee(Hn,tt),tt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ee(Hn,tt),tt|=r;return Fe(e,t,i,n),t.child}function pf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ga(e,t,n,r,i){var o=Ke(n)?wn:Oe.current;return o=tr(t,o),qn(t,i),n=vs(e,t,n,r,o,i),r=xs(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bt(e,t,i)):(re&&r&&ls(t),t.flags|=1,Fe(e,t,n,i),t.child)}function Wu(e,t,n,r,i){if(Ke(n)){var o=!0;no(t)}else o=!1;if(qn(t,i),t.stateNode===null)Wi(e,t),sf(t,n,r),ma(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=pt(c):(c=Ke(n)?wn:Oe.current,c=tr(t,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Lu(t,l,r,c),Yt=!1;var g=t.memoizedState;l.state=g,ao(t,r,l,i),u=t.memoizedState,s!==r||g!==u||$e.current||Yt?(typeof m=="function"&&(ha(t,n,m,r),u=t.memoizedState),(s=Yt||Ou(t,n,s,r,g,u,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Gd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:vt(t.type,s),l.props=c,h=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=pt(u):(u=Ke(n)?wn:Oe.current,u=tr(t,u));var S=n.getDerivedStateFromProps;(m=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||g!==u)&&Lu(t,l,r,u),Yt=!1,g=t.memoizedState,l.state=g,ao(t,r,l,i);var w=t.memoizedState;s!==h||g!==w||$e.current||Yt?(typeof S=="function"&&(ha(t,n,S,r),w=t.memoizedState),(c=Yt||Ou(t,n,c,r,g,w,u)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return va(e,t,n,r,o,i)}function va(e,t,n,r,i,o){pf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Eu(t,n,!1),bt(e,t,o);r=t.stateNode,km.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=rr(t,e.child,null,o),t.child=rr(t,null,s,o)):Fe(e,t,s,o),t.memoizedState=r.state,i&&Eu(t,n,!0),t.child}function hf(e){var t=e.stateNode;t.pendingContext?ku(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ku(e,t.context,!1),hs(e,t.containerInfo)}function Qu(e,t,n,r,i){return nr(),ss(i),t.flags|=256,Fe(e,t,n,r),t.child}var xa={dehydrated:null,treeContext:null,retryLane:0};function ya(e){return{baseLanes:e,cachePool:null,transitions:null}}function mf(e,t,n){var r=t.pendingProps,i=ie.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(ie,i&1),e===null)return fa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Oo(l,r,0,null),e=yn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ya(n),t.memoizedState=xa,e):Ss(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Em(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=on(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=on(s,o):(o=yn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ya(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=xa,r}return o=e.child,e=o.sibling,r=on(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ss(e,t){return t=Oo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ii(e,t,n,r){return r!==null&&ss(r),rr(t,e.child,null,n),e=Ss(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Em(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Bl(Error(E(422))),Ii(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Oo({mode:"visible",children:r.children},i,0,null),o=yn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&rr(t,e.child,null,l),t.child.memoizedState=ya(l),t.memoizedState=xa,o);if(!(t.mode&1))return Ii(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(E(419)),r=Bl(o,r,void 0),Ii(e,t,l,r)}if(s=(l&e.childLanes)!==0,Xe||s){if(r=Se,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Dt(e,i),St(r,e,i,-1))}return Ps(),r=Bl(Error(E(421))),Ii(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=bm.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,nt=en(i.nextSibling),rt=t,re=!0,yt=null,e!==null&&(ut[ct++]=zt,ut[ct++]=Rt,ut[ct++]=Sn,zt=e.id,Rt=e.overflow,Sn=t),t=Ss(t,r.children),t.flags|=4096,t)}function Uu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),pa(e.return,t,n)}function Tl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Af(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Fe(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uu(e,n,t);else if(e.tag===19)Uu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&so(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tl(t,!0,n,null,o);break;case"together":Tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=on(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=on(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Im(e,t,n){switch(t.tag){case 3:hf(t),nr();break;case 5:Wd(t);break;case 1:Ke(t.type)&&no(t);break;case 4:hs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(oo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?mf(e,t,n):(ee(ie,ie.current&1),e=bt(e,t,n),e!==null?e.sibling:null);ee(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Af(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,ff(e,t,n)}return bt(e,t,n)}var gf,wa,vf,xf;gf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wa=function(){};vf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,vn(Pt.current);var o=null;switch(n){case"input":i=Ul(e,i),r=Ul(e,r),o=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),o=[];break;case"textarea":i=Hl(e,i),r=Hl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=eo)}$l(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Gr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Gr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&te("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};xf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Pm(e,t,n){var r=t.pendingProps;switch(as(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return Ke(t.type)&&to(),ze(t),null;case 3:return r=t.stateNode,ir(),ne($e),ne(Oe),As(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ki(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yt!==null&&(Na(yt),yt=null))),wa(e,t),ze(t),null;case 5:ms(t);var i=vn(qr.current);if(n=t.type,e!==null&&t.stateNode!=null)vf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return ze(t),null}if(e=vn(Pt.current),ki(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Et]=t,r[Zr]=o,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Nr.length;i++)te(Nr[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":qs(r,o),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},te("invalid",r);break;case"textarea":eu(r,o),te("invalid",r)}$l(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ji(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ji(r.textContent,s,e),i=["children",""+s]):Gr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&te("scroll",r)}switch(n){case"input":Ai(r),Js(r,o,!0);break;case"textarea":Ai(r),tu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=eo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Et]=t,e[Zr]=r,gf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Kl(n,r),n){case"dialog":te("cancel",e),te("close",e),i=r;break;case"iframe":case"object":case"embed":te("load",e),i=r;break;case"video":case"audio":for(i=0;i<Nr.length;i++)te(Nr[i],e);i=r;break;case"source":te("error",e),i=r;break;case"img":case"image":case"link":te("error",e),te("load",e),i=r;break;case"details":te("toggle",e),i=r;break;case"input":qs(e,r),i=Ul(e,r),te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),te("invalid",e);break;case"textarea":eu(e,r),i=Hl(e,r),te("invalid",e);break;default:i=r}$l(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Kc(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Xc(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Wr(e,u):typeof u=="number"&&Wr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Gr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&te("scroll",e):u!=null&&Ha(e,o,u,l))}switch(n){case"input":Ai(e),Js(e,r,!1);break;case"textarea":Ai(e),tu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+sn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?$n(e,!!r.multiple,o,!1):r.defaultValue!=null&&$n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)xf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=vn(qr.current),vn(Pt.current),ki(t)){if(r=t.stateNode,n=t.memoizedProps,r[Et]=t,(o=r.nodeValue!==n)&&(e=rt,e!==null))switch(e.tag){case 3:ji(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ji(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Et]=t,t.stateNode=r}return ze(t),null;case 13:if(ne(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&nt!==null&&t.mode&1&&!(t.flags&128))Fd(),nr(),t.flags|=98560,o=!1;else if(o=ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[Et]=t}else nr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),o=!1}else yt!==null&&(Na(yt),yt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?ve===0&&(ve=3):Ps())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return ir(),wa(e,t),e===null&&$r(t.stateNode.containerInfo),ze(t),null;case 10:return ds(t.type._context),ze(t),null;case 17:return Ke(t.type)&&to(),ze(t),null;case 19:if(ne(ie),o=t.memoizedState,o===null)return ze(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Cr(o,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=so(e),l!==null){for(t.flags|=128,Cr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(ie,ie.current&1|2),t.child}e=e.sibling}o.tail!==null&&de()>lr&&(t.flags|=128,r=!0,Cr(o,!1),t.lanes=4194304)}else{if(!r)if(e=so(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!re)return ze(t),null}else 2*de()-o.renderingStartTime>lr&&n!==1073741824&&(t.flags|=128,r=!0,Cr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=de(),t.sibling=null,n=ie.current,ee(ie,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return Is(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?tt&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Nm(e,t){switch(as(t),t.tag){case 1:return Ke(t.type)&&to(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ir(),ne($e),ne(Oe),As(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ms(t),null;case 13:if(ne(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(ie),null;case 4:return ir(),null;case 10:return ds(t.type._context),null;case 22:case 23:return Is(),null;case 24:return null;default:return null}}var Pi=!1,Re=!1,Bm=typeof WeakSet=="function"?WeakSet:Set,L=null;function Yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function Sa(e,t,n){try{n()}catch(r){se(e,t,r)}}var Vu=!1;function Tm(e,t){if(oa=_i,e=Cd(),os(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,m=0,h=e,g=null;t:for(;;){for(var S;h!==n||i!==0&&h.nodeType!==3||(s=l+i),h!==o||r!==0&&h.nodeType!==3||(u=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(S=h.firstChild)!==null;)g=h,h=S;for(;;){if(h===e)break t;if(g===n&&++c===i&&(s=l),g===o&&++m===r&&(u=l),(S=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=S}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(la={focusedElem:e,selectionRange:n},_i=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,C=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:vt(t.type,v),C);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){se(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return w=Vu,Vu=!1,w}function Fr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Sa(t,n,o)}i=i.next}while(i!==r)}}function zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ca(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yf(e){var t=e.alternate;t!==null&&(e.alternate=null,yf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Et],delete t[Zr],delete t[ua],delete t[pm],delete t[hm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wf(e){return e.tag===5||e.tag===3||e.tag===4}function Yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ja(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=eo));else if(r!==4&&(e=e.child,e!==null))for(ja(e,t,n),e=e.sibling;e!==null;)ja(e,t,n),e=e.sibling}function ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ka(e,t,n),e=e.sibling;e!==null;)ka(e,t,n),e=e.sibling}var Ie=null,xt=!1;function Qt(e,t,n){for(n=n.child;n!==null;)Sf(e,t,n),n=n.sibling}function Sf(e,t,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(jo,n)}catch{}switch(n.tag){case 5:Re||Yn(n,t);case 6:var r=Ie,i=xt;Ie=null,Qt(e,t,n),Ie=r,xt=i,Ie!==null&&(xt?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(xt?(e=Ie,n=n.stateNode,e.nodeType===8?jl(e.parentNode,n):e.nodeType===1&&jl(e,n),Yr(e)):jl(Ie,n.stateNode));break;case 4:r=Ie,i=xt,Ie=n.stateNode.containerInfo,xt=!0,Qt(e,t,n),Ie=r,xt=i;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Sa(n,t,l),i=i.next}while(i!==r)}Qt(e,t,n);break;case 1:if(!Re&&(Yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){se(n,t,s)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,Qt(e,t,n),Re=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function Hu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Bm),t.forEach(function(r){var i=Gm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Ie=s.stateNode,xt=!1;break e;case 3:Ie=s.stateNode.containerInfo,xt=!0;break e;case 4:Ie=s.stateNode.containerInfo,xt=!0;break e}s=s.return}if(Ie===null)throw Error(E(160));Sf(o,l,i),Ie=null,xt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){se(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cf(t,e),t=t.sibling}function Cf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),jt(e),r&4){try{Fr(3,e,e.return),zo(3,e)}catch(v){se(e,e.return,v)}try{Fr(5,e,e.return)}catch(v){se(e,e.return,v)}}break;case 1:gt(t,e),jt(e),r&512&&n!==null&&Yn(n,n.return);break;case 5:if(gt(t,e),jt(e),r&512&&n!==null&&Yn(n,n.return),e.flags&32){var i=e.stateNode;try{Wr(i,"")}catch(v){se(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Vc(i,o),Kl(s,l);var c=Kl(s,o);for(l=0;l<u.length;l+=2){var m=u[l],h=u[l+1];m==="style"?Kc(i,h):m==="dangerouslySetInnerHTML"?Xc(i,h):m==="children"?Wr(i,h):Ha(i,m,h,c)}switch(s){case"input":Vl(i,o);break;case"textarea":Yc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?$n(i,!!o.multiple,S,!1):g!==!!o.multiple&&(o.defaultValue!=null?$n(i,!!o.multiple,o.defaultValue,!0):$n(i,!!o.multiple,o.multiple?[]:"",!1))}i[Zr]=o}catch(v){se(e,e.return,v)}}break;case 6:if(gt(t,e),jt(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){se(e,e.return,v)}}break;case 3:if(gt(t,e),jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(v){se(e,e.return,v)}break;case 4:gt(t,e),jt(e);break;case 13:gt(t,e),jt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ks=de())),r&4&&Hu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(c=Re)||m,gt(t,e),Re=c):gt(t,e),jt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(L=e,m=e.child;m!==null;){for(h=L=m;L!==null;){switch(g=L,S=g.child,g.tag){case 0:case 11:case 14:case 15:Fr(4,g,g.return);break;case 1:Yn(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){se(r,n,v)}}break;case 5:Yn(g,g.return);break;case 22:if(g.memoizedState!==null){$u(h);continue}}S!==null?(S.return=g,L=S):$u(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,u=h.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=$c("display",l))}catch(v){se(e,e.return,v)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){se(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:gt(t,e),jt(e),r&4&&Hu(e);break;case 21:break;default:gt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wf(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wr(i,""),r.flags&=-33);var o=Yu(e);ka(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Yu(e);ja(e,s,l);break;default:throw Error(E(161))}}catch(u){se(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zm(e,t,n){L=e,jf(e)}function jf(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Pi;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||Re;s=Pi;var c=Re;if(Pi=l,(Re=u)&&!c)for(L=i;L!==null;)l=L,u=l.child,l.tag===22&&l.memoizedState!==null?Ku(i):u!==null?(u.return=l,L=u):Ku(i);for(;o!==null;)L=o,jf(o),o=o.sibling;L=i,Pi=s,Re=c}Xu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):Xu(e)}}function Xu(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||zo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:vt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Tu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Tu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Yr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Re||t.flags&512&&Ca(t)}catch(g){se(t,t.return,g)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function $u(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Ku(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zo(4,t)}catch(u){se(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){se(t,i,u)}}var o=t.return;try{Ca(t)}catch(u){se(t,o,u)}break;case 5:var l=t.return;try{Ca(t)}catch(u){se(t,l,u)}}}catch(u){se(t,t.return,u)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var Rm=Math.ceil,fo=Gt.ReactCurrentDispatcher,Cs=Gt.ReactCurrentOwner,ft=Gt.ReactCurrentBatchConfig,Y=0,Se=null,pe=null,Pe=0,tt=0,Hn=dn(0),ve=0,ni=null,jn=0,Ro=0,js=0,Mr=null,He=null,ks=0,lr=1/0,Bt=null,po=!1,Ea=null,nn=null,Ni=!1,Kt=null,ho=0,Dr=0,Ia=null,Qi=-1,Ui=0;function Me(){return Y&6?de():Qi!==-1?Qi:Qi=de()}function rn(e){return e.mode&1?Y&2&&Pe!==0?Pe&-Pe:Am.transition!==null?(Ui===0&&(Ui=ad()),Ui):(e=_,e!==0||(e=window.event,e=e===void 0?16:hd(e.type)),e):1}function St(e,t,n,r){if(50<Dr)throw Dr=0,Ia=null,Error(E(185));ai(e,n,r),(!(Y&2)||e!==Se)&&(e===Se&&(!(Y&2)&&(Ro|=n),ve===4&&Xt(e,Pe)),Ze(e,r),n===1&&Y===0&&!(t.mode&1)&&(lr=de()+500,No&&fn()))}function Ze(e,t){var n=e.callbackNode;Ah(e,t);var r=Zi(e,e===Se?Pe:0);if(r===0)n!==null&&iu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&iu(n),t===1)e.tag===0?mm(Zu.bind(null,e)):Rd(Zu.bind(null,e)),dm(function(){!(Y&6)&&fn()}),n=null;else{switch(sd(r)){case 1:n=_a;break;case 4:n=od;break;case 16:n=Ki;break;case 536870912:n=ld;break;default:n=Ki}n=zf(n,kf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kf(e,t){if(Qi=-1,Ui=0,Y&6)throw Error(E(327));var n=e.callbackNode;if(Jn()&&e.callbackNode!==n)return null;var r=Zi(e,e===Se?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=mo(e,r);else{t=r;var i=Y;Y|=2;var o=If();(Se!==e||Pe!==t)&&(Bt=null,lr=de()+500,xn(e,t));do try{Fm();break}catch(s){Ef(e,s)}while(1);cs(),fo.current=o,Y=i,pe!==null?t=0:(Se=null,Pe=0,t=ve)}if(t!==0){if(t===2&&(i=ea(e),i!==0&&(r=i,t=Pa(e,i))),t===1)throw n=ni,xn(e,0),Xt(e,r),Ze(e,de()),n;if(t===6)Xt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Om(i)&&(t=mo(e,r),t===2&&(o=ea(e),o!==0&&(r=o,t=Pa(e,o))),t===1))throw n=ni,xn(e,0),Xt(e,r),Ze(e,de()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:mn(e,He,Bt);break;case 3:if(Xt(e,r),(r&130023424)===r&&(t=ks+500-de(),10<t)){if(Zi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=sa(mn.bind(null,e,He,Bt),t);break}mn(e,He,Bt);break;case 4:if(Xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-wt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rm(r/1960))-r,10<r){e.timeoutHandle=sa(mn.bind(null,e,He,Bt),r);break}mn(e,He,Bt);break;case 5:mn(e,He,Bt);break;default:throw Error(E(329))}}}return Ze(e,de()),e.callbackNode===n?kf.bind(null,e):null}function Pa(e,t){var n=Mr;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=mo(e,t),e!==2&&(t=He,He=n,t!==null&&Na(t)),e}function Na(e){He===null?He=e:He.push.apply(He,e)}function Om(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ct(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xt(e,t){for(t&=~js,t&=~Ro,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wt(t),r=1<<n;e[n]=-1,t&=~r}}function Zu(e){if(Y&6)throw Error(E(327));Jn();var t=Zi(e,0);if(!(t&1))return Ze(e,de()),null;var n=mo(e,t);if(e.tag!==0&&n===2){var r=ea(e);r!==0&&(t=r,n=Pa(e,r))}if(n===1)throw n=ni,xn(e,0),Xt(e,t),Ze(e,de()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mn(e,He,Bt),Ze(e,de()),null}function Es(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(lr=de()+500,No&&fn())}}function kn(e){Kt!==null&&Kt.tag===0&&!(Y&6)&&Jn();var t=Y;Y|=1;var n=ft.transition,r=_;try{if(ft.transition=null,_=1,e)return e()}finally{_=r,ft.transition=n,Y=t,!(Y&6)&&fn()}}function Is(){tt=Hn.current,ne(Hn)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cm(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(as(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&to();break;case 3:ir(),ne($e),ne(Oe),As();break;case 5:ms(r);break;case 4:ir();break;case 13:ne(ie);break;case 19:ne(ie);break;case 10:ds(r.type._context);break;case 22:case 23:Is()}n=n.return}if(Se=e,pe=e=on(e.current,null),Pe=tt=t,ve=0,ni=null,js=Ro=jn=0,He=Mr=null,gn!==null){for(t=0;t<gn.length;t++)if(n=gn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}gn=null}return e}function Ef(e,t){do{var n=pe;try{if(cs(),bi.current=co,uo){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}uo=!1}if(Cn=0,we=Ae=oe=null,Lr=!1,Jr=0,Cs.current=null,n===null||n.return===null){ve=1,ni=t,pe=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=Pe,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=s,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var S=Mu(l);if(S!==null){S.flags&=-257,Du(S,l,s,o,t),S.mode&1&&Fu(o,c,t),t=S,u=c;var w=t.updateQueue;if(w===null){var v=new Set;v.add(u),t.updateQueue=v}else w.add(u);break e}else{if(!(t&1)){Fu(o,c,t),Ps();break e}u=Error(E(426))}}else if(re&&s.mode&1){var C=Mu(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Du(C,l,s,o,t),ss(or(u,s));break e}}o=u=or(u,s),ve!==4&&(ve=2),Mr===null?Mr=[o]:Mr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=uf(o,u,t);Bu(o,f);break e;case 1:s=u;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(nn===null||!nn.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=cf(o,s,t);Bu(o,y);break e}}o=o.return}while(o!==null)}Nf(n)}catch(k){t=k,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(1)}function If(){var e=fo.current;return fo.current=co,e===null?co:e}function Ps(){(ve===0||ve===3||ve===2)&&(ve=4),Se===null||!(jn&268435455)&&!(Ro&268435455)||Xt(Se,Pe)}function mo(e,t){var n=Y;Y|=2;var r=If();(Se!==e||Pe!==t)&&(Bt=null,xn(e,t));do try{Lm();break}catch(i){Ef(e,i)}while(1);if(cs(),Y=n,fo.current=r,pe!==null)throw Error(E(261));return Se=null,Pe=0,ve}function Lm(){for(;pe!==null;)Pf(pe)}function Fm(){for(;pe!==null&&!ah();)Pf(pe)}function Pf(e){var t=Tf(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?Nf(e):pe=t,Cs.current=null}function Nf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Nm(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,pe=null;return}}else if(n=Pm(n,t,tt),n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ve===0&&(ve=5)}function mn(e,t,n){var r=_,i=ft.transition;try{ft.transition=null,_=1,Mm(e,t,n,r)}finally{ft.transition=i,_=r}return null}function Mm(e,t,n,r){do Jn();while(Kt!==null);if(Y&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(gh(e,o),e===Se&&(pe=Se=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ni||(Ni=!0,zf(Ki,function(){return Jn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ft.transition,ft.transition=null;var l=_;_=1;var s=Y;Y|=4,Cs.current=null,Tm(e,n),Cf(n,e),rm(la),_i=!!oa,la=oa=null,e.current=n,zm(n),sh(),Y=s,_=l,ft.transition=o}else e.current=n;if(Ni&&(Ni=!1,Kt=e,ho=i),o=e.pendingLanes,o===0&&(nn=null),dh(n.stateNode),Ze(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(po)throw po=!1,e=Ea,Ea=null,e;return ho&1&&e.tag!==0&&Jn(),o=e.pendingLanes,o&1?e===Ia?Dr++:(Dr=0,Ia=e):Dr=0,fn(),null}function Jn(){if(Kt!==null){var e=sd(ho),t=ft.transition,n=_;try{if(ft.transition=null,_=16>e?16:e,Kt===null)var r=!1;else{if(e=Kt,Kt=null,ho=0,Y&6)throw Error(E(331));var i=Y;for(Y|=4,L=e.current;L!==null;){var o=L,l=o.child;if(L.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(L=c;L!==null;){var m=L;switch(m.tag){case 0:case 11:case 15:Fr(8,m,o)}var h=m.child;if(h!==null)h.return=m,L=h;else for(;L!==null;){m=L;var g=m.sibling,S=m.return;if(yf(m),m===c){L=null;break}if(g!==null){g.return=S,L=g;break}L=S}}}var w=o.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}L=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,L=l;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Fr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,L=f;break e}L=o.return}}var d=e.current;for(L=d;L!==null;){l=L;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,L=p;else e:for(l=d;L!==null;){if(s=L,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:zo(9,s)}}catch(k){se(s,s.return,k)}if(s===l){L=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,L=y;break e}L=s.return}}if(Y=i,fn(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(jo,e)}catch{}r=!0}return r}finally{_=n,ft.transition=t}}return!1}function _u(e,t,n){t=or(n,t),t=uf(e,t,1),e=tn(e,t,1),t=Me(),e!==null&&(ai(e,1,t),Ze(e,t))}function se(e,t,n){if(e.tag===3)_u(e,e,n);else for(;t!==null;){if(t.tag===3){_u(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=or(n,e),e=cf(t,e,1),t=tn(t,e,1),e=Me(),t!==null&&(ai(t,1,e),Ze(t,e));break}}t=t.return}}function Dm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(Pe&n)===n&&(ve===4||ve===3&&(Pe&130023424)===Pe&&500>de()-ks?xn(e,0):js|=n),Ze(e,t)}function Bf(e,t){t===0&&(e.mode&1?(t=xi,xi<<=1,!(xi&130023424)&&(xi=4194304)):t=1);var n=Me();e=Dt(e,t),e!==null&&(ai(e,t,n),Ze(e,n))}function bm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bf(e,n)}function Gm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Bf(e,n)}var Tf;Tf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)Xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Xe=!1,Im(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,re&&t.flags&1048576&&Od(t,io,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wi(e,t),e=t.pendingProps;var i=tr(t,Oe.current);qn(t,n),i=vs(null,t,r,e,i,n);var o=xs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(o=!0,no(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ps(t),i.updater=To,t.stateNode=i,i._reactInternals=t,ma(t,r,e,n),t=va(null,t,r,!0,o,n)):(t.tag=0,re&&o&&ls(t),Fe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Qm(r),e=vt(r,e),i){case 0:t=ga(null,t,r,e,n);break e;case 1:t=Wu(null,t,r,e,n);break e;case 11:t=bu(null,t,r,e,n);break e;case 14:t=Gu(null,t,r,vt(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),ga(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),Wu(e,t,r,i,n);case 3:e:{if(hf(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Gd(e,t),ao(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=or(Error(E(423)),t),t=Qu(e,t,r,n,i);break e}else if(r!==i){i=or(Error(E(424)),t),t=Qu(e,t,r,n,i);break e}else for(nt=en(t.stateNode.containerInfo.firstChild),rt=t,re=!0,yt=null,n=Dd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nr(),r===i){t=bt(e,t,n);break e}Fe(e,t,r,n)}t=t.child}return t;case 5:return Wd(t),e===null&&fa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,aa(r,i)?l=null:o!==null&&aa(r,o)&&(t.flags|=32),pf(e,t),Fe(e,t,l,n),t.child;case 6:return e===null&&fa(t),null;case 13:return mf(e,t,n);case 4:return hs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rr(t,null,r,n):Fe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),bu(e,t,r,i,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ee(oo,r._currentValue),r._currentValue=l,o!==null)if(Ct(o.value,l)){if(o.children===i.children&&!$e.current){t=bt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Lt(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),pa(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(E(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),pa(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Fe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,qn(t,n),i=pt(i),r=r(i),t.flags|=1,Fe(e,t,r,n),t.child;case 14:return r=t.type,i=vt(r,t.pendingProps),i=vt(r.type,i),Gu(e,t,r,i,n);case 15:return df(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),Wi(e,t),t.tag=1,Ke(r)?(e=!0,no(t)):e=!1,qn(t,n),sf(t,r,i),ma(t,r,i,n),va(null,t,r,!0,e,n);case 19:return Af(e,t,n);case 22:return ff(e,t,n)}throw Error(E(156,t.tag))};function zf(e,t){return id(e,t)}function Wm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,n,r){return new Wm(e,t,n,r)}function Ns(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qm(e){if(typeof e=="function")return Ns(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$a)return 11;if(e===Ka)return 14}return 2}function on(e,t){var n=e.alternate;return n===null?(n=dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Ns(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Fn:return yn(n.children,i,o,t);case Xa:l=8,i|=8;break;case bl:return e=dt(12,n,t,i|2),e.elementType=bl,e.lanes=o,e;case Gl:return e=dt(13,n,t,i),e.elementType=Gl,e.lanes=o,e;case Wl:return e=dt(19,n,t,i),e.elementType=Wl,e.lanes=o,e;case Wc:return Oo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bc:l=10;break e;case Gc:l=9;break e;case $a:l=11;break e;case Ka:l=14;break e;case Vt:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=dt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function yn(e,t,n,r){return e=dt(7,e,r,t),e.lanes=n,e}function Oo(e,t,n,r){return e=dt(22,e,r,t),e.elementType=Wc,e.lanes=n,e.stateNode={isHidden:!1},e}function zl(e,t,n){return e=dt(6,e,null,t),e.lanes=n,e}function Rl(e,t,n){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Um(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pl(0),this.expirationTimes=pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bs(e,t,n,r,i,o,l,s,u){return e=new Um(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=dt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ps(o),e}function Vm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ln,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rf(e){if(!e)return un;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Ke(n))return zd(e,n,t)}return t}function Of(e,t,n,r,i,o,l,s,u){return e=Bs(n,r,!0,e,i,o,l,s,u),e.context=Rf(null),n=e.current,r=Me(),i=rn(n),o=Lt(r,i),o.callback=t??null,tn(n,o,i),e.current.lanes=i,ai(e,i,r),Ze(e,r),e}function Lo(e,t,n,r){var i=t.current,o=Me(),l=rn(i);return n=Rf(n),t.context===null?t.context=n:t.pendingContext=n,t=Lt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(i,t,l),e!==null&&(St(e,i,l,o),Di(e,i,l)),l}function Ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ts(e,t){qu(e,t),(e=e.alternate)&&qu(e,t)}function Ym(){return null}var Lf=typeof reportError=="function"?reportError:function(e){console.error(e)};function zs(e){this._internalRoot=e}Fo.prototype.render=zs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Lo(e,t,null,null)};Fo.prototype.unmount=zs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kn(function(){Lo(null,e,null,null)}),t[Mt]=null}};function Fo(e){this._internalRoot=e}Fo.prototype.unstable_scheduleHydration=function(e){if(e){var t=dd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ht.length&&t!==0&&t<Ht[n].priority;n++);Ht.splice(n,0,e),n===0&&pd(e)}};function Rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ju(){}function Hm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Ao(l);o.call(c)}}var l=Of(t,r,e,0,null,!1,!1,"",Ju);return e._reactRootContainer=l,e[Mt]=l.current,$r(e.nodeType===8?e.parentNode:e),kn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=Ao(u);s.call(c)}}var u=Bs(e,0,!1,null,null,!1,!1,"",Ju);return e._reactRootContainer=u,e[Mt]=u.current,$r(e.nodeType===8?e.parentNode:e),kn(function(){Lo(t,u,n,r)}),u}function Do(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=Ao(l);s.call(u)}}Lo(t,l,e,i)}else l=Hm(n,t,e,i,r);return Ao(l)}ud=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pr(t.pendingLanes);n!==0&&(qa(t,n|1),Ze(t,de()),!(Y&6)&&(lr=de()+500,fn()))}break;case 13:kn(function(){var r=Dt(e,1);if(r!==null){var i=Me();St(r,e,1,i)}}),Ts(e,1)}};Ja=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var n=Me();St(t,e,134217728,n)}Ts(e,134217728)}};cd=function(e){if(e.tag===13){var t=rn(e),n=Dt(e,t);if(n!==null){var r=Me();St(n,e,t,r)}Ts(e,t)}};dd=function(){return _};fd=function(e,t){var n=_;try{return _=e,t()}finally{_=n}};_l=function(e,t,n){switch(t){case"input":if(Vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Po(r);if(!i)throw Error(E(90));Uc(r),Vl(r,i)}}}break;case"textarea":Yc(e,n);break;case"select":t=n.value,t!=null&&$n(e,!!n.multiple,t,!1)}};qc=Es;Jc=kn;var Xm={usingClientEntryPoint:!1,Events:[ui,Gn,Po,Zc,_c,Es]},jr={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$m={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nd(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||Ym,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bi.isDisabled&&Bi.supportsFiber)try{jo=Bi.inject($m),It=Bi}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xm;ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rs(t))throw Error(E(200));return Vm(e,t,null,n)};ot.createRoot=function(e,t){if(!Rs(e))throw Error(E(299));var n=!1,r="",i=Lf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Bs(e,1,!1,null,null,n,!1,r,i),e[Mt]=t.current,$r(e.nodeType===8?e.parentNode:e),new zs(t)};ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=nd(t),e=e===null?null:e.stateNode,e};ot.flushSync=function(e){return kn(e)};ot.hydrate=function(e,t,n){if(!Mo(t))throw Error(E(200));return Do(null,e,t,!0,n)};ot.hydrateRoot=function(e,t,n){if(!Rs(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Lf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Of(t,null,e,1,n??null,i,!1,o,l),e[Mt]=t.current,$r(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Fo(t)};ot.render=function(e,t,n){if(!Mo(t))throw Error(E(200));return Do(null,e,t,!1,n)};ot.unmountComponentAtNode=function(e){if(!Mo(e))throw Error(E(40));return e._reactRootContainer?(kn(function(){Do(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};ot.unstable_batchedUpdates=Es;ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Mo(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Do(e,t,n,!1,r)};ot.version="18.3.1-next-f1338f8080-20240426";function Ff(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ff)}catch(e){console.error(e)}}Ff(),Lc.exports=ot;var Km=Lc.exports,ec=Km;Ml.createRoot=ec.createRoot,Ml.hydrateRoot=ec.hydrateRoot;var Mf={exports:{}},q={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Os=Symbol.for("react.element"),Ls=Symbol.for("react.portal"),bo=Symbol.for("react.fragment"),Go=Symbol.for("react.strict_mode"),Wo=Symbol.for("react.profiler"),Qo=Symbol.for("react.provider"),Uo=Symbol.for("react.context"),Zm=Symbol.for("react.server_context"),Vo=Symbol.for("react.forward_ref"),Yo=Symbol.for("react.suspense"),Ho=Symbol.for("react.suspense_list"),Xo=Symbol.for("react.memo"),$o=Symbol.for("react.lazy"),_m=Symbol.for("react.offscreen"),Df;Df=Symbol.for("react.module.reference");function mt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Os:switch(e=e.type,e){case bo:case Wo:case Go:case Yo:case Ho:return e;default:switch(e=e&&e.$$typeof,e){case Zm:case Uo:case Vo:case $o:case Xo:case Qo:return e;default:return t}}case Ls:return t}}}q.ContextConsumer=Uo;q.ContextProvider=Qo;q.Element=Os;q.ForwardRef=Vo;q.Fragment=bo;q.Lazy=$o;q.Memo=Xo;q.Portal=Ls;q.Profiler=Wo;q.StrictMode=Go;q.Suspense=Yo;q.SuspenseList=Ho;q.isAsyncMode=function(){return!1};q.isConcurrentMode=function(){return!1};q.isContextConsumer=function(e){return mt(e)===Uo};q.isContextProvider=function(e){return mt(e)===Qo};q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Os};q.isForwardRef=function(e){return mt(e)===Vo};q.isFragment=function(e){return mt(e)===bo};q.isLazy=function(e){return mt(e)===$o};q.isMemo=function(e){return mt(e)===Xo};q.isPortal=function(e){return mt(e)===Ls};q.isProfiler=function(e){return mt(e)===Wo};q.isStrictMode=function(e){return mt(e)===Go};q.isSuspense=function(e){return mt(e)===Yo};q.isSuspenseList=function(e){return mt(e)===Ho};q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===bo||e===Wo||e===Go||e===Yo||e===Ho||e===_m||typeof e=="object"&&e!==null&&(e.$$typeof===$o||e.$$typeof===Xo||e.$$typeof===Qo||e.$$typeof===Uo||e.$$typeof===Vo||e.$$typeof===Df||e.getModuleId!==void 0)};q.typeOf=mt;Mf.exports=q;var bf=Mf.exports;function qm(e){function t(P,B,O,b,x){for(var V=0,N=0,ae=0,$=0,Z,W,je=0,Ge=0,H,Be=H=Z=0,K=0,ke=0,mr=0,Ee=0,pi=O.length,Ar=pi-1,At,G="",ce="",ll="",al="",Wt;K<pi;){if(W=O.charCodeAt(K),K===Ar&&N+$+ae+V!==0&&(N!==0&&(W=N===47?10:47),$=ae=V=0,pi++,Ar++),N+$+ae+V===0){if(K===Ar&&(0<ke&&(G=G.replace(g,"")),0<G.trim().length)){switch(W){case 32:case 9:case 59:case 13:case 10:break;default:G+=O.charAt(K)}W=59}switch(W){case 123:for(G=G.trim(),Z=G.charCodeAt(0),H=1,Ee=++K;K<pi;){switch(W=O.charCodeAt(K)){case 123:H++;break;case 125:H--;break;case 47:switch(W=O.charCodeAt(K+1)){case 42:case 47:e:{for(Be=K+1;Be<Ar;++Be)switch(O.charCodeAt(Be)){case 47:if(W===42&&O.charCodeAt(Be-1)===42&&K+2!==Be){K=Be+1;break e}break;case 10:if(W===47){K=Be+1;break e}}K=Be}}break;case 91:W++;case 40:W++;case 34:case 39:for(;K++<Ar&&O.charCodeAt(K)!==W;);}if(H===0)break;K++}switch(H=O.substring(Ee,K),Z===0&&(Z=(G=G.replace(h,"").trim()).charCodeAt(0)),Z){case 64:switch(0<ke&&(G=G.replace(g,"")),W=G.charCodeAt(1),W){case 100:case 109:case 115:case 45:ke=B;break;default:ke=st}if(H=t(B,ke,H,W,x+1),Ee=H.length,0<I&&(ke=n(st,G,mr),Wt=s(3,H,ke,B,me,ue,Ee,W,x,b),G=ke.join(""),Wt!==void 0&&(Ee=(H=Wt.trim()).length)===0&&(W=0,H="")),0<Ee)switch(W){case 115:G=G.replace(T,l);case 100:case 109:case 45:H=G+"{"+H+"}";break;case 107:G=G.replace(d,"$1 $2"),H=G+"{"+H+"}",H=xe===1||xe===2&&o("@"+H,3)?"@-webkit-"+H+"@"+H:"@"+H;break;default:H=G+H,b===112&&(H=(ce+=H,""))}else H="";break;default:H=t(B,n(B,G,mr),H,b,x+1)}ll+=H,H=mr=ke=Be=Z=0,G="",W=O.charCodeAt(++K);break;case 125:case 59:if(G=(0<ke?G.replace(g,""):G).trim(),1<(Ee=G.length))switch(Be===0&&(Z=G.charCodeAt(0),Z===45||96<Z&&123>Z)&&(Ee=(G=G.replace(" ",":")).length),0<I&&(Wt=s(1,G,B,P,me,ue,ce.length,b,x,b))!==void 0&&(Ee=(G=Wt.trim()).length)===0&&(G="\0\0"),Z=G.charCodeAt(0),W=G.charCodeAt(1),Z){case 0:break;case 64:if(W===105||W===99){al+=G+O.charAt(K);break}default:G.charCodeAt(Ee-1)!==58&&(ce+=i(G,Z,W,G.charCodeAt(2)))}mr=ke=Be=Z=0,G="",W=O.charCodeAt(++K)}}switch(W){case 13:case 10:N===47?N=0:1+Z===0&&b!==107&&0<G.length&&(ke=1,G+="\0"),0<I*D&&s(0,G,B,P,me,ue,ce.length,b,x,b),ue=1,me++;break;case 59:case 125:if(N+$+ae+V===0){ue++;break}default:switch(ue++,At=O.charAt(K),W){case 9:case 32:if($+V+N===0)switch(je){case 44:case 58:case 9:case 32:At="";break;default:W!==32&&(At=" ")}break;case 0:At="\\0";break;case 12:At="\\f";break;case 11:At="\\v";break;case 38:$+N+V===0&&(ke=mr=1,At="\f"+At);break;case 108:if($+N+V+Le===0&&0<Be)switch(K-Be){case 2:je===112&&O.charCodeAt(K-3)===58&&(Le=je);case 8:Ge===111&&(Le=Ge)}break;case 58:$+N+V===0&&(Be=K);break;case 44:N+ae+$+V===0&&(ke=1,At+="\r");break;case 34:case 39:N===0&&($=$===W?0:$===0?W:$);break;case 91:$+N+ae===0&&V++;break;case 93:$+N+ae===0&&V--;break;case 41:$+N+V===0&&ae--;break;case 40:if($+N+V===0){if(Z===0)switch(2*je+3*Ge){case 533:break;default:Z=1}ae++}break;case 64:N+ae+$+V+Be+H===0&&(H=1);break;case 42:case 47:if(!(0<$+V+ae))switch(N){case 0:switch(2*W+3*O.charCodeAt(K+1)){case 235:N=47;break;case 220:Ee=K,N=42}break;case 42:W===47&&je===42&&Ee+2!==K&&(O.charCodeAt(Ee+2)===33&&(ce+=O.substring(Ee,K+1)),At="",N=0)}}N===0&&(G+=At)}Ge=je,je=W,K++}if(Ee=ce.length,0<Ee){if(ke=B,0<I&&(Wt=s(2,ce,ke,P,me,ue,Ee,b,x,b),Wt!==void 0&&(ce=Wt).length===0))return al+ce+ll;if(ce=ke.join(",")+"{"+ce+"}",xe*Le!==0){switch(xe!==2||o(ce,2)||(Le=0),Le){case 111:ce=ce.replace(y,":-moz-$1")+ce;break;case 112:ce=ce.replace(p,"::-webkit-input-$1")+ce.replace(p,"::-moz-$1")+ce.replace(p,":-ms-input-$1")+ce}Le=0}}return al+ce+ll}function n(P,B,O){var b=B.trim().split(C);B=b;var x=b.length,V=P.length;switch(V){case 0:case 1:var N=0;for(P=V===0?"":P[0]+" ";N<x;++N)B[N]=r(P,B[N],O).trim();break;default:var ae=N=0;for(B=[];N<x;++N)for(var $=0;$<V;++$)B[ae++]=r(P[$]+" ",b[N],O).trim()}return B}function r(P,B,O){var b=B.charCodeAt(0);switch(33>b&&(b=(B=B.trim()).charCodeAt(0)),b){case 38:return B.replace(f,"$1"+P.trim());case 58:return P.trim()+B.replace(f,"$1"+P.trim());default:if(0<1*O&&0<B.indexOf("\f"))return B.replace(f,(P.charCodeAt(0)===58?"":"$1")+P.trim())}return P+B}function i(P,B,O,b){var x=P+";",V=2*B+3*O+4*b;if(V===944){P=x.indexOf(":",9)+1;var N=x.substring(P,x.length-1).trim();return N=x.substring(0,P).trim()+N+";",xe===1||xe===2&&o(N,1)?"-webkit-"+N+N:N}if(xe===0||xe===2&&!o(x,1))return x;switch(V){case 1015:return x.charCodeAt(10)===97?"-webkit-"+x+x:x;case 951:return x.charCodeAt(3)===116?"-webkit-"+x+x:x;case 963:return x.charCodeAt(5)===110?"-webkit-"+x+x:x;case 1009:if(x.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+x+x;case 978:return"-webkit-"+x+"-moz-"+x+x;case 1019:case 983:return"-webkit-"+x+"-moz-"+x+"-ms-"+x+x;case 883:if(x.charCodeAt(8)===45)return"-webkit-"+x+x;if(0<x.indexOf("image-set(",11))return x.replace(fe,"$1-webkit-$2")+x;break;case 932:if(x.charCodeAt(4)===45)switch(x.charCodeAt(5)){case 103:return"-webkit-box-"+x.replace("-grow","")+"-webkit-"+x+"-ms-"+x.replace("grow","positive")+x;case 115:return"-webkit-"+x+"-ms-"+x.replace("shrink","negative")+x;case 98:return"-webkit-"+x+"-ms-"+x.replace("basis","preferred-size")+x}return"-webkit-"+x+"-ms-"+x+x;case 964:return"-webkit-"+x+"-ms-flex-"+x+x;case 1023:if(x.charCodeAt(8)!==99)break;return N=x.substring(x.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+N+"-webkit-"+x+"-ms-flex-pack"+N+x;case 1005:return w.test(x)?x.replace(S,":-webkit-")+x.replace(S,":-moz-")+x:x;case 1e3:switch(N=x.substring(13).trim(),B=N.indexOf("-")+1,N.charCodeAt(0)+N.charCodeAt(B)){case 226:N=x.replace(k,"tb");break;case 232:N=x.replace(k,"tb-rl");break;case 220:N=x.replace(k,"lr");break;default:return x}return"-webkit-"+x+"-ms-"+N+x;case 1017:if(x.indexOf("sticky",9)===-1)break;case 975:switch(B=(x=P).length-10,N=(x.charCodeAt(B)===33?x.substring(0,B):x).substring(P.indexOf(":",7)+1).trim(),V=N.charCodeAt(0)+(N.charCodeAt(7)|0)){case 203:if(111>N.charCodeAt(8))break;case 115:x=x.replace(N,"-webkit-"+N)+";"+x;break;case 207:case 102:x=x.replace(N,"-webkit-"+(102<V?"inline-":"")+"box")+";"+x.replace(N,"-webkit-"+N)+";"+x.replace(N,"-ms-"+N+"box")+";"+x}return x+";";case 938:if(x.charCodeAt(5)===45)switch(x.charCodeAt(6)){case 105:return N=x.replace("-items",""),"-webkit-"+x+"-webkit-box-"+N+"-ms-flex-"+N+x;case 115:return"-webkit-"+x+"-ms-flex-item-"+x.replace(R,"")+x;default:return"-webkit-"+x+"-ms-flex-line-pack"+x.replace("align-content","").replace(R,"")+x}break;case 973:case 989:if(x.charCodeAt(3)!==45||x.charCodeAt(4)===122)break;case 931:case 953:if(M.test(P)===!0)return(N=P.substring(P.indexOf(":")+1)).charCodeAt(0)===115?i(P.replace("stretch","fill-available"),B,O,b).replace(":fill-available",":stretch"):x.replace(N,"-webkit-"+N)+x.replace(N,"-moz-"+N.replace("fill-",""))+x;break;case 962:if(x="-webkit-"+x+(x.charCodeAt(5)===102?"-ms-"+x:"")+x,O+b===211&&x.charCodeAt(13)===105&&0<x.indexOf("transform",10))return x.substring(0,x.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+x}return x}function o(P,B){var O=P.indexOf(B===1?":":"{"),b=P.substring(0,B!==3?O:10);return O=P.substring(O+1,P.length-1),F(B!==2?b:b.replace(U,"$1"),O,B)}function l(P,B){var O=i(B,B.charCodeAt(0),B.charCodeAt(1),B.charCodeAt(2));return O!==B+";"?O.replace(z," or ($1)").substring(4):"("+B+")"}function s(P,B,O,b,x,V,N,ae,$,Z){for(var W=0,je=B,Ge;W<I;++W)switch(Ge=ye[W].call(m,P,je,O,b,x,V,N,ae,$,Z)){case void 0:case!1:case!0:case null:break;default:je=Ge}if(je!==B)return je}function u(P){switch(P){case void 0:case null:I=ye.length=0;break;default:if(typeof P=="function")ye[I++]=P;else if(typeof P=="object")for(var B=0,O=P.length;B<O;++B)u(P[B]);else D=!!P|0}return u}function c(P){return P=P.prefix,P!==void 0&&(F=null,P?typeof P!="function"?xe=1:(xe=2,F=P):xe=0),c}function m(P,B){var O=P;if(33>O.charCodeAt(0)&&(O=O.trim()),X=O,O=[X],0<I){var b=s(-1,B,O,O,me,ue,0,0,0,0);b!==void 0&&typeof b=="string"&&(B=b)}var x=t(st,O,B,0,0);return 0<I&&(b=s(-2,x,O,O,me,ue,x.length,0,0,0),b!==void 0&&(x=b)),X="",Le=0,ue=me=1,x}var h=/^\0+/g,g=/[\0\r\f]/g,S=/: */g,w=/zoo|gra/,v=/([,: ])(transform)/g,C=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,y=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,T=/\(\s*(.*)\s*\)/g,z=/([\s\S]*?);/g,R=/-self|flex-/g,U=/[^]*?(:[rp][el]a[\w-]+)[^]*/,M=/stretch|:\s*\w+\-(?:conte|avail)/,fe=/([^-])(image-set\()/,ue=1,me=1,Le=0,xe=1,st=[],ye=[],I=0,F=null,D=0,X="";return m.use=u,m.set=c,e!==void 0&&c(e),m}var Jm={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function eA(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var tA=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,tc=eA(function(e){return tA.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Gf={exports:{}},J={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ce=typeof Symbol=="function"&&Symbol.for,Fs=Ce?Symbol.for("react.element"):60103,Ms=Ce?Symbol.for("react.portal"):60106,Ko=Ce?Symbol.for("react.fragment"):60107,Zo=Ce?Symbol.for("react.strict_mode"):60108,_o=Ce?Symbol.for("react.profiler"):60114,qo=Ce?Symbol.for("react.provider"):60109,Jo=Ce?Symbol.for("react.context"):60110,Ds=Ce?Symbol.for("react.async_mode"):60111,el=Ce?Symbol.for("react.concurrent_mode"):60111,tl=Ce?Symbol.for("react.forward_ref"):60112,nl=Ce?Symbol.for("react.suspense"):60113,nA=Ce?Symbol.for("react.suspense_list"):60120,rl=Ce?Symbol.for("react.memo"):60115,il=Ce?Symbol.for("react.lazy"):60116,rA=Ce?Symbol.for("react.block"):60121,iA=Ce?Symbol.for("react.fundamental"):60117,oA=Ce?Symbol.for("react.responder"):60118,lA=Ce?Symbol.for("react.scope"):60119;function at(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Fs:switch(e=e.type,e){case Ds:case el:case Ko:case _o:case Zo:case nl:return e;default:switch(e=e&&e.$$typeof,e){case Jo:case tl:case il:case rl:case qo:return e;default:return t}}case Ms:return t}}}function Wf(e){return at(e)===el}J.AsyncMode=Ds;J.ConcurrentMode=el;J.ContextConsumer=Jo;J.ContextProvider=qo;J.Element=Fs;J.ForwardRef=tl;J.Fragment=Ko;J.Lazy=il;J.Memo=rl;J.Portal=Ms;J.Profiler=_o;J.StrictMode=Zo;J.Suspense=nl;J.isAsyncMode=function(e){return Wf(e)||at(e)===Ds};J.isConcurrentMode=Wf;J.isContextConsumer=function(e){return at(e)===Jo};J.isContextProvider=function(e){return at(e)===qo};J.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fs};J.isForwardRef=function(e){return at(e)===tl};J.isFragment=function(e){return at(e)===Ko};J.isLazy=function(e){return at(e)===il};J.isMemo=function(e){return at(e)===rl};J.isPortal=function(e){return at(e)===Ms};J.isProfiler=function(e){return at(e)===_o};J.isStrictMode=function(e){return at(e)===Zo};J.isSuspense=function(e){return at(e)===nl};J.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ko||e===el||e===_o||e===Zo||e===nl||e===nA||typeof e=="object"&&e!==null&&(e.$$typeof===il||e.$$typeof===rl||e.$$typeof===qo||e.$$typeof===Jo||e.$$typeof===tl||e.$$typeof===iA||e.$$typeof===oA||e.$$typeof===lA||e.$$typeof===rA)};J.typeOf=at;Gf.exports=J;var aA=Gf.exports,bs=aA,sA={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},uA={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cA={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gs={};Gs[bs.ForwardRef]=cA;Gs[bs.Memo]=Qf;function nc(e){return bs.isMemo(e)?Qf:Gs[e.$$typeof]||sA}var dA=Object.defineProperty,fA=Object.getOwnPropertyNames,rc=Object.getOwnPropertySymbols,pA=Object.getOwnPropertyDescriptor,hA=Object.getPrototypeOf,ic=Object.prototype;function Uf(e,t,n){if(typeof t!="string"){if(ic){var r=hA(t);r&&r!==ic&&Uf(e,r,n)}var i=fA(t);rc&&(i=i.concat(rc(t)));for(var o=nc(e),l=nc(t),s=0;s<i.length;++s){var u=i[s];if(!uA[u]&&!(n&&n[u])&&!(l&&l[u])&&!(o&&o[u])){var c=pA(t,u);try{dA(e,u,c)}catch{}}}}return e}var mA=Uf;const AA=Cc(mA);function Ot(){return(Ot=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var oc=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Ba=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!bf.typeOf(e)},go=Object.freeze([]),ln=Object.freeze({});function ri(e){return typeof e=="function"}function lc(e){return e.displayName||e.name||"Component"}function Ws(e){return e&&typeof e.styledComponentId=="string"}var ar=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Qs=typeof window<"u"&&"HTMLElement"in window,gA=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function di(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var vA=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&di(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var s=o;s<l;s++)this.groupSizes[s]=0}for(var u=this.indexOfGroup(n+1),c=0,m=r.length;c<m;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,s=o;s<l;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),Yi=new Map,vo=new Map,br=1,Ti=function(e){if(Yi.has(e))return Yi.get(e);for(;vo.has(br);)br++;var t=br++;return Yi.set(e,t),vo.set(t,e),t},xA=function(e){return vo.get(e)},yA=function(e,t){t>=br&&(br=t+1),Yi.set(e,t),vo.set(t,e)},wA="style["+ar+'][data-styled-version="5.3.9"]',SA=new RegExp("^"+ar+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),CA=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},jA=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var s=l.match(SA);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(yA(c,u),CA(e,c,s[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(l)}}},kA=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Vf=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){for(var u=s.childNodes,c=u.length;c>=0;c--){var m=u[c];if(m&&m.nodeType===1&&m.hasAttribute(ar))return m}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ar,"active"),r.setAttribute("data-styled-version","5.3.9");var l=kA();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},EA=function(){function e(n){var r=this.element=Vf(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,s=o.length;l<s;l++){var u=o[l];if(u.ownerNode===i)return u}di(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),IA=function(){function e(n){var r=this.element=Vf(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),PA=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),ac=Qs,NA={isServer:!Qs,useCSSOMInjection:!gA},Yf=function(){function e(n,r,i){n===void 0&&(n=ln),r===void 0&&(r={}),this.options=Ot({},NA,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Qs&&ac&&(ac=!1,function(o){for(var l=document.querySelectorAll(wA),s=0,u=l.length;s<u;s++){var c=l[s];c&&c.getAttribute(ar)!=="active"&&(jA(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Ti(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Ot({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new PA(l):o?new EA(l):new IA(l),new vA(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ti(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ti(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ti(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var s=xA(l);if(s!==void 0){var u=n.names.get(s),c=r.getGroup(l);if(u&&c&&u.size){var m=ar+".g"+l+'[id="'+s+'"]',h="";u!==void 0&&u.forEach(function(g){g.length>0&&(h+=g+",")}),o+=""+c+m+'{content:"'+h+`"}/*!sc*/
`}}}return o}(this)},e}(),BA=/(a)(d)/gi,sc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ta(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=sc(t%52)+n;return(sc(t%52)+n).replace(BA,"$1-$2")}var Xn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Hf=function(e){return Xn(5381,e)};function TA(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ri(n)&&!Ws(n))return!1}return!0}var zA=Hf("5.3.9"),RA=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&TA(t),this.componentId=n,this.baseHash=Xn(zA,n),this.baseStyle=r,Yf.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=sr(this.rules,t,n,r).join(""),s=Ta(Xn(this.baseHash,l)>>>0);if(!n.hasNameForId(i,s)){var u=r(l,"."+s,void 0,i);n.insertRules(i,s,u)}o.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,m=Xn(this.baseHash,r.hash),h="",g=0;g<c;g++){var S=this.rules[g];if(typeof S=="string")h+=S;else if(S){var w=sr(S,t,n,r),v=Array.isArray(w)?w.join(""):w;m=Xn(m,v+g),h+=v}}if(h){var C=Ta(m>>>0);if(!n.hasNameForId(i,C)){var f=r(h,"."+C,void 0,i);n.insertRules(i,C,f)}o.push(C)}}return o.join(" ")},e}(),OA=/^\s*\/\/.*$/gm,LA=[":","[",".","#"];function FA(e){var t,n,r,i,o=e===void 0?ln:e,l=o.options,s=l===void 0?ln:l,u=o.plugins,c=u===void 0?go:u,m=new qm(s),h=[],g=function(v){function C(f){if(f)try{v(f+"}")}catch{}}return function(f,d,p,y,k,T,z,R,U,M){switch(f){case 1:if(U===0&&d.charCodeAt(0)===64)return v(d+";"),"";break;case 2:if(R===0)return d+"/*|*/";break;case 3:switch(R){case 102:case 112:return v(p[0]+d),"";default:return d+(M===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(C)}}}(function(v){h.push(v)}),S=function(v,C,f){return C===0&&LA.indexOf(f[n.length])!==-1||f.match(i)?v:"."+t};function w(v,C,f,d){d===void 0&&(d="&");var p=v.replace(OA,""),y=C&&f?f+" "+C+" { "+p+" }":p;return t=d,n=C,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),m(f||!C?"":C,y)}return m.use([].concat(c,[function(v,C,f){v===2&&f.length&&f[0].lastIndexOf(n)>0&&(f[0]=f[0].replace(r,S))},g,function(v){if(v===-2){var C=h;return h=[],C}}])),w.hash=c.length?c.reduce(function(v,C){return C.name||di(15),Xn(v,C.name)},5381).toString():"",w}var Xf=ge.createContext();Xf.Consumer;var $f=ge.createContext(),MA=($f.Consumer,new Yf),za=FA();function DA(){return j.useContext(Xf)||MA}function bA(){return j.useContext($f)||za}var Kf=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=za);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return di(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=za),this.name+t.hash},e}(),GA=/([A-Z])/,WA=/([A-Z])/g,QA=/^ms-/,UA=function(e){return"-"+e.toLowerCase()};function uc(e){return GA.test(e)?e.replace(WA,UA).replace(QA,"-ms-"):e}var cc=function(e){return e==null||e===!1||e===""};function sr(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,s=e.length;l<s;l+=1)(i=sr(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(cc(e))return"";if(Ws(e))return"."+e.styledComponentId;if(ri(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var u=e(t);return sr(u,t,n,r)}var c;return e instanceof Kf?n?(e.inject(n,r),e.getName(r)):e:Ba(e)?function m(h,g){var S,w,v=[];for(var C in h)h.hasOwnProperty(C)&&!cc(h[C])&&(Array.isArray(h[C])&&h[C].isCss||ri(h[C])?v.push(uc(C)+":",h[C],";"):Ba(h[C])?v.push.apply(v,m(h[C],C)):v.push(uc(C)+": "+(S=C,(w=h[C])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||S in Jm?String(w).trim():w+"px")+";"));return g?[g+" {"].concat(v,["}"]):v}(e):e.toString()}var dc=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function fr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ri(e)||Ba(e)?dc(sr(oc(go,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:dc(sr(oc(e,n)))}var VA=function(e,t,n){return n===void 0&&(n=ln),e.theme!==n.theme&&e.theme||t||n.theme},YA=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,HA=/(^-|-$)/g;function Ol(e){return e.replace(YA,"-").replace(HA,"")}var Zf=function(e){return Ta(Hf(e)>>>0)};function zi(e){return typeof e=="string"&&!0}var Ra=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},XA=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function $A(e,t,n){var r=e[n];Ra(t)&&Ra(r)?_f(r,t):e[n]=t}function _f(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(Ra(l))for(var s in l)XA(s)&&$A(e,l[s],s)}return e}var qf=ge.createContext();qf.Consumer;var Ll={};function Jf(e,t,n){var r=Ws(e),i=!zi(e),o=t.attrs,l=o===void 0?go:o,s=t.componentId,u=s===void 0?function(d,p){var y=typeof d!="string"?"sc":Ol(d);Ll[y]=(Ll[y]||0)+1;var k=y+"-"+Zf("5.3.9"+y+Ll[y]);return p?p+"-"+k:k}(t.displayName,t.parentComponentId):s,c=t.displayName,m=c===void 0?function(d){return zi(d)?"styled."+d:"Styled("+lc(d)+")"}(e):c,h=t.displayName&&t.componentId?Ol(t.displayName)+"-"+t.componentId:t.componentId||u,g=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,S=t.shouldForwardProp;r&&e.shouldForwardProp&&(S=t.shouldForwardProp?function(d,p,y){return e.shouldForwardProp(d,p,y)&&t.shouldForwardProp(d,p,y)}:e.shouldForwardProp);var w,v=new RA(n,h,r?e.componentStyle:void 0),C=v.isStatic&&l.length===0,f=function(d,p){return function(y,k,T,z){var R=y.attrs,U=y.componentStyle,M=y.defaultProps,fe=y.foldedComponentIds,ue=y.shouldForwardProp,me=y.styledComponentId,Le=y.target,xe=function(b,x,V){b===void 0&&(b=ln);var N=Ot({},x,{theme:b}),ae={};return V.forEach(function($){var Z,W,je,Ge=$;for(Z in ri(Ge)&&(Ge=Ge(N)),Ge)N[Z]=ae[Z]=Z==="className"?(W=ae[Z],je=Ge[Z],W&&je?W+" "+je:W||je):Ge[Z]}),[N,ae]}(VA(k,j.useContext(qf),M)||ln,k,R),st=xe[0],ye=xe[1],I=function(b,x,V,N){var ae=DA(),$=bA(),Z=x?b.generateAndInjectStyles(ln,ae,$):b.generateAndInjectStyles(V,ae,$);return Z}(U,z,st),F=T,D=ye.$as||k.$as||ye.as||k.as||Le,X=zi(D),P=ye!==k?Ot({},k,{},ye):k,B={};for(var O in P)O[0]!=="$"&&O!=="as"&&(O==="forwardedAs"?B.as=P[O]:(ue?ue(O,tc,D):!X||tc(O))&&(B[O]=P[O]));return k.style&&ye.style!==k.style&&(B.style=Ot({},k.style,{},ye.style)),B.className=Array.prototype.concat(fe,me,I!==me?I:null,k.className,ye.className).filter(Boolean).join(" "),B.ref=F,j.createElement(D,B)}(w,d,p,C)};return f.displayName=m,(w=ge.forwardRef(f)).attrs=g,w.componentStyle=v,w.displayName=m,w.shouldForwardProp=S,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):go,w.styledComponentId=h,w.target=r?e.target:e,w.withComponent=function(d){var p=t.componentId,y=function(T,z){if(T==null)return{};var R,U,M={},fe=Object.keys(T);for(U=0;U<fe.length;U++)R=fe[U],z.indexOf(R)>=0||(M[R]=T[R]);return M}(t,["componentId"]),k=p&&p+"-"+(zi(d)?d:Ol(lc(d)));return Jf(d,Ot({},y,{attrs:g,componentId:k}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?_f({},e.defaultProps,d):d}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&AA(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var Oa=function(e){return function t(n,r,i){if(i===void 0&&(i=ln),!bf.isValidElementType(r))return di(1,String(r));var o=function(){return n(r,i,fr.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,Ot({},i,{},l))},o.attrs=function(l){return t(n,r,Ot({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(Jf,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Oa[e]=Oa(e)});function Pn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=fr.apply(void 0,[e].concat(n)).join(""),o=Zf(i);return new Kf(o,i)}const A=Oa,kr=48,KA=({color:e="currentColor",direction:t="left",distance:n="md",duration:r=.4,easing:i="cubic-bezier(0, 0, 0, 1)",hideOutline:o=!0,label:l,lines:s=3,onToggle:u,render:c,rounded:m=!1,size:h=32,toggle:g,toggled:S,disabled:w=!1,animateOnMount:v=!1})=>{const[C,f]=j.useState(!1),[d,p]=j.useState(!1);j.useEffect(()=>{p(!0)},[]);const y=Math.max(12,Math.min(kr,h)),k=Math.round((kr-y)/2),T=y/12,z=Math.round(T),U=y/(s*((n==="lg"?.25:n==="sm"?.75:.5)+(s===3?1:1.25))),M=Math.round(U),fe=z*s+M*(s-1),ue=Math.round((kr-fe)/2),me=s===3?n==="lg"?4.0425:n==="sm"?5.1625:4.6325:n==="lg"?6.7875:n==="sm"?8.4875:7.6675,Le=(T-z+(U-M))/(s===3?1:2),xe=parseFloat((y/me-Le/(4/3)).toFixed(2)),st=Math.max(0,r),ye={cursor:w?"not-allowed":"pointer",height:`${kr}px`,position:"relative",transition:`${st}s ${i}`,userSelect:"none",width:`${kr}px`},I={background:e,height:`${z}px`,left:`${k}px`,position:"absolute"};o&&(ye.outline="none"),m&&(I.borderRadius="9em");const F=()=>{const B=S!==void 0?S:C;return v&&!d?!B:B},D=g||f,X=F();return c({barHeight:z,barStyles:I,burgerStyles:ye,easing:i,handler:()=>{D(!X),typeof u=="function"&&u(!X)},isLeft:t==="left",isToggled:X,label:l,margin:M,move:xe,time:st,topOffset:ue,width:y})};function La(){return La=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},La.apply(this,arguments)}const ZA=e=>ge.createElement(KA,La({},e,{render:t=>ge.createElement("div",{className:"hamburger-react","aria-label":t.label,"aria-expanded":t.isToggled,onClick:e.disabled?void 0:t.handler,onKeyUp:e.disabled?void 0:n=>n.key==="Enter"&&t.handler(),role:"button",style:{...t.burgerStyles,transform:`${t.isToggled?`rotate(${180*(t.isLeft?-1:1)}deg)`:"none"}`},tabIndex:0},ge.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset}px`,transition:`${t.time}s ${t.easing}`,transform:`${t.isToggled?`rotate(${45*(t.isLeft?-1:1)}deg) translate(${t.move*(t.isLeft?-1:1)}px, ${t.move}px)`:"none"}`}}),ge.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset+t.barHeight+t.margin}px`,transition:`${t.time}s ${t.easing}`,opacity:`${t.isToggled?"0":"1"}`}}),ge.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset+t.barHeight*2+t.margin*2}px`,transition:`${t.time}s ${t.easing}`,transform:`${t.isToggled?`rotate(${45*(t.isLeft?1:-1)}deg) translate(${t.move*(t.isLeft?-1:1)}px, ${t.move*-1}px)`:"none"}`}}))}));/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(this,arguments)}var Zt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Zt||(Zt={}));const fc="popstate";function _A(e){e===void 0&&(e={});function t(i,o){let{pathname:l="/",search:s="",hash:u=""}=Nn(i.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Fa("",{pathname:l,search:s,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let l=i.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");s=c===-1?u:u.slice(0,c)}return s+"#"+(typeof o=="string"?o:xo(o))}function r(i,o){Us(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return JA(t,n,r,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Us(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function qA(){return Math.random().toString(36).substr(2,8)}function pc(e,t){return{usr:e.state,key:e.key,idx:t}}function Fa(e,t,n,r){return n===void 0&&(n=null),ii({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Nn(t):t,{state:n,key:t&&t.key||r||qA()})}function xo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Nn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function JA(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=Zt.Pop,u=null,c=m();c==null&&(c=0,l.replaceState(ii({},l.state,{idx:c}),""));function m(){return(l.state||{idx:null}).idx}function h(){s=Zt.Pop;let C=m(),f=C==null?null:C-c;c=C,u&&u({action:s,location:v.location,delta:f})}function g(C,f){s=Zt.Push;let d=Fa(v.location,C,f);n&&n(d,C),c=m()+1;let p=pc(d,c),y=v.createHref(d);try{l.pushState(p,"",y)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(y)}o&&u&&u({action:s,location:v.location,delta:1})}function S(C,f){s=Zt.Replace;let d=Fa(v.location,C,f);n&&n(d,C),c=m();let p=pc(d,c),y=v.createHref(d);l.replaceState(p,"",y),o&&u&&u({action:s,location:v.location,delta:0})}function w(C){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof C=="string"?C:xo(C);return d=d.replace(/ $/,"%20"),he(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let v={get action(){return s},get location(){return e(i,l)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(fc,h),u=C,()=>{i.removeEventListener(fc,h),u=null}},createHref(C){return t(i,C)},createURL:w,encodeLocation(C){let f=w(C);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:S,go(C){return l.go(C)}};return v}var hc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(hc||(hc={}));function e0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Nn(t):t,i=Vs(r.pathname||"/",n);if(i==null)return null;let o=ep(e);t0(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let u=p0(i);l=c0(o[s],u)}return l}function ep(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let u={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(he(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=an([r,u.relativePath]),m=n.concat(u);o.children&&o.children.length>0&&(he(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ep(o.children,t,m,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:s0(c,o.index),routesMeta:m})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let u of tp(o.path))i(o,l,u)}),t}function tp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=tp(r.join("/")),s=[];return s.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function t0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:u0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const n0=/^:[\w-]+$/,r0=3,i0=2,o0=1,l0=10,a0=-2,mc=e=>e==="*";function s0(e,t){let n=e.split("/"),r=n.length;return n.some(mc)&&(r+=a0),t&&(r+=i0),n.filter(i=>!mc(i)).reduce((i,o)=>i+(n0.test(o)?r0:o===""?o0:l0),r)}function u0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function c0(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let s=n[l],u=l===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",m=d0({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c);if(!m)return null;Object.assign(r,m.params);let h=s.route;o.push({params:r,pathname:an([i,m.pathname]),pathnameBase:g0(an([i,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(i=an([i,m.pathnameBase]))}return o}function d0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=f0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,m,h)=>{let{paramName:g,isOptional:S}=m;if(g==="*"){let v=s[h]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const w=s[h];return S&&!w?c[g]=void 0:c[g]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function f0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Us(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function p0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Us(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Vs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function h0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Nn(e):e;return{pathname:n?n.startsWith("/")?n:m0(n,t):t,search:v0(r),hash:x0(i)}}function m0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Fl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function A0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function np(e,t){let n=A0(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function rp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Nn(e):(i=ii({},e),he(!i.pathname||!i.pathname.includes("?"),Fl("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),Fl("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),Fl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let h=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}s=h>=0?t[h]:"/"}let u=h0(i,s),c=l&&l!=="/"&&l.endsWith("/"),m=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||m)&&(u.pathname+="/"),u}const an=e=>e.join("/").replace(/\/\/+/g,"/"),g0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),v0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,x0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function y0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ip=["post","put","patch","delete"];new Set(ip);const w0=["get",...ip];new Set(w0);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oi.apply(this,arguments)}const Ys=j.createContext(null),S0=j.createContext(null),Bn=j.createContext(null),ol=j.createContext(null),Tn=j.createContext({outlet:null,matches:[],isDataRoute:!1}),op=j.createContext(null);function C0(e,t){let{relative:n}=t===void 0?{}:t;fi()||he(!1);let{basename:r,navigator:i}=j.useContext(Bn),{hash:o,pathname:l,search:s}=ap(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:an([r,l])),i.createHref({pathname:u,search:s,hash:o})}function fi(){return j.useContext(ol)!=null}function pr(){return fi()||he(!1),j.useContext(ol).location}function lp(e){j.useContext(Bn).static||j.useLayoutEffect(e)}function j0(){let{isDataRoute:e}=j.useContext(Tn);return e?M0():k0()}function k0(){fi()||he(!1);let e=j.useContext(Ys),{basename:t,future:n,navigator:r}=j.useContext(Bn),{matches:i}=j.useContext(Tn),{pathname:o}=pr(),l=JSON.stringify(np(i,n.v7_relativeSplatPath)),s=j.useRef(!1);return lp(()=>{s.current=!0}),j.useCallback(function(c,m){if(m===void 0&&(m={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let h=rp(c,JSON.parse(l),o,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:an([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,l,o,e])}function ap(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(Bn),{matches:i}=j.useContext(Tn),{pathname:o}=pr(),l=JSON.stringify(np(i,r.v7_relativeSplatPath));return j.useMemo(()=>rp(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function E0(e,t){return I0(e,t)}function I0(e,t,n,r){fi()||he(!1);let{navigator:i}=j.useContext(Bn),{matches:o}=j.useContext(Tn),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=pr(),m;if(t){var h;let C=typeof t=="string"?Nn(t):t;u==="/"||(h=C.pathname)!=null&&h.startsWith(u)||he(!1),m=C}else m=c;let g=m.pathname||"/",S=g;if(u!=="/"){let C=u.replace(/^\//,"").split("/");S="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let w=e0(e,{pathname:S}),v=z0(w&&w.map(C=>Object.assign({},C,{params:Object.assign({},s,C.params),pathname:an([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:an([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,n,r);return t&&v?j.createElement(ol.Provider,{value:{location:oi({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Zt.Pop}},v):v}function P0(){let e=F0(),t=y0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,o)}const N0=j.createElement(P0,null);class B0 extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(Tn.Provider,{value:this.props.routeContext},j.createElement(op.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function T0(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(Ys);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Tn.Provider,{value:t},r)}function z0(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let m=l.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);m>=0||he(!1),l=l.slice(0,Math.min(l.length,m+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<l.length;m++){let h=l[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=m),h.route.id){let{loaderData:g,errors:S}=n,w=h.route.loader&&g[h.route.id]===void 0&&(!S||S[h.route.id]===void 0);if(h.route.lazy||w){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((m,h,g)=>{let S,w=!1,v=null,C=null;n&&(S=s&&h.route.id?s[h.route.id]:void 0,v=h.route.errorElement||N0,u&&(c<0&&g===0?(D0("route-fallback",!1),w=!0,C=null):c===g&&(w=!0,C=h.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,g+1)),d=()=>{let p;return S?p=v:w?p=C:h.route.Component?p=j.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,j.createElement(T0,{match:h,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?j.createElement(B0,{location:n.location,revalidation:n.revalidation,component:v,error:S,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var sp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(sp||{}),yo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(yo||{});function R0(e){let t=j.useContext(Ys);return t||he(!1),t}function O0(e){let t=j.useContext(S0);return t||he(!1),t}function L0(e){let t=j.useContext(Tn);return t||he(!1),t}function up(e){let t=L0(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function F0(){var e;let t=j.useContext(op),n=O0(yo.UseRouteError),r=up(yo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function M0(){let{router:e}=R0(sp.UseNavigateStable),t=up(yo.UseNavigateStable),n=j.useRef(!1);return lp(()=>{n.current=!0}),j.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,oi({fromRouteId:t},o)))},[e,t])}const Ac={};function D0(e,t,n){!t&&!Ac[e]&&(Ac[e]=!0)}function On(e){he(!1)}function b0(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Zt.Pop,navigator:o,static:l=!1,future:s}=e;fi()&&he(!1);let u=t.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:o,static:l,future:oi({v7_relativeSplatPath:!1},s)}),[u,s,o,l]);typeof r=="string"&&(r=Nn(r));let{pathname:m="/",search:h="",hash:g="",state:S=null,key:w="default"}=r,v=j.useMemo(()=>{let C=Vs(m,u);return C==null?null:{location:{pathname:C,search:h,hash:g,state:S,key:w},navigationType:i}},[u,m,h,g,S,w,i]);return v==null?null:j.createElement(Bn.Provider,{value:c},j.createElement(ol.Provider,{children:n,value:v}))}function G0(e){let{children:t,location:n}=e;return E0(Ma(t),n)}new Promise(()=>{});function Ma(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let o=[...t,i];if(r.type===j.Fragment){n.push.apply(n,Ma(r.props.children,o));return}r.type!==On&&he(!1),!r.props.index||!r.props.children||he(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ma(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Da(){return Da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Da.apply(this,arguments)}function W0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Q0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function U0(e,t){return e.button===0&&(!t||t==="_self")&&!Q0(e)}const V0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Y0="6";try{window.__reactRouterVersion=Y0}catch{}const H0="startTransition",gc=Dp[H0];function X0(e){let{basename:t,children:n,future:r,window:i}=e,o=j.useRef();o.current==null&&(o.current=_A({window:i,v5Compat:!0}));let l=o.current,[s,u]=j.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},m=j.useCallback(h=>{c&&gc?gc(()=>u(h)):u(h)},[u,c]);return j.useLayoutEffect(()=>l.listen(m),[l,m]),j.createElement(b0,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const $0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",K0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hr=j.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:u,to:c,preventScrollReset:m,unstable_viewTransition:h}=t,g=W0(t,V0),{basename:S}=j.useContext(Bn),w,v=!1;if(typeof c=="string"&&K0.test(c)&&(w=c,$0))try{let p=new URL(window.location.href),y=c.startsWith("//")?new URL(p.protocol+c):new URL(c),k=Vs(y.pathname,S);y.origin===p.origin&&k!=null?c=k+y.search+y.hash:v=!0}catch{}let C=C0(c,{relative:i}),f=Z0(c,{replace:l,state:s,target:u,preventScrollReset:m,relative:i,unstable_viewTransition:h});function d(p){r&&r(p),p.defaultPrevented||f(p)}return j.createElement("a",Da({},g,{href:w||C,onClick:v||o?r:d,ref:n,target:u}))});var vc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vc||(vc={}));var xc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(xc||(xc={}));function Z0(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s}=t===void 0?{}:t,u=j0(),c=pr(),m=ap(e,{relative:l});return j.useCallback(h=>{if(U0(h,n)){h.preventDefault();let g=r!==void 0?r:xo(c)===xo(m);u(e,{replace:g,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s})}},[c,u,m,r,i,n,e,o,l,s])}const _0="/portfolio/assets/paulEvansCreativeLogo-77817caa.avif",cp="data:image/avif;base64,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",q0=A.nav`
position: fixed;
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
  background-color: #171717;
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
`,J0=A.div`
  width: 180px;
  height: 100%;
`,eg=A.div`
  display: flex;

  @media screen and (max-width: 960px) {
    width: 100%;

    justify-content: center;
    margin-bottom: 4em;
  }
`,tg=A.img`
  text-align: center;
  width: 80px;
  margin-top: 1.5em;
  

  @media screen and (max-width: 767px) {
    width: 60px;
    margin-top: 1em;
  }
`,ng=A.img`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    margin-top: 100px;
    width: 250px;
  }
`,rg=A.div`
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
`,ig=A.ul`
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
`,og=A(hr)`
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
`,lg=A.a`
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
`,ag=A.div`
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
`,sg=({footerRef:e})=>{const t=pr(),[n,r]=j.useState(!1),[i,o]=j.useState(t.pathname),[l,s]=j.useState(!1),[u,c]=j.useState(window.pageYOffset),[m,h]=j.useState(!0);j.useEffect(()=>{o(t.pathname);const v=()=>{const C=window.pageYOffset;h(u>C||C<10),c(C)};return window.addEventListener("scroll",v),()=>window.removeEventListener("scroll",v)},[t.pathname,u]);const g=()=>{e.current&&e.current.scrollIntoView({behavior:"smooth"}),r(!1),s(!1)},S=()=>{r(!1),s(!1)},w=[{id:1,to:"/",text:"Home"},{id:2,to:"/casestudies",text:"Case Studies"},{id:3,to:"https://www.paulevans-dop.com/",text:"Cinematography",isExternal:!0},{id:4,to:"/about",text:"About"},{id:5,to:"#",text:"Contact",onClick:g}];return a.jsxs(q0,{visible:m,children:[a.jsx(J0,{children:a.jsx(hr,{to:"/",onClick:S,children:a.jsx(rg,{children:a.jsx(tg,{src:_0,alt:"the letters P and E merged together to form the logo Paul Evans Creative"})})})}),a.jsxs(ig,{open:n,children:[w.map(v=>v.isExternal?a.jsx(lg,{href:v.to,onClick:v.onClick||S,className:i===v.to?"active":"",children:v.text},v.id):a.jsx(og,{to:v.to,onClick:v.onClick||S,className:i===v.to?"active":"",children:v.text},v.id)),a.jsx(eg,{children:a.jsx(ng,{src:cp,alt:"the letters P and E merged together to form the logo Paul Evans Creative"})})]}),a.jsx(ag,{children:a.jsx("div",{onClick:()=>{r(!n),s(!l)},children:a.jsx(ZA,{toggled:l})})})]})},ug=Pn`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,cg=A.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #171717;
`,dg=A.div`
  display: flex;
  width: 90%;
  height: 100%;
  padding-top: 160px;
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
`,fg=A.div`
  animation: ${ug} 1s ease-out 0.5s forwards;
`,pg=A.p`
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
`,hg=()=>a.jsx(cg,{children:a.jsxs(dg,{children:[a.jsx("h1",{children:"Paul Evans"}),a.jsx(fg,{children:a.jsx("h2",{children:"Digital Experience Designer"})}),a.jsx(pg,{children:"I am a passionate creative who's professional background spans over 20 years, during which time I have worn many hats. Cinematographer, UX / UI designer, frontend developer and not to mention concept developer and writer. This experience brings a unique perspective to Visual Design. Combining these skills to create the ultimate Brand and Customer Experience is something that excites and drives me."})]})}),mg="/portfolio/assets/showcase1-e3ff3470.mp4";var dp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ba=ge.createContext&&ge.createContext(dp),Ag=["attr","size","title"];function gg(e,t){if(e==null)return{};var n=vg(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function vg(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function wo(){return wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wo.apply(this,arguments)}function yc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function So(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yc(Object(n),!0).forEach(function(r){xg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xg(e,t,n){return t=yg(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yg(e){var t=wg(e,"string");return typeof t=="symbol"?t:t+""}function wg(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function fp(e){return e&&e.map((t,n)=>ge.createElement(t.tag,So({key:n},t.attr),fp(t.child)))}function zn(e){return t=>ge.createElement(Sg,wo({attr:So({},e.attr)},t),fp(e.child))}function Sg(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=gg(e,Ag),s=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),ge.createElement("svg",wo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:u,style:So(So({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&ge.createElement("title",null,o),e.children)};return ba!==void 0?ge.createElement(ba.Consumer,null,n=>t(n)):t(dp)}function Cg(e){return zn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM21.3 229.2H21c.1-.1.2-.3.3-.4zM97 319.8H64V192h33zm113.2 0h-28.7v-86.4l-11.6 86.4h-20.6l-12.2-84.5v84.5h-29V192h42.8c3.3 19.8 6 39.9 8.7 59.9l7.6-59.9h43zm11.4 0V192h24.6c17.6 0 44.7-1.6 49 20.9 1.7 7.6 1.4 16.3 1.4 24.4 0 88.5 11.1 82.6-75 82.5zm160.9-29.2c0 15.7-2.4 30.9-22.2 30.9-9 0-15.2-3-20.9-9.8l-1.9 8.1h-29.8V192h31.7v41.7c6-6.5 12-9.2 20.9-9.2 21.4 0 22.2 12.8 22.2 30.1zM265 229.9c0-9.7 1.6-16-10.3-16v83.7c12.2.3 10.3-8.7 10.3-18.4zm85.5 26.1c0-5.4 1.1-12.7-6.2-12.7-6 0-4.9 8.9-4.9 12.7 0 .6-1.1 39.6 1.1 44.7.8 1.6 2.2 2.4 3.8 2.4 7.8 0 6.2-9 6.2-14.4z"},child:[]}]})(e)}function jg(e){return zn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function kg(e){return zn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function pn(e){return zn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"},child:[]}]})(e)}function Eg(e){return zn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"},child:[]}]})(e)}function pp(e){return zn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"},child:[]}]})(e)}const Ig=A.div`
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
`,Pg=A.div`
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
`,Ng=A.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`,Bg=({onClick:e})=>a.jsxs(Ig,{children:[a.jsx(Pg,{children:a.jsx("a",{href:"https://paulevans-dop.com/",target:"_blank",rel:"noopener noreferrer",children:a.jsx(pn,{onClick:e,size:80})})}),a.jsx(Ng,{children:"See Cinematography Reel"})]}),Tg=A.div`
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
`,zg=A.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
`,Rg=A.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000052;
`,Og=A.div`
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
`,Lg=A.div`
  margin-top: auto;
`;function Fg(e){const t=j.useRef(null);return j.useEffect(()=>{const n=setTimeout(()=>{t.current&&t.current.play()},4e3);return()=>clearTimeout(n)},[]),a.jsxs(Tg,{children:[a.jsx(zg,{ref:t,src:mg,autoplay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A showreel showing clips from different productions."}),a.jsx(Rg,{children:a.jsxs(Og,{children:[a.jsx("h3",{children:"Cinematographer"}),a.jsx("p",{children:"Member of fsf Föreningen Severiges Filmfotografer (The Association of Swedish Film Cinematographers). Working in Narrative, Commercials, Music Videos and Still Photography."}),a.jsx(Lg,{children:a.jsx(Bg,{})})]})})]})}const Mg="/portfolio/assets/conceptReel-4e8f05ad.mp4",Dg=A.div`
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
`,bg=A.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: left;
  object-fit: cover;
`,Gg=A.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000042;
`,Wg=A.div`
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
`,Qg=A.div`
  margin-top: auto;
  padding-bottom: 20px;
`;function Ug(e){const t=j.useRef(null);return j.useEffect(()=>{const n=setTimeout(()=>{t.current&&t.current.play()},6e3);return()=>clearTimeout(n)},[]),a.jsxs(Dg,{children:[a.jsx(bg,{ref:t,src:Mg,autoplay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A video showing animated AI images made for TV concepts."}),a.jsx(Gg,{children:a.jsxs(Wg,{children:[a.jsx("h3",{children:"Writer. Concept Developer"}),a.jsx("p",{children:"As a writer and concept developer, I have had concepts optioned, and I have been commissioned to write concepts based on briefs provided by TV channels and streaming services."}),a.jsx(Qg,{children:a.jsx("p",{children:"I have found AI tools such as Midjourney, Runway, and Photoshop to be invaluable tools, enhancing my ability to pitch and develop unique projects."})})]})})]})}const Vg="/portfolio/assets/uxuiReel-e01a0e6b.mp4",Yg=A.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  padding-bottom: 10px;
  color: #e437e2;

  
`,Hg=A.div`
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
`,Xg=A.p`
  color: white;
  font-size: 20px;
  font-weight: 600;
`,$g=({onClick:e})=>{const t=()=>{e()};return a.jsxs(Yg,{children:[a.jsx(Hg,{children:a.jsx(hr,{to:"/casestudies",children:a.jsx(pn,{onClick:t,size:80})})}),a.jsx(Xg,{children:"See Case Studies"})]})},Kg=A.div`
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
`,Zg=A.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
`,_g=A.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #000000a0;
`,qg=A.div`
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
`,Jg=A.div`
  margin-top: auto;
`;function e1(e){return a.jsxs(Kg,{children:[a.jsx(Zg,{src:Vg,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"Design frames changing randomly "}),a.jsx(_g,{children:a.jsxs(qg,{children:[a.jsx("h3",{children:"UX / UI Designer"}),a.jsx("p",{children:"My unique experience enhances visual storytelling and user engagement, creating seamless and captivating interactions."}),a.jsx(Jg,{children:a.jsx($g,{})})]})})]})}const t1=A.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  padding-bottom: 10px;
  /* color: #e1bb3e;  */
  color: #e437e2;
`,n1=A.div`
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
`,r1=A.p`
  color: #000000;
  font-size: 20px;
  font-weight: 600;
`,i1=({onClick:e})=>a.jsxs(t1,{children:[a.jsx(n1,{children:a.jsx("a",{href:"https://github.com/PaulEvans78",target:"_blank",rel:"noopener noreferrer",children:a.jsx(pn,{onClick:e,size:80})})}),a.jsx(r1,{children:"Go to GitHub"})]}),o1="data:image/avif;base64,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",l1="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAGNbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAsaWxvYwAAAABEAAACAAEAAAABAAADiAAAAfAAAgAAAAEAAAG1AAAB0wAAAEJpaW5mAAAAAAACAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAAAaaW5mZQIAAAAAAgAAYXYwMUFscGhhAAAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAAw2lwcnAAAACdaXBjbwAAABRpc3BlAAAAAAAAAHgAAAB4AAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQBBYYHAAADy21kYXQSAAoGGBm792FQMsYDEgAKKFDYAsLyjFo30pTtGU3AprQDWuPWfiKO+UiJ6EzD+II/WS4l4BjmY2ofsD4UVg0FduFHPfdGebqmDbZogjz8NVmGLNmvd1wZBili3DkP5CI2o5pZTYFM4gKz8agxQATWZ1TlrNqXta5vvfgPNjGiIZtDUOGwrXNnHLDVjvkLfxMBwqbR0m2IbPrNONVikzkKkyvUc28tZ0OyUJpViZEa6JafpNNpkcjPfAqWweGQn/GcVnzk0Yoqyx10vZ8PizT1YVGcXlyZK/CQWXX1FhfNvTy5B24MWdf7MYW1yiLPyoN770KqUQhYQ4qRESByRLLmnrwEp5hckW1jCOGDkP0LY/ntYGOUyA5bLZqmNySV9t5XOWdZ4GdE+R8FXeS1rBb0B22SeIQg1USJH0KWoUcLH2qF8BXOV/ZSmatXYza1poj526IoyW+Dh7DTvUka0T/SSTrr4EWAIEO7rbAjp4/wR7gEy3QOsWMd7tPNE0tAbaJj3XVDYfXVQiTrmT9N57UyC0p+sSo9LNlVQ9f83M9WtrTbCdfKSccpekK4r/kSVCw09VdOtqfRt8xeT/Ktw3MRZIN2BQi7zkUx8XtpTYEi88rSMhIACgkYGbv3YIEBA0Iy4ANEgACiiihQ1/8mS+0VYnR6q4fJskn/zmz5r8/HO5RC/jcpiT7EXgL7nkn1z3wNWGtgLDEtWNwmPHhYKeugM5Qo0tp0EfAf4j3dOIJc8xkYorcoGN9MkydGBjENigCMQaXlYSXwkN070NiXYlB4ejGnMubTT8WLIWAbiS0EttIlksRTP0XNGN3mRVxR52JrG7VnTo2JXBQf0edMgT7qZtcAmCm7R+YX21UGxCrtNNWyv2vXC8EzRhHwjHaQBaTIc5wf/quoIkhCrJDKkLUWjVdkg6zy11aYNP8qwVMoGr0Fjm+qkqpGDa+iDYUqrRafPaZob8256SRAguMSThE+ks7O0ONlOFENmYyuAsuXbV1oni9V8AH0be/2sXschwRldONXLFzd24TiflNcG96KQ50n9/lAWz8JQwXpIhZkCfjnn////hk7J0GInAd03cB+TSFkV4iNo68ldi91rtW9YbMkMDzm/gnBauTH7fEaUrKs/X+hgaO45zjMNMko+4tM5vRVcakZfbISHhY/O4ul7PXExhgHNvN3ildIQ+whdE57JqjcorGtGkh8cVXVSGocklKhtQZw/ZyMEl5HxqimrgpWe26RkJCJ82t6vySxwJNWgq26QWi///PIQydTjAZ1ZTA=",a1="data:image/avif;base64,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",s1="data:image/avif;base64,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",u1="data:image/avif;base64,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",c1="data:image/avif;base64,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",d1="data:image/avif;base64,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",f1="data:image/avif;base64,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",p1=A.div`
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
`,h1=A.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 40px;
`,m1=A.div`
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
`,A1=A.div`
  display: grid;
  row-gap: 16px;
  row-gap: 40px;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 30% 30% 30%;

  padding-left: 60px;
`,Ut=A.img`
  width: 50%;
  height: auto;
  @media screen and (max-width: 478px) {
    width: 40%;
  }
`,g1=A.div`
  margin-top: auto;
`;function v1(){return a.jsxs(p1,{children:[a.jsx(h1,{children:a.jsxs(A1,{children:[a.jsx(Ut,{src:o1,alt:"React Logo."}),a.jsx(Ut,{src:l1,alt:"Webflow Logo."}),a.jsx(Ut,{src:a1,alt:"Figma Logo."}),a.jsx(Ut,{src:s1,alt:"GitHub Logo."}),a.jsx(Ut,{src:u1,alt:"HTML Logo."}),a.jsx(Ut,{src:c1,alt:"CSS Logo."}),a.jsx(Ut,{src:d1,alt:"Javascript Logo."}),a.jsx(Ut,{src:f1,alt:"Photoshop Logo."})]})}),a.jsxs(m1,{children:[a.jsx("h3",{children:"Frontend Dev"}),a.jsx("p",{children:"With a solid understanding of HTML, CSS, JavaScript, and React, I have created visually appealing and user-friendly interfaces for various clients."}),a.jsx(g1,{children:a.jsx(i1,{})})]})]})}const x1="/portfolio/assets/lipusplus_brand_film_hammarby-2024_short-0c3de834.mp4",y1=A.div`
width: 200px;
display: flex;
flex-direction: column;
align-items: flex-start;
padding-top: 30px;
color: #e437e2;

@media screen and (max-width: 478px) {
    align-items: center;
  }

`,w1=A.div`
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
`,S1=A.p`
color: white;
font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`,C1=({onClick:e})=>a.jsxs(y1,{children:[a.jsx(w1,{children:a.jsx(pp,{onClick:e,size:80})}),a.jsx(S1,{children:"Play Film"})]}),j1=A.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: #d5d5d5;
`,k1=A.div`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1); 
    color: #989898; 
  }

  @media (max-width: 960px) {
    &:hover {
      transform: none; 
      color: inherit; 
    }
  }
`,E1=A.p`
  color: white;
  font-size: 20px;
  font-weight: 600;
`,I1=({onClick:e})=>a.jsxs(j1,{children:[a.jsx(k1,{children:a.jsx(hr,{to:"/lipusplus",children:a.jsx(pn,{onClick:e,size:80})})}),a.jsx(E1,{children:"See Case Study"})]}),P1="/portfolio/assets/lipusPlusLogoWhite-b2e2b769.avif",N1="/portfolio/assets/lipusplus_brand_film_hammarby-2024-c0930dc4.mp4";function hp(e){return zn({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",fill:"currentColor"},child:[]}]})(e)}const B1=Pn`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,T1=A.div`
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
  animation: ${B1} 0.5s ease-out;
`,z1=A.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #171717;
`,R1=A.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 3rem;
  color: #ffffff;
  cursor: pointer;
  z-index: 100;
`,O1=A.div`
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  display: flex;
  justify-content: center;
  align-items: center;
`,L1=A.video`
  width: 100%; /* Full width */
  height: auto; /* Maintain aspect ratio */
`,F1=({isOpen:e,onClose:t})=>e?a.jsx(T1,{children:a.jsxs(z1,{children:[a.jsx(R1,{onClick:t,children:a.jsx(hp,{})}),a.jsx(O1,{children:a.jsx(L1,{controls:!0,autoPlay:!0,children:a.jsx("source",{src:N1,type:"video/mp4"})})})]})}):null,M1=A.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`,D1=A.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 1;
`,b1=A.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.32);
  z-index: 2;
`,G1=A.div`
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
`,W1=A.div`
  display: flex;
  padding-top: 30px;
  margin-bottom: 30px;
`,Q1=A.img`
  width: 30%;
  height: auto;

  @media screen and (max-width: 478px) {
    width: 50%;
  }
`,U1=A.div`
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
`,V1=({scrollToEvent:e})=>{const t=j.useRef(null),[n,r]=j.useState(!1);return j.useEffect(()=>{const i=setTimeout(()=>{t.current&&t.current.play()},1e3);return()=>clearTimeout(i)},[]),a.jsxs(M1,{children:[a.jsx(D1,{ref:t,src:x1,loop:!0,muted:!0,playsInline:!0,alt:"Background video"}),a.jsx(b1,{}),a.jsxs(G1,{children:[a.jsx(W1,{children:a.jsx(Q1,{src:P1,alt:"LipusPlus logo"})}),a.jsx("h4",{children:"Meet the Physio of Hammarby Handball"}),a.jsx("p",{children:"Brand film highlighting LipusPlus's partnership with Hammarby Handball, showcasing through testimonals the effectiveness of the modality."}),a.jsxs(U1,{children:[a.jsx(C1,{onClick:()=>r(!0)}),a.jsx(I1,{onClick:e})]})]}),a.jsx(F1,{isOpen:n,onClose:()=>r(!1)})]})},mp="/portfolio/assets/lipusPlusLogo-022851c3.avif",Ap="/portfolio/assets/lipusHeroImg-44921e74.avif",Y1=A.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: #e437e2;
`,H1=A.div`
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
`,X1=A.p`
  color: #040404;
  font-size: 20px;
  font-weight: 600;
`,$1=({onClick:e})=>a.jsxs(Y1,{children:[a.jsx(H1,{children:a.jsx(hr,{to:"/lipusplus",children:a.jsx(pn,{onClick:e,size:80})})}),a.jsx(X1,{children:"See Case Study"})]}),K1=Pn`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,Z1=A.section`
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
`,_1=A.div`
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
`,q1=A.div`
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
`,J1=A.img`
  width: 40%;
  height: auto;
`,ev=A.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  font-size: 14px;
  z-index: 2;
  /* margin-top: ; */
`,tv=A.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,nv=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({isInView:e})=>e&&fr`
      animation: ${K1} 1s ease-out forwards;
    `}
`,gp=()=>{const e=j.useRef(null),[t,n]=j.useState(!1);return j.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),a.jsxs(Z1,{children:[a.jsxs(_1,{children:[a.jsx("h4",{children:"UX Case study"}),a.jsx(q1,{children:a.jsx(J1,{src:mp,alt:"The logo for LipuspLus"})}),a.jsx("p",{children:"LipusPlus aims to attract physiotherapists and elite athletes to its webinars on the Return to Play concept. An enticing and informative landing page is needed to generate leads for these webinars."}),a.jsx($1,{})]}),a.jsxs(tv,{children:[a.jsx(ev,{children:"Photo by Peder Rotkirch."}),a.jsx(nv,{ref:e,src:Ap,alt:"A hammarby handball player in green and white stripes holds a ball.",isInView:t})]})]})},vp="/portfolio/assets/vikings-23b289a3.mp4",rv="/portfolio/assets/viaplayLogo-c60ae164.avif",iv=A.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: #d5d5d5;

  @media screen and (max-width: 478px) {
    align-items: center;
  }
`,ov=A.div`
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
`,lv=A.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`,av=({onClick:e})=>a.jsxs(iv,{children:[a.jsx(ov,{children:a.jsx("a",{href:"https://paulevans-dop.com/",target:"_blank",rel:"noopener noreferrer",children:a.jsx(pn,{onClick:e,size:80})})}),a.jsx(lv,{children:"See Cinematography Reel"})]}),sv=A.div`
width: 200px;
display: flex;
flex-direction: column;
align-items: flex-start;
padding-top: 30px;
color: #e437e2;

@media screen and (max-width: 478px) {
    align-items: center;
  }

`,uv=A.div`
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
`,cv=A.p`
color: white;
font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`,dv=({onClick:e})=>a.jsxs(sv,{children:[a.jsx(uv,{children:a.jsx(pp,{onClick:e,size:80})}),a.jsx(cv,{children:"Play Trailer"})]}),fv=Pn`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,pv=A.div`
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
  animation: ${fv} 0.5s ease-out;
`,hv=A.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #171717;
`,mv=A.button`
  position: absolute;
  top: 30px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 3rem;
  color: #ffffff;
  cursor: pointer;
  z-index: 100;
`,Av=A.div`
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  display: flex;
  justify-content: center;
  align-items: center;
`,gv=A.video`
  width: 100%; /* Full width */
  height: auto; /* Maintain aspect ratio */
`,vv=({isOpen:e,onClose:t})=>e?a.jsx(pv,{children:a.jsxs(hv,{children:[a.jsx(mv,{onClick:t,children:a.jsx(hp,{})}),a.jsx(Av,{children:a.jsx(gv,{controls:!0,autoPlay:!0,children:a.jsx("source",{src:vp,type:"video/mp4"})})})]})}):null,xv=A.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`,yv=A.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 1;
`,wv=A.div`
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
`,Sv=A.div`
  display: flex;
  padding-top: 30px;
  margin-bottom: 30px;
`,Cv=A.img`
  width: 30%;
  height: auto;
`,jv=A.div`
 width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media screen and (max-width: 478px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`,kv=({scrollToEvent:e})=>{const t=j.useRef(null),[n,r]=j.useState(!1);return j.useEffect(()=>{const i=setTimeout(()=>{t.current&&t.current.play()},1e3);return()=>clearTimeout(i)},[]),a.jsxs(xv,{children:[a.jsx(yv,{ref:t,src:vp,autoplay:!0,loop:!0,muted:!0,playsInline:!0,alt:"Background video"}),a.jsxs(wv,{children:[a.jsx(Sv,{children:a.jsx(Cv,{src:rv,alt:"Viaplays logo"})}),a.jsx("h4",{children:"The Last Journey of the Vikings"}),a.jsx("p",{children:"In collaboration with director James Valesquez, Mopar Studios and Viaplay, I served as the series cinematographer. The production took place in both Sweden and Ireland."}),a.jsxs(jv,{children:[a.jsx(dv,{onClick:()=>r(!0)}),a.jsx(av,{})]})]}),a.jsx(vv,{isOpen:n,onClose:()=>r(!1)})]})},xp="data:image/avif;base64,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",yp="/portfolio/assets/ebieHeroImg-14466e14.avif",Ev=A.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: #e437e2;

  @media screen and (max-width: 478px) {
    align-items: center;
  }
`,Iv=A.div`
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
`,Pv=A.p`
  color: #040404;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`,Nv=({onClick:e})=>a.jsxs(Ev,{children:[a.jsx(Iv,{children:a.jsx(hr,{to:"/ebie",children:a.jsx(pn,{onClick:e,size:80})})}),a.jsx(Pv,{children:"See Case Study"})]}),Bv=Pn`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,Tv=A.section`
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
`,zv=A.div`
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
`,Rv=A.div`
  display: flex;
  padding-bottom: 30px;
  padding-top: 30px;
`,Ov=A.img`
  width: 40%;
  height: auto;
`,Lv=A.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  font-size: 14px;
  z-index: 2;
`,Fv=A.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,Mv=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({isInView:e})=>e&&fr`
      animation: ${Bv} 1s ease-out forwards;
    `}
`,wp=()=>{const e=j.useRef(null),[t,n]=j.useState(!1);return j.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),a.jsxs(Tv,{children:[a.jsxs(zv,{children:[a.jsx("h4",{children:"UX Case study"}),a.jsx(Rv,{children:a.jsx(Ov,{src:xp,alt:"The logo for Ebie"})}),a.jsx("p",{children:"Create and implement a completely new and user-friendly function within the platform that makes it easy for property owners to apply for and manage group insurance. Simplify the application and the overview for insurance status."}),a.jsx(Nv,{})]}),a.jsxs(Fv,{children:[a.jsx(Lv,{children:"Photo from www.Ebie.se"}),a.jsx(Mv,{ref:e,src:yp,alt:"A street view on the corner of Sveavägen, Sergelstorg.",isInView:t})]})]})},Dv="/portfolio/assets/hidden-7e893598.avif",bv="/portfolio/assets/BESTSHORTFILMSPECIALAWARD-EasternEuropeFilmFestival-December2022-489d2b56.avif",Gv=A.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;
`,Wv=A.img`
  position: absolute;
  width: 100%;
  height: 100%;
  align-self: flex-start;
  object-fit: cover;
  z-index: 2;
`,Qv=A.div`
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
`,Uv=A.div`
  display: flex;
  padding-top: 30px;
`,Vv=A.img`
  width: 50%;
  height: auto;
`,Yv=A.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  font-size: 14px;
  z-index: 3;
`,Hv=({scrollToEvent:e})=>a.jsxs(Gv,{children:[a.jsx(Yv,{children:"Photography by Nisse Virgin."}),a.jsx(Wv,{src:Dv,alt:"A short film poster. A Man sits with his back to camera contemplating"}),a.jsxs(Qv,{children:[a.jsx("h4",{children:"Hidden"}),a.jsx("p",{children:"My passion for storytelling led me to create a short film, which I directed, produced, and wrote. This film went on to win the Special award for Best Short Film at the Eastern European Short Film Festival."}),a.jsx(Uv,{children:a.jsx(Vv,{src:bv,alt:"A wreath for Winner Eastern European Short Film Festival "})})]})]}),Xv=A.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
`,wc=A.section`
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
`,$v=()=>{const e=j.useRef(null),t=()=>{e.current&&e.current.scrollIntoView({behavior:"smooth"})};return a.jsxs(Xv,{children:[a.jsx(hg,{}),a.jsxs(wc,{children:[a.jsx(e1,{}),a.jsx(v1,{})]}),a.jsx(V1,{scrollToEvent:t}),a.jsxs(wc,{children:[a.jsx(Fg,{}),a.jsx(Ug,{})]}),a.jsx("div",{ref:e}),a.jsx(gp,{}),a.jsx(kv,{}),a.jsx(wp,{}),a.jsx(Hv,{})]})},Kv=A.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
  margin-top: 170px;
`,Zv=()=>(j.useRef(null),a.jsxs(Kv,{children:[a.jsx(gp,{}),a.jsx(wp,{})]})),_v="/portfolio/assets/meAbout-b0dd0af4.avif",qv=Pn`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,Jv=A.section`
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
`,ex=A.div`
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
`,tx=A.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,nx=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({isInView:e})=>e&&fr`
      animation: ${qv} 1s ease-out forwards;
    `}
`,rx=()=>{const e=j.useRef(null),[t,n]=j.useState(!1);return j.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),a.jsxs(Jv,{children:[a.jsxs(ex,{children:[a.jsx("h3",{children:"About me "}),a.jsx("p",{children:"“Hi, I’m Paul! I have worked as a creative for over 20 years. In need of a platform to showcase my work, I taught myself how to code. In 2020, I decided to study web design to gain structure and further insight into the platforms and methods used. My interests extend into AI, particularly image and video generation and recently started developing tools that incorporate AI to aid in my creative work. I have a calm and methodical approach to life, which enables me to navigate challenges with ease. My strong willpower and determination help me stay focused on the goals, even during difficult times."})]}),a.jsx(tx,{children:a.jsx(nx,{ref:e,src:_v,alt:"Paul Evans watching the ocean",isInView:t})})]})},ix="/portfolio/assets/camper-588e3c53.avif",ox=Pn`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,lx=A.section`
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
`,ax=A.div`
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
`,sx=A.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,ux=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({isInView:e})=>e&&fr`
      animation: ${ox} 1s ease-out forwards;
    `}
`,cx=()=>{const e=j.useRef(null),[t,n]=j.useState(!1);return j.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),a.jsxs(lx,{children:[a.jsxs(ax,{children:[a.jsx("h3",{children:"For fun "}),a.jsx("p",{children:"Surfing and traveling are my two biggest passions. When I'm not paddling out into the sea I like to work out at the gym or swim in the lake. I also cherish the time I spend with my family, friends cooking and watching movies and tv shows."})]}),a.jsx(sx,{children:a.jsx(ux,{ref:e,src:ix,alt:"A surf board propped up against a mobilehome",isInView:t})})]})},dx=A.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
  margin-top: 170px;
`;A.section`
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
`;const fx=()=>(j.useRef(null),a.jsxs(dx,{children:[a.jsx(rx,{}),a.jsx(cx,{})]})),px="/portfolio/assets/challenges-70c5b3a7.avif",hx="/portfolio/assets/fans-667fbfce.avif",mx="/portfolio/assets/research-b4a1f59e.avif",Ax="/portfolio/assets/mapping-c6580bd3.avif",gx="/portfolio/assets/lipus-00a0d7ff.avif",vx="/portfolio/assets/physio-5d7e362e.avif",xx="/portfolio/assets/athlete-40b4363a.avif",yx="/portfolio/assets/insights-cb84265a.avif",wx="/portfolio/assets/webinar-966c915f.avif",Sx="/portfolio/assets/designOne-24f39a91.avif",Cx="/portfolio/assets/designTwo-b7e3107e.avif",jx="/portfolio/assets/webflow-baa33610.avif",kx="/portfolio/assets/reflection-72e94f6a.avif",Ex=A.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 24px;
  /* padding-bottom: 10px; */
  color: #e437e2;

  @media screen and (max-width: 478px) {
    align-items: center;
  }
`,Ix=A.div`
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
`,Px=A.p`
  color: #333333;
  font-size: 20px;
  font-weight: 600;
`,Nx=({onClick:e})=>a.jsxs(Ex,{children:[a.jsx(Ix,{children:a.jsx("a",{href:"https://www.lipusplus.com/casestudies/hammarby",target:"_blank",rel:"noopener noreferrer",children:a.jsx(pn,{onClick:e,size:80})})}),a.jsx(Px,{children:"See live page at LipusPlus.com"})]}),Bx=A.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
  margin-top: 170px;
`,Tx=A.div`
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
`,zx=A.div`
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
`,Rx=A.div`
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
`,Ox=A.div`
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
`,Lx=A.div`
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
`,Fx=A.div`
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
`,Mx=A.div`
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
`,Dx=A.div`
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
`,bx=A.div`
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
`,Gx=A.div`
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
`,Wx=A.div`
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
`,Qx=A.div`
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
`,Ux=A.div`
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
`,Vx=A.div`
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
`,We=A.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  /* width: 70%; */
  /* padding-top: 50px; */
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 60px;
  color: #333333;

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
`,Yx=A.div`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
`,Hx=A.img`
  width: 40%;
  height: auto;
`,Qe=A.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  bottom: 0;
  /* left: 20; */
  width: 100%;
  height: 40px;
  background-color: #1e1e1ee6;
  padding-bottom: 10px;
  /* margin-left: 60px; */
  /* padding-left: 40px; */
  /* padding-right: 40px; */
  
  z-index: 2;
  color: #fefefe;
  /* margin-top: ; */
`,Ue=A.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  font-size: 14px;
  z-index: 2;
  color: #cdcccc;
  /* margin-top: ; */
`,Ve=A.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,Ye=A.img`
  width: 100%;
  height: 800px;
  object-fit: cover;

  ${({isInView:e})=>e&&css`
      animation: ${slideInFromRight} 1s ease-out forwards;
    `}
`,Xx=()=>a.jsxs(Bx,{children:[a.jsxs(Tx,{children:[a.jsxs(We,{children:[a.jsx("h4",{children:"UX Case study"}),a.jsx(Yx,{children:a.jsx(Hx,{src:mp,alt:"The logo for LipuspLus"})}),a.jsx("h5",{children:"My role"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("span",{className:"boldlarge",children:"UX / UI Designer"})}),a.jsx("li",{children:a.jsx("span",{className:"boldlarge",children:"Frontend Developer"})}),a.jsx("li",{children:a.jsx("span",{className:"boldlarge",children:"Content Creator"})})]})]}),a.jsxs(Ve,{children:[a.jsx(Qe,{children:a.jsx(Ue,{children:"Photo by Peder Rotkirch, LipusPlus."})}),a.jsx(Ye,{src:Ap,alt:"A hammarby handball player in green and white stripes holds a ball."})]})]}),a.jsxs(zx,{children:[a.jsxs(We,{children:[a.jsx("h5",{children:"Challenges"}),a.jsxs("ul",{children:[a.jsx("li",{children:"Understanding Elite Athletes and Physiotherapists everyday struggles."}),a.jsx("li",{children:"Minimal experience with webinars."}),a.jsx("li",{children:"Working with Webflow, which was new to me."})]})]}),a.jsxs(Ve,{children:[a.jsx(Qe,{children:a.jsx(Ue,{children:"Screenshot from partnership film, LipusPlus & Hammarby Handball"})}),a.jsx(Ye,{src:px,alt:"A hammarby handball player is lead of the court by the team physio."})]})]}),a.jsxs(Rx,{children:[a.jsxs(We,{children:[a.jsx("h5",{children:"Brief"}),a.jsx("p",{children:"LipusPlus aims to attract physiotherapists and elite athletes to its webinars on the Return to Play concept. An enticing and informative landing page is needed to generate leads for these webinars."}),a.jsx("h5",{children:"Goal"}),a.jsx("p",{children:"Create a user-friendly landing page. Connect with the target group. Convince the user to register for the event. Provide a seamless experience for visitors from registration to processing. Strive for a high conversion rate and satisfaction for both LipusPlus and the participants before, during and after the event. Generate leads for sales processing."})]}),a.jsxs(Ve,{children:[a.jsx(Qe,{children:a.jsx(Ue,{children:"Screenshot from partnership film, LipusPlus & Hammarby Handball"})}),a.jsx(Ye,{src:hx,alt:"Hammarby fans encourgae their team."})]})]}),a.jsxs(Ox,{children:[a.jsxs(We,{children:[a.jsx("h5",{children:"Key Questions"}),a.jsxs("ul",{children:[a.jsx("li",{children:"How can we make the message and the offer on the landing page clear and attractive to the target group?"}),a.jsx("li",{children:"How can we optimise the landing page to increase the conversion rate and get more visitors to sign up for webinars?"}),a.jsx("li",{children:"How can we stimulate people to spread the word about the webinar in their surroundings?"})]})]}),a.jsxs(Ve,{children:[a.jsx(Qe,{children:a.jsx(Ue,{children:"Screenshot of Anne Hopfgarten from partnership film, LipusPlus & Hammarby Handball"})}),a.jsx(Ye,{src:mx,alt:"Anne Hopfgarten sitting for an interview."})]})]}),a.jsxs(Lx,{children:[a.jsxs(We,{children:[a.jsx("h5",{children:"Qualitative Research"}),a.jsxs("ul",{children:[a.jsxs("li",{children:[a.jsx("span",{className:"bold",children:"Seminar: "})," LipusPlus"]}),a.jsxs("li",{children:[a.jsx("span",{className:"bold",children:"Observation: "})," LipusPlus Sales Member"]}),a.jsxs("li",{children:[a.jsx("span",{className:"bold",children:"Observation: "})," LipusPlus Clinician "]}),a.jsxs("li",{children:[a.jsx("span",{className:"bold",children:"Interview: "})," Physiotherapist"]}),a.jsxs("li",{children:[a.jsx("span",{className:"bold",children:"Interview: "})," Elite athlete"]})]})]}),a.jsxs(Ve,{children:[a.jsx(Qe,{children:a.jsx(Ue,{children:"Image from research mapping, figma"})}),a.jsx(Ye,{src:Ax,alt:"Mapping of the users needs."})]})]}),a.jsxs(Fx,{children:[a.jsxs(We,{children:[a.jsx("h5",{children:"Results"}),a.jsx("p",{children:a.jsx("span",{className:"bold",children:"LipusPlus"})}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Challenges: "})," Struggles with conversion rates due to a lack of evidence and information about the modality."]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Needs: "})," A convenient platform to present and discuss current and ongoing studies and results."]})]}),a.jsxs(Ve,{children:[a.jsx(Qe,{children:a.jsx(Ue,{children:"Photo by Peder Rotkirch, Lipusplus."})}),a.jsx(Ye,{src:gx,alt:"A hammarby handball player uses the LipusPlus modality.."})]})]}),a.jsxs(Mx,{children:[a.jsxs(We,{children:[a.jsx("h5",{children:"Results"}),a.jsx("p",{children:a.jsx("span",{className:"bold",children:"Physiotherapist"})}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Concerns: "})," Need evidence that LipusPlus is effective and safe. Rely on endorsements from prominent clubs and figures in their sport."]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Priorities: "})," They aim to get their patients back to their sport quickly and safely. Their reputation and job are at stake. They question why they should choose LipusPlus over proven traditional methods."]})]}),a.jsxs(Ve,{children:[a.jsx(Qe,{children:a.jsx(Ue,{children:"Screenshot of Anne Hopfgarten from partnership film, LipusPlus & Hammarby Handball"})}),a.jsx(Ye,{src:vx,alt:"Anne Hopfgarten. Hammarby physio."})]})]}),a.jsxs(Dx,{children:[a.jsxs(We,{children:[a.jsx("h5",{children:"Results"}),a.jsx("p",{children:a.jsx("span",{className:"bold",children:"Athlete"})}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Concerns: "})," Need evidence that LipusPlus is effective and safe. They often rely on endorsements from prominent figures in their sport and trusted physiotherapists."]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Goals: "})," Want to return to their sport as quickly as possible since their income and career goals depend on it."]})]}),a.jsxs(Ve,{children:[a.jsx(Qe,{children:a.jsx(Ue,{children:"Screenshot of Ludvig Lindeberg from partnership film, LipusPlus & Hammarby Handball"})}),a.jsx(Ye,{src:xx,alt:"Ludvig Lindeberg celebrates winning."})]})]}),a.jsxs(bx,{children:[a.jsxs(We,{children:[a.jsx("h5",{children:"Insights"}),a.jsxs("ul",{children:[a.jsx("li",{children:"There is skepticism towards Medtech companies."}),a.jsx("li",{children:"Build trust not just through evidence but also an understanding of the users everyday struggles and lifestyles."}),a.jsx("li",{children:"A shift towards a sports lifestyle focus, emphasising partnerships rather than solely Medtech, would be more inspirational and trustworthy."}),a.jsx("li",{children:"It is essential for the user that the landing page works on all devices and is responsive. "}),a.jsx("li",{children:"Our users lead busy lives, on the go. Headlines, clear and captivating. Copy, persuasive and engaging. We need to get their attention directly."}),a.jsx("li",{children:"Clearly show the offer and benefits of Return to Play."}),a.jsx("li",{children:"Clearly communicate the value and benefits of attending the webinar, emphasising credible evidence and success stories."})]})]}),a.jsxs(Ve,{children:[a.jsx(Qe,{children:a.jsx(Ue,{children:"Image from Unsplash."})}),a.jsx(Ye,{src:yx,alt:"An athlete is lying down on the track."})]})]}),a.jsxs(Gx,{children:[a.jsxs(We,{children:[a.jsx("h5",{children:"Webinar Requirements"}),a.jsxs("ul",{children:[a.jsx("li",{children:"The webinar platform should be a stable and proven streaming  service. "}),a.jsx("li",{children:"Data collection through the registration form is a must."}),a.jsx("li",{children:"Email Automation."}),a.jsx("li",{children:"Option to connect to Hubspot. "}),a.jsx("li",{children:"Simple and easy to understand registration forms."}),a.jsx("li",{children:"Custom Registration forms."})]}),a.jsx("p",{children:"With approximately 260 million users, Vimeo met all our requirements. Since LipusPlus already hosted content on Vimeo, it streamlined our video showcasing process."})]}),a.jsxs(Ve,{children:[a.jsx(Qe,{children:a.jsx(Ue,{children:"Image from Vimeo."})}),a.jsx(Ye,{src:wx,alt:"A vimeo webinar screen."})]})]}),a.jsxs(Wx,{children:[a.jsxs(We,{children:[a.jsx("h5",{children:"Design"}),a.jsx("p",{children:"Building and improving upon an existing design system.  "}),a.jsxs("ul",{children:[a.jsx("li",{children:"Through emotional content we highlighted partnerships for credibility. "}),a.jsx("li",{children:"Clearly outlined the benefits and starting price of the Return to Play program. "}),a.jsx("li",{children:"Assure the user that the webinar would discuss evidence from LipusPlus studies. "}),a.jsx("li",{children:"Engaging Content. Through still images, videos and testimonials. "}),a.jsx("li",{children:"Showcase evidence and studies."}),a.jsx("li",{children:"Clear and Compelling Headlines alongside persuasive Copywriting. "}),a.jsx("li",{children:"A user-friendly registration form with a prominent CTA button. "}),a.jsx("li",{children:"Social Proofing. "}),a.jsx("li",{children:"Follow-Up Communication. "})]})]}),a.jsxs(Ve,{children:[a.jsx(Qe,{children:a.jsx(Ue,{children:"Design frames from figma."})}),a.jsx(Ye,{src:Sx,alt:"Frames from LipusPlus HiFi Designs."})]})]}),a.jsxs(Qx,{children:[a.jsxs(We,{children:[a.jsx("h5",{children:"Design"}),a.jsxs("ul",{children:[a.jsx("li",{children:"Through emotional content we highlighted partnerships for credibility. "}),a.jsx("li",{children:"Clearly outlined the benefits and starting price of the Return to Play program. "}),a.jsx("li",{children:"Assured the user that the webinar would discuss evidence from LipusPlus studies. "})]})]}),a.jsxs(Ve,{children:[a.jsx(Qe,{children:a.jsx(Ue,{children:"Design frames from figma."})}),a.jsx(Ye,{src:Cx,alt:"Frames from LipusPlus HiFi Designs."})]})]}),a.jsxs(Ux,{children:[a.jsxs(We,{children:[a.jsx("h5",{children:"Frontend"}),a.jsx("p",{children:"The existing LipusPlus homepage was initially created and is presently hosted via Webflow. A key stipulation for this project was to continue using Webflow. "}),a.jsx(Nx,{})]}),a.jsxs(Ve,{children:[a.jsx(Qe,{children:a.jsx(Ue,{children:"Screen shot from Webflow."})}),a.jsx(Ye,{src:jx,alt:"Webflow. Desktop ."})]})]}),a.jsxs(Vx,{children:[a.jsxs(We,{children:[a.jsx("h5",{children:"Reflection"}),a.jsx("p",{children:"This project was incredibly exciting for me for several reasons. Firstly, I had the opportunity to leverage my previous experience as a filmmaker, from conceptualizing and working with the brand to planning and filming interviews and sports coverage. Secondly, this project allowed me to align user needs with brand objectives, achieving a cohesive brand feel that LipusPlus has been striving for. Finally, I had the chance to work with Webflow, exploring a new platform and expanding my skills—an experience I thoroughly enjoyed.  "}),a.jsx("p",{children:"In conclusion, this project has not only met its goals but also provided a strong template for future case studies, webinars and other promotions. However there is always room for improvement. One area would be creating our own registration form instead of using the embedded Vimeo form. This change would give better design control and allow for a more cohesive user experience."}),a.jsx("p",{children:"This project has been a valuable learning experience. It demonstrated the importance of thorough research, user-centric design, and effective communication. The real-world application of our work and the positive feedback from LipusPlus has been immensely rewarding."})]}),a.jsxs(Ve,{children:[a.jsx(Qe,{children:a.jsx(Ue,{children:"The LipusPlus modality. Photo by Peder Rotkirch, LipusPlus."})}),a.jsx(Ye,{src:kx,alt:"The lipusPlus modality"})]})]})]}),$x="/portfolio/assets/challengesEbie-948c84b9.avif",Kx="/portfolio/assets/briefEbie-dee42c26.avif",Zx="/portfolio/assets/researchEbie-fc14e246.avif",_x="/portfolio/assets/persona1-5418be83.avif",qx="/portfolio/assets/persona2-9701fa74.avif",Jx="/portfolio/assets/application1-e9abd0d8.avif",ey="/portfolio/assets/application2-9a1504ec.avif",ty="/portfolio/assets/sorting-ef8a0128.avif",ny="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAGNbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAsaWxvYwAAAABEAAACAAEAAAABAAAC1AAADC8AAgAAAAEAAAG1AAABHwAAAEJpaW5mAAAAAAACAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAAAaaW5mZQIAAAAAAgAAYXYwMUFscGhhAAAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAAw2lwcnAAAACdaXBjbwAAABRpc3BlAAAAAAAAAvQAAAPWAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQUMAAAAABNjb2xybmNseAACAAIABoAAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQUcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQBBYYHAAANVm1kYXQSAAoHGWZvP1eFQDKRAhIACihQ9M4R2OvAmgwnQkIxj9lcaP5yMyr+w+/g36SDKzU4+xQSdmCSLF5MBE2TBbYOSkeKvv209tiz4fRfRhN2EQZwY0cTNhf+3SviePvH+yauaidyx1hdHlgvvaYkcOnRU4SEIitgvnTE1i0M7yGUxbYRaBv3IaIsyXoVeSYwmAVDrGdyvYE0VRShYX0eJUMvR7+SVhXC8lQFT9GjWnQAKZxrkoTj6zFH9Rx9KifcMIWzWjY4UCVDwrgi2MbXmTzfhRX5sUyYuEQMGm4uedl3iMrrPk4/04hO3coBvfpwTfer/vLdd4ZrARUxp85rynhRB99wQQEeO+AtTt48GgdKPhraYbn6AJudFFk90XY1bBIACgoZZm8/V4IEBA0IMp4YTIAC9L5/uL1Nhv9JcME3nLweG9TzX9Wj/jvQufiaToOhnqVGDkmJ+LoKOfkLIGA6dzoRN7ng3OWQGKTTSbk4gxC2Ynoo0yUdCXWPb3Df8IbI4mKfMrS/QkOYHj2blVdvIvf+nlzXOl5WQfpB5M8Xf8mrBNB/d/dBy/mK4OlXQAGEru5jDz4kS2hkL4n6HdaC6qApFDb22u1I4kivNQvz1nDjq8vQDxhODOW9pFWMEu8DtCDQnWHQv/xmBCyhzQ976yHOaFDM91Kdyh+9uP7S4rxoNwTLvB5IQqhshOW0BXSKxQF+wL/JC3+v+ZErk7smyyX7PzJaAI08e3nu7YmrHHVmP8nO+fLhVDWTTJ4kopBKcw05cWJgtlE8RnBwFwX8/TcJv1OL6u6MuyRCeT1sB/79zLHYFA1OhT3WOUDXqXR36xGDeJfZGvbFdzE3tR9W2NWo8fVrvkfu8t8Jb6JJfXWbVsfrQERKY4r7/ktQGVXNpNkh98qYEsz1xkoWwIA/IZtzArFUj6pwHnoeizGt4uOb7uVnBxlixzOh6bFOmJU4PoFV/YxaVIhn+QWdWYg6wM6OSV7WfVX+CrX/WHKTTiruVfQDlVNqvuvIVdRPk3ktpmXh4f9jj67ra7NH0+U9TDkb4xYqSpheuEKT6D/AssZbnaoRv8PfLc7AzfbULeEU+qIpNlJtS77gyMhMRvB1HVCc6cs5juIEAheUntW2xy//EHAF00zMmDnLcEhmmyZSsinA2kxupaFlWX2P8vK7fO/h3X5EwoiFSHQC/shP6f/PjjBmXfRTLSku9ETmNYUg79A3m44mKJ6Kccfmxjn3Ocd6mgjfll02tK7zT/W1VFwS88yk2hNCs1pNZtL6HfsvYWfVinVMyslRxkvI3JBD6Fs+gbMrOf0v1hgNw9I5vQFRwynaMxd0OYOKkMHkUY3cwb3SHdER+bEfvCAbWJwvL/k71OeagrwQIVpRJN+z0kgH1R+mrfkhQU2Ng2ftQbF2naSCka6uVV5SeDrxsRs2s5cGYSFU7NqxYIMG9O8vkV24Sf1eywFBTvrlL5TQWOUX0ZVwx8CMMN8mh3BkCOBe5TwxIpkKjh64OH2E6U9Eu4A1KjIvfrbGF3gc0+Iawi68E7gAYaAS1I0Jt6irhrBuUubCoWtUZsU8yqqvtmlLXxkFGoU42nD+26f/D5kqq48LSCLTMU+MiMQh8DRWrcq6VbJ4ZREPZp7IYv8AY4dcsC1v9ewigkSxd25pKdq4ldTaDpvy9EcEB/xIQ0GrJS702Vqqn1ZGNnCKFwNqj0NDmuW0lNExfT5F9T2m5oLdxHwR3atbBK1EiKfg6DvbO1iX1dFAcDpXEDPQJyZD163UsWWw4XLNNcFDUeOMLL5MFrsd4j0hiIio+w5c/QtRkkJWwsWHD+csPgBCUz/VxcB9GGz+EQ5Ybf6GYb3gzgi3nyDlIgorNpNCtb2YwLIrZkbUHY0Y44z+37nA4aiOsYqwcYr2obmHsCrbDZsTBbT2eOJQxky3nL8yLee2vlWKIL3jYkB+jgsY3tlH165dnGQk7+g+xLdv6Tm5c5yQ/VUY1Lw+6feAsN8vxFwa9dkDf7FrcHwPduw/RXvqE/AgqyQYY/ZkraT0JXJTCMkSHiHsDuLi5tjmtsJ+yoX3I/EbJRrIPQkO6X/UQoogPHn/ZGMYCWKBtXBKjOGKO/lf4MkpBKKeojunE+KkB62wnlBrmqCA+Tm7C3ekFhjqhVGB7w/gGdgKC0uGrjFqqM++nBuuoiEIZLXMD1hIIq0s9aqM1KAI+hQ57DZIqZQfMIW+7wmRz8lo10FeB+/AneUJoy+o7THGgh5crOilR51Sy8now4mWz0xQHBHaI8Q8Q1xSKpbXLipZYAhiM8s+hhz3q3G4FXykPb12ln9J/MD5nhripUP7vzWhqQk2bDPNgF9cR8MzaVWuTBTmIypr2yUtCVrwwxONZdBsBl+bn85HVnPKKgZr8ki8OM6/Px0rm4igfyZGTMZJZ7C0kcBTPz40aWvOpD+Ej7EJZC62ucfzVUEcXAHVyyBa8MzLTvXYnFWq8mlIwkpJVLt3sYx+EgG/qMZv1XSJcO8nzvGLQZrIYWuhOuerMSkmMBRkRk9Hd0gw2mmSbZ0JGyUqkIkI8ud9Sh+BoqGcKVcFnF1n2+VgcSKAsFBYFdiCyWJcoINKpzs27blmz6EH3u81gHPk+5LlwQBtgDDq+oercNc/TzYj6ZmTubxNh2guH8/f+vP3QdNYfY8AMYVCCWRvw3xVlKpiprZqNRi6nlYAZ/QSKP5zGZKYjPXTlYmtvRTDs+dzx+A5p/O1ARySLoFa4vu9SptnkM/NA/9lMK6LSEERrRng5k1SVS/wLavROf+kF43IfoJ58bKd9SC8bPciMmYBXiAssKWJkqsqGZj5XljltKVA3Htj6e17wqD2sBDlkm5QLhYmRTwbiL1PMvbDmEaPLdhFlGzZNui/Kp9TM7QDtiWv1F6yt84TgOQh2iV6yPBYvTmKPJQB7+oNb2UipQYil/krCx6ohi8BYQOl8whuymxA3v5JjhciqIb1tgEPQhkKCB2kVlWX0SOLPH/bHfTLOS8XgzrE7I0/1cwweiaMcS90WbXG4FUXM9gbEVyGPNGJuyEPFnxKsJnkod1QN2EPdppQ19wpQQeXU91xetRBqXO7GTvlvnyotF8s6VGw5MYo0erDl4DciAIYNc5wVCHT2TUPQi4VIRfVW5mYbpd/ALtXIqiVQoF3b7ZEmoNw9T8bPsKzB3C9QPsdN2gpC4SdnYcvg4h3pdCPMmxgLQC8lDMrSr/P7xft/y9Re4QIr22Rz3KrbxgMat7M7EQRV+XqqHIv7sQNnBBrFFjMlBIbLbVmEwQuXV2ISl3z4FKuRsccFMm2c1ISHKKULWxnOr5ZBEto57rcnb1g72FR3NsF/rP1hV+aOBoYJSulGSK2Wj5KSsrEWXDCVzUKkLQwrn/Jd34n/ZRG7Lw04jE+xy/QZsspvKm020qxvhQp2BCb5BhZrE0ILn/QcAA1aEW08FueG6iMrBpTdNQ+GZLryLngPxEwH04dcDn3KGr0JvFYjjgAC5QXUbFoOqYMbblWAioxIMDwSz77TPPv6vtLTnrPOC8n39jIKoKW3wcH62OMXL+o9hquQ8l8S/srkCHd/FHHT6lZORf9tnYb/T+mgER1pWJDkw4g74d8+qZ6Ox6kTIdxdeWoV8haTUeWWx+Rov2ZwWoijdw5IoJ1Cn+HhY2rb9NBAmNIHBvuTByd34rTpTGxFIBnrJ0MxlHYJTUoZuc8kW2IPIzs7zjWt3gIegqcIfk0A+EKmBjPqxMGzC9w1rA0mooAkB5Er1qbGU4sepmwGzRUwL7Z9QL0vu+QfruaBAc88hjDTOWYUkgTLgxlrO5dENu8FvDdivwyYjPsbHA8knkCtg6WrMTc/9BlQjcNltSV+oz3550QCQRGbWjLlcckfcZDV13rh7j4r+m/LckScdjhoOwtYGVfwBFXW9sDMMr2jyKULkGMuaMXN1JrwaiqzXOiFbVBHBTP6IOhshRooQEl6WghiFEsz9E3cSnlGtRPJofxA0qlc08XnY8z8/4u5zDPOUm3X4rn/uRcoE1a2P6VtrgTL+ARzTQK2SNH/hGRbkEgeIGSKk4SVGp8hiPYwsEccucyRkQ9kyu0zlEe1rQG65Mr0+ITkOBkvPM7hiegBF5aKgkG27GerLFggFafL2b0ISeTwTQMfpwu7bGSgcdIFJ5+2KFgbNQiuVqwq6PYq5ZButEevW5JYwX3430aftSBj///b0amm3kivyWEXUeL3RDWKRZI6cO2ors9rbwkWR72T4sRGn/tVxmkFYwXT+AOlAatYCG0jtbOvtbkKw6DIFppQ5BU+rnoLVWAUqUiDcWXQF8kudsKT8MIR3ZhxS1J3tvMD6vRHlnBZTY7V2/4d5vdisYlHiVUhHKPMAFlPlfbx1uYy+6YHIW0QsSUKHWw/s7csmdv0YpDBGKqpYKCUDgLkKHzi6f241pfJ1Wr9H8SvO2uwuKrjznNocVGW0bTs5hqpvQA3r27abLLyKr0kbnRM6x9oqYesh7LXi5gvIlXH7Cn/KnZ6jQ271OwuhrICBbam3x3v39Ud2zI5tbCcAB+",ry="/portfolio/assets/status2-b7b87c98.avif",iy="/portfolio/assets/overview-8b6281de.avif",oy="/portfolio/assets/city-25b0252b.avif",ly=A.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
  margin-top: 170px;
`,ay=A.div`
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
`,sy=A.div`
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
`,uy=A.div`
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
`,cy=A.div`
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
`,dy=A.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;
  /* grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Image Image "; */

  @media screen and (max-width: 960px) {
    flex-direction: column;
    /* grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Image"; */
  }
`,fy=A.div`
position: relative;
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
`,py=A.div`
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
`,hy=A.div`
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
`,my=A.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;
  /* display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Context Image "; */

  @media screen and (max-width: 960px) {
    flex-direction: column;
    /* grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context"; */
  }
`,Ay=A.div`
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
`,gy=A.div`
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
`,Nt=A.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  /* width: 70%; */
  /* padding-top: 50px; */
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 60px;
  color: #333333;

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
`,vy=A.div`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
`,xy=A.img`
  width: 40%;
  height: auto;
`,_e=A.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  bottom: 0;
  /* left: 20; */
  width: 100%;
  height: 40px;
  background-color: #1e1e1ee6;
  padding-bottom: 10px;
  /* margin-left: 60px; */
  /* padding-left: 40px; */
  /* padding-right: 40px; */
  
  z-index: 2;
  color: #fefefe;
  /* margin-top: ; */
`,qe=A.p`
  position: absolute;
  /* align-self: flex-end; */
  /* bottom: 0; */
  /* left: 20; */
  /* width: 100%; */
  /* background-color: #00000082; */
  /* margin-left: 60px; */
  /* padding-left: 40px; */
  margin-right: 20px;
  font-size: 14px;
  /* z-index: 2; */
  color: #fefefe;
  /* margin-top: ; */
`,Je=A.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,et=A.img`
  width: 100%;
  height: 800px;
  object-fit: cover;

  ${({isInView:e})=>e&&css`
      animation: ${slideInFromRight} 1s ease-out forwards;
    `}
`,yy=()=>a.jsxs(ly,{children:[a.jsxs(ay,{children:[a.jsxs(Nt,{children:[a.jsx("h4",{children:"UX Case study"}),a.jsx(vy,{children:a.jsx(xy,{src:xp,alt:"The logo for Ebie"})}),a.jsxs("h5",{children:["My role: ",a.jsx("span",{className:"boldxlarge",children:"UX / UI Designer "})]})]}),a.jsxs(Je,{children:[a.jsx(_e,{children:a.jsx(qe,{children:"Photo from www.Ebie.se"})}),a.jsx(et,{src:yp,alt:"A street view on the corner of Sveavägen, Sergelstorg."})]})]}),a.jsxs(sy,{children:[a.jsxs(Nt,{children:[a.jsx("h5",{children:"Challenges"}),a.jsxs("ul",{children:[a.jsx("li",{children:"Lack of prior knowledge of the real estate industry which prevented us from clearly understanding the specific design task."}),a.jsx("li",{children:"Understanding user expectations, especially when they are already accustomed to existing solutions and industry standards."}),a.jsx("li",{children:"Access to Ebies clients for user research, Ebie is a start up with a limited number of customers, and those they do have are extremely busy. "})]})]}),a.jsxs(Je,{children:[a.jsx(_e,{children:a.jsx(qe,{children:"Image from Unsplash"})}),a.jsx(et,{src:$x,alt:"A hammarby handball player is lead of the court by the team physio."})]})]}),a.jsxs(uy,{children:[a.jsxs(Nt,{children:[a.jsx("h5",{children:"Brief"}),a.jsx("p",{children:"Develop a user-friendly feature for group insurance. Increase the conversion rate of group insurance."}),a.jsx("h5",{children:"Goal"}),a.jsx("p",{children:" Create and implement a completely new and user-friendly function within the platform that makes it easy for property owners to apply for and manage group insurance."}),a.jsx("p",{children:"Increase the use of group insurance by increasing the number of property owners applying for it. This is to be achieved by simplifying and improving the entire application process."})]}),a.jsxs(Je,{children:[a.jsx(_e,{children:a.jsx(qe,{children:"Image from figma design system"})}),a.jsx(et,{src:Kx,alt:"A deisgn idea for an online application"})]})]}),a.jsxs(cy,{children:[a.jsxs(Nt,{children:[a.jsx("h5",{children:"Target Group"}),a.jsxs("ul",{children:[a.jsx("li",{children:"Lessor"}),a.jsx("li",{children:"Property Owner"})]}),a.jsx("h5",{children:"Research"}),a.jsx("p",{children:"Carrying out research with Ebies clients proved challenging due to busy schedules, Ebie provided user backgrounds and their preferences, and based on that information, we created personas."})]}),a.jsxs(Je,{children:[a.jsx(_e,{children:a.jsx(qe,{children:"Data collected by Ebie."})}),a.jsx(et,{src:Zx,alt:"Research collected by Ebie"})]})]}),a.jsxs(dy,{children:[a.jsxs(Je,{children:[a.jsx(_e,{children:a.jsx(qe,{children:"Personas created from research."})}),a.jsx(et,{src:_x,alt:"Personas built from user research."})]}),a.jsxs(Je,{children:[a.jsx(_e,{children:a.jsx(qe,{children:"Personas created from research."})}),a.jsx(et,{src:qx,alt:"Personas built from user research."})]})]}),a.jsxs(fy,{children:[a.jsxs(Nt,{children:[a.jsx("h5",{children:"Improvement Areas"}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"The application process "})," posed our biggest challenge. Applying for insurance requires a significant amount of information. Our goal was to consolidate this into a single form without overwhelming or confusing the user."]}),a.jsx("p",{children:"Our initial design mirrored a traditional application form. While it was clearer and easier to navigate than previous versions, user testing revealed that there was still room for improvement."})]}),a.jsxs(Je,{children:[a.jsx(_e,{children:a.jsx(qe,{children:"Our initial application design from figma."})}),a.jsx(et,{src:Jx,alt:"A traditional application form"})]})]}),a.jsxs(py,{children:[a.jsxs(Nt,{children:[a.jsx("h5",{children:"Improvement Areas"}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"The new design"})," received a much more positive response from Ebie and performed better during user testing."]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Focus areas. "})," "]}),a.jsxs("ul",{children:[a.jsx("li",{children:"We organized the input fields into a column form to enhance readability."}),a.jsx("li",{children:"To make the form less overwhelming, we implemented fold-out and collapsible sections."}),a.jsx("li",{children:"Colours to signal when a section is complete. "}),a.jsx("li",{children:"A progress bar at the top keeps users informed about their position in the process. "}),a.jsx("li",{children:"Additionally, we included navigation on the left to allow users to view other applications or add new ones. "})]})]}),a.jsxs(Je,{children:[a.jsx(_e,{children:a.jsx(qe,{children:"Our re-design from figma."})}),a.jsx(et,{src:ey,alt:"An online application form."})]})]}),a.jsxs(hy,{children:[a.jsxs(Nt,{children:[a.jsx("h5",{children:"Improvement Areas"}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Sort Function:  "})," Property owners and lessors often manage numerous properties with various tenants coming and going. To facilitate quick sorting between different insurance statuses, we implemented a robust sorting function. Where the user can sort between different status stages. New colours wee added ot the design system to help clearly label the different statuses. "]})]}),a.jsxs(Je,{children:[a.jsx(_e,{children:a.jsx(qe,{children:"Proposed sorting buttons, figma."})}),a.jsx(et,{src:ty,alt:"Proposed sorting buttons from figma."})]})]}),a.jsxs(my,{children:[a.jsxs(Je,{children:[a.jsx(_e,{children:a.jsx(qe,{children:"Design proposal for insurance status, figma."})}),a.jsx(et,{src:ny,alt:"Design for insurance status from figma."})]}),a.jsxs(Je,{children:[a.jsx(_e,{children:a.jsx(qe,{children:"Design proposal for renewing status, figma."})}),a.jsx(et,{src:ry,alt:"Design for insurance status from figma."})]})]}),a.jsxs(Ay,{children:[a.jsxs(Nt,{children:[a.jsx("h5",{children:"Improvement Areas"}),a.jsx("p",{children:a.jsx("span",{className:"bold",children:"Overview:  "})}),a.jsxs("ul",{children:[a.jsx("li",{children:"Within the insurance overview, we added a warning icon to indicate when an action is required, such as when a report has been filed or an invoice needs payment. "}),a.jsx("li",{children:"We also incorporated the same status symbols from the search function for clearer status visibility."}),a.jsx("li",{children:"The screening report is displayed directly, eliminating the need to search through other documents."}),a.jsx("li",{children:"Additionally, we introduced a sorting function that allows users to organise all insurance entries in numeric, alphabetic, or reverse order. "})]})]}),a.jsxs(Je,{children:[a.jsx(_e,{children:a.jsx(qe,{children:"Design proposal for insurance overview, figma."})}),a.jsx(et,{src:iy,alt:"Design proposal for insurance overview."})]})]}),a.jsxs(gy,{children:[a.jsxs(Nt,{children:[a.jsx("h5",{children:"Reflection"}),a.jsx("p",{children:"The biggest challenge was understanding the intricacies of the real estate industry and the complexities of the application process. This took time and slowed us down in the beginning but it was also one of the most intresting sides of the project as we learned something new. "}),a.jsx("p",{children:"What I enjoyed most about this project was developing the sorting function and the logic behind it. While sorting and filters are not always considered the most visually striking aspect of design, ensuring that the sorting function is clear and intuitive is crucial. It plays a vital role in enhancing user experience by making it easier for users to organise and access information efficiently. The satisfaction came from creating a system that seamlessly integrates into the overall design, making it functional and user-friendly."})]}),a.jsxs(Je,{children:[a.jsx(_e,{children:a.jsx(qe,{children:"Image from Unsplash."})}),a.jsx(et,{src:oy,alt:"Street view of Stockholm city with NK in the distance."})]})]})]});A.div`
  overflowy: scroll;
  height: 2500px;
`;const wy=A.div`
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
`,Sy=A.div`
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
`,Cy=()=>{const[e,t]=j.useState(!1),n=()=>{const i=document.documentElement.scrollTop;i>300?t(!0):i<=300&&t(!1)},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return window.addEventListener("scroll",n),a.jsx(wy,{children:a.jsx(Sy,{children:a.jsx(Eg,{onClick:r,style:{display:e?"inline":"none",borderRadius:"50%"}})})})},jy=[{id:1,href:"https://www.linkedin.com/in/paul-evans-3a74605/",icon:a.jsx(kg,{}),des:"LinkedIn"},{id:2,href:"https://www.instagram.com/paulevanscreative/",icon:a.jsx(jg,{}),des:"Instagram"},{id:3,href:"https://www.imdb.com/name/nm3171341/?ref_=ttfc_fc_cr",icon:a.jsx(Cg,{}),des:"Imdb"}],ky=A.footer`
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
`,Ey=A.div`
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
`,Iy=A.p`
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
`,Py=A.p`
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
`,Ny=A.div`
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
`,By=A.a`
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
`,Ty=A.p`
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

`,zy=A.div`
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
`,Ry=A.img`
  text-align: center;
  justify-self: center;
  width: 120px;
  margin-top: 4em;

  @media screen and (max-width: 960px) {
    width: 120px;
  }
`,Sc=A.p`
font-size: 16px;
font-weight: 500;
margin: 2px;

@media screen and (max-width: 960px) {
  margin: 8px;
  }
`,Oy=ge.forwardRef((e,t)=>a.jsxs(ky,{ref:t,children:[a.jsx(zy,{children:a.jsx(Ry,{src:cp,alt:"the letters P and E merged together to form the logo Paul Evans Creative"})}),a.jsx(Ly,{}),a.jsxs(Ey,{children:[a.jsx(Sc,{children:"Copyright 2024."}),a.jsx(Sc,{children:"Paul Evans."}),a.jsx(Iy,{children:a.jsx("a",{href:"mailto:paul.evans.creative@gmail.com",children:"paul.evans.creative@gmail.com"})}),a.jsx(Py,{children:a.jsx("a",{href:"tel:+46739908858",children:"+46739908858"})})]})]})),Ly=()=>a.jsx(Ny,{children:a.jsx(ba.Provider,{value:{size:"2em"},children:jy.map(e=>a.jsxs(By,{href:e.href,children:[e.icon,a.jsx(Ty,{children:e.des})]},e.id))})}),Fy=()=>{const{pathname:e}=pr();return j.useEffect(()=>{window.scrollTo(0,0)},[e]),null},My=A.div`
  min-height: 100%;
  max-width: 100vw;
`,Dy=A.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: space-evenly;
`,by=()=>{const e=j.useRef(null);return a.jsxs(X0,{children:[a.jsx(Fy,{}),a.jsxs(My,{children:[a.jsx(sg,{footerRef:e}),a.jsxs(Dy,{children:[a.jsxs(G0,{children:[a.jsx(On,{path:"/",element:a.jsx($v,{})}),a.jsx(On,{path:"/casestudies",element:a.jsx(Zv,{})}),a.jsx(On,{path:"/about",element:a.jsx(fx,{})}),a.jsx(On,{path:"/lipusplus",element:a.jsx(Xx,{})}),a.jsx(On,{path:"/ebie",element:a.jsx(yy,{})})]}),a.jsx(Oy,{ref:e})]}),a.jsx(Cy,{})]})]})};Ml.createRoot(document.getElementById("root")).render(a.jsx(ge.StrictMode,{children:a.jsx(by,{})}));
