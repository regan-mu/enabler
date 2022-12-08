function Gp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Kp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Xp(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var R={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jr=Symbol.for("react.element"),Yp=Symbol.for("react.portal"),Jp=Symbol.for("react.fragment"),Zp=Symbol.for("react.strict_mode"),em=Symbol.for("react.profiler"),tm=Symbol.for("react.provider"),nm=Symbol.for("react.context"),rm=Symbol.for("react.forward_ref"),im=Symbol.for("react.suspense"),om=Symbol.for("react.memo"),sm=Symbol.for("react.lazy"),du=Symbol.iterator;function am(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var ud={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cd=Object.assign,dd={};function qn(e,t,n){this.props=e,this.context=t,this.refs=dd,this.updater=n||ud}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fd(){}fd.prototype=qn.prototype;function Ja(e,t,n){this.props=e,this.context=t,this.refs=dd,this.updater=n||ud}var Za=Ja.prototype=new fd;Za.constructor=Ja;cd(Za,qn.prototype);Za.isPureReactComponent=!0;var fu=Array.isArray,hd=Object.prototype.hasOwnProperty,el={current:null},pd={key:!0,ref:!0,__self:!0,__source:!0};function md(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)hd.call(t,r)&&!pd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Jr,type:e,key:o,ref:s,props:i,_owner:el.current}}function lm(e,t){return{$$typeof:Jr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function tl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jr}function um(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var hu=/\/+/g;function is(e,t){return typeof e=="object"&&e!==null&&e.key!=null?um(""+e.key):t.toString(36)}function Li(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Jr:case Yp:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+is(s,0):r,fu(i)?(n="",e!=null&&(n=e.replace(hu,"$&/")+"/"),Li(i,t,n,"",function(u){return u})):i!=null&&(tl(i)&&(i=lm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(hu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",fu(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+is(o,a);s+=Li(o,t,n,l,i)}else if(l=am(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+is(o,a++),s+=Li(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function mi(e,t,n){if(e==null)return e;var r=[],i=0;return Li(e,r,"","",function(o){return t.call(n,o,i++)}),r}function cm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Mi={transition:null},dm={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Mi,ReactCurrentOwner:el};L.Children={map:mi,forEach:function(e,t,n){mi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mi(e,function(){t++}),t},toArray:function(e){return mi(e,function(t){return t})||[]},only:function(e){if(!tl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=qn;L.Fragment=Jp;L.Profiler=em;L.PureComponent=Ja;L.StrictMode=Zp;L.Suspense=im;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dm;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=cd({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=el.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)hd.call(t,l)&&!pd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Jr,type:e.type,key:i,ref:o,props:r,_owner:s}};L.createContext=function(e){return e={$$typeof:nm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tm,_context:e},e.Consumer=e};L.createElement=md;L.createFactory=function(e){var t=md.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:rm,render:e}};L.isValidElement=tl;L.lazy=function(e){return{$$typeof:sm,_payload:{_status:-1,_result:e},_init:cm}};L.memo=function(e,t){return{$$typeof:om,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Mi.transition;Mi.transition={};try{e()}finally{Mi.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return he.current.useCallback(e,t)};L.useContext=function(e){return he.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return he.current.useDeferredValue(e)};L.useEffect=function(e,t){return he.current.useEffect(e,t)};L.useId=function(){return he.current.useId()};L.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return he.current.useMemo(e,t)};L.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};L.useRef=function(e){return he.current.useRef(e)};L.useState=function(e){return he.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return he.current.useTransition()};L.version="18.2.0";(function(e){e.exports=L})(R);const gd=Kp(R.exports),Qs=Gp({__proto__:null,default:gd},[R.exports]);var qs={},vd={exports:{}},ke={},yd={exports:{}},wd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,N){var D=I.length;I.push(N);e:for(;0<D;){var G=D-1>>>1,Z=I[G];if(0<i(Z,N))I[G]=N,I[D]=Z,D=G;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var N=I[0],D=I.pop();if(D!==N){I[0]=D;e:for(var G=0,Z=I.length,hi=Z>>>1;G<hi;){var Ht=2*(G+1)-1,rs=I[Ht],Wt=Ht+1,pi=I[Wt];if(0>i(rs,D))Wt<Z&&0>i(pi,rs)?(I[G]=pi,I[Wt]=D,G=Wt):(I[G]=rs,I[Ht]=D,G=Ht);else if(Wt<Z&&0>i(pi,D))I[G]=pi,I[Wt]=D,G=Wt;else break e}}return N}function i(I,N){var D=I.sortIndex-N.sortIndex;return D!==0?D:I.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,m=null,h=3,g=!1,y=!1,v=!1,O=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=I)r(u),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(u)}}function w(I){if(v=!1,p(I),!y)if(n(l)!==null)y=!0,ts(E);else{var N=n(u);N!==null&&ns(w,N.startTime-I)}}function E(I,N){y=!1,v&&(v=!1,f(T),T=-1),g=!0;var D=h;try{for(p(N),m=n(l);m!==null&&(!(m.expirationTime>N)||I&&!Me());){var G=m.callback;if(typeof G=="function"){m.callback=null,h=m.priorityLevel;var Z=G(m.expirationTime<=N);N=e.unstable_now(),typeof Z=="function"?m.callback=Z:m===n(l)&&r(l),p(N)}else r(l);m=n(l)}if(m!==null)var hi=!0;else{var Ht=n(u);Ht!==null&&ns(w,Ht.startTime-N),hi=!1}return hi}finally{m=null,h=D,g=!1}}var k=!1,C=null,T=-1,b=5,x=-1;function Me(){return!(e.unstable_now()-x<b)}function er(){if(C!==null){var I=e.unstable_now();x=I;var N=!0;try{N=C(!0,I)}finally{N?tr():(k=!1,C=null)}}else k=!1}var tr;if(typeof c=="function")tr=function(){c(er)};else if(typeof MessageChannel<"u"){var cu=new MessageChannel,qp=cu.port2;cu.port1.onmessage=er,tr=function(){qp.postMessage(null)}}else tr=function(){O(er,0)};function ts(I){C=I,k||(k=!0,tr())}function ns(I,N){T=O(function(){I(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,ts(E))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var D=h;h=N;try{return I()}finally{h=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,N){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var D=h;h=I;try{return N()}finally{h=D}},e.unstable_scheduleCallback=function(I,N,D){var G=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?G+D:G):D=G,I){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=D+Z,I={id:d++,callback:N,priorityLevel:I,startTime:D,expirationTime:Z,sortIndex:-1},D>G?(I.sortIndex=D,t(u,I),n(l)===null&&I===n(u)&&(v?(f(T),T=-1):v=!0,ns(w,D-G))):(I.sortIndex=Z,t(l,I),y||g||(y=!0,ts(E))),I},e.unstable_shouldYield=Me,e.unstable_wrapCallback=function(I){var N=h;return function(){var D=h;h=N;try{return I.apply(this,arguments)}finally{h=D}}}})(wd);(function(e){e.exports=wd})(yd);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad=R.exports,Ie=yd.exports;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _d=new Set,Rr={};function pn(e,t){bn(e,t),bn(e+"Capture",t)}function bn(e,t){for(Rr[e]=t,e=0;e<t.length;e++)_d.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gs=Object.prototype.hasOwnProperty,fm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pu={},mu={};function hm(e){return Gs.call(mu,e)?!0:Gs.call(pu,e)?!1:fm.test(e)?mu[e]=!0:(pu[e]=!0,!1)}function pm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function mm(e,t,n,r){if(t===null||typeof t>"u"||pm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var nl=/[\-:]([a-z])/g;function rl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nl,rl);oe[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nl,rl);oe[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nl,rl);oe[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function il(e,t,n,r){var i=oe.hasOwnProperty(t)?oe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(mm(t,n,i,r)&&(n=null),r||i===null?hm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ht=Ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gi=Symbol.for("react.element"),wn=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),ol=Symbol.for("react.strict_mode"),Ks=Symbol.for("react.profiler"),Ed=Symbol.for("react.provider"),Sd=Symbol.for("react.context"),sl=Symbol.for("react.forward_ref"),Xs=Symbol.for("react.suspense"),Ys=Symbol.for("react.suspense_list"),al=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),Id=Symbol.for("react.offscreen"),gu=Symbol.iterator;function nr(e){return e===null||typeof e!="object"?null:(e=gu&&e[gu]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,os;function cr(e){if(os===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);os=t&&t[1]||""}return`
`+os+e}var ss=!1;function as(e,t){if(!e||ss)return"";ss=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ss=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?cr(e):""}function gm(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=as(e.type,!1),e;case 11:return e=as(e.type.render,!1),e;case 1:return e=as(e.type,!0),e;default:return""}}function Js(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case An:return"Fragment";case wn:return"Portal";case Ks:return"Profiler";case ol:return"StrictMode";case Xs:return"Suspense";case Ys:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sd:return(e.displayName||"Context")+".Consumer";case Ed:return(e._context.displayName||"Context")+".Provider";case sl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case al:return t=e.displayName||null,t!==null?t:Js(e.type)||"Memo";case vt:t=e._payload,e=e._init;try{return Js(e(t))}catch{}}return null}function vm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Js(t);case 8:return t===ol?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ym(e){var t=kd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vi(e){e._valueTracker||(e._valueTracker=ym(e))}function Cd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=kd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zs(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function vu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Td(e,t){t=t.checked,t!=null&&il(e,"checked",t,!1)}function ea(e,t){Td(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ta(e,t.type,n):t.hasOwnProperty("defaultValue")&&ta(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ta(e,t,n){(t!=="number"||Xi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var dr=Array.isArray;function Dn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function na(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(dr(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function Rd(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Au(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ra(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yi,Nd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yi=yi||document.createElement("div"),yi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wm=["Webkit","ms","Moz","O"];Object.keys(vr).forEach(function(e){wm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vr[t]=vr[e]})});function Od(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vr.hasOwnProperty(e)&&vr[e]?(""+t).trim():t+"px"}function Dd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Od(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Am=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ia(e,t){if(t){if(Am[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function oa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sa=null;function ll(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var aa=null,xn=null,Ln=null;function _u(e){if(e=ti(e)){if(typeof aa!="function")throw Error(A(280));var t=e.stateNode;t&&(t=xo(t),aa(e.stateNode,e.type,t))}}function xd(e){xn?Ln?Ln.push(e):Ln=[e]:xn=e}function Ld(){if(xn){var e=xn,t=Ln;if(Ln=xn=null,_u(e),t)for(e=0;e<t.length;e++)_u(t[e])}}function Md(e,t){return e(t)}function Ud(){}var ls=!1;function Bd(e,t,n){if(ls)return e(t,n);ls=!0;try{return Md(e,t,n)}finally{ls=!1,(xn!==null||Ln!==null)&&(Ud(),Ld())}}function Nr(e,t){var n=e.stateNode;if(n===null)return null;var r=xo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var la=!1;if(at)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){la=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{la=!1}function _m(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var yr=!1,Yi=null,Ji=!1,ua=null,Em={onError:function(e){yr=!0,Yi=e}};function Sm(e,t,n,r,i,o,s,a,l){yr=!1,Yi=null,_m.apply(Em,arguments)}function Im(e,t,n,r,i,o,s,a,l){if(Sm.apply(this,arguments),yr){if(yr){var u=Yi;yr=!1,Yi=null}else throw Error(A(198));Ji||(Ji=!0,ua=u)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Eu(e){if(mn(e)!==e)throw Error(A(188))}function km(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Eu(i),e;if(o===r)return Eu(i),t;o=o.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function zd(e){return e=km(e),e!==null?bd(e):null}function bd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bd(e);if(t!==null)return t;e=e.sibling}return null}var jd=Ie.unstable_scheduleCallback,Su=Ie.unstable_cancelCallback,Cm=Ie.unstable_shouldYield,Tm=Ie.unstable_requestPaint,K=Ie.unstable_now,Rm=Ie.unstable_getCurrentPriorityLevel,ul=Ie.unstable_ImmediatePriority,$d=Ie.unstable_UserBlockingPriority,Zi=Ie.unstable_NormalPriority,Pm=Ie.unstable_LowPriority,Vd=Ie.unstable_IdlePriority,Po=null,qe=null;function Nm(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(Po,e,void 0,(e.current.flags&128)===128)}catch{}}var be=Math.clz32?Math.clz32:xm,Om=Math.log,Dm=Math.LN2;function xm(e){return e>>>=0,e===0?32:31-(Om(e)/Dm|0)|0}var wi=64,Ai=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function eo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=fr(a):(o&=s,o!==0&&(r=fr(o)))}else s=n&~i,s!==0?r=fr(s):o!==0&&(r=fr(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-be(t),i=1<<n,r|=e[n],t&=~i;return r}function Lm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-be(o),a=1<<s,l=i[s];l===-1?((a&n)===0||(a&r)!==0)&&(i[s]=Lm(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function ca(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hd(){var e=wi;return wi<<=1,(wi&4194240)===0&&(wi=64),e}function us(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-be(t),e[t]=n}function Um(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-be(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function cl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-be(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Wd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Qd,dl,qd,Gd,Kd,da=!1,_i=[],Rt=null,Pt=null,Nt=null,Or=new Map,Dr=new Map,wt=[],Bm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Iu(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":Or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dr.delete(t.pointerId)}}function ir(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ti(t),t!==null&&dl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Fm(e,t,n,r,i){switch(t){case"focusin":return Rt=ir(Rt,e,t,n,r,i),!0;case"dragenter":return Pt=ir(Pt,e,t,n,r,i),!0;case"mouseover":return Nt=ir(Nt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Or.set(o,ir(Or.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Dr.set(o,ir(Dr.get(o)||null,e,t,n,r,i)),!0}return!1}function Xd(e){var t=Kt(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=Fd(n),t!==null){e.blockedOn=t,Kd(e.priority,function(){qd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ui(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sa=r,n.target.dispatchEvent(r),sa=null}else return t=ti(n),t!==null&&dl(t),e.blockedOn=n,!1;t.shift()}return!0}function ku(e,t,n){Ui(e)&&n.delete(t)}function zm(){da=!1,Rt!==null&&Ui(Rt)&&(Rt=null),Pt!==null&&Ui(Pt)&&(Pt=null),Nt!==null&&Ui(Nt)&&(Nt=null),Or.forEach(ku),Dr.forEach(ku)}function or(e,t){e.blockedOn===t&&(e.blockedOn=null,da||(da=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,zm)))}function xr(e){function t(i){return or(i,e)}if(0<_i.length){or(_i[0],e);for(var n=1;n<_i.length;n++){var r=_i[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&or(Rt,e),Pt!==null&&or(Pt,e),Nt!==null&&or(Nt,e),Or.forEach(t),Dr.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)Xd(n),n.blockedOn===null&&wt.shift()}var Mn=ht.ReactCurrentBatchConfig,to=!0;function bm(e,t,n,r){var i=U,o=Mn.transition;Mn.transition=null;try{U=1,fl(e,t,n,r)}finally{U=i,Mn.transition=o}}function jm(e,t,n,r){var i=U,o=Mn.transition;Mn.transition=null;try{U=4,fl(e,t,n,r)}finally{U=i,Mn.transition=o}}function fl(e,t,n,r){if(to){var i=fa(e,t,n,r);if(i===null)ws(e,t,r,no,n),Iu(e,r);else if(Fm(i,e,t,n,r))r.stopPropagation();else if(Iu(e,r),t&4&&-1<Bm.indexOf(e)){for(;i!==null;){var o=ti(i);if(o!==null&&Qd(o),o=fa(e,t,n,r),o===null&&ws(e,t,r,no,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ws(e,t,r,null,n)}}var no=null;function fa(e,t,n,r){if(no=null,e=ll(r),e=Kt(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return no=e,null}function Yd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rm()){case ul:return 1;case $d:return 4;case Zi:case Pm:return 16;case Vd:return 536870912;default:return 16}default:return 16}}var kt=null,hl=null,Bi=null;function Jd(){if(Bi)return Bi;var e,t=hl,n=t.length,r,i="value"in kt?kt.value:kt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Bi=i.slice(e,1<r?1-r:void 0)}function Fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ei(){return!0}function Cu(){return!1}function Ce(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ei:Cu,this.isPropagationStopped=Cu,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ei)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ei)},persist:function(){},isPersistent:Ei}),t}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=Ce(Gn),ei=Q({},Gn,{view:0,detail:0}),$m=Ce(ei),cs,ds,sr,No=Q({},ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(cs=e.screenX-sr.screenX,ds=e.screenY-sr.screenY):ds=cs=0,sr=e),cs)},movementY:function(e){return"movementY"in e?e.movementY:ds}}),Tu=Ce(No),Vm=Q({},No,{dataTransfer:0}),Hm=Ce(Vm),Wm=Q({},ei,{relatedTarget:0}),fs=Ce(Wm),Qm=Q({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),qm=Ce(Qm),Gm=Q({},Gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Km=Ce(Gm),Xm=Q({},Gn,{data:0}),Ru=Ce(Xm),Ym={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zm[e])?!!t[e]:!1}function ml(){return eg}var tg=Q({},ei,{key:function(e){if(e.key){var t=Ym[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ml,charCode:function(e){return e.type==="keypress"?Fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ng=Ce(tg),rg=Q({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pu=Ce(rg),ig=Q({},ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ml}),og=Ce(ig),sg=Q({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ag=Ce(sg),lg=Q({},No,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ug=Ce(lg),cg=[9,13,27,32],gl=at&&"CompositionEvent"in window,wr=null;at&&"documentMode"in document&&(wr=document.documentMode);var dg=at&&"TextEvent"in window&&!wr,Zd=at&&(!gl||wr&&8<wr&&11>=wr),Nu=String.fromCharCode(32),Ou=!1;function ef(e,t){switch(e){case"keyup":return cg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function fg(e,t){switch(e){case"compositionend":return tf(t);case"keypress":return t.which!==32?null:(Ou=!0,Nu);case"textInput":return e=t.data,e===Nu&&Ou?null:e;default:return null}}function hg(e,t){if(_n)return e==="compositionend"||!gl&&ef(e,t)?(e=Jd(),Bi=hl=kt=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zd&&t.locale!=="ko"?null:t.data;default:return null}}var pg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pg[e.type]:t==="textarea"}function nf(e,t,n,r){xd(r),t=ro(t,"onChange"),0<t.length&&(n=new pl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ar=null,Lr=null;function mg(e){pf(e,0)}function Oo(e){var t=In(e);if(Cd(t))return e}function gg(e,t){if(e==="change")return t}var rf=!1;if(at){var hs;if(at){var ps="oninput"in document;if(!ps){var xu=document.createElement("div");xu.setAttribute("oninput","return;"),ps=typeof xu.oninput=="function"}hs=ps}else hs=!1;rf=hs&&(!document.documentMode||9<document.documentMode)}function Lu(){Ar&&(Ar.detachEvent("onpropertychange",of),Lr=Ar=null)}function of(e){if(e.propertyName==="value"&&Oo(Lr)){var t=[];nf(t,Lr,e,ll(e)),Bd(mg,t)}}function vg(e,t,n){e==="focusin"?(Lu(),Ar=t,Lr=n,Ar.attachEvent("onpropertychange",of)):e==="focusout"&&Lu()}function yg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oo(Lr)}function wg(e,t){if(e==="click")return Oo(t)}function Ag(e,t){if(e==="input"||e==="change")return Oo(t)}function _g(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:_g;function Mr(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gs.call(t,i)||!$e(e[i],t[i]))return!1}return!0}function Mu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uu(e,t){var n=Mu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mu(n)}}function sf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function af(){for(var e=window,t=Xi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xi(e.document)}return t}function vl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Eg(e){var t=af(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sf(n.ownerDocument.documentElement,n)){if(r!==null&&vl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Uu(n,o);var s=Uu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sg=at&&"documentMode"in document&&11>=document.documentMode,En=null,ha=null,_r=null,pa=!1;function Bu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pa||En==null||En!==Xi(r)||(r=En,"selectionStart"in r&&vl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_r&&Mr(_r,r)||(_r=r,r=ro(ha,"onSelect"),0<r.length&&(t=new pl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function Si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sn={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionend:Si("Transition","TransitionEnd")},ms={},lf={};at&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function Do(e){if(ms[e])return ms[e];if(!Sn[e])return e;var t=Sn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lf)return ms[e]=t[n];return e}var uf=Do("animationend"),cf=Do("animationiteration"),df=Do("animationstart"),ff=Do("transitionend"),hf=new Map,Fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,t){hf.set(e,t),pn(t,[e])}for(var gs=0;gs<Fu.length;gs++){var vs=Fu[gs],Ig=vs.toLowerCase(),kg=vs[0].toUpperCase()+vs.slice(1);jt(Ig,"on"+kg)}jt(uf,"onAnimationEnd");jt(cf,"onAnimationIteration");jt(df,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(ff,"onTransitionEnd");bn("onMouseEnter",["mouseout","mouseover"]);bn("onMouseLeave",["mouseout","mouseover"]);bn("onPointerEnter",["pointerout","pointerover"]);bn("onPointerLeave",["pointerout","pointerover"]);pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cg=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function zu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Im(r,t,void 0,e),e.currentTarget=null}function pf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;zu(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;zu(i,a,u),o=l}}}if(Ji)throw e=ua,Ji=!1,ua=null,e}function j(e,t){var n=t[wa];n===void 0&&(n=t[wa]=new Set);var r=e+"__bubble";n.has(r)||(mf(t,e,2,!1),n.add(r))}function ys(e,t,n){var r=0;t&&(r|=4),mf(n,e,r,t)}var Ii="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Ii]){e[Ii]=!0,_d.forEach(function(n){n!=="selectionchange"&&(Cg.has(n)||ys(n,!1,e),ys(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ii]||(t[Ii]=!0,ys("selectionchange",!1,t))}}function mf(e,t,n,r){switch(Yd(t)){case 1:var i=bm;break;case 4:i=jm;break;default:i=fl}n=i.bind(null,t,n,e),i=void 0,!la||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ws(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Kt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Bd(function(){var u=o,d=ll(n),m=[];e:{var h=hf.get(e);if(h!==void 0){var g=pl,y=e;switch(e){case"keypress":if(Fi(n)===0)break e;case"keydown":case"keyup":g=ng;break;case"focusin":y="focus",g=fs;break;case"focusout":y="blur",g=fs;break;case"beforeblur":case"afterblur":g=fs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=og;break;case uf:case cf:case df:g=qm;break;case ff:g=ag;break;case"scroll":g=$m;break;case"wheel":g=ug;break;case"copy":case"cut":case"paste":g=Km;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Pu}var v=(t&4)!==0,O=!v&&e==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var c=u,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=Nr(c,f),w!=null&&v.push(Br(c,w,p)))),O)break;c=c.return}0<v.length&&(h=new g(h,y,null,n,d),m.push({event:h,listeners:v}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==sa&&(y=n.relatedTarget||n.fromElement)&&(Kt(y)||y[lt]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Kt(y):null,y!==null&&(O=mn(y),y!==O||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=Tu,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=Pu,w="onPointerLeave",f="onPointerEnter",c="pointer"),O=g==null?h:In(g),p=y==null?h:In(y),h=new v(w,c+"leave",g,n,d),h.target=O,h.relatedTarget=p,w=null,Kt(d)===u&&(v=new v(f,c+"enter",y,n,d),v.target=p,v.relatedTarget=O,w=v),O=w,g&&y)t:{for(v=g,f=y,c=0,p=v;p;p=vn(p))c++;for(p=0,w=f;w;w=vn(w))p++;for(;0<c-p;)v=vn(v),c--;for(;0<p-c;)f=vn(f),p--;for(;c--;){if(v===f||f!==null&&v===f.alternate)break t;v=vn(v),f=vn(f)}v=null}else v=null;g!==null&&bu(m,h,g,v,!1),y!==null&&O!==null&&bu(m,O,y,v,!0)}}e:{if(h=u?In(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var E=gg;else if(Du(h))if(rf)E=Ag;else{E=yg;var k=vg}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=wg);if(E&&(E=E(e,u))){nf(m,E,n,d);break e}k&&k(e,h,u),e==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&ta(h,"number",h.value)}switch(k=u?In(u):window,e){case"focusin":(Du(k)||k.contentEditable==="true")&&(En=k,ha=u,_r=null);break;case"focusout":_r=ha=En=null;break;case"mousedown":pa=!0;break;case"contextmenu":case"mouseup":case"dragend":pa=!1,Bu(m,n,d);break;case"selectionchange":if(Sg)break;case"keydown":case"keyup":Bu(m,n,d)}var C;if(gl)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else _n?ef(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Zd&&n.locale!=="ko"&&(_n||T!=="onCompositionStart"?T==="onCompositionEnd"&&_n&&(C=Jd()):(kt=d,hl="value"in kt?kt.value:kt.textContent,_n=!0)),k=ro(u,T),0<k.length&&(T=new Ru(T,e,null,n,d),m.push({event:T,listeners:k}),C?T.data=C:(C=tf(n),C!==null&&(T.data=C)))),(C=dg?fg(e,n):hg(e,n))&&(u=ro(u,"onBeforeInput"),0<u.length&&(d=new Ru("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:u}),d.data=C))}pf(m,t)})}function Br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Nr(e,n),o!=null&&r.unshift(Br(e,o,i)),o=Nr(e,t),o!=null&&r.push(Br(e,o,i))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function bu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Nr(n,o),l!=null&&s.unshift(Br(n,l,a))):i||(l=Nr(n,o),l!=null&&s.push(Br(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Tg=/\r\n?/g,Rg=/\u0000|\uFFFD/g;function ju(e){return(typeof e=="string"?e:""+e).replace(Tg,`
`).replace(Rg,"")}function ki(e,t,n){if(t=ju(t),ju(e)!==t&&n)throw Error(A(425))}function io(){}var ma=null,ga=null;function va(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ya=typeof setTimeout=="function"?setTimeout:void 0,Pg=typeof clearTimeout=="function"?clearTimeout:void 0,$u=typeof Promise=="function"?Promise:void 0,Ng=typeof queueMicrotask=="function"?queueMicrotask:typeof $u<"u"?function(e){return $u.resolve(null).then(e).catch(Og)}:ya;function Og(e){setTimeout(function(){throw e})}function As(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),xr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xr(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+Kn,Fr="__reactProps$"+Kn,lt="__reactContainer$"+Kn,wa="__reactEvents$"+Kn,Dg="__reactListeners$"+Kn,xg="__reactHandles$"+Kn;function Kt(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vu(e);e!==null;){if(n=e[Qe])return n;e=Vu(e)}return t}e=n,n=e.parentNode}return null}function ti(e){return e=e[Qe]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function xo(e){return e[Fr]||null}var Aa=[],kn=-1;function $t(e){return{current:e}}function $(e){0>kn||(e.current=Aa[kn],Aa[kn]=null,kn--)}function z(e,t){kn++,Aa[kn]=e.current,e.current=t}var bt={},ue=$t(bt),ve=$t(!1),nn=bt;function jn(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function oo(){$(ve),$(ue)}function Hu(e,t,n){if(ue.current!==bt)throw Error(A(168));z(ue,t),z(ve,n)}function gf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,vm(e)||"Unknown",i));return Q({},n,r)}function so(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,nn=ue.current,z(ue,e),z(ve,ve.current),!0}function Wu(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=gf(e,t,nn),r.__reactInternalMemoizedMergedChildContext=e,$(ve),$(ue),z(ue,e)):$(ve),z(ve,n)}var tt=null,Lo=!1,_s=!1;function vf(e){tt===null?tt=[e]:tt.push(e)}function Lg(e){Lo=!0,vf(e)}function Vt(){if(!_s&&tt!==null){_s=!0;var e=0,t=U;try{var n=tt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}tt=null,Lo=!1}catch(i){throw tt!==null&&(tt=tt.slice(e+1)),jd(ul,Vt),i}finally{U=t,_s=!1}}return null}var Cn=[],Tn=0,ao=null,lo=0,Re=[],Pe=0,rn=null,nt=1,rt="";function Qt(e,t){Cn[Tn++]=lo,Cn[Tn++]=ao,ao=e,lo=t}function yf(e,t,n){Re[Pe++]=nt,Re[Pe++]=rt,Re[Pe++]=rn,rn=e;var r=nt;e=rt;var i=32-be(r)-1;r&=~(1<<i),n+=1;var o=32-be(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,nt=1<<32-be(t)+i|n<<i|r,rt=o+e}else nt=1<<o|n<<i|r,rt=e}function yl(e){e.return!==null&&(Qt(e,1),yf(e,1,0))}function wl(e){for(;e===ao;)ao=Cn[--Tn],Cn[Tn]=null,lo=Cn[--Tn],Cn[Tn]=null;for(;e===rn;)rn=Re[--Pe],Re[Pe]=null,rt=Re[--Pe],Re[Pe]=null,nt=Re[--Pe],Re[Pe]=null}var Ee=null,_e=null,V=!1,ze=null;function wf(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,_e=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rn!==null?{id:nt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,_e=null,!0):!1;default:return!1}}function _a(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ea(e){if(V){var t=_e;if(t){var n=t;if(!Qu(e,t)){if(_a(e))throw Error(A(418));t=Ot(n.nextSibling);var r=Ee;t&&Qu(e,t)?wf(r,n):(e.flags=e.flags&-4097|2,V=!1,Ee=e)}}else{if(_a(e))throw Error(A(418));e.flags=e.flags&-4097|2,V=!1,Ee=e}}}function qu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function Ci(e){if(e!==Ee)return!1;if(!V)return qu(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!va(e.type,e.memoizedProps)),t&&(t=_e)){if(_a(e))throw Af(),Error(A(418));for(;t;)wf(e,t),t=Ot(t.nextSibling)}if(qu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=Ee?Ot(e.stateNode.nextSibling):null;return!0}function Af(){for(var e=_e;e;)e=Ot(e.nextSibling)}function $n(){_e=Ee=null,V=!1}function Al(e){ze===null?ze=[e]:ze.push(e)}var Mg=ht.ReactCurrentBatchConfig;function Be(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var uo=$t(null),co=null,Rn=null,_l=null;function El(){_l=Rn=co=null}function Sl(e){var t=uo.current;$(uo),e._currentValue=t}function Sa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Un(e,t){co=e,_l=Rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ge=!0),e.firstContext=null)}function xe(e){var t=e._currentValue;if(_l!==e)if(e={context:e,memoizedValue:t,next:null},Rn===null){if(co===null)throw Error(A(308));Rn=e,co.dependencies={lanes:0,firstContext:e}}else Rn=Rn.next=e;return t}var Xt=null;function Il(e){Xt===null?Xt=[e]:Xt.push(e)}function _f(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Il(t)):(n.next=i.next,i.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yt=!1;function kl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ef(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(M&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ut(e,n)}return i=r.interleaved,i===null?(t.next=t,Il(r)):(t.next=i.next,i.next=t),r.interleaved=t,ut(e,n)}function zi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cl(e,n)}}function Gu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fo(e,t,n,r){var i=e.updateQueue;yt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var m=i.baseState;s=0,d=u=l=null,a=o;do{var h=a.lane,g=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(h=t,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){m=y.call(g,m,h);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(g,m,h):y,h==null)break e;m=Q({},m,h);break e;case 2:yt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=m):d=d.next=g,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(l=m),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);sn|=s,e.lanes=s,e.memoizedState=m}}function Ku(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var Sf=new Ad.Component().refs;function Ia(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mo={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fe(),i=Lt(e),o=st(r,i);o.payload=t,n!=null&&(o.callback=n),t=Dt(e,o,i),t!==null&&(je(t,e,i,r),zi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fe(),i=Lt(e),o=st(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Dt(e,o,i),t!==null&&(je(t,e,i,r),zi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fe(),r=Lt(e),i=st(n,r);i.tag=2,t!=null&&(i.callback=t),t=Dt(e,i,r),t!==null&&(je(t,e,r,n),zi(t,e,r))}};function Xu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,o):!0}function If(e,t,n){var r=!1,i=bt,o=t.contextType;return typeof o=="object"&&o!==null?o=xe(o):(i=ye(t)?nn:ue.current,r=t.contextTypes,o=(r=r!=null)?jn(e,i):bt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Yu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mo.enqueueReplaceState(t,t.state,null)}function ka(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Sf,kl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=xe(o):(o=ye(t)?nn:ue.current,i.context=jn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ia(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Mo.enqueueReplaceState(i,i.state,null),fo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Sf&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Ti(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ju(e){var t=e._init;return t(e._payload)}function kf(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Mt(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,w){return c===null||c.tag!==6?(c=Rs(p,f.mode,w),c.return=f,c):(c=i(c,p),c.return=f,c)}function l(f,c,p,w){var E=p.type;return E===An?d(f,c,p.props.children,w,p.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===vt&&Ju(E)===c.type)?(w=i(c,p.props),w.ref=ar(f,c,p),w.return=f,w):(w=Wi(p.type,p.key,p.props,null,f.mode,w),w.ref=ar(f,c,p),w.return=f,w)}function u(f,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Ps(p,f.mode,w),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function d(f,c,p,w,E){return c===null||c.tag!==7?(c=en(p,f.mode,w,E),c.return=f,c):(c=i(c,p),c.return=f,c)}function m(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Rs(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case gi:return p=Wi(c.type,c.key,c.props,null,f.mode,p),p.ref=ar(f,null,c),p.return=f,p;case wn:return c=Ps(c,f.mode,p),c.return=f,c;case vt:var w=c._init;return m(f,w(c._payload),p)}if(dr(c)||nr(c))return c=en(c,f.mode,p,null),c.return=f,c;Ti(f,c)}return null}function h(f,c,p,w){var E=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(f,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case gi:return p.key===E?l(f,c,p,w):null;case wn:return p.key===E?u(f,c,p,w):null;case vt:return E=p._init,h(f,c,E(p._payload),w)}if(dr(p)||nr(p))return E!==null?null:d(f,c,p,w,null);Ti(f,p)}return null}function g(f,c,p,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,a(c,f,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case gi:return f=f.get(w.key===null?p:w.key)||null,l(c,f,w,E);case wn:return f=f.get(w.key===null?p:w.key)||null,u(c,f,w,E);case vt:var k=w._init;return g(f,c,p,k(w._payload),E)}if(dr(w)||nr(w))return f=f.get(p)||null,d(c,f,w,E,null);Ti(c,w)}return null}function y(f,c,p,w){for(var E=null,k=null,C=c,T=c=0,b=null;C!==null&&T<p.length;T++){C.index>T?(b=C,C=null):b=C.sibling;var x=h(f,C,p[T],w);if(x===null){C===null&&(C=b);break}e&&C&&x.alternate===null&&t(f,C),c=o(x,c,T),k===null?E=x:k.sibling=x,k=x,C=b}if(T===p.length)return n(f,C),V&&Qt(f,T),E;if(C===null){for(;T<p.length;T++)C=m(f,p[T],w),C!==null&&(c=o(C,c,T),k===null?E=C:k.sibling=C,k=C);return V&&Qt(f,T),E}for(C=r(f,C);T<p.length;T++)b=g(C,f,T,p[T],w),b!==null&&(e&&b.alternate!==null&&C.delete(b.key===null?T:b.key),c=o(b,c,T),k===null?E=b:k.sibling=b,k=b);return e&&C.forEach(function(Me){return t(f,Me)}),V&&Qt(f,T),E}function v(f,c,p,w){var E=nr(p);if(typeof E!="function")throw Error(A(150));if(p=E.call(p),p==null)throw Error(A(151));for(var k=E=null,C=c,T=c=0,b=null,x=p.next();C!==null&&!x.done;T++,x=p.next()){C.index>T?(b=C,C=null):b=C.sibling;var Me=h(f,C,x.value,w);if(Me===null){C===null&&(C=b);break}e&&C&&Me.alternate===null&&t(f,C),c=o(Me,c,T),k===null?E=Me:k.sibling=Me,k=Me,C=b}if(x.done)return n(f,C),V&&Qt(f,T),E;if(C===null){for(;!x.done;T++,x=p.next())x=m(f,x.value,w),x!==null&&(c=o(x,c,T),k===null?E=x:k.sibling=x,k=x);return V&&Qt(f,T),E}for(C=r(f,C);!x.done;T++,x=p.next())x=g(C,f,T,x.value,w),x!==null&&(e&&x.alternate!==null&&C.delete(x.key===null?T:x.key),c=o(x,c,T),k===null?E=x:k.sibling=x,k=x);return e&&C.forEach(function(er){return t(f,er)}),V&&Qt(f,T),E}function O(f,c,p,w){if(typeof p=="object"&&p!==null&&p.type===An&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case gi:e:{for(var E=p.key,k=c;k!==null;){if(k.key===E){if(E=p.type,E===An){if(k.tag===7){n(f,k.sibling),c=i(k,p.props.children),c.return=f,f=c;break e}}else if(k.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===vt&&Ju(E)===k.type){n(f,k.sibling),c=i(k,p.props),c.ref=ar(f,k,p),c.return=f,f=c;break e}n(f,k);break}else t(f,k);k=k.sibling}p.type===An?(c=en(p.props.children,f.mode,w,p.key),c.return=f,f=c):(w=Wi(p.type,p.key,p.props,null,f.mode,w),w.ref=ar(f,c,p),w.return=f,f=w)}return s(f);case wn:e:{for(k=p.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Ps(p,f.mode,w),c.return=f,f=c}return s(f);case vt:return k=p._init,O(f,c,k(p._payload),w)}if(dr(p))return y(f,c,p,w);if(nr(p))return v(f,c,p,w);Ti(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=Rs(p,f.mode,w),c.return=f,f=c),s(f)):n(f,c)}return O}var Vn=kf(!0),Cf=kf(!1),ni={},Ge=$t(ni),zr=$t(ni),br=$t(ni);function Yt(e){if(e===ni)throw Error(A(174));return e}function Cl(e,t){switch(z(br,t),z(zr,e),z(Ge,ni),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ra(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ra(t,e)}$(Ge),z(Ge,t)}function Hn(){$(Ge),$(zr),$(br)}function Tf(e){Yt(br.current);var t=Yt(Ge.current),n=ra(t,e.type);t!==n&&(z(zr,e),z(Ge,n))}function Tl(e){zr.current===e&&($(Ge),$(zr))}var H=$t(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Es=[];function Rl(){for(var e=0;e<Es.length;e++)Es[e]._workInProgressVersionPrimary=null;Es.length=0}var bi=ht.ReactCurrentDispatcher,Ss=ht.ReactCurrentBatchConfig,on=0,W=null,Y=null,ee=null,po=!1,Er=!1,jr=0,Ug=0;function se(){throw Error(A(321))}function Pl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$e(e[n],t[n]))return!1;return!0}function Nl(e,t,n,r,i,o){if(on=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bi.current=e===null||e.memoizedState===null?bg:jg,e=n(r,i),Er){o=0;do{if(Er=!1,jr=0,25<=o)throw Error(A(301));o+=1,ee=Y=null,t.updateQueue=null,bi.current=$g,e=n(r,i)}while(Er)}if(bi.current=mo,t=Y!==null&&Y.next!==null,on=0,ee=Y=W=null,po=!1,t)throw Error(A(300));return e}function Ol(){var e=jr!==0;return jr=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?W.memoizedState=ee=e:ee=ee.next=e,ee}function Le(){if(Y===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=ee===null?W.memoizedState:ee.next;if(t!==null)ee=t,Y=e;else{if(e===null)throw Error(A(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},ee===null?W.memoizedState=ee=e:ee=ee.next=e}return ee}function $r(e,t){return typeof t=="function"?t(e):t}function Is(e){var t=Le(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=Y,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((on&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=m,s=r):l=l.next=m,W.lanes|=d,sn|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,$e(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,W.lanes|=o,sn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ks(e){var t=Le(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);$e(o,t.memoizedState)||(ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Rf(){}function Pf(e,t){var n=W,r=Le(),i=t(),o=!$e(r.memoizedState,i);if(o&&(r.memoizedState=i,ge=!0),r=r.queue,Dl(Df.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,Vr(9,Of.bind(null,n,r,i,t),void 0,null),te===null)throw Error(A(349));(on&30)!==0||Nf(n,t,i)}return i}function Nf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Of(e,t,n,r){t.value=n,t.getSnapshot=r,xf(t)&&Lf(e)}function Df(e,t,n){return n(function(){xf(t)&&Lf(e)})}function xf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$e(e,n)}catch{return!0}}function Lf(e){var t=ut(e,1);t!==null&&je(t,e,1,-1)}function Zu(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},t.queue=e,e=e.dispatch=zg.bind(null,W,e),[t.memoizedState,e]}function Vr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mf(){return Le().memoizedState}function ji(e,t,n,r){var i=We();W.flags|=e,i.memoizedState=Vr(1|t,n,void 0,r===void 0?null:r)}function Uo(e,t,n,r){var i=Le();r=r===void 0?null:r;var o=void 0;if(Y!==null){var s=Y.memoizedState;if(o=s.destroy,r!==null&&Pl(r,s.deps)){i.memoizedState=Vr(t,n,o,r);return}}W.flags|=e,i.memoizedState=Vr(1|t,n,o,r)}function ec(e,t){return ji(8390656,8,e,t)}function Dl(e,t){return Uo(2048,8,e,t)}function Uf(e,t){return Uo(4,2,e,t)}function Bf(e,t){return Uo(4,4,e,t)}function Ff(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zf(e,t,n){return n=n!=null?n.concat([e]):null,Uo(4,4,Ff.bind(null,t,e),n)}function xl(){}function bf(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jf(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $f(e,t,n){return(on&21)===0?(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n):($e(n,t)||(n=Hd(),W.lanes|=n,sn|=n,e.baseState=!0),t)}function Bg(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Ss.transition;Ss.transition={};try{e(!1),t()}finally{U=n,Ss.transition=r}}function Vf(){return Le().memoizedState}function Fg(e,t,n){var r=Lt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hf(e))Wf(t,n);else if(n=_f(e,t,n,r),n!==null){var i=fe();je(n,e,r,i),Qf(n,t,r)}}function zg(e,t,n){var r=Lt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hf(e))Wf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,$e(a,s)){var l=t.interleaved;l===null?(i.next=i,Il(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=_f(e,t,i,r),n!==null&&(i=fe(),je(n,e,r,i),Qf(n,t,r))}}function Hf(e){var t=e.alternate;return e===W||t!==null&&t===W}function Wf(e,t){Er=po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qf(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cl(e,n)}}var mo={readContext:xe,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},bg={readContext:xe,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:xe,useEffect:ec,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ji(4194308,4,Ff.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ji(4194308,4,e,t)},useInsertionEffect:function(e,t){return ji(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Fg.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:Zu,useDebugValue:xl,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=Zu(!1),t=e[0];return e=Bg.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,i=We();if(V){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),te===null)throw Error(A(349));(on&30)!==0||Nf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ec(Df.bind(null,r,o,e),[e]),r.flags|=2048,Vr(9,Of.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=We(),t=te.identifierPrefix;if(V){var n=rt,r=nt;n=(r&~(1<<32-be(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ug++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jg={readContext:xe,useCallback:bf,useContext:xe,useEffect:Dl,useImperativeHandle:zf,useInsertionEffect:Uf,useLayoutEffect:Bf,useMemo:jf,useReducer:Is,useRef:Mf,useState:function(){return Is($r)},useDebugValue:xl,useDeferredValue:function(e){var t=Le();return $f(t,Y.memoizedState,e)},useTransition:function(){var e=Is($r)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Rf,useSyncExternalStore:Pf,useId:Vf,unstable_isNewReconciler:!1},$g={readContext:xe,useCallback:bf,useContext:xe,useEffect:Dl,useImperativeHandle:zf,useInsertionEffect:Uf,useLayoutEffect:Bf,useMemo:jf,useReducer:ks,useRef:Mf,useState:function(){return ks($r)},useDebugValue:xl,useDeferredValue:function(e){var t=Le();return Y===null?t.memoizedState=e:$f(t,Y.memoizedState,e)},useTransition:function(){var e=ks($r)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Rf,useSyncExternalStore:Pf,useId:Vf,unstable_isNewReconciler:!1};function Wn(e,t){try{var n="",r=t;do n+=gm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Cs(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Ca(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Vg=typeof WeakMap=="function"?WeakMap:Map;function qf(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vo||(vo=!0,Ua=r),Ca(e,t)},n}function Gf(e,t,n){n=st(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ca(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ca(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function tc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=rv.bind(null,e,t,n),t.then(e,e))}function nc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rc(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=st(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Hg=ht.ReactCurrentOwner,ge=!1;function de(e,t,n,r){t.child=e===null?Cf(t,null,n,r):Vn(t,e.child,n,r)}function ic(e,t,n,r,i){n=n.render;var o=t.ref;return Un(t,i),r=Nl(e,t,n,r,o,i),n=Ol(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(V&&n&&yl(t),t.flags|=1,de(e,t,r,i),t.child)}function oc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!jl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Kf(e,t,o,r,i)):(e=Wi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Mr,n(s,r)&&e.ref===t.ref)return ct(e,t,i)}return t.flags|=1,e=Mt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Kf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Mr(o,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ge=!0);else return t.lanes=e.lanes,ct(e,t,i)}return Ta(e,t,n,r,i)}function Xf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(Nn,Ae),Ae|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(Nn,Ae),Ae|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,z(Nn,Ae),Ae|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,z(Nn,Ae),Ae|=r;return de(e,t,i,n),t.child}function Yf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ta(e,t,n,r,i){var o=ye(n)?nn:ue.current;return o=jn(t,o),Un(t,i),n=Nl(e,t,n,r,o,i),r=Ol(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(V&&r&&yl(t),t.flags|=1,de(e,t,n,i),t.child)}function sc(e,t,n,r,i){if(ye(n)){var o=!0;so(t)}else o=!1;if(Un(t,i),t.stateNode===null)$i(e,t),If(t,n,r),ka(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=xe(u):(u=ye(n)?nn:ue.current,u=jn(t,u));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Yu(t,s,r,u),yt=!1;var h=t.memoizedState;s.state=h,fo(t,r,s,i),l=t.memoizedState,a!==r||h!==l||ve.current||yt?(typeof d=="function"&&(Ia(t,n,d,r),l=t.memoizedState),(a=yt||Xu(t,n,a,r,h,l,u))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Ef(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Be(t.type,a),s.props=u,m=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=xe(l):(l=ye(n)?nn:ue.current,l=jn(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||h!==l)&&Yu(t,s,r,l),yt=!1,h=t.memoizedState,s.state=h,fo(t,r,s,i);var y=t.memoizedState;a!==m||h!==y||ve.current||yt?(typeof g=="function"&&(Ia(t,n,g,r),y=t.memoizedState),(u=yt||Xu(t,n,u,r,h,y,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ra(e,t,n,r,o,i)}function Ra(e,t,n,r,i,o){Yf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Wu(t,n,!1),ct(e,t,o);r=t.stateNode,Hg.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Vn(t,e.child,null,o),t.child=Vn(t,null,a,o)):de(e,t,a,o),t.memoizedState=r.state,i&&Wu(t,n,!0),t.child}function Jf(e){var t=e.stateNode;t.pendingContext?Hu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hu(e,t.context,!1),Cl(e,t.containerInfo)}function ac(e,t,n,r,i){return $n(),Al(i),t.flags|=256,de(e,t,n,r),t.child}var Pa={dehydrated:null,treeContext:null,retryLane:0};function Na(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zf(e,t,n){var r=t.pendingProps,i=H.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),z(H,i&1),e===null)return Ea(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=zo(s,r,0,null),e=en(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Na(n),t.memoizedState=Pa,e):Ll(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Wg(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Mt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Mt(a,o):(o=en(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Na(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Pa,r}return o=e.child,e=o.sibling,r=Mt(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ll(e,t){return t=zo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ri(e,t,n,r){return r!==null&&Al(r),Vn(t,e.child,null,n),e=Ll(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wg(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Cs(Error(A(422))),Ri(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=zo({mode:"visible",children:r.children},i,0,null),o=en(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Vn(t,e.child,null,s),t.child.memoizedState=Na(s),t.memoizedState=Pa,o);if((t.mode&1)===0)return Ri(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(A(419)),r=Cs(o,r,void 0),Ri(e,t,s,r)}if(a=(s&e.childLanes)!==0,ge||a){if(r=te,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ut(e,i),je(r,e,i,-1))}return bl(),r=Cs(Error(A(421))),Ri(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=iv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,_e=Ot(i.nextSibling),Ee=t,V=!0,ze=null,e!==null&&(Re[Pe++]=nt,Re[Pe++]=rt,Re[Pe++]=rn,nt=e.id,rt=e.overflow,rn=t),t=Ll(t,r.children),t.flags|=4096,t)}function lc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Sa(e.return,t,n)}function Ts(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function eh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(de(e,t,r.children,n),r=H.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lc(e,n,t);else if(e.tag===19)lc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(H,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ts(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ts(t,!0,n,null,o);break;case"together":Ts(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $i(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Qg(e,t,n){switch(t.tag){case 3:Jf(t),$n();break;case 5:Tf(t);break;case 1:ye(t.type)&&so(t);break;case 4:Cl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;z(uo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(z(H,H.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Zf(e,t,n):(z(H,H.current&1),e=ct(e,t,n),e!==null?e.sibling:null);z(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return eh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Xf(e,t,n)}return ct(e,t,n)}var th,Oa,nh,rh;th=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oa=function(){};nh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yt(Ge.current);var o=null;switch(n){case"input":i=Zs(e,i),r=Zs(e,r),o=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),o=[];break;case"textarea":i=na(e,i),r=na(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=io)}ia(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Rr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Rr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&j("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};rh=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qg(e,t,n){var r=t.pendingProps;switch(wl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ye(t.type)&&oo(),ae(t),null;case 3:return r=t.stateNode,Hn(),$(ve),$(ue),Rl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ci(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ze!==null&&(za(ze),ze=null))),Oa(e,t),ae(t),null;case 5:Tl(t);var i=Yt(br.current);if(n=t.type,e!==null&&t.stateNode!=null)nh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return ae(t),null}if(e=Yt(Ge.current),Ci(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Qe]=t,r[Fr]=o,e=(t.mode&1)!==0,n){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(i=0;i<hr.length;i++)j(hr[i],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":vu(r,o),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},j("invalid",r);break;case"textarea":wu(r,o),j("invalid",r)}ia(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ki(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ki(r.textContent,a,e),i=["children",""+a]):Rr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&j("scroll",r)}switch(n){case"input":vi(r),yu(r,o,!0);break;case"textarea":vi(r),Au(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=io)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Qe]=t,e[Fr]=r,th(e,t,!1,!1),t.stateNode=e;e:{switch(s=oa(n,r),n){case"dialog":j("cancel",e),j("close",e),i=r;break;case"iframe":case"object":case"embed":j("load",e),i=r;break;case"video":case"audio":for(i=0;i<hr.length;i++)j(hr[i],e);i=r;break;case"source":j("error",e),i=r;break;case"img":case"image":case"link":j("error",e),j("load",e),i=r;break;case"details":j("toggle",e),i=r;break;case"input":vu(e,r),i=Zs(e,r),j("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),j("invalid",e);break;case"textarea":wu(e,r),i=na(e,r),j("invalid",e);break;default:i=r}ia(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Dd(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Nd(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pr(e,l):typeof l=="number"&&Pr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Rr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&j("scroll",e):l!=null&&il(e,o,l,s))}switch(n){case"input":vi(e),yu(e,r,!1);break;case"textarea":vi(e),Au(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Dn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=io)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)rh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=Yt(br.current),Yt(Ge.current),Ci(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qe]=t,(o=r.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:ki(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ki(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qe]=t,t.stateNode=r}return ae(t),null;case 13:if($(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&_e!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Af(),$n(),t.flags|=98560,o=!1;else if(o=Ci(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(A(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[Qe]=t}else $n(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ae(t),o=!1}else ze!==null&&(za(ze),ze=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(H.current&1)!==0?J===0&&(J=3):bl())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return Hn(),Oa(e,t),e===null&&Ur(t.stateNode.containerInfo),ae(t),null;case 10:return Sl(t.type._context),ae(t),null;case 17:return ye(t.type)&&oo(),ae(t),null;case 19:if($(H),o=t.memoizedState,o===null)return ae(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)lr(o,!1);else{if(J!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=ho(e),s!==null){for(t.flags|=128,lr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(H,H.current&1|2),t.child}e=e.sibling}o.tail!==null&&K()>Qn&&(t.flags|=128,r=!0,lr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ho(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!V)return ae(t),null}else 2*K()-o.renderingStartTime>Qn&&n!==1073741824&&(t.flags|=128,r=!0,lr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=K(),t.sibling=null,n=H.current,z(H,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return zl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ae&1073741824)!==0&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function Gg(e,t){switch(wl(t),t.tag){case 1:return ye(t.type)&&oo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),$(ve),$(ue),Rl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Tl(t),null;case 13:if($(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(H),null;case 4:return Hn(),null;case 10:return Sl(t.type._context),null;case 22:case 23:return zl(),null;case 24:return null;default:return null}}var Pi=!1,le=!1,Kg=typeof WeakSet=="function"?WeakSet:Set,S=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Da(e,t,n){try{n()}catch(r){q(e,t,r)}}var uc=!1;function Xg(e,t){if(ma=to,e=af(),vl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,m=e,h=null;t:for(;;){for(var g;m!==n||i!==0&&m.nodeType!==3||(a=s+i),m!==o||r!==0&&m.nodeType!==3||(l=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(g=m.firstChild)!==null;)h=m,m=g;for(;;){if(m===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++d===r&&(l=s),(g=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ga={focusedElem:e,selectionRange:n},to=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,O=y.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Be(t.type,v),O);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(w){q(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return y=uc,uc=!1,y}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Da(t,n,o)}i=i.next}while(i!==r)}}function Bo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ih(e){var t=e.alternate;t!==null&&(e.alternate=null,ih(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[Fr],delete t[wa],delete t[Dg],delete t[xg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function oh(e){return e.tag===5||e.tag===3||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||oh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function La(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=io));else if(r!==4&&(e=e.child,e!==null))for(La(e,t,n),e=e.sibling;e!==null;)La(e,t,n),e=e.sibling}function Ma(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ma(e,t,n),e=e.sibling;e!==null;)Ma(e,t,n),e=e.sibling}var re=null,Fe=!1;function mt(e,t,n){for(n=n.child;n!==null;)sh(e,t,n),n=n.sibling}function sh(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(Po,n)}catch{}switch(n.tag){case 5:le||Pn(n,t);case 6:var r=re,i=Fe;re=null,mt(e,t,n),re=r,Fe=i,re!==null&&(Fe?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(Fe?(e=re,n=n.stateNode,e.nodeType===8?As(e.parentNode,n):e.nodeType===1&&As(e,n),xr(e)):As(re,n.stateNode));break;case 4:r=re,i=Fe,re=n.stateNode.containerInfo,Fe=!0,mt(e,t,n),re=r,Fe=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&Da(n,t,s),i=i.next}while(i!==r)}mt(e,t,n);break;case 1:if(!le&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){q(n,t,a)}mt(e,t,n);break;case 21:mt(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,mt(e,t,n),le=r):mt(e,t,n);break;default:mt(e,t,n)}}function dc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Kg),t.forEach(function(r){var i=ov.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:re=a.stateNode,Fe=!1;break e;case 3:re=a.stateNode.containerInfo,Fe=!0;break e;case 4:re=a.stateNode.containerInfo,Fe=!0;break e}a=a.return}if(re===null)throw Error(A(160));sh(o,s,i),re=null,Fe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ah(t,e),t=t.sibling}function ah(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),He(e),r&4){try{Sr(3,e,e.return),Bo(3,e)}catch(v){q(e,e.return,v)}try{Sr(5,e,e.return)}catch(v){q(e,e.return,v)}}break;case 1:Ue(t,e),He(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(Ue(t,e),He(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var i=e.stateNode;try{Pr(i,"")}catch(v){q(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Td(i,o),oa(a,s);var u=oa(a,o);for(s=0;s<l.length;s+=2){var d=l[s],m=l[s+1];d==="style"?Dd(i,m):d==="dangerouslySetInnerHTML"?Nd(i,m):d==="children"?Pr(i,m):il(i,d,m,u)}switch(a){case"input":ea(i,o);break;case"textarea":Rd(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Dn(i,!!o.multiple,g,!1):h!==!!o.multiple&&(o.defaultValue!=null?Dn(i,!!o.multiple,o.defaultValue,!0):Dn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Fr]=o}catch(v){q(e,e.return,v)}}break;case 6:if(Ue(t,e),He(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){q(e,e.return,v)}}break;case 3:if(Ue(t,e),He(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xr(t.containerInfo)}catch(v){q(e,e.return,v)}break;case 4:Ue(t,e),He(e);break;case 13:Ue(t,e),He(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Bl=K())),r&4&&dc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(le=(u=le)||d,Ue(t,e),le=u):Ue(t,e),He(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&(e.mode&1)!==0)for(S=e,d=e.child;d!==null;){for(m=S=d;S!==null;){switch(h=S,g=h.child,h.tag){case 0:case 11:case 14:case 15:Sr(4,h,h.return);break;case 1:Pn(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){q(r,n,v)}}break;case 5:Pn(h,h.return);break;case 22:if(h.memoizedState!==null){hc(m);continue}}g!==null?(g.return=h,S=g):hc(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{i=m.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,l=m.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Od("display",s))}catch(v){q(e,e.return,v)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(v){q(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ue(t,e),He(e),r&4&&dc(e);break;case 21:break;default:Ue(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(oh(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pr(i,""),r.flags&=-33);var o=cc(e);Ma(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=cc(e);La(e,a,s);break;default:throw Error(A(161))}}catch(l){q(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Yg(e,t,n){S=e,lh(e)}function lh(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var i=S,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Pi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||le;a=Pi;var u=le;if(Pi=s,(le=l)&&!u)for(S=i;S!==null;)s=S,l=s.child,s.tag===22&&s.memoizedState!==null?pc(i):l!==null?(l.return=s,S=l):pc(i);for(;o!==null;)S=o,lh(o),o=o.sibling;S=i,Pi=a,le=u}fc(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,S=o):fc(e)}}function fc(e){for(;S!==null;){var t=S;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:le||Bo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ku(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ku(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&xr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}le||t.flags&512&&xa(t)}catch(h){q(t,t.return,h)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function hc(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function pc(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bo(4,t)}catch(l){q(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){q(t,i,l)}}var o=t.return;try{xa(t)}catch(l){q(t,o,l)}break;case 5:var s=t.return;try{xa(t)}catch(l){q(t,s,l)}}}catch(l){q(t,t.return,l)}if(t===e){S=null;break}var a=t.sibling;if(a!==null){a.return=t.return,S=a;break}S=t.return}}var Jg=Math.ceil,go=ht.ReactCurrentDispatcher,Ml=ht.ReactCurrentOwner,Oe=ht.ReactCurrentBatchConfig,M=0,te=null,X=null,ie=0,Ae=0,Nn=$t(0),J=0,Hr=null,sn=0,Fo=0,Ul=0,Ir=null,me=null,Bl=0,Qn=1/0,et=null,vo=!1,Ua=null,xt=null,Ni=!1,Ct=null,yo=0,kr=0,Ba=null,Vi=-1,Hi=0;function fe(){return(M&6)!==0?K():Vi!==-1?Vi:Vi=K()}function Lt(e){return(e.mode&1)===0?1:(M&2)!==0&&ie!==0?ie&-ie:Mg.transition!==null?(Hi===0&&(Hi=Hd()),Hi):(e=U,e!==0||(e=window.event,e=e===void 0?16:Yd(e.type)),e)}function je(e,t,n,r){if(50<kr)throw kr=0,Ba=null,Error(A(185));Zr(e,n,r),((M&2)===0||e!==te)&&(e===te&&((M&2)===0&&(Fo|=n),J===4&&At(e,ie)),we(e,r),n===1&&M===0&&(t.mode&1)===0&&(Qn=K()+500,Lo&&Vt()))}function we(e,t){var n=e.callbackNode;Mm(e,t);var r=eo(e,e===te?ie:0);if(r===0)n!==null&&Su(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Su(n),t===1)e.tag===0?Lg(mc.bind(null,e)):vf(mc.bind(null,e)),Ng(function(){(M&6)===0&&Vt()}),n=null;else{switch(Wd(r)){case 1:n=ul;break;case 4:n=$d;break;case 16:n=Zi;break;case 536870912:n=Vd;break;default:n=Zi}n=gh(n,uh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function uh(e,t){if(Vi=-1,Hi=0,(M&6)!==0)throw Error(A(327));var n=e.callbackNode;if(Bn()&&e.callbackNode!==n)return null;var r=eo(e,e===te?ie:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=wo(e,r);else{t=r;var i=M;M|=2;var o=dh();(te!==e||ie!==t)&&(et=null,Qn=K()+500,Zt(e,t));do try{tv();break}catch(a){ch(e,a)}while(1);El(),go.current=o,M=i,X!==null?t=0:(te=null,ie=0,t=J)}if(t!==0){if(t===2&&(i=ca(e),i!==0&&(r=i,t=Fa(e,i))),t===1)throw n=Hr,Zt(e,0),At(e,r),we(e,K()),n;if(t===6)At(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Zg(i)&&(t=wo(e,r),t===2&&(o=ca(e),o!==0&&(r=o,t=Fa(e,o))),t===1))throw n=Hr,Zt(e,0),At(e,r),we(e,K()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:qt(e,me,et);break;case 3:if(At(e,r),(r&130023424)===r&&(t=Bl+500-K(),10<t)){if(eo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ya(qt.bind(null,e,me,et),t);break}qt(e,me,et);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-be(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jg(r/1960))-r,10<r){e.timeoutHandle=ya(qt.bind(null,e,me,et),r);break}qt(e,me,et);break;case 5:qt(e,me,et);break;default:throw Error(A(329))}}}return we(e,K()),e.callbackNode===n?uh.bind(null,e):null}function Fa(e,t){var n=Ir;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=wo(e,t),e!==2&&(t=me,me=n,t!==null&&za(t)),e}function za(e){me===null?me=e:me.push.apply(me,e)}function Zg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!$e(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~Ul,t&=~Fo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-be(t),r=1<<n;e[n]=-1,t&=~r}}function mc(e){if((M&6)!==0)throw Error(A(327));Bn();var t=eo(e,0);if((t&1)===0)return we(e,K()),null;var n=wo(e,t);if(e.tag!==0&&n===2){var r=ca(e);r!==0&&(t=r,n=Fa(e,r))}if(n===1)throw n=Hr,Zt(e,0),At(e,t),we(e,K()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qt(e,me,et),we(e,K()),null}function Fl(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Qn=K()+500,Lo&&Vt())}}function an(e){Ct!==null&&Ct.tag===0&&(M&6)===0&&Bn();var t=M;M|=1;var n=Oe.transition,r=U;try{if(Oe.transition=null,U=1,e)return e()}finally{U=r,Oe.transition=n,M=t,(M&6)===0&&Vt()}}function zl(){Ae=Nn.current,$(Nn)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Pg(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(wl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oo();break;case 3:Hn(),$(ve),$(ue),Rl();break;case 5:Tl(r);break;case 4:Hn();break;case 13:$(H);break;case 19:$(H);break;case 10:Sl(r.type._context);break;case 22:case 23:zl()}n=n.return}if(te=e,X=e=Mt(e.current,null),ie=Ae=t,J=0,Hr=null,Ul=Fo=sn=0,me=Ir=null,Xt!==null){for(t=0;t<Xt.length;t++)if(n=Xt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Xt=null}return e}function ch(e,t){do{var n=X;try{if(El(),bi.current=mo,po){for(var r=W.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}po=!1}if(on=0,ee=Y=W=null,Er=!1,jr=0,Ml.current=null,n===null||n.return===null){J=1,Hr=t,X=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ie,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,m=d.tag;if((d.mode&1)===0&&(m===0||m===11||m===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=nc(s);if(g!==null){g.flags&=-257,rc(g,s,a,o,t),g.mode&1&&tc(o,u,t),t=g,l=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(l),t.updateQueue=v}else y.add(l);break e}else{if((t&1)===0){tc(o,u,t),bl();break e}l=Error(A(426))}}else if(V&&a.mode&1){var O=nc(s);if(O!==null){(O.flags&65536)===0&&(O.flags|=256),rc(O,s,a,o,t),Al(Wn(l,a));break e}}o=l=Wn(l,a),J!==4&&(J=2),Ir===null?Ir=[o]:Ir.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=qf(o,l,t);Gu(o,f);break e;case 1:a=l;var c=o.type,p=o.stateNode;if((o.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(xt===null||!xt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Gf(o,a,t);Gu(o,w);break e}}o=o.return}while(o!==null)}hh(n)}catch(E){t=E,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function dh(){var e=go.current;return go.current=mo,e===null?mo:e}function bl(){(J===0||J===3||J===2)&&(J=4),te===null||(sn&268435455)===0&&(Fo&268435455)===0||At(te,ie)}function wo(e,t){var n=M;M|=2;var r=dh();(te!==e||ie!==t)&&(et=null,Zt(e,t));do try{ev();break}catch(i){ch(e,i)}while(1);if(El(),M=n,go.current=r,X!==null)throw Error(A(261));return te=null,ie=0,J}function ev(){for(;X!==null;)fh(X)}function tv(){for(;X!==null&&!Cm();)fh(X)}function fh(e){var t=mh(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,t===null?hh(e):X=t,Ml.current=null}function hh(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=qg(n,t,Ae),n!==null){X=n;return}}else{if(n=Gg(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,X=null;return}}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);J===0&&(J=5)}function qt(e,t,n){var r=U,i=Oe.transition;try{Oe.transition=null,U=1,nv(e,t,n,r)}finally{Oe.transition=i,U=r}return null}function nv(e,t,n,r){do Bn();while(Ct!==null);if((M&6)!==0)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Um(e,o),e===te&&(X=te=null,ie=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ni||(Ni=!0,gh(Zi,function(){return Bn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=Oe.transition,Oe.transition=null;var s=U;U=1;var a=M;M|=4,Ml.current=null,Xg(e,n),ah(n,e),Eg(ga),to=!!ma,ga=ma=null,e.current=n,Yg(n),Tm(),M=a,U=s,Oe.transition=o}else e.current=n;if(Ni&&(Ni=!1,Ct=e,yo=i),o=e.pendingLanes,o===0&&(xt=null),Nm(n.stateNode),we(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vo)throw vo=!1,e=Ua,Ua=null,e;return(yo&1)!==0&&e.tag!==0&&Bn(),o=e.pendingLanes,(o&1)!==0?e===Ba?kr++:(kr=0,Ba=e):kr=0,Vt(),null}function Bn(){if(Ct!==null){var e=Wd(yo),t=Oe.transition,n=U;try{if(Oe.transition=null,U=16>e?16:e,Ct===null)var r=!1;else{if(e=Ct,Ct=null,yo=0,(M&6)!==0)throw Error(A(331));var i=M;for(M|=4,S=e.current;S!==null;){var o=S,s=o.child;if((S.flags&16)!==0){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(S=u;S!==null;){var d=S;switch(d.tag){case 0:case 11:case 15:Sr(8,d,o)}var m=d.child;if(m!==null)m.return=d,S=m;else for(;S!==null;){d=S;var h=d.sibling,g=d.return;if(ih(d),d===u){S=null;break}if(h!==null){h.return=g,S=h;break}S=g}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var O=v.sibling;v.sibling=null,v=O}while(v!==null)}}S=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,S=s;else e:for(;S!==null;){if(o=S,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Sr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,S=f;break e}S=o.return}}var c=e.current;for(S=c;S!==null;){s=S;var p=s.child;if((s.subtreeFlags&2064)!==0&&p!==null)p.return=s,S=p;else e:for(s=c;S!==null;){if(a=S,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Bo(9,a)}}catch(E){q(a,a.return,E)}if(a===s){S=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,S=w;break e}S=a.return}}if(M=i,Vt(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(Po,e)}catch{}r=!0}return r}finally{U=n,Oe.transition=t}}return!1}function gc(e,t,n){t=Wn(n,t),t=qf(e,t,1),e=Dt(e,t,1),t=fe(),e!==null&&(Zr(e,1,t),we(e,t))}function q(e,t,n){if(e.tag===3)gc(e,e,n);else for(;t!==null;){if(t.tag===3){gc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=Wn(n,e),e=Gf(t,e,1),t=Dt(t,e,1),e=fe(),t!==null&&(Zr(t,1,e),we(t,e));break}}t=t.return}}function rv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(ie&n)===n&&(J===4||J===3&&(ie&130023424)===ie&&500>K()-Bl?Zt(e,0):Ul|=n),we(e,t)}function ph(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ai,Ai<<=1,(Ai&130023424)===0&&(Ai=4194304)));var n=fe();e=ut(e,t),e!==null&&(Zr(e,t,n),we(e,n))}function iv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ph(e,n)}function ov(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),ph(e,n)}var mh;mh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ge=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ge=!1,Qg(e,t,n);ge=(e.flags&131072)!==0}else ge=!1,V&&(t.flags&1048576)!==0&&yf(t,lo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$i(e,t),e=t.pendingProps;var i=jn(t,ue.current);Un(t,n),i=Nl(null,t,r,e,i,n);var o=Ol();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(o=!0,so(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kl(t),i.updater=Mo,t.stateNode=i,i._reactInternals=t,ka(t,r,e,n),t=Ra(null,t,r,!0,o,n)):(t.tag=0,V&&o&&yl(t),de(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($i(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=av(r),e=Be(r,e),i){case 0:t=Ta(null,t,r,e,n);break e;case 1:t=sc(null,t,r,e,n);break e;case 11:t=ic(null,t,r,e,n);break e;case 14:t=oc(null,t,r,Be(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),Ta(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),sc(e,t,r,i,n);case 3:e:{if(Jf(t),e===null)throw Error(A(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Ef(e,t),fo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Wn(Error(A(423)),t),t=ac(e,t,r,n,i);break e}else if(r!==i){i=Wn(Error(A(424)),t),t=ac(e,t,r,n,i);break e}else for(_e=Ot(t.stateNode.containerInfo.firstChild),Ee=t,V=!0,ze=null,n=Cf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($n(),r===i){t=ct(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return Tf(t),e===null&&Ea(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,va(r,i)?s=null:o!==null&&va(r,o)&&(t.flags|=32),Yf(e,t),de(e,t,s,n),t.child;case 6:return e===null&&Ea(t),null;case 13:return Zf(e,t,n);case 4:return Cl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),ic(e,t,r,i,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,z(uo,r._currentValue),r._currentValue=s,o!==null)if($e(o.value,s)){if(o.children===i.children&&!ve.current){t=ct(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=st(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Sa(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(A(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Sa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}de(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Un(t,n),i=xe(i),r=r(i),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,i=Be(r,t.pendingProps),i=Be(r.type,i),oc(e,t,r,i,n);case 15:return Kf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),$i(e,t),t.tag=1,ye(r)?(e=!0,so(t)):e=!1,Un(t,n),If(t,r,i),ka(t,r,i,n),Ra(null,t,r,!0,e,n);case 19:return eh(e,t,n);case 22:return Xf(e,t,n)}throw Error(A(156,t.tag))};function gh(e,t){return jd(e,t)}function sv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new sv(e,t,n,r)}function jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function av(e){if(typeof e=="function")return jl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sl)return 11;if(e===al)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wi(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")jl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case An:return en(n.children,i,o,t);case ol:s=8,i|=8;break;case Ks:return e=Ne(12,n,t,i|2),e.elementType=Ks,e.lanes=o,e;case Xs:return e=Ne(13,n,t,i),e.elementType=Xs,e.lanes=o,e;case Ys:return e=Ne(19,n,t,i),e.elementType=Ys,e.lanes=o,e;case Id:return zo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ed:s=10;break e;case Sd:s=9;break e;case sl:s=11;break e;case al:s=14;break e;case vt:s=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Ne(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function en(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function zo(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=Id,e.lanes=n,e.stateNode={isHidden:!1},e}function Rs(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Ps(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=us(0),this.expirationTimes=us(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=us(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $l(e,t,n,r,i,o,s,a,l){return e=new lv(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ne(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kl(o),e}function uv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vh(e){if(!e)return bt;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(ye(n))return gf(e,n,t)}return t}function yh(e,t,n,r,i,o,s,a,l){return e=$l(n,r,!0,e,i,o,s,a,l),e.context=vh(null),n=e.current,r=fe(),i=Lt(n),o=st(r,i),o.callback=t!=null?t:null,Dt(n,o,i),e.current.lanes=i,Zr(e,i,r),we(e,r),e}function bo(e,t,n,r){var i=t.current,o=fe(),s=Lt(i);return n=vh(n),t.context===null?t.context=n:t.pendingContext=n,t=st(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(i,t,s),e!==null&&(je(e,i,s,o),zi(e,i,s)),s}function Ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vl(e,t){vc(e,t),(e=e.alternate)&&vc(e,t)}function cv(){return null}var wh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hl(e){this._internalRoot=e}jo.prototype.render=Hl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));bo(e,t,null,null)};jo.prototype.unmount=Hl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){bo(null,e,null,null)}),t[lt]=null}};function jo(e){this._internalRoot=e}jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&Xd(e)}};function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yc(){}function dv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ao(s);o.call(u)}}var s=yh(t,r,e,0,null,!1,!1,"",yc);return e._reactRootContainer=s,e[lt]=s.current,Ur(e.nodeType===8?e.parentNode:e),an(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ao(l);a.call(u)}}var l=$l(e,0,!1,null,null,!1,!1,"",yc);return e._reactRootContainer=l,e[lt]=l.current,Ur(e.nodeType===8?e.parentNode:e),an(function(){bo(t,l,n,r)}),l}function Vo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Ao(s);a.call(l)}}bo(t,s,e,i)}else s=dv(n,t,e,i,r);return Ao(s)}Qd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(cl(t,n|1),we(t,K()),(M&6)===0&&(Qn=K()+500,Vt()))}break;case 13:an(function(){var r=ut(e,1);if(r!==null){var i=fe();je(r,e,1,i)}}),Vl(e,1)}};dl=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=fe();je(t,e,134217728,n)}Vl(e,134217728)}};qd=function(e){if(e.tag===13){var t=Lt(e),n=ut(e,t);if(n!==null){var r=fe();je(n,e,t,r)}Vl(e,t)}};Gd=function(){return U};Kd=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};aa=function(e,t,n){switch(t){case"input":if(ea(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xo(r);if(!i)throw Error(A(90));Cd(r),ea(r,i)}}}break;case"textarea":Rd(e,n);break;case"select":t=n.value,t!=null&&Dn(e,!!n.multiple,t,!1)}};Md=Fl;Ud=an;var fv={usingClientEntryPoint:!1,Events:[ti,In,xo,xd,Ld,Fl]},ur={findFiberByHostInstance:Kt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},hv={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zd(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||cv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oi.isDisabled&&Oi.supportsFiber)try{Po=Oi.inject(hv),qe=Oi}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fv;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wl(t))throw Error(A(200));return uv(e,t,null,n)};ke.createRoot=function(e,t){if(!Wl(e))throw Error(A(299));var n=!1,r="",i=wh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=$l(e,1,!1,null,null,n,!1,r,i),e[lt]=t.current,Ur(e.nodeType===8?e.parentNode:e),new Hl(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=zd(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return an(e)};ke.hydrate=function(e,t,n){if(!$o(t))throw Error(A(200));return Vo(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!Wl(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=wh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=yh(t,null,e,1,n!=null?n:null,i,!1,o,s),e[lt]=t.current,Ur(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new jo(t)};ke.render=function(e,t,n){if(!$o(t))throw Error(A(200));return Vo(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!$o(e))throw Error(A(40));return e._reactRootContainer?(an(function(){Vo(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};ke.unstable_batchedUpdates=Fl;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$o(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Vo(e,t,n,!1,r)};ke.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ke})(vd);var wc=vd.exports;qs.createRoot=wc.createRoot,qs.hydrateRoot=wc.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},pv=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},_h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=o>>2,m=(o&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(h=64)),r.push(n[d],n[m],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ah(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):pv(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const m=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||m==null)throw Error();const h=o<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),m!==64){const y=u<<6&192|m;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},mv=function(e){const t=Ah(e);return _h.encodeByteArray(t,!0)},Eh=function(e){return mv(e).replace(/\./g,"")},Sh=function(e){try{return _h.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function Ih(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function vv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yv(){const e=ce();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function kh(){return typeof indexedDB=="object"}function Ch(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function wv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function Av(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=()=>Av().__FIREBASE_DEFAULTS__,Ev=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Sv=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Sh(e[1]);return t&&JSON.parse(t)},Ql=()=>{try{return _v()||Ev()||Sv()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Iv=e=>{var t,n;return(n=(t=Ql())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},kv=()=>{var e;return(e=Ql())===null||e===void 0?void 0:e.config},Th=e=>{var t;return(t=Ql())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="FirebaseError";class Ze extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Tv,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gn.prototype.create)}}class gn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Rv(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Ze(i,a,r)}}function Rv(e,t){return e.replace(Pv,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Pv=/\{\$([^}]+)}/g;function Nv(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Wr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Ac(o)&&Ac(s)){if(!Wr(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ac(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function pr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function mr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Ov(e,t){const n=new Dv(e,t);return n.subscribe.bind(n)}class Dv{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xv(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ns),i.error===void 0&&(i.error=Ns),i.complete===void 0&&(i.complete=Ns);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xv(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ns(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=1e3,Mv=2,Uv=4*60*60*1e3,Bv=.5;function _c(e,t=Lv,n=Mv){const r=t*Math.pow(n,e),i=Math.round(Bv*r*(Math.random()-.5)*2);return Math.min(Uv,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(e){return e&&e._delegate?e._delegate:e}class Je{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Cv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(bv(t))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Gt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Gt){return this.instances.has(t)}getOptions(t=Gt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zv(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Gt){return this.component?this.component.multipleInstances?t:Gt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zv(e){return e===Gt?void 0:e}function bv(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Fv(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(B||(B={}));const $v={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Vv=B.INFO,Hv={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Wv=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Hv[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ql{constructor(t){this.name=t,this._logLevel=Vv,this._logHandler=Wv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?$v[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const Qv=(e,t)=>t.some(n=>e instanceof n);let Ec,Sc;function qv(){return Ec||(Ec=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gv(){return Sc||(Sc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rh=new WeakMap,ba=new WeakMap,Ph=new WeakMap,Os=new WeakMap,Gl=new WeakMap;function Kv(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Ut(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Rh.set(n,e)}).catch(()=>{}),Gl.set(t,e),t}function Xv(e){if(ba.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});ba.set(e,t)}let ja={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ba.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ph.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Yv(e){ja=e(ja)}function Jv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ds(this),t,...n);return Ph.set(r,t.sort?t.sort():[t]),Ut(r)}:Gv().includes(e)?function(...t){return e.apply(Ds(this),t),Ut(Rh.get(this))}:function(...t){return Ut(e.apply(Ds(this),t))}}function Zv(e){return typeof e=="function"?Jv(e):(e instanceof IDBTransaction&&Xv(e),Qv(e,qv())?new Proxy(e,ja):e)}function Ut(e){if(e instanceof IDBRequest)return Kv(e);if(Os.has(e))return Os.get(e);const t=Zv(e);return t!==e&&(Os.set(e,t),Gl.set(t,e)),t}const Ds=e=>Gl.get(e);function Nh(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Ut(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Ut(s.result),l.oldVersion,l.newVersion,Ut(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const ey=["get","getKey","getAll","getAllKeys","count"],ty=["put","add","delete","clear"],xs=new Map;function Ic(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(xs.get(t))return xs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=ty.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ey.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return xs.set(t,o),o}Yv(e=>({...e,get:(t,n,r)=>Ic(t,n)||e.get(t,n,r),has:(t,n)=>!!Ic(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ry(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ry(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const $a="@firebase/app",kc="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new ql("@firebase/app"),iy="@firebase/app-compat",oy="@firebase/analytics-compat",sy="@firebase/analytics",ay="@firebase/app-check-compat",ly="@firebase/app-check",uy="@firebase/auth",cy="@firebase/auth-compat",dy="@firebase/database",fy="@firebase/database-compat",hy="@firebase/functions",py="@firebase/functions-compat",my="@firebase/installations",gy="@firebase/installations-compat",vy="@firebase/messaging",yy="@firebase/messaging-compat",wy="@firebase/performance",Ay="@firebase/performance-compat",_y="@firebase/remote-config",Ey="@firebase/remote-config-compat",Sy="@firebase/storage",Iy="@firebase/storage-compat",ky="@firebase/firestore",Cy="@firebase/firestore-compat",Ty="firebase",Ry="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va="[DEFAULT]",Py={[$a]:"fire-core",[iy]:"fire-core-compat",[sy]:"fire-analytics",[oy]:"fire-analytics-compat",[ly]:"fire-app-check",[ay]:"fire-app-check-compat",[uy]:"fire-auth",[cy]:"fire-auth-compat",[dy]:"fire-rtdb",[fy]:"fire-rtdb-compat",[hy]:"fire-fn",[py]:"fire-fn-compat",[my]:"fire-iid",[gy]:"fire-iid-compat",[vy]:"fire-fcm",[yy]:"fire-fcm-compat",[wy]:"fire-perf",[Ay]:"fire-perf-compat",[_y]:"fire-rc",[Ey]:"fire-rc-compat",[Sy]:"fire-gcs",[Iy]:"fire-gcs-compat",[ky]:"fire-fst",[Cy]:"fire-fst-compat","fire-js":"fire-js",[Ty]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new Map,Ha=new Map;function Ny(e,t){try{e.container.addComponent(t)}catch(n){ln.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function dt(e){const t=e.name;if(Ha.has(t))return ln.debug(`There were multiple attempts to register component ${t}.`),!1;Ha.set(t,e);for(const n of _o.values())Ny(n,e);return!0}function Xn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Bt=new gn("app","Firebase",Oy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=Ry;function Oh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Va,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Bt.create("bad-app-name",{appName:String(i)});if(n||(n=kv()),!n)throw Bt.create("no-options");const o=_o.get(i);if(o){if(Wr(n,o.options)&&Wr(r,o.config))return o;throw Bt.create("duplicate-app",{appName:i})}const s=new jv(i);for(const l of Ha.values())s.addComponent(l);const a=new Dy(n,r,s);return _o.set(i,a),a}function Dh(e=Va){const t=_o.get(e);if(!t&&e===Va)return Oh();if(!t)throw Bt.create("no-app",{appName:e});return t}function Ke(e,t,n){var r;let i=(r=Py[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ln.warn(a.join(" "));return}dt(new Je(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="firebase-heartbeat-database",Ly=1,Qr="firebase-heartbeat-store";let Ls=null;function xh(){return Ls||(Ls=Nh(xy,Ly,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Qr)}}}).catch(e=>{throw Bt.create("idb-open",{originalErrorMessage:e.message})})),Ls}async function My(e){var t;try{return(await xh()).transaction(Qr).objectStore(Qr).get(Lh(e))}catch(n){if(n instanceof Ze)ln.warn(n.message);else{const r=Bt.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});ln.warn(r.message)}}}async function Cc(e,t){var n;try{const i=(await xh()).transaction(Qr,"readwrite");return await i.objectStore(Qr).put(t,Lh(e)),i.done}catch(r){if(r instanceof Ze)ln.warn(r.message);else{const i=Bt.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});ln.warn(i.message)}}}function Lh(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=1024,By=30*24*60*60*1e3;class Fy{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new by(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Tc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=By}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Tc(),{heartbeatsToSend:n,unsentEntries:r}=zy(this._heartbeatsCache.heartbeats),i=Eh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Tc(){return new Date().toISOString().substring(0,10)}function zy(e,t=Uy){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Rc(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class by{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kh()?Ch().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await My(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Rc(e){return Eh(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(e){dt(new Je("platform-logger",t=>new ny(t),"PRIVATE")),dt(new Je("heartbeat",t=>new Fy(t),"PRIVATE")),Ke($a,kc,e),Ke($a,kc,"esm2017"),Ke("fire-js","")}jy("");var $y="firebase",Vy="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ke($y,Vy,"app");const Mh="@firebase/installations",Kl="0.5.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=1e4,Bh=`w:${Kl}`,Fh="FIS_v2",Hy="https://firebaseinstallations.googleapis.com/v1",Wy=60*60*1e3,Qy="installations",qy="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},un=new gn(Qy,qy,Gy);function zh(e){return e instanceof Ze&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh({projectId:e}){return`${Hy}/projects/${e}/installations`}function jh(e){return{token:e.token,requestStatus:2,expiresIn:Xy(e.expiresIn),creationTime:Date.now()}}async function $h(e,t){const r=(await t.json()).error;return un.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Vh({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Ky(e,{refreshToken:t}){const n=Vh(e);return n.append("Authorization",Yy(t)),n}async function Hh(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Xy(e){return Number(e.replace("s","000"))}function Yy(e){return`${Fh} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=bh(e),i=Vh(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:Fh,appId:e.appId,sdkVersion:Bh},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Hh(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:jh(u.authToken)}}else throw await $h("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=/^[cdef][\w-]{21}$/,Wa="";function t0(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=n0(e);return e0.test(n)?n:Wa}catch{return Wa}}function n0(e){return Zy(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh=new Map;function qh(e,t){const n=Wo(e);Gh(n,t),r0(n,t)}function Gh(e,t){const n=Qh.get(e);if(!!n)for(const r of n)r(t)}function r0(e,t){const n=i0();n&&n.postMessage({key:e,fid:t}),o0()}let Jt=null;function i0(){return!Jt&&"BroadcastChannel"in self&&(Jt=new BroadcastChannel("[Firebase] FID Change"),Jt.onmessage=e=>{Gh(e.data.key,e.data.fid)}),Jt}function o0(){Qh.size===0&&Jt&&(Jt.close(),Jt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0="firebase-installations-database",a0=1,cn="firebase-installations-store";let Ms=null;function Xl(){return Ms||(Ms=Nh(s0,a0,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(cn)}}})),Ms}async function Eo(e,t){const n=Wo(e),i=(await Xl()).transaction(cn,"readwrite"),o=i.objectStore(cn),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&qh(e,t.fid),t}async function Kh(e){const t=Wo(e),r=(await Xl()).transaction(cn,"readwrite");await r.objectStore(cn).delete(t),await r.done}async function Qo(e,t){const n=Wo(e),i=(await Xl()).transaction(cn,"readwrite"),o=i.objectStore(cn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&qh(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yl(e){let t;const n=await Qo(e.appConfig,r=>{const i=l0(r),o=u0(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===Wa?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function l0(e){const t=e||{fid:t0(),registrationStatus:0};return Xh(t)}function u0(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(un.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=c0(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:d0(e)}:{installationEntry:t}}async function c0(e,t){try{const n=await Jy(e,t);return Eo(e.appConfig,n)}catch(n){throw zh(n)&&n.customData.serverCode===409?await Kh(e.appConfig):await Eo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function d0(e){let t=await Pc(e.appConfig);for(;t.registrationStatus===1;)await Wh(100),t=await Pc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Yl(e);return r||n}return t}function Pc(e){return Qo(e,t=>{if(!t)throw un.create("installation-not-found");return Xh(t)})}function Xh(e){return f0(e)?{fid:e.fid,registrationStatus:0}:e}function f0(e){return e.registrationStatus===1&&e.registrationTime+Uh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h0({appConfig:e,heartbeatServiceProvider:t},n){const r=p0(e,n),i=Ky(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:Bh,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Hh(()=>fetch(r,a));if(l.ok){const u=await l.json();return jh(u)}else throw await $h("Generate Auth Token",l)}function p0(e,{fid:t}){return`${bh(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jl(e,t=!1){let n;const r=await Qo(e.appConfig,o=>{if(!Yh(o))throw un.create("not-registered");const s=o.authToken;if(!t&&v0(s))return o;if(s.requestStatus===1)return n=m0(e,t),o;{if(!navigator.onLine)throw un.create("app-offline");const a=w0(o);return n=g0(e,a),a}});return n?await n:r.authToken}async function m0(e,t){let n=await Nc(e.appConfig);for(;n.authToken.requestStatus===1;)await Wh(100),n=await Nc(e.appConfig);const r=n.authToken;return r.requestStatus===0?Jl(e,t):r}function Nc(e){return Qo(e,t=>{if(!Yh(t))throw un.create("not-registered");const n=t.authToken;return A0(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function g0(e,t){try{const n=await h0(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Eo(e.appConfig,r),n}catch(n){if(zh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Kh(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Eo(e.appConfig,r)}throw n}}function Yh(e){return e!==void 0&&e.registrationStatus===2}function v0(e){return e.requestStatus===2&&!y0(e)}function y0(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Wy}function w0(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function A0(e){return e.requestStatus===1&&e.requestTime+Uh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _0(e){const t=e,{installationEntry:n,registrationPromise:r}=await Yl(t);return r?r.catch(console.error):Jl(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E0(e,t=!1){const n=e;return await S0(n),(await Jl(n,t)).token}async function S0(e){const{registrationPromise:t}=await Yl(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(e){if(!e||!e.options)throw Us("App Configuration");if(!e.name)throw Us("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Us(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Us(e){return un.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="installations",k0="installations-internal",C0=e=>{const t=e.getProvider("app").getImmediate(),n=I0(t),r=Xn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},T0=e=>{const t=e.getProvider("app").getImmediate(),n=Xn(t,Jh).getImmediate();return{getId:()=>_0(n),getToken:i=>E0(n,i)}};function R0(){dt(new Je(Jh,C0,"PUBLIC")),dt(new Je(k0,T0,"PRIVATE"))}R0();Ke(Mh,Kl);Ke(Mh,Kl,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So="analytics",P0="firebase_id",N0="origin",O0=60*1e3,D0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Zh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=new ql("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function x0(e,t){const n=document.createElement("script");n.src=`${Zh}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function L0(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function M0(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await ep(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){Se.error(a)}e("config",i,o)}async function U0(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await ep(n);for(const l of s){const u=a.find(m=>m.measurementId===l),d=u&&t[u.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){Se.error(o)}}function B0(e,t,n,r){async function i(o,s,a){try{o==="event"?await U0(e,t,n,s,a):o==="config"?await M0(e,t,n,r,s,a):o==="consent"?e("consent","update",a):e("set",s)}catch(l){Se.error(l)}}return i}function F0(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=B0(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function z0(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Zh)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},De=new gn("analytics","Analytics",b0);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=30,$0=1e3;class V0{constructor(t={},n=$0){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const tp=new V0;function H0(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function W0(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:H0(r)},o=D0.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw De.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function Q0(e,t=tp,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw De.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw De.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new K0;return setTimeout(async()=>{a.abort()},n!==void 0?n:O0),np({appId:r,apiKey:i,measurementId:o},s,a,t)}async function np(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=tp){var o,s;const{appId:a,measurementId:l}=e;try{await q0(r,t)}catch(u){if(l)return Se.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(o=u)===null||o===void 0?void 0:o.message}]`),{appId:a,measurementId:l};throw u}try{const u=await W0(e);return i.deleteThrottleMetadata(a),u}catch(u){const d=u;if(!G0(d)){if(i.deleteThrottleMetadata(a),l)return Se.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:l};throw u}const m=Number((s=d==null?void 0:d.customData)===null||s===void 0?void 0:s.httpStatus)===503?_c(n,i.intervalMillis,j0):_c(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+m,backoffCount:n+1};return i.setThrottleMetadata(a,h),Se.debug(`Calling attemptFetch again in ${m} millis`),np(e,h,r,i)}}function q0(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(De.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function G0(e){if(!(e instanceof Ze)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class K0{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function X0(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y0(){var e;if(kh())try{await Ch()}catch(t){return Se.warn(De.create("indexeddb-unavailable",{errorInfo:(e=t)===null||e===void 0?void 0:e.toString()}).message),!1}else return Se.warn(De.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function J0(e,t,n,r,i,o,s){var a;const l=Q0(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Se.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Se.error(g)),t.push(l);const u=Y0().then(g=>{if(g)return r.getId()}),[d,m]=await Promise.all([l,u]);z0(o)||x0(o,d.measurementId),i("js",new Date);const h=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return h[N0]="firebase",h.update=!0,m!=null&&(h[P0]=m),i("config",d.measurementId,h),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(t){this.app=t}_delete(){return delete Cr[this.app.options.appId],Promise.resolve()}}let Cr={},Oc=[];const Dc={};let Bs="dataLayer",ew="gtag",xc,rp,Lc=!1;function tw(){const e=[];if(Ih()&&e.push("This is a browser extension environment."),wv()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=De.create("invalid-analytics-context",{errorInfo:t});Se.warn(n.message)}}function nw(e,t,n){tw();const r=e.options.appId;if(!r)throw De.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Se.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw De.create("no-api-key");if(Cr[r]!=null)throw De.create("already-exists",{id:r});if(!Lc){L0(Bs);const{wrappedGtag:o,gtagCore:s}=F0(Cr,Oc,Dc,Bs,ew);rp=o,xc=s,Lc=!0}return Cr[r]=J0(e,Oc,Dc,t,xc,Bs,n),new Z0(e)}function rw(e=Dh()){e=pt(e);const t=Xn(e,So);return t.isInitialized()?t.getImmediate():iw(e)}function iw(e,t={}){const n=Xn(e,So);if(n.isInitialized()){const i=n.getImmediate();if(Wr(t,n.getOptions()))return i;throw De.create("already-initialized")}return n.initialize({options:t})}function ow(e,t,n,r){e=pt(e),X0(rp,Cr[e.app.options.appId],t,n,r).catch(i=>Se.error(i))}const Mc="@firebase/analytics",Uc="0.8.4";function sw(){dt(new Je(So,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return nw(r,i,n)},"PUBLIC")),dt(new Je("analytics-internal",e,"PRIVATE")),Ke(Mc,Uc),Ke(Mc,Uc,"esm2017");function e(t){try{const n=t.getProvider(So).getImmediate();return{logEvent:(r,i,o)=>ow(n,r,i,o)}}catch(n){throw De.create("interop-component-reg-failed",{reason:n})}}}sw();const aw={apiKey:"AIzaSyBvyAhSaX_Ur-kAqN1Ghei3ODsUwqVl4_k",authDomain:"enabler-528de.firebaseapp.com",projectId:"enabler-528de",storageBucket:"enabler-528de.appspot.com",messagingSenderId:"395670603828",appId:"1:395670603828:web:20a7e8d3d3ad672faee261",measurementId:"G-QEX21V43X1"},Zl=Oh(aw);rw(Zl);function eu(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function ip(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lw=ip,op=new gn("auth","Firebase",ip());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=new ql("@firebase/auth");function Qi(e,...t){Bc.logLevel<=B.ERROR&&Bc.error(`Auth (${Ho}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(e,...t){throw tu(e,...t)}function Xe(e,...t){return tu(e,...t)}function uw(e,t,n){const r=Object.assign(Object.assign({},lw()),{[t]:n});return new gn("auth","Firebase",r).create(t,{appName:e.name})}function tu(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return op.create(e,...t)}function P(e,t,...n){if(!e)throw tu(t,...n)}function it(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Qi(t),new Error(t)}function ft(e,t){e||it(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=new Map;function ot(e){ft(e instanceof Function,"Expected a class definition");let t=Fc.get(e);return t?(ft(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Fc.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(e,t){const n=Xn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Wr(o,t!=null?t:{}))return i;Ve(i,"already-initialized")}return n.initialize({options:t})}function dw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ot);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function fw(){return zc()==="http:"||zc()==="https:"}function zc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fw()||Ih()||"connection"in navigator)?navigator.onLine:!0}function pw(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,n){this.shortDelay=t,this.longDelay=n,ft(n>t,"Short delay should be less than long delay!"),this.isMobile=gv()||vv()}get(){return hw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(e,t){ft(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=new ii(3e4,6e4);function oi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function si(e,t,n,r,i={}){return ap(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=ri(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),sp.fetch()(lp(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function ap(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},mw),t);try{const i=new vw(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Di(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Di(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Di(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Di(e,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw uw(e,d,u);Ve(e,d)}}catch(i){if(i instanceof Ze)throw i;Ve(e,"network-request-failed")}}async function ai(e,t,n,r,i={}){const o=await si(e,t,n,r,i);return"mfaPendingCredential"in o&&Ve(e,"multi-factor-auth-required",{_serverResponse:o}),o}function lp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?nu(e.config,i):`${e.config.apiScheme}://${i}`}class vw{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"network-request-failed")),gw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Di(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Xe(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(e,t){return si(e,"POST","/v1/accounts:delete",t)}async function ww(e,t){return si(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Aw(e,t=!1){const n=pt(e),r=await n.getIdToken(t),i=ru(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Tr(Fs(i.auth_time)),issuedAtTime:Tr(Fs(i.iat)),expirationTime:Tr(Fs(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Fs(e){return Number(e)*1e3}function ru(e){var t;const[n,r,i]=e.split(".");if(n===void 0||r===void 0||i===void 0)return Qi("JWT malformed, contained fewer than 3 sections"),null;try{const o=Sh(r);return o?JSON.parse(o):(Qi("Failed to decode base64 JWT payload"),null)}catch(o){return Qi("Caught error parsing JWT payload as JSON",(t=o)===null||t===void 0?void 0:t.toString()),null}}function _w(e){const t=ru(e);return P(t,"internal-error"),P(typeof t.exp<"u","internal-error"),P(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ze&&Ew(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Ew({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(n){((t=n)===null||t===void 0?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tr(this.lastLoginAt),this.creationTime=Tr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(e){var t;const n=e.auth,r=await e.getIdToken(),i=await qr(e,ww(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Cw(o.providerUserInfo):[],a=kw(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new up(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,m)}async function Iw(e){const t=pt(e);await Io(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function kw(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Cw(e){return e.map(t=>{var{providerId:n}=t,r=eu(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tw(e,t){const n=await ap(e,{},async()=>{const r=ri({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=lp(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sp.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){P(t.idToken,"internal-error"),P(typeof t.idToken<"u","internal-error"),P(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):_w(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return P(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await Tw(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Gr;return r&&(P(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(P(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Gr,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e,t){P(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class tn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=eu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new up(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await qr(this,this.stsTokenManager.getToken(this.auth,t));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Aw(this,t)}reload(){return Iw(this)}_assign(t){this!==t&&(P(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new tn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Io(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await qr(this,yw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,d;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:w,isAnonymous:E,providerData:k,stsTokenManager:C}=n;P(p&&C,t,"internal-error");const T=Gr.fromJSON(this.name,C);P(typeof p=="string",t,"internal-error"),gt(m,t.name),gt(h,t.name),P(typeof w=="boolean",t,"internal-error"),P(typeof E=="boolean",t,"internal-error"),gt(g,t.name),gt(y,t.name),gt(v,t.name),gt(O,t.name),gt(f,t.name),gt(c,t.name);const b=new tn({uid:p,auth:t,email:h,emailVerified:w,displayName:m,isAnonymous:E,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:T,createdAt:f,lastLoginAt:c});return k&&Array.isArray(k)&&(b.providerData=k.map(x=>Object.assign({},x))),O&&(b._redirectEventId=O),b}static async _fromIdTokenResponse(t,n,r=!1){const i=new Gr;i.updateFromServerResponse(n);const o=new tn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Io(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}cp.type="NONE";const bc=cp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(e,t,n){return`firebase:${e}:${t}:${n}`}class Fn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=qi(this.userKey,i.apiKey,o),this.fullPersistenceKey=qi("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?tn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Fn(ot(bc),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||ot(bc);const s=qi(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const m=tn._fromJSON(t,d);u!==o&&(a=m),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Fn(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Fn(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(hp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(dp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(mp(t))return"Blackberry";if(gp(t))return"Webos";if(iu(t))return"Safari";if((t.includes("chrome/")||fp(t))&&!t.includes("edge/"))return"Chrome";if(pp(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function dp(e=ce()){return/firefox\//i.test(e)}function iu(e=ce()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fp(e=ce()){return/crios\//i.test(e)}function hp(e=ce()){return/iemobile/i.test(e)}function pp(e=ce()){return/android/i.test(e)}function mp(e=ce()){return/blackberry/i.test(e)}function gp(e=ce()){return/webos/i.test(e)}function qo(e=ce()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Rw(e=ce()){var t;return qo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Pw(){return yv()&&document.documentMode===10}function vp(e=ce()){return qo(e)||pp(e)||gp(e)||mp(e)||/windows phone/i.test(e)||hp(e)}function Nw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(e,t=[]){let n;switch(e){case"Browser":n=jc(ce());break;case"Worker":n=`${jc(ce())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ho}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var n;if(this.auth.currentUser===t)return;const r=[];try{for(const i of this.queue)await i(t),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const o of r)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $c(this),this.idTokenSubscription=new $c(this),this.beforeStateQueue=new Ow(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=op,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ot(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l==null?void 0:l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){var n;try{await Io(t)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=pw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?pt(t):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&P(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new gn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ot(t)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Fn.create(this,[ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return P(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=yp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function li(e){return pt(e)}class $c{constructor(t){this.auth=t,this.observer=null,this.addObserver=Ov(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function xw(e,t,n){const r=li(e);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=wp(t),{host:s,port:a}=Lw(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Mw()}function wp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Lw(e){const t=wp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Vc(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Vc(s)}}}function Vc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Mw(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return it("not implemented")}_getIdTokenResponse(t){return it("not implemented")}_linkToIdToken(t,n){return it("not implemented")}_getReauthenticationResolver(t){return it("not implemented")}}async function Uw(e,t){return si(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(e,t){return ai(e,"POST","/v1/accounts:signInWithPassword",oi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fw(e,t){return ai(e,"POST","/v1/accounts:signInWithEmailLink",oi(e,t))}async function zw(e,t){return ai(e,"POST","/v1/accounts:signInWithEmailLink",oi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends ou{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Kr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Kr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Bw(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Fw(t,{email:this._email,oobCode:this._password});default:Ve(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Uw(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return zw(t,{idToken:n,email:this._email,oobCode:this._password});default:Ve(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(e,t){return ai(e,"POST","/v1/accounts:signInWithIdp",oi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw="http://localhost";class dn extends ou{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new dn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=eu(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new dn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return zn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,zn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,zn(t,n)}buildRequest(){const t={requestUri:bw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ri(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $w(e){const t=pr(mr(e)).link,n=t?pr(mr(t)).deep_link_id:null,r=pr(mr(e)).deep_link_id;return(r?pr(mr(r)).link:null)||r||n||t||e}class su{constructor(t){var n,r,i,o,s,a;const l=pr(mr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,m=jw((i=l.mode)!==null&&i!==void 0?i:null);P(u&&d&&m,"argument-error"),this.apiKey=u,this.operation=m,this.code=d,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=$w(t);try{return new su(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.providerId=Yn.PROVIDER_ID}static credential(t,n){return Kr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=su.parseLink(n);return P(r,"argument-error"),Kr._fromEmailAndCode(t,r.code,r.tenantId)}}Yn.PROVIDER_ID="password";Yn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends Ap{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends ui{constructor(){super("facebook.com")}static credential(t){return dn._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _t.credentialFromTaggedObject(t)}static credentialFromError(t){return _t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return _t.credential(t.oauthAccessToken)}catch{return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends ui{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return dn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com";Et.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends ui{constructor(){super("github.com")}static credential(t){return dn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return St.credential(t.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends ui{constructor(){super("twitter.com")}static credential(t,n){return dn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return It.credential(n,r)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vw(e,t){return ai(e,"POST","/v1/accounts:signUp",oi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await tn._fromIdTokenResponse(t,r,i),s=Hc(r);return new fn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Hc(r);return new fn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Hc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends Ze{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ko.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ko(t,n,r,i)}}function _p(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ko._fromErrorAndOperation(e,o,t,r):o})}async function Hw(e,t,n=!1){const r=await qr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return fn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ww(e,t,n=!1){var r;const{auth:i}=e,o="reauthenticate";try{const s=await qr(e,_p(i,o,t,e),n);P(s.idToken,i,"internal-error");const a=ru(s.idToken);P(a,i,"internal-error");const{sub:l}=a;return P(e.uid===l,i,"user-mismatch"),fn._forOperation(e,o,s)}catch(s){throw((r=s)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Ve(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ep(e,t,n=!1){const r="signIn",i=await _p(e,r,t),o=await fn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function Qw(e,t){return Ep(li(e),t)}async function qw(e,t,n){const r=li(e),i=await Vw(r,{returnSecureToken:!0,email:t,password:n}),o=await fn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function Gw(e,t,n){return Qw(pt(e),Yn.credential(t,n))}function Kw(e,t,n,r){return pt(e).onIdTokenChanged(t,n,r)}function Xw(e,t,n){return pt(e).beforeAuthStateChanged(t,n)}const Co="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Co,"1"),this.storage.removeItem(Co),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(){const e=ce();return iu(e)||qo(e)}const Jw=1e3,Zw=10;class Ip extends Sp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Yw()&&Nw(),this.fallbackToPolling=vp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);Pw()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Zw):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Jw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ip.type="LOCAL";const eA=Ip;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp extends Sp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}kp.type="SESSION";const Cp=kp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Go(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await tA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Go.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=au("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(m){const h=m;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(h.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return window}function rA(e){Ye().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function iA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oA(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function sA(){return Tp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="firebaseLocalStorageDb",aA=1,To="firebaseLocalStorage",Pp="fbase_key";class ci{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ko(e,t){return e.transaction([To],t?"readwrite":"readonly").objectStore(To)}function lA(){const e=indexedDB.deleteDatabase(Rp);return new ci(e).toPromise()}function qa(){const e=indexedDB.open(Rp,aA);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(To,{keyPath:Pp})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(To)?t(r):(r.close(),await lA(),t(await qa()))})})}async function Wc(e,t,n){const r=Ko(e,!0).put({[Pp]:t,value:n});return new ci(r).toPromise()}async function uA(e,t){const n=Ko(e,!1).get(t),r=await new ci(n).toPromise();return r===void 0?null:r.value}function Qc(e,t){const n=Ko(e,!0).delete(t);return new ci(n).toPromise()}const cA=800,dA=3;class Np{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qa(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>dA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Go._getInstance(sA()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await iA(),!this.activeServiceWorker)return;this.sender=new nA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||oA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await qa();return await Wc(t,Co,"1"),await Qc(t,Co),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>uA(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Ko(i,!1).getAll();return new ci(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Np.type="LOCAL";const fA=Np;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function pA(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Xe("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",hA().appendChild(r)})}function mA(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new ii(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(e,t){return t?ot(t):(P(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu extends ou{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return zn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return zn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return zn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function vA(e){return Ep(e.auth,new lu(e),e.bypassAuthState)}function yA(e){const{auth:t,user:n}=e;return P(n,t,"internal-error"),Ww(n,new lu(e),e.bypassAuthState)}async function wA(e){const{auth:t,user:n}=e;return P(n,t,"internal-error"),Hw(n,new lu(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return vA;case"linkViaPopup":case"linkViaRedirect":return wA;case"reauthViaPopup":case"reauthViaRedirect":return yA;default:Ve(this.auth,"internal-error")}}resolve(t){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=new ii(2e3,1e4);class On extends Op{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,On.currentPopupAction&&On.currentPopupAction.cancel(),On.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return P(t,this.auth,"internal-error"),t}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const t=au();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,On.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,AA.get())};t()}}On.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A="pendingRedirect",Gi=new Map;class EA extends Op{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Gi.get(this.auth._key());if(!t){try{const r=await SA(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Gi.set(this.auth._key(),t)}return this.bypassAuthState||Gi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SA(e,t){const n=CA(t),r=kA(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function IA(e,t){Gi.set(e._key(),t)}function kA(e){return ot(e._redirectPersistence)}function CA(e){return qi(_A,e.config.apiKey,e.name)}async function TA(e,t,n=!1){const r=li(e),i=gA(r,t),s=await new EA(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=10*60*1e3;class PA{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!NA(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Dp(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xe(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=RA&&this.cachedEventUids.clear(),this.cachedEventUids.has(qc(t))}saveEventToCache(t){this.cachedEventUids.add(qc(t)),this.lastProcessedEventTime=Date.now()}}function qc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Dp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function NA(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dp(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OA(e,t={}){return si(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xA=/^https?/;async function LA(e){if(e.config.emulator)return;const{authorizedDomains:t}=await OA(e);for(const n of t)try{if(MA(n))return}catch{}Ve(e,"unauthorized-domain")}function MA(e){const t=Qa(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!xA.test(n))return!1;if(DA.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=new ii(3e4,6e4);function Gc(){const e=Ye().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function BA(e){return new Promise((t,n)=>{var r,i,o;function s(){Gc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Gc(),n(Xe(e,"network-request-failed"))},timeout:UA.get()})}if(!((i=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Ye().gapi)===null||o===void 0)&&o.load)s();else{const a=mA("iframefcb");return Ye()[a]=()=>{gapi.load?s():n(Xe(e,"network-request-failed"))},pA(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Ki=null,t})}let Ki=null;function FA(e){return Ki=Ki||BA(e),Ki}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=new ii(5e3,15e3),bA="__/auth/iframe",jA="emulator/auth/iframe",$A={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HA(e){const t=e.config;P(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?nu(t,jA):`https://${e.config.authDomain}/${bA}`,r={apiKey:t.apiKey,appName:e.name,v:Ho},i=VA.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${ri(r).slice(1)}`}async function WA(e){const t=await FA(e),n=Ye().gapi;return P(n,e,"internal-error"),t.open({where:document.body,url:HA(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$A,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Xe(e,"network-request-failed"),a=Ye().setTimeout(()=>{o(s)},zA.get());function l(){Ye().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qA=500,GA=600,KA="_blank",XA="http://localhost";class Kc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YA(e,t,n,r=qA,i=GA){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},QA),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ce().toLowerCase();n&&(a=fp(u)?KA:n),dp(u)&&(t=t||XA,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[g,y])=>`${h}${g}=${y},`,"");if(Rw(u)&&a!=="_self")return JA(t||"",a),new Kc(null);const m=window.open(t||"",a,d);P(m,e,"popup-blocked");try{m.focus()}catch{}return new Kc(m)}function JA(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA="__/auth/handler",e_="emulator/auth/handler";function Xc(e,t,n,r,i,o){P(e.config.authDomain,e,"auth-domain-config-required"),P(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ho,eventId:i};if(t instanceof Ap){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Nv(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof ui){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${t_(e)}?${ri(a).slice(1)}`}function t_({config:e}){return e.emulator?nu(e,e_):`https://${e.authDomain}/${ZA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="webStorageSupport";class n_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cp,this._completeRedirectFn=TA,this._overrideRedirectResult=IA}async _openPopup(t,n,r,i){var o;ft((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=Xc(t,n,r,Qa(),i);return YA(t,s,au())}async _openRedirect(t,n,r,i){return await this._originValidation(t),rA(Xc(t,n,r,Qa(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(ft(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await WA(t),r=new PA(t);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(zs,{type:zs},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[zs];s!==void 0&&n(!!s),Ve(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LA(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return vp()||iu()||qo()}}const r_=n_;var Yc="@firebase/auth",Jc="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var i;t(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function s_(e){dt(new Je("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{P(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),P(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yp(e)},d=new Dw(a,l,u);return dw(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),dt(new Je("auth-internal",t=>{const n=li(t.getProvider("auth").getImmediate());return(r=>new i_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ke(Yc,Jc,o_(e)),Ke(Yc,Jc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=5*60,l_=Th("authIdTokenMaxAge")||a_;let Zc=null;const u_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>l_)return;const i=n==null?void 0:n.token;Zc!==i&&(Zc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xp(e=Dh()){const t=Xn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=cw(e,{popupRedirectResolver:r_,persistence:[fA,eA,Cp]}),r=Th("authTokenSyncURL");if(r){const o=u_(r);Xw(n,o,()=>o(n.currentUser)),Kw(n,s=>o(s))}const i=Iv("auth");return i&&xw(n,`http://${i}`),n}s_("Browser");/**
 * @remix-run/router v1.0.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ro(){return Ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ro.apply(this,arguments)}var Tt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tt||(Tt={}));const ed="popstate";function c_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Ga("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Xr(i)}return h_(t,n,null,e)}function d_(){return Math.random().toString(36).substr(2,8)}function td(e){return{usr:e.state,key:e.key}}function Ga(e,t,n,r){return n===void 0&&(n=null),Ro({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jn(t):t,{state:n,key:t&&t.key||r||d_()})}function Xr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Jn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function f_(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof e=="string"?e:Xr(e);return new URL(n,t)}function h_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Tt.Pop,l=null;function u(){a=Tt.Pop,l&&l({action:a,location:h.location})}function d(g,y){a=Tt.Push;let v=Ga(h.location,g,y);n&&n(v,g);let O=td(v),f=h.createHref(v);try{s.pushState(O,"",f)}catch{i.location.assign(f)}o&&l&&l({action:a,location:h.location})}function m(g,y){a=Tt.Replace;let v=Ga(h.location,g,y);n&&n(v,g);let O=td(v),f=h.createHref(v);s.replaceState(O,"",f),o&&l&&l({action:a,location:h.location})}let h={get action(){return a},get location(){return e(i,s)},listen(g){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ed,u),l=g,()=>{i.removeEventListener(ed,u),l=null}},createHref(g){return t(i,g)},encodeLocation(g){let y=f_(typeof g=="string"?g:Xr(g));return{pathname:y.pathname,search:y.search,hash:y.hash}},push:d,replace:m,go(g){return s.go(g)}};return h}var nd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(nd||(nd={}));function p_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Jn(t):t,i=Mp(r.pathname||"/",n);if(i==null)return null;let o=Lp(e);m_(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=I_(o[a],T_(i));return s}function Lp(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let s={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(ne(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let a=Ft([r,s.relativePath]),l=n.concat(s);i.children&&i.children.length>0&&(ne(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),Lp(i.children,t,l,a)),!(i.path==null&&!i.index)&&t.push({path:a,score:E_(a,i.index),routesMeta:l})}),t}function m_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:S_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const g_=/^:\w+$/,v_=3,y_=2,w_=1,A_=10,__=-2,rd=e=>e==="*";function E_(e,t){let n=e.split("/"),r=n.length;return n.some(rd)&&(r+=__),t&&(r+=y_),n.filter(i=>!rd(i)).reduce((i,o)=>i+(g_.test(o)?v_:o===""?w_:A_),r)}function S_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function I_(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=k_({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let m=a.route;o.push({params:r,pathname:Ft([i,d.pathname]),pathnameBase:O_(Ft([i,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(i=Ft([i,d.pathnameBase]))}return o}function k_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=C_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,m)=>{if(d==="*"){let h=a[m]||"";s=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[d]=R_(a[m]||"",d),u},{}),pathname:o,pathnameBase:s,pattern:e}}function C_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),uu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(s,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function T_(e){try{return decodeURI(e)}catch(t){return uu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function R_(e,t){try{return decodeURIComponent(e)}catch(n){return uu(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Mp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function uu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function P_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Jn(e):e;return{pathname:n?n.startsWith("/")?n:N_(n,t):t,search:D_(r),hash:x_(i)}}function N_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Up(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Bp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Jn(e):(i=Ro({},e),ne(!i.pathname||!i.pathname.includes("?"),bs("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),bs("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),bs("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let m=t.length-1;if(s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),m-=1;i.pathname=h.join("/")}a=m>=0?t[m]:"/"}let l=P_(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Ft=e=>e.join("/").replace(/\/\/+/g,"/"),O_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),D_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,x_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class L_{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function M_(e){return e instanceof L_}const U_=["post","put","patch","delete"];[...U_];var Xo={exports:{}},Yo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_=R.exports,F_=Symbol.for("react.element"),z_=Symbol.for("react.fragment"),b_=Object.prototype.hasOwnProperty,j_=B_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$_={key:!0,ref:!0,__self:!0,__source:!0};function Fp(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)b_.call(t,r)&&!$_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:F_,type:e,key:o,ref:s,props:i,_owner:j_.current}}Yo.Fragment=z_;Yo.jsx=Fp;Yo.jsxs=Fp;(function(e){e.exports=Yo})(Xo);const V_=Xo.exports.Fragment,_=Xo.exports.jsx,F=Xo.exports.jsxs;/**
 * React Router v6.4.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ka(){return Ka=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ka.apply(this,arguments)}function H_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const W_=typeof Object.is=="function"?Object.is:H_,{useState:Q_,useEffect:q_,useLayoutEffect:G_,useDebugValue:K_}=Qs;function X_(e,t,n){const r=t(),[{inst:i},o]=Q_({inst:{value:r,getSnapshot:t}});return G_(()=>{i.value=r,i.getSnapshot=t,js(i)&&o({inst:i})},[e,r,t]),q_(()=>(js(i)&&o({inst:i}),e(()=>{js(i)&&o({inst:i})})),[e]),K_(r),r}function js(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!W_(n,r)}catch{return!0}}function Y_(e,t,n){return t()}const J_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Z_=!J_,e1=Z_?Y_:X_;"useSyncExternalStore"in Qs&&(e=>e.useSyncExternalStore)(Qs);const t1=R.exports.createContext(null),n1=R.exports.createContext(null),zp=R.exports.createContext(null),Jo=R.exports.createContext(null),Zo=R.exports.createContext(null),Zn=R.exports.createContext({outlet:null,matches:[]}),bp=R.exports.createContext(null);function r1(e,t){let{relative:n}=t===void 0?{}:t;di()||ne(!1);let{basename:r,navigator:i}=R.exports.useContext(Jo),{hash:o,pathname:s,search:a}=jp(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Ft([r,s])),i.createHref({pathname:l,search:a,hash:o})}function di(){return R.exports.useContext(Zo)!=null}function es(){return di()||ne(!1),R.exports.useContext(Zo).location}function fi(){di()||ne(!1);let{basename:e,navigator:t}=R.exports.useContext(Jo),{matches:n}=R.exports.useContext(Zn),{pathname:r}=es(),i=JSON.stringify(Up(n).map(a=>a.pathnameBase)),o=R.exports.useRef(!1);return R.exports.useEffect(()=>{o.current=!0}),R.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=Bp(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Ft([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function i1(){let{matches:e}=R.exports.useContext(Zn),t=e[e.length-1];return t?t.params:{}}function jp(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=R.exports.useContext(Zn),{pathname:i}=es(),o=JSON.stringify(Up(r).map(s=>s.pathnameBase));return R.exports.useMemo(()=>Bp(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function o1(e,t){di()||ne(!1);let{navigator:n}=R.exports.useContext(Jo),r=R.exports.useContext(zp),{matches:i}=R.exports.useContext(Zn),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=es(),u;if(t){var d;let v=typeof t=="string"?Jn(t):t;a==="/"||((d=v.pathname)==null?void 0:d.startsWith(a))||ne(!1),u=v}else u=l;let m=u.pathname||"/",h=a==="/"?m:m.slice(a.length)||"/",g=p_(e,{pathname:h}),y=u1(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:Ft([a,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Ft([a,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return t&&y?_(Zo.Provider,{value:{location:Ka({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Tt.Pop},children:y}):y}function s1(){let e=d1(),t=M_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r};return F(V_,{children:[_("h2",{children:"Unhandled Thrown Error!"}),_("h3",{style:{fontStyle:"italic"},children:t}),n?_("pre",{style:i,children:n}):null,_("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),F("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",_("code",{style:o,children:"errorElement"})," props on\xA0",_("code",{style:o,children:"<Route>"})]})]})}class a1 extends R.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?_(bp.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function l1(e){let{routeContext:t,match:n,children:r}=e,i=R.exports.useContext(t1);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),_(Zn.Provider,{value:t,children:r})}function u1(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||ne(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=n?s.route.errorElement||_(s1,{}):null,d=()=>_(l1,{match:s,routeContext:{outlet:o,matches:t.concat(r.slice(0,a+1))},children:l?u:s.route.element!==void 0?s.route.element:o});return n&&(s.route.errorElement||a===0)?_(a1,{location:n.location,component:u,error:l,children:d()}):d()},null)}var id;(function(e){e.UseRevalidator="useRevalidator"})(id||(id={}));var Xa;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Xa||(Xa={}));function c1(e){let t=R.exports.useContext(zp);return t||ne(!1),t}function d1(){var e;let t=R.exports.useContext(bp),n=c1(Xa.UseRouteError),r=R.exports.useContext(Zn),i=r.matches[r.matches.length-1];return t||(r||ne(!1),i.route.id||ne(!1),(e=n.errors)==null?void 0:e[i.route.id])}function gr(e){ne(!1)}function f1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Tt.Pop,navigator:o,static:s=!1}=e;di()&&ne(!1);let a=t.replace(/^\/*/,"/"),l=R.exports.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=Jn(r));let{pathname:u="/",search:d="",hash:m="",state:h=null,key:g="default"}=r,y=R.exports.useMemo(()=>{let v=Mp(u,a);return v==null?null:{pathname:v,search:d,hash:m,state:h,key:g}},[a,u,d,m,h,g]);return y==null?null:_(Jo.Provider,{value:l,children:_(Zo.Provider,{children:n,value:{location:y,navigationType:i}})})}function h1(e){let{children:t,location:n}=e,r=R.exports.useContext(n1),i=r&&!t?r.router.routes:Ya(t);return o1(i,n)}var od;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(od||(od={}));new Promise(()=>{});function Ya(e,t){t===void 0&&(t=[]);let n=[];return R.exports.Children.forEach(e,(r,i)=>{if(!R.exports.isValidElement(r))return;if(r.type===R.exports.Fragment){n.push.apply(n,Ya(r.props.children,t));return}r.type!==gr&&ne(!1),!r.props.index||!r.props.children||ne(!1);let o=[...t,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=Ya(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.4.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function p1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function m1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function g1(e,t){return e.button===0&&(!t||t==="_self")&&!m1(e)}const v1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function y1(e){let{basename:t,children:n,window:r}=e,i=R.exports.useRef();i.current==null&&(i.current=c_({window:r,v5Compat:!0}));let o=i.current,[s,a]=R.exports.useState({action:o.action,location:o.location});return R.exports.useLayoutEffect(()=>o.listen(a),[o]),_(f1,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}const $p=R.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d}=t,m=p1(t,v1),h=r1(u,{relative:i}),g=w1(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:i});function y(v){r&&r(v),v.defaultPrevented||g(v)}return _("a",{...m,href:h,onClick:o?r:y,ref:n,target:l})});var sd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(sd||(sd={}));var ad;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ad||(ad={}));function w1(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=fi(),l=es(),u=jp(e,{relative:s});return R.exports.useCallback(d=>{if(g1(d,n)){d.preventDefault();let m=r!==void 0?r:Xr(l)===Xr(u);a(e,{replace:m,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,e,o,s])}const A1=()=>{let e=fi();const[t,n]=R.exports.useState({fname:"",lname:"",email:"",password:""}),r=o=>{const{name:s,value:a}=o.target;n(l=>({...l,[s]:a}))};return F("div",{className:"enabler__forms",children:[F("form",{className:"input-form",onSubmit:o=>{o.preventDefault();const s=xp(Zl);qw(s,t.email,t.password).then(a=>{console.log(a),e("/login")}),n({fname:"",lname:"",email:"",password:""})},children:[F("div",{className:"enabler__form-group",children:[_("label",{htmlFor:"fname",children:"First Name"}),_("input",{required:!0,onChange:r,value:t.fname,name:"fname",id:"fname",type:"text",placeholder:"First Name"})]}),F("div",{className:"enabler__form-group",children:[_("label",{htmlFor:"lname",children:"Last Name"}),_("input",{required:!0,onChange:r,value:t.lname,name:"lname",id:"lname",type:"text",placeholder:"Last Name"})]}),F("div",{className:"enabler__form-group",children:[_("label",{htmlFor:"email",children:"Email"}),_("input",{required:!0,onChange:r,value:t.email,name:"email",id:"email",type:"email",placeholder:"Your Email"})]}),F("div",{className:"enabler__form-group",children:[_("label",{htmlFor:"password",children:"Password"}),_("input",{required:!0,onChange:r,value:t.password,name:"password",id:"password",type:"password",placeholder:"Password"})]}),_("button",{type:"submit",children:"Signup"})]}),F("div",{className:"enabler__more",children:[_("p",{children:"Already have an account? "}),_("a",{href:"/login",children:"Login"})]})]})};const _1=()=>{const e=fi(),[t,n]=R.exports.useState({email:"",password:""}),r=o=>{const{name:s,value:a}=o.target;n(l=>({...l,[s]:a}))};return F("div",{className:"enabler__forms",children:[F("form",{className:"input-form",onSubmit:o=>{o.preventDefault();const s=xp(Zl);Gw(s,t.email,t.password).then(a=>{e("/"),sessionStorage.setItem("Auth Token",a._tokenResponse.refreshToken),sessionStorage.setItem("Email",a.user.email)}),n({email:"",password:""})},children:[F("div",{className:"enabler__form-group",children:[_("label",{htmlFor:"email",children:"Email"}),_("input",{onChange:r,required:!0,name:"email",value:t.email,id:"email",type:"email",placeholder:"Email"})]}),F("div",{className:"enabler__form-group",children:[_("label",{htmlFor:"password",children:"Password"}),_("input",{onChange:r,required:!0,name:"password",value:t.password,id:"password",type:"password",placeholder:"Password"})]}),_("button",{type:"submit",children:"Login"})]}),F("div",{className:"enabler__more",children:[_("p",{children:"Don't have an account? "}),_("a",{href:"/signup",children:"Register"})]})]})};const E1=({image:e,name:t})=>F($p,{to:`/quizzes/${t.toLowerCase()}`,className:"enabler__quiz-card",children:[_("img",{src:e,alt:t}),_("div",{className:"enabler__category",children:_("h3",{children:t})})]});const S1="/assets/animals.8963d564.png",I1="/assets/shapes.5c134de4.png",k1="/assets/numbers.fb5e9f19.png",C1="/assets/sounds.7d092a15.png",T1="/assets/fruits.9a80722d.png",R1="/assets/bodyParts.df365058.png",P1="/assets/alphabets.ef362c31.png",N1="/assets/color.3be62e14.png",Vp="/assets/enabler-logo.a3391a26.png",O1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAvElEQVRIx+3TTQqBYRTF8R+WwURhMzJVJtZiZAU2oZcVsACrMDQQhRkDrwEKvV/xlJRTZ3S7/3O7z3346xdUQ4TDzVM0Q8K3iF+8RTVEQJQAv3scIuCQEbArAijn1ONPJ8wLmGfUZiFW1MJG8iM3QgRwvZYx9jdHIeG/qwraGGGBNU44YpLSMygK72Ap/f67KX1xkZA+zhnwGPUHYJKfQl7/wRClnCFW7+49a6pH1z5ZUZGAXkpvLvyv7+gCUF9YMQiHCF0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMTItMDVUMTg6NDY6MTkrMDA6MDBqvztAAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTEyLTA1VDE4OjQ2OjE5KzAwOjAwG+KD/AAAAABJRU5ErkJggg==",D1="/assets/circle.3a43dfe1.png",x1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYcAAAEDCAYAAADeP8iwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAvDSURBVHgB7d1PbuvGHQfwGcrPyTLXKJoCuUHTkzTbIKsi6DrJusiqCLpsepP0Bi2a3qPb5FmakhQpU/yRsiRTlp/8+TzoeUhRNC3Z89X8IZVT5y//+evnq9Xqm5TKZynlTxIAb8lPZVP+8fWnX/3YLOTmv+//+7dvci7fJgDetFLKt1//9qvv8vc///BFrvLfEwDU1uv1H6pcVX9MANBphhiquhHxeQKAXimfVQkAhnL+RDgAEAgHAALhAEAgHAAIhAMAgXAAIBAOAATCAYBAOAAQCAcAAuEAQCAcAAiEAwCBcAAgEA4ABMIBgEA4ABAIBwAC4QBAIBwACIQDAIFwACAQDgAEwgGAQDgAEAgHAALhAEAgHAAIhAMAgXAAIBAOAATCAYBAOAAQCAcAAuEAQCAcAAiEAwCBcAAgEA4ABMIBgEA4ABAIBwAC4QBAIBwACIQDAIFwACAQDgAEwgGAQDgAEAgHAALhAEAgHAAIhAMAgXAAIBAOAATCAYBAOAAQCAcAAuEAQCAcAAiEAwCBcAAgEA4ABMIBgEA4ABAIBwAC4QBAIBwACIQDAIFwACAQDgAEwgGAQDgAEAgHAALhAEAgHAAIhAMAgXAAIBAOAATCAYBAOAAQCAcAAuEAQCAcAAiEAwCBcAAgEA4ABMIBgEA4ABAIBwAC4QBAIBwACIQDAIFwACAQDgAEwgGAQDgAEAgHAALhAEAgHAAIhAMAwV0CFrHJ+8u51Le5jbv7Sl5gX3ABwgGeqYy+7uS0C4Hxxnm4nM/cF1yQbiVYwFQLoIzXd5V7v2pXLmfsCy5MOMCCmkp8M1OJ59Ftb305bV9wacIBgEA4wMK82ecWGJCGBfVjCCEgyvz2ZW4/abq7CV6ClgMAgXCAC1qqi0lXFS9NtxIsZNxF1J+49lTX0N45D92yk+C4NuEAS+lPRJgaSCjbZvq4gt8MF0bnROyvM/jAy9KtBAvIwzOfJ86KnnvXn6eWy+gEObnAFWg5wDP1FfzwzX6euP+Yxz61PbwULQdSKeWkG9Oqqko5N7dV/aRWu1upu5uaW79clVXKm7q8zmlVvUulHmB4/36d3r37qN3u118f0t3qPm3qPqeHh/X2Ofe088K0HGAR4/ZCpwvTvW6iupDzdtuyKamqy3erVVrXQZDrf3d3d2m93pZXTdBIBq5AywEWMwqHQStraiyiaWk02zThcH/3rg6Hh9RkRh8OfWjM7h8uSDjAQnLTCmhmJc0MQOdBi6H52oTDpu47ar6+e/du21rIw3LdcqjDwR8p1+D3DhZWhl1Jpf8jy7PbNV+akFg1HUn1wma9aVsNu23KTJcVXJBwgAVNDdjn9t+21P7fVfxtN1Ou2kLfgmjWlb68259g4OUJB1jIY0VetTOQSjM7KT3e+plMVd1GqJpZTOtSdxs14wsp/fLL+3R//3Gqe6bacjNbaf1Q2plLcA1mK8FCymgAeuoDfdqvuTu3rd5+1a4vdVBsdi2KphXRlLeD2FoOXIeWA1zA8WdE5/2ZqmXQ7QRXpOUALyZvWwRd5b83W6nan6HUtx5WlfMcuA4th1tXLlB+KeXK5bOel3ZEuetiKrsNtt1JZfu50PX/7QSkVZUeykP7V9hMX314+LXtcrq/b8Yb3rfh0Jzz0D9+kWMcl+duU9vzpgiHGze8eFse/OEPK5sny+U6vd55UFk9eexl5nifVW7mmJau66eE71na+/bLzfhBTv0U1e3BlO6gNu1t+6+012PtLkfSfcNNHSrND7q9TMkm5eEPOnOMs6/dka91LoOxkDQaK7nS687roFvpBuUy+JPe9BVU2l26IeXHyZW7iq1dzM2cmjS8gFzZbZR2FdmpbybHfejj6Z7D5WpQHTXHVYYH0h17lavdz9NM+9z/ZilN/ABnldvzDeoun6Zrp5k1lJvy3ard7GH9UN/W6eP7j9L7+l3+pv4ZmrOch7V2Hw5dDGxfi+a1yZu0HW2o35tVm3o/79v95VVO6826GZGuu5bq12HzkNpoarYvg+fgiGNvnrvwWqe0/9kSm8drZeXx28QyU+7305+H0X/viYf3v4bVqb8wvArC4RaVJ9Z1lUwebzpcP3h3Wab2cYm3lFOV0OBY2uWJY8+jfeSFyuOum9munXF54s4y3tnejsvMk1yePsY08XrtdpG7XC9pN0Vq99guFPK2VZTL3kN2++LtEg43aPhH3b/D3qtc8v62ZWb9/k4m9rukQdfGYNX+9y37G4RwGz1+kXI5Yn2ZqkhjupRDD8rzqXPWsY9nPDUBsDv5bvSsta2L8nhXjvtb/PXm1RMOnCWfUFuEirM8scxFuNw6pzAgzenK8eXZrpjxupKEBLwiWg6cpu++HnQDbQ6Vc1y/Ltt3Jf0EoO3VhVjScBLA4wX+yt59exMFtCoY0XLgLPnYW9lfPvRYlnNohti4e8kJ2UzRcuAkTT2ye0fRVfxVni/3ATFcn9LjmEUejHaOJ9SwjLmPd3WZDg7RcuBou3f43fhAX/EfLJcD69NEObGUYyr/7TaedSLhwNEOdhmV+a6k4fqUjnsMz3NKq8DzzRTdSpxleNbrk+U8vb4PBV1JL2M8IA2HCIcbVNJ+jdtUBuOKIQ5KTq+PTq9Yjppff8Rux8c415f+1OOP1X8aW3O11P1PZku7q6eW7uSy4XM8dK1zC4bPzeTspME22y697jntZqINH7/72j2uvaTIapW4bcLhFk3UR4cqxmMrzXyhEePd9x/tfu64zq1wy/As4ROOa/i4YYXbB8I4OF6DvQ8eeuJ57KcTdyu3Q0qjcCjl8QIgWh5vgzEHzrIZVOTnlBtlUOa6xhV+H35zN26flgNHay+7kwfnS3XTUMsT5TJRbm95ppwu4zVVaq+3gu1evLB6+MLzFggHjvbYrdAtt2mRdpX+XDlPldMgMEblU6jwlzceP8l5+OLxVggHTjJ8Z9/XFZszytUgFIZlrid3ZySWtMwYFR824cBZygnlMlHeDJZHH9fDVT12K03NcuPtEA6cZzT2cKicJ8rj8YmzD+OESuvSs4le07GcYnzUk7O0BtsJirdBOHCSXYXefd1VcSeWh59kOizn11Nnvil59pOeeKuEA2dZug5XH70+upXeNuFwi57ZVXP091jQrsuJF3foV2W/RfHY3cTtcxLcDdqdN5D3l88u9/vN+/tdVN7f/7OOcabcp8+hbcbdXmXJ8jOO5bnHmGae015zMuJmtE37sPbTmrJprG+QlsMtyk+sywfWzZW7EcmLN0rygeWJchk0OfoT7Ppp+VPlY/Z5cnl0LHPjLeNjPGrfZ5anjiVsO3hrOH5Nd8vNZTMmXpO9EyFnGD/6sAmHW3RsOBxb7pfz9F0X91RA9IvdMc6eeDcoH7vvU8vlUDm9jmPpt8kHa/bHACgz9x/y4r8jLE443Li5WUEnl9PLO/sY8zLlxZ67D+AYJ+XrvO68DsYcAAiEAwCBcAAgEA4ABMIBgEA4ABAIBwAC4QBAIBwACIQDAIFwACAQDgAEwgGAQDgAEAgHAALhAEAgHAAIhAMAgXAAIBAOAATCAYBAOAAQCAcAAuEAQCAcAAiEAwCBcAAgEA4ABMIBgEA4ABAIBwAC4QBAIBwACIQDAIFwACAQDgAEwgGAQDgAEAgHAALhAEAgHAAIhAMAgXAAIBAOAATCAYBAOAAQCAcAAuEAQCAcAAiEAwCBcAAgEA4ABMIBgEA4ABAIBwAC4QBAIBwACIQDAIFwACAQDgAEwgGAQDgAEAgHAALhAEAgHAAIhAMAgXAAIBAOAATCAYBAOAAQCAcAAuEAQCAcAAiEAwCBcAAgEA4ABMIBgEA4ABAIBwAC4QBAIBwACIQDAIFwACAQDgAEwgGAQDgAEAgHAALhAEAgHAAIhAMAgXAAIBAOAATCAYBAOAAQCAcAAuEAQFCHQ/lfAoCBOhyqfyUA2Cn/rNbr9F0CgE7ZpB+rP//uy59KKQICgFTK+ruvP/3qx9yv+P7nH77IVf6iLv4+AfCGNGPP+d8552//9Jsvf2rW/B+Oznxd5dYHewAAAABJRU5ErkJggg==",L1="/assets/triangle.f06a9930.png",M1="/assets/star.419e79cd.png",U1="/assets/pigeon.3aa9ff39.png",B1="/assets/cat.ce70a61b.png",F1="/assets/puppy.25179162.png",z1="/assets/squirrel.83a002c0.png",b1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAQUlEQVRIx+3OywkAIAwE0RGL9iiW5sG6tAHxQ+JF9kGuOwER+V8C+ubyy4h5fBVxG59FjsfjRaABAahA8f5eRAwGGIcZ0KxzDCAAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMTItMDdUMjA6Mjc6NDErMDA6MDC3BQnrAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTEyLTA3VDIwOjI3OjQxKzAwOjAwxlixVwAAAABJRU5ErkJggg==",j1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAANElEQVRIx2NgGAWjYBSMPNDAwMDQQUvD/0Mx1S1BNpzqlmAznGqW4DOcZsE1CkbBKCARAACiDxkVUqtxfgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0xMi0wN1QyMDo1MDowNyswMDowMJt4PNEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMTItMDdUMjA6NTA6MDcrMDA6MDDqJYRtAAAAAElFTkSuQmCC",$1="/assets/number1.0bc5069b.png",V1="/assets/number2.7f6d9e1a.png",H1="/assets/number3.0bc5de31.png",W1="/assets/number4.a45aac89.png",Q1="/assets/pink.c1289054.png",q1="/assets/green.636abad6.png",G1="/assets/orange.cd3944a7.png",K1="/assets/hands.21560ac0.png",X1="/assets/kneel.2009c3d4.png",Y1="/assets/feet.d1fa5c71.png",J1="/assets/arm.e9e8e0f5.png",Z1=()=>{const e=sessionStorage.getItem("Auth Token"),t=fi();return F("div",{className:"enabler__nav",children:[_("img",{src:Vp,alt:"Enabler logo"}),e?_("button",{className:"logout",onClick:()=>{sessionStorage.removeItem("Auth Token"),t("/")},children:"Logout"}):F("div",{className:"enabler__login-signup",children:[_("a",{className:"btn btn--login",href:"/login",children:"Login"}),_("a",{className:"btn btn--signup",href:"/signup",children:"Signup"})]})]})};const eE=({handleClick:e,image:t,id:n})=>_("div",{className:"enabler__qn-card",onClick:r=>{e(r)},children:_("img",{id:n,src:t})}),Hp=[{image:S1,name:"Animals"},{image:I1,name:"Shapes"},{image:k1,name:"Numbers"},{image:C1,name:"Sounds"},{image:T1,name:"Fruits"},{image:R1,name:"bodyParts"},{image:P1,name:"Alphabets"},{image:N1,name:"Colors"}];function tE(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var hn={exports:{}};const nE={},rE=Object.freeze(Object.defineProperty({__proto__:null,default:nE},Symbol.toStringTag,{value:"Module"})),iE=Xp(rE);var Wp=typeof process<"u"&&process.pid?process.pid.toString(36):"",Qp="";if(typeof __webpack_require__!="function"&&typeof tE<"u"){var $s="",ld=iE;if(ld.networkInterfaces)var Vs=ld.networkInterfaces();if(Vs){e:for(let e in Vs){const t=Vs[e],n=t.length;for(var yn=0;yn<n;yn++)if(t[yn]!==void 0&&t[yn].mac&&t[yn].mac!="00:00:00:00:00:00"){$s=t[yn].mac;break e}}Qp=$s?parseInt($s.replace(/\:|\D+/gi,"")).toString(36):""}}hn.exports=hn.exports.default=function(e,t){return(e||"")+Qp+Wp+Yr().toString(36)+(t||"")};hn.exports.process=function(e,t){return(e||"")+Wp+Yr().toString(36)+(t||"")};hn.exports.time=function(e,t){return(e||"")+Yr().toString(36)+(t||"")};function Yr(){var e=Date.now(),t=Yr.last||e;return Yr.last=e>t?e:t+1}const oE=({category:e,handleRestart:t})=>{const[n,r]=R.exports.useState(!1),i=()=>{r(s=>!s)},o=()=>{t(),r(!1)};return F("div",{className:"enabler__sidebar",children:[_("h2",{children:e.toUpperCase()}),F("div",{className:"enabler__show-more",onClick:i,children:[_("h4",{children:"More Games"}),_("img",{src:n?j1:b1,alt:""})]}),_("div",{className:"enabler__more-games_container",children:n?_("div",{className:"enabler__more-games",children:Hp.map(s=>_($p,{onClick:o,to:`/quizzes/${s.name.toLowerCase()}`,children:s.name},hn.exports()))}):null}),_("div",{className:"enabler__restart",children:_("button",{onClick:t,children:"Restart Game"})})]})};const sE=()=>F("div",{className:"enabler__landing",children:[_(Z1,{}),_("div",{className:"enabler__category-cards",children:Hp.map(e=>_(E1,{image:e.image,name:e.name},hn.exports()))})]});const Te="Choose the image with",xi="Select the picture with",Hs="Select the object with color",aE={shapes:{qns:[{qn:`${Te} Rectangle`,ans:"rectangle"},{qn:`${Te} Circle`,ans:"circle"},{qn:`${Te} Star`,ans:"star"},{qn:`${Te} Triangle`,ans:"triangle"}],images:[{image:D1,label:"circle"},{image:x1,label:"rectangle"},{image:L1,label:"triangle"},{image:M1,label:"star"}]},animals:{qns:[{qn:`${xi} Cat`,ans:"cat"},{qn:`${xi} Dog`,ans:"dog"},{qn:`${xi} Squirrel`,ans:"squirrel"},{qn:`${xi} Bird`,ans:"bird"}],images:[{image:B1,label:"cat"},{image:F1,label:"dog"},{image:U1,label:"bird"},{image:z1,label:"squirrel"}]},numbers:{qns:[{qn:`${Te} number one`,ans:"one"},{qn:`${Te} number two`,ans:"two"},{qn:`${Te} number three`,ans:"three"},{qn:`${Te} number four`,ans:"four"}],images:[{image:$1,label:"one"},{image:V1,label:"two"},{image:H1,label:"three"},{image:W1,label:"four"}]},colors:{qns:[{qn:`${Hs} green`,ans:"green"},{qn:`${Hs} pink`,ans:"pink"},{qn:`${Hs} orange`,ans:"orange"}],images:[{image:Q1,label:"pink"},{image:q1,label:"green"},{image:G1,label:"orange"}]},bodyparts:{qns:[{qn:`${Te} arm`,ans:"arm"},{qn:`${Te} knees`,ans:"knees"},{qn:`${Te} feet`,ans:"feet"},{qn:`${Te} hands`,ans:"hands"}],images:[{image:J1,label:"arm"},{image:X1,label:"knees"},{image:Y1,label:"feet"},{image:K1,label:"hands"}]}};function Ws(e){if(e){const t=Math.floor(Math.random()*e.length);return e[t]}}const lE=e=>{for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}return e},uE=()=>{const{category:e}=i1(),{qns:t,images:n}=aE[e],[r,i]=R.exports.useState(t),[o,s]=R.exports.useState(Ws(r)),[a,l]=R.exports.useState([]),[u,d]=R.exports.useState(!1),m=fi(),h=sessionStorage.getItem("Email");R.exports.useEffect(()=>{const v=sessionStorage.getItem("Auth Token");v&&m(`/quizzes/${e}`),v||m("/login")},[]);const g=v=>{l(O=>r.length!==0?v.target.id===o.ans?[...O,"\u2705"]:[...O,"\u274C"]:O),i(O=>r.length!==0?O.filter(f=>f!==o):[])};return R.exports.useEffect(()=>{r.length!==0?s(Ws(r)):s(null),lE(n)},[r]),R.exports.useEffect(()=>{i(t),l([]),s(Ws(r))},[u]),F("div",{className:"enabler__question",children:[F("div",{className:"enabler__question-header",children:[_("a",{href:"/",children:_("img",{src:Vp,alt:"Enabler logo"})}),F("div",{className:"enabler__username",children:[_("img",{src:O1,alt:"Account"}),_("h4",{children:h})]})]}),F("div",{className:"enabler__question-main",children:[_(oE,{category:e,handleRestart:()=>{d(v=>!v)}}),F("div",{className:"enabler__question-game",children:[_("div",{className:"enabler__question-top",children:o?_("h3",{children:o.qn}):_("h4",{children:"Finished! \u{1F44D}"})}),_("div",{className:"enabler__qn-score",children:a.map(v=>_("span",{children:v},hn.exports()))}),_("div",{className:"enabler__answer-option",children:n.map(v=>_(eE,{handleClick:g,id:v.label,image:v.image},v.label))})]})]})]})};function cE(){return _("div",{className:"game",children:F(h1,{children:[_(gr,{path:"/",element:_(sE,{})}),_(gr,{path:"/login",element:_(_1,{})}),_(gr,{path:"/signup",element:_(A1,{})}),_(gr,{path:"/quizzes/:category",element:_(uE,{})})]})})}qs.createRoot(document.getElementById("root")).render(_(gd.StrictMode,{children:_(y1,{basename:"/",children:_(cE,{})})}));
