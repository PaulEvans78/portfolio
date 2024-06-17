function jf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function kc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ec={exports:{}},Co={},Ic={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var li=Symbol.for("react.element"),Cf=Symbol.for("react.portal"),kf=Symbol.for("react.fragment"),Ef=Symbol.for("react.strict_mode"),If=Symbol.for("react.profiler"),Pf=Symbol.for("react.provider"),Nf=Symbol.for("react.context"),Bf=Symbol.for("react.forward_ref"),Rf=Symbol.for("react.suspense"),Tf=Symbol.for("react.memo"),Of=Symbol.for("react.lazy"),Xs=Symbol.iterator;function zf(e){return e===null||typeof e!="object"?null:(e=Xs&&e[Xs]||e["@@iterator"],typeof e=="function"?e:null)}var Pc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nc=Object.assign,Bc={};function ur(e,t,n){this.props=e,this.context=t,this.refs=Bc,this.updater=n||Pc}ur.prototype.isReactComponent={};ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rc(){}Rc.prototype=ur.prototype;function Va(e,t,n){this.props=e,this.context=t,this.refs=Bc,this.updater=n||Pc}var Ua=Va.prototype=new Rc;Ua.constructor=Va;Nc(Ua,ur.prototype);Ua.isPureReactComponent=!0;var _s=Array.isArray,Tc=Object.prototype.hasOwnProperty,Qa={current:null},Oc={key:!0,ref:!0,__self:!0,__source:!0};function zc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Tc.call(t,r)&&!Oc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:li,type:e,key:o,ref:l,props:i,_owner:Qa.current}}function Lf(e,t){return{$$typeof:li,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ya(e){return typeof e=="object"&&e!==null&&e.$$typeof===li}function bf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ks=/\/+/g;function ul(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bf(""+e.key):t.toString(36)}function zi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case li:case Cf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+ul(l,0):r,_s(i)?(n="",e!=null&&(n=e.replace(Ks,"$&/")+"/"),zi(i,t,n,"",function(c){return c})):i!=null&&(Ya(i)&&(i=Lf(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ks,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",_s(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+ul(o,s);l+=zi(o,t,n,u,i)}else if(u=zf(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+ul(o,s++),l+=zi(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function hi(e,t,n){if(e==null)return e;var r=[],i=0;return zi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Mf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},Li={transition:null},Ff={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Li,ReactCurrentOwner:Qa};function Lc(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:hi,forEach:function(e,t,n){hi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hi(e,function(){t++}),t},toArray:function(e){return hi(e,function(t){return t})||[]},only:function(e){if(!Ya(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=ur;V.Fragment=kf;V.Profiler=If;V.PureComponent=Va;V.StrictMode=Ef;V.Suspense=Rf;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ff;V.act=Lc;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Nc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Qa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Tc.call(t,u)&&!Oc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:li,type:e.type,key:i,ref:o,props:r,_owner:l}};V.createContext=function(e){return e={$$typeof:Nf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Pf,_context:e},e.Consumer=e};V.createElement=zc;V.createFactory=function(e){var t=zc.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Bf,render:e}};V.isValidElement=Ya;V.lazy=function(e){return{$$typeof:Of,_payload:{_status:-1,_result:e},_init:Mf}};V.memo=function(e,t){return{$$typeof:Tf,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=Li.transition;Li.transition={};try{e()}finally{Li.transition=t}};V.unstable_act=Lc;V.useCallback=function(e,t){return Fe.current.useCallback(e,t)};V.useContext=function(e){return Fe.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};V.useEffect=function(e,t){return Fe.current.useEffect(e,t)};V.useId=function(){return Fe.current.useId()};V.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Fe.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};V.useRef=function(e){return Fe.current.useRef(e)};V.useState=function(e){return Fe.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Fe.current.useTransition()};V.version="18.3.1";Ic.exports=V;var C=Ic.exports;const ge=kc(C),Df=jf({__proto__:null,default:ge},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf=C,Gf=Symbol.for("react.element"),Vf=Symbol.for("react.fragment"),Uf=Object.prototype.hasOwnProperty,Qf=Wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yf={key:!0,ref:!0,__self:!0,__source:!0};function bc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Uf.call(t,r)&&!Yf.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Gf,type:e,key:o,ref:l,props:i,_owner:Qf.current}}Co.Fragment=Vf;Co.jsx=bc;Co.jsxs=bc;Ec.exports=Co;var a=Ec.exports,Fl={},Mc={exports:{}},it={},Fc={exports:{}},Dc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,b){var F=I.length;I.push(b);e:for(;0<F;){var H=F-1>>>1,P=I[H];if(0<i(P,b))I[H]=b,I[F]=P,F=H;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var b=I[0],F=I.pop();if(F!==b){I[0]=F;e:for(var H=0,P=I.length,B=P>>>1;H<B;){var z=2*(H+1)-1,D=I[z],x=z+1,Q=I[x];if(0>i(D,F))x<P&&0>i(Q,D)?(I[H]=Q,I[x]=F,H=x):(I[H]=D,I[z]=F,H=z);else if(x<P&&0>i(Q,F))I[H]=Q,I[x]=F,H=x;else break e}}return b}function i(I,b){var F=I.sortIndex-b.sortIndex;return F!==0?F:I.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],m=1,h=null,g=3,S=!1,w=!1,v=!1,j=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(I){for(var b=n(c);b!==null;){if(b.callback===null)r(c);else if(b.startTime<=I)r(c),b.sortIndex=b.expirationTime,t(u,b);else break;b=n(c)}}function y(I){if(v=!1,f(I),!w)if(n(u)!==null)w=!0,at(k);else{var b=n(c);b!==null&&ye(y,b.startTime-I)}}function k(I,b){w=!1,v&&(v=!1,p(O),O=-1),S=!0;var F=g;try{for(f(b),h=n(u);h!==null&&(!(h.expirationTime>b)||I&&!pe());){var H=h.callback;if(typeof H=="function"){h.callback=null,g=h.priorityLevel;var P=H(h.expirationTime<=b);b=e.unstable_now(),typeof P=="function"?h.callback=P:h===n(u)&&r(u),f(b)}else r(u);h=n(u)}if(h!==null)var B=!0;else{var z=n(c);z!==null&&ye(y,z.startTime-b),B=!1}return B}finally{h=null,g=F,S=!1}}var R=!1,T=null,O=-1,U=5,M=-1;function pe(){return!(e.unstable_now()-M<U)}function ue(){if(T!==null){var I=e.unstable_now();M=I;var b=!0;try{b=T(!0,I)}finally{b?me():(R=!1,T=null)}}else R=!1}var me;if(typeof d=="function")me=function(){d(ue)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,xe=Le.port2;Le.port1.onmessage=ue,me=function(){xe.postMessage(null)}}else me=function(){j(ue,0)};function at(I){T=I,R||(R=!0,me())}function ye(I,b){O=j(function(){I(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,at(k))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(I){switch(g){case 1:case 2:case 3:var b=3;break;default:b=g}var F=g;g=b;try{return I()}finally{g=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,b){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var F=g;g=I;try{return b()}finally{g=F}},e.unstable_scheduleCallback=function(I,b,F){var H=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?H+F:H):F=H,I){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=F+P,I={id:m++,callback:b,priorityLevel:I,startTime:F,expirationTime:P,sortIndex:-1},F>H?(I.sortIndex=F,t(c,I),n(u)===null&&I===n(c)&&(v?(p(O),O=-1):v=!0,ye(y,F-H))):(I.sortIndex=P,t(u,I),w||S||(w=!0,at(k))),I},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(I){var b=g;return function(){var F=g;g=b;try{return I.apply(this,arguments)}finally{g=F}}}})(Dc);Fc.exports=Dc;var $f=Fc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf=C,rt=$f;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wc=new Set,Wr={};function En(e,t){er(e,t),er(e+"Capture",t)}function er(e,t){for(Wr[e]=t,e=0;e<t.length;e++)Wc.add(t[e])}var bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dl=Object.prototype.hasOwnProperty,Xf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zs={},Js={};function _f(e){return Dl.call(Js,e)?!0:Dl.call(Zs,e)?!1:Xf.test(e)?Js[e]=!0:(Zs[e]=!0,!1)}function Kf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zf(e,t,n,r){if(t===null||typeof t>"u"||Kf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var $a=/[\-:]([a-z])/g;function Ha(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($a,Ha);Ne[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($a,Ha);Ne[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($a,Ha);Ne[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xa(e,t,n,r){var i=Ne.hasOwnProperty(t)?Ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zf(t,n,i,r)&&(n=null),r||i===null?_f(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=Hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mi=Symbol.for("react.element"),Ln=Symbol.for("react.portal"),bn=Symbol.for("react.fragment"),_a=Symbol.for("react.strict_mode"),Wl=Symbol.for("react.profiler"),Gc=Symbol.for("react.provider"),Vc=Symbol.for("react.context"),Ka=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Vl=Symbol.for("react.suspense_list"),Za=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),Uc=Symbol.for("react.offscreen"),qs=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=qs&&e[qs]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,cl;function Er(e){if(cl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);cl=t&&t[1]||""}return`
`+cl+e}var dl=!1;function pl(e,t){if(!e||dl)return"";dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{dl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Er(e):""}function Jf(e){switch(e.tag){case 5:return Er(e.type);case 16:return Er("Lazy");case 13:return Er("Suspense");case 19:return Er("SuspenseList");case 0:case 2:case 15:return e=pl(e.type,!1),e;case 11:return e=pl(e.type.render,!1),e;case 1:return e=pl(e.type,!0),e;default:return""}}function Ul(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bn:return"Fragment";case Ln:return"Portal";case Wl:return"Profiler";case _a:return"StrictMode";case Gl:return"Suspense";case Vl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vc:return(e.displayName||"Context")+".Consumer";case Gc:return(e._context.displayName||"Context")+".Provider";case Ka:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Za:return t=e.displayName||null,t!==null?t:Ul(e.type)||"Memo";case Qt:t=e._payload,e=e._init;try{return Ul(e(t))}catch{}}return null}function qf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ul(t);case 8:return t===_a?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function eh(e){var t=Qc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ai(e){e._valueTracker||(e._valueTracker=eh(e))}function Yc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ql(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function eu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $c(e,t){t=t.checked,t!=null&&Xa(e,"checked",t,!1)}function Yl(e,t){$c(e,t);var n=sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$l(e,t.type,n):t.hasOwnProperty("defaultValue")&&$l(e,t.type,sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function tu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $l(e,t,n){(t!=="number"||Hi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ir=Array.isArray;function Xn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+sn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Ir(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:sn(n)}}function Hc(e,t){var n=sn(t.value),r=sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ru(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gi,_c=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gi=gi||document.createElement("div"),gi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},th=["Webkit","ms","Moz","O"];Object.keys(Br).forEach(function(e){th.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Br[t]=Br[e]})});function Kc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Br.hasOwnProperty(e)&&Br[e]?(""+t).trim():t+"px"}function Zc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var nh=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _l(e,t){if(t){if(nh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zl=null;function Ja(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jl=null,_n=null,Kn=null;function iu(e){if(e=ui(e)){if(typeof Jl!="function")throw Error(E(280));var t=e.stateNode;t&&(t=No(t),Jl(e.stateNode,e.type,t))}}function Jc(e){_n?Kn?Kn.push(e):Kn=[e]:_n=e}function qc(){if(_n){var e=_n,t=Kn;if(Kn=_n=null,iu(e),t)for(e=0;e<t.length;e++)iu(t[e])}}function ed(e,t){return e(t)}function td(){}var fl=!1;function nd(e,t,n){if(fl)return e(t,n);fl=!0;try{return ed(e,t,n)}finally{fl=!1,(_n!==null||Kn!==null)&&(td(),qc())}}function Vr(e,t){var n=e.stateNode;if(n===null)return null;var r=No(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var ql=!1;if(bt)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){ql=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{ql=!1}function rh(e,t,n,r,i,o,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Rr=!1,Xi=null,_i=!1,ea=null,ih={onError:function(e){Rr=!0,Xi=e}};function oh(e,t,n,r,i,o,l,s,u){Rr=!1,Xi=null,rh.apply(ih,arguments)}function lh(e,t,n,r,i,o,l,s,u){if(oh.apply(this,arguments),Rr){if(Rr){var c=Xi;Rr=!1,Xi=null}else throw Error(E(198));_i||(_i=!0,ea=c)}}function In(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ou(e){if(In(e)!==e)throw Error(E(188))}function ah(e){var t=e.alternate;if(!t){if(t=In(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ou(i),e;if(o===r)return ou(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function id(e){return e=ah(e),e!==null?od(e):null}function od(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=od(e);if(t!==null)return t;e=e.sibling}return null}var ld=rt.unstable_scheduleCallback,lu=rt.unstable_cancelCallback,sh=rt.unstable_shouldYield,uh=rt.unstable_requestPaint,de=rt.unstable_now,ch=rt.unstable_getCurrentPriorityLevel,qa=rt.unstable_ImmediatePriority,ad=rt.unstable_UserBlockingPriority,Ki=rt.unstable_NormalPriority,dh=rt.unstable_LowPriority,sd=rt.unstable_IdlePriority,ko=null,Et=null;function ph(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(ko,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:mh,fh=Math.log,hh=Math.LN2;function mh(e){return e>>>=0,e===0?32:31-(fh(e)/hh|0)|0}var vi=64,xi=4194304;function Pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Pr(s):(o&=l,o!==0&&(r=Pr(o)))}else l=n&~i,l!==0?r=Pr(l):o!==0&&(r=Pr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yt(t),i=1<<n,r|=e[n],t&=~i;return r}function Ah(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-yt(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=Ah(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function ta(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ud(){var e=vi;return vi<<=1,!(vi&4194240)&&(vi=64),e}function hl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ai(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function vh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-yt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function es(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Z=0;function cd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dd,ts,pd,fd,hd,na=!1,yi=[],Zt=null,Jt=null,qt=null,Ur=new Map,Qr=new Map,$t=[],xh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function au(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":Ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qr.delete(t.pointerId)}}function xr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ui(t),t!==null&&ts(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function yh(e,t,n,r,i){switch(t){case"focusin":return Zt=xr(Zt,e,t,n,r,i),!0;case"dragenter":return Jt=xr(Jt,e,t,n,r,i),!0;case"mouseover":return qt=xr(qt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ur.set(o,xr(Ur.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Qr.set(o,xr(Qr.get(o)||null,e,t,n,r,i)),!0}return!1}function md(e){var t=An(e.target);if(t!==null){var n=In(t);if(n!==null){if(t=n.tag,t===13){if(t=rd(n),t!==null){e.blockedOn=t,hd(e.priority,function(){pd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ra(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zl=r,n.target.dispatchEvent(r),Zl=null}else return t=ui(n),t!==null&&ts(t),e.blockedOn=n,!1;t.shift()}return!0}function su(e,t,n){bi(e)&&n.delete(t)}function wh(){na=!1,Zt!==null&&bi(Zt)&&(Zt=null),Jt!==null&&bi(Jt)&&(Jt=null),qt!==null&&bi(qt)&&(qt=null),Ur.forEach(su),Qr.forEach(su)}function yr(e,t){e.blockedOn===t&&(e.blockedOn=null,na||(na=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,wh)))}function Yr(e){function t(i){return yr(i,e)}if(0<yi.length){yr(yi[0],e);for(var n=1;n<yi.length;n++){var r=yi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zt!==null&&yr(Zt,e),Jt!==null&&yr(Jt,e),qt!==null&&yr(qt,e),Ur.forEach(t),Qr.forEach(t),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)md(n),n.blockedOn===null&&$t.shift()}var Zn=Wt.ReactCurrentBatchConfig,Ji=!0;function Sh(e,t,n,r){var i=Z,o=Zn.transition;Zn.transition=null;try{Z=1,ns(e,t,n,r)}finally{Z=i,Zn.transition=o}}function jh(e,t,n,r){var i=Z,o=Zn.transition;Zn.transition=null;try{Z=4,ns(e,t,n,r)}finally{Z=i,Zn.transition=o}}function ns(e,t,n,r){if(Ji){var i=ra(e,t,n,r);if(i===null)Cl(e,t,r,qi,n),au(e,r);else if(yh(i,e,t,n,r))r.stopPropagation();else if(au(e,r),t&4&&-1<xh.indexOf(e)){for(;i!==null;){var o=ui(i);if(o!==null&&dd(o),o=ra(e,t,n,r),o===null&&Cl(e,t,r,qi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Cl(e,t,r,null,n)}}var qi=null;function ra(e,t,n,r){if(qi=null,e=Ja(r),e=An(e),e!==null)if(t=In(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qi=e,null}function Ad(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ch()){case qa:return 1;case ad:return 4;case Ki:case dh:return 16;case sd:return 536870912;default:return 16}default:return 16}}var Xt=null,rs=null,Mi=null;function gd(){if(Mi)return Mi;var e,t=rs,n=t.length,r,i="value"in Xt?Xt.value:Xt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Mi=i.slice(e,1<r?1-r:void 0)}function Fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wi(){return!0}function uu(){return!1}function ot(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wi:uu,this.isPropagationStopped=uu,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wi)},persist:function(){},isPersistent:wi}),t}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},is=ot(cr),si=le({},cr,{view:0,detail:0}),Ch=ot(si),ml,Al,wr,Eo=le({},si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:os,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(ml=e.screenX-wr.screenX,Al=e.screenY-wr.screenY):Al=ml=0,wr=e),ml)},movementY:function(e){return"movementY"in e?e.movementY:Al}}),cu=ot(Eo),kh=le({},Eo,{dataTransfer:0}),Eh=ot(kh),Ih=le({},si,{relatedTarget:0}),gl=ot(Ih),Ph=le({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),Nh=ot(Ph),Bh=le({},cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rh=ot(Bh),Th=le({},cr,{data:0}),du=ot(Th),Oh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lh[e])?!!t[e]:!1}function os(){return bh}var Mh=le({},si,{key:function(e){if(e.key){var t=Oh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:os,charCode:function(e){return e.type==="keypress"?Fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fh=ot(Mh),Dh=le({},Eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pu=ot(Dh),Wh=le({},si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:os}),Gh=ot(Wh),Vh=le({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uh=ot(Vh),Qh=le({},Eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yh=ot(Qh),$h=[9,13,27,32],ls=bt&&"CompositionEvent"in window,Tr=null;bt&&"documentMode"in document&&(Tr=document.documentMode);var Hh=bt&&"TextEvent"in window&&!Tr,vd=bt&&(!ls||Tr&&8<Tr&&11>=Tr),fu=String.fromCharCode(32),hu=!1;function xd(e,t){switch(e){case"keyup":return $h.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mn=!1;function Xh(e,t){switch(e){case"compositionend":return yd(t);case"keypress":return t.which!==32?null:(hu=!0,fu);case"textInput":return e=t.data,e===fu&&hu?null:e;default:return null}}function _h(e,t){if(Mn)return e==="compositionend"||!ls&&xd(e,t)?(e=gd(),Mi=rs=Xt=null,Mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vd&&t.locale!=="ko"?null:t.data;default:return null}}var Kh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kh[e.type]:t==="textarea"}function wd(e,t,n,r){Jc(r),t=eo(t,"onChange"),0<t.length&&(n=new is("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Or=null,$r=null;function Zh(e){Td(e,0)}function Io(e){var t=Wn(e);if(Yc(t))return e}function Jh(e,t){if(e==="change")return t}var Sd=!1;if(bt){var vl;if(bt){var xl="oninput"in document;if(!xl){var Au=document.createElement("div");Au.setAttribute("oninput","return;"),xl=typeof Au.oninput=="function"}vl=xl}else vl=!1;Sd=vl&&(!document.documentMode||9<document.documentMode)}function gu(){Or&&(Or.detachEvent("onpropertychange",jd),$r=Or=null)}function jd(e){if(e.propertyName==="value"&&Io($r)){var t=[];wd(t,$r,e,Ja(e)),nd(Zh,t)}}function qh(e,t,n){e==="focusin"?(gu(),Or=t,$r=n,Or.attachEvent("onpropertychange",jd)):e==="focusout"&&gu()}function em(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Io($r)}function tm(e,t){if(e==="click")return Io(t)}function nm(e,t){if(e==="input"||e==="change")return Io(t)}function rm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:rm;function Hr(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Dl.call(t,i)||!St(e[i],t[i]))return!1}return!0}function vu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xu(e,t){var n=vu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vu(n)}}function Cd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kd(){for(var e=window,t=Hi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hi(e.document)}return t}function as(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function im(e){var t=kd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Cd(n.ownerDocument.documentElement,n)){if(r!==null&&as(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=xu(n,o);var l=xu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var om=bt&&"documentMode"in document&&11>=document.documentMode,Fn=null,ia=null,zr=null,oa=!1;function yu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oa||Fn==null||Fn!==Hi(r)||(r=Fn,"selectionStart"in r&&as(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Hr(zr,r)||(zr=r,r=eo(ia,"onSelect"),0<r.length&&(t=new is("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Fn)))}function Si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dn={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionend:Si("Transition","TransitionEnd")},yl={},Ed={};bt&&(Ed=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function Po(e){if(yl[e])return yl[e];if(!Dn[e])return e;var t=Dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ed)return yl[e]=t[n];return e}var Id=Po("animationend"),Pd=Po("animationiteration"),Nd=Po("animationstart"),Bd=Po("transitionend"),Rd=new Map,wu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cn(e,t){Rd.set(e,t),En(t,[e])}for(var wl=0;wl<wu.length;wl++){var Sl=wu[wl],lm=Sl.toLowerCase(),am=Sl[0].toUpperCase()+Sl.slice(1);cn(lm,"on"+am)}cn(Id,"onAnimationEnd");cn(Pd,"onAnimationIteration");cn(Nd,"onAnimationStart");cn("dblclick","onDoubleClick");cn("focusin","onFocus");cn("focusout","onBlur");cn(Bd,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));En("onBeforeInput",["compositionend","keypress","textInput","paste"]);En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));function Su(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,lh(r,t,void 0,e),e.currentTarget=null}function Td(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Su(i,s,c),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Su(i,s,c),o=u}}}if(_i)throw e=ea,_i=!1,ea=null,e}function te(e,t){var n=t[ca];n===void 0&&(n=t[ca]=new Set);var r=e+"__bubble";n.has(r)||(Od(t,e,2,!1),n.add(r))}function jl(e,t,n){var r=0;t&&(r|=4),Od(n,e,r,t)}var ji="_reactListening"+Math.random().toString(36).slice(2);function Xr(e){if(!e[ji]){e[ji]=!0,Wc.forEach(function(n){n!=="selectionchange"&&(sm.has(n)||jl(n,!1,e),jl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ji]||(t[ji]=!0,jl("selectionchange",!1,t))}}function Od(e,t,n,r){switch(Ad(t)){case 1:var i=Sh;break;case 4:i=jh;break;default:i=ns}n=i.bind(null,t,n,e),i=void 0,!ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Cl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=An(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}nd(function(){var c=o,m=Ja(n),h=[];e:{var g=Rd.get(e);if(g!==void 0){var S=is,w=e;switch(e){case"keypress":if(Fi(n)===0)break e;case"keydown":case"keyup":S=Fh;break;case"focusin":w="focus",S=gl;break;case"focusout":w="blur",S=gl;break;case"beforeblur":case"afterblur":S=gl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=cu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Eh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Gh;break;case Id:case Pd:case Nd:S=Nh;break;case Bd:S=Uh;break;case"scroll":S=Ch;break;case"wheel":S=Yh;break;case"copy":case"cut":case"paste":S=Rh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=pu}var v=(t&4)!==0,j=!v&&e==="scroll",p=v?g!==null?g+"Capture":null:g;v=[];for(var d=c,f;d!==null;){f=d;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,p!==null&&(y=Vr(d,p),y!=null&&v.push(_r(d,y,f)))),j)break;d=d.return}0<v.length&&(g=new S(g,w,null,n,m),h.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",g&&n!==Zl&&(w=n.relatedTarget||n.fromElement)&&(An(w)||w[Mt]))break e;if((S||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,S?(w=n.relatedTarget||n.toElement,S=c,w=w?An(w):null,w!==null&&(j=In(w),w!==j||w.tag!==5&&w.tag!==6)&&(w=null)):(S=null,w=c),S!==w)){if(v=cu,y="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=pu,y="onPointerLeave",p="onPointerEnter",d="pointer"),j=S==null?g:Wn(S),f=w==null?g:Wn(w),g=new v(y,d+"leave",S,n,m),g.target=j,g.relatedTarget=f,y=null,An(m)===c&&(v=new v(p,d+"enter",w,n,m),v.target=f,v.relatedTarget=j,y=v),j=y,S&&w)t:{for(v=S,p=w,d=0,f=v;f;f=On(f))d++;for(f=0,y=p;y;y=On(y))f++;for(;0<d-f;)v=On(v),d--;for(;0<f-d;)p=On(p),f--;for(;d--;){if(v===p||p!==null&&v===p.alternate)break t;v=On(v),p=On(p)}v=null}else v=null;S!==null&&ju(h,g,S,v,!1),w!==null&&j!==null&&ju(h,j,w,v,!0)}}e:{if(g=c?Wn(c):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var k=Jh;else if(mu(g))if(Sd)k=nm;else{k=em;var R=qh}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=tm);if(k&&(k=k(e,c))){wd(h,k,n,m);break e}R&&R(e,g,c),e==="focusout"&&(R=g._wrapperState)&&R.controlled&&g.type==="number"&&$l(g,"number",g.value)}switch(R=c?Wn(c):window,e){case"focusin":(mu(R)||R.contentEditable==="true")&&(Fn=R,ia=c,zr=null);break;case"focusout":zr=ia=Fn=null;break;case"mousedown":oa=!0;break;case"contextmenu":case"mouseup":case"dragend":oa=!1,yu(h,n,m);break;case"selectionchange":if(om)break;case"keydown":case"keyup":yu(h,n,m)}var T;if(ls)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Mn?xd(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(vd&&n.locale!=="ko"&&(Mn||O!=="onCompositionStart"?O==="onCompositionEnd"&&Mn&&(T=gd()):(Xt=m,rs="value"in Xt?Xt.value:Xt.textContent,Mn=!0)),R=eo(c,O),0<R.length&&(O=new du(O,e,null,n,m),h.push({event:O,listeners:R}),T?O.data=T:(T=yd(n),T!==null&&(O.data=T)))),(T=Hh?Xh(e,n):_h(e,n))&&(c=eo(c,"onBeforeInput"),0<c.length&&(m=new du("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=T))}Td(h,t)})}function _r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function eo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Vr(e,n),o!=null&&r.unshift(_r(e,o,i)),o=Vr(e,t),o!=null&&r.push(_r(e,o,i))),e=e.return}return r}function On(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ju(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=Vr(n,o),u!=null&&l.unshift(_r(n,u,s))):i||(u=Vr(n,o),u!=null&&l.push(_r(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var um=/\r\n?/g,cm=/\u0000|\uFFFD/g;function Cu(e){return(typeof e=="string"?e:""+e).replace(um,`
`).replace(cm,"")}function Ci(e,t,n){if(t=Cu(t),Cu(e)!==t&&n)throw Error(E(425))}function to(){}var la=null,aa=null;function sa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ua=typeof setTimeout=="function"?setTimeout:void 0,dm=typeof clearTimeout=="function"?clearTimeout:void 0,ku=typeof Promise=="function"?Promise:void 0,pm=typeof queueMicrotask=="function"?queueMicrotask:typeof ku<"u"?function(e){return ku.resolve(null).then(e).catch(fm)}:ua;function fm(e){setTimeout(function(){throw e})}function kl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yr(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Eu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dr=Math.random().toString(36).slice(2),kt="__reactFiber$"+dr,Kr="__reactProps$"+dr,Mt="__reactContainer$"+dr,ca="__reactEvents$"+dr,hm="__reactListeners$"+dr,mm="__reactHandles$"+dr;function An(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Eu(e);e!==null;){if(n=e[kt])return n;e=Eu(e)}return t}e=n,n=e.parentNode}return null}function ui(e){return e=e[kt]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function No(e){return e[Kr]||null}var da=[],Gn=-1;function dn(e){return{current:e}}function ne(e){0>Gn||(e.current=da[Gn],da[Gn]=null,Gn--)}function ee(e,t){Gn++,da[Gn]=e.current,e.current=t}var un={},ze=dn(un),Xe=dn(!1),wn=un;function tr(e,t){var n=e.type.contextTypes;if(!n)return un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function no(){ne(Xe),ne(ze)}function Iu(e,t,n){if(ze.current!==un)throw Error(E(168));ee(ze,t),ee(Xe,n)}function zd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,qf(e)||"Unknown",i));return le({},n,r)}function ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||un,wn=ze.current,ee(ze,e),ee(Xe,Xe.current),!0}function Pu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=zd(e,t,wn),r.__reactInternalMemoizedMergedChildContext=e,ne(Xe),ne(ze),ee(ze,e)):ne(Xe),ee(Xe,n)}var Rt=null,Bo=!1,El=!1;function Ld(e){Rt===null?Rt=[e]:Rt.push(e)}function Am(e){Bo=!0,Ld(e)}function pn(){if(!El&&Rt!==null){El=!0;var e=0,t=Z;try{var n=Rt;for(Z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rt=null,Bo=!1}catch(i){throw Rt!==null&&(Rt=Rt.slice(e+1)),ld(qa,pn),i}finally{Z=t,El=!1}}return null}var Vn=[],Un=0,io=null,oo=0,st=[],ut=0,Sn=null,Tt=1,Ot="";function hn(e,t){Vn[Un++]=oo,Vn[Un++]=io,io=e,oo=t}function bd(e,t,n){st[ut++]=Tt,st[ut++]=Ot,st[ut++]=Sn,Sn=e;var r=Tt;e=Ot;var i=32-yt(r)-1;r&=~(1<<i),n+=1;var o=32-yt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Tt=1<<32-yt(t)+i|n<<i|r,Ot=o+e}else Tt=1<<o|n<<i|r,Ot=e}function ss(e){e.return!==null&&(hn(e,1),bd(e,1,0))}function us(e){for(;e===io;)io=Vn[--Un],Vn[Un]=null,oo=Vn[--Un],Vn[Un]=null;for(;e===Sn;)Sn=st[--ut],st[ut]=null,Ot=st[--ut],st[ut]=null,Tt=st[--ut],st[ut]=null}var nt=null,tt=null,re=!1,xt=null;function Md(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Nu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,tt=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Sn!==null?{id:Tt,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,nt=e,tt=null,!0):!1;default:return!1}}function pa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fa(e){if(re){var t=tt;if(t){var n=t;if(!Nu(e,t)){if(pa(e))throw Error(E(418));t=en(n.nextSibling);var r=nt;t&&Nu(e,t)?Md(r,n):(e.flags=e.flags&-4097|2,re=!1,nt=e)}}else{if(pa(e))throw Error(E(418));e.flags=e.flags&-4097|2,re=!1,nt=e}}}function Bu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function ki(e){if(e!==nt)return!1;if(!re)return Bu(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!sa(e.type,e.memoizedProps)),t&&(t=tt)){if(pa(e))throw Fd(),Error(E(418));for(;t;)Md(e,t),t=en(t.nextSibling)}if(Bu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=nt?en(e.stateNode.nextSibling):null;return!0}function Fd(){for(var e=tt;e;)e=en(e.nextSibling)}function nr(){tt=nt=null,re=!1}function cs(e){xt===null?xt=[e]:xt.push(e)}var gm=Wt.ReactCurrentBatchConfig;function Sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Ei(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ru(e){var t=e._init;return t(e._payload)}function Dd(e){function t(p,d){if(e){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=on(p,d),p.index=0,p.sibling=null,p}function o(p,d,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,f,y){return d===null||d.tag!==6?(d=Ol(f,p.mode,y),d.return=p,d):(d=i(d,f),d.return=p,d)}function u(p,d,f,y){var k=f.type;return k===bn?m(p,d,f.props.children,y,f.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Qt&&Ru(k)===d.type)?(y=i(d,f.props),y.ref=Sr(p,d,f),y.return=p,y):(y=Yi(f.type,f.key,f.props,null,p.mode,y),y.ref=Sr(p,d,f),y.return=p,y)}function c(p,d,f,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=zl(f,p.mode,y),d.return=p,d):(d=i(d,f.children||[]),d.return=p,d)}function m(p,d,f,y,k){return d===null||d.tag!==7?(d=yn(f,p.mode,y,k),d.return=p,d):(d=i(d,f),d.return=p,d)}function h(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ol(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case mi:return f=Yi(d.type,d.key,d.props,null,p.mode,f),f.ref=Sr(p,null,d),f.return=p,f;case Ln:return d=zl(d,p.mode,f),d.return=p,d;case Qt:var y=d._init;return h(p,y(d._payload),f)}if(Ir(d)||gr(d))return d=yn(d,p.mode,f,null),d.return=p,d;Ei(p,d)}return null}function g(p,d,f,y){var k=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:s(p,d,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case mi:return f.key===k?u(p,d,f,y):null;case Ln:return f.key===k?c(p,d,f,y):null;case Qt:return k=f._init,g(p,d,k(f._payload),y)}if(Ir(f)||gr(f))return k!==null?null:m(p,d,f,y,null);Ei(p,f)}return null}function S(p,d,f,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(f)||null,s(d,p,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case mi:return p=p.get(y.key===null?f:y.key)||null,u(d,p,y,k);case Ln:return p=p.get(y.key===null?f:y.key)||null,c(d,p,y,k);case Qt:var R=y._init;return S(p,d,f,R(y._payload),k)}if(Ir(y)||gr(y))return p=p.get(f)||null,m(d,p,y,k,null);Ei(d,y)}return null}function w(p,d,f,y){for(var k=null,R=null,T=d,O=d=0,U=null;T!==null&&O<f.length;O++){T.index>O?(U=T,T=null):U=T.sibling;var M=g(p,T,f[O],y);if(M===null){T===null&&(T=U);break}e&&T&&M.alternate===null&&t(p,T),d=o(M,d,O),R===null?k=M:R.sibling=M,R=M,T=U}if(O===f.length)return n(p,T),re&&hn(p,O),k;if(T===null){for(;O<f.length;O++)T=h(p,f[O],y),T!==null&&(d=o(T,d,O),R===null?k=T:R.sibling=T,R=T);return re&&hn(p,O),k}for(T=r(p,T);O<f.length;O++)U=S(T,p,O,f[O],y),U!==null&&(e&&U.alternate!==null&&T.delete(U.key===null?O:U.key),d=o(U,d,O),R===null?k=U:R.sibling=U,R=U);return e&&T.forEach(function(pe){return t(p,pe)}),re&&hn(p,O),k}function v(p,d,f,y){var k=gr(f);if(typeof k!="function")throw Error(E(150));if(f=k.call(f),f==null)throw Error(E(151));for(var R=k=null,T=d,O=d=0,U=null,M=f.next();T!==null&&!M.done;O++,M=f.next()){T.index>O?(U=T,T=null):U=T.sibling;var pe=g(p,T,M.value,y);if(pe===null){T===null&&(T=U);break}e&&T&&pe.alternate===null&&t(p,T),d=o(pe,d,O),R===null?k=pe:R.sibling=pe,R=pe,T=U}if(M.done)return n(p,T),re&&hn(p,O),k;if(T===null){for(;!M.done;O++,M=f.next())M=h(p,M.value,y),M!==null&&(d=o(M,d,O),R===null?k=M:R.sibling=M,R=M);return re&&hn(p,O),k}for(T=r(p,T);!M.done;O++,M=f.next())M=S(T,p,O,M.value,y),M!==null&&(e&&M.alternate!==null&&T.delete(M.key===null?O:M.key),d=o(M,d,O),R===null?k=M:R.sibling=M,R=M);return e&&T.forEach(function(ue){return t(p,ue)}),re&&hn(p,O),k}function j(p,d,f,y){if(typeof f=="object"&&f!==null&&f.type===bn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case mi:e:{for(var k=f.key,R=d;R!==null;){if(R.key===k){if(k=f.type,k===bn){if(R.tag===7){n(p,R.sibling),d=i(R,f.props.children),d.return=p,p=d;break e}}else if(R.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Qt&&Ru(k)===R.type){n(p,R.sibling),d=i(R,f.props),d.ref=Sr(p,R,f),d.return=p,p=d;break e}n(p,R);break}else t(p,R);R=R.sibling}f.type===bn?(d=yn(f.props.children,p.mode,y,f.key),d.return=p,p=d):(y=Yi(f.type,f.key,f.props,null,p.mode,y),y.ref=Sr(p,d,f),y.return=p,p=y)}return l(p);case Ln:e:{for(R=f.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(p,d.sibling),d=i(d,f.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=zl(f,p.mode,y),d.return=p,p=d}return l(p);case Qt:return R=f._init,j(p,d,R(f._payload),y)}if(Ir(f))return w(p,d,f,y);if(gr(f))return v(p,d,f,y);Ei(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,f),d.return=p,p=d):(n(p,d),d=Ol(f,p.mode,y),d.return=p,p=d),l(p)):n(p,d)}return j}var rr=Dd(!0),Wd=Dd(!1),lo=dn(null),ao=null,Qn=null,ds=null;function ps(){ds=Qn=ao=null}function fs(e){var t=lo.current;ne(lo),e._currentValue=t}function ha(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jn(e,t){ao=e,ds=Qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function pt(e){var t=e._currentValue;if(ds!==e)if(e={context:e,memoizedValue:t,next:null},Qn===null){if(ao===null)throw Error(E(308));Qn=e,ao.dependencies={lanes:0,firstContext:e}}else Qn=Qn.next=e;return t}var gn=null;function hs(e){gn===null?gn=[e]:gn.push(e)}function Gd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,hs(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ft(e,r)}function Ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Yt=!1;function ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ft(e,n)}return i=r.interleaved,i===null?(t.next=t,hs(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ft(e,n)}function Di(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,es(e,n)}}function Tu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function so(e,t,n,r){var i=e.updateQueue;Yt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=u))}if(o!==null){var h=i.baseState;l=0,m=c=u=null,s=o;do{var g=s.lane,S=s.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,v=s;switch(g=t,S=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){h=w.call(S,h,g);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,g=typeof w=="function"?w.call(S,h,g):w,g==null)break e;h=le({},h,g);break e;case 2:Yt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else S={eventTime:S,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=S,u=h):m=m.next=S,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(m===null&&(u=h),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Cn|=l,e.lanes=l,e.memoizedState=h}}function Ou(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var ci={},It=dn(ci),Zr=dn(ci),Jr=dn(ci);function vn(e){if(e===ci)throw Error(E(174));return e}function As(e,t){switch(ee(Jr,t),ee(Zr,e),ee(It,ci),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xl(t,e)}ne(It),ee(It,t)}function ir(){ne(It),ne(Zr),ne(Jr)}function Ud(e){vn(Jr.current);var t=vn(It.current),n=Xl(t,e.type);t!==n&&(ee(Zr,e),ee(It,n))}function gs(e){Zr.current===e&&(ne(It),ne(Zr))}var ie=dn(0);function uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Il=[];function vs(){for(var e=0;e<Il.length;e++)Il[e]._workInProgressVersionPrimary=null;Il.length=0}var Wi=Wt.ReactCurrentDispatcher,Pl=Wt.ReactCurrentBatchConfig,jn=0,oe=null,Ae=null,we=null,co=!1,Lr=!1,qr=0,vm=0;function Re(){throw Error(E(321))}function xs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function ys(e,t,n,r,i,o){if(jn=o,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wi.current=e===null||e.memoizedState===null?Sm:jm,e=n(r,i),Lr){o=0;do{if(Lr=!1,qr=0,25<=o)throw Error(E(301));o+=1,we=Ae=null,t.updateQueue=null,Wi.current=Cm,e=n(r,i)}while(Lr)}if(Wi.current=po,t=Ae!==null&&Ae.next!==null,jn=0,we=Ae=oe=null,co=!1,t)throw Error(E(300));return e}function ws(){var e=qr!==0;return qr=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?oe.memoizedState=we=e:we=we.next=e,we}function ft(){if(Ae===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=we===null?oe.memoizedState:we.next;if(t!==null)we=t,Ae=e;else{if(e===null)throw Error(E(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},we===null?oe.memoizedState=we=e:we=we.next=e}return we}function ei(e,t){return typeof t=="function"?t(e):t}function Nl(e){var t=ft(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,c=o;do{var m=c.lane;if((jn&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=h,l=r):u=u.next=h,oe.lanes|=m,Cn|=m}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=s,St(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,oe.lanes|=o,Cn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=ft(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);St(o,t.memoizedState)||(He=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Qd(){}function Yd(e,t){var n=oe,r=ft(),i=t(),o=!St(r.memoizedState,i);if(o&&(r.memoizedState=i,He=!0),r=r.queue,Ss(Xd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,ti(9,Hd.bind(null,n,r,i,t),void 0,null),Se===null)throw Error(E(349));jn&30||$d(n,t,i)}return i}function $d(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hd(e,t,n,r){t.value=n,t.getSnapshot=r,_d(t)&&Kd(e)}function Xd(e,t,n){return n(function(){_d(t)&&Kd(e)})}function _d(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function Kd(e){var t=Ft(e,1);t!==null&&wt(t,e,1,-1)}function zu(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:e},t.queue=e,e=e.dispatch=wm.bind(null,oe,e),[t.memoizedState,e]}function ti(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zd(){return ft().memoizedState}function Gi(e,t,n,r){var i=Ct();oe.flags|=e,i.memoizedState=ti(1|t,n,void 0,r===void 0?null:r)}function Ro(e,t,n,r){var i=ft();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var l=Ae.memoizedState;if(o=l.destroy,r!==null&&xs(r,l.deps)){i.memoizedState=ti(t,n,o,r);return}}oe.flags|=e,i.memoizedState=ti(1|t,n,o,r)}function Lu(e,t){return Gi(8390656,8,e,t)}function Ss(e,t){return Ro(2048,8,e,t)}function Jd(e,t){return Ro(4,2,e,t)}function qd(e,t){return Ro(4,4,e,t)}function ep(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tp(e,t,n){return n=n!=null?n.concat([e]):null,Ro(4,4,ep.bind(null,t,e),n)}function js(){}function np(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rp(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ip(e,t,n){return jn&21?(St(n,t)||(n=ud(),oe.lanes|=n,Cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n)}function xm(e,t){var n=Z;Z=n!==0&&4>n?n:4,e(!0);var r=Pl.transition;Pl.transition={};try{e(!1),t()}finally{Z=n,Pl.transition=r}}function op(){return ft().memoizedState}function ym(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lp(e))ap(t,n);else if(n=Gd(e,t,n,r),n!==null){var i=Me();wt(n,e,r,i),sp(n,t,r)}}function wm(e,t,n){var r=rn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lp(e))ap(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,St(s,l)){var u=t.interleaved;u===null?(i.next=i,hs(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Gd(e,t,i,r),n!==null&&(i=Me(),wt(n,e,r,i),sp(n,t,r))}}function lp(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function ap(e,t){Lr=co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,es(e,n)}}var po={readContext:pt,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},Sm={readContext:pt,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:Lu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Gi(4194308,4,ep.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gi(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ym.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:zu,useDebugValue:js,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=zu(!1),t=e[0];return e=xm.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,i=Ct();if(re){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),Se===null)throw Error(E(349));jn&30||$d(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Lu(Xd.bind(null,r,o,e),[e]),r.flags|=2048,ti(9,Hd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ct(),t=Se.identifierPrefix;if(re){var n=Ot,r=Tt;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jm={readContext:pt,useCallback:np,useContext:pt,useEffect:Ss,useImperativeHandle:tp,useInsertionEffect:Jd,useLayoutEffect:qd,useMemo:rp,useReducer:Nl,useRef:Zd,useState:function(){return Nl(ei)},useDebugValue:js,useDeferredValue:function(e){var t=ft();return ip(t,Ae.memoizedState,e)},useTransition:function(){var e=Nl(ei)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Qd,useSyncExternalStore:Yd,useId:op,unstable_isNewReconciler:!1},Cm={readContext:pt,useCallback:np,useContext:pt,useEffect:Ss,useImperativeHandle:tp,useInsertionEffect:Jd,useLayoutEffect:qd,useMemo:rp,useReducer:Bl,useRef:Zd,useState:function(){return Bl(ei)},useDebugValue:js,useDeferredValue:function(e){var t=ft();return Ae===null?t.memoizedState=e:ip(t,Ae.memoizedState,e)},useTransition:function(){var e=Bl(ei)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Qd,useSyncExternalStore:Yd,useId:op,unstable_isNewReconciler:!1};function gt(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ma(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var To={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),i=rn(e),o=Lt(r,i);o.payload=t,n!=null&&(o.callback=n),t=tn(e,o,i),t!==null&&(wt(t,e,i,r),Di(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),i=rn(e),o=Lt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=tn(e,o,i),t!==null&&(wt(t,e,i,r),Di(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=rn(e),i=Lt(n,r);i.tag=2,t!=null&&(i.callback=t),t=tn(e,i,r),t!==null&&(wt(t,e,r,n),Di(t,e,r))}};function bu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Hr(n,r)||!Hr(i,o):!0}function up(e,t,n){var r=!1,i=un,o=t.contextType;return typeof o=="object"&&o!==null?o=pt(o):(i=_e(t)?wn:ze.current,r=t.contextTypes,o=(r=r!=null)?tr(e,i):un),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=To,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Mu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&To.enqueueReplaceState(t,t.state,null)}function Aa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ms(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=pt(o):(o=_e(t)?wn:ze.current,i.context=tr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ma(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&To.enqueueReplaceState(i,i.state,null),so(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,t){try{var n="",r=t;do n+=Jf(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Rl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ga(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var km=typeof WeakMap=="function"?WeakMap:Map;function cp(e,t,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ho||(ho=!0,Ia=r),ga(e,t)},n}function dp(e,t,n){n=Lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ga(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ga(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Fu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new km;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Dm.bind(null,e,t,n),t.then(e,e))}function Du(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Lt(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e)}var Em=Wt.ReactCurrentOwner,He=!1;function be(e,t,n,r){t.child=e===null?Wd(t,null,n,r):rr(t,e.child,n,r)}function Gu(e,t,n,r,i){n=n.render;var o=t.ref;return Jn(t,i),r=ys(e,t,n,r,o,i),n=ws(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(re&&n&&ss(t),t.flags|=1,be(e,t,r,i),t.child)}function Vu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Rs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,pp(e,t,o,r,i)):(e=Yi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Hr,n(l,r)&&e.ref===t.ref)return Dt(e,t,i)}return t.flags|=1,e=on(o,r),e.ref=t.ref,e.return=t,t.child=e}function pp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Hr(o,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,Dt(e,t,i)}return va(e,t,n,r,i)}function fp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee($n,et),et|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee($n,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ee($n,et),et|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ee($n,et),et|=r;return be(e,t,i,n),t.child}function hp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function va(e,t,n,r,i){var o=_e(n)?wn:ze.current;return o=tr(t,o),Jn(t,i),n=ys(e,t,n,r,o,i),r=ws(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(re&&r&&ss(t),t.flags|=1,be(e,t,n,i),t.child)}function Uu(e,t,n,r,i){if(_e(n)){var o=!0;ro(t)}else o=!1;if(Jn(t,i),t.stateNode===null)Vi(e,t),up(t,n,r),Aa(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=pt(c):(c=_e(n)?wn:ze.current,c=tr(t,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Mu(t,l,r,c),Yt=!1;var g=t.memoizedState;l.state=g,so(t,r,l,i),u=t.memoizedState,s!==r||g!==u||Xe.current||Yt?(typeof m=="function"&&(ma(t,n,m,r),u=t.memoizedState),(s=Yt||bu(t,n,s,r,g,u,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Vd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:gt(t.type,s),l.props=c,h=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=pt(u):(u=_e(n)?wn:ze.current,u=tr(t,u));var S=n.getDerivedStateFromProps;(m=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||g!==u)&&Mu(t,l,r,u),Yt=!1,g=t.memoizedState,l.state=g,so(t,r,l,i);var w=t.memoizedState;s!==h||g!==w||Xe.current||Yt?(typeof S=="function"&&(ma(t,n,S,r),w=t.memoizedState),(c=Yt||bu(t,n,c,r,g,w,u)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return xa(e,t,n,r,o,i)}function xa(e,t,n,r,i,o){hp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Pu(t,n,!1),Dt(e,t,o);r=t.stateNode,Em.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=rr(t,e.child,null,o),t.child=rr(t,null,s,o)):be(e,t,s,o),t.memoizedState=r.state,i&&Pu(t,n,!0),t.child}function mp(e){var t=e.stateNode;t.pendingContext?Iu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Iu(e,t.context,!1),As(e,t.containerInfo)}function Qu(e,t,n,r,i){return nr(),cs(i),t.flags|=256,be(e,t,n,r),t.child}var ya={dehydrated:null,treeContext:null,retryLane:0};function wa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ap(e,t,n){var r=t.pendingProps,i=ie.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(ie,i&1),e===null)return fa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Lo(l,r,0,null),e=yn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=wa(n),t.memoizedState=ya,e):Cs(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Im(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=on(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=on(s,o):(o=yn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?wa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ya,r}return o=e.child,e=o.sibling,r=on(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cs(e,t){return t=Lo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ii(e,t,n,r){return r!==null&&cs(r),rr(t,e.child,null,n),e=Cs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Im(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Rl(Error(E(422))),Ii(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Lo({mode:"visible",children:r.children},i,0,null),o=yn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&rr(t,e.child,null,l),t.child.memoizedState=wa(l),t.memoizedState=ya,o);if(!(t.mode&1))return Ii(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(E(419)),r=Rl(o,r,void 0),Ii(e,t,l,r)}if(s=(l&e.childLanes)!==0,He||s){if(r=Se,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ft(e,i),wt(r,e,i,-1))}return Bs(),r=Rl(Error(E(421))),Ii(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Wm.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,tt=en(i.nextSibling),nt=t,re=!0,xt=null,e!==null&&(st[ut++]=Tt,st[ut++]=Ot,st[ut++]=Sn,Tt=e.id,Ot=e.overflow,Sn=t),t=Cs(t,r.children),t.flags|=4096,t)}function Yu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ha(e.return,t,n)}function Tl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function gp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(be(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yu(e,n,t);else if(e.tag===19)Yu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&uo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tl(t,!0,n,null,o);break;case"together":Tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=on(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=on(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pm(e,t,n){switch(t.tag){case 3:mp(t),nr();break;case 5:Ud(t);break;case 1:_e(t.type)&&ro(t);break;case 4:As(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(lo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?Ap(e,t,n):(ee(ie,ie.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);ee(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return gp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,fp(e,t,n)}return Dt(e,t,n)}var vp,Sa,xp,yp;vp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sa=function(){};xp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,vn(It.current);var o=null;switch(n){case"input":i=Ql(e,i),r=Ql(e,r),o=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),o=[];break;case"textarea":i=Hl(e,i),r=Hl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=to)}_l(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&te("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};yp=function(e,t,n,r){n!==r&&(t.flags|=4)};function jr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nm(e,t,n){var r=t.pendingProps;switch(us(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return _e(t.type)&&no(),Te(t),null;case 3:return r=t.stateNode,ir(),ne(Xe),ne(ze),vs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ki(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(Ba(xt),xt=null))),Sa(e,t),Te(t),null;case 5:gs(t);var i=vn(Jr.current);if(n=t.type,e!==null&&t.stateNode!=null)xp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return Te(t),null}if(e=vn(It.current),ki(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[kt]=t,r[Kr]=o,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Nr.length;i++)te(Nr[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":eu(r,o),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},te("invalid",r);break;case"textarea":nu(r,o),te("invalid",r)}_l(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Ci(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Ci(r.textContent,s,e),i=["children",""+s]):Wr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&te("scroll",r)}switch(n){case"input":Ai(r),tu(r,o,!0);break;case"textarea":Ai(r),ru(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=to)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[kt]=t,e[Kr]=r,vp(e,t,!1,!1),t.stateNode=e;e:{switch(l=Kl(n,r),n){case"dialog":te("cancel",e),te("close",e),i=r;break;case"iframe":case"object":case"embed":te("load",e),i=r;break;case"video":case"audio":for(i=0;i<Nr.length;i++)te(Nr[i],e);i=r;break;case"source":te("error",e),i=r;break;case"img":case"image":case"link":te("error",e),te("load",e),i=r;break;case"details":te("toggle",e),i=r;break;case"input":eu(e,r),i=Ql(e,r),te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),te("invalid",e);break;case"textarea":nu(e,r),i=Hl(e,r),te("invalid",e);break;default:i=r}_l(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Zc(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&_c(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Gr(e,u):typeof u=="number"&&Gr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Wr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&te("scroll",e):u!=null&&Xa(e,o,u,l))}switch(n){case"input":Ai(e),tu(e,r,!1);break;case"textarea":Ai(e),ru(e);break;case"option":r.value!=null&&e.setAttribute("value",""+sn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Xn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=to)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)yp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=vn(Jr.current),vn(It.current),ki(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(o=r.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:Ci(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ci(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return Te(t),null;case 13:if(ne(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&tt!==null&&t.mode&1&&!(t.flags&128))Fd(),nr(),t.flags|=98560,o=!1;else if(o=ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[kt]=t}else nr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),o=!1}else xt!==null&&(Ba(xt),xt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?ve===0&&(ve=3):Bs())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return ir(),Sa(e,t),e===null&&Xr(t.stateNode.containerInfo),Te(t),null;case 10:return fs(t.type._context),Te(t),null;case 17:return _e(t.type)&&no(),Te(t),null;case 19:if(ne(ie),o=t.memoizedState,o===null)return Te(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)jr(o,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=uo(e),l!==null){for(t.flags|=128,jr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(ie,ie.current&1|2),t.child}e=e.sibling}o.tail!==null&&de()>lr&&(t.flags|=128,r=!0,jr(o,!1),t.lanes=4194304)}else{if(!r)if(e=uo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!re)return Te(t),null}else 2*de()-o.renderingStartTime>lr&&n!==1073741824&&(t.flags|=128,r=!0,jr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=de(),t.sibling=null,n=ie.current,ee(ie,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return Ns(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?et&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Bm(e,t){switch(us(t),t.tag){case 1:return _e(t.type)&&no(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ir(),ne(Xe),ne(ze),vs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gs(t),null;case 13:if(ne(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(ie),null;case 4:return ir(),null;case 10:return fs(t.type._context),null;case 22:case 23:return Ns(),null;case 24:return null;default:return null}}var Pi=!1,Oe=!1,Rm=typeof WeakSet=="function"?WeakSet:Set,L=null;function Yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function ja(e,t,n){try{n()}catch(r){se(e,t,r)}}var $u=!1;function Tm(e,t){if(la=Ji,e=kd(),as(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,m=0,h=e,g=null;t:for(;;){for(var S;h!==n||i!==0&&h.nodeType!==3||(s=l+i),h!==o||r!==0&&h.nodeType!==3||(u=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(S=h.firstChild)!==null;)g=h,h=S;for(;;){if(h===e)break t;if(g===n&&++c===i&&(s=l),g===o&&++m===r&&(u=l),(S=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=S}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(aa={focusedElem:e,selectionRange:n},Ji=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,j=w.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:gt(t.type,v),j);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){se(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return w=$u,$u=!1,w}function br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ja(t,n,o)}i=i.next}while(i!==r)}}function Oo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ca(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wp(e){var t=e.alternate;t!==null&&(e.alternate=null,wp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[Kr],delete t[ca],delete t[hm],delete t[mm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sp(e){return e.tag===5||e.tag===3||e.tag===4}function Hu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=to));else if(r!==4&&(e=e.child,e!==null))for(ka(e,t,n),e=e.sibling;e!==null;)ka(e,t,n),e=e.sibling}function Ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ea(e,t,n),e=e.sibling;e!==null;)Ea(e,t,n),e=e.sibling}var Ie=null,vt=!1;function Vt(e,t,n){for(n=n.child;n!==null;)jp(e,t,n),n=n.sibling}function jp(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(ko,n)}catch{}switch(n.tag){case 5:Oe||Yn(n,t);case 6:var r=Ie,i=vt;Ie=null,Vt(e,t,n),Ie=r,vt=i,Ie!==null&&(vt?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(vt?(e=Ie,n=n.stateNode,e.nodeType===8?kl(e.parentNode,n):e.nodeType===1&&kl(e,n),Yr(e)):kl(Ie,n.stateNode));break;case 4:r=Ie,i=vt,Ie=n.stateNode.containerInfo,vt=!0,Vt(e,t,n),Ie=r,vt=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ja(n,t,l),i=i.next}while(i!==r)}Vt(e,t,n);break;case 1:if(!Oe&&(Yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){se(n,t,s)}Vt(e,t,n);break;case 21:Vt(e,t,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,Vt(e,t,n),Oe=r):Vt(e,t,n);break;default:Vt(e,t,n)}}function Xu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Rm),t.forEach(function(r){var i=Gm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function At(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Ie=s.stateNode,vt=!1;break e;case 3:Ie=s.stateNode.containerInfo,vt=!0;break e;case 4:Ie=s.stateNode.containerInfo,vt=!0;break e}s=s.return}if(Ie===null)throw Error(E(160));jp(o,l,i),Ie=null,vt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){se(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cp(t,e),t=t.sibling}function Cp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(At(t,e),jt(e),r&4){try{br(3,e,e.return),Oo(3,e)}catch(v){se(e,e.return,v)}try{br(5,e,e.return)}catch(v){se(e,e.return,v)}}break;case 1:At(t,e),jt(e),r&512&&n!==null&&Yn(n,n.return);break;case 5:if(At(t,e),jt(e),r&512&&n!==null&&Yn(n,n.return),e.flags&32){var i=e.stateNode;try{Gr(i,"")}catch(v){se(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&$c(i,o),Kl(s,l);var c=Kl(s,o);for(l=0;l<u.length;l+=2){var m=u[l],h=u[l+1];m==="style"?Zc(i,h):m==="dangerouslySetInnerHTML"?_c(i,h):m==="children"?Gr(i,h):Xa(i,m,h,c)}switch(s){case"input":Yl(i,o);break;case"textarea":Hc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?Xn(i,!!o.multiple,S,!1):g!==!!o.multiple&&(o.defaultValue!=null?Xn(i,!!o.multiple,o.defaultValue,!0):Xn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Kr]=o}catch(v){se(e,e.return,v)}}break;case 6:if(At(t,e),jt(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){se(e,e.return,v)}}break;case 3:if(At(t,e),jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(v){se(e,e.return,v)}break;case 4:At(t,e),jt(e);break;case 13:At(t,e),jt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Is=de())),r&4&&Xu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Oe=(c=Oe)||m,At(t,e),Oe=c):At(t,e),jt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(L=e,m=e.child;m!==null;){for(h=L=m;L!==null;){switch(g=L,S=g.child,g.tag){case 0:case 11:case 14:case 15:br(4,g,g.return);break;case 1:Yn(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){se(r,n,v)}}break;case 5:Yn(g,g.return);break;case 22:if(g.memoizedState!==null){Ku(h);continue}}S!==null?(S.return=g,L=S):Ku(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,u=h.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Kc("display",l))}catch(v){se(e,e.return,v)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){se(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:At(t,e),jt(e),r&4&&Xu(e);break;case 21:break;default:At(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sp(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Gr(i,""),r.flags&=-33);var o=Hu(e);Ea(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Hu(e);ka(e,s,l);break;default:throw Error(E(161))}}catch(u){se(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Om(e,t,n){L=e,kp(e)}function kp(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Pi;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||Oe;s=Pi;var c=Oe;if(Pi=l,(Oe=u)&&!c)for(L=i;L!==null;)l=L,u=l.child,l.tag===22&&l.memoizedState!==null?Zu(i):u!==null?(u.return=l,L=u):Zu(i);for(;o!==null;)L=o,kp(o),o=o.sibling;L=i,Pi=s,Oe=c}_u(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):_u(e)}}function _u(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Oe||Oo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:gt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ou(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ou(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Yr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Oe||t.flags&512&&Ca(t)}catch(g){se(t,t.return,g)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Ku(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Zu(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Oo(4,t)}catch(u){se(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){se(t,i,u)}}var o=t.return;try{Ca(t)}catch(u){se(t,o,u)}break;case 5:var l=t.return;try{Ca(t)}catch(u){se(t,l,u)}}}catch(u){se(t,t.return,u)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var zm=Math.ceil,fo=Wt.ReactCurrentDispatcher,ks=Wt.ReactCurrentOwner,dt=Wt.ReactCurrentBatchConfig,Y=0,Se=null,fe=null,Pe=0,et=0,$n=dn(0),ve=0,ni=null,Cn=0,zo=0,Es=0,Mr=null,$e=null,Is=0,lr=1/0,Bt=null,ho=!1,Ia=null,nn=null,Ni=!1,_t=null,mo=0,Fr=0,Pa=null,Ui=-1,Qi=0;function Me(){return Y&6?de():Ui!==-1?Ui:Ui=de()}function rn(e){return e.mode&1?Y&2&&Pe!==0?Pe&-Pe:gm.transition!==null?(Qi===0&&(Qi=ud()),Qi):(e=Z,e!==0||(e=window.event,e=e===void 0?16:Ad(e.type)),e):1}function wt(e,t,n,r){if(50<Fr)throw Fr=0,Pa=null,Error(E(185));ai(e,n,r),(!(Y&2)||e!==Se)&&(e===Se&&(!(Y&2)&&(zo|=n),ve===4&&Ht(e,Pe)),Ke(e,r),n===1&&Y===0&&!(t.mode&1)&&(lr=de()+500,Bo&&pn()))}function Ke(e,t){var n=e.callbackNode;gh(e,t);var r=Zi(e,e===Se?Pe:0);if(r===0)n!==null&&lu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&lu(n),t===1)e.tag===0?Am(Ju.bind(null,e)):Ld(Ju.bind(null,e)),pm(function(){!(Y&6)&&pn()}),n=null;else{switch(cd(r)){case 1:n=qa;break;case 4:n=ad;break;case 16:n=Ki;break;case 536870912:n=sd;break;default:n=Ki}n=Op(n,Ep.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ep(e,t){if(Ui=-1,Qi=0,Y&6)throw Error(E(327));var n=e.callbackNode;if(qn()&&e.callbackNode!==n)return null;var r=Zi(e,e===Se?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ao(e,r);else{t=r;var i=Y;Y|=2;var o=Pp();(Se!==e||Pe!==t)&&(Bt=null,lr=de()+500,xn(e,t));do try{Mm();break}catch(s){Ip(e,s)}while(1);ps(),fo.current=o,Y=i,fe!==null?t=0:(Se=null,Pe=0,t=ve)}if(t!==0){if(t===2&&(i=ta(e),i!==0&&(r=i,t=Na(e,i))),t===1)throw n=ni,xn(e,0),Ht(e,r),Ke(e,de()),n;if(t===6)Ht(e,r);else{if(i=e.current.alternate,!(r&30)&&!Lm(i)&&(t=Ao(e,r),t===2&&(o=ta(e),o!==0&&(r=o,t=Na(e,o))),t===1))throw n=ni,xn(e,0),Ht(e,r),Ke(e,de()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:mn(e,$e,Bt);break;case 3:if(Ht(e,r),(r&130023424)===r&&(t=Is+500-de(),10<t)){if(Zi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ua(mn.bind(null,e,$e,Bt),t);break}mn(e,$e,Bt);break;case 4:if(Ht(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-yt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zm(r/1960))-r,10<r){e.timeoutHandle=ua(mn.bind(null,e,$e,Bt),r);break}mn(e,$e,Bt);break;case 5:mn(e,$e,Bt);break;default:throw Error(E(329))}}}return Ke(e,de()),e.callbackNode===n?Ep.bind(null,e):null}function Na(e,t){var n=Mr;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=Ao(e,t),e!==2&&(t=$e,$e=n,t!==null&&Ba(t)),e}function Ba(e){$e===null?$e=e:$e.push.apply($e,e)}function Lm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!St(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ht(e,t){for(t&=~Es,t&=~zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),r=1<<n;e[n]=-1,t&=~r}}function Ju(e){if(Y&6)throw Error(E(327));qn();var t=Zi(e,0);if(!(t&1))return Ke(e,de()),null;var n=Ao(e,t);if(e.tag!==0&&n===2){var r=ta(e);r!==0&&(t=r,n=Na(e,r))}if(n===1)throw n=ni,xn(e,0),Ht(e,t),Ke(e,de()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mn(e,$e,Bt),Ke(e,de()),null}function Ps(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(lr=de()+500,Bo&&pn())}}function kn(e){_t!==null&&_t.tag===0&&!(Y&6)&&qn();var t=Y;Y|=1;var n=dt.transition,r=Z;try{if(dt.transition=null,Z=1,e)return e()}finally{Z=r,dt.transition=n,Y=t,!(Y&6)&&pn()}}function Ns(){et=$n.current,ne($n)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,dm(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(us(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&no();break;case 3:ir(),ne(Xe),ne(ze),vs();break;case 5:gs(r);break;case 4:ir();break;case 13:ne(ie);break;case 19:ne(ie);break;case 10:fs(r.type._context);break;case 22:case 23:Ns()}n=n.return}if(Se=e,fe=e=on(e.current,null),Pe=et=t,ve=0,ni=null,Es=zo=Cn=0,$e=Mr=null,gn!==null){for(t=0;t<gn.length;t++)if(n=gn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}gn=null}return e}function Ip(e,t){do{var n=fe;try{if(ps(),Wi.current=po,co){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}co=!1}if(jn=0,we=Ae=oe=null,Lr=!1,qr=0,ks.current=null,n===null||n.return===null){ve=1,ni=t,fe=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=Pe,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=s,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var S=Du(l);if(S!==null){S.flags&=-257,Wu(S,l,s,o,t),S.mode&1&&Fu(o,c,t),t=S,u=c;var w=t.updateQueue;if(w===null){var v=new Set;v.add(u),t.updateQueue=v}else w.add(u);break e}else{if(!(t&1)){Fu(o,c,t),Bs();break e}u=Error(E(426))}}else if(re&&s.mode&1){var j=Du(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Wu(j,l,s,o,t),cs(or(u,s));break e}}o=u=or(u,s),ve!==4&&(ve=2),Mr===null?Mr=[o]:Mr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=cp(o,u,t);Tu(o,p);break e;case 1:s=u;var d=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(nn===null||!nn.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=dp(o,s,t);Tu(o,y);break e}}o=o.return}while(o!==null)}Bp(n)}catch(k){t=k,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function Pp(){var e=fo.current;return fo.current=po,e===null?po:e}function Bs(){(ve===0||ve===3||ve===2)&&(ve=4),Se===null||!(Cn&268435455)&&!(zo&268435455)||Ht(Se,Pe)}function Ao(e,t){var n=Y;Y|=2;var r=Pp();(Se!==e||Pe!==t)&&(Bt=null,xn(e,t));do try{bm();break}catch(i){Ip(e,i)}while(1);if(ps(),Y=n,fo.current=r,fe!==null)throw Error(E(261));return Se=null,Pe=0,ve}function bm(){for(;fe!==null;)Np(fe)}function Mm(){for(;fe!==null&&!sh();)Np(fe)}function Np(e){var t=Tp(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?Bp(e):fe=t,ks.current=null}function Bp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Bm(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,fe=null;return}}else if(n=Nm(n,t,et),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);ve===0&&(ve=5)}function mn(e,t,n){var r=Z,i=dt.transition;try{dt.transition=null,Z=1,Fm(e,t,n,r)}finally{dt.transition=i,Z=r}return null}function Fm(e,t,n,r){do qn();while(_t!==null);if(Y&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(vh(e,o),e===Se&&(fe=Se=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ni||(Ni=!0,Op(Ki,function(){return qn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=dt.transition,dt.transition=null;var l=Z;Z=1;var s=Y;Y|=4,ks.current=null,Tm(e,n),Cp(n,e),im(aa),Ji=!!la,aa=la=null,e.current=n,Om(n),uh(),Y=s,Z=l,dt.transition=o}else e.current=n;if(Ni&&(Ni=!1,_t=e,mo=i),o=e.pendingLanes,o===0&&(nn=null),ph(n.stateNode),Ke(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ho)throw ho=!1,e=Ia,Ia=null,e;return mo&1&&e.tag!==0&&qn(),o=e.pendingLanes,o&1?e===Pa?Fr++:(Fr=0,Pa=e):Fr=0,pn(),null}function qn(){if(_t!==null){var e=cd(mo),t=dt.transition,n=Z;try{if(dt.transition=null,Z=16>e?16:e,_t===null)var r=!1;else{if(e=_t,_t=null,mo=0,Y&6)throw Error(E(331));var i=Y;for(Y|=4,L=e.current;L!==null;){var o=L,l=o.child;if(L.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(L=c;L!==null;){var m=L;switch(m.tag){case 0:case 11:case 15:br(8,m,o)}var h=m.child;if(h!==null)h.return=m,L=h;else for(;L!==null;){m=L;var g=m.sibling,S=m.return;if(wp(m),m===c){L=null;break}if(g!==null){g.return=S,L=g;break}L=S}}}var w=o.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var j=v.sibling;v.sibling=null,v=j}while(v!==null)}}L=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,L=l;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:br(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,L=p;break e}L=o.return}}var d=e.current;for(L=d;L!==null;){l=L;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,L=f;else e:for(l=d;L!==null;){if(s=L,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Oo(9,s)}}catch(k){se(s,s.return,k)}if(s===l){L=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,L=y;break e}L=s.return}}if(Y=i,pn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(ko,e)}catch{}r=!0}return r}finally{Z=n,dt.transition=t}}return!1}function qu(e,t,n){t=or(n,t),t=cp(e,t,1),e=tn(e,t,1),t=Me(),e!==null&&(ai(e,1,t),Ke(e,t))}function se(e,t,n){if(e.tag===3)qu(e,e,n);else for(;t!==null;){if(t.tag===3){qu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=or(n,e),e=dp(t,e,1),t=tn(t,e,1),e=Me(),t!==null&&(ai(t,1,e),Ke(t,e));break}}t=t.return}}function Dm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(Pe&n)===n&&(ve===4||ve===3&&(Pe&130023424)===Pe&&500>de()-Is?xn(e,0):Es|=n),Ke(e,t)}function Rp(e,t){t===0&&(e.mode&1?(t=xi,xi<<=1,!(xi&130023424)&&(xi=4194304)):t=1);var n=Me();e=Ft(e,t),e!==null&&(ai(e,t,n),Ke(e,n))}function Wm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rp(e,n)}function Gm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Rp(e,n)}var Tp;Tp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)He=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return He=!1,Pm(e,t,n);He=!!(e.flags&131072)}else He=!1,re&&t.flags&1048576&&bd(t,oo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vi(e,t),e=t.pendingProps;var i=tr(t,ze.current);Jn(t,n),i=ys(null,t,r,e,i,n);var o=ws();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(o=!0,ro(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ms(t),i.updater=To,t.stateNode=i,i._reactInternals=t,Aa(t,r,e,n),t=xa(null,t,r,!0,o,n)):(t.tag=0,re&&o&&ss(t),be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Um(r),e=gt(r,e),i){case 0:t=va(null,t,r,e,n);break e;case 1:t=Uu(null,t,r,e,n);break e;case 11:t=Gu(null,t,r,e,n);break e;case 14:t=Vu(null,t,r,gt(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),va(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),Uu(e,t,r,i,n);case 3:e:{if(mp(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Vd(e,t),so(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=or(Error(E(423)),t),t=Qu(e,t,r,n,i);break e}else if(r!==i){i=or(Error(E(424)),t),t=Qu(e,t,r,n,i);break e}else for(tt=en(t.stateNode.containerInfo.firstChild),nt=t,re=!0,xt=null,n=Wd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nr(),r===i){t=Dt(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return Ud(t),e===null&&fa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,sa(r,i)?l=null:o!==null&&sa(r,o)&&(t.flags|=32),hp(e,t),be(e,t,l,n),t.child;case 6:return e===null&&fa(t),null;case 13:return Ap(e,t,n);case 4:return As(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rr(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),Gu(e,t,r,i,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ee(lo,r._currentValue),r._currentValue=l,o!==null)if(St(o.value,l)){if(o.children===i.children&&!Xe.current){t=Dt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Lt(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),ha(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(E(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ha(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Jn(t,n),i=pt(i),r=r(i),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,i=gt(r,t.pendingProps),i=gt(r.type,i),Vu(e,t,r,i,n);case 15:return pp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),Vi(e,t),t.tag=1,_e(r)?(e=!0,ro(t)):e=!1,Jn(t,n),up(t,r,i),Aa(t,r,i,n),xa(null,t,r,!0,e,n);case 19:return gp(e,t,n);case 22:return fp(e,t,n)}throw Error(E(156,t.tag))};function Op(e,t){return ld(e,t)}function Vm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,r){return new Vm(e,t,n,r)}function Rs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Um(e){if(typeof e=="function")return Rs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ka)return 11;if(e===Za)return 14}return 2}function on(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Rs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case bn:return yn(n.children,i,o,t);case _a:l=8,i|=8;break;case Wl:return e=ct(12,n,t,i|2),e.elementType=Wl,e.lanes=o,e;case Gl:return e=ct(13,n,t,i),e.elementType=Gl,e.lanes=o,e;case Vl:return e=ct(19,n,t,i),e.elementType=Vl,e.lanes=o,e;case Uc:return Lo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gc:l=10;break e;case Vc:l=9;break e;case Ka:l=11;break e;case Za:l=14;break e;case Qt:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=ct(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function yn(e,t,n,r){return e=ct(7,e,r,t),e.lanes=n,e}function Lo(e,t,n,r){return e=ct(22,e,r,t),e.elementType=Uc,e.lanes=n,e.stateNode={isHidden:!1},e}function Ol(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function zl(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hl(0),this.expirationTimes=hl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ts(e,t,n,r,i,o,l,s,u){return e=new Qm(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ct(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ms(o),e}function Ym(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ln,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zp(e){if(!e)return un;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(_e(n))return zd(e,n,t)}return t}function Lp(e,t,n,r,i,o,l,s,u){return e=Ts(n,r,!0,e,i,o,l,s,u),e.context=zp(null),n=e.current,r=Me(),i=rn(n),o=Lt(r,i),o.callback=t??null,tn(n,o,i),e.current.lanes=i,ai(e,i,r),Ke(e,r),e}function bo(e,t,n,r){var i=t.current,o=Me(),l=rn(i);return n=zp(n),t.context===null?t.context=n:t.pendingContext=n,t=Lt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(i,t,l),e!==null&&(wt(e,i,l,o),Di(e,i,l)),l}function go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ec(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Os(e,t){ec(e,t),(e=e.alternate)&&ec(e,t)}function $m(){return null}var bp=typeof reportError=="function"?reportError:function(e){console.error(e)};function zs(e){this._internalRoot=e}Mo.prototype.render=zs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));bo(e,t,null,null)};Mo.prototype.unmount=zs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kn(function(){bo(null,e,null,null)}),t[Mt]=null}};function Mo(e){this._internalRoot=e}Mo.prototype.unstable_scheduleHydration=function(e){if(e){var t=fd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&t!==0&&t<$t[n].priority;n++);$t.splice(n,0,e),n===0&&md(e)}};function Ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tc(){}function Hm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=go(l);o.call(c)}}var l=Lp(t,r,e,0,null,!1,!1,"",tc);return e._reactRootContainer=l,e[Mt]=l.current,Xr(e.nodeType===8?e.parentNode:e),kn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=go(u);s.call(c)}}var u=Ts(e,0,!1,null,null,!1,!1,"",tc);return e._reactRootContainer=u,e[Mt]=u.current,Xr(e.nodeType===8?e.parentNode:e),kn(function(){bo(t,u,n,r)}),u}function Do(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=go(l);s.call(u)}}bo(t,l,e,i)}else l=Hm(n,t,e,i,r);return go(l)}dd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pr(t.pendingLanes);n!==0&&(es(t,n|1),Ke(t,de()),!(Y&6)&&(lr=de()+500,pn()))}break;case 13:kn(function(){var r=Ft(e,1);if(r!==null){var i=Me();wt(r,e,1,i)}}),Os(e,1)}};ts=function(e){if(e.tag===13){var t=Ft(e,134217728);if(t!==null){var n=Me();wt(t,e,134217728,n)}Os(e,134217728)}};pd=function(e){if(e.tag===13){var t=rn(e),n=Ft(e,t);if(n!==null){var r=Me();wt(n,e,t,r)}Os(e,t)}};fd=function(){return Z};hd=function(e,t){var n=Z;try{return Z=e,t()}finally{Z=n}};Jl=function(e,t,n){switch(t){case"input":if(Yl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=No(r);if(!i)throw Error(E(90));Yc(r),Yl(r,i)}}}break;case"textarea":Hc(e,n);break;case"select":t=n.value,t!=null&&Xn(e,!!n.multiple,t,!1)}};ed=Ps;td=kn;var Xm={usingClientEntryPoint:!1,Events:[ui,Wn,No,Jc,qc,Ps]},Cr={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_m={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=id(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||$m,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bi.isDisabled&&Bi.supportsFiber)try{ko=Bi.inject(_m),Et=Bi}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xm;it.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ls(t))throw Error(E(200));return Ym(e,t,null,n)};it.createRoot=function(e,t){if(!Ls(e))throw Error(E(299));var n=!1,r="",i=bp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ts(e,1,!1,null,null,n,!1,r,i),e[Mt]=t.current,Xr(e.nodeType===8?e.parentNode:e),new zs(t)};it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=id(t),e=e===null?null:e.stateNode,e};it.flushSync=function(e){return kn(e)};it.hydrate=function(e,t,n){if(!Fo(t))throw Error(E(200));return Do(null,e,t,!0,n)};it.hydrateRoot=function(e,t,n){if(!Ls(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=bp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Lp(t,null,e,1,n??null,i,!1,o,l),e[Mt]=t.current,Xr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Mo(t)};it.render=function(e,t,n){if(!Fo(t))throw Error(E(200));return Do(null,e,t,!1,n)};it.unmountComponentAtNode=function(e){if(!Fo(e))throw Error(E(40));return e._reactRootContainer?(kn(function(){Do(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};it.unstable_batchedUpdates=Ps;it.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fo(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Do(e,t,n,!1,r)};it.version="18.3.1-next-f1338f8080-20240426";function Mp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mp)}catch(e){console.error(e)}}Mp(),Mc.exports=it;var Km=Mc.exports,nc=Km;Fl.createRoot=nc.createRoot,Fl.hydrateRoot=nc.hydrateRoot;var Fp={exports:{}},J={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bs=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Wo=Symbol.for("react.fragment"),Go=Symbol.for("react.strict_mode"),Vo=Symbol.for("react.profiler"),Uo=Symbol.for("react.provider"),Qo=Symbol.for("react.context"),Zm=Symbol.for("react.server_context"),Yo=Symbol.for("react.forward_ref"),$o=Symbol.for("react.suspense"),Ho=Symbol.for("react.suspense_list"),Xo=Symbol.for("react.memo"),_o=Symbol.for("react.lazy"),Jm=Symbol.for("react.offscreen"),Dp;Dp=Symbol.for("react.module.reference");function ht(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case bs:switch(e=e.type,e){case Wo:case Vo:case Go:case $o:case Ho:return e;default:switch(e=e&&e.$$typeof,e){case Zm:case Qo:case Yo:case _o:case Xo:case Uo:return e;default:return t}}case Ms:return t}}}J.ContextConsumer=Qo;J.ContextProvider=Uo;J.Element=bs;J.ForwardRef=Yo;J.Fragment=Wo;J.Lazy=_o;J.Memo=Xo;J.Portal=Ms;J.Profiler=Vo;J.StrictMode=Go;J.Suspense=$o;J.SuspenseList=Ho;J.isAsyncMode=function(){return!1};J.isConcurrentMode=function(){return!1};J.isContextConsumer=function(e){return ht(e)===Qo};J.isContextProvider=function(e){return ht(e)===Uo};J.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===bs};J.isForwardRef=function(e){return ht(e)===Yo};J.isFragment=function(e){return ht(e)===Wo};J.isLazy=function(e){return ht(e)===_o};J.isMemo=function(e){return ht(e)===Xo};J.isPortal=function(e){return ht(e)===Ms};J.isProfiler=function(e){return ht(e)===Vo};J.isStrictMode=function(e){return ht(e)===Go};J.isSuspense=function(e){return ht(e)===$o};J.isSuspenseList=function(e){return ht(e)===Ho};J.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Wo||e===Vo||e===Go||e===$o||e===Ho||e===Jm||typeof e=="object"&&e!==null&&(e.$$typeof===_o||e.$$typeof===Xo||e.$$typeof===Uo||e.$$typeof===Qo||e.$$typeof===Yo||e.$$typeof===Dp||e.getModuleId!==void 0)};J.typeOf=ht;Fp.exports=J;var Wp=Fp.exports;function qm(e){function t(P,B,z,D,x){for(var Q=0,N=0,ae=0,X=0,K,G,Ce=0,We=0,$,Be=$=K=0,_=0,ke=0,mr=0,Ee=0,fi=z.length,Ar=fi-1,mt,W="",ce="",al="",sl="",Gt;_<fi;){if(G=z.charCodeAt(_),_===Ar&&N+X+ae+Q!==0&&(N!==0&&(G=N===47?10:47),X=ae=Q=0,fi++,Ar++),N+X+ae+Q===0){if(_===Ar&&(0<ke&&(W=W.replace(g,"")),0<W.trim().length)){switch(G){case 32:case 9:case 59:case 13:case 10:break;default:W+=z.charAt(_)}G=59}switch(G){case 123:for(W=W.trim(),K=W.charCodeAt(0),$=1,Ee=++_;_<fi;){switch(G=z.charCodeAt(_)){case 123:$++;break;case 125:$--;break;case 47:switch(G=z.charCodeAt(_+1)){case 42:case 47:e:{for(Be=_+1;Be<Ar;++Be)switch(z.charCodeAt(Be)){case 47:if(G===42&&z.charCodeAt(Be-1)===42&&_+2!==Be){_=Be+1;break e}break;case 10:if(G===47){_=Be+1;break e}}_=Be}}break;case 91:G++;case 40:G++;case 34:case 39:for(;_++<Ar&&z.charCodeAt(_)!==G;);}if($===0)break;_++}switch($=z.substring(Ee,_),K===0&&(K=(W=W.replace(h,"").trim()).charCodeAt(0)),K){case 64:switch(0<ke&&(W=W.replace(g,"")),G=W.charCodeAt(1),G){case 100:case 109:case 115:case 45:ke=B;break;default:ke=at}if($=t(B,ke,$,G,x+1),Ee=$.length,0<I&&(ke=n(at,W,mr),Gt=s(3,$,ke,B,me,ue,Ee,G,x,D),W=ke.join(""),Gt!==void 0&&(Ee=($=Gt.trim()).length)===0&&(G=0,$="")),0<Ee)switch(G){case 115:W=W.replace(R,l);case 100:case 109:case 45:$=W+"{"+$+"}";break;case 107:W=W.replace(d,"$1 $2"),$=W+"{"+$+"}",$=xe===1||xe===2&&o("@"+$,3)?"@-webkit-"+$+"@"+$:"@"+$;break;default:$=W+$,D===112&&($=(ce+=$,""))}else $="";break;default:$=t(B,n(B,W,mr),$,D,x+1)}al+=$,$=mr=ke=Be=K=0,W="",G=z.charCodeAt(++_);break;case 125:case 59:if(W=(0<ke?W.replace(g,""):W).trim(),1<(Ee=W.length))switch(Be===0&&(K=W.charCodeAt(0),K===45||96<K&&123>K)&&(Ee=(W=W.replace(" ",":")).length),0<I&&(Gt=s(1,W,B,P,me,ue,ce.length,D,x,D))!==void 0&&(Ee=(W=Gt.trim()).length)===0&&(W="\0\0"),K=W.charCodeAt(0),G=W.charCodeAt(1),K){case 0:break;case 64:if(G===105||G===99){sl+=W+z.charAt(_);break}default:W.charCodeAt(Ee-1)!==58&&(ce+=i(W,K,G,W.charCodeAt(2)))}mr=ke=Be=K=0,W="",G=z.charCodeAt(++_)}}switch(G){case 13:case 10:N===47?N=0:1+K===0&&D!==107&&0<W.length&&(ke=1,W+="\0"),0<I*F&&s(0,W,B,P,me,ue,ce.length,D,x,D),ue=1,me++;break;case 59:case 125:if(N+X+ae+Q===0){ue++;break}default:switch(ue++,mt=z.charAt(_),G){case 9:case 32:if(X+Q+N===0)switch(Ce){case 44:case 58:case 9:case 32:mt="";break;default:G!==32&&(mt=" ")}break;case 0:mt="\\0";break;case 12:mt="\\f";break;case 11:mt="\\v";break;case 38:X+N+Q===0&&(ke=mr=1,mt="\f"+mt);break;case 108:if(X+N+Q+Le===0&&0<Be)switch(_-Be){case 2:Ce===112&&z.charCodeAt(_-3)===58&&(Le=Ce);case 8:We===111&&(Le=We)}break;case 58:X+N+Q===0&&(Be=_);break;case 44:N+ae+X+Q===0&&(ke=1,mt+="\r");break;case 34:case 39:N===0&&(X=X===G?0:X===0?G:X);break;case 91:X+N+ae===0&&Q++;break;case 93:X+N+ae===0&&Q--;break;case 41:X+N+Q===0&&ae--;break;case 40:if(X+N+Q===0){if(K===0)switch(2*Ce+3*We){case 533:break;default:K=1}ae++}break;case 64:N+ae+X+Q+Be+$===0&&($=1);break;case 42:case 47:if(!(0<X+Q+ae))switch(N){case 0:switch(2*G+3*z.charCodeAt(_+1)){case 235:N=47;break;case 220:Ee=_,N=42}break;case 42:G===47&&Ce===42&&Ee+2!==_&&(z.charCodeAt(Ee+2)===33&&(ce+=z.substring(Ee,_+1)),mt="",N=0)}}N===0&&(W+=mt)}We=Ce,Ce=G,_++}if(Ee=ce.length,0<Ee){if(ke=B,0<I&&(Gt=s(2,ce,ke,P,me,ue,Ee,D,x,D),Gt!==void 0&&(ce=Gt).length===0))return sl+ce+al;if(ce=ke.join(",")+"{"+ce+"}",xe*Le!==0){switch(xe!==2||o(ce,2)||(Le=0),Le){case 111:ce=ce.replace(y,":-moz-$1")+ce;break;case 112:ce=ce.replace(f,"::-webkit-input-$1")+ce.replace(f,"::-moz-$1")+ce.replace(f,":-ms-input-$1")+ce}Le=0}}return sl+ce+al}function n(P,B,z){var D=B.trim().split(j);B=D;var x=D.length,Q=P.length;switch(Q){case 0:case 1:var N=0;for(P=Q===0?"":P[0]+" ";N<x;++N)B[N]=r(P,B[N],z).trim();break;default:var ae=N=0;for(B=[];N<x;++N)for(var X=0;X<Q;++X)B[ae++]=r(P[X]+" ",D[N],z).trim()}return B}function r(P,B,z){var D=B.charCodeAt(0);switch(33>D&&(D=(B=B.trim()).charCodeAt(0)),D){case 38:return B.replace(p,"$1"+P.trim());case 58:return P.trim()+B.replace(p,"$1"+P.trim());default:if(0<1*z&&0<B.indexOf("\f"))return B.replace(p,(P.charCodeAt(0)===58?"":"$1")+P.trim())}return P+B}function i(P,B,z,D){var x=P+";",Q=2*B+3*z+4*D;if(Q===944){P=x.indexOf(":",9)+1;var N=x.substring(P,x.length-1).trim();return N=x.substring(0,P).trim()+N+";",xe===1||xe===2&&o(N,1)?"-webkit-"+N+N:N}if(xe===0||xe===2&&!o(x,1))return x;switch(Q){case 1015:return x.charCodeAt(10)===97?"-webkit-"+x+x:x;case 951:return x.charCodeAt(3)===116?"-webkit-"+x+x:x;case 963:return x.charCodeAt(5)===110?"-webkit-"+x+x:x;case 1009:if(x.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+x+x;case 978:return"-webkit-"+x+"-moz-"+x+x;case 1019:case 983:return"-webkit-"+x+"-moz-"+x+"-ms-"+x+x;case 883:if(x.charCodeAt(8)===45)return"-webkit-"+x+x;if(0<x.indexOf("image-set(",11))return x.replace(pe,"$1-webkit-$2")+x;break;case 932:if(x.charCodeAt(4)===45)switch(x.charCodeAt(5)){case 103:return"-webkit-box-"+x.replace("-grow","")+"-webkit-"+x+"-ms-"+x.replace("grow","positive")+x;case 115:return"-webkit-"+x+"-ms-"+x.replace("shrink","negative")+x;case 98:return"-webkit-"+x+"-ms-"+x.replace("basis","preferred-size")+x}return"-webkit-"+x+"-ms-"+x+x;case 964:return"-webkit-"+x+"-ms-flex-"+x+x;case 1023:if(x.charCodeAt(8)!==99)break;return N=x.substring(x.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+N+"-webkit-"+x+"-ms-flex-pack"+N+x;case 1005:return w.test(x)?x.replace(S,":-webkit-")+x.replace(S,":-moz-")+x:x;case 1e3:switch(N=x.substring(13).trim(),B=N.indexOf("-")+1,N.charCodeAt(0)+N.charCodeAt(B)){case 226:N=x.replace(k,"tb");break;case 232:N=x.replace(k,"tb-rl");break;case 220:N=x.replace(k,"lr");break;default:return x}return"-webkit-"+x+"-ms-"+N+x;case 1017:if(x.indexOf("sticky",9)===-1)break;case 975:switch(B=(x=P).length-10,N=(x.charCodeAt(B)===33?x.substring(0,B):x).substring(P.indexOf(":",7)+1).trim(),Q=N.charCodeAt(0)+(N.charCodeAt(7)|0)){case 203:if(111>N.charCodeAt(8))break;case 115:x=x.replace(N,"-webkit-"+N)+";"+x;break;case 207:case 102:x=x.replace(N,"-webkit-"+(102<Q?"inline-":"")+"box")+";"+x.replace(N,"-webkit-"+N)+";"+x.replace(N,"-ms-"+N+"box")+";"+x}return x+";";case 938:if(x.charCodeAt(5)===45)switch(x.charCodeAt(6)){case 105:return N=x.replace("-items",""),"-webkit-"+x+"-webkit-box-"+N+"-ms-flex-"+N+x;case 115:return"-webkit-"+x+"-ms-flex-item-"+x.replace(O,"")+x;default:return"-webkit-"+x+"-ms-flex-line-pack"+x.replace("align-content","").replace(O,"")+x}break;case 973:case 989:if(x.charCodeAt(3)!==45||x.charCodeAt(4)===122)break;case 931:case 953:if(M.test(P)===!0)return(N=P.substring(P.indexOf(":")+1)).charCodeAt(0)===115?i(P.replace("stretch","fill-available"),B,z,D).replace(":fill-available",":stretch"):x.replace(N,"-webkit-"+N)+x.replace(N,"-moz-"+N.replace("fill-",""))+x;break;case 962:if(x="-webkit-"+x+(x.charCodeAt(5)===102?"-ms-"+x:"")+x,z+D===211&&x.charCodeAt(13)===105&&0<x.indexOf("transform",10))return x.substring(0,x.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+x}return x}function o(P,B){var z=P.indexOf(B===1?":":"{"),D=P.substring(0,B!==3?z:10);return z=P.substring(z+1,P.length-1),b(B!==2?D:D.replace(U,"$1"),z,B)}function l(P,B){var z=i(B,B.charCodeAt(0),B.charCodeAt(1),B.charCodeAt(2));return z!==B+";"?z.replace(T," or ($1)").substring(4):"("+B+")"}function s(P,B,z,D,x,Q,N,ae,X,K){for(var G=0,Ce=B,We;G<I;++G)switch(We=ye[G].call(m,P,Ce,z,D,x,Q,N,ae,X,K)){case void 0:case!1:case!0:case null:break;default:Ce=We}if(Ce!==B)return Ce}function u(P){switch(P){case void 0:case null:I=ye.length=0;break;default:if(typeof P=="function")ye[I++]=P;else if(typeof P=="object")for(var B=0,z=P.length;B<z;++B)u(P[B]);else F=!!P|0}return u}function c(P){return P=P.prefix,P!==void 0&&(b=null,P?typeof P!="function"?xe=1:(xe=2,b=P):xe=0),c}function m(P,B){var z=P;if(33>z.charCodeAt(0)&&(z=z.trim()),H=z,z=[H],0<I){var D=s(-1,B,z,z,me,ue,0,0,0,0);D!==void 0&&typeof D=="string"&&(B=D)}var x=t(at,z,B,0,0);return 0<I&&(D=s(-2,x,z,z,me,ue,x.length,0,0,0),D!==void 0&&(x=D)),H="",Le=0,ue=me=1,x}var h=/^\0+/g,g=/[\0\r\f]/g,S=/: */g,w=/zoo|gra/,v=/([,: ])(transform)/g,j=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,f=/::(place)/g,y=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,T=/([\s\S]*?);/g,O=/-self|flex-/g,U=/[^]*?(:[rp][el]a[\w-]+)[^]*/,M=/stretch|:\s*\w+\-(?:conte|avail)/,pe=/([^-])(image-set\()/,ue=1,me=1,Le=0,xe=1,at=[],ye=[],I=0,b=null,F=0,H="";return m.use=u,m.set=c,e!==void 0&&c(e),m}var eA={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function tA(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var nA=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,rc=tA(function(e){return nA.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Gp={exports:{}},q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=typeof Symbol=="function"&&Symbol.for,Fs=je?Symbol.for("react.element"):60103,Ds=je?Symbol.for("react.portal"):60106,Ko=je?Symbol.for("react.fragment"):60107,Zo=je?Symbol.for("react.strict_mode"):60108,Jo=je?Symbol.for("react.profiler"):60114,qo=je?Symbol.for("react.provider"):60109,el=je?Symbol.for("react.context"):60110,Ws=je?Symbol.for("react.async_mode"):60111,tl=je?Symbol.for("react.concurrent_mode"):60111,nl=je?Symbol.for("react.forward_ref"):60112,rl=je?Symbol.for("react.suspense"):60113,rA=je?Symbol.for("react.suspense_list"):60120,il=je?Symbol.for("react.memo"):60115,ol=je?Symbol.for("react.lazy"):60116,iA=je?Symbol.for("react.block"):60121,oA=je?Symbol.for("react.fundamental"):60117,lA=je?Symbol.for("react.responder"):60118,aA=je?Symbol.for("react.scope"):60119;function lt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Fs:switch(e=e.type,e){case Ws:case tl:case Ko:case Jo:case Zo:case rl:return e;default:switch(e=e&&e.$$typeof,e){case el:case nl:case ol:case il:case qo:return e;default:return t}}case Ds:return t}}}function Vp(e){return lt(e)===tl}q.AsyncMode=Ws;q.ConcurrentMode=tl;q.ContextConsumer=el;q.ContextProvider=qo;q.Element=Fs;q.ForwardRef=nl;q.Fragment=Ko;q.Lazy=ol;q.Memo=il;q.Portal=Ds;q.Profiler=Jo;q.StrictMode=Zo;q.Suspense=rl;q.isAsyncMode=function(e){return Vp(e)||lt(e)===Ws};q.isConcurrentMode=Vp;q.isContextConsumer=function(e){return lt(e)===el};q.isContextProvider=function(e){return lt(e)===qo};q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fs};q.isForwardRef=function(e){return lt(e)===nl};q.isFragment=function(e){return lt(e)===Ko};q.isLazy=function(e){return lt(e)===ol};q.isMemo=function(e){return lt(e)===il};q.isPortal=function(e){return lt(e)===Ds};q.isProfiler=function(e){return lt(e)===Jo};q.isStrictMode=function(e){return lt(e)===Zo};q.isSuspense=function(e){return lt(e)===rl};q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ko||e===tl||e===Jo||e===Zo||e===rl||e===rA||typeof e=="object"&&e!==null&&(e.$$typeof===ol||e.$$typeof===il||e.$$typeof===qo||e.$$typeof===el||e.$$typeof===nl||e.$$typeof===oA||e.$$typeof===lA||e.$$typeof===aA||e.$$typeof===iA)};q.typeOf=lt;Gp.exports=q;var sA=Gp.exports,Gs=sA,uA={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},cA={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dA={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Up={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vs={};Vs[Gs.ForwardRef]=dA;Vs[Gs.Memo]=Up;function ic(e){return Gs.isMemo(e)?Up:Vs[e.$$typeof]||uA}var pA=Object.defineProperty,fA=Object.getOwnPropertyNames,oc=Object.getOwnPropertySymbols,hA=Object.getOwnPropertyDescriptor,mA=Object.getPrototypeOf,lc=Object.prototype;function Qp(e,t,n){if(typeof t!="string"){if(lc){var r=mA(t);r&&r!==lc&&Qp(e,r,n)}var i=fA(t);oc&&(i=i.concat(oc(t)));for(var o=ic(e),l=ic(t),s=0;s<i.length;++s){var u=i[s];if(!cA[u]&&!(n&&n[u])&&!(l&&l[u])&&!(o&&o[u])){var c=hA(t,u);try{pA(e,u,c)}catch{}}}}return e}var AA=Qp;const gA=kc(AA);function zt(){return(zt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ac=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Ra=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Wp.typeOf(e)},vo=Object.freeze([]),ln=Object.freeze({});function ri(e){return typeof e=="function"}function sc(e){return e.displayName||e.name||"Component"}function Us(e){return e&&typeof e.styledComponentId=="string"}var ar=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Qs=typeof window<"u"&&"HTMLElement"in window,vA=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function di(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var xA=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&di(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var s=o;s<l;s++)this.groupSizes[s]=0}for(var u=this.indexOfGroup(n+1),c=0,m=r.length;c<m;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,s=o;s<l;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),$i=new Map,xo=new Map,Dr=1,Ri=function(e){if($i.has(e))return $i.get(e);for(;xo.has(Dr);)Dr++;var t=Dr++;return $i.set(e,t),xo.set(t,e),t},yA=function(e){return xo.get(e)},wA=function(e,t){t>=Dr&&(Dr=t+1),$i.set(e,t),xo.set(t,e)},SA="style["+ar+'][data-styled-version="5.3.9"]',jA=new RegExp("^"+ar+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),CA=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},kA=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var s=l.match(jA);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(wA(c,u),CA(e,c,s[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(l)}}},EA=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Yp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){for(var u=s.childNodes,c=u.length;c>=0;c--){var m=u[c];if(m&&m.nodeType===1&&m.hasAttribute(ar))return m}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ar,"active"),r.setAttribute("data-styled-version","5.3.9");var l=EA();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},IA=function(){function e(n){var r=this.element=Yp(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,s=o.length;l<s;l++){var u=o[l];if(u.ownerNode===i)return u}di(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),PA=function(){function e(n){var r=this.element=Yp(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),NA=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),uc=Qs,BA={isServer:!Qs,useCSSOMInjection:!vA},$p=function(){function e(n,r,i){n===void 0&&(n=ln),r===void 0&&(r={}),this.options=zt({},BA,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Qs&&uc&&(uc=!1,function(o){for(var l=document.querySelectorAll(SA),s=0,u=l.length;s<u;s++){var c=l[s];c&&c.getAttribute(ar)!=="active"&&(kA(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Ri(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(zt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new NA(l):o?new IA(l):new PA(l),new xA(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ri(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ri(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ri(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var s=yA(l);if(s!==void 0){var u=n.names.get(s),c=r.getGroup(l);if(u&&c&&u.size){var m=ar+".g"+l+'[id="'+s+'"]',h="";u!==void 0&&u.forEach(function(g){g.length>0&&(h+=g+",")}),o+=""+c+m+'{content:"'+h+`"}/*!sc*/
`}}}return o}(this)},e}(),RA=/(a)(d)/gi,cc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ta(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=cc(t%52)+n;return(cc(t%52)+n).replace(RA,"$1-$2")}var Hn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Hp=function(e){return Hn(5381,e)};function TA(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ri(n)&&!Us(n))return!1}return!0}var OA=Hp("5.3.9"),zA=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&TA(t),this.componentId=n,this.baseHash=Hn(OA,n),this.baseStyle=r,$p.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=sr(this.rules,t,n,r).join(""),s=Ta(Hn(this.baseHash,l)>>>0);if(!n.hasNameForId(i,s)){var u=r(l,"."+s,void 0,i);n.insertRules(i,s,u)}o.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,m=Hn(this.baseHash,r.hash),h="",g=0;g<c;g++){var S=this.rules[g];if(typeof S=="string")h+=S;else if(S){var w=sr(S,t,n,r),v=Array.isArray(w)?w.join(""):w;m=Hn(m,v+g),h+=v}}if(h){var j=Ta(m>>>0);if(!n.hasNameForId(i,j)){var p=r(h,"."+j,void 0,i);n.insertRules(i,j,p)}o.push(j)}}return o.join(" ")},e}(),LA=/^\s*\/\/.*$/gm,bA=[":","[",".","#"];function MA(e){var t,n,r,i,o=e===void 0?ln:e,l=o.options,s=l===void 0?ln:l,u=o.plugins,c=u===void 0?vo:u,m=new qm(s),h=[],g=function(v){function j(p){if(p)try{v(p+"}")}catch{}}return function(p,d,f,y,k,R,T,O,U,M){switch(p){case 1:if(U===0&&d.charCodeAt(0)===64)return v(d+";"),"";break;case 2:if(O===0)return d+"/*|*/";break;case 3:switch(O){case 102:case 112:return v(f[0]+d),"";default:return d+(M===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(j)}}}(function(v){h.push(v)}),S=function(v,j,p){return j===0&&bA.indexOf(p[n.length])!==-1||p.match(i)?v:"."+t};function w(v,j,p,d){d===void 0&&(d="&");var f=v.replace(LA,""),y=j&&p?p+" "+j+" { "+f+" }":f;return t=d,n=j,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),m(p||!j?"":j,y)}return m.use([].concat(c,[function(v,j,p){v===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,S))},g,function(v){if(v===-2){var j=h;return h=[],j}}])),w.hash=c.length?c.reduce(function(v,j){return j.name||di(15),Hn(v,j.name)},5381).toString():"",w}var Xp=ge.createContext();Xp.Consumer;var _p=ge.createContext(),FA=(_p.Consumer,new $p),Oa=MA();function DA(){return C.useContext(Xp)||FA}function WA(){return C.useContext(_p)||Oa}var Kp=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Oa);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return di(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Oa),this.name+t.hash},e}(),GA=/([A-Z])/,VA=/([A-Z])/g,UA=/^ms-/,QA=function(e){return"-"+e.toLowerCase()};function dc(e){return GA.test(e)?e.replace(VA,QA).replace(UA,"-ms-"):e}var pc=function(e){return e==null||e===!1||e===""};function sr(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,s=e.length;l<s;l+=1)(i=sr(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(pc(e))return"";if(Us(e))return"."+e.styledComponentId;if(ri(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var u=e(t);return sr(u,t,n,r)}var c;return e instanceof Kp?n?(e.inject(n,r),e.getName(r)):e:Ra(e)?function m(h,g){var S,w,v=[];for(var j in h)h.hasOwnProperty(j)&&!pc(h[j])&&(Array.isArray(h[j])&&h[j].isCss||ri(h[j])?v.push(dc(j)+":",h[j],";"):Ra(h[j])?v.push.apply(v,m(h[j],j)):v.push(dc(j)+": "+(S=j,(w=h[j])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||S in eA?String(w).trim():w+"px")+";"));return g?[g+" {"].concat(v,["}"]):v}(e):e.toString()}var fc=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function pr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ri(e)||Ra(e)?fc(sr(ac(vo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:fc(sr(ac(e,n)))}var YA=function(e,t,n){return n===void 0&&(n=ln),e.theme!==n.theme&&e.theme||t||n.theme},$A=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,HA=/(^-|-$)/g;function Ll(e){return e.replace($A,"-").replace(HA,"")}var Zp=function(e){return Ta(Hp(e)>>>0)};function Ti(e){return typeof e=="string"&&!0}var za=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},XA=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function _A(e,t,n){var r=e[n];za(t)&&za(r)?Jp(r,t):e[n]=t}function Jp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(za(l))for(var s in l)XA(s)&&_A(e,l[s],s)}return e}var qp=ge.createContext();qp.Consumer;var bl={};function ef(e,t,n){var r=Us(e),i=!Ti(e),o=t.attrs,l=o===void 0?vo:o,s=t.componentId,u=s===void 0?function(d,f){var y=typeof d!="string"?"sc":Ll(d);bl[y]=(bl[y]||0)+1;var k=y+"-"+Zp("5.3.9"+y+bl[y]);return f?f+"-"+k:k}(t.displayName,t.parentComponentId):s,c=t.displayName,m=c===void 0?function(d){return Ti(d)?"styled."+d:"Styled("+sc(d)+")"}(e):c,h=t.displayName&&t.componentId?Ll(t.displayName)+"-"+t.componentId:t.componentId||u,g=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,S=t.shouldForwardProp;r&&e.shouldForwardProp&&(S=t.shouldForwardProp?function(d,f,y){return e.shouldForwardProp(d,f,y)&&t.shouldForwardProp(d,f,y)}:e.shouldForwardProp);var w,v=new zA(n,h,r?e.componentStyle:void 0),j=v.isStatic&&l.length===0,p=function(d,f){return function(y,k,R,T){var O=y.attrs,U=y.componentStyle,M=y.defaultProps,pe=y.foldedComponentIds,ue=y.shouldForwardProp,me=y.styledComponentId,Le=y.target,xe=function(D,x,Q){D===void 0&&(D=ln);var N=zt({},x,{theme:D}),ae={};return Q.forEach(function(X){var K,G,Ce,We=X;for(K in ri(We)&&(We=We(N)),We)N[K]=ae[K]=K==="className"?(G=ae[K],Ce=We[K],G&&Ce?G+" "+Ce:G||Ce):We[K]}),[N,ae]}(YA(k,C.useContext(qp),M)||ln,k,O),at=xe[0],ye=xe[1],I=function(D,x,Q,N){var ae=DA(),X=WA(),K=x?D.generateAndInjectStyles(ln,ae,X):D.generateAndInjectStyles(Q,ae,X);return K}(U,T,at),b=R,F=ye.$as||k.$as||ye.as||k.as||Le,H=Ti(F),P=ye!==k?zt({},k,{},ye):k,B={};for(var z in P)z[0]!=="$"&&z!=="as"&&(z==="forwardedAs"?B.as=P[z]:(ue?ue(z,rc,F):!H||rc(z))&&(B[z]=P[z]));return k.style&&ye.style!==k.style&&(B.style=zt({},k.style,{},ye.style)),B.className=Array.prototype.concat(pe,me,I!==me?I:null,k.className,ye.className).filter(Boolean).join(" "),B.ref=b,C.createElement(F,B)}(w,d,f,j)};return p.displayName=m,(w=ge.forwardRef(p)).attrs=g,w.componentStyle=v,w.displayName=m,w.shouldForwardProp=S,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):vo,w.styledComponentId=h,w.target=r?e.target:e,w.withComponent=function(d){var f=t.componentId,y=function(R,T){if(R==null)return{};var O,U,M={},pe=Object.keys(R);for(U=0;U<pe.length;U++)O=pe[U],T.indexOf(O)>=0||(M[O]=R[O]);return M}(t,["componentId"]),k=f&&f+"-"+(Ti(d)?d:Ll(sc(d)));return ef(d,zt({},y,{attrs:g,componentId:k}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?Jp({},e.defaultProps,d):d}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&gA(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var La=function(e){return function t(n,r,i){if(i===void 0&&(i=ln),!Wp.isValidElementType(r))return di(1,String(r));var o=function(){return n(r,i,pr.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,zt({},i,{},l))},o.attrs=function(l){return t(n,r,zt({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(ef,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){La[e]=La(e)});function Pn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=pr.apply(void 0,[e].concat(n)).join(""),o=Zp(i);return new Kp(o,i)}const A=La,kr=48,KA=({color:e="currentColor",direction:t="left",distance:n="md",duration:r=.4,easing:i="cubic-bezier(0, 0, 0, 1)",hideOutline:o=!0,label:l,lines:s=3,onToggle:u,render:c,rounded:m=!1,size:h=32,toggle:g,toggled:S,disabled:w=!1,animateOnMount:v=!1})=>{const[j,p]=C.useState(!1),[d,f]=C.useState(!1);C.useEffect(()=>{f(!0)},[]);const y=Math.max(12,Math.min(kr,h)),k=Math.round((kr-y)/2),R=y/12,T=Math.round(R),U=y/(s*((n==="lg"?.25:n==="sm"?.75:.5)+(s===3?1:1.25))),M=Math.round(U),pe=T*s+M*(s-1),ue=Math.round((kr-pe)/2),me=s===3?n==="lg"?4.0425:n==="sm"?5.1625:4.6325:n==="lg"?6.7875:n==="sm"?8.4875:7.6675,Le=(R-T+(U-M))/(s===3?1:2),xe=parseFloat((y/me-Le/(4/3)).toFixed(2)),at=Math.max(0,r),ye={cursor:w?"not-allowed":"pointer",height:`${kr}px`,position:"relative",transition:`${at}s ${i}`,userSelect:"none",width:`${kr}px`},I={background:e,height:`${T}px`,left:`${k}px`,position:"absolute"};o&&(ye.outline="none"),m&&(I.borderRadius="9em");const b=()=>{const B=S!==void 0?S:j;return v&&!d?!B:B},F=g||p,H=b();return c({barHeight:T,barStyles:I,burgerStyles:ye,easing:i,handler:()=>{F(!H),typeof u=="function"&&u(!H)},isLeft:t==="left",isToggled:H,label:l,margin:M,move:xe,time:at,topOffset:ue,width:y})};function ba(){return ba=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ba.apply(this,arguments)}const ZA=e=>ge.createElement(KA,ba({},e,{render:t=>ge.createElement("div",{className:"hamburger-react","aria-label":t.label,"aria-expanded":t.isToggled,onClick:e.disabled?void 0:t.handler,onKeyUp:e.disabled?void 0:n=>n.key==="Enter"&&t.handler(),role:"button",style:{...t.burgerStyles,transform:`${t.isToggled?`rotate(${180*(t.isLeft?-1:1)}deg)`:"none"}`},tabIndex:0},ge.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset}px`,transition:`${t.time}s ${t.easing}`,transform:`${t.isToggled?`rotate(${45*(t.isLeft?-1:1)}deg) translate(${t.move*(t.isLeft?-1:1)}px, ${t.move}px)`:"none"}`}}),ge.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset+t.barHeight+t.margin}px`,transition:`${t.time}s ${t.easing}`,opacity:`${t.isToggled?"0":"1"}`}}),ge.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset+t.barHeight*2+t.margin*2}px`,transition:`${t.time}s ${t.easing}`,transform:`${t.isToggled?`rotate(${45*(t.isLeft?1:-1)}deg) translate(${t.move*(t.isLeft?-1:1)}px, ${t.move*-1}px)`:"none"}`}}))}));/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(this,arguments)}var Kt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Kt||(Kt={}));const hc="popstate";function JA(e){e===void 0&&(e={});function t(i,o){let{pathname:l="/",search:s="",hash:u=""}=Nn(i.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Ma("",{pathname:l,search:s,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let l=i.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");s=c===-1?u:u.slice(0,c)}return s+"#"+(typeof o=="string"?o:yo(o))}function r(i,o){Ys(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return eg(t,n,r,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ys(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function qA(){return Math.random().toString(36).substr(2,8)}function mc(e,t){return{usr:e.state,key:e.key,idx:t}}function Ma(e,t,n,r){return n===void 0&&(n=null),ii({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Nn(t):t,{state:n,key:t&&t.key||r||qA()})}function yo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Nn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function eg(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=Kt.Pop,u=null,c=m();c==null&&(c=0,l.replaceState(ii({},l.state,{idx:c}),""));function m(){return(l.state||{idx:null}).idx}function h(){s=Kt.Pop;let j=m(),p=j==null?null:j-c;c=j,u&&u({action:s,location:v.location,delta:p})}function g(j,p){s=Kt.Push;let d=Ma(v.location,j,p);n&&n(d,j),c=m()+1;let f=mc(d,c),y=v.createHref(d);try{l.pushState(f,"",y)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(y)}o&&u&&u({action:s,location:v.location,delta:1})}function S(j,p){s=Kt.Replace;let d=Ma(v.location,j,p);n&&n(d,j),c=m();let f=mc(d,c),y=v.createHref(d);l.replaceState(f,"",y),o&&u&&u({action:s,location:v.location,delta:0})}function w(j){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof j=="string"?j:yo(j);return d=d.replace(/ $/,"%20"),he(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let v={get action(){return s},get location(){return e(i,l)},listen(j){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(hc,h),u=j,()=>{i.removeEventListener(hc,h),u=null}},createHref(j){return t(i,j)},createURL:w,encodeLocation(j){let p=w(j);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:S,go(j){return l.go(j)}};return v}var Ac;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ac||(Ac={}));function tg(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Nn(t):t,i=$s(r.pathname||"/",n);if(i==null)return null;let o=tf(e);ng(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let u=hg(i);l=dg(o[s],u)}return l}function tf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let u={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(he(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=an([r,u.relativePath]),m=n.concat(u);o.children&&o.children.length>0&&(he(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),tf(o.children,t,m,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:ug(c,o.index),routesMeta:m})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let u of nf(o.path))i(o,l,u)}),t}function nf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=nf(r.join("/")),s=[];return s.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function ng(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:cg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const rg=/^:[\w-]+$/,ig=3,og=2,lg=1,ag=10,sg=-2,gc=e=>e==="*";function ug(e,t){let n=e.split("/"),r=n.length;return n.some(gc)&&(r+=sg),t&&(r+=og),n.filter(i=>!gc(i)).reduce((i,o)=>i+(rg.test(o)?ig:o===""?lg:ag),r)}function cg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function dg(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let s=n[l],u=l===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",m=pg({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c);if(!m)return null;Object.assign(r,m.params);let h=s.route;o.push({params:r,pathname:an([i,m.pathname]),pathnameBase:vg(an([i,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(i=an([i,m.pathnameBase]))}return o}function pg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=fg(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,m,h)=>{let{paramName:g,isOptional:S}=m;if(g==="*"){let v=s[h]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const w=s[h];return S&&!w?c[g]=void 0:c[g]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function fg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ys(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function hg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ys(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function $s(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function mg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Nn(e):e;return{pathname:n?n.startsWith("/")?n:Ag(n,t):t,search:xg(r),hash:yg(i)}}function Ag(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ml(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function rf(e,t){let n=gg(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function of(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Nn(e):(i=ii({},e),he(!i.pathname||!i.pathname.includes("?"),Ml("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),Ml("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),Ml("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let h=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}s=h>=0?t[h]:"/"}let u=mg(i,s),c=l&&l!=="/"&&l.endsWith("/"),m=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||m)&&(u.pathname+="/"),u}const an=e=>e.join("/").replace(/\/\/+/g,"/"),vg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),xg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,yg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function wg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const lf=["post","put","patch","delete"];new Set(lf);const Sg=["get",...lf];new Set(Sg);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oi.apply(this,arguments)}const Hs=C.createContext(null),jg=C.createContext(null),Bn=C.createContext(null),ll=C.createContext(null),Rn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),af=C.createContext(null);function Cg(e,t){let{relative:n}=t===void 0?{}:t;pi()||he(!1);let{basename:r,navigator:i}=C.useContext(Bn),{hash:o,pathname:l,search:s}=uf(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:an([r,l])),i.createHref({pathname:u,search:s,hash:o})}function pi(){return C.useContext(ll)!=null}function fr(){return pi()||he(!1),C.useContext(ll).location}function sf(e){C.useContext(Bn).static||C.useLayoutEffect(e)}function kg(){let{isDataRoute:e}=C.useContext(Rn);return e?Fg():Eg()}function Eg(){pi()||he(!1);let e=C.useContext(Hs),{basename:t,future:n,navigator:r}=C.useContext(Bn),{matches:i}=C.useContext(Rn),{pathname:o}=fr(),l=JSON.stringify(rf(i,n.v7_relativeSplatPath)),s=C.useRef(!1);return sf(()=>{s.current=!0}),C.useCallback(function(c,m){if(m===void 0&&(m={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let h=of(c,JSON.parse(l),o,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:an([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,l,o,e])}function uf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(Bn),{matches:i}=C.useContext(Rn),{pathname:o}=fr(),l=JSON.stringify(rf(i,r.v7_relativeSplatPath));return C.useMemo(()=>of(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function Ig(e,t){return Pg(e,t)}function Pg(e,t,n,r){pi()||he(!1);let{navigator:i}=C.useContext(Bn),{matches:o}=C.useContext(Rn),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=fr(),m;if(t){var h;let j=typeof t=="string"?Nn(t):t;u==="/"||(h=j.pathname)!=null&&h.startsWith(u)||he(!1),m=j}else m=c;let g=m.pathname||"/",S=g;if(u!=="/"){let j=u.replace(/^\//,"").split("/");S="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let w=tg(e,{pathname:S}),v=Og(w&&w.map(j=>Object.assign({},j,{params:Object.assign({},s,j.params),pathname:an([u,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?u:an([u,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),o,n,r);return t&&v?C.createElement(ll.Provider,{value:{location:oi({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Kt.Pop}},v):v}function Ng(){let e=Mg(),t=wg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,o)}const Bg=C.createElement(Ng,null);class Rg extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(Rn.Provider,{value:this.props.routeContext},C.createElement(af.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Tg(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(Hs);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Rn.Provider,{value:t},r)}function Og(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let m=l.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);m>=0||he(!1),l=l.slice(0,Math.min(l.length,m+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<l.length;m++){let h=l[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=m),h.route.id){let{loaderData:g,errors:S}=n,w=h.route.loader&&g[h.route.id]===void 0&&(!S||S[h.route.id]===void 0);if(h.route.lazy||w){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((m,h,g)=>{let S,w=!1,v=null,j=null;n&&(S=s&&h.route.id?s[h.route.id]:void 0,v=h.route.errorElement||Bg,u&&(c<0&&g===0?(Dg("route-fallback",!1),w=!0,j=null):c===g&&(w=!0,j=h.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,g+1)),d=()=>{let f;return S?f=v:w?f=j:h.route.Component?f=C.createElement(h.route.Component,null):h.route.element?f=h.route.element:f=m,C.createElement(Tg,{match:h,routeContext:{outlet:m,matches:p,isDataRoute:n!=null},children:f})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?C.createElement(Rg,{location:n.location,revalidation:n.revalidation,component:v,error:S,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var cf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(cf||{}),wo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(wo||{});function zg(e){let t=C.useContext(Hs);return t||he(!1),t}function Lg(e){let t=C.useContext(jg);return t||he(!1),t}function bg(e){let t=C.useContext(Rn);return t||he(!1),t}function df(e){let t=bg(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function Mg(){var e;let t=C.useContext(af),n=Lg(wo.UseRouteError),r=df(wo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Fg(){let{router:e}=zg(cf.UseNavigateStable),t=df(wo.UseNavigateStable),n=C.useRef(!1);return sf(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,oi({fromRouteId:t},o)))},[e,t])}const vc={};function Dg(e,t,n){!t&&!vc[e]&&(vc[e]=!0)}function zn(e){he(!1)}function Wg(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Kt.Pop,navigator:o,static:l=!1,future:s}=e;pi()&&he(!1);let u=t.replace(/^\/*/,"/"),c=C.useMemo(()=>({basename:u,navigator:o,static:l,future:oi({v7_relativeSplatPath:!1},s)}),[u,s,o,l]);typeof r=="string"&&(r=Nn(r));let{pathname:m="/",search:h="",hash:g="",state:S=null,key:w="default"}=r,v=C.useMemo(()=>{let j=$s(m,u);return j==null?null:{location:{pathname:j,search:h,hash:g,state:S,key:w},navigationType:i}},[u,m,h,g,S,w,i]);return v==null?null:C.createElement(Bn.Provider,{value:c},C.createElement(ll.Provider,{children:n,value:v}))}function Gg(e){let{children:t,location:n}=e;return Ig(Fa(t),n)}new Promise(()=>{});function Fa(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,Fa(r.props.children,o));return}r.type!==zn&&he(!1),!r.props.index||!r.props.children||he(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Fa(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Da(){return Da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Da.apply(this,arguments)}function Vg(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Ug(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Qg(e,t){return e.button===0&&(!t||t==="_self")&&!Ug(e)}const Yg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],$g="6";try{window.__reactRouterVersion=$g}catch{}const Hg="startTransition",xc=Df[Hg];function Xg(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=JA({window:i,v5Compat:!0}));let l=o.current,[s,u]=C.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},m=C.useCallback(h=>{c&&xc?xc(()=>u(h)):u(h)},[u,c]);return C.useLayoutEffect(()=>l.listen(m),[l,m]),C.createElement(Wg,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const _g=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Kg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hr=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:u,to:c,preventScrollReset:m,unstable_viewTransition:h}=t,g=Vg(t,Yg),{basename:S}=C.useContext(Bn),w,v=!1;if(typeof c=="string"&&Kg.test(c)&&(w=c,_g))try{let f=new URL(window.location.href),y=c.startsWith("//")?new URL(f.protocol+c):new URL(c),k=$s(y.pathname,S);y.origin===f.origin&&k!=null?c=k+y.search+y.hash:v=!0}catch{}let j=Cg(c,{relative:i}),p=Zg(c,{replace:l,state:s,target:u,preventScrollReset:m,relative:i,unstable_viewTransition:h});function d(f){r&&r(f),f.defaultPrevented||p(f)}return C.createElement("a",Da({},g,{href:w||j,onClick:v||o?r:d,ref:n,target:u}))});var yc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(yc||(yc={}));var wc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(wc||(wc={}));function Zg(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s}=t===void 0?{}:t,u=kg(),c=fr(),m=uf(e,{relative:l});return C.useCallback(h=>{if(Qg(h,n)){h.preventDefault();let g=r!==void 0?r:yo(c)===yo(m);u(e,{replace:g,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s})}},[c,u,m,r,i,n,e,o,l,s])}const Wa="/portfolio/assets/paulEvansCreativeLogo-77817caa.avif",Jg=A.nav`
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
  background-color: var(--main-hero-backgroundcolor);
  top: ${({visible:e})=>e?"0":"-160px"};
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
  }
`,qg=A.div`
  width: 180px;
  height: 100%;
`,e0=A.div`
  display: flex;

  @media screen and (max-width: 960px) {
    width: 100%;

    justify-content: center;
    margin-bottom: 4em;
  }
`,t0=A.img`
  text-align: center;
  width: 80px;
  margin-top: 1.5em;

  @media screen and (max-width: 767px) {
    width: 60px;
    margin-top: 1em;
  }
`,n0=A.img`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    margin-top: 100px;
    width: 100px;
  }
`,r0=A.div`
  float: left;
  width: 200px;
  height: 100%;
  padding-left: 0.5em;
  text-align: left;

  @media screen and (max-width: 767px) {
    padding-left: 0em;
  }
`,i0=A.ul`
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
`,o0=A(hr)`
  display: flex;
  justify-self: flex-end;
  align-self: flex-end;
  color: var(--main-font-color);
  text-decoration: none;
  text-align: right;
  margin: 1em 2em 0em 0em;

  &:hover {
    text-decoration: underline;
    color: var(--main-navbar-hover-color);
  }

  &.active {
    text-decoration: underline;
    color: var(--main-navbar-hover-color);
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
`,l0=A.a`
  display: flex;
  align-self: flex-end;
  color: var(--main-font-color);
  text-decoration: none;
  text-align: right;
  margin: 0em 2em 0em 0em;

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
`,a0=A.div`
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
`,s0=({footerRef:e})=>{const t=fr(),[n,r]=C.useState(!1),[i,o]=C.useState(t.pathname),[l,s]=C.useState(!1),[u,c]=C.useState(window.pageYOffset),[m,h]=C.useState(!0);C.useEffect(()=>{o(t.pathname);const v=()=>{const j=window.pageYOffset;h(u>j||j<10),c(j)};return window.addEventListener("scroll",v),()=>window.removeEventListener("scroll",v)},[t.pathname,u]);const g=()=>{e.current&&e.current.scrollIntoView({behavior:"smooth"}),r(!1),s(!1)},S=()=>{r(!1),s(!1)},w=[{id:1,to:"/",text:"Home"},{id:2,to:"/casestudies",text:"Case Studies"},{id:3,to:"https://www.paulevans-dop.com/",text:"Cinematography",isExternal:!0},{id:4,to:"/about",text:"About"},{id:5,to:"#",text:"Contact",onClick:g}];return a.jsxs(Jg,{visible:m,children:[a.jsx(qg,{children:a.jsx(hr,{to:"/",onClick:S,children:a.jsx(r0,{children:a.jsx(t0,{src:Wa,alt:"the letters P and E merged together to form the logo Paul Evans Creative"})})})}),a.jsxs(i0,{open:n,children:[w.map(v=>v.isExternal?a.jsx(l0,{href:v.to,onClick:v.onClick||S,className:i===v.to?"active":"",children:v.text},v.id):a.jsx(o0,{to:v.to,onClick:v.onClick||S,className:i===v.to?"active":"",children:v.text},v.id)),a.jsx(e0,{children:a.jsx(n0,{src:Wa,alt:"the letters P and E merged together to form the logo Paul Evans Creative"})})]}),a.jsx(a0,{children:a.jsx("div",{onClick:()=>{r(!n),s(!l)},children:a.jsx(ZA,{toggled:l})})})]})},u0=Pn`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,c0=A.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--main-hero-backgroundcolor);
`,d0=A.div`
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
    padding-top: 160px;
    padding-bottom: 80px;
  }

  @media screen and (max-width: 478px) {
    padding-top: 140px;
    padding-left: 40px;
  }

  @media screen and (max-width: 320px) {
    padding-bottom: 60px;
    padding-left: 20px;
  }
`,p0=A.div`
  animation: ${u0} 1s ease-out 0.5s forwards;
`,f0=A.p`
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
`,h0=()=>a.jsx(c0,{children:a.jsxs(d0,{children:[a.jsx("h1",{children:"Paul Evans"}),a.jsx(p0,{children:a.jsx("h2",{children:"Digital Experience Designer"})}),a.jsx(f0,{children:"I am a passionate creative who's professional background spans over 20 years, during which time I have worn many hats. Cinematographer, UX / UI designer, frontend developer and not to mention concept developer and writer. This experience brings a unique perspective to Visual Design. Combining these skills to create the ultimate Brand and Customer Experience is something that excites and drives me."})]})}),m0="/portfolio/assets/showcase1-e3ff3470.mp4";var pf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ga=ge.createContext&&ge.createContext(pf),A0=["attr","size","title"];function g0(e,t){if(e==null)return{};var n=v0(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function v0(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function So(){return So=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},So.apply(this,arguments)}function Sc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function jo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sc(Object(n),!0).forEach(function(r){x0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function x0(e,t,n){return t=y0(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y0(e){var t=w0(e,"string");return typeof t=="symbol"?t:t+""}function w0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ff(e){return e&&e.map((t,n)=>ge.createElement(t.tag,jo({key:n},t.attr),ff(t.child)))}function Tn(e){return t=>ge.createElement(S0,So({attr:jo({},e.attr)},t),ff(e.child))}function S0(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=g0(e,A0),s=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),ge.createElement("svg",So({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:u,style:jo(jo({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&ge.createElement("title",null,o),e.children)};return Ga!==void 0?ge.createElement(Ga.Consumer,null,n=>t(n)):t(pf)}function j0(e){return Tn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM21.3 229.2H21c.1-.1.2-.3.3-.4zM97 319.8H64V192h33zm113.2 0h-28.7v-86.4l-11.6 86.4h-20.6l-12.2-84.5v84.5h-29V192h42.8c3.3 19.8 6 39.9 8.7 59.9l7.6-59.9h43zm11.4 0V192h24.6c17.6 0 44.7-1.6 49 20.9 1.7 7.6 1.4 16.3 1.4 24.4 0 88.5 11.1 82.6-75 82.5zm160.9-29.2c0 15.7-2.4 30.9-22.2 30.9-9 0-15.2-3-20.9-9.8l-1.9 8.1h-29.8V192h31.7v41.7c6-6.5 12-9.2 20.9-9.2 21.4 0 22.2 12.8 22.2 30.1zM265 229.9c0-9.7 1.6-16-10.3-16v83.7c12.2.3 10.3-8.7 10.3-18.4zm85.5 26.1c0-5.4 1.1-12.7-6.2-12.7-6 0-4.9 8.9-4.9 12.7 0 .6-1.1 39.6 1.1 44.7.8 1.6 2.2 2.4 3.8 2.4 7.8 0 6.2-9 6.2-14.4z"},child:[]}]})(e)}function C0(e){return Tn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function k0(e){return Tn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function fn(e){return Tn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"},child:[]}]})(e)}function E0(e){return Tn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"},child:[]}]})(e)}function hf(e){return Tn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"},child:[]}]})(e)}const I0=A.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 24px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  color: var(--main-button-color);
`,P0=A.div`
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
`,N0=A.p`
  color: var(--main-font-color);
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 478px) {
    font-size: 18px;
  }
`,B0=({onClick:e})=>a.jsxs(I0,{children:[a.jsx(P0,{children:a.jsx("a",{href:"https://paulevans-dop.com/",target:"_blank",rel:"noopener noreferrer",children:a.jsx(fn,{onClick:e,size:70})})}),a.jsx(N0,{children:"See Cinematography Reel"})]}),R0=A.div`
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
    height: 500px;
  }
`,T0=A.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
`,O0=A.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000052;
`,z0=A.div`
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
    padding-top: 20px;
    padding-left: 20px;
  }
`,L0=A.div`
  margin-top: auto;
`;function b0(e){const t=C.useRef(null);return C.useEffect(()=>{const n=setTimeout(()=>{t.current&&t.current.play()},4e3);return()=>clearTimeout(n)},[]),a.jsxs(R0,{children:[a.jsx(T0,{ref:t,src:m0,autoplay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A showreel showing clips from different productions."}),a.jsx(O0,{children:a.jsxs(z0,{children:[a.jsx("h3",{children:"Cinematographer"}),a.jsx("p",{children:"Member of fsf Föreningen Severiges Filmfotografer (The Association of Swedish Film Cinematographers). Working in Narrative, Commercials, Music Videos and Still Photography."}),a.jsx(L0,{children:a.jsx(B0,{})})]})})]})}const M0="/portfolio/assets/conceptReel-4e8f05ad.mp4",F0=A.div`
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
    height: 500px;
  }
`,D0=A.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: left;
  object-fit: cover;
`,W0=A.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000042;
`,G0=A.div`
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
    padding-top: 20px;
    padding-left: 20px;
  }
`,V0=A.div`
  margin-top: auto;
  margin-bottom: 20px;
  padding-bottom: 20px;
`,U0=A.p`
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 1.4;
  margin: 0;

  @media screen and (max-width: 478px) {
    font-size: 18px;
  }

  @media screen and (max-width: 320px) {
    font-size: 16px;
  }
`,Q0=A.a`
  &:hover {
    color: #9804e2;
  }
`;function Y0(e){const t=C.useRef(null);return C.useEffect(()=>{const n=setTimeout(()=>{t.current&&t.current.play()},6e3);return()=>clearTimeout(n)},[]),a.jsxs(F0,{children:[a.jsx(D0,{ref:t,src:M0,autoplay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A video showing animated AI images made for TV concepts."}),a.jsx(W0,{children:a.jsxs(G0,{children:[a.jsx("h3",{children:"Writer "}),a.jsx("p",{children:"As a writer and concept developer, I have been commissioned to write concepts based on briefs provided by TV channels and streaming services and had concepts optioned."}),a.jsxs(V0,{children:[a.jsx(U0,{children:"Want to know more send me a mail."}),a.jsx(Q0,{href:"mailto:paul.evans.creative@gmail.com",children:"paul.evans.creative@gmail.com"})]})]})})]})}const $0="/portfolio/assets/uxuiReel-e01a0e6b.mp4",H0=A.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  color: var(--main-button-color);
`,X0=A.div`
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
`,_0=A.p`
  color: var(--main-font-color);
  font-size: 20px;
  font-weight: 600;
  margin-top: 0;

  @media (max-width: 478px) {
    font-size: 18px;
  }
`,K0=({onClick:e})=>{const t=()=>{e()};return a.jsxs(H0,{children:[a.jsx(X0,{children:a.jsx(hr,{to:"/casestudies",children:a.jsx(fn,{onClick:t,size:70})})}),a.jsx(_0,{children:"See Case Studies"})]})},Z0=A.div`
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
    height: 500px;
  }

  @media screen and (max-width: 767px) {
  }
`,J0=A.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
`,q0=A.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #000000a0;
`,ev=A.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 90%;
  height: 100%;
  padding-top: 20px;
  padding-left: 40px;

  @media screen and (max-width: 478px) {
    padding-left: 20px;
  }
`,tv=A.div`
  margin-top: auto;
`;function nv(e){return a.jsxs(Z0,{children:[a.jsx(J0,{src:$0,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"Design frames changing randomly "}),a.jsx(q0,{children:a.jsxs(ev,{children:[a.jsx("h3",{children:"UX / UI Designer"}),a.jsx("p",{children:"My unique experience enhances visual storytelling and user engagement, creating seamless and captivating interactions."}),a.jsx(tv,{children:a.jsx(K0,{})})]})})]})}const rv=A.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: var(--main-button-color);
`,iv=A.div`
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
`,ov=A.p`
  color: var(--secondary-font-color);
  font-size: 20px;
  font-weight: 600;
  margin-top: 0;

  @media (max-width: 478px) {
    font-size: 18px;
  }
`,lv=({onClick:e})=>a.jsxs(rv,{children:[a.jsx(iv,{children:a.jsx("a",{href:"https://github.com/PaulEvans78",target:"_blank",rel:"noopener noreferrer",children:a.jsx(fn,{onClick:e,size:70})})}),a.jsx(ov,{children:"Go to GitHub"})]}),av="data:image/avif;base64,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",sv="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAGNbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAsaWxvYwAAAABEAAACAAEAAAABAAADiAAAAfAAAgAAAAEAAAG1AAAB0wAAAEJpaW5mAAAAAAACAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAAAaaW5mZQIAAAAAAgAAYXYwMUFscGhhAAAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAAw2lwcnAAAACdaXBjbwAAABRpc3BlAAAAAAAAAHgAAAB4AAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQBBYYHAAADy21kYXQSAAoGGBm792FQMsYDEgAKKFDYAsLyjFo30pTtGU3AprQDWuPWfiKO+UiJ6EzD+II/WS4l4BjmY2ofsD4UVg0FduFHPfdGebqmDbZogjz8NVmGLNmvd1wZBili3DkP5CI2o5pZTYFM4gKz8agxQATWZ1TlrNqXta5vvfgPNjGiIZtDUOGwrXNnHLDVjvkLfxMBwqbR0m2IbPrNONVikzkKkyvUc28tZ0OyUJpViZEa6JafpNNpkcjPfAqWweGQn/GcVnzk0Yoqyx10vZ8PizT1YVGcXlyZK/CQWXX1FhfNvTy5B24MWdf7MYW1yiLPyoN770KqUQhYQ4qRESByRLLmnrwEp5hckW1jCOGDkP0LY/ntYGOUyA5bLZqmNySV9t5XOWdZ4GdE+R8FXeS1rBb0B22SeIQg1USJH0KWoUcLH2qF8BXOV/ZSmatXYza1poj526IoyW+Dh7DTvUka0T/SSTrr4EWAIEO7rbAjp4/wR7gEy3QOsWMd7tPNE0tAbaJj3XVDYfXVQiTrmT9N57UyC0p+sSo9LNlVQ9f83M9WtrTbCdfKSccpekK4r/kSVCw09VdOtqfRt8xeT/Ktw3MRZIN2BQi7zkUx8XtpTYEi88rSMhIACgkYGbv3YIEBA0Iy4ANEgACiiihQ1/8mS+0VYnR6q4fJskn/zmz5r8/HO5RC/jcpiT7EXgL7nkn1z3wNWGtgLDEtWNwmPHhYKeugM5Qo0tp0EfAf4j3dOIJc8xkYorcoGN9MkydGBjENigCMQaXlYSXwkN070NiXYlB4ejGnMubTT8WLIWAbiS0EttIlksRTP0XNGN3mRVxR52JrG7VnTo2JXBQf0edMgT7qZtcAmCm7R+YX21UGxCrtNNWyv2vXC8EzRhHwjHaQBaTIc5wf/quoIkhCrJDKkLUWjVdkg6zy11aYNP8qwVMoGr0Fjm+qkqpGDa+iDYUqrRafPaZob8256SRAguMSThE+ks7O0ONlOFENmYyuAsuXbV1oni9V8AH0be/2sXschwRldONXLFzd24TiflNcG96KQ50n9/lAWz8JQwXpIhZkCfjnn////hk7J0GInAd03cB+TSFkV4iNo68ldi91rtW9YbMkMDzm/gnBauTH7fEaUrKs/X+hgaO45zjMNMko+4tM5vRVcakZfbISHhY/O4ul7PXExhgHNvN3ildIQ+whdE57JqjcorGtGkh8cVXVSGocklKhtQZw/ZyMEl5HxqimrgpWe26RkJCJ82t6vySxwJNWgq26QWi///PIQydTjAZ1ZTA=",uv="data:image/avif;base64,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",cv="data:image/avif;base64,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",dv="data:image/avif;base64,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",pv="data:image/avif;base64,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",fv="data:image/avif;base64,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",hv="data:image/avif;base64,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",mv=A.div`
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
    height: 500px;
  }
`,Av=A.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 40px;
`,gv=A.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 85%;
  height: 100%;
  padding-left: 40px;
  color: var(--secondary-font-color);

  @media screen and (max-width: 960px) {
    width: 90%;
  }

  @media screen and (max-width: 478px) {
    padding-left: 20px;
    height: 500px;
  }
`,vv=A.div`
  display: grid;
  row-gap: 16px;
  row-gap: 40px;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 30% 30%;
  padding-left: 60px;

  @media screen and (max-width: 478px) {
    padding-left: 40px;
  }
`,Ut=A.img`
  width: 50%;
  height: auto;

  @media screen and (max-width: 478px) {
    width: 40%;
  }
`,xv=A.div`
  margin-top: auto;
`;function yv(){return a.jsxs(mv,{children:[a.jsx(Av,{children:a.jsxs(vv,{children:[a.jsx(Ut,{src:av,alt:"React Logo."}),a.jsx(Ut,{src:sv,alt:"Webflow Logo."}),a.jsx(Ut,{src:uv,alt:"Figma Logo."}),a.jsx(Ut,{src:cv,alt:"GitHub Logo."}),a.jsx(Ut,{src:dv,alt:"HTML Logo."}),a.jsx(Ut,{src:pv,alt:"CSS Logo."}),a.jsx(Ut,{src:fv,alt:"Javascript Logo."}),a.jsx(Ut,{src:hv,alt:"Photoshop Logo."})]})}),a.jsxs(gv,{children:[a.jsx("h3",{children:"Frontend Dev"}),a.jsx("p",{children:"With a solid understanding of HTML, CSS, JavaScript, and React, I have created visually appealing and user-friendly interfaces for various clients."}),a.jsx(xv,{children:a.jsx(lv,{})})]})]})}const wv="/portfolio/assets/lipusplus_brand_film_hammarby-2024_short-0c3de834.mp4",Sv=A.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: var(--main-button-color);

  @media screen and (max-width: 478px) {
    align-items: center;
  }
`,jv=A.div`
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
`,Cv=A.p`
  color: var(--main-font-color);
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 18px;
  }
`,kv=({onClick:e})=>a.jsxs(Sv,{children:[a.jsx(jv,{children:a.jsx(hf,{onClick:e,size:70})}),a.jsx(Cv,{children:"Play Film"})]}),Ev=A.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: var(--secondary-button-color);

  @media screen and (max-width: 478px) {
    align-items: center;
  }
`,Iv=A.div`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1);
    color: var(--secondary-button-hover-color);
  }

  @media (max-width: 960px) {
    &:hover {
      transform: none;
      color: inherit;
    }
  }
`,Pv=A.p`
  color: var(--main-font-color);
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 18px;
  }
`,Nv=({onClick:e})=>a.jsxs(Ev,{children:[a.jsx(Iv,{children:a.jsx(hr,{to:"/lipusplus",children:a.jsx(fn,{onClick:e,size:70})})}),a.jsx(Pv,{children:"See Case Study"})]}),Bv="/portfolio/assets/lipusPlusLogoWhite-b2e2b769.avif",Rv="/portfolio/assets/lipusplus_brand_film_hammarby-2024-c0930dc4.mp4";function mf(e){return Tn({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",fill:"currentColor"},child:[]}]})(e)}const Tv=Pn`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Ov=A.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  animation: ${Tv} 0.5s ease-out;
`,zv=A.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--main-modal-backgroundcolor);
`,Lv=A.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 3rem;
  color: var(--main-font-color);
  cursor: pointer;
  z-index: 100;
`,bv=A.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Mv=A.video`
  width: 100%;
  height: auto;
`,Fv=({isOpen:e,onClose:t})=>e?a.jsx(Ov,{children:a.jsxs(zv,{children:[a.jsx(Lv,{onClick:t,children:a.jsx(mf,{})}),a.jsx(bv,{children:a.jsx(Mv,{controls:!0,autoPlay:!0,children:a.jsx("source",{src:Rv,type:"video/mp4"})})})]})}):null,Dv=A.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`,Wv=A.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 1;
`,Gv=A.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.32);
  z-index: 2;
`,Vv=A.div`
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
    justify-content: center;
    text-align: center;
    width: 90%;
    height: 650px;
    padding-left: 20px;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  @media screen and (max-width: 320px) {
    padding-top: 120px;
    padding-bottom: 80px;
  }
`,Uv=A.div`
  display: flex;
  padding-top: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 478px) {
    justify-content: center;
  }
`,Qv=A.img`
  width: 30%;
  height: auto;

  @media screen and (max-width: 478px) {
    width: 50%;
  }
`,Yv=A.div`
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
`,$v=({scrollToEvent:e})=>{const t=C.useRef(null),[n,r]=C.useState(!1);return C.useEffect(()=>{const i=setTimeout(()=>{t.current&&t.current.play()},1e3);return()=>clearTimeout(i)},[]),a.jsxs(Dv,{children:[a.jsx(Wv,{ref:t,src:wv,loop:!0,muted:!0,playsInline:!0,alt:"Background video"}),a.jsx(Gv,{}),a.jsxs(Vv,{children:[a.jsx(Uv,{children:a.jsx(Qv,{src:Bv,alt:"LipusPlus logo"})}),a.jsx("h4",{children:"Meet the Physio of Hammarby Handball"}),a.jsx("p",{children:"Brand film highlighting LipusPlus's partnership with Hammarby Handball, showcasing through testimonals the effectiveness of the modality."}),a.jsxs(Yv,{children:[a.jsx(kv,{onClick:()=>r(!0)}),a.jsx(Nv,{onClick:e})]})]}),a.jsx(Fv,{isOpen:n,onClose:()=>r(!1)})]})},Af="/portfolio/assets/lipusPlusLogo-022851c3.avif",gf="/portfolio/assets/lipusHeroImg-44921e74.avif",Hv=A.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: var(--main-button-color);
`,Xv=A.div`
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
`,_v=A.p`
  color: var(--secondary-font-color);
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 478px) {
    font-size: 18px;
  }
`,Kv=({onClick:e})=>a.jsxs(Hv,{children:[a.jsx(Xv,{children:a.jsx(hr,{to:"/lipusplus",children:a.jsx(fn,{onClick:e,size:70})})}),a.jsx(_v,{children:"See Case Study"})]}),Zv=Pn`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,Jv=A.section`
  background-color: var(--main-casecard-background-color);
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
`,qv=A.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 80px;
  color: var(--secondary-font-color);

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
`,e1=A.div`
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
`,t1=A.img`
  width: 40%;
  height: auto;
`,n1=A.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  font-size: 14px;
  z-index: 2;
`,r1=A.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,i1=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 478px) {
    height: 500px;
  }

  ${({isInView:e})=>e&&pr`
      animation: ${Zv} 1s ease-out forwards;
    `}
`,vf=()=>{const e=C.useRef(null),[t,n]=C.useState(!1);return C.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),a.jsxs(Jv,{children:[a.jsxs(qv,{children:[a.jsx("h4",{children:"UX Case study"}),a.jsx(e1,{children:a.jsx(t1,{src:Af,alt:"The logo for LipuspLus"})}),a.jsx("p",{children:"LipusPlus aims to attract physiotherapists and elite athletes to its webinars on the Return to Play concept. An enticing and informative landing page is needed to generate leads for these webinars."}),a.jsx(Kv,{})]}),a.jsxs(r1,{children:[a.jsx(n1,{children:"Photo by Peder Rotkirch."}),a.jsx(i1,{ref:e,src:gf,alt:"A hammarby handball player in green and white stripes holds a ball.",isInView:t})]})]})},xf="/portfolio/assets/vikings-23b289a3.mp4",o1="/portfolio/assets/viaplayLogo-c60ae164.avif",l1=A.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: var(--secondary-button-color);

  @media screen and (max-width: 478px) {
    align-items: center;
  }
`,a1=A.div`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1);
    color: var(--secondary-button-hover-color);
  }

  @media (max-width: 960px) {
    &:hover {
      transform: none;
      color: inherit;
    }
  }
`,s1=A.p`
  color: var(--main-font-color);
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 18px;
  }
`,u1=({onClick:e})=>a.jsxs(l1,{children:[a.jsx(a1,{children:a.jsx("a",{href:"https://paulevans-dop.com/",target:"_blank",rel:"noopener noreferrer",children:a.jsx(fn,{onClick:e,size:70})})}),a.jsx(s1,{children:"See Cinematography Reel"})]}),c1=A.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: var(--main-button-color);

  @media screen and (max-width: 478px) {
    align-items: center;
  }
`,d1=A.div`
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
`,p1=A.p`
  color: var(--main-font-color);
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 18px;
  }
`,f1=({onClick:e})=>a.jsxs(c1,{children:[a.jsx(d1,{children:a.jsx(hf,{onClick:e,size:70})}),a.jsx(p1,{children:"Play Trailer"})]}),h1=Pn`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,m1=A.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  animation: ${h1} 0.5s ease-out;
`,A1=A.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--main-modal-backgroundcolor);
`,g1=A.button`
  position: absolute;
  top: 30px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 3rem;
  color: var(--main-font-color);
  cursor: pointer;
  z-index: 100;
`,v1=A.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,x1=A.video`
  width: 100%;
  height: auto;
`,y1=({isOpen:e,onClose:t})=>e?a.jsx(m1,{children:a.jsxs(A1,{children:[a.jsx(g1,{onClick:t,children:a.jsx(mf,{})}),a.jsx(v1,{children:a.jsx(x1,{controls:!0,autoPlay:!0,children:a.jsx("source",{src:xf,type:"video/mp4"})})})]})}):null,w1=A.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`,S1=A.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 1;
`,j1=A.div`
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
    justify-content: center;
    text-align: center;
    width: 90%;
    padding-left: 20px;
    padding-top: 100px;
    padding-bottom: 120px;
  }

  @media screen and (max-width: 320px) {
    height: 750px;
    padding-top: 100px;
    padding-bottom: 80px;
  }
`,C1=A.div`
  display: flex;
  padding-top: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 478px) {
    justify-content: center;
  }
`,k1=A.img`
  width: 30%;
  height: auto;
`,E1=A.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media screen and (max-width: 478px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`,I1=()=>{const e=C.useRef(null),[t,n]=C.useState(!1);return C.useEffect(()=>{const r=setTimeout(()=>{e.current&&e.current.play()},1e3);return()=>clearTimeout(r)},[]),a.jsxs(w1,{children:[a.jsx(S1,{ref:e,src:xf,autoplay:!0,loop:!0,muted:!0,playsInline:!0,alt:"Background video"}),a.jsxs(j1,{children:[a.jsx(C1,{children:a.jsx(k1,{src:o1,alt:"Viaplays logo"})}),a.jsx("h4",{children:"The Last Journey of the Vikings"}),a.jsx("p",{children:"In collaboration with director James Valesquez, Mopar Studios and Viaplay, I served as the series cinematographer. The production took place in both Sweden and Ireland."}),a.jsxs(E1,{children:[a.jsx(f1,{onClick:()=>n(!0)}),a.jsx(u1,{})]})]}),a.jsx(y1,{isOpen:t,onClose:()=>n(!1)})]})},yf="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAGNbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAsaWxvYwAAAABEAAACAAEAAAABAAAEPAAAA6QAAgAAAAEAAAG1AAAChwAAAEJpaW5mAAAAAAACAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAAAaaW5mZQIAAAAAAgAAYXYwMUFscGhhAAAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAAw2lwcnAAAACdaXBjbwAAABRpc3BlAAAAAAAAAOIAAABTAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQBBYYHAAAGM21kYXQSAAoGGB24aTCoMvoERIACihTYAohzLcGEpGBFf2CpgyBccCxepECDow2i2Kw+EVXXYvyCrubRcGS0cFh7+wRdKuh1Fc6VCY17Puf+G4oopTpefTobNILsinUVasBHEDjkjcyyIyc7peDIMK4w8WBNab91b0z6lRyybeaf1HNusxQroUaxV2wRqSB3ktfiAcxl8U//eY412b4QuMROWcI0Ik4L65A4Sb9I4HxVBhbKljy16A98Gj3GMGCS23ILtLEM/0L57oKuoDljncaO7oAOFRh6uUEO0z/8+nJwRbeG3sZWjqihutZZGO1OnsCVnvsDrYj2XQAYaIlLcfWuurQtR6EkW6KFanemSPMp7m8kBuu9mAWGRykWRp6CzCfGkxFYG69KXEn52CHjowQJfpshcvNPURPI7k2vB6eTTZDyFjSjxfLygef9K+G1HJfYMImu8hiE80KlEWbqmR17aZFTbHwkdtg5lY9O+mRpc16NeHcpb1CbgJuXray939iAAkGIQ9Y0cyP/652FnZvVJn+wnlE+2NiwmAb1CnqoHC846IU4uELsB7xJlBE8sY7lUflLKe3F905N5xVR/LQPik7z9/82/5PYf+7LheXljKau8BAtUimgSXDFJsO2TT1FWk1HPD3TP2qVoZbfz32eAXsRV5tAw15DKdsVdJQHDiyDQdwE7wbD8Xn8p+2XEQ8OaKShkQ2J8PKt/CLhaZ3kzjjWc1hqzvBkxJwW5OVfYVhuVxX7+Ol2ujCQD2HRAZudjS8zfjVKFX8qut9s61kEoJ5+aNwjMygJxZ924h//jCYPMPVD+VGRwea7/QHNAsIUrfBCoWia5QSeoYjWmOrxXSpqiPotarRf0hIACgkYHbhpMECAgaEylAdEgACiiihQ1/8mS+0UxKx77KhdxyMy8Y1dnJPFzuEqPUkn0owPdV1B68B+PdyMbIK60fTKykKEDY6UPE7QxtywJQSJ+Yv4g5mybuLDhkrW0se8lcYrVTVbeLf5vTUBqQTheBSUaL+9y7lOmByGQtsFwpxVbMkVab9rrbD99ZywPxf7FbeHWVE2P9f1lNPosfW/HG3EQUlMPB0vZCWrZRc8/LVfXFsFdfQqRcmkMb//G45dEvpihlbl/+//75yWpx3d4LgqM8bbL/OB9iR+TJ/rOLQQNpq+en/r97/jcS1bt+o5xJ9GGzsjbFQsf+Xqqv8U+0e8MQrM3+dh33NrHViumwm/U++rDp8m9i0XAGlu3JkEJyLhcBN4O0L9bR5QiMeuuSSMYScAqIJw5CeGcsFZ2r3GPfJsJ6J/KFGKEsPjOg/fxiry4IcO+D7f9xxxEZ7uKtde9PJfCdy0dqi8VaBd5pOSty92j93Qvg8/hKDBb5P2FvIawYBiWrt+iQaEehau4k6RxD9ZI7jTv4AOtHBElTvJst2f5VxVR9judilX9F+KBNYhZFui77dcOJSxIFEPnFDf/srRbr8xJ7bm5ParYI403rIhE3cp9Ufcu0+scSu2Vhlbg5+DboNERTrwMGE9NCrmHE0OB4g8exG1v9jrLtUBuUBqLGeweOHxsqjUB6utI/o988Ciz38eiq6g6kR4WjI6jo/TSJW0Ce8U6BHIEaPoXateWwu9bjbM8JpQDiSyAtvRHtBXLVAeJ/vkgVDiRgGwHcnJhGZPdOOV2CHLhp1+z2u/1MikVEp/vFzQpkpSrT8pQx/v7rc8gYxJytLCzpck8VPDNo2DSqPhHMkK1tithPEMywcZnu+Sbak/GhjvyrSx2SuVXmvdEtbD+CDWfW4hcU4CI/nWIv7DvxUyAJ1/pDELhwO5I3lIfmqenKc5iUgIM+O2jtwYRR0cDJb2upUud5CujFdRstgP5hpmhqG/mT6+LHn4x/QM2V0YzSGDo9lW12kgytwvbqqee58UNtTJwM8BZ82Apr3bphL3UlC5QKQA9VwkOYNY1NY7w8bsI1vkyBzeM4asJ28uv1i7pdsbygjI1KkyknO07sJmm6RcBhaAfCsbTWQSfpVXjWzZ4UQtcvluGsJYIAUYBWCAKIgH//y36Dhjvn0XvVDNzKr5ahh0d3DXopAKoPJomQYofkM7otywqMTcdWppKjNRROeA",wf="/portfolio/assets/ebieHeroImg-14466e14.avif",P1=A.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: var(--main-button-color);
`,N1=A.div`
  display: flex;
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
`,B1=A.p`
  color: var(--secondary-font-color);
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 18px;
  }
`,R1=({onClick:e})=>a.jsxs(P1,{children:[a.jsx(N1,{children:a.jsx(hr,{to:"/ebie",children:a.jsx(fn,{onClick:e,size:70})})}),a.jsx(B1,{children:"See Case Study"})]}),T1=Pn`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,O1=A.section`
  background-color: var(--main-casecard-background-color);
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
`,z1=A.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 80px;
  color: var(--secondary-font-color);

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
`,L1=A.div`
  display: flex;
  padding-bottom: 30px;
  padding-top: 30px;
`,b1=A.img`
  width: 40%;
  height: auto;
`,M1=A.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  font-size: 14px;
  z-index: 2;
`,F1=A.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,D1=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 478px) {
    height: 500px;
  }

  ${({isInView:e})=>e&&pr`
      animation: ${T1} 1s ease-out forwards;
    `}
`,Sf=()=>{const e=C.useRef(null),[t,n]=C.useState(!1);return C.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),a.jsxs(O1,{children:[a.jsxs(z1,{children:[a.jsx("h4",{children:"UX Case study"}),a.jsx(L1,{children:a.jsx(b1,{src:yf,alt:"The logo for Ebie"})}),a.jsx("p",{children:"Create and implement a completely new and user-friendly function within the platform that makes it easy for property owners to apply for and manage group insurance. Simplify the application and the overview for insurance status."}),a.jsx(R1,{})]}),a.jsxs(F1,{children:[a.jsx(M1,{children:"Photo from www.Ebie.se"}),a.jsx(D1,{ref:e,src:wf,alt:"A street view on the corner of Sveavägen, Sergelstorg.",isInView:t})]})]})},W1="/portfolio/assets/hidden-7e893598.avif",G1="/portfolio/assets/hiddenMobileImg-1a91cc10.avif",V1="/portfolio/assets/BESTSHORTFILMSPECIALAWARD-EasternEuropeFilmFestival-December2022-489d2b56.avif",U1=A.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;
`,Q1=A.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;

  @media (max-width: 767px) {
    display: none;
  }
`,Y1=A.img`
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;

  @media (max-width: 767px) {
    display: flex;
  }
`,$1=A.div`
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
    text-align: center;
    width: 90%;
    padding-top: 100px;
    padding-bottom: 120px;
    padding-left: 16px;
  }

  @media screen and (max-width: 320px) {
    padding-top: 15px;
  }
`,H1=A.div`
  display: flex;
  padding-top: 30px;

  @media screen and (max-width: 478px) {
    justify-content: center;
  }
`,X1=A.img`
  width: 50%;
  height: auto;
`,_1=A.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  bottom: 0;
  width: 100%;
  height: 40px;
  padding-bottom: 10px;
  z-index: 3;
  color: var(--main-notation-font-color);

  @media screen and (max-width: 478px) {
    justify-content: center;
  }
`,K1=A.p`
  margin-right: 40px;
  font-size: 14px;

  @media screen and (max-width: 478px) {
    margin-right: 0;
  }
`,Z1=({scrollToEvent:e})=>a.jsxs(U1,{children:[a.jsx(_1,{children:a.jsx(K1,{children:"Photography by Nisse Virgin."})}),a.jsx(Q1,{src:W1,alt:"A short film poster. A Man sits with his back to camera contemplating"}),a.jsx(Y1,{src:G1,alt:"A short film poster. A Man sits with his back to camera contemplating"}),a.jsxs($1,{children:[a.jsx("h4",{children:"Hidden"}),a.jsx("p",{children:"My passion for storytelling led me to create a short film, which I directed, produced, and wrote. This film went on to win the Special award for Best Short Film at the Eastern European Short Film Festival."}),a.jsx(H1,{children:a.jsx(X1,{src:V1,alt:"A wreath for Winner Eastern European Short Film Festival "})})]})]}),J1=A.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
`,jc=A.section`
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
`,q1=()=>{const e=C.useRef(null),t=()=>{e.current&&e.current.scrollIntoView({behavior:"smooth"})};return a.jsxs(J1,{children:[a.jsx(h0,{}),a.jsxs(jc,{children:[a.jsx(nv,{}),a.jsx(yv,{})]}),a.jsx($v,{scrollToEvent:t}),a.jsxs(jc,{children:[a.jsx(b0,{}),a.jsx(Y0,{})]}),a.jsx("div",{ref:e}),a.jsx(vf,{}),a.jsx(I1,{}),a.jsx(Sf,{}),a.jsx(Z1,{})]})},ex=A.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
  margin-top: 170px;
`,tx=()=>(C.useRef(null),a.jsxs(ex,{children:[a.jsx(vf,{}),a.jsx(Sf,{})]})),nx="/portfolio/assets/meAbout-b0dd0af4.avif",rx=Pn`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,ix=A.section`
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
`,ox=A.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;
  padding-top: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 80px;
  color: var(--secondary-font-color);

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
`,lx=A.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,ax=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({isInView:e})=>e&&pr`
      animation: ${rx} 1s ease-out forwards;
    `}
`,sx=()=>{const e=C.useRef(null),[t,n]=C.useState(!1);return C.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),a.jsxs(ix,{children:[a.jsxs(ox,{children:[a.jsx("h3",{children:"About me "}),a.jsx("p",{children:"“Hi, I’m Paul! I have worked as a creative for over 20 years. In need of a platform to showcase my work, I taught myself how to code. In 2020, I decided to study web design to gain structure and further insight into the platforms and methods used. My interests extend into AI, particularly image and video generation and recently started developing tools that incorporate AI to aid in my creative work. I have a calm and methodical approach to life, which enables me to navigate challenges with ease. My strong willpower and determination help me stay focused on the goals, even during difficult times."})]}),a.jsx(lx,{children:a.jsx(ax,{ref:e,src:nx,alt:"Paul Evans watching the ocean",isInView:t})})]})},ux="/portfolio/assets/camper-588e3c53.avif",cx=Pn`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,dx=A.section`
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
`,px=A.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 80px;
  color: var(--secondary-font-color);

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
`,fx=A.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,hx=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({isInView:e})=>e&&pr`
      animation: ${cx} 1s ease-out forwards;
    `}
`,mx=()=>{const e=C.useRef(null),[t,n]=C.useState(!1);return C.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),a.jsxs(dx,{children:[a.jsxs(px,{children:[a.jsx("h3",{children:"For fun "}),a.jsx("p",{children:"Surfing and traveling are my two biggest passions. When I'm not paddling out into the sea I like to work out at the gym or swim in the lake. I also cherish the time I spend with my family, friends cooking and watching movies and tv shows."})]}),a.jsx(fx,{children:a.jsx(hx,{ref:e,src:ux,alt:"A surf board propped up against a mobilehome",isInView:t})})]})},Ax=A.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
  margin-top: 170px;
`,gx=()=>(C.useRef(null),a.jsxs(Ax,{children:[a.jsx(sx,{}),a.jsx(mx,{})]})),vx="/portfolio/assets/challenges-70c5b3a7.avif",xx="/portfolio/assets/fans-667fbfce.avif",yx="/portfolio/assets/research-b4a1f59e.avif",wx="/portfolio/assets/mapping-c6580bd3.avif",Sx="/portfolio/assets/lipus-00a0d7ff.avif",jx="/portfolio/assets/physio-5d7e362e.avif",Cx="/portfolio/assets/athlete-40b4363a.avif",kx="/portfolio/assets/insights-cb84265a.avif",Ex="/portfolio/assets/webinar-966c915f.avif",Ix="/portfolio/assets/webinarMobile-18a4ce2a.avif",Px="/portfolio/assets/designOne-24f39a91.avif",Nx="/portfolio/assets/designTwo-b7e3107e.avif",Bx="/portfolio/assets/webflow-baa33610.avif",Rx="/portfolio/assets/reflection-72e94f6a.avif",Tx=A.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 24px;
  color: var(--main-button-color);
`,Ox=A.div`
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
`,zx=A.p`
  color: var(--secondary-font-color);
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 18px;
  }
`,Lx=({onClick:e})=>a.jsxs(Tx,{children:[a.jsx(Ox,{children:a.jsx("a",{href:"https://www.lipusplus.com/casestudies/hammarby",target:"_blank",rel:"noopener noreferrer",children:a.jsx(fn,{onClick:e,size:70})})}),a.jsx(zx,{children:"See live page at LipusPlus.com"})]}),bx=A.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
  margin-top: 170px;

  @media screen and (max-width: 960px) {
    margin-top: 150px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 130px;
  }
`,Mx=A.div`
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
`,Dx=A.div`
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
`,Wx=A.div`
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
`,Gx=A.div`
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
`,Yx=A.div`
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
`,$x=A.div`
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
`,Hx=A.div`
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
`,Xx=A.div`
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
`,_x=A.div`
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
`,Kx=A.div`
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
`,Ge=A.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 60px;
  color: var(--secondary-font-color);

  @media screen and (max-width: 478px) {
    padding-top: 30px;
    padding-left: 40px;
  }

  @media screen and (max-width: 360px) {
    width: 90%;
    padding-top: 15px;
    padding-left: 20px;
  }
`,Zx=A.div`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;

  @media (max-width: 478px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`,Jx=A.img`
  width: 40%;
  height: auto;

  @media (max-width: 320px) {
    width: 50%;
  }
`,Ve=A.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: var(--main-notation-background-color);
  padding-bottom: 10px;

  z-index: 2;
  /* color: var(#cdcccc); */

  @media screen and (max-width: 960px) {
    height: 40px;
  }

  @media screen and (max-width: 478px) {
    height: 60px;
  }
`,Ue=A.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  font-size: 14px;
  text-align: right;
  z-index: 2;
  color: var(--main-notation-font-color);
  /* margin-top: ; */

  @media screen and (max-width: 960px) {
    margin: 0;
    margin-right: 20px;
    margin-bottom: 6px;
  }
`,Qe=A.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`,Ye=A.img`
  width: 100%;
  height: 800px;
  object-fit: cover;

  ${({isInView:e})=>e&&css`
      animation: ${slideInFromRight} 1s ease-out forwards;
    `}

  @media screen and (max-width: 960px) {
    height: 700px;
  }
`,qx=A.img`
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;

  object-fit: cover;
  z-index: 2;

  @media (max-width: 767px) {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;

    object-fit: cover;
    z-index: 2;
  }
`,ey=()=>a.jsxs(bx,{children:[a.jsxs(Mx,{children:[a.jsxs(Ge,{children:[a.jsx("h4",{children:"UX Case study"}),a.jsx(Zx,{children:a.jsx(Jx,{src:Af,alt:"The logo for LipuspLus"})}),a.jsx("h5",{children:"My role"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("span",{className:"boldlarge",children:"UX / UI Designer"})}),a.jsx("li",{children:a.jsx("span",{className:"boldlarge",children:"Frontend Developer"})}),a.jsx("li",{children:a.jsx("span",{className:"boldlarge",children:"Content Creator"})})]})]}),a.jsxs(Qe,{children:[a.jsx(Ve,{children:a.jsx(Ue,{children:"Photo by Peder Rotkirch, LipusPlus."})}),a.jsx(Ye,{src:gf,alt:"A hammarby handball player in green and white stripes holds a ball."})]})]}),a.jsxs(Fx,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Challenges"}),a.jsx("p",{children:"* Understanding Elite Athletes and Physiotherapists everyday struggles."}),a.jsx("p",{children:"* Minimal experience with webinars."}),a.jsx("p",{children:"* Working with Webflow, which was new to me."})]}),a.jsxs(Qe,{children:[a.jsx(Ve,{children:a.jsx(Ue,{children:"Screenshot from partnership film, LipusPlus & Hammarby Handball"})}),a.jsx(Ye,{src:vx,alt:"A hammarby handball player is lead of the court by the team physio."})]})]}),a.jsxs(Dx,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Brief"}),a.jsx("p",{children:"LipusPlus aims to attract physiotherapists and elite athletes to its webinars on the Return to Play concept. An enticing and informative landing page is needed to generate leads for these webinars."}),a.jsx("h5",{children:"Goal"}),a.jsx("p",{children:"Create a user-friendly landing page. Connect with the target group. Convince the user to register for the event. Provide a seamless experience for visitors from registration to processing. Strive for a high conversion rate and satisfaction for both LipusPlus and the participants before, during and after the event. Generate leads for sales processing."})]}),a.jsxs(Qe,{children:[a.jsx(Ve,{children:a.jsx(Ue,{children:"Screenshot from partnership film, LipusPlus & Hammarby Handball"})}),a.jsx(Ye,{src:xx,alt:"Hammarby fans encourgae their team."})]})]}),a.jsxs(Wx,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Key Questions"}),a.jsx("p",{children:"1. How can we make the message and the offer on the landing page clear and attractive to the target group?"}),a.jsx("p",{children:"2. How can we optimise the landing page to increase the conversion rate and get more visitors to sign up for webinars?"}),a.jsx("p",{children:"3. How can we stimulate people to spread the word about the webinar in their surroundings?"})]}),a.jsxs(Qe,{children:[a.jsx(Ve,{children:a.jsx(Ue,{children:"Screenshot of Anne Hopfgarten from partnership film, LipusPlus & Hammarby Handball"})}),a.jsx(Ye,{src:yx,alt:"Anne Hopfgarten sitting for an interview."})]})]}),a.jsxs(Gx,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Qualitative Research"}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Seminar: "})," LipusPlus"]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Observation: "})," LipusPlus Sales Member"]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Observation: "})," LipusPlus Clinician"," "]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Interview: "})," Physiotherapist"]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Interview: "})," Elite athlete"]})]}),a.jsxs(Qe,{children:[a.jsx(Ve,{children:a.jsx(Ue,{children:"Image from research mapping, figma"})}),a.jsx(Ye,{src:wx,alt:"Mapping of the users needs."})]})]}),a.jsxs(Vx,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Results"}),a.jsx("p",{children:a.jsx("span",{className:"bold",children:"LipusPlus"})}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Challenges: "})," Struggles with conversion rates due to a lack of evidence and information about the modality."]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Needs: "})," A convenient platform to present and discuss current and ongoing studies and results."]})]}),a.jsxs(Qe,{children:[a.jsx(Ve,{children:a.jsx(Ue,{children:"Photo by Peder Rotkirch, Lipusplus."})}),a.jsx(Ye,{src:Sx,alt:"A hammarby handball player uses the LipusPlus modality.."})]})]}),a.jsxs(Ux,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Results"}),a.jsx("p",{children:a.jsx("span",{className:"bold",children:"Physiotherapist"})}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Concerns: "})," Need evidence that LipusPlus is effective and safe. Rely on endorsements from prominent clubs and figures in their sport."]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Priorities: "})," They aim to get their patients back to their sport quickly and safely. Their reputation and job are at stake. They question why they should choose LipusPlus over proven traditional methods."]})]}),a.jsxs(Qe,{children:[a.jsx(Ve,{children:a.jsx(Ue,{children:"Screenshot of Anne Hopfgarten from partnership film, LipusPlus & Hammarby Handball"})}),a.jsx(Ye,{src:jx,alt:"Anne Hopfgarten. Hammarby physio."})]})]}),a.jsxs(Qx,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Results"}),a.jsx("p",{children:a.jsx("span",{className:"bold",children:"Athlete"})}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Concerns: "})," Need evidence that LipusPlus is effective and safe. They often rely on endorsements from prominent figures in their sport and trusted physiotherapists."]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Goals: "})," Want to return to their sport as quickly as possible since their income and career goals depend on it."]})]}),a.jsxs(Qe,{children:[a.jsx(Ve,{children:a.jsx(Ue,{children:"Screenshot of Ludvig Lindeberg from partnership film, LipusPlus & Hammarby Handball"})}),a.jsx(Ye,{src:Cx,alt:"Ludvig Lindeberg celebrates winning."})]})]}),a.jsxs(Yx,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Insights"}),a.jsx("p",{children:"* There is skepticism towards Medtech companies."}),a.jsx("p",{children:"* Build trust not just through evidence but also an understanding of the users everyday struggles and lifestyles."}),a.jsx("p",{children:"* A shift towards a sports lifestyle focus, emphasising partnerships rather than solely Medtech, would be more inspirational and trustworthy."}),a.jsxs("p",{children:["* It is essential for the user that the landing page works on all devices and is responsive."," "]}),a.jsx("p",{children:"* Our users lead busy lives, on the go. Headlines, clear and captivating. Copy, persuasive and engaging. We need to get their attention directly."}),a.jsx("p",{children:"* Clearly show the offer and benefits of Return to Play."}),a.jsx("p",{children:"* Clearly communicate the value and benefits of attending the webinar, emphasising credible evidence and success stories."})]}),a.jsxs(Qe,{children:[a.jsx(Ve,{children:a.jsx(Ue,{children:"Image from Unsplash."})}),a.jsx(Ye,{src:kx,alt:"An athlete is lying down on the track."})]})]}),a.jsxs($x,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Webinar Requirements"}),a.jsxs("p",{children:["* The webinar platform should be a stable and proven streaming service."," "]}),a.jsx("p",{children:"* Data collection through the registration form is a must."}),a.jsx("p",{children:"* Email Automation."}),a.jsx("p",{children:"* Option to connect to Hubspot. "}),a.jsx("p",{children:"* Simple and easy to understand registration forms."}),a.jsx("p",{children:"* Custom Registration forms."}),a.jsx("p",{children:"With approximately 260 million users, Vimeo met all our requirements. Since LipusPlus already hosted content on Vimeo, it streamlined our video showcasing process."})]}),a.jsxs(Qe,{children:[a.jsx(Ve,{children:a.jsx(Ue,{children:"Image from Vimeo."})}),a.jsx(Ye,{src:Ex,alt:"A vimeo webinar screen."}),a.jsx(qx,{src:Ix,alt:"Promtional text from vimeo about their webinars."})]})]}),a.jsxs(Hx,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Design"}),a.jsx("p",{children:"Building and improving upon an existing design system. "}),a.jsxs("p",{children:["* Through emotional content we highlighted partnerships for credibility."," "]}),a.jsxs("p",{children:["* Clearly outlined the benefits and starting price of the Return to Play program."," "]}),a.jsxs("p",{children:["* Assure the user that the webinar would discuss evidence from LipusPlus studies."," "]}),a.jsxs("p",{children:["* Engaging Content. Through still images, videos and testimonials."," "]}),a.jsx("p",{children:"* Showcase evidence and studies."}),a.jsxs("p",{children:["* Clear and Compelling Headlines alongside persuasive Copywriting."," "]}),a.jsxs("p",{children:["* A user-friendly registration form with a prominent CTA button."," "]}),a.jsx("p",{children:"* Social Proofing. "}),a.jsx("p",{children:"* Follow-Up Communication. "})]}),a.jsxs(Qe,{children:[a.jsx(Ve,{children:a.jsx(Ue,{children:"Design frames from figma."})}),a.jsx(Ye,{src:Px,alt:"Frames from LipusPlus HiFi Designs."})]})]}),a.jsxs(Xx,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Design"}),a.jsxs("p",{children:["* Through emotional content we highlighted partnerships for credibility."," "]}),a.jsxs("p",{children:["* Clearly outlined the benefits and starting price of the Return to Play program."," "]}),a.jsxs("p",{children:["* Assured the user that the webinar would discuss evidence from LipusPlus studies."," "]})]}),a.jsxs(Qe,{children:[a.jsx(Ve,{children:a.jsx(Ue,{children:"Design frames from figma."})}),a.jsx(Ye,{src:Nx,alt:"Frames from LipusPlus HiFi Designs."})]})]}),a.jsxs(_x,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Frontend"}),a.jsxs("p",{children:["The existing LipusPlus homepage was initially created and is presently hosted via Webflow. A key stipulation for this project was to continue using Webflow."," "]}),a.jsx(Lx,{})]}),a.jsxs(Qe,{children:[a.jsx(Ve,{children:a.jsx(Ue,{children:"Screen shot from Webflow."})}),a.jsx(Ye,{src:Bx,alt:"Webflow. Desktop ."})]})]}),a.jsxs(Kx,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Reflection"}),a.jsxs("p",{children:["This project was incredibly exciting for me for several reasons. Firstly, I had the opportunity to leverage my previous experience as a filmmaker, from conceptualizing and working with the brand to planning and filming interviews and sports coverage. Secondly, this project allowed me to align user needs with brand objectives, achieving a cohesive brand feel that LipusPlus has been striving for. Finally, I had the chance to work with Webflow, exploring a new platform and expanding my skills—an experience I thoroughly enjoyed."," "]}),a.jsx("p",{children:"In conclusion, this project has not only met its goals but also provided a strong template for future case studies, webinars and other promotions. However there is always room for improvement. One area would be creating our own registration form instead of using the embedded Vimeo form. This change would give better design control and allow for a more cohesive user experience."}),a.jsx("p",{children:"This project has been a valuable learning experience. It demonstrated the importance of thorough research, user-centric design, and effective communication. The real-world application of our work and the positive feedback from LipusPlus has been immensely rewarding."})]}),a.jsxs(Qe,{children:[a.jsx(Ve,{children:a.jsx(Ue,{children:"The LipusPlus modality. Photo by Peder Rotkirch, LipusPlus."})}),a.jsx(Ye,{src:Rx,alt:"The lipusPlus modality"})]})]})]}),ty="/portfolio/assets/challengesEbie-948c84b9.avif",ny="/portfolio/assets/briefEbie-dee42c26.avif",ry="/portfolio/assets/researchEbie-fc14e246.avif",iy="/portfolio/assets/persona1-01eeebdf.avif",oy="/portfolio/assets/persona2-e628457a.avif",ly="/portfolio/assets/application1-e9abd0d8.avif",ay="/portfolio/assets/application2-9a1504ec.avif",sy="/portfolio/assets/sorting-ef8a0128.avif",uy="data:image/avif;base64,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",cy="/portfolio/assets/status2-b7b87c98.avif",dy="/portfolio/assets/overview-8b6281de.avif",py="/portfolio/assets/city-25b0252b.avif",fy=A.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
  margin-top: 170px;

  @media screen and (max-width: 960px) {
    margin-top: 150px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 130px;
  }
