function Qp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function qc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Jc={exports:{}},Fo={},ed={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ai=Symbol.for("react.element"),Up=Symbol.for("react.portal"),$p=Symbol.for("react.fragment"),Hp=Symbol.for("react.strict_mode"),Xp=Symbol.for("react.profiler"),_p=Symbol.for("react.provider"),Kp=Symbol.for("react.context"),Zp=Symbol.for("react.forward_ref"),qp=Symbol.for("react.suspense"),Jp=Symbol.for("react.memo"),eh=Symbol.for("react.lazy"),hu=Symbol.iterator;function th(e){return e===null||typeof e!="object"?null:(e=hu&&e[hu]||e["@@iterator"],typeof e=="function"?e:null)}var td={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nd=Object.assign,rd={};function fr(e,t,n){this.props=e,this.context=t,this.refs=rd,this.updater=n||td}fr.prototype.isReactComponent={};fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function id(){}id.prototype=fr.prototype;function ss(e,t,n){this.props=e,this.context=t,this.refs=rd,this.updater=n||td}var us=ss.prototype=new id;us.constructor=ss;nd(us,fr.prototype);us.isPureReactComponent=!0;var mu=Array.isArray,od=Object.prototype.hasOwnProperty,cs={current:null},ld={key:!0,ref:!0,__self:!0,__source:!0};function ad(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)od.call(t,r)&&!ld.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ai,type:e,key:o,ref:l,props:i,_owner:cs.current}}function nh(e,t){return{$$typeof:ai,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ds(e){return typeof e=="object"&&e!==null&&e.$$typeof===ai}function rh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Au=/\/+/g;function jl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rh(""+e.key):t.toString(36)}function Li(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ai:case Up:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+jl(l,0):r,mu(i)?(n="",e!=null&&(n=e.replace(Au,"$&/")+"/"),Li(i,t,n,"",function(c){return c})):i!=null&&(ds(i)&&(i=nh(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Au,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",mu(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+jl(o,s);l+=Li(o,t,n,u,i)}else if(u=th(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+jl(o,s++),l+=Li(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function mi(e,t,n){if(e==null)return e;var r=[],i=0;return Li(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ih(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ye={current:null},Mi={transition:null},oh={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:Mi,ReactCurrentOwner:cs};function sd(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:mi,forEach:function(e,t,n){mi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mi(e,function(){t++}),t},toArray:function(e){return mi(e,function(t){return t})||[]},only:function(e){if(!ds(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=fr;V.Fragment=$p;V.Profiler=Xp;V.PureComponent=ss;V.StrictMode=Hp;V.Suspense=qp;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oh;V.act=sd;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=nd({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=cs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)od.call(t,u)&&!ld.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:ai,type:e.type,key:i,ref:o,props:r,_owner:l}};V.createContext=function(e){return e={$$typeof:Kp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_p,_context:e},e.Consumer=e};V.createElement=ad;V.createFactory=function(e){var t=ad.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Zp,render:e}};V.isValidElement=ds;V.lazy=function(e){return{$$typeof:eh,_payload:{_status:-1,_result:e},_init:ih}};V.memo=function(e,t){return{$$typeof:Jp,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=Mi.transition;Mi.transition={};try{e()}finally{Mi.transition=t}};V.unstable_act=sd;V.useCallback=function(e,t){return Ye.current.useCallback(e,t)};V.useContext=function(e){return Ye.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Ye.current.useDeferredValue(e)};V.useEffect=function(e,t){return Ye.current.useEffect(e,t)};V.useId=function(){return Ye.current.useId()};V.useImperativeHandle=function(e,t,n){return Ye.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Ye.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Ye.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Ye.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Ye.current.useReducer(e,t,n)};V.useRef=function(e){return Ye.current.useRef(e)};V.useState=function(e){return Ye.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Ye.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Ye.current.useTransition()};V.version="18.3.1";ed.exports=V;var j=ed.exports;const ye=qc(j),lh=Qp({__proto__:null,default:ye},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ah=j,sh=Symbol.for("react.element"),uh=Symbol.for("react.fragment"),ch=Object.prototype.hasOwnProperty,dh=ah.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fh={key:!0,ref:!0,__self:!0,__source:!0};function ud(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)ch.call(t,r)&&!fh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:sh,type:e,key:o,ref:l,props:i,_owner:dh.current}}Fo.Fragment=uh;Fo.jsx=ud;Fo.jsxs=ud;Jc.exports=Fo;var a=Jc.exports,Jl={},cd={exports:{}},et={},dd={exports:{}},fd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,M){var F=I.length;I.push(M);e:for(;0<F;){var X=F-1>>>1,P=I[X];if(0<i(P,M))I[X]=M,I[F]=P,F=X;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var M=I[0],F=I.pop();if(F!==M){I[0]=F;e:for(var X=0,P=I.length,B=P>>>1;X<B;){var z=2*(X+1)-1,D=I[z],y=z+1,U=I[y];if(0>i(D,F))y<P&&0>i(U,D)?(I[X]=U,I[y]=F,X=y):(I[X]=D,I[z]=F,X=z);else if(y<P&&0>i(U,F))I[X]=U,I[y]=F,X=y;else break e}}return M}function i(I,M){var F=I.sortIndex-M.sortIndex;return F!==0?F:I.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],m=1,h=null,A=3,S=!1,w=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=I)r(c),M.sortIndex=M.expirationTime,t(u,M);else break;M=n(c)}}function x(I){if(v=!1,p(I),!w)if(n(u)!==null)w=!0,rt(C);else{var M=n(c);M!==null&&Se(x,M.startTime-I)}}function C(I,M){w=!1,v&&(v=!1,f(T),T=-1),S=!0;var F=A;try{for(p(M),h=n(u);h!==null&&(!(h.expirationTime>M)||I&&!he());){var X=h.callback;if(typeof X=="function"){h.callback=null,A=h.priorityLevel;var P=X(h.expirationTime<=M);M=e.unstable_now(),typeof P=="function"?h.callback=P:h===n(u)&&r(u),p(M)}else r(u);h=n(u)}if(h!==null)var B=!0;else{var z=n(c);z!==null&&Se(x,z.startTime-M),B=!1}return B}finally{h=null,A=F,S=!1}}var R=!1,O=null,T=-1,Q=5,b=-1;function he(){return!(e.unstable_now()-b<Q)}function de(){if(O!==null){var I=e.unstable_now();b=I;var M=!0;try{M=O(!0,I)}finally{M?ge():(R=!1,O=null)}}else R=!1}var ge;if(typeof d=="function")ge=function(){d(de)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,we=De.port2;De.port1.onmessage=de,ge=function(){we.postMessage(null)}}else ge=function(){k(de,0)};function rt(I){O=I,R||(R=!0,ge())}function Se(I,M){T=k(function(){I(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,rt(C))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return A},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(I){switch(A){case 1:case 2:case 3:var M=3;break;default:M=A}var F=A;A=M;try{return I()}finally{A=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,M){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var F=A;A=I;try{return M()}finally{A=F}},e.unstable_scheduleCallback=function(I,M,F){var X=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?X+F:X):F=X,I){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=F+P,I={id:m++,callback:M,priorityLevel:I,startTime:F,expirationTime:P,sortIndex:-1},F>X?(I.sortIndex=F,t(c,I),n(u)===null&&I===n(c)&&(v?(f(T),T=-1):v=!0,Se(x,F-X))):(I.sortIndex=P,t(u,I),w||S||(w=!0,rt(C))),I},e.unstable_shouldYield=he,e.unstable_wrapCallback=function(I){var M=A;return function(){var F=A;A=M;try{return I.apply(this,arguments)}finally{A=F}}}})(fd);dd.exports=fd;var ph=dd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh=j,Je=ph;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pd=new Set,Gr={};function Bn(e,t){rr(e,t),rr(e+"Capture",t)}function rr(e,t){for(Gr[e]=t,e=0;e<t.length;e++)pd.add(t[e])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ea=Object.prototype.hasOwnProperty,mh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gu={},vu={};function Ah(e){return ea.call(vu,e)?!0:ea.call(gu,e)?!1:mh.test(e)?vu[e]=!0:(gu[e]=!0,!1)}function gh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vh(e,t,n,r){if(t===null||typeof t>"u"||gh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Oe[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Oe[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Oe[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Oe[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Oe[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Oe[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Oe[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Oe[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Oe[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var fs=/[\-:]([a-z])/g;function ps(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fs,ps);Oe[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fs,ps);Oe[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fs,ps);Oe[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Oe[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Oe[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function hs(e,t,n,r){var i=Oe.hasOwnProperty(t)?Oe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vh(t,n,i,r)&&(n=null),r||i===null?Ah(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Vt=hh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ai=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),Dn=Symbol.for("react.fragment"),ms=Symbol.for("react.strict_mode"),ta=Symbol.for("react.profiler"),hd=Symbol.for("react.provider"),md=Symbol.for("react.context"),As=Symbol.for("react.forward_ref"),na=Symbol.for("react.suspense"),ra=Symbol.for("react.suspense_list"),gs=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),Ad=Symbol.for("react.offscreen"),yu=Symbol.iterator;function vr(e){return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,Cl;function Ir(e){if(Cl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Cl=t&&t[1]||""}return`
`+Cl+e}var El=!1;function Il(e,t){if(!e||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{El=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ir(e):""}function yh(e){switch(e.tag){case 5:return Ir(e.type);case 16:return Ir("Lazy");case 13:return Ir("Suspense");case 19:return Ir("SuspenseList");case 0:case 2:case 15:return e=Il(e.type,!1),e;case 11:return e=Il(e.type.render,!1),e;case 1:return e=Il(e.type,!0),e;default:return""}}function ia(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dn:return"Fragment";case Fn:return"Portal";case ta:return"Profiler";case ms:return"StrictMode";case na:return"Suspense";case ra:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case md:return(e.displayName||"Context")+".Consumer";case hd:return(e._context.displayName||"Context")+".Provider";case As:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gs:return t=e.displayName||null,t!==null?t:ia(e.type)||"Memo";case $t:t=e._payload,e=e._init;try{return ia(e(t))}catch{}}return null}function xh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ia(t);case 8:return t===ms?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wh(e){var t=gd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gi(e){e._valueTracker||(e._valueTracker=wh(e))}function vd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oa(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yd(e,t){t=t.checked,t!=null&&hs(e,"checked",t,!1)}function la(e,t){yd(e,t);var n=cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?aa(e,t.type,n):t.hasOwnProperty("defaultValue")&&aa(e,t.type,cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function aa(e,t,n){(t!=="number"||Ji(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pr=Array.isArray;function Zn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function sa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Su(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Pr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:cn(n)}}function xd(e,t){var n=cn(t.value),r=cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ku(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ua(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vi,Sd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vi=vi||document.createElement("div"),vi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sh=["Webkit","ms","Moz","O"];Object.keys(Rr).forEach(function(e){Sh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rr[t]=Rr[e]})});function kd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rr.hasOwnProperty(e)&&Rr[e]?(""+t).trim():t+"px"}function jd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=kd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var kh=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ca(e,t){if(t){if(kh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function da(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fa=null;function vs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pa=null,qn=null,Jn=null;function ju(e){if(e=ci(e)){if(typeof pa!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Vo(t),pa(e.stateNode,e.type,t))}}function Cd(e){qn?Jn?Jn.push(e):Jn=[e]:qn=e}function Ed(){if(qn){var e=qn,t=Jn;if(Jn=qn=null,ju(e),t)for(e=0;e<t.length;e++)ju(t[e])}}function Id(e,t){return e(t)}function Pd(){}var Pl=!1;function Nd(e,t,n){if(Pl)return e(t,n);Pl=!0;try{return Id(e,t,n)}finally{Pl=!1,(qn!==null||Jn!==null)&&(Pd(),Ed())}}function Vr(e,t){var n=e.stateNode;if(n===null)return null;var r=Vo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var ha=!1;if(Dt)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){ha=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{ha=!1}function jh(e,t,n,r,i,o,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Or=!1,eo=null,to=!1,ma=null,Ch={onError:function(e){Or=!0,eo=e}};function Eh(e,t,n,r,i,o,l,s,u){Or=!1,eo=null,jh.apply(Ch,arguments)}function Ih(e,t,n,r,i,o,l,s,u){if(Eh.apply(this,arguments),Or){if(Or){var c=eo;Or=!1,eo=null}else throw Error(E(198));to||(to=!0,ma=c)}}function Rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Bd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cu(e){if(Rn(e)!==e)throw Error(E(188))}function Ph(e){var t=e.alternate;if(!t){if(t=Rn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Cu(i),e;if(o===r)return Cu(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Rd(e){return e=Ph(e),e!==null?Od(e):null}function Od(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Od(e);if(t!==null)return t;e=e.sibling}return null}var Td=Je.unstable_scheduleCallback,Eu=Je.unstable_cancelCallback,Nh=Je.unstable_shouldYield,Bh=Je.unstable_requestPaint,pe=Je.unstable_now,Rh=Je.unstable_getCurrentPriorityLevel,ys=Je.unstable_ImmediatePriority,zd=Je.unstable_UserBlockingPriority,no=Je.unstable_NormalPriority,Oh=Je.unstable_LowPriority,Ld=Je.unstable_IdlePriority,Do=null,Bt=null;function Th(e){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Do,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:Mh,zh=Math.log,Lh=Math.LN2;function Mh(e){return e>>>=0,e===0?32:31-(zh(e)/Lh|0)|0}var yi=64,xi=4194304;function Nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ro(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Nr(s):(o&=l,o!==0&&(r=Nr(o)))}else l=n&~i,l!==0?r=Nr(l):o!==0&&(r=Nr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-jt(t),i=1<<n,r|=e[n],t&=~i;return r}function bh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-jt(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=bh(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Aa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Md(){var e=yi;return yi<<=1,!(yi&4194240)&&(yi=64),e}function Nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function si(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jt(t),e[t]=n}function Dh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-jt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function xs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-jt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function bd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fd,ws,Dd,Wd,Gd,ga=!1,wi=[],Jt=null,en=null,tn=null,Qr=new Map,Ur=new Map,Xt=[],Wh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Iu(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":Qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ur.delete(t.pointerId)}}function xr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ci(t),t!==null&&ws(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Gh(e,t,n,r,i){switch(t){case"focusin":return Jt=xr(Jt,e,t,n,r,i),!0;case"dragenter":return en=xr(en,e,t,n,r,i),!0;case"mouseover":return tn=xr(tn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Qr.set(o,xr(Qr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ur.set(o,xr(Ur.get(o)||null,e,t,n,r,i)),!0}return!1}function Yd(e){var t=xn(e.target);if(t!==null){var n=Rn(t);if(n!==null){if(t=n.tag,t===13){if(t=Bd(n),t!==null){e.blockedOn=t,Gd(e.priority,function(){Dd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=va(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fa=r,n.target.dispatchEvent(r),fa=null}else return t=ci(n),t!==null&&ws(t),e.blockedOn=n,!1;t.shift()}return!0}function Pu(e,t,n){bi(e)&&n.delete(t)}function Yh(){ga=!1,Jt!==null&&bi(Jt)&&(Jt=null),en!==null&&bi(en)&&(en=null),tn!==null&&bi(tn)&&(tn=null),Qr.forEach(Pu),Ur.forEach(Pu)}function wr(e,t){e.blockedOn===t&&(e.blockedOn=null,ga||(ga=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,Yh)))}function $r(e){function t(i){return wr(i,e)}if(0<wi.length){wr(wi[0],e);for(var n=1;n<wi.length;n++){var r=wi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&wr(Jt,e),en!==null&&wr(en,e),tn!==null&&wr(tn,e),Qr.forEach(t),Ur.forEach(t),n=0;n<Xt.length;n++)r=Xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xt.length&&(n=Xt[0],n.blockedOn===null);)Yd(n),n.blockedOn===null&&Xt.shift()}var er=Vt.ReactCurrentBatchConfig,io=!0;function Vh(e,t,n,r){var i=q,o=er.transition;er.transition=null;try{q=1,Ss(e,t,n,r)}finally{q=i,er.transition=o}}function Qh(e,t,n,r){var i=q,o=er.transition;er.transition=null;try{q=4,Ss(e,t,n,r)}finally{q=i,er.transition=o}}function Ss(e,t,n,r){if(io){var i=va(e,t,n,r);if(i===null)Dl(e,t,r,oo,n),Iu(e,r);else if(Gh(i,e,t,n,r))r.stopPropagation();else if(Iu(e,r),t&4&&-1<Wh.indexOf(e)){for(;i!==null;){var o=ci(i);if(o!==null&&Fd(o),o=va(e,t,n,r),o===null&&Dl(e,t,r,oo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Dl(e,t,r,null,n)}}var oo=null;function va(e,t,n,r){if(oo=null,e=vs(r),e=xn(e),e!==null)if(t=Rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Bd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return oo=e,null}function Vd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rh()){case ys:return 1;case zd:return 4;case no:case Oh:return 16;case Ld:return 536870912;default:return 16}default:return 16}}var Kt=null,ks=null,Fi=null;function Qd(){if(Fi)return Fi;var e,t=ks,n=t.length,r,i="value"in Kt?Kt.value:Kt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Fi=i.slice(e,1<r?1-r:void 0)}function Di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Si(){return!0}function Nu(){return!1}function tt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Si:Nu,this.isPropagationStopped=Nu,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),t}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},js=tt(pr),ui=se({},pr,{view:0,detail:0}),Uh=tt(ui),Bl,Rl,Sr,Wo=se({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sr&&(Sr&&e.type==="mousemove"?(Bl=e.screenX-Sr.screenX,Rl=e.screenY-Sr.screenY):Rl=Bl=0,Sr=e),Bl)},movementY:function(e){return"movementY"in e?e.movementY:Rl}}),Bu=tt(Wo),$h=se({},Wo,{dataTransfer:0}),Hh=tt($h),Xh=se({},ui,{relatedTarget:0}),Ol=tt(Xh),_h=se({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Kh=tt(_h),Zh=se({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qh=tt(Zh),Jh=se({},pr,{data:0}),Ru=tt(Jh),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nm[e])?!!t[e]:!1}function Cs(){return rm}var im=se({},ui,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cs,charCode:function(e){return e.type==="keypress"?Di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),om=tt(im),lm=se({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ou=tt(lm),am=se({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cs}),sm=tt(am),um=se({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),cm=tt(um),dm=se({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fm=tt(dm),pm=[9,13,27,32],Es=Dt&&"CompositionEvent"in window,Tr=null;Dt&&"documentMode"in document&&(Tr=document.documentMode);var hm=Dt&&"TextEvent"in window&&!Tr,Ud=Dt&&(!Es||Tr&&8<Tr&&11>=Tr),Tu=String.fromCharCode(32),zu=!1;function $d(e,t){switch(e){case"keyup":return pm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function mm(e,t){switch(e){case"compositionend":return Hd(t);case"keypress":return t.which!==32?null:(zu=!0,Tu);case"textInput":return e=t.data,e===Tu&&zu?null:e;default:return null}}function Am(e,t){if(Wn)return e==="compositionend"||!Es&&$d(e,t)?(e=Qd(),Fi=ks=Kt=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ud&&t.locale!=="ko"?null:t.data;default:return null}}var gm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gm[e.type]:t==="textarea"}function Xd(e,t,n,r){Cd(r),t=lo(t,"onChange"),0<t.length&&(n=new js("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zr=null,Hr=null;function vm(e){lf(e,0)}function Go(e){var t=Vn(e);if(vd(t))return e}function ym(e,t){if(e==="change")return t}var _d=!1;if(Dt){var Tl;if(Dt){var zl="oninput"in document;if(!zl){var Mu=document.createElement("div");Mu.setAttribute("oninput","return;"),zl=typeof Mu.oninput=="function"}Tl=zl}else Tl=!1;_d=Tl&&(!document.documentMode||9<document.documentMode)}function bu(){zr&&(zr.detachEvent("onpropertychange",Kd),Hr=zr=null)}function Kd(e){if(e.propertyName==="value"&&Go(Hr)){var t=[];Xd(t,Hr,e,vs(e)),Nd(vm,t)}}function xm(e,t,n){e==="focusin"?(bu(),zr=t,Hr=n,zr.attachEvent("onpropertychange",Kd)):e==="focusout"&&bu()}function wm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Go(Hr)}function Sm(e,t){if(e==="click")return Go(t)}function km(e,t){if(e==="input"||e==="change")return Go(t)}function jm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:jm;function Xr(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ea.call(t,i)||!Et(e[i],t[i]))return!1}return!0}function Fu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Du(e,t){var n=Fu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fu(n)}}function Zd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qd(){for(var e=window,t=Ji();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ji(e.document)}return t}function Is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cm(e){var t=qd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zd(n.ownerDocument.documentElement,n)){if(r!==null&&Is(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Du(n,o);var l=Du(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Em=Dt&&"documentMode"in document&&11>=document.documentMode,Gn=null,ya=null,Lr=null,xa=!1;function Wu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xa||Gn==null||Gn!==Ji(r)||(r=Gn,"selectionStart"in r&&Is(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Xr(Lr,r)||(Lr=r,r=lo(ya,"onSelect"),0<r.length&&(t=new js("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gn)))}function ki(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yn={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionend:ki("Transition","TransitionEnd")},Ll={},Jd={};Dt&&(Jd=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function Yo(e){if(Ll[e])return Ll[e];if(!Yn[e])return e;var t=Yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jd)return Ll[e]=t[n];return e}var ef=Yo("animationend"),tf=Yo("animationiteration"),nf=Yo("animationstart"),rf=Yo("transitionend"),of=new Map,Gu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(e,t){of.set(e,t),Bn(t,[e])}for(var Ml=0;Ml<Gu.length;Ml++){var bl=Gu[Ml],Im=bl.toLowerCase(),Pm=bl[0].toUpperCase()+bl.slice(1);fn(Im,"on"+Pm)}fn(ef,"onAnimationEnd");fn(tf,"onAnimationIteration");fn(nf,"onAnimationStart");fn("dblclick","onDoubleClick");fn("focusin","onFocus");fn("focusout","onBlur");fn(rf,"onTransitionEnd");rr("onMouseEnter",["mouseout","mouseover"]);rr("onMouseLeave",["mouseout","mouseover"]);rr("onPointerEnter",["pointerout","pointerover"]);rr("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function Yu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ih(r,t,void 0,e),e.currentTarget=null}function lf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Yu(i,s,c),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Yu(i,s,c),o=u}}}if(to)throw e=ma,to=!1,ma=null,e}function re(e,t){var n=t[Ca];n===void 0&&(n=t[Ca]=new Set);var r=e+"__bubble";n.has(r)||(af(t,e,2,!1),n.add(r))}function Fl(e,t,n){var r=0;t&&(r|=4),af(n,e,r,t)}var ji="_reactListening"+Math.random().toString(36).slice(2);function _r(e){if(!e[ji]){e[ji]=!0,pd.forEach(function(n){n!=="selectionchange"&&(Nm.has(n)||Fl(n,!1,e),Fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ji]||(t[ji]=!0,Fl("selectionchange",!1,t))}}function af(e,t,n,r){switch(Vd(t)){case 1:var i=Vh;break;case 4:i=Qh;break;default:i=Ss}n=i.bind(null,t,n,e),i=void 0,!ha||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Dl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=xn(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Nd(function(){var c=o,m=vs(n),h=[];e:{var A=of.get(e);if(A!==void 0){var S=js,w=e;switch(e){case"keypress":if(Di(n)===0)break e;case"keydown":case"keyup":S=om;break;case"focusin":w="focus",S=Ol;break;case"focusout":w="blur",S=Ol;break;case"beforeblur":case"afterblur":S=Ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Bu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Hh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=sm;break;case ef:case tf:case nf:S=Kh;break;case rf:S=cm;break;case"scroll":S=Uh;break;case"wheel":S=fm;break;case"copy":case"cut":case"paste":S=qh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Ou}var v=(t&4)!==0,k=!v&&e==="scroll",f=v?A!==null?A+"Capture":null:A;v=[];for(var d=c,p;d!==null;){p=d;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=Vr(d,f),x!=null&&v.push(Kr(d,x,p)))),k)break;d=d.return}0<v.length&&(A=new S(A,w,null,n,m),h.push({event:A,listeners:v}))}}if(!(t&7)){e:{if(A=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",A&&n!==fa&&(w=n.relatedTarget||n.fromElement)&&(xn(w)||w[Wt]))break e;if((S||A)&&(A=m.window===m?m:(A=m.ownerDocument)?A.defaultView||A.parentWindow:window,S?(w=n.relatedTarget||n.toElement,S=c,w=w?xn(w):null,w!==null&&(k=Rn(w),w!==k||w.tag!==5&&w.tag!==6)&&(w=null)):(S=null,w=c),S!==w)){if(v=Bu,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ou,x="onPointerLeave",f="onPointerEnter",d="pointer"),k=S==null?A:Vn(S),p=w==null?A:Vn(w),A=new v(x,d+"leave",S,n,m),A.target=k,A.relatedTarget=p,x=null,xn(m)===c&&(v=new v(f,d+"enter",w,n,m),v.target=p,v.relatedTarget=k,x=v),k=x,S&&w)t:{for(v=S,f=w,d=0,p=v;p;p=Ln(p))d++;for(p=0,x=f;x;x=Ln(x))p++;for(;0<d-p;)v=Ln(v),d--;for(;0<p-d;)f=Ln(f),p--;for(;d--;){if(v===f||f!==null&&v===f.alternate)break t;v=Ln(v),f=Ln(f)}v=null}else v=null;S!==null&&Vu(h,A,S,v,!1),w!==null&&k!==null&&Vu(h,k,w,v,!0)}}e:{if(A=c?Vn(c):window,S=A.nodeName&&A.nodeName.toLowerCase(),S==="select"||S==="input"&&A.type==="file")var C=ym;else if(Lu(A))if(_d)C=km;else{C=wm;var R=xm}else(S=A.nodeName)&&S.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(C=Sm);if(C&&(C=C(e,c))){Xd(h,C,n,m);break e}R&&R(e,A,c),e==="focusout"&&(R=A._wrapperState)&&R.controlled&&A.type==="number"&&aa(A,"number",A.value)}switch(R=c?Vn(c):window,e){case"focusin":(Lu(R)||R.contentEditable==="true")&&(Gn=R,ya=c,Lr=null);break;case"focusout":Lr=ya=Gn=null;break;case"mousedown":xa=!0;break;case"contextmenu":case"mouseup":case"dragend":xa=!1,Wu(h,n,m);break;case"selectionchange":if(Em)break;case"keydown":case"keyup":Wu(h,n,m)}var O;if(Es)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Wn?$d(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Ud&&n.locale!=="ko"&&(Wn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Wn&&(O=Qd()):(Kt=m,ks="value"in Kt?Kt.value:Kt.textContent,Wn=!0)),R=lo(c,T),0<R.length&&(T=new Ru(T,e,null,n,m),h.push({event:T,listeners:R}),O?T.data=O:(O=Hd(n),O!==null&&(T.data=O)))),(O=hm?mm(e,n):Am(e,n))&&(c=lo(c,"onBeforeInput"),0<c.length&&(m=new Ru("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=O))}lf(h,t)})}function Kr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function lo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Vr(e,n),o!=null&&r.unshift(Kr(e,o,i)),o=Vr(e,t),o!=null&&r.push(Kr(e,o,i))),e=e.return}return r}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=Vr(n,o),u!=null&&l.unshift(Kr(n,u,s))):i||(u=Vr(n,o),u!=null&&l.push(Kr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Bm=/\r\n?/g,Rm=/\u0000|\uFFFD/g;function Qu(e){return(typeof e=="string"?e:""+e).replace(Bm,`
`).replace(Rm,"")}function Ci(e,t,n){if(t=Qu(t),Qu(e)!==t&&n)throw Error(E(425))}function ao(){}var wa=null,Sa=null;function ka(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ja=typeof setTimeout=="function"?setTimeout:void 0,Om=typeof clearTimeout=="function"?clearTimeout:void 0,Uu=typeof Promise=="function"?Promise:void 0,Tm=typeof queueMicrotask=="function"?queueMicrotask:typeof Uu<"u"?function(e){return Uu.resolve(null).then(e).catch(zm)}:ja;function zm(e){setTimeout(function(){throw e})}function Wl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),$r(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$r(t)}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $u(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hr=Math.random().toString(36).slice(2),Nt="__reactFiber$"+hr,Zr="__reactProps$"+hr,Wt="__reactContainer$"+hr,Ca="__reactEvents$"+hr,Lm="__reactListeners$"+hr,Mm="__reactHandles$"+hr;function xn(e){var t=e[Nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wt]||n[Nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$u(e);e!==null;){if(n=e[Nt])return n;e=$u(e)}return t}e=n,n=e.parentNode}return null}function ci(e){return e=e[Nt]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Vo(e){return e[Zr]||null}var Ea=[],Qn=-1;function pn(e){return{current:e}}function ie(e){0>Qn||(e.current=Ea[Qn],Ea[Qn]=null,Qn--)}function ne(e,t){Qn++,Ea[Qn]=e.current,e.current=t}var dn={},Fe=pn(dn),He=pn(!1),Cn=dn;function ir(e,t){var n=e.type.contextTypes;if(!n)return dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function so(){ie(He),ie(Fe)}function Hu(e,t,n){if(Fe.current!==dn)throw Error(E(168));ne(Fe,t),ne(He,n)}function sf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,xh(e)||"Unknown",i));return se({},n,r)}function uo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Cn=Fe.current,ne(Fe,e),ne(He,He.current),!0}function Xu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=sf(e,t,Cn),r.__reactInternalMemoizedMergedChildContext=e,ie(He),ie(Fe),ne(Fe,e)):ie(He),ne(He,n)}var zt=null,Qo=!1,Gl=!1;function uf(e){zt===null?zt=[e]:zt.push(e)}function bm(e){Qo=!0,uf(e)}function hn(){if(!Gl&&zt!==null){Gl=!0;var e=0,t=q;try{var n=zt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zt=null,Qo=!1}catch(i){throw zt!==null&&(zt=zt.slice(e+1)),Td(ys,hn),i}finally{q=t,Gl=!1}}return null}var Un=[],$n=0,co=null,fo=0,at=[],st=0,En=null,Lt=1,Mt="";function vn(e,t){Un[$n++]=fo,Un[$n++]=co,co=e,fo=t}function cf(e,t,n){at[st++]=Lt,at[st++]=Mt,at[st++]=En,En=e;var r=Lt;e=Mt;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var o=32-jt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Lt=1<<32-jt(t)+i|n<<i|r,Mt=o+e}else Lt=1<<o|n<<i|r,Mt=e}function Ps(e){e.return!==null&&(vn(e,1),cf(e,1,0))}function Ns(e){for(;e===co;)co=Un[--$n],Un[$n]=null,fo=Un[--$n],Un[$n]=null;for(;e===En;)En=at[--st],at[st]=null,Mt=at[--st],at[st]=null,Lt=at[--st],at[st]=null}var qe=null,Ze=null,oe=!1,kt=null;function df(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _u(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ze=nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=En!==null?{id:Lt,overflow:Mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Ze=null,!0):!1;default:return!1}}function Ia(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pa(e){if(oe){var t=Ze;if(t){var n=t;if(!_u(e,t)){if(Ia(e))throw Error(E(418));t=nn(n.nextSibling);var r=qe;t&&_u(e,t)?df(r,n):(e.flags=e.flags&-4097|2,oe=!1,qe=e)}}else{if(Ia(e))throw Error(E(418));e.flags=e.flags&-4097|2,oe=!1,qe=e}}}function Ku(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Ei(e){if(e!==qe)return!1;if(!oe)return Ku(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ka(e.type,e.memoizedProps)),t&&(t=Ze)){if(Ia(e))throw ff(),Error(E(418));for(;t;)df(e,t),t=nn(t.nextSibling)}if(Ku(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=qe?nn(e.stateNode.nextSibling):null;return!0}function ff(){for(var e=Ze;e;)e=nn(e.nextSibling)}function or(){Ze=qe=null,oe=!1}function Bs(e){kt===null?kt=[e]:kt.push(e)}var Fm=Vt.ReactCurrentBatchConfig;function kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Ii(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zu(e){var t=e._init;return t(e._payload)}function pf(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=an(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,x){return d===null||d.tag!==6?(d=Xl(p,f.mode,x),d.return=f,d):(d=i(d,p),d.return=f,d)}function u(f,d,p,x){var C=p.type;return C===Dn?m(f,d,p.props.children,x,p.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===$t&&Zu(C)===d.type)?(x=i(d,p.props),x.ref=kr(f,d,p),x.return=f,x):(x=$i(p.type,p.key,p.props,null,f.mode,x),x.ref=kr(f,d,p),x.return=f,x)}function c(f,d,p,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=_l(p,f.mode,x),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function m(f,d,p,x,C){return d===null||d.tag!==7?(d=jn(p,f.mode,x,C),d.return=f,d):(d=i(d,p),d.return=f,d)}function h(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Xl(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ai:return p=$i(d.type,d.key,d.props,null,f.mode,p),p.ref=kr(f,null,d),p.return=f,p;case Fn:return d=_l(d,f.mode,p),d.return=f,d;case $t:var x=d._init;return h(f,x(d._payload),p)}if(Pr(d)||vr(d))return d=jn(d,f.mode,p,null),d.return=f,d;Ii(f,d)}return null}function A(f,d,p,x){var C=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:s(f,d,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ai:return p.key===C?u(f,d,p,x):null;case Fn:return p.key===C?c(f,d,p,x):null;case $t:return C=p._init,A(f,d,C(p._payload),x)}if(Pr(p)||vr(p))return C!==null?null:m(f,d,p,x,null);Ii(f,p)}return null}function S(f,d,p,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,s(d,f,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ai:return f=f.get(x.key===null?p:x.key)||null,u(d,f,x,C);case Fn:return f=f.get(x.key===null?p:x.key)||null,c(d,f,x,C);case $t:var R=x._init;return S(f,d,p,R(x._payload),C)}if(Pr(x)||vr(x))return f=f.get(p)||null,m(d,f,x,C,null);Ii(d,x)}return null}function w(f,d,p,x){for(var C=null,R=null,O=d,T=d=0,Q=null;O!==null&&T<p.length;T++){O.index>T?(Q=O,O=null):Q=O.sibling;var b=A(f,O,p[T],x);if(b===null){O===null&&(O=Q);break}e&&O&&b.alternate===null&&t(f,O),d=o(b,d,T),R===null?C=b:R.sibling=b,R=b,O=Q}if(T===p.length)return n(f,O),oe&&vn(f,T),C;if(O===null){for(;T<p.length;T++)O=h(f,p[T],x),O!==null&&(d=o(O,d,T),R===null?C=O:R.sibling=O,R=O);return oe&&vn(f,T),C}for(O=r(f,O);T<p.length;T++)Q=S(O,f,T,p[T],x),Q!==null&&(e&&Q.alternate!==null&&O.delete(Q.key===null?T:Q.key),d=o(Q,d,T),R===null?C=Q:R.sibling=Q,R=Q);return e&&O.forEach(function(he){return t(f,he)}),oe&&vn(f,T),C}function v(f,d,p,x){var C=vr(p);if(typeof C!="function")throw Error(E(150));if(p=C.call(p),p==null)throw Error(E(151));for(var R=C=null,O=d,T=d=0,Q=null,b=p.next();O!==null&&!b.done;T++,b=p.next()){O.index>T?(Q=O,O=null):Q=O.sibling;var he=A(f,O,b.value,x);if(he===null){O===null&&(O=Q);break}e&&O&&he.alternate===null&&t(f,O),d=o(he,d,T),R===null?C=he:R.sibling=he,R=he,O=Q}if(b.done)return n(f,O),oe&&vn(f,T),C;if(O===null){for(;!b.done;T++,b=p.next())b=h(f,b.value,x),b!==null&&(d=o(b,d,T),R===null?C=b:R.sibling=b,R=b);return oe&&vn(f,T),C}for(O=r(f,O);!b.done;T++,b=p.next())b=S(O,f,T,b.value,x),b!==null&&(e&&b.alternate!==null&&O.delete(b.key===null?T:b.key),d=o(b,d,T),R===null?C=b:R.sibling=b,R=b);return e&&O.forEach(function(de){return t(f,de)}),oe&&vn(f,T),C}function k(f,d,p,x){if(typeof p=="object"&&p!==null&&p.type===Dn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ai:e:{for(var C=p.key,R=d;R!==null;){if(R.key===C){if(C=p.type,C===Dn){if(R.tag===7){n(f,R.sibling),d=i(R,p.props.children),d.return=f,f=d;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===$t&&Zu(C)===R.type){n(f,R.sibling),d=i(R,p.props),d.ref=kr(f,R,p),d.return=f,f=d;break e}n(f,R);break}else t(f,R);R=R.sibling}p.type===Dn?(d=jn(p.props.children,f.mode,x,p.key),d.return=f,f=d):(x=$i(p.type,p.key,p.props,null,f.mode,x),x.ref=kr(f,d,p),x.return=f,f=x)}return l(f);case Fn:e:{for(R=p.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=_l(p,f.mode,x),d.return=f,f=d}return l(f);case $t:return R=p._init,k(f,d,R(p._payload),x)}if(Pr(p))return w(f,d,p,x);if(vr(p))return v(f,d,p,x);Ii(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=Xl(p,f.mode,x),d.return=f,f=d),l(f)):n(f,d)}return k}var lr=pf(!0),hf=pf(!1),po=pn(null),ho=null,Hn=null,Rs=null;function Os(){Rs=Hn=ho=null}function Ts(e){var t=po.current;ie(po),e._currentValue=t}function Na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function tr(e,t){ho=e,Rs=Hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(Rs!==e)if(e={context:e,memoizedValue:t,next:null},Hn===null){if(ho===null)throw Error(E(308));Hn=e,ho.dependencies={lanes:0,firstContext:e}}else Hn=Hn.next=e;return t}var wn=null;function zs(e){wn===null?wn=[e]:wn.push(e)}function mf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,zs(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gt(e,r)}function Gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ht=!1;function Ls(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Af(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gt(e,n)}return i=r.interleaved,i===null?(t.next=t,zs(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gt(e,n)}function Wi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xs(e,n)}}function qu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function mo(e,t,n,r){var i=e.updateQueue;Ht=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=u))}if(o!==null){var h=i.baseState;l=0,m=c=u=null,s=o;do{var A=s.lane,S=s.eventTime;if((r&A)===A){m!==null&&(m=m.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,v=s;switch(A=t,S=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){h=w.call(S,h,A);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,A=typeof w=="function"?w.call(S,h,A):w,A==null)break e;h=se({},h,A);break e;case 2:Ht=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,A=i.effects,A===null?i.effects=[s]:A.push(s))}else S={eventTime:S,lane:A,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=S,u=h):m=m.next=S,l|=A;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;A=s,s=A.next,A.next=null,i.lastBaseUpdate=A,i.shared.pending=null}}while(1);if(m===null&&(u=h),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Pn|=l,e.lanes=l,e.memoizedState=h}}function Ju(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var di={},Rt=pn(di),qr=pn(di),Jr=pn(di);function Sn(e){if(e===di)throw Error(E(174));return e}function Ms(e,t){switch(ne(Jr,t),ne(qr,e),ne(Rt,di),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ua(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ua(t,e)}ie(Rt),ne(Rt,t)}function ar(){ie(Rt),ie(qr),ie(Jr)}function gf(e){Sn(Jr.current);var t=Sn(Rt.current),n=ua(t,e.type);t!==n&&(ne(qr,e),ne(Rt,n))}function bs(e){qr.current===e&&(ie(Rt),ie(qr))}var le=pn(0);function Ao(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yl=[];function Fs(){for(var e=0;e<Yl.length;e++)Yl[e]._workInProgressVersionPrimary=null;Yl.length=0}var Gi=Vt.ReactCurrentDispatcher,Vl=Vt.ReactCurrentBatchConfig,In=0,ae=null,ve=null,ke=null,go=!1,Mr=!1,ei=0,Dm=0;function ze(){throw Error(E(321))}function Ds(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function Ws(e,t,n,r,i,o){if(In=o,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gi.current=e===null||e.memoizedState===null?Vm:Qm,e=n(r,i),Mr){o=0;do{if(Mr=!1,ei=0,25<=o)throw Error(E(301));o+=1,ke=ve=null,t.updateQueue=null,Gi.current=Um,e=n(r,i)}while(Mr)}if(Gi.current=vo,t=ve!==null&&ve.next!==null,In=0,ke=ve=ae=null,go=!1,t)throw Error(E(300));return e}function Gs(){var e=ei!==0;return ei=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?ae.memoizedState=ke=e:ke=ke.next=e,ke}function ft(){if(ve===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=ke===null?ae.memoizedState:ke.next;if(t!==null)ke=t,ve=e;else{if(e===null)throw Error(E(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},ke===null?ae.memoizedState=ke=e:ke=ke.next=e}return ke}function ti(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=ft(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=ve,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,c=o;do{var m=c.lane;if((In&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=h,l=r):u=u.next=h,ae.lanes|=m,Pn|=m}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=s,Et(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ae.lanes|=o,Pn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ul(e){var t=ft(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Et(o,t.memoizedState)||($e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function vf(){}function yf(e,t){var n=ae,r=ft(),i=t(),o=!Et(r.memoizedState,i);if(o&&(r.memoizedState=i,$e=!0),r=r.queue,Ys(Sf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,ni(9,wf.bind(null,n,r,i,t),void 0,null),je===null)throw Error(E(349));In&30||xf(n,t,i)}return i}function xf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wf(e,t,n,r){t.value=n,t.getSnapshot=r,kf(t)&&jf(e)}function Sf(e,t,n){return n(function(){kf(t)&&jf(e)})}function kf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function jf(e){var t=Gt(e,1);t!==null&&Ct(t,e,1,-1)}function ec(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:e},t.queue=e,e=e.dispatch=Ym.bind(null,ae,e),[t.memoizedState,e]}function ni(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Cf(){return ft().memoizedState}function Yi(e,t,n,r){var i=Pt();ae.flags|=e,i.memoizedState=ni(1|t,n,void 0,r===void 0?null:r)}function Uo(e,t,n,r){var i=ft();r=r===void 0?null:r;var o=void 0;if(ve!==null){var l=ve.memoizedState;if(o=l.destroy,r!==null&&Ds(r,l.deps)){i.memoizedState=ni(t,n,o,r);return}}ae.flags|=e,i.memoizedState=ni(1|t,n,o,r)}function tc(e,t){return Yi(8390656,8,e,t)}function Ys(e,t){return Uo(2048,8,e,t)}function Ef(e,t){return Uo(4,2,e,t)}function If(e,t){return Uo(4,4,e,t)}function Pf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nf(e,t,n){return n=n!=null?n.concat([e]):null,Uo(4,4,Pf.bind(null,t,e),n)}function Vs(){}function Bf(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ds(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rf(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ds(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Of(e,t,n){return In&21?(Et(n,t)||(n=Md(),ae.lanes|=n,Pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function Wm(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=Vl.transition;Vl.transition={};try{e(!1),t()}finally{q=n,Vl.transition=r}}function Tf(){return ft().memoizedState}function Gm(e,t,n){var r=ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zf(e))Lf(t,n);else if(n=mf(e,t,n,r),n!==null){var i=Ge();Ct(n,e,r,i),Mf(n,t,r)}}function Ym(e,t,n){var r=ln(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zf(e))Lf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Et(s,l)){var u=t.interleaved;u===null?(i.next=i,zs(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=mf(e,t,i,r),n!==null&&(i=Ge(),Ct(n,e,r,i),Mf(n,t,r))}}function zf(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Lf(e,t){Mr=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Mf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xs(e,n)}}var vo={readContext:dt,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},Vm={readContext:dt,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:tc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Yi(4194308,4,Pf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yi(4,2,e,t)},useMemo:function(e,t){var n=Pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Gm.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:ec,useDebugValue:Vs,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=ec(!1),t=e[0];return e=Wm.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,i=Pt();if(oe){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),je===null)throw Error(E(349));In&30||xf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,tc(Sf.bind(null,r,o,e),[e]),r.flags|=2048,ni(9,wf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Pt(),t=je.identifierPrefix;if(oe){var n=Mt,r=Lt;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ei++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Dm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qm={readContext:dt,useCallback:Bf,useContext:dt,useEffect:Ys,useImperativeHandle:Nf,useInsertionEffect:Ef,useLayoutEffect:If,useMemo:Rf,useReducer:Ql,useRef:Cf,useState:function(){return Ql(ti)},useDebugValue:Vs,useDeferredValue:function(e){var t=ft();return Of(t,ve.memoizedState,e)},useTransition:function(){var e=Ql(ti)[0],t=ft().memoizedState;return[e,t]},useMutableSource:vf,useSyncExternalStore:yf,useId:Tf,unstable_isNewReconciler:!1},Um={readContext:dt,useCallback:Bf,useContext:dt,useEffect:Ys,useImperativeHandle:Nf,useInsertionEffect:Ef,useLayoutEffect:If,useMemo:Rf,useReducer:Ul,useRef:Cf,useState:function(){return Ul(ti)},useDebugValue:Vs,useDeferredValue:function(e){var t=ft();return ve===null?t.memoizedState=e:Of(t,ve.memoizedState,e)},useTransition:function(){var e=Ul(ti)[0],t=ft().memoizedState;return[e,t]},useMutableSource:vf,useSyncExternalStore:yf,useId:Tf,unstable_isNewReconciler:!1};function wt(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ba(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $o={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=ln(e),o=Ft(r,i);o.payload=t,n!=null&&(o.callback=n),t=rn(e,o,i),t!==null&&(Ct(t,e,i,r),Wi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=ln(e),o=Ft(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=rn(e,o,i),t!==null&&(Ct(t,e,i,r),Wi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=ln(e),i=Ft(n,r);i.tag=2,t!=null&&(i.callback=t),t=rn(e,i,r),t!==null&&(Ct(t,e,r,n),Wi(t,e,r))}};function nc(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Xr(n,r)||!Xr(i,o):!0}function bf(e,t,n){var r=!1,i=dn,o=t.contextType;return typeof o=="object"&&o!==null?o=dt(o):(i=Xe(t)?Cn:Fe.current,r=t.contextTypes,o=(r=r!=null)?ir(e,i):dn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$o,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function rc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$o.enqueueReplaceState(t,t.state,null)}function Ra(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ls(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=dt(o):(o=Xe(t)?Cn:Fe.current,i.context=ir(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ba(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&$o.enqueueReplaceState(i,i.state,null),mo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function sr(e,t){try{var n="",r=t;do n+=yh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function $l(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Oa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $m=typeof WeakMap=="function"?WeakMap:Map;function Ff(e,t,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xo||(xo=!0,Ya=r),Oa(e,t)},n}function Df(e,t,n){n=Ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Oa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Oa(e,t),typeof r!="function"&&(on===null?on=new Set([this]):on.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ic(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $m;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=lA.bind(null,e,t,n),t.then(e,e))}function oc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ft(-1,1),t.tag=2,rn(n,t,1))),n.lanes|=1),e)}var Hm=Vt.ReactCurrentOwner,$e=!1;function We(e,t,n,r){t.child=e===null?hf(t,null,n,r):lr(t,e.child,n,r)}function ac(e,t,n,r,i){n=n.render;var o=t.ref;return tr(t,i),r=Ws(e,t,n,r,o,i),n=Gs(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(oe&&n&&Ps(t),t.flags|=1,We(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Zs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Wf(e,t,o,r,i)):(e=$i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Xr,n(l,r)&&e.ref===t.ref)return Yt(e,t,i)}return t.flags|=1,e=an(o,r),e.ref=t.ref,e.return=t,t.child=e}function Wf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Xr(o,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,Yt(e,t,i)}return Ta(e,t,n,r,i)}function Gf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(_n,Ke),Ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(_n,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ne(_n,Ke),Ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ne(_n,Ke),Ke|=r;return We(e,t,i,n),t.child}function Yf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ta(e,t,n,r,i){var o=Xe(n)?Cn:Fe.current;return o=ir(t,o),tr(t,i),n=Ws(e,t,n,r,o,i),r=Gs(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(oe&&r&&Ps(t),t.flags|=1,We(e,t,n,i),t.child)}function uc(e,t,n,r,i){if(Xe(n)){var o=!0;uo(t)}else o=!1;if(tr(t,i),t.stateNode===null)Vi(e,t),bf(t,n,r),Ra(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=dt(c):(c=Xe(n)?Cn:Fe.current,c=ir(t,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&rc(t,l,r,c),Ht=!1;var A=t.memoizedState;l.state=A,mo(t,r,l,i),u=t.memoizedState,s!==r||A!==u||He.current||Ht?(typeof m=="function"&&(Ba(t,n,m,r),u=t.memoizedState),(s=Ht||nc(t,n,s,r,A,u,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Af(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:wt(t.type,s),l.props=c,h=t.pendingProps,A=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=dt(u):(u=Xe(n)?Cn:Fe.current,u=ir(t,u));var S=n.getDerivedStateFromProps;(m=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||A!==u)&&rc(t,l,r,u),Ht=!1,A=t.memoizedState,l.state=A,mo(t,r,l,i);var w=t.memoizedState;s!==h||A!==w||He.current||Ht?(typeof S=="function"&&(Ba(t,n,S,r),w=t.memoizedState),(c=Ht||nc(t,n,c,r,A,w,u)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),r=!1)}return za(e,t,n,r,o,i)}function za(e,t,n,r,i,o){Yf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Xu(t,n,!1),Yt(e,t,o);r=t.stateNode,Hm.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=lr(t,e.child,null,o),t.child=lr(t,null,s,o)):We(e,t,s,o),t.memoizedState=r.state,i&&Xu(t,n,!0),t.child}function Vf(e){var t=e.stateNode;t.pendingContext?Hu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hu(e,t.context,!1),Ms(e,t.containerInfo)}function cc(e,t,n,r,i){return or(),Bs(i),t.flags|=256,We(e,t,n,r),t.child}var La={dehydrated:null,treeContext:null,retryLane:0};function Ma(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qf(e,t,n){var r=t.pendingProps,i=le.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ne(le,i&1),e===null)return Pa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=_o(l,r,0,null),e=jn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ma(n),t.memoizedState=La,e):Qs(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Xm(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=an(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=an(s,o):(o=jn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Ma(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=La,r}return o=e.child,e=o.sibling,r=an(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qs(e,t){return t=_o({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pi(e,t,n,r){return r!==null&&Bs(r),lr(t,e.child,null,n),e=Qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xm(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=$l(Error(E(422))),Pi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=_o({mode:"visible",children:r.children},i,0,null),o=jn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&lr(t,e.child,null,l),t.child.memoizedState=Ma(l),t.memoizedState=La,o);if(!(t.mode&1))return Pi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(E(419)),r=$l(o,r,void 0),Pi(e,t,l,r)}if(s=(l&e.childLanes)!==0,$e||s){if(r=je,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Gt(e,i),Ct(r,e,i,-1))}return Ks(),r=$l(Error(E(421))),Pi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=aA.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ze=nn(i.nextSibling),qe=t,oe=!0,kt=null,e!==null&&(at[st++]=Lt,at[st++]=Mt,at[st++]=En,Lt=e.id,Mt=e.overflow,En=t),t=Qs(t,r.children),t.flags|=4096,t)}function dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Na(e.return,t,n)}function Hl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Uf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(We(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dc(e,n,t);else if(e.tag===19)dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(le,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ao(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Hl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ao(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Hl(t,!0,n,null,o);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _m(e,t,n){switch(t.tag){case 3:Vf(t),or();break;case 5:gf(t);break;case 1:Xe(t.type)&&uo(t);break;case 4:Ms(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ne(po,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?Qf(e,t,n):(ne(le,le.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);ne(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Uf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,Gf(e,t,n)}return Yt(e,t,n)}var $f,ba,Hf,Xf;$f=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ba=function(){};Hf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Sn(Rt.current);var o=null;switch(n){case"input":i=oa(e,i),r=oa(e,r),o=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),o=[];break;case"textarea":i=sa(e,i),r=sa(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ao)}ca(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Gr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Gr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&re("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Xf=function(e,t,n,r){n!==r&&(t.flags|=4)};function jr(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Km(e,t,n){var r=t.pendingProps;switch(Ns(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Xe(t.type)&&so(),Le(t),null;case 3:return r=t.stateNode,ar(),ie(He),ie(Fe),Fs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ei(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,kt!==null&&(Ua(kt),kt=null))),ba(e,t),Le(t),null;case 5:bs(t);var i=Sn(Jr.current);if(n=t.type,e!==null&&t.stateNode!=null)Hf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return Le(t),null}if(e=Sn(Rt.current),Ei(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Nt]=t,r[Zr]=o,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<Br.length;i++)re(Br[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":xu(r,o),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},re("invalid",r);break;case"textarea":Su(r,o),re("invalid",r)}ca(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Ci(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Ci(r.textContent,s,e),i=["children",""+s]):Gr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&re("scroll",r)}switch(n){case"input":gi(r),wu(r,o,!0);break;case"textarea":gi(r),ku(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ao)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Nt]=t,e[Zr]=r,$f(e,t,!1,!1),t.stateNode=e;e:{switch(l=da(n,r),n){case"dialog":re("cancel",e),re("close",e),i=r;break;case"iframe":case"object":case"embed":re("load",e),i=r;break;case"video":case"audio":for(i=0;i<Br.length;i++)re(Br[i],e);i=r;break;case"source":re("error",e),i=r;break;case"img":case"image":case"link":re("error",e),re("load",e),i=r;break;case"details":re("toggle",e),i=r;break;case"input":xu(e,r),i=oa(e,r),re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),re("invalid",e);break;case"textarea":Su(e,r),i=sa(e,r),re("invalid",e);break;default:i=r}ca(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?jd(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Sd(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Yr(e,u):typeof u=="number"&&Yr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Gr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&re("scroll",e):u!=null&&hs(e,o,u,l))}switch(n){case"input":gi(e),wu(e,r,!1);break;case"textarea":gi(e),ku(e);break;case"option":r.value!=null&&e.setAttribute("value",""+cn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Zn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)Xf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Sn(Jr.current),Sn(Rt.current),Ei(t)){if(r=t.stateNode,n=t.memoizedProps,r[Nt]=t,(o=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:Ci(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ci(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nt]=t,t.stateNode=r}return Le(t),null;case 13:if(ie(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ze!==null&&t.mode&1&&!(t.flags&128))ff(),or(),t.flags|=98560,o=!1;else if(o=Ei(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[Nt]=t}else or(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Le(t),o=!1}else kt!==null&&(Ua(kt),kt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?xe===0&&(xe=3):Ks())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return ar(),ba(e,t),e===null&&_r(t.stateNode.containerInfo),Le(t),null;case 10:return Ts(t.type._context),Le(t),null;case 17:return Xe(t.type)&&so(),Le(t),null;case 19:if(ie(le),o=t.memoizedState,o===null)return Le(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)jr(o,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ao(e),l!==null){for(t.flags|=128,jr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(le,le.current&1|2),t.child}e=e.sibling}o.tail!==null&&pe()>ur&&(t.flags|=128,r=!0,jr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ao(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!oe)return Le(t),null}else 2*pe()-o.renderingStartTime>ur&&n!==1073741824&&(t.flags|=128,r=!0,jr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=pe(),t.sibling=null,n=le.current,ne(le,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return _s(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ke&1073741824&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Zm(e,t){switch(Ns(t),t.tag){case 1:return Xe(t.type)&&so(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ar(),ie(He),ie(Fe),Fs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bs(t),null;case 13:if(ie(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(le),null;case 4:return ar(),null;case 10:return Ts(t.type._context),null;case 22:case 23:return _s(),null;case 24:return null;default:return null}}var Ni=!1,be=!1,qm=typeof WeakSet=="function"?WeakSet:Set,L=null;function Xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function Fa(e,t,n){try{n()}catch(r){ce(e,t,r)}}var fc=!1;function Jm(e,t){if(wa=io,e=qd(),Is(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,m=0,h=e,A=null;t:for(;;){for(var S;h!==n||i!==0&&h.nodeType!==3||(s=l+i),h!==o||r!==0&&h.nodeType!==3||(u=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(S=h.firstChild)!==null;)A=h,h=S;for(;;){if(h===e)break t;if(A===n&&++c===i&&(s=l),A===o&&++m===r&&(u=l),(S=h.nextSibling)!==null)break;h=A,A=h.parentNode}h=S}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sa={focusedElem:e,selectionRange:n},io=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,k=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:wt(t.type,v),k);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(x){ce(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return w=fc,fc=!1,w}function br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Fa(t,n,o)}i=i.next}while(i!==r)}}function Ho(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Da(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _f(e){var t=e.alternate;t!==null&&(e.alternate=null,_f(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nt],delete t[Zr],delete t[Ca],delete t[Lm],delete t[Mm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kf(e){return e.tag===5||e.tag===3||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ao));else if(r!==4&&(e=e.child,e!==null))for(Wa(e,t,n),e=e.sibling;e!==null;)Wa(e,t,n),e=e.sibling}function Ga(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ga(e,t,n),e=e.sibling;e!==null;)Ga(e,t,n),e=e.sibling}var Be=null,St=!1;function Ut(e,t,n){for(n=n.child;n!==null;)Zf(e,t,n),n=n.sibling}function Zf(e,t,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Do,n)}catch{}switch(n.tag){case 5:be||Xn(n,t);case 6:var r=Be,i=St;Be=null,Ut(e,t,n),Be=r,St=i,Be!==null&&(St?(e=Be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(St?(e=Be,n=n.stateNode,e.nodeType===8?Wl(e.parentNode,n):e.nodeType===1&&Wl(e,n),$r(e)):Wl(Be,n.stateNode));break;case 4:r=Be,i=St,Be=n.stateNode.containerInfo,St=!0,Ut(e,t,n),Be=r,St=i;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Fa(n,t,l),i=i.next}while(i!==r)}Ut(e,t,n);break;case 1:if(!be&&(Xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ce(n,t,s)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,Ut(e,t,n),be=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function hc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qm),t.forEach(function(r){var i=sA.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Be=s.stateNode,St=!1;break e;case 3:Be=s.stateNode.containerInfo,St=!0;break e;case 4:Be=s.stateNode.containerInfo,St=!0;break e}s=s.return}if(Be===null)throw Error(E(160));Zf(o,l,i),Be=null,St=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ce(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qf(t,e),t=t.sibling}function qf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),It(e),r&4){try{br(3,e,e.return),Ho(3,e)}catch(v){ce(e,e.return,v)}try{br(5,e,e.return)}catch(v){ce(e,e.return,v)}}break;case 1:mt(t,e),It(e),r&512&&n!==null&&Xn(n,n.return);break;case 5:if(mt(t,e),It(e),r&512&&n!==null&&Xn(n,n.return),e.flags&32){var i=e.stateNode;try{Yr(i,"")}catch(v){ce(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&yd(i,o),da(s,l);var c=da(s,o);for(l=0;l<u.length;l+=2){var m=u[l],h=u[l+1];m==="style"?jd(i,h):m==="dangerouslySetInnerHTML"?Sd(i,h):m==="children"?Yr(i,h):hs(i,m,h,c)}switch(s){case"input":la(i,o);break;case"textarea":xd(i,o);break;case"select":var A=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?Zn(i,!!o.multiple,S,!1):A!==!!o.multiple&&(o.defaultValue!=null?Zn(i,!!o.multiple,o.defaultValue,!0):Zn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Zr]=o}catch(v){ce(e,e.return,v)}}break;case 6:if(mt(t,e),It(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){ce(e,e.return,v)}}break;case 3:if(mt(t,e),It(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$r(t.containerInfo)}catch(v){ce(e,e.return,v)}break;case 4:mt(t,e),It(e);break;case 13:mt(t,e),It(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Hs=pe())),r&4&&hc(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(be=(c=be)||m,mt(t,e),be=c):mt(t,e),It(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(L=e,m=e.child;m!==null;){for(h=L=m;L!==null;){switch(A=L,S=A.child,A.tag){case 0:case 11:case 14:case 15:br(4,A,A.return);break;case 1:Xn(A,A.return);var w=A.stateNode;if(typeof w.componentWillUnmount=="function"){r=A,n=A.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){ce(r,n,v)}}break;case 5:Xn(A,A.return);break;case 22:if(A.memoizedState!==null){Ac(h);continue}}S!==null?(S.return=A,L=S):Ac(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,u=h.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=kd("display",l))}catch(v){ce(e,e.return,v)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){ce(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:mt(t,e),It(e),r&4&&hc(e);break;case 21:break;default:mt(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Kf(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yr(i,""),r.flags&=-33);var o=pc(e);Ga(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=pc(e);Wa(e,s,l);break;default:throw Error(E(161))}}catch(u){ce(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function eA(e,t,n){L=e,Jf(e)}function Jf(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ni;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||be;s=Ni;var c=be;if(Ni=l,(be=u)&&!c)for(L=i;L!==null;)l=L,u=l.child,l.tag===22&&l.memoizedState!==null?gc(i):u!==null?(u.return=l,L=u):gc(i);for(;o!==null;)L=o,Jf(o),o=o.sibling;L=i,Ni=s,be=c}mc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):mc(e)}}function mc(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:be||Ho(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:wt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ju(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ju(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&$r(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}be||t.flags&512&&Da(t)}catch(A){ce(t,t.return,A)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Ac(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function gc(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ho(4,t)}catch(u){ce(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){ce(t,i,u)}}var o=t.return;try{Da(t)}catch(u){ce(t,o,u)}break;case 5:var l=t.return;try{Da(t)}catch(u){ce(t,l,u)}}}catch(u){ce(t,t.return,u)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var tA=Math.ceil,yo=Vt.ReactCurrentDispatcher,Us=Vt.ReactCurrentOwner,ct=Vt.ReactCurrentBatchConfig,$=0,je=null,me=null,Re=0,Ke=0,_n=pn(0),xe=0,ri=null,Pn=0,Xo=0,$s=0,Fr=null,Ue=null,Hs=0,ur=1/0,Tt=null,xo=!1,Ya=null,on=null,Bi=!1,Zt=null,wo=0,Dr=0,Va=null,Qi=-1,Ui=0;function Ge(){return $&6?pe():Qi!==-1?Qi:Qi=pe()}function ln(e){return e.mode&1?$&2&&Re!==0?Re&-Re:Fm.transition!==null?(Ui===0&&(Ui=Md()),Ui):(e=q,e!==0||(e=window.event,e=e===void 0?16:Vd(e.type)),e):1}function Ct(e,t,n,r){if(50<Dr)throw Dr=0,Va=null,Error(E(185));si(e,n,r),(!($&2)||e!==je)&&(e===je&&(!($&2)&&(Xo|=n),xe===4&&_t(e,Re)),_e(e,r),n===1&&$===0&&!(t.mode&1)&&(ur=pe()+500,Qo&&hn()))}function _e(e,t){var n=e.callbackNode;Fh(e,t);var r=ro(e,e===je?Re:0);if(r===0)n!==null&&Eu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Eu(n),t===1)e.tag===0?bm(vc.bind(null,e)):uf(vc.bind(null,e)),Tm(function(){!($&6)&&hn()}),n=null;else{switch(bd(r)){case 1:n=ys;break;case 4:n=zd;break;case 16:n=no;break;case 536870912:n=Ld;break;default:n=no}n=ap(n,ep.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ep(e,t){if(Qi=-1,Ui=0,$&6)throw Error(E(327));var n=e.callbackNode;if(nr()&&e.callbackNode!==n)return null;var r=ro(e,e===je?Re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=So(e,r);else{t=r;var i=$;$|=2;var o=np();(je!==e||Re!==t)&&(Tt=null,ur=pe()+500,kn(e,t));do try{iA();break}catch(s){tp(e,s)}while(1);Os(),yo.current=o,$=i,me!==null?t=0:(je=null,Re=0,t=xe)}if(t!==0){if(t===2&&(i=Aa(e),i!==0&&(r=i,t=Qa(e,i))),t===1)throw n=ri,kn(e,0),_t(e,r),_e(e,pe()),n;if(t===6)_t(e,r);else{if(i=e.current.alternate,!(r&30)&&!nA(i)&&(t=So(e,r),t===2&&(o=Aa(e),o!==0&&(r=o,t=Qa(e,o))),t===1))throw n=ri,kn(e,0),_t(e,r),_e(e,pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:yn(e,Ue,Tt);break;case 3:if(_t(e,r),(r&130023424)===r&&(t=Hs+500-pe(),10<t)){if(ro(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ja(yn.bind(null,e,Ue,Tt),t);break}yn(e,Ue,Tt);break;case 4:if(_t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-jt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tA(r/1960))-r,10<r){e.timeoutHandle=ja(yn.bind(null,e,Ue,Tt),r);break}yn(e,Ue,Tt);break;case 5:yn(e,Ue,Tt);break;default:throw Error(E(329))}}}return _e(e,pe()),e.callbackNode===n?ep.bind(null,e):null}function Qa(e,t){var n=Fr;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=So(e,t),e!==2&&(t=Ue,Ue=n,t!==null&&Ua(t)),e}function Ua(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function nA(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Et(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~$s,t&=~Xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-jt(t),r=1<<n;e[n]=-1,t&=~r}}function vc(e){if($&6)throw Error(E(327));nr();var t=ro(e,0);if(!(t&1))return _e(e,pe()),null;var n=So(e,t);if(e.tag!==0&&n===2){var r=Aa(e);r!==0&&(t=r,n=Qa(e,r))}if(n===1)throw n=ri,kn(e,0),_t(e,t),_e(e,pe()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yn(e,Ue,Tt),_e(e,pe()),null}function Xs(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(ur=pe()+500,Qo&&hn())}}function Nn(e){Zt!==null&&Zt.tag===0&&!($&6)&&nr();var t=$;$|=1;var n=ct.transition,r=q;try{if(ct.transition=null,q=1,e)return e()}finally{q=r,ct.transition=n,$=t,!($&6)&&hn()}}function _s(){Ke=_n.current,ie(_n)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Om(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Ns(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&so();break;case 3:ar(),ie(He),ie(Fe),Fs();break;case 5:bs(r);break;case 4:ar();break;case 13:ie(le);break;case 19:ie(le);break;case 10:Ts(r.type._context);break;case 22:case 23:_s()}n=n.return}if(je=e,me=e=an(e.current,null),Re=Ke=t,xe=0,ri=null,$s=Xo=Pn=0,Ue=Fr=null,wn!==null){for(t=0;t<wn.length;t++)if(n=wn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}wn=null}return e}function tp(e,t){do{var n=me;try{if(Os(),Gi.current=vo,go){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}go=!1}if(In=0,ke=ve=ae=null,Mr=!1,ei=0,Us.current=null,n===null||n.return===null){xe=1,ri=t,me=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=Re,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=s,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var A=m.alternate;A?(m.updateQueue=A.updateQueue,m.memoizedState=A.memoizedState,m.lanes=A.lanes):(m.updateQueue=null,m.memoizedState=null)}var S=oc(l);if(S!==null){S.flags&=-257,lc(S,l,s,o,t),S.mode&1&&ic(o,c,t),t=S,u=c;var w=t.updateQueue;if(w===null){var v=new Set;v.add(u),t.updateQueue=v}else w.add(u);break e}else{if(!(t&1)){ic(o,c,t),Ks();break e}u=Error(E(426))}}else if(oe&&s.mode&1){var k=oc(l);if(k!==null){!(k.flags&65536)&&(k.flags|=256),lc(k,l,s,o,t),Bs(sr(u,s));break e}}o=u=sr(u,s),xe!==4&&(xe=2),Fr===null?Fr=[o]:Fr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Ff(o,u,t);qu(o,f);break e;case 1:s=u;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(on===null||!on.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Df(o,s,t);qu(o,x);break e}}o=o.return}while(o!==null)}ip(n)}catch(C){t=C,me===n&&n!==null&&(me=n=n.return);continue}break}while(1)}function np(){var e=yo.current;return yo.current=vo,e===null?vo:e}function Ks(){(xe===0||xe===3||xe===2)&&(xe=4),je===null||!(Pn&268435455)&&!(Xo&268435455)||_t(je,Re)}function So(e,t){var n=$;$|=2;var r=np();(je!==e||Re!==t)&&(Tt=null,kn(e,t));do try{rA();break}catch(i){tp(e,i)}while(1);if(Os(),$=n,yo.current=r,me!==null)throw Error(E(261));return je=null,Re=0,xe}function rA(){for(;me!==null;)rp(me)}function iA(){for(;me!==null&&!Nh();)rp(me)}function rp(e){var t=lp(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?ip(e):me=t,Us.current=null}function ip(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Zm(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,me=null;return}}else if(n=Km(n,t,Ke),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);xe===0&&(xe=5)}function yn(e,t,n){var r=q,i=ct.transition;try{ct.transition=null,q=1,oA(e,t,n,r)}finally{ct.transition=i,q=r}return null}function oA(e,t,n,r){do nr();while(Zt!==null);if($&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Dh(e,o),e===je&&(me=je=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bi||(Bi=!0,ap(no,function(){return nr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ct.transition,ct.transition=null;var l=q;q=1;var s=$;$|=4,Us.current=null,Jm(e,n),qf(n,e),Cm(Sa),io=!!wa,Sa=wa=null,e.current=n,eA(n),Bh(),$=s,q=l,ct.transition=o}else e.current=n;if(Bi&&(Bi=!1,Zt=e,wo=i),o=e.pendingLanes,o===0&&(on=null),Th(n.stateNode),_e(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xo)throw xo=!1,e=Ya,Ya=null,e;return wo&1&&e.tag!==0&&nr(),o=e.pendingLanes,o&1?e===Va?Dr++:(Dr=0,Va=e):Dr=0,hn(),null}function nr(){if(Zt!==null){var e=bd(wo),t=ct.transition,n=q;try{if(ct.transition=null,q=16>e?16:e,Zt===null)var r=!1;else{if(e=Zt,Zt=null,wo=0,$&6)throw Error(E(331));var i=$;for($|=4,L=e.current;L!==null;){var o=L,l=o.child;if(L.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(L=c;L!==null;){var m=L;switch(m.tag){case 0:case 11:case 15:br(8,m,o)}var h=m.child;if(h!==null)h.return=m,L=h;else for(;L!==null;){m=L;var A=m.sibling,S=m.return;if(_f(m),m===c){L=null;break}if(A!==null){A.return=S,L=A;break}L=S}}}var w=o.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}L=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,L=l;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:br(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,L=f;break e}L=o.return}}var d=e.current;for(L=d;L!==null;){l=L;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,L=p;else e:for(l=d;L!==null;){if(s=L,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ho(9,s)}}catch(C){ce(s,s.return,C)}if(s===l){L=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,L=x;break e}L=s.return}}if($=i,hn(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Do,e)}catch{}r=!0}return r}finally{q=n,ct.transition=t}}return!1}function yc(e,t,n){t=sr(n,t),t=Ff(e,t,1),e=rn(e,t,1),t=Ge(),e!==null&&(si(e,1,t),_e(e,t))}function ce(e,t,n){if(e.tag===3)yc(e,e,n);else for(;t!==null;){if(t.tag===3){yc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(on===null||!on.has(r))){e=sr(n,e),e=Df(t,e,1),t=rn(t,e,1),e=Ge(),t!==null&&(si(t,1,e),_e(t,e));break}}t=t.return}}function lA(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Re&n)===n&&(xe===4||xe===3&&(Re&130023424)===Re&&500>pe()-Hs?kn(e,0):$s|=n),_e(e,t)}function op(e,t){t===0&&(e.mode&1?(t=xi,xi<<=1,!(xi&130023424)&&(xi=4194304)):t=1);var n=Ge();e=Gt(e,t),e!==null&&(si(e,t,n),_e(e,n))}function aA(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),op(e,n)}function sA(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),op(e,n)}var lp;lp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,_m(e,t,n);$e=!!(e.flags&131072)}else $e=!1,oe&&t.flags&1048576&&cf(t,fo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vi(e,t),e=t.pendingProps;var i=ir(t,Fe.current);tr(t,n),i=Ws(null,t,r,e,i,n);var o=Gs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(o=!0,uo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ls(t),i.updater=$o,t.stateNode=i,i._reactInternals=t,Ra(t,r,e,n),t=za(null,t,r,!0,o,n)):(t.tag=0,oe&&o&&Ps(t),We(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=cA(r),e=wt(r,e),i){case 0:t=Ta(null,t,r,e,n);break e;case 1:t=uc(null,t,r,e,n);break e;case 11:t=ac(null,t,r,e,n);break e;case 14:t=sc(null,t,r,wt(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Ta(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),uc(e,t,r,i,n);case 3:e:{if(Vf(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Af(e,t),mo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=sr(Error(E(423)),t),t=cc(e,t,r,n,i);break e}else if(r!==i){i=sr(Error(E(424)),t),t=cc(e,t,r,n,i);break e}else for(Ze=nn(t.stateNode.containerInfo.firstChild),qe=t,oe=!0,kt=null,n=hf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(or(),r===i){t=Yt(e,t,n);break e}We(e,t,r,n)}t=t.child}return t;case 5:return gf(t),e===null&&Pa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ka(r,i)?l=null:o!==null&&ka(r,o)&&(t.flags|=32),Yf(e,t),We(e,t,l,n),t.child;case 6:return e===null&&Pa(t),null;case 13:return Qf(e,t,n);case 4:return Ms(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lr(t,null,r,n):We(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),ac(e,t,r,i,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ne(po,r._currentValue),r._currentValue=l,o!==null)if(Et(o.value,l)){if(o.children===i.children&&!He.current){t=Yt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Ft(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Na(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(E(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Na(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}We(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,tr(t,n),i=dt(i),r=r(i),t.flags|=1,We(e,t,r,n),t.child;case 14:return r=t.type,i=wt(r,t.pendingProps),i=wt(r.type,i),sc(e,t,r,i,n);case 15:return Wf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Vi(e,t),t.tag=1,Xe(r)?(e=!0,uo(t)):e=!1,tr(t,n),bf(t,r,i),Ra(t,r,i,n),za(null,t,r,!0,e,n);case 19:return Uf(e,t,n);case 22:return Gf(e,t,n)}throw Error(E(156,t.tag))};function ap(e,t){return Td(e,t)}function uA(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new uA(e,t,n,r)}function Zs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cA(e){if(typeof e=="function")return Zs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===As)return 11;if(e===gs)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $i(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Zs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Dn:return jn(n.children,i,o,t);case ms:l=8,i|=8;break;case ta:return e=ut(12,n,t,i|2),e.elementType=ta,e.lanes=o,e;case na:return e=ut(13,n,t,i),e.elementType=na,e.lanes=o,e;case ra:return e=ut(19,n,t,i),e.elementType=ra,e.lanes=o,e;case Ad:return _o(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hd:l=10;break e;case md:l=9;break e;case As:l=11;break e;case gs:l=14;break e;case $t:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=ut(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function jn(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function _o(e,t,n,r){return e=ut(22,e,r,t),e.elementType=Ad,e.lanes=n,e.stateNode={isHidden:!1},e}function Xl(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function _l(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dA(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qs(e,t,n,r,i,o,l,s,u){return e=new dA(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ut(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ls(o),e}function fA(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sp(e){if(!e)return dn;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Xe(n))return sf(e,n,t)}return t}function up(e,t,n,r,i,o,l,s,u){return e=qs(n,r,!0,e,i,o,l,s,u),e.context=sp(null),n=e.current,r=Ge(),i=ln(n),o=Ft(r,i),o.callback=t??null,rn(n,o,i),e.current.lanes=i,si(e,i,r),_e(e,r),e}function Ko(e,t,n,r){var i=t.current,o=Ge(),l=ln(i);return n=sp(n),t.context===null?t.context=n:t.pendingContext=n,t=Ft(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=rn(i,t,l),e!==null&&(Ct(e,i,l,o),Wi(e,i,l)),l}function ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Js(e,t){xc(e,t),(e=e.alternate)&&xc(e,t)}function pA(){return null}var cp=typeof reportError=="function"?reportError:function(e){console.error(e)};function eu(e){this._internalRoot=e}Zo.prototype.render=eu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Ko(e,t,null,null)};Zo.prototype.unmount=eu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nn(function(){Ko(null,e,null,null)}),t[Wt]=null}};function Zo(e){this._internalRoot=e}Zo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xt.length&&t!==0&&t<Xt[n].priority;n++);Xt.splice(n,0,e),n===0&&Yd(e)}};function tu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wc(){}function hA(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=ko(l);o.call(c)}}var l=up(t,r,e,0,null,!1,!1,"",wc);return e._reactRootContainer=l,e[Wt]=l.current,_r(e.nodeType===8?e.parentNode:e),Nn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=ko(u);s.call(c)}}var u=qs(e,0,!1,null,null,!1,!1,"",wc);return e._reactRootContainer=u,e[Wt]=u.current,_r(e.nodeType===8?e.parentNode:e),Nn(function(){Ko(t,u,n,r)}),u}function Jo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=ko(l);s.call(u)}}Ko(t,l,e,i)}else l=hA(n,t,e,i,r);return ko(l)}Fd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nr(t.pendingLanes);n!==0&&(xs(t,n|1),_e(t,pe()),!($&6)&&(ur=pe()+500,hn()))}break;case 13:Nn(function(){var r=Gt(e,1);if(r!==null){var i=Ge();Ct(r,e,1,i)}}),Js(e,1)}};ws=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var n=Ge();Ct(t,e,134217728,n)}Js(e,134217728)}};Dd=function(e){if(e.tag===13){var t=ln(e),n=Gt(e,t);if(n!==null){var r=Ge();Ct(n,e,t,r)}Js(e,t)}};Wd=function(){return q};Gd=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};pa=function(e,t,n){switch(t){case"input":if(la(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Vo(r);if(!i)throw Error(E(90));vd(r),la(r,i)}}}break;case"textarea":xd(e,n);break;case"select":t=n.value,t!=null&&Zn(e,!!n.multiple,t,!1)}};Id=Xs;Pd=Nn;var mA={usingClientEntryPoint:!1,Events:[ci,Vn,Vo,Cd,Ed,Xs]},Cr={findFiberByHostInstance:xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AA={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rd(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||pA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ri.isDisabled&&Ri.supportsFiber)try{Do=Ri.inject(AA),Bt=Ri}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mA;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tu(t))throw Error(E(200));return fA(e,t,null,n)};et.createRoot=function(e,t){if(!tu(e))throw Error(E(299));var n=!1,r="",i=cp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=qs(e,1,!1,null,null,n,!1,r,i),e[Wt]=t.current,_r(e.nodeType===8?e.parentNode:e),new eu(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Rd(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return Nn(e)};et.hydrate=function(e,t,n){if(!qo(t))throw Error(E(200));return Jo(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!tu(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=cp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=up(t,null,e,1,n??null,i,!1,o,l),e[Wt]=t.current,_r(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Zo(t)};et.render=function(e,t,n){if(!qo(t))throw Error(E(200));return Jo(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!qo(e))throw Error(E(40));return e._reactRootContainer?(Nn(function(){Jo(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1};et.unstable_batchedUpdates=Xs;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qo(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Jo(e,t,n,!1,r)};et.version="18.3.1-next-f1338f8080-20240426";function dp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dp)}catch(e){console.error(e)}}dp(),cd.exports=et;var gA=cd.exports,Sc=gA;Jl.createRoot=Sc.createRoot,Jl.hydrateRoot=Sc.hydrateRoot;var fp={exports:{}},J={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nu=Symbol.for("react.element"),ru=Symbol.for("react.portal"),el=Symbol.for("react.fragment"),tl=Symbol.for("react.strict_mode"),nl=Symbol.for("react.profiler"),rl=Symbol.for("react.provider"),il=Symbol.for("react.context"),vA=Symbol.for("react.server_context"),ol=Symbol.for("react.forward_ref"),ll=Symbol.for("react.suspense"),al=Symbol.for("react.suspense_list"),sl=Symbol.for("react.memo"),ul=Symbol.for("react.lazy"),yA=Symbol.for("react.offscreen"),pp;pp=Symbol.for("react.module.reference");function pt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case nu:switch(e=e.type,e){case el:case nl:case tl:case ll:case al:return e;default:switch(e=e&&e.$$typeof,e){case vA:case il:case ol:case ul:case sl:case rl:return e;default:return t}}case ru:return t}}}J.ContextConsumer=il;J.ContextProvider=rl;J.Element=nu;J.ForwardRef=ol;J.Fragment=el;J.Lazy=ul;J.Memo=sl;J.Portal=ru;J.Profiler=nl;J.StrictMode=tl;J.Suspense=ll;J.SuspenseList=al;J.isAsyncMode=function(){return!1};J.isConcurrentMode=function(){return!1};J.isContextConsumer=function(e){return pt(e)===il};J.isContextProvider=function(e){return pt(e)===rl};J.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===nu};J.isForwardRef=function(e){return pt(e)===ol};J.isFragment=function(e){return pt(e)===el};J.isLazy=function(e){return pt(e)===ul};J.isMemo=function(e){return pt(e)===sl};J.isPortal=function(e){return pt(e)===ru};J.isProfiler=function(e){return pt(e)===nl};J.isStrictMode=function(e){return pt(e)===tl};J.isSuspense=function(e){return pt(e)===ll};J.isSuspenseList=function(e){return pt(e)===al};J.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===el||e===nl||e===tl||e===ll||e===al||e===yA||typeof e=="object"&&e!==null&&(e.$$typeof===ul||e.$$typeof===sl||e.$$typeof===rl||e.$$typeof===il||e.$$typeof===ol||e.$$typeof===pp||e.getModuleId!==void 0)};J.typeOf=pt;fp.exports=J;var hp=fp.exports;function xA(e){function t(P,B,z,D,y){for(var U=0,N=0,ue=0,_=0,Z,Y,Ee=0,Qe=0,H,Te=H=Z=0,K=0,Ie=0,Ar=0,Pe=0,hi=z.length,gr=hi-1,ht,W="",fe="",Sl="",kl="",Qt;K<hi;){if(Y=z.charCodeAt(K),K===gr&&N+_+ue+U!==0&&(N!==0&&(Y=N===47?10:47),_=ue=U=0,hi++,gr++),N+_+ue+U===0){if(K===gr&&(0<Ie&&(W=W.replace(A,"")),0<W.trim().length)){switch(Y){case 32:case 9:case 59:case 13:case 10:break;default:W+=z.charAt(K)}Y=59}switch(Y){case 123:for(W=W.trim(),Z=W.charCodeAt(0),H=1,Pe=++K;K<hi;){switch(Y=z.charCodeAt(K)){case 123:H++;break;case 125:H--;break;case 47:switch(Y=z.charCodeAt(K+1)){case 42:case 47:e:{for(Te=K+1;Te<gr;++Te)switch(z.charCodeAt(Te)){case 47:if(Y===42&&z.charCodeAt(Te-1)===42&&K+2!==Te){K=Te+1;break e}break;case 10:if(Y===47){K=Te+1;break e}}K=Te}}break;case 91:Y++;case 40:Y++;case 34:case 39:for(;K++<gr&&z.charCodeAt(K)!==Y;);}if(H===0)break;K++}switch(H=z.substring(Pe,K),Z===0&&(Z=(W=W.replace(h,"").trim()).charCodeAt(0)),Z){case 64:switch(0<Ie&&(W=W.replace(A,"")),Y=W.charCodeAt(1),Y){case 100:case 109:case 115:case 45:Ie=B;break;default:Ie=rt}if(H=t(B,Ie,H,Y,y+1),Pe=H.length,0<I&&(Ie=n(rt,W,Ar),Qt=s(3,H,Ie,B,ge,de,Pe,Y,y,D),W=Ie.join(""),Qt!==void 0&&(Pe=(H=Qt.trim()).length)===0&&(Y=0,H="")),0<Pe)switch(Y){case 115:W=W.replace(R,l);case 100:case 109:case 45:H=W+"{"+H+"}";break;case 107:W=W.replace(d,"$1 $2"),H=W+"{"+H+"}",H=we===1||we===2&&o("@"+H,3)?"@-webkit-"+H+"@"+H:"@"+H;break;default:H=W+H,D===112&&(H=(fe+=H,""))}else H="";break;default:H=t(B,n(B,W,Ar),H,D,y+1)}Sl+=H,H=Ar=Ie=Te=Z=0,W="",Y=z.charCodeAt(++K);break;case 125:case 59:if(W=(0<Ie?W.replace(A,""):W).trim(),1<(Pe=W.length))switch(Te===0&&(Z=W.charCodeAt(0),Z===45||96<Z&&123>Z)&&(Pe=(W=W.replace(" ",":")).length),0<I&&(Qt=s(1,W,B,P,ge,de,fe.length,D,y,D))!==void 0&&(Pe=(W=Qt.trim()).length)===0&&(W="\0\0"),Z=W.charCodeAt(0),Y=W.charCodeAt(1),Z){case 0:break;case 64:if(Y===105||Y===99){kl+=W+z.charAt(K);break}default:W.charCodeAt(Pe-1)!==58&&(fe+=i(W,Z,Y,W.charCodeAt(2)))}Ar=Ie=Te=Z=0,W="",Y=z.charCodeAt(++K)}}switch(Y){case 13:case 10:N===47?N=0:1+Z===0&&D!==107&&0<W.length&&(Ie=1,W+="\0"),0<I*F&&s(0,W,B,P,ge,de,fe.length,D,y,D),de=1,ge++;break;case 59:case 125:if(N+_+ue+U===0){de++;break}default:switch(de++,ht=z.charAt(K),Y){case 9:case 32:if(_+U+N===0)switch(Ee){case 44:case 58:case 9:case 32:ht="";break;default:Y!==32&&(ht=" ")}break;case 0:ht="\\0";break;case 12:ht="\\f";break;case 11:ht="\\v";break;case 38:_+N+U===0&&(Ie=Ar=1,ht="\f"+ht);break;case 108:if(_+N+U+De===0&&0<Te)switch(K-Te){case 2:Ee===112&&z.charCodeAt(K-3)===58&&(De=Ee);case 8:Qe===111&&(De=Qe)}break;case 58:_+N+U===0&&(Te=K);break;case 44:N+ue+_+U===0&&(Ie=1,ht+="\r");break;case 34:case 39:N===0&&(_=_===Y?0:_===0?Y:_);break;case 91:_+N+ue===0&&U++;break;case 93:_+N+ue===0&&U--;break;case 41:_+N+U===0&&ue--;break;case 40:if(_+N+U===0){if(Z===0)switch(2*Ee+3*Qe){case 533:break;default:Z=1}ue++}break;case 64:N+ue+_+U+Te+H===0&&(H=1);break;case 42:case 47:if(!(0<_+U+ue))switch(N){case 0:switch(2*Y+3*z.charCodeAt(K+1)){case 235:N=47;break;case 220:Pe=K,N=42}break;case 42:Y===47&&Ee===42&&Pe+2!==K&&(z.charCodeAt(Pe+2)===33&&(fe+=z.substring(Pe,K+1)),ht="",N=0)}}N===0&&(W+=ht)}Qe=Ee,Ee=Y,K++}if(Pe=fe.length,0<Pe){if(Ie=B,0<I&&(Qt=s(2,fe,Ie,P,ge,de,Pe,D,y,D),Qt!==void 0&&(fe=Qt).length===0))return kl+fe+Sl;if(fe=Ie.join(",")+"{"+fe+"}",we*De!==0){switch(we!==2||o(fe,2)||(De=0),De){case 111:fe=fe.replace(x,":-moz-$1")+fe;break;case 112:fe=fe.replace(p,"::-webkit-input-$1")+fe.replace(p,"::-moz-$1")+fe.replace(p,":-ms-input-$1")+fe}De=0}}return kl+fe+Sl}function n(P,B,z){var D=B.trim().split(k);B=D;var y=D.length,U=P.length;switch(U){case 0:case 1:var N=0;for(P=U===0?"":P[0]+" ";N<y;++N)B[N]=r(P,B[N],z).trim();break;default:var ue=N=0;for(B=[];N<y;++N)for(var _=0;_<U;++_)B[ue++]=r(P[_]+" ",D[N],z).trim()}return B}function r(P,B,z){var D=B.charCodeAt(0);switch(33>D&&(D=(B=B.trim()).charCodeAt(0)),D){case 38:return B.replace(f,"$1"+P.trim());case 58:return P.trim()+B.replace(f,"$1"+P.trim());default:if(0<1*z&&0<B.indexOf("\f"))return B.replace(f,(P.charCodeAt(0)===58?"":"$1")+P.trim())}return P+B}function i(P,B,z,D){var y=P+";",U=2*B+3*z+4*D;if(U===944){P=y.indexOf(":",9)+1;var N=y.substring(P,y.length-1).trim();return N=y.substring(0,P).trim()+N+";",we===1||we===2&&o(N,1)?"-webkit-"+N+N:N}if(we===0||we===2&&!o(y,1))return y;switch(U){case 1015:return y.charCodeAt(10)===97?"-webkit-"+y+y:y;case 951:return y.charCodeAt(3)===116?"-webkit-"+y+y:y;case 963:return y.charCodeAt(5)===110?"-webkit-"+y+y:y;case 1009:if(y.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+y+y;case 978:return"-webkit-"+y+"-moz-"+y+y;case 1019:case 983:return"-webkit-"+y+"-moz-"+y+"-ms-"+y+y;case 883:if(y.charCodeAt(8)===45)return"-webkit-"+y+y;if(0<y.indexOf("image-set(",11))return y.replace(he,"$1-webkit-$2")+y;break;case 932:if(y.charCodeAt(4)===45)switch(y.charCodeAt(5)){case 103:return"-webkit-box-"+y.replace("-grow","")+"-webkit-"+y+"-ms-"+y.replace("grow","positive")+y;case 115:return"-webkit-"+y+"-ms-"+y.replace("shrink","negative")+y;case 98:return"-webkit-"+y+"-ms-"+y.replace("basis","preferred-size")+y}return"-webkit-"+y+"-ms-"+y+y;case 964:return"-webkit-"+y+"-ms-flex-"+y+y;case 1023:if(y.charCodeAt(8)!==99)break;return N=y.substring(y.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+N+"-webkit-"+y+"-ms-flex-pack"+N+y;case 1005:return w.test(y)?y.replace(S,":-webkit-")+y.replace(S,":-moz-")+y:y;case 1e3:switch(N=y.substring(13).trim(),B=N.indexOf("-")+1,N.charCodeAt(0)+N.charCodeAt(B)){case 226:N=y.replace(C,"tb");break;case 232:N=y.replace(C,"tb-rl");break;case 220:N=y.replace(C,"lr");break;default:return y}return"-webkit-"+y+"-ms-"+N+y;case 1017:if(y.indexOf("sticky",9)===-1)break;case 975:switch(B=(y=P).length-10,N=(y.charCodeAt(B)===33?y.substring(0,B):y).substring(P.indexOf(":",7)+1).trim(),U=N.charCodeAt(0)+(N.charCodeAt(7)|0)){case 203:if(111>N.charCodeAt(8))break;case 115:y=y.replace(N,"-webkit-"+N)+";"+y;break;case 207:case 102:y=y.replace(N,"-webkit-"+(102<U?"inline-":"")+"box")+";"+y.replace(N,"-webkit-"+N)+";"+y.replace(N,"-ms-"+N+"box")+";"+y}return y+";";case 938:if(y.charCodeAt(5)===45)switch(y.charCodeAt(6)){case 105:return N=y.replace("-items",""),"-webkit-"+y+"-webkit-box-"+N+"-ms-flex-"+N+y;case 115:return"-webkit-"+y+"-ms-flex-item-"+y.replace(T,"")+y;default:return"-webkit-"+y+"-ms-flex-line-pack"+y.replace("align-content","").replace(T,"")+y}break;case 973:case 989:if(y.charCodeAt(3)!==45||y.charCodeAt(4)===122)break;case 931:case 953:if(b.test(P)===!0)return(N=P.substring(P.indexOf(":")+1)).charCodeAt(0)===115?i(P.replace("stretch","fill-available"),B,z,D).replace(":fill-available",":stretch"):y.replace(N,"-webkit-"+N)+y.replace(N,"-moz-"+N.replace("fill-",""))+y;break;case 962:if(y="-webkit-"+y+(y.charCodeAt(5)===102?"-ms-"+y:"")+y,z+D===211&&y.charCodeAt(13)===105&&0<y.indexOf("transform",10))return y.substring(0,y.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+y}return y}function o(P,B){var z=P.indexOf(B===1?":":"{"),D=P.substring(0,B!==3?z:10);return z=P.substring(z+1,P.length-1),M(B!==2?D:D.replace(Q,"$1"),z,B)}function l(P,B){var z=i(B,B.charCodeAt(0),B.charCodeAt(1),B.charCodeAt(2));return z!==B+";"?z.replace(O," or ($1)").substring(4):"("+B+")"}function s(P,B,z,D,y,U,N,ue,_,Z){for(var Y=0,Ee=B,Qe;Y<I;++Y)switch(Qe=Se[Y].call(m,P,Ee,z,D,y,U,N,ue,_,Z)){case void 0:case!1:case!0:case null:break;default:Ee=Qe}if(Ee!==B)return Ee}function u(P){switch(P){case void 0:case null:I=Se.length=0;break;default:if(typeof P=="function")Se[I++]=P;else if(typeof P=="object")for(var B=0,z=P.length;B<z;++B)u(P[B]);else F=!!P|0}return u}function c(P){return P=P.prefix,P!==void 0&&(M=null,P?typeof P!="function"?we=1:(we=2,M=P):we=0),c}function m(P,B){var z=P;if(33>z.charCodeAt(0)&&(z=z.trim()),X=z,z=[X],0<I){var D=s(-1,B,z,z,ge,de,0,0,0,0);D!==void 0&&typeof D=="string"&&(B=D)}var y=t(rt,z,B,0,0);return 0<I&&(D=s(-2,y,z,z,ge,de,y.length,0,0,0),D!==void 0&&(y=D)),X="",De=0,de=ge=1,y}var h=/^\0+/g,A=/[\0\r\f]/g,S=/: */g,w=/zoo|gra/,v=/([,: ])(transform)/g,k=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,x=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,O=/([\s\S]*?);/g,T=/-self|flex-/g,Q=/[^]*?(:[rp][el]a[\w-]+)[^]*/,b=/stretch|:\s*\w+\-(?:conte|avail)/,he=/([^-])(image-set\()/,de=1,ge=1,De=0,we=1,rt=[],Se=[],I=0,M=null,F=0,X="";return m.use=u,m.set=c,e!==void 0&&c(e),m}var wA={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function SA(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var kA=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,kc=SA(function(e){return kA.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),mp={exports:{}},ee={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ce=typeof Symbol=="function"&&Symbol.for,iu=Ce?Symbol.for("react.element"):60103,ou=Ce?Symbol.for("react.portal"):60106,cl=Ce?Symbol.for("react.fragment"):60107,dl=Ce?Symbol.for("react.strict_mode"):60108,fl=Ce?Symbol.for("react.profiler"):60114,pl=Ce?Symbol.for("react.provider"):60109,hl=Ce?Symbol.for("react.context"):60110,lu=Ce?Symbol.for("react.async_mode"):60111,ml=Ce?Symbol.for("react.concurrent_mode"):60111,Al=Ce?Symbol.for("react.forward_ref"):60112,gl=Ce?Symbol.for("react.suspense"):60113,jA=Ce?Symbol.for("react.suspense_list"):60120,vl=Ce?Symbol.for("react.memo"):60115,yl=Ce?Symbol.for("react.lazy"):60116,CA=Ce?Symbol.for("react.block"):60121,EA=Ce?Symbol.for("react.fundamental"):60117,IA=Ce?Symbol.for("react.responder"):60118,PA=Ce?Symbol.for("react.scope"):60119;function nt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case iu:switch(e=e.type,e){case lu:case ml:case cl:case fl:case dl:case gl:return e;default:switch(e=e&&e.$$typeof,e){case hl:case Al:case yl:case vl:case pl:return e;default:return t}}case ou:return t}}}function Ap(e){return nt(e)===ml}ee.AsyncMode=lu;ee.ConcurrentMode=ml;ee.ContextConsumer=hl;ee.ContextProvider=pl;ee.Element=iu;ee.ForwardRef=Al;ee.Fragment=cl;ee.Lazy=yl;ee.Memo=vl;ee.Portal=ou;ee.Profiler=fl;ee.StrictMode=dl;ee.Suspense=gl;ee.isAsyncMode=function(e){return Ap(e)||nt(e)===lu};ee.isConcurrentMode=Ap;ee.isContextConsumer=function(e){return nt(e)===hl};ee.isContextProvider=function(e){return nt(e)===pl};ee.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===iu};ee.isForwardRef=function(e){return nt(e)===Al};ee.isFragment=function(e){return nt(e)===cl};ee.isLazy=function(e){return nt(e)===yl};ee.isMemo=function(e){return nt(e)===vl};ee.isPortal=function(e){return nt(e)===ou};ee.isProfiler=function(e){return nt(e)===fl};ee.isStrictMode=function(e){return nt(e)===dl};ee.isSuspense=function(e){return nt(e)===gl};ee.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===cl||e===ml||e===fl||e===dl||e===gl||e===jA||typeof e=="object"&&e!==null&&(e.$$typeof===yl||e.$$typeof===vl||e.$$typeof===pl||e.$$typeof===hl||e.$$typeof===Al||e.$$typeof===EA||e.$$typeof===IA||e.$$typeof===PA||e.$$typeof===CA)};ee.typeOf=nt;mp.exports=ee;var NA=mp.exports,au=NA,BA={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},RA={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},OA={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},su={};su[au.ForwardRef]=OA;su[au.Memo]=gp;function jc(e){return au.isMemo(e)?gp:su[e.$$typeof]||BA}var TA=Object.defineProperty,zA=Object.getOwnPropertyNames,Cc=Object.getOwnPropertySymbols,LA=Object.getOwnPropertyDescriptor,MA=Object.getPrototypeOf,Ec=Object.prototype;function vp(e,t,n){if(typeof t!="string"){if(Ec){var r=MA(t);r&&r!==Ec&&vp(e,r,n)}var i=zA(t);Cc&&(i=i.concat(Cc(t)));for(var o=jc(e),l=jc(t),s=0;s<i.length;++s){var u=i[s];if(!RA[u]&&!(n&&n[u])&&!(l&&l[u])&&!(o&&o[u])){var c=LA(t,u);try{TA(e,u,c)}catch{}}}}return e}var bA=vp;const FA=qc(bA);function bt(){return(bt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Ic=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},$a=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!hp.typeOf(e)},jo=Object.freeze([]),sn=Object.freeze({});function ii(e){return typeof e=="function"}function Pc(e){return e.displayName||e.name||"Component"}function uu(e){return e&&typeof e.styledComponentId=="string"}var cr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",cu=typeof window<"u"&&"HTMLElement"in window,DA=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function fi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var WA=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&fi(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var s=o;s<l;s++)this.groupSizes[s]=0}for(var u=this.indexOfGroup(n+1),c=0,m=r.length;c<m;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,s=o;s<l;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),Hi=new Map,Co=new Map,Wr=1,Oi=function(e){if(Hi.has(e))return Hi.get(e);for(;Co.has(Wr);)Wr++;var t=Wr++;return Hi.set(e,t),Co.set(t,e),t},GA=function(e){return Co.get(e)},YA=function(e,t){t>=Wr&&(Wr=t+1),Hi.set(e,t),Co.set(t,e)},VA="style["+cr+'][data-styled-version="5.3.9"]',QA=new RegExp("^"+cr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),UA=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},$A=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var s=l.match(QA);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(YA(c,u),UA(e,c,s[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(l)}}},HA=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},yp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){for(var u=s.childNodes,c=u.length;c>=0;c--){var m=u[c];if(m&&m.nodeType===1&&m.hasAttribute(cr))return m}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(cr,"active"),r.setAttribute("data-styled-version","5.3.9");var l=HA();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},XA=function(){function e(n){var r=this.element=yp(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,s=o.length;l<s;l++){var u=o[l];if(u.ownerNode===i)return u}fi(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),_A=function(){function e(n){var r=this.element=yp(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),KA=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Nc=cu,ZA={isServer:!cu,useCSSOMInjection:!DA},xp=function(){function e(n,r,i){n===void 0&&(n=sn),r===void 0&&(r={}),this.options=bt({},ZA,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&cu&&Nc&&(Nc=!1,function(o){for(var l=document.querySelectorAll(VA),s=0,u=l.length;s<u;s++){var c=l[s];c&&c.getAttribute(cr)!=="active"&&($A(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Oi(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(bt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new KA(l):o?new XA(l):new _A(l),new WA(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Oi(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Oi(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Oi(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var s=GA(l);if(s!==void 0){var u=n.names.get(s),c=r.getGroup(l);if(u&&c&&u.size){var m=cr+".g"+l+'[id="'+s+'"]',h="";u!==void 0&&u.forEach(function(A){A.length>0&&(h+=A+",")}),o+=""+c+m+'{content:"'+h+`"}/*!sc*/
`}}}return o}(this)},e}(),qA=/(a)(d)/gi,Bc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ha(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Bc(t%52)+n;return(Bc(t%52)+n).replace(qA,"$1-$2")}var Kn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},wp=function(e){return Kn(5381,e)};function JA(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ii(n)&&!uu(n))return!1}return!0}var e0=wp("5.3.9"),t0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&JA(t),this.componentId=n,this.baseHash=Kn(e0,n),this.baseStyle=r,xp.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=dr(this.rules,t,n,r).join(""),s=Ha(Kn(this.baseHash,l)>>>0);if(!n.hasNameForId(i,s)){var u=r(l,"."+s,void 0,i);n.insertRules(i,s,u)}o.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,m=Kn(this.baseHash,r.hash),h="",A=0;A<c;A++){var S=this.rules[A];if(typeof S=="string")h+=S;else if(S){var w=dr(S,t,n,r),v=Array.isArray(w)?w.join(""):w;m=Kn(m,v+A),h+=v}}if(h){var k=Ha(m>>>0);if(!n.hasNameForId(i,k)){var f=r(h,"."+k,void 0,i);n.insertRules(i,k,f)}o.push(k)}}return o.join(" ")},e}(),n0=/^\s*\/\/.*$/gm,r0=[":","[",".","#"];function i0(e){var t,n,r,i,o=e===void 0?sn:e,l=o.options,s=l===void 0?sn:l,u=o.plugins,c=u===void 0?jo:u,m=new xA(s),h=[],A=function(v){function k(f){if(f)try{v(f+"}")}catch{}}return function(f,d,p,x,C,R,O,T,Q,b){switch(f){case 1:if(Q===0&&d.charCodeAt(0)===64)return v(d+";"),"";break;case 2:if(T===0)return d+"/*|*/";break;case 3:switch(T){case 102:case 112:return v(p[0]+d),"";default:return d+(b===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(k)}}}(function(v){h.push(v)}),S=function(v,k,f){return k===0&&r0.indexOf(f[n.length])!==-1||f.match(i)?v:"."+t};function w(v,k,f,d){d===void 0&&(d="&");var p=v.replace(n0,""),x=k&&f?f+" "+k+" { "+p+" }":p;return t=d,n=k,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),m(f||!k?"":k,x)}return m.use([].concat(c,[function(v,k,f){v===2&&f.length&&f[0].lastIndexOf(n)>0&&(f[0]=f[0].replace(r,S))},A,function(v){if(v===-2){var k=h;return h=[],k}}])),w.hash=c.length?c.reduce(function(v,k){return k.name||fi(15),Kn(v,k.name)},5381).toString():"",w}var Sp=ye.createContext();Sp.Consumer;var kp=ye.createContext(),o0=(kp.Consumer,new xp),Xa=i0();function l0(){return j.useContext(Sp)||o0}function a0(){return j.useContext(kp)||Xa}var jp=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Xa);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return fi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Xa),this.name+t.hash},e}(),s0=/([A-Z])/,u0=/([A-Z])/g,c0=/^ms-/,d0=function(e){return"-"+e.toLowerCase()};function Rc(e){return s0.test(e)?e.replace(u0,d0).replace(c0,"-ms-"):e}var Oc=function(e){return e==null||e===!1||e===""};function dr(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,s=e.length;l<s;l+=1)(i=dr(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Oc(e))return"";if(uu(e))return"."+e.styledComponentId;if(ii(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var u=e(t);return dr(u,t,n,r)}var c;return e instanceof jp?n?(e.inject(n,r),e.getName(r)):e:$a(e)?function m(h,A){var S,w,v=[];for(var k in h)h.hasOwnProperty(k)&&!Oc(h[k])&&(Array.isArray(h[k])&&h[k].isCss||ii(h[k])?v.push(Rc(k)+":",h[k],";"):$a(h[k])?v.push.apply(v,m(h[k],k)):v.push(Rc(k)+": "+(S=k,(w=h[k])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||S in wA?String(w).trim():w+"px")+";"));return A?[A+" {"].concat(v,["}"]):v}(e):e.toString()}var Tc=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ot(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ii(e)||$a(e)?Tc(dr(Ic(jo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Tc(dr(Ic(e,n)))}var f0=function(e,t,n){return n===void 0&&(n=sn),e.theme!==n.theme&&e.theme||t||n.theme},p0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,h0=/(^-|-$)/g;function Kl(e){return e.replace(p0,"-").replace(h0,"")}var Cp=function(e){return Ha(wp(e)>>>0)};function Ti(e){return typeof e=="string"&&!0}var _a=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},m0=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function A0(e,t,n){var r=e[n];_a(t)&&_a(r)?Ep(r,t):e[n]=t}function Ep(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(_a(l))for(var s in l)m0(s)&&A0(e,l[s],s)}return e}var Ip=ye.createContext();Ip.Consumer;var Zl={};function Pp(e,t,n){var r=uu(e),i=!Ti(e),o=t.attrs,l=o===void 0?jo:o,s=t.componentId,u=s===void 0?function(d,p){var x=typeof d!="string"?"sc":Kl(d);Zl[x]=(Zl[x]||0)+1;var C=x+"-"+Cp("5.3.9"+x+Zl[x]);return p?p+"-"+C:C}(t.displayName,t.parentComponentId):s,c=t.displayName,m=c===void 0?function(d){return Ti(d)?"styled."+d:"Styled("+Pc(d)+")"}(e):c,h=t.displayName&&t.componentId?Kl(t.displayName)+"-"+t.componentId:t.componentId||u,A=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,S=t.shouldForwardProp;r&&e.shouldForwardProp&&(S=t.shouldForwardProp?function(d,p,x){return e.shouldForwardProp(d,p,x)&&t.shouldForwardProp(d,p,x)}:e.shouldForwardProp);var w,v=new t0(n,h,r?e.componentStyle:void 0),k=v.isStatic&&l.length===0,f=function(d,p){return function(x,C,R,O){var T=x.attrs,Q=x.componentStyle,b=x.defaultProps,he=x.foldedComponentIds,de=x.shouldForwardProp,ge=x.styledComponentId,De=x.target,we=function(D,y,U){D===void 0&&(D=sn);var N=bt({},y,{theme:D}),ue={};return U.forEach(function(_){var Z,Y,Ee,Qe=_;for(Z in ii(Qe)&&(Qe=Qe(N)),Qe)N[Z]=ue[Z]=Z==="className"?(Y=ue[Z],Ee=Qe[Z],Y&&Ee?Y+" "+Ee:Y||Ee):Qe[Z]}),[N,ue]}(f0(C,j.useContext(Ip),b)||sn,C,T),rt=we[0],Se=we[1],I=function(D,y,U,N){var ue=l0(),_=a0(),Z=y?D.generateAndInjectStyles(sn,ue,_):D.generateAndInjectStyles(U,ue,_);return Z}(Q,O,rt),M=R,F=Se.$as||C.$as||Se.as||C.as||De,X=Ti(F),P=Se!==C?bt({},C,{},Se):C,B={};for(var z in P)z[0]!=="$"&&z!=="as"&&(z==="forwardedAs"?B.as=P[z]:(de?de(z,kc,F):!X||kc(z))&&(B[z]=P[z]));return C.style&&Se.style!==C.style&&(B.style=bt({},C.style,{},Se.style)),B.className=Array.prototype.concat(he,ge,I!==ge?I:null,C.className,Se.className).filter(Boolean).join(" "),B.ref=M,j.createElement(F,B)}(w,d,p,k)};return f.displayName=m,(w=ye.forwardRef(f)).attrs=A,w.componentStyle=v,w.displayName=m,w.shouldForwardProp=S,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):jo,w.styledComponentId=h,w.target=r?e.target:e,w.withComponent=function(d){var p=t.componentId,x=function(R,O){if(R==null)return{};var T,Q,b={},he=Object.keys(R);for(Q=0;Q<he.length;Q++)T=he[Q],O.indexOf(T)>=0||(b[T]=R[T]);return b}(t,["componentId"]),C=p&&p+"-"+(Ti(d)?d:Kl(Pc(d)));return Pp(d,bt({},x,{attrs:A,componentId:C}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?Ep({},e.defaultProps,d):d}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&FA(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var Ka=function(e){return function t(n,r,i){if(i===void 0&&(i=sn),!hp.isValidElementType(r))return fi(1,String(r));var o=function(){return n(r,i,Ot.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,bt({},i,{},l))},o.attrs=function(l){return t(n,r,bt({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(Pp,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Ka[e]=Ka(e)});function mn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Ot.apply(void 0,[e].concat(n)).join(""),o=Cp(i);return new jp(o,i)}const g=Ka,Er=48,g0=({color:e="currentColor",direction:t="left",distance:n="md",duration:r=.4,easing:i="cubic-bezier(0, 0, 0, 1)",hideOutline:o=!0,label:l,lines:s=3,onToggle:u,render:c,rounded:m=!1,size:h=32,toggle:A,toggled:S,disabled:w=!1,animateOnMount:v=!1})=>{const[k,f]=j.useState(!1),[d,p]=j.useState(!1);j.useEffect(()=>{p(!0)},[]);const x=Math.max(12,Math.min(Er,h)),C=Math.round((Er-x)/2),R=x/12,O=Math.round(R),Q=x/(s*((n==="lg"?.25:n==="sm"?.75:.5)+(s===3?1:1.25))),b=Math.round(Q),he=O*s+b*(s-1),de=Math.round((Er-he)/2),ge=s===3?n==="lg"?4.0425:n==="sm"?5.1625:4.6325:n==="lg"?6.7875:n==="sm"?8.4875:7.6675,De=(R-O+(Q-b))/(s===3?1:2),we=parseFloat((x/ge-De/(4/3)).toFixed(2)),rt=Math.max(0,r),Se={cursor:w?"not-allowed":"pointer",height:`${Er}px`,position:"relative",transition:`${rt}s ${i}`,userSelect:"none",width:`${Er}px`},I={background:e,height:`${O}px`,left:`${C}px`,position:"absolute"};o&&(Se.outline="none"),m&&(I.borderRadius="9em");const M=()=>{const B=S!==void 0?S:k;return v&&!d?!B:B},F=A||f,X=M();return c({barHeight:O,barStyles:I,burgerStyles:Se,easing:i,handler:()=>{F(!X),typeof u=="function"&&u(!X)},isLeft:t==="left",isToggled:X,label:l,margin:b,move:we,time:rt,topOffset:de,width:x})};function Za(){return Za=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Za.apply(this,arguments)}const v0=e=>ye.createElement(g0,Za({},e,{render:t=>ye.createElement("div",{className:"hamburger-react","aria-label":t.label,"aria-expanded":t.isToggled,onClick:e.disabled?void 0:t.handler,onKeyUp:e.disabled?void 0:n=>n.key==="Enter"&&t.handler(),role:"button",style:{...t.burgerStyles,transform:`${t.isToggled?`rotate(${180*(t.isLeft?-1:1)}deg)`:"none"}`},tabIndex:0},ye.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset}px`,transition:`${t.time}s ${t.easing}`,transform:`${t.isToggled?`rotate(${45*(t.isLeft?-1:1)}deg) translate(${t.move*(t.isLeft?-1:1)}px, ${t.move}px)`:"none"}`}}),ye.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset+t.barHeight+t.margin}px`,transition:`${t.time}s ${t.easing}`,opacity:`${t.isToggled?"0":"1"}`}}),ye.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset+t.barHeight*2+t.margin*2}px`,transition:`${t.time}s ${t.easing}`,transform:`${t.isToggled?`rotate(${45*(t.isLeft?1:-1)}deg) translate(${t.move*(t.isLeft?-1:1)}px, ${t.move*-1}px)`:"none"}`}}))}));/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oi.apply(this,arguments)}var qt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(qt||(qt={}));const zc="popstate";function y0(e){e===void 0&&(e={});function t(i,o){let{pathname:l="/",search:s="",hash:u=""}=On(i.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),qa("",{pathname:l,search:s,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let l=i.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");s=c===-1?u:u.slice(0,c)}return s+"#"+(typeof o=="string"?o:Eo(o))}function r(i,o){du(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return w0(t,n,r,e)}function Ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function du(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function x0(){return Math.random().toString(36).substr(2,8)}function Lc(e,t){return{usr:e.state,key:e.key,idx:t}}function qa(e,t,n,r){return n===void 0&&(n=null),oi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?On(t):t,{state:n,key:t&&t.key||r||x0()})}function Eo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function On(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function w0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=qt.Pop,u=null,c=m();c==null&&(c=0,l.replaceState(oi({},l.state,{idx:c}),""));function m(){return(l.state||{idx:null}).idx}function h(){s=qt.Pop;let k=m(),f=k==null?null:k-c;c=k,u&&u({action:s,location:v.location,delta:f})}function A(k,f){s=qt.Push;let d=qa(v.location,k,f);n&&n(d,k),c=m()+1;let p=Lc(d,c),x=v.createHref(d);try{l.pushState(p,"",x)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(x)}o&&u&&u({action:s,location:v.location,delta:1})}function S(k,f){s=qt.Replace;let d=qa(v.location,k,f);n&&n(d,k),c=m();let p=Lc(d,c),x=v.createHref(d);l.replaceState(p,"",x),o&&u&&u({action:s,location:v.location,delta:0})}function w(k){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof k=="string"?k:Eo(k);return d=d.replace(/ $/,"%20"),Ae(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let v={get action(){return s},get location(){return e(i,l)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(zc,h),u=k,()=>{i.removeEventListener(zc,h),u=null}},createHref(k){return t(i,k)},createURL:w,encodeLocation(k){let f=w(k);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:A,replace:S,go(k){return l.go(k)}};return v}var Mc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Mc||(Mc={}));function S0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?On(t):t,i=fu(r.pathname||"/",n);if(i==null)return null;let o=Np(e);k0(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let u=L0(i);l=O0(o[s],u)}return l}function Np(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let u={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(Ae(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=un([r,u.relativePath]),m=n.concat(u);o.children&&o.children.length>0&&(Ae(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Np(o.children,t,m,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:B0(c,o.index),routesMeta:m})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let u of Bp(o.path))i(o,l,u)}),t}function Bp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Bp(r.join("/")),s=[];return s.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function k0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:R0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const j0=/^:[\w-]+$/,C0=3,E0=2,I0=1,P0=10,N0=-2,bc=e=>e==="*";function B0(e,t){let n=e.split("/"),r=n.length;return n.some(bc)&&(r+=N0),t&&(r+=E0),n.filter(i=>!bc(i)).reduce((i,o)=>i+(j0.test(o)?C0:o===""?I0:P0),r)}function R0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function O0(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let s=n[l],u=l===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",m=T0({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c);if(!m)return null;Object.assign(r,m.params);let h=s.route;o.push({params:r,pathname:un([i,m.pathname]),pathnameBase:D0(un([i,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(i=un([i,m.pathnameBase]))}return o}function T0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=z0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,m,h)=>{let{paramName:A,isOptional:S}=m;if(A==="*"){let v=s[h]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const w=s[h];return S&&!w?c[A]=void 0:c[A]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function z0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),du(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function L0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return du(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function fu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function M0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?On(e):e;return{pathname:n?n.startsWith("/")?n:b0(n,t):t,search:W0(r),hash:G0(i)}}function b0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ql(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function F0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Rp(e,t){let n=F0(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Op(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=On(e):(i=oi({},e),Ae(!i.pathname||!i.pathname.includes("?"),ql("?","pathname","search",i)),Ae(!i.pathname||!i.pathname.includes("#"),ql("#","pathname","hash",i)),Ae(!i.search||!i.search.includes("#"),ql("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let h=t.length-1;if(!r&&l.startsWith("..")){let A=l.split("/");for(;A[0]==="..";)A.shift(),h-=1;i.pathname=A.join("/")}s=h>=0?t[h]:"/"}let u=M0(i,s),c=l&&l!=="/"&&l.endsWith("/"),m=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||m)&&(u.pathname+="/"),u}const un=e=>e.join("/").replace(/\/\/+/g,"/"),D0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),W0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,G0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Y0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Tp=["post","put","patch","delete"];new Set(Tp);const V0=["get",...Tp];new Set(V0);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function li(){return li=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},li.apply(this,arguments)}const pu=j.createContext(null),Q0=j.createContext(null),Tn=j.createContext(null),xl=j.createContext(null),zn=j.createContext({outlet:null,matches:[],isDataRoute:!1}),zp=j.createContext(null);function U0(e,t){let{relative:n}=t===void 0?{}:t;pi()||Ae(!1);let{basename:r,navigator:i}=j.useContext(Tn),{hash:o,pathname:l,search:s}=Mp(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:un([r,l])),i.createHref({pathname:u,search:s,hash:o})}function pi(){return j.useContext(xl)!=null}function mr(){return pi()||Ae(!1),j.useContext(xl).location}function Lp(e){j.useContext(Tn).static||j.useLayoutEffect(e)}function $0(){let{isDataRoute:e}=j.useContext(zn);return e?og():H0()}function H0(){pi()||Ae(!1);let e=j.useContext(pu),{basename:t,future:n,navigator:r}=j.useContext(Tn),{matches:i}=j.useContext(zn),{pathname:o}=mr(),l=JSON.stringify(Rp(i,n.v7_relativeSplatPath)),s=j.useRef(!1);return Lp(()=>{s.current=!0}),j.useCallback(function(c,m){if(m===void 0&&(m={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let h=Op(c,JSON.parse(l),o,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:un([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,l,o,e])}function Mp(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(Tn),{matches:i}=j.useContext(zn),{pathname:o}=mr(),l=JSON.stringify(Rp(i,r.v7_relativeSplatPath));return j.useMemo(()=>Op(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function X0(e,t){return _0(e,t)}function _0(e,t,n,r){pi()||Ae(!1);let{navigator:i}=j.useContext(Tn),{matches:o}=j.useContext(zn),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=mr(),m;if(t){var h;let k=typeof t=="string"?On(t):t;u==="/"||(h=k.pathname)!=null&&h.startsWith(u)||Ae(!1),m=k}else m=c;let A=m.pathname||"/",S=A;if(u!=="/"){let k=u.replace(/^\//,"").split("/");S="/"+A.replace(/^\//,"").split("/").slice(k.length).join("/")}let w=S0(e,{pathname:S}),v=eg(w&&w.map(k=>Object.assign({},k,{params:Object.assign({},s,k.params),pathname:un([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:un([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),o,n,r);return t&&v?j.createElement(xl.Provider,{value:{location:li({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:qt.Pop}},v):v}function K0(){let e=ig(),t=Y0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,o)}const Z0=j.createElement(K0,null);class q0 extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(zn.Provider,{value:this.props.routeContext},j.createElement(zp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function J0(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(pu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(zn.Provider,{value:t},r)}function eg(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let m=l.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);m>=0||Ae(!1),l=l.slice(0,Math.min(l.length,m+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<l.length;m++){let h=l[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=m),h.route.id){let{loaderData:A,errors:S}=n,w=h.route.loader&&A[h.route.id]===void 0&&(!S||S[h.route.id]===void 0);if(h.route.lazy||w){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((m,h,A)=>{let S,w=!1,v=null,k=null;n&&(S=s&&h.route.id?s[h.route.id]:void 0,v=h.route.errorElement||Z0,u&&(c<0&&A===0?(lg("route-fallback",!1),w=!0,k=null):c===A&&(w=!0,k=h.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,A+1)),d=()=>{let p;return S?p=v:w?p=k:h.route.Component?p=j.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,j.createElement(J0,{match:h,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||A===0)?j.createElement(q0,{location:n.location,revalidation:n.revalidation,component:v,error:S,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var bp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(bp||{}),Io=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Io||{});function tg(e){let t=j.useContext(pu);return t||Ae(!1),t}function ng(e){let t=j.useContext(Q0);return t||Ae(!1),t}function rg(e){let t=j.useContext(zn);return t||Ae(!1),t}function Fp(e){let t=rg(),n=t.matches[t.matches.length-1];return n.route.id||Ae(!1),n.route.id}function ig(){var e;let t=j.useContext(zp),n=ng(Io.UseRouteError),r=Fp(Io.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function og(){let{router:e}=tg(bp.UseNavigateStable),t=Fp(Io.UseNavigateStable),n=j.useRef(!1);return Lp(()=>{n.current=!0}),j.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,li({fromRouteId:t},o)))},[e,t])}const Fc={};function lg(e,t,n){!t&&!Fc[e]&&(Fc[e]=!0)}function bn(e){Ae(!1)}function ag(e){let{basename:t="/",children:n=null,location:r,navigationType:i=qt.Pop,navigator:o,static:l=!1,future:s}=e;pi()&&Ae(!1);let u=t.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:o,static:l,future:li({v7_relativeSplatPath:!1},s)}),[u,s,o,l]);typeof r=="string"&&(r=On(r));let{pathname:m="/",search:h="",hash:A="",state:S=null,key:w="default"}=r,v=j.useMemo(()=>{let k=fu(m,u);return k==null?null:{location:{pathname:k,search:h,hash:A,state:S,key:w},navigationType:i}},[u,m,h,A,S,w,i]);return v==null?null:j.createElement(Tn.Provider,{value:c},j.createElement(xl.Provider,{children:n,value:v}))}function sg(e){let{children:t,location:n}=e;return X0(Ja(t),n)}new Promise(()=>{});function Ja(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let o=[...t,i];if(r.type===j.Fragment){n.push.apply(n,Ja(r.props.children,o));return}r.type!==bn&&Ae(!1),!r.props.index||!r.props.children||Ae(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ja(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function es(){return es=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},es.apply(this,arguments)}function ug(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function cg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function dg(e,t){return e.button===0&&(!t||t==="_self")&&!cg(e)}const fg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],pg="6";try{window.__reactRouterVersion=pg}catch{}const hg="startTransition",Dc=lh[hg];function mg(e){let{basename:t,children:n,future:r,window:i}=e,o=j.useRef();o.current==null&&(o.current=y0({window:i,v5Compat:!0}));let l=o.current,[s,u]=j.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},m=j.useCallback(h=>{c&&Dc?Dc(()=>u(h)):u(h)},[u,c]);return j.useLayoutEffect(()=>l.listen(m),[l,m]),j.createElement(ag,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const Ag=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,An=j.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:u,to:c,preventScrollReset:m,unstable_viewTransition:h}=t,A=ug(t,fg),{basename:S}=j.useContext(Tn),w,v=!1;if(typeof c=="string"&&gg.test(c)&&(w=c,Ag))try{let p=new URL(window.location.href),x=c.startsWith("//")?new URL(p.protocol+c):new URL(c),C=fu(x.pathname,S);x.origin===p.origin&&C!=null?c=C+x.search+x.hash:v=!0}catch{}let k=U0(c,{relative:i}),f=vg(c,{replace:l,state:s,target:u,preventScrollReset:m,relative:i,unstable_viewTransition:h});function d(p){r&&r(p),p.defaultPrevented||f(p)}return j.createElement("a",es({},A,{href:w||k,onClick:v||o?r:d,ref:n,target:u}))});var Wc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Wc||(Wc={}));var Gc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gc||(Gc={}));function vg(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s}=t===void 0?{}:t,u=$0(),c=mr(),m=Mp(e,{relative:l});return j.useCallback(h=>{if(dg(h,n)){h.preventDefault();let A=r!==void 0?r:Eo(c)===Eo(m);u(e,{replace:A,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s})}},[c,u,m,r,i,n,e,o,l,s])}const ts="/portfolio/assets/paulEvansCreativeLogo-720c0c2c.avif",yg=g.nav`
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
`,xg=g.div`
  width: 300px;
  height: 100%;

  @media screen and (max-width: 478px) {
    width: 100px;
  }
`,wg=g.div`
  display: flex;

  @media screen and (max-width: 960px) {
    width: 100%;

    justify-content: center;
    margin-bottom: 4em;
  }
`,Sg=g.img`
  text-align: center;
  width: 70px;
  margin-top: 0em;

  @media screen and (max-width: 960px) {
    margin-top: 1.5em;
  }

  @media screen and (max-width: 767px) {
    margin-top: 1em;
  }
`,kg=g.img`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    margin-top: 100px;
    width: 100px;
  }
`,jg=g.div`
  display: flex;
  width: 600px;
  height: 100%;
  padding-left: 0.5em;
  text-align: left;

  @media screen and (max-width: 767px) {
    padding-left: 0em;
  }
`,Cg=g.div`
  padding-left: 1em;
  padding-top: 0.5em;
  
  @media screen and (max-width: 1080px) {
    padding-top: 0.5em;
    }

  @media screen and (max-width: 960px) {
    padding-top: 2em;
  }

  @media screen and (max-width: 767px) {
    padding-top: 1.5em;
  }

  @media screen and (max-width: 478px) {
    visibility: hidden;
  }

  &:hover {
    color: var(--main-button-hover-color);
  }
`,Eg=g.ul`
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
`,Ig=g(An)`
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
`,Pg=g.a`
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
`,Ng=g.div`
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
`,Bg=({footerRef:e})=>{const t=mr(),[n,r]=j.useState(!1),[i,o]=j.useState(t.pathname),[l,s]=j.useState(!1),[u,c]=j.useState(window.pageYOffset),[m,h]=j.useState(!0);j.useEffect(()=>{o(t.pathname);const v=()=>{const k=window.pageYOffset;h(u>k||k<10),c(k)};return window.addEventListener("scroll",v),()=>window.removeEventListener("scroll",v)},[t.pathname,u]);const A=()=>{e.current&&e.current.scrollIntoView({behavior:"smooth"}),r(!1),s(!1)},S=()=>{r(!1),s(!1)},w=[{id:1,to:"/",text:"Home"},{id:2,to:"/casestudies",text:"Case Studies"},{id:3,to:"https://www.paulevans-dop.com/",text:"Cinematography",isExternal:!0},{id:4,to:"/about",text:"About"},{id:5,to:"#",text:"Contact",onClick:A}];return a.jsxs(yg,{visible:m,children:[a.jsx(xg,{children:a.jsx(An,{to:"/",onClick:S,children:a.jsxs(jg,{children:[a.jsx(Sg,{src:ts,alt:"the letters P and E merged together to form the logo Paul Evans Creative"}),a.jsxs(Cg,{children:[a.jsx("h1",{children:"Paul Evans"}),a.jsx("h1",{children:"Experience Designer"})]})]})})}),a.jsxs(Eg,{open:n,children:[w.map(v=>v.isExternal?a.jsx(Pg,{href:v.to,onClick:v.onClick||S,className:i===v.to?"active":"",children:v.text},v.id):a.jsx(Ig,{to:v.to,onClick:v.onClick||S,className:i===v.to?"active":"",children:v.text},v.id)),a.jsx(wg,{children:a.jsx(kg,{src:ts,alt:"the letters P and E merged together to form the logo Paul Evans Creative"})})]}),a.jsx(Ng,{children:a.jsx("div",{onClick:()=>{r(!n),s(!l)},children:a.jsx(v0,{toggled:l})})})]})},Yc="/portfolio/assets/showcase1-4574d875.mp4",Rg=e=>{const t=document.createElement("video");t.src=e,t.preload="auto",t.load()},Og=g.div`
  grid-area: cinema;
  display: inline-block;
  width: 100%;
`,Po=g.p`
  font-size: 16px;
  display: none;
`,ns=g.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 0em 2em 0.5em 2em;

  transform: translateY(46%); /* Initially positioned off the bottom */
  transition: transform 0.5s ease-in-out;

  @media (max-width: 960px) {
    transform: translateY(42%);
  }

  @media (max-width: 478px) {
    padding: 0em 2em 0.5em 1em;
  }
`,Tg=g.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  aspect-ratio: 5 / 3;
  font-size: 1.2rem;
  overflow: hidden;

  &:hover ${ns} {
    transform: translateY(0%); /* Slide up into view */
    background-color: #060606ac;
    justify-content: center;
  }

  &:hover ${Po} {
    display: flex;
  }

  @media (min-width: 2050px) {
    aspect-ratio: 5 / 3;
  }

  @media (max-width: 960px) {
    &:hover ${ns} {
      transform: translateY(42%);
      background-color: transparent;
    }

    &:hover ${Po} {
      display: none;
    }
  }
`,zg=g.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
`,Lg=g.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000056;
`,Mg=g.div`
  &:hover {
    color: var(--main-button-hover-color);
  }
`;function bg(e){return j.useEffect(()=>{Rg(Yc)},[]),a.jsx(Og,{children:a.jsx("a",{href:"https://paulevans-dop.com/",target:"_blank",rel:"noopener noreferrer",children:a.jsxs(Tg,{children:[a.jsx(zg,{src:Yc,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A showreel showing clips from different productions."}),a.jsx(Lg,{children:a.jsxs(ns,{children:[a.jsx("h2",{children:"Cinematography"}),a.jsx(Po,{children:"Member of fsf, Föreningen Severiges Filmfotografer (The Association of Swedish Film Cinematographers). Working in Narrative, Commercials, Music Videos and Still Photography."}),a.jsx(Mg,{children:a.jsx(Po,{children:"See work .."})})]})})]})})})}const Fg="/portfolio/assets/uxUiImg-c4944f62.avif",Dg=g.div`
  grid-area: ux;
  display: inline-block;
  width: 100%;
`,No=g.p`
  font-size: 16px;
  display: none;
`,rs=g.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 0em 2em 0.5em 2em;

  transform: translateY(42%); /* Initially positioned off the bottom */
  transition: transform 0.5s ease-in-out;

  @media (max-width: 478px) {
    padding: 0em 2em 0.5em 1em;
  }
`,Wg=g.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  aspect-ratio: 16 / 10;
  font-size: 1.2rem;
  overflow: hidden;

  &:hover ${rs} {
    transform: translateY(0%); /* Slide up into view */
    background-color: #060606ac;
    justify-content: center;
  }

  &:hover ${No} {
    display: flex;
  }

  @media (min-width: 2050px) {
    aspect-ratio: 16 / 12;
  }

  @media (max-width: 960px) {
    &:hover ${rs} {
      transform: translateY(42%);
      background-color: transparent;
    }

    &:hover ${No} {
      display: none;
    }
  }
`,Gg=g.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 478px) {
    height: 500px;
  }
`,Yg=g.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000056;
`,Vg=g.div`
  &:hover {
    color: var(--main-button-hover-color);
  }
`,Qg=()=>a.jsx(Dg,{children:a.jsx(An,{to:"/casestudies",children:a.jsxs(Wg,{children:[a.jsx(Gg,{src:Fg,alt:"Mobile prototype frames."}),a.jsx(Yg,{children:a.jsxs(rs,{children:[a.jsx("h2",{children:"UX Case Studies"}),a.jsx(No,{children:"As a UX/UI designer with storytelling expertise, I create engaging, user-focused experiences that enhance usability and elevate brand impact."}),a.jsx(Vg,{children:a.jsx(No,{children:"See case studies .."})})]})})]})})}),Vc="/portfolio/assets/AIReel-9fb26f3d.mp4",Ug=e=>{const t=document.createElement("video");t.src=e,t.preload="auto",t.load()},$g=g.div`
  grid-area: ai;
  display: flex;
  align-self: flex-end;
  width: 100%;
`,Bo=g.p`
  font-size: 16px;
  display: none;
`,is=g.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 0em 2em 0.5em 2em;

  transform: translateY(42%); /* Initially positioned off the bottom */
  transition: transform 0.5s ease-in-out;

  @media (max-width: 478px) {
    padding: 0em 2em 0.5em 1em;
  }
`,Hg=g.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  aspect-ratio: 16 / 9;
  font-size: 1.2rem;
  overflow: hidden;

  &:hover ${is} {
    transform: translateY(0%); /* Slide up into view */
    background-color: #060606ac;
    justify-content: center;
  }

  &:hover ${Bo} {
    display: flex;
  }

  @media (min-width: 2050px) {
    aspect-ratio: 16 / 12;
  }

  @media (max-width: 960px) {
    &:hover ${is} {
      transform: translateY(42%);
      background-color: transparent;
    }

    &:hover ${Bo} {
      display: none;
    }
  }
`,Xg=g.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
`,_g=g.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000056;
`,Kg=g.div`
  &:hover {
    color: var(--main-button-hover-color);
  }
`;function Zg(e){return j.useEffect(()=>{Ug(Vc)},[]),a.jsx($g,{children:a.jsx(An,{to:"/casestudies",children:a.jsxs(Hg,{children:[a.jsx(Xg,{src:Vc,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A background video showing various moving images created with ai."}),a.jsx(_g,{children:a.jsxs(is,{children:[a.jsx("h2",{children:"AI Case Studies"}),a.jsx(Bo,{children:"I see AI not as a threat but as an opportunity. Though still evolving, AI is rapidly becoming a key tool for creating final content for brands."}),a.jsx(Kg,{children:a.jsx(Bo,{children:"See LinkedIn case studies .."})})]})})]})})})}const qg="/portfolio/assets/Midjourney-logo-7fec8e27.avif",Jg="data:image/avif;base64,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",e1="data:image/avif;base64,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",t1="data:image/avif;base64,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",n1=mn`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,r1=g.div`
  grid-area: design;
  display: inline-block;
  width: 100%;
`,i1=g.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  text-align: left;
  width: 90%;
  height: 100%;
  padding: 0em 2em 0.5em 2em;

  @media (max-width: 478px) {
    padding: 0em 2em 0.5em 1em;
  }
`,o1=g.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  aspect-ratio: 16 / 9;
  font-size: 1.2rem;
  overflow: hidden;
  background-color: var(--main-hero-backgroundcolor);
`,l1=g.div`
  display: grid;
  row-gap: 40px;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: auto;
  padding-top: 48px;
  padding-left: 40px;

  @media screen and (max-width: 478px) {
    row-gap: 16px;
  }

  @media screen and (max-width: 400px) {
    padding-left: 40px;
  }
`,zi=g.img`
  width: 60%;
  height: auto;
  animation: ${n1} 3s ease-in-out infinite;

  @media screen and (max-width: 478px) {
    width: 40%;
  }
`,a1=()=>a.jsx(r1,{children:a.jsxs(o1,{children:[a.jsxs(l1,{children:[a.jsx(zi,{src:Jg,alt:"Figma Logo."}),a.jsx(zi,{src:qg,alt:"Midjourney Logo."}),a.jsx(zi,{src:e1,alt:"Runway Logo."}),a.jsx(zi,{src:t1,alt:"Photoshop Logo."})]}),a.jsx(i1,{children:a.jsx("h2",{children:"Design Tools"})})]})}),s1="data:image/avif;base64,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",u1="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAGNbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAsaWxvYwAAAABEAAACAAEAAAABAAADiAAAAfAAAgAAAAEAAAG1AAAB0wAAAEJpaW5mAAAAAAACAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAAAaaW5mZQIAAAAAAgAAYXYwMUFscGhhAAAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAAw2lwcnAAAACdaXBjbwAAABRpc3BlAAAAAAAAAHgAAAB4AAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQBBYYHAAADy21kYXQSAAoGGBm792FQMsYDEgAKKFDYAsLyjFo30pTtGU3AprQDWuPWfiKO+UiJ6EzD+II/WS4l4BjmY2ofsD4UVg0FduFHPfdGebqmDbZogjz8NVmGLNmvd1wZBili3DkP5CI2o5pZTYFM4gKz8agxQATWZ1TlrNqXta5vvfgPNjGiIZtDUOGwrXNnHLDVjvkLfxMBwqbR0m2IbPrNONVikzkKkyvUc28tZ0OyUJpViZEa6JafpNNpkcjPfAqWweGQn/GcVnzk0Yoqyx10vZ8PizT1YVGcXlyZK/CQWXX1FhfNvTy5B24MWdf7MYW1yiLPyoN770KqUQhYQ4qRESByRLLmnrwEp5hckW1jCOGDkP0LY/ntYGOUyA5bLZqmNySV9t5XOWdZ4GdE+R8FXeS1rBb0B22SeIQg1USJH0KWoUcLH2qF8BXOV/ZSmatXYza1poj526IoyW+Dh7DTvUka0T/SSTrr4EWAIEO7rbAjp4/wR7gEy3QOsWMd7tPNE0tAbaJj3XVDYfXVQiTrmT9N57UyC0p+sSo9LNlVQ9f83M9WtrTbCdfKSccpekK4r/kSVCw09VdOtqfRt8xeT/Ktw3MRZIN2BQi7zkUx8XtpTYEi88rSMhIACgkYGbv3YIEBA0Iy4ANEgACiiihQ1/8mS+0VYnR6q4fJskn/zmz5r8/HO5RC/jcpiT7EXgL7nkn1z3wNWGtgLDEtWNwmPHhYKeugM5Qo0tp0EfAf4j3dOIJc8xkYorcoGN9MkydGBjENigCMQaXlYSXwkN070NiXYlB4ejGnMubTT8WLIWAbiS0EttIlksRTP0XNGN3mRVxR52JrG7VnTo2JXBQf0edMgT7qZtcAmCm7R+YX21UGxCrtNNWyv2vXC8EzRhHwjHaQBaTIc5wf/quoIkhCrJDKkLUWjVdkg6zy11aYNP8qwVMoGr0Fjm+qkqpGDa+iDYUqrRafPaZob8256SRAguMSThE+ks7O0ONlOFENmYyuAsuXbV1oni9V8AH0be/2sXschwRldONXLFzd24TiflNcG96KQ50n9/lAWz8JQwXpIhZkCfjnn////hk7J0GInAd03cB+TSFkV4iNo68ldi91rtW9YbMkMDzm/gnBauTH7fEaUrKs/X+hgaO45zjMNMko+4tM5vRVcakZfbISHhY/O4ul7PXExhgHNvN3ildIQ+whdE57JqjcorGtGkh8cVXVSGocklKhtQZw/ZyMEl5HxqimrgpWe26RkJCJ82t6vySxwJNWgq26QWi///PIQydTjAZ1ZTA=",c1="/portfolio/assets/githubImg-42efc61b.avif",d1="data:image/avif;base64,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",f1="data:image/avif;base64,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",p1="data:image/avif;base64,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",h1=mn`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,m1=g.div`
  grid-area: frontend;
  display: flex;
  align-self: flex-end;
  width: 100%;
`,A1=g.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  text-align: left;
  width: 90%;
  min-height: 100%;
  padding: 0em 2em 0.5em 2em;

  @media (max-width: 478px) {
    padding: 0em 2em 0.5em 1em;
  }
`,g1=g.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  aspect-ratio: 16 / 10;
  font-size: 1.2rem;
  overflow: hidden;
  background-color: var(--main-hero-backgroundcolor);
`,v1=g.div`
  display: grid;
  width: 100%;
  height: 100%;
  column-gap: 40px;
  grid-template-columns: 25% 25% 25%;
  grid-template-rows: auto;
  padding-top: 44px;
  padding-left: 82px;
  align-self: center;

  @media screen and (max-width: 478px) {
    row-gap: 16px;
  }

  @media screen and (max-width: 400px) {
    padding-left: 40px;
  }
`,Mn=g.img`
  width: 54%;
  height: auto;
  animation: ${h1} 3s ease-in-out infinite;

  @media screen and (max-width: 478px) {
    width: 40%;
  }
`,y1=()=>a.jsx(m1,{children:a.jsxs(g1,{children:[a.jsxs(v1,{children:[a.jsx(Mn,{src:s1,alt:"React Logo."}),a.jsx(Mn,{src:u1,alt:"Webflow Logo."}),a.jsx(Mn,{src:c1,alt:"GitHub Logo."}),a.jsx(Mn,{src:d1,alt:"HTML Logo."}),a.jsx(Mn,{src:f1,alt:"CSS Logo."}),a.jsx(Mn,{src:p1,alt:"Javascript Logo."})]}),a.jsx(A1,{children:a.jsx("h2",{children:"Frontend Tools"})})]})}),x1="/portfolio/assets/lipusplus_brand_film_hammarby-2024_short-ef8fdbe1.mp4",Qc="/portfolio/assets/lipusplus_brand_film_hammarby-2024-c0930dc4.mp4";var Dp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},os=ye.createContext&&ye.createContext(Dp),w1=["attr","size","title"];function S1(e,t){if(e==null)return{};var n=k1(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function k1(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Ro(){return Ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ro.apply(this,arguments)}function Uc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Oo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Uc(Object(n),!0).forEach(function(r){j1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Uc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function j1(e,t,n){return t=C1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C1(e){var t=E1(e,"string");return typeof t=="symbol"?t:t+""}function E1(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Wp(e){return e&&e.map((t,n)=>ye.createElement(t.tag,Oo({key:n},t.attr),Wp(t.child)))}function gn(e){return t=>ye.createElement(I1,Ro({attr:Oo({},e.attr)},t),Wp(e.child))}function I1(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=S1(e,w1),s=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),ye.createElement("svg",Ro({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:u,style:Oo(Oo({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&ye.createElement("title",null,o),e.children)};return os!==void 0?ye.createElement(os.Consumer,null,n=>t(n)):t(Dp)}function P1(e){return gn({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function N1(e){return gn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM21.3 229.2H21c.1-.1.2-.3.3-.4zM97 319.8H64V192h33zm113.2 0h-28.7v-86.4l-11.6 86.4h-20.6l-12.2-84.5v84.5h-29V192h42.8c3.3 19.8 6 39.9 8.7 59.9l7.6-59.9h43zm11.4 0V192h24.6c17.6 0 44.7-1.6 49 20.9 1.7 7.6 1.4 16.3 1.4 24.4 0 88.5 11.1 82.6-75 82.5zm160.9-29.2c0 15.7-2.4 30.9-22.2 30.9-9 0-15.2-3-20.9-9.8l-1.9 8.1h-29.8V192h31.7v41.7c6-6.5 12-9.2 20.9-9.2 21.4 0 22.2 12.8 22.2 30.1zM265 229.9c0-9.7 1.6-16-10.3-16v83.7c12.2.3 10.3-8.7 10.3-18.4zm85.5 26.1c0-5.4 1.1-12.7-6.2-12.7-6 0-4.9 8.9-4.9 12.7 0 .6-1.1 39.6 1.1 44.7.8 1.6 2.2 2.4 3.8 2.4 7.8 0 6.2-9 6.2-14.4z"},child:[]}]})(e)}function B1(e){return gn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function R1(e){return gn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function Gp(e){return gn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"},child:[]}]})(e)}function O1(e){return gn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"},child:[]}]})(e)}function T1(e){return gn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"},child:[]}]})(e)}const z1=g.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-top: 30px;
  color: var(--main-button-color);

  @media screen and (max-width: 650px) {
    padding-top: 0px;
  }
`,L1=g.div`
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
`,M1=g.p`
  color: var(--main-font-color);
  font-size: 16px;
  font-weight: 600;

  @media screen and (max-width: 650px) {
    margin-top: 8px;
  }

  @media (max-width: 478px) {
    font-size: 14px;
  }
`,b1=({onClick:e})=>a.jsxs(z1,{children:[a.jsx(L1,{children:a.jsx(T1,{onClick:e,size:60})}),a.jsx(M1,{children:"Play Film"})]}),F1=g.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: var(--secondary-button-color);

  @media screen and (max-width: 650px) {
    padding-top: 0px;
  }
`,D1=g.div`
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
`,W1=g.p`
  color: var(--main-font-color);
  font-size: 16px;
  font-weight: 600;

  @media screen and (max-width: 650px) {
    margin-top: 8px;
  }

  @media (max-width: 478px) {
    font-size: 14px;
  }
`,G1=({onClick:e})=>a.jsxs(F1,{children:[a.jsx(D1,{children:a.jsx(An,{to:"/lipusplus",children:a.jsx(Gp,{onClick:e,size:60})})}),a.jsx(W1,{children:"See Case Study"})]});function Y1(e){return gn({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",fill:"currentColor"},child:[]}]})(e)}const V1=mn`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Q1=g.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  animation: ${V1} 0.5s ease-out;
`,U1=g.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--main-modal-backgroundcolor);
`,$1=g.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 2rem;
  color: var(--main-font-color);
  cursor: pointer;
  z-index: 100;
`,H1=({isOpen:e,onClose:t,children:n})=>e?a.jsx(Q1,{children:a.jsxs(U1,{children:[a.jsx($1,{onClick:t,children:a.jsx(Y1,{})}),n]})}):null,X1=g.div`
  display: inline-block;
  width: 100%;
`,ls=g.div`
  width: auto;
  display: none;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 20px;

  @media screen and (max-width: 478px) {
    padding-top: 0px;
  }
`,as=g.p`
  font-size: 16px;
  display: none;
`,Xi=g.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 0em 2em 0.5em 2em;
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
`,_1=g.div`
  width: 60%;

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`,K1=g.section`
  position: relative;
  max-width: 96%;
  aspect-ratio: 16 / 9;
  margin-left: 2%;
  margin-right: 2%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  align-self: left;
  flex-direction: column;

  &:hover ${Xi} {
    transform: translateY(0%); /* Slide up into view */
    background-color: #060606ac;
    justify-content: center;
  }

  &:hover ${as} {
    display: flex;
  }

  &:hover ${ls} {
    display: flex;
  }

  @media (max-width: 960px) {
    ${Xi} {
      transform: translateY(0%);
    }
    ${ls} {
      display: flex;
    }

    &:hover ${Xi} {
      transform: translateY(0%);
      background-color: transparent;
    }

    &:hover ${as} {
      display: none;
    }
  }

  @media (max-width: 478px) {
    aspect-ratio: 4 / 5;
  }
`,Z1=g.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 1;
`,q1=g.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.32);
  z-index: 2;
`,J1=({scrollToEvent:e})=>{const t=j.useRef(null),n=j.useRef(null),[r,i]=j.useState(!1),[o,l]=j.useState(!1);j.useEffect(()=>{const c=()=>{l(window.innerWidth<1024)};return c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),j.useEffect(()=>{const c=setTimeout(()=>{t.current&&t.current.play()},1e3);return()=>clearTimeout(c)},[]);const s=()=>{o?setTimeout(()=>{if(n.current){const c=n.current;c.pause(),c.currentTime=0;const m=c.play();m!==void 0&&m.then(()=>{c.requestFullscreen().catch(h=>{console.log("Error attempting to enable full-screen mode:",h)})}).catch(h=>{console.log("Failed to play the video automatically:",h)})}},0):i(!0)},u=()=>{i(!1),t.current&&t.current.play()};return j.useEffect(()=>{const c=()=>{document.fullscreenElement||n.current&&(n.current.pause(),n.current.currentTime=0)};return document.addEventListener("fullscreenchange",c),()=>{document.removeEventListener("fullscreenchange",c)}},[]),a.jsx(X1,{children:a.jsxs(K1,{children:[a.jsx(Z1,{ref:t,src:x1,loop:!0,muted:!0,playsInline:!0,preload:"auto",alt:"Background video"}),a.jsx(q1,{}),a.jsx(Xi,{children:a.jsxs(_1,{children:[a.jsx("h2",{children:"LIPUSPLUS"}),a.jsx(as,{children:"Brand film highlighting LipusPlus's partnership with Hammarby Handball."}),a.jsxs(ls,{children:[a.jsx(b1,{onClick:s}),a.jsx(G1,{onClick:e})]})]})}),a.jsx(H1,{isOpen:r,onClose:u,children:a.jsx("video",{controls:!0,autoPlay:!0,preload:"auto",children:a.jsx("source",{src:Qc,type:"video/mp4"})})}),a.jsx("video",{ref:n,style:{display:"none"},src:Qc,type:"video/mp4",controls:!0,preload:"auto"})]})})},ev="/portfolio/assets/hidden-7e893598.avif",tv="/portfolio/assets/hiddenMobileImg-1a91cc10.avif",nv="/portfolio/assets/BESTSHORTFILMSPECIALAWARD-EasternEuropeFilmFestival-December2022-489d2b56.avif",rv=g.div`
  display: flex;
  padding-top: 30px;

  @media screen and (max-width: 1100px) {
    padding-top: 10px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 10px;
  }

  @media screen and (max-width: 478px) {
    padding-top: 10px;
  }
`,iv=g.img`
  width: 60%;
  height: auto;

  @media screen and (max-width: 767px) {
    width: 40%;
  }
`,ov=g.div`
  grid-area: storytelling;
  display: inline-block;
  width: 100%;
`,lv=g.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 0em 2em 0em 2em;

  @media (max-width: 478px) {
    padding: 0em 2em 0.5em 1em;
  }
`,av=g.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  aspect-ratio: 5 / 3;
  font-size: 1.2rem;
  overflow: hidden;

  @media (max-width: 767px) {
    aspect-ratio: 5 / 7;
  }
`,sv=g.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 767px) {
    display: none;
  }
`,uv=g.img`
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 767px) {
    display: flex;
  }
`,cv=g.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #0000005f;
`,$c=g.p`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 1.4;

  @media (max-width: 360px) {
    font-size: 14px;
  }
`,dv=({scrollToEvent:e})=>a.jsx(ov,{children:a.jsxs(av,{children:[a.jsx(sv,{src:ev,alt:"A short film poster. A Man sits with his back to camera contemplating"}),a.jsx(uv,{src:tv,alt:"A short film poster. A Man sits with his back to camera contemplating"}),a.jsx(cv,{children:a.jsxs(lv,{children:[a.jsx("h2",{children:"Storytelling"}),a.jsx($c,{children:"Storytelling is at the heart of everything I do. I've applied this to commercials, films, TV shows, and building intuitive user interfaces, digital campaigns, and interactive experiences."}),a.jsx($c,{children:"HIDDEN is a short film that I directed, produced, and wrote. It went on to win the Special Award for Best Short Film at the Eastern European Short Film Festival."}),a.jsx(rv,{children:a.jsx(iv,{src:nv,alt:"A wreath for Winner Eastern European Short Film Festival "})})]})})]})}),wl=mn`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Hc=g.section`
  max-width: 94.5%;
  height: auto;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  row-gap: 20px;
  column-gap: 2%;
  padding-left: 2%;
  padding-right: 2%;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  opacity: 0;
  ${({isVisible:e})=>e&&Ot`
      animation: ${wl} 2s forwards;
    `}

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  }
`,fv=g.section`
  max-width: 96%;
  height: auto;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-areas:
    "cinema cinema ux"
    "cinema cinema ai";
  row-gap: 20px;
  column-gap: 2%;
  padding-top: 180px;
  padding-left: 2%;
  padding-right: 2%;
  opacity: 0;
  ${({isVisible:e})=>e&&Ot`
      animation: ${wl} 2s forwards;
    `}

  @media (min-width: 2050px) {
    grid-template-columns: 1.5fr 1fr 1fr;
  }

  @media screen and (max-width: 960px) {
    padding-top: 130px;
    grid-template-areas:
      "cinema "
      "ux"
      "ai";
  }
`,pv=g.section`
  max-width: 96%;
  height: auto;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 32% 32% 32%;
  grid-template-areas:
    "design storytelling storytelling"
    "frontend storytelling storytelling";

  row-gap: 20px;
  column-gap: 2%;
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 28px;
  opacity: 0;
  ${({isVisible:e})=>e&&Ot`
      animation: ${wl} 2s forwards;
    `}

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-areas:
      "storytelling"
      "design"
      "frontend";
  }
