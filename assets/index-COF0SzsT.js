function qp(l,s){for(var a=0;a<s.length;a++){const c=s[a];if(typeof c!="string"&&!Array.isArray(c)){for(const d in c)if(d!=="default"&&!(d in l)){const p=Object.getOwnPropertyDescriptor(c,d);p&&Object.defineProperty(l,d,p.get?p:{enumerable:!0,get:()=>c[d]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function a(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(d){if(d.ep)return;d.ep=!0;const p=a(d);fetch(d.href,p)}})();function ts(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var ja={exports:{}},qr={},Pa={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zc;function em(){if(Zc)return fe;Zc=1;var l=Symbol.for("react.element"),s=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),g=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),P=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),I=Symbol.iterator;function U(x){return x===null||typeof x!="object"?null:(x=I&&x[I]||x["@@iterator"],typeof x=="function"?x:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,z={};function w(x,E,L){this.props=x,this.context=E,this.refs=z,this.updater=L||b}w.prototype.isReactComponent={},w.prototype.setState=function(x,E){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,E,"setState")},w.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function H(){}H.prototype=w.prototype;function Q(x,E,L){this.props=x,this.context=E,this.refs=z,this.updater=L||b}var Y=Q.prototype=new H;Y.constructor=Q,B(Y,w.prototype),Y.isPureReactComponent=!0;var J=Array.isArray,N=Object.prototype.hasOwnProperty,de={current:null},ke={key:!0,ref:!0,__self:!0,__source:!0};function Ce(x,E,L){var F,X={},k=null,re=null;if(E!=null)for(F in E.ref!==void 0&&(re=E.ref),E.key!==void 0&&(k=""+E.key),E)N.call(E,F)&&!ke.hasOwnProperty(F)&&(X[F]=E[F]);var O=arguments.length-2;if(O===1)X.children=L;else if(1<O){for(var oe=Array(O),ue=0;ue<O;ue++)oe[ue]=arguments[ue+2];X.children=oe}if(x&&x.defaultProps)for(F in O=x.defaultProps,O)X[F]===void 0&&(X[F]=O[F]);return{$$typeof:l,type:x,key:k,ref:re,props:X,_owner:de.current}}function Me(x,E){return{$$typeof:l,type:x.type,key:E,ref:x.ref,props:x.props,_owner:x._owner}}function Fe(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function nt(x){var E={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(L){return E[L]})}var Pe=/\/+/g;function Ee(x,E){return typeof x=="object"&&x!==null&&x.key!=null?nt(""+x.key):E.toString(36)}function ze(x,E,L,F,X){var k=typeof x;(k==="undefined"||k==="boolean")&&(x=null);var re=!1;if(x===null)re=!0;else switch(k){case"string":case"number":re=!0;break;case"object":switch(x.$$typeof){case l:case s:re=!0}}if(re)return re=x,X=X(re),x=F===""?"."+Ee(re,0):F,J(X)?(L="",x!=null&&(L=x.replace(Pe,"$&/")+"/"),ze(X,E,L,"",function(ue){return ue})):X!=null&&(Fe(X)&&(X=Me(X,L+(!X.key||re&&re.key===X.key?"":(""+X.key).replace(Pe,"$&/")+"/")+x)),E.push(X)),1;if(re=0,F=F===""?".":F+":",J(x))for(var O=0;O<x.length;O++){k=x[O];var oe=F+Ee(k,O);re+=ze(k,E,L,oe,X)}else if(oe=U(x),typeof oe=="function")for(x=oe.call(x),O=0;!(k=x.next()).done;)k=k.value,oe=F+Ee(k,O++),re+=ze(k,E,L,oe,X);else if(k==="object")throw E=String(x),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.");return re}function je(x,E,L){if(x==null)return x;var F=[],X=0;return ze(x,F,"","",function(k){return E.call(L,k,X++)}),F}function Le(x){if(x._status===-1){var E=x._result;E=E(),E.then(function(L){(x._status===0||x._status===-1)&&(x._status=1,x._result=L)},function(L){(x._status===0||x._status===-1)&&(x._status=2,x._result=L)}),x._status===-1&&(x._status=0,x._result=E)}if(x._status===1)return x._result.default;throw x._result}var pe={current:null},W={transition:null},ne={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:W,ReactCurrentOwner:de};function G(){throw Error("act(...) is not supported in production builds of React.")}return fe.Children={map:je,forEach:function(x,E,L){je(x,function(){E.apply(this,arguments)},L)},count:function(x){var E=0;return je(x,function(){E++}),E},toArray:function(x){return je(x,function(E){return E})||[]},only:function(x){if(!Fe(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},fe.Component=w,fe.Fragment=a,fe.Profiler=d,fe.PureComponent=Q,fe.StrictMode=c,fe.Suspense=S,fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,fe.act=G,fe.cloneElement=function(x,E,L){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var F=B({},x.props),X=x.key,k=x.ref,re=x._owner;if(E!=null){if(E.ref!==void 0&&(k=E.ref,re=de.current),E.key!==void 0&&(X=""+E.key),x.type&&x.type.defaultProps)var O=x.type.defaultProps;for(oe in E)N.call(E,oe)&&!ke.hasOwnProperty(oe)&&(F[oe]=E[oe]===void 0&&O!==void 0?O[oe]:E[oe])}var oe=arguments.length-2;if(oe===1)F.children=L;else if(1<oe){O=Array(oe);for(var ue=0;ue<oe;ue++)O[ue]=arguments[ue+2];F.children=O}return{$$typeof:l,type:x.type,key:X,ref:k,props:F,_owner:re}},fe.createContext=function(x){return x={$$typeof:g,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:p,_context:x},x.Consumer=x},fe.createElement=Ce,fe.createFactory=function(x){var E=Ce.bind(null,x);return E.type=x,E},fe.createRef=function(){return{current:null}},fe.forwardRef=function(x){return{$$typeof:v,render:x}},fe.isValidElement=Fe,fe.lazy=function(x){return{$$typeof:T,_payload:{_status:-1,_result:x},_init:Le}},fe.memo=function(x,E){return{$$typeof:P,type:x,compare:E===void 0?null:E}},fe.startTransition=function(x){var E=W.transition;W.transition={};try{x()}finally{W.transition=E}},fe.unstable_act=G,fe.useCallback=function(x,E){return pe.current.useCallback(x,E)},fe.useContext=function(x){return pe.current.useContext(x)},fe.useDebugValue=function(){},fe.useDeferredValue=function(x){return pe.current.useDeferredValue(x)},fe.useEffect=function(x,E){return pe.current.useEffect(x,E)},fe.useId=function(){return pe.current.useId()},fe.useImperativeHandle=function(x,E,L){return pe.current.useImperativeHandle(x,E,L)},fe.useInsertionEffect=function(x,E){return pe.current.useInsertionEffect(x,E)},fe.useLayoutEffect=function(x,E){return pe.current.useLayoutEffect(x,E)},fe.useMemo=function(x,E){return pe.current.useMemo(x,E)},fe.useReducer=function(x,E,L){return pe.current.useReducer(x,E,L)},fe.useRef=function(x){return pe.current.useRef(x)},fe.useState=function(x){return pe.current.useState(x)},fe.useSyncExternalStore=function(x,E,L){return pe.current.useSyncExternalStore(x,E,L)},fe.useTransition=function(){return pe.current.useTransition()},fe.version="18.3.1",fe}var Jc;function ns(){return Jc||(Jc=1,Pa.exports=em()),Pa.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc;function tm(){if(qc)return qr;qc=1;var l=ns(),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function g(v,S,P){var T,I={},U=null,b=null;P!==void 0&&(U=""+P),S.key!==void 0&&(U=""+S.key),S.ref!==void 0&&(b=S.ref);for(T in S)c.call(S,T)&&!p.hasOwnProperty(T)&&(I[T]=S[T]);if(v&&v.defaultProps)for(T in S=v.defaultProps,S)I[T]===void 0&&(I[T]=S[T]);return{$$typeof:s,type:v,key:U,ref:b,props:I,_owner:d.current}}return qr.Fragment=a,qr.jsx=g,qr.jsxs=g,qr}var ed;function nm(){return ed||(ed=1,ja.exports=tm()),ja.exports}var m=nm(),$=ns();const Qe=ts($),rm=qp({__proto__:null,default:Qe},[$]);var gl={},_a={exports:{}},ht={},Ra={exports:{}},Ia={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var td;function im(){return td||(td=1,function(l){function s(W,ne){var G=W.length;W.push(ne);e:for(;0<G;){var x=G-1>>>1,E=W[x];if(0<d(E,ne))W[x]=ne,W[G]=E,G=x;else break e}}function a(W){return W.length===0?null:W[0]}function c(W){if(W.length===0)return null;var ne=W[0],G=W.pop();if(G!==ne){W[0]=G;e:for(var x=0,E=W.length,L=E>>>1;x<L;){var F=2*(x+1)-1,X=W[F],k=F+1,re=W[k];if(0>d(X,G))k<E&&0>d(re,X)?(W[x]=re,W[k]=G,x=k):(W[x]=X,W[F]=G,x=F);else if(k<E&&0>d(re,G))W[x]=re,W[k]=G,x=k;else break e}}return ne}function d(W,ne){var G=W.sortIndex-ne.sortIndex;return G!==0?G:W.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;l.unstable_now=function(){return p.now()}}else{var g=Date,v=g.now();l.unstable_now=function(){return g.now()-v}}var S=[],P=[],T=1,I=null,U=3,b=!1,B=!1,z=!1,w=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Y(W){for(var ne=a(P);ne!==null;){if(ne.callback===null)c(P);else if(ne.startTime<=W)c(P),ne.sortIndex=ne.expirationTime,s(S,ne);else break;ne=a(P)}}function J(W){if(z=!1,Y(W),!B)if(a(S)!==null)B=!0,Le(N);else{var ne=a(P);ne!==null&&pe(J,ne.startTime-W)}}function N(W,ne){B=!1,z&&(z=!1,H(Ce),Ce=-1),b=!0;var G=U;try{for(Y(ne),I=a(S);I!==null&&(!(I.expirationTime>ne)||W&&!nt());){var x=I.callback;if(typeof x=="function"){I.callback=null,U=I.priorityLevel;var E=x(I.expirationTime<=ne);ne=l.unstable_now(),typeof E=="function"?I.callback=E:I===a(S)&&c(S),Y(ne)}else c(S);I=a(S)}if(I!==null)var L=!0;else{var F=a(P);F!==null&&pe(J,F.startTime-ne),L=!1}return L}finally{I=null,U=G,b=!1}}var de=!1,ke=null,Ce=-1,Me=5,Fe=-1;function nt(){return!(l.unstable_now()-Fe<Me)}function Pe(){if(ke!==null){var W=l.unstable_now();Fe=W;var ne=!0;try{ne=ke(!0,W)}finally{ne?Ee():(de=!1,ke=null)}}else de=!1}var Ee;if(typeof Q=="function")Ee=function(){Q(Pe)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,je=ze.port2;ze.port1.onmessage=Pe,Ee=function(){je.postMessage(null)}}else Ee=function(){w(Pe,0)};function Le(W){ke=W,de||(de=!0,Ee())}function pe(W,ne){Ce=w(function(){W(l.unstable_now())},ne)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(W){W.callback=null},l.unstable_continueExecution=function(){B||b||(B=!0,Le(N))},l.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Me=0<W?Math.floor(1e3/W):5},l.unstable_getCurrentPriorityLevel=function(){return U},l.unstable_getFirstCallbackNode=function(){return a(S)},l.unstable_next=function(W){switch(U){case 1:case 2:case 3:var ne=3;break;default:ne=U}var G=U;U=ne;try{return W()}finally{U=G}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(W,ne){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var G=U;U=W;try{return ne()}finally{U=G}},l.unstable_scheduleCallback=function(W,ne,G){var x=l.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?x+G:x):G=x,W){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=G+E,W={id:T++,callback:ne,priorityLevel:W,startTime:G,expirationTime:E,sortIndex:-1},G>x?(W.sortIndex=G,s(P,W),a(S)===null&&W===a(P)&&(z?(H(Ce),Ce=-1):z=!0,pe(J,G-x))):(W.sortIndex=E,s(S,W),B||b||(B=!0,Le(N))),W},l.unstable_shouldYield=nt,l.unstable_wrapCallback=function(W){var ne=U;return function(){var G=U;U=ne;try{return W.apply(this,arguments)}finally{U=G}}}}(Ia)),Ia}var nd;function lm(){return nd||(nd=1,Ra.exports=im()),Ra.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd;function om(){if(rd)return ht;rd=1;var l=ns(),s=lm();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,d={};function p(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(d[e]=t,e=0;e<t.length;e++)c.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,P=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},I={};function U(e){return S.call(I,e)?!0:S.call(T,e)?!1:P.test(e)?I[e]=!0:(T[e]=!0,!1)}function b(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B(e,t,n,r){if(t===null||typeof t>"u"||b(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function z(e,t,n,r,i,o,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=u}var w={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){w[e]=new z(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];w[t]=new z(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){w[e]=new z(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){w[e]=new z(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){w[e]=new z(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){w[e]=new z(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){w[e]=new z(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){w[e]=new z(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){w[e]=new z(e,5,!1,e.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function Q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(H,Q);w[t]=new z(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(H,Q);w[t]=new z(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(H,Q);w[t]=new z(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){w[e]=new z(e,1,!1,e.toLowerCase(),null,!1,!1)}),w.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){w[e]=new z(e,1,!1,e.toLowerCase(),null,!0,!0)});function Y(e,t,n,r){var i=w.hasOwnProperty(t)?w[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(B(t,n,i,r)&&(n=null),r||i===null?U(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var J=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),de=Symbol.for("react.portal"),ke=Symbol.for("react.fragment"),Ce=Symbol.for("react.strict_mode"),Me=Symbol.for("react.profiler"),Fe=Symbol.for("react.provider"),nt=Symbol.for("react.context"),Pe=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),W=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,x;function E(e){if(x===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+e}var L=!1;function F(e,t){if(!e||L)return"";L=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(_){var r=_}Reflect.construct(e,[],t)}else{try{t.call()}catch(_){r=_}e.call(t.prototype)}else{try{throw Error()}catch(_){r=_}e()}}catch(_){if(_&&r&&typeof _.stack=="string"){for(var i=_.stack.split(`
`),o=r.stack.split(`
`),u=i.length-1,f=o.length-1;1<=u&&0<=f&&i[u]!==o[f];)f--;for(;1<=u&&0<=f;u--,f--)if(i[u]!==o[f]){if(u!==1||f!==1)do if(u--,f--,0>f||i[u]!==o[f]){var h=`
`+i[u].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=u&&0<=f);break}}}finally{L=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?E(e):""}function X(e){switch(e.tag){case 5:return E(e.type);case 16:return E("Lazy");case 13:return E("Suspense");case 19:return E("SuspenseList");case 0:case 2:case 15:return e=F(e.type,!1),e;case 11:return e=F(e.type.render,!1),e;case 1:return e=F(e.type,!0),e;default:return""}}function k(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ke:return"Fragment";case de:return"Portal";case Me:return"Profiler";case Ce:return"StrictMode";case Ee:return"Suspense";case ze:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nt:return(e.displayName||"Context")+".Consumer";case Fe:return(e._context.displayName||"Context")+".Provider";case Pe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case je:return t=e.displayName||null,t!==null?t:k(e.type)||"Memo";case Le:t=e._payload,e=e._init;try{return k(e(t))}catch{}}return null}function re(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return k(t);case 8:return t===Ce?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function O(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ue(e){var t=oe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(u){r=""+u,o.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function he(e){e._valueTracker||(e._valueTracker=ue(e))}function ce(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=oe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function De(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function be(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function me(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=O(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ge(e,t){t=t.checked,t!=null&&Y(e,"checked",t,!1)}function ge(e,t){Ge(e,t);var n=O(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bt(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bt(e,t.type,O(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function We(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bt(e,t,n){(t!=="number"||De(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Oe=Array.isArray;function Rt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+O(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Vt(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ut(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(a(92));if(Oe(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:O(n)}}function ae(e,t){var n=O(t.value),r=O(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Te(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Dn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Dn(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gt,ds=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gt=gt||document.createElement("div"),gt.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function hr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rf=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){rf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gr[t]=gr[e]})});function fs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gr.hasOwnProperty(e)&&gr[e]?(""+t).trim():t+"px"}function ps(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var lf=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Al(e,t){if(t){if(lf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function Ml(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fl=null;function Dl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ul=null,Un=null,Bn=null;function ms(e){if(e=Fr(e)){if(typeof Ul!="function")throw Error(a(280));var t=e.stateNode;t&&(t=Ti(t),Ul(e.stateNode,e.type,t))}}function hs(e){Un?Bn?Bn.push(e):Bn=[e]:Un=e}function gs(){if(Un){var e=Un,t=Bn;if(Bn=Un=null,ms(e),t)for(e=0;e<t.length;e++)ms(t[e])}}function ys(e,t){return e(t)}function vs(){}var Bl=!1;function xs(e,t,n){if(Bl)return e(t,n);Bl=!0;try{return ys(e,t,n)}finally{Bl=!1,(Un!==null||Bn!==null)&&(vs(),gs())}}function yr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ti(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var Vl=!1;if(v)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){Vl=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{Vl=!1}function of(e,t,n,r,i,o,u,f,h){var _=Array.prototype.slice.call(arguments,3);try{t.apply(n,_)}catch(M){this.onError(M)}}var xr=!1,ui=null,ci=!1,Wl=null,af={onError:function(e){xr=!0,ui=e}};function sf(e,t,n,r,i,o,u,f,h){xr=!1,ui=null,of.apply(af,arguments)}function uf(e,t,n,r,i,o,u,f,h){if(sf.apply(this,arguments),xr){if(xr){var _=ui;xr=!1,ui=null}else throw Error(a(198));ci||(ci=!0,Wl=_)}}function kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ws(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ss(e){if(kn(e)!==e)throw Error(a(188))}function cf(e){var t=e.alternate;if(!t){if(t=kn(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ss(i),e;if(o===r)return Ss(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var u=!1,f=i.child;f;){if(f===n){u=!0,n=i,r=o;break}if(f===r){u=!0,r=i,n=o;break}f=f.sibling}if(!u){for(f=o.child;f;){if(f===n){u=!0,n=o,r=i;break}if(f===r){u=!0,r=o,n=i;break}f=f.sibling}if(!u)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function ks(e){return e=cf(e),e!==null?Cs(e):null}function Cs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cs(e);if(t!==null)return t;e=e.sibling}return null}var Es=s.unstable_scheduleCallback,js=s.unstable_cancelCallback,df=s.unstable_shouldYield,ff=s.unstable_requestPaint,Be=s.unstable_now,pf=s.unstable_getCurrentPriorityLevel,Hl=s.unstable_ImmediatePriority,Ps=s.unstable_UserBlockingPriority,di=s.unstable_NormalPriority,mf=s.unstable_LowPriority,_s=s.unstable_IdlePriority,fi=null,At=null;function hf(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(fi,e,void 0,(e.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:vf,gf=Math.log,yf=Math.LN2;function vf(e){return e>>>=0,e===0?32:31-(gf(e)/yf|0)|0}var pi=64,mi=4194304;function wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,u=n&268435455;if(u!==0){var f=u&~i;f!==0?r=wr(f):(o&=u,o!==0&&(r=wr(o)))}else u=n&~i,u!==0?r=wr(u):o!==0&&(r=wr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-It(t),i=1<<n,r|=e[n],t&=~i;return r}function xf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var u=31-It(o),f=1<<u,h=i[u];h===-1?(!(f&n)||f&r)&&(i[u]=xf(f,t)):h<=t&&(e.expiredLanes|=f),o&=~f}}function Ql(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rs(){var e=pi;return pi<<=1,!(pi&4194240)&&(pi=64),e}function Yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-It(t),e[t]=n}function Sf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-It(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Gl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-It(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Se=0;function Is(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zs,Xl,Ts,Ns,Ls,Kl=!1,gi=[],Jt=null,qt=null,en=null,kr=new Map,Cr=new Map,tn=[],kf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Os(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cr.delete(t.pointerId)}}function Er(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Fr(t),t!==null&&Xl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Cf(e,t,n,r,i){switch(t){case"focusin":return Jt=Er(Jt,e,t,n,r,i),!0;case"dragenter":return qt=Er(qt,e,t,n,r,i),!0;case"mouseover":return en=Er(en,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return kr.set(o,Er(kr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Cr.set(o,Er(Cr.get(o)||null,e,t,n,r,i)),!0}return!1}function $s(e){var t=Cn(e.target);if(t!==null){var n=kn(t);if(n!==null){if(t=n.tag,t===13){if(t=ws(n),t!==null){e.blockedOn=t,Ls(e.priority,function(){Ts(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fl=r,n.target.dispatchEvent(r),Fl=null}else return t=Fr(n),t!==null&&Xl(t),e.blockedOn=n,!1;t.shift()}return!0}function As(e,t,n){yi(e)&&n.delete(t)}function Ef(){Kl=!1,Jt!==null&&yi(Jt)&&(Jt=null),qt!==null&&yi(qt)&&(qt=null),en!==null&&yi(en)&&(en=null),kr.forEach(As),Cr.forEach(As)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,Kl||(Kl=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Ef)))}function Pr(e){function t(i){return jr(i,e)}if(0<gi.length){jr(gi[0],e);for(var n=1;n<gi.length;n++){var r=gi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&jr(Jt,e),qt!==null&&jr(qt,e),en!==null&&jr(en,e),kr.forEach(t),Cr.forEach(t),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)$s(n),n.blockedOn===null&&tn.shift()}var Vn=J.ReactCurrentBatchConfig,vi=!0;function jf(e,t,n,r){var i=Se,o=Vn.transition;Vn.transition=null;try{Se=1,bl(e,t,n,r)}finally{Se=i,Vn.transition=o}}function Pf(e,t,n,r){var i=Se,o=Vn.transition;Vn.transition=null;try{Se=4,bl(e,t,n,r)}finally{Se=i,Vn.transition=o}}function bl(e,t,n,r){if(vi){var i=Zl(e,t,n,r);if(i===null)ho(e,t,r,xi,n),Os(e,r);else if(Cf(i,e,t,n,r))r.stopPropagation();else if(Os(e,r),t&4&&-1<kf.indexOf(e)){for(;i!==null;){var o=Fr(i);if(o!==null&&zs(o),o=Zl(e,t,n,r),o===null&&ho(e,t,r,xi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ho(e,t,r,null,n)}}var xi=null;function Zl(e,t,n,r){if(xi=null,e=Dl(r),e=Cn(e),e!==null)if(t=kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ws(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xi=e,null}function Ms(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pf()){case Hl:return 1;case Ps:return 4;case di:case mf:return 16;case _s:return 536870912;default:return 16}default:return 16}}var nn=null,Jl=null,wi=null;function Fs(){if(wi)return wi;var e,t=Jl,n=t.length,r,i="value"in nn?nn.value:nn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===i[o-r];r++);return wi=i.slice(e,1<r?1-r:void 0)}function Si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function Ds(){return!1}function yt(e){function t(n,r,i,o,u){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(o):o[f]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ki:Ds,this.isPropagationStopped=Ds,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=yt(Wn),_r=G({},Wn,{view:0,detail:0}),_f=yt(_r),eo,to,Rr,Ci=G({},_r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rr&&(Rr&&e.type==="mousemove"?(eo=e.screenX-Rr.screenX,to=e.screenY-Rr.screenY):to=eo=0,Rr=e),eo)},movementY:function(e){return"movementY"in e?e.movementY:to}}),Us=yt(Ci),Rf=G({},Ci,{dataTransfer:0}),If=yt(Rf),zf=G({},_r,{relatedTarget:0}),no=yt(zf),Tf=G({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nf=yt(Tf),Lf=G({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Of=yt(Lf),$f=G({},Wn,{data:0}),Bs=yt($f),Af={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ff={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Df(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ff[e])?!!t[e]:!1}function ro(){return Df}var Uf=G({},_r,{key:function(e){if(e.key){var t=Af[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ro,charCode:function(e){return e.type==="keypress"?Si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bf=yt(Uf),Vf=G({},Ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vs=yt(Vf),Wf=G({},_r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ro}),Hf=yt(Wf),Qf=G({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yf=yt(Qf),Gf=G({},Ci,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xf=yt(Gf),Kf=[9,13,27,32],io=v&&"CompositionEvent"in window,Ir=null;v&&"documentMode"in document&&(Ir=document.documentMode);var bf=v&&"TextEvent"in window&&!Ir,Ws=v&&(!io||Ir&&8<Ir&&11>=Ir),Hs=" ",Qs=!1;function Ys(e,t){switch(e){case"keyup":return Kf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hn=!1;function Zf(e,t){switch(e){case"compositionend":return Gs(t);case"keypress":return t.which!==32?null:(Qs=!0,Hs);case"textInput":return e=t.data,e===Hs&&Qs?null:e;default:return null}}function Jf(e,t){if(Hn)return e==="compositionend"||!io&&Ys(e,t)?(e=Fs(),wi=Jl=nn=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ws&&t.locale!=="ko"?null:t.data;default:return null}}var qf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qf[e.type]:t==="textarea"}function Ks(e,t,n,r){hs(r),t=Ri(t,"onChange"),0<t.length&&(n=new ql("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zr=null,Tr=null;function ep(e){pu(e,0)}function Ei(e){var t=Kn(e);if(ce(t))return e}function tp(e,t){if(e==="change")return t}var bs=!1;if(v){var lo;if(v){var oo="oninput"in document;if(!oo){var Zs=document.createElement("div");Zs.setAttribute("oninput","return;"),oo=typeof Zs.oninput=="function"}lo=oo}else lo=!1;bs=lo&&(!document.documentMode||9<document.documentMode)}function Js(){zr&&(zr.detachEvent("onpropertychange",qs),Tr=zr=null)}function qs(e){if(e.propertyName==="value"&&Ei(Tr)){var t=[];Ks(t,Tr,e,Dl(e)),xs(ep,t)}}function np(e,t,n){e==="focusin"?(Js(),zr=t,Tr=n,zr.attachEvent("onpropertychange",qs)):e==="focusout"&&Js()}function rp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(Tr)}function ip(e,t){if(e==="click")return Ei(t)}function lp(e,t){if(e==="input"||e==="change")return Ei(t)}function op(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:op;function Nr(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!S.call(t,i)||!zt(e[i],t[i]))return!1}return!0}function eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tu(e,t){var n=eu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eu(n)}}function nu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ru(){for(var e=window,t=De();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=De(e.document)}return t}function ao(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ap(e){var t=ru(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&nu(n.ownerDocument.documentElement,n)){if(r!==null&&ao(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=tu(n,o);var u=tu(n,r);i&&u&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sp=v&&"documentMode"in document&&11>=document.documentMode,Qn=null,so=null,Lr=null,uo=!1;function iu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uo||Qn==null||Qn!==De(r)||(r=Qn,"selectionStart"in r&&ao(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Nr(Lr,r)||(Lr=r,r=Ri(so,"onSelect"),0<r.length&&(t=new ql("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qn)))}function ji(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yn={animationend:ji("Animation","AnimationEnd"),animationiteration:ji("Animation","AnimationIteration"),animationstart:ji("Animation","AnimationStart"),transitionend:ji("Transition","TransitionEnd")},co={},lu={};v&&(lu=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function Pi(e){if(co[e])return co[e];if(!Yn[e])return e;var t=Yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lu)return co[e]=t[n];return e}var ou=Pi("animationend"),au=Pi("animationiteration"),su=Pi("animationstart"),uu=Pi("transitionend"),cu=new Map,du="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){cu.set(e,t),p(t,[e])}for(var fo=0;fo<du.length;fo++){var po=du[fo],up=po.toLowerCase(),cp=po[0].toUpperCase()+po.slice(1);rn(up,"on"+cp)}rn(ou,"onAnimationEnd"),rn(au,"onAnimationIteration"),rn(su,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn(uu,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));function fu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,uf(r,t,void 0,e),e.currentTarget=null}function pu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var u=r.length-1;0<=u;u--){var f=r[u],h=f.instance,_=f.currentTarget;if(f=f.listener,h!==o&&i.isPropagationStopped())break e;fu(i,f,_),o=h}else for(u=0;u<r.length;u++){if(f=r[u],h=f.instance,_=f.currentTarget,f=f.listener,h!==o&&i.isPropagationStopped())break e;fu(i,f,_),o=h}}}if(ci)throw e=Wl,ci=!1,Wl=null,e}function Re(e,t){var n=t[So];n===void 0&&(n=t[So]=new Set);var r=e+"__bubble";n.has(r)||(mu(t,e,2,!1),n.add(r))}function mo(e,t,n){var r=0;t&&(r|=4),mu(n,e,r,t)}var _i="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[_i]){e[_i]=!0,c.forEach(function(n){n!=="selectionchange"&&(dp.has(n)||mo(n,!1,e),mo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_i]||(t[_i]=!0,mo("selectionchange",!1,t))}}function mu(e,t,n,r){switch(Ms(t)){case 1:var i=jf;break;case 4:i=Pf;break;default:i=bl}n=i.bind(null,t,n,e),i=void 0,!Vl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ho(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var f=r.stateNode.containerInfo;if(f===i||f.nodeType===8&&f.parentNode===i)break;if(u===4)for(u=r.return;u!==null;){var h=u.tag;if((h===3||h===4)&&(h=u.stateNode.containerInfo,h===i||h.nodeType===8&&h.parentNode===i))return;u=u.return}for(;f!==null;){if(u=Cn(f),u===null)return;if(h=u.tag,h===5||h===6){r=o=u;continue e}f=f.parentNode}}r=r.return}xs(function(){var _=o,M=Dl(n),D=[];e:{var A=cu.get(e);if(A!==void 0){var K=ql,q=e;switch(e){case"keypress":if(Si(n)===0)break e;case"keydown":case"keyup":K=Bf;break;case"focusin":q="focus",K=no;break;case"focusout":q="blur",K=no;break;case"beforeblur":case"afterblur":K=no;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Us;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=If;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=Hf;break;case ou:case au:case su:K=Nf;break;case uu:K=Yf;break;case"scroll":K=_f;break;case"wheel":K=Xf;break;case"copy":case"cut":case"paste":K=Of;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=Vs}var ee=(t&4)!==0,Ve=!ee&&e==="scroll",C=ee?A!==null?A+"Capture":null:A;ee=[];for(var y=_,j;y!==null;){j=y;var V=j.stateNode;if(j.tag===5&&V!==null&&(j=V,C!==null&&(V=yr(y,C),V!=null&&ee.push(Ar(y,V,j)))),Ve)break;y=y.return}0<ee.length&&(A=new K(A,q,null,n,M),D.push({event:A,listeners:ee}))}}if(!(t&7)){e:{if(A=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",A&&n!==Fl&&(q=n.relatedTarget||n.fromElement)&&(Cn(q)||q[Wt]))break e;if((K||A)&&(A=M.window===M?M:(A=M.ownerDocument)?A.defaultView||A.parentWindow:window,K?(q=n.relatedTarget||n.toElement,K=_,q=q?Cn(q):null,q!==null&&(Ve=kn(q),q!==Ve||q.tag!==5&&q.tag!==6)&&(q=null)):(K=null,q=_),K!==q)){if(ee=Us,V="onMouseLeave",C="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Vs,V="onPointerLeave",C="onPointerEnter",y="pointer"),Ve=K==null?A:Kn(K),j=q==null?A:Kn(q),A=new ee(V,y+"leave",K,n,M),A.target=Ve,A.relatedTarget=j,V=null,Cn(M)===_&&(ee=new ee(C,y+"enter",q,n,M),ee.target=j,ee.relatedTarget=Ve,V=ee),Ve=V,K&&q)t:{for(ee=K,C=q,y=0,j=ee;j;j=Gn(j))y++;for(j=0,V=C;V;V=Gn(V))j++;for(;0<y-j;)ee=Gn(ee),y--;for(;0<j-y;)C=Gn(C),j--;for(;y--;){if(ee===C||C!==null&&ee===C.alternate)break t;ee=Gn(ee),C=Gn(C)}ee=null}else ee=null;K!==null&&hu(D,A,K,ee,!1),q!==null&&Ve!==null&&hu(D,Ve,q,ee,!0)}}e:{if(A=_?Kn(_):window,K=A.nodeName&&A.nodeName.toLowerCase(),K==="select"||K==="input"&&A.type==="file")var te=tp;else if(Xs(A))if(bs)te=lp;else{te=rp;var ie=np}else(K=A.nodeName)&&K.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(te=ip);if(te&&(te=te(e,_))){Ks(D,te,n,M);break e}ie&&ie(e,A,_),e==="focusout"&&(ie=A._wrapperState)&&ie.controlled&&A.type==="number"&&Bt(A,"number",A.value)}switch(ie=_?Kn(_):window,e){case"focusin":(Xs(ie)||ie.contentEditable==="true")&&(Qn=ie,so=_,Lr=null);break;case"focusout":Lr=so=Qn=null;break;case"mousedown":uo=!0;break;case"contextmenu":case"mouseup":case"dragend":uo=!1,iu(D,n,M);break;case"selectionchange":if(sp)break;case"keydown":case"keyup":iu(D,n,M)}var le;if(io)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else Hn?Ys(e,n)&&(se="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(se="onCompositionStart");se&&(Ws&&n.locale!=="ko"&&(Hn||se!=="onCompositionStart"?se==="onCompositionEnd"&&Hn&&(le=Fs()):(nn=M,Jl="value"in nn?nn.value:nn.textContent,Hn=!0)),ie=Ri(_,se),0<ie.length&&(se=new Bs(se,e,null,n,M),D.push({event:se,listeners:ie}),le?se.data=le:(le=Gs(n),le!==null&&(se.data=le)))),(le=bf?Zf(e,n):Jf(e,n))&&(_=Ri(_,"onBeforeInput"),0<_.length&&(M=new Bs("onBeforeInput","beforeinput",null,n,M),D.push({event:M,listeners:_}),M.data=le))}pu(D,t)})}function Ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ri(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=yr(e,n),o!=null&&r.unshift(Ar(e,o,i)),o=yr(e,t),o!=null&&r.push(Ar(e,o,i))),e=e.return}return r}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hu(e,t,n,r,i){for(var o=t._reactName,u=[];n!==null&&n!==r;){var f=n,h=f.alternate,_=f.stateNode;if(h!==null&&h===r)break;f.tag===5&&_!==null&&(f=_,i?(h=yr(n,o),h!=null&&u.unshift(Ar(n,h,f))):i||(h=yr(n,o),h!=null&&u.push(Ar(n,h,f)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var fp=/\r\n?/g,pp=/\u0000|\uFFFD/g;function gu(e){return(typeof e=="string"?e:""+e).replace(fp,`
`).replace(pp,"")}function Ii(e,t,n){if(t=gu(t),gu(e)!==t&&n)throw Error(a(425))}function zi(){}var go=null,yo=null;function vo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xo=typeof setTimeout=="function"?setTimeout:void 0,mp=typeof clearTimeout=="function"?clearTimeout:void 0,yu=typeof Promise=="function"?Promise:void 0,hp=typeof queueMicrotask=="function"?queueMicrotask:typeof yu<"u"?function(e){return yu.resolve(null).then(e).catch(gp)}:xo;function gp(e){setTimeout(function(){throw e})}function wo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Pr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pr(t)}function ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xn=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Xn,Mr="__reactProps$"+Xn,Wt="__reactContainer$"+Xn,So="__reactEvents$"+Xn,yp="__reactListeners$"+Xn,vp="__reactHandles$"+Xn;function Cn(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wt]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vu(e);e!==null;){if(n=e[Mt])return n;e=vu(e)}return t}e=n,n=e.parentNode}return null}function Fr(e){return e=e[Mt]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function Ti(e){return e[Mr]||null}var ko=[],bn=-1;function on(e){return{current:e}}function Ie(e){0>bn||(e.current=ko[bn],ko[bn]=null,bn--)}function _e(e,t){bn++,ko[bn]=e.current,e.current=t}var an={},rt=on(an),ct=on(!1),En=an;function Zn(e,t){var n=e.type.contextTypes;if(!n)return an;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function dt(e){return e=e.childContextTypes,e!=null}function Ni(){Ie(ct),Ie(rt)}function xu(e,t,n){if(rt.current!==an)throw Error(a(168));_e(rt,t),_e(ct,n)}function wu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(a(108,re(e)||"Unknown",i));return G({},n,r)}function Li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||an,En=rt.current,_e(rt,e),_e(ct,ct.current),!0}function Su(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=wu(e,t,En),r.__reactInternalMemoizedMergedChildContext=e,Ie(ct),Ie(rt),_e(rt,e)):Ie(ct),_e(ct,n)}var Ht=null,Oi=!1,Co=!1;function ku(e){Ht===null?Ht=[e]:Ht.push(e)}function xp(e){Oi=!0,ku(e)}function sn(){if(!Co&&Ht!==null){Co=!0;var e=0,t=Se;try{var n=Ht;for(Se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ht=null,Oi=!1}catch(i){throw Ht!==null&&(Ht=Ht.slice(e+1)),Es(Hl,sn),i}finally{Se=t,Co=!1}}return null}var Jn=[],qn=0,$i=null,Ai=0,St=[],kt=0,jn=null,Qt=1,Yt="";function Pn(e,t){Jn[qn++]=Ai,Jn[qn++]=$i,$i=e,Ai=t}function Cu(e,t,n){St[kt++]=Qt,St[kt++]=Yt,St[kt++]=jn,jn=e;var r=Qt;e=Yt;var i=32-It(r)-1;r&=~(1<<i),n+=1;var o=32-It(t)+i;if(30<o){var u=i-i%5;o=(r&(1<<u)-1).toString(32),r>>=u,i-=u,Qt=1<<32-It(t)+i|n<<i|r,Yt=o+e}else Qt=1<<o|n<<i|r,Yt=e}function Eo(e){e.return!==null&&(Pn(e,1),Cu(e,1,0))}function jo(e){for(;e===$i;)$i=Jn[--qn],Jn[qn]=null,Ai=Jn[--qn],Jn[qn]=null;for(;e===jn;)jn=St[--kt],St[kt]=null,Yt=St[--kt],St[kt]=null,Qt=St[--kt],St[kt]=null}var vt=null,xt=null,Ne=!1,Tt=null;function Eu(e,t){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ju(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,xt=ln(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,xt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jn!==null?{id:Qt,overflow:Yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,vt=e,xt=null,!0):!1;default:return!1}}function Po(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _o(e){if(Ne){var t=xt;if(t){var n=t;if(!ju(e,t)){if(Po(e))throw Error(a(418));t=ln(n.nextSibling);var r=vt;t&&ju(e,t)?Eu(r,n):(e.flags=e.flags&-4097|2,Ne=!1,vt=e)}}else{if(Po(e))throw Error(a(418));e.flags=e.flags&-4097|2,Ne=!1,vt=e}}}function Pu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function Mi(e){if(e!==vt)return!1;if(!Ne)return Pu(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vo(e.type,e.memoizedProps)),t&&(t=xt)){if(Po(e))throw _u(),Error(a(418));for(;t;)Eu(e,t),t=ln(t.nextSibling)}if(Pu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xt=ln(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xt=null}}else xt=vt?ln(e.stateNode.nextSibling):null;return!0}function _u(){for(var e=xt;e;)e=ln(e.nextSibling)}function er(){xt=vt=null,Ne=!1}function Ro(e){Tt===null?Tt=[e]:Tt.push(e)}var wp=J.ReactCurrentBatchConfig;function Dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(u){var f=i.refs;u===null?delete f[o]:f[o]=u},t._stringRef=o,t)}if(typeof e!="string")throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function Fi(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ru(e){var t=e._init;return t(e._payload)}function Iu(e){function t(C,y){if(e){var j=C.deletions;j===null?(C.deletions=[y],C.flags|=16):j.push(y)}}function n(C,y){if(!e)return null;for(;y!==null;)t(C,y),y=y.sibling;return null}function r(C,y){for(C=new Map;y!==null;)y.key!==null?C.set(y.key,y):C.set(y.index,y),y=y.sibling;return C}function i(C,y){return C=gn(C,y),C.index=0,C.sibling=null,C}function o(C,y,j){return C.index=j,e?(j=C.alternate,j!==null?(j=j.index,j<y?(C.flags|=2,y):j):(C.flags|=2,y)):(C.flags|=1048576,y)}function u(C){return e&&C.alternate===null&&(C.flags|=2),C}function f(C,y,j,V){return y===null||y.tag!==6?(y=xa(j,C.mode,V),y.return=C,y):(y=i(y,j),y.return=C,y)}function h(C,y,j,V){var te=j.type;return te===ke?M(C,y,j.props.children,V,j.key):y!==null&&(y.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Le&&Ru(te)===y.type)?(V=i(y,j.props),V.ref=Dr(C,y,j),V.return=C,V):(V=sl(j.type,j.key,j.props,null,C.mode,V),V.ref=Dr(C,y,j),V.return=C,V)}function _(C,y,j,V){return y===null||y.tag!==4||y.stateNode.containerInfo!==j.containerInfo||y.stateNode.implementation!==j.implementation?(y=wa(j,C.mode,V),y.return=C,y):(y=i(y,j.children||[]),y.return=C,y)}function M(C,y,j,V,te){return y===null||y.tag!==7?(y=On(j,C.mode,V,te),y.return=C,y):(y=i(y,j),y.return=C,y)}function D(C,y,j){if(typeof y=="string"&&y!==""||typeof y=="number")return y=xa(""+y,C.mode,j),y.return=C,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case N:return j=sl(y.type,y.key,y.props,null,C.mode,j),j.ref=Dr(C,null,y),j.return=C,j;case de:return y=wa(y,C.mode,j),y.return=C,y;case Le:var V=y._init;return D(C,V(y._payload),j)}if(Oe(y)||ne(y))return y=On(y,C.mode,j,null),y.return=C,y;Fi(C,y)}return null}function A(C,y,j,V){var te=y!==null?y.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return te!==null?null:f(C,y,""+j,V);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case N:return j.key===te?h(C,y,j,V):null;case de:return j.key===te?_(C,y,j,V):null;case Le:return te=j._init,A(C,y,te(j._payload),V)}if(Oe(j)||ne(j))return te!==null?null:M(C,y,j,V,null);Fi(C,j)}return null}function K(C,y,j,V,te){if(typeof V=="string"&&V!==""||typeof V=="number")return C=C.get(j)||null,f(y,C,""+V,te);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case N:return C=C.get(V.key===null?j:V.key)||null,h(y,C,V,te);case de:return C=C.get(V.key===null?j:V.key)||null,_(y,C,V,te);case Le:var ie=V._init;return K(C,y,j,ie(V._payload),te)}if(Oe(V)||ne(V))return C=C.get(j)||null,M(y,C,V,te,null);Fi(y,V)}return null}function q(C,y,j,V){for(var te=null,ie=null,le=y,se=y=0,qe=null;le!==null&&se<j.length;se++){le.index>se?(qe=le,le=null):qe=le.sibling;var ve=A(C,le,j[se],V);if(ve===null){le===null&&(le=qe);break}e&&le&&ve.alternate===null&&t(C,le),y=o(ve,y,se),ie===null?te=ve:ie.sibling=ve,ie=ve,le=qe}if(se===j.length)return n(C,le),Ne&&Pn(C,se),te;if(le===null){for(;se<j.length;se++)le=D(C,j[se],V),le!==null&&(y=o(le,y,se),ie===null?te=le:ie.sibling=le,ie=le);return Ne&&Pn(C,se),te}for(le=r(C,le);se<j.length;se++)qe=K(le,C,se,j[se],V),qe!==null&&(e&&qe.alternate!==null&&le.delete(qe.key===null?se:qe.key),y=o(qe,y,se),ie===null?te=qe:ie.sibling=qe,ie=qe);return e&&le.forEach(function(yn){return t(C,yn)}),Ne&&Pn(C,se),te}function ee(C,y,j,V){var te=ne(j);if(typeof te!="function")throw Error(a(150));if(j=te.call(j),j==null)throw Error(a(151));for(var ie=te=null,le=y,se=y=0,qe=null,ve=j.next();le!==null&&!ve.done;se++,ve=j.next()){le.index>se?(qe=le,le=null):qe=le.sibling;var yn=A(C,le,ve.value,V);if(yn===null){le===null&&(le=qe);break}e&&le&&yn.alternate===null&&t(C,le),y=o(yn,y,se),ie===null?te=yn:ie.sibling=yn,ie=yn,le=qe}if(ve.done)return n(C,le),Ne&&Pn(C,se),te;if(le===null){for(;!ve.done;se++,ve=j.next())ve=D(C,ve.value,V),ve!==null&&(y=o(ve,y,se),ie===null?te=ve:ie.sibling=ve,ie=ve);return Ne&&Pn(C,se),te}for(le=r(C,le);!ve.done;se++,ve=j.next())ve=K(le,C,se,ve.value,V),ve!==null&&(e&&ve.alternate!==null&&le.delete(ve.key===null?se:ve.key),y=o(ve,y,se),ie===null?te=ve:ie.sibling=ve,ie=ve);return e&&le.forEach(function(Jp){return t(C,Jp)}),Ne&&Pn(C,se),te}function Ve(C,y,j,V){if(typeof j=="object"&&j!==null&&j.type===ke&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case N:e:{for(var te=j.key,ie=y;ie!==null;){if(ie.key===te){if(te=j.type,te===ke){if(ie.tag===7){n(C,ie.sibling),y=i(ie,j.props.children),y.return=C,C=y;break e}}else if(ie.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Le&&Ru(te)===ie.type){n(C,ie.sibling),y=i(ie,j.props),y.ref=Dr(C,ie,j),y.return=C,C=y;break e}n(C,ie);break}else t(C,ie);ie=ie.sibling}j.type===ke?(y=On(j.props.children,C.mode,V,j.key),y.return=C,C=y):(V=sl(j.type,j.key,j.props,null,C.mode,V),V.ref=Dr(C,y,j),V.return=C,C=V)}return u(C);case de:e:{for(ie=j.key;y!==null;){if(y.key===ie)if(y.tag===4&&y.stateNode.containerInfo===j.containerInfo&&y.stateNode.implementation===j.implementation){n(C,y.sibling),y=i(y,j.children||[]),y.return=C,C=y;break e}else{n(C,y);break}else t(C,y);y=y.sibling}y=wa(j,C.mode,V),y.return=C,C=y}return u(C);case Le:return ie=j._init,Ve(C,y,ie(j._payload),V)}if(Oe(j))return q(C,y,j,V);if(ne(j))return ee(C,y,j,V);Fi(C,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,y!==null&&y.tag===6?(n(C,y.sibling),y=i(y,j),y.return=C,C=y):(n(C,y),y=xa(j,C.mode,V),y.return=C,C=y),u(C)):n(C,y)}return Ve}var tr=Iu(!0),zu=Iu(!1),Di=on(null),Ui=null,nr=null,Io=null;function zo(){Io=nr=Ui=null}function To(e){var t=Di.current;Ie(Di),e._currentValue=t}function No(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rr(e,t){Ui=e,Io=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ft=!0),e.firstContext=null)}function Ct(e){var t=e._currentValue;if(Io!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(Ui===null)throw Error(a(308));nr=e,Ui.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var _n=null;function Lo(e){_n===null?_n=[e]:_n.push(e)}function Tu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Lo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gt(e,r)}function Gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var un=!1;function Oo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ye&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gt(e,n)}return i=r.interleaved,i===null?(t.next=t,Lo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gt(e,n)}function Bi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gl(e,n)}}function Lu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=u:o=o.next=u,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vi(e,t,n,r){var i=e.updateQueue;un=!1;var o=i.firstBaseUpdate,u=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var h=f,_=h.next;h.next=null,u===null?o=_:u.next=_,u=h;var M=e.alternate;M!==null&&(M=M.updateQueue,f=M.lastBaseUpdate,f!==u&&(f===null?M.firstBaseUpdate=_:f.next=_,M.lastBaseUpdate=h))}if(o!==null){var D=i.baseState;u=0,M=_=h=null,f=o;do{var A=f.lane,K=f.eventTime;if((r&A)===A){M!==null&&(M=M.next={eventTime:K,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var q=e,ee=f;switch(A=t,K=n,ee.tag){case 1:if(q=ee.payload,typeof q=="function"){D=q.call(K,D,A);break e}D=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=ee.payload,A=typeof q=="function"?q.call(K,D,A):q,A==null)break e;D=G({},D,A);break e;case 2:un=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,A=i.effects,A===null?i.effects=[f]:A.push(f))}else K={eventTime:K,lane:A,tag:f.tag,payload:f.payload,callback:f.callback,next:null},M===null?(_=M=K,h=D):M=M.next=K,u|=A;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;A=f,f=A.next,A.next=null,i.lastBaseUpdate=A,i.shared.pending=null}}while(!0);if(M===null&&(h=D),i.baseState=h,i.firstBaseUpdate=_,i.lastBaseUpdate=M,t=i.shared.interleaved,t!==null){i=t;do u|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);zn|=u,e.lanes=u,e.memoizedState=D}}function Ou(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(a(191,i));i.call(r)}}}var Ur={},Ft=on(Ur),Br=on(Ur),Vr=on(Ur);function Rn(e){if(e===Ur)throw Error(a(174));return e}function $o(e,t){switch(_e(Vr,t),_e(Br,e),_e(Ft,Ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sn(t,e)}Ie(Ft),_e(Ft,t)}function ir(){Ie(Ft),Ie(Br),Ie(Vr)}function $u(e){Rn(Vr.current);var t=Rn(Ft.current),n=Sn(t,e.type);t!==n&&(_e(Br,e),_e(Ft,n))}function Ao(e){Br.current===e&&(Ie(Ft),Ie(Br))}var $e=on(0);function Wi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mo=[];function Fo(){for(var e=0;e<Mo.length;e++)Mo[e]._workInProgressVersionPrimary=null;Mo.length=0}var Hi=J.ReactCurrentDispatcher,Do=J.ReactCurrentBatchConfig,In=0,Ae=null,Xe=null,Ze=null,Qi=!1,Wr=!1,Hr=0,Sp=0;function it(){throw Error(a(321))}function Uo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function Bo(e,t,n,r,i,o){if(In=o,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hi.current=e===null||e.memoizedState===null?jp:Pp,e=n(r,i),Wr){o=0;do{if(Wr=!1,Hr=0,25<=o)throw Error(a(301));o+=1,Ze=Xe=null,t.updateQueue=null,Hi.current=_p,e=n(r,i)}while(Wr)}if(Hi.current=Xi,t=Xe!==null&&Xe.next!==null,In=0,Ze=Xe=Ae=null,Qi=!1,t)throw Error(a(300));return e}function Vo(){var e=Hr!==0;return Hr=0,e}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Ae.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Et(){if(Xe===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=Ze===null?Ae.memoizedState:Ze.next;if(t!==null)Ze=t,Xe=e;else{if(e===null)throw Error(a(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},Ze===null?Ae.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function Qr(e,t){return typeof t=="function"?t(e):t}function Wo(e){var t=Et(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=Xe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var u=i.next;i.next=o.next,o.next=u}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var f=u=null,h=null,_=o;do{var M=_.lane;if((In&M)===M)h!==null&&(h=h.next={lane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),r=_.hasEagerState?_.eagerState:e(r,_.action);else{var D={lane:M,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null};h===null?(f=h=D,u=r):h=h.next=D,Ae.lanes|=M,zn|=M}_=_.next}while(_!==null&&_!==o);h===null?u=r:h.next=f,zt(r,t.memoizedState)||(ft=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=h,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ae.lanes|=o,zn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ho(e){var t=Et(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var u=i=i.next;do o=e(o,u.action),u=u.next;while(u!==i);zt(o,t.memoizedState)||(ft=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Au(){}function Mu(e,t){var n=Ae,r=Et(),i=t(),o=!zt(r.memoizedState,i);if(o&&(r.memoizedState=i,ft=!0),r=r.queue,Qo(Uu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,Yr(9,Du.bind(null,n,r,i,t),void 0,null),Je===null)throw Error(a(349));In&30||Fu(n,t,i)}return i}function Fu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Du(e,t,n,r){t.value=n,t.getSnapshot=r,Bu(t)&&Vu(e)}function Uu(e,t,n){return n(function(){Bu(t)&&Vu(e)})}function Bu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function Vu(e){var t=Gt(e,1);t!==null&&$t(t,e,1,-1)}function Wu(e){var t=Dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:e},t.queue=e,e=e.dispatch=Ep.bind(null,Ae,e),[t.memoizedState,e]}function Yr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hu(){return Et().memoizedState}function Yi(e,t,n,r){var i=Dt();Ae.flags|=e,i.memoizedState=Yr(1|t,n,void 0,r===void 0?null:r)}function Gi(e,t,n,r){var i=Et();r=r===void 0?null:r;var o=void 0;if(Xe!==null){var u=Xe.memoizedState;if(o=u.destroy,r!==null&&Uo(r,u.deps)){i.memoizedState=Yr(t,n,o,r);return}}Ae.flags|=e,i.memoizedState=Yr(1|t,n,o,r)}function Qu(e,t){return Yi(8390656,8,e,t)}function Qo(e,t){return Gi(2048,8,e,t)}function Yu(e,t){return Gi(4,2,e,t)}function Gu(e,t){return Gi(4,4,e,t)}function Xu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ku(e,t,n){return n=n!=null?n.concat([e]):null,Gi(4,4,Xu.bind(null,t,e),n)}function Yo(){}function bu(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zu(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ju(e,t,n){return In&21?(zt(n,t)||(n=Rs(),Ae.lanes|=n,zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ft=!0),e.memoizedState=n)}function kp(e,t){var n=Se;Se=n!==0&&4>n?n:4,e(!0);var r=Do.transition;Do.transition={};try{e(!1),t()}finally{Se=n,Do.transition=r}}function qu(){return Et().memoizedState}function Cp(e,t,n){var r=mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ec(e))tc(t,n);else if(n=Tu(e,t,n,r),n!==null){var i=st();$t(n,e,r,i),nc(n,t,r)}}function Ep(e,t,n){var r=mn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ec(e))tc(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var u=t.lastRenderedState,f=o(u,n);if(i.hasEagerState=!0,i.eagerState=f,zt(f,u)){var h=t.interleaved;h===null?(i.next=i,Lo(t)):(i.next=h.next,h.next=i),t.interleaved=i;return}}catch{}finally{}n=Tu(e,t,i,r),n!==null&&(i=st(),$t(n,e,r,i),nc(n,t,r))}}function ec(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function tc(e,t){Wr=Qi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gl(e,n)}}var Xi={readContext:Ct,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},jp={readContext:Ct,useCallback:function(e,t){return Dt().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:Qu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Yi(4194308,4,Xu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yi(4,2,e,t)},useMemo:function(e,t){var n=Dt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Dt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Cp.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var t=Dt();return e={current:e},t.memoizedState=e},useState:Wu,useDebugValue:Yo,useDeferredValue:function(e){return Dt().memoizedState=e},useTransition:function(){var e=Wu(!1),t=e[0];return e=kp.bind(null,e[1]),Dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ae,i=Dt();if(Ne){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),Je===null)throw Error(a(349));In&30||Fu(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Qu(Uu.bind(null,r,o,e),[e]),r.flags|=2048,Yr(9,Du.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Dt(),t=Je.identifierPrefix;if(Ne){var n=Yt,r=Qt;n=(r&~(1<<32-It(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Sp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Pp={readContext:Ct,useCallback:bu,useContext:Ct,useEffect:Qo,useImperativeHandle:Ku,useInsertionEffect:Yu,useLayoutEffect:Gu,useMemo:Zu,useReducer:Wo,useRef:Hu,useState:function(){return Wo(Qr)},useDebugValue:Yo,useDeferredValue:function(e){var t=Et();return Ju(t,Xe.memoizedState,e)},useTransition:function(){var e=Wo(Qr)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Au,useSyncExternalStore:Mu,useId:qu,unstable_isNewReconciler:!1},_p={readContext:Ct,useCallback:bu,useContext:Ct,useEffect:Qo,useImperativeHandle:Ku,useInsertionEffect:Yu,useLayoutEffect:Gu,useMemo:Zu,useReducer:Ho,useRef:Hu,useState:function(){return Ho(Qr)},useDebugValue:Yo,useDeferredValue:function(e){var t=Et();return Xe===null?t.memoizedState=e:Ju(t,Xe.memoizedState,e)},useTransition:function(){var e=Ho(Qr)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Au,useSyncExternalStore:Mu,useId:qu,unstable_isNewReconciler:!1};function Nt(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Go(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ki={isMounted:function(e){return(e=e._reactInternals)?kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=st(),i=mn(e),o=Xt(r,i);o.payload=t,n!=null&&(o.callback=n),t=cn(e,o,i),t!==null&&($t(t,e,i,r),Bi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=st(),i=mn(e),o=Xt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=cn(e,o,i),t!==null&&($t(t,e,i,r),Bi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=st(),r=mn(e),i=Xt(n,r);i.tag=2,t!=null&&(i.callback=t),t=cn(e,i,r),t!==null&&($t(t,e,r,n),Bi(t,e,r))}};function rc(e,t,n,r,i,o,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,u):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(i,o):!0}function ic(e,t,n){var r=!1,i=an,o=t.contextType;return typeof o=="object"&&o!==null?o=Ct(o):(i=dt(t)?En:rt.current,r=t.contextTypes,o=(r=r!=null)?Zn(e,i):an),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ki,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function lc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ki.enqueueReplaceState(t,t.state,null)}function Xo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Oo(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ct(o):(o=dt(t)?En:rt.current,i.context=Zn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Go(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ki.enqueueReplaceState(i,i.state,null),Vi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function lr(e,t){try{var n="",r=t;do n+=X(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ko(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rp=typeof WeakMap=="function"?WeakMap:Map;function oc(e,t,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){nl||(nl=!0,da=r),bo(e,t)},n}function ac(e,t,n){n=Xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){bo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){bo(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function sc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Vp.bind(null,e,t,n),t.then(e,e))}function uc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function cc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xt(-1,1),t.tag=2,cn(n,t,1))),n.lanes|=1),e)}var Ip=J.ReactCurrentOwner,ft=!1;function at(e,t,n,r){t.child=e===null?zu(t,null,n,r):tr(t,e.child,n,r)}function dc(e,t,n,r,i){n=n.render;var o=t.ref;return rr(t,i),r=Bo(e,t,n,r,o,i),n=Vo(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kt(e,t,i)):(Ne&&n&&Eo(t),t.flags|=1,at(e,t,r,i),t.child)}function fc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!va(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,pc(e,t,o,r,i)):(e=sl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var u=o.memoizedProps;if(n=n.compare,n=n!==null?n:Nr,n(u,r)&&e.ref===t.ref)return Kt(e,t,i)}return t.flags|=1,e=gn(o,r),e.ref=t.ref,e.return=t,t.child=e}function pc(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Nr(o,r)&&e.ref===t.ref)if(ft=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ft=!0);else return t.lanes=e.lanes,Kt(e,t,i)}return Zo(e,t,n,r,i)}function mc(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(ar,wt),wt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(ar,wt),wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,_e(ar,wt),wt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,_e(ar,wt),wt|=r;return at(e,t,i,n),t.child}function hc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zo(e,t,n,r,i){var o=dt(n)?En:rt.current;return o=Zn(t,o),rr(t,i),n=Bo(e,t,n,r,o,i),r=Vo(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kt(e,t,i)):(Ne&&r&&Eo(t),t.flags|=1,at(e,t,n,i),t.child)}function gc(e,t,n,r,i){if(dt(n)){var o=!0;Li(t)}else o=!1;if(rr(t,i),t.stateNode===null)Zi(e,t),ic(t,n,r),Xo(t,n,r,i),r=!0;else if(e===null){var u=t.stateNode,f=t.memoizedProps;u.props=f;var h=u.context,_=n.contextType;typeof _=="object"&&_!==null?_=Ct(_):(_=dt(n)?En:rt.current,_=Zn(t,_));var M=n.getDerivedStateFromProps,D=typeof M=="function"||typeof u.getSnapshotBeforeUpdate=="function";D||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==r||h!==_)&&lc(t,u,r,_),un=!1;var A=t.memoizedState;u.state=A,Vi(t,r,u,i),h=t.memoizedState,f!==r||A!==h||ct.current||un?(typeof M=="function"&&(Go(t,n,M,r),h=t.memoizedState),(f=un||rc(t,n,f,r,A,h,_))?(D||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=h),u.props=r,u.state=h,u.context=_,r=f):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,Nu(e,t),f=t.memoizedProps,_=t.type===t.elementType?f:Nt(t.type,f),u.props=_,D=t.pendingProps,A=u.context,h=n.contextType,typeof h=="object"&&h!==null?h=Ct(h):(h=dt(n)?En:rt.current,h=Zn(t,h));var K=n.getDerivedStateFromProps;(M=typeof K=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==D||A!==h)&&lc(t,u,r,h),un=!1,A=t.memoizedState,u.state=A,Vi(t,r,u,i);var q=t.memoizedState;f!==D||A!==q||ct.current||un?(typeof K=="function"&&(Go(t,n,K,r),q=t.memoizedState),(_=un||rc(t,n,_,r,A,q,h)||!1)?(M||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,q,h),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,q,h)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=q),u.props=r,u.state=q,u.context=h,r=_):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),r=!1)}return Jo(e,t,n,r,o,i)}function Jo(e,t,n,r,i,o){hc(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return i&&Su(t,n,!1),Kt(e,t,o);r=t.stateNode,Ip.current=t;var f=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=tr(t,e.child,null,o),t.child=tr(t,null,f,o)):at(e,t,f,o),t.memoizedState=r.state,i&&Su(t,n,!0),t.child}function yc(e){var t=e.stateNode;t.pendingContext?xu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xu(e,t.context,!1),$o(e,t.containerInfo)}function vc(e,t,n,r,i){return er(),Ro(i),t.flags|=256,at(e,t,n,r),t.child}var qo={dehydrated:null,treeContext:null,retryLane:0};function ea(e){return{baseLanes:e,cachePool:null,transitions:null}}function xc(e,t,n){var r=t.pendingProps,i=$e.current,o=!1,u=(t.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(i&2)!==0),f?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),_e($e,i&1),e===null)return _o(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(u=r.children,e=r.fallback,o?(r=t.mode,o=t.child,u={mode:"hidden",children:u},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=u):o=ul(u,r,0,null),e=On(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ea(n),t.memoizedState=qo,e):ta(t,u));if(i=e.memoizedState,i!==null&&(f=i.dehydrated,f!==null))return zp(e,t,u,r,f,i,n);if(o){o=r.fallback,u=t.mode,i=e.child,f=i.sibling;var h={mode:"hidden",children:r.children};return!(u&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=h,t.deletions=null):(r=gn(i,h),r.subtreeFlags=i.subtreeFlags&14680064),f!==null?o=gn(f,o):(o=On(o,u,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,u=e.child.memoizedState,u=u===null?ea(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},o.memoizedState=u,o.childLanes=e.childLanes&~n,t.memoizedState=qo,r}return o=e.child,e=o.sibling,r=gn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ta(e,t){return t=ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bi(e,t,n,r){return r!==null&&Ro(r),tr(t,e.child,null,n),e=ta(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zp(e,t,n,r,i,o,u){if(n)return t.flags&256?(t.flags&=-257,r=Ko(Error(a(422))),bi(e,t,u,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ul({mode:"visible",children:r.children},i,0,null),o=On(o,i,u,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&tr(t,e.child,null,u),t.child.memoizedState=ea(u),t.memoizedState=qo,o);if(!(t.mode&1))return bi(e,t,u,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var f=r.dgst;return r=f,o=Error(a(419)),r=Ko(o,r,void 0),bi(e,t,u,r)}if(f=(u&e.childLanes)!==0,ft||f){if(r=Je,r!==null){switch(u&-u){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|u)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Gt(e,i),$t(r,e,i,-1))}return ya(),r=Ko(Error(a(421))),bi(e,t,u,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Wp.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,xt=ln(i.nextSibling),vt=t,Ne=!0,Tt=null,e!==null&&(St[kt++]=Qt,St[kt++]=Yt,St[kt++]=jn,Qt=e.id,Yt=e.overflow,jn=t),t=ta(t,r.children),t.flags|=4096,t)}function wc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),No(e.return,t,n)}function na(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Sc(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(at(e,t,r.children,n),r=$e.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,n,t);else if(e.tag===19)wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_e($e,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Wi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),na(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Wi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}na(t,!0,n,null,o);break;case"together":na(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tp(e,t,n){switch(t.tag){case 3:yc(t),er();break;case 5:$u(t);break;case 1:dt(t.type)&&Li(t);break;case 4:$o(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;_e(Di,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_e($e,$e.current&1),t.flags|=128,null):n&t.child.childLanes?xc(e,t,n):(_e($e,$e.current&1),e=Kt(e,t,n),e!==null?e.sibling:null);_e($e,$e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e($e,$e.current),r)break;return null;case 22:case 23:return t.lanes=0,mc(e,t,n)}return Kt(e,t,n)}var kc,ra,Cc,Ec;kc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ra=function(){},Cc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Rn(Ft.current);var o=null;switch(n){case"input":i=be(e,i),r=be(e,r),o=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":i=Vt(e,i),r=Vt(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=zi)}Al(n,r);var u;n=null;for(_ in i)if(!r.hasOwnProperty(_)&&i.hasOwnProperty(_)&&i[_]!=null)if(_==="style"){var f=i[_];for(u in f)f.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else _!=="dangerouslySetInnerHTML"&&_!=="children"&&_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(d.hasOwnProperty(_)?o||(o=[]):(o=o||[]).push(_,null));for(_ in r){var h=r[_];if(f=i!=null?i[_]:void 0,r.hasOwnProperty(_)&&h!==f&&(h!=null||f!=null))if(_==="style")if(f){for(u in f)!f.hasOwnProperty(u)||h&&h.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in h)h.hasOwnProperty(u)&&f[u]!==h[u]&&(n||(n={}),n[u]=h[u])}else n||(o||(o=[]),o.push(_,n)),n=h;else _==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,f=f?f.__html:void 0,h!=null&&f!==h&&(o=o||[]).push(_,h)):_==="children"?typeof h!="string"&&typeof h!="number"||(o=o||[]).push(_,""+h):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&(d.hasOwnProperty(_)?(h!=null&&_==="onScroll"&&Re("scroll",e),o||f===h||(o=[])):(o=o||[]).push(_,h))}n&&(o=o||[]).push("style",n);var _=o;(t.updateQueue=_)&&(t.flags|=4)}},Ec=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Np(e,t,n){var r=t.pendingProps;switch(jo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return dt(t.type)&&Ni(),lt(t),null;case 3:return r=t.stateNode,ir(),Ie(ct),Ie(rt),Fo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Mi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Tt!==null&&(ma(Tt),Tt=null))),ra(e,t),lt(t),null;case 5:Ao(t);var i=Rn(Vr.current);if(n=t.type,e!==null&&t.stateNode!=null)Cc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(a(166));return lt(t),null}if(e=Rn(Ft.current),Mi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Mt]=t,r[Mr]=o,e=(t.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(i=0;i<Or.length;i++)Re(Or[i],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":me(r,o),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Re("invalid",r);break;case"textarea":ut(r,o),Re("invalid",r)}Al(n,o),i=null;for(var u in o)if(o.hasOwnProperty(u)){var f=o[u];u==="children"?typeof f=="string"?r.textContent!==f&&(o.suppressHydrationWarning!==!0&&Ii(r.textContent,f,e),i=["children",f]):typeof f=="number"&&r.textContent!==""+f&&(o.suppressHydrationWarning!==!0&&Ii(r.textContent,f,e),i=["children",""+f]):d.hasOwnProperty(u)&&f!=null&&u==="onScroll"&&Re("scroll",r)}switch(n){case"input":he(r),We(r,o,!0);break;case"textarea":he(r),Te(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=zi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dn(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[Mt]=t,e[Mr]=r,kc(e,t,!1,!1),t.stateNode=e;e:{switch(u=Ml(n,r),n){case"dialog":Re("cancel",e),Re("close",e),i=r;break;case"iframe":case"object":case"embed":Re("load",e),i=r;break;case"video":case"audio":for(i=0;i<Or.length;i++)Re(Or[i],e);i=r;break;case"source":Re("error",e),i=r;break;case"img":case"image":case"link":Re("error",e),Re("load",e),i=r;break;case"details":Re("toggle",e),i=r;break;case"input":me(e,r),i=be(e,r),Re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),Re("invalid",e);break;case"textarea":ut(e,r),i=Vt(e,r),Re("invalid",e);break;default:i=r}Al(n,i),f=i;for(o in f)if(f.hasOwnProperty(o)){var h=f[o];o==="style"?ps(e,h):o==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&ds(e,h)):o==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&hr(e,h):typeof h=="number"&&hr(e,""+h):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(d.hasOwnProperty(o)?h!=null&&o==="onScroll"&&Re("scroll",e):h!=null&&Y(e,o,h,u))}switch(n){case"input":he(e),We(e,r,!1);break;case"textarea":he(e),Te(e);break;case"option":r.value!=null&&e.setAttribute("value",""+O(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Rt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Rt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=zi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return lt(t),null;case 6:if(e&&t.stateNode!=null)Ec(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(a(166));if(n=Rn(Vr.current),Rn(Ft.current),Mi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Mt]=t,(o=r.nodeValue!==n)&&(e=vt,e!==null))switch(e.tag){case 3:Ii(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ii(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=t,t.stateNode=r}return lt(t),null;case 13:if(Ie($e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&xt!==null&&t.mode&1&&!(t.flags&128))_u(),er(),t.flags|=98560,o=!1;else if(o=Mi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(a(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(a(317));o[Mt]=t}else er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;lt(t),o=!1}else Tt!==null&&(ma(Tt),Tt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$e.current&1?Ke===0&&(Ke=3):ya())),t.updateQueue!==null&&(t.flags|=4),lt(t),null);case 4:return ir(),ra(e,t),e===null&&$r(t.stateNode.containerInfo),lt(t),null;case 10:return To(t.type._context),lt(t),null;case 17:return dt(t.type)&&Ni(),lt(t),null;case 19:if(Ie($e),o=t.memoizedState,o===null)return lt(t),null;if(r=(t.flags&128)!==0,u=o.rendering,u===null)if(r)Gr(o,!1);else{if(Ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(u=Wi(e),u!==null){for(t.flags|=128,Gr(o,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,u=o.alternate,u===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=u.childLanes,o.lanes=u.lanes,o.child=u.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=u.memoizedProps,o.memoizedState=u.memoizedState,o.updateQueue=u.updateQueue,o.type=u.type,e=u.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _e($e,$e.current&1|2),t.child}e=e.sibling}o.tail!==null&&Be()>sr&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Wi(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!Ne)return lt(t),null}else 2*Be()-o.renderingStartTime>sr&&n!==1073741824&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(n=o.last,n!==null?n.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Be(),t.sibling=null,n=$e.current,_e($e,r?n&1|2:n&1),t):(lt(t),null);case 22:case 23:return ga(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?wt&1073741824&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function Lp(e,t){switch(jo(t),t.tag){case 1:return dt(t.type)&&Ni(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ir(),Ie(ct),Ie(rt),Fo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ao(t),null;case 13:if(Ie($e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie($e),null;case 4:return ir(),null;case 10:return To(t.type._context),null;case 22:case 23:return ga(),null;case 24:return null;default:return null}}var Ji=!1,ot=!1,Op=typeof WeakSet=="function"?WeakSet:Set,Z=null;function or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(e,t,r)}else n.current=null}function ia(e,t,n){try{n()}catch(r){Ue(e,t,r)}}var jc=!1;function $p(e,t){if(go=vi,e=ru(),ao(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var u=0,f=-1,h=-1,_=0,M=0,D=e,A=null;t:for(;;){for(var K;D!==n||i!==0&&D.nodeType!==3||(f=u+i),D!==o||r!==0&&D.nodeType!==3||(h=u+r),D.nodeType===3&&(u+=D.nodeValue.length),(K=D.firstChild)!==null;)A=D,D=K;for(;;){if(D===e)break t;if(A===n&&++_===i&&(f=u),A===o&&++M===r&&(h=u),(K=D.nextSibling)!==null)break;D=A,A=D.parentNode}D=K}n=f===-1||h===-1?null:{start:f,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(yo={focusedElem:e,selectionRange:n},vi=!1,Z=t;Z!==null;)if(t=Z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var q=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var ee=q.memoizedProps,Ve=q.memoizedState,C=t.stateNode,y=C.getSnapshotBeforeUpdate(t.elementType===t.type?ee:Nt(t.type,ee),Ve);C.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var j=t.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(V){Ue(t,t.return,V)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return q=jc,jc=!1,q}function Xr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ia(t,n,o)}i=i.next}while(i!==r)}}function qi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function la(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Pc(e){var t=e.alternate;t!==null&&(e.alternate=null,Pc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[Mr],delete t[So],delete t[yp],delete t[vp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _c(e){return e.tag===5||e.tag===3||e.tag===4}function Rc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zi));else if(r!==4&&(e=e.child,e!==null))for(oa(e,t,n),e=e.sibling;e!==null;)oa(e,t,n),e=e.sibling}function aa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(aa(e,t,n),e=e.sibling;e!==null;)aa(e,t,n),e=e.sibling}var et=null,Lt=!1;function dn(e,t,n){for(n=n.child;n!==null;)Ic(e,t,n),n=n.sibling}function Ic(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(fi,n)}catch{}switch(n.tag){case 5:ot||or(n,t);case 6:var r=et,i=Lt;et=null,dn(e,t,n),et=r,Lt=i,et!==null&&(Lt?(e=et,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(Lt?(e=et,n=n.stateNode,e.nodeType===8?wo(e.parentNode,n):e.nodeType===1&&wo(e,n),Pr(e)):wo(et,n.stateNode));break;case 4:r=et,i=Lt,et=n.stateNode.containerInfo,Lt=!0,dn(e,t,n),et=r,Lt=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,u=o.destroy;o=o.tag,u!==void 0&&(o&2||o&4)&&ia(n,t,u),i=i.next}while(i!==r)}dn(e,t,n);break;case 1:if(!ot&&(or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(f){Ue(n,t,f)}dn(e,t,n);break;case 21:dn(e,t,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,dn(e,t,n),ot=r):dn(e,t,n);break;default:dn(e,t,n)}}function zc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Op),t.forEach(function(r){var i=Hp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,u=t,f=u;e:for(;f!==null;){switch(f.tag){case 5:et=f.stateNode,Lt=!1;break e;case 3:et=f.stateNode.containerInfo,Lt=!0;break e;case 4:et=f.stateNode.containerInfo,Lt=!0;break e}f=f.return}if(et===null)throw Error(a(160));Ic(o,u,i),et=null,Lt=!1;var h=i.alternate;h!==null&&(h.return=null),i.return=null}catch(_){Ue(i,t,_)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Tc(t,e),t=t.sibling}function Tc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ot(t,e),Ut(e),r&4){try{Xr(3,e,e.return),qi(3,e)}catch(ee){Ue(e,e.return,ee)}try{Xr(5,e,e.return)}catch(ee){Ue(e,e.return,ee)}}break;case 1:Ot(t,e),Ut(e),r&512&&n!==null&&or(n,n.return);break;case 5:if(Ot(t,e),Ut(e),r&512&&n!==null&&or(n,n.return),e.flags&32){var i=e.stateNode;try{hr(i,"")}catch(ee){Ue(e,e.return,ee)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,u=n!==null?n.memoizedProps:o,f=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{f==="input"&&o.type==="radio"&&o.name!=null&&Ge(i,o),Ml(f,u);var _=Ml(f,o);for(u=0;u<h.length;u+=2){var M=h[u],D=h[u+1];M==="style"?ps(i,D):M==="dangerouslySetInnerHTML"?ds(i,D):M==="children"?hr(i,D):Y(i,M,D,_)}switch(f){case"input":ge(i,o);break;case"textarea":ae(i,o);break;case"select":var A=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var K=o.value;K!=null?Rt(i,!!o.multiple,K,!1):A!==!!o.multiple&&(o.defaultValue!=null?Rt(i,!!o.multiple,o.defaultValue,!0):Rt(i,!!o.multiple,o.multiple?[]:"",!1))}i[Mr]=o}catch(ee){Ue(e,e.return,ee)}}break;case 6:if(Ot(t,e),Ut(e),r&4){if(e.stateNode===null)throw Error(a(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(ee){Ue(e,e.return,ee)}}break;case 3:if(Ot(t,e),Ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pr(t.containerInfo)}catch(ee){Ue(e,e.return,ee)}break;case 4:Ot(t,e),Ut(e);break;case 13:Ot(t,e),Ut(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ca=Be())),r&4&&zc(e);break;case 22:if(M=n!==null&&n.memoizedState!==null,e.mode&1?(ot=(_=ot)||M,Ot(t,e),ot=_):Ot(t,e),Ut(e),r&8192){if(_=e.memoizedState!==null,(e.stateNode.isHidden=_)&&!M&&e.mode&1)for(Z=e,M=e.child;M!==null;){for(D=Z=M;Z!==null;){switch(A=Z,K=A.child,A.tag){case 0:case 11:case 14:case 15:Xr(4,A,A.return);break;case 1:or(A,A.return);var q=A.stateNode;if(typeof q.componentWillUnmount=="function"){r=A,n=A.return;try{t=r,q.props=t.memoizedProps,q.state=t.memoizedState,q.componentWillUnmount()}catch(ee){Ue(r,n,ee)}}break;case 5:or(A,A.return);break;case 22:if(A.memoizedState!==null){Oc(D);continue}}K!==null?(K.return=A,Z=K):Oc(D)}M=M.sibling}e:for(M=null,D=e;;){if(D.tag===5){if(M===null){M=D;try{i=D.stateNode,_?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(f=D.stateNode,h=D.memoizedProps.style,u=h!=null&&h.hasOwnProperty("display")?h.display:null,f.style.display=fs("display",u))}catch(ee){Ue(e,e.return,ee)}}}else if(D.tag===6){if(M===null)try{D.stateNode.nodeValue=_?"":D.memoizedProps}catch(ee){Ue(e,e.return,ee)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===e)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===e)break e;for(;D.sibling===null;){if(D.return===null||D.return===e)break e;M===D&&(M=null),D=D.return}M===D&&(M=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:Ot(t,e),Ut(e),r&4&&zc(e);break;case 21:break;default:Ot(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_c(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(hr(i,""),r.flags&=-33);var o=Rc(e);aa(e,o,i);break;case 3:case 4:var u=r.stateNode.containerInfo,f=Rc(e);oa(e,f,u);break;default:throw Error(a(161))}}catch(h){Ue(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ap(e,t,n){Z=e,Nc(e)}function Nc(e,t,n){for(var r=(e.mode&1)!==0;Z!==null;){var i=Z,o=i.child;if(i.tag===22&&r){var u=i.memoizedState!==null||Ji;if(!u){var f=i.alternate,h=f!==null&&f.memoizedState!==null||ot;f=Ji;var _=ot;if(Ji=u,(ot=h)&&!_)for(Z=i;Z!==null;)u=Z,h=u.child,u.tag===22&&u.memoizedState!==null?$c(i):h!==null?(h.return=u,Z=h):$c(i);for(;o!==null;)Z=o,Nc(o),o=o.sibling;Z=i,Ji=f,ot=_}Lc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Z=o):Lc(e)}}function Lc(e){for(;Z!==null;){var t=Z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ot||qi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Nt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ou(t,o,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ou(t,u,n)}break;case 5:var f=t.stateNode;if(n===null&&t.flags&4){n=f;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var _=t.alternate;if(_!==null){var M=_.memoizedState;if(M!==null){var D=M.dehydrated;D!==null&&Pr(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}ot||t.flags&512&&la(t)}catch(A){Ue(t,t.return,A)}}if(t===e){Z=null;break}if(n=t.sibling,n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Oc(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Z=n;break}Z=t.return}}function $c(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qi(4,t)}catch(h){Ue(t,n,h)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(h){Ue(t,i,h)}}var o=t.return;try{la(t)}catch(h){Ue(t,o,h)}break;case 5:var u=t.return;try{la(t)}catch(h){Ue(t,u,h)}}}catch(h){Ue(t,t.return,h)}if(t===e){Z=null;break}var f=t.sibling;if(f!==null){f.return=t.return,Z=f;break}Z=t.return}}var Mp=Math.ceil,el=J.ReactCurrentDispatcher,sa=J.ReactCurrentOwner,jt=J.ReactCurrentBatchConfig,ye=0,Je=null,He=null,tt=0,wt=0,ar=on(0),Ke=0,Kr=null,zn=0,tl=0,ua=0,br=null,pt=null,ca=0,sr=1/0,bt=null,nl=!1,da=null,fn=null,rl=!1,pn=null,il=0,Zr=0,fa=null,ll=-1,ol=0;function st(){return ye&6?Be():ll!==-1?ll:ll=Be()}function mn(e){return e.mode&1?ye&2&&tt!==0?tt&-tt:wp.transition!==null?(ol===0&&(ol=Rs()),ol):(e=Se,e!==0||(e=window.event,e=e===void 0?16:Ms(e.type)),e):1}function $t(e,t,n,r){if(50<Zr)throw Zr=0,fa=null,Error(a(185));Sr(e,n,r),(!(ye&2)||e!==Je)&&(e===Je&&(!(ye&2)&&(tl|=n),Ke===4&&hn(e,tt)),mt(e,r),n===1&&ye===0&&!(t.mode&1)&&(sr=Be()+500,Oi&&sn()))}function mt(e,t){var n=e.callbackNode;wf(e,t);var r=hi(e,e===Je?tt:0);if(r===0)n!==null&&js(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&js(n),t===1)e.tag===0?xp(Mc.bind(null,e)):ku(Mc.bind(null,e)),hp(function(){!(ye&6)&&sn()}),n=null;else{switch(Is(r)){case 1:n=Hl;break;case 4:n=Ps;break;case 16:n=di;break;case 536870912:n=_s;break;default:n=di}n=Qc(n,Ac.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ac(e,t){if(ll=-1,ol=0,ye&6)throw Error(a(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var r=hi(e,e===Je?tt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=al(e,r);else{t=r;var i=ye;ye|=2;var o=Dc();(Je!==e||tt!==t)&&(bt=null,sr=Be()+500,Nn(e,t));do try{Up();break}catch(f){Fc(e,f)}while(!0);zo(),el.current=o,ye=i,He!==null?t=0:(Je=null,tt=0,t=Ke)}if(t!==0){if(t===2&&(i=Ql(e),i!==0&&(r=i,t=pa(e,i))),t===1)throw n=Kr,Nn(e,0),hn(e,r),mt(e,Be()),n;if(t===6)hn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Fp(i)&&(t=al(e,r),t===2&&(o=Ql(e),o!==0&&(r=o,t=pa(e,o))),t===1))throw n=Kr,Nn(e,0),hn(e,r),mt(e,Be()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:Ln(e,pt,bt);break;case 3:if(hn(e,r),(r&130023424)===r&&(t=ca+500-Be(),10<t)){if(hi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){st(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xo(Ln.bind(null,e,pt,bt),t);break}Ln(e,pt,bt);break;case 4:if(hn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var u=31-It(r);o=1<<u,u=t[u],u>i&&(i=u),r&=~o}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Mp(r/1960))-r,10<r){e.timeoutHandle=xo(Ln.bind(null,e,pt,bt),r);break}Ln(e,pt,bt);break;case 5:Ln(e,pt,bt);break;default:throw Error(a(329))}}}return mt(e,Be()),e.callbackNode===n?Ac.bind(null,e):null}function pa(e,t){var n=br;return e.current.memoizedState.isDehydrated&&(Nn(e,t).flags|=256),e=al(e,t),e!==2&&(t=pt,pt=n,t!==null&&ma(t)),e}function ma(e){pt===null?pt=e:pt.push.apply(pt,e)}function Fp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!zt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hn(e,t){for(t&=~ua,t&=~tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-It(t),r=1<<n;e[n]=-1,t&=~r}}function Mc(e){if(ye&6)throw Error(a(327));ur();var t=hi(e,0);if(!(t&1))return mt(e,Be()),null;var n=al(e,t);if(e.tag!==0&&n===2){var r=Ql(e);r!==0&&(t=r,n=pa(e,r))}if(n===1)throw n=Kr,Nn(e,0),hn(e,t),mt(e,Be()),n;if(n===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ln(e,pt,bt),mt(e,Be()),null}function ha(e,t){var n=ye;ye|=1;try{return e(t)}finally{ye=n,ye===0&&(sr=Be()+500,Oi&&sn())}}function Tn(e){pn!==null&&pn.tag===0&&!(ye&6)&&ur();var t=ye;ye|=1;var n=jt.transition,r=Se;try{if(jt.transition=null,Se=1,e)return e()}finally{Se=r,jt.transition=n,ye=t,!(ye&6)&&sn()}}function ga(){wt=ar.current,Ie(ar)}function Nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,mp(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(jo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ni();break;case 3:ir(),Ie(ct),Ie(rt),Fo();break;case 5:Ao(r);break;case 4:ir();break;case 13:Ie($e);break;case 19:Ie($e);break;case 10:To(r.type._context);break;case 22:case 23:ga()}n=n.return}if(Je=e,He=e=gn(e.current,null),tt=wt=t,Ke=0,Kr=null,ua=tl=zn=0,pt=br=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var u=o.next;o.next=i,r.next=u}n.pending=r}_n=null}return e}function Fc(e,t){do{var n=He;try{if(zo(),Hi.current=Xi,Qi){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qi=!1}if(In=0,Ze=Xe=Ae=null,Wr=!1,Hr=0,sa.current=null,n===null||n.return===null){Ke=1,Kr=t,He=null;break}e:{var o=e,u=n.return,f=n,h=t;if(t=tt,f.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var _=h,M=f,D=M.tag;if(!(M.mode&1)&&(D===0||D===11||D===15)){var A=M.alternate;A?(M.updateQueue=A.updateQueue,M.memoizedState=A.memoizedState,M.lanes=A.lanes):(M.updateQueue=null,M.memoizedState=null)}var K=uc(u);if(K!==null){K.flags&=-257,cc(K,u,f,o,t),K.mode&1&&sc(o,_,t),t=K,h=_;var q=t.updateQueue;if(q===null){var ee=new Set;ee.add(h),t.updateQueue=ee}else q.add(h);break e}else{if(!(t&1)){sc(o,_,t),ya();break e}h=Error(a(426))}}else if(Ne&&f.mode&1){var Ve=uc(u);if(Ve!==null){!(Ve.flags&65536)&&(Ve.flags|=256),cc(Ve,u,f,o,t),Ro(lr(h,f));break e}}o=h=lr(h,f),Ke!==4&&(Ke=2),br===null?br=[o]:br.push(o),o=u;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var C=oc(o,h,t);Lu(o,C);break e;case 1:f=h;var y=o.type,j=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(fn===null||!fn.has(j)))){o.flags|=65536,t&=-t,o.lanes|=t;var V=ac(o,f,t);Lu(o,V);break e}}o=o.return}while(o!==null)}Bc(n)}catch(te){t=te,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function Dc(){var e=el.current;return el.current=Xi,e===null?Xi:e}function ya(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Je===null||!(zn&268435455)&&!(tl&268435455)||hn(Je,tt)}function al(e,t){var n=ye;ye|=2;var r=Dc();(Je!==e||tt!==t)&&(bt=null,Nn(e,t));do try{Dp();break}catch(i){Fc(e,i)}while(!0);if(zo(),ye=n,el.current=r,He!==null)throw Error(a(261));return Je=null,tt=0,Ke}function Dp(){for(;He!==null;)Uc(He)}function Up(){for(;He!==null&&!df();)Uc(He)}function Uc(e){var t=Hc(e.alternate,e,wt);e.memoizedProps=e.pendingProps,t===null?Bc(e):He=t,sa.current=null}function Bc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Lp(n,t),n!==null){n.flags&=32767,He=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ke=6,He=null;return}}else if(n=Np(n,t,wt),n!==null){He=n;return}if(t=t.sibling,t!==null){He=t;return}He=t=e}while(t!==null);Ke===0&&(Ke=5)}function Ln(e,t,n){var r=Se,i=jt.transition;try{jt.transition=null,Se=1,Bp(e,t,n,r)}finally{jt.transition=i,Se=r}return null}function Bp(e,t,n,r){do ur();while(pn!==null);if(ye&6)throw Error(a(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Sf(e,o),e===Je&&(He=Je=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rl||(rl=!0,Qc(di,function(){return ur(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=jt.transition,jt.transition=null;var u=Se;Se=1;var f=ye;ye|=4,sa.current=null,$p(e,n),Tc(n,e),ap(yo),vi=!!go,yo=go=null,e.current=n,Ap(n),ff(),ye=f,Se=u,jt.transition=o}else e.current=n;if(rl&&(rl=!1,pn=e,il=i),o=e.pendingLanes,o===0&&(fn=null),hf(n.stateNode),mt(e,Be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(nl)throw nl=!1,e=da,da=null,e;return il&1&&e.tag!==0&&ur(),o=e.pendingLanes,o&1?e===fa?Zr++:(Zr=0,fa=e):Zr=0,sn(),null}function ur(){if(pn!==null){var e=Is(il),t=jt.transition,n=Se;try{if(jt.transition=null,Se=16>e?16:e,pn===null)var r=!1;else{if(e=pn,pn=null,il=0,ye&6)throw Error(a(331));var i=ye;for(ye|=4,Z=e.current;Z!==null;){var o=Z,u=o.child;if(Z.flags&16){var f=o.deletions;if(f!==null){for(var h=0;h<f.length;h++){var _=f[h];for(Z=_;Z!==null;){var M=Z;switch(M.tag){case 0:case 11:case 15:Xr(8,M,o)}var D=M.child;if(D!==null)D.return=M,Z=D;else for(;Z!==null;){M=Z;var A=M.sibling,K=M.return;if(Pc(M),M===_){Z=null;break}if(A!==null){A.return=K,Z=A;break}Z=K}}}var q=o.alternate;if(q!==null){var ee=q.child;if(ee!==null){q.child=null;do{var Ve=ee.sibling;ee.sibling=null,ee=Ve}while(ee!==null)}}Z=o}}if(o.subtreeFlags&2064&&u!==null)u.return=o,Z=u;else e:for(;Z!==null;){if(o=Z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Xr(9,o,o.return)}var C=o.sibling;if(C!==null){C.return=o.return,Z=C;break e}Z=o.return}}var y=e.current;for(Z=y;Z!==null;){u=Z;var j=u.child;if(u.subtreeFlags&2064&&j!==null)j.return=u,Z=j;else e:for(u=y;Z!==null;){if(f=Z,f.flags&2048)try{switch(f.tag){case 0:case 11:case 15:qi(9,f)}}catch(te){Ue(f,f.return,te)}if(f===u){Z=null;break e}var V=f.sibling;if(V!==null){V.return=f.return,Z=V;break e}Z=f.return}}if(ye=i,sn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(fi,e)}catch{}r=!0}return r}finally{Se=n,jt.transition=t}}return!1}function Vc(e,t,n){t=lr(n,t),t=oc(e,t,1),e=cn(e,t,1),t=st(),e!==null&&(Sr(e,1,t),mt(e,t))}function Ue(e,t,n){if(e.tag===3)Vc(e,e,n);else for(;t!==null;){if(t.tag===3){Vc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=lr(n,e),e=ac(t,e,1),t=cn(t,e,1),e=st(),t!==null&&(Sr(t,1,e),mt(t,e));break}}t=t.return}}function Vp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=st(),e.pingedLanes|=e.suspendedLanes&n,Je===e&&(tt&n)===n&&(Ke===4||Ke===3&&(tt&130023424)===tt&&500>Be()-ca?Nn(e,0):ua|=n),mt(e,t)}function Wc(e,t){t===0&&(e.mode&1?(t=mi,mi<<=1,!(mi&130023424)&&(mi=4194304)):t=1);var n=st();e=Gt(e,t),e!==null&&(Sr(e,t,n),mt(e,n))}function Wp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wc(e,n)}function Hp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(t),Wc(e,n)}var Hc;Hc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ct.current)ft=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ft=!1,Tp(e,t,n);ft=!!(e.flags&131072)}else ft=!1,Ne&&t.flags&1048576&&Cu(t,Ai,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zi(e,t),e=t.pendingProps;var i=Zn(t,rt.current);rr(t,n),i=Bo(null,t,r,e,i,n);var o=Vo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,dt(r)?(o=!0,Li(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Oo(t),i.updater=Ki,t.stateNode=i,i._reactInternals=t,Xo(t,r,e,n),t=Jo(null,t,r,!0,o,n)):(t.tag=0,Ne&&o&&Eo(t),at(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Yp(r),e=Nt(r,e),i){case 0:t=Zo(null,t,r,e,n);break e;case 1:t=gc(null,t,r,e,n);break e;case 11:t=dc(null,t,r,e,n);break e;case 14:t=fc(null,t,r,Nt(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),Zo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),gc(e,t,r,i,n);case 3:e:{if(yc(t),e===null)throw Error(a(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Nu(e,t),Vi(t,r,null,n);var u=t.memoizedState;if(r=u.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=lr(Error(a(423)),t),t=vc(e,t,r,n,i);break e}else if(r!==i){i=lr(Error(a(424)),t),t=vc(e,t,r,n,i);break e}else for(xt=ln(t.stateNode.containerInfo.firstChild),vt=t,Ne=!0,Tt=null,n=zu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(er(),r===i){t=Kt(e,t,n);break e}at(e,t,r,n)}t=t.child}return t;case 5:return $u(t),e===null&&_o(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,u=i.children,vo(r,i)?u=null:o!==null&&vo(r,o)&&(t.flags|=32),hc(e,t),at(e,t,u,n),t.child;case 6:return e===null&&_o(t),null;case 13:return xc(e,t,n);case 4:return $o(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tr(t,null,r,n):at(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),dc(e,t,r,i,n);case 7:return at(e,t,t.pendingProps,n),t.child;case 8:return at(e,t,t.pendingProps.children,n),t.child;case 12:return at(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,u=i.value,_e(Di,r._currentValue),r._currentValue=u,o!==null)if(zt(o.value,u)){if(o.children===i.children&&!ct.current){t=Kt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var f=o.dependencies;if(f!==null){u=o.child;for(var h=f.firstContext;h!==null;){if(h.context===r){if(o.tag===1){h=Xt(-1,n&-n),h.tag=2;var _=o.updateQueue;if(_!==null){_=_.shared;var M=_.pending;M===null?h.next=h:(h.next=M.next,M.next=h),_.pending=h}}o.lanes|=n,h=o.alternate,h!==null&&(h.lanes|=n),No(o.return,n,t),f.lanes|=n;break}h=h.next}}else if(o.tag===10)u=o.type===t.type?null:o.child;else if(o.tag===18){if(u=o.return,u===null)throw Error(a(341));u.lanes|=n,f=u.alternate,f!==null&&(f.lanes|=n),No(u,n,t),u=o.sibling}else u=o.child;if(u!==null)u.return=o;else for(u=o;u!==null;){if(u===t){u=null;break}if(o=u.sibling,o!==null){o.return=u.return,u=o;break}u=u.return}o=u}at(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,rr(t,n),i=Ct(i),r=r(i),t.flags|=1,at(e,t,r,n),t.child;case 14:return r=t.type,i=Nt(r,t.pendingProps),i=Nt(r.type,i),fc(e,t,r,i,n);case 15:return pc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),Zi(e,t),t.tag=1,dt(r)?(e=!0,Li(t)):e=!1,rr(t,n),ic(t,r,i),Xo(t,r,i,n),Jo(null,t,r,!0,e,n);case 19:return Sc(e,t,n);case 22:return mc(e,t,n)}throw Error(a(156,t.tag))};function Qc(e,t){return Es(e,t)}function Qp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(e,t,n,r){return new Qp(e,t,n,r)}function va(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yp(e){if(typeof e=="function")return va(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pe)return 11;if(e===je)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=Pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function sl(e,t,n,r,i,o){var u=2;if(r=e,typeof e=="function")va(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case ke:return On(n.children,i,o,t);case Ce:u=8,i|=8;break;case Me:return e=Pt(12,n,t,i|2),e.elementType=Me,e.lanes=o,e;case Ee:return e=Pt(13,n,t,i),e.elementType=Ee,e.lanes=o,e;case ze:return e=Pt(19,n,t,i),e.elementType=ze,e.lanes=o,e;case pe:return ul(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fe:u=10;break e;case nt:u=9;break e;case Pe:u=11;break e;case je:u=14;break e;case Le:u=16,r=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=Pt(u,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function On(e,t,n,r){return e=Pt(7,e,r,t),e.lanes=n,e}function ul(e,t,n,r){return e=Pt(22,e,r,t),e.elementType=pe,e.lanes=n,e.stateNode={isHidden:!1},e}function xa(e,t,n){return e=Pt(6,e,null,t),e.lanes=n,e}function wa(e,t,n){return t=Pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sa(e,t,n,r,i,o,u,f,h){return e=new Gp(e,t,n,f,h),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Pt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oo(o),e}function Xp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:de,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yc(e){if(!e)return an;e=e._reactInternals;e:{if(kn(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(dt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var n=e.type;if(dt(n))return wu(e,n,t)}return t}function Gc(e,t,n,r,i,o,u,f,h){return e=Sa(n,r,!0,e,i,o,u,f,h),e.context=Yc(null),n=e.current,r=st(),i=mn(n),o=Xt(r,i),o.callback=t??null,cn(n,o,i),e.current.lanes=i,Sr(e,i,r),mt(e,r),e}function cl(e,t,n,r){var i=t.current,o=st(),u=mn(i);return n=Yc(n),t.context===null?t.context=n:t.pendingContext=n,t=Xt(o,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=cn(i,t,u),e!==null&&($t(e,i,u,o),Bi(e,i,u)),u}function dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ka(e,t){Xc(e,t),(e=e.alternate)&&Xc(e,t)}var Kc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ca(e){this._internalRoot=e}fl.prototype.render=Ca.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));cl(e,t,null,null)},fl.prototype.unmount=Ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){cl(null,e,null,null)}),t[Wt]=null}};function fl(e){this._internalRoot=e}fl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ns();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&$s(e)}};function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bc(){}function Kp(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var _=dl(u);o.call(_)}}var u=Gc(t,r,e,0,null,!1,!1,"",bc);return e._reactRootContainer=u,e[Wt]=u.current,$r(e.nodeType===8?e.parentNode:e),Tn(),u}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var f=r;r=function(){var _=dl(h);f.call(_)}}var h=Sa(e,0,!1,null,null,!1,!1,"",bc);return e._reactRootContainer=h,e[Wt]=h.current,$r(e.nodeType===8?e.parentNode:e),Tn(function(){cl(t,h,n,r)}),h}function ml(e,t,n,r,i){var o=n._reactRootContainer;if(o){var u=o;if(typeof i=="function"){var f=i;i=function(){var h=dl(u);f.call(h)}}cl(t,u,e,i)}else u=Kp(n,t,e,i,r);return dl(u)}zs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wr(t.pendingLanes);n!==0&&(Gl(t,n|1),mt(t,Be()),!(ye&6)&&(sr=Be()+500,sn()))}break;case 13:Tn(function(){var r=Gt(e,1);if(r!==null){var i=st();$t(r,e,1,i)}}),ka(e,1)}},Xl=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var n=st();$t(t,e,134217728,n)}ka(e,134217728)}},Ts=function(e){if(e.tag===13){var t=mn(e),n=Gt(e,t);if(n!==null){var r=st();$t(n,e,t,r)}ka(e,t)}},Ns=function(){return Se},Ls=function(e,t){var n=Se;try{return Se=e,t()}finally{Se=n}},Ul=function(e,t,n){switch(t){case"input":if(ge(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ti(r);if(!i)throw Error(a(90));ce(r),ge(r,i)}}}break;case"textarea":ae(e,n);break;case"select":t=n.value,t!=null&&Rt(e,!!n.multiple,t,!1)}},ys=ha,vs=Tn;var bp={usingClientEntryPoint:!1,Events:[Fr,Kn,Ti,hs,gs,ha]},Jr={findFiberByHostInstance:Cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zp={bundleType:Jr.bundleType,version:Jr.version,rendererPackageName:Jr.rendererPackageName,rendererConfig:Jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ks(e),e===null?null:e.stateNode},findFiberByHostInstance:Jr.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{fi=hl.inject(Zp),At=hl}catch{}}return ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bp,ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ea(t))throw Error(a(200));return Xp(e,t,null,n)},ht.createRoot=function(e,t){if(!Ea(e))throw Error(a(299));var n=!1,r="",i=Kc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Sa(e,1,!1,null,null,n,!1,r,i),e[Wt]=t.current,$r(e.nodeType===8?e.parentNode:e),new Ca(t)},ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=ks(t),e=e===null?null:e.stateNode,e},ht.flushSync=function(e){return Tn(e)},ht.hydrate=function(e,t,n){if(!pl(t))throw Error(a(200));return ml(null,e,t,!0,n)},ht.hydrateRoot=function(e,t,n){if(!Ea(e))throw Error(a(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",u=Kc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=Gc(t,null,e,1,n??null,i,!1,o,u),e[Wt]=t.current,$r(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new fl(t)},ht.render=function(e,t,n){if(!pl(t))throw Error(a(200));return ml(null,e,t,!1,n)},ht.unmountComponentAtNode=function(e){if(!pl(e))throw Error(a(40));return e._reactRootContainer?(Tn(function(){ml(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1},ht.unstable_batchedUpdates=ha,ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!pl(n))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return ml(e,t,n,!1,r)},ht.version="18.3.1-next-f1338f8080-20240426",ht}var id;function Ld(){if(id)return _a.exports;id=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),_a.exports=om(),_a.exports}var ld;function am(){if(ld)return gl;ld=1;var l=Ld();return gl.createRoot=l.createRoot,gl.hydrateRoot=l.hydrateRoot,gl}var sm=am();const um=ts(sm);var za={exports:{}},xe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od;function cm(){if(od)return xe;od=1;var l=Symbol.for("react.element"),s=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),g=Symbol.for("react.context"),v=Symbol.for("react.server_context"),S=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),B;B=Symbol.for("react.module.reference");function z(w){if(typeof w=="object"&&w!==null){var H=w.$$typeof;switch(H){case l:switch(w=w.type,w){case a:case d:case c:case P:case T:return w;default:switch(w=w&&w.$$typeof,w){case v:case g:case S:case U:case I:case p:return w;default:return H}}case s:return H}}}return xe.ContextConsumer=g,xe.ContextProvider=p,xe.Element=l,xe.ForwardRef=S,xe.Fragment=a,xe.Lazy=U,xe.Memo=I,xe.Portal=s,xe.Profiler=d,xe.StrictMode=c,xe.Suspense=P,xe.SuspenseList=T,xe.isAsyncMode=function(){return!1},xe.isConcurrentMode=function(){return!1},xe.isContextConsumer=function(w){return z(w)===g},xe.isContextProvider=function(w){return z(w)===p},xe.isElement=function(w){return typeof w=="object"&&w!==null&&w.$$typeof===l},xe.isForwardRef=function(w){return z(w)===S},xe.isFragment=function(w){return z(w)===a},xe.isLazy=function(w){return z(w)===U},xe.isMemo=function(w){return z(w)===I},xe.isPortal=function(w){return z(w)===s},xe.isProfiler=function(w){return z(w)===d},xe.isStrictMode=function(w){return z(w)===c},xe.isSuspense=function(w){return z(w)===P},xe.isSuspenseList=function(w){return z(w)===T},xe.isValidElementType=function(w){return typeof w=="string"||typeof w=="function"||w===a||w===d||w===c||w===P||w===T||w===b||typeof w=="object"&&w!==null&&(w.$$typeof===U||w.$$typeof===I||w.$$typeof===p||w.$$typeof===g||w.$$typeof===S||w.$$typeof===B||w.getModuleId!==void 0)},xe.typeOf=z,xe}var ad;function dm(){return ad||(ad=1,za.exports=cm()),za.exports}var Od=dm();function fm(l){function s(E,L,F,X,k){for(var re=0,O=0,oe=0,ue=0,he,ce,De=0,be=0,me,Ge=me=he=0,ge=0,We=0,Bt=0,Oe=0,Rt=F.length,Vt=Rt-1,ut,ae="",Te="",Dn="",Sn="",gt;ge<Rt;){if(ce=F.charCodeAt(ge),ge===Vt&&O+ue+oe+re!==0&&(O!==0&&(ce=O===47?10:47),ue=oe=re=0,Rt++,Vt++),O+ue+oe+re===0){if(ge===Vt&&(0<We&&(ae=ae.replace(U,"")),0<ae.trim().length)){switch(ce){case 32:case 9:case 59:case 13:case 10:break;default:ae+=F.charAt(ge)}ce=59}switch(ce){case 123:for(ae=ae.trim(),he=ae.charCodeAt(0),me=1,Oe=++ge;ge<Rt;){switch(ce=F.charCodeAt(ge)){case 123:me++;break;case 125:me--;break;case 47:switch(ce=F.charCodeAt(ge+1)){case 42:case 47:e:{for(Ge=ge+1;Ge<Vt;++Ge)switch(F.charCodeAt(Ge)){case 47:if(ce===42&&F.charCodeAt(Ge-1)===42&&ge+2!==Ge){ge=Ge+1;break e}break;case 10:if(ce===47){ge=Ge+1;break e}}ge=Ge}}break;case 91:ce++;case 40:ce++;case 34:case 39:for(;ge++<Vt&&F.charCodeAt(ge)!==ce;);}if(me===0)break;ge++}switch(me=F.substring(Oe,ge),he===0&&(he=(ae=ae.replace(I,"").trim()).charCodeAt(0)),he){case 64:switch(0<We&&(ae=ae.replace(U,"")),ce=ae.charCodeAt(1),ce){case 100:case 109:case 115:case 45:We=L;break;default:We=Le}if(me=s(L,We,me,ce,k+1),Oe=me.length,0<W&&(We=a(Le,ae,Bt),gt=v(3,me,We,L,Ee,Pe,Oe,ce,k,X),ae=We.join(""),gt!==void 0&&(Oe=(me=gt.trim()).length)===0&&(ce=0,me="")),0<Oe)switch(ce){case 115:ae=ae.replace(de,g);case 100:case 109:case 45:me=ae+"{"+me+"}";break;case 107:ae=ae.replace(Q,"$1 $2"),me=ae+"{"+me+"}",me=je===1||je===2&&p("@"+me,3)?"@-webkit-"+me+"@"+me:"@"+me;break;default:me=ae+me,X===112&&(me=(Te+=me,""))}else me="";break;default:me=s(L,a(L,ae,Bt),me,X,k+1)}Dn+=me,me=Bt=We=Ge=he=0,ae="",ce=F.charCodeAt(++ge);break;case 125:case 59:if(ae=(0<We?ae.replace(U,""):ae).trim(),1<(Oe=ae.length))switch(Ge===0&&(he=ae.charCodeAt(0),he===45||96<he&&123>he)&&(Oe=(ae=ae.replace(" ",":")).length),0<W&&(gt=v(1,ae,L,E,Ee,Pe,Te.length,X,k,X))!==void 0&&(Oe=(ae=gt.trim()).length)===0&&(ae="\0\0"),he=ae.charCodeAt(0),ce=ae.charCodeAt(1),he){case 0:break;case 64:if(ce===105||ce===99){Sn+=ae+F.charAt(ge);break}default:ae.charCodeAt(Oe-1)!==58&&(Te+=d(ae,he,ce,ae.charCodeAt(2)))}Bt=We=Ge=he=0,ae="",ce=F.charCodeAt(++ge)}}switch(ce){case 13:case 10:O===47?O=0:1+he===0&&X!==107&&0<ae.length&&(We=1,ae+="\0"),0<W*G&&v(0,ae,L,E,Ee,Pe,Te.length,X,k,X),Pe=1,Ee++;break;case 59:case 125:if(O+ue+oe+re===0){Pe++;break}default:switch(Pe++,ut=F.charAt(ge),ce){case 9:case 32:if(ue+re+O===0)switch(De){case 44:case 58:case 9:case 32:ut="";break;default:ce!==32&&(ut=" ")}break;case 0:ut="\\0";break;case 12:ut="\\f";break;case 11:ut="\\v";break;case 38:ue+O+re===0&&(We=Bt=1,ut="\f"+ut);break;case 108:if(ue+O+re+ze===0&&0<Ge)switch(ge-Ge){case 2:De===112&&F.charCodeAt(ge-3)===58&&(ze=De);case 8:be===111&&(ze=be)}break;case 58:ue+O+re===0&&(Ge=ge);break;case 44:O+oe+ue+re===0&&(We=1,ut+="\r");break;case 34:case 39:O===0&&(ue=ue===ce?0:ue===0?ce:ue);break;case 91:ue+O+oe===0&&re++;break;case 93:ue+O+oe===0&&re--;break;case 41:ue+O+re===0&&oe--;break;case 40:if(ue+O+re===0){if(he===0)switch(2*De+3*be){case 533:break;default:he=1}oe++}break;case 64:O+oe+ue+re+Ge+me===0&&(me=1);break;case 42:case 47:if(!(0<ue+re+oe))switch(O){case 0:switch(2*ce+3*F.charCodeAt(ge+1)){case 235:O=47;break;case 220:Oe=ge,O=42}break;case 42:ce===47&&De===42&&Oe+2!==ge&&(F.charCodeAt(Oe+2)===33&&(Te+=F.substring(Oe,ge+1)),ut="",O=0)}}O===0&&(ae+=ut)}be=De,De=ce,ge++}if(Oe=Te.length,0<Oe){if(We=L,0<W&&(gt=v(2,Te,We,E,Ee,Pe,Oe,X,k,X),gt!==void 0&&(Te=gt).length===0))return Sn+Te+Dn;if(Te=We.join(",")+"{"+Te+"}",je*ze!==0){switch(je!==2||p(Te,2)||(ze=0),ze){case 111:Te=Te.replace(J,":-moz-$1")+Te;break;case 112:Te=Te.replace(Y,"::-webkit-input-$1")+Te.replace(Y,"::-moz-$1")+Te.replace(Y,":-ms-input-$1")+Te}ze=0}}return Sn+Te+Dn}function a(E,L,F){var X=L.trim().split(w);L=X;var k=X.length,re=E.length;switch(re){case 0:case 1:var O=0;for(E=re===0?"":E[0]+" ";O<k;++O)L[O]=c(E,L[O],F).trim();break;default:var oe=O=0;for(L=[];O<k;++O)for(var ue=0;ue<re;++ue)L[oe++]=c(E[ue]+" ",X[O],F).trim()}return L}function c(E,L,F){var X=L.charCodeAt(0);switch(33>X&&(X=(L=L.trim()).charCodeAt(0)),X){case 38:return L.replace(H,"$1"+E.trim());case 58:return E.trim()+L.replace(H,"$1"+E.trim());default:if(0<1*F&&0<L.indexOf("\f"))return L.replace(H,(E.charCodeAt(0)===58?"":"$1")+E.trim())}return E+L}function d(E,L,F,X){var k=E+";",re=2*L+3*F+4*X;if(re===944){E=k.indexOf(":",9)+1;var O=k.substring(E,k.length-1).trim();return O=k.substring(0,E).trim()+O+";",je===1||je===2&&p(O,1)?"-webkit-"+O+O:O}if(je===0||je===2&&!p(k,1))return k;switch(re){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(nt,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return O=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+O+"-webkit-"+k+"-ms-flex-pack"+O+k;case 1005:return B.test(k)?k.replace(b,":-webkit-")+k.replace(b,":-moz-")+k:k;case 1e3:switch(O=k.substring(13).trim(),L=O.indexOf("-")+1,O.charCodeAt(0)+O.charCodeAt(L)){case 226:O=k.replace(N,"tb");break;case 232:O=k.replace(N,"tb-rl");break;case 220:O=k.replace(N,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+O+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(L=(k=E).length-10,O=(k.charCodeAt(L)===33?k.substring(0,L):k).substring(E.indexOf(":",7)+1).trim(),re=O.charCodeAt(0)+(O.charCodeAt(7)|0)){case 203:if(111>O.charCodeAt(8))break;case 115:k=k.replace(O,"-webkit-"+O)+";"+k;break;case 207:case 102:k=k.replace(O,"-webkit-"+(102<re?"inline-":"")+"box")+";"+k.replace(O,"-webkit-"+O)+";"+k.replace(O,"-ms-"+O+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return O=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+O+"-ms-flex-"+O+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(Ce,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(Ce,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(Fe.test(E)===!0)return(O=E.substring(E.indexOf(":")+1)).charCodeAt(0)===115?d(E.replace("stretch","fill-available"),L,F,X).replace(":fill-available",":stretch"):k.replace(O,"-webkit-"+O)+k.replace(O,"-moz-"+O.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,F+X===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(z,"$1-webkit-$2")+k}return k}function p(E,L){var F=E.indexOf(L===1?":":"{"),X=E.substring(0,L!==3?F:10);return F=E.substring(F+1,E.length-1),ne(L!==2?X:X.replace(Me,"$1"),F,L)}function g(E,L){var F=d(L,L.charCodeAt(0),L.charCodeAt(1),L.charCodeAt(2));return F!==L+";"?F.replace(ke," or ($1)").substring(4):"("+L+")"}function v(E,L,F,X,k,re,O,oe,ue,he){for(var ce=0,De=L,be;ce<W;++ce)switch(be=pe[ce].call(T,E,De,F,X,k,re,O,oe,ue,he)){case void 0:case!1:case!0:case null:break;default:De=be}if(De!==L)return De}function S(E){switch(E){case void 0:case null:W=pe.length=0;break;default:if(typeof E=="function")pe[W++]=E;else if(typeof E=="object")for(var L=0,F=E.length;L<F;++L)S(E[L]);else G=!!E|0}return S}function P(E){return E=E.prefix,E!==void 0&&(ne=null,E?typeof E!="function"?je=1:(je=2,ne=E):je=0),P}function T(E,L){var F=E;if(33>F.charCodeAt(0)&&(F=F.trim()),x=F,F=[x],0<W){var X=v(-1,L,F,F,Ee,Pe,0,0,0,0);X!==void 0&&typeof X=="string"&&(L=X)}var k=s(Le,F,L,0,0);return 0<W&&(X=v(-2,k,F,F,Ee,Pe,k.length,0,0,0),X!==void 0&&(k=X)),x="",ze=0,Pe=Ee=1,k}var I=/^\0+/g,U=/[\0\r\f]/g,b=/: */g,B=/zoo|gra/,z=/([,: ])(transform)/g,w=/,\r+?/g,H=/([\t\r\n ])*\f?&/g,Q=/@(k\w+)\s*(\S*)\s*/,Y=/::(place)/g,J=/:(read-only)/g,N=/[svh]\w+-[tblr]{2}/,de=/\(\s*(.*)\s*\)/g,ke=/([\s\S]*?);/g,Ce=/-self|flex-/g,Me=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Fe=/stretch|:\s*\w+\-(?:conte|avail)/,nt=/([^-])(image-set\()/,Pe=1,Ee=1,ze=0,je=1,Le=[],pe=[],W=0,ne=null,G=0,x="";return T.use=S,T.set=P,l!==void 0&&P(l),T}var pm={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function mm(l){var s=Object.create(null);return function(a){return s[a]===void 0&&(s[a]=l(a)),s[a]}}var hm=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,sd=mm(function(l){return hm.test(l)||l.charCodeAt(0)===111&&l.charCodeAt(1)===110&&l.charCodeAt(2)<91}),Ta={exports:{}},we={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ud;function gm(){if(ud)return we;ud=1;var l=typeof Symbol=="function"&&Symbol.for,s=l?Symbol.for("react.element"):60103,a=l?Symbol.for("react.portal"):60106,c=l?Symbol.for("react.fragment"):60107,d=l?Symbol.for("react.strict_mode"):60108,p=l?Symbol.for("react.profiler"):60114,g=l?Symbol.for("react.provider"):60109,v=l?Symbol.for("react.context"):60110,S=l?Symbol.for("react.async_mode"):60111,P=l?Symbol.for("react.concurrent_mode"):60111,T=l?Symbol.for("react.forward_ref"):60112,I=l?Symbol.for("react.suspense"):60113,U=l?Symbol.for("react.suspense_list"):60120,b=l?Symbol.for("react.memo"):60115,B=l?Symbol.for("react.lazy"):60116,z=l?Symbol.for("react.block"):60121,w=l?Symbol.for("react.fundamental"):60117,H=l?Symbol.for("react.responder"):60118,Q=l?Symbol.for("react.scope"):60119;function Y(N){if(typeof N=="object"&&N!==null){var de=N.$$typeof;switch(de){case s:switch(N=N.type,N){case S:case P:case c:case p:case d:case I:return N;default:switch(N=N&&N.$$typeof,N){case v:case T:case B:case b:case g:return N;default:return de}}case a:return de}}}function J(N){return Y(N)===P}return we.AsyncMode=S,we.ConcurrentMode=P,we.ContextConsumer=v,we.ContextProvider=g,we.Element=s,we.ForwardRef=T,we.Fragment=c,we.Lazy=B,we.Memo=b,we.Portal=a,we.Profiler=p,we.StrictMode=d,we.Suspense=I,we.isAsyncMode=function(N){return J(N)||Y(N)===S},we.isConcurrentMode=J,we.isContextConsumer=function(N){return Y(N)===v},we.isContextProvider=function(N){return Y(N)===g},we.isElement=function(N){return typeof N=="object"&&N!==null&&N.$$typeof===s},we.isForwardRef=function(N){return Y(N)===T},we.isFragment=function(N){return Y(N)===c},we.isLazy=function(N){return Y(N)===B},we.isMemo=function(N){return Y(N)===b},we.isPortal=function(N){return Y(N)===a},we.isProfiler=function(N){return Y(N)===p},we.isStrictMode=function(N){return Y(N)===d},we.isSuspense=function(N){return Y(N)===I},we.isValidElementType=function(N){return typeof N=="string"||typeof N=="function"||N===c||N===P||N===p||N===d||N===I||N===U||typeof N=="object"&&N!==null&&(N.$$typeof===B||N.$$typeof===b||N.$$typeof===g||N.$$typeof===v||N.$$typeof===T||N.$$typeof===w||N.$$typeof===H||N.$$typeof===Q||N.$$typeof===z)},we.typeOf=Y,we}var cd;function ym(){return cd||(cd=1,Ta.exports=gm()),Ta.exports}var Na,dd;function vm(){if(dd)return Na;dd=1;var l=ym(),s={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},d={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},p={};p[l.ForwardRef]=c,p[l.Memo]=d;function g(B){return l.isMemo(B)?d:p[B.$$typeof]||s}var v=Object.defineProperty,S=Object.getOwnPropertyNames,P=Object.getOwnPropertySymbols,T=Object.getOwnPropertyDescriptor,I=Object.getPrototypeOf,U=Object.prototype;function b(B,z,w){if(typeof z!="string"){if(U){var H=I(z);H&&H!==U&&b(B,H,w)}var Q=S(z);P&&(Q=Q.concat(P(z)));for(var Y=g(B),J=g(z),N=0;N<Q.length;++N){var de=Q[N];if(!a[de]&&!(w&&w[de])&&!(J&&J[de])&&!(Y&&Y[de])){var ke=T(z,de);try{v(B,de,ke)}catch{}}}}return B}return Na=b,Na}var xm=vm();const wm=ts(xm);var _t={};function Zt(){return(Zt=Object.assign||function(l){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(l[c]=a[c])}return l}).apply(this,arguments)}var fd=function(l,s){for(var a=[l[0]],c=0,d=s.length;c<d;c+=1)a.push(s[c],l[c+1]);return a},Wa=function(l){return l!==null&&typeof l=="object"&&(l.toString?l.toString():Object.prototype.toString.call(l))==="[object Object]"&&!Od.typeOf(l)},_l=Object.freeze([]),xn=Object.freeze({});function ii(l){return typeof l=="function"}function pd(l){return l.displayName||l.name||"Component"}function rs(l){return l&&typeof l.styledComponentId=="string"}var dr=typeof process<"u"&&_t!==void 0&&(_t.REACT_APP_SC_ATTR||_t.SC_ATTR)||"data-styled",is=typeof window<"u"&&"HTMLElement"in window,Sm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&_t!==void 0&&(_t.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_t.REACT_APP_SC_DISABLE_SPEEDY!==""?_t.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_t.REACT_APP_SC_DISABLE_SPEEDY:_t.SC_DISABLE_SPEEDY!==void 0&&_t.SC_DISABLE_SPEEDY!==""&&_t.SC_DISABLE_SPEEDY!=="false"&&_t.SC_DISABLE_SPEEDY));function ai(l){for(var s=arguments.length,a=new Array(s>1?s-1:0),c=1;c<s;c++)a[c-1]=arguments[c];throw new Error("An error occurred. See https://git.io/JUIaE#"+l+" for more information."+(a.length>0?" Args: "+a.join(", "):""))}var km=function(){function l(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}var s=l.prototype;return s.indexOfGroup=function(a){for(var c=0,d=0;d<a;d++)c+=this.groupSizes[d];return c},s.insertRules=function(a,c){if(a>=this.groupSizes.length){for(var d=this.groupSizes,p=d.length,g=p;a>=g;)(g<<=1)<0&&ai(16,""+a);this.groupSizes=new Uint32Array(g),this.groupSizes.set(d),this.length=g;for(var v=p;v<g;v++)this.groupSizes[v]=0}for(var S=this.indexOfGroup(a+1),P=0,T=c.length;P<T;P++)this.tag.insertRule(S,c[P])&&(this.groupSizes[a]++,S++)},s.clearGroup=function(a){if(a<this.length){var c=this.groupSizes[a],d=this.indexOfGroup(a),p=d+c;this.groupSizes[a]=0;for(var g=d;g<p;g++)this.tag.deleteRule(d)}},s.getGroup=function(a){var c="";if(a>=this.length||this.groupSizes[a]===0)return c;for(var d=this.groupSizes[a],p=this.indexOfGroup(a),g=p+d,v=p;v<g;v++)c+=this.tag.getRule(v)+`/*!sc*/
`;return c},l}(),Cl=new Map,Rl=new Map,ti=1,yl=function(l){if(Cl.has(l))return Cl.get(l);for(;Rl.has(ti);)ti++;var s=ti++;return Cl.set(l,s),Rl.set(s,l),s},Cm=function(l){return Rl.get(l)},Em=function(l,s){s>=ti&&(ti=s+1),Cl.set(l,s),Rl.set(s,l)},jm="style["+dr+'][data-styled-version="5.3.9"]',Pm=new RegExp("^"+dr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),_m=function(l,s,a){for(var c,d=a.split(","),p=0,g=d.length;p<g;p++)(c=d[p])&&l.registerName(s,c)},Rm=function(l,s){for(var a=(s.textContent||"").split(`/*!sc*/
`),c=[],d=0,p=a.length;d<p;d++){var g=a[d].trim();if(g){var v=g.match(Pm);if(v){var S=0|parseInt(v[1],10),P=v[2];S!==0&&(Em(P,S),_m(l,P,v[3]),l.getTag().insertRules(S,c)),c.length=0}else c.push(g)}}},Im=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},$d=function(l){var s=document.head,a=l||s,c=document.createElement("style"),d=function(v){for(var S=v.childNodes,P=S.length;P>=0;P--){var T=S[P];if(T&&T.nodeType===1&&T.hasAttribute(dr))return T}}(a),p=d!==void 0?d.nextSibling:null;c.setAttribute(dr,"active"),c.setAttribute("data-styled-version","5.3.9");var g=Im();return g&&c.setAttribute("nonce",g),a.insertBefore(c,p),c},zm=function(){function l(a){var c=this.element=$d(a);c.appendChild(document.createTextNode("")),this.sheet=function(d){if(d.sheet)return d.sheet;for(var p=document.styleSheets,g=0,v=p.length;g<v;g++){var S=p[g];if(S.ownerNode===d)return S}ai(17)}(c),this.length=0}var s=l.prototype;return s.insertRule=function(a,c){try{return this.sheet.insertRule(c,a),this.length++,!0}catch{return!1}},s.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},s.getRule=function(a){var c=this.sheet.cssRules[a];return c!==void 0&&typeof c.cssText=="string"?c.cssText:""},l}(),Tm=function(){function l(a){var c=this.element=$d(a);this.nodes=c.childNodes,this.length=0}var s=l.prototype;return s.insertRule=function(a,c){if(a<=this.length&&a>=0){var d=document.createTextNode(c),p=this.nodes[a];return this.element.insertBefore(d,p||null),this.length++,!0}return!1},s.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},s.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},l}(),Nm=function(){function l(a){this.rules=[],this.length=0}var s=l.prototype;return s.insertRule=function(a,c){return a<=this.length&&(this.rules.splice(a,0,c),this.length++,!0)},s.deleteRule=function(a){this.rules.splice(a,1),this.length--},s.getRule=function(a){return a<this.length?this.rules[a]:""},l}(),md=is,Lm={isServer:!is,useCSSOMInjection:!Sm},Ad=function(){function l(a,c,d){a===void 0&&(a=xn),c===void 0&&(c={}),this.options=Zt({},Lm,{},a),this.gs=c,this.names=new Map(d),this.server=!!a.isServer,!this.server&&is&&md&&(md=!1,function(p){for(var g=document.querySelectorAll(jm),v=0,S=g.length;v<S;v++){var P=g[v];P&&P.getAttribute(dr)!=="active"&&(Rm(p,P),P.parentNode&&P.parentNode.removeChild(P))}}(this))}l.registerId=function(a){return yl(a)};var s=l.prototype;return s.reconstructWithOptions=function(a,c){return c===void 0&&(c=!0),new l(Zt({},this.options,{},a),this.gs,c&&this.names||void 0)},s.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},s.getTag=function(){return this.tag||(this.tag=(d=(c=this.options).isServer,p=c.useCSSOMInjection,g=c.target,a=d?new Nm(g):p?new zm(g):new Tm(g),new km(a)));var a,c,d,p,g},s.hasNameForId=function(a,c){return this.names.has(a)&&this.names.get(a).has(c)},s.registerName=function(a,c){if(yl(a),this.names.has(a))this.names.get(a).add(c);else{var d=new Set;d.add(c),this.names.set(a,d)}},s.insertRules=function(a,c,d){this.registerName(a,c),this.getTag().insertRules(yl(a),d)},s.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},s.clearRules=function(a){this.getTag().clearGroup(yl(a)),this.clearNames(a)},s.clearTag=function(){this.tag=void 0},s.toString=function(){return function(a){for(var c=a.getTag(),d=c.length,p="",g=0;g<d;g++){var v=Cm(g);if(v!==void 0){var S=a.names.get(v),P=c.getGroup(g);if(S&&P&&S.size){var T=dr+".g"+g+'[id="'+v+'"]',I="";S!==void 0&&S.forEach(function(U){U.length>0&&(I+=U+",")}),p+=""+P+T+'{content:"'+I+`"}/*!sc*/
`}}}return p}(this)},l}(),Om=/(a)(d)/gi,hd=function(l){return String.fromCharCode(l+(l>25?39:97))};function Ha(l){var s,a="";for(s=Math.abs(l);s>52;s=s/52|0)a=hd(s%52)+a;return(hd(s%52)+a).replace(Om,"$1-$2")}var cr=function(l,s){for(var a=s.length;a;)l=33*l^s.charCodeAt(--a);return l},Md=function(l){return cr(5381,l)};function $m(l){for(var s=0;s<l.length;s+=1){var a=l[s];if(ii(a)&&!rs(a))return!1}return!0}var Am=Md("5.3.9"),Mm=function(){function l(s,a,c){this.rules=s,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&$m(s),this.componentId=a,this.baseHash=cr(Am,a),this.baseStyle=c,Ad.registerId(a)}return l.prototype.generateAndInjectStyles=function(s,a,c){var d=this.componentId,p=[];if(this.baseStyle&&p.push(this.baseStyle.generateAndInjectStyles(s,a,c)),this.isStatic&&!c.hash)if(this.staticRulesId&&a.hasNameForId(d,this.staticRulesId))p.push(this.staticRulesId);else{var g=fr(this.rules,s,a,c).join(""),v=Ha(cr(this.baseHash,g)>>>0);if(!a.hasNameForId(d,v)){var S=c(g,"."+v,void 0,d);a.insertRules(d,v,S)}p.push(v),this.staticRulesId=v}else{for(var P=this.rules.length,T=cr(this.baseHash,c.hash),I="",U=0;U<P;U++){var b=this.rules[U];if(typeof b=="string")I+=b;else if(b){var B=fr(b,s,a,c),z=Array.isArray(B)?B.join(""):B;T=cr(T,z+U),I+=z}}if(I){var w=Ha(T>>>0);if(!a.hasNameForId(d,w)){var H=c(I,"."+w,void 0,d);a.insertRules(d,w,H)}p.push(w)}}return p.join(" ")},l}(),Fm=/^\s*\/\/.*$/gm,Dm=[":","[",".","#"];function Um(l){var s,a,c,d,p=xn,g=p.options,v=g===void 0?xn:g,S=p.plugins,P=S===void 0?_l:S,T=new fm(v),I=[],U=function(z){function w(H){if(H)try{z(H+"}")}catch{}}return function(H,Q,Y,J,N,de,ke,Ce,Me,Fe){switch(H){case 1:if(Me===0&&Q.charCodeAt(0)===64)return z(Q+";"),"";break;case 2:if(Ce===0)return Q+"/*|*/";break;case 3:switch(Ce){case 102:case 112:return z(Y[0]+Q),"";default:return Q+(Fe===0?"/*|*/":"")}case-2:Q.split("/*|*/}").forEach(w)}}}(function(z){I.push(z)}),b=function(z,w,H){return w===0&&Dm.indexOf(H[a.length])!==-1||H.match(d)?z:"."+s};function B(z,w,H,Q){Q===void 0&&(Q="&");var Y=z.replace(Fm,""),J=w&&H?H+" "+w+" { "+Y+" }":Y;return s=Q,a=w,c=new RegExp("\\"+a+"\\b","g"),d=new RegExp("(\\"+a+"\\b){2,}"),T(H||!w?"":w,J)}return T.use([].concat(P,[function(z,w,H){z===2&&H.length&&H[0].lastIndexOf(a)>0&&(H[0]=H[0].replace(c,b))},U,function(z){if(z===-2){var w=I;return I=[],w}}])),B.hash=P.length?P.reduce(function(z,w){return w.name||ai(15),cr(z,w.name)},5381).toString():"",B}var Fd=Qe.createContext();Fd.Consumer;var Dd=Qe.createContext(),Bm=(Dd.Consumer,new Ad),Qa=Um();function Vm(){return $.useContext(Fd)||Bm}function Wm(){return $.useContext(Dd)||Qa}var Ud=function(){function l(s,a){var c=this;this.inject=function(d,p){p===void 0&&(p=Qa);var g=c.name+p.hash;d.hasNameForId(c.id,g)||d.insertRules(c.id,g,p(c.rules,g,"@keyframes"))},this.toString=function(){return ai(12,String(c.name))},this.name=s,this.id="sc-keyframes-"+s,this.rules=a}return l.prototype.getName=function(s){return s===void 0&&(s=Qa),this.name+s.hash},l}(),Hm=/([A-Z])/,Qm=/([A-Z])/g,Ym=/^ms-/,Gm=function(l){return"-"+l.toLowerCase()};function gd(l){return Hm.test(l)?l.replace(Qm,Gm).replace(Ym,"-ms-"):l}var yd=function(l){return l==null||l===!1||l===""};function fr(l,s,a,c){if(Array.isArray(l)){for(var d,p=[],g=0,v=l.length;g<v;g+=1)(d=fr(l[g],s,a,c))!==""&&(Array.isArray(d)?p.push.apply(p,d):p.push(d));return p}if(yd(l))return"";if(rs(l))return"."+l.styledComponentId;if(ii(l)){if(typeof(P=l)!="function"||P.prototype&&P.prototype.isReactComponent||!s)return l;var S=l(s);return fr(S,s,a,c)}var P;return l instanceof Ud?a?(l.inject(a,c),l.getName(c)):l:Wa(l)?function T(I,U){var b,B,z=[];for(var w in I)I.hasOwnProperty(w)&&!yd(I[w])&&(Array.isArray(I[w])&&I[w].isCss||ii(I[w])?z.push(gd(w)+":",I[w],";"):Wa(I[w])?z.push.apply(z,T(I[w],w)):z.push(gd(w)+": "+(b=w,(B=I[w])==null||typeof B=="boolean"||B===""?"":typeof B!="number"||B===0||b in pm?String(B).trim():B+"px")+";"));return U?[U+" {"].concat(z,["}"]):z}(l):l.toString()}var vd=function(l){return Array.isArray(l)&&(l.isCss=!0),l};function Ol(l){for(var s=arguments.length,a=new Array(s>1?s-1:0),c=1;c<s;c++)a[c-1]=arguments[c];return ii(l)||Wa(l)?vd(fr(fd(_l,[l].concat(a)))):a.length===0&&l.length===1&&typeof l[0]=="string"?l:vd(fr(fd(l,a)))}var Xm=function(l,s,a){return a===void 0&&(a=xn),l.theme!==a.theme&&l.theme||s||a.theme},Km=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,bm=/(^-|-$)/g;function La(l){return l.replace(Km,"-").replace(bm,"")}var Bd=function(l){return Ha(Md(l)>>>0)};function vl(l){return typeof l=="string"&&!0}var Ya=function(l){return typeof l=="function"||typeof l=="object"&&l!==null&&!Array.isArray(l)},Zm=function(l){return l!=="__proto__"&&l!=="constructor"&&l!=="prototype"};function Jm(l,s,a){var c=l[a];Ya(s)&&Ya(c)?Vd(c,s):l[a]=s}function Vd(l){for(var s=arguments.length,a=new Array(s>1?s-1:0),c=1;c<s;c++)a[c-1]=arguments[c];for(var d=0,p=a;d<p.length;d++){var g=p[d];if(Ya(g))for(var v in g)Zm(v)&&Jm(l,g[v],v)}return l}var Wd=Qe.createContext();Wd.Consumer;var Oa={};function Hd(l,s,a){var c=rs(l),d=!vl(l),p=s.attrs,g=p===void 0?_l:p,v=s.componentId,S=v===void 0?function(Q,Y){var J=typeof Q!="string"?"sc":La(Q);Oa[J]=(Oa[J]||0)+1;var N=J+"-"+Bd("5.3.9"+J+Oa[J]);return Y?Y+"-"+N:N}(s.displayName,s.parentComponentId):v,P=s.displayName,T=P===void 0?function(Q){return vl(Q)?"styled."+Q:"Styled("+pd(Q)+")"}(l):P,I=s.displayName&&s.componentId?La(s.displayName)+"-"+s.componentId:s.componentId||S,U=c&&l.attrs?Array.prototype.concat(l.attrs,g).filter(Boolean):g,b=s.shouldForwardProp;c&&l.shouldForwardProp&&(b=s.shouldForwardProp?function(Q,Y,J){return l.shouldForwardProp(Q,Y,J)&&s.shouldForwardProp(Q,Y,J)}:l.shouldForwardProp);var B,z=new Mm(a,I,c?l.componentStyle:void 0),w=z.isStatic&&g.length===0,H=function(Q,Y){return function(J,N,de,ke){var Ce=J.attrs,Me=J.componentStyle,Fe=J.defaultProps,nt=J.foldedComponentIds,Pe=J.shouldForwardProp,Ee=J.styledComponentId,ze=J.target,je=function(X,k,re){X===void 0&&(X=xn);var O=Zt({},k,{theme:X}),oe={};return re.forEach(function(ue){var he,ce,De,be=ue;for(he in ii(be)&&(be=be(O)),be)O[he]=oe[he]=he==="className"?(ce=oe[he],De=be[he],ce&&De?ce+" "+De:ce||De):be[he]}),[O,oe]}(Xm(N,$.useContext(Wd),Fe)||xn,N,Ce),Le=je[0],pe=je[1],W=function(X,k,re,O){var oe=Vm(),ue=Wm(),he=k?X.generateAndInjectStyles(xn,oe,ue):X.generateAndInjectStyles(re,oe,ue);return he}(Me,ke,Le),ne=de,G=pe.$as||N.$as||pe.as||N.as||ze,x=vl(G),E=pe!==N?Zt({},N,{},pe):N,L={};for(var F in E)F[0]!=="$"&&F!=="as"&&(F==="forwardedAs"?L.as=E[F]:(Pe?Pe(F,sd,G):!x||sd(F))&&(L[F]=E[F]));return N.style&&pe.style!==N.style&&(L.style=Zt({},N.style,{},pe.style)),L.className=Array.prototype.concat(nt,Ee,W!==Ee?W:null,N.className,pe.className).filter(Boolean).join(" "),L.ref=ne,$.createElement(G,L)}(B,Q,Y,w)};return H.displayName=T,(B=Qe.forwardRef(H)).attrs=U,B.componentStyle=z,B.displayName=T,B.shouldForwardProp=b,B.foldedComponentIds=c?Array.prototype.concat(l.foldedComponentIds,l.styledComponentId):_l,B.styledComponentId=I,B.target=c?l.target:l,B.withComponent=function(Q){var Y=s.componentId,J=function(de,ke){if(de==null)return{};var Ce,Me,Fe={},nt=Object.keys(de);for(Me=0;Me<nt.length;Me++)Ce=nt[Me],ke.indexOf(Ce)>=0||(Fe[Ce]=de[Ce]);return Fe}(s,["componentId"]),N=Y&&Y+"-"+(vl(Q)?Q:La(pd(Q)));return Hd(Q,Zt({},J,{attrs:U,componentId:N}),a)},Object.defineProperty(B,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Q){this._foldedDefaultProps=c?Vd({},l.defaultProps,Q):Q}}),Object.defineProperty(B,"toString",{value:function(){return"."+B.styledComponentId}}),d&&wm(B,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),B}var R=function(l){return function s(a,c,d){if(d===void 0&&(d=xn),!Od.isValidElementType(c))return ai(1,String(c));var p=function(){return a(c,d,Ol.apply(void 0,arguments))};return p.withConfig=function(g){return s(a,c,Zt({},d,{},g))},p.attrs=function(g){return s(a,c,Zt({},d,{attrs:Array.prototype.concat(d.attrs,g).filter(Boolean)}))},p}(Hd,l)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(l){R[l]=R(l)});function ls(l){for(var s=arguments.length,a=new Array(s>1?s-1:0),c=1;c<s;c++)a[c-1]=arguments[c];var d=Ol.apply(void 0,[l].concat(a)).join(""),p=Bd(d);return new Ud(p,d)}const ei=48,qm=({color:l="currentColor",direction:s="left",distance:a="md",duration:c=.4,easing:d="cubic-bezier(0, 0, 0, 1)",hideOutline:p=!0,label:g,lines:v=3,onToggle:S,render:P,rounded:T=!1,size:I=32,toggle:U,toggled:b,disabled:B=!1,animateOnMount:z=!1})=>{const[w,H]=$.useState(!1),[Q,Y]=$.useState(!1);$.useEffect(()=>{Y(!0)},[]);const J=Math.max(12,Math.min(ei,I)),N=Math.round((ei-J)/2),de=J/12,ke=Math.round(de),Me=J/(v*((a==="lg"?.25:a==="sm"?.75:.5)+(v===3?1:1.25))),Fe=Math.round(Me),nt=ke*v+Fe*(v-1),Pe=Math.round((ei-nt)/2),Ee=v===3?a==="lg"?4.0425:a==="sm"?5.1625:4.6325:a==="lg"?6.7875:a==="sm"?8.4875:7.6675,ze=(de-ke+(Me-Fe))/(v===3?1:2),je=parseFloat((J/Ee-ze/(4/3)).toFixed(2)),Le=Math.max(0,c),pe={cursor:B?"not-allowed":"pointer",height:`${ei}px`,position:"relative",transition:`${Le}s ${d}`,userSelect:"none",width:`${ei}px`},W={background:l,height:`${ke}px`,left:`${N}px`,position:"absolute"};p&&(pe.outline="none"),T&&(W.borderRadius="9em");const ne=()=>{const L=b!==void 0?b:w;return z&&!Q?!L:L},G=U||H,x=ne();return P({barHeight:ke,barStyles:W,burgerStyles:pe,easing:d,handler:()=>{G(!x),typeof S=="function"&&S(!x)},isLeft:s==="left",isToggled:x,label:g,margin:Fe,move:je,time:Le,topOffset:Pe,width:J})};function Ga(){return Ga=Object.assign||function(l){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(l[c]=a[c])}return l},Ga.apply(this,arguments)}const eh=l=>Qe.createElement(qm,Ga({},l,{render:s=>Qe.createElement("div",{className:"hamburger-react","aria-label":s.label,"aria-expanded":s.isToggled,onClick:l.disabled?void 0:s.handler,onKeyUp:l.disabled?void 0:a=>a.key==="Enter"&&s.handler(),role:"button",style:{...s.burgerStyles,transform:`${s.isToggled?`rotate(${180*(s.isLeft?-1:1)}deg)`:"none"}`},tabIndex:0},Qe.createElement("div",{style:{...s.barStyles,width:`${s.width}px`,top:`${s.topOffset}px`,transition:`${s.time}s ${s.easing}`,transform:`${s.isToggled?`rotate(${45*(s.isLeft?-1:1)}deg) translate(${s.move*(s.isLeft?-1:1)}px, ${s.move}px)`:"none"}`}}),Qe.createElement("div",{style:{...s.barStyles,width:`${s.width}px`,top:`${s.topOffset+s.barHeight+s.margin}px`,transition:`${s.time}s ${s.easing}`,opacity:`${s.isToggled?"0":"1"}`}}),Qe.createElement("div",{style:{...s.barStyles,width:`${s.width}px`,top:`${s.topOffset+s.barHeight*2+s.margin*2}px`,transition:`${s.time}s ${s.easing}`,transform:`${s.isToggled?`rotate(${45*(s.isLeft?1:-1)}deg) translate(${s.move*(s.isLeft?-1:1)}px, ${s.move*-1}px)`:"none"}`}}))}));Ld();/**
 * @remix-run/router v1.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function li(){return li=Object.assign?Object.assign.bind():function(l){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(l[c]=a[c])}return l},li.apply(this,arguments)}var vn;(function(l){l.Pop="POP",l.Push="PUSH",l.Replace="REPLACE"})(vn||(vn={}));const xd="popstate";function th(l){l===void 0&&(l={});function s(d,p){let{pathname:g="/",search:v="",hash:S=""}=An(d.location.hash.substr(1));return!g.startsWith("/")&&!g.startsWith(".")&&(g="/"+g),Xa("",{pathname:g,search:v,hash:S},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function a(d,p){let g=d.document.querySelector("base"),v="";if(g&&g.getAttribute("href")){let S=d.location.href,P=S.indexOf("#");v=P===-1?S:S.slice(0,P)}return v+"#"+(typeof p=="string"?p:Il(p))}function c(d,p){os(d.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(p)+")")}return rh(s,a,c,l)}function Ye(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}function os(l,s){if(!l){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function nh(){return Math.random().toString(36).substr(2,8)}function wd(l,s){return{usr:l.state,key:l.key,idx:s}}function Xa(l,s,a,c){return a===void 0&&(a=null),li({pathname:typeof l=="string"?l:l.pathname,search:"",hash:""},typeof s=="string"?An(s):s,{state:a,key:s&&s.key||c||nh()})}function Il(l){let{pathname:s="/",search:a="",hash:c=""}=l;return a&&a!=="?"&&(s+=a.charAt(0)==="?"?a:"?"+a),c&&c!=="#"&&(s+=c.charAt(0)==="#"?c:"#"+c),s}function An(l){let s={};if(l){let a=l.indexOf("#");a>=0&&(s.hash=l.substr(a),l=l.substr(0,a));let c=l.indexOf("?");c>=0&&(s.search=l.substr(c),l=l.substr(0,c)),l&&(s.pathname=l)}return s}function rh(l,s,a,c){c===void 0&&(c={});let{window:d=document.defaultView,v5Compat:p=!1}=c,g=d.history,v=vn.Pop,S=null,P=T();P==null&&(P=0,g.replaceState(li({},g.state,{idx:P}),""));function T(){return(g.state||{idx:null}).idx}function I(){v=vn.Pop;let w=T(),H=w==null?null:w-P;P=w,S&&S({action:v,location:z.location,delta:H})}function U(w,H){v=vn.Push;let Q=Xa(z.location,w,H);a(Q,w),P=T()+1;let Y=wd(Q,P),J=z.createHref(Q);try{g.pushState(Y,"",J)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;d.location.assign(J)}p&&S&&S({action:v,location:z.location,delta:1})}function b(w,H){v=vn.Replace;let Q=Xa(z.location,w,H);a(Q,w),P=T();let Y=wd(Q,P),J=z.createHref(Q);g.replaceState(Y,"",J),p&&S&&S({action:v,location:z.location,delta:0})}function B(w){let H=d.location.origin!=="null"?d.location.origin:d.location.href,Q=typeof w=="string"?w:Il(w);return Q=Q.replace(/ $/,"%20"),Ye(H,"No window.location.(origin|href) available to create URL for href: "+Q),new URL(Q,H)}let z={get action(){return v},get location(){return l(d,g)},listen(w){if(S)throw new Error("A history only accepts one active listener");return d.addEventListener(xd,I),S=w,()=>{d.removeEventListener(xd,I),S=null}},createHref(w){return s(d,w)},createURL:B,encodeLocation(w){let H=B(w);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:U,replace:b,go(w){return g.go(w)}};return z}var Sd;(function(l){l.data="data",l.deferred="deferred",l.redirect="redirect",l.error="error"})(Sd||(Sd={}));function ih(l,s,a){return a===void 0&&(a="/"),lh(l,s,a)}function lh(l,s,a,c){let d=typeof s=="string"?An(s):s,p=as(d.pathname||"/",a);if(p==null)return null;let g=Qd(l);oh(g);let v=null;for(let S=0;v==null&&S<g.length;++S){let P=vh(p);v=hh(g[S],P)}return v}function Qd(l,s,a,c){s===void 0&&(s=[]),a===void 0&&(a=[]),c===void 0&&(c="");let d=(p,g,v)=>{let S={relativePath:v===void 0?p.path||"":v,caseSensitive:p.caseSensitive===!0,childrenIndex:g,route:p};S.relativePath.startsWith("/")&&(Ye(S.relativePath.startsWith(c),'Absolute route path "'+S.relativePath+'" nested under path '+('"'+c+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),S.relativePath=S.relativePath.slice(c.length));let P=wn([c,S.relativePath]),T=a.concat(S);p.children&&p.children.length>0&&(Ye(p.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+P+'".')),Qd(p.children,s,T,P)),!(p.path==null&&!p.index)&&s.push({path:P,score:ph(P,p.index),routesMeta:T})};return l.forEach((p,g)=>{var v;if(p.path===""||!((v=p.path)!=null&&v.includes("?")))d(p,g);else for(let S of Yd(p.path))d(p,g,S)}),s}function Yd(l){let s=l.split("/");if(s.length===0)return[];let[a,...c]=s,d=a.endsWith("?"),p=a.replace(/\?$/,"");if(c.length===0)return d?[p,""]:[p];let g=Yd(c.join("/")),v=[];return v.push(...g.map(S=>S===""?p:[p,S].join("/"))),d&&v.push(...g),v.map(S=>l.startsWith("/")&&S===""?"/":S)}function oh(l){l.sort((s,a)=>s.score!==a.score?a.score-s.score:mh(s.routesMeta.map(c=>c.childrenIndex),a.routesMeta.map(c=>c.childrenIndex)))}const ah=/^:[\w-]+$/,sh=3,uh=2,ch=1,dh=10,fh=-2,kd=l=>l==="*";function ph(l,s){let a=l.split("/"),c=a.length;return a.some(kd)&&(c+=fh),s&&(c+=uh),a.filter(d=>!kd(d)).reduce((d,p)=>d+(ah.test(p)?sh:p===""?ch:dh),c)}function mh(l,s){return l.length===s.length&&l.slice(0,-1).every((c,d)=>c===s[d])?l[l.length-1]-s[s.length-1]:0}function hh(l,s,a){let{routesMeta:c}=l,d={},p="/",g=[];for(let v=0;v<c.length;++v){let S=c[v],P=v===c.length-1,T=p==="/"?s:s.slice(p.length)||"/",I=gh({path:S.relativePath,caseSensitive:S.caseSensitive,end:P},T),U=S.route;if(!I)return null;Object.assign(d,I.params),g.push({params:d,pathname:wn([p,I.pathname]),pathnameBase:kh(wn([p,I.pathnameBase])),route:U}),I.pathnameBase!=="/"&&(p=wn([p,I.pathnameBase]))}return g}function gh(l,s){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[a,c]=yh(l.path,l.caseSensitive,l.end),d=s.match(a);if(!d)return null;let p=d[0],g=p.replace(/(.)\/+$/,"$1"),v=d.slice(1);return{params:c.reduce((P,T,I)=>{let{paramName:U,isOptional:b}=T;if(U==="*"){let z=v[I]||"";g=p.slice(0,p.length-z.length).replace(/(.)\/+$/,"$1")}const B=v[I];return b&&!B?P[U]=void 0:P[U]=(B||"").replace(/%2F/g,"/"),P},{}),pathname:p,pathnameBase:g,pattern:l}}function yh(l,s,a){s===void 0&&(s=!1),a===void 0&&(a=!0),os(l==="*"||!l.endsWith("*")||l.endsWith("/*"),'Route path "'+l+'" will be treated as if it were '+('"'+l.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+l.replace(/\*$/,"/*")+'".'));let c=[],d="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,v,S)=>(c.push({paramName:v,isOptional:S!=null}),S?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(c.push({paramName:"*"}),d+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?d+="\\/*$":l!==""&&l!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),c]}function vh(l){try{return l.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return os(!1,'The URL path "'+l+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+s+").")),l}}function as(l,s){if(s==="/")return l;if(!l.toLowerCase().startsWith(s.toLowerCase()))return null;let a=s.endsWith("/")?s.length-1:s.length,c=l.charAt(a);return c&&c!=="/"?null:l.slice(a)||"/"}function xh(l,s){s===void 0&&(s="/");let{pathname:a,search:c="",hash:d=""}=typeof l=="string"?An(l):l;return{pathname:a?a.startsWith("/")?a:wh(a,s):s,search:Ch(c),hash:Eh(d)}}function wh(l,s){let a=s.replace(/\/+$/,"").split("/");return l.split("/").forEach(d=>{d===".."?a.length>1&&a.pop():d!=="."&&a.push(d)}),a.length>1?a.join("/"):"/"}function $a(l,s,a,c){return"Cannot include a '"+l+"' character in a manually specified "+("`to."+s+"` field ["+JSON.stringify(c)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Sh(l){return l.filter((s,a)=>a===0||s.route.path&&s.route.path.length>0)}function Gd(l,s){let a=Sh(l);return s?a.map((c,d)=>d===a.length-1?c.pathname:c.pathnameBase):a.map(c=>c.pathnameBase)}function Xd(l,s,a,c){c===void 0&&(c=!1);let d;typeof l=="string"?d=An(l):(d=li({},l),Ye(!d.pathname||!d.pathname.includes("?"),$a("?","pathname","search",d)),Ye(!d.pathname||!d.pathname.includes("#"),$a("#","pathname","hash",d)),Ye(!d.search||!d.search.includes("#"),$a("#","search","hash",d)));let p=l===""||d.pathname==="",g=p?"/":d.pathname,v;if(g==null)v=a;else{let I=s.length-1;if(!c&&g.startsWith("..")){let U=g.split("/");for(;U[0]==="..";)U.shift(),I-=1;d.pathname=U.join("/")}v=I>=0?s[I]:"/"}let S=xh(d,v),P=g&&g!=="/"&&g.endsWith("/"),T=(p||g===".")&&a.endsWith("/");return!S.pathname.endsWith("/")&&(P||T)&&(S.pathname+="/"),S}const wn=l=>l.join("/").replace(/\/\/+/g,"/"),kh=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Ch=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Eh=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function jh(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}const Kd=["post","put","patch","delete"];new Set(Kd);const Ph=["get",...Kd];new Set(Ph);/**
 * React Router v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){return oi=Object.assign?Object.assign.bind():function(l){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(l[c]=a[c])}return l},oi.apply(this,arguments)}const ss=$.createContext(null),_h=$.createContext(null),Mn=$.createContext(null),$l=$.createContext(null),Fn=$.createContext({outlet:null,matches:[],isDataRoute:!1}),bd=$.createContext(null);function Rh(l,s){let{relative:a}=s===void 0?{}:s;si()||Ye(!1);let{basename:c,navigator:d}=$.useContext(Mn),{hash:p,pathname:g,search:v}=Jd(l,{relative:a}),S=g;return c!=="/"&&(S=g==="/"?c:wn([c,g])),d.createHref({pathname:S,search:v,hash:p})}function si(){return $.useContext($l)!=null}function pr(){return si()||Ye(!1),$.useContext($l).location}function Zd(l){$.useContext(Mn).static||$.useLayoutEffect(l)}function Ih(){let{isDataRoute:l}=$.useContext(Fn);return l?Vh():zh()}function zh(){si()||Ye(!1);let l=$.useContext(ss),{basename:s,future:a,navigator:c}=$.useContext(Mn),{matches:d}=$.useContext(Fn),{pathname:p}=pr(),g=JSON.stringify(Gd(d,a.v7_relativeSplatPath)),v=$.useRef(!1);return Zd(()=>{v.current=!0}),$.useCallback(function(P,T){if(T===void 0&&(T={}),!v.current)return;if(typeof P=="number"){c.go(P);return}let I=Xd(P,JSON.parse(g),p,T.relative==="path");l==null&&s!=="/"&&(I.pathname=I.pathname==="/"?s:wn([s,I.pathname])),(T.replace?c.replace:c.push)(I,T.state,T)},[s,c,g,p,l])}function Jd(l,s){let{relative:a}=s===void 0?{}:s,{future:c}=$.useContext(Mn),{matches:d}=$.useContext(Fn),{pathname:p}=pr(),g=JSON.stringify(Gd(d,c.v7_relativeSplatPath));return $.useMemo(()=>Xd(l,JSON.parse(g),p,a==="path"),[l,g,p,a])}function Th(l,s){return Nh(l,s)}function Nh(l,s,a,c){si()||Ye(!1);let{navigator:d,static:p}=$.useContext(Mn),{matches:g}=$.useContext(Fn),v=g[g.length-1],S=v?v.params:{};v&&v.pathname;let P=v?v.pathnameBase:"/";v&&v.route;let T=pr(),I;if(s){var U;let H=typeof s=="string"?An(s):s;P==="/"||(U=H.pathname)!=null&&U.startsWith(P)||Ye(!1),I=H}else I=T;let b=I.pathname||"/",B=b;if(P!=="/"){let H=P.replace(/^\//,"").split("/");B="/"+b.replace(/^\//,"").split("/").slice(H.length).join("/")}let z=ih(l,{pathname:B}),w=Mh(z&&z.map(H=>Object.assign({},H,{params:Object.assign({},S,H.params),pathname:wn([P,d.encodeLocation?d.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?P:wn([P,d.encodeLocation?d.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),g,a,c);return s&&w?$.createElement($l.Provider,{value:{location:oi({pathname:"/",search:"",hash:"",state:null,key:"default"},I),navigationType:vn.Pop}},w):w}function Lh(){let l=Bh(),s=jh(l)?l.status+" "+l.statusText:l instanceof Error?l.message:JSON.stringify(l),a=l instanceof Error?l.stack:null,d={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},s),a?$.createElement("pre",{style:d},a):null,null)}const Oh=$.createElement(Lh,null);class $h extends $.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,a){return a.location!==s.location||a.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:a.error,location:a.location,revalidation:s.revalidation||a.revalidation}}componentDidCatch(s,a){console.error("React Router caught the following error during render",s,a)}render(){return this.state.error!==void 0?$.createElement(Fn.Provider,{value:this.props.routeContext},$.createElement(bd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ah(l){let{routeContext:s,match:a,children:c}=l,d=$.useContext(ss);return d&&d.static&&d.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=a.route.id),$.createElement(Fn.Provider,{value:s},c)}function Mh(l,s,a,c){var d;if(s===void 0&&(s=[]),a===void 0&&(a=null),c===void 0&&(c=null),l==null){var p;if(!a)return null;if(a.errors)l=a.matches;else if((p=c)!=null&&p.v7_partialHydration&&s.length===0&&!a.initialized&&a.matches.length>0)l=a.matches;else return null}let g=l,v=(d=a)==null?void 0:d.errors;if(v!=null){let T=g.findIndex(I=>I.route.id&&(v==null?void 0:v[I.route.id])!==void 0);T>=0||Ye(!1),g=g.slice(0,Math.min(g.length,T+1))}let S=!1,P=-1;if(a&&c&&c.v7_partialHydration)for(let T=0;T<g.length;T++){let I=g[T];if((I.route.HydrateFallback||I.route.hydrateFallbackElement)&&(P=T),I.route.id){let{loaderData:U,errors:b}=a,B=I.route.loader&&U[I.route.id]===void 0&&(!b||b[I.route.id]===void 0);if(I.route.lazy||B){S=!0,P>=0?g=g.slice(0,P+1):g=[g[0]];break}}}return g.reduceRight((T,I,U)=>{let b,B=!1,z=null,w=null;a&&(b=v&&I.route.id?v[I.route.id]:void 0,z=I.route.errorElement||Oh,S&&(P<0&&U===0?(B=!0,w=null):P===U&&(B=!0,w=I.route.hydrateFallbackElement||null)));let H=s.concat(g.slice(0,U+1)),Q=()=>{let Y;return b?Y=z:B?Y=w:I.route.Component?Y=$.createElement(I.route.Component,null):I.route.element?Y=I.route.element:Y=T,$.createElement(Ah,{match:I,routeContext:{outlet:T,matches:H,isDataRoute:a!=null},children:Y})};return a&&(I.route.ErrorBoundary||I.route.errorElement||U===0)?$.createElement($h,{location:a.location,revalidation:a.revalidation,component:z,error:b,children:Q(),routeContext:{outlet:null,matches:H,isDataRoute:!0}}):Q()},null)}var qd=function(l){return l.UseBlocker="useBlocker",l.UseRevalidator="useRevalidator",l.UseNavigateStable="useNavigate",l}(qd||{}),zl=function(l){return l.UseBlocker="useBlocker",l.UseLoaderData="useLoaderData",l.UseActionData="useActionData",l.UseRouteError="useRouteError",l.UseNavigation="useNavigation",l.UseRouteLoaderData="useRouteLoaderData",l.UseMatches="useMatches",l.UseRevalidator="useRevalidator",l.UseNavigateStable="useNavigate",l.UseRouteId="useRouteId",l}(zl||{});function Fh(l){let s=$.useContext(ss);return s||Ye(!1),s}function Dh(l){let s=$.useContext(_h);return s||Ye(!1),s}function Uh(l){let s=$.useContext(Fn);return s||Ye(!1),s}function ef(l){let s=Uh(),a=s.matches[s.matches.length-1];return a.route.id||Ye(!1),a.route.id}function Bh(){var l;let s=$.useContext(bd),a=Dh(zl.UseRouteError),c=ef(zl.UseRouteError);return s!==void 0?s:(l=a.errors)==null?void 0:l[c]}function Vh(){let{router:l}=Fh(qd.UseNavigateStable),s=ef(zl.UseNavigateStable),a=$.useRef(!1);return Zd(()=>{a.current=!0}),$.useCallback(function(d,p){p===void 0&&(p={}),a.current&&(typeof d=="number"?l.navigate(d):l.navigate(d,oi({fromRouteId:s},p)))},[l,s])}function Wh(l,s){l==null||l.v7_startTransition,l==null||l.v7_relativeSplatPath}function Ka(l){Ye(!1)}function Hh(l){let{basename:s="/",children:a=null,location:c,navigationType:d=vn.Pop,navigator:p,static:g=!1,future:v}=l;si()&&Ye(!1);let S=s.replace(/^\/*/,"/"),P=$.useMemo(()=>({basename:S,navigator:p,static:g,future:oi({v7_relativeSplatPath:!1},v)}),[S,v,p,g]);typeof c=="string"&&(c=An(c));let{pathname:T="/",search:I="",hash:U="",state:b=null,key:B="default"}=c,z=$.useMemo(()=>{let w=as(T,S);return w==null?null:{location:{pathname:w,search:I,hash:U,state:b,key:B},navigationType:d}},[S,T,I,U,b,B,d]);return z==null?null:$.createElement(Mn.Provider,{value:P},$.createElement($l.Provider,{children:a,value:z}))}function Qh(l){let{children:s,location:a}=l;return Th(ba(s),a)}new Promise(()=>{});function ba(l,s){s===void 0&&(s=[]);let a=[];return $.Children.forEach(l,(c,d)=>{if(!$.isValidElement(c))return;let p=[...s,d];if(c.type===$.Fragment){a.push.apply(a,ba(c.props.children,p));return}c.type!==Ka&&Ye(!1),!c.props.index||!c.props.children||Ye(!1);let g={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=ba(c.props.children,p)),a.push(g)}),a}/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Za(){return Za=Object.assign?Object.assign.bind():function(l){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(l[c]=a[c])}return l},Za.apply(this,arguments)}function Yh(l,s){if(l==null)return{};var a={},c=Object.keys(l),d,p;for(p=0;p<c.length;p++)d=c[p],!(s.indexOf(d)>=0)&&(a[d]=l[d]);return a}function Gh(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function Xh(l,s){return l.button===0&&(!s||s==="_self")&&!Gh(l)}const Kh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],bh="6";try{window.__reactRouterVersion=bh}catch{}const Zh="startTransition",Cd=rm[Zh];function Jh(l){let{basename:s,children:a,future:c,window:d}=l,p=$.useRef();p.current==null&&(p.current=th({window:d,v5Compat:!0}));let g=p.current,[v,S]=$.useState({action:g.action,location:g.location}),{v7_startTransition:P}=c||{},T=$.useCallback(I=>{P&&Cd?Cd(()=>S(I)):S(I)},[S,P]);return $.useLayoutEffect(()=>g.listen(T),[g,T]),$.useEffect(()=>Wh(c),[c]),$.createElement(Hh,{basename:s,children:a,location:v.location,navigationType:v.action,navigator:g,future:c})}const qh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,us=$.forwardRef(function(s,a){let{onClick:c,relative:d,reloadDocument:p,replace:g,state:v,target:S,to:P,preventScrollReset:T,viewTransition:I}=s,U=Yh(s,Kh),{basename:b}=$.useContext(Mn),B,z=!1;if(typeof P=="string"&&eg.test(P)&&(B=P,qh))try{let Y=new URL(window.location.href),J=P.startsWith("//")?new URL(Y.protocol+P):new URL(P),N=as(J.pathname,b);J.origin===Y.origin&&N!=null?P=N+J.search+J.hash:z=!0}catch{}let w=Rh(P,{relative:d}),H=tg(P,{replace:g,state:v,target:S,preventScrollReset:T,relative:d,viewTransition:I});function Q(Y){c&&c(Y),Y.defaultPrevented||H(Y)}return $.createElement("a",Za({},U,{href:B||w,onClick:z||p?c:Q,ref:a,target:S}))});var Ed;(function(l){l.UseScrollRestoration="useScrollRestoration",l.UseSubmit="useSubmit",l.UseSubmitFetcher="useSubmitFetcher",l.UseFetcher="useFetcher",l.useViewTransitionState="useViewTransitionState"})(Ed||(Ed={}));var jd;(function(l){l.UseFetcher="useFetcher",l.UseFetchers="useFetchers",l.UseScrollRestoration="useScrollRestoration"})(jd||(jd={}));function tg(l,s){let{target:a,replace:c,state:d,preventScrollReset:p,relative:g,viewTransition:v}=s===void 0?{}:s,S=Ih(),P=pr(),T=Jd(l,{relative:g});return $.useCallback(I=>{if(Xh(I,a)){I.preventDefault();let U=c!==void 0?c:Il(P)===Il(T);S(l,{replace:U,state:d,preventScrollReset:p,relative:g,viewTransition:v})}},[P,S,T,c,d,a,l,p,g,v])}const Ja="/portfolio/assets/Spline_logo-BgAes65S.gif",ng=R.nav`
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
  top: ${({visible:l})=>l?"0":"-160px"};
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
`,rg=R.div`
  width: 300px;
  height: 100%;

  @media screen and (max-width: 478px) {
    width: 100px;
  }
`,ig=R.div`
  display: flex;

  @media screen and (max-width: 960px) {
    width: 100%;

    justify-content: center;
    margin-bottom: 4em;
  }
`,lg=R.img`
  text-align: center;
  width: 80px;
  margin-top: 0em;

  @media screen and (max-width: 960px) {
    margin-top: 1.5em;
  }

  @media screen and (max-width: 767px) {
    margin-top: 1em;
  }
`,og=R.img`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    margin-top: 100px;
    width: 100px;
  }
`,ag=R.div`
  display: flex;
  width: 600px;
  height: 100%;
  padding-left: 0.5em;
  text-align: left;

  @media screen and (max-width: 767px) {
    padding-left: 0em;
  }
`,sg=R.ul`
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
    opacity: ${({open:l})=>l?"1":"0"};
    visibility: ${({open:l})=>l?"visible":"hidden"};
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
`,ug=R(us)`
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
`,cg=R.a`
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
`,dg=R.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    color: var(--main-font-color);
    margin-top: 1em;
    margin-right: 2em;
  }
`,fg=({footerRef:l})=>{const s=pr(),[a,c]=$.useState(!1),[d,p]=$.useState(s.pathname),[g,v]=$.useState(!1),[S,P]=$.useState(window.pageYOffset),[T,I]=$.useState(!0);$.useEffect(()=>{p(s.pathname);const z=()=>{const w=window.pageYOffset;I(S>w||w<10),P(w)};return window.addEventListener("scroll",z),()=>window.removeEventListener("scroll",z)},[s.pathname,S]);const U=()=>{l.current&&l.current.scrollIntoView({behavior:"smooth"}),c(!1),v(!1)},b=()=>{c(!1),v(!1)},B=[{id:1,to:"/",text:"Home"},{id:2,to:"https://www.paulevans-dop.com/",text:"Cinematography",isExternal:!0},{id:3,to:"/about",text:"About"},{id:4,to:"#",text:"Contact",onClick:U}];return m.jsxs(ng,{visible:T,children:[m.jsx(rg,{children:m.jsx(us,{to:"/",onClick:b,children:m.jsx(ag,{children:m.jsx(lg,{src:Ja,alt:"A revolving logo showing the initals PE and a cartton version of Paul Evans.."})})})}),m.jsxs(sg,{open:a,children:[B.map(z=>z.isExternal?m.jsx(cg,{href:z.to,onClick:z.onClick||b,className:d===z.to?"active":"",children:z.text},z.id):m.jsx(ug,{to:z.to,onClick:z.onClick||b,className:d===z.to?"active":"",children:z.text},z.id)),m.jsx(ig,{children:m.jsx(og,{src:Ja,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A revolving logo showing the initals PE and a cartton version of Paul Evans.."})})]}),m.jsx(dg,{children:m.jsx("div",{onClick:()=>{c(!a),v(!g)},children:m.jsx(eh,{toggled:g})})})]})},pg="/portfolio/assets/showcase1-fthdL0HW.mp4";var qa=new Map,xl=new WeakMap,Pd=0,mg=void 0;function hg(l){return l?(xl.has(l)||(Pd+=1,xl.set(l,Pd.toString())),xl.get(l)):"0"}function gg(l){return Object.keys(l).sort().filter(s=>l[s]!==void 0).map(s=>`${s}_${s==="root"?hg(l.root):l[s]}`).toString()}function yg(l){const s=gg(l);let a=qa.get(s);if(!a){const c=new Map;let d;const p=new IntersectionObserver(g=>{g.forEach(v=>{var S;const P=v.isIntersecting&&d.some(T=>v.intersectionRatio>=T);l.trackVisibility&&typeof v.isVisible>"u"&&(v.isVisible=P),(S=c.get(v.target))==null||S.forEach(T=>{T(P,v)})})},l);d=p.thresholds||(Array.isArray(l.threshold)?l.threshold:[l.threshold||0]),a={id:s,observer:p,elements:c},qa.set(s,a)}return a}function vg(l,s,a={},c=mg){if(typeof window.IntersectionObserver>"u"&&c!==void 0){const S=l.getBoundingClientRect();return s(c,{isIntersecting:c,target:l,intersectionRatio:typeof a.threshold=="number"?a.threshold:0,time:0,boundingClientRect:S,intersectionRect:S,rootBounds:S}),()=>{}}const{id:d,observer:p,elements:g}=yg(a),v=g.get(l)||[];return g.has(l)||g.set(l,v),v.push(s),p.observe(l),function(){v.splice(v.indexOf(s),1),v.length===0&&(g.delete(l),p.unobserve(l)),g.size===0&&(p.disconnect(),qa.delete(d))}}function cs({threshold:l,delay:s,trackVisibility:a,rootMargin:c,root:d,triggerOnce:p,skip:g,initialInView:v,fallbackInView:S,onChange:P}={}){var T;const[I,U]=$.useState(null),b=$.useRef(P),[B,z]=$.useState({inView:!!v,entry:void 0});b.current=P,$.useEffect(()=>{if(g||!I)return;let Y;return Y=vg(I,(J,N)=>{z({inView:J,entry:N}),b.current&&b.current(J,N),N.isIntersecting&&p&&Y&&(Y(),Y=void 0)},{root:d,rootMargin:c,threshold:l,trackVisibility:a,delay:s},S),()=>{Y&&Y()}},[Array.isArray(l)?l.toString():l,I,d,c,p,g,a,S,s]);const w=(T=B.entry)==null?void 0:T.target,H=$.useRef(void 0);!I&&w&&!p&&!g&&H.current!==w&&(H.current=w,z({inView:!!v,entry:void 0}));const Q=[U,B.inView,B.entry];return Q.ref=Q[0],Q.inView=Q[1],Q.entry=Q[2],Q}const xg=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
`,ni=R.p`
  font-size: 16px;
  display: none;
`,El=R.div`
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
`,wg=R.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-self: center;
  width: 100%;
  aspect-ratio: 16 / 9;
  font-size: 1.2rem;
  overflow: hidden;
  border-radius: 24px; 
  transform: perspective(1000px) ${({isVisible:l})=>l?"rotateX(0deg)":"rotateX(75deg)"};
  transition: transform 1s ease-in-out;

  &:hover ${El} {
    transform: translateY(0%); // Slide up
    background-color: #060606ac;
    justify-content: center;
  }

  &:hover ${ni} {
    display: flex;
  }

  @media (max-width: 960px) {
    ${El} {
      transform: translateY(0%);
    }

    ${ni} {
      display: flex;
    }

    &:hover ${El} {
      transform: translateY(0%);
      background-color: transparent;
    }

    &:hover ${ni} {
      display: none;
    }
  }

  @media (max-width: 478px) {
    aspect-ratio: 4 / 5;
  }
`,Sg=R.div`
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
`,kg=R.div`
  width: 20%;
  text-align: justify;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
  }
`,Cg=R.div`
  display: flex;
  justify-content: center;
  color: var(--main-font-color);
  padding: 2em 0em 2em 0em;
`,Eg=R.div`
  width: 20%;
  text-align: justify;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
  }
`,jg=R.div`
  width: 20%;
  text-align: justify;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
  }
`,Pg=R.div`
  width: 20%;
  text-align: justify;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
  }
`,_g=R.video`
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
  border-radius: 24px;
`,wl=R.p`
  font-size: 16px;
`,Sl=R.p`
  font-size: 16px;
  font-weight: 600;
`,Rg=R.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000056;
  border-radius: 24px;
`,Ig=R.div`
  &:hover {
    color: var(--main-button-hover-color);
  }
`,zg=Qe.forwardRef((l,s)=>{const{ref:a,inView:c}=cs({threshold:.5});return m.jsxs(xg,{ref:s,children:[m.jsx(Cg,{children:m.jsx("h2",{children:"Cinematography"})}),m.jsxs(Sg,{children:[m.jsxs(kg,{children:[m.jsx(Sl,{children:"Paul Evans FSF."}),m.jsx(wl,{children:"Expertise in both film and digital formats. Thrives on blending live-action footage with VFX, creating visually captivating worlds that amplify storytelling."})]}),m.jsxs(Eg,{children:[m.jsx(Sl,{children:"Narrative Selected Titles:"}),m.jsx(wl,{children:"The Last Journey or the Vikings, Viaplay | Streams, SVT | Vi Forever, SVT"})]}),m.jsxs(jg,{children:[m.jsx(Sl,{children:"Commercials Selected Brands:"}),m.jsx(wl,{children:"Volvo | Ikea | Fruit-Tella | Burger King | Call of Duty | Renault | Stadium | Gant | Doritos | ICA | Verisure | Aller Media | Grandiosa"})]}),m.jsxs(Pg,{children:[m.jsx(Sl,{children:"Music Promos Selected Artists:"}),m.jsx(wl,{children:"Katy Perry| Ghost | MØ | Viagra Boys | Darin | Albin Lee Meldau | Ansiktet"})]})]}),m.jsx("a",{href:"https://paulevans-dop.com/",target:"_blank",rel:"noopener noreferrer",children:m.jsxs(wg,{ref:a,isVisible:c,children:[m.jsx(_g,{src:pg,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A showreel showing clips from different productions."}),m.jsx(Rg,{children:m.jsxs(El,{children:[m.jsx("h3",{children:"Paul Evans FSF"}),m.jsx(ni,{children:"Captivating audiences and elevating stories. Working in Narrative, Commercials, Music Videos, and Still Photography."}),m.jsx(Ig,{children:m.jsx(ni,{children:"See work .."})})]})})]})})]})}),Tg="/portfolio/assets/faceHat-Dy53xAIe.png",Ng="/portfolio/assets/palm-DDtYC6pc.png",Lg="/portfolio/assets/pen-CranwjfO.png",Og="/portfolio/assets/mobile-D_n2isxc.png",$g="/portfolio/assets/camera-BePO9pCm.png",Ag="/portfolio/assets/film-CMkrrmuu.png",Mg="/portfolio/assets/lines-BcEc8fAY.png",Fg=R.section`
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
`,Dg=R.div`
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
`,Ug=R.img`
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
`,Bg=R.img`
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
`,Vg=R.img`
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
`,Wg=R.img`
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
`,Hg=R.img`
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
`,Qg=R.img`
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
`,Yg=R.img`
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
`,Gg=R.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  min-height: 550px;
  font-size: 1.2rem;
  overflow: hidden;

  /* Slide-in animation */
  transform: translateX(-100%); 
  animation: slideIn 1s ease-out forwards; 

  @media (max-width: 960px) {
    width: 90%;
    align-items: center;
    min-height: 400px;
    padding: 0em 0em 1em 0em;
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
      opacity: 0; 
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`,Xg=R.div`
  width: 100%;
`,Aa=R.p`
  color: var(--main-p-color);
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 2em;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`,Kg=()=>m.jsxs(Fg,{children:[m.jsxs(Gg,{children:[m.jsxs(Xg,{children:[m.jsx("h1",{children:"Paul Evans"}),m.jsx(Aa,{children:"Creative Lead | AI Creative Specialist | Content Creator "})]}),m.jsx(Aa,{children:"Hi!"}),m.jsx(Aa,{children:"I am a passionate creative with extensive experience in branding, storytelling, and content creation, blending my background in film production with UX/UI design and web development. My passion for storytelling continues to inform my approach, allowing me to create compelling narratives and experiences that connect with audiences. As a creative producer, I’m excited about using emerging technologies like AI and AR to push creativity and enhance the experience."})]}),m.jsxs(Dg,{children:[m.jsx(Ug,{src:Tg}),m.jsx(Bg,{src:Ng}),m.jsx(Vg,{src:Lg}),m.jsx(Wg,{src:Og}),m.jsx(Hg,{src:$g}),m.jsx(Qg,{src:Ag}),m.jsx(Yg,{src:Mg})]})]}),_d="/portfolio/assets/sns-BGUD4JGC.mp4",bg=l=>{const s=document.createElement("video");s.src=l,s.preload="auto",s.load()},Zg=R.div`
  grid-area: cinema;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
`,Ma=R.p`
  font-size: 16px;
  display: none;
`,Fa=R.div`
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
`,Jg=R.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-self: center;
  width: 100%;
  aspect-ratio: 16 / 9;
  font-size: 1.2rem;
  overflow: hidden;
  border-radius: 24px; 
  transform: perspective(1000px) ${({isVisible:l})=>l?"rotateX(0deg)":"rotateX(75deg)"};
  transition: transform 1s ease-in-out;

  &:hover ${Fa} {
    transform: translateY(0%); // Slide up
    background-color: #060606ac;
    justify-content: center;
  }

  &:hover ${Ma} {
    display: flex;
  }

  @media (max-width: 960px) {
    ${Fa} {
      transform: translateY(0%);
    }

    ${Ma} {
      display: flex;
    }

    &:hover ${Fa} {
      transform: translateY(0%);
      background-color: transparent;
    }

    &:hover ${Ma} {
      display: none;
    }
  }

  @media (max-width: 478px) {
    aspect-ratio: 4 / 5;
  }
`,qg=R.div`
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
`,e0=R.div`
  width: 90%;
  text-align: center;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
  }
`,t0=R.div`
  display: flex;
  justify-content: center;
  color: var(--main-font-color);
  padding: 2em 0em 2em 0em;
`,n0=R.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
  border-radius: 24px;
`,r0=R.p`
  font-size: 16px;
  margin-bottom: 3em;
`,i0=R.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000011;
  border-radius: 24px;
`,l0=R.div`
  display: flex;
  justify-self: center;
  justify-content: center;
  width: 90%;
  color: var(--main-font-color);
  padding: 3em 0em 3em 0em;
`,o0=R.p`
  font-size: 14px;
  text-align: center;
  height: 20px;
`;function a0(){$.useEffect(()=>{bg(_d)},[]);const{ref:l,inView:s}=cs({threshold:.5});return m.jsxs(Zg,{children:[m.jsx(t0,{children:m.jsx("h2",{children:"Latest "})}),m.jsx(qg,{children:m.jsx(e0,{children:m.jsx(r0,{children:"Singles Day with Sneakers n Stuff. For this campaign, collaborating with Ekman & Falck & SneakersnStuff, we designed AI-driven content that brings a playful twist to the Singles Day experience— imagining artificial characters in a Tinder-like environment, all showing their love for sneakers. This post features a selection of the content we delivered, all created and turned around within 24 hours of project acceptance! This campaign demonstrates how brands can embrace AI to generate unique, engaging content, even on a tight timeline."})})}),m.jsx("a",{children:m.jsxs(Jg,{ref:l,isVisible:s,children:[m.jsx(n0,{src:_d,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"Fun AI generated Images of people who love sneakers. For SneakersnStuff, Singles Day Campaign."}),m.jsx(i0,{})]})}),m.jsx(l0,{children:m.jsx(o0,{children:"A Screen recording from the SneakersnStuff webpage."})})]})}const Rd="/portfolio/assets/aiReel-B9_5PUxU.mp4",s0=l=>{const s=document.createElement("video");s.src=l,s.preload="auto",s.load()},u0=R.div`
  grid-area: cinema;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
`,ri=R.p`
  font-size: 16px;
  display: none;
`,jl=R.div`
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
`,c0=R.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-self: center;
  width: 100%;
  aspect-ratio: 16 / 9;
  font-size: 1.2rem;
  overflow: hidden;
  border-radius: 24px; 
  transform: perspective(1000px) ${({isVisible:l})=>l?"rotateX(0deg)":"rotateX(75deg)"};
  transition: transform 1s ease-in-out;

  &:hover ${jl} {
    transform: translateY(0%); // Slide up
    background-color: #060606ac;
    justify-content: center;
  }

  &:hover ${ri} {
    display: flex;
  }

  @media (max-width: 960px) {
    ${jl} {
      transform: translateY(0%);
    }

    ${ri} {
      display: flex;
    }

    &:hover ${jl} {
      transform: translateY(0%);
      background-color: transparent;
    }

    &:hover ${ri} {
      display: none;
    }
  }

  @media (max-width: 478px) {
    aspect-ratio: 4 / 5;
  }
`,d0=R.div`
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
`,f0=R.div`
  width: 90%;
  text-align: center;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
  }
`,p0=R.div`
  display: flex;
  justify-content: center;
  color: var(--main-font-color);
  padding: 2em 0em 2em 0em;
`,m0=R.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
  border-radius: 24px;
`,h0=R.p`
  font-size: 16px;
`,g0=R.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000056;
  border-radius: 24px;
`,y0=R.div`
  &:hover {
    color: var(--main-button-hover-color);
  }
`,v0=R.a`
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
  color: var(--main-button-color);

  &:hover {
    color: var(--main-button-hover-color);
  }
`,x0=R.div`
  display: flex;
  justify-self: center;
  justify-content: center;
  width: 90%;
  color: var(--main-font-color);
  padding: 3em 0em 3em 0em;
`,w0=R.p`
  font-size: 14px;
  text-align: center;
  height: 20px;
`;function S0(){$.useEffect(()=>{s0(Rd)},[]);const{ref:l,inView:s}=cs({threshold:.5});return m.jsxs(u0,{children:[m.jsx(p0,{children:m.jsx("h2",{children:"Emerging Tech"})}),m.jsx(d0,{children:m.jsxs(f0,{children:[m.jsx(h0,{children:"My interests expand into emerging technologies such as AI, augmented reality (AR), digital signage, and projection, with a strong focus on how they can be used to create captivating, immersive experiences. Coming from a background in traditional film and photography, I deeply value the importance of responsible AI use. I view AI as a powerful tool to complement our creative work, not replace it—challenging us, expanding our creative boundaries, and increasing efficiency. Through this lens, I explore how technology can redefine visual storytelling and audience engagement without losing the human touch. I regularly share my work, insights and industry trends on LinkedIn—join me there to see more of what I’m exploring in this space."}),m.jsx(v0,{href:"https://www.linkedin.com/in/paul-evans-3a74605/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})]})}),m.jsx("a",{href:"https://www.linkedin.com/in/paul-evans-3a74605/",target:"_blank",rel:"noopener noreferrer",children:m.jsxs(c0,{ref:l,isVisible:s,children:[m.jsx(m0,{src:Rd,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A showreel of Ai generated video."}),m.jsx(g0,{children:m.jsxs(jl,{children:[m.jsx("h3",{children:"AI"}),m.jsx(ri,{children:"Keeping up to date with emerging technologies such as AI and implenting them into my creative process."}),m.jsx(y0,{children:m.jsx(ri,{children:"LinkedIn .."})})]})})]})}),m.jsx(x0,{children:m.jsxs(w0,{children:["AI generated video for concepts. Disclaimer: This video was created independently and is not affiliated with or endorsed by any brands."," "]})})]})}const k0="/portfolio/assets/lipusplus_brand_film_hammarby-2024_short-HjtOi3Va.mp4",Id="/portfolio/assets/lipusplus_brand_film_hammarby-2024-CbpLiFqZ.mp4",C0="/portfolio/assets/lipusImg1-BGNhaxmB.avif",E0="/portfolio/assets/lipusImg2-BrBTLM2n.avif",j0="/portfolio/assets/lipusImg3-CHUKpWtE.avif",P0="/portfolio/assets/lipusImg4-CG4t6ONL.avif";var tf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},es=Qe.createContext&&Qe.createContext(tf),_0=["attr","size","title"];function R0(l,s){if(l==null)return{};var a=I0(l,s),c,d;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(l);for(d=0;d<p.length;d++)c=p[d],!(s.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(l,c)&&(a[c]=l[c])}return a}function I0(l,s){if(l==null)return{};var a={};for(var c in l)if(Object.prototype.hasOwnProperty.call(l,c)){if(s.indexOf(c)>=0)continue;a[c]=l[c]}return a}function Tl(){return Tl=Object.assign?Object.assign.bind():function(l){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(l[c]=a[c])}return l},Tl.apply(this,arguments)}function zd(l,s){var a=Object.keys(l);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(l);s&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(l,d).enumerable})),a.push.apply(a,c)}return a}function Nl(l){for(var s=1;s<arguments.length;s++){var a=arguments[s]!=null?arguments[s]:{};s%2?zd(Object(a),!0).forEach(function(c){z0(l,c,a[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(a)):zd(Object(a)).forEach(function(c){Object.defineProperty(l,c,Object.getOwnPropertyDescriptor(a,c))})}return l}function z0(l,s,a){return s=T0(s),s in l?Object.defineProperty(l,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):l[s]=a,l}function T0(l){var s=N0(l,"string");return typeof s=="symbol"?s:s+""}function N0(l,s){if(typeof l!="object"||!l)return l;var a=l[Symbol.toPrimitive];if(a!==void 0){var c=a.call(l,s||"default");if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(l)}function nf(l){return l&&l.map((s,a)=>Qe.createElement(s.tag,Nl({key:a},s.attr),nf(s.child)))}function mr(l){return s=>Qe.createElement(L0,Tl({attr:Nl({},l.attr)},s),nf(l.child))}function L0(l){var s=a=>{var{attr:c,size:d,title:p}=l,g=R0(l,_0),v=d||a.size||"1em",S;return a.className&&(S=a.className),l.className&&(S=(S?S+" ":"")+l.className),Qe.createElement("svg",Tl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,c,g,{className:S,style:Nl(Nl({color:l.color||a.color},a.style),l.style),height:v,width:v,xmlns:"http://www.w3.org/2000/svg"}),p&&Qe.createElement("title",null,p),l.children)};return es!==void 0?Qe.createElement(es.Consumer,null,a=>s(a)):s(tf)}function O0(l){return mr({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",fill:"currentColor"},child:[]}]})(l)}const $0=ls`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,A0=R.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  animation: ${$0} 0.5s ease-out;
`,M0=R.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--main-modal-backgroundcolor);
`,F0=R.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 2rem;
  color: var(--secondary-font-color);
  cursor: pointer;
  z-index: 100;
`,D0=({isOpen:l,onClose:s,children:a})=>l?m.jsx(A0,{onClick:s,children:m.jsxs(M0,{onClick:c=>c.stopPropagation(),children:[m.jsx(F0,{onClick:s,children:m.jsx(O0,{})}),a]})}):null,U0=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,B0=R.div`
  width: auto;
  display: none;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 20px;

  @media screen and (max-width: 478px) {
    padding-top: 0px;
  }
`,Ll=R.p`
  font-size: 16px;
  display: none;
`,Pl=R.div`
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
`,V0=R.div`
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
`,W0=R.section`
  position: relative;
  width: 85%;
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


  &:hover ${Pl} {
    transform: translateY(0%); /* Slide up into view */
    background-color: #060606ac;
    justify-content: center;
  }

  &:hover ${Ll} {
    display: flex;
  }

  &:hover ${B0} {
    display: flex;
  }

  @media (max-width: 1361px) {
    width: 100%;
  }

  @media (max-width: 960px) {

    ${Pl} {
      transform: translateY(0%);
    }

    ${Ll} {
      display: flex;
    }

    &:hover ${Pl} {
      transform: translateY(0%);
      background-color: transparent;
    }
  }

  @media (max-width: 478px) {
    aspect-ratio: 4 / 5;
  }
`,H0=R.div`
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
`,Q0=R.div`
  display: flex;
  justify-content: center;
  text-align: center;
  color: var(--main-font-color);
  padding: 2em 0em 2em 0em;
`,Y0=R.div`
  display: flex;
  justify-self: center;
  justify-content: center;
  width: 90%;
  color: var(--main-font-color);
  padding: 0em 0em 3em 0em;
`,G0=R.p`
  font-size: 14px;
  text-align: center;
`,X0=R.div`
  width: 20%;
  text-align: justify;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
  }
`,K0=R.div`
  width: 20%;
  text-align: justify;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
    margin-top: 1em;
  }
`,b0=R.div`
  width: 20%;
  text-align: justify;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
  }
`,Da=R.p`
  font-size: 16px;
`,Ua=R.p`
  font-size: 16px;
  font-weight: 600;
`,Z0=R.a`
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
  color: var(--main-button-color);

  &:hover {
    color: var(--main-button-hover-color);
  }
`,J0=R.div`
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
`,q0=R.div`
  grid-area: image1;
  display: flex;
  justify-content: flex-end;
  height: 100%;

  @media (max-width: 767px) {
    justify-content: center;
  }
`,ey=R.div`
  grid-area: image2;
  display: flex;
  justify-content: flex-start;
  height: 100%;

  @media (max-width: 767px) {
    justify-content: center;
  }
`,ty=R.div`
  grid-area: image3;
  display: flex;
  justify-content: flex-end;
  height: 100%;

  @media (max-width: 767px) {
    justify-content: center;
  }
`,ny=R.div`
  grid-area: image4;
  display: flex;
  justify-content: flex-start;
  height: 100%;

  @media (max-width: 767px) {
    justify-content: center;
  }
`,kl=R.img`
  width: 80%;
  object-fit: cover;
  border-radius: 24px;
`,ry=R.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 1;
`,iy=R.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.32);
  z-index: 2;
`,ly=R.div`
  &:hover {
    color: var(--main-button-hover-color);
  }
`,oy=({scrollToEvent:l})=>{const s=$.useRef(null),a=$.useRef(null),[c,d]=$.useState(!1),[p,g]=$.useState(!1);$.useEffect(()=>{const P=()=>{g(window.innerWidth<1024)};return P(),window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[]),$.useEffect(()=>{const P=setTimeout(()=>{s.current&&s.current.play()},1e3);return()=>clearTimeout(P)},[]);const v=()=>{p?setTimeout(()=>{if(a.current){const P=a.current;P.pause(),P.currentTime=0;const T=P.play();T!==void 0&&T.then(()=>{P.requestFullscreen().catch(I=>{console.log("Error attempting to enable full-screen mode:",I)})}).catch(I=>{console.log("Failed to play the video automatically:",I)})}},0):d(!0)},S=()=>{d(!1),s.current&&s.current.play()};return $.useEffect(()=>{const P=()=>{document.fullscreenElement||a.current&&(a.current.pause(),a.current.currentTime=0)};return document.addEventListener("fullscreenchange",P),()=>{document.removeEventListener("fullscreenchange",P)}},[]),m.jsxs(U0,{children:[m.jsx(Q0,{children:m.jsx("h2",{children:"UX / UI & Frontend"})}),m.jsxs(H0,{children:[m.jsxs(X0,{children:[m.jsx(Ua,{children:"LipusPlus - Positioning in Healthtech"}),m.jsx(Da,{children:"Designed and created an enticing and informative landing page, to attract physiotherapists and elite athletes to LipusPlus webinars on the Return to Play concept."}),m.jsx(Z0,{href:"https://www.lipusplus.com/casestudies/hammarby",target:"_blank",rel:"noopener noreferrer",children:"lipusplus.com"})]}),m.jsxs(K0,{children:[m.jsx(Ua,{children:"Role"}),m.jsx(Da,{children:"UX / UI Designer | Frontend Developer | Content Creator"})]}),m.jsxs(b0,{children:[m.jsx(Ua,{children:"Tools & Skills"}),m.jsx(Da,{children:"Figma | Webflow | Vimeo | JavaScript | Adobe Creative Suite | Cinematography | Storytelling"})]})]}),m.jsxs(J0,{children:[m.jsx(q0,{children:m.jsx(kl,{src:C0,alt:"A screen shot from LipusPlus homepage."})}),m.jsx(ey,{children:m.jsx(kl,{src:E0,alt:"A screen shot from LipusPlus homepage."})}),m.jsx(ty,{children:m.jsx(kl,{src:P0,alt:"A screen shot from LipusPlus homepage."})}),m.jsx(ny,{children:m.jsx(kl,{src:j0,alt:"A screen shot from LipusPlus homepage."})})]}),m.jsx(Y0,{children:m.jsx(G0,{children:"Screen shots from LipusPlus.com. A Landingpage showcasing the partnership between LipusPlus and Hammarby Handball."})}),m.jsxs(W0,{onClick:v,children:[m.jsx(ry,{ref:s,src:k0,loop:!0,muted:!0,playsInline:!0,preload:"auto",alt:"Background video"}),m.jsx(iy,{}),m.jsx(Pl,{children:m.jsxs(V0,{children:[m.jsx("h3",{children:"LIPUSPLUS"}),m.jsx(Ll,{children:"Brand film highlighting LipusPlus's partnership with Hammarby Handball."}),m.jsx(ly,{children:m.jsx(Ll,{children:"Watch here"})})]})}),m.jsx(D0,{isOpen:c,onClose:S,children:m.jsx("video",{controls:!0,autoPlay:!0,preload:"auto",children:m.jsx("source",{src:Id,type:"video/mp4"})})}),m.jsx("video",{ref:a,style:{display:"none"},src:Id,type:"video/mp4",controls:!0,preload:"auto"})]})]})},ay="/portfolio/assets/ebie_insuranceStatus-Ckc0OAE_.mp4",sy="/portfolio/assets/ebie_application-D_WM70kI.mp4",uy=R.div`
  display: inline-block;
  width: 100%;
`,cy=R.div`
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
`,dy=R.div`
  display: flex;
  justify-content: center;
  color: var(--main-font-color);
  padding: 2em 0em 2em 0em;
`,fy=R.div`
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
`,py=R.p`
  font-size: 14px;
  text-align: center;
`,my=R.div`
  width: 30%;
  text-align: justify;
  padding-right: 4em;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
    padding-right: 0em;
  }
`,hy=R.div`
  width: 30%;
  text-align: justify;
  padding-left: 4em;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
    padding-left: 0em;
  }
`,gy=R.div`
  width: 30%;
  text-align: justify;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
  }
`,Ba=R.p`
  font-size: 16px;
`,Va=R.p`
  font-size: 16px;
  font-weight: 600;
`,yy=R.div`
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
`,vy=R.div`
  grid-area: image1;
  display: flex;
  justify-content: flex-end;
  height: 100%;

  @media (max-width: 767px) {
    justify-content: center;
  }
`,xy=R.div`
  grid-area: image2;
  display: flex;
  justify-content: flex-start;
  height: 100%;

  @media (max-width: 767px) {
    justify-content: center;
  }
`,Td=R.video`
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
`,wy=({scrollToEvent:l})=>{const s=$.useRef(null),a=$.useRef(null),[c,d]=$.useState(!1);return $.useEffect(()=>{const p=()=>{d(window.innerWidth<1024)};return p(),window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]),$.useEffect(()=>{const p=setTimeout(()=>{s.current&&s.current.play()},1e3);return()=>clearTimeout(p)},[]),$.useEffect(()=>{const p=()=>{document.fullscreenElement||a.current&&(a.current.pause(),a.current.currentTime=0)};return document.addEventListener("fullscreenchange",p),()=>{document.removeEventListener("fullscreenchange",p)}},[]),m.jsxs(uy,{children:[m.jsx(dy,{children:m.jsx("h2",{children:"UX / UI "})}),m.jsxs(cy,{children:[m.jsxs(my,{children:[m.jsx(Va,{children:"Ebie - Group Insurance"}),m.jsx(Ba,{children:"Created and implemented a completely new and user-friendly function into Ebies design system, that simplifies applying and managing of group insurance."})]}),m.jsxs(hy,{children:[m.jsx(Va,{children:"Role"}),m.jsx(Ba,{children:"UX & UI Designer"})]}),m.jsxs(gy,{children:[m.jsx(Va,{children:"Tools & Skills"}),m.jsx(Ba,{children:"Figma | Useberry | Google forms"})]})]}),m.jsxs(yy,{children:[m.jsx(vy,{children:m.jsx(Td,{src:ay,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A showreel showing clips from different productions."})}),m.jsx(xy,{children:m.jsx(Td,{src:sy,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A showreel showing clips from different productions."})})]}),m.jsx(fy,{children:m.jsx(py,{children:"Prototypes for Ebie's Group Insurance. "})})]})},Sy=R.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-self: center; */
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
`,ky=R.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  background-color: var(--main-hero-backgroundcolor);
  color: var(--main-font-color);
`,Cy=R.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
`,Ey=R.p`
  margin-top: 3em;
  font-family: "Gravitas One", serif;
  font-weight: 500;
  color: var(--main-button-color);
  cursor: pointer;

  &:hover {
    color: var(--main-button-hover-color);
  }
`,jy=({cinemaCardRef:l})=>{const s=()=>{l.current&&l.current.scrollIntoView({behavior:"smooth"})};return m.jsx(Sy,{children:m.jsx(ky,{children:m.jsxs(Cy,{children:[m.jsx("h2",{children:"What I Bring to the Table "}),m.jsx("p",{children:"Whether you’re looking to generate leads, raise conversion rates, or increase brand awareness and loyalty, my diverse expertise offers efficiency, creativity, and a friendly, collaborative attitude. I excel in ideation, content production, UX, UI, and implementation. My process begins with brainstorming and extends all the way through to the completion of immersive experiences."}),m.jsx(Ey,{onClick:s,children:"See more below"})]})})})},Py=R.section`
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
`,$n=R.div`
  width: 95%;
  height: 80px;
  align-self: center;
  margin: 0em 0em 2em 0em;
  border-bottom: 1px solid #1e1e1ee6;
`,_y=()=>{const l=$.useRef(null);return m.jsxs(Py,{children:[m.jsx(Kg,{}),m.jsx($n,{}),m.jsx(a0,{}),m.jsx($n,{}),m.jsx(jy,{cinemaCardRef:l}),m.jsx($n,{}),m.jsx(zg,{ref:l}),m.jsx($n,{}),m.jsx(oy,{}),m.jsx($n,{}),m.jsx(S0,{}),m.jsx($n,{}),m.jsx(wy,{}),m.jsx($n,{})]})},Ry="/portfolio/assets/meAbout-Cyp5Rbod.avif",Iy=ls`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,zy=R.section`
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
`,Ty=R.div`
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
`,Ny=R.div`
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
`,Ly=R.p`
  text-align: justify;
`,Oy=R.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 24px;
`,$y=R.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;

  ${({isLoaded:l})=>l&&Ol`
      animation: ${Iy} 1s ease-out forwards;
    `}
`,Ay=()=>{const[l,s]=$.useState(!1),a=$.useRef(null);return $.useEffect(()=>{const c=()=>{s(!0)},d=a.current;if(d)if(d.complete)c();else return d.addEventListener("load",c),()=>{d.removeEventListener("load",c)}},[]),m.jsxs(zy,{children:[m.jsx(Ty,{children:m.jsxs(Ny,{children:[m.jsx("h2",{children:"About me "}),m.jsx(Ly,{children:"I bring a unique combination of creative and technical expertise. I am competent with design tools such as Figma and Adobe Creative Suite as well as Useberry for testing. When it comes to frontend I am skilled in html, css, javascript and React. My interests also extend into AI, particularly image and video generation, and AR. Merging traditional filmmaking techniques with the latest technologies. I have a calm and methodical approach to life, which enables me to navigate challenges with ease. I enjoy working with people from diverse backgrounds and ages. Something thats engerises ans inspires immensely. My strong willpower and determination helps me stay focused on the goals, even during difficult times."})]})}),m.jsx(Oy,{children:m.jsx($y,{ref:a,src:Ry,alt:"Paul Evans watching the ocean",isLoaded:l})})]})},My="/portfolio/assets/camper-TiOiMIZc.avif",Fy=ls`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,Dy=R.section`
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
`,Uy=R.div`
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
`,By=R.div`
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
`,Vy=R.p`
  text-align: justify;
`,Wy=R.p`
  text-align: justify;
  margin-top: 2em;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
`,Hy=R.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 24px;
`,Qy=R.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  visibility: hidden;
  border-radius: 24px;

  ${({isInView:l})=>l&&Ol`
      visibility: visible;
      animation: ${Fy} 1s ease-out forwards;
    `}
`,Yy=()=>{const l=$.useRef(null),[s,a]=$.useState(!1);return $.useEffect(()=>{const c=new IntersectionObserver(d=>{d[0].isIntersecting&&a(!0)},{threshold:.1});return l.current&&c.observe(l.current),()=>{l.current&&c.unobserve(l.current)}},[]),m.jsxs(Dy,{children:[m.jsx(Uy,{children:m.jsxs(By,{children:[m.jsx("h2",{children:"For fun"}),m.jsx(Vy,{children:"Surfing and traveling are my two biggest passions. When I'm not paddling out into the sea I like to work out at the gym or swim in the lake. I also cherish the time I spend with my family and friends, cooking and watching movies and TV shows."}),m.jsx(Wy,{children:'"Work like a captain, play like a pirate" - Christina Lauren'})]})}),m.jsx(Hy,{children:m.jsx(Qy,{ref:l,src:My,alt:"A surfboard propped up against a mobile home",isInView:s})})]})},Gy=R.section`
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
`,Xy=()=>($.useRef(null),m.jsxs(Gy,{children:[m.jsx(Ay,{}),m.jsx(Yy,{})]}));function Ky(l){return mr({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(l)}function by(l){return mr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM21.3 229.2H21c.1-.1.2-.3.3-.4zM97 319.8H64V192h33zm113.2 0h-28.7v-86.4l-11.6 86.4h-20.6l-12.2-84.5v84.5h-29V192h42.8c3.3 19.8 6 39.9 8.7 59.9l7.6-59.9h43zm11.4 0V192h24.6c17.6 0 44.7-1.6 49 20.9 1.7 7.6 1.4 16.3 1.4 24.4 0 88.5 11.1 82.6-75 82.5zm160.9-29.2c0 15.7-2.4 30.9-22.2 30.9-9 0-15.2-3-20.9-9.8l-1.9 8.1h-29.8V192h31.7v41.7c6-6.5 12-9.2 20.9-9.2 21.4 0 22.2 12.8 22.2 30.1zM265 229.9c0-9.7 1.6-16-10.3-16v83.7c12.2.3 10.3-8.7 10.3-18.4zm85.5 26.1c0-5.4 1.1-12.7-6.2-12.7-6 0-4.9 8.9-4.9 12.7 0 .6-1.1 39.6 1.1 44.7.8 1.6 2.2 2.4 3.8 2.4 7.8 0 6.2-9 6.2-14.4z"},child:[]}]})(l)}function Zy(l){return mr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(l)}function Jy(l){return mr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(l)}function qy(l){return mr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"},child:[]}]})(l)}R.div`
  overflowy: scroll;
  height: 2500px;
`;const ev=R.div`
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
`,tv=R.div`
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
`,nv=()=>{const[l,s]=$.useState(!1),a=()=>{const d=document.documentElement.scrollTop;d>1200?s(!0):d<=1200&&s(!1)},c=()=>{window.scrollTo({top:0,behavior:"smooth"})};return window.addEventListener("scroll",a),m.jsx(ev,{children:m.jsx(tv,{children:m.jsx(qy,{onClick:c,style:{display:l?"inline":"none",borderRadius:"50%"}})})})},rv=[{id:1,href:"https://github.com/PaulEvans78",icon:m.jsx(Ky,{}),des:"Github",target:"_blank",rel:"noopener noreferrer"},{id:2,href:"https://www.linkedin.com/in/paul-evans-3a74605/",icon:m.jsx(Jy,{}),des:"LinkedIn",target:"_blank",rel:"noopener noreferrer"},{id:3,href:"https://www.instagram.com/paulevans_official/",icon:m.jsx(Zy,{}),des:"Instagram",target:"_blank",rel:"noopener noreferrer"},{id:4,href:"https://www.imdb.com/name/nm3171341/?ref_=ttfc_fc_cr",icon:m.jsx(by,{}),des:"Imdb",target:"_blank",rel:"noopener noreferrer"}],iv=R.footer`
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
`,lv=R.div`
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
`,ov=R.p`
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
`,av=R.p`
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
`,sv=R.div`
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
`,uv=R.a`
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
`,cv=R.p`
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
`,dv=R.div`
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
`,fv=R.img`
  text-align: center;
  justify-self: center;
  width: 120px;
  margin-top: 4em;

  @media screen and (max-width: 960px) {
    width: 120px;
  }
`,Nd=R.p`
  font-size: 16px;
  font-weight: 500;
  margin: 2px;

  @media screen and (max-width: 960px) {
    margin: 8px;
  }
`,pv=Qe.forwardRef((l,s)=>m.jsxs(iv,{ref:s,children:[m.jsx(dv,{children:m.jsx(us,{to:"/",children:m.jsx(fv,{src:Ja,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,alt:"A revolving logo showing the initals PE and a cartton version of Paul Evans.."})})}),m.jsx(mv,{}),m.jsxs(lv,{children:[m.jsx(Nd,{children:"Copyright 2024."}),m.jsx(Nd,{children:"Paul Evans."}),m.jsx(ov,{children:m.jsx("a",{href:"mailto:paul@paulevans.se",children:"paul@paulevans.se"})}),m.jsx(av,{children:m.jsx("a",{href:"tel:+46739908858",children:"+46739908858"})})]})]})),mv=()=>m.jsx(sv,{children:m.jsx(es.Provider,{value:{size:"2em"},children:rv.map(l=>m.jsxs(uv,{href:l.href,target:l.target,rel:l.rel,children:[l.icon,m.jsx(cv,{children:l.des})]},l.id))})}),hv=()=>{const{pathname:l}=pr();return $.useEffect(()=>{window.scrollTo(0,0)},[l]),null},gv=R.div`
  min-height: 100%;
  max-width: 100vw;
`,yv=R.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: space-evenly;
`,vv=()=>{const l=$.useRef(null);return m.jsxs(Jh,{children:[m.jsx(hv,{}),m.jsxs(gv,{children:[m.jsx(fg,{footerRef:l}),m.jsxs(yv,{children:[m.jsxs(Qh,{children:[m.jsx(Ka,{path:"/",element:m.jsx(_y,{})}),m.jsx(Ka,{path:"/about",element:m.jsx(Xy,{})})]}),m.jsx(pv,{ref:l})]}),m.jsx(nv,{})]})]})};um.createRoot(document.getElementById("root")).render(m.jsx(Qe.StrictMode,{children:m.jsx(vv,{})}));