`,hy=A.div`
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
`,my=A.div`
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
`,Ay=A.div`
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
`,gy=A.div`
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
`,vy=A.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`,xy=A.div`
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
`,yy=A.div`
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
`,wy=A.div`
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
`,Sy=A.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`,jy=A.div`
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
`,Cy=A.div`
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
`,Pt=A.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 60px;
  color: #333333;

  @media screen and (max-width: 478px) {
    padding-top: 30px;
    padding-left: 40px;
  }

  @media screen and (max-width: 360px) {
    width: 90%;
    padding-top: 15px;
    padding-left: 20px;
  }
`,ky=A.div`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
`,Ey=A.img`
  width: 40%;
  height: auto;
`,Ze=A.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  bottom: 0;

  width: 100%;
  height: 40px;
  background-color: var(--main-notation-background-color);
  padding-bottom: 10px;

  z-index: 2;
  color: var(--main-font-color);
`,Je=A.p`
  position: absolute;

  margin-right: 40px;
  font-size: 14px;

  color: var(--main-notation-font-color);
`,qe=A.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,Nt=A.img`
  width: 100%;
  height: 800px;
  object-fit: cover;

  ${({isInView:e})=>e&&css`
      animation: ${slideInFromRight} 1s ease-out forwards;
    `}

  @media screen and (max-width: 478px) {
    height: 700px;
  }