`;g.div`
  opacity: 0;
  ${({isVisible:e})=>e&&Ot`
      animation: ${wl} 1s forwards;
    `}
`;const To=(e=.1)=>{const[t,n]=j.useState(!1),r=j.useRef(null);return j.useEffect(()=>{const i=new IntersectionObserver(([o])=>{o.isIntersecting&&(n(!0),i.unobserve(o.target))},{threshold:e});return r.current&&i.observe(r.current),()=>{r.current&&i.unobserve(r.current)}},[e]),[r,t]},hv=g.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  align-content: center;
`,mv=()=>{const[e,t]=To(),[n,r]=To(),i=j.useRef(null),o=()=>{i.current&&i.current.scrollIntoView({behavior:"smooth"})};return a.jsxs(hv,{children:[a.jsxs(fv,{ref:e,isVisible:t,children:[a.jsx(bg,{}),a.jsx(Qg,{}),a.jsx(Zg,{})]}),a.jsx(J1,{scrollToEvent:o}),a.jsxs(pv,{ref:n,isVisible:r,children:[a.jsx(dv,{}),a.jsx(a1,{}),a.jsx(y1,{})]})]})},Yp="/portfolio/assets/lipus-00a0d7ff.avif",Av=mn`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,gv=g.div`
  display: inline-block;
