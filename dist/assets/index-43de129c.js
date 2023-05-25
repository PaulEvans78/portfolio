(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function hh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function gh(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(t,i);return new o}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var ei={},yh={get exports(){return ei},set exports(e){ei=e}},Go={},pe={},vh={get exports(){return pe},set exports(e){pe=e}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xi=Symbol.for("react.element"),wh=Symbol.for("react.portal"),xh=Symbol.for("react.fragment"),Sh=Symbol.for("react.strict_mode"),kh=Symbol.for("react.profiler"),Ch=Symbol.for("react.provider"),Eh=Symbol.for("react.context"),Ph=Symbol.for("react.forward_ref"),Th=Symbol.for("react.suspense"),_h=Symbol.for("react.memo"),Rh=Symbol.for("react.lazy"),mc=Symbol.iterator;function Oh(e){return e===null||typeof e!="object"?null:(e=mc&&e[mc]||e["@@iterator"],typeof e=="function"?e:null)}var cf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},df=Object.assign,ff={};function Sr(e,t,n){this.props=e,this.context=t,this.refs=ff,this.updater=n||cf}Sr.prototype.isReactComponent={};Sr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function pf(){}pf.prototype=Sr.prototype;function Ys(e,t,n){this.props=e,this.context=t,this.refs=ff,this.updater=n||cf}var Xs=Ys.prototype=new pf;Xs.constructor=Ys;df(Xs,Sr.prototype);Xs.isPureReactComponent=!0;var hc=Array.isArray,mf=Object.prototype.hasOwnProperty,Js={current:null},hf={key:!0,ref:!0,__self:!0,__source:!0};function gf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)mf.call(t,r)&&!hf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:xi,type:e,key:o,ref:l,props:i,_owner:Js.current}}function Ah(e,t){return{$$typeof:xi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qs(e){return typeof e=="object"&&e!==null&&e.$$typeof===xi}function $h(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gc=/\/+/g;function Xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$h(""+e.key):t.toString(36)}function Xi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case xi:case wh:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Xl(l,0):r,hc(i)?(n="",e!=null&&(n=e.replace(gc,"$&/")+"/"),Xi(i,t,n,"",function(u){return u})):i!=null&&(qs(i)&&(i=Ah(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(gc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",hc(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+Xl(o,a);l+=Xi(o,t,n,s,i)}else if(s=Oh(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+Xl(o,a++),l+=Xi(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Oi(e,t,n){if(e==null)return e;var r=[],i=0;return Xi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Nh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},Ji={transition:null},zh={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Ji,ReactCurrentOwner:Js};G.Children={map:Oi,forEach:function(e,t,n){Oi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Oi(e,function(){t++}),t},toArray:function(e){return Oi(e,function(t){return t})||[]},only:function(e){if(!qs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=Sr;G.Fragment=xh;G.Profiler=kh;G.PureComponent=Ys;G.StrictMode=Sh;G.Suspense=Th;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zh;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=df({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Js.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)mf.call(t,s)&&!hf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:xi,type:e.type,key:i,ref:o,props:r,_owner:l}};G.createContext=function(e){return e={$$typeof:Eh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ch,_context:e},e.Consumer=e};G.createElement=gf;G.createFactory=function(e){var t=gf.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:Ph,render:e}};G.isValidElement=qs;G.lazy=function(e){return{$$typeof:Rh,_payload:{_status:-1,_result:e},_init:Nh}};G.memo=function(e,t){return{$$typeof:_h,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=Ji.transition;Ji.transition={};try{e()}finally{Ji.transition=t}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(e,t){return Ve.current.useCallback(e,t)};G.useContext=function(e){return Ve.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};G.useEffect=function(e,t){return Ve.current.useEffect(e,t)};G.useId=function(){return Ve.current.useId()};G.useImperativeHandle=function(e,t,n){return Ve.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return Ve.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Ve.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Ve.current.useMemo(e,t)};G.useReducer=function(e,t,n){return Ve.current.useReducer(e,t,n)};G.useRef=function(e){return Ve.current.useRef(e)};G.useState=function(e){return Ve.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return Ve.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return Ve.current.useTransition()};G.version="18.2.0";(function(e){e.exports=G})(vh);const W=hh(pe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lh=pe,Ih=Symbol.for("react.element"),Dh=Symbol.for("react.fragment"),jh=Object.prototype.hasOwnProperty,Mh=Lh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fh={key:!0,ref:!0,__self:!0,__source:!0};function yf(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)jh.call(t,r)&&!Fh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ih,type:e,key:o,ref:l,props:i,_owner:Mh.current}}Go.Fragment=Dh;Go.jsx=yf;Go.jsxs=yf;(function(e){e.exports=Go})(yh);const Yt=ei.Fragment,y=ei.jsx,b=ei.jsxs,Uh=Object.freeze(Object.defineProperty({__proto__:null,Fragment:Yt,jsx:y,jsxs:b},Symbol.toStringTag,{value:"Module"}));var Ua={},Ba={},Bh={get exports(){return Ba},set exports(e){Ba=e}},lt={},ba={},bh={get exports(){return ba},set exports(e){ba=e}},vf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,L){var O=z.length;z.push(L);e:for(;0<O;){var F=O-1>>>1,E=z[F];if(0<i(E,L))z[F]=L,z[O]=E,O=F;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var L=z[0],O=z.pop();if(O!==L){z[0]=O;e:for(var F=0,E=z.length,$=E>>>1;F<$;){var D=2*(F+1)-1,U=z[D],x=D+1,H=z[x];if(0>i(U,O))x<E&&0>i(H,U)?(z[F]=H,z[x]=O,F=x):(z[F]=U,z[D]=O,F=D);else if(x<E&&0>i(H,O))z[F]=H,z[x]=O,F=x;else break e}}return L}function i(z,L){var O=z.sortIndex-L.sortIndex;return O!==0?O:z.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],c=1,f=null,m=3,v=!1,g=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(z){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=z)r(u),L.sortIndex=L.expirationTime,t(s,L);else break;L=n(u)}}function S(z){if(w=!1,h(z),!g)if(n(s)!==null)g=!0,De(P);else{var L=n(u);L!==null&&ke(S,L.startTime-z)}}function P(z,L){g=!1,w&&(w=!1,p(R),R=-1),v=!0;var O=m;try{for(h(L),f=n(s);f!==null&&(!(f.expirationTime>L)||z&&!Q());){var F=f.callback;if(typeof F=="function"){f.callback=null,m=f.priorityLevel;var E=F(f.expirationTime<=L);L=e.unstable_now(),typeof E=="function"?f.callback=E:f===n(s)&&r(s),h(L)}else r(s);f=n(s)}if(f!==null)var $=!0;else{var D=n(u);D!==null&&ke(S,D.startTime-L),$=!1}return $}finally{f=null,m=O,v=!1}}var A=!1,T=null,R=-1,B=5,j=-1;function Q(){return!(e.unstable_now()-j<B)}function Y(){if(T!==null){var z=e.unstable_now();j=z;var L=!0;try{L=T(!0,z)}finally{L?ue():(A=!1,T=null)}}else A=!1}var ue;if(typeof d=="function")ue=function(){d(Y)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,q=ae.port2;ae.port1.onmessage=Y,ue=function(){q.postMessage(null)}}else ue=function(){_(Y,0)};function De(z){T=z,A||(A=!0,ue())}function ke(z,L){R=_(function(){z(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,De(P))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var O=m;m=L;try{return z()}finally{m=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,L){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var O=m;m=z;try{return L()}finally{m=O}},e.unstable_scheduleCallback=function(z,L,O){var F=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?F+O:F):O=F,z){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=O+E,z={id:c++,callback:L,priorityLevel:z,startTime:O,expirationTime:E,sortIndex:-1},O>F?(z.sortIndex=O,t(u,z),n(s)===null&&z===n(u)&&(w?(p(R),R=-1):w=!0,ke(S,O-F))):(z.sortIndex=E,t(s,z),g||v||(g=!0,De(P))),z},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(z){var L=m;return function(){var O=m;m=L;try{return z.apply(this,arguments)}finally{m=O}}}})(vf);(function(e){e.exports=vf})(bh);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf=pe,ot=ba;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xf=new Set,ti={};function Mn(e,t){ur(e,t),ur(e+"Capture",t)}function ur(e,t){for(ti[e]=t,e=0;e<t.length;e++)xf.add(t[e])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ha=Object.prototype.hasOwnProperty,Hh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yc={},vc={};function Wh(e){return Ha.call(vc,e)?!0:Ha.call(yc,e)?!1:Hh.test(e)?vc[e]=!0:(yc[e]=!0,!1)}function Vh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qh(e,t,n,r){if(t===null||typeof t>"u"||Vh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Qe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new Qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new Qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new Qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new Qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new Qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new Qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new Qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new Qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new Qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zs=/[\-:]([a-z])/g;function eu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zs,eu);Ie[t]=new Qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zs,eu);Ie[t]=new Qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zs,eu);Ie[t]=new Qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new Qe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new Qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function tu(e,t,n,r){var i=Ie.hasOwnProperty(t)?Ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qh(t,n,i,r)&&(n=null),r||i===null?Wh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xt=wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ai=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),Vn=Symbol.for("react.fragment"),nu=Symbol.for("react.strict_mode"),Wa=Symbol.for("react.profiler"),Sf=Symbol.for("react.provider"),kf=Symbol.for("react.context"),ru=Symbol.for("react.forward_ref"),Va=Symbol.for("react.suspense"),Qa=Symbol.for("react.suspense_list"),iu=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),Cf=Symbol.for("react.offscreen"),wc=Symbol.iterator;function _r(e){return e===null||typeof e!="object"?null:(e=wc&&e[wc]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,Jl;function Mr(e){if(Jl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jl=t&&t[1]||""}return`
`+Jl+e}var ql=!1;function Zl(e,t){if(!e||ql)return"";ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{ql=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mr(e):""}function Kh(e){switch(e.tag){case 5:return Mr(e.type);case 16:return Mr("Lazy");case 13:return Mr("Suspense");case 19:return Mr("SuspenseList");case 0:case 2:case 15:return e=Zl(e.type,!1),e;case 11:return e=Zl(e.type.render,!1),e;case 1:return e=Zl(e.type,!0),e;default:return""}}function Ka(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vn:return"Fragment";case Wn:return"Portal";case Wa:return"Profiler";case nu:return"StrictMode";case Va:return"Suspense";case Qa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kf:return(e.displayName||"Context")+".Consumer";case Sf:return(e._context.displayName||"Context")+".Provider";case ru:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case iu:return t=e.displayName||null,t!==null?t:Ka(e.type)||"Memo";case en:t=e._payload,e=e._init;try{return Ka(e(t))}catch{}}return null}function Gh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ka(t);case 8:return t===nu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ef(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yh(e){var t=Ef(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $i(e){e._valueTracker||(e._valueTracker=Yh(e))}function Pf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ef(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function go(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ga(e,t){var n=t.checked;return ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tf(e,t){t=t.checked,t!=null&&tu(e,"checked",t,!1)}function Ya(e,t){Tf(e,t);var n=yn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xa(e,t.type,yn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Sc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xa(e,t,n){(t!=="number"||go(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fr=Array.isArray;function rr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ja(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function kc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Fr(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yn(n)}}function _f(e,t){var n=yn(t.value),r=yn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Cc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Rf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ni,Of=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ni=Ni||document.createElement("div"),Ni.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ni.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ni(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xh=["Webkit","ms","Moz","O"];Object.keys(Hr).forEach(function(e){Xh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hr[t]=Hr[e]})});function Af(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hr.hasOwnProperty(e)&&Hr[e]?(""+t).trim():t+"px"}function $f(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Af(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Jh=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Za(e,t){if(t){if(Jh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function es(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ts=null;function ou(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ns=null,ir=null,or=null;function Ec(e){if(e=Ci(e)){if(typeof ns!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Zo(t),ns(e.stateNode,e.type,t))}}function Nf(e){ir?or?or.push(e):or=[e]:ir=e}function zf(){if(ir){var e=ir,t=or;if(or=ir=null,Ec(e),t)for(e=0;e<t.length;e++)Ec(t[e])}}function Lf(e,t){return e(t)}function If(){}var ea=!1;function Df(e,t,n){if(ea)return e(t,n);ea=!0;try{return Lf(e,t,n)}finally{ea=!1,(ir!==null||or!==null)&&(If(),zf())}}function ri(e,t){var n=e.stateNode;if(n===null)return null;var r=Zo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var rs=!1;if(Vt)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){rs=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{rs=!1}function qh(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Wr=!1,yo=null,vo=!1,is=null,Zh={onError:function(e){Wr=!0,yo=e}};function e0(e,t,n,r,i,o,l,a,s){Wr=!1,yo=null,qh.apply(Zh,arguments)}function t0(e,t,n,r,i,o,l,a,s){if(e0.apply(this,arguments),Wr){if(Wr){var u=yo;Wr=!1,yo=null}else throw Error(N(198));vo||(vo=!0,is=u)}}function Fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pc(e){if(Fn(e)!==e)throw Error(N(188))}function n0(e){var t=e.alternate;if(!t){if(t=Fn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Pc(i),e;if(o===r)return Pc(i),t;o=o.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Mf(e){return e=n0(e),e!==null?Ff(e):null}function Ff(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ff(e);if(t!==null)return t;e=e.sibling}return null}var Uf=ot.unstable_scheduleCallback,Tc=ot.unstable_cancelCallback,r0=ot.unstable_shouldYield,i0=ot.unstable_requestPaint,xe=ot.unstable_now,o0=ot.unstable_getCurrentPriorityLevel,lu=ot.unstable_ImmediatePriority,Bf=ot.unstable_UserBlockingPriority,wo=ot.unstable_NormalPriority,l0=ot.unstable_LowPriority,bf=ot.unstable_IdlePriority,Yo=null,zt=null;function a0(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Yo,e,void 0,(e.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:c0,s0=Math.log,u0=Math.LN2;function c0(e){return e>>>=0,e===0?32:31-(s0(e)/u0|0)|0}var zi=64,Li=4194304;function Ur(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function xo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Ur(a):(o&=l,o!==0&&(r=Ur(o)))}else l=n&~i,l!==0?r=Ur(l):o!==0&&(r=Ur(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pt(t),i=1<<n,r|=e[n],t&=~i;return r}function d0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function f0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Pt(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=d0(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function os(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hf(){var e=zi;return zi<<=1,!(zi&4194240)&&(zi=64),e}function ta(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Si(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pt(t),e[t]=n}function p0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Pt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function au(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var re=0;function Wf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vf,su,Qf,Kf,Gf,ls=!1,Ii=[],an=null,sn=null,un=null,ii=new Map,oi=new Map,nn=[],m0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _c(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":ii.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oi.delete(t.pointerId)}}function Or(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ci(t),t!==null&&su(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function h0(e,t,n,r,i){switch(t){case"focusin":return an=Or(an,e,t,n,r,i),!0;case"dragenter":return sn=Or(sn,e,t,n,r,i),!0;case"mouseover":return un=Or(un,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ii.set(o,Or(ii.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,oi.set(o,Or(oi.get(o)||null,e,t,n,r,i)),!0}return!1}function Yf(e){var t=Tn(e.target);if(t!==null){var n=Fn(t);if(n!==null){if(t=n.tag,t===13){if(t=jf(n),t!==null){e.blockedOn=t,Gf(e.priority,function(){Qf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=as(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ts=r,n.target.dispatchEvent(r),ts=null}else return t=Ci(n),t!==null&&su(t),e.blockedOn=n,!1;t.shift()}return!0}function Rc(e,t,n){qi(e)&&n.delete(t)}function g0(){ls=!1,an!==null&&qi(an)&&(an=null),sn!==null&&qi(sn)&&(sn=null),un!==null&&qi(un)&&(un=null),ii.forEach(Rc),oi.forEach(Rc)}function Ar(e,t){e.blockedOn===t&&(e.blockedOn=null,ls||(ls=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,g0)))}function li(e){function t(i){return Ar(i,e)}if(0<Ii.length){Ar(Ii[0],e);for(var n=1;n<Ii.length;n++){var r=Ii[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&Ar(an,e),sn!==null&&Ar(sn,e),un!==null&&Ar(un,e),ii.forEach(t),oi.forEach(t),n=0;n<nn.length;n++)r=nn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nn.length&&(n=nn[0],n.blockedOn===null);)Yf(n),n.blockedOn===null&&nn.shift()}var lr=Xt.ReactCurrentBatchConfig,So=!0;function y0(e,t,n,r){var i=re,o=lr.transition;lr.transition=null;try{re=1,uu(e,t,n,r)}finally{re=i,lr.transition=o}}function v0(e,t,n,r){var i=re,o=lr.transition;lr.transition=null;try{re=4,uu(e,t,n,r)}finally{re=i,lr.transition=o}}function uu(e,t,n,r){if(So){var i=as(e,t,n,r);if(i===null)da(e,t,r,ko,n),_c(e,r);else if(h0(i,e,t,n,r))r.stopPropagation();else if(_c(e,r),t&4&&-1<m0.indexOf(e)){for(;i!==null;){var o=Ci(i);if(o!==null&&Vf(o),o=as(e,t,n,r),o===null&&da(e,t,r,ko,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else da(e,t,r,null,n)}}var ko=null;function as(e,t,n,r){if(ko=null,e=ou(r),e=Tn(e),e!==null)if(t=Fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ko=e,null}function Xf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(o0()){case lu:return 1;case Bf:return 4;case wo:case l0:return 16;case bf:return 536870912;default:return 16}default:return 16}}var on=null,cu=null,Zi=null;function Jf(){if(Zi)return Zi;var e,t=cu,n=t.length,r,i="value"in on?on.value:on.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Zi=i.slice(e,1<r?1-r:void 0)}function eo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Di(){return!0}function Oc(){return!1}function at(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Di:Oc,this.isPropagationStopped=Oc,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Di)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Di)},persist:function(){},isPersistent:Di}),t}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},du=at(kr),ki=ye({},kr,{view:0,detail:0}),w0=at(ki),na,ra,$r,Xo=ye({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(na=e.screenX-$r.screenX,ra=e.screenY-$r.screenY):ra=na=0,$r=e),na)},movementY:function(e){return"movementY"in e?e.movementY:ra}}),Ac=at(Xo),x0=ye({},Xo,{dataTransfer:0}),S0=at(x0),k0=ye({},ki,{relatedTarget:0}),ia=at(k0),C0=ye({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),E0=at(C0),P0=ye({},kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),T0=at(P0),_0=ye({},kr,{data:0}),$c=at(_0),R0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},A0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=A0[e])?!!t[e]:!1}function fu(){return $0}var N0=ye({},ki,{key:function(e){if(e.key){var t=R0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=eo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?O0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(e){return e.type==="keypress"?eo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?eo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),z0=at(N0),L0=ye({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nc=at(L0),I0=ye({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),D0=at(I0),j0=ye({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),M0=at(j0),F0=ye({},Xo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),U0=at(F0),B0=[9,13,27,32],pu=Vt&&"CompositionEvent"in window,Vr=null;Vt&&"documentMode"in document&&(Vr=document.documentMode);var b0=Vt&&"TextEvent"in window&&!Vr,qf=Vt&&(!pu||Vr&&8<Vr&&11>=Vr),zc=String.fromCharCode(32),Lc=!1;function Zf(e,t){switch(e){case"keyup":return B0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function H0(e,t){switch(e){case"compositionend":return ep(t);case"keypress":return t.which!==32?null:(Lc=!0,zc);case"textInput":return e=t.data,e===zc&&Lc?null:e;default:return null}}function W0(e,t){if(Qn)return e==="compositionend"||!pu&&Zf(e,t)?(e=Jf(),Zi=cu=on=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qf&&t.locale!=="ko"?null:t.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ic(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!V0[e.type]:t==="textarea"}function tp(e,t,n,r){Nf(r),t=Co(t,"onChange"),0<t.length&&(n=new du("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qr=null,ai=null;function Q0(e){fp(e,0)}function Jo(e){var t=Yn(e);if(Pf(t))return e}function K0(e,t){if(e==="change")return t}var np=!1;if(Vt){var oa;if(Vt){var la="oninput"in document;if(!la){var Dc=document.createElement("div");Dc.setAttribute("oninput","return;"),la=typeof Dc.oninput=="function"}oa=la}else oa=!1;np=oa&&(!document.documentMode||9<document.documentMode)}function jc(){Qr&&(Qr.detachEvent("onpropertychange",rp),ai=Qr=null)}function rp(e){if(e.propertyName==="value"&&Jo(ai)){var t=[];tp(t,ai,e,ou(e)),Df(Q0,t)}}function G0(e,t,n){e==="focusin"?(jc(),Qr=t,ai=n,Qr.attachEvent("onpropertychange",rp)):e==="focusout"&&jc()}function Y0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jo(ai)}function X0(e,t){if(e==="click")return Jo(t)}function J0(e,t){if(e==="input"||e==="change")return Jo(t)}function q0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:q0;function si(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ha.call(t,i)||!_t(e[i],t[i]))return!1}return!0}function Mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fc(e,t){var n=Mc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mc(n)}}function ip(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ip(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function op(){for(var e=window,t=go();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=go(e.document)}return t}function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Z0(e){var t=op(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ip(n.ownerDocument.documentElement,n)){if(r!==null&&mu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Fc(n,o);var l=Fc(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var e1=Vt&&"documentMode"in document&&11>=document.documentMode,Kn=null,ss=null,Kr=null,us=!1;function Uc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;us||Kn==null||Kn!==go(r)||(r=Kn,"selectionStart"in r&&mu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&si(Kr,r)||(Kr=r,r=Co(ss,"onSelect"),0<r.length&&(t=new du("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kn)))}function ji(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gn={animationend:ji("Animation","AnimationEnd"),animationiteration:ji("Animation","AnimationIteration"),animationstart:ji("Animation","AnimationStart"),transitionend:ji("Transition","TransitionEnd")},aa={},lp={};Vt&&(lp=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function qo(e){if(aa[e])return aa[e];if(!Gn[e])return e;var t=Gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lp)return aa[e]=t[n];return e}var ap=qo("animationend"),sp=qo("animationiteration"),up=qo("animationstart"),cp=qo("transitionend"),dp=new Map,Bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,t){dp.set(e,t),Mn(t,[e])}for(var sa=0;sa<Bc.length;sa++){var ua=Bc[sa],t1=ua.toLowerCase(),n1=ua[0].toUpperCase()+ua.slice(1);wn(t1,"on"+n1)}wn(ap,"onAnimationEnd");wn(sp,"onAnimationIteration");wn(up,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn(cp,"onTransitionEnd");ur("onMouseEnter",["mouseout","mouseover"]);ur("onMouseLeave",["mouseout","mouseover"]);ur("onPointerEnter",["pointerout","pointerover"]);ur("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function bc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,t0(r,t,void 0,e),e.currentTarget=null}function fp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;bc(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;bc(i,a,u),o=s}}}if(vo)throw e=is,vo=!1,is=null,e}function de(e,t){var n=t[ms];n===void 0&&(n=t[ms]=new Set);var r=e+"__bubble";n.has(r)||(pp(t,e,2,!1),n.add(r))}function ca(e,t,n){var r=0;t&&(r|=4),pp(n,e,r,t)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function ui(e){if(!e[Mi]){e[Mi]=!0,xf.forEach(function(n){n!=="selectionchange"&&(r1.has(n)||ca(n,!1,e),ca(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mi]||(t[Mi]=!0,ca("selectionchange",!1,t))}}function pp(e,t,n,r){switch(Xf(t)){case 1:var i=y0;break;case 4:i=v0;break;default:i=uu}n=i.bind(null,t,n,e),i=void 0,!rs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function da(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Tn(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Df(function(){var u=o,c=ou(n),f=[];e:{var m=dp.get(e);if(m!==void 0){var v=du,g=e;switch(e){case"keypress":if(eo(n)===0)break e;case"keydown":case"keyup":v=z0;break;case"focusin":g="focus",v=ia;break;case"focusout":g="blur",v=ia;break;case"beforeblur":case"afterblur":v=ia;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=S0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=D0;break;case ap:case sp:case up:v=E0;break;case cp:v=M0;break;case"scroll":v=w0;break;case"wheel":v=U0;break;case"copy":case"cut":case"paste":v=T0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Nc}var w=(t&4)!==0,_=!w&&e==="scroll",p=w?m!==null?m+"Capture":null:m;w=[];for(var d=u,h;d!==null;){h=d;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,p!==null&&(S=ri(d,p),S!=null&&w.push(ci(d,S,h)))),_)break;d=d.return}0<w.length&&(m=new v(m,g,null,n,c),f.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==ts&&(g=n.relatedTarget||n.fromElement)&&(Tn(g)||g[Qt]))break e;if((v||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?Tn(g):null,g!==null&&(_=Fn(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(w=Ac,S="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Nc,S="onPointerLeave",p="onPointerEnter",d="pointer"),_=v==null?m:Yn(v),h=g==null?m:Yn(g),m=new w(S,d+"leave",v,n,c),m.target=_,m.relatedTarget=h,S=null,Tn(c)===u&&(w=new w(p,d+"enter",g,n,c),w.target=h,w.relatedTarget=_,S=w),_=S,v&&g)t:{for(w=v,p=g,d=0,h=w;h;h=Bn(h))d++;for(h=0,S=p;S;S=Bn(S))h++;for(;0<d-h;)w=Bn(w),d--;for(;0<h-d;)p=Bn(p),h--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=Bn(w),p=Bn(p)}w=null}else w=null;v!==null&&Hc(f,m,v,w,!1),g!==null&&_!==null&&Hc(f,_,g,w,!0)}}e:{if(m=u?Yn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var P=K0;else if(Ic(m))if(np)P=J0;else{P=Y0;var A=G0}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(P=X0);if(P&&(P=P(e,u))){tp(f,P,n,c);break e}A&&A(e,m,u),e==="focusout"&&(A=m._wrapperState)&&A.controlled&&m.type==="number"&&Xa(m,"number",m.value)}switch(A=u?Yn(u):window,e){case"focusin":(Ic(A)||A.contentEditable==="true")&&(Kn=A,ss=u,Kr=null);break;case"focusout":Kr=ss=Kn=null;break;case"mousedown":us=!0;break;case"contextmenu":case"mouseup":case"dragend":us=!1,Uc(f,n,c);break;case"selectionchange":if(e1)break;case"keydown":case"keyup":Uc(f,n,c)}var T;if(pu)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Qn?Zf(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(qf&&n.locale!=="ko"&&(Qn||R!=="onCompositionStart"?R==="onCompositionEnd"&&Qn&&(T=Jf()):(on=c,cu="value"in on?on.value:on.textContent,Qn=!0)),A=Co(u,R),0<A.length&&(R=new $c(R,e,null,n,c),f.push({event:R,listeners:A}),T?R.data=T:(T=ep(n),T!==null&&(R.data=T)))),(T=b0?H0(e,n):W0(e,n))&&(u=Co(u,"onBeforeInput"),0<u.length&&(c=new $c("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=T))}fp(f,t)})}function ci(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Co(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ri(e,n),o!=null&&r.unshift(ci(e,o,i)),o=ri(e,t),o!=null&&r.push(ci(e,o,i))),e=e.return}return r}function Bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=ri(n,o),s!=null&&l.unshift(ci(n,s,a))):i||(s=ri(n,o),s!=null&&l.push(ci(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var i1=/\r\n?/g,o1=/\u0000|\uFFFD/g;function Wc(e){return(typeof e=="string"?e:""+e).replace(i1,`
`).replace(o1,"")}function Fi(e,t,n){if(t=Wc(t),Wc(e)!==t&&n)throw Error(N(425))}function Eo(){}var cs=null,ds=null;function fs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ps=typeof setTimeout=="function"?setTimeout:void 0,l1=typeof clearTimeout=="function"?clearTimeout:void 0,Vc=typeof Promise=="function"?Promise:void 0,a1=typeof queueMicrotask=="function"?queueMicrotask:typeof Vc<"u"?function(e){return Vc.resolve(null).then(e).catch(s1)}:ps;function s1(e){setTimeout(function(){throw e})}function fa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),li(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);li(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cr=Math.random().toString(36).slice(2),$t="__reactFiber$"+Cr,di="__reactProps$"+Cr,Qt="__reactContainer$"+Cr,ms="__reactEvents$"+Cr,u1="__reactListeners$"+Cr,c1="__reactHandles$"+Cr;function Tn(e){var t=e[$t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qt]||n[$t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qc(e);e!==null;){if(n=e[$t])return n;e=Qc(e)}return t}e=n,n=e.parentNode}return null}function Ci(e){return e=e[$t]||e[Qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Zo(e){return e[di]||null}var hs=[],Xn=-1;function xn(e){return{current:e}}function fe(e){0>Xn||(e.current=hs[Xn],hs[Xn]=null,Xn--)}function se(e,t){Xn++,hs[Xn]=e.current,e.current=t}var vn={},Be=xn(vn),Je=xn(!1),$n=vn;function cr(e,t){var n=e.type.contextTypes;if(!n)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function qe(e){return e=e.childContextTypes,e!=null}function Po(){fe(Je),fe(Be)}function Kc(e,t,n){if(Be.current!==vn)throw Error(N(168));se(Be,t),se(Je,n)}function mp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,Gh(e)||"Unknown",i));return ye({},n,r)}function To(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,$n=Be.current,se(Be,e),se(Je,Je.current),!0}function Gc(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=mp(e,t,$n),r.__reactInternalMemoizedMergedChildContext=e,fe(Je),fe(Be),se(Be,e)):fe(Je),se(Je,n)}var Ft=null,el=!1,pa=!1;function hp(e){Ft===null?Ft=[e]:Ft.push(e)}function d1(e){el=!0,hp(e)}function Sn(){if(!pa&&Ft!==null){pa=!0;var e=0,t=re;try{var n=Ft;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,el=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(e+1)),Uf(lu,Sn),i}finally{re=t,pa=!1}}return null}var Jn=[],qn=0,_o=null,Ro=0,dt=[],ft=0,Nn=null,Ut=1,Bt="";function En(e,t){Jn[qn++]=Ro,Jn[qn++]=_o,_o=e,Ro=t}function gp(e,t,n){dt[ft++]=Ut,dt[ft++]=Bt,dt[ft++]=Nn,Nn=e;var r=Ut;e=Bt;var i=32-Pt(r)-1;r&=~(1<<i),n+=1;var o=32-Pt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ut=1<<32-Pt(t)+i|n<<i|r,Bt=o+e}else Ut=1<<o|n<<i|r,Bt=e}function hu(e){e.return!==null&&(En(e,1),gp(e,1,0))}function gu(e){for(;e===_o;)_o=Jn[--qn],Jn[qn]=null,Ro=Jn[--qn],Jn[qn]=null;for(;e===Nn;)Nn=dt[--ft],dt[ft]=null,Bt=dt[--ft],dt[ft]=null,Ut=dt[--ft],dt[ft]=null}var it=null,nt=null,me=!1,Et=null;function yp(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,nt=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nn!==null?{id:Ut,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,it=e,nt=null,!0):!1;default:return!1}}function gs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ys(e){if(me){var t=nt;if(t){var n=t;if(!Yc(e,t)){if(gs(e))throw Error(N(418));t=cn(n.nextSibling);var r=it;t&&Yc(e,t)?yp(r,n):(e.flags=e.flags&-4097|2,me=!1,it=e)}}else{if(gs(e))throw Error(N(418));e.flags=e.flags&-4097|2,me=!1,it=e}}}function Xc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function Ui(e){if(e!==it)return!1;if(!me)return Xc(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fs(e.type,e.memoizedProps)),t&&(t=nt)){if(gs(e))throw vp(),Error(N(418));for(;t;)yp(e,t),t=cn(t.nextSibling)}if(Xc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=it?cn(e.stateNode.nextSibling):null;return!0}function vp(){for(var e=nt;e;)e=cn(e.nextSibling)}function dr(){nt=it=null,me=!1}function yu(e){Et===null?Et=[e]:Et.push(e)}var f1=Xt.ReactCurrentBatchConfig;function St(e,t){if(e&&e.defaultProps){t=ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Oo=xn(null),Ao=null,Zn=null,vu=null;function wu(){vu=Zn=Ao=null}function xu(e){var t=Oo.current;fe(Oo),e._currentValue=t}function vs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ar(e,t){Ao=e,vu=Zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Xe=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(vu!==e)if(e={context:e,memoizedValue:t,next:null},Zn===null){if(Ao===null)throw Error(N(308));Zn=e,Ao.dependencies={lanes:0,firstContext:e}}else Zn=Zn.next=e;return t}var _n=null;function Su(e){_n===null?_n=[e]:_n.push(e)}function wp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Su(t)):(n.next=i.next,i.next=n),t.interleaved=n,Kt(e,r)}function Kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tn=!1;function ku(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Kt(e,n)}return i=r.interleaved,i===null?(t.next=t,Su(r)):(t.next=i.next,i.next=t),r.interleaved=t,Kt(e,n)}function to(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,au(e,n)}}function Jc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $o(e,t,n,r){var i=e.updateQueue;tn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==l&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=s))}if(o!==null){var f=i.baseState;l=0,c=u=s=null,a=o;do{var m=a.lane,v=a.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,w=a;switch(m=t,v=n,w.tag){case 1:if(g=w.payload,typeof g=="function"){f=g.call(v,f,m);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,m=typeof g=="function"?g.call(v,f,m):g,m==null)break e;f=ye({},f,m);break e;case 2:tn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=v,s=f):c=c.next=v,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(c===null&&(s=f),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ln|=l,e.lanes=l,e.memoizedState=f}}function qc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var Sp=new wf.Component().refs;function ws(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var tl={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),i=pn(e),o=Ht(r,i);o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,i),t!==null&&(Tt(t,e,i,r),to(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),i=pn(e),o=Ht(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,i),t!==null&&(Tt(t,e,i,r),to(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=pn(e),i=Ht(n,r);i.tag=2,t!=null&&(i.callback=t),t=dn(e,i,r),t!==null&&(Tt(t,e,r,n),to(t,e,r))}};function Zc(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!si(n,r)||!si(i,o):!0}function kp(e,t,n){var r=!1,i=vn,o=t.contextType;return typeof o=="object"&&o!==null?o=gt(o):(i=qe(t)?$n:Be.current,r=t.contextTypes,o=(r=r!=null)?cr(e,i):vn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=tl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ed(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&tl.enqueueReplaceState(t,t.state,null)}function xs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Sp,ku(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=gt(o):(o=qe(t)?$n:Be.current,i.context=cr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ws(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&tl.enqueueReplaceState(i,i.state,null),$o(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===Sp&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Bi(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function td(e){var t=e._init;return t(e._payload)}function Cp(e){function t(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=mn(p,d),p.index=0,p.sibling=null,p}function o(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,h,S){return d===null||d.tag!==6?(d=xa(h,p.mode,S),d.return=p,d):(d=i(d,h),d.return=p,d)}function s(p,d,h,S){var P=h.type;return P===Vn?c(p,d,h.props.children,S,h.key):d!==null&&(d.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===en&&td(P)===d.type)?(S=i(d,h.props),S.ref=Nr(p,d,h),S.return=p,S):(S=ao(h.type,h.key,h.props,null,p.mode,S),S.ref=Nr(p,d,h),S.return=p,S)}function u(p,d,h,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Sa(h,p.mode,S),d.return=p,d):(d=i(d,h.children||[]),d.return=p,d)}function c(p,d,h,S,P){return d===null||d.tag!==7?(d=An(h,p.mode,S,P),d.return=p,d):(d=i(d,h),d.return=p,d)}function f(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=xa(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ai:return h=ao(d.type,d.key,d.props,null,p.mode,h),h.ref=Nr(p,null,d),h.return=p,h;case Wn:return d=Sa(d,p.mode,h),d.return=p,d;case en:var S=d._init;return f(p,S(d._payload),h)}if(Fr(d)||_r(d))return d=An(d,p.mode,h,null),d.return=p,d;Bi(p,d)}return null}function m(p,d,h,S){var P=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return P!==null?null:a(p,d,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ai:return h.key===P?s(p,d,h,S):null;case Wn:return h.key===P?u(p,d,h,S):null;case en:return P=h._init,m(p,d,P(h._payload),S)}if(Fr(h)||_r(h))return P!==null?null:c(p,d,h,S,null);Bi(p,h)}return null}function v(p,d,h,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(h)||null,a(d,p,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ai:return p=p.get(S.key===null?h:S.key)||null,s(d,p,S,P);case Wn:return p=p.get(S.key===null?h:S.key)||null,u(d,p,S,P);case en:var A=S._init;return v(p,d,h,A(S._payload),P)}if(Fr(S)||_r(S))return p=p.get(h)||null,c(d,p,S,P,null);Bi(d,S)}return null}function g(p,d,h,S){for(var P=null,A=null,T=d,R=d=0,B=null;T!==null&&R<h.length;R++){T.index>R?(B=T,T=null):B=T.sibling;var j=m(p,T,h[R],S);if(j===null){T===null&&(T=B);break}e&&T&&j.alternate===null&&t(p,T),d=o(j,d,R),A===null?P=j:A.sibling=j,A=j,T=B}if(R===h.length)return n(p,T),me&&En(p,R),P;if(T===null){for(;R<h.length;R++)T=f(p,h[R],S),T!==null&&(d=o(T,d,R),A===null?P=T:A.sibling=T,A=T);return me&&En(p,R),P}for(T=r(p,T);R<h.length;R++)B=v(T,p,R,h[R],S),B!==null&&(e&&B.alternate!==null&&T.delete(B.key===null?R:B.key),d=o(B,d,R),A===null?P=B:A.sibling=B,A=B);return e&&T.forEach(function(Q){return t(p,Q)}),me&&En(p,R),P}function w(p,d,h,S){var P=_r(h);if(typeof P!="function")throw Error(N(150));if(h=P.call(h),h==null)throw Error(N(151));for(var A=P=null,T=d,R=d=0,B=null,j=h.next();T!==null&&!j.done;R++,j=h.next()){T.index>R?(B=T,T=null):B=T.sibling;var Q=m(p,T,j.value,S);if(Q===null){T===null&&(T=B);break}e&&T&&Q.alternate===null&&t(p,T),d=o(Q,d,R),A===null?P=Q:A.sibling=Q,A=Q,T=B}if(j.done)return n(p,T),me&&En(p,R),P;if(T===null){for(;!j.done;R++,j=h.next())j=f(p,j.value,S),j!==null&&(d=o(j,d,R),A===null?P=j:A.sibling=j,A=j);return me&&En(p,R),P}for(T=r(p,T);!j.done;R++,j=h.next())j=v(T,p,R,j.value,S),j!==null&&(e&&j.alternate!==null&&T.delete(j.key===null?R:j.key),d=o(j,d,R),A===null?P=j:A.sibling=j,A=j);return e&&T.forEach(function(Y){return t(p,Y)}),me&&En(p,R),P}function _(p,d,h,S){if(typeof h=="object"&&h!==null&&h.type===Vn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ai:e:{for(var P=h.key,A=d;A!==null;){if(A.key===P){if(P=h.type,P===Vn){if(A.tag===7){n(p,A.sibling),d=i(A,h.props.children),d.return=p,p=d;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===en&&td(P)===A.type){n(p,A.sibling),d=i(A,h.props),d.ref=Nr(p,A,h),d.return=p,p=d;break e}n(p,A);break}else t(p,A);A=A.sibling}h.type===Vn?(d=An(h.props.children,p.mode,S,h.key),d.return=p,p=d):(S=ao(h.type,h.key,h.props,null,p.mode,S),S.ref=Nr(p,d,h),S.return=p,p=S)}return l(p);case Wn:e:{for(A=h.key;d!==null;){if(d.key===A)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(p,d.sibling),d=i(d,h.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Sa(h,p.mode,S),d.return=p,p=d}return l(p);case en:return A=h._init,_(p,d,A(h._payload),S)}if(Fr(h))return g(p,d,h,S);if(_r(h))return w(p,d,h,S);Bi(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,h),d.return=p,p=d):(n(p,d),d=xa(h,p.mode,S),d.return=p,p=d),l(p)):n(p,d)}return _}var fr=Cp(!0),Ep=Cp(!1),Ei={},Lt=xn(Ei),fi=xn(Ei),pi=xn(Ei);function Rn(e){if(e===Ei)throw Error(N(174));return e}function Cu(e,t){switch(se(pi,t),se(fi,e),se(Lt,Ei),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qa(t,e)}fe(Lt),se(Lt,t)}function pr(){fe(Lt),fe(fi),fe(pi)}function Pp(e){Rn(pi.current);var t=Rn(Lt.current),n=qa(t,e.type);t!==n&&(se(fi,e),se(Lt,n))}function Eu(e){fi.current===e&&(fe(Lt),fe(fi))}var he=xn(0);function No(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ma=[];function Pu(){for(var e=0;e<ma.length;e++)ma[e]._workInProgressVersionPrimary=null;ma.length=0}var no=Xt.ReactCurrentDispatcher,ha=Xt.ReactCurrentBatchConfig,zn=0,ge=null,Ce=null,Te=null,zo=!1,Gr=!1,mi=0,p1=0;function Me(){throw Error(N(321))}function Tu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function _u(e,t,n,r,i,o){if(zn=o,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,no.current=e===null||e.memoizedState===null?y1:v1,e=n(r,i),Gr){o=0;do{if(Gr=!1,mi=0,25<=o)throw Error(N(301));o+=1,Te=Ce=null,t.updateQueue=null,no.current=w1,e=n(r,i)}while(Gr)}if(no.current=Lo,t=Ce!==null&&Ce.next!==null,zn=0,Te=Ce=ge=null,zo=!1,t)throw Error(N(300));return e}function Ru(){var e=mi!==0;return mi=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?ge.memoizedState=Te=e:Te=Te.next=e,Te}function yt(){if(Ce===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Te===null?ge.memoizedState:Te.next;if(t!==null)Te=t,Ce=e;else{if(e===null)throw Error(N(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Te===null?ge.memoizedState=Te=e:Te=Te.next=e}return Te}function hi(e,t){return typeof t=="function"?t(e):t}function ga(e){var t=yt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=Ce,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var c=u.lane;if((zn&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=f,l=r):s=s.next=f,ge.lanes|=c,Ln|=c}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,_t(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ge.lanes|=o,Ln|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ya(e){var t=yt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);_t(o,t.memoizedState)||(Xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Tp(){}function _p(e,t){var n=ge,r=yt(),i=t(),o=!_t(r.memoizedState,i);if(o&&(r.memoizedState=i,Xe=!0),r=r.queue,Ou(Ap.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,gi(9,Op.bind(null,n,r,i,t),void 0,null),_e===null)throw Error(N(349));zn&30||Rp(n,t,i)}return i}function Rp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Op(e,t,n,r){t.value=n,t.getSnapshot=r,$p(t)&&Np(e)}function Ap(e,t,n){return n(function(){$p(t)&&Np(e)})}function $p(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function Np(e){var t=Kt(e,1);t!==null&&Tt(t,e,1,-1)}function nd(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hi,lastRenderedState:e},t.queue=e,e=e.dispatch=g1.bind(null,ge,e),[t.memoizedState,e]}function gi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zp(){return yt().memoizedState}function ro(e,t,n,r){var i=At();ge.flags|=e,i.memoizedState=gi(1|t,n,void 0,r===void 0?null:r)}function nl(e,t,n,r){var i=yt();r=r===void 0?null:r;var o=void 0;if(Ce!==null){var l=Ce.memoizedState;if(o=l.destroy,r!==null&&Tu(r,l.deps)){i.memoizedState=gi(t,n,o,r);return}}ge.flags|=e,i.memoizedState=gi(1|t,n,o,r)}function rd(e,t){return ro(8390656,8,e,t)}function Ou(e,t){return nl(2048,8,e,t)}function Lp(e,t){return nl(4,2,e,t)}function Ip(e,t){return nl(4,4,e,t)}function Dp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jp(e,t,n){return n=n!=null?n.concat([e]):null,nl(4,4,Dp.bind(null,t,e),n)}function Au(){}function Mp(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fp(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Up(e,t,n){return zn&21?(_t(n,t)||(n=Hf(),ge.lanes|=n,Ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=n)}function m1(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=ha.transition;ha.transition={};try{e(!1),t()}finally{re=n,ha.transition=r}}function Bp(){return yt().memoizedState}function h1(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bp(e))Hp(t,n);else if(n=wp(e,t,n,r),n!==null){var i=He();Tt(n,e,r,i),Wp(n,t,r)}}function g1(e,t,n){var r=pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bp(e))Hp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,_t(a,l)){var s=t.interleaved;s===null?(i.next=i,Su(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=wp(e,t,i,r),n!==null&&(i=He(),Tt(n,e,r,i),Wp(n,t,r))}}function bp(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function Hp(e,t){Gr=zo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,au(e,n)}}var Lo={readContext:gt,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},y1={readContext:gt,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:rd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ro(4194308,4,Dp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return ro(4,2,e,t)},useMemo:function(e,t){var n=At();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=At();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=h1.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:nd,useDebugValue:Au,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=nd(!1),t=e[0];return e=m1.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,i=At();if(me){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),_e===null)throw Error(N(349));zn&30||Rp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,rd(Ap.bind(null,r,o,e),[e]),r.flags|=2048,gi(9,Op.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=At(),t=_e.identifierPrefix;if(me){var n=Bt,r=Ut;n=(r&~(1<<32-Pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=mi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=p1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},v1={readContext:gt,useCallback:Mp,useContext:gt,useEffect:Ou,useImperativeHandle:jp,useInsertionEffect:Lp,useLayoutEffect:Ip,useMemo:Fp,useReducer:ga,useRef:zp,useState:function(){return ga(hi)},useDebugValue:Au,useDeferredValue:function(e){var t=yt();return Up(t,Ce.memoizedState,e)},useTransition:function(){var e=ga(hi)[0],t=yt().memoizedState;return[e,t]},useMutableSource:Tp,useSyncExternalStore:_p,useId:Bp,unstable_isNewReconciler:!1},w1={readContext:gt,useCallback:Mp,useContext:gt,useEffect:Ou,useImperativeHandle:jp,useInsertionEffect:Lp,useLayoutEffect:Ip,useMemo:Fp,useReducer:ya,useRef:zp,useState:function(){return ya(hi)},useDebugValue:Au,useDeferredValue:function(e){var t=yt();return Ce===null?t.memoizedState=e:Up(t,Ce.memoizedState,e)},useTransition:function(){var e=ya(hi)[0],t=yt().memoizedState;return[e,t]},useMutableSource:Tp,useSyncExternalStore:_p,useId:Bp,unstable_isNewReconciler:!1};function mr(e,t){try{var n="",r=t;do n+=Kh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function va(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ss(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var x1=typeof WeakMap=="function"?WeakMap:Map;function Vp(e,t,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Do||(Do=!0,$s=r),Ss(e,t)},n}function Qp(e,t,n){n=Ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ss(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ss(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function id(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new x1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=L1.bind(null,e,t,n),t.then(e,e))}function od(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ld(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ht(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e)}var S1=Xt.ReactCurrentOwner,Xe=!1;function be(e,t,n,r){t.child=e===null?Ep(t,null,n,r):fr(t,e.child,n,r)}function ad(e,t,n,r,i){n=n.render;var o=t.ref;return ar(t,i),r=_u(e,t,n,r,o,i),n=Ru(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gt(e,t,i)):(me&&n&&hu(t),t.flags|=1,be(e,t,r,i),t.child)}function sd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Mu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Kp(e,t,o,r,i)):(e=ao(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:si,n(l,r)&&e.ref===t.ref)return Gt(e,t,i)}return t.flags|=1,e=mn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Kp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(si(o,r)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,Gt(e,t,i)}return ks(e,t,n,r,i)}function Gp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(tr,tt),tt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(tr,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,se(tr,tt),tt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,se(tr,tt),tt|=r;return be(e,t,i,n),t.child}function Yp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ks(e,t,n,r,i){var o=qe(n)?$n:Be.current;return o=cr(t,o),ar(t,i),n=_u(e,t,n,r,o,i),r=Ru(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gt(e,t,i)):(me&&r&&hu(t),t.flags|=1,be(e,t,n,i),t.child)}function ud(e,t,n,r,i){if(qe(n)){var o=!0;To(t)}else o=!1;if(ar(t,i),t.stateNode===null)io(e,t),kp(t,n,r),xs(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=gt(u):(u=qe(n)?$n:Be.current,u=cr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&ed(t,l,r,u),tn=!1;var m=t.memoizedState;l.state=m,$o(t,r,l,i),s=t.memoizedState,a!==r||m!==s||Je.current||tn?(typeof c=="function"&&(ws(t,n,c,r),s=t.memoizedState),(a=tn||Zc(t,n,a,r,m,s,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,xp(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:St(t.type,a),l.props=u,f=t.pendingProps,m=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=gt(s):(s=qe(n)?$n:Be.current,s=cr(t,s));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||m!==s)&&ed(t,l,r,s),tn=!1,m=t.memoizedState,l.state=m,$o(t,r,l,i);var g=t.memoizedState;a!==f||m!==g||Je.current||tn?(typeof v=="function"&&(ws(t,n,v,r),g=t.memoizedState),(u=tn||Zc(t,n,u,r,m,g,s)||!1)?(c||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Cs(e,t,n,r,o,i)}function Cs(e,t,n,r,i,o){Yp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Gc(t,n,!1),Gt(e,t,o);r=t.stateNode,S1.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=fr(t,e.child,null,o),t.child=fr(t,null,a,o)):be(e,t,a,o),t.memoizedState=r.state,i&&Gc(t,n,!0),t.child}function Xp(e){var t=e.stateNode;t.pendingContext?Kc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kc(e,t.context,!1),Cu(e,t.containerInfo)}function cd(e,t,n,r,i){return dr(),yu(i),t.flags|=256,be(e,t,n,r),t.child}var Es={dehydrated:null,treeContext:null,retryLane:0};function Ps(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jp(e,t,n){var r=t.pendingProps,i=he.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),se(he,i&1),e===null)return ys(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ol(l,r,0,null),e=An(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ps(n),t.memoizedState=Es,e):$u(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return k1(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=mn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=mn(a,o):(o=An(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Ps(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Es,r}return o=e.child,e=o.sibling,r=mn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $u(e,t){return t=ol({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bi(e,t,n,r){return r!==null&&yu(r),fr(t,e.child,null,n),e=$u(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function k1(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=va(Error(N(422))),bi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ol({mode:"visible",children:r.children},i,0,null),o=An(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&fr(t,e.child,null,l),t.child.memoizedState=Ps(l),t.memoizedState=Es,o);if(!(t.mode&1))return bi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(N(419)),r=va(o,r,void 0),bi(e,t,l,r)}if(a=(l&e.childLanes)!==0,Xe||a){if(r=_e,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Kt(e,i),Tt(r,e,i,-1))}return ju(),r=va(Error(N(421))),bi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=I1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,nt=cn(i.nextSibling),it=t,me=!0,Et=null,e!==null&&(dt[ft++]=Ut,dt[ft++]=Bt,dt[ft++]=Nn,Ut=e.id,Bt=e.overflow,Nn=t),t=$u(t,r.children),t.flags|=4096,t)}function dd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),vs(e.return,t,n)}function wa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function qp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(be(e,t,r.children,n),r=he.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dd(e,n,t);else if(e.tag===19)dd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(he,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&No(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),wa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&No(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}wa(t,!0,n,null,o);break;case"together":wa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function io(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function C1(e,t,n){switch(t.tag){case 3:Xp(t),dr();break;case 5:Pp(t);break;case 1:qe(t.type)&&To(t);break;case 4:Cu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;se(Oo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(he,he.current&1),t.flags|=128,null):n&t.child.childLanes?Jp(e,t,n):(se(he,he.current&1),e=Gt(e,t,n),e!==null?e.sibling:null);se(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return qp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,Gp(e,t,n)}return Gt(e,t,n)}var Zp,Ts,em,tm;Zp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ts=function(){};em=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Rn(Lt.current);var o=null;switch(n){case"input":i=Ga(e,i),r=Ga(e,r),o=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),o=[];break;case"textarea":i=Ja(e,i),r=Ja(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Eo)}Za(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ti.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ti.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&de("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};tm=function(e,t,n,r){n!==r&&(t.flags|=4)};function zr(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function E1(e,t,n){var r=t.pendingProps;switch(gu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return qe(t.type)&&Po(),Fe(t),null;case 3:return r=t.stateNode,pr(),fe(Je),fe(Be),Pu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Et!==null&&(Ls(Et),Et=null))),Ts(e,t),Fe(t),null;case 5:Eu(t);var i=Rn(pi.current);if(n=t.type,e!==null&&t.stateNode!=null)em(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Fe(t),null}if(e=Rn(Lt.current),Ui(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[$t]=t,r[di]=o,e=(t.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Br.length;i++)de(Br[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":xc(r,o),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},de("invalid",r);break;case"textarea":kc(r,o),de("invalid",r)}Za(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Fi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Fi(r.textContent,a,e),i=["children",""+a]):ti.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&de("scroll",r)}switch(n){case"input":$i(r),Sc(r,o,!0);break;case"textarea":$i(r),Cc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Eo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[$t]=t,e[di]=r,Zp(e,t,!1,!1),t.stateNode=e;e:{switch(l=es(n,r),n){case"dialog":de("cancel",e),de("close",e),i=r;break;case"iframe":case"object":case"embed":de("load",e),i=r;break;case"video":case"audio":for(i=0;i<Br.length;i++)de(Br[i],e);i=r;break;case"source":de("error",e),i=r;break;case"img":case"image":case"link":de("error",e),de("load",e),i=r;break;case"details":de("toggle",e),i=r;break;case"input":xc(e,r),i=Ga(e,r),de("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),de("invalid",e);break;case"textarea":kc(e,r),i=Ja(e,r),de("invalid",e);break;default:i=r}Za(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?$f(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Of(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ni(e,s):typeof s=="number"&&ni(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ti.hasOwnProperty(o)?s!=null&&o==="onScroll"&&de("scroll",e):s!=null&&tu(e,o,s,l))}switch(n){case"input":$i(e),Sc(e,r,!1);break;case"textarea":$i(e),Cc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?rr(e,!!r.multiple,o,!1):r.defaultValue!=null&&rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)tm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Rn(pi.current),Rn(Lt.current),Ui(t)){if(r=t.stateNode,n=t.memoizedProps,r[$t]=t,(o=r.nodeValue!==n)&&(e=it,e!==null))switch(e.tag){case 3:Fi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=t,t.stateNode=r}return Fe(t),null;case 13:if(fe(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&nt!==null&&t.mode&1&&!(t.flags&128))vp(),dr(),t.flags|=98560,o=!1;else if(o=Ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[$t]=t}else dr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fe(t),o=!1}else Et!==null&&(Ls(Et),Et=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||he.current&1?Ee===0&&(Ee=3):ju())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return pr(),Ts(e,t),e===null&&ui(t.stateNode.containerInfo),Fe(t),null;case 10:return xu(t.type._context),Fe(t),null;case 17:return qe(t.type)&&Po(),Fe(t),null;case 19:if(fe(he),o=t.memoizedState,o===null)return Fe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)zr(o,!1);else{if(Ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=No(e),l!==null){for(t.flags|=128,zr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(he,he.current&1|2),t.child}e=e.sibling}o.tail!==null&&xe()>hr&&(t.flags|=128,r=!0,zr(o,!1),t.lanes=4194304)}else{if(!r)if(e=No(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!me)return Fe(t),null}else 2*xe()-o.renderingStartTime>hr&&n!==1073741824&&(t.flags|=128,r=!0,zr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=xe(),t.sibling=null,n=he.current,se(he,r?n&1|2:n&1),t):(Fe(t),null);case 22:case 23:return Du(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?tt&1073741824&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function P1(e,t){switch(gu(t),t.tag){case 1:return qe(t.type)&&Po(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pr(),fe(Je),fe(Be),Pu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Eu(t),null;case 13:if(fe(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(he),null;case 4:return pr(),null;case 10:return xu(t.type._context),null;case 22:case 23:return Du(),null;case 24:return null;default:return null}}var Hi=!1,Ue=!1,T1=typeof WeakSet=="function"?WeakSet:Set,M=null;function er(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(e,t,r)}else n.current=null}function _s(e,t,n){try{n()}catch(r){ve(e,t,r)}}var fd=!1;function _1(e,t){if(cs=So,e=op(),mu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,c=0,f=e,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=l+i),f!==o||r!==0&&f.nodeType!==3||(s=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===e)break t;if(m===n&&++u===i&&(a=l),m===o&&++c===r&&(s=l),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ds={focusedElem:e,selectionRange:n},So=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var w=g.memoizedProps,_=g.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:St(t.type,w),_);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(S){ve(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return g=fd,fd=!1,g}function Yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&_s(t,n,o)}i=i.next}while(i!==r)}}function rl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nm(e){var t=e.alternate;t!==null&&(e.alternate=null,nm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[di],delete t[ms],delete t[u1],delete t[c1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rm(e){return e.tag===5||e.tag===3||e.tag===4}function pd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Os(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Eo));else if(r!==4&&(e=e.child,e!==null))for(Os(e,t,n),e=e.sibling;e!==null;)Os(e,t,n),e=e.sibling}function As(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(As(e,t,n),e=e.sibling;e!==null;)As(e,t,n),e=e.sibling}var ze=null,Ct=!1;function qt(e,t,n){for(n=n.child;n!==null;)im(e,t,n),n=n.sibling}function im(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Yo,n)}catch{}switch(n.tag){case 5:Ue||er(n,t);case 6:var r=ze,i=Ct;ze=null,qt(e,t,n),ze=r,Ct=i,ze!==null&&(Ct?(e=ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(Ct?(e=ze,n=n.stateNode,e.nodeType===8?fa(e.parentNode,n):e.nodeType===1&&fa(e,n),li(e)):fa(ze,n.stateNode));break;case 4:r=ze,i=Ct,ze=n.stateNode.containerInfo,Ct=!0,qt(e,t,n),ze=r,Ct=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&_s(n,t,l),i=i.next}while(i!==r)}qt(e,t,n);break;case 1:if(!Ue&&(er(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ve(n,t,a)}qt(e,t,n);break;case 21:qt(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,qt(e,t,n),Ue=r):qt(e,t,n);break;default:qt(e,t,n)}}function md(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new T1),t.forEach(function(r){var i=D1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ze=a.stateNode,Ct=!1;break e;case 3:ze=a.stateNode.containerInfo,Ct=!0;break e;case 4:ze=a.stateNode.containerInfo,Ct=!0;break e}a=a.return}if(ze===null)throw Error(N(160));im(o,l,i),ze=null,Ct=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){ve(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)om(t,e),t=t.sibling}function om(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),Rt(e),r&4){try{Yr(3,e,e.return),rl(3,e)}catch(w){ve(e,e.return,w)}try{Yr(5,e,e.return)}catch(w){ve(e,e.return,w)}}break;case 1:xt(t,e),Rt(e),r&512&&n!==null&&er(n,n.return);break;case 5:if(xt(t,e),Rt(e),r&512&&n!==null&&er(n,n.return),e.flags&32){var i=e.stateNode;try{ni(i,"")}catch(w){ve(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Tf(i,o),es(a,l);var u=es(a,o);for(l=0;l<s.length;l+=2){var c=s[l],f=s[l+1];c==="style"?$f(i,f):c==="dangerouslySetInnerHTML"?Of(i,f):c==="children"?ni(i,f):tu(i,c,f,u)}switch(a){case"input":Ya(i,o);break;case"textarea":_f(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?rr(i,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?rr(i,!!o.multiple,o.defaultValue,!0):rr(i,!!o.multiple,o.multiple?[]:"",!1))}i[di]=o}catch(w){ve(e,e.return,w)}}break;case 6:if(xt(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){ve(e,e.return,w)}}break;case 3:if(xt(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{li(t.containerInfo)}catch(w){ve(e,e.return,w)}break;case 4:xt(t,e),Rt(e);break;case 13:xt(t,e),Rt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Lu=xe())),r&4&&md(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(u=Ue)||c,xt(t,e),Ue=u):xt(t,e),Rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(M=e,c=e.child;c!==null;){for(f=M=c;M!==null;){switch(m=M,v=m.child,m.tag){case 0:case 11:case 14:case 15:Yr(4,m,m.return);break;case 1:er(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(w){ve(r,n,w)}}break;case 5:er(m,m.return);break;case 22:if(m.memoizedState!==null){gd(f);continue}}v!==null?(v.return=m,M=v):gd(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,s=f.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Af("display",l))}catch(w){ve(e,e.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){ve(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:xt(t,e),Rt(e),r&4&&md(e);break;case 21:break;default:xt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rm(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ni(i,""),r.flags&=-33);var o=pd(e);As(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=pd(e);Os(e,a,l);break;default:throw Error(N(161))}}catch(s){ve(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function R1(e,t,n){M=e,lm(e)}function lm(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Hi;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Ue;a=Hi;var u=Ue;if(Hi=l,(Ue=s)&&!u)for(M=i;M!==null;)l=M,s=l.child,l.tag===22&&l.memoizedState!==null?yd(i):s!==null?(s.return=l,M=s):yd(i);for(;o!==null;)M=o,lm(o),o=o.sibling;M=i,Hi=a,Ue=u}hd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,M=o):hd(e)}}function hd(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||rl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&qc(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&li(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Ue||t.flags&512&&Rs(t)}catch(m){ve(t,t.return,m)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function gd(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function yd(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(s){ve(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ve(t,i,s)}}var o=t.return;try{Rs(t)}catch(s){ve(t,o,s)}break;case 5:var l=t.return;try{Rs(t)}catch(s){ve(t,l,s)}}}catch(s){ve(t,t.return,s)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var O1=Math.ceil,Io=Xt.ReactCurrentDispatcher,Nu=Xt.ReactCurrentOwner,mt=Xt.ReactCurrentBatchConfig,J=0,_e=null,Se=null,Le=0,tt=0,tr=xn(0),Ee=0,yi=null,Ln=0,il=0,zu=0,Xr=null,Ye=null,Lu=0,hr=1/0,Mt=null,Do=!1,$s=null,fn=null,Wi=!1,ln=null,jo=0,Jr=0,Ns=null,oo=-1,lo=0;function He(){return J&6?xe():oo!==-1?oo:oo=xe()}function pn(e){return e.mode&1?J&2&&Le!==0?Le&-Le:f1.transition!==null?(lo===0&&(lo=Hf()),lo):(e=re,e!==0||(e=window.event,e=e===void 0?16:Xf(e.type)),e):1}function Tt(e,t,n,r){if(50<Jr)throw Jr=0,Ns=null,Error(N(185));Si(e,n,r),(!(J&2)||e!==_e)&&(e===_e&&(!(J&2)&&(il|=n),Ee===4&&rn(e,Le)),Ze(e,r),n===1&&J===0&&!(t.mode&1)&&(hr=xe()+500,el&&Sn()))}function Ze(e,t){var n=e.callbackNode;f0(e,t);var r=xo(e,e===_e?Le:0);if(r===0)n!==null&&Tc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Tc(n),t===1)e.tag===0?d1(vd.bind(null,e)):hp(vd.bind(null,e)),a1(function(){!(J&6)&&Sn()}),n=null;else{switch(Wf(r)){case 1:n=lu;break;case 4:n=Bf;break;case 16:n=wo;break;case 536870912:n=bf;break;default:n=wo}n=mm(n,am.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function am(e,t){if(oo=-1,lo=0,J&6)throw Error(N(327));var n=e.callbackNode;if(sr()&&e.callbackNode!==n)return null;var r=xo(e,e===_e?Le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Mo(e,r);else{t=r;var i=J;J|=2;var o=um();(_e!==e||Le!==t)&&(Mt=null,hr=xe()+500,On(e,t));do try{N1();break}catch(a){sm(e,a)}while(1);wu(),Io.current=o,J=i,Se!==null?t=0:(_e=null,Le=0,t=Ee)}if(t!==0){if(t===2&&(i=os(e),i!==0&&(r=i,t=zs(e,i))),t===1)throw n=yi,On(e,0),rn(e,r),Ze(e,xe()),n;if(t===6)rn(e,r);else{if(i=e.current.alternate,!(r&30)&&!A1(i)&&(t=Mo(e,r),t===2&&(o=os(e),o!==0&&(r=o,t=zs(e,o))),t===1))throw n=yi,On(e,0),rn(e,r),Ze(e,xe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Pn(e,Ye,Mt);break;case 3:if(rn(e,r),(r&130023424)===r&&(t=Lu+500-xe(),10<t)){if(xo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ps(Pn.bind(null,e,Ye,Mt),t);break}Pn(e,Ye,Mt);break;case 4:if(rn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Pt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*O1(r/1960))-r,10<r){e.timeoutHandle=ps(Pn.bind(null,e,Ye,Mt),r);break}Pn(e,Ye,Mt);break;case 5:Pn(e,Ye,Mt);break;default:throw Error(N(329))}}}return Ze(e,xe()),e.callbackNode===n?am.bind(null,e):null}function zs(e,t){var n=Xr;return e.current.memoizedState.isDehydrated&&(On(e,t).flags|=256),e=Mo(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&Ls(t)),e}function Ls(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function A1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!_t(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rn(e,t){for(t&=~zu,t&=~il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pt(t),r=1<<n;e[n]=-1,t&=~r}}function vd(e){if(J&6)throw Error(N(327));sr();var t=xo(e,0);if(!(t&1))return Ze(e,xe()),null;var n=Mo(e,t);if(e.tag!==0&&n===2){var r=os(e);r!==0&&(t=r,n=zs(e,r))}if(n===1)throw n=yi,On(e,0),rn(e,t),Ze(e,xe()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pn(e,Ye,Mt),Ze(e,xe()),null}function Iu(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(hr=xe()+500,el&&Sn())}}function In(e){ln!==null&&ln.tag===0&&!(J&6)&&sr();var t=J;J|=1;var n=mt.transition,r=re;try{if(mt.transition=null,re=1,e)return e()}finally{re=r,mt.transition=n,J=t,!(J&6)&&Sn()}}function Du(){tt=tr.current,fe(tr)}function On(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,l1(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(gu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Po();break;case 3:pr(),fe(Je),fe(Be),Pu();break;case 5:Eu(r);break;case 4:pr();break;case 13:fe(he);break;case 19:fe(he);break;case 10:xu(r.type._context);break;case 22:case 23:Du()}n=n.return}if(_e=e,Se=e=mn(e.current,null),Le=tt=t,Ee=0,yi=null,zu=il=Ln=0,Ye=Xr=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}_n=null}return e}function sm(e,t){do{var n=Se;try{if(wu(),no.current=Lo,zo){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zo=!1}if(zn=0,Te=Ce=ge=null,Gr=!1,mi=0,Nu.current=null,n===null||n.return===null){Ee=1,yi=t,Se=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Le,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=od(l);if(v!==null){v.flags&=-257,ld(v,l,a,o,t),v.mode&1&&id(o,u,t),t=v,s=u;var g=t.updateQueue;if(g===null){var w=new Set;w.add(s),t.updateQueue=w}else g.add(s);break e}else{if(!(t&1)){id(o,u,t),ju();break e}s=Error(N(426))}}else if(me&&a.mode&1){var _=od(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),ld(_,l,a,o,t),yu(mr(s,a));break e}}o=s=mr(s,a),Ee!==4&&(Ee=2),Xr===null?Xr=[o]:Xr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Vp(o,s,t);Jc(o,p);break e;case 1:a=s;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(fn===null||!fn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Qp(o,a,t);Jc(o,S);break e}}o=o.return}while(o!==null)}dm(n)}catch(P){t=P,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(1)}function um(){var e=Io.current;return Io.current=Lo,e===null?Lo:e}function ju(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),_e===null||!(Ln&268435455)&&!(il&268435455)||rn(_e,Le)}function Mo(e,t){var n=J;J|=2;var r=um();(_e!==e||Le!==t)&&(Mt=null,On(e,t));do try{$1();break}catch(i){sm(e,i)}while(1);if(wu(),J=n,Io.current=r,Se!==null)throw Error(N(261));return _e=null,Le=0,Ee}function $1(){for(;Se!==null;)cm(Se)}function N1(){for(;Se!==null&&!r0();)cm(Se)}function cm(e){var t=pm(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?dm(e):Se=t,Nu.current=null}function dm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=P1(n,t),n!==null){n.flags&=32767,Se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,Se=null;return}}else if(n=E1(n,t,tt),n!==null){Se=n;return}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);Ee===0&&(Ee=5)}function Pn(e,t,n){var r=re,i=mt.transition;try{mt.transition=null,re=1,z1(e,t,n,r)}finally{mt.transition=i,re=r}return null}function z1(e,t,n,r){do sr();while(ln!==null);if(J&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(p0(e,o),e===_e&&(Se=_e=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wi||(Wi=!0,mm(wo,function(){return sr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=mt.transition,mt.transition=null;var l=re;re=1;var a=J;J|=4,Nu.current=null,_1(e,n),om(n,e),Z0(ds),So=!!cs,ds=cs=null,e.current=n,R1(n),i0(),J=a,re=l,mt.transition=o}else e.current=n;if(Wi&&(Wi=!1,ln=e,jo=i),o=e.pendingLanes,o===0&&(fn=null),a0(n.stateNode),Ze(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Do)throw Do=!1,e=$s,$s=null,e;return jo&1&&e.tag!==0&&sr(),o=e.pendingLanes,o&1?e===Ns?Jr++:(Jr=0,Ns=e):Jr=0,Sn(),null}function sr(){if(ln!==null){var e=Wf(jo),t=mt.transition,n=re;try{if(mt.transition=null,re=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,jo=0,J&6)throw Error(N(331));var i=J;for(J|=4,M=e.current;M!==null;){var o=M,l=o.child;if(M.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:Yr(8,c,o)}var f=c.child;if(f!==null)f.return=c,M=f;else for(;M!==null;){c=M;var m=c.sibling,v=c.return;if(nm(c),c===u){M=null;break}if(m!==null){m.return=v,M=m;break}M=v}}}var g=o.alternate;if(g!==null){var w=g.child;if(w!==null){g.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}M=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,M=l;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Yr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,M=p;break e}M=o.return}}var d=e.current;for(M=d;M!==null;){l=M;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,M=h;else e:for(l=d;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rl(9,a)}}catch(P){ve(a,a.return,P)}if(a===l){M=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,M=S;break e}M=a.return}}if(J=i,Sn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Yo,e)}catch{}r=!0}return r}finally{re=n,mt.transition=t}}return!1}function wd(e,t,n){t=mr(n,t),t=Vp(e,t,1),e=dn(e,t,1),t=He(),e!==null&&(Si(e,1,t),Ze(e,t))}function ve(e,t,n){if(e.tag===3)wd(e,e,n);else for(;t!==null;){if(t.tag===3){wd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=mr(n,e),e=Qp(t,e,1),t=dn(t,e,1),e=He(),t!==null&&(Si(t,1,e),Ze(t,e));break}}t=t.return}}function L1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,_e===e&&(Le&n)===n&&(Ee===4||Ee===3&&(Le&130023424)===Le&&500>xe()-Lu?On(e,0):zu|=n),Ze(e,t)}function fm(e,t){t===0&&(e.mode&1?(t=Li,Li<<=1,!(Li&130023424)&&(Li=4194304)):t=1);var n=He();e=Kt(e,t),e!==null&&(Si(e,t,n),Ze(e,n))}function I1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fm(e,n)}function D1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),fm(e,n)}var pm;pm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)Xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Xe=!1,C1(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,me&&t.flags&1048576&&gp(t,Ro,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;io(e,t),e=t.pendingProps;var i=cr(t,Be.current);ar(t,n),i=_u(null,t,r,e,i,n);var o=Ru();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(o=!0,To(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ku(t),i.updater=tl,t.stateNode=i,i._reactInternals=t,xs(t,r,e,n),t=Cs(null,t,r,!0,o,n)):(t.tag=0,me&&o&&hu(t),be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(io(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=M1(r),e=St(r,e),i){case 0:t=ks(null,t,r,e,n);break e;case 1:t=ud(null,t,r,e,n);break e;case 11:t=ad(null,t,r,e,n);break e;case 14:t=sd(null,t,r,St(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),ks(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),ud(e,t,r,i,n);case 3:e:{if(Xp(t),e===null)throw Error(N(387));r=t.pendingProps,o=t.memoizedState,i=o.element,xp(e,t),$o(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=mr(Error(N(423)),t),t=cd(e,t,r,n,i);break e}else if(r!==i){i=mr(Error(N(424)),t),t=cd(e,t,r,n,i);break e}else for(nt=cn(t.stateNode.containerInfo.firstChild),it=t,me=!0,Et=null,n=Ep(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dr(),r===i){t=Gt(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return Pp(t),e===null&&ys(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,fs(r,i)?l=null:o!==null&&fs(r,o)&&(t.flags|=32),Yp(e,t),be(e,t,l,n),t.child;case 6:return e===null&&ys(t),null;case 13:return Jp(e,t,n);case 4:return Cu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fr(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),ad(e,t,r,i,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,se(Oo,r._currentValue),r._currentValue=l,o!==null)if(_t(o.value,l)){if(o.children===i.children&&!Je.current){t=Gt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ht(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),vs(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(N(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),vs(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ar(t,n),i=gt(i),r=r(i),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,i=St(r,t.pendingProps),i=St(r.type,i),sd(e,t,r,i,n);case 15:return Kp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),io(e,t),t.tag=1,qe(r)?(e=!0,To(t)):e=!1,ar(t,n),kp(t,r,i),xs(t,r,i,n),Cs(null,t,r,!0,e,n);case 19:return qp(e,t,n);case 22:return Gp(e,t,n)}throw Error(N(156,t.tag))};function mm(e,t){return Uf(e,t)}function j1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,r){return new j1(e,t,n,r)}function Mu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function M1(e){if(typeof e=="function")return Mu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ru)return 11;if(e===iu)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ao(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Mu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Vn:return An(n.children,i,o,t);case nu:l=8,i|=8;break;case Wa:return e=pt(12,n,t,i|2),e.elementType=Wa,e.lanes=o,e;case Va:return e=pt(13,n,t,i),e.elementType=Va,e.lanes=o,e;case Qa:return e=pt(19,n,t,i),e.elementType=Qa,e.lanes=o,e;case Cf:return ol(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sf:l=10;break e;case kf:l=9;break e;case ru:l=11;break e;case iu:l=14;break e;case en:l=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=pt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function An(e,t,n,r){return e=pt(7,e,r,t),e.lanes=n,e}function ol(e,t,n,r){return e=pt(22,e,r,t),e.elementType=Cf,e.lanes=n,e.stateNode={isHidden:!1},e}function xa(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function Sa(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function F1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ta(0),this.expirationTimes=ta(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ta(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fu(e,t,n,r,i,o,l,a,s){return e=new F1(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=pt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ku(o),e}function U1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hm(e){if(!e)return vn;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(qe(n))return mp(e,n,t)}return t}function gm(e,t,n,r,i,o,l,a,s){return e=Fu(n,r,!0,e,i,o,l,a,s),e.context=hm(null),n=e.current,r=He(),i=pn(n),o=Ht(r,i),o.callback=t??null,dn(n,o,i),e.current.lanes=i,Si(e,i,r),Ze(e,r),e}function ll(e,t,n,r){var i=t.current,o=He(),l=pn(i);return n=hm(n),t.context===null?t.context=n:t.pendingContext=n,t=Ht(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dn(i,t,l),e!==null&&(Tt(e,i,l,o),to(e,i,l)),l}function Fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Uu(e,t){xd(e,t),(e=e.alternate)&&xd(e,t)}function B1(){return null}var ym=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bu(e){this._internalRoot=e}al.prototype.render=Bu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));ll(e,t,null,null)};al.prototype.unmount=Bu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;In(function(){ll(null,e,null,null)}),t[Qt]=null}};function al(e){this._internalRoot=e}al.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nn.length&&t!==0&&t<nn[n].priority;n++);nn.splice(n,0,e),n===0&&Yf(e)}};function bu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function sl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sd(){}function b1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Fo(l);o.call(u)}}var l=gm(t,r,e,0,null,!1,!1,"",Sd);return e._reactRootContainer=l,e[Qt]=l.current,ui(e.nodeType===8?e.parentNode:e),In(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Fo(s);a.call(u)}}var s=Fu(e,0,!1,null,null,!1,!1,"",Sd);return e._reactRootContainer=s,e[Qt]=s.current,ui(e.nodeType===8?e.parentNode:e),In(function(){ll(t,s,n,r)}),s}function ul(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=Fo(l);a.call(s)}}ll(t,l,e,i)}else l=b1(n,t,e,i,r);return Fo(l)}Vf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ur(t.pendingLanes);n!==0&&(au(t,n|1),Ze(t,xe()),!(J&6)&&(hr=xe()+500,Sn()))}break;case 13:In(function(){var r=Kt(e,1);if(r!==null){var i=He();Tt(r,e,1,i)}}),Uu(e,1)}};su=function(e){if(e.tag===13){var t=Kt(e,134217728);if(t!==null){var n=He();Tt(t,e,134217728,n)}Uu(e,134217728)}};Qf=function(e){if(e.tag===13){var t=pn(e),n=Kt(e,t);if(n!==null){var r=He();Tt(n,e,t,r)}Uu(e,t)}};Kf=function(){return re};Gf=function(e,t){var n=re;try{return re=e,t()}finally{re=n}};ns=function(e,t,n){switch(t){case"input":if(Ya(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Zo(r);if(!i)throw Error(N(90));Pf(r),Ya(r,i)}}}break;case"textarea":_f(e,n);break;case"select":t=n.value,t!=null&&rr(e,!!n.multiple,t,!1)}};Lf=Iu;If=In;var H1={usingClientEntryPoint:!1,Events:[Ci,Yn,Zo,Nf,zf,Iu]},Lr={findFiberByHostInstance:Tn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},W1={bundleType:Lr.bundleType,version:Lr.version,rendererPackageName:Lr.rendererPackageName,rendererConfig:Lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mf(e),e===null?null:e.stateNode},findFiberByHostInstance:Lr.findFiberByHostInstance||B1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vi.isDisabled&&Vi.supportsFiber)try{Yo=Vi.inject(W1),zt=Vi}catch{}}lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H1;lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bu(t))throw Error(N(200));return U1(e,t,null,n)};lt.createRoot=function(e,t){if(!bu(e))throw Error(N(299));var n=!1,r="",i=ym;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Fu(e,1,!1,null,null,n,!1,r,i),e[Qt]=t.current,ui(e.nodeType===8?e.parentNode:e),new Bu(t)};lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Mf(t),e=e===null?null:e.stateNode,e};lt.flushSync=function(e){return In(e)};lt.hydrate=function(e,t,n){if(!sl(t))throw Error(N(200));return ul(null,e,t,!0,n)};lt.hydrateRoot=function(e,t,n){if(!bu(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=ym;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=gm(t,null,e,1,n??null,i,!1,o,l),e[Qt]=t.current,ui(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new al(t)};lt.render=function(e,t,n){if(!sl(t))throw Error(N(200));return ul(null,e,t,!1,n)};lt.unmountComponentAtNode=function(e){if(!sl(e))throw Error(N(40));return e._reactRootContainer?(In(function(){ul(null,null,e,!1,function(){e._reactRootContainer=null,e[Qt]=null})}),!0):!1};lt.unstable_batchedUpdates=Iu;lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!sl(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return ul(e,t,n,!1,r)};lt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=lt})(Bh);var kd=Ba;Ua.createRoot=kd.createRoot,Ua.hydrateRoot=kd.hydrateRoot;var Uo={},V1={get exports(){return Uo},set exports(e){Uo=e}},ie={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hu=Symbol.for("react.element"),Wu=Symbol.for("react.portal"),cl=Symbol.for("react.fragment"),dl=Symbol.for("react.strict_mode"),fl=Symbol.for("react.profiler"),pl=Symbol.for("react.provider"),ml=Symbol.for("react.context"),Q1=Symbol.for("react.server_context"),hl=Symbol.for("react.forward_ref"),gl=Symbol.for("react.suspense"),yl=Symbol.for("react.suspense_list"),vl=Symbol.for("react.memo"),wl=Symbol.for("react.lazy"),K1=Symbol.for("react.offscreen"),vm;vm=Symbol.for("react.module.reference");function vt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Hu:switch(e=e.type,e){case cl:case fl:case dl:case gl:case yl:return e;default:switch(e=e&&e.$$typeof,e){case Q1:case ml:case hl:case wl:case vl:case pl:return e;default:return t}}case Wu:return t}}}ie.ContextConsumer=ml;ie.ContextProvider=pl;ie.Element=Hu;ie.ForwardRef=hl;ie.Fragment=cl;ie.Lazy=wl;ie.Memo=vl;ie.Portal=Wu;ie.Profiler=fl;ie.StrictMode=dl;ie.Suspense=gl;ie.SuspenseList=yl;ie.isAsyncMode=function(){return!1};ie.isConcurrentMode=function(){return!1};ie.isContextConsumer=function(e){return vt(e)===ml};ie.isContextProvider=function(e){return vt(e)===pl};ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hu};ie.isForwardRef=function(e){return vt(e)===hl};ie.isFragment=function(e){return vt(e)===cl};ie.isLazy=function(e){return vt(e)===wl};ie.isMemo=function(e){return vt(e)===vl};ie.isPortal=function(e){return vt(e)===Wu};ie.isProfiler=function(e){return vt(e)===fl};ie.isStrictMode=function(e){return vt(e)===dl};ie.isSuspense=function(e){return vt(e)===gl};ie.isSuspenseList=function(e){return vt(e)===yl};ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===cl||e===fl||e===dl||e===gl||e===yl||e===K1||typeof e=="object"&&e!==null&&(e.$$typeof===wl||e.$$typeof===vl||e.$$typeof===pl||e.$$typeof===ml||e.$$typeof===hl||e.$$typeof===vm||e.getModuleId!==void 0)};ie.typeOf=vt;(function(e){e.exports=ie})(V1);function G1(e){function t(E,$,D,U,x){for(var H=0,I=0,ce=0,ee=0,ne,K,Ae=0,Ke=0,Z,je=Z=ne=0,te=0,$e=0,Pr=0,Ne=0,Ri=D.length,Tr=Ri-1,wt,V="",we="",Gl="",Yl="",Jt;te<Ri;){if(K=D.charCodeAt(te),te===Tr&&I+ee+ce+H!==0&&(I!==0&&(K=I===47?10:47),ee=ce=H=0,Ri++,Tr++),I+ee+ce+H===0){if(te===Tr&&(0<$e&&(V=V.replace(m,"")),0<V.trim().length)){switch(K){case 32:case 9:case 59:case 13:case 10:break;default:V+=D.charAt(te)}K=59}switch(K){case 123:for(V=V.trim(),ne=V.charCodeAt(0),Z=1,Ne=++te;te<Ri;){switch(K=D.charCodeAt(te)){case 123:Z++;break;case 125:Z--;break;case 47:switch(K=D.charCodeAt(te+1)){case 42:case 47:e:{for(je=te+1;je<Tr;++je)switch(D.charCodeAt(je)){case 47:if(K===42&&D.charCodeAt(je-1)===42&&te+2!==je){te=je+1;break e}break;case 10:if(K===47){te=je+1;break e}}te=je}}break;case 91:K++;case 40:K++;case 34:case 39:for(;te++<Tr&&D.charCodeAt(te)!==K;);}if(Z===0)break;te++}switch(Z=D.substring(Ne,te),ne===0&&(ne=(V=V.replace(f,"").trim()).charCodeAt(0)),ne){case 64:switch(0<$e&&(V=V.replace(m,"")),K=V.charCodeAt(1),K){case 100:case 109:case 115:case 45:$e=$;break;default:$e=De}if(Z=t($,$e,Z,K,x+1),Ne=Z.length,0<z&&($e=n(De,V,Pr),Jt=a(3,Z,$e,$,ue,Y,Ne,K,x,U),V=$e.join(""),Jt!==void 0&&(Ne=(Z=Jt.trim()).length)===0&&(K=0,Z="")),0<Ne)switch(K){case 115:V=V.replace(A,l);case 100:case 109:case 45:Z=V+"{"+Z+"}";break;case 107:V=V.replace(d,"$1 $2"),Z=V+"{"+Z+"}",Z=q===1||q===2&&o("@"+Z,3)?"@-webkit-"+Z+"@"+Z:"@"+Z;break;default:Z=V+Z,U===112&&(Z=(we+=Z,""))}else Z="";break;default:Z=t($,n($,V,Pr),Z,U,x+1)}Gl+=Z,Z=Pr=$e=je=ne=0,V="",K=D.charCodeAt(++te);break;case 125:case 59:if(V=(0<$e?V.replace(m,""):V).trim(),1<(Ne=V.length))switch(je===0&&(ne=V.charCodeAt(0),ne===45||96<ne&&123>ne)&&(Ne=(V=V.replace(" ",":")).length),0<z&&(Jt=a(1,V,$,E,ue,Y,we.length,U,x,U))!==void 0&&(Ne=(V=Jt.trim()).length)===0&&(V="\0\0"),ne=V.charCodeAt(0),K=V.charCodeAt(1),ne){case 0:break;case 64:if(K===105||K===99){Yl+=V+D.charAt(te);break}default:V.charCodeAt(Ne-1)!==58&&(we+=i(V,ne,K,V.charCodeAt(2)))}Pr=$e=je=ne=0,V="",K=D.charCodeAt(++te)}}switch(K){case 13:case 10:I===47?I=0:1+ne===0&&U!==107&&0<V.length&&($e=1,V+="\0"),0<z*O&&a(0,V,$,E,ue,Y,we.length,U,x,U),Y=1,ue++;break;case 59:case 125:if(I+ee+ce+H===0){Y++;break}default:switch(Y++,wt=D.charAt(te),K){case 9:case 32:if(ee+H+I===0)switch(Ae){case 44:case 58:case 9:case 32:wt="";break;default:K!==32&&(wt=" ")}break;case 0:wt="\\0";break;case 12:wt="\\f";break;case 11:wt="\\v";break;case 38:ee+I+H===0&&($e=Pr=1,wt="\f"+wt);break;case 108:if(ee+I+H+ae===0&&0<je)switch(te-je){case 2:Ae===112&&D.charCodeAt(te-3)===58&&(ae=Ae);case 8:Ke===111&&(ae=Ke)}break;case 58:ee+I+H===0&&(je=te);break;case 44:I+ce+ee+H===0&&($e=1,wt+="\r");break;case 34:case 39:I===0&&(ee=ee===K?0:ee===0?K:ee);break;case 91:ee+I+ce===0&&H++;break;case 93:ee+I+ce===0&&H--;break;case 41:ee+I+H===0&&ce--;break;case 40:if(ee+I+H===0){if(ne===0)switch(2*Ae+3*Ke){case 533:break;default:ne=1}ce++}break;case 64:I+ce+ee+H+je+Z===0&&(Z=1);break;case 42:case 47:if(!(0<ee+H+ce))switch(I){case 0:switch(2*K+3*D.charCodeAt(te+1)){case 235:I=47;break;case 220:Ne=te,I=42}break;case 42:K===47&&Ae===42&&Ne+2!==te&&(D.charCodeAt(Ne+2)===33&&(we+=D.substring(Ne,te+1)),wt="",I=0)}}I===0&&(V+=wt)}Ke=Ae,Ae=K,te++}if(Ne=we.length,0<Ne){if($e=$,0<z&&(Jt=a(2,we,$e,E,ue,Y,Ne,U,x,U),Jt!==void 0&&(we=Jt).length===0))return Yl+we+Gl;if(we=$e.join(",")+"{"+we+"}",q*ae!==0){switch(q!==2||o(we,2)||(ae=0),ae){case 111:we=we.replace(S,":-moz-$1")+we;break;case 112:we=we.replace(h,"::-webkit-input-$1")+we.replace(h,"::-moz-$1")+we.replace(h,":-ms-input-$1")+we}ae=0}}return Yl+we+Gl}function n(E,$,D){var U=$.trim().split(_);$=U;var x=U.length,H=E.length;switch(H){case 0:case 1:var I=0;for(E=H===0?"":E[0]+" ";I<x;++I)$[I]=r(E,$[I],D).trim();break;default:var ce=I=0;for($=[];I<x;++I)for(var ee=0;ee<H;++ee)$[ce++]=r(E[ee]+" ",U[I],D).trim()}return $}function r(E,$,D){var U=$.charCodeAt(0);switch(33>U&&(U=($=$.trim()).charCodeAt(0)),U){case 38:return $.replace(p,"$1"+E.trim());case 58:return E.trim()+$.replace(p,"$1"+E.trim());default:if(0<1*D&&0<$.indexOf("\f"))return $.replace(p,(E.charCodeAt(0)===58?"":"$1")+E.trim())}return E+$}function i(E,$,D,U){var x=E+";",H=2*$+3*D+4*U;if(H===944){E=x.indexOf(":",9)+1;var I=x.substring(E,x.length-1).trim();return I=x.substring(0,E).trim()+I+";",q===1||q===2&&o(I,1)?"-webkit-"+I+I:I}if(q===0||q===2&&!o(x,1))return x;switch(H){case 1015:return x.charCodeAt(10)===97?"-webkit-"+x+x:x;case 951:return x.charCodeAt(3)===116?"-webkit-"+x+x:x;case 963:return x.charCodeAt(5)===110?"-webkit-"+x+x:x;case 1009:if(x.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+x+x;case 978:return"-webkit-"+x+"-moz-"+x+x;case 1019:case 983:return"-webkit-"+x+"-moz-"+x+"-ms-"+x+x;case 883:if(x.charCodeAt(8)===45)return"-webkit-"+x+x;if(0<x.indexOf("image-set(",11))return x.replace(Q,"$1-webkit-$2")+x;break;case 932:if(x.charCodeAt(4)===45)switch(x.charCodeAt(5)){case 103:return"-webkit-box-"+x.replace("-grow","")+"-webkit-"+x+"-ms-"+x.replace("grow","positive")+x;case 115:return"-webkit-"+x+"-ms-"+x.replace("shrink","negative")+x;case 98:return"-webkit-"+x+"-ms-"+x.replace("basis","preferred-size")+x}return"-webkit-"+x+"-ms-"+x+x;case 964:return"-webkit-"+x+"-ms-flex-"+x+x;case 1023:if(x.charCodeAt(8)!==99)break;return I=x.substring(x.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+I+"-webkit-"+x+"-ms-flex-pack"+I+x;case 1005:return g.test(x)?x.replace(v,":-webkit-")+x.replace(v,":-moz-")+x:x;case 1e3:switch(I=x.substring(13).trim(),$=I.indexOf("-")+1,I.charCodeAt(0)+I.charCodeAt($)){case 226:I=x.replace(P,"tb");break;case 232:I=x.replace(P,"tb-rl");break;case 220:I=x.replace(P,"lr");break;default:return x}return"-webkit-"+x+"-ms-"+I+x;case 1017:if(x.indexOf("sticky",9)===-1)break;case 975:switch($=(x=E).length-10,I=(x.charCodeAt($)===33?x.substring(0,$):x).substring(E.indexOf(":",7)+1).trim(),H=I.charCodeAt(0)+(I.charCodeAt(7)|0)){case 203:if(111>I.charCodeAt(8))break;case 115:x=x.replace(I,"-webkit-"+I)+";"+x;break;case 207:case 102:x=x.replace(I,"-webkit-"+(102<H?"inline-":"")+"box")+";"+x.replace(I,"-webkit-"+I)+";"+x.replace(I,"-ms-"+I+"box")+";"+x}return x+";";case 938:if(x.charCodeAt(5)===45)switch(x.charCodeAt(6)){case 105:return I=x.replace("-items",""),"-webkit-"+x+"-webkit-box-"+I+"-ms-flex-"+I+x;case 115:return"-webkit-"+x+"-ms-flex-item-"+x.replace(R,"")+x;default:return"-webkit-"+x+"-ms-flex-line-pack"+x.replace("align-content","").replace(R,"")+x}break;case 973:case 989:if(x.charCodeAt(3)!==45||x.charCodeAt(4)===122)break;case 931:case 953:if(j.test(E)===!0)return(I=E.substring(E.indexOf(":")+1)).charCodeAt(0)===115?i(E.replace("stretch","fill-available"),$,D,U).replace(":fill-available",":stretch"):x.replace(I,"-webkit-"+I)+x.replace(I,"-moz-"+I.replace("fill-",""))+x;break;case 962:if(x="-webkit-"+x+(x.charCodeAt(5)===102?"-ms-"+x:"")+x,D+U===211&&x.charCodeAt(13)===105&&0<x.indexOf("transform",10))return x.substring(0,x.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+x}return x}function o(E,$){var D=E.indexOf($===1?":":"{"),U=E.substring(0,$!==3?D:10);return D=E.substring(D+1,E.length-1),L($!==2?U:U.replace(B,"$1"),D,$)}function l(E,$){var D=i($,$.charCodeAt(0),$.charCodeAt(1),$.charCodeAt(2));return D!==$+";"?D.replace(T," or ($1)").substring(4):"("+$+")"}function a(E,$,D,U,x,H,I,ce,ee,ne){for(var K=0,Ae=$,Ke;K<z;++K)switch(Ke=ke[K].call(c,E,Ae,D,U,x,H,I,ce,ee,ne)){case void 0:case!1:case!0:case null:break;default:Ae=Ke}if(Ae!==$)return Ae}function s(E){switch(E){case void 0:case null:z=ke.length=0;break;default:if(typeof E=="function")ke[z++]=E;else if(typeof E=="object")for(var $=0,D=E.length;$<D;++$)s(E[$]);else O=!!E|0}return s}function u(E){return E=E.prefix,E!==void 0&&(L=null,E?typeof E!="function"?q=1:(q=2,L=E):q=0),u}function c(E,$){var D=E;if(33>D.charCodeAt(0)&&(D=D.trim()),F=D,D=[F],0<z){var U=a(-1,$,D,D,ue,Y,0,0,0,0);U!==void 0&&typeof U=="string"&&($=U)}var x=t(De,D,$,0,0);return 0<z&&(U=a(-2,x,D,D,ue,Y,x.length,0,0,0),U!==void 0&&(x=U)),F="",ae=0,Y=ue=1,x}var f=/^\0+/g,m=/[\0\r\f]/g,v=/: */g,g=/zoo|gra/,w=/([,: ])(transform)/g,_=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,h=/::(place)/g,S=/:(read-only)/g,P=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,T=/([\s\S]*?);/g,R=/-self|flex-/g,B=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,Q=/([^-])(image-set\()/,Y=1,ue=1,ae=0,q=1,De=[],ke=[],z=0,L=null,O=0,F="";return c.use=s,c.set=u,e!==void 0&&u(e),c}var Y1={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function X1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var J1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Cd=X1(function(e){return J1.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Is={},q1={get exports(){return Is},set exports(e){Is=e}},oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Re=typeof Symbol=="function"&&Symbol.for,Vu=Re?Symbol.for("react.element"):60103,Qu=Re?Symbol.for("react.portal"):60106,xl=Re?Symbol.for("react.fragment"):60107,Sl=Re?Symbol.for("react.strict_mode"):60108,kl=Re?Symbol.for("react.profiler"):60114,Cl=Re?Symbol.for("react.provider"):60109,El=Re?Symbol.for("react.context"):60110,Ku=Re?Symbol.for("react.async_mode"):60111,Pl=Re?Symbol.for("react.concurrent_mode"):60111,Tl=Re?Symbol.for("react.forward_ref"):60112,_l=Re?Symbol.for("react.suspense"):60113,Z1=Re?Symbol.for("react.suspense_list"):60120,Rl=Re?Symbol.for("react.memo"):60115,Ol=Re?Symbol.for("react.lazy"):60116,eg=Re?Symbol.for("react.block"):60121,tg=Re?Symbol.for("react.fundamental"):60117,ng=Re?Symbol.for("react.responder"):60118,rg=Re?Symbol.for("react.scope"):60119;function st(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Vu:switch(e=e.type,e){case Ku:case Pl:case xl:case kl:case Sl:case _l:return e;default:switch(e=e&&e.$$typeof,e){case El:case Tl:case Ol:case Rl:case Cl:return e;default:return t}}case Qu:return t}}}function wm(e){return st(e)===Pl}oe.AsyncMode=Ku;oe.ConcurrentMode=Pl;oe.ContextConsumer=El;oe.ContextProvider=Cl;oe.Element=Vu;oe.ForwardRef=Tl;oe.Fragment=xl;oe.Lazy=Ol;oe.Memo=Rl;oe.Portal=Qu;oe.Profiler=kl;oe.StrictMode=Sl;oe.Suspense=_l;oe.isAsyncMode=function(e){return wm(e)||st(e)===Ku};oe.isConcurrentMode=wm;oe.isContextConsumer=function(e){return st(e)===El};oe.isContextProvider=function(e){return st(e)===Cl};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vu};oe.isForwardRef=function(e){return st(e)===Tl};oe.isFragment=function(e){return st(e)===xl};oe.isLazy=function(e){return st(e)===Ol};oe.isMemo=function(e){return st(e)===Rl};oe.isPortal=function(e){return st(e)===Qu};oe.isProfiler=function(e){return st(e)===kl};oe.isStrictMode=function(e){return st(e)===Sl};oe.isSuspense=function(e){return st(e)===_l};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xl||e===Pl||e===kl||e===Sl||e===_l||e===Z1||typeof e=="object"&&e!==null&&(e.$$typeof===Ol||e.$$typeof===Rl||e.$$typeof===Cl||e.$$typeof===El||e.$$typeof===Tl||e.$$typeof===tg||e.$$typeof===ng||e.$$typeof===rg||e.$$typeof===eg)};oe.typeOf=st;(function(e){e.exports=oe})(q1);var Gu=Is,ig={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},og={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},lg={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Yu={};Yu[Gu.ForwardRef]=lg;Yu[Gu.Memo]=xm;function Ed(e){return Gu.isMemo(e)?xm:Yu[e.$$typeof]||ig}var ag=Object.defineProperty,sg=Object.getOwnPropertyNames,Pd=Object.getOwnPropertySymbols,ug=Object.getOwnPropertyDescriptor,cg=Object.getPrototypeOf,Td=Object.prototype;function Sm(e,t,n){if(typeof t!="string"){if(Td){var r=cg(t);r&&r!==Td&&Sm(e,r,n)}var i=sg(t);Pd&&(i=i.concat(Pd(t)));for(var o=Ed(e),l=Ed(t),a=0;a<i.length;++a){var s=i[a];if(!og[s]&&!(n&&n[s])&&!(l&&l[s])&&!(o&&o[s])){var u=ug(t,s);try{ag(e,s,u)}catch{}}}}return e}var dg=Sm;function bt(){return(bt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var _d=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Ds=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Uo.typeOf(e)},Bo=Object.freeze([]),hn=Object.freeze({});function vi(e){return typeof e=="function"}function Rd(e){return e.displayName||e.name||"Component"}function Xu(e){return e&&typeof e.styledComponentId=="string"}var gr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ju=typeof window<"u"&&"HTMLElement"in window,fg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Pi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var pg=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&Pi(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var a=o;a<l;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,a=o;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),so=new Map,bo=new Map,qr=1,Qi=function(e){if(so.has(e))return so.get(e);for(;bo.has(qr);)qr++;var t=qr++;return so.set(e,t),bo.set(t,e),t},mg=function(e){return bo.get(e)},hg=function(e,t){t>=qr&&(qr=t+1),so.set(e,t),bo.set(t,e)},gg="style["+gr+'][data-styled-version="5.3.9"]',yg=new RegExp("^"+gr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),vg=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},wg=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var a=l.match(yg);if(a){var s=0|parseInt(a[1],10),u=a[2];s!==0&&(hg(u,s),vg(e,u,a[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},xg=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},km=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var s=a.childNodes,u=s.length;u>=0;u--){var c=s[u];if(c&&c.nodeType===1&&c.hasAttribute(gr))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(gr,"active"),r.setAttribute("data-styled-version","5.3.9");var l=xg();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Sg=function(){function e(n){var r=this.element=km(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,a=o.length;l<a;l++){var s=o[l];if(s.ownerNode===i)return s}Pi(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),kg=function(){function e(n){var r=this.element=km(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Cg=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Od=Ju,Eg={isServer:!Ju,useCSSOMInjection:!fg},Cm=function(){function e(n,r,i){n===void 0&&(n=hn),r===void 0&&(r={}),this.options=bt({},Eg,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Ju&&Od&&(Od=!1,function(o){for(var l=document.querySelectorAll(gg),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(gr)!=="active"&&(wg(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Qi(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(bt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new Cg(l):o?new Sg(l):new kg(l),new pg(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Qi(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Qi(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Qi(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var a=mg(l);if(a!==void 0){var s=n.names.get(a),u=r.getGroup(l);if(s&&u&&s.size){var c=gr+".g"+l+'[id="'+a+'"]',f="";s!==void 0&&s.forEach(function(m){m.length>0&&(f+=m+",")}),o+=""+u+c+'{content:"'+f+`"}/*!sc*/
`}}}return o}(this)},e}(),Pg=/(a)(d)/gi,Ad=function(e){return String.fromCharCode(e+(e>25?39:97))};function js(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ad(t%52)+n;return(Ad(t%52)+n).replace(Pg,"$1-$2")}var nr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Em=function(e){return nr(5381,e)};function Tg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(vi(n)&&!Xu(n))return!1}return!0}var _g=Em("5.3.9"),Rg=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Tg(t),this.componentId=n,this.baseHash=nr(_g,n),this.baseStyle=r,Cm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=yr(this.rules,t,n,r).join(""),a=js(nr(this.baseHash,l)>>>0);if(!n.hasNameForId(i,a)){var s=r(l,"."+a,void 0,i);n.insertRules(i,a,s)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=nr(this.baseHash,r.hash),f="",m=0;m<u;m++){var v=this.rules[m];if(typeof v=="string")f+=v;else if(v){var g=yr(v,t,n,r),w=Array.isArray(g)?g.join(""):g;c=nr(c,w+m),f+=w}}if(f){var _=js(c>>>0);if(!n.hasNameForId(i,_)){var p=r(f,"."+_,void 0,i);n.insertRules(i,_,p)}o.push(_)}}return o.join(" ")},e}(),Og=/^\s*\/\/.*$/gm,Ag=[":","[",".","#"];function $g(e){var t,n,r,i,o=e===void 0?hn:e,l=o.options,a=l===void 0?hn:l,s=o.plugins,u=s===void 0?Bo:s,c=new G1(a),f=[],m=function(w){function _(p){if(p)try{w(p+"}")}catch{}}return function(p,d,h,S,P,A,T,R,B,j){switch(p){case 1:if(B===0&&d.charCodeAt(0)===64)return w(d+";"),"";break;case 2:if(R===0)return d+"/*|*/";break;case 3:switch(R){case 102:case 112:return w(h[0]+d),"";default:return d+(j===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(_)}}}(function(w){f.push(w)}),v=function(w,_,p){return _===0&&Ag.indexOf(p[n.length])!==-1||p.match(i)?w:"."+t};function g(w,_,p,d){d===void 0&&(d="&");var h=w.replace(Og,""),S=_&&p?p+" "+_+" { "+h+" }":h;return t=d,n=_,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!_?"":_,S)}return c.use([].concat(u,[function(w,_,p){w===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,v))},m,function(w){if(w===-2){var _=f;return f=[],_}}])),g.hash=u.length?u.reduce(function(w,_){return _.name||Pi(15),nr(w,_.name)},5381).toString():"",g}var Pm=W.createContext();Pm.Consumer;var Tm=W.createContext(),Ng=(Tm.Consumer,new Cm),Ms=$g();function zg(){return pe.useContext(Pm)||Ng}function Lg(){return pe.useContext(Tm)||Ms}var Ig=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ms);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return Pi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ms),this.name+t.hash},e}(),Dg=/([A-Z])/,jg=/([A-Z])/g,Mg=/^ms-/,Fg=function(e){return"-"+e.toLowerCase()};function $d(e){return Dg.test(e)?e.replace(jg,Fg).replace(Mg,"-ms-"):e}var Nd=function(e){return e==null||e===!1||e===""};function yr(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,a=e.length;l<a;l+=1)(i=yr(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Nd(e))return"";if(Xu(e))return"."+e.styledComponentId;if(vi(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return yr(s,t,n,r)}var u;return e instanceof Ig?n?(e.inject(n,r),e.getName(r)):e:Ds(e)?function c(f,m){var v,g,w=[];for(var _ in f)f.hasOwnProperty(_)&&!Nd(f[_])&&(Array.isArray(f[_])&&f[_].isCss||vi(f[_])?w.push($d(_)+":",f[_],";"):Ds(f[_])?w.push.apply(w,c(f[_],_)):w.push($d(_)+": "+(v=_,(g=f[_])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||v in Y1?String(g).trim():g+"px")+";"));return m?[m+" {"].concat(w,["}"]):w}(e):e.toString()}var zd=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ug(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return vi(e)||Ds(e)?zd(yr(_d(Bo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:zd(yr(_d(e,n)))}var Bg=function(e,t,n){return n===void 0&&(n=hn),e.theme!==n.theme&&e.theme||t||n.theme},bg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Hg=/(^-|-$)/g;function ka(e){return e.replace(bg,"-").replace(Hg,"")}var Wg=function(e){return js(Em(e)>>>0)};function Ki(e){return typeof e=="string"&&!0}var Fs=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Vg=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Qg(e,t,n){var r=e[n];Fs(t)&&Fs(r)?_m(r,t):e[n]=t}function _m(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(Fs(l))for(var a in l)Vg(a)&&Qg(e,l[a],a)}return e}var Rm=W.createContext();Rm.Consumer;var Ca={};function Om(e,t,n){var r=Xu(e),i=!Ki(e),o=t.attrs,l=o===void 0?Bo:o,a=t.componentId,s=a===void 0?function(d,h){var S=typeof d!="string"?"sc":ka(d);Ca[S]=(Ca[S]||0)+1;var P=S+"-"+Wg("5.3.9"+S+Ca[S]);return h?h+"-"+P:P}(t.displayName,t.parentComponentId):a,u=t.displayName,c=u===void 0?function(d){return Ki(d)?"styled."+d:"Styled("+Rd(d)+")"}(e):u,f=t.displayName&&t.componentId?ka(t.displayName)+"-"+t.componentId:t.componentId||s,m=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(d,h,S){return e.shouldForwardProp(d,h,S)&&t.shouldForwardProp(d,h,S)}:e.shouldForwardProp);var g,w=new Rg(n,f,r?e.componentStyle:void 0),_=w.isStatic&&l.length===0,p=function(d,h){return function(S,P,A,T){var R=S.attrs,B=S.componentStyle,j=S.defaultProps,Q=S.foldedComponentIds,Y=S.shouldForwardProp,ue=S.styledComponentId,ae=S.target,q=function(U,x,H){U===void 0&&(U=hn);var I=bt({},x,{theme:U}),ce={};return H.forEach(function(ee){var ne,K,Ae,Ke=ee;for(ne in vi(Ke)&&(Ke=Ke(I)),Ke)I[ne]=ce[ne]=ne==="className"?(K=ce[ne],Ae=Ke[ne],K&&Ae?K+" "+Ae:K||Ae):Ke[ne]}),[I,ce]}(Bg(P,pe.useContext(Rm),j)||hn,P,R),De=q[0],ke=q[1],z=function(U,x,H,I){var ce=zg(),ee=Lg(),ne=x?U.generateAndInjectStyles(hn,ce,ee):U.generateAndInjectStyles(H,ce,ee);return ne}(B,T,De),L=A,O=ke.$as||P.$as||ke.as||P.as||ae,F=Ki(O),E=ke!==P?bt({},P,{},ke):P,$={};for(var D in E)D[0]!=="$"&&D!=="as"&&(D==="forwardedAs"?$.as=E[D]:(Y?Y(D,Cd,O):!F||Cd(D))&&($[D]=E[D]));return P.style&&ke.style!==P.style&&($.style=bt({},P.style,{},ke.style)),$.className=Array.prototype.concat(Q,ue,z!==ue?z:null,P.className,ke.className).filter(Boolean).join(" "),$.ref=L,pe.createElement(O,$)}(g,d,h,_)};return p.displayName=c,(g=W.forwardRef(p)).attrs=m,g.componentStyle=w,g.displayName=c,g.shouldForwardProp=v,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Bo,g.styledComponentId=f,g.target=r?e.target:e,g.withComponent=function(d){var h=t.componentId,S=function(A,T){if(A==null)return{};var R,B,j={},Q=Object.keys(A);for(B=0;B<Q.length;B++)R=Q[B],T.indexOf(R)>=0||(j[R]=A[R]);return j}(t,["componentId"]),P=h&&h+"-"+(Ki(d)?d:ka(Rd(d)));return Om(d,bt({},S,{attrs:m,componentId:P}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?_m({},e.defaultProps,d):d}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),i&&dg(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var Us=function(e){return function t(n,r,i){if(i===void 0&&(i=hn),!Uo.isValidElementType(r))return Pi(1,String(r));var o=function(){return n(r,i,Ug.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,bt({},i,{},l))},o.attrs=function(l){return t(n,r,bt({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(Om,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Us[e]=Us(e)});const k=Us;var uo={};const Kg=gh(Uh);var Am;Object.defineProperty(uo,"__esModule",{value:!0});var br=Kg,Ot=pe,kt=function(){return kt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},kt.apply(this,arguments)};function Gg(e,t){var n,r;switch(t.type){case"TYPE":return kt(kt({},e),{speed:t.speed,text:(n=t.payload)===null||n===void 0?void 0:n.substring(0,e.text.length+1)});case"DELAY":return kt(kt({},e),{speed:t.payload});case"DELETE":return kt(kt({},e),{speed:t.speed,text:(r=t.payload)===null||r===void 0?void 0:r.substring(0,e.text.length-1)});case"COUNT":return kt(kt({},e),{count:e.count+1});default:return e}}var Ld=function(e){var t=e.words,n=t===void 0?["Hello World!","This is","a simple Typewriter"]:t,r=e.loop,i=r===void 0?1:r,o=e.typeSpeed,l=o===void 0?80:o,a=e.deleteSpeed,s=a===void 0?50:a,u=e.delaySpeed,c=u===void 0?1500:u,f=e.onLoopDone,m=e.onType,v=e.onDelete,g=e.onDelay,w=Ot.useReducer(Gg,{speed:l,text:"",count:0}),_=w[0],p=_.speed,d=_.text,h=_.count,S=w[1],P=Ot.useRef(0),A=Ot.useRef(!1),T=Ot.useRef(!1),R=Ot.useRef(!1),B=Ot.useRef(!1),j=Ot.useCallback(function(){var Q=h%n.length,Y=n[Q];T.current?(S({type:"DELETE",payload:Y,speed:s}),d===""&&(T.current=!1,S({type:"COUNT"}))):(S({type:"TYPE",payload:Y,speed:l}),R.current=!0,d===Y&&(S({type:"DELAY",payload:c}),R.current=!1,B.current=!0,setTimeout(function(){B.current=!1,T.current=!0},c),i>0&&(P.current+=1,P.current/n.length===i&&(B.current=!1,A.current=!0)))),R.current&&m&&m(P.current),T.current&&v&&v(),B.current&&g&&g()},[h,c,s,i,l,n,d,m,v,g]);return Ot.useEffect(function(){var Q=setTimeout(j,p);return A.current&&clearTimeout(Q),function(){return clearTimeout(Q)}},[j,p]),Ot.useEffect(function(){f&&A.current&&f()},[f]),[d,{isType:R.current,isDelay:B.current,isDelete:T.current,isDone:A.current}]},Yg="styles-module_blinkingCursor__yugAC",Xg="styles-module_blinking__9VXRT";(function(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var Id=Ot.memo(function(e){var t=e.cursorBlinking,n=t===void 0||t,r=e.cursorStyle,i=r===void 0?"|":r,o=e.cursorColor,l=o===void 0?"inherit":o;return br.jsx("span",kt({style:{color:l},className:"".concat(Yg," ").concat(n?Xg:"")},{children:i}))});uo.Cursor=Id,uo.Typewriter=function(e){var t=e.words,n=t===void 0?["Hello World!","This is","a simple Typewriter"]:t,r=e.loop,i=r===void 0?1:r,o=e.typeSpeed,l=o===void 0?80:o,a=e.deleteSpeed,s=a===void 0?50:a,u=e.delaySpeed,c=u===void 0?1500:u,f=e.cursor,m=f!==void 0&&f,v=e.cursorStyle,g=v===void 0?"|":v,w=e.cursorColor,_=w===void 0?"inherit":w,p=e.cursorBlinking,d=p===void 0||p,h=e.onLoopDone,S=e.onType,P=e.onDelay,A=e.onDelete,T=Ld({words:n,loop:i,typeSpeed:l,deleteSpeed:s,delaySpeed:c,onLoopDone:h,onType:S,onDelay:P,onDelete:A})[0];return br.jsxs(br.Fragment,{children:[br.jsx("span",{children:T}),m&&br.jsx(Id,{cursorStyle:g,cursorColor:_,cursorBlinking:d})]})},Am=uo.useTypewriter=Ld;const Jg="/assets/me_babyblues-6cd71b29.png";function Bs(e,t){return Bs=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Bs(e,t)}function It(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Bs(e,t)}var Ho={},qg={get exports(){return Ho},set exports(e){Ho=e}},Zg="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ey=Zg,ty=ey;function $m(){}function Nm(){}Nm.resetWarningCache=$m;var ny=function(){function e(r,i,o,l,a,s){if(s!==ty){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Nm,resetWarningCache:$m};return n.PropTypes=n,n};qg.exports=ny();function We(){return We=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},We.apply(this,arguments)}function Gi(e){return e.charAt(0)==="/"}function Ea(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop()}function ry(e,t){t===void 0&&(t="");var n=e&&e.split("/")||[],r=t&&t.split("/")||[],i=e&&Gi(e),o=t&&Gi(t),l=i||o;if(e&&Gi(e)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";var a;if(r.length){var s=r[r.length-1];a=s==="."||s===".."||s===""}else a=!1;for(var u=0,c=r.length;c>=0;c--){var f=r[c];f==="."?Ea(r,c):f===".."?(Ea(r,c),u++):u&&(Ea(r,c),u--)}if(!l)for(;u--;u)r.unshift("..");l&&r[0]!==""&&(!r[0]||!Gi(r[0]))&&r.unshift("");var m=r.join("/");return a&&m.substr(-1)!=="/"&&(m+="/"),m}var iy=!0,Pa="Invariant failed";function Un(e,t){if(!e){if(iy)throw new Error(Pa);var n=typeof t=="function"?t():t,r=n?"".concat(Pa,": ").concat(n):Pa;throw new Error(r)}}function Zr(e){return e.charAt(0)==="/"?e:"/"+e}function Dd(e){return e.charAt(0)==="/"?e.substr(1):e}function oy(e,t){return e.toLowerCase().indexOf(t.toLowerCase())===0&&"/?#".indexOf(e.charAt(t.length))!==-1}function zm(e,t){return oy(e,t)?e.substr(t.length):e}function Lm(e){return e.charAt(e.length-1)==="/"?e.slice(0,-1):e}function ly(e){var t=e||"/",n="",r="",i=t.indexOf("#");i!==-1&&(r=t.substr(i),t=t.substr(0,i));var o=t.indexOf("?");return o!==-1&&(n=t.substr(o),t=t.substr(0,o)),{pathname:t,search:n==="?"?"":n,hash:r==="#"?"":r}}function Ge(e){var t=e.pathname,n=e.search,r=e.hash,i=t||"/";return n&&n!=="?"&&(i+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(i+=r.charAt(0)==="#"?r:"#"+r),i}function rt(e,t,n,r){var i;typeof e=="string"?(i=ly(e),i.state=t):(i=We({},e),i.pathname===void 0&&(i.pathname=""),i.search?i.search.charAt(0)!=="?"&&(i.search="?"+i.search):i.search="",i.hash?i.hash.charAt(0)!=="#"&&(i.hash="#"+i.hash):i.hash="",t!==void 0&&i.state===void 0&&(i.state=t));try{i.pathname=decodeURI(i.pathname)}catch(o){throw o instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):o}return n&&(i.key=n),r?i.pathname?i.pathname.charAt(0)!=="/"&&(i.pathname=ry(i.pathname,r.pathname)):i.pathname=r.pathname:i.pathname||(i.pathname="/"),i}function qu(){var e=null;function t(l){return e=l,function(){e===l&&(e=null)}}function n(l,a,s,u){if(e!=null){var c=typeof e=="function"?e(l,a):e;typeof c=="string"?typeof s=="function"?s(c,u):u(!0):u(c!==!1)}else u(!0)}var r=[];function i(l){var a=!0;function s(){a&&l.apply(void 0,arguments)}return r.push(s),function(){a=!1,r=r.filter(function(u){return u!==s})}}function o(){for(var l=arguments.length,a=new Array(l),s=0;s<l;s++)a[s]=arguments[s];r.forEach(function(u){return u.apply(void 0,a)})}return{setPrompt:t,confirmTransitionTo:n,appendListener:i,notifyListeners:o}}var Im=!!(typeof window<"u"&&window.document&&window.document.createElement);function Dm(e,t){t(window.confirm(e))}function ay(){var e=window.navigator.userAgent;return(e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function sy(){return window.navigator.userAgent.indexOf("Trident")===-1}function uy(){return window.navigator.userAgent.indexOf("Firefox")===-1}function cy(e){return e.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var jd="popstate",Md="hashchange";function Fd(){try{return window.history.state||{}}catch{return{}}}function dy(e){e===void 0&&(e={}),Im||Un(!1);var t=window.history,n=ay(),r=!sy(),i=e,o=i.forceRefresh,l=o===void 0?!1:o,a=i.getUserConfirmation,s=a===void 0?Dm:a,u=i.keyLength,c=u===void 0?6:u,f=e.basename?Lm(Zr(e.basename)):"";function m(L){var O=L||{},F=O.key,E=O.state,$=window.location,D=$.pathname,U=$.search,x=$.hash,H=D+U+x;return f&&(H=zm(H,f)),rt(H,E,F)}function v(){return Math.random().toString(36).substr(2,c)}var g=qu();function w(L){We(z,L),z.length=t.length,g.notifyListeners(z.location,z.action)}function _(L){cy(L)||h(m(L.state))}function p(){h(m(Fd()))}var d=!1;function h(L){if(d)d=!1,w();else{var O="POP";g.confirmTransitionTo(L,O,s,function(F){F?w({action:O,location:L}):S(L)})}}function S(L){var O=z.location,F=A.indexOf(O.key);F===-1&&(F=0);var E=A.indexOf(L.key);E===-1&&(E=0);var $=F-E;$&&(d=!0,j($))}var P=m(Fd()),A=[P.key];function T(L){return f+Ge(L)}function R(L,O){var F="PUSH",E=rt(L,O,v(),z.location);g.confirmTransitionTo(E,F,s,function($){if($){var D=T(E),U=E.key,x=E.state;if(n)if(t.pushState({key:U,state:x},null,D),l)window.location.href=D;else{var H=A.indexOf(z.location.key),I=A.slice(0,H+1);I.push(E.key),A=I,w({action:F,location:E})}else window.location.href=D}})}function B(L,O){var F="REPLACE",E=rt(L,O,v(),z.location);g.confirmTransitionTo(E,F,s,function($){if($){var D=T(E),U=E.key,x=E.state;if(n)if(t.replaceState({key:U,state:x},null,D),l)window.location.replace(D);else{var H=A.indexOf(z.location.key);H!==-1&&(A[H]=E.key),w({action:F,location:E})}else window.location.replace(D)}})}function j(L){t.go(L)}function Q(){j(-1)}function Y(){j(1)}var ue=0;function ae(L){ue+=L,ue===1&&L===1?(window.addEventListener(jd,_),r&&window.addEventListener(Md,p)):ue===0&&(window.removeEventListener(jd,_),r&&window.removeEventListener(Md,p))}var q=!1;function De(L){L===void 0&&(L=!1);var O=g.setPrompt(L);return q||(ae(1),q=!0),function(){return q&&(q=!1,ae(-1)),O()}}function ke(L){var O=g.appendListener(L);return ae(1),function(){ae(-1),O()}}var z={length:t.length,action:"POP",location:P,createHref:T,push:R,replace:B,go:j,goBack:Q,goForward:Y,block:De,listen:ke};return z}var Ud="hashchange",fy={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+Dd(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:Dd,decodePath:Zr},slash:{encodePath:Zr,decodePath:Zr}};function jm(e){var t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function Ir(){var e=window.location.href,t=e.indexOf("#");return t===-1?"":e.substring(t+1)}function py(e){window.location.hash=e}function Ta(e){window.location.replace(jm(window.location.href)+"#"+e)}function my(e){e===void 0&&(e={}),Im||Un(!1);var t=window.history;uy();var n=e,r=n.getUserConfirmation,i=r===void 0?Dm:r,o=n.hashType,l=o===void 0?"slash":o,a=e.basename?Lm(Zr(e.basename)):"",s=fy[l],u=s.encodePath,c=s.decodePath;function f(){var O=c(Ir());return a&&(O=zm(O,a)),rt(O)}var m=qu();function v(O){We(L,O),L.length=t.length,m.notifyListeners(L.location,L.action)}var g=!1,w=null;function _(O,F){return O.pathname===F.pathname&&O.search===F.search&&O.hash===F.hash}function p(){var O=Ir(),F=u(O);if(O!==F)Ta(F);else{var E=f(),$=L.location;if(!g&&_($,E)||w===Ge(E))return;w=null,d(E)}}function d(O){if(g)g=!1,v();else{var F="POP";m.confirmTransitionTo(O,F,i,function(E){E?v({action:F,location:O}):h(O)})}}function h(O){var F=L.location,E=T.lastIndexOf(Ge(F));E===-1&&(E=0);var $=T.lastIndexOf(Ge(O));$===-1&&($=0);var D=E-$;D&&(g=!0,Q(D))}var S=Ir(),P=u(S);S!==P&&Ta(P);var A=f(),T=[Ge(A)];function R(O){var F=document.querySelector("base"),E="";return F&&F.getAttribute("href")&&(E=jm(window.location.href)),E+"#"+u(a+Ge(O))}function B(O,F){var E="PUSH",$=rt(O,void 0,void 0,L.location);m.confirmTransitionTo($,E,i,function(D){if(D){var U=Ge($),x=u(a+U),H=Ir()!==x;if(H){w=U,py(x);var I=T.lastIndexOf(Ge(L.location)),ce=T.slice(0,I+1);ce.push(U),T=ce,v({action:E,location:$})}else v()}})}function j(O,F){var E="REPLACE",$=rt(O,void 0,void 0,L.location);m.confirmTransitionTo($,E,i,function(D){if(D){var U=Ge($),x=u(a+U),H=Ir()!==x;H&&(w=U,Ta(x));var I=T.indexOf(Ge(L.location));I!==-1&&(T[I]=U),v({action:E,location:$})}})}function Q(O){t.go(O)}function Y(){Q(-1)}function ue(){Q(1)}var ae=0;function q(O){ae+=O,ae===1&&O===1?window.addEventListener(Ud,p):ae===0&&window.removeEventListener(Ud,p)}var De=!1;function ke(O){O===void 0&&(O=!1);var F=m.setPrompt(O);return De||(q(1),De=!0),function(){return De&&(De=!1,q(-1)),F()}}function z(O){var F=m.appendListener(O);return q(1),function(){q(-1),F()}}var L={length:t.length,action:"POP",location:A,createHref:R,push:B,replace:j,go:Q,goBack:Y,goForward:ue,block:ke,listen:z};return L}function Bd(e,t,n){return Math.min(Math.max(e,t),n)}function hy(e){e===void 0&&(e={});var t=e,n=t.getUserConfirmation,r=t.initialEntries,i=r===void 0?["/"]:r,o=t.initialIndex,l=o===void 0?0:o,a=t.keyLength,s=a===void 0?6:a,u=qu();function c(R){We(T,R),T.length=T.entries.length,u.notifyListeners(T.location,T.action)}function f(){return Math.random().toString(36).substr(2,s)}var m=Bd(l,0,i.length-1),v=i.map(function(R){return typeof R=="string"?rt(R,void 0,f()):rt(R,void 0,R.key||f())}),g=Ge;function w(R,B){var j="PUSH",Q=rt(R,B,f(),T.location);u.confirmTransitionTo(Q,j,n,function(Y){if(Y){var ue=T.index,ae=ue+1,q=T.entries.slice(0);q.length>ae?q.splice(ae,q.length-ae,Q):q.push(Q),c({action:j,location:Q,index:ae,entries:q})}})}function _(R,B){var j="REPLACE",Q=rt(R,B,f(),T.location);u.confirmTransitionTo(Q,j,n,function(Y){Y&&(T.entries[T.index]=Q,c({action:j,location:Q}))})}function p(R){var B=Bd(T.index+R,0,T.entries.length-1),j="POP",Q=T.entries[B];u.confirmTransitionTo(Q,j,n,function(Y){Y?c({action:j,location:Q,index:B}):c()})}function d(){p(-1)}function h(){p(1)}function S(R){var B=T.index+R;return B>=0&&B<T.entries.length}function P(R){return R===void 0&&(R=!1),u.setPrompt(R)}function A(R){return u.appendListener(R)}var T={length:v.length,action:"POP",location:v[m],index:m,entries:v,createHref:g,push:w,replace:_,go:p,goBack:d,goForward:h,canGo:S,block:P,listen:A};return T}var Dn={},gy={get exports(){return Dn},set exports(e){Dn=e}},yy=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},Wo=yy;gy.exports=Um;Dn.parse=Zu;Dn.compile=wy;Dn.tokensToFunction=Mm;Dn.tokensToRegExp=Fm;var vy=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Zu(e,t){for(var n=[],r=0,i=0,o="",l=t&&t.delimiter||"/",a;(a=vy.exec(e))!=null;){var s=a[0],u=a[1],c=a.index;if(o+=e.slice(i,c),i=c+s.length,u){o+=u[1];continue}var f=e[i],m=a[2],v=a[3],g=a[4],w=a[5],_=a[6],p=a[7];o&&(n.push(o),o="");var d=m!=null&&f!=null&&f!==m,h=_==="+"||_==="*",S=_==="?"||_==="*",P=a[2]||l,A=g||w;n.push({name:v||r++,prefix:m||"",delimiter:P,optional:S,repeat:h,partial:d,asterisk:!!p,pattern:A?ky(A):p?".*":"[^"+co(P)+"]+?"})}return i<e.length&&(o+=e.substr(i)),o&&n.push(o),n}function wy(e,t){return Mm(Zu(e,t),t)}function xy(e){return encodeURI(e).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function Sy(e){return encodeURI(e).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function Mm(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)typeof e[r]=="object"&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",tc(t)));return function(i,o){for(var l="",a=i||{},s=o||{},u=s.pretty?xy:encodeURIComponent,c=0;c<e.length;c++){var f=e[c];if(typeof f=="string"){l+=f;continue}var m=a[f.name],v;if(m==null)if(f.optional){f.partial&&(l+=f.prefix);continue}else throw new TypeError('Expected "'+f.name+'" to be defined');if(Wo(m)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(m)+"`");if(m.length===0){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var g=0;g<m.length;g++){if(v=u(m[g]),!n[c].test(v))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(v)+"`");l+=(g===0?f.prefix:f.delimiter)+v}continue}if(v=f.asterisk?Sy(m):u(m),!n[c].test(v))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+v+'"');l+=f.prefix+v}return l}}function co(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function ky(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function ec(e,t){return e.keys=t,e}function tc(e){return e&&e.sensitive?"":"i"}function Cy(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return ec(e,t)}function Ey(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(Um(e[i],t,n).source);var o=new RegExp("(?:"+r.join("|")+")",tc(n));return ec(o,t)}function Py(e,t,n){return Fm(Zu(e,n),t,n)}function Fm(e,t,n){Wo(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,i=n.end!==!1,o="",l=0;l<e.length;l++){var a=e[l];if(typeof a=="string")o+=co(a);else{var s=co(a.prefix),u="(?:"+a.pattern+")";t.push(a),a.repeat&&(u+="(?:"+s+u+")*"),a.optional?a.partial?u=s+"("+u+")?":u="(?:"+s+"("+u+"))?":u=s+"("+u+")",o+=u}}var c=co(n.delimiter||"/"),f=o.slice(-c.length)===c;return r||(o=(f?o.slice(0,-c.length):o)+"(?:"+c+"(?=$))?"),i?o+="$":o+=r&&f?"":"(?="+c+"|$)",ec(new RegExp("^"+o,tc(n)),t)}function Um(e,t,n){return Wo(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?Cy(e,t):Wo(e)?Ey(e,t,n):Py(e,t,n)}var bs={},Ty={get exports(){return bs},set exports(e){bs=e}},le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe=typeof Symbol=="function"&&Symbol.for,nc=Oe?Symbol.for("react.element"):60103,rc=Oe?Symbol.for("react.portal"):60106,Al=Oe?Symbol.for("react.fragment"):60107,$l=Oe?Symbol.for("react.strict_mode"):60108,Nl=Oe?Symbol.for("react.profiler"):60114,zl=Oe?Symbol.for("react.provider"):60109,Ll=Oe?Symbol.for("react.context"):60110,ic=Oe?Symbol.for("react.async_mode"):60111,Il=Oe?Symbol.for("react.concurrent_mode"):60111,Dl=Oe?Symbol.for("react.forward_ref"):60112,jl=Oe?Symbol.for("react.suspense"):60113,_y=Oe?Symbol.for("react.suspense_list"):60120,Ml=Oe?Symbol.for("react.memo"):60115,Fl=Oe?Symbol.for("react.lazy"):60116,Ry=Oe?Symbol.for("react.block"):60121,Oy=Oe?Symbol.for("react.fundamental"):60117,Ay=Oe?Symbol.for("react.responder"):60118,$y=Oe?Symbol.for("react.scope"):60119;function ut(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case nc:switch(e=e.type,e){case ic:case Il:case Al:case Nl:case $l:case jl:return e;default:switch(e=e&&e.$$typeof,e){case Ll:case Dl:case Fl:case Ml:case zl:return e;default:return t}}case rc:return t}}}function Bm(e){return ut(e)===Il}le.AsyncMode=ic;le.ConcurrentMode=Il;le.ContextConsumer=Ll;le.ContextProvider=zl;le.Element=nc;le.ForwardRef=Dl;le.Fragment=Al;le.Lazy=Fl;le.Memo=Ml;le.Portal=rc;le.Profiler=Nl;le.StrictMode=$l;le.Suspense=jl;le.isAsyncMode=function(e){return Bm(e)||ut(e)===ic};le.isConcurrentMode=Bm;le.isContextConsumer=function(e){return ut(e)===Ll};le.isContextProvider=function(e){return ut(e)===zl};le.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===nc};le.isForwardRef=function(e){return ut(e)===Dl};le.isFragment=function(e){return ut(e)===Al};le.isLazy=function(e){return ut(e)===Fl};le.isMemo=function(e){return ut(e)===Ml};le.isPortal=function(e){return ut(e)===rc};le.isProfiler=function(e){return ut(e)===Nl};le.isStrictMode=function(e){return ut(e)===$l};le.isSuspense=function(e){return ut(e)===jl};le.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Al||e===Il||e===Nl||e===$l||e===jl||e===_y||typeof e=="object"&&e!==null&&(e.$$typeof===Fl||e.$$typeof===Ml||e.$$typeof===zl||e.$$typeof===Ll||e.$$typeof===Dl||e.$$typeof===Oy||e.$$typeof===Ay||e.$$typeof===$y||e.$$typeof===Ry)};le.typeOf=ut;(function(e){e.exports=le})(Ty);function Ul(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var bm=bs,Ny={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Hm={};Hm[bm.ForwardRef]=Ny;Hm[bm.Memo]=zy;var _a=1073741823,bd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{};function Ly(){var e="__global_unique_id__";return bd[e]=(bd[e]||0)+1}function Iy(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Dy(e){var t=[];return{on:function(r){t.push(r)},off:function(r){t=t.filter(function(i){return i!==r})},get:function(){return e},set:function(r,i){e=r,t.forEach(function(o){return o(e,i)})}}}function jy(e){return Array.isArray(e)?e[0]:e}function My(e,t){var n,r,i="__create-react-context-"+Ly()+"__",o=function(a){It(s,a);function s(){for(var c,f=arguments.length,m=new Array(f),v=0;v<f;v++)m[v]=arguments[v];return c=a.call.apply(a,[this].concat(m))||this,c.emitter=Dy(c.props.value),c}var u=s.prototype;return u.getChildContext=function(){var f;return f={},f[i]=this.emitter,f},u.componentWillReceiveProps=function(f){if(this.props.value!==f.value){var m=this.props.value,v=f.value,g;Iy(m,v)?g=0:(g=typeof t=="function"?t(m,v):_a,g|=0,g!==0&&this.emitter.set(f.value,g))}},u.render=function(){return this.props.children},s}(W.Component);o.childContextTypes=(n={},n[i]=Ho.object.isRequired,n);var l=function(a){It(s,a);function s(){for(var c,f=arguments.length,m=new Array(f),v=0;v<f;v++)m[v]=arguments[v];return c=a.call.apply(a,[this].concat(m))||this,c.observedBits=void 0,c.state={value:c.getValue()},c.onUpdate=function(g,w){var _=c.observedBits|0;_&w&&c.setState({value:c.getValue()})},c}var u=s.prototype;return u.componentWillReceiveProps=function(f){var m=f.observedBits;this.observedBits=m??_a},u.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var f=this.props.observedBits;this.observedBits=f??_a},u.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},u.getValue=function(){return this.context[i]?this.context[i].get():e},u.render=function(){return jy(this.props.children)(this.state.value)},s}(W.Component);return l.contextTypes=(r={},r[i]=Ho.object,r),{Provider:o,Consumer:l}}var Fy=W.createContext||My,Wm=function(t){var n=Fy();return n.displayName=t,n},Uy=Wm("Router-History"),vr=Wm("Router"),Bl=function(e){It(t,e),t.computeRootMatch=function(i){return{path:"/",url:"/",params:{},isExact:i==="/"}};function t(r){var i;return i=e.call(this,r)||this,i.state={location:r.history.location},i._isMounted=!1,i._pendingLocation=null,r.staticContext||(i.unlisten=r.history.listen(function(o){i._pendingLocation=o})),i}var n=t.prototype;return n.componentDidMount=function(){var i=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen(function(o){i._isMounted&&i.setState({location:o})})),this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},n.render=function(){return W.createElement(vr.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},W.createElement(Uy.Provider,{children:this.props.children||null,value:this.props.history}))},t}(W.Component);W.Component;W.Component;var Hd={},By=1e4,Wd=0;function by(e,t){var n=""+t.end+t.strict+t.sensitive,r=Hd[n]||(Hd[n]={});if(r[e])return r[e];var i=[],o=Dn(e,i,t),l={regexp:o,keys:i};return Wd<By&&(r[e]=l,Wd++),l}function oc(e,t){t===void 0&&(t={}),(typeof t=="string"||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,i=n.exact,o=i===void 0?!1:i,l=n.strict,a=l===void 0?!1:l,s=n.sensitive,u=s===void 0?!1:s,c=[].concat(r);return c.reduce(function(f,m){if(!m&&m!=="")return null;if(f)return f;var v=by(m,{end:o,strict:a,sensitive:u}),g=v.regexp,w=v.keys,_=g.exec(e);if(!_)return null;var p=_[0],d=_.slice(1),h=e===p;return o&&!h?null:{path:m,url:m==="/"&&p===""?"/":p,isExact:h,params:w.reduce(function(S,P,A){return S[P.name]=d[A],S},{})}},null)}function Hy(e){return W.Children.count(e)===0}var Dr=function(e){It(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.render=function(){var i=this;return W.createElement(vr.Consumer,null,function(o){o||Un(!1);var l=i.props.location||o.location,a=i.props.computedMatch?i.props.computedMatch:i.props.path?oc(l.pathname,i.props):o.match,s=We({},o,{location:l,match:a}),u=i.props,c=u.children,f=u.component,m=u.render;return Array.isArray(c)&&Hy(c)&&(c=null),W.createElement(vr.Provider,{value:s},s.match?c?typeof c=="function"?c(s):c:f?W.createElement(f,s):m?m(s):null:typeof c=="function"?c(s):null)})},t}(W.Component);function lc(e){return e.charAt(0)==="/"?e:"/"+e}function Wy(e,t){return e?We({},t,{pathname:lc(e)+t.pathname}):t}function Vy(e,t){if(!e)return t;var n=lc(e);return t.pathname.indexOf(n)!==0?t:We({},t,{pathname:t.pathname.substr(n.length)})}function Vd(e){return typeof e=="string"?e:Ge(e)}function Ra(e){return function(){Un(!1)}}function Qd(){}W.Component;var Qy=function(e){It(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.render=function(){var i=this;return W.createElement(vr.Consumer,null,function(o){o||Un(!1);var l=i.props.location||o.location,a,s;return W.Children.forEach(i.props.children,function(u){if(s==null&&W.isValidElement(u)){a=u;var c=u.props.path||u.props.from;s=c?oc(l.pathname,We({},u.props,{path:c})):o.match}}),s?W.cloneElement(a,{location:l,computedMatch:s}):null})},t}(W.Component);W.useContext;var Ky=function(e){It(t,e);function t(){for(var r,i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=e.call.apply(e,[this].concat(o))||this,r.history=dy(r.props),r}var n=t.prototype;return n.render=function(){return W.createElement(Bl,{history:this.history,children:this.props.children})},t}(W.Component);W.Component;var Hs=function(t,n){return typeof t=="function"?t(n):t},Ws=function(t,n){return typeof t=="string"?rt(t,null,null,n):t},ac=function(t){return t},wr=W.forwardRef;typeof wr>"u"&&(wr=ac);function Gy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var Yy=wr(function(e,t){var n=e.innerRef,r=e.navigate,i=e.onClick,o=Ul(e,["innerRef","navigate","onClick"]),l=o.target,a=We({},o,{onClick:function(u){try{i&&i(u)}catch(c){throw u.preventDefault(),c}!u.defaultPrevented&&u.button===0&&(!l||l==="_self")&&!Gy(u)&&(u.preventDefault(),r())}});return ac!==wr?a.ref=t||n:a.ref=n,W.createElement("a",a)}),sc=wr(function(e,t){var n=e.component,r=n===void 0?Yy:n,i=e.replace,o=e.to,l=e.innerRef,a=Ul(e,["component","replace","to","innerRef"]);return W.createElement(vr.Consumer,null,function(s){s||Un(!1);var u=s.history,c=Ws(Hs(o,s.location),s.location),f=c?u.createHref(c):"",m=We({},a,{href:f,navigate:function(){var g=Hs(o,s.location),w=Ge(s.location)===Ge(Ws(g)),_=i||w?u.replace:u.push;_(g)}});return ac!==wr?m.ref=t||l:m.innerRef=l,W.createElement(r,m)})}),Vm=function(t){return t},Vo=W.forwardRef;typeof Vo>"u"&&(Vo=Vm);function Xy(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(r){return r}).join(" ")}Vo(function(e,t){var n=e["aria-current"],r=n===void 0?"page":n,i=e.activeClassName,o=i===void 0?"active":i,l=e.activeStyle,a=e.className,s=e.exact,u=e.isActive,c=e.location,f=e.sensitive,m=e.strict,v=e.style,g=e.to,w=e.innerRef,_=Ul(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return W.createElement(vr.Consumer,null,function(p){p||Un(!1);var d=c||p.location,h=Ws(Hs(g,d),d),S=h.pathname,P=S&&S.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),A=P?oc(d.pathname,{path:P,exact:s,sensitive:f,strict:m}):null,T=!!(u?u(A,d):A),R=typeof a=="function"?a(T):a,B=typeof v=="function"?v(T):v;T&&(R=Xy(R,o),B=We({},B,l));var j=We({"aria-current":T&&r||null,className:R,style:B,to:h},_);return Vm!==Vo?j.ref=t||w:j.innerRef=w,W.createElement(sc,j)})});const Jy=k.nav`
    max-width: 100%;
    grid-area: top;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat (5, 1fr);
    grid-template-areas:
   "logo logo navbar navbar navbar";

    font-family: 'Poppins';
    font-size: 16px;
    line-height: 24px;
    color: whitesmoke;
    
    @media screen and (max-width: 960px) {
    font-size: 12px;
  }
    
    @media screen and (max-width: 767px) {
    grid-template-rows: auto;
    grid-template-columns: 80vw 20vw;
    grid-template-areas:
    "logo navbar "; 

    font-size: 20px;
  }
    
  @media screen and (max-width: 400px) {
  }
`,qy=k.ul`
    grid-area: navbar;
    display: flex;
    justify-self: flex-end; 
    align-self: flex-end;
    list-style-type: none;
    margin-right: 3em;
   
    
    @media screen and (max-width: 960px) {
        margin-bottom: 1.5em;
    }

    @media screen and (max-width: 767px) {
        position: fixed;
        display: flex;
        flex-direction: column;
        top: 70px;
        right: 0;
        height: 100vh;
        width: 60vw;
        background-image: linear-gradient(180deg, rgb(13, 13, 13) 15.1%, rgba(158, 159, 159) 100%);
        padding: 20px;
        transform: translateX(500px);
        transition: 0.5s ease-in-out; 
        margin-top: 1em;
        margin-right: 0;
        margin-bottom: 0em;
        z-index: 100;
    }

    
`,Zy=k(sc)`
    display: flex; 
    color: white;
    text-decoration: none;
    text-align: right;
    margin: 1em 1em 0em 1em;
    &:hover{
    color: #ccae3f;
    }

    @media screen and (max-width: 960px) {
    
  }

    @media screen and (max-width: 767px) {
        justify-content: flex-end;
    }
`,ev=k.a`
    display: flex; 
    color: whitesmoke;
    text-decoration: none;
    text-align: right;
    margin: 1em 1em 0em 1em;
    &:hover{
    color: #ccae3f;
    }

    @media screen and (max-width: 960px) {
    
  }

    @media screen and (max-width: 767px) {
        justify-content: flex-end;
    }
`,tv=k.div`
    grid-area: logo;
    display: flex;
    flex-direction: row;
    justify-self: flex-start;
    justify-content: flex-start;
`,nv=k.img`
    height: 5em;
    margin-left: 3em;
    margin-right: 1em;
    margin-top: 0.5em;

    @media screen and (max-width: 960px) {
        height: 4em;
  }

    @media screen and (max-width: 767px) {
    margin-left: 1em;
    margin-top: 0em;
    }
`,rv=k.div`
    float: right;
    font-family: 'Poppins';
    font-size: 32px;
    font-weight: 400;
    line-height: 60px;
    letter-spacing: 0em;
    color: whitesmoke;
    margin-top: 1.5em;
    &:hover{
    color: #ccae3f;
    }

    @media screen and (max-width: 960px) {
        font-size: 32px;
        line-height: 22px;
        margin-top: 1em;
  }

    @media screen and (max-width: 767px) {
        display: flex;
        flex-direction: column;
        font-size: 24px;
        line-height: 24px;
        margin-top: 1.6em;
    }
`,iv=k.span`
    font-family: 'Poppins';
    font-size: 16px;
    color: #ccae3f;

    @media screen and (max-width: 960px) {
        font-size: 14px;
  }

    @media screen and (max-width: 767px) {
    display:block;
    
    }
`,ov=k.div`
    grid-area: navbar;
    display: none;
    
    @media screen and (max-width: 767px) {
    display: flex;
    justify-content: flex-end;
    margin-top: 2em;
    margin-right: 2em;
    }
`,Oa=k.div`
    width: 2rem;
    height: 0.25rem;
    margin-bottom: 0.25rem;
    border-radius: 10px;
    background-color: whitesmoke;
    transform-origin: 1px;
    transition: all 0.2s linear;
    
`,lv=()=>{const[e,t]=pe.useState(!1),[n]=Am({words:["UX/UI","Frontend Developer","Cinematographer","photographer","Creative"],loop:{},typeSpeed:120,deleteSpeed:120});return b(Jy,{children:[y(tv,{children:b(sc,{to:"/",children:[y(nv,{src:Jg,alt:"The dude",onClick:()=>{t(!1)}}),b(rv,{children:["Paul Evans "," ",y(iv,{children:n})]})]})}),y(qy,{style:{transform:e?"translateX(0px)":""},children:[{id:1,to:"/design",text:"UX/UI & Frontend",onClick:()=>{t(!1)},isExternal:!1},{id:2,text:"Film",href:"https://www.paulevans-dop.com/",onClick:()=>{t(!1)},isExternal:!0},{id:3,to:"/about",text:"About",onClick:()=>{t(!1)},isExternal:!1}].map(i=>i.isExternal?y(ev,{href:i.href,children:i.text},i.id):y(Zy,{onClick:i.onClick,to:i.to,children:i.text},i.id))}),y("div",{onClick:()=>t(!e),children:y(av,{})})]})};function av(){return y(ov,{children:b("div",{children:[y(Oa,{className:"burger burger1"}),y(Oa,{className:"burger burger2"}),y(Oa,{className:"burger burger3"})]})})}var Qm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Qo=W.createContext&&W.createContext(Qm),gn=globalThis&&globalThis.__assign||function(){return gn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},gn.apply(this,arguments)},sv=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Km(e){return e&&e.map(function(t,n){return W.createElement(t.tag,gn({key:n},t.attr),Km(t.child))})}function Dt(e){return function(t){return W.createElement(uv,gn({attr:gn({},e.attr)},t),Km(e.child))}}function uv(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,l=sv(e,["attr","size","title"]),a=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),W.createElement("svg",gn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:gn(gn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&W.createElement("title",null,o),e.children)};return Qo!==void 0?W.createElement(Qo.Consumer,null,function(n){return t(n)}):t(Qm)}function cv(e){return Dt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}}]})(e)}function dv(e){return Dt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}}]})(e)}function fv(e){return Dt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}}]})(e)}const pv=[{id:1,href:"https://www.linkedin.com/in/paul-evans-3a74605/",icon:y(fv,{}),des:"LinkedIn"},{id:2,href:"https://www.instagram.com/paulevanscreative/",icon:y(dv,{}),des:"Instagram"},{id:3,href:"https://github.com/PaulEvans78",icon:y(cv,{}),des:"gitHub"}],mv=k.footer`
  grid-area: footer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 100%;
  font-family: 'Poppins';
  font-size: 16px;
  line-height: 24px;
  color: whitesmoke;
  margin-bottom: 2em;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`,hv=k.p`
  display: flex;
  flex-direction: column;
  color: whitesmoke;
  border-radius: 8px;
  margin-left: 2em;
  &:hover{
    color: #ccae3f;
  }

  @media screen and (max-width: 767px) {
    margin-left: 0em;
  }
`,gv=k.div`
  grid-area: footer;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

@media screen and (max-width: 767px) {
  flex-direction: column;
  background-image: none;
}
`,yv=k.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 2em 0em 2em;
  &:hover{
    color: #ccae3f;
  }
`,vv=k.p`
  display: flex;
  flex-direction: column;
  align-content: center;
  font-family: 'Poppins';
  font-size: 16px;
  line-height: 24px;
  color: whitesmoke;
  text-align: center;
  margin-top: 0.5em;
`,wv=()=>b(mv,{children:[y(hv,{children:y("a",{href:"mailto:paul.evans.creative@gmail.com",children:"Mail: paul.evans.creative@gmail.com  "})}),y(xv,{})]}),xv=()=>y(gv,{children:y(Qo.Provider,{value:{size:"1.5em"},children:pv.map(e=>b(yv,{href:e.href,children:[e.icon,y(vv,{children:e.des})]},e.id))})});function Gm(e,t){return function(){return e.apply(t,arguments)}}const{toString:Sv}=Object.prototype,{getPrototypeOf:uc}=Object,bl=(e=>t=>{const n=Sv.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),jt=e=>(e=e.toLowerCase(),t=>bl(t)===e),Hl=e=>t=>typeof t===e,{isArray:Er}=Array,wi=Hl("undefined");function kv(e){return e!==null&&!wi(e)&&e.constructor!==null&&!wi(e.constructor)&&ht(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ym=jt("ArrayBuffer");function Cv(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ym(e.buffer),t}const Ev=Hl("string"),ht=Hl("function"),Xm=Hl("number"),Wl=e=>e!==null&&typeof e=="object",Pv=e=>e===!0||e===!1,fo=e=>{if(bl(e)!=="object")return!1;const t=uc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Tv=jt("Date"),_v=jt("File"),Rv=jt("Blob"),Ov=jt("FileList"),Av=e=>Wl(e)&&ht(e.pipe),$v=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||ht(e.append)&&((t=bl(e))==="formdata"||t==="object"&&ht(e.toString)&&e.toString()==="[object FormData]"))},Nv=jt("URLSearchParams"),zv=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ti(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Er(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),l=o.length;let a;for(r=0;r<l;r++)a=o[r],t.call(null,e[a],a,e)}}function Jm(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const qm=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Zm=e=>!wi(e)&&e!==qm;function Vs(){const{caseless:e}=Zm(this)&&this||{},t={},n=(r,i)=>{const o=e&&Jm(t,i)||i;fo(t[o])&&fo(r)?t[o]=Vs(t[o],r):fo(r)?t[o]=Vs({},r):Er(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ti(arguments[r],n);return t}const Lv=(e,t,n,{allOwnKeys:r}={})=>(Ti(t,(i,o)=>{n&&ht(i)?e[o]=Gm(i,n):e[o]=i},{allOwnKeys:r}),e),Iv=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Dv=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},jv=(e,t,n,r)=>{let i,o,l;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)l=i[o],(!r||r(l,e,t))&&!a[l]&&(t[l]=e[l],a[l]=!0);e=n!==!1&&uc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Mv=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Fv=e=>{if(!e)return null;if(Er(e))return e;let t=e.length;if(!Xm(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Uv=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&uc(Uint8Array)),Bv=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},bv=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Hv=jt("HTMLFormElement"),Wv=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Kd=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Vv=jt("RegExp"),eh=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ti(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},Qv=e=>{eh(e,(t,n)=>{if(ht(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(ht(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Kv=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Er(e)?r(e):r(String(e).split(t)),n},Gv=()=>{},Yv=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Aa="abcdefghijklmnopqrstuvwxyz",Gd="0123456789",th={DIGIT:Gd,ALPHA:Aa,ALPHA_DIGIT:Aa+Aa.toUpperCase()+Gd},Xv=(e=16,t=th.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Jv(e){return!!(e&&ht(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const qv=e=>{const t=new Array(10),n=(r,i)=>{if(Wl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Er(r)?[]:{};return Ti(r,(l,a)=>{const s=n(l,i+1);!wi(s)&&(o[a]=s)}),t[i]=void 0,o}}return r};return n(e,0)},Zv=jt("AsyncFunction"),e2=e=>e&&(Wl(e)||ht(e))&&ht(e.then)&&ht(e.catch),C={isArray:Er,isArrayBuffer:Ym,isBuffer:kv,isFormData:$v,isArrayBufferView:Cv,isString:Ev,isNumber:Xm,isBoolean:Pv,isObject:Wl,isPlainObject:fo,isUndefined:wi,isDate:Tv,isFile:_v,isBlob:Rv,isRegExp:Vv,isFunction:ht,isStream:Av,isURLSearchParams:Nv,isTypedArray:Uv,isFileList:Ov,forEach:Ti,merge:Vs,extend:Lv,trim:zv,stripBOM:Iv,inherits:Dv,toFlatObject:jv,kindOf:bl,kindOfTest:jt,endsWith:Mv,toArray:Fv,forEachEntry:Bv,matchAll:bv,isHTMLForm:Hv,hasOwnProperty:Kd,hasOwnProp:Kd,reduceDescriptors:eh,freezeMethods:Qv,toObjectSet:Kv,toCamelCase:Wv,noop:Gv,toFiniteNumber:Yv,findKey:Jm,global:qm,isContextDefined:Zm,ALPHABET:th,generateString:Xv,isSpecCompliantForm:Jv,toJSONObject:qv,isAsyncFn:Zv,isThenable:e2};function X(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}C.inherits(X,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const nh=X.prototype,rh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{rh[e]={value:e}});Object.defineProperties(X,rh);Object.defineProperty(nh,"isAxiosError",{value:!0});X.from=(e,t,n,r,i,o)=>{const l=Object.create(nh);return C.toFlatObject(e,l,function(s){return s!==Error.prototype},a=>a!=="isAxiosError"),X.call(l,e.message,t,n,r,i),l.cause=e,l.name=e.name,o&&Object.assign(l,o),l};const t2=null;function Qs(e){return C.isPlainObject(e)||C.isArray(e)}function ih(e){return C.endsWith(e,"[]")?e.slice(0,-2):e}function Yd(e,t,n){return e?e.concat(t).map(function(i,o){return i=ih(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function n2(e){return C.isArray(e)&&!e.some(Qs)}const r2=C.toFlatObject(C,{},null,function(t){return/^is[A-Z]/.test(t)});function Vl(e,t,n){if(!C.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=C.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,_){return!C.isUndefined(_[w])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,l=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&C.isSpecCompliantForm(t);if(!C.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(C.isDate(g))return g.toISOString();if(!s&&C.isBlob(g))throw new X("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(g)||C.isTypedArray(g)?s&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,w,_){let p=g;if(g&&!_&&typeof g=="object"){if(C.endsWith(w,"{}"))w=r?w:w.slice(0,-2),g=JSON.stringify(g);else if(C.isArray(g)&&n2(g)||(C.isFileList(g)||C.endsWith(w,"[]"))&&(p=C.toArray(g)))return w=ih(w),p.forEach(function(h,S){!(C.isUndefined(h)||h===null)&&t.append(l===!0?Yd([w],S,o):l===null?w:w+"[]",u(h))}),!1}return Qs(g)?!0:(t.append(Yd(_,w,o),u(g)),!1)}const f=[],m=Object.assign(r2,{defaultVisitor:c,convertValue:u,isVisitable:Qs});function v(g,w){if(!C.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+w.join("."));f.push(g),C.forEach(g,function(p,d){(!(C.isUndefined(p)||p===null)&&i.call(t,p,C.isString(d)?d.trim():d,w,m))===!0&&v(p,w?w.concat(d):[d])}),f.pop()}}if(!C.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Xd(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function cc(e,t){this._pairs=[],e&&Vl(e,this,t)}const oh=cc.prototype;oh.append=function(t,n){this._pairs.push([t,n])};oh.toString=function(t){const n=t?function(r){return t.call(this,r,Xd)}:Xd;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function i2(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function lh(e,t,n){if(!t)return e;const r=n&&n.encode||i2,i=n&&n.serialize;let o;if(i?o=i(t,n):o=C.isURLSearchParams(t)?t.toString():new cc(t,n).toString(r),o){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class o2{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){C.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Jd=o2,ah={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},l2=typeof URLSearchParams<"u"?URLSearchParams:cc,a2=typeof FormData<"u"?FormData:null,s2=typeof Blob<"u"?Blob:null,u2=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),c2=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Nt={isBrowser:!0,classes:{URLSearchParams:l2,FormData:a2,Blob:s2},isStandardBrowserEnv:u2,isStandardBrowserWebWorkerEnv:c2,protocols:["http","https","file","blob","url","data"]};function d2(e,t){return Vl(e,new Nt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Nt.isNode&&C.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function f2(e){return C.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function p2(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function sh(e){function t(n,r,i,o){let l=n[o++];const a=Number.isFinite(+l),s=o>=n.length;return l=!l&&C.isArray(i)?i.length:l,s?(C.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!a):((!i[l]||!C.isObject(i[l]))&&(i[l]=[]),t(n,r,i[l],o)&&C.isArray(i[l])&&(i[l]=p2(i[l])),!a)}if(C.isFormData(e)&&C.isFunction(e.entries)){const n={};return C.forEachEntry(e,(r,i)=>{t(f2(r),i,n,0)}),n}return null}const m2={"Content-Type":void 0};function h2(e,t,n){if(C.isString(e))try{return(t||JSON.parse)(e),C.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ql={transitional:ah,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=C.isObject(t);if(o&&C.isHTMLForm(t)&&(t=new FormData(t)),C.isFormData(t))return i&&i?JSON.stringify(sh(t)):t;if(C.isArrayBuffer(t)||C.isBuffer(t)||C.isStream(t)||C.isFile(t)||C.isBlob(t))return t;if(C.isArrayBufferView(t))return t.buffer;if(C.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return d2(t,this.formSerializer).toString();if((a=C.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return Vl(a?{"files[]":t}:t,s&&new s,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),h2(t)):t}],transformResponse:[function(t){const n=this.transitional||Ql.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&C.isString(t)&&(r&&!this.responseType||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(l)throw a.name==="SyntaxError"?X.from(a,X.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Nt.classes.FormData,Blob:Nt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};C.forEach(["delete","get","head"],function(t){Ql.headers[t]={}});C.forEach(["post","put","patch"],function(t){Ql.headers[t]=C.merge(m2)});const dc=Ql,g2=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),y2=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(l){i=l.indexOf(":"),n=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!n||t[n]&&g2[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},qd=Symbol("internals");function jr(e){return e&&String(e).trim().toLowerCase()}function po(e){return e===!1||e==null?e:C.isArray(e)?e.map(po):String(e)}function v2(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const w2=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function $a(e,t,n,r,i){if(C.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!C.isString(t)){if(C.isString(r))return t.indexOf(r)!==-1;if(C.isRegExp(r))return r.test(t)}}function x2(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function S2(e,t){const n=C.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,l){return this[r].call(this,t,i,o,l)},configurable:!0})})}class Kl{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(a,s,u){const c=jr(s);if(!c)throw new Error("header name must be a non-empty string");const f=C.findKey(i,c);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||s]=po(a))}const l=(a,s)=>C.forEach(a,(u,c)=>o(u,c,s));return C.isPlainObject(t)||t instanceof this.constructor?l(t,n):C.isString(t)&&(t=t.trim())&&!w2(t)?l(y2(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=jr(t),t){const r=C.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return v2(i);if(C.isFunction(n))return n.call(this,i,r);if(C.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=jr(t),t){const r=C.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||$a(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(l){if(l=jr(l),l){const a=C.findKey(r,l);a&&(!n||$a(r,r[a],a,n))&&(delete r[a],i=!0)}}return C.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||$a(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return C.forEach(this,(i,o)=>{const l=C.findKey(r,o);if(l){n[l]=po(i),delete n[o];return}const a=t?x2(o):String(o).trim();a!==o&&delete n[o],n[a]=po(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return C.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&C.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[qd]=this[qd]={accessors:{}}).accessors,i=this.prototype;function o(l){const a=jr(l);r[a]||(S2(i,l),r[a]=!0)}return C.isArray(t)?t.forEach(o):o(t),this}}Kl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);C.freezeMethods(Kl.prototype);C.freezeMethods(Kl);const Wt=Kl;function Na(e,t){const n=this||dc,r=t||n,i=Wt.from(r.headers);let o=r.data;return C.forEach(e,function(a){o=a.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function uh(e){return!!(e&&e.__CANCEL__)}function _i(e,t,n){X.call(this,e??"canceled",X.ERR_CANCELED,t,n),this.name="CanceledError"}C.inherits(_i,X,{__CANCEL__:!0});function k2(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new X("Request failed with status code "+n.status,[X.ERR_BAD_REQUEST,X.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const C2=Nt.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,l,a){const s=[];s.push(n+"="+encodeURIComponent(r)),C.isNumber(i)&&s.push("expires="+new Date(i).toGMTString()),C.isString(o)&&s.push("path="+o),C.isString(l)&&s.push("domain="+l),a===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function E2(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function P2(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ch(e,t){return e&&!E2(t)?P2(e,t):t}const T2=Nt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let l=o;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){const a=C.isString(l)?i(l):l;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function _2(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function R2(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,l;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),c=r[o];l||(l=u),n[i]=s,r[i]=u;let f=o,m=0;for(;f!==i;)m+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-l<t)return;const v=c&&u-c;return v?Math.round(m*1e3/v):void 0}}function Zd(e,t){let n=0;const r=R2(50,250);return i=>{const o=i.loaded,l=i.lengthComputable?i.total:void 0,a=o-n,s=r(a),u=o<=l;n=o;const c={loaded:o,total:l,progress:l?o/l:void 0,bytes:a,rate:s||void 0,estimated:s&&l&&u?(l-o)/s:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const O2=typeof XMLHttpRequest<"u",A2=O2&&function(e){return new Promise(function(n,r){let i=e.data;const o=Wt.from(e.headers).normalize(),l=e.responseType;let a;function s(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}C.isFormData(i)&&(Nt.isStandardBrowserEnv||Nt.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(v+":"+g))}const c=ch(e.baseURL,e.url);u.open(e.method.toUpperCase(),lh(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const v=Wt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),w={data:!l||l==="text"||l==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:v,config:e,request:u};k2(function(p){n(p),s()},function(p){r(p),s()},w),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(r(new X("Request aborted",X.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new X("Network Error",X.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let g=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||ah;e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),r(new X(g,w.clarifyTimeoutError?X.ETIMEDOUT:X.ECONNABORTED,e,u)),u=null},Nt.isStandardBrowserEnv){const v=(e.withCredentials||T2(c))&&e.xsrfCookieName&&C2.read(e.xsrfCookieName);v&&o.set(e.xsrfHeaderName,v)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&C.forEach(o.toJSON(),function(g,w){u.setRequestHeader(w,g)}),C.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),l&&l!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Zd(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Zd(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=v=>{u&&(r(!v||v.type?new _i(null,e,u):v),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const m=_2(c);if(m&&Nt.protocols.indexOf(m)===-1){r(new X("Unsupported protocol "+m+":",X.ERR_BAD_REQUEST,e));return}u.send(i||null)})},mo={http:t2,xhr:A2};C.forEach(mo,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const $2={getAdapter:e=>{e=C.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=C.isString(n)?mo[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new X(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(C.hasOwnProp(mo,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!C.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:mo};function za(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _i(null,e)}function ef(e){return za(e),e.headers=Wt.from(e.headers),e.data=Na.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),$2.getAdapter(e.adapter||dc.adapter)(e).then(function(r){return za(e),r.data=Na.call(e,e.transformResponse,r),r.headers=Wt.from(r.headers),r},function(r){return uh(r)||(za(e),r&&r.response&&(r.response.data=Na.call(e,e.transformResponse,r.response),r.response.headers=Wt.from(r.response.headers))),Promise.reject(r)})}const tf=e=>e instanceof Wt?e.toJSON():e;function xr(e,t){t=t||{};const n={};function r(u,c,f){return C.isPlainObject(u)&&C.isPlainObject(c)?C.merge.call({caseless:f},u,c):C.isPlainObject(c)?C.merge({},c):C.isArray(c)?c.slice():c}function i(u,c,f){if(C.isUndefined(c)){if(!C.isUndefined(u))return r(void 0,u,f)}else return r(u,c,f)}function o(u,c){if(!C.isUndefined(c))return r(void 0,c)}function l(u,c){if(C.isUndefined(c)){if(!C.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function a(u,c,f){if(f in t)return r(u,c);if(f in e)return r(void 0,u)}const s={url:o,method:o,data:o,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:a,headers:(u,c)=>i(tf(u),tf(c),!0)};return C.forEach(Object.keys(Object.assign({},e,t)),function(c){const f=s[c]||i,m=f(e[c],t[c],c);C.isUndefined(m)&&f!==a||(n[c]=m)}),n}const dh="1.4.0",fc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const nf={};fc.transitional=function(t,n,r){function i(o,l){return"[Axios v"+dh+"] Transitional option '"+o+"'"+l+(r?". "+r:"")}return(o,l,a)=>{if(t===!1)throw new X(i(l," has been removed"+(n?" in "+n:"")),X.ERR_DEPRECATED);return n&&!nf[l]&&(nf[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,l,a):!0}};function N2(e,t,n){if(typeof e!="object")throw new X("options must be an object",X.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],l=t[o];if(l){const a=e[o],s=a===void 0||l(a,o,e);if(s!==!0)throw new X("option "+o+" must be "+s,X.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new X("Unknown option "+o,X.ERR_BAD_OPTION)}}const Ks={assertOptions:N2,validators:fc},Zt=Ks.validators;class Ko{constructor(t){this.defaults=t,this.interceptors={request:new Jd,response:new Jd}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=xr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Ks.assertOptions(r,{silentJSONParsing:Zt.transitional(Zt.boolean),forcedJSONParsing:Zt.transitional(Zt.boolean),clarifyTimeoutError:Zt.transitional(Zt.boolean)},!1),i!=null&&(C.isFunction(i)?n.paramsSerializer={serialize:i}:Ks.assertOptions(i,{encode:Zt.function,serialize:Zt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l;l=o&&C.merge(o.common,o[n.method]),l&&C.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=Wt.concat(l,o);const a=[];let s=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(s=s&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let c,f=0,m;if(!s){const g=[ef.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,u),m=g.length,c=Promise.resolve(n);f<m;)c=c.then(g[f++],g[f++]);return c}m=a.length;let v=n;for(f=0;f<m;){const g=a[f++],w=a[f++];try{v=g(v)}catch(_){w.call(this,_);break}}try{c=ef.call(this,v)}catch(g){return Promise.reject(g)}for(f=0,m=u.length;f<m;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=xr(this.defaults,t);const n=ch(t.baseURL,t.url);return lh(n,t.params,t.paramsSerializer)}}C.forEach(["delete","get","head","options"],function(t){Ko.prototype[t]=function(n,r){return this.request(xr(r||{},{method:t,url:n,data:(r||{}).data}))}});C.forEach(["post","put","patch"],function(t){function n(r){return function(o,l,a){return this.request(xr(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:l}))}}Ko.prototype[t]=n(),Ko.prototype[t+"Form"]=n(!0)});const ho=Ko;class pc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const l=new Promise(a=>{r.subscribe(a),o=a}).then(i);return l.cancel=function(){r.unsubscribe(o)},l},t(function(o,l,a){r.reason||(r.reason=new _i(o,l,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new pc(function(i){t=i}),cancel:t}}}const z2=pc;function L2(e){return function(n){return e.apply(null,n)}}function I2(e){return C.isObject(e)&&e.isAxiosError===!0}const Gs={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Gs).forEach(([e,t])=>{Gs[t]=e});const D2=Gs;function fh(e){const t=new ho(e),n=Gm(ho.prototype.request,t);return C.extend(n,ho.prototype,t,{allOwnKeys:!0}),C.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return fh(xr(e,i))},n}const Pe=fh(dc);Pe.Axios=ho;Pe.CanceledError=_i;Pe.CancelToken=z2;Pe.isCancel=uh;Pe.VERSION=dh;Pe.toFormData=Vl;Pe.AxiosError=X;Pe.Cancel=Pe.CanceledError;Pe.all=function(t){return Promise.all(t)};Pe.spread=L2;Pe.isAxiosError=I2;Pe.mergeConfig=xr;Pe.AxiosHeaders=Wt;Pe.formToJSON=e=>sh(C.isHTMLForm(e)?new FormData(e):e);Pe.HttpStatusCode=D2;Pe.default=Pe;const jn=Pe,j2=k.div`
    position: relative; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3em; 
    margin-bottom: 2em;
    margin-left: 0.5em;
    width: 280px;
    height: 450px;
    background-color: whitesmoke;
    border: 2px solid white;
    border-radius: 10px;
    font-family: 'Poppins';
    font-size: 1.2rem;
    overflow: hidden;
    animation-name: slidedown;
    animation-duration: 3s;
    animation-delay: 0s;

    @keyframes slidedown {
  0%   {top:-1000px;}
  100% {top:0px;}
}

@media screen and (max-width: 960px) {
    @keyframes slidedown {
  0%   {bottom:-1000px;}
  100% {bottom:0px;}
  }
}
`,M2=k.img`
    width: 100%;
    height: 290px;
    align-self: center;
    object-fit: cover;
 `,F2=k.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: #272424;   
`,U2=k.p`
    text-align: center;
    margin-top: 0.5em;
    margin-bottom: 0.25em;
    white-space: pre-wrap;
    color: whitesmoke;
    font-size: 20px;
    font-weight: 900;
`,B2=k.p`
    color: whitesmoke;
    font-size: 14px;
    padding: 0em 1.5em 1.5em;
    text-align: center;
`,b2=k.button`
    height: 50px;
    width: 160px;
    background-color: whitesmoke;
    color: #272424;
    margin: 0em 0em 4em 4em;
    border-radius: 10px;
    font-size: 14px;
    font-weight: bold;
    &:hover{
    background: #ccae3f;
    }
`;function H2(e){return b(j2,{children:[y(M2,{src:e.mainPic,alt:"Category Image"}),b(F2,{children:[y(U2,{children:e.headline}),y(B2,{children:e.description}),y("a",{href:e.buttonLink,children:y(b2,{children:e.buttonText})})]})]})}const W2=()=>{const[e,t]=pe.useState([]);return pe.useEffect(()=>{(async()=>{const r=await jn("skills.json");t(r.data.landingpage)})()},[]),y(Yt,{children:e.map(n=>y(H2,{...n},n.id))})},V2=k.div`
  grid-area: main;
  max-width: 100vw; 
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  column-gap: 1em;

  @media screen and (max-width: 960px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    column-gap: 0em;
    align-items: center;
    padding: 0em 2em 0em 2em;
  }
`,Q2=k.p`
  position: relative;
  width: 40%;
  align-self: flex-end;
  font-family: 'Poppins';
  color: whitesmoke;
  font-size: 20px;
  margin-bottom: 2em;
  animation-name: slidein;
  animation-duration: 2s;
  animation-delay: 0s;

    @keyframes slidein {
      0%   {left:-400px;}
      100% {left:0px;}
}

@media screen and (max-width: 960px) {
  width: 100%;
  align-self: center;
  }
`,K2=()=>b(V2,{children:[y(Q2,{children:"Hi, my name is Paul Evans. I am a passionate creative who's professional background spans over 15 years, during which time I have worn many hats. UX designer, frontend developer, cinematographer and photographer not to mention concept developer and script writer. Combining my extensive experience with film and web design has been a thrilling adventure which continues to inspire and surprise me."}),y(W2,{})]}),G2=k.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 6em;
    margin-bottom: 2em;
    margin-left: 1em;
    width: 290px;
    height: 490px;
    background-color: whitesmoke;
    border: 1px solid white;
    border-radius: 10px;
    font-family: 'Poppins';
    font-size: 1.2rem;
    overflow: hidden;
    animation-name: slideup;
    animation-duration: 2s;
    animation-delay: 0s;

    @keyframes slideup {
      0%   {bottom:-600px;}
      100% {bottom:0px;}
}
`,Y2=k.img`
    width: auto;
    height: 50%;
    align-self: center;
    margin-top: 1em;
`,X2=k.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: #272424; 
    bottom: 1.5em;
`,J2=k.h5`
    text-align: center;
    margin-top: 0.75em;
    margin-bottom: 0.25em;
    white-space: pre-wrap;
    color: whitesmoke;
    font-size: 28px;
    font-weight: 900;
`,q2=k.p`
    color: whitesmoke;
    font-size: 14px;
    padding: 0em 1.5em 1.5em;
    text-align: center;
`,Z2=k.button`
    height: 40px;
    background-color: whitesmoke;
    color: #272424;
    padding: 0em 1.5em;
    margin: 0em 0em 2.5em 5em;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
    &:hover{
    background: #ccae3f;
    }
`;function ew(e){return b(G2,{children:[y(Y2,{src:e.mainPic,alt:"category Background"}),b(X2,{children:[y(J2,{children:e.headline}),y(q2,{children:e.githubdescription?e.githubdescription:e.description}),y("a",{href:e.url?e.url:e.buttonLink,children:y(Z2,{children:e.buttonText})})]})]})}const tw=()=>{const[e,t]=pe.useState([]),[n,r]=pe.useState([]);pe.useEffect(()=>{(async()=>{const s=await jn("skills.json");t(s.data.design)})(),(async()=>{const s=await jn("https://api.github.com/users/PaulEvans78/repos");r(s.data)})()},[]);function i(l){let a=n.find(s=>s.id===l);return a?a.html_url:void 0}function o(l){let a=n.find(s=>s.id===l);return a?a.description:void 0}return y(Yt,{children:e.map(l=>y(ew,{...l,url:i(l.id),githubdescription:o(l.id)},l.id))})};function nw(){return y(Yt,{children:y(tw,{})})}const rw="/assets/me_photo-b38db935.png",iw="/assets/surf-f1c34abd.png";function ow(e){return Dt({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M16.017 21.044v0zM4.743 3.519l2.049 22.981 9.194 2.552 9.22-2.556 2.051-22.977h-22.514zM23 8.775l-0.693 7.767h-0l-0.48 5.359-0.042 0.476-5.781 1.603-5.773-1.603-0.395-4.426h2.829l0.201 2.248 3.142 0.847 0.008-0.002 0.002-0 3.134-0.846 0.329-3.655-6.579 0-0.056-0.633-0.129-1.429-0.067-0.756 7.081-0 0.258-2.886h-10.786l-0.056-0.634-0.129-1.429-0.067-0.756h14.118l-0.068 0.756z"}}]})(e)}function lw(e){return Dt({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M4.665 3.411l2.063 23.176 9.258 2.574 9.284-2.578 2.065-23.172h-22.671zM8.951 8.911l-0.068-0.763h7.107v2.842h-4.005l0.259 2.911h3.746v2.842h-6.341l-0.698-7.833zM22.518 14.665l-0.667 7.483-0.043 0.48-5.822 1.616-5.814-1.616-0.398-4.463h2.849l0.202 2.267 3.163 0.854 3.165-0.856 0.329-3.686h-3.485v-2.842h6.587l-0.069 0.763zM23.032 8.911l-0.129 1.441-0.057 0.639h-6.846v-2.842h7.1l-0.068 0.762z"}}]})(e)}function aw(e){return Dt({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M4.698 3.419l2.057 23.073 9.231 2.563 9.256-2.566 2.059-23.069h-22.604zM13.226 9.394l-0.409 4.441 9.671 0.001-0.069 0.76-0.665 7.45-0.042 0.478-5.804 1.609-5.796-1.609-0.396-4.443h2.84l0.202 2.257 3.154 0.85 3.156-0.852 0.328-3.67-9.671-0.001 0.069-0.76 0.665-7.45 0.209-2.086h11.287l0.131 1.598 0.403 4.453h-2.841l-0.262-2.922-2.889-0.174h-0.515v-0.004l-2.755 0.074z"}}]})(e)}function sw(e){return Dt({tag:"svg",attr:{version:"1.1",viewBox:"0 0 34 32"},child:[{tag:"path",attr:{d:"M19.314 15.987c0 1.321-1.071 2.392-2.392 2.392s-2.392-1.071-2.392-2.392c0-1.321 1.071-2.392 2.392-2.392s2.392 1.071 2.392 2.392z"}},{tag:"path",attr:{d:"M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906 0.489 0 0.952-0.103 1.337-0.334 1.337-0.772 1.826-2.701 1.363-5.453-0.077-0.489-0.18-0.977-0.309-1.492 0.514-0.154 0.977-0.309 1.44-0.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-0.463-0.18-0.926-0.334-1.44-0.463 0.129-0.514 0.232-1.003 0.309-1.492 0.437-2.803-0.051-4.758-1.389-5.53-0.386-0.231-0.849-0.334-1.337-0.334-1.466 0-3.344 1.080-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-0.489 0-0.952 0.103-1.337 0.334-1.337 0.772-1.826 2.701-1.363 5.453 0.077 0.489 0.18 0.977 0.309 1.492-0.514 0.154-0.977 0.309-1.44 0.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909 0.463 0.18 0.926 0.334 1.44 0.463-0.129 0.514-0.232 1.003-0.309 1.492-0.437 2.752 0.051 4.707 1.363 5.453 0.386 0.232 0.849 0.334 1.337 0.334 1.492 0.051 3.344-1.029 5.221-2.829v0zM15.481 21.311c0.463 0.026 0.952 0.026 1.44 0.026s0.977 0 1.44-0.026c-0.463 0.617-0.952 1.183-1.44 1.723-0.489-0.54-0.977-1.106-1.44-1.723zM12.292 18.662c0.257 0.437 0.489 0.849 0.772 1.26-0.797-0.103-1.543-0.232-2.263-0.386 0.232-0.694 0.489-1.415 0.797-2.135 0.206 0.411 0.437 0.849 0.694 1.26zM10.8 12.463c0.72-0.154 1.466-0.283 2.263-0.386-0.257 0.412-0.514 0.823-0.772 1.26s-0.489 0.849-0.694 1.286c-0.334-0.746-0.592-1.466-0.797-2.161zM12.215 15.987c0.334-0.694 0.694-1.389 1.106-2.083 0.386-0.669 0.823-1.337 1.26-2.006 0.772-0.051 1.543-0.077 2.341-0.077 0.823 0 1.595 0.026 2.341 0.077 0.463 0.669 0.874 1.337 1.26 2.006 0.412 0.694 0.772 1.389 1.106 2.083-0.334 0.694-0.694 1.389-1.106 2.083-0.386 0.669-0.823 1.337-1.26 2.006-0.772 0.051-1.543 0.077-2.341 0.077-0.823 0-1.595-0.026-2.341-0.077-0.463-0.669-0.874-1.337-1.26-2.006-0.412-0.695-0.772-1.389-1.106-2.083v0zM22.272 14.598l-0.694-1.286c-0.257-0.437-0.489-0.849-0.772-1.26 0.797 0.103 1.543 0.232 2.263 0.386-0.231 0.72-0.489 1.44-0.797 2.161v0zM22.272 17.376c0.309 0.72 0.566 1.44 0.797 2.135-0.72 0.154-1.466 0.283-2.263 0.386 0.257-0.412 0.514-0.823 0.772-1.26 0.232-0.386 0.463-0.823 0.694-1.26v0zM22.863 26.301c-0.206 0.129-0.463 0.18-0.746 0.18-1.26 0-2.829-1.029-4.372-2.572 0.746-0.797 1.466-1.698 2.186-2.701 1.209-0.103 2.366-0.283 3.447-0.54 0.129 0.463 0.206 0.926 0.283 1.389 0.36 2.186 0.077 3.755-0.797 4.244zM24.201 12.746c2.881 0.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-0.412 0.154-0.874 0.309-1.337 0.437-0.334-1.055-0.746-2.135-1.26-3.241 0.514-1.106 0.952-2.186 1.26-3.241v0zM22.143 5.493c0.283 0 0.514 0.051 0.746 0.18 0.849 0.489 1.157 2.032 0.797 4.244-0.077 0.437-0.18 0.9-0.283 1.389-1.080-0.232-2.238-0.412-3.447-0.54-0.694-1.003-1.44-1.903-2.186-2.701 1.543-1.518 3.112-2.572 4.372-2.572zM18.362 10.663c-0.463-0.026-0.952-0.026-1.44-0.026s-0.977 0-1.44 0.026c0.463-0.617 0.952-1.183 1.44-1.723 0.489 0.54 0.977 1.132 1.44 1.723v0zM10.98 5.673c0.206-0.129 0.463-0.18 0.746-0.18 1.26 0 2.829 1.029 4.372 2.572-0.746 0.797-1.466 1.697-2.186 2.701-1.209 0.103-2.366 0.283-3.447 0.54-0.129-0.463-0.206-0.926-0.283-1.389-0.36-2.186-0.077-3.729 0.797-4.244v0zM9.643 19.228c-2.881-0.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803 0.412-0.154 0.874-0.309 1.337-0.437 0.334 1.055 0.746 2.135 1.26 3.241-0.514 1.106-0.952 2.212-1.26 3.241zM10.183 22.057c0.077-0.437 0.18-0.9 0.283-1.389 1.080 0.232 2.238 0.412 3.447 0.54 0.694 1.003 1.44 1.903 2.186 2.701-1.543 1.517-3.112 2.572-4.372 2.572-0.283 0-0.514-0.051-0.746-0.18-0.875-0.489-1.157-2.058-0.797-4.244z"}}]})(e)}function uw(e){return Dt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"}},{tag:"path",attr:{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"}},{tag:"path",attr:{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"}},{tag:"path",attr:{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"}},{tag:"path",attr:{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"}}]})(e)}function cw(e){return Dt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}}]})(e)}const dw=[{id:1,icon:y(lw,{}),des:"html5"},{id:2,icon:y(ow,{}),des:"css3"},{id:3,icon:y(aw,{}),des:"Javascript"},{id:4,icon:y(sw,{}),des:"react"},{id:5,icon:y(uw,{}),des:"figma"},{id:6,icon:y(cw,{}),des:"gitHub"}],fw=k.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  font-family: 'Poppins';
  font-size: 16px;
  line-height: 24px;
  color: whitesmoke;
  margin-bottom: 3em;
  margin-top: 3em;
`,pw=k.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

@media screen and (max-width: 767px) {
  justify-content: center;
}
`,mw=k.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 2em 0em 2em;
  

@media screen and (max-width: 767px) {
  
}
`,hw=k.p`
  display: flex;
  flex-direction: column;
  align-content: center;
  font-family: 'Poppins';
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-top: 0.5em;
`,gw=()=>y(fw,{children:y(yw,{})}),yw=()=>y(pw,{children:y(Qo.Provider,{value:{size:"1.5em"},children:dw.map(e=>b(mw,{children:[e.icon,y(hw,{children:e.des})]},e.id))})}),vw=k.div`
grid-area: main;
max-width: 100%;
display: flex;
flex-direction: column;
row-gap: 8em;

`,ww=k.div`
  display: flex;
  flex-direction: row;
  column-gap: 3em;
  align-items: center;
  max-width: 100%;
  margin-top: 4em; 
  padding: 0em 2em 0em 0em;



@media screen and (max-width: 960px) {
    flex-direction: column;
    }
`,xw=k.img`
  position: relative;
  align-self: flex-start;
  width: 40%;
  margin: 3em 0em 0em 0em;
  border-radius: 10px;
  border: 2px solid whitesmoke;
  animation-name: slideleft;
  animation-duration: 2s;
  animation-delay: 0s;

    @keyframes slideleft {
      0%   {left:-400px;}
      100% {left:0px;}
}

@media screen and (max-width: 960px) {
    margin-left: 2em;
    width: 60%;
  }
`,Sw=k.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    text-align: center;
    white-space: pre-wrap;
    padding: 2em 2em 0em 2em;
    border-radius: 10px;
    animation-name: slideright;
    animation-duration: 2s;
    animation-delay: 0s;

    @keyframes slideright {
      0%   {right:-400px;}
      100% {right:0px;}
}
`,La=k.p`
    text-align: left;
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2px;
    color: whitesmoke;
`,Ia=k.h3`
    text-align: left;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-weight: bold;
    font-size: 38px;
    letter-spacing: 1px;
    line-height: 72px;
    color: whitesmoke;

     @media screen and (max-width: 960px) {
        margin-top: 0em;
  }
`,kw=k.div`
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    column-gap: 3em;
    padding: 2em 2em 0em 0em;
    

     @media screen and (max-width: 960px) {
       flex-direction: column-reverse;
       align-items: flex-start;
  }
`,Cw=k.img`
  position: relative;
  width: 40%;
  border: 2px solid whitesmoke;
  border-radius: 10px;
  animation-name: slideright;
  animation-duration: 2s;
  animation-delay: 0s;

    @keyframes slideright {
      0%   {right:-400px;}
      100% {right:0px;}
}

   @media screen and (max-width: 960px) {
      width: 70%;
      margin-left: 2em;
    }
`,Ew=k.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    text-align: center;
    max-width: 100%;
    white-space: pre-wrap;
    padding: 2em 2em 0em 2em;
    border-radius: 10px;
    animation-name: slideleft;
    animation-duration: 2s;
    animation-delay: 0s;

    @keyframes slideleft {
      0%   {left:-400px;}
      100% {left:0px;}
}
`,Pw=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  margin-bottom: 4em;

  @media screen and (max-width: 960px) {
      height: 360px;
    }
      
  @media screen and (max-width: 767px) {
      justify-content: flex-start;
      margin-bottom: 4em;
  }
`;function Tw(){return b(vw,{children:[b(ww,{children:[y(xw,{src:rw,alt:"Paul Evans"}),b(Sw,{children:[y(Ia,{children:"About me"}),y(La,{children:"“Hi, I’m Paul! "}),y(La,{children:"I have worked as a creative for over 15 years, during which time I have worked as a cinematographer in the film and television industry, concept developer and script writer. Needing a platform to showcase my work I taught myself how to code frontend. In 2020, I decided to study web design to gain structure and further insight into techniques and methods. I have a calm and methodical approach to life, which enables me to navigate challenges with ease. My strong willpower and determination help me stay focused on the goals, even during difficult times."})]})]}),b(kw,{children:[b(Ew,{children:[y(Ia,{children:"For fun"}),y(La,{children:"Surfing and traveling are my two biggest passions. When I'm not paddling out into the sea I like to work out at the gym or swim in the lake. I also cherish the time I spend with my family, cooking and watching movies and tv shows."})]}),y(Cw,{src:iw,alt:"Surfing"})]}),b(Pw,{children:[y(Ia,{children:"My Tool Box"}),y(gw,{})]})]})}const _w="/assets/spotifylogo-c4078823.png",Rw="/assets/research-b7a4e90c.png",Ow="/assets/personas1-2a8c5d8f.png",Aw="/assets/personas2-74726e97.png",$w="/assets/krisch-617927f5.png",Nw="/assets/syn-9844cc71.png",zw="/assets/syn2-a2be3d6d.png",Lw="/assets/hifiLofiHifi-bf7bab27.png",Iw="/assets/ABTesting-e611bae3.png",Dw=k.div`

    position: relative; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
    margin-bottom: 2em;
    margin-left: 1em;
    width: 400px;
    height: 400px;
    border-radius: 10px;
    font-family: 'Poppins';
    font-size: 1.2rem;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid white;
   
    
    @media screen and (max-width: 960px) {
      height: 250px;
  }

  @media screen and (max-width: 767px) {
      height: 250px;
      width: 250px;
  }
`,jw=k.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
    align-self: center;
    border-radius: 10px;
`,Mw=k.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: flex-end;
    width: 60%;
    background-color: whitesmoke;
    padding: 1em;
    border-radius: 10px 10px 0px 0px;
`,Fw=k.h2`
    text-align: center;
    margin-bottom: 0.25em;
    white-space: pre-wrap;
    color: #272424;
    font-size: 28px;
    font-weight: 900;

    @media screen and (max-width: 767px) {
        font-size: 20px;
        margin-bottom: 0em;
  }
`,Uw=k.p`
    color: #272424;
    font-size: 14px;
    padding: 0em 1.5em 1.5em;
    text-align: center;

    @media screen and (max-width: 767px) {
        font-size: 10px;
        margin-bottom: 0em;
  }
`;function ph(e){return b(Dw,{children:[y(jw,{src:e.mainPic,alt:"Background"}),b(Mw,{children:[y(Fw,{children:e.headline}),y(Uw,{children:e.description})]})]})}const Bw=()=>{const[e,t]=pe.useState([]);return pe.useEffect(()=>{(async()=>{const r=await jn("skills.json");t(r.data.casetopcards)})()},[]),y(Yt,{children:e.map(n=>y(ph,{...n},n.id))})},bw=k.div`

    position: relative; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
    margin-bottom: 2em;
    margin-left: 1em;
    padding: 0em 0em 1em 0em;
    width: 400px;
    height: 400px;
    border-radius: 10px;
    font-family: 'Poppins';
    font-size: 1.2rem;
    overflow: hidden;
    /* border-radius: 10px;
    background-color: #272424;
    border: 1px solid whitesmoke; */
  
   @media screen and (max-width: 960px) {
    display: none;

    :nth-child(1){
      display: flex;
      width: 300px;
      height: 300px;
    }

    :nth-child(2){
      display: flex;
      width: 300px;
      height: 300px;
    }

    @media screen and (max-width: 767px) {
    display: none;

    :nth-child(1){
      display: flex;
      width: 300px;
      height: 300px;
    }

    :nth-child(2){
      display: none;
    }
  }
}
`,Hw=k.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
    align-self: center;
    margin-top: 0.5em;
    border-radius: 10px;

    @media screen and (max-width: 960px) {
      width: 300px;
      height: 300px;
  }
`;function Ww(e){return y(bw,{children:y(Hw,{src:e.mainPic,alt:"Spotify"})})}const Vw=()=>{const[e,t]=pe.useState([]);return pe.useEffect(()=>{(async()=>{const r=await jn("skills.json");t(r.data.casespotify)})()},[]),y(Yt,{children:e.map(n=>y(Ww,{...n},n.id))})},Qw=k.div`

/* grid-area: main; */
    background-color: #ccae3f;
    position: relative; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
    margin-bottom: 2em;
    margin-left: 1em;
    width: 250px;
    height: 100px;
    border-radius: 10px;
    font-family: 'Poppins';
    font-size: 1.2rem;
    overflow: hidden;
    border-radius: 100px;
    border: 2px solid white;
   
    
    @media screen and (max-width: 960px) {
        width: 250px;
        height: 75px;
  }


`,Kw=k.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    width: 60%;
    /* background-color: #ffffff; */
    padding: 1em;
    border-radius: 10px;

    /* @media screen and (max-width: 767px) {
        padding: 0em;
  } */
    
`,Gw=k.h2`
    text-align: center;
    margin-bottom: 0em;
    margin-top: 0em;
    white-space: pre-wrap;
    color: #272424;
    font-size: 28px;
    font-weight: 900;

    @media screen and (max-width: 767px) {
        font-size: 20px;
        margin-bottom: 0em;
  }
`,Yw=k.p`
    color: #272424;
    font-size: 14px;
    /* padding: 1em 1em 1em 1em; */
    text-align: center;
    margin-top: 0em;

    @media screen and (max-width: 767px) {
        font-size: 10px;
        margin-bottom: 0em;
    }
`;function Xw(e){return y(Qw,{children:b(Kw,{children:[y(Gw,{children:e.headline}),y(Yw,{children:e.description})]})})}const mh=()=>y(Yt,{children:[{id:"1",headline:"1",description:"Research"},{id:"2",headline:"2",description:"Personas"},{id:"3",headline:"3",description:"Wireframing"},{id:"4",headline:"4",description:"Prototyping"},{id:"5",headline:"5",description:"User & A/B test"}].map(t=>y(Xw,{...t},t.id))}),Jw="/assets/spotifyprototype1-e67544bc.png",qw="/assets/spotifyprototype2-9d4648d8.png",Zw="/assets/spotifyprototype3-720028f9.png",ex="/assets/ezgif.com-video-to-gif-56eba41b.gif",bn=k.h5`
    margin: 1em 0em 2em 2em;
    white-space: pre-wrap;
    flex-wrap: wrap;
    text-align: center;
    font-family: 'Poppins';
    font-size: 28px;
    color: whitesmoke;
   
    @media screen and (max-width: 960px) {
        margin-left: 0em;
        margin-bottom: 0em;

    }
`,kn=k.p`
    text-align: center;
    margin: 1em 1.5em 0em 1.5em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 16px;
    color: whitesmoke;
`,tx=k.div`
    grid-area: main;
    max-width: 100%;
    margin-top: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 3em;

    @media screen and (max-width: 960px) {
        row-gap: 1em;
        margin-top: 0em;
    }
`,nx=k.div`
    width: 100%;
    padding: 0em 0em 0em 2em;
`,rx=k.img`
    align-self: flex-start;
    width: 50%;
    margin: 1em 0em 0em 0em;
`,ix=k.p`
    align-self: flex-start;
    margin: 2em 0em 0em 2em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 20px;
    letter-spacing: 2px;
    color: whitesmoke;

    @media screen and (max-width: 767px) {
        margin-left: 1em;

    }
`,rf=k.p`
    align-self: flex-start;
    margin: 2em 0em 0em 0em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 20px;
    letter-spacing: 2px;
    color: whitesmoke;
`,ox=k.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    padding-left: 2em;
    padding-right: 2em;
    margin-bottom: 4em;

    @media screen and (max-width: 960px) {
        margin-bottom: 0em;
        padding-left: 2em;
        padding-right: 2em;
    }

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }

    
`,of=k.h5`
    font-family: 'Poppins';
    font-size: 28px;
    letter-spacing: 1px;
    color: whitesmoke;

    @media screen and (max-width: 960px) {
        margin-top: 0em;

    }
    
`,lx=k.div`
    display: flex;
    justify-content: flex-start;
    max-width: 100%;
    padding-left: 2em;
    padding-right: 2em;
    margin-bottom: 4em;

    @media screen and (max-width: 767px) {
        flex-direction: column;

    }
`,Da=k.ul`
    margin: 1em 0em 3em 0em;
`,et=k.li`
    margin: 1em 0em 0em 0em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    letter-spacing: 2px;
    font-size: 16px;
    color: whitesmoke;
`,ax=k.ul`
    margin: 1em 0em 0em 1.5em;
    
    @media screen and (max-width: 767px) {
        margin-left: 0em;

    }
`,sx=k.div`
    display: flex;
    flex-direction: row;
    max-width: 100%;
    justify-content: space-between;  

    @media screen and (max-width: 767px) {
        flex-direction: column;

    }
`,ux=k.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    padding-left: 2em;
    padding-right: 2em;
    margin-top: 3em;
    margin-bottom: 4em;

    @media screen and (max-width: 960px) {
        margin-top: 0em;
        margin-bottom: 4em;
    }

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`,cx=k.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 4em;
    white-space: pre-wrap;
    max-width: 100%;
    margin-top: 4em;
    margin-bottom: 4em;
    padding-left: 2em;
    padding-right: 2em;

    @media screen and (max-width: 960px) {
        row-gap: 0em;
    }
`,dx=k.div`
    display: flex;
    flex-direction: column;
    padding-right: 2em;

    @media screen and (max-width: 767px) {
        padding-right: 0em;
    }
`,lf=k.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    row-gap: 4em;
    flex-wrap: wrap;
    max-width: 100%;
    margin-top: 4em;
    margin-bottom: 4em;
    padding-left: 2em;
    padding-right: 2em;

    @media screen and (max-width: 960px) {
        flex-direction: column;
        align-items: center;
        margin-top: 0em;
    }

    @media screen and (max-width: 767px) {
        padding-left: 0em;
        padding-right: 0em;
    }
`,fx=k.img`
    align-self: center;
    width: 75%;
    height: auto;
    margin: 2em 0em 0em 0em;
    border-radius: 10px;
`,ja=k.img`
    width: 30%;
    margin: 1em 0em 0em 1.5em;
    border-radius: 10px;

    @media screen and (max-width: 960px) {
        width: 60%;
        margin: 1em 0em 0em 0em;
    }
`,af=k.img`
    width: 45%;
    margin: 3em 0em 3em 1.5em;
    border-radius: 10px;

    @media screen and (max-width: 960px) {
        width: 80%;
        margin: 1em 0em 0em 0em;
    }
`,px=k.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    row-gap: 4em;
    align-items: center;
    max-width: 100%;
    margin-bottom: 3em;
    padding-left: 2em;
    padding-right: 2em;

    @media screen and (max-width: 960px) {
        row-gap: 0em;
    }
`,mx=k.img`
    width: 50%;
    align-self: center;
    margin: 3em 1em 2em 1em;

    @media screen and (max-width: 767px) {
        width: 100%;
    }
`,hx=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 3em;
    max-width: 100%;
    margin-bottom: 4em;
    margin-left: 1.5em;
    margin-right: 1.5em;
    padding-left: 2em;
    padding-right: 2em;

    @media screen and (max-width: 960px) {
        row-gap: 1em;
    }

    @media screen and (max-width: 767px) {
        padding-left: 0em;
        padding-right: 0em;
    }
`,Ma=k.img`
    width: 28%;
    margin: 3em 0em 0em 0em;
    border-radius: 10px;

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`,gx=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4em;
    max-width: 100%;
    padding-left: 2em;
    padding-right: 2em;
    margin-bottom: 4em;

    @media screen and (max-width: 767px) {
        padding-left: 0em;
        padding-right: 0em;
    }
`,yx=k.img`
    width: 50%;
    margin: 1em 0em 0em 1.5em;
    border-radius: 10px;

    @media screen and (max-width: 960px) {
        width: 90%;
        margin: 1em 0em 0em 0em;
    }

`,vx=k.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    max-width: 100%;
    margin-bottom: 4em;
    padding-left: 2em;
    padding-right: 2em;
    border-radius: 10px;
`,wx=k.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2em;
    padding-right: 2em;
    margin-bottom: 4em;
`,xx=k.img`
    height: 500px;
    margin-left: 3em;
    margin-top: 4em;
    margin-bottom: 4em;
    border-radius: 10px;

    @media screen and (max-width: 767px) {
        margin-left: 1em;
    }
`;function Sx(){return b(tx,{children:[y(nx,{children:y(rx,{src:_w,alt:"Spotify Logo"})}),y(ix,{children:"Improving Spotify's accessibility features for the visually and hearing impaired. "}),y(ox,{children:y(Vw,{})}),b(lx,{children:[b(Da,{children:[y(of,{children:"Problem "}),y(et,{children:"Increase accessibility for visually impaired users. We want to make our service available to all kinds of users. Creating a setting that increases the font size so that visually impaired users can more easily navigate the service."}),y(et,{children:'Enable captions in podcasts for people with hearing loss. People with hearing loss may also be interested in listening to information provided in podcasts. It can therefore be good to enable captions "audio texts" when a podcast is played.'}),y(et,{children:"Improve Microcopy for features in the service There are words and concepts in Settings that may not be understood by everyone. Review the microcopy and make suggestions for improvements."})]}),b(ax,{children:[y(of,{children:"Solution "}),y(et,{children:"Enhance accessibility for users with visual impairments by implementing features to increase font size within the app and develop functionalities that facilitate easy navigation for visually impaired users without negatively impacting the interface."}),y(et,{children:"Enable captions in podcasts for people with hearing impairments. Initially, the audio transcripts may need to be manually inserted by the user, but there may be other solutions that can be implemented later on."}),y(et,{children:"Improve microcopy for features in the service. Review the microcopy and provide suggestions for improvements."})]})]}),y(bn,{children:"Design Process "}),y(sx,{children:y(mh,{})}),y(ux,{children:y(Bw,{})}),y(bn,{children:"Research "}),b(cx,{children:[b(dx,{children:[y(kn,{children:"Qualitative and quantitive methods. The importance of this process is to gain better insight into the users wants and needs. The returned data was then analysed. To better understand the user Personas were created."}),b(Da,{children:[y(rf,{children:"My Role "}),y(et,{children:"Compile interview questions and questionnaires"}),y(et,{children:"Contact associations and organizations that work with accessibility, primarily for the visually impaired"}),y(et,{children:"Conduct interviews"}),y(et,{children:"Analyse incoming data"}),y(et,{children:"Build personas"})]})]}),y(fx,{src:Rw,alt:"Research"})]}),b(lf,{children:[y(ja,{src:$w,alt:"Krischel Kommunikation"}),y(ja,{src:Nw,alt:"Synskadades Riksforbund"}),y(ja,{src:zw,alt:"Synskadades Stiftelse"}),y(af,{src:Ow,alt:"Persona"}),y(af,{src:Aw,alt:"Persona"})]}),y(bn,{children:"LoFi and HiFi Sketches "}),b(px,{children:[y(mx,{src:Lw,alt:"Lofi and HiFi Frames"}),y(kn,{children:"Before building prototypes, we created lofi sketches which provided us with the basic layout and structure for our hifi designs."})]}),y(bn,{children:"Prototype "}),b(hx,{children:[y(kn,{children:"Following Spotify's existing design style guide we implemented our solutions to our three PBI’s. Added a feature to increase the size of icons and fonts without compromising the layout for the visually impaired. Clarified microcopy to make it easier to understand. And, finally we developed captions for podcasts, similar to the lyrics feature for music, for the hearing impaired."}),b(Da,{children:[y(rf,{children:"My Role "}),y(et,{children:"Developing the new accessibility menu & settings. "}),y(et,{children:"Implement an integrated functionality that allows for the enlargement of icons and fonts without causing any disruptions to the overall layout"})]}),b(lf,{children:[y(Ma,{src:Jw,alt:"Prototype Frames"}),y(Ma,{src:qw,alt:"Prototype Frames"}),y(Ma,{src:Zw,alt:"Prototype Frames"})]})]}),y(bn,{children:"User Testing and A/B Testing "}),b(gx,{children:[y(kn,{children:"At the same time as we tested our prototype we also conducted A/B tests of certain features. For example placement of the accessibility icon and different page layouts. Final design choices were made based on the feedback we received."}),y(yx,{src:Iw,alt:"AB Testing"})]}),y(bn,{children:"Learnings "}),b(vx,{children:[y(xx,{src:ex,alt:"Prototype"}),b(wx,{children:[y(kn,{children:"As Scrum master I learned that effective communication, respect, and patience for each other's work processes are essential elements for any successful team project. Keeping to a clear project plan and regularly reassessing priorities can help ensure that the project stays on track and meets its goals. Regarding accessibility, it's crucial to consider the needs of all users, including those with disabilities, when developing software or digital products. Following WCAG guidelines is an excellent way to ensure that the product is accessible to as many people as possible."}),y(kn,{children:"I also want to highlight that this page represents only a small portion of all the work that was done. "}),y(kn,{children:"Thank you for reading my case study!"})]})]})]})}const kx="/assets/cookWiseLogo-d3ad7fc4.png",Cx="/assets/miro-68d766fa.png",Ex="/assets/personasCookWise-9a25a4e6.png",Px="/assets/questions-08ddfbdf.png",Tx="/assets/CookWiselofi-6a76517b.png",_x="/assets/testResults-009b98bc.png",Rx=()=>{const[e,t]=pe.useState([]);return pe.useEffect(()=>{(async()=>{const r=await jn("skills.json");t(r.data.cookwisetopcards)})()},[]),y(Yt,{children:e.map(n=>y(ph,{...n},n.id))})},Ox=k.div`

    position: relative; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
    margin-bottom: 2em;
    margin-left: 1em;
    padding: 0em 0em 1em 0em;
    width: 400px;
    height: 400px;
    border-radius: 10px;
    font-family: 'Poppins';
    font-size: 1.2rem;
    overflow: hidden;
    /* border-radius: 10px;
    background-color: #272424;
    border: 1px solid whitesmoke; */
  
   @media screen and (max-width: 960px) {
    display: none;

    :nth-child(1){
      display: flex;
      width: 300px;
      height: 300px;
    }

    :nth-child(2){
      display: flex;
      width: 300px;
      height: 300px;
    }

    @media screen and (max-width: 767px) {
    display: none;

    :nth-child(1){
      display: flex;
      width: 300px;
      height: 300px;
    }

    :nth-child(2){
      display: none;
    }
  }
}
`,Ax=k.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
    align-self: center;
    margin-top: 0.5em;
    border-radius: 10px;

    @media screen and (max-width: 960px) {
      width: 300px;
      height: 300px;
  }
`;function $x(e){return y(Ox,{children:y(Ax,{src:e.mainPic,alt:"Spotify"})})}const Nx=()=>{const[e,t]=pe.useState([]);return pe.useEffect(()=>{(async()=>{const r=await jn("skills.json");t(r.data.casecookwise)})()},[]),y(Yt,{children:e.map(n=>y($x,{...n},n.id))})},zx="/assets/colors-754b24c7.png",Lx="/assets/CWfonts-1aefa1c5.png",Ix="/assets/signup-81bf0a63.png",Dx="/assets/safety-30f4d397.png",jx="/assets/CookWise-9b0207e2.gif",Hn=k.h5`
    margin: 1em 0em 2em 2em;
    white-space: pre-wrap;
    flex-wrap: wrap;
    text-align: center;
    font-family: 'Poppins';
    font-size: 28px;
    color: whitesmoke;
   
    @media screen and (max-width: 960px) {
        margin-left: 0em;
        margin-bottom: 0em;

    }
`,Cn=k.p`
    text-align: center;
    margin: 1em 1.5em 0em 1.5em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 16px;
    color: whitesmoke;
`,Mx=k.div`
    grid-area: main;
    max-width: 100%;
    margin-top: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 3em;

    @media screen and (max-width: 960px) {
        row-gap: 1em;
        margin-top: 0em;

    }
`,Fx=k.div`
    width: 100%;
    padding: 0em 0em 0em 2em;
`,Ux=k.img`
    align-self: flex-start;
    width: 70%;
    margin: 1em 0em 0em 0em;
    border-radius: 10px;
`,Bx=k.p`
    align-self: flex-start;
    margin: 2em 0em 0em 2em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 20px;
    letter-spacing: 2px;
    color: whitesmoke;

    @media screen and (max-width: 767px) {
        margin-left: 1em;

    }
`,sf=k.p`
    align-self: flex-start;
    margin: 2em 0em 0em 0em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 20px;
    letter-spacing: 2px;
    color: whitesmoke;
`,bx=k.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    padding-left: 2em;
    padding-right: 2em;
    margin-bottom: 4em;

    @media screen and (max-width: 960px) {
        margin-bottom: 0em;
        padding-left: 2em;
        padding-right: 2em;
    }

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }

    
`,Hx=k.h5`
    font-family: 'Poppins';
    font-size: 28px;
    letter-spacing: 1px;
    color: whitesmoke;

    @media screen and (max-width: 960px) {
        margin-top: 0em;

    }
    
`,Wx=k.div`
    display: flex;
    justify-content: flex-start;
    max-width: 100%;
    padding-left: 2em;
    padding-right: 2em;
    margin-bottom: 4em;

    @media screen and (max-width: 767px) {
        flex-direction: column;

    }
`,Fa=k.ul`
    margin: 1em 0em 3em 0em;
`,ct=k.li`
    margin: 1em 0em 0em 0em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    letter-spacing: 2px;
    font-size: 16px;
    color: whitesmoke;
`;k.ul`
    margin: 1em 0em 0em 1.5em;
    
    @media screen and (max-width: 767px) {
        margin-left: 0em;

    }
`;const Vx=k.div`
    display: flex;
    flex-direction: row;
    max-width: 100%;
    justify-content: space-between;  

    @media screen and (max-width: 767px) {
        flex-direction: column;

    }
`,Qx=k.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    padding-left: 2em;
    padding-right: 2em;
    margin-top: 3em;
    margin-bottom: 4em;

    @media screen and (max-width: 960px) {
        margin-top: 0em;
        margin-bottom: 4em;
    }

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`,Kx=k.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 4em;
    white-space: pre-wrap;
    max-width: 100%;
    margin-top: 4em;
    margin-bottom: 4em;
    padding-left: 2em;
    padding-right: 2em;

    @media screen and (max-width: 960px) {
        row-gap: 0em;
    }
`,Gx=k.div`
    display: flex;
    flex-direction: column;
    padding-right: 2em;

    @media screen and (max-width: 767px) {
        padding-right: 0em;
    }
`,uf=k.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    row-gap: 4em;
    flex-wrap: wrap;
    max-width: 100%;
    margin-top: 4em;
    margin-bottom: 4em;
    padding-left: 2em;
    padding-right: 2em;

    @media screen and (max-width: 960px) {
        flex-direction: column;
        align-items: center;
        margin-top: 0em;
    }

    @media screen and (max-width: 767px) {
        padding-left: 0em;
        padding-right: 0em;
    }
`,Yx=k.img`
    align-self: center;
    width: 75%;
    height: auto;
    margin: 2em 0em 0em 0em;
    border-radius: 10px;

    @media screen and (max-width: 767px) {
         width: 93%;
    }
`,Xx=k.img`
    width: 75%;
    margin: 1em 0em 0em 1.5em;
    border-radius: 10px;

    @media screen and (max-width: 960px) {
        width: 80%;
        margin: 1em 0em 0em 0em;
    }
`,Jx=k.img`
    width: 75%;
    margin: 3em 0em 3em 1.5em;
    border-radius: 10px;

    @media screen and (max-width: 960px) {
        width: 80%;
        margin: 1em 0em 0em 0em;
    }
`,qx=k.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    row-gap: 4em;
    align-items: center;
    max-width: 100%;
    margin-bottom: 3em;
    padding-left: 2em;
    padding-right: 2em;

    @media screen and (max-width: 960px) {
        row-gap: 0em;
    }
`,Zx=k.img`
    width: 75%;
    align-self: center;
    margin: 3em 1em 2em 1em;
    border-radius: 10px;

    @media screen and (max-width: 767px) {
        width: 100%;
    }
`,e3=k.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 3em;
    max-width: 100%;
    margin-bottom: 4em;
    margin-left: 1.5em;
    margin-right: 1.5em;
    padding-left: 2em;
    padding-right: 2em;

    @media screen and (max-width: 960px) {
        row-gap: 1em;
    }

    @media screen and (max-width: 767px) {
        padding-left: 0em;
        padding-right: 0em;
    }
`,Yi=k.img`
    width: 75%;
    margin: 3em 0em 0em 0em;
    border-radius: 10px;

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`,t3=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4em;
    max-width: 100%;
    padding-left: 2em;
    padding-right: 2em;
    margin-bottom: 4em;

    @media screen and (max-width: 767px) {
        padding-left: 0em;
        padding-right: 0em;
    }
`,n3=k.img`
    width: 75%;
    margin: 1em 0em 0em 1.5em;
    border-radius: 10px;

    @media screen and (max-width: 960px) {
        width: 90%;
        margin: 1em 0em 0em 0em;
    }

`,r3=k.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    max-width: 100%;
    margin-bottom: 4em;
    padding-left: 2em;
    padding-right: 2em;
    border-radius: 10px;
`,i3=k.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2em;
    padding-right: 2em;
    margin-bottom: 4em;
`,o3=k.img`
    height: 500px;
    margin-left: 3em;
    margin-top: 4em;
    margin-bottom: 4em;
    border-radius: 10px;

    @media screen and (max-width: 767px) {
        margin-left: 1em;
    }
`;function l3(){return b(Mx,{children:[y(Fx,{children:y(Ux,{src:kx,alt:"Cooke Wise Logo"})}),y(Bx,{children:"Cookwise is a start-up company that is looking for a proposal for a complete design system for its brand and app.  "}),y(bx,{children:y(Nx,{})}),y(Wx,{children:b(Fa,{children:[y(Hx,{children:"The Task "}),y(ct,{children:"Find people who fall within the framework of the target audience who can provide valuable input to the creation of your design system."}),y(ct,{children:"Create a proposal for a design system in Figma that contains principles, guidelines and components based on what you think the users need and want."}),y(ct,{children:"Create sketches, mockups and/or prototypes that show how the design system is used."}),y(ct,{children:"Create a presentation where you pitch your design system. Imagine that you have to pitch this design system to the CEO of Cookwise."})]})}),y(Hn,{children:"Design Process "}),y(Vx,{children:y(mh,{})}),y(Qx,{children:y(Rx,{})}),y(Hn,{children:"Research "}),b(Kx,{children:[b(Gx,{children:[y(Cn,{children:"Qualitative interviews were used. The importance of this process is to gain better insight into the users. The returned data was then analysed. To better understand the user Personas were created."}),b(Fa,{children:[y(sf,{children:"My Role "}),y(ct,{children:"Compile interview questions"}),y(ct,{children:"Contact individuals within the target group. Men and women 27-50 "}),y(ct,{children:"Conduct interviews"}),y(ct,{children:"Analyse the answers"}),y(ct,{children:"Build personas"})]})]}),y(Yx,{src:Cx,alt:"Research"})]}),b(uf,{children:[y(Xx,{src:Px,alt:"Interview Questions"}),y(Jx,{src:Ex,alt:"Personas"})]}),y(Hn,{children:"LoFi and HiFi Sketches "}),b(qx,{children:[y(Zx,{src:Tx,alt:"Lofi and HiFi Frames"}),y(Cn,{children:"Before building prototypes, we created lofi sketches which provided us with the basic layout and structure for our hifi designs."})]}),y(Hn,{children:"Design System & Prototype "}),b(e3,{children:[y(Cn,{children:"Following our user research we implemented a design system and designed hifi frames for the cookwise app . The app should include all features a normal oven has. Features to monitor the cooking plus safety and cleaning features."}),b(Fa,{children:[y(sf,{children:"My Role "}),y(ct,{children:"Create a design System "}),y(ct,{children:"Develope a Log in and Sign up page. "}),y(ct,{children:"Create a safety menu and safety features."})]}),b(uf,{children:[y(Yi,{src:zx,alt:"Design Colors"}),y(Yi,{src:Lx,alt:"Design Fonts"}),y(Yi,{src:Ix,alt:"Sign Up Frames"}),y(Yi,{src:Dx,alt:"Safety Frames"})]})]}),y(Hn,{children:"User Testing"}),b(t3,{children:[y(Cn,{children:"User testing was conducted by sending out a prototype to the same people we interviewed during User Research."}),y(n3,{src:_x,alt:"Test Results"})]}),y(Hn,{children:"Conclusion "}),b(r3,{children:[y(o3,{src:jx,alt:"Prototype"}),b(i3,{children:[y(Cn,{children:"We came to the conclusion that our app is simple and very clear due to the icons and the layout. If the app is to be used, there are some adjustments we need to work on. We will improve the points we received feedback on. Such as, the timer function and the temperature function which needs to be clearer and simpler."}),y(Cn,{children:"I also want to highlight that this page represents only a small portion of all the work that was done. "}),y(Cn,{children:"Thank you for reading my case study!"})]})]})]})}function a3(e){return Dt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"}}]})(e)}k.div`
overflowY: scroll;
height: 2500px;
`;const s3=k.div`
position: fixed;
width: 100%;
left: 50%;
bottom: 40px;
height: 20px;
font-size: 3rem;
z-index: 1;
cursor: pointer;
color: #ccae3f;

@media screen and (max-width: 767px) {
    left: 80%;
  }
`,u3=()=>{const[e,t]=pe.useState(!1),n=()=>{const i=document.documentElement.scrollTop;i>300?t(!0):i<=300&&t(!1)},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return window.addEventListener("scroll",n),y(s3,{children:y(a3,{onClick:r,style:{display:e?"inline":"none"}})})},c3=k.div`
min-height: 100vh;
min-width: 400px;
display: grid;
grid-template-rows: 7rem repeat(3, 1fr) 7rem;
grid-template-columns: repeat(5, 1fr);
grid-template-areas:
"top top top top top"
"main main main main main"
"main main main main main"
"main main main main main"
"footer footer footer footer footer";

@media screen and (max-width: 767px) {
grid-template-rows: 7rem repeat(2, 1fr) 7rem;
grid-template-columns: repeat(2, 1fr);
grid-template-areas:
"top top "
"main main "
"main main "
"main main "
"footer footer"; 
  }
`,d3=k.div`
grid-area: main;
max-width: 100vw;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: flex-end;
justify-items: center;
justify-content: space-evenly;
margin-bottom: 1.5em;
padding: 0em 2em 0em 2em;

@media screen and (max-width: 767px) {
flex-direction: column;
align-items: center;
padding: 0em 0em 0em 0em;

}
`;function f3(){return y(Ky,{children:b(c3,{children:[y(lv,{}),y(d3,{children:b(Qy,{children:[y(Dr,{exact:!0,path:"/",children:y(K2,{})}),y(Dr,{path:"/about",children:y(Tw,{})}),y(Dr,{path:"/design",children:y(nw,{})}),y(Dr,{path:"/CaseSpotify",children:y(Sx,{})}),y(Dr,{path:"/CookWise",children:y(l3,{})})]})}),y(u3,{}),y(wv,{})]})})}Ua.createRoot(document.getElementById("root")).render(y(W.StrictMode,{children:y(f3,{})}));