`,Oi=A.img`
  @media screen and (max-width: 478px) {
    display: flex;
  }
`,Iy=()=>a.jsxs(fy,{children:[a.jsxs(hy,{children:[a.jsxs(Pt,{children:[a.jsx("h4",{children:"UX Case study"}),a.jsx(ky,{children:a.jsx(Ey,{src:yf,alt:"The logo for Ebie"})}),a.jsxs("h5",{children:["My role: ",a.jsx("span",{className:"boldxlarge",children:"UX / UI Designer "})]})]}),a.jsxs(qe,{children:[a.jsx(Ze,{children:a.jsx(Je,{children:"Photo from www.Ebie.se"})}),a.jsx(Nt,{src:wf,alt:"A street view on the corner of Sveavägen, Sergelstorg."})]})]}),a.jsxs(my,{children:[a.jsxs(Pt,{children:[a.jsx("h5",{children:"Challenges"}),a.jsx("p",{children:"* Lack of prior knowledge of the real estate industry which prevented us from clearly understanding the specific design task."}),a.jsx("p",{children:"* Understanding user expectations, especially when they are already accustomed to existing solutions and industry standards."}),a.jsxs("p",{children:["* Access to Ebies clients for user research, Ebie is a start up with a limited number of customers, and those they do have are extremely busy."," "]})]}),a.jsxs(qe,{children:[a.jsx(Ze,{children:a.jsx(Je,{children:"Image from Unsplash"})}),a.jsx(Nt,{src:ty,alt:"A hammarby handball player is lead of the court by the team physio."})]})]}),a.jsxs(Ay,{children:[a.jsxs(Pt,{children:[a.jsx("h5",{children:"Brief"}),a.jsx("p",{children:"Develop a user-friendly feature for group insurance. Increase the conversion rate of group insurance."}),a.jsx("h5",{children:"Goal"}),a.jsxs("p",{children:[" ","Create and implement a completely new and user-friendly function within the platform that makes it easy for property owners to apply for and manage group insurance."]}),a.jsx("p",{children:"Increase the use of group insurance by increasing the number of property owners applying for it. This is to be achieved by simplifying and improving the entire application process."})]}),a.jsxs(qe,{children:[a.jsx(Ze,{children:a.jsx(Je,{children:"Image from figma design system"})}),a.jsx(Nt,{src:ny,alt:"A deisgn idea for an online application"})]})]}),a.jsxs(gy,{children:[a.jsxs(Pt,{children:[a.jsx("h5",{children:"Target Group"}),a.jsxs("ul",{children:[a.jsx("li",{children:"Lessor"}),a.jsx("li",{children:"Property Owner"})]}),a.jsx("h5",{children:"Research"}),a.jsx("p",{children:"Carrying out research with Ebies clients proved challenging due to busy schedules, Ebie provided user backgrounds and their preferences, and based on that information, we created personas."})]}),a.jsxs(qe,{children:[a.jsx(Ze,{children:a.jsx(Je,{children:"Data collected by Ebie."})}),a.jsx(Nt,{src:ry,alt:"Research collected by Ebie"})]})]}),a.jsxs(vy,{children:[a.jsxs(qe,{children:[a.jsx(Ze,{children:a.jsx(Je,{children:"Personas created from research."})}),a.jsx(Nt,{src:iy,alt:"Personas built from user research."})]}),a.jsxs(qe,{children:[a.jsx(Ze,{children:a.jsx(Je,{children:"Personas created from research."})}),a.jsx(Nt,{src:oy,alt:"Personas built from user research."})]})]}),a.jsxs(xy,{children:[a.jsxs(Pt,{children:[a.jsx("h5",{children:"Improvement Areas"}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"The application process "})," posed our biggest challenge. Applying for insurance requires a significant amount of information. Our goal was to consolidate this into a single form without overwhelming or confusing the user."]}),a.jsx("p",{children:"Our initial design mirrored a traditional application form. While it was clearer and easier to navigate than previous versions, user testing revealed that there was still room for improvement."})]}),a.jsxs(qe,{children:[a.jsx(Ze,{children:a.jsx(Je,{children:"Our initial application design from figma."})}),a.jsx(Nt,{src:ly,alt:"A traditional application form"})]})]}),a.jsxs(yy,{children:[a.jsxs(Pt,{children:[a.jsx("h5",{children:"Improvement Areas"}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"The new design"})," received a much more positive response from Ebie and performed better during user testing."]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Focus areas. "})," "]}),a.jsx("p",{children:"* We organized the input fields into a column form to enhance readability."}),a.jsx("p",{children:"* To make the form less overwhelming, we implemented fold-out and collapsible sections."}),a.jsx("p",{children:"* Colours to signal when a section is complete. "}),a.jsxs("p",{children:["* A progress bar at the top keeps users informed about their position in the process."," "]}),a.jsxs("p",{children:["* Additionally, we included navigation on the left to allow users to view other applications or add new ones."," "]})]}),a.jsxs(qe,{children:[a.jsx(Ze,{children:a.jsx(Je,{children:"Our re-design from figma."})}),a.jsx(Oi,{src:ay,alt:"An online application form."})]})]}),a.jsxs(wy,{children:[a.jsxs(Pt,{children:[a.jsx("h5",{children:"Improvement Areas"}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Sort Function: "})," Property owners and lessors often manage numerous properties with various tenants coming and going. To facilitate quick sorting between different insurance statuses, we implemented a robust sorting function. Where the user can sort between different status stages. New colours wee added ot the design system to help clearly label the different statuses."," "]})]}),a.jsxs(qe,{children:[a.jsx(Ze,{children:a.jsx(Je,{children:"Proposed sorting buttons, figma."})}),a.jsx(Nt,{src:sy,alt:"Proposed sorting buttons from figma."})]})]}),a.jsxs(Sy,{children:[a.jsxs(qe,{children:[a.jsx(Ze,{children:a.jsx(Je,{children:"Design proposal for insurance status, figma."})}),a.jsx(Oi,{src:uy,alt:"Design for insurance status from figma."})]}),a.jsxs(qe,{children:[a.jsx(Ze,{children:a.jsx(Je,{children:"Design proposal for renewing status, figma."})}),a.jsx(Oi,{src:cy,alt:"Design for insurance status from figma."})]})]}),a.jsxs(jy,{children:[a.jsxs(Pt,{children:[a.jsx("h5",{children:"Improvement Areas"}),a.jsx("p",{children:a.jsx("span",{className:"bold",children:"Overview: "})}),a.jsxs("p",{children:["Within the insurance overview, we added a warning icon to indicate when an action is required, such as when a report has been filed or an invoice needs payment."," "]}),a.jsx("p",{children:"We also incorporated the same status symbols from the search function for clearer status visibility."}),a.jsx("p",{children:"The screening report is displayed directly, eliminating the need to search through other documents."}),a.jsxs("p",{children:["Additionally, we introduced a sorting function that allows users to organise all insurance entries in numeric, alphabetic, or reverse order."," "]})]}),a.jsxs(qe,{children:[a.jsx(Ze,{children:a.jsx(Je,{children:"Design proposal for insurance overview, figma."})}),a.jsx(Oi,{src:dy,alt:"Design proposal for insurance overview."})]})]}),a.jsxs(Cy,{children:[a.jsxs(Pt,{children:[a.jsx("h5",{children:"Reflection"}),a.jsxs("p",{children:["The biggest challenge was understanding the intricacies of the real estate industry and the complexities of the application process. This took time and slowed us down in the beginning but it was also one of the most intresting sides of the project as we learned something new."," "]}),a.jsx("p",{children:"What I enjoyed most about this project was developing the sorting function and the logic behind it. While sorting and filters are not always considered the most visually striking aspect of design, ensuring that the sorting function is clear and intuitive is crucial. It plays a vital role in enhancing user experience by making it easier for users to organise and access information efficiently. The satisfaction came from creating a system that seamlessly integrates into the overall design, making it functional and user-friendly."})]}),a.jsxs(qe,{children:[a.jsx(Ze,{children:a.jsx(Je,{children:"Image from Unsplash."})}),a.jsx(Nt,{src:py,alt:"Street view of Stockholm city with NK in the distance."})]})]})]});A.div`
  overflowy: scroll;
  height: 2500px;