`,zo=g.p`
  font-size: 16px;
  display: none;
`,_i=g.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 0em 2em 0.5em 2em;

  transform: translateY(44%); /* Initially positioned off the bottom */
  transition: transform 0.5s ease-in-out;

  @media (max-width: 478px) {
    transform: translateY(40%);
  }
`,vv=g.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  aspect-ratio: 5 / 4;
  font-size: 1.2rem;
  overflow: hidden;

  &:hover ${_i} {
    transform: translateY(0%); /* Slide up into view */
    background-color: #060606ac;
    justify-content: center;
  }

  &:hover ${zo} {
    display: flex;
  }

  @media (max-width: 960px) {
    &:hover ${_i} {
      transform: translateY(44%);
      background-color: transparent;
    }

    &:hover ${zo} {
      display: none;
    }
  }

  @media (max-width: 478px) {
    &:hover ${_i} {
      transform: translateY(40%);
    }
  }
`,yv=g.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 478px) {
    height: 500px;
  }

  ${({isInView:e})=>e&&Ot`
      animation: ${Av} 1s ease-out forwards;
    `}
`,xv=g.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000056;
`,wv=g.div`
  &:hover {
    color: var(--main-button-hover-color);
  }
`,Sv=()=>{const e=j.useRef(null),[t,n]=j.useState(!1);return j.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),a.jsx(gv,{children:a.jsx(An,{to:"/lipusplus",children:a.jsxs(vv,{children:[a.jsx(yv,{ref:e,src:Yp,alt:"A hammarby handball player in green and white stripes holds a ball.",isInView:t}),a.jsx(xv,{children:a.jsxs(_i,{children:[a.jsx("h2",{children:"LIPUSPLUS | A UX CASE STUDY"}),a.jsx(zo,{children:"LipusPlus aims to attract physiotherapists and elite athletes to its webinars on the Return to Play concept. An enticing and informative landing page is needed to generate leads for these webinars."}),a.jsx(wv,{children:a.jsx(zo,{children:"Go to case study .."})})]})})]})})})},Vp="/portfolio/assets/ebieHeroImg-14466e14.avif",kv=mn`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,jv=g.div`
  display: inline-block;
`,Lo=g.p`
  font-size: 16px;
  display: none;
`,Ki=g.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 0em 2em 0.5em 2em;

  transform: translateY(44%); /* Initially positioned off the bottom */
  transition: transform 0.5s ease-in-out;

  @media (max-width: 478px) {
    transform: translateY(40%);
  }
