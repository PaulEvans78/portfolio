function Tf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function zc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Oc={exports:{}},Co={},Lc={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var li=Symbol.for("react.element"),Rf=Symbol.for("react.portal"),zf=Symbol.for("react.fragment"),Of=Symbol.for("react.strict_mode"),Lf=Symbol.for("react.profiler"),Mf=Symbol.for("react.provider"),Ff=Symbol.for("react.context"),Wf=Symbol.for("react.forward_ref"),Df=Symbol.for("react.suspense"),Gf=Symbol.for("react.memo"),Vf=Symbol.for("react.lazy"),Ks=Symbol.iterator;function Qf(e){return e===null||typeof e!="object"?null:(e=Ks&&e[Ks]||e["@@iterator"],typeof e=="function"?e:null)}var Mc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fc=Object.assign,Wc={};function cr(e,t,n){this.props=e,this.context=t,this.refs=Wc,this.updater=n||Mc}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Dc(){}Dc.prototype=cr.prototype;function Ya(e,t,n){this.props=e,this.context=t,this.refs=Wc,this.updater=n||Mc}var Ua=Ya.prototype=new Dc;Ua.constructor=Ya;Fc(Ua,cr.prototype);Ua.isPureReactComponent=!0;var Zs=Array.isArray,Gc=Object.prototype.hasOwnProperty,Ha={current:null},Vc={key:!0,ref:!0,__self:!0,__source:!0};function Qc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Gc.call(t,r)&&!Vc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:li,type:e,key:o,ref:l,props:i,_owner:Ha.current}}function Yf(e,t){return{$$typeof:li,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $a(e){return typeof e=="object"&&e!==null&&e.$$typeof===li}function Uf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var qs=/\/+/g;function ul(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Uf(""+e.key):t.toString(36)}function zi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case li:case Rf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+ul(l,0):r,Zs(i)?(n="",e!=null&&(n=e.replace(qs,"$&/")+"/"),zi(i,t,n,"",function(c){return c})):i!=null&&($a(i)&&(i=Yf(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(qs,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Zs(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+ul(o,s);l+=zi(o,t,n,u,i)}else if(u=Qf(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+ul(o,s++),l+=zi(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function hi(e,t,n){if(e==null)return e;var r=[],i=0;return zi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Hf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},Oi={transition:null},$f={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Oi,ReactCurrentOwner:Ha};function Yc(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:hi,forEach:function(e,t,n){hi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hi(e,function(){t++}),t},toArray:function(e){return hi(e,function(t){return t})||[]},only:function(e){if(!$a(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=cr;V.Fragment=zf;V.Profiler=Lf;V.PureComponent=Ya;V.StrictMode=Of;V.Suspense=Df;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$f;V.act=Yc;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Fc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Ha.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Gc.call(t,u)&&!Vc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:li,type:e.type,key:i,ref:o,props:r,_owner:l}};V.createContext=function(e){return e={$$typeof:Ff,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Mf,_context:e},e.Consumer=e};V.createElement=Qc;V.createFactory=function(e){var t=Qc.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Wf,render:e}};V.isValidElement=$a;V.lazy=function(e){return{$$typeof:Vf,_payload:{_status:-1,_result:e},_init:Hf}};V.memo=function(e,t){return{$$typeof:Gf,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=Oi.transition;Oi.transition={};try{e()}finally{Oi.transition=t}};V.unstable_act=Yc;V.useCallback=function(e,t){return Fe.current.useCallback(e,t)};V.useContext=function(e){return Fe.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};V.useEffect=function(e,t){return Fe.current.useEffect(e,t)};V.useId=function(){return Fe.current.useId()};V.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Fe.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};V.useRef=function(e){return Fe.current.useRef(e)};V.useState=function(e){return Fe.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Fe.current.useTransition()};V.version="18.3.1";Lc.exports=V;var j=Lc.exports;const ge=zc(j),Xf=Tf({__proto__:null,default:ge},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f=j,Kf=Symbol.for("react.element"),Zf=Symbol.for("react.fragment"),qf=Object.prototype.hasOwnProperty,Jf=_f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eh={key:!0,ref:!0,__self:!0,__source:!0};function Uc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)qf.call(t,r)&&!eh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Kf,type:e,key:o,ref:l,props:i,_owner:Jf.current}}Co.Fragment=Zf;Co.jsx=Uc;Co.jsxs=Uc;Oc.exports=Co;var a=Oc.exports,Dl={},Hc={exports:{}},it={},$c={exports:{}},Xc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,L){var F=I.length;I.push(L);e:for(;0<F;){var $=F-1>>>1,P=I[$];if(0<i(P,L))I[$]=L,I[F]=P,F=$;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var L=I[0],F=I.pop();if(F!==L){I[0]=F;e:for(var $=0,P=I.length,b=P>>>1;$<b;){var z=2*($+1)-1,W=I[z],x=z+1,Y=I[x];if(0>i(W,F))x<P&&0>i(Y,W)?(I[$]=Y,I[x]=F,$=x):(I[$]=W,I[z]=F,$=z);else if(x<P&&0>i(Y,F))I[$]=Y,I[x]=F,$=x;else break e}}return L}function i(I,L){var F=I.sortIndex-L.sortIndex;return F!==0?F:I.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],A=1,p=null,g=3,S=!1,w=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(I){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=I)r(c),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(c)}}function y(I){if(v=!1,h(I),!w)if(n(u)!==null)w=!0,at(k);else{var L=n(c);L!==null&&ye(y,L.startTime-I)}}function k(I,L){w=!1,v&&(v=!1,f(R),R=-1),S=!0;var F=g;try{for(h(L),p=n(u);p!==null&&(!(p.expirationTime>L)||I&&!pe());){var $=p.callback;if(typeof $=="function"){p.callback=null,g=p.priorityLevel;var P=$(p.expirationTime<=L);L=e.unstable_now(),typeof P=="function"?p.callback=P:p===n(u)&&r(u),h(L)}else r(u);p=n(u)}if(p!==null)var b=!0;else{var z=n(c);z!==null&&ye(y,z.startTime-L),b=!1}return b}finally{p=null,g=F,S=!1}}var N=!1,T=null,R=-1,Q=5,M=-1;function pe(){return!(e.unstable_now()-M<Q)}function ue(){if(T!==null){var I=e.unstable_now();M=I;var L=!0;try{L=T(!0,I)}finally{L?me():(N=!1,T=null)}}else N=!1}var me;if(typeof d=="function")me=function(){d(ue)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,xe=Oe.port2;Oe.port1.onmessage=ue,me=function(){xe.postMessage(null)}}else me=function(){C(ue,0)};function at(I){T=I,N||(N=!0,me())}function ye(I,L){R=C(function(){I(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,at(k))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(I){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var F=g;g=L;try{return I()}finally{g=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,L){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var F=g;g=I;try{return L()}finally{g=F}},e.unstable_scheduleCallback=function(I,L,F){var $=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?$+F:$):F=$,I){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=F+P,I={id:A++,callback:L,priorityLevel:I,startTime:F,expirationTime:P,sortIndex:-1},F>$?(I.sortIndex=F,t(c,I),n(u)===null&&I===n(c)&&(v?(f(R),R=-1):v=!0,ye(y,F-$))):(I.sortIndex=P,t(u,I),w||S||(w=!0,at(k))),I},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(I){var L=g;return function(){var F=g;g=L;try{return I.apply(this,arguments)}finally{g=F}}}})(Xc);$c.exports=Xc;var th=$c.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nh=j,rt=th;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _c=new Set,Dr={};function Bn(e,t){tr(e,t),tr(e+"Capture",t)}function tr(e,t){for(Dr[e]=t,e=0;e<t.length;e++)_c.add(t[e])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,rh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Js={},eu={};function ih(e){return Gl.call(eu,e)?!0:Gl.call(Js,e)?!1:rh.test(e)?eu[e]=!0:(Js[e]=!0,!1)}function oh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function lh(e,t,n,r){if(t===null||typeof t>"u"||oh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Be[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xa=/[\-:]([a-z])/g;function _a(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xa,_a);Be[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xa,_a);Be[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xa,_a);Be[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ka(e,t,n,r){var i=Be.hasOwnProperty(t)?Be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(lh(t,n,i,r)&&(n=null),r||i===null?ih(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Gt=nh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mi=Symbol.for("react.element"),Ln=Symbol.for("react.portal"),Mn=Symbol.for("react.fragment"),Za=Symbol.for("react.strict_mode"),Vl=Symbol.for("react.profiler"),Kc=Symbol.for("react.provider"),Zc=Symbol.for("react.context"),qa=Symbol.for("react.forward_ref"),Ql=Symbol.for("react.suspense"),Yl=Symbol.for("react.suspense_list"),Ja=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),qc=Symbol.for("react.offscreen"),tu=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=tu&&e[tu]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,cl;function Er(e){if(cl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);cl=t&&t[1]||""}return`
`+cl+e}var dl=!1;function pl(e,t){if(!e||dl)return"";dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{dl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Er(e):""}function ah(e){switch(e.tag){case 5:return Er(e.type);case 16:return Er("Lazy");case 13:return Er("Suspense");case 19:return Er("SuspenseList");case 0:case 2:case 15:return e=pl(e.type,!1),e;case 11:return e=pl(e.type.render,!1),e;case 1:return e=pl(e.type,!0),e;default:return""}}function Ul(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mn:return"Fragment";case Ln:return"Portal";case Vl:return"Profiler";case Za:return"StrictMode";case Ql:return"Suspense";case Yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zc:return(e.displayName||"Context")+".Consumer";case Kc:return(e._context.displayName||"Context")+".Provider";case qa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ja:return t=e.displayName||null,t!==null?t:Ul(e.type)||"Memo";case Ht:t=e._payload,e=e._init;try{return Ul(e(t))}catch{}}return null}function sh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ul(t);case 8:return t===Za?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uh(e){var t=Jc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ai(e){e._valueTracker||(e._valueTracker=uh(e))}function ed(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Jc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hl(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function nu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function td(e,t){t=t.checked,t!=null&&Ka(e,"checked",t,!1)}function $l(e,t){td(e,t);var n=cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xl(e,t.type,cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ru(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xl(e,t,n){(t!=="number"||$i(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ir=Array.isArray;function _n(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function _l(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function iu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Ir(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:cn(n)}}function nd(e,t){var n=cn(t.value),r=cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ou(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function rd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?rd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gi,id=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gi=gi||document.createElement("div"),gi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ch=["Webkit","ms","Moz","O"];Object.keys(br).forEach(function(e){ch.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),br[t]=br[e]})});function od(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||br.hasOwnProperty(e)&&br[e]?(""+t).trim():t+"px"}function ld(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=od(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var dh=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zl(e,t){if(t){if(dh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function ql(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jl=null;function es(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ea=null,Kn=null,Zn=null;function lu(e){if(e=ui(e)){if(typeof ea!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Bo(t),ea(e.stateNode,e.type,t))}}function ad(e){Kn?Zn?Zn.push(e):Zn=[e]:Kn=e}function sd(){if(Kn){var e=Kn,t=Zn;if(Zn=Kn=null,lu(e),t)for(e=0;e<t.length;e++)lu(t[e])}}function ud(e,t){return e(t)}function cd(){}var fl=!1;function dd(e,t,n){if(fl)return e(t,n);fl=!0;try{return ud(e,t,n)}finally{fl=!1,(Kn!==null||Zn!==null)&&(cd(),sd())}}function Vr(e,t){var n=e.stateNode;if(n===null)return null;var r=Bo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var ta=!1;if(Mt)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){ta=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{ta=!1}function ph(e,t,n,r,i,o,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(A){this.onError(A)}}var Nr=!1,Xi=null,_i=!1,na=null,fh={onError:function(e){Nr=!0,Xi=e}};function hh(e,t,n,r,i,o,l,s,u){Nr=!1,Xi=null,ph.apply(fh,arguments)}function mh(e,t,n,r,i,o,l,s,u){if(hh.apply(this,arguments),Nr){if(Nr){var c=Xi;Nr=!1,Xi=null}else throw Error(E(198));_i||(_i=!0,na=c)}}function bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function au(e){if(bn(e)!==e)throw Error(E(188))}function Ah(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return au(i),e;if(o===r)return au(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function fd(e){return e=Ah(e),e!==null?hd(e):null}function hd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hd(e);if(t!==null)return t;e=e.sibling}return null}var md=rt.unstable_scheduleCallback,su=rt.unstable_cancelCallback,gh=rt.unstable_shouldYield,vh=rt.unstable_requestPaint,de=rt.unstable_now,xh=rt.unstable_getCurrentPriorityLevel,ts=rt.unstable_ImmediatePriority,Ad=rt.unstable_UserBlockingPriority,Ki=rt.unstable_NormalPriority,yh=rt.unstable_LowPriority,gd=rt.unstable_IdlePriority,ko=null,Et=null;function wh(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(ko,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:Ch,Sh=Math.log,jh=Math.LN2;function Ch(e){return e>>>=0,e===0?32:31-(Sh(e)/jh|0)|0}var vi=64,xi=4194304;function Pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Pr(s):(o&=l,o!==0&&(r=Pr(o)))}else l=n&~i,l!==0?r=Pr(l):o!==0&&(r=Pr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yt(t),i=1<<n,r|=e[n],t&=~i;return r}function kh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Eh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-yt(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=kh(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function ra(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vd(){var e=vi;return vi<<=1,!(vi&4194240)&&(vi=64),e}function hl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ai(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function Ih(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-yt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ns(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Z=0;function xd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yd,rs,wd,Sd,jd,ia=!1,yi=[],Jt=null,en=null,tn=null,Qr=new Map,Yr=new Map,Xt=[],Ph="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uu(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":Qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yr.delete(t.pointerId)}}function xr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ui(t),t!==null&&rs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Bh(e,t,n,r,i){switch(t){case"focusin":return Jt=xr(Jt,e,t,n,r,i),!0;case"dragenter":return en=xr(en,e,t,n,r,i),!0;case"mouseover":return tn=xr(tn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Qr.set(o,xr(Qr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Yr.set(o,xr(Yr.get(o)||null,e,t,n,r,i)),!0}return!1}function Cd(e){var t=xn(e.target);if(t!==null){var n=bn(t);if(n!==null){if(t=n.tag,t===13){if(t=pd(n),t!==null){e.blockedOn=t,jd(e.priority,function(){wd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=oa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jl=r,n.target.dispatchEvent(r),Jl=null}else return t=ui(n),t!==null&&rs(t),e.blockedOn=n,!1;t.shift()}return!0}function cu(e,t,n){Li(e)&&n.delete(t)}function bh(){ia=!1,Jt!==null&&Li(Jt)&&(Jt=null),en!==null&&Li(en)&&(en=null),tn!==null&&Li(tn)&&(tn=null),Qr.forEach(cu),Yr.forEach(cu)}function yr(e,t){e.blockedOn===t&&(e.blockedOn=null,ia||(ia=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,bh)))}function Ur(e){function t(i){return yr(i,e)}if(0<yi.length){yr(yi[0],e);for(var n=1;n<yi.length;n++){var r=yi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&yr(Jt,e),en!==null&&yr(en,e),tn!==null&&yr(tn,e),Qr.forEach(t),Yr.forEach(t),n=0;n<Xt.length;n++)r=Xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xt.length&&(n=Xt[0],n.blockedOn===null);)Cd(n),n.blockedOn===null&&Xt.shift()}var qn=Gt.ReactCurrentBatchConfig,qi=!0;function Nh(e,t,n,r){var i=Z,o=qn.transition;qn.transition=null;try{Z=1,is(e,t,n,r)}finally{Z=i,qn.transition=o}}function Th(e,t,n,r){var i=Z,o=qn.transition;qn.transition=null;try{Z=4,is(e,t,n,r)}finally{Z=i,qn.transition=o}}function is(e,t,n,r){if(qi){var i=oa(e,t,n,r);if(i===null)Cl(e,t,r,Ji,n),uu(e,r);else if(Bh(i,e,t,n,r))r.stopPropagation();else if(uu(e,r),t&4&&-1<Ph.indexOf(e)){for(;i!==null;){var o=ui(i);if(o!==null&&yd(o),o=oa(e,t,n,r),o===null&&Cl(e,t,r,Ji,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Cl(e,t,r,null,n)}}var Ji=null;function oa(e,t,n,r){if(Ji=null,e=es(r),e=xn(e),e!==null)if(t=bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=pd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ji=e,null}function kd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xh()){case ts:return 1;case Ad:return 4;case Ki:case yh:return 16;case gd:return 536870912;default:return 16}default:return 16}}var Kt=null,os=null,Mi=null;function Ed(){if(Mi)return Mi;var e,t=os,n=t.length,r,i="value"in Kt?Kt.value:Kt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Mi=i.slice(e,1<r?1-r:void 0)}function Fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wi(){return!0}function du(){return!1}function ot(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wi:du,this.isPropagationStopped=du,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wi)},persist:function(){},isPersistent:wi}),t}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ls=ot(dr),si=le({},dr,{view:0,detail:0}),Rh=ot(si),ml,Al,wr,Eo=le({},si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:as,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(ml=e.screenX-wr.screenX,Al=e.screenY-wr.screenY):Al=ml=0,wr=e),ml)},movementY:function(e){return"movementY"in e?e.movementY:Al}}),pu=ot(Eo),zh=le({},Eo,{dataTransfer:0}),Oh=ot(zh),Lh=le({},si,{relatedTarget:0}),gl=ot(Lh),Mh=le({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Fh=ot(Mh),Wh=le({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dh=ot(Wh),Gh=le({},dr,{data:0}),fu=ot(Gh),Vh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yh[e])?!!t[e]:!1}function as(){return Uh}var Hh=le({},si,{key:function(e){if(e.key){var t=Vh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:as,charCode:function(e){return e.type==="keypress"?Fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$h=ot(Hh),Xh=le({},Eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hu=ot(Xh),_h=le({},si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:as}),Kh=ot(_h),Zh=le({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),qh=ot(Zh),Jh=le({},Eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),em=ot(Jh),tm=[9,13,27,32],ss=Mt&&"CompositionEvent"in window,Tr=null;Mt&&"documentMode"in document&&(Tr=document.documentMode);var nm=Mt&&"TextEvent"in window&&!Tr,Id=Mt&&(!ss||Tr&&8<Tr&&11>=Tr),mu=String.fromCharCode(32),Au=!1;function Pd(e,t){switch(e){case"keyup":return tm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function rm(e,t){switch(e){case"compositionend":return Bd(t);case"keypress":return t.which!==32?null:(Au=!0,mu);case"textInput":return e=t.data,e===mu&&Au?null:e;default:return null}}function im(e,t){if(Fn)return e==="compositionend"||!ss&&Pd(e,t)?(e=Ed(),Mi=os=Kt=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Id&&t.locale!=="ko"?null:t.data;default:return null}}var om={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!om[e.type]:t==="textarea"}function bd(e,t,n,r){ad(r),t=eo(t,"onChange"),0<t.length&&(n=new ls("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rr=null,Hr=null;function lm(e){Gd(e,0)}function Io(e){var t=Gn(e);if(ed(t))return e}function am(e,t){if(e==="change")return t}var Nd=!1;if(Mt){var vl;if(Mt){var xl="oninput"in document;if(!xl){var vu=document.createElement("div");vu.setAttribute("oninput","return;"),xl=typeof vu.oninput=="function"}vl=xl}else vl=!1;Nd=vl&&(!document.documentMode||9<document.documentMode)}function xu(){Rr&&(Rr.detachEvent("onpropertychange",Td),Hr=Rr=null)}function Td(e){if(e.propertyName==="value"&&Io(Hr)){var t=[];bd(t,Hr,e,es(e)),dd(lm,t)}}function sm(e,t,n){e==="focusin"?(xu(),Rr=t,Hr=n,Rr.attachEvent("onpropertychange",Td)):e==="focusout"&&xu()}function um(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Io(Hr)}function cm(e,t){if(e==="click")return Io(t)}function dm(e,t){if(e==="input"||e==="change")return Io(t)}function pm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:pm;function $r(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gl.call(t,i)||!St(e[i],t[i]))return!1}return!0}function yu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wu(e,t){var n=yu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yu(n)}}function Rd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zd(){for(var e=window,t=$i();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$i(e.document)}return t}function us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fm(e){var t=zd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rd(n.ownerDocument.documentElement,n)){if(r!==null&&us(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=wu(n,o);var l=wu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hm=Mt&&"documentMode"in document&&11>=document.documentMode,Wn=null,la=null,zr=null,aa=!1;function Su(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;aa||Wn==null||Wn!==$i(r)||(r=Wn,"selectionStart"in r&&us(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&$r(zr,r)||(zr=r,r=eo(la,"onSelect"),0<r.length&&(t=new ls("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wn)))}function Si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dn={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionend:Si("Transition","TransitionEnd")},yl={},Od={};Mt&&(Od=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function Po(e){if(yl[e])return yl[e];if(!Dn[e])return e;var t=Dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Od)return yl[e]=t[n];return e}var Ld=Po("animationend"),Md=Po("animationiteration"),Fd=Po("animationstart"),Wd=Po("transitionend"),Dd=new Map,ju="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(e,t){Dd.set(e,t),Bn(t,[e])}for(var wl=0;wl<ju.length;wl++){var Sl=ju[wl],mm=Sl.toLowerCase(),Am=Sl[0].toUpperCase()+Sl.slice(1);pn(mm,"on"+Am)}pn(Ld,"onAnimationEnd");pn(Md,"onAnimationIteration");pn(Fd,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(Wd,"onTransitionEnd");tr("onMouseEnter",["mouseout","mouseover"]);tr("onMouseLeave",["mouseout","mouseover"]);tr("onPointerEnter",["pointerout","pointerover"]);tr("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function Cu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,mh(r,t,void 0,e),e.currentTarget=null}function Gd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Cu(i,s,c),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Cu(i,s,c),o=u}}}if(_i)throw e=na,_i=!1,na=null,e}function te(e,t){var n=t[pa];n===void 0&&(n=t[pa]=new Set);var r=e+"__bubble";n.has(r)||(Vd(t,e,2,!1),n.add(r))}function jl(e,t,n){var r=0;t&&(r|=4),Vd(n,e,r,t)}var ji="_reactListening"+Math.random().toString(36).slice(2);function Xr(e){if(!e[ji]){e[ji]=!0,_c.forEach(function(n){n!=="selectionchange"&&(gm.has(n)||jl(n,!1,e),jl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ji]||(t[ji]=!0,jl("selectionchange",!1,t))}}function Vd(e,t,n,r){switch(kd(t)){case 1:var i=Nh;break;case 4:i=Th;break;default:i=is}n=i.bind(null,t,n,e),i=void 0,!ta||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Cl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=xn(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}dd(function(){var c=o,A=es(n),p=[];e:{var g=Dd.get(e);if(g!==void 0){var S=ls,w=e;switch(e){case"keypress":if(Fi(n)===0)break e;case"keydown":case"keyup":S=$h;break;case"focusin":w="focus",S=gl;break;case"focusout":w="blur",S=gl;break;case"beforeblur":case"afterblur":S=gl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Oh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Kh;break;case Ld:case Md:case Fd:S=Fh;break;case Wd:S=qh;break;case"scroll":S=Rh;break;case"wheel":S=em;break;case"copy":case"cut":case"paste":S=Dh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=hu}var v=(t&4)!==0,C=!v&&e==="scroll",f=v?g!==null?g+"Capture":null:g;v=[];for(var d=c,h;d!==null;){h=d;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,f!==null&&(y=Vr(d,f),y!=null&&v.push(_r(d,y,h)))),C)break;d=d.return}0<v.length&&(g=new S(g,w,null,n,A),p.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",g&&n!==Jl&&(w=n.relatedTarget||n.fromElement)&&(xn(w)||w[Ft]))break e;if((S||g)&&(g=A.window===A?A:(g=A.ownerDocument)?g.defaultView||g.parentWindow:window,S?(w=n.relatedTarget||n.toElement,S=c,w=w?xn(w):null,w!==null&&(C=bn(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(S=null,w=c),S!==w)){if(v=pu,y="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=hu,y="onPointerLeave",f="onPointerEnter",d="pointer"),C=S==null?g:Gn(S),h=w==null?g:Gn(w),g=new v(y,d+"leave",S,n,A),g.target=C,g.relatedTarget=h,y=null,xn(A)===c&&(v=new v(f,d+"enter",w,n,A),v.target=h,v.relatedTarget=C,y=v),C=y,S&&w)t:{for(v=S,f=w,d=0,h=v;h;h=zn(h))d++;for(h=0,y=f;y;y=zn(y))h++;for(;0<d-h;)v=zn(v),d--;for(;0<h-d;)f=zn(f),h--;for(;d--;){if(v===f||f!==null&&v===f.alternate)break t;v=zn(v),f=zn(f)}v=null}else v=null;S!==null&&ku(p,g,S,v,!1),w!==null&&C!==null&&ku(p,C,w,v,!0)}}e:{if(g=c?Gn(c):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var k=am;else if(gu(g))if(Nd)k=dm;else{k=um;var N=sm}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=cm);if(k&&(k=k(e,c))){bd(p,k,n,A);break e}N&&N(e,g,c),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&Xl(g,"number",g.value)}switch(N=c?Gn(c):window,e){case"focusin":(gu(N)||N.contentEditable==="true")&&(Wn=N,la=c,zr=null);break;case"focusout":zr=la=Wn=null;break;case"mousedown":aa=!0;break;case"contextmenu":case"mouseup":case"dragend":aa=!1,Su(p,n,A);break;case"selectionchange":if(hm)break;case"keydown":case"keyup":Su(p,n,A)}var T;if(ss)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Fn?Pd(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Id&&n.locale!=="ko"&&(Fn||R!=="onCompositionStart"?R==="onCompositionEnd"&&Fn&&(T=Ed()):(Kt=A,os="value"in Kt?Kt.value:Kt.textContent,Fn=!0)),N=eo(c,R),0<N.length&&(R=new fu(R,e,null,n,A),p.push({event:R,listeners:N}),T?R.data=T:(T=Bd(n),T!==null&&(R.data=T)))),(T=nm?rm(e,n):im(e,n))&&(c=eo(c,"onBeforeInput"),0<c.length&&(A=new fu("onBeforeInput","beforeinput",null,n,A),p.push({event:A,listeners:c}),A.data=T))}Gd(p,t)})}function _r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function eo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Vr(e,n),o!=null&&r.unshift(_r(e,o,i)),o=Vr(e,t),o!=null&&r.push(_r(e,o,i))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ku(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=Vr(n,o),u!=null&&l.unshift(_r(n,u,s))):i||(u=Vr(n,o),u!=null&&l.push(_r(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var vm=/\r\n?/g,xm=/\u0000|\uFFFD/g;function Eu(e){return(typeof e=="string"?e:""+e).replace(vm,`
`).replace(xm,"")}function Ci(e,t,n){if(t=Eu(t),Eu(e)!==t&&n)throw Error(E(425))}function to(){}var sa=null,ua=null;function ca(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var da=typeof setTimeout=="function"?setTimeout:void 0,ym=typeof clearTimeout=="function"?clearTimeout:void 0,Iu=typeof Promise=="function"?Promise:void 0,wm=typeof queueMicrotask=="function"?queueMicrotask:typeof Iu<"u"?function(e){return Iu.resolve(null).then(e).catch(Sm)}:da;function Sm(e){setTimeout(function(){throw e})}function kl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ur(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ur(t)}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pr=Math.random().toString(36).slice(2),kt="__reactFiber$"+pr,Kr="__reactProps$"+pr,Ft="__reactContainer$"+pr,pa="__reactEvents$"+pr,jm="__reactListeners$"+pr,Cm="__reactHandles$"+pr;function xn(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ft]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pu(e);e!==null;){if(n=e[kt])return n;e=Pu(e)}return t}e=n,n=e.parentNode}return null}function ui(e){return e=e[kt]||e[Ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Bo(e){return e[Kr]||null}var fa=[],Vn=-1;function fn(e){return{current:e}}function ne(e){0>Vn||(e.current=fa[Vn],fa[Vn]=null,Vn--)}function ee(e,t){Vn++,fa[Vn]=e.current,e.current=t}var dn={},ze=fn(dn),Xe=fn(!1),Cn=dn;function nr(e,t){var n=e.type.contextTypes;if(!n)return dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function no(){ne(Xe),ne(ze)}function Bu(e,t,n){if(ze.current!==dn)throw Error(E(168));ee(ze,t),ee(Xe,n)}function Qd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,sh(e)||"Unknown",i));return le({},n,r)}function ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Cn=ze.current,ee(ze,e),ee(Xe,Xe.current),!0}function bu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Qd(e,t,Cn),r.__reactInternalMemoizedMergedChildContext=e,ne(Xe),ne(ze),ee(ze,e)):ne(Xe),ee(Xe,n)}var Tt=null,bo=!1,El=!1;function Yd(e){Tt===null?Tt=[e]:Tt.push(e)}function km(e){bo=!0,Yd(e)}function hn(){if(!El&&Tt!==null){El=!0;var e=0,t=Z;try{var n=Tt;for(Z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,bo=!1}catch(i){throw Tt!==null&&(Tt=Tt.slice(e+1)),md(ts,hn),i}finally{Z=t,El=!1}}return null}var Qn=[],Yn=0,io=null,oo=0,st=[],ut=0,kn=null,Rt=1,zt="";function gn(e,t){Qn[Yn++]=oo,Qn[Yn++]=io,io=e,oo=t}function Ud(e,t,n){st[ut++]=Rt,st[ut++]=zt,st[ut++]=kn,kn=e;var r=Rt;e=zt;var i=32-yt(r)-1;r&=~(1<<i),n+=1;var o=32-yt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Rt=1<<32-yt(t)+i|n<<i|r,zt=o+e}else Rt=1<<o|n<<i|r,zt=e}function cs(e){e.return!==null&&(gn(e,1),Ud(e,1,0))}function ds(e){for(;e===io;)io=Qn[--Yn],Qn[Yn]=null,oo=Qn[--Yn],Qn[Yn]=null;for(;e===kn;)kn=st[--ut],st[ut]=null,zt=st[--ut],st[ut]=null,Rt=st[--ut],st[ut]=null}var nt=null,tt=null,re=!1,xt=null;function Hd(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Nu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,tt=nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=kn!==null?{id:Rt,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,nt=e,tt=null,!0):!1;default:return!1}}function ha(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ma(e){if(re){var t=tt;if(t){var n=t;if(!Nu(e,t)){if(ha(e))throw Error(E(418));t=nn(n.nextSibling);var r=nt;t&&Nu(e,t)?Hd(r,n):(e.flags=e.flags&-4097|2,re=!1,nt=e)}}else{if(ha(e))throw Error(E(418));e.flags=e.flags&-4097|2,re=!1,nt=e}}}function Tu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function ki(e){if(e!==nt)return!1;if(!re)return Tu(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ca(e.type,e.memoizedProps)),t&&(t=tt)){if(ha(e))throw $d(),Error(E(418));for(;t;)Hd(e,t),t=nn(t.nextSibling)}if(Tu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=nt?nn(e.stateNode.nextSibling):null;return!0}function $d(){for(var e=tt;e;)e=nn(e.nextSibling)}function rr(){tt=nt=null,re=!1}function ps(e){xt===null?xt=[e]:xt.push(e)}var Em=Gt.ReactCurrentBatchConfig;function Sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Ei(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ru(e){var t=e._init;return t(e._payload)}function Xd(e){function t(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=an(f,d),f.index=0,f.sibling=null,f}function o(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,h,y){return d===null||d.tag!==6?(d=Rl(h,f.mode,y),d.return=f,d):(d=i(d,h),d.return=f,d)}function u(f,d,h,y){var k=h.type;return k===Mn?A(f,d,h.props.children,y,h.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ht&&Ru(k)===d.type)?(y=i(d,h.props),y.ref=Sr(f,d,h),y.return=f,y):(y=Ui(h.type,h.key,h.props,null,f.mode,y),y.ref=Sr(f,d,h),y.return=f,y)}function c(f,d,h,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=zl(h,f.mode,y),d.return=f,d):(d=i(d,h.children||[]),d.return=f,d)}function A(f,d,h,y,k){return d===null||d.tag!==7?(d=jn(h,f.mode,y,k),d.return=f,d):(d=i(d,h),d.return=f,d)}function p(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Rl(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case mi:return h=Ui(d.type,d.key,d.props,null,f.mode,h),h.ref=Sr(f,null,d),h.return=f,h;case Ln:return d=zl(d,f.mode,h),d.return=f,d;case Ht:var y=d._init;return p(f,y(d._payload),h)}if(Ir(d)||gr(d))return d=jn(d,f.mode,h,null),d.return=f,d;Ei(f,d)}return null}function g(f,d,h,y){var k=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:s(f,d,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case mi:return h.key===k?u(f,d,h,y):null;case Ln:return h.key===k?c(f,d,h,y):null;case Ht:return k=h._init,g(f,d,k(h._payload),y)}if(Ir(h)||gr(h))return k!==null?null:A(f,d,h,y,null);Ei(f,h)}return null}function S(f,d,h,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(h)||null,s(d,f,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case mi:return f=f.get(y.key===null?h:y.key)||null,u(d,f,y,k);case Ln:return f=f.get(y.key===null?h:y.key)||null,c(d,f,y,k);case Ht:var N=y._init;return S(f,d,h,N(y._payload),k)}if(Ir(y)||gr(y))return f=f.get(h)||null,A(d,f,y,k,null);Ei(d,y)}return null}function w(f,d,h,y){for(var k=null,N=null,T=d,R=d=0,Q=null;T!==null&&R<h.length;R++){T.index>R?(Q=T,T=null):Q=T.sibling;var M=g(f,T,h[R],y);if(M===null){T===null&&(T=Q);break}e&&T&&M.alternate===null&&t(f,T),d=o(M,d,R),N===null?k=M:N.sibling=M,N=M,T=Q}if(R===h.length)return n(f,T),re&&gn(f,R),k;if(T===null){for(;R<h.length;R++)T=p(f,h[R],y),T!==null&&(d=o(T,d,R),N===null?k=T:N.sibling=T,N=T);return re&&gn(f,R),k}for(T=r(f,T);R<h.length;R++)Q=S(T,f,R,h[R],y),Q!==null&&(e&&Q.alternate!==null&&T.delete(Q.key===null?R:Q.key),d=o(Q,d,R),N===null?k=Q:N.sibling=Q,N=Q);return e&&T.forEach(function(pe){return t(f,pe)}),re&&gn(f,R),k}function v(f,d,h,y){var k=gr(h);if(typeof k!="function")throw Error(E(150));if(h=k.call(h),h==null)throw Error(E(151));for(var N=k=null,T=d,R=d=0,Q=null,M=h.next();T!==null&&!M.done;R++,M=h.next()){T.index>R?(Q=T,T=null):Q=T.sibling;var pe=g(f,T,M.value,y);if(pe===null){T===null&&(T=Q);break}e&&T&&pe.alternate===null&&t(f,T),d=o(pe,d,R),N===null?k=pe:N.sibling=pe,N=pe,T=Q}if(M.done)return n(f,T),re&&gn(f,R),k;if(T===null){for(;!M.done;R++,M=h.next())M=p(f,M.value,y),M!==null&&(d=o(M,d,R),N===null?k=M:N.sibling=M,N=M);return re&&gn(f,R),k}for(T=r(f,T);!M.done;R++,M=h.next())M=S(T,f,R,M.value,y),M!==null&&(e&&M.alternate!==null&&T.delete(M.key===null?R:M.key),d=o(M,d,R),N===null?k=M:N.sibling=M,N=M);return e&&T.forEach(function(ue){return t(f,ue)}),re&&gn(f,R),k}function C(f,d,h,y){if(typeof h=="object"&&h!==null&&h.type===Mn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case mi:e:{for(var k=h.key,N=d;N!==null;){if(N.key===k){if(k=h.type,k===Mn){if(N.tag===7){n(f,N.sibling),d=i(N,h.props.children),d.return=f,f=d;break e}}else if(N.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ht&&Ru(k)===N.type){n(f,N.sibling),d=i(N,h.props),d.ref=Sr(f,N,h),d.return=f,f=d;break e}n(f,N);break}else t(f,N);N=N.sibling}h.type===Mn?(d=jn(h.props.children,f.mode,y,h.key),d.return=f,f=d):(y=Ui(h.type,h.key,h.props,null,f.mode,y),y.ref=Sr(f,d,h),y.return=f,f=y)}return l(f);case Ln:e:{for(N=h.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(f,d.sibling),d=i(d,h.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=zl(h,f.mode,y),d.return=f,f=d}return l(f);case Ht:return N=h._init,C(f,d,N(h._payload),y)}if(Ir(h))return w(f,d,h,y);if(gr(h))return v(f,d,h,y);Ei(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,h),d.return=f,f=d):(n(f,d),d=Rl(h,f.mode,y),d.return=f,f=d),l(f)):n(f,d)}return C}var ir=Xd(!0),_d=Xd(!1),lo=fn(null),ao=null,Un=null,fs=null;function hs(){fs=Un=ao=null}function ms(e){var t=lo.current;ne(lo),e._currentValue=t}function Aa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jn(e,t){ao=e,fs=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function pt(e){var t=e._currentValue;if(fs!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(ao===null)throw Error(E(308));Un=e,ao.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var yn=null;function As(e){yn===null?yn=[e]:yn.push(e)}function Kd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,As(t)):(n.next=i.next,i.next=n),t.interleaved=n,Wt(e,r)}function Wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Wt(e,n)}return i=r.interleaved,i===null?(t.next=t,As(r)):(t.next=i.next,i.next=t),r.interleaved=t,Wt(e,n)}function Wi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ns(e,n)}}function zu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function so(e,t,n,r){var i=e.updateQueue;$t=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var A=e.alternate;A!==null&&(A=A.updateQueue,s=A.lastBaseUpdate,s!==l&&(s===null?A.firstBaseUpdate=c:s.next=c,A.lastBaseUpdate=u))}if(o!==null){var p=i.baseState;l=0,A=c=u=null,s=o;do{var g=s.lane,S=s.eventTime;if((r&g)===g){A!==null&&(A=A.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,v=s;switch(g=t,S=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){p=w.call(S,p,g);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,g=typeof w=="function"?w.call(S,p,g):w,g==null)break e;p=le({},p,g);break e;case 2:$t=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else S={eventTime:S,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},A===null?(c=A=S,u=p):A=A.next=S,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(A===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=A,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);In|=l,e.lanes=l,e.memoizedState=p}}function Ou(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var ci={},It=fn(ci),Zr=fn(ci),qr=fn(ci);function wn(e){if(e===ci)throw Error(E(174));return e}function vs(e,t){switch(ee(qr,t),ee(Zr,e),ee(It,ci),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kl(t,e)}ne(It),ee(It,t)}function or(){ne(It),ne(Zr),ne(qr)}function qd(e){wn(qr.current);var t=wn(It.current),n=Kl(t,e.type);t!==n&&(ee(Zr,e),ee(It,n))}function xs(e){Zr.current===e&&(ne(It),ne(Zr))}var ie=fn(0);function uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Il=[];function ys(){for(var e=0;e<Il.length;e++)Il[e]._workInProgressVersionPrimary=null;Il.length=0}var Di=Gt.ReactCurrentDispatcher,Pl=Gt.ReactCurrentBatchConfig,En=0,oe=null,Ae=null,we=null,co=!1,Or=!1,Jr=0,Im=0;function Ne(){throw Error(E(321))}function ws(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Ss(e,t,n,r,i,o){if(En=o,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Di.current=e===null||e.memoizedState===null?Nm:Tm,e=n(r,i),Or){o=0;do{if(Or=!1,Jr=0,25<=o)throw Error(E(301));o+=1,we=Ae=null,t.updateQueue=null,Di.current=Rm,e=n(r,i)}while(Or)}if(Di.current=po,t=Ae!==null&&Ae.next!==null,En=0,we=Ae=oe=null,co=!1,t)throw Error(E(300));return e}function js(){var e=Jr!==0;return Jr=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?oe.memoizedState=we=e:we=we.next=e,we}function ft(){if(Ae===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=we===null?oe.memoizedState:we.next;if(t!==null)we=t,Ae=e;else{if(e===null)throw Error(E(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},we===null?oe.memoizedState=we=e:we=we.next=e}return we}function ei(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=ft(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,c=o;do{var A=c.lane;if((En&A)===A)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:A,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=p,l=r):u=u.next=p,oe.lanes|=A,In|=A}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=s,St(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,oe.lanes|=o,In|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bl(e){var t=ft(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);St(o,t.memoizedState)||($e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Jd(){}function ep(e,t){var n=oe,r=ft(),i=t(),o=!St(r.memoizedState,i);if(o&&(r.memoizedState=i,$e=!0),r=r.queue,Cs(rp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,ti(9,np.bind(null,n,r,i,t),void 0,null),Se===null)throw Error(E(349));En&30||tp(n,t,i)}return i}function tp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function np(e,t,n,r){t.value=n,t.getSnapshot=r,ip(t)&&op(e)}function rp(e,t,n){return n(function(){ip(t)&&op(e)})}function ip(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function op(e){var t=Wt(e,1);t!==null&&wt(t,e,1,-1)}function Lu(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:e},t.queue=e,e=e.dispatch=bm.bind(null,oe,e),[t.memoizedState,e]}function ti(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function lp(){return ft().memoizedState}function Gi(e,t,n,r){var i=Ct();oe.flags|=e,i.memoizedState=ti(1|t,n,void 0,r===void 0?null:r)}function No(e,t,n,r){var i=ft();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var l=Ae.memoizedState;if(o=l.destroy,r!==null&&ws(r,l.deps)){i.memoizedState=ti(t,n,o,r);return}}oe.flags|=e,i.memoizedState=ti(1|t,n,o,r)}function Mu(e,t){return Gi(8390656,8,e,t)}function Cs(e,t){return No(2048,8,e,t)}function ap(e,t){return No(4,2,e,t)}function sp(e,t){return No(4,4,e,t)}function up(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cp(e,t,n){return n=n!=null?n.concat([e]):null,No(4,4,up.bind(null,t,e),n)}function ks(){}function dp(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ws(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function pp(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ws(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function fp(e,t,n){return En&21?(St(n,t)||(n=vd(),oe.lanes|=n,In|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function Pm(e,t){var n=Z;Z=n!==0&&4>n?n:4,e(!0);var r=Pl.transition;Pl.transition={};try{e(!1),t()}finally{Z=n,Pl.transition=r}}function hp(){return ft().memoizedState}function Bm(e,t,n){var r=ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mp(e))Ap(t,n);else if(n=Kd(e,t,n,r),n!==null){var i=Me();wt(n,e,r,i),gp(n,t,r)}}function bm(e,t,n){var r=ln(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mp(e))Ap(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,St(s,l)){var u=t.interleaved;u===null?(i.next=i,As(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Kd(e,t,i,r),n!==null&&(i=Me(),wt(n,e,r,i),gp(n,t,r))}}function mp(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Ap(e,t){Or=co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ns(e,n)}}var po={readContext:pt,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},Nm={readContext:pt,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:Mu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Gi(4194308,4,up.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gi(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Bm.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:Lu,useDebugValue:ks,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=Lu(!1),t=e[0];return e=Pm.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,i=Ct();if(re){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),Se===null)throw Error(E(349));En&30||tp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Mu(rp.bind(null,r,o,e),[e]),r.flags|=2048,ti(9,np.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ct(),t=Se.identifierPrefix;if(re){var n=zt,r=Rt;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Im++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tm={readContext:pt,useCallback:dp,useContext:pt,useEffect:Cs,useImperativeHandle:cp,useInsertionEffect:ap,useLayoutEffect:sp,useMemo:pp,useReducer:Bl,useRef:lp,useState:function(){return Bl(ei)},useDebugValue:ks,useDeferredValue:function(e){var t=ft();return fp(t,Ae.memoizedState,e)},useTransition:function(){var e=Bl(ei)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Jd,useSyncExternalStore:ep,useId:hp,unstable_isNewReconciler:!1},Rm={readContext:pt,useCallback:dp,useContext:pt,useEffect:Cs,useImperativeHandle:cp,useInsertionEffect:ap,useLayoutEffect:sp,useMemo:pp,useReducer:bl,useRef:lp,useState:function(){return bl(ei)},useDebugValue:ks,useDeferredValue:function(e){var t=ft();return Ae===null?t.memoizedState=e:fp(t,Ae.memoizedState,e)},useTransition:function(){var e=bl(ei)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Jd,useSyncExternalStore:ep,useId:hp,unstable_isNewReconciler:!1};function gt(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ga(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var To={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),i=ln(e),o=Lt(r,i);o.payload=t,n!=null&&(o.callback=n),t=rn(e,o,i),t!==null&&(wt(t,e,i,r),Wi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),i=ln(e),o=Lt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=rn(e,o,i),t!==null&&(wt(t,e,i,r),Wi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=ln(e),i=Lt(n,r);i.tag=2,t!=null&&(i.callback=t),t=rn(e,i,r),t!==null&&(wt(t,e,r,n),Wi(t,e,r))}};function Fu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!$r(n,r)||!$r(i,o):!0}function vp(e,t,n){var r=!1,i=dn,o=t.contextType;return typeof o=="object"&&o!==null?o=pt(o):(i=_e(t)?Cn:ze.current,r=t.contextTypes,o=(r=r!=null)?nr(e,i):dn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=To,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Wu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&To.enqueueReplaceState(t,t.state,null)}function va(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},gs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=pt(o):(o=_e(t)?Cn:ze.current,i.context=nr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ga(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&To.enqueueReplaceState(i,i.state,null),so(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function lr(e,t){try{var n="",r=t;do n+=ah(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Nl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zm=typeof WeakMap=="function"?WeakMap:Map;function xp(e,t,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ho||(ho=!0,Ba=r),xa(e,t)},n}function yp(e,t,n){n=Lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){xa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){xa(e,t),typeof r!="function"&&(on===null?on=new Set([this]):on.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Du(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Xm.bind(null,e,t,n),t.then(e,e))}function Gu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Lt(-1,1),t.tag=2,rn(n,t,1))),n.lanes|=1),e)}var Om=Gt.ReactCurrentOwner,$e=!1;function Le(e,t,n,r){t.child=e===null?_d(t,null,n,r):ir(t,e.child,n,r)}function Qu(e,t,n,r,i){n=n.render;var o=t.ref;return Jn(t,i),r=Ss(e,t,n,r,o,i),n=js(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(re&&n&&cs(t),t.flags|=1,Le(e,t,r,i),t.child)}function Yu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Rs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,wp(e,t,o,r,i)):(e=Ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:$r,n(l,r)&&e.ref===t.ref)return Dt(e,t,i)}return t.flags|=1,e=an(o,r),e.ref=t.ref,e.return=t,t.child=e}function wp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if($r(o,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,Dt(e,t,i)}return ya(e,t,n,r,i)}function Sp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee($n,et),et|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee($n,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ee($n,et),et|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ee($n,et),et|=r;return Le(e,t,i,n),t.child}function jp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ya(e,t,n,r,i){var o=_e(n)?Cn:ze.current;return o=nr(t,o),Jn(t,i),n=Ss(e,t,n,r,o,i),r=js(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(re&&r&&cs(t),t.flags|=1,Le(e,t,n,i),t.child)}function Uu(e,t,n,r,i){if(_e(n)){var o=!0;ro(t)}else o=!1;if(Jn(t,i),t.stateNode===null)Vi(e,t),vp(t,n,r),va(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=pt(c):(c=_e(n)?Cn:ze.current,c=nr(t,c));var A=n.getDerivedStateFromProps,p=typeof A=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Wu(t,l,r,c),$t=!1;var g=t.memoizedState;l.state=g,so(t,r,l,i),u=t.memoizedState,s!==r||g!==u||Xe.current||$t?(typeof A=="function"&&(ga(t,n,A,r),u=t.memoizedState),(s=$t||Fu(t,n,s,r,g,u,c))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Zd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:gt(t.type,s),l.props=c,p=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=pt(u):(u=_e(n)?Cn:ze.current,u=nr(t,u));var S=n.getDerivedStateFromProps;(A=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==p||g!==u)&&Wu(t,l,r,u),$t=!1,g=t.memoizedState,l.state=g,so(t,r,l,i);var w=t.memoizedState;s!==p||g!==w||Xe.current||$t?(typeof S=="function"&&(ga(t,n,S,r),w=t.memoizedState),(c=$t||Fu(t,n,c,r,g,w,u)||!1)?(A||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return wa(e,t,n,r,o,i)}function wa(e,t,n,r,i,o){jp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&bu(t,n,!1),Dt(e,t,o);r=t.stateNode,Om.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=ir(t,e.child,null,o),t.child=ir(t,null,s,o)):Le(e,t,s,o),t.memoizedState=r.state,i&&bu(t,n,!0),t.child}function Cp(e){var t=e.stateNode;t.pendingContext?Bu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bu(e,t.context,!1),vs(e,t.containerInfo)}function Hu(e,t,n,r,i){return rr(),ps(i),t.flags|=256,Le(e,t,n,r),t.child}var Sa={dehydrated:null,treeContext:null,retryLane:0};function ja(e){return{baseLanes:e,cachePool:null,transitions:null}}function kp(e,t,n){var r=t.pendingProps,i=ie.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(ie,i&1),e===null)return ma(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Oo(l,r,0,null),e=jn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ja(n),t.memoizedState=Sa,e):Es(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Lm(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=an(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=an(s,o):(o=jn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ja(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Sa,r}return o=e.child,e=o.sibling,r=an(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Es(e,t){return t=Oo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ii(e,t,n,r){return r!==null&&ps(r),ir(t,e.child,null,n),e=Es(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lm(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Nl(Error(E(422))),Ii(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Oo({mode:"visible",children:r.children},i,0,null),o=jn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ir(t,e.child,null,l),t.child.memoizedState=ja(l),t.memoizedState=Sa,o);if(!(t.mode&1))return Ii(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(E(419)),r=Nl(o,r,void 0),Ii(e,t,l,r)}if(s=(l&e.childLanes)!==0,$e||s){if(r=Se,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Wt(e,i),wt(r,e,i,-1))}return Ts(),r=Nl(Error(E(421))),Ii(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=_m.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,tt=nn(i.nextSibling),nt=t,re=!0,xt=null,e!==null&&(st[ut++]=Rt,st[ut++]=zt,st[ut++]=kn,Rt=e.id,zt=e.overflow,kn=t),t=Es(t,r.children),t.flags|=4096,t)}function $u(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Aa(e.return,t,n)}function Tl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ep(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Le(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$u(e,n,t);else if(e.tag===19)$u(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&uo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tl(t,!0,n,null,o);break;case"together":Tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mm(e,t,n){switch(t.tag){case 3:Cp(t),rr();break;case 5:qd(t);break;case 1:_e(t.type)&&ro(t);break;case 4:vs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(lo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?kp(e,t,n):(ee(ie,ie.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);ee(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ep(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,Sp(e,t,n)}return Dt(e,t,n)}var Ip,Ca,Pp,Bp;Ip=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ca=function(){};Pp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,wn(It.current);var o=null;switch(n){case"input":i=Hl(e,i),r=Hl(e,r),o=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),o=[];break;case"textarea":i=_l(e,i),r=_l(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=to)}Zl(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Dr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Dr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&te("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Bp=function(e,t,n,r){n!==r&&(t.flags|=4)};function jr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Fm(e,t,n){var r=t.pendingProps;switch(ds(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return _e(t.type)&&no(),Te(t),null;case 3:return r=t.stateNode,or(),ne(Xe),ne(ze),ys(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ki(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(Ta(xt),xt=null))),Ca(e,t),Te(t),null;case 5:xs(t);var i=wn(qr.current);if(n=t.type,e!==null&&t.stateNode!=null)Pp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return Te(t),null}if(e=wn(It.current),ki(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[kt]=t,r[Kr]=o,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Br.length;i++)te(Br[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":nu(r,o),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},te("invalid",r);break;case"textarea":iu(r,o),te("invalid",r)}Zl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Ci(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Ci(r.textContent,s,e),i=["children",""+s]):Dr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&te("scroll",r)}switch(n){case"input":Ai(r),ru(r,o,!0);break;case"textarea":Ai(r),ou(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=to)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[kt]=t,e[Kr]=r,Ip(e,t,!1,!1),t.stateNode=e;e:{switch(l=ql(n,r),n){case"dialog":te("cancel",e),te("close",e),i=r;break;case"iframe":case"object":case"embed":te("load",e),i=r;break;case"video":case"audio":for(i=0;i<Br.length;i++)te(Br[i],e);i=r;break;case"source":te("error",e),i=r;break;case"img":case"image":case"link":te("error",e),te("load",e),i=r;break;case"details":te("toggle",e),i=r;break;case"input":nu(e,r),i=Hl(e,r),te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),te("invalid",e);break;case"textarea":iu(e,r),i=_l(e,r),te("invalid",e);break;default:i=r}Zl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?ld(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&id(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Gr(e,u):typeof u=="number"&&Gr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Dr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&te("scroll",e):u!=null&&Ka(e,o,u,l))}switch(n){case"input":Ai(e),ru(e,r,!1);break;case"textarea":Ai(e),ou(e);break;case"option":r.value!=null&&e.setAttribute("value",""+cn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?_n(e,!!r.multiple,o,!1):r.defaultValue!=null&&_n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=to)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)Bp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=wn(qr.current),wn(It.current),ki(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(o=r.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:Ci(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ci(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return Te(t),null;case 13:if(ne(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&tt!==null&&t.mode&1&&!(t.flags&128))$d(),rr(),t.flags|=98560,o=!1;else if(o=ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[kt]=t}else rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),o=!1}else xt!==null&&(Ta(xt),xt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?ve===0&&(ve=3):Ts())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return or(),Ca(e,t),e===null&&Xr(t.stateNode.containerInfo),Te(t),null;case 10:return ms(t.type._context),Te(t),null;case 17:return _e(t.type)&&no(),Te(t),null;case 19:if(ne(ie),o=t.memoizedState,o===null)return Te(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)jr(o,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=uo(e),l!==null){for(t.flags|=128,jr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(ie,ie.current&1|2),t.child}e=e.sibling}o.tail!==null&&de()>ar&&(t.flags|=128,r=!0,jr(o,!1),t.lanes=4194304)}else{if(!r)if(e=uo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!re)return Te(t),null}else 2*de()-o.renderingStartTime>ar&&n!==1073741824&&(t.flags|=128,r=!0,jr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=de(),t.sibling=null,n=ie.current,ee(ie,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return Ns(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?et&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Wm(e,t){switch(ds(t),t.tag){case 1:return _e(t.type)&&no(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return or(),ne(Xe),ne(ze),ys(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xs(t),null;case 13:if(ne(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(ie),null;case 4:return or(),null;case 10:return ms(t.type._context),null;case 22:case 23:return Ns(),null;case 24:return null;default:return null}}var Pi=!1,Re=!1,Dm=typeof WeakSet=="function"?WeakSet:Set,O=null;function Hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function ka(e,t,n){try{n()}catch(r){se(e,t,r)}}var Xu=!1;function Gm(e,t){if(sa=qi,e=zd(),us(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,A=0,p=e,g=null;t:for(;;){for(var S;p!==n||i!==0&&p.nodeType!==3||(s=l+i),p!==o||r!==0&&p.nodeType!==3||(u=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(S=p.firstChild)!==null;)g=p,p=S;for(;;){if(p===e)break t;if(g===n&&++c===i&&(s=l),g===o&&++A===r&&(u=l),(S=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=S}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ua={focusedElem:e,selectionRange:n},qi=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,C=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:gt(t.type,v),C);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){se(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return w=Xu,Xu=!1,w}function Lr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ka(t,n,o)}i=i.next}while(i!==r)}}function Ro(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ea(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bp(e){var t=e.alternate;t!==null&&(e.alternate=null,bp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[Kr],delete t[pa],delete t[jm],delete t[Cm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Np(e){return e.tag===5||e.tag===3||e.tag===4}function _u(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Np(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=to));else if(r!==4&&(e=e.child,e!==null))for(Ia(e,t,n),e=e.sibling;e!==null;)Ia(e,t,n),e=e.sibling}function Pa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pa(e,t,n),e=e.sibling;e!==null;)Pa(e,t,n),e=e.sibling}var Ie=null,vt=!1;function Yt(e,t,n){for(n=n.child;n!==null;)Tp(e,t,n),n=n.sibling}function Tp(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(ko,n)}catch{}switch(n.tag){case 5:Re||Hn(n,t);case 6:var r=Ie,i=vt;Ie=null,Yt(e,t,n),Ie=r,vt=i,Ie!==null&&(vt?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(vt?(e=Ie,n=n.stateNode,e.nodeType===8?kl(e.parentNode,n):e.nodeType===1&&kl(e,n),Ur(e)):kl(Ie,n.stateNode));break;case 4:r=Ie,i=vt,Ie=n.stateNode.containerInfo,vt=!0,Yt(e,t,n),Ie=r,vt=i;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ka(n,t,l),i=i.next}while(i!==r)}Yt(e,t,n);break;case 1:if(!Re&&(Hn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){se(n,t,s)}Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,Yt(e,t,n),Re=r):Yt(e,t,n);break;default:Yt(e,t,n)}}function Ku(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Dm),t.forEach(function(r){var i=Km.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function At(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Ie=s.stateNode,vt=!1;break e;case 3:Ie=s.stateNode.containerInfo,vt=!0;break e;case 4:Ie=s.stateNode.containerInfo,vt=!0;break e}s=s.return}if(Ie===null)throw Error(E(160));Tp(o,l,i),Ie=null,vt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){se(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Rp(t,e),t=t.sibling}function Rp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(At(t,e),jt(e),r&4){try{Lr(3,e,e.return),Ro(3,e)}catch(v){se(e,e.return,v)}try{Lr(5,e,e.return)}catch(v){se(e,e.return,v)}}break;case 1:At(t,e),jt(e),r&512&&n!==null&&Hn(n,n.return);break;case 5:if(At(t,e),jt(e),r&512&&n!==null&&Hn(n,n.return),e.flags&32){var i=e.stateNode;try{Gr(i,"")}catch(v){se(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&td(i,o),ql(s,l);var c=ql(s,o);for(l=0;l<u.length;l+=2){var A=u[l],p=u[l+1];A==="style"?ld(i,p):A==="dangerouslySetInnerHTML"?id(i,p):A==="children"?Gr(i,p):Ka(i,A,p,c)}switch(s){case"input":$l(i,o);break;case"textarea":nd(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?_n(i,!!o.multiple,S,!1):g!==!!o.multiple&&(o.defaultValue!=null?_n(i,!!o.multiple,o.defaultValue,!0):_n(i,!!o.multiple,o.multiple?[]:"",!1))}i[Kr]=o}catch(v){se(e,e.return,v)}}break;case 6:if(At(t,e),jt(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){se(e,e.return,v)}}break;case 3:if(At(t,e),jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ur(t.containerInfo)}catch(v){se(e,e.return,v)}break;case 4:At(t,e),jt(e);break;case 13:At(t,e),jt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Bs=de())),r&4&&Ku(e);break;case 22:if(A=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(c=Re)||A,At(t,e),Re=c):At(t,e),jt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!A&&e.mode&1)for(O=e,A=e.child;A!==null;){for(p=O=A;O!==null;){switch(g=O,S=g.child,g.tag){case 0:case 11:case 14:case 15:Lr(4,g,g.return);break;case 1:Hn(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){se(r,n,v)}}break;case 5:Hn(g,g.return);break;case 22:if(g.memoizedState!==null){qu(p);continue}}S!==null?(S.return=g,O=S):qu(p)}A=A.sibling}e:for(A=null,p=e;;){if(p.tag===5){if(A===null){A=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=p.stateNode,u=p.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=od("display",l))}catch(v){se(e,e.return,v)}}}else if(p.tag===6){if(A===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(v){se(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;A===p&&(A=null),p=p.return}A===p&&(A=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:At(t,e),jt(e),r&4&&Ku(e);break;case 21:break;default:At(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Np(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Gr(i,""),r.flags&=-33);var o=_u(e);Pa(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=_u(e);Ia(e,s,l);break;default:throw Error(E(161))}}catch(u){se(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vm(e,t,n){O=e,zp(e)}function zp(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Pi;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||Re;s=Pi;var c=Re;if(Pi=l,(Re=u)&&!c)for(O=i;O!==null;)l=O,u=l.child,l.tag===22&&l.memoizedState!==null?Ju(i):u!==null?(u.return=l,O=u):Ju(i);for(;o!==null;)O=o,zp(o),o=o.sibling;O=i,Pi=s,Re=c}Zu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):Zu(e)}}function Zu(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||Ro(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:gt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ou(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ou(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var A=c.memoizedState;if(A!==null){var p=A.dehydrated;p!==null&&Ur(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Re||t.flags&512&&Ea(t)}catch(g){se(t,t.return,g)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function qu(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Ju(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ro(4,t)}catch(u){se(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){se(t,i,u)}}var o=t.return;try{Ea(t)}catch(u){se(t,o,u)}break;case 5:var l=t.return;try{Ea(t)}catch(u){se(t,l,u)}}}catch(u){se(t,t.return,u)}if(t===e){O=null;break}var s=t.sibling;if(s!==null){s.return=t.return,O=s;break}O=t.return}}var Qm=Math.ceil,fo=Gt.ReactCurrentDispatcher,Is=Gt.ReactCurrentOwner,dt=Gt.ReactCurrentBatchConfig,U=0,Se=null,fe=null,Pe=0,et=0,$n=fn(0),ve=0,ni=null,In=0,zo=0,Ps=0,Mr=null,He=null,Bs=0,ar=1/0,Nt=null,ho=!1,Ba=null,on=null,Bi=!1,Zt=null,mo=0,Fr=0,ba=null,Qi=-1,Yi=0;function Me(){return U&6?de():Qi!==-1?Qi:Qi=de()}function ln(e){return e.mode&1?U&2&&Pe!==0?Pe&-Pe:Em.transition!==null?(Yi===0&&(Yi=vd()),Yi):(e=Z,e!==0||(e=window.event,e=e===void 0?16:kd(e.type)),e):1}function wt(e,t,n,r){if(50<Fr)throw Fr=0,ba=null,Error(E(185));ai(e,n,r),(!(U&2)||e!==Se)&&(e===Se&&(!(U&2)&&(zo|=n),ve===4&&_t(e,Pe)),Ke(e,r),n===1&&U===0&&!(t.mode&1)&&(ar=de()+500,bo&&hn()))}function Ke(e,t){var n=e.callbackNode;Eh(e,t);var r=Zi(e,e===Se?Pe:0);if(r===0)n!==null&&su(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&su(n),t===1)e.tag===0?km(ec.bind(null,e)):Yd(ec.bind(null,e)),wm(function(){!(U&6)&&hn()}),n=null;else{switch(xd(r)){case 1:n=ts;break;case 4:n=Ad;break;case 16:n=Ki;break;case 536870912:n=gd;break;default:n=Ki}n=Vp(n,Op.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Op(e,t){if(Qi=-1,Yi=0,U&6)throw Error(E(327));var n=e.callbackNode;if(er()&&e.callbackNode!==n)return null;var r=Zi(e,e===Se?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ao(e,r);else{t=r;var i=U;U|=2;var o=Mp();(Se!==e||Pe!==t)&&(Nt=null,ar=de()+500,Sn(e,t));do try{Hm();break}catch(s){Lp(e,s)}while(1);hs(),fo.current=o,U=i,fe!==null?t=0:(Se=null,Pe=0,t=ve)}if(t!==0){if(t===2&&(i=ra(e),i!==0&&(r=i,t=Na(e,i))),t===1)throw n=ni,Sn(e,0),_t(e,r),Ke(e,de()),n;if(t===6)_t(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ym(i)&&(t=Ao(e,r),t===2&&(o=ra(e),o!==0&&(r=o,t=Na(e,o))),t===1))throw n=ni,Sn(e,0),_t(e,r),Ke(e,de()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:vn(e,He,Nt);break;case 3:if(_t(e,r),(r&130023424)===r&&(t=Bs+500-de(),10<t)){if(Zi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=da(vn.bind(null,e,He,Nt),t);break}vn(e,He,Nt);break;case 4:if(_t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-yt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qm(r/1960))-r,10<r){e.timeoutHandle=da(vn.bind(null,e,He,Nt),r);break}vn(e,He,Nt);break;case 5:vn(e,He,Nt);break;default:throw Error(E(329))}}}return Ke(e,de()),e.callbackNode===n?Op.bind(null,e):null}function Na(e,t){var n=Mr;return e.current.memoizedState.isDehydrated&&(Sn(e,t).flags|=256),e=Ao(e,t),e!==2&&(t=He,He=n,t!==null&&Ta(t)),e}function Ta(e){He===null?He=e:He.push.apply(He,e)}function Ym(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!St(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~Ps,t&=~zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),r=1<<n;e[n]=-1,t&=~r}}function ec(e){if(U&6)throw Error(E(327));er();var t=Zi(e,0);if(!(t&1))return Ke(e,de()),null;var n=Ao(e,t);if(e.tag!==0&&n===2){var r=ra(e);r!==0&&(t=r,n=Na(e,r))}if(n===1)throw n=ni,Sn(e,0),_t(e,t),Ke(e,de()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vn(e,He,Nt),Ke(e,de()),null}function bs(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(ar=de()+500,bo&&hn())}}function Pn(e){Zt!==null&&Zt.tag===0&&!(U&6)&&er();var t=U;U|=1;var n=dt.transition,r=Z;try{if(dt.transition=null,Z=1,e)return e()}finally{Z=r,dt.transition=n,U=t,!(U&6)&&hn()}}function Ns(){et=$n.current,ne($n)}function Sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ym(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(ds(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&no();break;case 3:or(),ne(Xe),ne(ze),ys();break;case 5:xs(r);break;case 4:or();break;case 13:ne(ie);break;case 19:ne(ie);break;case 10:ms(r.type._context);break;case 22:case 23:Ns()}n=n.return}if(Se=e,fe=e=an(e.current,null),Pe=et=t,ve=0,ni=null,Ps=zo=In=0,He=Mr=null,yn!==null){for(t=0;t<yn.length;t++)if(n=yn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}yn=null}return e}function Lp(e,t){do{var n=fe;try{if(hs(),Di.current=po,co){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}co=!1}if(En=0,we=Ae=oe=null,Or=!1,Jr=0,Is.current=null,n===null||n.return===null){ve=1,ni=t,fe=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=Pe,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,A=s,p=A.tag;if(!(A.mode&1)&&(p===0||p===11||p===15)){var g=A.alternate;g?(A.updateQueue=g.updateQueue,A.memoizedState=g.memoizedState,A.lanes=g.lanes):(A.updateQueue=null,A.memoizedState=null)}var S=Gu(l);if(S!==null){S.flags&=-257,Vu(S,l,s,o,t),S.mode&1&&Du(o,c,t),t=S,u=c;var w=t.updateQueue;if(w===null){var v=new Set;v.add(u),t.updateQueue=v}else w.add(u);break e}else{if(!(t&1)){Du(o,c,t),Ts();break e}u=Error(E(426))}}else if(re&&s.mode&1){var C=Gu(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Vu(C,l,s,o,t),ps(lr(u,s));break e}}o=u=lr(u,s),ve!==4&&(ve=2),Mr===null?Mr=[o]:Mr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=xp(o,u,t);zu(o,f);break e;case 1:s=u;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(on===null||!on.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=yp(o,s,t);zu(o,y);break e}}o=o.return}while(o!==null)}Wp(n)}catch(k){t=k,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function Mp(){var e=fo.current;return fo.current=po,e===null?po:e}function Ts(){(ve===0||ve===3||ve===2)&&(ve=4),Se===null||!(In&268435455)&&!(zo&268435455)||_t(Se,Pe)}function Ao(e,t){var n=U;U|=2;var r=Mp();(Se!==e||Pe!==t)&&(Nt=null,Sn(e,t));do try{Um();break}catch(i){Lp(e,i)}while(1);if(hs(),U=n,fo.current=r,fe!==null)throw Error(E(261));return Se=null,Pe=0,ve}function Um(){for(;fe!==null;)Fp(fe)}function Hm(){for(;fe!==null&&!gh();)Fp(fe)}function Fp(e){var t=Gp(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?Wp(e):fe=t,Is.current=null}function Wp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Wm(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,fe=null;return}}else if(n=Fm(n,t,et),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);ve===0&&(ve=5)}function vn(e,t,n){var r=Z,i=dt.transition;try{dt.transition=null,Z=1,$m(e,t,n,r)}finally{dt.transition=i,Z=r}return null}function $m(e,t,n,r){do er();while(Zt!==null);if(U&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ih(e,o),e===Se&&(fe=Se=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bi||(Bi=!0,Vp(Ki,function(){return er(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=dt.transition,dt.transition=null;var l=Z;Z=1;var s=U;U|=4,Is.current=null,Gm(e,n),Rp(n,e),fm(ua),qi=!!sa,ua=sa=null,e.current=n,Vm(n),vh(),U=s,Z=l,dt.transition=o}else e.current=n;if(Bi&&(Bi=!1,Zt=e,mo=i),o=e.pendingLanes,o===0&&(on=null),wh(n.stateNode),Ke(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ho)throw ho=!1,e=Ba,Ba=null,e;return mo&1&&e.tag!==0&&er(),o=e.pendingLanes,o&1?e===ba?Fr++:(Fr=0,ba=e):Fr=0,hn(),null}function er(){if(Zt!==null){var e=xd(mo),t=dt.transition,n=Z;try{if(dt.transition=null,Z=16>e?16:e,Zt===null)var r=!1;else{if(e=Zt,Zt=null,mo=0,U&6)throw Error(E(331));var i=U;for(U|=4,O=e.current;O!==null;){var o=O,l=o.child;if(O.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(O=c;O!==null;){var A=O;switch(A.tag){case 0:case 11:case 15:Lr(8,A,o)}var p=A.child;if(p!==null)p.return=A,O=p;else for(;O!==null;){A=O;var g=A.sibling,S=A.return;if(bp(A),A===c){O=null;break}if(g!==null){g.return=S,O=g;break}O=S}}}var w=o.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}O=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,O=l;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Lr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,O=f;break e}O=o.return}}var d=e.current;for(O=d;O!==null;){l=O;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,O=h;else e:for(l=d;O!==null;){if(s=O,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ro(9,s)}}catch(k){se(s,s.return,k)}if(s===l){O=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,O=y;break e}O=s.return}}if(U=i,hn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(ko,e)}catch{}r=!0}return r}finally{Z=n,dt.transition=t}}return!1}function tc(e,t,n){t=lr(n,t),t=xp(e,t,1),e=rn(e,t,1),t=Me(),e!==null&&(ai(e,1,t),Ke(e,t))}function se(e,t,n){if(e.tag===3)tc(e,e,n);else for(;t!==null;){if(t.tag===3){tc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(on===null||!on.has(r))){e=lr(n,e),e=yp(t,e,1),t=rn(t,e,1),e=Me(),t!==null&&(ai(t,1,e),Ke(t,e));break}}t=t.return}}function Xm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(Pe&n)===n&&(ve===4||ve===3&&(Pe&130023424)===Pe&&500>de()-Bs?Sn(e,0):Ps|=n),Ke(e,t)}function Dp(e,t){t===0&&(e.mode&1?(t=xi,xi<<=1,!(xi&130023424)&&(xi=4194304)):t=1);var n=Me();e=Wt(e,t),e!==null&&(ai(e,t,n),Ke(e,n))}function _m(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dp(e,n)}function Km(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Dp(e,n)}var Gp;Gp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,Mm(e,t,n);$e=!!(e.flags&131072)}else $e=!1,re&&t.flags&1048576&&Ud(t,oo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vi(e,t),e=t.pendingProps;var i=nr(t,ze.current);Jn(t,n),i=Ss(null,t,r,e,i,n);var o=js();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(o=!0,ro(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gs(t),i.updater=To,t.stateNode=i,i._reactInternals=t,va(t,r,e,n),t=wa(null,t,r,!0,o,n)):(t.tag=0,re&&o&&cs(t),Le(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=qm(r),e=gt(r,e),i){case 0:t=ya(null,t,r,e,n);break e;case 1:t=Uu(null,t,r,e,n);break e;case 11:t=Qu(null,t,r,e,n);break e;case 14:t=Yu(null,t,r,gt(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),ya(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),Uu(e,t,r,i,n);case 3:e:{if(Cp(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Zd(e,t),so(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=lr(Error(E(423)),t),t=Hu(e,t,r,n,i);break e}else if(r!==i){i=lr(Error(E(424)),t),t=Hu(e,t,r,n,i);break e}else for(tt=nn(t.stateNode.containerInfo.firstChild),nt=t,re=!0,xt=null,n=_d(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rr(),r===i){t=Dt(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return qd(t),e===null&&ma(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ca(r,i)?l=null:o!==null&&ca(r,o)&&(t.flags|=32),jp(e,t),Le(e,t,l,n),t.child;case 6:return e===null&&ma(t),null;case 13:return kp(e,t,n);case 4:return vs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ir(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),Qu(e,t,r,i,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ee(lo,r._currentValue),r._currentValue=l,o!==null)if(St(o.value,l)){if(o.children===i.children&&!Xe.current){t=Dt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Lt(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var A=c.pending;A===null?u.next=u:(u.next=A.next,A.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Aa(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(E(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Aa(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Le(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Jn(t,n),i=pt(i),r=r(i),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,i=gt(r,t.pendingProps),i=gt(r.type,i),Yu(e,t,r,i,n);case 15:return wp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),Vi(e,t),t.tag=1,_e(r)?(e=!0,ro(t)):e=!1,Jn(t,n),vp(t,r,i),va(t,r,i,n),wa(null,t,r,!0,e,n);case 19:return Ep(e,t,n);case 22:return Sp(e,t,n)}throw Error(E(156,t.tag))};function Vp(e,t){return md(e,t)}function Zm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,r){return new Zm(e,t,n,r)}function Rs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qm(e){if(typeof e=="function")return Rs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qa)return 11;if(e===Ja)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ui(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Rs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Mn:return jn(n.children,i,o,t);case Za:l=8,i|=8;break;case Vl:return e=ct(12,n,t,i|2),e.elementType=Vl,e.lanes=o,e;case Ql:return e=ct(13,n,t,i),e.elementType=Ql,e.lanes=o,e;case Yl:return e=ct(19,n,t,i),e.elementType=Yl,e.lanes=o,e;case qc:return Oo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kc:l=10;break e;case Zc:l=9;break e;case qa:l=11;break e;case Ja:l=14;break e;case Ht:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=ct(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function jn(e,t,n,r){return e=ct(7,e,r,t),e.lanes=n,e}function Oo(e,t,n,r){return e=ct(22,e,r,t),e.elementType=qc,e.lanes=n,e.stateNode={isHidden:!1},e}function Rl(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function zl(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hl(0),this.expirationTimes=hl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zs(e,t,n,r,i,o,l,s,u){return e=new Jm(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ct(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gs(o),e}function eA(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ln,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qp(e){if(!e)return dn;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(_e(n))return Qd(e,n,t)}return t}function Yp(e,t,n,r,i,o,l,s,u){return e=zs(n,r,!0,e,i,o,l,s,u),e.context=Qp(null),n=e.current,r=Me(),i=ln(n),o=Lt(r,i),o.callback=t??null,rn(n,o,i),e.current.lanes=i,ai(e,i,r),Ke(e,r),e}function Lo(e,t,n,r){var i=t.current,o=Me(),l=ln(i);return n=Qp(n),t.context===null?t.context=n:t.pendingContext=n,t=Lt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=rn(i,t,l),e!==null&&(wt(e,i,l,o),Wi(e,i,l)),l}function go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Os(e,t){nc(e,t),(e=e.alternate)&&nc(e,t)}function tA(){return null}var Up=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ls(e){this._internalRoot=e}Mo.prototype.render=Ls.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Lo(e,t,null,null)};Mo.prototype.unmount=Ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pn(function(){Lo(null,e,null,null)}),t[Ft]=null}};function Mo(e){this._internalRoot=e}Mo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xt.length&&t!==0&&t<Xt[n].priority;n++);Xt.splice(n,0,e),n===0&&Cd(e)}};function Ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rc(){}function nA(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=go(l);o.call(c)}}var l=Yp(t,r,e,0,null,!1,!1,"",rc);return e._reactRootContainer=l,e[Ft]=l.current,Xr(e.nodeType===8?e.parentNode:e),Pn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=go(u);s.call(c)}}var u=zs(e,0,!1,null,null,!1,!1,"",rc);return e._reactRootContainer=u,e[Ft]=u.current,Xr(e.nodeType===8?e.parentNode:e),Pn(function(){Lo(t,u,n,r)}),u}function Wo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=go(l);s.call(u)}}Lo(t,l,e,i)}else l=nA(n,t,e,i,r);return go(l)}yd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pr(t.pendingLanes);n!==0&&(ns(t,n|1),Ke(t,de()),!(U&6)&&(ar=de()+500,hn()))}break;case 13:Pn(function(){var r=Wt(e,1);if(r!==null){var i=Me();wt(r,e,1,i)}}),Os(e,1)}};rs=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var n=Me();wt(t,e,134217728,n)}Os(e,134217728)}};wd=function(e){if(e.tag===13){var t=ln(e),n=Wt(e,t);if(n!==null){var r=Me();wt(n,e,t,r)}Os(e,t)}};Sd=function(){return Z};jd=function(e,t){var n=Z;try{return Z=e,t()}finally{Z=n}};ea=function(e,t,n){switch(t){case"input":if($l(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Bo(r);if(!i)throw Error(E(90));ed(r),$l(r,i)}}}break;case"textarea":nd(e,n);break;case"select":t=n.value,t!=null&&_n(e,!!n.multiple,t,!1)}};ud=bs;cd=Pn;var rA={usingClientEntryPoint:!1,Events:[ui,Gn,Bo,ad,sd,bs]},Cr={findFiberByHostInstance:xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iA={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fd(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||tA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bi.isDisabled&&bi.supportsFiber)try{ko=bi.inject(iA),Et=bi}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rA;it.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ms(t))throw Error(E(200));return eA(e,t,null,n)};it.createRoot=function(e,t){if(!Ms(e))throw Error(E(299));var n=!1,r="",i=Up;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=zs(e,1,!1,null,null,n,!1,r,i),e[Ft]=t.current,Xr(e.nodeType===8?e.parentNode:e),new Ls(t)};it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=fd(t),e=e===null?null:e.stateNode,e};it.flushSync=function(e){return Pn(e)};it.hydrate=function(e,t,n){if(!Fo(t))throw Error(E(200));return Wo(null,e,t,!0,n)};it.hydrateRoot=function(e,t,n){if(!Ms(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Up;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Yp(t,null,e,1,n??null,i,!1,o,l),e[Ft]=t.current,Xr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Mo(t)};it.render=function(e,t,n){if(!Fo(t))throw Error(E(200));return Wo(null,e,t,!1,n)};it.unmountComponentAtNode=function(e){if(!Fo(e))throw Error(E(40));return e._reactRootContainer?(Pn(function(){Wo(null,null,e,!1,function(){e._reactRootContainer=null,e[Ft]=null})}),!0):!1};it.unstable_batchedUpdates=bs;it.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fo(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Wo(e,t,n,!1,r)};it.version="18.3.1-next-f1338f8080-20240426";function Hp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hp)}catch(e){console.error(e)}}Hp(),Hc.exports=it;var oA=Hc.exports,ic=oA;Dl.createRoot=ic.createRoot,Dl.hydrateRoot=ic.hydrateRoot;var $p={exports:{}},q={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fs=Symbol.for("react.element"),Ws=Symbol.for("react.portal"),Do=Symbol.for("react.fragment"),Go=Symbol.for("react.strict_mode"),Vo=Symbol.for("react.profiler"),Qo=Symbol.for("react.provider"),Yo=Symbol.for("react.context"),lA=Symbol.for("react.server_context"),Uo=Symbol.for("react.forward_ref"),Ho=Symbol.for("react.suspense"),$o=Symbol.for("react.suspense_list"),Xo=Symbol.for("react.memo"),_o=Symbol.for("react.lazy"),aA=Symbol.for("react.offscreen"),Xp;Xp=Symbol.for("react.module.reference");function ht(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Fs:switch(e=e.type,e){case Do:case Vo:case Go:case Ho:case $o:return e;default:switch(e=e&&e.$$typeof,e){case lA:case Yo:case Uo:case _o:case Xo:case Qo:return e;default:return t}}case Ws:return t}}}q.ContextConsumer=Yo;q.ContextProvider=Qo;q.Element=Fs;q.ForwardRef=Uo;q.Fragment=Do;q.Lazy=_o;q.Memo=Xo;q.Portal=Ws;q.Profiler=Vo;q.StrictMode=Go;q.Suspense=Ho;q.SuspenseList=$o;q.isAsyncMode=function(){return!1};q.isConcurrentMode=function(){return!1};q.isContextConsumer=function(e){return ht(e)===Yo};q.isContextProvider=function(e){return ht(e)===Qo};q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fs};q.isForwardRef=function(e){return ht(e)===Uo};q.isFragment=function(e){return ht(e)===Do};q.isLazy=function(e){return ht(e)===_o};q.isMemo=function(e){return ht(e)===Xo};q.isPortal=function(e){return ht(e)===Ws};q.isProfiler=function(e){return ht(e)===Vo};q.isStrictMode=function(e){return ht(e)===Go};q.isSuspense=function(e){return ht(e)===Ho};q.isSuspenseList=function(e){return ht(e)===$o};q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Do||e===Vo||e===Go||e===Ho||e===$o||e===aA||typeof e=="object"&&e!==null&&(e.$$typeof===_o||e.$$typeof===Xo||e.$$typeof===Qo||e.$$typeof===Yo||e.$$typeof===Uo||e.$$typeof===Xp||e.getModuleId!==void 0)};q.typeOf=ht;$p.exports=q;var _p=$p.exports;function sA(e){function t(P,b,z,W,x){for(var Y=0,B=0,ae=0,X=0,K,G,Ce=0,De=0,H,be=H=K=0,_=0,ke=0,mr=0,Ee=0,fi=z.length,Ar=fi-1,mt,D="",ce="",al="",sl="",Qt;_<fi;){if(G=z.charCodeAt(_),_===Ar&&B+X+ae+Y!==0&&(B!==0&&(G=B===47?10:47),X=ae=Y=0,fi++,Ar++),B+X+ae+Y===0){if(_===Ar&&(0<ke&&(D=D.replace(g,"")),0<D.trim().length)){switch(G){case 32:case 9:case 59:case 13:case 10:break;default:D+=z.charAt(_)}G=59}switch(G){case 123:for(D=D.trim(),K=D.charCodeAt(0),H=1,Ee=++_;_<fi;){switch(G=z.charCodeAt(_)){case 123:H++;break;case 125:H--;break;case 47:switch(G=z.charCodeAt(_+1)){case 42:case 47:e:{for(be=_+1;be<Ar;++be)switch(z.charCodeAt(be)){case 47:if(G===42&&z.charCodeAt(be-1)===42&&_+2!==be){_=be+1;break e}break;case 10:if(G===47){_=be+1;break e}}_=be}}break;case 91:G++;case 40:G++;case 34:case 39:for(;_++<Ar&&z.charCodeAt(_)!==G;);}if(H===0)break;_++}switch(H=z.substring(Ee,_),K===0&&(K=(D=D.replace(p,"").trim()).charCodeAt(0)),K){case 64:switch(0<ke&&(D=D.replace(g,"")),G=D.charCodeAt(1),G){case 100:case 109:case 115:case 45:ke=b;break;default:ke=at}if(H=t(b,ke,H,G,x+1),Ee=H.length,0<I&&(ke=n(at,D,mr),Qt=s(3,H,ke,b,me,ue,Ee,G,x,W),D=ke.join(""),Qt!==void 0&&(Ee=(H=Qt.trim()).length)===0&&(G=0,H="")),0<Ee)switch(G){case 115:D=D.replace(N,l);case 100:case 109:case 45:H=D+"{"+H+"}";break;case 107:D=D.replace(d,"$1 $2"),H=D+"{"+H+"}",H=xe===1||xe===2&&o("@"+H,3)?"@-webkit-"+H+"@"+H:"@"+H;break;default:H=D+H,W===112&&(H=(ce+=H,""))}else H="";break;default:H=t(b,n(b,D,mr),H,W,x+1)}al+=H,H=mr=ke=be=K=0,D="",G=z.charCodeAt(++_);break;case 125:case 59:if(D=(0<ke?D.replace(g,""):D).trim(),1<(Ee=D.length))switch(be===0&&(K=D.charCodeAt(0),K===45||96<K&&123>K)&&(Ee=(D=D.replace(" ",":")).length),0<I&&(Qt=s(1,D,b,P,me,ue,ce.length,W,x,W))!==void 0&&(Ee=(D=Qt.trim()).length)===0&&(D="\0\0"),K=D.charCodeAt(0),G=D.charCodeAt(1),K){case 0:break;case 64:if(G===105||G===99){sl+=D+z.charAt(_);break}default:D.charCodeAt(Ee-1)!==58&&(ce+=i(D,K,G,D.charCodeAt(2)))}mr=ke=be=K=0,D="",G=z.charCodeAt(++_)}}switch(G){case 13:case 10:B===47?B=0:1+K===0&&W!==107&&0<D.length&&(ke=1,D+="\0"),0<I*F&&s(0,D,b,P,me,ue,ce.length,W,x,W),ue=1,me++;break;case 59:case 125:if(B+X+ae+Y===0){ue++;break}default:switch(ue++,mt=z.charAt(_),G){case 9:case 32:if(X+Y+B===0)switch(Ce){case 44:case 58:case 9:case 32:mt="";break;default:G!==32&&(mt=" ")}break;case 0:mt="\\0";break;case 12:mt="\\f";break;case 11:mt="\\v";break;case 38:X+B+Y===0&&(ke=mr=1,mt="\f"+mt);break;case 108:if(X+B+Y+Oe===0&&0<be)switch(_-be){case 2:Ce===112&&z.charCodeAt(_-3)===58&&(Oe=Ce);case 8:De===111&&(Oe=De)}break;case 58:X+B+Y===0&&(be=_);break;case 44:B+ae+X+Y===0&&(ke=1,mt+="\r");break;case 34:case 39:B===0&&(X=X===G?0:X===0?G:X);break;case 91:X+B+ae===0&&Y++;break;case 93:X+B+ae===0&&Y--;break;case 41:X+B+Y===0&&ae--;break;case 40:if(X+B+Y===0){if(K===0)switch(2*Ce+3*De){case 533:break;default:K=1}ae++}break;case 64:B+ae+X+Y+be+H===0&&(H=1);break;case 42:case 47:if(!(0<X+Y+ae))switch(B){case 0:switch(2*G+3*z.charCodeAt(_+1)){case 235:B=47;break;case 220:Ee=_,B=42}break;case 42:G===47&&Ce===42&&Ee+2!==_&&(z.charCodeAt(Ee+2)===33&&(ce+=z.substring(Ee,_+1)),mt="",B=0)}}B===0&&(D+=mt)}De=Ce,Ce=G,_++}if(Ee=ce.length,0<Ee){if(ke=b,0<I&&(Qt=s(2,ce,ke,P,me,ue,Ee,W,x,W),Qt!==void 0&&(ce=Qt).length===0))return sl+ce+al;if(ce=ke.join(",")+"{"+ce+"}",xe*Oe!==0){switch(xe!==2||o(ce,2)||(Oe=0),Oe){case 111:ce=ce.replace(y,":-moz-$1")+ce;break;case 112:ce=ce.replace(h,"::-webkit-input-$1")+ce.replace(h,"::-moz-$1")+ce.replace(h,":-ms-input-$1")+ce}Oe=0}}return sl+ce+al}function n(P,b,z){var W=b.trim().split(C);b=W;var x=W.length,Y=P.length;switch(Y){case 0:case 1:var B=0;for(P=Y===0?"":P[0]+" ";B<x;++B)b[B]=r(P,b[B],z).trim();break;default:var ae=B=0;for(b=[];B<x;++B)for(var X=0;X<Y;++X)b[ae++]=r(P[X]+" ",W[B],z).trim()}return b}function r(P,b,z){var W=b.charCodeAt(0);switch(33>W&&(W=(b=b.trim()).charCodeAt(0)),W){case 38:return b.replace(f,"$1"+P.trim());case 58:return P.trim()+b.replace(f,"$1"+P.trim());default:if(0<1*z&&0<b.indexOf("\f"))return b.replace(f,(P.charCodeAt(0)===58?"":"$1")+P.trim())}return P+b}function i(P,b,z,W){var x=P+";",Y=2*b+3*z+4*W;if(Y===944){P=x.indexOf(":",9)+1;var B=x.substring(P,x.length-1).trim();return B=x.substring(0,P).trim()+B+";",xe===1||xe===2&&o(B,1)?"-webkit-"+B+B:B}if(xe===0||xe===2&&!o(x,1))return x;switch(Y){case 1015:return x.charCodeAt(10)===97?"-webkit-"+x+x:x;case 951:return x.charCodeAt(3)===116?"-webkit-"+x+x:x;case 963:return x.charCodeAt(5)===110?"-webkit-"+x+x:x;case 1009:if(x.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+x+x;case 978:return"-webkit-"+x+"-moz-"+x+x;case 1019:case 983:return"-webkit-"+x+"-moz-"+x+"-ms-"+x+x;case 883:if(x.charCodeAt(8)===45)return"-webkit-"+x+x;if(0<x.indexOf("image-set(",11))return x.replace(pe,"$1-webkit-$2")+x;break;case 932:if(x.charCodeAt(4)===45)switch(x.charCodeAt(5)){case 103:return"-webkit-box-"+x.replace("-grow","")+"-webkit-"+x+"-ms-"+x.replace("grow","positive")+x;case 115:return"-webkit-"+x+"-ms-"+x.replace("shrink","negative")+x;case 98:return"-webkit-"+x+"-ms-"+x.replace("basis","preferred-size")+x}return"-webkit-"+x+"-ms-"+x+x;case 964:return"-webkit-"+x+"-ms-flex-"+x+x;case 1023:if(x.charCodeAt(8)!==99)break;return B=x.substring(x.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+B+"-webkit-"+x+"-ms-flex-pack"+B+x;case 1005:return w.test(x)?x.replace(S,":-webkit-")+x.replace(S,":-moz-")+x:x;case 1e3:switch(B=x.substring(13).trim(),b=B.indexOf("-")+1,B.charCodeAt(0)+B.charCodeAt(b)){case 226:B=x.replace(k,"tb");break;case 232:B=x.replace(k,"tb-rl");break;case 220:B=x.replace(k,"lr");break;default:return x}return"-webkit-"+x+"-ms-"+B+x;case 1017:if(x.indexOf("sticky",9)===-1)break;case 975:switch(b=(x=P).length-10,B=(x.charCodeAt(b)===33?x.substring(0,b):x).substring(P.indexOf(":",7)+1).trim(),Y=B.charCodeAt(0)+(B.charCodeAt(7)|0)){case 203:if(111>B.charCodeAt(8))break;case 115:x=x.replace(B,"-webkit-"+B)+";"+x;break;case 207:case 102:x=x.replace(B,"-webkit-"+(102<Y?"inline-":"")+"box")+";"+x.replace(B,"-webkit-"+B)+";"+x.replace(B,"-ms-"+B+"box")+";"+x}return x+";";case 938:if(x.charCodeAt(5)===45)switch(x.charCodeAt(6)){case 105:return B=x.replace("-items",""),"-webkit-"+x+"-webkit-box-"+B+"-ms-flex-"+B+x;case 115:return"-webkit-"+x+"-ms-flex-item-"+x.replace(R,"")+x;default:return"-webkit-"+x+"-ms-flex-line-pack"+x.replace("align-content","").replace(R,"")+x}break;case 973:case 989:if(x.charCodeAt(3)!==45||x.charCodeAt(4)===122)break;case 931:case 953:if(M.test(P)===!0)return(B=P.substring(P.indexOf(":")+1)).charCodeAt(0)===115?i(P.replace("stretch","fill-available"),b,z,W).replace(":fill-available",":stretch"):x.replace(B,"-webkit-"+B)+x.replace(B,"-moz-"+B.replace("fill-",""))+x;break;case 962:if(x="-webkit-"+x+(x.charCodeAt(5)===102?"-ms-"+x:"")+x,z+W===211&&x.charCodeAt(13)===105&&0<x.indexOf("transform",10))return x.substring(0,x.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+x}return x}function o(P,b){var z=P.indexOf(b===1?":":"{"),W=P.substring(0,b!==3?z:10);return z=P.substring(z+1,P.length-1),L(b!==2?W:W.replace(Q,"$1"),z,b)}function l(P,b){var z=i(b,b.charCodeAt(0),b.charCodeAt(1),b.charCodeAt(2));return z!==b+";"?z.replace(T," or ($1)").substring(4):"("+b+")"}function s(P,b,z,W,x,Y,B,ae,X,K){for(var G=0,Ce=b,De;G<I;++G)switch(De=ye[G].call(A,P,Ce,z,W,x,Y,B,ae,X,K)){case void 0:case!1:case!0:case null:break;default:Ce=De}if(Ce!==b)return Ce}function u(P){switch(P){case void 0:case null:I=ye.length=0;break;default:if(typeof P=="function")ye[I++]=P;else if(typeof P=="object")for(var b=0,z=P.length;b<z;++b)u(P[b]);else F=!!P|0}return u}function c(P){return P=P.prefix,P!==void 0&&(L=null,P?typeof P!="function"?xe=1:(xe=2,L=P):xe=0),c}function A(P,b){var z=P;if(33>z.charCodeAt(0)&&(z=z.trim()),$=z,z=[$],0<I){var W=s(-1,b,z,z,me,ue,0,0,0,0);W!==void 0&&typeof W=="string"&&(b=W)}var x=t(at,z,b,0,0);return 0<I&&(W=s(-2,x,z,z,me,ue,x.length,0,0,0),W!==void 0&&(x=W)),$="",Oe=0,ue=me=1,x}var p=/^\0+/g,g=/[\0\r\f]/g,S=/: */g,w=/zoo|gra/,v=/([,: ])(transform)/g,C=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,h=/::(place)/g,y=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,N=/\(\s*(.*)\s*\)/g,T=/([\s\S]*?);/g,R=/-self|flex-/g,Q=/[^]*?(:[rp][el]a[\w-]+)[^]*/,M=/stretch|:\s*\w+\-(?:conte|avail)/,pe=/([^-])(image-set\()/,ue=1,me=1,Oe=0,xe=1,at=[],ye=[],I=0,L=null,F=0,$="";return A.use=u,A.set=c,e!==void 0&&c(e),A}var uA={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function cA(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var dA=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,oc=cA(function(e){return dA.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Kp={exports:{}},J={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=typeof Symbol=="function"&&Symbol.for,Ds=je?Symbol.for("react.element"):60103,Gs=je?Symbol.for("react.portal"):60106,Ko=je?Symbol.for("react.fragment"):60107,Zo=je?Symbol.for("react.strict_mode"):60108,qo=je?Symbol.for("react.profiler"):60114,Jo=je?Symbol.for("react.provider"):60109,el=je?Symbol.for("react.context"):60110,Vs=je?Symbol.for("react.async_mode"):60111,tl=je?Symbol.for("react.concurrent_mode"):60111,nl=je?Symbol.for("react.forward_ref"):60112,rl=je?Symbol.for("react.suspense"):60113,pA=je?Symbol.for("react.suspense_list"):60120,il=je?Symbol.for("react.memo"):60115,ol=je?Symbol.for("react.lazy"):60116,fA=je?Symbol.for("react.block"):60121,hA=je?Symbol.for("react.fundamental"):60117,mA=je?Symbol.for("react.responder"):60118,AA=je?Symbol.for("react.scope"):60119;function lt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ds:switch(e=e.type,e){case Vs:case tl:case Ko:case qo:case Zo:case rl:return e;default:switch(e=e&&e.$$typeof,e){case el:case nl:case ol:case il:case Jo:return e;default:return t}}case Gs:return t}}}function Zp(e){return lt(e)===tl}J.AsyncMode=Vs;J.ConcurrentMode=tl;J.ContextConsumer=el;J.ContextProvider=Jo;J.Element=Ds;J.ForwardRef=nl;J.Fragment=Ko;J.Lazy=ol;J.Memo=il;J.Portal=Gs;J.Profiler=qo;J.StrictMode=Zo;J.Suspense=rl;J.isAsyncMode=function(e){return Zp(e)||lt(e)===Vs};J.isConcurrentMode=Zp;J.isContextConsumer=function(e){return lt(e)===el};J.isContextProvider=function(e){return lt(e)===Jo};J.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ds};J.isForwardRef=function(e){return lt(e)===nl};J.isFragment=function(e){return lt(e)===Ko};J.isLazy=function(e){return lt(e)===ol};J.isMemo=function(e){return lt(e)===il};J.isPortal=function(e){return lt(e)===Gs};J.isProfiler=function(e){return lt(e)===qo};J.isStrictMode=function(e){return lt(e)===Zo};J.isSuspense=function(e){return lt(e)===rl};J.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ko||e===tl||e===qo||e===Zo||e===rl||e===pA||typeof e=="object"&&e!==null&&(e.$$typeof===ol||e.$$typeof===il||e.$$typeof===Jo||e.$$typeof===el||e.$$typeof===nl||e.$$typeof===hA||e.$$typeof===mA||e.$$typeof===AA||e.$$typeof===fA)};J.typeOf=lt;Kp.exports=J;var gA=Kp.exports,Qs=gA,vA={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},xA={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yA={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ys={};Ys[Qs.ForwardRef]=yA;Ys[Qs.Memo]=qp;function lc(e){return Qs.isMemo(e)?qp:Ys[e.$$typeof]||vA}var wA=Object.defineProperty,SA=Object.getOwnPropertyNames,ac=Object.getOwnPropertySymbols,jA=Object.getOwnPropertyDescriptor,CA=Object.getPrototypeOf,sc=Object.prototype;function Jp(e,t,n){if(typeof t!="string"){if(sc){var r=CA(t);r&&r!==sc&&Jp(e,r,n)}var i=SA(t);ac&&(i=i.concat(ac(t)));for(var o=lc(e),l=lc(t),s=0;s<i.length;++s){var u=i[s];if(!xA[u]&&!(n&&n[u])&&!(l&&l[u])&&!(o&&o[u])){var c=jA(t,u);try{wA(e,u,c)}catch{}}}}return e}var kA=Jp;const EA=zc(kA);function Ot(){return(Ot=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var uc=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Ra=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!_p.typeOf(e)},vo=Object.freeze([]),sn=Object.freeze({});function ri(e){return typeof e=="function"}function cc(e){return e.displayName||e.name||"Component"}function Us(e){return e&&typeof e.styledComponentId=="string"}var sr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Hs=typeof window<"u"&&"HTMLElement"in window,IA=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function di(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var PA=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&di(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var s=o;s<l;s++)this.groupSizes[s]=0}for(var u=this.indexOfGroup(n+1),c=0,A=r.length;c<A;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,s=o;s<l;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),Hi=new Map,xo=new Map,Wr=1,Ni=function(e){if(Hi.has(e))return Hi.get(e);for(;xo.has(Wr);)Wr++;var t=Wr++;return Hi.set(e,t),xo.set(t,e),t},BA=function(e){return xo.get(e)},bA=function(e,t){t>=Wr&&(Wr=t+1),Hi.set(e,t),xo.set(t,e)},NA="style["+sr+'][data-styled-version="5.3.9"]',TA=new RegExp("^"+sr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),RA=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},zA=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var s=l.match(TA);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(bA(c,u),RA(e,c,s[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(l)}}},OA=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},ef=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){for(var u=s.childNodes,c=u.length;c>=0;c--){var A=u[c];if(A&&A.nodeType===1&&A.hasAttribute(sr))return A}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(sr,"active"),r.setAttribute("data-styled-version","5.3.9");var l=OA();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},LA=function(){function e(n){var r=this.element=ef(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,s=o.length;l<s;l++){var u=o[l];if(u.ownerNode===i)return u}di(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),MA=function(){function e(n){var r=this.element=ef(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),FA=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),dc=Hs,WA={isServer:!Hs,useCSSOMInjection:!IA},tf=function(){function e(n,r,i){n===void 0&&(n=sn),r===void 0&&(r={}),this.options=Ot({},WA,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Hs&&dc&&(dc=!1,function(o){for(var l=document.querySelectorAll(NA),s=0,u=l.length;s<u;s++){var c=l[s];c&&c.getAttribute(sr)!=="active"&&(zA(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Ni(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Ot({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new FA(l):o?new LA(l):new MA(l),new PA(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ni(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ni(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ni(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var s=BA(l);if(s!==void 0){var u=n.names.get(s),c=r.getGroup(l);if(u&&c&&u.size){var A=sr+".g"+l+'[id="'+s+'"]',p="";u!==void 0&&u.forEach(function(g){g.length>0&&(p+=g+",")}),o+=""+c+A+'{content:"'+p+`"}/*!sc*/
`}}}return o}(this)},e}(),DA=/(a)(d)/gi,pc=function(e){return String.fromCharCode(e+(e>25?39:97))};function za(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=pc(t%52)+n;return(pc(t%52)+n).replace(DA,"$1-$2")}var Xn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},nf=function(e){return Xn(5381,e)};function GA(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ri(n)&&!Us(n))return!1}return!0}var VA=nf("5.3.9"),QA=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&GA(t),this.componentId=n,this.baseHash=Xn(VA,n),this.baseStyle=r,tf.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=ur(this.rules,t,n,r).join(""),s=za(Xn(this.baseHash,l)>>>0);if(!n.hasNameForId(i,s)){var u=r(l,"."+s,void 0,i);n.insertRules(i,s,u)}o.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,A=Xn(this.baseHash,r.hash),p="",g=0;g<c;g++){var S=this.rules[g];if(typeof S=="string")p+=S;else if(S){var w=ur(S,t,n,r),v=Array.isArray(w)?w.join(""):w;A=Xn(A,v+g),p+=v}}if(p){var C=za(A>>>0);if(!n.hasNameForId(i,C)){var f=r(p,"."+C,void 0,i);n.insertRules(i,C,f)}o.push(C)}}return o.join(" ")},e}(),YA=/^\s*\/\/.*$/gm,UA=[":","[",".","#"];function HA(e){var t,n,r,i,o=e===void 0?sn:e,l=o.options,s=l===void 0?sn:l,u=o.plugins,c=u===void 0?vo:u,A=new sA(s),p=[],g=function(v){function C(f){if(f)try{v(f+"}")}catch{}}return function(f,d,h,y,k,N,T,R,Q,M){switch(f){case 1:if(Q===0&&d.charCodeAt(0)===64)return v(d+";"),"";break;case 2:if(R===0)return d+"/*|*/";break;case 3:switch(R){case 102:case 112:return v(h[0]+d),"";default:return d+(M===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(C)}}}(function(v){p.push(v)}),S=function(v,C,f){return C===0&&UA.indexOf(f[n.length])!==-1||f.match(i)?v:"."+t};function w(v,C,f,d){d===void 0&&(d="&");var h=v.replace(YA,""),y=C&&f?f+" "+C+" { "+h+" }":h;return t=d,n=C,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),A(f||!C?"":C,y)}return A.use([].concat(c,[function(v,C,f){v===2&&f.length&&f[0].lastIndexOf(n)>0&&(f[0]=f[0].replace(r,S))},g,function(v){if(v===-2){var C=p;return p=[],C}}])),w.hash=c.length?c.reduce(function(v,C){return C.name||di(15),Xn(v,C.name)},5381).toString():"",w}var rf=ge.createContext();rf.Consumer;var of=ge.createContext(),$A=(of.Consumer,new tf),Oa=HA();function XA(){return j.useContext(rf)||$A}function _A(){return j.useContext(of)||Oa}var lf=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Oa);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return di(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Oa),this.name+t.hash},e}(),KA=/([A-Z])/,ZA=/([A-Z])/g,qA=/^ms-/,JA=function(e){return"-"+e.toLowerCase()};function fc(e){return KA.test(e)?e.replace(ZA,JA).replace(qA,"-ms-"):e}var hc=function(e){return e==null||e===!1||e===""};function ur(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,s=e.length;l<s;l+=1)(i=ur(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(hc(e))return"";if(Us(e))return"."+e.styledComponentId;if(ri(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var u=e(t);return ur(u,t,n,r)}var c;return e instanceof lf?n?(e.inject(n,r),e.getName(r)):e:Ra(e)?function A(p,g){var S,w,v=[];for(var C in p)p.hasOwnProperty(C)&&!hc(p[C])&&(Array.isArray(p[C])&&p[C].isCss||ri(p[C])?v.push(fc(C)+":",p[C],";"):Ra(p[C])?v.push.apply(v,A(p[C],C)):v.push(fc(C)+": "+(S=C,(w=p[C])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||S in uA?String(w).trim():w+"px")+";"));return g?[g+" {"].concat(v,["}"]):v}(e):e.toString()}var mc=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function mn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ri(e)||Ra(e)?mc(ur(uc(vo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:mc(ur(uc(e,n)))}var eg=function(e,t,n){return n===void 0&&(n=sn),e.theme!==n.theme&&e.theme||t||n.theme},tg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ng=/(^-|-$)/g;function Ol(e){return e.replace(tg,"-").replace(ng,"")}var af=function(e){return za(nf(e)>>>0)};function Ti(e){return typeof e=="string"&&!0}var La=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},rg=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function ig(e,t,n){var r=e[n];La(t)&&La(r)?sf(r,t):e[n]=t}function sf(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(La(l))for(var s in l)rg(s)&&ig(e,l[s],s)}return e}var uf=ge.createContext();uf.Consumer;var Ll={};function cf(e,t,n){var r=Us(e),i=!Ti(e),o=t.attrs,l=o===void 0?vo:o,s=t.componentId,u=s===void 0?function(d,h){var y=typeof d!="string"?"sc":Ol(d);Ll[y]=(Ll[y]||0)+1;var k=y+"-"+af("5.3.9"+y+Ll[y]);return h?h+"-"+k:k}(t.displayName,t.parentComponentId):s,c=t.displayName,A=c===void 0?function(d){return Ti(d)?"styled."+d:"Styled("+cc(d)+")"}(e):c,p=t.displayName&&t.componentId?Ol(t.displayName)+"-"+t.componentId:t.componentId||u,g=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,S=t.shouldForwardProp;r&&e.shouldForwardProp&&(S=t.shouldForwardProp?function(d,h,y){return e.shouldForwardProp(d,h,y)&&t.shouldForwardProp(d,h,y)}:e.shouldForwardProp);var w,v=new QA(n,p,r?e.componentStyle:void 0),C=v.isStatic&&l.length===0,f=function(d,h){return function(y,k,N,T){var R=y.attrs,Q=y.componentStyle,M=y.defaultProps,pe=y.foldedComponentIds,ue=y.shouldForwardProp,me=y.styledComponentId,Oe=y.target,xe=function(W,x,Y){W===void 0&&(W=sn);var B=Ot({},x,{theme:W}),ae={};return Y.forEach(function(X){var K,G,Ce,De=X;for(K in ri(De)&&(De=De(B)),De)B[K]=ae[K]=K==="className"?(G=ae[K],Ce=De[K],G&&Ce?G+" "+Ce:G||Ce):De[K]}),[B,ae]}(eg(k,j.useContext(uf),M)||sn,k,R),at=xe[0],ye=xe[1],I=function(W,x,Y,B){var ae=XA(),X=_A(),K=x?W.generateAndInjectStyles(sn,ae,X):W.generateAndInjectStyles(Y,ae,X);return K}(Q,T,at),L=N,F=ye.$as||k.$as||ye.as||k.as||Oe,$=Ti(F),P=ye!==k?Ot({},k,{},ye):k,b={};for(var z in P)z[0]!=="$"&&z!=="as"&&(z==="forwardedAs"?b.as=P[z]:(ue?ue(z,oc,F):!$||oc(z))&&(b[z]=P[z]));return k.style&&ye.style!==k.style&&(b.style=Ot({},k.style,{},ye.style)),b.className=Array.prototype.concat(pe,me,I!==me?I:null,k.className,ye.className).filter(Boolean).join(" "),b.ref=L,j.createElement(F,b)}(w,d,h,C)};return f.displayName=A,(w=ge.forwardRef(f)).attrs=g,w.componentStyle=v,w.displayName=A,w.shouldForwardProp=S,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):vo,w.styledComponentId=p,w.target=r?e.target:e,w.withComponent=function(d){var h=t.componentId,y=function(N,T){if(N==null)return{};var R,Q,M={},pe=Object.keys(N);for(Q=0;Q<pe.length;Q++)R=pe[Q],T.indexOf(R)>=0||(M[R]=N[R]);return M}(t,["componentId"]),k=h&&h+"-"+(Ti(d)?d:Ol(cc(d)));return cf(d,Ot({},y,{attrs:g,componentId:k}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?sf({},e.defaultProps,d):d}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&EA(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var Ma=function(e){return function t(n,r,i){if(i===void 0&&(i=sn),!_p.isValidElementType(r))return di(1,String(r));var o=function(){return n(r,i,mn.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,Ot({},i,{},l))},o.attrs=function(l){return t(n,r,Ot({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(cf,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Ma[e]=Ma(e)});function Vt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=mn.apply(void 0,[e].concat(n)).join(""),o=af(i);return new lf(o,i)}const m=Ma,kr=48,og=({color:e="currentColor",direction:t="left",distance:n="md",duration:r=.4,easing:i="cubic-bezier(0, 0, 0, 1)",hideOutline:o=!0,label:l,lines:s=3,onToggle:u,render:c,rounded:A=!1,size:p=32,toggle:g,toggled:S,disabled:w=!1,animateOnMount:v=!1})=>{const[C,f]=j.useState(!1),[d,h]=j.useState(!1);j.useEffect(()=>{h(!0)},[]);const y=Math.max(12,Math.min(kr,p)),k=Math.round((kr-y)/2),N=y/12,T=Math.round(N),Q=y/(s*((n==="lg"?.25:n==="sm"?.75:.5)+(s===3?1:1.25))),M=Math.round(Q),pe=T*s+M*(s-1),ue=Math.round((kr-pe)/2),me=s===3?n==="lg"?4.0425:n==="sm"?5.1625:4.6325:n==="lg"?6.7875:n==="sm"?8.4875:7.6675,Oe=(N-T+(Q-M))/(s===3?1:2),xe=parseFloat((y/me-Oe/(4/3)).toFixed(2)),at=Math.max(0,r),ye={cursor:w?"not-allowed":"pointer",height:`${kr}px`,position:"relative",transition:`${at}s ${i}`,userSelect:"none",width:`${kr}px`},I={background:e,height:`${T}px`,left:`${k}px`,position:"absolute"};o&&(ye.outline="none"),A&&(I.borderRadius="9em");const L=()=>{const b=S!==void 0?S:C;return v&&!d?!b:b},F=g||f,$=L();return c({barHeight:T,barStyles:I,burgerStyles:ye,easing:i,handler:()=>{F(!$),typeof u=="function"&&u(!$)},isLeft:t==="left",isToggled:$,label:l,margin:M,move:xe,time:at,topOffset:ue,width:y})};function Fa(){return Fa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fa.apply(this,arguments)}const lg=e=>ge.createElement(og,Fa({},e,{render:t=>ge.createElement("div",{className:"hamburger-react","aria-label":t.label,"aria-expanded":t.isToggled,onClick:e.disabled?void 0:t.handler,onKeyUp:e.disabled?void 0:n=>n.key==="Enter"&&t.handler(),role:"button",style:{...t.burgerStyles,transform:`${t.isToggled?`rotate(${180*(t.isLeft?-1:1)}deg)`:"none"}`},tabIndex:0},ge.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset}px`,transition:`${t.time}s ${t.easing}`,transform:`${t.isToggled?`rotate(${45*(t.isLeft?-1:1)}deg) translate(${t.move*(t.isLeft?-1:1)}px, ${t.move}px)`:"none"}`}}),ge.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset+t.barHeight+t.margin}px`,transition:`${t.time}s ${t.easing}`,opacity:`${t.isToggled?"0":"1"}`}}),ge.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset+t.barHeight*2+t.margin*2}px`,transition:`${t.time}s ${t.easing}`,transform:`${t.isToggled?`rotate(${45*(t.isLeft?1:-1)}deg) translate(${t.move*(t.isLeft?-1:1)}px, ${t.move*-1}px)`:"none"}`}}))}));/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(this,arguments)}var qt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(qt||(qt={}));const Ac="popstate";function ag(e){e===void 0&&(e={});function t(i,o){let{pathname:l="/",search:s="",hash:u=""}=Nn(i.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Wa("",{pathname:l,search:s,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let l=i.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");s=c===-1?u:u.slice(0,c)}return s+"#"+(typeof o=="string"?o:yo(o))}function r(i,o){$s(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return ug(t,n,r,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $s(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function sg(){return Math.random().toString(36).substr(2,8)}function gc(e,t){return{usr:e.state,key:e.key,idx:t}}function Wa(e,t,n,r){return n===void 0&&(n=null),ii({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Nn(t):t,{state:n,key:t&&t.key||r||sg()})}function yo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Nn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ug(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=qt.Pop,u=null,c=A();c==null&&(c=0,l.replaceState(ii({},l.state,{idx:c}),""));function A(){return(l.state||{idx:null}).idx}function p(){s=qt.Pop;let C=A(),f=C==null?null:C-c;c=C,u&&u({action:s,location:v.location,delta:f})}function g(C,f){s=qt.Push;let d=Wa(v.location,C,f);n&&n(d,C),c=A()+1;let h=gc(d,c),y=v.createHref(d);try{l.pushState(h,"",y)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(y)}o&&u&&u({action:s,location:v.location,delta:1})}function S(C,f){s=qt.Replace;let d=Wa(v.location,C,f);n&&n(d,C),c=A();let h=gc(d,c),y=v.createHref(d);l.replaceState(h,"",y),o&&u&&u({action:s,location:v.location,delta:0})}function w(C){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof C=="string"?C:yo(C);return d=d.replace(/ $/,"%20"),he(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let v={get action(){return s},get location(){return e(i,l)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Ac,p),u=C,()=>{i.removeEventListener(Ac,p),u=null}},createHref(C){return t(i,C)},createURL:w,encodeLocation(C){let f=w(C);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:S,go(C){return l.go(C)}};return v}var vc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vc||(vc={}));function cg(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Nn(t):t,i=Xs(r.pathname||"/",n);if(i==null)return null;let o=df(e);dg(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let u=jg(i);l=yg(o[s],u)}return l}function df(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let u={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(he(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=un([r,u.relativePath]),A=n.concat(u);o.children&&o.children.length>0&&(he(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),df(o.children,t,A,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:vg(c,o.index),routesMeta:A})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let u of pf(o.path))i(o,l,u)}),t}function pf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=pf(r.join("/")),s=[];return s.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function dg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:xg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pg=/^:[\w-]+$/,fg=3,hg=2,mg=1,Ag=10,gg=-2,xc=e=>e==="*";function vg(e,t){let n=e.split("/"),r=n.length;return n.some(xc)&&(r+=gg),t&&(r+=hg),n.filter(i=>!xc(i)).reduce((i,o)=>i+(pg.test(o)?fg:o===""?mg:Ag),r)}function xg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function yg(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let s=n[l],u=l===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",A=wg({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c);if(!A)return null;Object.assign(r,A.params);let p=s.route;o.push({params:r,pathname:un([i,A.pathname]),pathnameBase:Ig(un([i,A.pathnameBase])),route:p}),A.pathnameBase!=="/"&&(i=un([i,A.pathnameBase]))}return o}function wg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Sg(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,A,p)=>{let{paramName:g,isOptional:S}=A;if(g==="*"){let v=s[p]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const w=s[p];return S&&!w?c[g]=void 0:c[g]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function Sg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),$s(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function jg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return $s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Xs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Cg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Nn(e):e;return{pathname:n?n.startsWith("/")?n:kg(n,t):t,search:Pg(r),hash:Bg(i)}}function kg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ml(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Eg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ff(e,t){let n=Eg(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function hf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Nn(e):(i=ii({},e),he(!i.pathname||!i.pathname.includes("?"),Ml("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),Ml("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),Ml("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let p=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}s=p>=0?t[p]:"/"}let u=Cg(i,s),c=l&&l!=="/"&&l.endsWith("/"),A=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||A)&&(u.pathname+="/"),u}const un=e=>e.join("/").replace(/\/\/+/g,"/"),Ig=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Pg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Bg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function bg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const mf=["post","put","patch","delete"];new Set(mf);const Ng=["get",...mf];new Set(Ng);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oi.apply(this,arguments)}const _s=j.createContext(null),Tg=j.createContext(null),Tn=j.createContext(null),ll=j.createContext(null),Rn=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Af=j.createContext(null);function Rg(e,t){let{relative:n}=t===void 0?{}:t;pi()||he(!1);let{basename:r,navigator:i}=j.useContext(Tn),{hash:o,pathname:l,search:s}=vf(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:un([r,l])),i.createHref({pathname:u,search:s,hash:o})}function pi(){return j.useContext(ll)!=null}function fr(){return pi()||he(!1),j.useContext(ll).location}function gf(e){j.useContext(Tn).static||j.useLayoutEffect(e)}function zg(){let{isDataRoute:e}=j.useContext(Rn);return e?$g():Og()}function Og(){pi()||he(!1);let e=j.useContext(_s),{basename:t,future:n,navigator:r}=j.useContext(Tn),{matches:i}=j.useContext(Rn),{pathname:o}=fr(),l=JSON.stringify(ff(i,n.v7_relativeSplatPath)),s=j.useRef(!1);return gf(()=>{s.current=!0}),j.useCallback(function(c,A){if(A===void 0&&(A={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let p=hf(c,JSON.parse(l),o,A.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:un([t,p.pathname])),(A.replace?r.replace:r.push)(p,A.state,A)},[t,r,l,o,e])}function vf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(Tn),{matches:i}=j.useContext(Rn),{pathname:o}=fr(),l=JSON.stringify(ff(i,r.v7_relativeSplatPath));return j.useMemo(()=>hf(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function Lg(e,t){return Mg(e,t)}function Mg(e,t,n,r){pi()||he(!1);let{navigator:i}=j.useContext(Tn),{matches:o}=j.useContext(Rn),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=fr(),A;if(t){var p;let C=typeof t=="string"?Nn(t):t;u==="/"||(p=C.pathname)!=null&&p.startsWith(u)||he(!1),A=C}else A=c;let g=A.pathname||"/",S=g;if(u!=="/"){let C=u.replace(/^\//,"").split("/");S="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let w=cg(e,{pathname:S}),v=Vg(w&&w.map(C=>Object.assign({},C,{params:Object.assign({},s,C.params),pathname:un([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:un([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,n,r);return t&&v?j.createElement(ll.Provider,{value:{location:oi({pathname:"/",search:"",hash:"",state:null,key:"default"},A),navigationType:qt.Pop}},v):v}function Fg(){let e=Hg(),t=bg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,o)}const Wg=j.createElement(Fg,null);class Dg extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(Rn.Provider,{value:this.props.routeContext},j.createElement(Af.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Gg(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(_s);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Rn.Provider,{value:t},r)}function Vg(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let A=l.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);A>=0||he(!1),l=l.slice(0,Math.min(l.length,A+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let A=0;A<l.length;A++){let p=l[A];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=A),p.route.id){let{loaderData:g,errors:S}=n,w=p.route.loader&&g[p.route.id]===void 0&&(!S||S[p.route.id]===void 0);if(p.route.lazy||w){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((A,p,g)=>{let S,w=!1,v=null,C=null;n&&(S=s&&p.route.id?s[p.route.id]:void 0,v=p.route.errorElement||Wg,u&&(c<0&&g===0?(Xg("route-fallback",!1),w=!0,C=null):c===g&&(w=!0,C=p.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,g+1)),d=()=>{let h;return S?h=v:w?h=C:p.route.Component?h=j.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=A,j.createElement(Gg,{match:p,routeContext:{outlet:A,matches:f,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?j.createElement(Dg,{location:n.location,revalidation:n.revalidation,component:v,error:S,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var xf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(xf||{}),wo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(wo||{});function Qg(e){let t=j.useContext(_s);return t||he(!1),t}function Yg(e){let t=j.useContext(Tg);return t||he(!1),t}function Ug(e){let t=j.useContext(Rn);return t||he(!1),t}function yf(e){let t=Ug(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function Hg(){var e;let t=j.useContext(Af),n=Yg(wo.UseRouteError),r=yf(wo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function $g(){let{router:e}=Qg(xf.UseNavigateStable),t=yf(wo.UseNavigateStable),n=j.useRef(!1);return gf(()=>{n.current=!0}),j.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,oi({fromRouteId:t},o)))},[e,t])}const yc={};function Xg(e,t,n){!t&&!yc[e]&&(yc[e]=!0)}function On(e){he(!1)}function _g(e){let{basename:t="/",children:n=null,location:r,navigationType:i=qt.Pop,navigator:o,static:l=!1,future:s}=e;pi()&&he(!1);let u=t.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:o,static:l,future:oi({v7_relativeSplatPath:!1},s)}),[u,s,o,l]);typeof r=="string"&&(r=Nn(r));let{pathname:A="/",search:p="",hash:g="",state:S=null,key:w="default"}=r,v=j.useMemo(()=>{let C=Xs(A,u);return C==null?null:{location:{pathname:C,search:p,hash:g,state:S,key:w},navigationType:i}},[u,A,p,g,S,w,i]);return v==null?null:j.createElement(Tn.Provider,{value:c},j.createElement(ll.Provider,{children:n,value:v}))}function Kg(e){let{children:t,location:n}=e;return Lg(Da(t),n)}new Promise(()=>{});function Da(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let o=[...t,i];if(r.type===j.Fragment){n.push.apply(n,Da(r.props.children,o));return}r.type!==On&&he(!1),!r.props.index||!r.props.children||he(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Da(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ga(){return Ga=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ga.apply(this,arguments)}function Zg(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function qg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Jg(e,t){return e.button===0&&(!t||t==="_self")&&!qg(e)}const e0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],t0="6";try{window.__reactRouterVersion=t0}catch{}const n0="startTransition",wc=Xf[n0];function r0(e){let{basename:t,children:n,future:r,window:i}=e,o=j.useRef();o.current==null&&(o.current=ag({window:i,v5Compat:!0}));let l=o.current,[s,u]=j.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},A=j.useCallback(p=>{c&&wc?wc(()=>u(p)):u(p)},[u,c]);return j.useLayoutEffect(()=>l.listen(A),[l,A]),j.createElement(_g,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const i0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",o0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hr=j.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:u,to:c,preventScrollReset:A,unstable_viewTransition:p}=t,g=Zg(t,e0),{basename:S}=j.useContext(Tn),w,v=!1;if(typeof c=="string"&&o0.test(c)&&(w=c,i0))try{let h=new URL(window.location.href),y=c.startsWith("//")?new URL(h.protocol+c):new URL(c),k=Xs(y.pathname,S);y.origin===h.origin&&k!=null?c=k+y.search+y.hash:v=!0}catch{}let C=Rg(c,{relative:i}),f=l0(c,{replace:l,state:s,target:u,preventScrollReset:A,relative:i,unstable_viewTransition:p});function d(h){r&&r(h),h.defaultPrevented||f(h)}return j.createElement("a",Ga({},g,{href:w||C,onClick:v||o?r:d,ref:n,target:u}))});var Sc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Sc||(Sc={}));var jc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(jc||(jc={}));function l0(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s}=t===void 0?{}:t,u=zg(),c=fr(),A=vf(e,{relative:l});return j.useCallback(p=>{if(Jg(p,n)){p.preventDefault();let g=r!==void 0?r:yo(c)===yo(A);u(e,{replace:g,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s})}},[c,u,A,r,i,n,e,o,l,s])}const Va="/portfolio/assets/paulEvansCreativeLogo-720c0c2c.avif",a0=m.nav`
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
`,s0=m.div`
  width: 180px;
  height: 100%;
`,u0=m.div`
  display: flex;

  @media screen and (max-width: 960px) {
    width: 100%;

    justify-content: center;
    margin-bottom: 4em;
  }
`,c0=m.img`
  text-align: center;
  width: 80px;
  margin-top: 1.5em;

  @media screen and (max-width: 767px) {
    width: 60px;
    margin-top: 1em;
  }
`,d0=m.img`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    margin-top: 100px;
    width: 100px;
  }
`,p0=m.div`
  float: left;
  width: 200px;
  height: 100%;
  padding-left: 0.5em;
  text-align: left;

  @media screen and (max-width: 767px) {
    padding-left: 0em;
  }
`,f0=m.ul`
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
`,h0=m(hr)`
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
`,m0=m.a`
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
`,A0=m.div`
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
`,g0=({footerRef:e})=>{const t=fr(),[n,r]=j.useState(!1),[i,o]=j.useState(t.pathname),[l,s]=j.useState(!1),[u,c]=j.useState(window.pageYOffset),[A,p]=j.useState(!0);j.useEffect(()=>{o(t.pathname);const v=()=>{const C=window.pageYOffset;p(u>C||C<10),c(C)};return window.addEventListener("scroll",v),()=>window.removeEventListener("scroll",v)},[t.pathname,u]);const g=()=>{e.current&&e.current.scrollIntoView({behavior:"smooth"}),r(!1),s(!1)},S=()=>{r(!1),s(!1)},w=[{id:1,to:"/",text:"Home"},{id:2,to:"/casestudies",text:"Case Studies"},{id:3,to:"https://www.paulevans-dop.com/",text:"Cinematography",isExternal:!0},{id:4,to:"/about",text:"About"},{id:5,to:"#",text:"Contact",onClick:g}];return a.jsxs(a0,{visible:A,children:[a.jsx(s0,{children:a.jsx(hr,{to:"/",onClick:S,children:a.jsx(p0,{children:a.jsx(c0,{src:Va,alt:"the letters P and E merged together to form the logo Paul Evans Creative"})})})}),a.jsxs(f0,{open:n,children:[w.map(v=>v.isExternal?a.jsx(m0,{href:v.to,onClick:v.onClick||S,className:i===v.to?"active":"",children:v.text},v.id):a.jsx(h0,{to:v.to,onClick:v.onClick||S,className:i===v.to?"active":"",children:v.text},v.id)),a.jsx(u0,{children:a.jsx(d0,{src:Va,alt:"the letters P and E merged together to form the logo Paul Evans Creative"})})]}),a.jsx(A0,{children:a.jsx("div",{onClick:()=>{r(!n),s(!l)},children:a.jsx(lg,{toggled:l})})})]})},Cc="/portfolio/assets/smoke-191cba16.gif",v0=e=>{const t=new Image;t.src=e},x0=Vt`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,y0=m.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--main-hero-backgroundcolor);
`,w0=m.div`
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
`,S0=m.div`
  animation: ${x0} 1s ease-out 0.5s forwards;
`,j0=m.p`
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
`,C0=()=>(j.useEffect(()=>{v0(Cc)},[]),a.jsx(y0,{children:a.jsxs(w0,{children:[a.jsx("h1",{style:{backgroundImage:`url(${Cc})`},children:"Paul Evans"}),a.jsx(S0,{children:a.jsx("h2",{children:"Creative Lead | Experience Designer"})}),a.jsx(j0,{children:"Creative professional with over 20 years of experience in branding, storytelling, and content creation, now specializing in Experience Design. I bring a unique combination of creative and technical expertise, allowing me to design visually engaging and user-centric digital experiences."})]})})),kc="/portfolio/assets/showcase1-88b3c6bb.mp4";var wf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Qa=ge.createContext&&ge.createContext(wf),k0=["attr","size","title"];function E0(e,t){if(e==null)return{};var n=I0(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function I0(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function So(){return So=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},So.apply(this,arguments)}function Ec(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function jo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ec(Object(n),!0).forEach(function(r){P0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ec(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function P0(e,t,n){return t=B0(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B0(e){var t=b0(e,"string");return typeof t=="symbol"?t:t+""}function b0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Sf(e){return e&&e.map((t,n)=>ge.createElement(t.tag,jo({key:n},t.attr),Sf(t.child)))}function An(e){return t=>ge.createElement(N0,So({attr:jo({},e.attr)},t),Sf(e.child))}function N0(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=E0(e,k0),s=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),ge.createElement("svg",So({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:u,style:jo(jo({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&ge.createElement("title",null,o),e.children)};return Qa!==void 0?ge.createElement(Qa.Consumer,null,n=>t(n)):t(wf)}function T0(e){return An({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM21.3 229.2H21c.1-.1.2-.3.3-.4zM97 319.8H64V192h33zm113.2 0h-28.7v-86.4l-11.6 86.4h-20.6l-12.2-84.5v84.5h-29V192h42.8c3.3 19.8 6 39.9 8.7 59.9l7.6-59.9h43zm11.4 0V192h24.6c17.6 0 44.7-1.6 49 20.9 1.7 7.6 1.4 16.3 1.4 24.4 0 88.5 11.1 82.6-75 82.5zm160.9-29.2c0 15.7-2.4 30.9-22.2 30.9-9 0-15.2-3-20.9-9.8l-1.9 8.1h-29.8V192h31.7v41.7c6-6.5 12-9.2 20.9-9.2 21.4 0 22.2 12.8 22.2 30.1zM265 229.9c0-9.7 1.6-16-10.3-16v83.7c12.2.3 10.3-8.7 10.3-18.4zm85.5 26.1c0-5.4 1.1-12.7-6.2-12.7-6 0-4.9 8.9-4.9 12.7 0 .6-1.1 39.6 1.1 44.7.8 1.6 2.2 2.4 3.8 2.4 7.8 0 6.2-9 6.2-14.4z"},child:[]}]})(e)}function R0(e){return An({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function z0(e){return An({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function Pt(e){return An({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"},child:[]}]})(e)}function O0(e){return An({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"},child:[]}]})(e)}function jf(e){return An({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"},child:[]}]})(e)}const L0=m.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 24px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  color: var(--main-button-color);
`,M0=m.div`
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
`,F0=m.p`
  color: var(--main-font-color);
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 478px) {
    font-size: 18px;
  }
`,W0=({onClick:e})=>a.jsxs(L0,{children:[a.jsx(M0,{children:a.jsx("a",{href:"https://paulevans-dop.com/",target:"_blank",rel:"noopener noreferrer",children:a.jsx(Pt,{onClick:e,size:70})})}),a.jsx(F0,{children:"Go to Cinematography Site"})]}),D0=e=>{const t=document.createElement("video");t.src=e,t.preload="auto",t.load()},G0=m.div`
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

  @media screen and (max-width: 960px) {
    height: 500px;
  }
`,V0=m.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
`,Q0=m.div`
position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000056;
`,Y0=m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 90%;
  height: 100%;
  padding-top: 20px;

  @media screen and (max-width: 478px) {
    padding-top: 20px;
  }
`,U0=m.div`
  display: flex;
  flex-direction: column;
  padding: 0em 2em 0.5em 1em;
  background-color: var(--main-infoBackground-backgroundcolor);
`,H0=m.div`
  margin-top: auto;
  padding-left: 20px;
`;function $0(e){return j.useEffect(()=>{D0(kc)},[]),a.jsxs(G0,{children:[a.jsx(V0,{src:kc,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A showreel showing clips from different productions."}),a.jsx(Q0,{children:a.jsxs(Y0,{children:[a.jsxs(U0,{children:[a.jsx("h3",{children:"Cinematographer"}),a.jsx("p",{children:"Member of fsf Föreningen Severiges Filmfotografer (The Association of Swedish Film Cinematographers). Working in Narrative, Commercials, Music Videos and Still Photography."})]}),a.jsx(H0,{children:a.jsx(W0,{})})]})})]})}const Ic="/portfolio/assets/tides-2f59a591.mp4",X0=m.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  color: var(--main-button-color);
`,_0=m.div`
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
`,K0=m.p`
  color: var(--main-font-color);
  font-size: 20px;
  font-weight: 600;
  margin-top: 0;

  @media (max-width: 478px) {
    font-size: 18px;
  }
`,Z0=({onClick:e})=>{const t=()=>{e()};return a.jsxs(X0,{children:[a.jsx(_0,{children:a.jsx("a",{href:"https://www.linkedin.com/posts/paul-evans-3a74605_ai-userexperience-webdevelopment-activity-7234084840894021632-LNks?utm_source=share&utm_medium=member_desktop",target:"_blank",rel:"noopener noreferrer",children:a.jsx(Pt,{onClick:t,size:70})})}),a.jsx(K0,{children:"See LinkedIn Case"})]})},q0=e=>{const t=document.createElement("video");t.src=e,t.preload="auto",t.load()},J0=m.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  min-width: 100%;
  height: 600px;
  font-size: 1.2rem;
  overflow: hidden;
  background-color: #171717;

  @media screen and (max-width: 478px) {
    height: 500px;
  }

  @media screen and (max-width: 767px) {
  }
`,ev=m.video`
  position: absolute;
  width: 95%;
  height: 100%;
  position: relative;
  object-fit: cover;
  padding-left: 30px;

  @media screen and (max-width: 960px) {
    width: 90%;
    padding-left: 150px;
  }

  @media screen and (max-width: 476px) {
    padding-left: 40px;
  }
`,tv=m.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000027;
`,nv=m.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 90%;
  height: 100%;
  padding-top: 20px;
`,rv=m.div`
  display: flex;
  flex-direction: column;
  padding: 0em 1.5em 0.5em 1em;
  background-color: var(--main-infoBackground-backgroundcolor);
`,iv=m.div`
  margin-top: auto;
  padding-left: 20px;
`;function ov(e){return j.useEffect(()=>{q0(Ic)},[]),a.jsxs(J0,{children:[a.jsx(ev,{src:Ic,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"Design frames changing randomly"}),a.jsx(tv,{children:a.jsxs(nv,{children:[a.jsxs(rv,{children:[a.jsx("h3",{children:"AI & Prototypes"}),a.jsx("p",{children:"Why using AI generated content can enhance the user experience in prototypes."})]}),a.jsx(iv,{children:a.jsx(Z0,{})})]})})]})}const Pc="/portfolio/assets/NaomiBreakin-cd4a01dc.mp4",lv=m.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  color: var(--main-button-color);
`,av=m.div`
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
`,sv=m.p`
  color: var(--main-font-color);
  font-size: 20px;
  font-weight: 600;
  margin-top: 0;
  

  @media (max-width: 478px) {
    font-size: 18px;
  }
`,uv=({onClick:e})=>{const t=()=>{e()};return a.jsxs(lv,{children:[a.jsx(av,{children:a.jsx("a",{href:"https://www.linkedin.com/posts/paul-evans-3a74605_aiart-generativeai-runwayai-activity-7232706903896690689-JL51?utm_source=share&utm_medium=member_desktop",target:"_blank",rel:"noopener noreferrer",children:a.jsx(Pt,{onClick:t,size:70})})}),a.jsx(sv,{children:"See LinkedIn Case"})]})},cv=e=>{const t=document.createElement("video");t.src=e,t.preload="auto",t.load()},dv=m.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  min-width: 100%;
  height: 600px;
  font-size: 1.2rem;
  overflow: hidden;

  @media screen and (max-width: 478px) {
    height: 500px;
  }

  @media screen and (max-width: 767px) {
  }
`,pv=m.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
`,fv=m.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000048;
`,hv=m.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 90%;
  height: 100%;
  padding-top: 20px;
`,mv=m.div`
  display: flex;
  flex-direction: column;
  padding: 0em 1.5em 0.5em 1em;
  background-color: var(--main-infoBackground-backgroundcolor);
`,Av=m.div`
  margin-top: auto;
  padding-left: 20px;
`;function gv(e){return j.useEffect(()=>{cv(Pc)},[]),a.jsxs(dv,{children:[a.jsx(pv,{src:Pc,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"Design frames changing randomly"}),a.jsx(fv,{children:a.jsxs(hv,{children:[a.jsxs(mv,{children:[a.jsx("h3",{children:"Consistency in AI"}),a.jsx("p",{children:"How I am achieving consistency in video generation."})]}),a.jsx(Av,{children:a.jsx(uv,{})})]})})]})}function vv(e){return An({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"},child:[]}]})(e)}const xv="/portfolio/assets/AIReel-9fb26f3d.mp4",yv="/portfolio/assets/Midjourney-logo-7fec8e27.avif",wv="data:image/avif;base64,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",Sv="/portfolio/assets/Photoshop-logo-9acf0b47.avif",jv=m.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`,Cv=m.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 1;
`,kv=m.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.32);
  z-index: 2;
`,Ev=m.div`
  width: 80%;
  height: 500px;
  padding-top: 280px;
  padding-left: 60px;
  padding-bottom: 180px;
  display: flex;
  flex-direction: column;
  z-index: 3;

  @media screen and (max-width: 960px) {
    padding-top: 100px;
    padding-bottom: 80px;
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
`,Iv=m.div`
  display: flex;
  flex-direction: row;
  padding-top: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 478px) {
    justify-content: center;
  }
`,Fl=m.img`
  width: 10%;
  height: auto;
  margin-right: 20px;

  @media screen and (max-width: 478px) {
    width: 50%;
  }
`,Pv=m.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  margin-right: 2em;
  padding-top: 2em;
  padding-left: 2em;
`,Bv=()=>a.jsxs(jv,{children:[a.jsx(Cv,{src:xv,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A background vide showing various moving images created with ai."}),a.jsx(kv,{}),a.jsxs(Ev,{children:[a.jsxs(Iv,{children:[a.jsx(Fl,{src:yv,alt:"Midjourney AI logo"}),a.jsx(Fl,{src:wv,alt:"Runway AI logo"}),a.jsx(Fl,{src:Sv,alt:"Adobe Photoshop logo"})]}),a.jsx("h4",{children:"AI"}),a.jsx("p",{children:"We need to understand what AI can do and how it can benefit us. As a storyteller, I see AI not as a threat but as an opportunity. Generative AI has been a game-changer, helping me convey ideas and visualize scenes that were previously limited by budget or time. Though still evolving, AI is rapidly becoming a key tool for creating final content for both B2B and B2C brands."}),a.jsx(Pv,{children:a.jsx(vv,{fontSize:"30px"})})]})]}),Bc="/portfolio/assets/uxuiReel-e01a0e6b.mp4",bv=m.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  color: var(--main-button-color);
`,Nv=m.div`
  display: inline-block;
  margin-bottom: 20px;
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
`,Tv=m.p`
  color: var(--main-font-color);
  font-size: 20px;
  font-weight: 600;
  margin-top: 0;

  @media (max-width: 478px) {
    font-size: 18px;
  }
`,Rv=({onClick:e})=>{const t=()=>{e()};return a.jsxs(bv,{children:[a.jsx(Nv,{children:a.jsx(hr,{to:"/casestudies",children:a.jsx(Pt,{onClick:t,size:70})})}),a.jsx(Tv,{children:"See Case Studies"})]})},zv=e=>{const t=document.createElement("video");t.src=e,t.preload="auto",t.load()},Ov=m.div`
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
`,Lv=m.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
`,Mv=m.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #0000006f;
`,Fv=m.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 90%;
  height: 100%;
  padding-top: 20px;
`,Wv=m.div`
  display: flex;
  flex-direction: column;
  padding: 0em 1.5em 0.5em 1em;
  background-color: var(--main-infoBackground-backgroundcolor);
`,Dv=m.div`
  padding-left: 20px;
  margin-top: auto;
`;function Gv(e){return j.useEffect(()=>{zv(Bc)},[]),a.jsxs(Ov,{children:[a.jsx(Lv,{src:Bc,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"Design frames changing randomly"}),a.jsx(Mv,{children:a.jsxs(Fv,{children:[a.jsxs(Wv,{children:[a.jsx("h3",{children:"UX / UI Designer"}),a.jsx("p",{children:"As a UX/UI designer with storytelling expertise, I create engaging, user-focused experiences that enhance usability and elevate brand impact."})]}),a.jsx(Dv,{children:a.jsx(Rv,{})})]})})]})}const Vv=m.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--main-button-color);
  padding-bottom: 20px;
`,Qv=m.div`
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
`,Yv=m.p`
  color: var(--secondary-font-color);
  font-size: 20px;
  font-weight: 600;
  margin-top: 0;

  @media (max-width: 478px) {
    font-size: 18px;
  }
`,Uv=({onClick:e})=>a.jsxs(Vv,{children:[a.jsx(Qv,{children:a.jsx("a",{href:"https://github.com/PaulEvans78",target:"_blank",rel:"noopener noreferrer",children:a.jsx(Pt,{onClick:e,size:70})})}),a.jsx(Yv,{children:"Go to GitHub"})]}),Hv="data:image/avif;base64,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",$v="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAGNbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAsaWxvYwAAAABEAAACAAEAAAABAAADiAAAAfAAAgAAAAEAAAG1AAAB0wAAAEJpaW5mAAAAAAACAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAAAaaW5mZQIAAAAAAgAAYXYwMUFscGhhAAAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAAw2lwcnAAAACdaXBjbwAAABRpc3BlAAAAAAAAAHgAAAB4AAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQBBYYHAAADy21kYXQSAAoGGBm792FQMsYDEgAKKFDYAsLyjFo30pTtGU3AprQDWuPWfiKO+UiJ6EzD+II/WS4l4BjmY2ofsD4UVg0FduFHPfdGebqmDbZogjz8NVmGLNmvd1wZBili3DkP5CI2o5pZTYFM4gKz8agxQATWZ1TlrNqXta5vvfgPNjGiIZtDUOGwrXNnHLDVjvkLfxMBwqbR0m2IbPrNONVikzkKkyvUc28tZ0OyUJpViZEa6JafpNNpkcjPfAqWweGQn/GcVnzk0Yoqyx10vZ8PizT1YVGcXlyZK/CQWXX1FhfNvTy5B24MWdf7MYW1yiLPyoN770KqUQhYQ4qRESByRLLmnrwEp5hckW1jCOGDkP0LY/ntYGOUyA5bLZqmNySV9t5XOWdZ4GdE+R8FXeS1rBb0B22SeIQg1USJH0KWoUcLH2qF8BXOV/ZSmatXYza1poj526IoyW+Dh7DTvUka0T/SSTrr4EWAIEO7rbAjp4/wR7gEy3QOsWMd7tPNE0tAbaJj3XVDYfXVQiTrmT9N57UyC0p+sSo9LNlVQ9f83M9WtrTbCdfKSccpekK4r/kSVCw09VdOtqfRt8xeT/Ktw3MRZIN2BQi7zkUx8XtpTYEi88rSMhIACgkYGbv3YIEBA0Iy4ANEgACiiihQ1/8mS+0VYnR6q4fJskn/zmz5r8/HO5RC/jcpiT7EXgL7nkn1z3wNWGtgLDEtWNwmPHhYKeugM5Qo0tp0EfAf4j3dOIJc8xkYorcoGN9MkydGBjENigCMQaXlYSXwkN070NiXYlB4ejGnMubTT8WLIWAbiS0EttIlksRTP0XNGN3mRVxR52JrG7VnTo2JXBQf0edMgT7qZtcAmCm7R+YX21UGxCrtNNWyv2vXC8EzRhHwjHaQBaTIc5wf/quoIkhCrJDKkLUWjVdkg6zy11aYNP8qwVMoGr0Fjm+qkqpGDa+iDYUqrRafPaZob8256SRAguMSThE+ks7O0ONlOFENmYyuAsuXbV1oni9V8AH0be/2sXschwRldONXLFzd24TiflNcG96KQ50n9/lAWz8JQwXpIhZkCfjnn////hk7J0GInAd03cB+TSFkV4iNo68ldi91rtW9YbMkMDzm/gnBauTH7fEaUrKs/X+hgaO45zjMNMko+4tM5vRVcakZfbISHhY/O4ul7PXExhgHNvN3ildIQ+whdE57JqjcorGtGkh8cVXVSGocklKhtQZw/ZyMEl5HxqimrgpWe26RkJCJ82t6vySxwJNWgq26QWi///PIQydTjAZ1ZTA=",Xv="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAGNbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAsaWxvYwAAAABEAAACAAEAAAABAAADiAAAAuYAAgAAAAEAAAG1AAAB0wAAAEJpaW5mAAAAAAACAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAAAaaW5mZQIAAAAAAgAAYXYwMUFscGhhAAAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAAw2lwcnAAAACdaXBjbwAAABRpc3BlAAAAAAAAAHgAAAB4AAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQBBYYHAAAEwW1kYXQSAAoGGBm792FQMsYDEgAKKFDYAsLyjFo30pTtGU3AprQDWuPWfiKO+UiJ6EzD+II/WS4l4BjmY2ofsD4UVg0FduFHPfdGebqmDbZogjz8NVmGLNmvd1wZBili3DkP5CI2o5pZTYFM4gKz8agxQATWZ1TlrNqXta5vvfgPNjGiIZtDUOGwrXNnHLDVjvkLfxMBwqbR0m2IbPrNONVikzkKkyvUc28tZ0OyUJpViZEa6JafpNNpkcjPfAqWweGQn/GcVnzk0Yoqyx10vZ8PizT1YVGcXlyZK/CQWXX1FhfNvTy5B24MWdf7MYW1yiLPyoN770KqUQhYQ4qRESByRLLmnrwEp5hckW1jCOGDkP0LY/ntYGOUyA5bLZqmNySV9t5XOWdZ4GdE+R8FXeS1rBb0B22SeIQg1USJH0KWoUcLH2qF8BXOV/ZSmatXYza1poj526IoyW+Dh7DTvUka0T/SSTrr4EWAIEO7rbAjp4/wR7gEy3QOsWMd7tPNE0tAbaJj3XVDYfXVQiTrmT9N57UyC0p+sSo9LNlVQ9f83M9WtrTbCdfKSccpekK4r/kSVCw09VdOtqfRt8xeT/Ktw3MRZIN2BQi7zkUx8XtpTYEi88rSMhIACgkYGbv3YIEBA0Iy1gUSAAKKKKFA1/8v+8S4kO4MpRUFHt4u8ZHyQAHeVyKB9/R3QjSQ40Ui/H9rQBAW9zOcmsK7OAezRKofPoX5Qt0fssvCD+rcRvA2jVuLAl0cSUbHf3twEPhmvKWyavSXzgewLM3aDA+AEAnmOIS+UamWINS8/ukBzn9QhTnd3Luue14WVAGDamToLkW+lrCmdQlnDAjKp0CijFKr39O+9bFppa6UG59dwX4+hjGn10O87wFyO6y0jrfCYXbIr9Q4HuzSBoo0kKfV1zrHG+A5UMz8ztRi7TCW12wPCAXG65mJCLRUmcpFWEsxYvPrSGG6Uj9nj7KBwQbE13X8FbUlwghxy2m3jSjgMe4Urzb+8wcUCM6/7F5SrNJKKy5QA7pCbJIqxASfmTSkEL8917sYIqIpDOEzhr/SrIBndfRJLaJppmnsCF0qlaZwzCVKK4nx6quL4tf94Z7YlhSVXbeuJCf02ROBXJBrP/gV8pA/WT9QdGtZEgAy4MeXPS15YxAgDYTNw6vZTqR5Uw0TL1J7AsHww/4u1b7TxlVD8jRUbRGNIPEGiyDbQjo1BACqrCFH0ezIPvevHX6UiXN0YrigMsisYBncbqwP+Q5G87ktF0059VwED6yxqHV7xC04x6xfEvKZYT/bhiOylsgewzAeGDfJq3sdBafNJFcP6+eYrjziPZhB0v4uN+Elux8Ry6Ld0ZLmXtzX4KT1aDoY9g0SujO4FeK96dP3HrrZmXiHvHXSm5wuUcwtuWtUOpiyclQGRxXDl8JCbZ5q1otjpF+i2bdtAm72tTnadoO+UVVv7ndRFqmkHJIyH/uz9wZoIh67zjbmj/SH8YDN2YHd/HZez7aGTF/IlWBVEvV2cdynhJUVej4x9Og/DkuTBO1eacNXkDFDX0NTmA4zJoMtVfr3M0Ri0S4Fnlssn2/0kBdLiN/1nlHdNv5i9l4L2opnblG/Fimtfdj7FpQ=",_v="data:image/avif;base64,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",Kv="data:image/avif;base64,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",Zv="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAGNbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAsaWxvYwAAAABEAAACAAEAAAABAAADiAAAAwMAAgAAAAEAAAG1AAAB0wAAAEJpaW5mAAAAAAACAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAAAaaW5mZQIAAAAAAgAAYXYwMUFscGhhAAAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAAw2lwcnAAAACdaXBjbwAAABRpc3BlAAAAAAAAAHgAAAB4AAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQBBYYHAAAE3m1kYXQSAAoGGBm792FQMsYDEgAKKFDYAsLyjFo30pTtGU3AprQDWuPWfiKO+UiJ6EzD+II/WS4l4BjmY2ofsD4UVg0FduFHPfdGebqmDbZogjz8NVmGLNmvd1wZBili3DkP5CI2o5pZTYFM4gKz8agxQATWZ1TlrNqXta5vvfgPNjGiIZtDUOGwrXNnHLDVjvkLfxMBwqbR0m2IbPrNONVikzkKkyvUc28tZ0OyUJpViZEa6JafpNNpkcjPfAqWweGQn/GcVnzk0Yoqyx10vZ8PizT1YVGcXlyZK/CQWXX1FhfNvTy5B24MWdf7MYW1yiLPyoN770KqUQhYQ4qRESByRLLmnrwEp5hckW1jCOGDkP0LY/ntYGOUyA5bLZqmNySV9t5XOWdZ4GdE+R8FXeS1rBb0B22SeIQg1USJH0KWoUcLH2qF8BXOV/ZSmatXYza1poj526IoyW+Dh7DTvUka0T/SSTrr4EWAIEO7rbAjp4/wR7gEy3QOsWMd7tPNE0tAbaJj3XVDYfXVQiTrmT9N57UyC0p+sSo9LNlVQ9f83M9WtrTbCdfKSccpekK4r/kSVCw09VdOtqfRt8xeT/Ktw3MRZIN2BQi7zkUx8XtpTYEi88rSMhIACgkYGbv3YIEBA0Iy8wUSAAKKKKFA1/8v+8S4kO4MpRUFHt4u8ZHyQAHeVyKB9/R3QjSQ40Ui/H9rQBAW9zOcmsK7OAdJMSJGAs3n8eghe9f37lIZSt1eJnBCgNqQ+4zebs2hVXmFhHCkhbNL5SLyfkqooMttSnDROkTdn4v/13sgDKSHPbwga+F4j6Sp99vBTGmMZeGH34g53dn/gVSwG9CVLPE+InM5du+CufCeYo4UE07mR4BsVu3epA9rATHdU8OJXcNoZIK019jfS4MoemX6xi+SmkV1emsP0iFptP0HqNptomg8fC+F1UCDM85ybe0Pda3ZHBalGX7HVT/55j2IB96DmCXON1qVH4ebTJ+ZRAMxu/n43OVQ5Ifl4L4wyF9LunI+47mUz1bipcqWewElyCky8UMZV+tVol2Kmh7ct6AYDAXPtje8w7xIEAjOzyIX8lREGr7Q8okgLZJX0lskvrCram1wD1333PK+D8LAKwTRefSqMK4W024Fkeqyx5Xk/0vx8n/xQ1xMH4olMtNRvsQ3Ox2eaDbbblgQJqicwBRGv+hWRAdM/cu0wM6T3jDJPNrywa01nggQjnyyXAgYExIVMmkhg8M6wRV+vONmPqRTsSPUoLOkMH8tkQp9TPengSLgW+5Q3+xB7P+CdmXbFZbCAfC2LzAElDGRU6LXqhN12G9652lKc/2Y2UIea5UwuKrU62gKzrGqVadf/z8vUyupEvmCTusdLCY3GqBn19+IA2wNaWVcw1GMT4yUZxAvB3BYFXan24aGbjhB1nwizrW6OwMkmr0EJOtejaTFq407n4gDi43XBg8MqVKI4TwhWJk71lgZD3eI8K+ve0O/5gJrTmnFqeR6ErzFJZd62qv2Lyw53Fa6+z97V/d5CsgnrNStsZLJtLp1Gh7SwG23iDrnMXhYF1ndzL9XeUZwmVNvlhUtfP1drwgtZzBpANE0w+iHUhGOZ8LBmHopsGBsc8d3Q+PPzu4ltsZrSrzxPbi94mOuLJYAlq/umpJ2UA==",qv="data:image/avif;base64,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",Jv="data:image/avif;base64,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",e1=Vt`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,t1=m.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 100%;
  height: 620px;
  font-size: 1.2rem;
  overflow: hidden;
  background-color: var(--main-casecard-background-color);

  @media screen and (max-width: 1225px) {
    height: 600px;
  }

  @media screen and (max-width: 478px) {
    height: 500px;
  }
`,n1=m.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 40px;
`,r1=m.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 85%;
  height: 100%;
  color: var(--secondary-font-color);

  @media screen and (max-width: 960px) {
    width: 90%;
  }

  @media screen and (max-width: 478px) {
    padding-left: 20px;
    height: 500px;
  }
`,i1=m.div`
  display: grid;
  row-gap: 40px;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: auto;
  padding-left: 60px;
  padding-bottom: 60px;

  @media screen and (max-width: 478px) {
    padding-left: 40px;
    row-gap: 16px;
  }
`,Ut=m.img`
  width: 50%;
  height: auto;
  animation: ${e1} 3s ease-in-out infinite;

  @media screen and (max-width: 478px) {
    width: 40%;
  }
`,o1=m.div`
  margin-top: auto;
`,l1=()=>a.jsxs(t1,{children:[a.jsx(n1,{children:a.jsxs(i1,{children:[a.jsx(Ut,{src:Hv,alt:"React Logo."}),a.jsx(Ut,{src:$v,alt:"Webflow Logo."}),a.jsx(Ut,{src:Xv,alt:"Figma Logo."}),a.jsx(Ut,{src:_v,alt:"GitHub Logo."}),a.jsx(Ut,{src:Kv,alt:"HTML Logo."}),a.jsx(Ut,{src:Zv,alt:"CSS Logo."}),a.jsx(Ut,{src:qv,alt:"Javascript Logo."}),a.jsx(Ut,{src:Jv,alt:"Photoshop Logo."})]})}),a.jsxs(r1,{children:[a.jsx("h3",{children:"Frontend Tools"}),a.jsx("p",{children:"On top of all this I ma a qualified Frontend developer with a solid understanding of HTML, CSS, JavaScript, and React."}),a.jsx(o1,{children:a.jsx(Uv,{})})]})]}),a1="/portfolio/assets/lipusplus_brand_film_hammarby-2024_short-0c3de834.mp4",bc="/portfolio/assets/lipusplus_brand_film_hammarby-2024-c0930dc4.mp4",s1=m.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-top: 30px;
  color: var(--main-button-color);

  @media screen and (max-width: 478px) {
    align-items: center;
  }
`,u1=m.div`
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
`,c1=m.p`
  color: var(--main-font-color);
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 18px;
  }
`,d1=({onClick:e})=>a.jsxs(s1,{children:[a.jsx(u1,{children:a.jsx(jf,{onClick:e,size:70})}),a.jsx(c1,{children:"Play Film"})]}),p1=m.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: var(--secondary-button-color);

  @media screen and (max-width: 478px) {
    align-items: center;
  }
`,f1=m.div`
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
`,h1=m.p`
  color: var(--main-font-color);
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 18px;
  }
`,m1=({onClick:e})=>a.jsxs(p1,{children:[a.jsx(f1,{children:a.jsx(hr,{to:"/lipusplus",children:a.jsx(Pt,{onClick:e,size:70})})}),a.jsx(h1,{children:"See Case Study"})]}),A1="/portfolio/assets/lipusPlusLogoWhite-b2e2b769.avif";function Cf(e){return An({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",fill:"currentColor"},child:[]}]})(e)}const g1=Vt`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,v1=m.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  animation: ${g1} 0.5s ease-out;
`,x1=m.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--main-modal-backgroundcolor);
`,y1=m.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 2rem;
  color: var(--main-font-color);
  cursor: pointer;
  z-index: 100;
`,w1=({isOpen:e,onClose:t,children:n})=>e?a.jsx(v1,{children:a.jsxs(x1,{children:[a.jsx(y1,{onClick:t,children:a.jsx(Cf,{})}),n]})}):null,S1=m.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`,j1=m.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 1;
`,C1=m.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.32);
  z-index: 2;
`,k1=m.div`
  width: 60%;
  height: 500px;
  padding-top: 280px;
  padding-left: 60px;
  padding-bottom: 180px;
  display: flex;
  flex-direction: column;
  z-index: 3;

  @media screen and (max-width: 960px) {
    padding-top: 100px;
    padding-bottom: 80px;
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
`,E1=m.div`
  display: flex;
  padding-top: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 478px) {
    justify-content: center;
  }
`,I1=m.img`
  width: 30%;
  height: auto;

  @media screen and (max-width: 478px) {
    width: 50%;
  }
`,P1=m.div`
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
`,B1=({scrollToEvent:e})=>{const t=j.useRef(null),n=j.useRef(null),[r,i]=j.useState(!1),[o,l]=j.useState(!1);j.useEffect(()=>{const c=()=>{l(window.innerWidth<1024)};return c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),j.useEffect(()=>{const c=setTimeout(()=>{t.current&&t.current.play()},1e3);return()=>clearTimeout(c)},[]);const s=()=>{o?setTimeout(()=>{if(n.current){const c=n.current;c.pause(),c.currentTime=0;const A=c.play();A!==void 0&&A.then(()=>{c.requestFullscreen().catch(p=>{console.log("Error attempting to enable full-screen mode:",p)})}).catch(p=>{console.log("Failed to play the video automatically:",p)})}},0):i(!0)},u=()=>{i(!1),t.current&&t.current.play()};return j.useEffect(()=>{const c=()=>{document.fullscreenElement||n.current&&(n.current.pause(),n.current.currentTime=0)};return document.addEventListener("fullscreenchange",c),()=>{document.removeEventListener("fullscreenchange",c)}},[]),a.jsxs(S1,{children:[a.jsx(j1,{ref:t,src:a1,loop:!0,muted:!0,playsInline:!0,preload:"auto",alt:"Background video"}),a.jsx(C1,{}),a.jsxs(k1,{children:[a.jsx(E1,{children:a.jsx(I1,{src:A1,alt:"LipusPlus logo"})}),a.jsx("h4",{children:"Meet the Physio of Hammarby Handball"}),a.jsx("p",{children:"Brand film highlighting LipusPlus's partnership with Hammarby Handball. Together with LipusPlus we created a landing page using captivating content and testimonials to showcase the partnership and to invite users to a webinar providing evidence of the effectiveness of the modality."}),a.jsxs(P1,{children:[a.jsx(d1,{onClick:s}),a.jsx(m1,{onClick:e})]})]}),a.jsx(w1,{isOpen:r,onClose:u,children:a.jsx("video",{controls:!0,autoPlay:!0,preload:"auto",children:a.jsx("source",{src:bc,type:"video/mp4"})})}),a.jsx("video",{ref:n,style:{display:"none"},src:bc,type:"video/mp4",controls:!0,preload:"auto"})]})},kf="/portfolio/assets/lipusPlusLogo-022851c3.avif",Ef="/portfolio/assets/lipusHeroImg-44921e74.avif",b1=m.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: var(--main-button-color);
`,N1=m.div`
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
`,T1=m.p`
  color: var(--secondary-font-color);
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 478px) {
    font-size: 18px;
  }
`,R1=({onClick:e})=>a.jsxs(b1,{children:[a.jsx(N1,{children:a.jsx(hr,{to:"/lipusplus",children:a.jsx(Pt,{onClick:e,size:70})})}),a.jsx(T1,{children:"See Case Study"})]}),z1=Vt`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,O1=m.section`
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
`,L1=m.div`
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
`,M1=m.div`
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
`,F1=m.img`
  width: 40%;
  height: auto;
`,W1=m.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  font-size: 14px;
  z-index: 2;
`,D1=m.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 620px;
`,G1=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 478px) {
    height: 500px;
  }

  ${({isInView:e})=>e&&mn`
      animation: ${z1} 1s ease-out forwards;
    `}
`,If=()=>{const e=j.useRef(null),[t,n]=j.useState(!1);return j.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),a.jsxs(O1,{children:[a.jsxs(L1,{children:[a.jsx("h4",{children:"UX Case study"}),a.jsx(M1,{children:a.jsx(F1,{src:kf,alt:"The logo for LipuspLus"})}),a.jsx("p",{children:"LipusPlus aims to attract physiotherapists and elite athletes to its webinars on the Return to Play concept. An enticing and informative landing page is needed to generate leads for these webinars."}),a.jsx(R1,{})]}),a.jsxs(D1,{children:[a.jsx(W1,{children:"Photo by Peder Rotkirch."}),a.jsx(G1,{ref:e,src:Ef,alt:"A hammarby handball player in green and white stripes holds a ball.",isInView:t})]})]})},V1="/portfolio/assets/vikings-23b289a3.mp4",Nc="/portfolio/assets/vikingsTrailer-3785bb88.mp4",Q1="/portfolio/assets/viaplayLogo-c60ae164.avif",Y1=m.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: var(--secondary-button-color);

  @media screen and (max-width: 478px) {
    align-items: center;
  }
`,U1=m.div`
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
`,H1=m.p`
  color: var(--main-font-color);
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 18px;
  }
`,$1=({onClick:e})=>a.jsxs(Y1,{children:[a.jsx(U1,{children:a.jsx("a",{href:"https://paulevans-dop.com/",target:"_blank",rel:"noopener noreferrer",children:a.jsx(Pt,{onClick:e,size:70})})}),a.jsx(H1,{children:"Go to Cinematography Site"})]}),X1=m.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: var(--main-button-color);

  @media screen and (max-width: 478px) {
    align-items: center;
  }
`,_1=m.div`
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
`,K1=m.p`
  color: var(--main-font-color);
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 18px;
  }
`,Z1=({onClick:e})=>a.jsxs(X1,{children:[a.jsx(_1,{children:a.jsx(jf,{onClick:e,size:70})}),a.jsx(K1,{children:"Play Trailer"})]}),q1=Vt`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,J1=m.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  animation: ${q1} 0.5s ease-out;
`,ex=m.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--main-modal-backgroundcolor);
`,tx=m.button`
  position: absolute;
  top: 30px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 2rem;
  color: var(--main-font-color);
  cursor: pointer;
  z-index: 100;
`,nx=({isOpen:e,onClose:t,children:n})=>e?a.jsx(J1,{children:a.jsxs(ex,{children:[a.jsx(tx,{onClick:t,children:a.jsx(Cf,{})}),n]})}):null,rx=m.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`,ix=m.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 1;
`,ox=m.div`
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
    padding-top: 100px;
    padding-bottom: 80px;
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
`,lx=m.div`
  display: flex;
  padding-top: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 478px) {
    justify-content: center;
  }
`,ax=m.img`
  width: 30%;
  height: auto;
`,sx=m.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media screen and (max-width: 478px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`,ux=({scrollToEvent:e})=>{const t=j.useRef(null),n=j.useRef(null),[r,i]=j.useState(!1),[o,l]=j.useState(!1),[s,u]=j.useState(0);j.useEffect(()=>{const p=()=>{l(window.innerWidth<1024)};return p(),window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]),j.useEffect(()=>{const p=setTimeout(()=>{t.current&&t.current.play()},1e3);return()=>clearTimeout(p)},[]);const c=()=>{o?(u(p=>p+1),setTimeout(()=>{if(n.current){const p=n.current;p.pause(),p.currentTime=0;const g=p.play();g!==void 0&&g.then(()=>{p.requestFullscreen().catch(S=>{console.log("Error attempting to enable full-screen mode:",S)})}).catch(S=>{console.log("Failed to play the video automatically:",S)})}},0)):i(!0)},A=()=>{i(!1),t.current&&(t.current.currentTime=0,t.current.play())};return j.useEffect(()=>{const p=()=>{document.fullscreenElement||n.current&&(n.current.pause(),n.current.currentTime=0)};return document.addEventListener("fullscreenchange",p),()=>{document.removeEventListener("fullscreenchange",p)}},[]),a.jsxs(rx,{children:[a.jsx(ix,{ref:t,src:V1,loop:!0,muted:!0,playsInline:!0,preload:"auto",alt:"Background video"}),a.jsxs(ox,{children:[a.jsx(lx,{children:a.jsx(ax,{src:Q1,alt:"LipusPlus logo"})}),a.jsx("h4",{children:"The Last Journey of the Vikings"}),a.jsx("p",{children:'Worked as a cinematographer for the Viaplay series "The Last Journey of the Vikings" with Mopar Studios and director James Valesquez. Shot on location in Ireland, in collaboration with Subotica Entertainment.'}),a.jsxs(sx,{children:[a.jsx(Z1,{onClick:c}),a.jsx($1,{})]})]}),a.jsx(nx,{isOpen:r,onClose:A,children:a.jsx("video",{controls:!0,autoPlay:!0,preload:"auto",children:a.jsx("source",{src:Nc,type:"video/mp4"})})}),a.jsx("video",{ref:n,style:{display:"none"},src:Nc,type:"video/mp4",controls:!0,preload:"auto"},s)]})},Pf="data:image/avif;base64,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",Bf="/portfolio/assets/ebieHeroImg-14466e14.avif",cx=m.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: var(--main-button-color);
`,dx=m.div`
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
`,px=m.p`
  color: var(--secondary-font-color);
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 18px;
  }
`,fx=({onClick:e})=>a.jsxs(cx,{children:[a.jsx(dx,{children:a.jsx(hr,{to:"/ebie",children:a.jsx(Pt,{onClick:e,size:70})})}),a.jsx(px,{children:"See Case Study"})]}),hx=Vt`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,mx=m.section`
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
`,Ax=m.div`
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
`,gx=m.div`
  display: flex;
  padding-bottom: 30px;
  padding-top: 30px;
`,vx=m.img`
  width: 40%;
  height: auto;
`,xx=m.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  font-size: 14px;
  z-index: 2;
`,yx=m.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 620px;

  @media screen and (max-width: 960px) {
    height: 600px;
  }
`,wx=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({isInView:e})=>e&&mn`
      animation: ${hx} 1s ease-out forwards;
    `}

  @media (max-width: 478px) {
    height: 500px;
  }
`,bf=()=>{const e=j.useRef(null),[t,n]=j.useState(!1);return j.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),a.jsxs(mx,{children:[a.jsxs(Ax,{children:[a.jsx("h4",{children:"UX Case study"}),a.jsx(gx,{children:a.jsx(vx,{src:Pf,alt:"The logo for Ebie"})}),a.jsx("p",{children:"Create and implement a completely new and user-friendly function within the platform that makes it easy for property owners to apply for and manage group insurance. Simplify the application and the overview for insurance status."}),a.jsx(fx,{})]}),a.jsxs(yx,{children:[a.jsx(xx,{children:"Photo from www.Ebie.se"}),a.jsx(wx,{ref:e,src:Bf,alt:"A street view on the corner of Sveavägen, Sergelstorg.",isInView:t})]})]})},Sx="/portfolio/assets/hidden-7e893598.avif",jx="/portfolio/assets/hiddenMobileImg-1a91cc10.avif",Cx="/portfolio/assets/BESTSHORTFILMSPECIALAWARD-EasternEuropeFilmFestival-December2022-489d2b56.avif",kx=m.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;
`,Ex=m.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;

  @media (max-width: 767px) {
    display: none;
  }
`,Ix=m.img`
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;

  @media (max-width: 767px) {
    display: flex;
  }
`,Px=m.div`
  width: 60%;
  height: 500px;
  padding-top: 280px;
  padding-left: 60px;
  padding-bottom: 180px;
  display: flex;
  flex-direction: column;
  z-index: 99;

  @media screen and (max-width: 960px) {
    padding-top: 100px;
    padding-bottom: 80px;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
    height: 600px;
  }

  @media screen and (max-width: 478px) {
    text-align: center;
    width: 90%;
    height: 700px;
    padding-left: 16px;
  }

  @media screen and (max-width: 320px) {
    padding-top: 15px;
  }
`,Bx=m.div`
  display: flex;
  padding-top: 30px;

  @media screen and (max-width: 767px) {
    padding-top: 20px;
  }

  @media screen and (max-width: 478px) {
    justify-content: center;
    padding-top: 10px;
  }
`,bx=m.img`
  width: 20%;
  height: auto;

  @media screen and (max-width: 767px) {
    width: 40%;
  }
`,Nx=m.div`
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
`,Tx=m.p`
  margin-right: 40px;
  font-size: 14px;

  @media screen and (max-width: 478px) {
    margin-right: 0;
  }
`,Rx=({scrollToEvent:e})=>a.jsxs(kx,{children:[a.jsx(Nx,{children:a.jsx(Tx,{children:"Photography by Nisse Virgin."})}),a.jsx(Ex,{src:Sx,alt:"A short film poster. A Man sits with his back to camera contemplating"}),a.jsx(Ix,{src:jx,alt:"A short film poster. A Man sits with his back to camera contemplating"}),a.jsxs(Px,{children:[a.jsx("h4",{children:"Storytelling"}),a.jsx("p",{children:"Storytelling is at the heart of everything I do because it’s how I connect with people and make experiences meaningful. I’ve applied my narrative skills to develop commercials, content, films, and TV shows, while also shaping engaging user journeys and creating immersive experiences. I’ve been commissioned to write concepts for B2C clients, TV channels, and streaming services, with several of these concepts being optioned."}),a.jsx("p",{}),a.jsx("p",{children:"HIDDEN is a short film that I directed, produced, and wrote. It went on to win the Special Award for Best Short Film at the Eastern European Short Film Festival."}),a.jsx(Bx,{children:a.jsx(bx,{src:Cx,alt:"A wreath for Winner Eastern European Short Film Festival "})})]})]}),Nf=Vt`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Tc=m.section`
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
  opacity: 0;
  ${({isVisible:e})=>e&&mn`
      animation: ${Nf} 2s forwards;
    `}

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  }
`,zx=m.div`
  opacity: 0;
  ${({isVisible:e})=>e&&mn`
      animation: ${Nf} 1s forwards;
    `}
`,Wl=(e=.1)=>{const[t,n]=j.useState(!1),r=j.useRef(null);return j.useEffect(()=>{const i=new IntersectionObserver(([o])=>{o.isIntersecting&&(n(!0),i.unobserve(o.target))},{threshold:e});return r.current&&i.observe(r.current),()=>{r.current&&i.unobserve(r.current)}},[e]),[r,t]},Ox=m.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
`,Lx=()=>{const[e,t]=Wl(),[n,r]=Wl(),[i,o]=Wl(),l=j.useRef(null),s=()=>{l.current&&l.current.scrollIntoView({behavior:"smooth"})};return a.jsxs(Ox,{children:[a.jsx(C0,{}),a.jsxs(Tc,{ref:e,isVisible:t,children:[a.jsx(Gv,{}),a.jsx($0,{})]}),a.jsx(Bv,{}),a.jsxs(Tc,{ref:n,isVisible:r,children:[a.jsx(ov,{}),a.jsx(gv,{})]}),a.jsx(B1,{scrollToEvent:s}),a.jsx("div",{ref:l}),a.jsx(If,{}),a.jsx(ux,{}),a.jsx(bf,{}),a.jsx(zx,{ref:i,isVisible:o,children:a.jsx(Rx,{})}),a.jsx(l1,{})]})},Mx=m.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
  margin-top: 170px;
`,Fx=()=>(j.useRef(null),a.jsxs(Mx,{children:[a.jsx(If,{}),a.jsx(bf,{})]})),Wx="/portfolio/assets/meAbout-b0dd0af4.avif",Dx=Vt`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,Gx=m.section`
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
`,Vx=m.div`
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
`,Qx=m.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,Yx=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({isLoaded:e})=>e&&mn`
      animation: ${Dx} 1s ease-out forwards;
    `}
`,Ux=()=>{const[e,t]=j.useState(!1),n=j.useRef(null);return j.useEffect(()=>{const r=()=>{t(!0)},i=n.current;if(i)if(i.complete)r();else return i.addEventListener("load",r),()=>{i.removeEventListener("load",r)}},[]),a.jsxs(Gx,{children:[a.jsxs(Vx,{children:[a.jsx("h3",{children:"About me "}),a.jsx("p",{children:"“Hi, I’m Paul! As a creative I need a platform to showcase my work, so I taught myself how to code. I then decided to study UX/UI and Frontend design to gain structure and further insight into the platforms and methods used. My interests extend into AI, particularly image and video generation. I have a calm and methodical approach to life, which enables me to navigate challenges with ease. My strong willpower and determination help me stay focused on the goals, even during difficult times."})]}),a.jsx(Qx,{children:a.jsx(Yx,{ref:n,src:Wx,alt:"Paul Evans watching the ocean",isLoaded:e})})]})},Hx="/portfolio/assets/camper-588e3c53.avif",$x=Vt`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,Xx=m.section`
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
`,_x=m.div`
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
`,Kx=m.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,Zx=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  visibility: hidden;

  ${({isInView:e})=>e&&mn`
      visibility: visible;
      animation: ${$x} 1s ease-out forwards;
    `}
`,qx=()=>{const e=j.useRef(null),[t,n]=j.useState(!1);return j.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),a.jsxs(Xx,{children:[a.jsxs(_x,{children:[a.jsx("h3",{children:"For fun"}),a.jsx("p",{children:"Surfing and traveling are my two biggest passions. When I'm not paddling out into the sea I like to work out at the gym or swim in the lake. I also cherish the time I spend with my family, friends cooking and watching movies and TV shows."})]}),a.jsx(Kx,{children:a.jsx(Zx,{ref:e,src:Hx,alt:"A surfboard propped up against a mobile home",isInView:t})})]})},Jx=m.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
  margin-top: 170px;
`,ey=()=>(j.useRef(null),a.jsxs(Jx,{children:[a.jsx(Ux,{}),a.jsx(qx,{})]})),ty="/portfolio/assets/challenges-70c5b3a7.avif",ny="/portfolio/assets/fans-667fbfce.avif",ry="/portfolio/assets/research-b4a1f59e.avif",iy="/portfolio/assets/mapping-c6580bd3.avif",oy="/portfolio/assets/lipus-00a0d7ff.avif",ly="/portfolio/assets/physio-5d7e362e.avif",ay="/portfolio/assets/athlete-40b4363a.avif",sy="/portfolio/assets/insights-cb84265a.avif",uy="/portfolio/assets/webinar-966c915f.avif",cy="/portfolio/assets/webinarMobile-18a4ce2a.avif",dy="/portfolio/assets/designOne-24f39a91.avif",py="/portfolio/assets/designTwo-b7e3107e.avif",fy="/portfolio/assets/webflow-baa33610.avif",hy="/portfolio/assets/reflection-72e94f6a.avif",my=m.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 24px;
  color: var(--main-button-color);
`,Ay=m.div`
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
`,gy=m.p`
  color: var(--secondary-font-color);
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 18px;
  }
`,vy=({onClick:e})=>a.jsxs(my,{children:[a.jsx(Ay,{children:a.jsx("a",{href:"https://www.lipusplus.com/casestudies/hammarby",target:"_blank",rel:"noopener noreferrer",children:a.jsx(Pt,{onClick:e,size:70})})}),a.jsx(gy,{children:"See live page at LipusPlus.com"})]}),xy=m.section`
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
`,yy=m.div`
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
`,wy=m.div`
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
`,Sy=m.div`
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
`,jy=m.div`
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
`,Cy=m.div`
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
`,ky=m.div`
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
`,Ey=m.div`
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
`,Iy=m.div`
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
`,Py=m.div`
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
`,By=m.div`
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
`,by=m.div`
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
`,Ny=m.div`
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
`,Ty=m.div`
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
`,Ry=m.div`
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
`,Ge=m.div`
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
`,zy=m.div`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;

  @media (max-width: 478px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`,Oy=m.img`
  width: 40%;
  height: auto;

  @media (max-width: 320px) {
    width: 50%;
  }
`,Ve=m.div`
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
`,Qe=m.p`
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
`,Ye=m.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`,Ue=m.img`
  width: 100%;
  height: 800px;
  object-fit: cover;

  ${({isInView:e})=>e&&css`
      animation: ${slideInFromRight} 1s ease-out forwards;
    `}

  @media screen and (max-width: 960px) {
    height: 700px;
  }
`,Ly=m.img`
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
`,My=()=>a.jsxs(xy,{children:[a.jsxs(yy,{children:[a.jsxs(Ge,{children:[a.jsx("h4",{children:"UX Case study"}),a.jsx(zy,{children:a.jsx(Oy,{src:kf,alt:"The logo for LipuspLus"})}),a.jsx("h5",{children:"My role"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("span",{className:"boldlarge",children:"UX / UI Designer"})}),a.jsx("li",{children:a.jsx("span",{className:"boldlarge",children:"Frontend Developer"})}),a.jsx("li",{children:a.jsx("span",{className:"boldlarge",children:"Content Creator"})})]})]}),a.jsxs(Ye,{children:[a.jsx(Ve,{children:a.jsx(Qe,{children:"Photo by Peder Rotkirch, LipusPlus."})}),a.jsx(Ue,{src:Ef,alt:"A hammarby handball player in green and white stripes holds a ball."})]})]}),a.jsxs(wy,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Challenges"}),a.jsx("p",{children:"* Understanding Elite Athletes and Physiotherapists everyday struggles."}),a.jsx("p",{children:"* Minimal experience with webinars."}),a.jsx("p",{children:"* Working with Webflow, which was new to me."})]}),a.jsxs(Ye,{children:[a.jsx(Ve,{children:a.jsx(Qe,{children:"Screenshot from partnership film, LipusPlus & Hammarby Handball"})}),a.jsx(Ue,{src:ty,alt:"A hammarby handball player is lead of the court by the team physio."})]})]}),a.jsxs(Sy,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Brief"}),a.jsx("p",{children:"LipusPlus aims to attract physiotherapists and elite athletes to its webinars on the Return to Play concept. An enticing and informative landing page is needed to generate leads for these webinars."}),a.jsx("h5",{children:"Goal"}),a.jsx("p",{children:"Create a user-friendly landing page. Connect with the target group. Convince the user to register for the event. Provide a seamless experience for visitors from registration to processing. Strive for a high conversion rate and satisfaction for both LipusPlus and the participants before, during and after the event. Generate leads for sales processing."})]}),a.jsxs(Ye,{children:[a.jsx(Ve,{children:a.jsx(Qe,{children:"Screenshot from partnership film, LipusPlus & Hammarby Handball"})}),a.jsx(Ue,{src:ny,alt:"Hammarby fans encourgae their team."})]})]}),a.jsxs(jy,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Key Questions"}),a.jsx("p",{children:"1. How can we make the message and the offer on the landing page clear and attractive to the target group?"}),a.jsx("p",{children:"2. How can we optimise the landing page to increase the conversion rate and get more visitors to sign up for webinars?"}),a.jsx("p",{children:"3. How can we stimulate people to spread the word about the webinar in their surroundings?"})]}),a.jsxs(Ye,{children:[a.jsx(Ve,{children:a.jsx(Qe,{children:"Screenshot of Anne Hopfgarten from partnership film, LipusPlus & Hammarby Handball"})}),a.jsx(Ue,{src:ry,alt:"Anne Hopfgarten sitting for an interview."})]})]}),a.jsxs(Cy,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Qualitative Research"}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Seminar: "})," LipusPlus"]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Observation: "})," LipusPlus Sales Member"]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Observation: "})," LipusPlus Clinician"," "]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Interview: "})," Physiotherapist"]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Interview: "})," Elite athlete"]})]}),a.jsxs(Ye,{children:[a.jsx(Ve,{children:a.jsx(Qe,{children:"Image from research mapping, figma"})}),a.jsx(Ue,{src:iy,alt:"Mapping of the users needs."})]})]}),a.jsxs(ky,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Results"}),a.jsx("p",{children:a.jsx("span",{className:"bold",children:"LipusPlus"})}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Challenges: "})," Struggles with conversion rates due to a lack of evidence and information about the modality."]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Needs: "})," A convenient platform to present and discuss current and ongoing studies and results."]})]}),a.jsxs(Ye,{children:[a.jsx(Ve,{children:a.jsx(Qe,{children:"Photo by Peder Rotkirch, Lipusplus."})}),a.jsx(Ue,{src:oy,alt:"A hammarby handball player uses the LipusPlus modality.."})]})]}),a.jsxs(Ey,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Results"}),a.jsx("p",{children:a.jsx("span",{className:"bold",children:"Physiotherapist"})}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Concerns: "})," Need evidence that LipusPlus is effective and safe. Rely on endorsements from prominent clubs and figures in their sport."]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Priorities: "})," They aim to get their patients back to their sport quickly and safely. Their reputation and job are at stake. They question why they should choose LipusPlus over proven traditional methods."]})]}),a.jsxs(Ye,{children:[a.jsx(Ve,{children:a.jsx(Qe,{children:"Screenshot of Anne Hopfgarten from partnership film, LipusPlus & Hammarby Handball"})}),a.jsx(Ue,{src:ly,alt:"Anne Hopfgarten. Hammarby physio."})]})]}),a.jsxs(Iy,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Results"}),a.jsx("p",{children:a.jsx("span",{className:"bold",children:"Athlete"})}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Concerns: "})," Need evidence that LipusPlus is effective and safe. They often rely on endorsements from prominent figures in their sport and trusted physiotherapists."]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Goals: "})," Want to return to their sport as quickly as possible since their income and career goals depend on it."]})]}),a.jsxs(Ye,{children:[a.jsx(Ve,{children:a.jsx(Qe,{children:"Screenshot of Ludvig Lindeberg from partnership film, LipusPlus & Hammarby Handball"})}),a.jsx(Ue,{src:ay,alt:"Ludvig Lindeberg celebrates winning."})]})]}),a.jsxs(Py,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Insights"}),a.jsx("p",{children:"* There is skepticism towards Medtech companies."}),a.jsx("p",{children:"* Build trust not just through evidence but also an understanding of the users everyday struggles and lifestyles."}),a.jsx("p",{children:"* A shift towards a sports lifestyle focus, emphasising partnerships rather than solely Medtech, would be more inspirational and trustworthy."}),a.jsxs("p",{children:["* It is essential for the user that the landing page works on all devices and is responsive."," "]}),a.jsx("p",{children:"* Our users lead busy lives, on the go. Headlines, clear and captivating. Copy, persuasive and engaging. We need to get their attention directly."}),a.jsx("p",{children:"* Clearly show the offer and benefits of Return to Play."}),a.jsx("p",{children:"* Clearly communicate the value and benefits of attending the webinar, emphasising credible evidence and success stories."})]}),a.jsxs(Ye,{children:[a.jsx(Ve,{children:a.jsx(Qe,{children:"Image from Unsplash."})}),a.jsx(Ue,{src:sy,alt:"An athlete is lying down on the track."})]})]}),a.jsxs(By,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Webinar Requirements"}),a.jsxs("p",{children:["* The webinar platform should be a stable and proven streaming service."," "]}),a.jsx("p",{children:"* Data collection through the registration form is a must."}),a.jsx("p",{children:"* Email Automation."}),a.jsx("p",{children:"* Option to connect to Hubspot. "}),a.jsx("p",{children:"* Simple and easy to understand registration forms."}),a.jsx("p",{children:"* Custom Registration forms."}),a.jsx("p",{children:"With approximately 260 million users, Vimeo met all our requirements. Since LipusPlus already hosted content on Vimeo, it streamlined our video showcasing process."})]}),a.jsxs(Ye,{children:[a.jsx(Ve,{children:a.jsx(Qe,{children:"Image from Vimeo."})}),a.jsx(Ue,{src:uy,alt:"A vimeo webinar screen."}),a.jsx(Ly,{src:cy,alt:"Promtional text from vimeo about their webinars."})]})]}),a.jsxs(by,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Design"}),a.jsx("p",{children:"Building and improving upon an existing design system. "}),a.jsxs("p",{children:["* Through emotional content we highlighted partnerships for credibility."," "]}),a.jsxs("p",{children:["* Clearly outlined the benefits and starting price of the Return to Play program."," "]}),a.jsxs("p",{children:["* Assure the user that the webinar would discuss evidence from LipusPlus studies."," "]}),a.jsxs("p",{children:["* Engaging Content. Through still images, videos and testimonials."," "]}),a.jsx("p",{children:"* Showcase evidence and studies."}),a.jsxs("p",{children:["* Clear and Compelling Headlines alongside persuasive Copywriting."," "]}),a.jsxs("p",{children:["* A user-friendly registration form with a prominent CTA button."," "]}),a.jsx("p",{children:"* Social Proofing. "}),a.jsx("p",{children:"* Follow-Up Communication. "})]}),a.jsxs(Ye,{children:[a.jsx(Ve,{children:a.jsx(Qe,{children:"Design frames from figma."})}),a.jsx(Ue,{src:dy,alt:"Frames from LipusPlus HiFi Designs."})]})]}),a.jsxs(Ny,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Design"}),a.jsxs("p",{children:["* Through emotional content we highlighted partnerships for credibility."," "]}),a.jsxs("p",{children:["* Clearly outlined the benefits and starting price of the Return to Play program."," "]}),a.jsxs("p",{children:["* Assured the user that the webinar would discuss evidence from LipusPlus studies."," "]})]}),a.jsxs(Ye,{children:[a.jsx(Ve,{children:a.jsx(Qe,{children:"Design frames from figma."})}),a.jsx(Ue,{src:py,alt:"Frames from LipusPlus HiFi Designs."})]})]}),a.jsxs(Ty,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Frontend"}),a.jsxs("p",{children:["The existing LipusPlus homepage was initially created and is presently hosted via Webflow. A key stipulation for this project was to continue using Webflow."," "]}),a.jsx(vy,{})]}),a.jsxs(Ye,{children:[a.jsx(Ve,{children:a.jsx(Qe,{children:"Screen shot from Webflow."})}),a.jsx(Ue,{src:fy,alt:"Webflow. Desktop ."})]})]}),a.jsxs(Ry,{children:[a.jsxs(Ge,{children:[a.jsx("h5",{children:"Reflection"}),a.jsxs("p",{children:["This project was incredibly exciting for me for several reasons. Firstly, I had the opportunity to leverage my previous experience as a filmmaker, from conceptualizing and working with the brand to planning and filming interviews and sports coverage. Secondly, this project allowed me to align user needs with brand objectives, achieving a cohesive brand feel that LipusPlus has been striving for. Finally, I had the chance to work with Webflow, exploring a new platform and expanding my skills—an experience I thoroughly enjoyed."," "]}),a.jsx("p",{children:"In conclusion, this project has not only met its goals but also provided a strong template for future case studies, webinars and other promotions. However there is always room for improvement. One area would be creating our own registration form instead of using the embedded Vimeo form. This change would give better design control and allow for a more cohesive user experience."}),a.jsx("p",{children:"This project has been a valuable learning experience. It demonstrated the importance of thorough research, user-centric design, and effective communication. The real-world application of our work and the positive feedback from LipusPlus has been immensely rewarding."})]}),a.jsxs(Ye,{children:[a.jsx(Ve,{children:a.jsx(Qe,{children:"The LipusPlus modality. Photo by Peder Rotkirch, LipusPlus."})}),a.jsx(Ue,{src:hy,alt:"The lipusPlus modality"})]})]})]}),Fy="/portfolio/assets/challengesEbie-948c84b9.avif",Wy="/portfolio/assets/briefEbie-dee42c26.avif",Dy="/portfolio/assets/researchEbie-fc14e246.avif",Gy="/portfolio/assets/persona1-01eeebdf.avif",Vy="/portfolio/assets/persona2-e628457a.avif",Qy="/portfolio/assets/application1-e9abd0d8.avif",Yy="/portfolio/assets/application2-9a1504ec.avif",Uy="/portfolio/assets/sorting-ef8a0128.avif",Hy="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAGNbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAsaWxvYwAAAABEAAACAAEAAAABAAAC1AAADC8AAgAAAAEAAAG1AAABHwAAAEJpaW5mAAAAAAACAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAAAaaW5mZQIAAAAAAgAAYXYwMUFscGhhAAAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAAw2lwcnAAAACdaXBjbwAAABRpc3BlAAAAAAAAAvQAAAPWAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQUMAAAAABNjb2xybmNseAACAAIABoAAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQUcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQBBYYHAAANVm1kYXQSAAoHGWZvP1eFQDKRAhIACihQ9M4R2OvAmgwnQkIxj9lcaP5yMyr+w+/g36SDKzU4+xQSdmCSLF5MBE2TBbYOSkeKvv209tiz4fRfRhN2EQZwY0cTNhf+3SviePvH+yauaidyx1hdHlgvvaYkcOnRU4SEIitgvnTE1i0M7yGUxbYRaBv3IaIsyXoVeSYwmAVDrGdyvYE0VRShYX0eJUMvR7+SVhXC8lQFT9GjWnQAKZxrkoTj6zFH9Rx9KifcMIWzWjY4UCVDwrgi2MbXmTzfhRX5sUyYuEQMGm4uedl3iMrrPk4/04hO3coBvfpwTfer/vLdd4ZrARUxp85rynhRB99wQQEeO+AtTt48GgdKPhraYbn6AJudFFk90XY1bBIACgoZZm8/V4IEBA0IMp4YTIAC9L5/uL1Nhv9JcME3nLweG9TzX9Wj/jvQufiaToOhnqVGDkmJ+LoKOfkLIGA6dzoRN7ng3OWQGKTTSbk4gxC2Ynoo0yUdCXWPb3Df8IbI4mKfMrS/QkOYHj2blVdvIvf+nlzXOl5WQfpB5M8Xf8mrBNB/d/dBy/mK4OlXQAGEru5jDz4kS2hkL4n6HdaC6qApFDb22u1I4kivNQvz1nDjq8vQDxhODOW9pFWMEu8DtCDQnWHQv/xmBCyhzQ976yHOaFDM91Kdyh+9uP7S4rxoNwTLvB5IQqhshOW0BXSKxQF+wL/JC3+v+ZErk7smyyX7PzJaAI08e3nu7YmrHHVmP8nO+fLhVDWTTJ4kopBKcw05cWJgtlE8RnBwFwX8/TcJv1OL6u6MuyRCeT1sB/79zLHYFA1OhT3WOUDXqXR36xGDeJfZGvbFdzE3tR9W2NWo8fVrvkfu8t8Jb6JJfXWbVsfrQERKY4r7/ktQGVXNpNkh98qYEsz1xkoWwIA/IZtzArFUj6pwHnoeizGt4uOb7uVnBxlixzOh6bFOmJU4PoFV/YxaVIhn+QWdWYg6wM6OSV7WfVX+CrX/WHKTTiruVfQDlVNqvuvIVdRPk3ktpmXh4f9jj67ra7NH0+U9TDkb4xYqSpheuEKT6D/AssZbnaoRv8PfLc7AzfbULeEU+qIpNlJtS77gyMhMRvB1HVCc6cs5juIEAheUntW2xy//EHAF00zMmDnLcEhmmyZSsinA2kxupaFlWX2P8vK7fO/h3X5EwoiFSHQC/shP6f/PjjBmXfRTLSku9ETmNYUg79A3m44mKJ6Kccfmxjn3Ocd6mgjfll02tK7zT/W1VFwS88yk2hNCs1pNZtL6HfsvYWfVinVMyslRxkvI3JBD6Fs+gbMrOf0v1hgNw9I5vQFRwynaMxd0OYOKkMHkUY3cwb3SHdER+bEfvCAbWJwvL/k71OeagrwQIVpRJN+z0kgH1R+mrfkhQU2Ng2ftQbF2naSCka6uVV5SeDrxsRs2s5cGYSFU7NqxYIMG9O8vkV24Sf1eywFBTvrlL5TQWOUX0ZVwx8CMMN8mh3BkCOBe5TwxIpkKjh64OH2E6U9Eu4A1KjIvfrbGF3gc0+Iawi68E7gAYaAS1I0Jt6irhrBuUubCoWtUZsU8yqqvtmlLXxkFGoU42nD+26f/D5kqq48LSCLTMU+MiMQh8DRWrcq6VbJ4ZREPZp7IYv8AY4dcsC1v9ewigkSxd25pKdq4ldTaDpvy9EcEB/xIQ0GrJS702Vqqn1ZGNnCKFwNqj0NDmuW0lNExfT5F9T2m5oLdxHwR3atbBK1EiKfg6DvbO1iX1dFAcDpXEDPQJyZD163UsWWw4XLNNcFDUeOMLL5MFrsd4j0hiIio+w5c/QtRkkJWwsWHD+csPgBCUz/VxcB9GGz+EQ5Ybf6GYb3gzgi3nyDlIgorNpNCtb2YwLIrZkbUHY0Y44z+37nA4aiOsYqwcYr2obmHsCrbDZsTBbT2eOJQxky3nL8yLee2vlWKIL3jYkB+jgsY3tlH165dnGQk7+g+xLdv6Tm5c5yQ/VUY1Lw+6feAsN8vxFwa9dkDf7FrcHwPduw/RXvqE/AgqyQYY/ZkraT0JXJTCMkSHiHsDuLi5tjmtsJ+yoX3I/EbJRrIPQkO6X/UQoogPHn/ZGMYCWKBtXBKjOGKO/lf4MkpBKKeojunE+KkB62wnlBrmqCA+Tm7C3ekFhjqhVGB7w/gGdgKC0uGrjFqqM++nBuuoiEIZLXMD1hIIq0s9aqM1KAI+hQ57DZIqZQfMIW+7wmRz8lo10FeB+/AneUJoy+o7THGgh5crOilR51Sy8now4mWz0xQHBHaI8Q8Q1xSKpbXLipZYAhiM8s+hhz3q3G4FXykPb12ln9J/MD5nhripUP7vzWhqQk2bDPNgF9cR8MzaVWuTBTmIypr2yUtCVrwwxONZdBsBl+bn85HVnPKKgZr8ki8OM6/Px0rm4igfyZGTMZJZ7C0kcBTPz40aWvOpD+Ej7EJZC62ucfzVUEcXAHVyyBa8MzLTvXYnFWq8mlIwkpJVLt3sYx+EgG/qMZv1XSJcO8nzvGLQZrIYWuhOuerMSkmMBRkRk9Hd0gw2mmSbZ0JGyUqkIkI8ud9Sh+BoqGcKVcFnF1n2+VgcSKAsFBYFdiCyWJcoINKpzs27blmz6EH3u81gHPk+5LlwQBtgDDq+oercNc/TzYj6ZmTubxNh2guH8/f+vP3QdNYfY8AMYVCCWRvw3xVlKpiprZqNRi6nlYAZ/QSKP5zGZKYjPXTlYmtvRTDs+dzx+A5p/O1ARySLoFa4vu9SptnkM/NA/9lMK6LSEERrRng5k1SVS/wLavROf+kF43IfoJ58bKd9SC8bPciMmYBXiAssKWJkqsqGZj5XljltKVA3Htj6e17wqD2sBDlkm5QLhYmRTwbiL1PMvbDmEaPLdhFlGzZNui/Kp9TM7QDtiWv1F6yt84TgOQh2iV6yPBYvTmKPJQB7+oNb2UipQYil/krCx6ohi8BYQOl8whuymxA3v5JjhciqIb1tgEPQhkKCB2kVlWX0SOLPH/bHfTLOS8XgzrE7I0/1cwweiaMcS90WbXG4FUXM9gbEVyGPNGJuyEPFnxKsJnkod1QN2EPdppQ19wpQQeXU91xetRBqXO7GTvlvnyotF8s6VGw5MYo0erDl4DciAIYNc5wVCHT2TUPQi4VIRfVW5mYbpd/ALtXIqiVQoF3b7ZEmoNw9T8bPsKzB3C9QPsdN2gpC4SdnYcvg4h3pdCPMmxgLQC8lDMrSr/P7xft/y9Re4QIr22Rz3KrbxgMat7M7EQRV+XqqHIv7sQNnBBrFFjMlBIbLbVmEwQuXV2ISl3z4FKuRsccFMm2c1ISHKKULWxnOr5ZBEto57rcnb1g72FR3NsF/rP1hV+aOBoYJSulGSK2Wj5KSsrEWXDCVzUKkLQwrn/Jd34n/ZRG7Lw04jE+xy/QZsspvKm020qxvhQp2BCb5BhZrE0ILn/QcAA1aEW08FueG6iMrBpTdNQ+GZLryLngPxEwH04dcDn3KGr0JvFYjjgAC5QXUbFoOqYMbblWAioxIMDwSz77TPPv6vtLTnrPOC8n39jIKoKW3wcH62OMXL+o9hquQ8l8S/srkCHd/FHHT6lZORf9tnYb/T+mgER1pWJDkw4g74d8+qZ6Ox6kTIdxdeWoV8haTUeWWx+Rov2ZwWoijdw5IoJ1Cn+HhY2rb9NBAmNIHBvuTByd34rTpTGxFIBnrJ0MxlHYJTUoZuc8kW2IPIzs7zjWt3gIegqcIfk0A+EKmBjPqxMGzC9w1rA0mooAkB5Er1qbGU4sepmwGzRUwL7Z9QL0vu+QfruaBAc88hjDTOWYUkgTLgxlrO5dENu8FvDdivwyYjPsbHA8knkCtg6WrMTc/9BlQjcNltSV+oz3550QCQRGbWjLlcckfcZDV13rh7j4r+m/LckScdjhoOwtYGVfwBFXW9sDMMr2jyKULkGMuaMXN1JrwaiqzXOiFbVBHBTP6IOhshRooQEl6WghiFEsz9E3cSnlGtRPJofxA0qlc08XnY8z8/4u5zDPOUm3X4rn/uRcoE1a2P6VtrgTL+ARzTQK2SNH/hGRbkEgeIGSKk4SVGp8hiPYwsEccucyRkQ9kyu0zlEe1rQG65Mr0+ITkOBkvPM7hiegBF5aKgkG27GerLFggFafL2b0ISeTwTQMfpwu7bGSgcdIFJ5+2KFgbNQiuVqwq6PYq5ZButEevW5JYwX3430aftSBj///b0amm3kivyWEXUeL3RDWKRZI6cO2ors9rbwkWR72T4sRGn/tVxmkFYwXT+AOlAatYCG0jtbOvtbkKw6DIFppQ5BU+rnoLVWAUqUiDcWXQF8kudsKT8MIR3ZhxS1J3tvMD6vRHlnBZTY7V2/4d5vdisYlHiVUhHKPMAFlPlfbx1uYy+6YHIW0QsSUKHWw/s7csmdv0YpDBGKqpYKCUDgLkKHzi6f241pfJ1Wr9H8SvO2uwuKrjznNocVGW0bTs5hqpvQA3r27abLLyKr0kbnRM6x9oqYesh7LXi5gvIlXH7Cn/KnZ6jQ271OwuhrICBbam3x3v39Ud2zI5tbCcAB+",$y="/portfolio/assets/status2-b7b87c98.avif",Xy="/portfolio/assets/overview-8b6281de.avif",_y="/portfolio/assets/city-25b0252b.avif",Ky=m.section`
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
`,Zy=m.div`
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
`,qy=m.div`
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
`,Jy=m.div`
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
`,ew=m.div`
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
`,tw=m.div`
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
`,nw=m.div`
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
`,rw=m.div`
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
`,iw=m.div`
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
`,ow=m.div`
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
`,lw=m.div`
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
`,aw=m.div`
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
`,Bt=m.div`
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
`,sw=m.div`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
`,uw=m.img`
  width: 40%;
  height: auto;
`,Ze=m.div`
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
`,qe=m.p`
  position: absolute;

  margin-right: 40px;
  font-size: 14px;

  color: var(--main-notation-font-color);
`,Je=m.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,bt=m.img`
  width: 100%;
  height: 800px;
  object-fit: cover;

  ${({isInView:e})=>e&&css`
      animation: ${slideInFromRight} 1s ease-out forwards;
    `}

  @media screen and (max-width: 478px) {
    height: 700px;
  }
`,Ri=m.img`
  @media screen and (max-width: 478px) {
    display: flex;
  }
`,cw=()=>a.jsxs(Ky,{children:[a.jsxs(Zy,{children:[a.jsxs(Bt,{children:[a.jsx("h4",{children:"UX Case study"}),a.jsx(sw,{children:a.jsx(uw,{src:Pf,alt:"The logo for Ebie"})}),a.jsxs("h5",{children:["My role: ",a.jsx("span",{className:"boldxlarge",children:"UX / UI Designer "})]})]}),a.jsxs(Je,{children:[a.jsx(Ze,{children:a.jsx(qe,{children:"Photo from www.Ebie.se"})}),a.jsx(bt,{src:Bf,alt:"A street view on the corner of Sveavägen, Sergelstorg."})]})]}),a.jsxs(qy,{children:[a.jsxs(Bt,{children:[a.jsx("h5",{children:"Challenges"}),a.jsx("p",{children:"* Lack of prior knowledge of the real estate industry which prevented us from clearly understanding the specific design task."}),a.jsx("p",{children:"* Understanding user expectations, especially when they are already accustomed to existing solutions and industry standards."}),a.jsxs("p",{children:["* Access to Ebies clients for user research, Ebie is a start up with a limited number of customers, and those they do have are extremely busy."," "]})]}),a.jsxs(Je,{children:[a.jsx(Ze,{children:a.jsx(qe,{children:"Image from Unsplash"})}),a.jsx(bt,{src:Fy,alt:"A hammarby handball player is lead of the court by the team physio."})]})]}),a.jsxs(Jy,{children:[a.jsxs(Bt,{children:[a.jsx("h5",{children:"Brief"}),a.jsx("p",{children:"Develop a user-friendly feature for group insurance. Increase the conversion rate of group insurance."}),a.jsx("h5",{children:"Goal"}),a.jsxs("p",{children:[" ","Create and implement a completely new and user-friendly function within the platform that makes it easy for property owners to apply for and manage group insurance."]}),a.jsx("p",{children:"Increase the use of group insurance by increasing the number of property owners applying for it. This is to be achieved by simplifying and improving the entire application process."})]}),a.jsxs(Je,{children:[a.jsx(Ze,{children:a.jsx(qe,{children:"Image from figma design system"})}),a.jsx(bt,{src:Wy,alt:"A deisgn idea for an online application"})]})]}),a.jsxs(ew,{children:[a.jsxs(Bt,{children:[a.jsx("h5",{children:"Target Group"}),a.jsxs("ul",{children:[a.jsx("li",{children:"Lessor"}),a.jsx("li",{children:"Property Owner"})]}),a.jsx("h5",{children:"Research"}),a.jsx("p",{children:"Carrying out research with Ebies clients proved challenging due to busy schedules, Ebie provided user backgrounds and their preferences, and based on that information, we created personas."})]}),a.jsxs(Je,{children:[a.jsx(Ze,{children:a.jsx(qe,{children:"Data collected by Ebie."})}),a.jsx(bt,{src:Dy,alt:"Research collected by Ebie"})]})]}),a.jsxs(tw,{children:[a.jsxs(Je,{children:[a.jsx(Ze,{children:a.jsx(qe,{children:"Personas created from research."})}),a.jsx(bt,{src:Gy,alt:"Personas built from user research."})]}),a.jsxs(Je,{children:[a.jsx(Ze,{children:a.jsx(qe,{children:"Personas created from research."})}),a.jsx(bt,{src:Vy,alt:"Personas built from user research."})]})]}),a.jsxs(nw,{children:[a.jsxs(Bt,{children:[a.jsx("h5",{children:"Improvement Areas"}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"The application process "})," posed our biggest challenge. Applying for insurance requires a significant amount of information. Our goal was to consolidate this into a single form without overwhelming or confusing the user."]}),a.jsx("p",{children:"Our initial design mirrored a traditional application form. While it was clearer and easier to navigate than previous versions, user testing revealed that there was still room for improvement."})]}),a.jsxs(Je,{children:[a.jsx(Ze,{children:a.jsx(qe,{children:"Our initial application design from figma."})}),a.jsx(bt,{src:Qy,alt:"A traditional application form"})]})]}),a.jsxs(rw,{children:[a.jsxs(Bt,{children:[a.jsx("h5",{children:"Improvement Areas"}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"The new design"})," received a much more positive response from Ebie and performed better during user testing."]}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Focus areas. "})," "]}),a.jsx("p",{children:"* We organized the input fields into a column form to enhance readability."}),a.jsx("p",{children:"* To make the form less overwhelming, we implemented fold-out and collapsible sections."}),a.jsx("p",{children:"* Colours to signal when a section is complete. "}),a.jsxs("p",{children:["* A progress bar at the top keeps users informed about their position in the process."," "]}),a.jsxs("p",{children:["* Additionally, we included navigation on the left to allow users to view other applications or add new ones."," "]})]}),a.jsxs(Je,{children:[a.jsx(Ze,{children:a.jsx(qe,{children:"Our re-design from figma."})}),a.jsx(Ri,{src:Yy,alt:"An online application form."})]})]}),a.jsxs(iw,{children:[a.jsxs(Bt,{children:[a.jsx("h5",{children:"Improvement Areas"}),a.jsxs("p",{children:[a.jsx("span",{className:"bold",children:"Sort Function: "})," Property owners and lessors often manage numerous properties with various tenants coming and going. To facilitate quick sorting between different insurance statuses, we implemented a robust sorting function. Where the user can sort between different status stages. New colours wee added ot the design system to help clearly label the different statuses."," "]})]}),a.jsxs(Je,{children:[a.jsx(Ze,{children:a.jsx(qe,{children:"Proposed sorting buttons, figma."})}),a.jsx(bt,{src:Uy,alt:"Proposed sorting buttons from figma."})]})]}),a.jsxs(ow,{children:[a.jsxs(Je,{children:[a.jsx(Ze,{children:a.jsx(qe,{children:"Design proposal for insurance status, figma."})}),a.jsx(Ri,{src:Hy,alt:"Design for insurance status from figma."})]}),a.jsxs(Je,{children:[a.jsx(Ze,{children:a.jsx(qe,{children:"Design proposal for renewing status, figma."})}),a.jsx(Ri,{src:$y,alt:"Design for insurance status from figma."})]})]}),a.jsxs(lw,{children:[a.jsxs(Bt,{children:[a.jsx("h5",{children:"Improvement Areas"}),a.jsx("p",{children:a.jsx("span",{className:"bold",children:"Overview: "})}),a.jsxs("p",{children:["Within the insurance overview, we added a warning icon to indicate when an action is required, such as when a report has been filed or an invoice needs payment."," "]}),a.jsx("p",{children:"We also incorporated the same status symbols from the search function for clearer status visibility."}),a.jsx("p",{children:"The screening report is displayed directly, eliminating the need to search through other documents."}),a.jsxs("p",{children:["Additionally, we introduced a sorting function that allows users to organise all insurance entries in numeric, alphabetic, or reverse order."," "]})]}),a.jsxs(Je,{children:[a.jsx(Ze,{children:a.jsx(qe,{children:"Design proposal for insurance overview, figma."})}),a.jsx(Ri,{src:Xy,alt:"Design proposal for insurance overview."})]})]}),a.jsxs(aw,{children:[a.jsxs(Bt,{children:[a.jsx("h5",{children:"Reflection"}),a.jsxs("p",{children:["The biggest challenge was understanding the intricacies of the real estate industry and the complexities of the application process. This took time and slowed us down in the beginning but it was also one of the most intresting sides of the project as we learned something new."," "]}),a.jsx("p",{children:"What I enjoyed most about this project was developing the sorting function and the logic behind it. While sorting and filters are not always considered the most visually striking aspect of design, ensuring that the sorting function is clear and intuitive is crucial. It plays a vital role in enhancing user experience by making it easier for users to organise and access information efficiently. The satisfaction came from creating a system that seamlessly integrates into the overall design, making it functional and user-friendly."})]}),a.jsxs(Je,{children:[a.jsx(Ze,{children:a.jsx(qe,{children:"Image from Unsplash."})}),a.jsx(bt,{src:_y,alt:"Street view of Stockholm city with NK in the distance."})]})]})]});m.div`
  overflowy: scroll;
  height: 2500px;
`;const dw=m.div`
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
`,pw=m.div`
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
`,fw=()=>{const[e,t]=j.useState(!1),n=()=>{const i=document.documentElement.scrollTop;i>1200?t(!0):i<=1200&&t(!1)},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return window.addEventListener("scroll",n),a.jsx(dw,{children:a.jsx(pw,{children:a.jsx(O0,{onClick:r,style:{display:e?"inline":"none",borderRadius:"50%"}})})})},hw=[{id:1,href:"https://www.linkedin.com/in/paul-evans-3a74605/",icon:a.jsx(z0,{}),des:"LinkedIn"},{id:2,href:"https://www.instagram.com/paulevans_official/",icon:a.jsx(R0,{}),des:"Instagram"},{id:3,href:"https://www.imdb.com/name/nm3171341/?ref_=ttfc_fc_cr",icon:a.jsx(T0,{}),des:"Imdb"}],mw=m.footer`
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
`,Aw=m.div`
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
`,gw=m.p`
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
`,vw=m.p`
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
`,xw=m.div`
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
`,yw=m.a`
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
`,ww=m.p`
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
`,Sw=m.div`
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
`,jw=m.img`
  text-align: center;
  justify-self: center;
  width: 120px;
  margin-top: 4em;

  @media screen and (max-width: 960px) {
    width: 120px;
  }
`,Rc=m.p`
  font-size: 16px;
  font-weight: 500;
  margin: 2px;

  @media screen and (max-width: 960px) {
    margin: 8px;
  }
`,Cw=ge.forwardRef((e,t)=>a.jsxs(mw,{ref:t,children:[a.jsx(Sw,{children:a.jsx(jw,{src:Va,alt:"the letters P and E merged together to form the logo Paul Evans Creative"})}),a.jsx(kw,{}),a.jsxs(Aw,{children:[a.jsx(Rc,{children:"Copyright 2024."}),a.jsx(Rc,{children:"Paul Evans."}),a.jsx(gw,{children:a.jsx("a",{href:"mailto:paul.evans.creative@gmail.com",children:"paul.evans.creative@gmail.com"})}),a.jsx(vw,{children:a.jsx("a",{href:"tel:+46739908858",children:"+46739908858"})})]})]})),kw=()=>a.jsx(xw,{children:a.jsx(Qa.Provider,{value:{size:"2em"},children:hw.map(e=>a.jsxs(yw,{href:e.href,children:[e.icon,a.jsx(ww,{children:e.des})]},e.id))})}),Ew=()=>{const{pathname:e}=fr();return j.useEffect(()=>{window.scrollTo(0,0)},[e]),null},Iw=m.div`
  min-height: 100%;
  max-width: 100vw;
`,Pw=m.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: space-evenly;
`,Bw=()=>{const e=j.useRef(null);return a.jsxs(r0,{children:[a.jsx(Ew,{}),a.jsxs(Iw,{children:[a.jsx(g0,{footerRef:e}),a.jsxs(Pw,{children:[a.jsxs(Kg,{children:[a.jsx(On,{path:"/",element:a.jsx(Lx,{})}),a.jsx(On,{path:"/casestudies",element:a.jsx(Fx,{})}),a.jsx(On,{path:"/about",element:a.jsx(ey,{})}),a.jsx(On,{path:"/lipusplus",element:a.jsx(My,{})}),a.jsx(On,{path:"/ebie",element:a.jsx(cw,{})})]}),a.jsx(Cw,{ref:e})]}),a.jsx(fw,{})]})]})};Dl.createRoot(document.getElementById("root")).render(a.jsx(ge.StrictMode,{children:a.jsx(Bw,{})}));