`;const Py=A.div`
  position: fixed;
  width: 100%;
  left: 94%;
  bottom: 40px;
  height: 50px;
  font-size: 4rem;
  z-index: 99;
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
`,Ny=A.div`
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
`,By=()=>{const[e,t]=C.useState(!1),n=()=>{const i=document.documentElement.scrollTop;i>300?t(!0):i<=300&&t(!1)},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return window.addEventListener("scroll",n),a.jsx(Py,{children:a.jsx(Ny,{children:a.jsx(E0,{onClick:r,style:{display:e?"inline":"none",borderRadius:"50%"}})})})},Ry=[{id:1,href:"https://www.linkedin.com/in/paul-evans-3a74605/",icon:a.jsx(k0,{}),des:"LinkedIn"},{id:2,href:"https://www.instagram.com/paulevanscreative/",icon:a.jsx(C0,{}),des:"Instagram"},{id:3,href:"https://www.imdb.com/name/nm3171341/?ref_=ttfc_fc_cr",icon:a.jsx(j0,{}),des:"Imdb"}],Ty=A.footer`
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
`,Oy=A.div`
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
`,zy=A.p`
  display: flex;
  flex-direction: column;
  color: var(--main-font-color);

  margin-bottom: -0.5em;
  text-shadow: 2px 2px 4px black;

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
`,Ly=A.p`
  display: flex;
  flex-direction: column;
  color: var(--main-font-color);

  text-shadow: 2px 2px 4px black;

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
`,by=A.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  justify-items: center;
  margin-right: 2em;
  padding-top: 4em;

  @media screen and (max-width: 960px) {
    padding-top: 2em;
    margin-right: 20px;
  }

  @media screen and (max-width: 320px) {
    flex-direction: column;
    margin-right: 0em;
  }
`,My=A.a`
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
`,Fy=A.p`
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
`,Dy=A.div`
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
`,Wy=A.img`
  text-align: center;
  justify-self: center;
  width: 120px;
  margin-top: 4em;

  @media screen and (max-width: 960px) {
    width: 120px;
  }
`,Cc=A.p`
  font-size: 16px;
  font-weight: 500;
  margin: 2px;

  @media screen and (max-width: 960px) {
    margin: 8px;
  }
`,Gy=ge.forwardRef((e,t)=>a.jsxs(Ty,{ref:t,children:[a.jsx(Dy,{children:a.jsx(Wy,{src:Wa,alt:"the letters P and E merged together to form the logo Paul Evans Creative"})}),a.jsx(Vy,{}),a.jsxs(Oy,{children:[a.jsx(Cc,{children:"Copyright 2024."}),a.jsx(Cc,{children:"Paul Evans."}),a.jsx(zy,{children:a.jsx("a",{href:"mailto:paul.evans.creative@gmail.com",children:"paul.evans.creative@gmail.com"})}),a.jsx(Ly,{children:a.jsx("a",{href:"tel:+46739908858",children:"+46739908858"})})]})]})),Vy=()=>a.jsx(by,{children:a.jsx(Ga.Provider,{value:{size:"2em"},children:Ry.map(e=>a.jsxs(My,{href:e.href,children:[e.icon,a.jsx(Fy,{children:e.des})]},e.id))})}),Uy=()=>{const{pathname:e}=fr();return C.useEffect(()=>{window.scrollTo(0,0)},[e]),null},Qy=A.div`
  min-height: 100%;
  max-width: 100vw;
`,Yy=A.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: space-evenly;
`,$y=()=>{const e=C.useRef(null);return a.jsxs(Xg,{children:[a.jsx(Uy,{}),a.jsxs(Qy,{children:[a.jsx(s0,{footerRef:e}),a.jsxs(Yy,{children:[a.jsxs(Gg,{children:[a.jsx(zn,{path:"/",element:a.jsx(q1,{})}),a.jsx(zn,{path:"/casestudies",element:a.jsx(tx,{})}),a.jsx(zn,{path:"/about",element:a.jsx(gx,{})}),a.jsx(zn,{path:"/lipusplus",element:a.jsx(ey,{})}),a.jsx(zn,{path:"/ebie",element:a.jsx(Iy,{})})]}),a.jsx(Gy,{ref:e})]}),a.jsx(By,{})]})]})};Fl.createRoot(document.getElementById("root")).render(a.jsx(ge.StrictMode,{children:a.jsx($y,{})}));