`,Cv=g.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  aspect-ratio: 5 / 4;
  font-size: 1.2rem;
  overflow: hidden;

  &:hover ${Ki} {
    transform: translateY(0%); /* Slide up into view */
    background-color: #060606ac;
    justify-content: center;
  }

  &:hover ${Lo} {
    display: flex;
  }

  @media (max-width: 960px) {
    &:hover ${Ki} {
      transform: translateY(44%);
      background-color: transparent;
    }

    &:hover ${Lo} {
      display: none;
    }
  }

  @media (max-width: 478px) {
    &:hover ${Ki} {
      transform: translateY(40%);
    }
  }
`,Ev=g.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 478px) {
    height: 500px;
  }

  ${({isInView:e})=>e&&Ot`
      animation: ${kv} 1s ease-out forwards;
    `}
`,Iv=g.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000056;
`,Pv=g.div`
  &:hover {
    color: var(--main-button-hover-color);
  }
`,Nv=()=>{const e=j.useRef(null),[t,n]=j.useState(!1);return j.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),a.jsx(jv,{children:a.jsx(An,{to:"/ebie",children:a.jsxs(Cv,{children:[a.jsx(Ev,{ref:e,src:Vp,alt:"A street view on the corner of Sveavägen, Sergelstorg.",isInView:t}),a.jsx(Iv,{children:a.jsxs(Ki,{children:[a.jsx("h2",{children:"EBIE | A UX CASE STUDY"}),a.jsx(Lo,{children:"Create a user-friendly function within the platform that makes it easy for property owners to apply for, and manage group insurance. Simplify the application and the overview for insurance status."}),a.jsx(Pv,{children:a.jsx(Lo,{children:"Go to case study .."})})]})})]})})})},Xc="/portfolio/assets/tides-2f59a591.mp4",Bv=e=>{const t=document.createElement("video");t.src=e,t.preload="auto",t.load()},Rv=g.div`
  display: inline-block;
`,Mo=g.p`
  font-size: 16px;
  display: none;
`,Zi=g.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 0em 2em 0.5em 2em;

  transform: translateY(44%); /* Initially positioned off the bottom */
  transition: transform 0.5s ease-in-out;

  @media (max-width: 478px) {
    transform: translateY(40%);
  }
`,Ov=g.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  aspect-ratio: 5 / 4;
  font-size: 1.2rem;
  overflow: hidden;

  &:hover ${Zi} {
    transform: translateY(0%); /* Slide up into view */
    background-color: #060606ac;
    justify-content: center;
  }

  &:hover ${Mo} {
    display: flex;
  }

  @media (max-width: 960px) {
    &:hover ${Zi} {
      transform: translateY(44%);
      background-color: transparent;
    }

    &:hover ${Mo} {
      display: none;
    }
  }

  @media (max-width: 478px) {
    &:hover ${Zi} {
      transform: translateY(40%);
    }
  }
`,Tv=g.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
`,zv=g.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000056;
`,Lv=g.div`
  &:hover {
    color: var(--main-button-hover-color);
  }
`;function Mv(e){return j.useEffect(()=>{Bv(Xc)},[]),a.jsx(Rv,{children:a.jsx("a",{href:"https://www.linkedin.com/posts/paul-evans-3a74605_ai-userexperience-webdevelopment-activity-7234084840894021632-LNks?utm_source=share&utm_medium=member_desktop",target:"_blank",rel:"noopener noreferrer",children:a.jsxs(Ov,{children:[a.jsx(Tv,{src:Xc,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A Prototype showing tropical islands and underwater scenes."}),a.jsx(zv,{children:a.jsxs(Zi,{children:[a.jsx("h2",{children:"AI & PROTOTYPING"}),a.jsx(Mo,{children:"Why using AI generated content can enhance the user experience in prototypes. See case on linkedIn.."}),a.jsx(Lv,{children:a.jsx(Mo,{children:"Go to case study .."})})]})})]})})})}const _c="/portfolio/assets/NaomiBreakin-cd4a01dc.mp4",bv=e=>{const t=document.createElement("video");t.src=e,t.preload="auto",t.load()},Fv=g.div`
  display: inline-block;
`,bo=g.p`
  font-size: 16px;
  display: none;
`,qi=g.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 0em 2em 0.5em 2em;

  transform: translateY(44%); /* Initially positioned off the bottom */
  transition: transform 0.5s ease-in-out;

  @media (max-width: 478px) {
    transform: translateY(40%);
  }
`,Dv=g.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  aspect-ratio: 5 / 4;
  font-size: 1.2rem;
  overflow: hidden;

  &:hover ${qi} {
    transform: translateY(0%); /* Slide up into view */
    background-color: #060606ac;
    justify-content: center;
  }

  &:hover ${bo} {
    display: flex;
  }

    @media (max-width: 960px) {
    &:hover ${qi} {
      transform: translateY(44%);
      background-color: transparent;
    }

    &:hover ${bo} {
      display: none;
    }
  }

  @media (max-width: 478px) {
    &:hover ${qi} {
      transform: translateY(40%);
    }
  }
`,Wv=g.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
`,Gv=g.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000056;
`,Yv=g.div`
  &:hover {
    color: var(--main-button-hover-color);
  }
`;function Vv(e){return j.useEffect(()=>{bv(_c)},[]),a.jsx(Fv,{children:a.jsx("a",{href:"https://www.linkedin.com/posts/paul-evans-3a74605_aiart-generativeai-runwayai-activity-7232706903896690689-JL51?utm_source=share&utm_medium=member_desktop",target:"_blank",rel:"noopener noreferrer",children:a.jsxs(Dv,{children:[a.jsx(Wv,{src:_c,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"Design frames changing randomly"}),a.jsx(Gv,{children:a.jsxs(qi,{children:[a.jsx("h2",{children:"CONSISTENCY IN AI"}),a.jsx(bo,{children:"How I am achieving consistency in AI video generation. See case on linkedIn.."}),a.jsx(Yv,{children:a.jsx(bo,{children:"Go to case study .."})})]})})]})})})}const Qv=g.section`
  max-width: 100%;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
  margin-top: 180px;
  margin-bottom: 30px;

  @media screen and (max-width: 960px) {
    margin-top: 120px;
  }
`,Uv=()=>{const[e,t]=To(),[n,r]=To();return j.useRef(null),a.jsxs(Qv,{children:[a.jsxs(Hc,{ref:e,isVisible:t,children:[a.jsx(Sv,{}),a.jsx(Mv,{})]}),a.jsxs(Hc,{ref:n,isVisible:r,children:[a.jsx(Vv,{}),a.jsx(Nv,{})]})]})},$v="/portfolio/assets/meAbout-b0dd0af4.avif",Hv=mn`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,Xv=g.section`
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
`,_v=g.div`
  width: 100%;
  padding-left: 4%;
  padding-right: 4%;
  background-color: var(--main-hero-backgroundcolor);
`,Kv=g.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  width: 84%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (max-width: 767px) {
    padding-left: 30px;
  }

  @media screen and (max-width: 478px) {
    padding-top: 30px;
    padding-left: 20px;
  }

  @media screen and (max-width: 360px) {
    width: 80%;
    padding-top: 15px;
  }
`,Zv=g.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,qv=g.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({isLoaded:e})=>e&&Ot`
      animation: ${Hv} 1s ease-out forwards;
    `}
`,Jv=()=>{const[e,t]=j.useState(!1),n=j.useRef(null);return j.useEffect(()=>{const r=()=>{t(!0)},i=n.current;if(i)if(i.complete)r();else return i.addEventListener("load",r),()=>{i.removeEventListener("load",r)}},[]),a.jsxs(Xv,{children:[a.jsx(_v,{children:a.jsxs(Kv,{children:[a.jsx("h2",{children:"About me "}),a.jsx("p",{children:"Hi, I’m Paul! A creative with over 20 years of experience in branding, storytelling and commercial and narrative production, now specializing in Experience Design. I bring a unique combination of creative and technical expertise, allowing me to design visually engaging and user-centric experiences. I am competent with design tools such as Figma and Adobe as well as Useberry for testing. When it comes to frontend I am skilled in html, css, javascript and React. My interests also extend into AI, particularly image and video generation, using programs such as Midjourney and Runway. Merging traditional filmmaking techniques with the latest technologies. I have a calm and methodical approach to life, which enables me to navigate challenges with ease. My strong willpower and determination helps me stay focused on the goals, even during difficult times."})]})}),a.jsx(Zv,{children:a.jsx(qv,{ref:n,src:$v,alt:"Paul Evans watching the ocean",isLoaded:e})})]})},ey="/portfolio/assets/camper-588e3c53.avif",ty=mn`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,ny=g.section`
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
`,ry=g.div`
  padding-left: 4%;
  padding-right: 4%;
  background-color: var(--main-hero-backgroundcolor);
`,iy=g.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  width: 84%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (max-width: 767px) {
    padding-left: 30px;
  }

  @media screen and (max-width: 478px) {
    padding-top: 20px;
    padding-left: 20px;
  }

  @media screen and (max-width: 360px) {
    width: 80%;
    padding-top: 15px;
  }
`,oy=g.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`,ly=g.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  visibility: hidden;

  ${({isInView:e})=>e&&Ot`
      visibility: visible;
      animation: ${ty} 1s ease-out forwards;
    `}
`,ay=()=>{const e=j.useRef(null),[t,n]=j.useState(!1);return j.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&n(!0)},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),a.jsxs(ny,{children:[a.jsx(ry,{children:a.jsxs(iy,{children:[a.jsx("h2",{children:"For fun"}),a.jsx("p",{children:"Surfing and traveling are my two biggest passions. When I'm not paddling out into the sea I like to work out at the gym or swim in the lake. I also cherish the time I spend with my family and friends, cooking and watching movies and TV shows."})]})}),a.jsx(oy,{children:a.jsx(ly,{ref:e,src:ey,alt:"A surfboard propped up against a mobile home",isInView:t})})]})},sy=g.section`
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
`,uy=()=>(j.useRef(null),a.jsxs(sy,{children:[a.jsx(Jv,{}),a.jsx(ay,{})]})),cy="/portfolio/assets/lipusHeroImg-44921e74.avif",dy="/portfolio/assets/lipusPlusLogo-022851c3.avif",fy="/portfolio/assets/challenges-70c5b3a7.avif",py="/portfolio/assets/fans-667fbfce.avif",hy="/portfolio/assets/research-b4a1f59e.avif",my="/portfolio/assets/mapping-c6580bd3.avif",Ay="/portfolio/assets/physio-5d7e362e.avif",gy="/portfolio/assets/athlete-40b4363a.avif",vy="/portfolio/assets/designOne-24f39a91.avif",yy="/portfolio/assets/designTwo-b7e3107e.avif",xy="/portfolio/assets/webflow-baa33610.avif",wy=g.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 24px;
  color: var(--main-button-color);
`,Sy=g.div`
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
`,ky=g.p`
  color: var(--main-font-color);
  font-size: 16px;
  font-weight: 600;

  @media screen and (max-width: 650px) {
    margin-top: 8px;
  }

  @media (max-width: 478px) {
    font-size: 14px;
  }
`,jy=({onClick:e})=>a.jsxs(wy,{children:[a.jsx(Sy,{children:a.jsx("a",{href:"https://www.lipusplus.com/casestudies/hammarby",target:"_blank",rel:"noopener noreferrer",children:a.jsx(Gp,{onClick:e,size:60})})}),a.jsx(ky,{children:"LipusPlus.com"})]}),Cy=g.section`
  max-width: 93.5%;
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-template-rows: auto;
  row-gap: 28px;
  column-gap: 2%;
  padding-left: 2%;
  padding-right: 2%;
  align-content: center;
  margin-top: 170px;
  margin-bottom: 28px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    margin-top: 150px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 130px;
  }
`,Me=g.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  text-align: center;
  background-color: #6d6e71;
  border: 1px solid black;
`,it=g.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  aspect-ratio: 4 / 3;
  text-align: center;

  @media screen and (max-width: 1233px) {
    aspect-ratio: 4 / 8;
  }

  @media screen and (max-width: 960px) {
    aspect-ratio: 4 / 3;
  }
`,Kc=g.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  aspect-ratio: 4 / 3;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: none;
  }
`,Ne=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 60px;

  @media screen and (max-width: 478px) {
    padding-left: 40px;
  }

  @media screen and (max-width: 360px) {
    width: 90%;
    padding-left: 20px;
  }
`,Ey=g.div`
  padding-top: 0px;
  padding-bottom: 80px;
  display: flex;

  @media (max-width: 478px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`,Iy=g.img`
  width: 100%;
  height: auto;

  @media (max-width: 320px) {
    width: 50%;
  }
`,At=g.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`,gt=g.img`
  width: 100%;
  height: 800px;
  object-fit: cover;

  @media screen and (max-width: 960px) {
    height: 700px;
  }
`,G=g.p`
  font-size: 16px;
  font-weight: 300;
  margin-top: 0;
`,Py=()=>a.jsxs(Cy,{children:[a.jsx(Me,{children:a.jsxs(Ne,{children:[a.jsx("h2",{children:"My role"}),a.jsx(G,{children:"UX / UI Designer"}),a.jsx(G,{children:"Frontend Developer"}),a.jsx(G,{children:"Content Creator"})]})}),a.jsx(it,{children:a.jsx(Ne,{children:a.jsx(Ey,{children:a.jsx(Iy,{src:dy,alt:"The logo for LipuspLus"})})})}),a.jsx(Me,{children:a.jsxs(Ne,{children:[a.jsx("h2",{children:"Challenges"}),a.jsx(G,{children:"* Understanding Elite Athletes and Physiotherapists everyday struggles."}),a.jsx(G,{children:"* Minimal experience with webinars & Webflow."})]})}),a.jsx(it,{children:a.jsx(At,{children:a.jsx(gt,{src:fy,alt:"A hammarby handball player is lead of the court by the team physio."})})}),a.jsx(Me,{children:a.jsxs(Ne,{children:[a.jsx("h2",{children:"Brief"}),a.jsx(G,{children:"LipusPlus aims to attract physiotherapists and elite athletes to its webinars on the Return to Play concept. An enticing and informative landing page is needed to generate leads for these webinars."})]})}),a.jsx(it,{children:a.jsx(At,{children:a.jsx(gt,{src:cy,alt:"A hammarby handball player is lead of the court by the team physio."})})}),a.jsx(Me,{children:a.jsxs(Ne,{children:[a.jsx("h2",{children:"Goal"}),a.jsx(G,{children:"Create a user-friendly landing page. Connect with the target group. Convince the user to register for the event. Provide a seamless experience for visitors from registration to processing. Strive for a high conversion rate and satisfaction for both LipusPlus and the participants."})]})}),a.jsx(it,{children:a.jsx(At,{children:a.jsx(gt,{src:py,alt:"Hammarby fans encourgae their team."})})}),a.jsx(Me,{children:a.jsxs(Ne,{children:[a.jsx("h2",{children:"Key Questions"}),a.jsx(G,{children:"1. How can we make the message and the offer clear and attractive to the target group?"}),a.jsx(G,{children:"2. How can we optimise the landing page to increase the conversion rate?"}),a.jsx(G,{children:"3. How can we stimulate people to spread the word?"})]})}),a.jsx(it,{children:a.jsx(At,{children:a.jsx(gt,{src:hy,alt:"Anne Hopfgarten sitting for an interview."})})}),a.jsx(Me,{children:a.jsxs(Ne,{children:[a.jsx("h2",{children:"Qualitative Research"}),a.jsxs(G,{children:[a.jsx("span",{className:"bold",children:"Seminar: "})," LipusPlus"]}),a.jsxs(G,{children:[a.jsx("span",{className:"bold",children:"Observation: "})," LipusPlus Sales Member"]}),a.jsxs(G,{children:[a.jsx("span",{className:"bold",children:"Observation: "})," LipusPlus Clinician"," "]}),a.jsxs(G,{children:[a.jsx("span",{className:"bold",children:"Interview: "})," Physiotherapist"]}),a.jsxs(G,{children:[a.jsx("span",{className:"bold",children:"Interview: "})," Elite athlete"]})]})}),a.jsx(it,{children:a.jsx(At,{children:a.jsx(gt,{src:my,alt:"Mapping of the users needs."})})}),a.jsx(Me,{children:a.jsxs(Ne,{children:[a.jsx("h2",{children:"Results"}),a.jsx(G,{children:a.jsx("span",{className:"bold",children:"LipusPlus"})}),a.jsxs(G,{children:[a.jsx("span",{className:"bold",children:"Challenges: "})," Struggles with conversion rates due to a lack of evidence and information about the modality."]}),a.jsxs(G,{children:[a.jsx("span",{className:"bold",children:"Needs: "})," A convenient platform to present and discuss current and ongoing studies and results."]})]})}),a.jsx(Me,{children:a.jsxs(Ne,{children:[a.jsx("h2",{children:"Results"}),a.jsx(G,{children:a.jsx("span",{className:"bold",children:"Physiotherapist"})}),a.jsxs(G,{children:[a.jsx("span",{className:"bold",children:"Concerns: "})," Need evidence that LipusPlus is effective and safe. Rely on endorsements from prominent clubs and figures in their sport."]}),a.jsxs(G,{children:[a.jsx("span",{className:"bold",children:"Priorities: "})," They aim to get their patients back to their sport quickly and safely."]})]})}),a.jsx(Me,{children:a.jsxs(Ne,{children:[a.jsx("h2",{children:"Results"}),a.jsx(G,{children:a.jsx("span",{className:"bold",children:"Athlete"})}),a.jsxs(G,{children:[a.jsx("span",{className:"bold",children:"Concerns: "})," Need evidence that LipusPlus is effective and safe. Rely on endorsements and trusted physiotherapists."]}),a.jsxs(G,{children:[a.jsx("span",{className:"bold",children:"Goals: "})," Want to return to their sport as quickly as possible since their income and career goals depend on it."]})]})}),a.jsx(it,{children:a.jsx(At,{children:a.jsx(gt,{src:Ay,alt:"Anne Hopfgarten. Hammarby physio."})})}),a.jsx(Me,{children:a.jsxs(Ne,{children:[a.jsx("h2",{children:"Insights"}),a.jsx(G,{children:"* There is skepticism towards Medtech companies."}),a.jsx(G,{children:"* Build trust, understanding the users struggles."}),a.jsx(G,{children:"* Emphasising partnerships would be more inspirational and trustworthy."}),a.jsx(G,{children:"* Clear & captivating headlines, persuasive & engaging copy."}),a.jsx(G,{children:"* Clearly show offer and benefits of the webinar & Return to Play."})]})}),a.jsx(it,{children:a.jsx(At,{children:a.jsx(gt,{src:Yp,alt:"A hammarby handball player uses the LipusPlus modality.."})})}),a.jsx(Me,{children:a.jsxs(Ne,{children:[a.jsx("h2",{children:"Webinar Requirements"}),a.jsxs(G,{children:["* The webinar platform should be a stable and proven streaming service."," "]}),a.jsx(G,{children:"* Data collection through a registration form."}),a.jsx(G,{children:"* Email Automation."}),a.jsx(G,{children:"* Option to connect to Hubspot. "}),a.jsx(G,{children:"With approximately 260 million users, Vimeo met all our requirements. Since LipusPlus already hosted content on Vimeo, it streamlined our video showcasing process."})]})}),a.jsx(it,{children:a.jsx(At,{children:a.jsx(gt,{src:gy,alt:"Ludvig Lindeberg celebrates winning."})})}),a.jsx(Kc,{}),a.jsx(it,{children:a.jsx(At,{children:a.jsx(gt,{src:yy,alt:"Frames from LipusPlus HiFi Designs."})})}),a.jsx(Me,{children:a.jsxs(Ne,{children:[a.jsx("h2",{children:"Design"}),a.jsx(G,{children:"Build and improve upon an existing design system. "}),a.jsxs(G,{children:["* Through emotional content we highlighted partnerships for credibility."," "]}),a.jsxs(G,{children:["* Clearly outlined the benefits and starting price of the Return to Play program."," "]}),a.jsxs(G,{children:["* Assured the user that the webinar would discuss evidence from LipusPlus studies."," "]}),a.jsxs(G,{children:["* A user-friendly registration form with a prominent CTA button."," "]})]})}),a.jsx(it,{children:a.jsx(At,{children:a.jsx(gt,{src:vy,alt:"Frames from LipusPlus HiFi Designs."})})}),a.jsx(Me,{children:a.jsxs(Ne,{children:[a.jsx("h2",{children:"Frontend"}),a.jsxs(G,{children:["A key stipulation for this project was to continue using Webflow."," "]}),a.jsx(jy,{})]})}),a.jsx(it,{children:a.jsx(At,{children:a.jsx(gt,{src:xy,alt:"Webflow. Desktop ."})})}),a.jsx(Kc,{}),a.jsx(Me,{children:a.jsxs(Ne,{children:[a.jsx("h2",{children:"Reflection"}),a.jsxs(G,{children:["This project was incredibly exciting for me for several reasons. Firstly, I had the opportunity to leverage my previous experience as a filmmaker, from conceptualizing and working with the brand to planning and filming interviews and sports coverage. Secondly, this project allowed me to align user needs with brand objectives, achieving a cohesive brand feel that LipusPlus has been striving for. Finally, I had the chance to work with Webflow, exploring a new platform and expanding my skills—an experience I thoroughly enjoyed."," "]})]})}),a.jsx(Me,{children:a.jsxs(Ne,{children:[a.jsx("h2",{children:"Reflection"}),a.jsx(G,{children:"In conclusion, this project has not only met its goals but also provided a strong template for future case studies, webinars and other promotions. However there is always room for improvement. One area would be creating our own registration form instead of using the embedded Vimeo form. This change would give better design control and allow for a more cohesive user experience."})]})}),a.jsx(Me,{children:a.jsxs(Ne,{children:[a.jsx("h2",{children:"Reflection"}),a.jsx(G,{children:"This project has been a valuable learning experience. It demonstrated the importance of thorough research, user-centric design, and effective communication. The real-world application of our work and the positive feedback from LipusPlus has been immensely rewarding."})]})})]}),Ny="data:image/avif;base64,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",By="/portfolio/assets/briefEbie-dee42c26.avif",Ry="/portfolio/assets/researchEbie-fc14e246.avif",Oy="/portfolio/assets/persona1-01eeebdf.avif",Ty="/portfolio/assets/persona2-e628457a.avif",zy="/portfolio/assets/application1-e9abd0d8.avif",Ly="/portfolio/assets/application2-9a1504ec.avif",My="/portfolio/assets/sorting-ef8a0128.avif",by="data:image/avif;base64,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",Fy="/portfolio/assets/status2-b7b87c98.avif",Dy="/portfolio/assets/overview-8b6281de.avif",Wy=g.section`
  max-width: 93.5%;
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-template-rows: auto;
  row-gap: 28px;
  column-gap: 2%;
  padding-left: 2%;
  padding-right: 2%;
  align-content: center;
  margin-top: 170px;
  margin-bottom: 28px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    margin-top: 150px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 130px;
  }
`,vt=g.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  text-align: center;
  background-color: #6d6e71;
  border: 1px solid black;
`,ot=g.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  aspect-ratio: 4 / 3;
  text-align: center;

  @media screen and (max-width: 1233px) {
    aspect-ratio: 4 / 8;
  }

  @media screen and (max-width: 960px) {
    aspect-ratio: 4 / 3;
  }
`,lt=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 60px;

  @media screen and (max-width: 478px) {
    padding-left: 40px;
  }

  @media screen and (max-width: 360px) {
    width: 90%;
    padding-left: 20px;
  }
`,Gy=g.div`
  padding-top: 0px;
  padding-bottom: 80px;
  display: flex;

  @media (max-width: 478px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`,Yy=g.img`
  width: 100%;
  height: auto;

  @media (max-width: 320px) {
    width: 50%;
  }
`,yt=g.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`,xt=g.img`
  width: 100%;
  height: 800px;
  object-fit: cover;

  @media screen and (max-width: 960px) {
    height: 700px;
  }
`,te=g.p`
  font-size: 16px;
  font-weight: 300;
  margin-top: 0;
`,Vy=()=>a.jsxs(Wy,{children:[a.jsx(vt,{children:a.jsxs(lt,{children:[a.jsx("h2",{children:"My role"}),a.jsx(te,{children:"UX Designer"}),a.jsx(te,{children:"UI Designer"})]})}),a.jsx(ot,{children:a.jsx(lt,{children:a.jsx(Gy,{children:a.jsx(Yy,{src:Ny,alt:"The logo for Ebie"})})})}),a.jsx(vt,{children:a.jsxs(lt,{children:[a.jsx("h2",{children:"Challenges"}),a.jsx(te,{children:"* Lack of indepth knowledge of the real estate industry."}),a.jsx(te,{children:"* Understanding user expectations, especially when they are already accustomed to existing solutions and industry standards."}),a.jsx(te,{children:"* Access to Ebies clients for user research, Ebie is a start up with a limited number of customers, and those they do have are extremely busy."})]})}),a.jsx(ot,{children:a.jsx(yt,{children:a.jsx(xt,{src:Vp,alt:"A street view on the corner of Sveavägen, Sergelstorg."})})}),a.jsx(vt,{children:a.jsxs(lt,{children:[a.jsx("h2",{children:"Brief"}),a.jsx(te,{children:"Create and implement a completely new and user-friendly function that simplifies applying and managing of group insurance."}),a.jsx(te,{children:"Increase the use of group insurance by increasing the number of property owners applying for it. This is to be achieved by simplifying and improving the entire application process."})]})}),a.jsx(ot,{children:a.jsx(yt,{children:a.jsx(xt,{src:By,alt:"A deisgn idea for an online application"})})}),a.jsx(vt,{children:a.jsxs(lt,{children:[a.jsx("h2",{children:"Target Group"}),a.jsx(te,{children:"Lessor"}),a.jsx(te,{children:"Property Owner"})]})}),a.jsx(ot,{children:a.jsx(yt,{children:a.jsx(xt,{src:Ry,alt:"Research collected by Ebie"})})}),a.jsx(vt,{children:a.jsxs(lt,{children:[a.jsx("h2",{children:"Research"}),a.jsx(te,{children:"Carrying out research with Ebies clients proved challenging due to busy schedules, Ebie provided user client backgrounds and preferences, based on that information, we created personas."})]})}),a.jsx(ot,{children:a.jsx(yt,{children:a.jsx(xt,{src:Oy,alt:"Personas built from user research."})})}),a.jsx(ot,{children:a.jsx(yt,{children:a.jsx(xt,{src:Ty,alt:"Personas built from user research."})})}),a.jsx(vt,{children:a.jsxs(lt,{children:[a.jsx("h2",{children:"Improvement Areas"}),a.jsxs(te,{children:[a.jsx("span",{className:"bold",children:"The application process "})," posed our biggest challenge. Applying for insurance requires a significant amount of information. Our goal was to consolidate this into a single form without overwhelming or confusing the user."]}),a.jsx(te,{children:"Our initial design mirrored a traditional application form. While it was clearer and easier to navigate than previous versions, user-testing revealed that there was still room for improvement."})]})}),a.jsx(ot,{children:a.jsx(yt,{children:a.jsx(xt,{src:zy,alt:"A traditional application form."})})}),a.jsx(vt,{children:a.jsxs(lt,{children:[a.jsx("h2",{children:"Improvement Areas"}),a.jsxs(te,{children:[a.jsx("span",{className:"bold",children:"The new design"})," received a more positive response, performing better during user testing."]}),a.jsx(te,{children:a.jsx("span",{className:"bold",children:"Focus areas. "})}),a.jsx(te,{children:"* Organized input fields into a column form to enhance readability."}),a.jsx(te,{children:"* To make the form less overwhelming, we implemented fold-out and collapsible sections."}),a.jsx(te,{children:"* Colours to signal when a section is complete."}),a.jsx(te,{children:"* A progress bar at the top keeps users informed about their position in the process."}),a.jsx(te,{children:"* Additionally, we included navigation on the left to allow users to view other applications or add new ones."})]})}),a.jsx(ot,{children:a.jsx(yt,{children:a.jsx(xt,{src:Ly,alt:"An online application form."})})}),a.jsx(vt,{children:a.jsxs(lt,{children:[a.jsx("h2",{children:"Improvement Areas"}),a.jsxs(te,{children:[a.jsx("span",{className:"bold",children:"Sort Function: "})," Property owners and lessors often manage numerous properties with various tenants coming and going. To facilitate quick sorting between different insurance statuses, we implemented a robust sorting function. Where the user can sort between different status stages."]})]})}),a.jsx(ot,{children:a.jsx(yt,{children:a.jsx(xt,{src:My,alt:"Proposed sorting buttons from figma."})})}),a.jsx(vt,{children:a.jsxs(lt,{children:[a.jsx("h2",{children:"Improvement Areas"}),a.jsx(te,{children:a.jsx("span",{className:"bold",children:"Overview: "})}),a.jsx(te,{children:"Added a warning icon to indicate when an action is required."}),a.jsx(te,{children:"Incorporated the same status symbols from the search function for clearer status visibility."}),a.jsx(te,{children:"The screening report is displayed directly, eliminating the need to search through other documents."}),a.jsx(te,{children:"Introduced a sorting function that allows users to organise all insurance entries in numeric, alphabetic, or reverse order."})]})}),a.jsx(ot,{children:a.jsx(yt,{children:a.jsx(xt,{src:by,alt:"Design for insurance status from figma."})})}),a.jsx(ot,{children:a.jsx(yt,{children:a.jsx(xt,{src:Fy,alt:"Design for insurance status from figma."})})}),a.jsx(ot,{children:a.jsx(yt,{children:a.jsx(xt,{src:Dy,alt:"Design proposal for insurance overview."})})}),a.jsx(vt,{children:a.jsxs(lt,{children:[a.jsx("h2",{children:"Reflection"}),a.jsx(te,{children:"The biggest challenge was understanding the intricacies of the real estate industry and the complexities of the application process. This took time and slowed us down in the beginning but it was also one of the most intresting sides of the project."})]})}),a.jsx(vt,{children:a.jsxs(lt,{children:[a.jsx("h2",{children:"Reflection"}),a.jsx(te,{children:"What I enjoyed most about this project was developing the sorting function and the logic behind it. While sorting and filters are not always considered the most visually striking aspect of design, ensuring that the sorting function is clear and intuitive is crucial. It plays a vital role in enhancing user experience."})]})})]});g.div`
  overflowy: scroll;
  height: 2500px;
`;const Qy=g.div`
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
`,Uy=g.div`
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
`,$y=()=>{const[e,t]=j.useState(!1),n=()=>{const i=document.documentElement.scrollTop;i>1200?t(!0):i<=1200&&t(!1)},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return window.addEventListener("scroll",n),a.jsx(Qy,{children:a.jsx(Uy,{children:a.jsx(O1,{onClick:r,style:{display:e?"inline":"none",borderRadius:"50%"}})})})},Hy=[{id:1,href:"https://github.com/PaulEvans78",icon:a.jsx(P1,{}),des:"Github",target:"_blank",rel:"noopener noreferrer"},{id:2,href:"https://www.linkedin.com/in/paul-evans-3a74605/",icon:a.jsx(R1,{}),des:"LinkedIn",target:"_blank",rel:"noopener noreferrer"},{id:3,href:"https://www.instagram.com/paulevans_official/",icon:a.jsx(B1,{}),des:"Instagram",target:"_blank",rel:"noopener noreferrer"},{id:4,href:"https://www.imdb.com/name/nm3171341/?ref_=ttfc_fc_cr",icon:a.jsx(N1,{}),des:"Imdb",target:"_blank",rel:"noopener noreferrer"}],Xy=g.footer`
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
`,_y=g.div`
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
`,Ky=g.p`
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
`,Zy=g.p`
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
`,qy=g.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  justify-items: center;
  margin-left: 6em;
  padding-top: 4em;

  @media screen and (max-width: 960px) {
    padding-top: 2em;
    margin-left: 0em;
    margin-right: 24px;
  }

  @media screen and (max-width: 478px) {
    flex-direction: column;
    margin-right: 0em;
  }
`,Jy=g.a`
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
`,ex=g.p`
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
`,tx=g.div`
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
`,nx=g.img`
  text-align: center;
  justify-self: center;
  width: 120px;
  margin-top: 4em;

  @media screen and (max-width: 960px) {
    width: 120px;
  }
`,Zc=g.p`
  font-size: 16px;
  font-weight: 500;
  margin: 2px;

  @media screen and (max-width: 960px) {
    margin: 8px;
  }
`,rx=ye.forwardRef((e,t)=>a.jsxs(Xy,{ref:t,children:[a.jsx(tx,{children:a.jsx(An,{to:"/",children:a.jsx(nx,{src:ts,alt:"the letters P and E merged together to form the logo Paul Evans Creative"})})}),a.jsx(ix,{}),a.jsxs(_y,{children:[a.jsx(Zc,{children:"Copyright 2024."}),a.jsx(Zc,{children:"Paul Evans."}),a.jsx(Ky,{children:a.jsx("a",{href:"mailto:paul.evans.creative@gmail.com",children:"paul.evans.creative@gmail.com"})}),a.jsx(Zy,{children:a.jsx("a",{href:"tel:+46739908858",children:"+46739908858"})})]})]})),ix=()=>a.jsx(qy,{children:a.jsx(os.Provider,{value:{size:"2em"},children:Hy.map(e=>a.jsxs(Jy,{href:e.href,target:e.target,rel:e.rel,children:[e.icon,a.jsx(ex,{children:e.des})]},e.id))})}),ox=()=>{const{pathname:e}=mr();return j.useEffect(()=>{window.scrollTo(0,0)},[e]),null},lx=g.div`
  min-height: 100%;
  max-width: 100vw;
`,ax=g.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: space-evenly;
`,sx=()=>{const e=j.useRef(null);return a.jsxs(mg,{children:[a.jsx(ox,{}),a.jsxs(lx,{children:[a.jsx(Bg,{footerRef:e}),a.jsxs(ax,{children:[a.jsxs(sg,{children:[a.jsx(bn,{path:"/",element:a.jsx(mv,{})}),a.jsx(bn,{path:"/casestudies",element:a.jsx(Uv,{})}),a.jsx(bn,{path:"/about",element:a.jsx(uy,{})}),a.jsx(bn,{path:"/lipusplus",element:a.jsx(Py,{})}),a.jsx(bn,{path:"/ebie",element:a.jsx(Vy,{})})]}),a.jsx(rx,{ref:e})]}),a.jsx($y,{})]})]})};Jl.createRoot(document.getElementById("root")).render(a.jsx(ye.StrictMode,{children:a.jsx(sx,{})}));
