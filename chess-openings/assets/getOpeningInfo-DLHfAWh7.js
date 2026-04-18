import{Y as _p,Z as yp,P as pt,d as Wc,$ as vp,l as Nu,C as Jr,a0 as uo,x as at,_ as _e,a1 as ho,a2 as $o,a3 as Wo,N as yr,f as ls,a4 as wp,g as Hc,B as Ct,a5 as Ep,a6 as Tp,a7 as Ip}from"./index-Lx2KTizY.js";import{L as Mu,s as Ap}from"./copyToClipboard-D4z6cNCF.js";var ku={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(n,e){(function(t,s){n.exports=s()})(_p,function(){var t={};t.version="0.2.0";var s=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};t.configure=function(w){var P,R;for(P in w)R=w[P],R!==void 0&&w.hasOwnProperty(P)&&(s[P]=R);return this},t.status=null,t.set=function(w){var P=t.isStarted();w=r(w,s.minimum,1),t.status=w===1?null:w;var R=t.render(!P),B=R.querySelector(s.barSelector),F=s.speed,V=s.easing;return R.offsetWidth,c(function(L){s.positionUsing===""&&(s.positionUsing=t.getPositioningCSS()),u(B,a(w,F,V)),w===1?(u(R,{transition:"none",opacity:1}),R.offsetWidth,setTimeout(function(){u(R,{transition:"all "+F+"ms linear",opacity:0}),setTimeout(function(){t.remove(),L()},F)},F)):setTimeout(L,F)}),this},t.isStarted=function(){return typeof t.status=="number"},t.start=function(){t.status||t.set(0);var w=function(){setTimeout(function(){t.status&&(t.trickle(),w())},s.trickleSpeed)};return s.trickle&&w(),this},t.done=function(w){return!w&&!t.status?this:t.inc(.3+.5*Math.random()).set(1)},t.inc=function(w){var P=t.status;return P?(typeof w!="number"&&(w=(1-P)*r(Math.random()*P,.1,.95)),P=r(P+w,0,.994),t.set(P)):t.start()},t.trickle=function(){return t.inc(Math.random()*s.trickleRate)},function(){var w=0,P=0;t.promise=function(R){return!R||R.state()==="resolved"?this:(P===0&&t.start(),w++,P++,R.always(function(){P--,P===0?(w=0,t.done()):t.set((w-P)/w)}),this)}}(),t.render=function(w){if(t.isRendered())return document.getElementById("nprogress");f(document.documentElement,"nprogress-busy");var P=document.createElement("div");P.id="nprogress",P.innerHTML=s.template;var R=P.querySelector(s.barSelector),B=w?"-100":i(t.status||0),F=document.querySelector(s.parent),V;return u(R,{transition:"all 0 linear",transform:"translate3d("+B+"%,0,0)"}),s.showSpinner||(V=P.querySelector(s.spinnerSelector),V&&I(V)),F!=document.body&&f(F,"nprogress-custom-parent"),F.appendChild(P),P},t.remove=function(){g(document.documentElement,"nprogress-busy"),g(document.querySelector(s.parent),"nprogress-custom-parent");var w=document.getElementById("nprogress");w&&I(w)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var w=document.body.style,P="WebkitTransform"in w?"Webkit":"MozTransform"in w?"Moz":"msTransform"in w?"ms":"OTransform"in w?"O":"";return P+"Perspective"in w?"translate3d":P+"Transform"in w?"translate":"margin"};function r(w,P,R){return w<P?P:w>R?R:w}function i(w){return(-1+w)*100}function a(w,P,R){var B;return s.positionUsing==="translate3d"?B={transform:"translate3d("+i(w)+"%,0,0)"}:s.positionUsing==="translate"?B={transform:"translate("+i(w)+"%,0)"}:B={"margin-left":i(w)+"%"},B.transition="all "+P+"ms "+R,B}var c=function(){var w=[];function P(){var R=w.shift();R&&R(P)}return function(R){w.push(R),w.length==1&&P()}}(),u=function(){var w=["Webkit","O","Moz","ms"],P={};function R(L){return L.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(Y,U){return U.toUpperCase()})}function B(L){var Y=document.body.style;if(L in Y)return L;for(var U=w.length,E=L.charAt(0).toUpperCase()+L.slice(1),m;U--;)if(m=w[U]+E,m in Y)return m;return L}function F(L){return L=R(L),P[L]||(P[L]=B(L))}function V(L,Y,U){Y=F(Y),L.style[Y]=U}return function(L,Y){var U=arguments,E,m;if(U.length==2)for(E in Y)m=Y[E],m!==void 0&&Y.hasOwnProperty(E)&&V(L,E,m);else V(L,U[1],U[2])}}();function h(w,P){var R=typeof w=="string"?w:_(w);return R.indexOf(" "+P+" ")>=0}function f(w,P){var R=_(w),B=R+P;h(R,P)||(w.className=B.substring(1))}function g(w,P){var R=_(w),B;h(w,P)&&(B=R.replace(" "+P+" "," "),w.className=B.substring(1,B.length-1))}function _(w){return(" "+(w.className||"")+" ").replace(/\s+/gi," ")}function I(w){w&&w.parentNode&&w.parentNode.removeChild(w)}return t})})(ku);var Sp=ku.exports;const Hi=yp(Sp);class zc extends pt{constructor(e,t){const s=Wc()({enumeration:e.enumeration},t),r=Wc()({validValues:s.enumeration.values,phetioValueType:vp({enumeration:s.enumeration})},s);super(e,r)}}const bp=()=>{};var Gc={};/**
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
 */const Ou=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Rp=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],c=n[t++],u=((r&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Du={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,c=a?n[r+1]:0,u=r+2<n.length,h=u?n[r+2]:0,f=i>>2,g=(i&3)<<4|c>>4;let _=(c&15)<<2|h>>6,I=h&63;u||(I=64,a||(_=64)),s.push(t[f],t[g],t[_],t[I])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ou(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Rp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const h=r<n.length?t[n.charAt(r)]:64;++r;const g=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||c==null||h==null||g==null)throw new Cp;const _=i<<2|c>>4;if(s.push(_),h!==64){const I=c<<4&240|h>>2;if(s.push(I),g!==64){const w=h<<6&192|g;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Cp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pp=function(n){const e=Ou(n);return Du.encodeByteArray(e,!0)},Nr=function(n){return Pp(n).replace(/\./g,"")},Vu=function(n){try{return Du.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Np(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Mp=()=>Np().__FIREBASE_DEFAULTS__,kp=()=>{if(typeof process>"u"||typeof Gc>"u")return;const n=Gc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Op=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Vu(n[1]);return e&&JSON.parse(e)},Zr=()=>{try{return bp()||Mp()||kp()||Op()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xu=n=>{var e,t;return(t=(e=Zr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Dp=n=>{const e=xu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Fu=()=>{var n;return(n=Zr())===null||n===void 0?void 0:n.config},Lu=n=>{var e;return(e=Zr())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Vp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Fn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Uu(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function xp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Nr(JSON.stringify(t)),Nr(JSON.stringify(a)),""].join(".")}const ps={};function Fp(){const n={prod:[],emulator:[]};for(const e of Object.keys(ps))ps[e]?n.emulator.push(e):n.prod.push(e);return n}function Lp(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Kc=!1;function Bu(n,e){if(typeof window>"u"||typeof document>"u"||!Fn(window.location.host)||ps[n]===e||ps[n]||Kc)return;ps[n]=e;function t(_){return`__firebase__banner__${_}`}const s="__firebase__banner",i=Fp().prod.length>0;function a(){const _=document.getElementById(s);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function u(_,I){_.setAttribute("width","24"),_.setAttribute("id",I),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Kc=!0,a()},_}function f(_,I){_.setAttribute("id",I),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function g(){const _=Lp(s),I=t("text"),w=document.getElementById(I)||document.createElement("span"),P=t("learnmore"),R=document.getElementById(P)||document.createElement("a"),B=t("preprendIcon"),F=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const V=_.element;c(V),f(R,P);const L=h();u(F,B),V.append(F,w,R,L),document.body.appendChild(V)}i?(w.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Up(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function Bp(){var n;const e=(n=Zr())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $p(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wp(){const n=Ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Hp(){return!Bp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zp(){try{return typeof indexedDB=="object"}catch{return!1}}function Gp(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Kp="FirebaseError";class It extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Kp,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Os.prototype.create)}}class Os{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Qp(i,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new It(r,c,s)}}function Qp(n,e){return n.replace(Yp,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Yp=/\{\$([^}]+)}/g;function Xp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function sn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if(Qc(i)&&Qc(a)){if(!sn(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Qc(n){return n!==null&&typeof n=="object"}/**
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
 */function Ds(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Jp(n,e){const t=new Zp(n,e);return t.subscribe.bind(t)}class Zp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");eg(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=zi),r.error===void 0&&(r.error=zi),r.complete===void 0&&(r.complete=zi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function zi(){}/**
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
 */function We(n){return n&&n._delegate?n._delegate:n}class rn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xt="[DEFAULT]";/**
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
 */class tg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Vp;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),r=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sg(e))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xt){return this.instances.has(e)}getOptions(e=Xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&a.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ng(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xt){return this.component?this.component.multipleInstances?e:Xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ng(n){return n===Xt?void 0:n}function sg(n){return n.instantiationMode==="EAGER"}/**
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
 */class rg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new tg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const ig={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},og=X.INFO,ag={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},cg=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=ag[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ho{constructor(e){this.name=e,this._logLevel=og,this._logHandler=cg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ig[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const lg=(n,e)=>e.some(t=>n instanceof t);let Yc,Xc;function ug(){return Yc||(Yc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hg(){return Xc||(Xc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ju=new WeakMap,fo=new WeakMap,qu=new WeakMap,Gi=new WeakMap,zo=new WeakMap;function dg(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Dt(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ju.set(t,n)}).catch(()=>{}),zo.set(e,n),e}function fg(n){if(fo.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});fo.set(n,e)}let po={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return fo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||qu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Dt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function pg(n){po=n(po)}function gg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Ki(this),e,...t);return qu.set(s,e.sort?e.sort():[e]),Dt(s)}:hg().includes(n)?function(...e){return n.apply(Ki(this),e),Dt(ju.get(this))}:function(...e){return Dt(n.apply(Ki(this),e))}}function mg(n){return typeof n=="function"?gg(n):(n instanceof IDBTransaction&&fg(n),lg(n,ug())?new Proxy(n,po):n)}function Dt(n){if(n instanceof IDBRequest)return dg(n);if(Gi.has(n))return Gi.get(n);const e=mg(n);return e!==n&&(Gi.set(n,e),zo.set(e,n)),e}const Ki=n=>zo.get(n);function _g(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),c=Dt(a);return s&&a.addEventListener("upgradeneeded",u=>{s(Dt(a.result),u.oldVersion,u.newVersion,Dt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const yg=["get","getKey","getAll","getAllKeys","count"],vg=["put","add","delete","clear"],Qi=new Map;function Jc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qi.get(e))return Qi.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=vg.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||yg.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,r?"readwrite":"readonly");let h=u.store;return s&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),r&&u.done]))[0]};return Qi.set(e,i),i}pg(n=>({...n,get:(e,t,s)=>Jc(e,t)||n.get(e,t,s),has:(e,t)=>!!Jc(e,t)||n.has(e,t)}));/**
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
 */class wg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Eg(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Eg(n){const e=n.getComponent();return e?.type==="VERSION"}const go="@firebase/app",Zc="0.13.2";/**
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
 */const vt=new Ho("@firebase/app"),Tg="@firebase/app-compat",Ig="@firebase/analytics-compat",Ag="@firebase/analytics",Sg="@firebase/app-check-compat",bg="@firebase/app-check",Rg="@firebase/auth",Cg="@firebase/auth-compat",Pg="@firebase/database",Ng="@firebase/data-connect",Mg="@firebase/database-compat",kg="@firebase/functions",Og="@firebase/functions-compat",Dg="@firebase/installations",Vg="@firebase/installations-compat",xg="@firebase/messaging",Fg="@firebase/messaging-compat",Lg="@firebase/performance",Ug="@firebase/performance-compat",Bg="@firebase/remote-config",jg="@firebase/remote-config-compat",qg="@firebase/storage",$g="@firebase/storage-compat",Wg="@firebase/firestore",Hg="@firebase/ai",zg="@firebase/firestore-compat",Gg="firebase",Kg="11.10.0";/**
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
 */const mo="[DEFAULT]",Qg={[go]:"fire-core",[Tg]:"fire-core-compat",[Ag]:"fire-analytics",[Ig]:"fire-analytics-compat",[bg]:"fire-app-check",[Sg]:"fire-app-check-compat",[Rg]:"fire-auth",[Cg]:"fire-auth-compat",[Pg]:"fire-rtdb",[Ng]:"fire-data-connect",[Mg]:"fire-rtdb-compat",[kg]:"fire-fn",[Og]:"fire-fn-compat",[Dg]:"fire-iid",[Vg]:"fire-iid-compat",[xg]:"fire-fcm",[Fg]:"fire-fcm-compat",[Lg]:"fire-perf",[Ug]:"fire-perf-compat",[Bg]:"fire-rc",[jg]:"fire-rc-compat",[qg]:"fire-gcs",[$g]:"fire-gcs-compat",[Wg]:"fire-fst",[zg]:"fire-fst-compat",[Hg]:"fire-vertex","fire-js":"fire-js",[Gg]:"fire-js-all"};/**
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
 */const Mr=new Map,Yg=new Map,_o=new Map;function el(n,e){try{n.container.addComponent(e)}catch(t){vt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Pn(n){const e=n.name;if(_o.has(e))return vt.debug(`There were multiple attempts to register component ${e}.`),!1;_o.set(e,n);for(const t of Mr.values())el(t,n);for(const t of Yg.values())el(t,n);return!0}function Go(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function je(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Xg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vt=new Os("app","Firebase",Xg);/**
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
 */class Jg{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
 */const Ln=Kg;function $u(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:mo,automaticDataCollectionEnabled:!0},e),r=s.name;if(typeof r!="string"||!r)throw Vt.create("bad-app-name",{appName:String(r)});if(t||(t=Fu()),!t)throw Vt.create("no-options");const i=Mr.get(r);if(i){if(sn(t,i.options)&&sn(s,i.config))return i;throw Vt.create("duplicate-app",{appName:r})}const a=new rg(r);for(const u of _o.values())a.addComponent(u);const c=new Jg(t,s,a);return Mr.set(r,c),c}function Wu(n=mo){const e=Mr.get(n);if(!e&&n===mo&&Fu())return $u();if(!e)throw Vt.create("no-app",{appName:n});return e}function xt(n,e,t){var s;let r=(s=Qg[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vt.warn(c.join(" "));return}Pn(new rn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Zg="firebase-heartbeat-database",em=1,Es="firebase-heartbeat-store";let Yi=null;function Hu(){return Yi||(Yi=_g(Zg,em,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Es)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vt.create("idb-open",{originalErrorMessage:n.message})})),Yi}async function tm(n){try{const t=(await Hu()).transaction(Es),s=await t.objectStore(Es).get(zu(n));return await t.done,s}catch(e){if(e instanceof It)vt.warn(e.message);else{const t=Vt.create("idb-get",{originalErrorMessage:e?.message});vt.warn(t.message)}}}async function tl(n,e){try{const s=(await Hu()).transaction(Es,"readwrite");await s.objectStore(Es).put(e,zu(n)),await s.done}catch(t){if(t instanceof It)vt.warn(t.message);else{const s=Vt.create("idb-set",{originalErrorMessage:t?.message});vt.warn(s.message)}}}function zu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const nm=1024,sm=30;class rm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new om(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=nl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>sm){const a=am(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){vt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nl(),{heartbeatsToSend:s,unsentEntries:r}=im(this._heartbeatsCache.heartbeats),i=Nr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return vt.warn(t),""}}}function nl(){return new Date().toISOString().substring(0,10)}function im(n,e=nm){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),sl(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),sl(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class om{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zp()?Gp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await tm(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return tl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return tl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function sl(n){return Nr(JSON.stringify({version:2,heartbeats:n})).length}function am(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function cm(n){Pn(new rn("platform-logger",e=>new wg(e),"PRIVATE")),Pn(new rn("heartbeat",e=>new rm(e),"PRIVATE")),xt(go,Zc,n),xt(go,Zc,"esm2017"),xt("fire-js","")}cm("");var lm="firebase",um="11.10.0";/**
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
 */xt(lm,um,"app");var rl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ft,Gu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,m){function y(){}y.prototype=m.prototype,E.D=m.prototype,E.prototype=new y,E.prototype.constructor=E,E.C=function(T,A,b){for(var v=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)v[ht-2]=arguments[ht];return m.prototype[A].apply(T,v)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(E,m,y){y||(y=0);var T=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)T[A]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(A=0;16>A;++A)T[A]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=E.g[0],y=E.g[1],A=E.g[2];var b=E.g[3],v=m+(b^y&(A^b))+T[0]+3614090360&4294967295;m=y+(v<<7&4294967295|v>>>25),v=b+(A^m&(y^A))+T[1]+3905402710&4294967295,b=m+(v<<12&4294967295|v>>>20),v=A+(y^b&(m^y))+T[2]+606105819&4294967295,A=b+(v<<17&4294967295|v>>>15),v=y+(m^A&(b^m))+T[3]+3250441966&4294967295,y=A+(v<<22&4294967295|v>>>10),v=m+(b^y&(A^b))+T[4]+4118548399&4294967295,m=y+(v<<7&4294967295|v>>>25),v=b+(A^m&(y^A))+T[5]+1200080426&4294967295,b=m+(v<<12&4294967295|v>>>20),v=A+(y^b&(m^y))+T[6]+2821735955&4294967295,A=b+(v<<17&4294967295|v>>>15),v=y+(m^A&(b^m))+T[7]+4249261313&4294967295,y=A+(v<<22&4294967295|v>>>10),v=m+(b^y&(A^b))+T[8]+1770035416&4294967295,m=y+(v<<7&4294967295|v>>>25),v=b+(A^m&(y^A))+T[9]+2336552879&4294967295,b=m+(v<<12&4294967295|v>>>20),v=A+(y^b&(m^y))+T[10]+4294925233&4294967295,A=b+(v<<17&4294967295|v>>>15),v=y+(m^A&(b^m))+T[11]+2304563134&4294967295,y=A+(v<<22&4294967295|v>>>10),v=m+(b^y&(A^b))+T[12]+1804603682&4294967295,m=y+(v<<7&4294967295|v>>>25),v=b+(A^m&(y^A))+T[13]+4254626195&4294967295,b=m+(v<<12&4294967295|v>>>20),v=A+(y^b&(m^y))+T[14]+2792965006&4294967295,A=b+(v<<17&4294967295|v>>>15),v=y+(m^A&(b^m))+T[15]+1236535329&4294967295,y=A+(v<<22&4294967295|v>>>10),v=m+(A^b&(y^A))+T[1]+4129170786&4294967295,m=y+(v<<5&4294967295|v>>>27),v=b+(y^A&(m^y))+T[6]+3225465664&4294967295,b=m+(v<<9&4294967295|v>>>23),v=A+(m^y&(b^m))+T[11]+643717713&4294967295,A=b+(v<<14&4294967295|v>>>18),v=y+(b^m&(A^b))+T[0]+3921069994&4294967295,y=A+(v<<20&4294967295|v>>>12),v=m+(A^b&(y^A))+T[5]+3593408605&4294967295,m=y+(v<<5&4294967295|v>>>27),v=b+(y^A&(m^y))+T[10]+38016083&4294967295,b=m+(v<<9&4294967295|v>>>23),v=A+(m^y&(b^m))+T[15]+3634488961&4294967295,A=b+(v<<14&4294967295|v>>>18),v=y+(b^m&(A^b))+T[4]+3889429448&4294967295,y=A+(v<<20&4294967295|v>>>12),v=m+(A^b&(y^A))+T[9]+568446438&4294967295,m=y+(v<<5&4294967295|v>>>27),v=b+(y^A&(m^y))+T[14]+3275163606&4294967295,b=m+(v<<9&4294967295|v>>>23),v=A+(m^y&(b^m))+T[3]+4107603335&4294967295,A=b+(v<<14&4294967295|v>>>18),v=y+(b^m&(A^b))+T[8]+1163531501&4294967295,y=A+(v<<20&4294967295|v>>>12),v=m+(A^b&(y^A))+T[13]+2850285829&4294967295,m=y+(v<<5&4294967295|v>>>27),v=b+(y^A&(m^y))+T[2]+4243563512&4294967295,b=m+(v<<9&4294967295|v>>>23),v=A+(m^y&(b^m))+T[7]+1735328473&4294967295,A=b+(v<<14&4294967295|v>>>18),v=y+(b^m&(A^b))+T[12]+2368359562&4294967295,y=A+(v<<20&4294967295|v>>>12),v=m+(y^A^b)+T[5]+4294588738&4294967295,m=y+(v<<4&4294967295|v>>>28),v=b+(m^y^A)+T[8]+2272392833&4294967295,b=m+(v<<11&4294967295|v>>>21),v=A+(b^m^y)+T[11]+1839030562&4294967295,A=b+(v<<16&4294967295|v>>>16),v=y+(A^b^m)+T[14]+4259657740&4294967295,y=A+(v<<23&4294967295|v>>>9),v=m+(y^A^b)+T[1]+2763975236&4294967295,m=y+(v<<4&4294967295|v>>>28),v=b+(m^y^A)+T[4]+1272893353&4294967295,b=m+(v<<11&4294967295|v>>>21),v=A+(b^m^y)+T[7]+4139469664&4294967295,A=b+(v<<16&4294967295|v>>>16),v=y+(A^b^m)+T[10]+3200236656&4294967295,y=A+(v<<23&4294967295|v>>>9),v=m+(y^A^b)+T[13]+681279174&4294967295,m=y+(v<<4&4294967295|v>>>28),v=b+(m^y^A)+T[0]+3936430074&4294967295,b=m+(v<<11&4294967295|v>>>21),v=A+(b^m^y)+T[3]+3572445317&4294967295,A=b+(v<<16&4294967295|v>>>16),v=y+(A^b^m)+T[6]+76029189&4294967295,y=A+(v<<23&4294967295|v>>>9),v=m+(y^A^b)+T[9]+3654602809&4294967295,m=y+(v<<4&4294967295|v>>>28),v=b+(m^y^A)+T[12]+3873151461&4294967295,b=m+(v<<11&4294967295|v>>>21),v=A+(b^m^y)+T[15]+530742520&4294967295,A=b+(v<<16&4294967295|v>>>16),v=y+(A^b^m)+T[2]+3299628645&4294967295,y=A+(v<<23&4294967295|v>>>9),v=m+(A^(y|~b))+T[0]+4096336452&4294967295,m=y+(v<<6&4294967295|v>>>26),v=b+(y^(m|~A))+T[7]+1126891415&4294967295,b=m+(v<<10&4294967295|v>>>22),v=A+(m^(b|~y))+T[14]+2878612391&4294967295,A=b+(v<<15&4294967295|v>>>17),v=y+(b^(A|~m))+T[5]+4237533241&4294967295,y=A+(v<<21&4294967295|v>>>11),v=m+(A^(y|~b))+T[12]+1700485571&4294967295,m=y+(v<<6&4294967295|v>>>26),v=b+(y^(m|~A))+T[3]+2399980690&4294967295,b=m+(v<<10&4294967295|v>>>22),v=A+(m^(b|~y))+T[10]+4293915773&4294967295,A=b+(v<<15&4294967295|v>>>17),v=y+(b^(A|~m))+T[1]+2240044497&4294967295,y=A+(v<<21&4294967295|v>>>11),v=m+(A^(y|~b))+T[8]+1873313359&4294967295,m=y+(v<<6&4294967295|v>>>26),v=b+(y^(m|~A))+T[15]+4264355552&4294967295,b=m+(v<<10&4294967295|v>>>22),v=A+(m^(b|~y))+T[6]+2734768916&4294967295,A=b+(v<<15&4294967295|v>>>17),v=y+(b^(A|~m))+T[13]+1309151649&4294967295,y=A+(v<<21&4294967295|v>>>11),v=m+(A^(y|~b))+T[4]+4149444226&4294967295,m=y+(v<<6&4294967295|v>>>26),v=b+(y^(m|~A))+T[11]+3174756917&4294967295,b=m+(v<<10&4294967295|v>>>22),v=A+(m^(b|~y))+T[2]+718787259&4294967295,A=b+(v<<15&4294967295|v>>>17),v=y+(b^(A|~m))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(A+(v<<21&4294967295|v>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+b&4294967295}s.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var y=m-this.blockSize,T=this.B,A=this.h,b=0;b<m;){if(A==0)for(;b<=y;)r(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<m;)if(T[A++]=E.charCodeAt(b++),A==this.blockSize){r(this,T),A=0;break}}else for(;b<m;)if(T[A++]=E[b++],A==this.blockSize){r(this,T),A=0;break}}this.h=A,this.o+=m},s.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var y=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=y&255,y/=256;for(this.u(E),E=Array(16),m=y=0;4>m;++m)for(var T=0;32>T;T+=8)E[y++]=this.g[m]>>>T&255;return E};function i(E,m){var y=c;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=m(E)}function a(E,m){this.h=m;for(var y=[],T=!0,A=E.length-1;0<=A;A--){var b=E[A]|0;T&&b==m||(y[A]=b,T=!1)}this.g=y}var c={};function u(E){return-128<=E&&128>E?i(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return R(h(-E));for(var m=[],y=1,T=0;E>=y;T++)m[T]=E/y|0,y*=4294967296;return new a(m,0)}function f(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return R(f(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(m,8)),T=g,A=0;A<E.length;A+=8){var b=Math.min(8,E.length-A),v=parseInt(E.substring(A,A+b),m);8>b?(b=h(Math.pow(m,b)),T=T.j(b).add(h(v))):(T=T.j(y),T=T.add(h(v)))}return T}var g=u(0),_=u(1),I=u(16777216);n=a.prototype,n.m=function(){if(P(this))return-R(this).m();for(var E=0,m=1,y=0;y<this.g.length;y++){var T=this.i(y);E+=(0<=T?T:4294967296+T)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(w(this))return"0";if(P(this))return"-"+R(this).toString(E);for(var m=h(Math.pow(E,6)),y=this,T="";;){var A=L(y,m).g;y=B(y,A.j(m));var b=((0<y.g.length?y.g[0]:y.h)>>>0).toString(E);if(y=A,w(y))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function w(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function P(E){return E.h==-1}n.l=function(E){return E=B(this,E),P(E)?-1:w(E)?0:1};function R(E){for(var m=E.g.length,y=[],T=0;T<m;T++)y[T]=~E.g[T];return new a(y,~E.h).add(_)}n.abs=function(){return P(this)?R(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],T=0,A=0;A<=m;A++){var b=T+(this.i(A)&65535)+(E.i(A)&65535),v=(b>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);T=v>>>16,b&=65535,v&=65535,y[A]=v<<16|b}return new a(y,y[y.length-1]&-2147483648?-1:0)};function B(E,m){return E.add(R(m))}n.j=function(E){if(w(this)||w(E))return g;if(P(this))return P(E)?R(this).j(R(E)):R(R(this).j(E));if(P(E))return R(this.j(R(E)));if(0>this.l(I)&&0>E.l(I))return h(this.m()*E.m());for(var m=this.g.length+E.g.length,y=[],T=0;T<2*m;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<E.g.length;A++){var b=this.i(T)>>>16,v=this.i(T)&65535,ht=E.i(A)>>>16,Hn=E.i(A)&65535;y[2*T+2*A]+=v*Hn,F(y,2*T+2*A),y[2*T+2*A+1]+=b*Hn,F(y,2*T+2*A+1),y[2*T+2*A+1]+=v*ht,F(y,2*T+2*A+1),y[2*T+2*A+2]+=b*ht,F(y,2*T+2*A+2)}for(T=0;T<m;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=m;T<2*m;T++)y[T]=0;return new a(y,0)};function F(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function V(E,m){this.g=E,this.h=m}function L(E,m){if(w(m))throw Error("division by zero");if(w(E))return new V(g,g);if(P(E))return m=L(R(E),m),new V(R(m.g),R(m.h));if(P(m))return m=L(E,R(m)),new V(R(m.g),m.h);if(30<E.g.length){if(P(E)||P(m))throw Error("slowDivide_ only works with positive integers.");for(var y=_,T=m;0>=T.l(E);)y=Y(y),T=Y(T);var A=U(y,1),b=U(T,1);for(T=U(T,2),y=U(y,2);!w(T);){var v=b.add(T);0>=v.l(E)&&(A=A.add(y),b=v),T=U(T,1),y=U(y,1)}return m=B(E,A.j(m)),new V(A,m)}for(A=g;0<=E.l(m);){for(y=Math.max(1,Math.floor(E.m()/m.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=h(y),v=b.j(m);P(v)||0<v.l(E);)y-=T,b=h(y),v=b.j(m);w(b)&&(b=_),A=A.add(b),E=B(E,v)}return new V(A,E)}n.A=function(E){return L(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)&E.i(T);return new a(y,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)|E.i(T);return new a(y,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)^E.i(T);return new a(y,this.h^E.h)};function Y(E){for(var m=E.g.length+1,y=[],T=0;T<m;T++)y[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(y,E.h)}function U(E,m){var y=m>>5;m%=32;for(var T=E.g.length-y,A=[],b=0;b<T;b++)A[b]=0<m?E.i(b+y)>>>m|E.i(b+y+1)<<32-m:E.i(b+y);return new a(A,E.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Gu=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Ft=a}).apply(typeof rl<"u"?rl:typeof self<"u"?self:typeof window<"u"?window:{});var cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ku,us,Qu,vr,yo,Yu,Xu,Ju;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof cr=="object"&&cr];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=t(this);function r(o,l){if(l)e:{var d=s;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in d))break e;d=d[S]}o=o[o.length-1],p=d[o],l=l(p),l!=p&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var d=0,p=!1,S={next:function(){if(!p&&d<o.length){var C=d++;return{value:l(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}r("Array.prototype.values",function(o){return o||function(){return i(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,d){return o.call.apply(o.bind,arguments)}function g(o,l,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,p),o.apply(l,S)}}return function(){return o.apply(l,arguments)}}function _(o,l,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,_.apply(null,arguments)}function I(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function w(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,S,C){for(var O=Array(arguments.length-2),se=2;se<arguments.length;se++)O[se-2]=arguments[se];return l.prototype[S].apply(p,O)}}function P(o){const l=o.length;if(0<l){const d=Array(l);for(let p=0;p<l;p++)d[p]=o[p];return d}return[]}function R(o,l){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const S=o.length||0,C=p.length||0;o.length=S+C;for(let O=0;O<C;O++)o[S+O]=p[O]}else o.push(p)}}class B{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function F(o){return/^[\s\xa0]*$/.test(o)}function V(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function L(o){return L[" "](o),o}L[" "]=function(){};var Y=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function U(o,l,d){for(const p in o)l.call(d,o[p],p,o)}function E(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function m(o){const l={};for(const d in o)l[d]=o[d];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,l){let d,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(d in p)o[d]=p[d];for(let C=0;C<y.length;C++)d=y[C],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function A(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function b(o){c.setTimeout(()=>{throw o},0)}function v(){var o=Ei;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class ht{constructor(){this.h=this.g=null}add(l,d){const p=Hn.get();p.set(l,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Hn=new B(()=>new xf,o=>o.reset());class xf{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let zn,Gn=!1,Ei=new ht,Wa=()=>{const o=c.Promise.resolve(void 0);zn=()=>{o.then(Ff)}};var Ff=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(d){b(d)}var l=Hn;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Gn=!1};function At(){this.s=this.s,this.C=this.C}At.prototype.s=!1,At.prototype.ma=function(){this.s||(this.s=!0,this.N())},At.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Lf=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return o}();function Kn(o,l){if(Ie.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(Y){e:{try{L(l.nodeName);var S=!0;break e}catch{}S=!1}S||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Uf[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Kn.aa.h.call(this)}}w(Kn,Ie);var Uf={2:"touch",3:"pen",4:"mouse"};Kn.prototype.h=function(){Kn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var $s="closure_listenable_"+(1e6*Math.random()|0),Bf=0;function jf(o,l,d,p,S){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!p,this.ha=S,this.key=++Bf,this.da=this.fa=!1}function Ws(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Hs(o){this.src=o,this.g={},this.h=0}Hs.prototype.add=function(o,l,d,p,S){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var O=Ii(o,l,p,S);return-1<O?(l=o[O],d||(l.fa=!1)):(l=new jf(l,this.src,C,!!p,S),l.fa=d,o.push(l)),l};function Ti(o,l){var d=l.type;if(d in o.g){var p=o.g[d],S=Array.prototype.indexOf.call(p,l,void 0),C;(C=0<=S)&&Array.prototype.splice.call(p,S,1),C&&(Ws(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Ii(o,l,d,p){for(var S=0;S<o.length;++S){var C=o[S];if(!C.da&&C.listener==l&&C.capture==!!d&&C.ha==p)return S}return-1}var Ai="closure_lm_"+(1e6*Math.random()|0),Si={};function Ha(o,l,d,p,S){if(Array.isArray(l)){for(var C=0;C<l.length;C++)Ha(o,l[C],d,p,S);return null}return d=Ka(d),o&&o[$s]?o.K(l,d,h(p)?!!p.capture:!1,S):qf(o,l,d,!1,p,S)}function qf(o,l,d,p,S,C){if(!l)throw Error("Invalid event type");var O=h(S)?!!S.capture:!!S,se=Ri(o);if(se||(o[Ai]=se=new Hs(o)),d=se.add(l,d,p,O,C),d.proxy)return d;if(p=$f(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)Lf||(S=O),S===void 0&&(S=!1),o.addEventListener(l.toString(),p,S);else if(o.attachEvent)o.attachEvent(Ga(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function $f(){function o(d){return l.call(o.src,o.listener,d)}const l=Wf;return o}function za(o,l,d,p,S){if(Array.isArray(l))for(var C=0;C<l.length;C++)za(o,l[C],d,p,S);else p=h(p)?!!p.capture:!!p,d=Ka(d),o&&o[$s]?(o=o.i,l=String(l).toString(),l in o.g&&(C=o.g[l],d=Ii(C,d,p,S),-1<d&&(Ws(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete o.g[l],o.h--)))):o&&(o=Ri(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Ii(l,d,p,S)),(d=-1<o?l[o]:null)&&bi(d))}function bi(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[$s])Ti(l.i,o);else{var d=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(d,p,o.capture):l.detachEvent?l.detachEvent(Ga(d),p):l.addListener&&l.removeListener&&l.removeListener(p),(d=Ri(l))?(Ti(d,o),d.h==0&&(d.src=null,l[Ai]=null)):Ws(o)}}}function Ga(o){return o in Si?Si[o]:Si[o]="on"+o}function Wf(o,l){if(o.da)o=!0;else{l=new Kn(l,this);var d=o.listener,p=o.ha||o.src;o.fa&&bi(o),o=d.call(p,l)}return o}function Ri(o){return o=o[Ai],o instanceof Hs?o:null}var Ci="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ka(o){return typeof o=="function"?o:(o[Ci]||(o[Ci]=function(l){return o.handleEvent(l)}),o[Ci])}function Ae(){At.call(this),this.i=new Hs(this),this.M=this,this.F=null}w(Ae,At),Ae.prototype[$s]=!0,Ae.prototype.removeEventListener=function(o,l,d,p){za(this,o,l,d,p)};function Me(o,l){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new Ie(l,o);else if(l instanceof Ie)l.target=l.target||o;else{var S=l;l=new Ie(p,o),T(l,S)}if(S=!0,d)for(var C=d.length-1;0<=C;C--){var O=l.g=d[C];S=zs(O,p,!0,l)&&S}if(O=l.g=o,S=zs(O,p,!0,l)&&S,S=zs(O,p,!1,l)&&S,d)for(C=0;C<d.length;C++)O=l.g=d[C],S=zs(O,p,!1,l)&&S}Ae.prototype.N=function(){if(Ae.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],p=0;p<d.length;p++)Ws(d[p]);delete o.g[l],o.h--}}this.F=null},Ae.prototype.K=function(o,l,d,p){return this.i.add(String(o),l,!1,d,p)},Ae.prototype.L=function(o,l,d,p){return this.i.add(String(o),l,!0,d,p)};function zs(o,l,d,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var S=!0,C=0;C<l.length;++C){var O=l[C];if(O&&!O.da&&O.capture==d){var se=O.listener,ve=O.ha||O.src;O.fa&&Ti(o.i,O),S=se.call(ve,p)!==!1&&S}}return S&&!p.defaultPrevented}function Qa(o,l,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Ya(o){o.g=Qa(()=>{o.g=null,o.i&&(o.i=!1,Ya(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Hf extends At{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ya(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qn(o){At.call(this),this.h=o,this.g={}}w(Qn,At);var Xa=[];function Ja(o){U(o.g,function(l,d){this.g.hasOwnProperty(d)&&bi(l)},o),o.g={}}Qn.prototype.N=function(){Qn.aa.N.call(this),Ja(this)},Qn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pi=c.JSON.stringify,zf=c.JSON.parse,Gf=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Ni(){}Ni.prototype.h=null;function Za(o){return o.h||(o.h=o.i())}function ec(){}var Yn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mi(){Ie.call(this,"d")}w(Mi,Ie);function ki(){Ie.call(this,"c")}w(ki,Ie);var Gt={},tc=null;function Gs(){return tc=tc||new Ae}Gt.La="serverreachability";function nc(o){Ie.call(this,Gt.La,o)}w(nc,Ie);function Xn(o){const l=Gs();Me(l,new nc(l))}Gt.STAT_EVENT="statevent";function sc(o,l){Ie.call(this,Gt.STAT_EVENT,o),this.stat=l}w(sc,Ie);function ke(o){const l=Gs();Me(l,new sc(l,o))}Gt.Ma="timingevent";function rc(o,l){Ie.call(this,Gt.Ma,o),this.size=l}w(rc,Ie);function Jn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function Zn(){this.g=!0}Zn.prototype.xa=function(){this.g=!1};function Kf(o,l,d,p,S,C){o.info(function(){if(o.g)if(C)for(var O="",se=C.split("&"),ve=0;ve<se.length;ve++){var ee=se[ve].split("=");if(1<ee.length){var Se=ee[0];ee=ee[1];var be=Se.split("_");O=2<=be.length&&be[1]=="type"?O+(Se+"="+ee+"&"):O+(Se+"=redacted&")}}else O=null;else O=C;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+l+`
`+d+`
`+O})}function Qf(o,l,d,p,S,C,O){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+l+`
`+d+`
`+C+" "+O})}function pn(o,l,d,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Xf(o,d)+(p?" "+p:"")})}function Yf(o,l){o.info(function(){return"TIMEOUT: "+l})}Zn.prototype.info=function(){};function Xf(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var S=p[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var O=1;O<S.length;O++)S[O]=""}}}}return Pi(d)}catch{return l}}var Ks={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ic={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Oi;function Qs(){}w(Qs,Ni),Qs.prototype.g=function(){return new XMLHttpRequest},Qs.prototype.i=function(){return{}},Oi=new Qs;function St(o,l,d,p){this.j=o,this.i=l,this.l=d,this.R=p||1,this.U=new Qn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new oc}function oc(){this.i=null,this.g="",this.h=!1}var ac={},Di={};function Vi(o,l,d){o.L=1,o.v=Zs(dt(l)),o.m=d,o.P=!0,cc(o,null)}function cc(o,l){o.F=Date.now(),Ys(o),o.A=dt(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Tc(d.i,"t",p),o.C=0,d=o.j.J,o.h=new oc,o.g=Bc(o.j,d?l:null,!o.m),0<o.O&&(o.M=new Hf(_(o.Y,o,o.g),o.O)),l=o.U,d=o.g,p=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(Xa[0]=S.toString()),S=Xa);for(var C=0;C<S.length;C++){var O=Ha(d,S[C],p||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Xn(),Kf(o.i,o.u,o.A,o.l,o.R,o.m)}St.prototype.ca=function(o){o=o.target;const l=this.M;l&&ft(o)==3?l.j():this.Y(o)},St.prototype.Y=function(o){try{if(o==this.g)e:{const be=ft(this.g);var l=this.g.Ba();const _n=this.g.Z();if(!(3>be)&&(be!=3||this.g&&(this.h.h||this.g.oa()||Pc(this.g)))){this.J||be!=4||l==7||(l==8||0>=_n?Xn(3):Xn(2)),xi(this);var d=this.g.Z();this.X=d;t:if(lc(this)){var p=Pc(this.g);o="";var S=p.length,C=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kt(this),es(this);var O="";break t}this.h.i=new c.TextDecoder}for(l=0;l<S;l++)this.h.h=!0,o+=this.h.i.decode(p[l],{stream:!(C&&l==S-1)});p.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,Qf(this.i,this.u,this.A,this.l,this.R,be,d),this.o){if(this.T&&!this.K){t:{if(this.g){var se,ve=this.g;if((se=ve.g?ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(se)){var ee=se;break t}}ee=null}if(d=ee)pn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fi(this,d);else{this.o=!1,this.s=3,ke(12),Kt(this),es(this);break e}}if(this.P){d=!0;let He;for(;!this.J&&this.C<O.length;)if(He=Jf(this,O),He==Di){be==4&&(this.s=4,ke(14),d=!1),pn(this.i,this.l,null,"[Incomplete Response]");break}else if(He==ac){this.s=4,ke(15),pn(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else pn(this.i,this.l,He,null),Fi(this,He);if(lc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||O.length!=0||this.h.h||(this.s=1,ke(16),d=!1),this.o=this.o&&d,!d)pn(this.i,this.l,O,"[Invalid Chunked Response]"),Kt(this),es(this);else if(0<O.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),$i(Se),Se.M=!0,ke(11))}}else pn(this.i,this.l,O,null),Fi(this,O);be==4&&Kt(this),this.o&&!this.J&&(be==4?xc(this.j,this):(this.o=!1,Ys(this)))}else gp(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),Kt(this),es(this)}}}catch{}finally{}};function lc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Jf(o,l){var d=o.C,p=l.indexOf(`
`,d);return p==-1?Di:(d=Number(l.substring(d,p)),isNaN(d)?ac:(p+=1,p+d>l.length?Di:(l=l.slice(p,p+d),o.C=p+d,l)))}St.prototype.cancel=function(){this.J=!0,Kt(this)};function Ys(o){o.S=Date.now()+o.I,uc(o,o.I)}function uc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Jn(_(o.ba,o),l)}function xi(o){o.B&&(c.clearTimeout(o.B),o.B=null)}St.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Yf(this.i,this.A),this.L!=2&&(Xn(),ke(17)),Kt(this),this.s=2,es(this)):uc(this,this.S-o)};function es(o){o.j.G==0||o.J||xc(o.j,o)}function Kt(o){xi(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Ja(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Fi(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||Li(d.h,o))){if(!o.K&&Li(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ir(d),sr(d);else break e;qi(d),ke(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=Jn(_(d.Za,d),6e3));if(1>=fc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Yt(d,11)}else if((o.K||d.g==o)&&ir(d),!F(l))for(S=d.Da.g.parse(l),l=0;l<S.length;l++){let ee=S[l];if(d.T=ee[0],ee=ee[1],d.G==2)if(ee[0]=="c"){d.K=ee[1],d.ia=ee[2];const Se=ee[3];Se!=null&&(d.la=Se,d.j.info("VER="+d.la));const be=ee[4];be!=null&&(d.Aa=be,d.j.info("SVER="+d.Aa));const _n=ee[5];_n!=null&&typeof _n=="number"&&0<_n&&(p=1.5*_n,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const He=o.g;if(He){const ar=He.g?He.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ar){var C=p.h;C.g||ar.indexOf("spdy")==-1&&ar.indexOf("quic")==-1&&ar.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Ui(C,C.h),C.h=null))}if(p.D){const Wi=He.g?He.g.getResponseHeader("X-HTTP-Session-Id"):null;Wi&&(p.ya=Wi,re(p.I,p.D,Wi))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var O=o;if(p.qa=Uc(p,p.J?p.ia:null,p.W),O.K){pc(p.h,O);var se=O,ve=p.L;ve&&(se.I=ve),se.B&&(xi(se),Ys(se)),p.g=O}else Dc(p);0<d.i.length&&rr(d)}else ee[0]!="stop"&&ee[0]!="close"||Yt(d,7);else d.G==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?Yt(d,7):ji(d):ee[0]!="noop"&&d.l&&d.l.ta(ee),d.v=0)}}Xn(4)}catch{}}var Zf=class{constructor(o,l){this.g=o,this.map=l}};function hc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function dc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function fc(o){return o.h?1:o.g?o.g.size:0}function Li(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Ui(o,l){o.g?o.g.add(l):o.h=l}function pc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}hc.prototype.cancel=function(){if(this.i=gc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function gc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return P(o.i)}function ep(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],d=o.length,p=0;p<d;p++)l.push(o[p]);return l}l=[],d=0;for(p in o)l[d++]=o[p];return l}function tp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const p in o)l[d++]=p;return l}}}function mc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=tp(o),p=ep(o),S=p.length,C=0;C<S;C++)l.call(void 0,p[C],d&&d[C],o)}var _c=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function np(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),S=null;if(0<=p){var C=o[d].substring(0,p);S=o[d].substring(p+1)}else C=o[d];l(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Qt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Qt){this.h=o.h,Xs(this,o.j),this.o=o.o,this.g=o.g,Js(this,o.s),this.l=o.l;var l=o.i,d=new ss;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),yc(this,d),this.m=o.m}else o&&(l=String(o).match(_c))?(this.h=!1,Xs(this,l[1]||"",!0),this.o=ts(l[2]||""),this.g=ts(l[3]||"",!0),Js(this,l[4]),this.l=ts(l[5]||"",!0),yc(this,l[6]||"",!0),this.m=ts(l[7]||"")):(this.h=!1,this.i=new ss(null,this.h))}Qt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(ns(l,vc,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(ns(l,vc,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(ns(d,d.charAt(0)=="/"?ip:rp,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",ns(d,ap)),o.join("")};function dt(o){return new Qt(o)}function Xs(o,l,d){o.j=d?ts(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Js(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function yc(o,l,d){l instanceof ss?(o.i=l,cp(o.i,o.h)):(d||(l=ns(l,op)),o.i=new ss(l,o.h))}function re(o,l,d){o.i.set(l,d)}function Zs(o){return re(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ts(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ns(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,sp),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function sp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var vc=/[#\/\?@]/g,rp=/[#\?:]/g,ip=/[#\?]/g,op=/[#\?@]/g,ap=/#/g;function ss(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function bt(o){o.g||(o.g=new Map,o.h=0,o.i&&np(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=ss.prototype,n.add=function(o,l){bt(this),this.i=null,o=gn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function wc(o,l){bt(o),l=gn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Ec(o,l){return bt(o),l=gn(o,l),o.g.has(l)}n.forEach=function(o,l){bt(this),this.g.forEach(function(d,p){d.forEach(function(S){o.call(l,S,p,this)},this)},this)},n.na=function(){bt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let p=0;p<l.length;p++){const S=o[p];for(let C=0;C<S.length;C++)d.push(l[p])}return d},n.V=function(o){bt(this);let l=[];if(typeof o=="string")Ec(this,o)&&(l=l.concat(this.g.get(gn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},n.set=function(o,l){return bt(this),this.i=null,o=gn(this,o),Ec(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Tc(o,l,d){wc(o,l),0<d.length&&(o.i=null,o.g.set(gn(o,l),P(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var p=l[d];const C=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var S=C;O[p]!==""&&(S+="="+encodeURIComponent(String(O[p]))),o.push(S)}}return this.i=o.join("&")};function gn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function cp(o,l){l&&!o.j&&(bt(o),o.i=null,o.g.forEach(function(d,p){var S=p.toLowerCase();p!=S&&(wc(this,p),Tc(this,S,d))},o)),o.j=l}function lp(o,l){const d=new Zn;if(c.Image){const p=new Image;p.onload=I(Rt,d,"TestLoadImage: loaded",!0,l,p),p.onerror=I(Rt,d,"TestLoadImage: error",!1,l,p),p.onabort=I(Rt,d,"TestLoadImage: abort",!1,l,p),p.ontimeout=I(Rt,d,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function up(o,l){const d=new Zn,p=new AbortController,S=setTimeout(()=>{p.abort(),Rt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(S),C.ok?Rt(d,"TestPingServer: ok",!0,l):Rt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(S),Rt(d,"TestPingServer: error",!1,l)})}function Rt(o,l,d,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(d)}catch{}}function hp(){this.g=new Gf}function dp(o,l,d){const p=d||"";try{mc(o,function(S,C){let O=S;h(S)&&(O=Pi(S)),l.push(p+C+"="+encodeURIComponent(O))})}catch(S){throw l.push(p+"type="+encodeURIComponent("_badmap")),S}}function er(o){this.l=o.Ub||null,this.j=o.eb||!1}w(er,Ni),er.prototype.g=function(){return new tr(this.l,this.j)},er.prototype.i=function(o){return function(){return o}}({});function tr(o,l){Ae.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(tr,Ae),n=tr.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,is(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rs(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,is(this)),this.g&&(this.readyState=3,is(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ic(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ic(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?rs(this):is(this),this.readyState==3&&Ic(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,rs(this))},n.Qa=function(o){this.g&&(this.response=o,rs(this))},n.ga=function(){this.g&&rs(this)};function rs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,is(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function is(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(tr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ac(o){let l="";return U(o,function(d,p){l+=p,l+=":",l+=d,l+=`\r
`}),l}function Bi(o,l,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Ac(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):re(o,l,d))}function ue(o){Ae.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(ue,Ae);var fp=/^https?$/i,pp=["POST","PUT"];n=ue.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Oi.g(),this.v=this.o?Za(this.o):Za(Oi),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(C){Sc(this,C);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)d.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())d.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),S=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(pp,l,void 0))||p||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,O]of d)this.g.setRequestHeader(C,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Cc(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Sc(this,C)}};function Sc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,bc(o),nr(o)}function bc(o){o.A||(o.A=!0,Me(o,"complete"),Me(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Me(this,"complete"),Me(this,"abort"),nr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nr(this,!0)),ue.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Rc(this):this.bb())},n.bb=function(){Rc(this)};function Rc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ft(o)!=4||o.Z()!=2)){if(o.u&&ft(o)==4)Qa(o.Ea,0,o);else if(Me(o,"readystatechange"),ft(o)==4){o.h=!1;try{const O=o.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var p;if(p=O===0){var S=String(o.D).match(_c)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),p=!fp.test(S?S.toLowerCase():"")}d=p}if(d)Me(o,"complete"),Me(o,"success");else{o.m=6;try{var C=2<ft(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",bc(o)}}finally{nr(o)}}}}function nr(o,l){if(o.g){Cc(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Me(o,"ready");try{d.onreadystatechange=p}catch{}}}function Cc(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function ft(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),zf(l)}};function Pc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function gp(o){const l={};o=(o.g&&2<=ft(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(F(o[p]))continue;var d=A(o[p]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=l[S]||[];l[S]=C,C.push(d)}E(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function os(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function Nc(o){this.Aa=0,this.i=[],this.j=new Zn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=os("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=os("baseRetryDelayMs",5e3,o),this.cb=os("retryDelaySeedMs",1e4,o),this.Wa=os("forwardChannelMaxRetries",2,o),this.wa=os("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new hc(o&&o.concurrentRequestLimit),this.Da=new hp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Nc.prototype,n.la=8,n.G=1,n.connect=function(o,l,d,p){ke(0),this.W=o,this.H=l||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Uc(this,null,this.W),rr(this)};function ji(o){if(Mc(o),o.G==3){var l=o.U++,d=dt(o.I);if(re(d,"SID",o.K),re(d,"RID",l),re(d,"TYPE","terminate"),as(o,d),l=new St(o,o.j,l),l.L=2,l.v=Zs(dt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=Bc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Ys(l)}Lc(o)}function sr(o){o.g&&($i(o),o.g.cancel(),o.g=null)}function Mc(o){sr(o),o.u&&(c.clearTimeout(o.u),o.u=null),ir(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function rr(o){if(!dc(o.h)&&!o.s){o.s=!0;var l=o.Ga;zn||Wa(),Gn||(zn(),Gn=!0),Ei.add(l,o),o.B=0}}function mp(o,l){return fc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Jn(_(o.Ga,o,l),Fc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new St(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Oc(this,S,l),d=dt(this.I),re(d,"RID",o),re(d,"CVER",22),this.D&&re(d,"X-HTTP-Session-Id",this.D),as(this,d),C&&(this.O?l="headers="+encodeURIComponent(String(Ac(C)))+"&"+l:this.m&&Bi(d,this.m,C)),Ui(this.h,S),this.Ua&&re(d,"TYPE","init"),this.P?(re(d,"$req",l),re(d,"SID","null"),S.T=!0,Vi(S,d,null)):Vi(S,d,l),this.G=2}}else this.G==3&&(o?kc(this,o):this.i.length==0||dc(this.h)||kc(this))};function kc(o,l){var d;l?d=l.l:d=o.U++;const p=dt(o.I);re(p,"SID",o.K),re(p,"RID",d),re(p,"AID",o.T),as(o,p),o.m&&o.o&&Bi(p,o.m,o.o),d=new St(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Oc(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ui(o.h,d),Vi(d,p,l)}function as(o,l){o.H&&U(o.H,function(d,p){re(l,p,d)}),o.l&&mc({},function(d,p){re(l,p,d)})}function Oc(o,l,d){d=Math.min(o.i.length,d);var p=o.l?_(o.l.Na,o.l,o):null;e:{var S=o.i;let C=-1;for(;;){const O=["count="+d];C==-1?0<d?(C=S[0].g,O.push("ofs="+C)):C=0:O.push("ofs="+C);let se=!0;for(let ve=0;ve<d;ve++){let ee=S[ve].g;const Se=S[ve].map;if(ee-=C,0>ee)C=Math.max(0,S[ve].g-100),se=!1;else try{dp(Se,O,"req"+ee+"_")}catch{p&&p(Se)}}if(se){p=O.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,p}function Dc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;zn||Wa(),Gn||(zn(),Gn=!0),Ei.add(l,o),o.v=0}}function qi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Jn(_(o.Fa,o),Fc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Vc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Jn(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),sr(this),Vc(this))};function $i(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Vc(o){o.g=new St(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=dt(o.qa);re(l,"RID","rpc"),re(l,"SID",o.K),re(l,"AID",o.T),re(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&re(l,"TO",o.ja),re(l,"TYPE","xmlhttp"),as(o,l),o.m&&o.o&&Bi(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Zs(dt(l)),d.m=null,d.P=!0,cc(d,o)}n.Za=function(){this.C!=null&&(this.C=null,sr(this),qi(this),ke(19))};function ir(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function xc(o,l){var d=null;if(o.g==l){ir(o),$i(o),o.g=null;var p=2}else if(Li(o.h,l))d=l.D,pc(o.h,l),p=1;else return;if(o.G!=0){if(l.o)if(p==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var S=o.B;p=Gs(),Me(p,new rc(p,d)),rr(o)}else Dc(o);else if(S=l.s,S==3||S==0&&0<l.X||!(p==1&&mp(o,l)||p==2&&qi(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),S){case 1:Yt(o,5);break;case 4:Yt(o,10);break;case 3:Yt(o,6);break;default:Yt(o,2)}}}function Fc(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function Yt(o,l){if(o.j.info("Error code "+l),l==2){var d=_(o.fb,o),p=o.Xa;const S=!p;p=new Qt(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Xs(p,"https"),Zs(p),S?lp(p.toString(),d):up(p.toString(),d)}else ke(2);o.G=0,o.l&&o.l.sa(l),Lc(o),Mc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function Lc(o){if(o.G=0,o.ka=[],o.l){const l=gc(o.h);(l.length!=0||o.i.length!=0)&&(R(o.ka,l),R(o.ka,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.ra()}}function Uc(o,l,d){var p=d instanceof Qt?dt(d):new Qt(d);if(p.g!="")l&&(p.g=l+"."+p.g),Js(p,p.s);else{var S=c.location;p=S.protocol,l=l?l+"."+S.hostname:S.hostname,S=+S.port;var C=new Qt(null);p&&Xs(C,p),l&&(C.g=l),S&&Js(C,S),d&&(C.l=d),p=C}return d=o.D,l=o.ya,d&&l&&re(p,d,l),re(p,"VER",o.la),as(o,p),p}function Bc(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ue(new er({eb:d})):new ue(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function jc(){}n=jc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function or(){}or.prototype.g=function(o,l){return new Fe(o,l)};function Fe(o,l){Ae.call(this),this.g=new Nc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!F(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!F(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new mn(this)}w(Fe,Ae),Fe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Fe.prototype.close=function(){ji(this.g)},Fe.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Pi(o),o=d);l.i.push(new Zf(l.Ya++,o)),l.G==3&&rr(l)},Fe.prototype.N=function(){this.g.l=null,delete this.j,ji(this.g),delete this.g,Fe.aa.N.call(this)};function qc(o){Mi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}w(qc,Mi);function $c(){ki.call(this),this.status=1}w($c,ki);function mn(o){this.g=o}w(mn,jc),mn.prototype.ua=function(){Me(this.g,"a")},mn.prototype.ta=function(o){Me(this.g,new qc(o))},mn.prototype.sa=function(o){Me(this.g,new $c)},mn.prototype.ra=function(){Me(this.g,"b")},or.prototype.createWebChannel=or.prototype.g,Fe.prototype.send=Fe.prototype.o,Fe.prototype.open=Fe.prototype.m,Fe.prototype.close=Fe.prototype.close,Ju=function(){return new or},Xu=function(){return Gs()},Yu=Gt,yo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ks.NO_ERROR=0,Ks.TIMEOUT=8,Ks.HTTP_ERROR=6,vr=Ks,ic.COMPLETE="complete",Qu=ic,ec.EventType=Yn,Yn.OPEN="a",Yn.CLOSE="b",Yn.ERROR="c",Yn.MESSAGE="d",Ae.prototype.listen=Ae.prototype.K,us=ec,ue.prototype.listenOnce=ue.prototype.L,ue.prototype.getLastError=ue.prototype.Ka,ue.prototype.getLastErrorCode=ue.prototype.Ba,ue.prototype.getStatus=ue.prototype.Z,ue.prototype.getResponseJson=ue.prototype.Oa,ue.prototype.getResponseText=ue.prototype.oa,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Ha,Ku=ue}).apply(typeof cr<"u"?cr:typeof self<"u"?self:typeof window<"u"?window:{});const il="@firebase/firestore",ol="4.8.0";/**
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
 */class Ce{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ce.UNAUTHENTICATED=new Ce(null),Ce.GOOGLE_CREDENTIALS=new Ce("google-credentials-uid"),Ce.FIRST_PARTY=new Ce("first-party-uid"),Ce.MOCK_USER=new Ce("mock-user");/**
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
 */let Un="11.10.0";/**
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
 */const on=new Ho("@firebase/firestore");function vn(){return on.logLevel}function x(n,...e){if(on.logLevel<=X.DEBUG){const t=e.map(Ko);on.debug(`Firestore (${Un}): ${n}`,...t)}}function wt(n,...e){if(on.logLevel<=X.ERROR){const t=e.map(Ko);on.error(`Firestore (${Un}): ${n}`,...t)}}function Bt(n,...e){if(on.logLevel<=X.WARN){const t=e.map(Ko);on.warn(`Firestore (${Un}): ${n}`,...t)}}function Ko(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function $(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Zu(n,s,t)}function Zu(n,e,t){let s=`FIRESTORE (${Un}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw wt(s),new Error(s)}function ne(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Zu(e,r,s)}function K(n,e){return n}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends It{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Lt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class eh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ce.UNAUTHENTICATED))}shutdown(){}}class dm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class fm{constructor(e){this.t=e,this.currentUser=Ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ne(this.o===void 0,42304);let s=this.i;const r=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let i=new Lt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Lt,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},c=u=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Lt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ne(typeof s.accessToken=="string",31837,{l:s}),new eh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string",2055,{h:e}),new Ce(e)}}class pm{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ce.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class gm{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new pm(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class al{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mm{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,je(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ne(this.o===void 0,3512);const s=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new al(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ne(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new al(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function _m(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function th(){return new TextEncoder}/**
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
 */class Qo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=_m(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function Q(n,e){return n<e?-1:n>e?1:0}function vo(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),r=e.codePointAt(t);if(s!==r){if(s<128&&r<128)return Q(s,r);{const i=th(),a=ym(i.encode(cl(n,t)),i.encode(cl(e,t)));return a!==0?a:Q(s,r)}}t+=s>65535?2:1}return Q(n.length,e.length)}function cl(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function ym(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Q(n[t],e[t]);return Q(n.length,e.length)}function Nn(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
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
 */const ll="__name__";class et{constructor(e,t,s){t===void 0?t=0:t>e.length&&$(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&$(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return et.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof et?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=et.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return Q(e.length,t.length)}static compareSegments(e,t){const s=et.isNumericId(e),r=et.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?et.extractNumericId(e).compare(et.extractNumericId(t)):vo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ft.fromString(e.substring(4,e.length-2))}}class ce extends et{construct(e,t,s){return new ce(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new j(M.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new ce(t)}static emptyPath(){return new ce([])}}const vm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends et{construct(e,t,s){return new Ee(e,t,s)}static isValidIdentifier(e){return vm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ll}static keyField(){return new Ee([ll])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new j(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new j(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new j(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(i(),r++)}if(i(),a)throw new j(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(t)}static emptyPath(){return new Ee([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ce.fromString(e))}static fromName(e){return new q(ce.fromString(e).popFirst(5))}static empty(){return new q(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ce(e.slice()))}}/**
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
 */function wm(n,e,t){if(!t)throw new j(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Em(n,e,t,s){if(e===!0&&s===!0)throw new j(M.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ul(n){if(!q.isDocumentKey(n))throw new j(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function nh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Yo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$(12329,{type:typeof n})}function Ts(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Yo(n);throw new j(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function fe(n,e){const t={typeString:n};return e&&(t.value=e),t}function Vs(n,e){if(!nh(n))throw new j(M.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new j(M.INVALID_ARGUMENT,t);return!0}/**
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
 */const hl=-62135596800,dl=1e6;class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*dl);return new ae(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<hl)throw new j(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/dl}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Vs(e,ae._jsonSchema))return new ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ae._jsonSchemaVersion="firestore/timestamp/1.0",ae._jsonSchema={type:fe("string",ae._jsonSchemaVersion),seconds:fe("number"),nanoseconds:fe("number")};/**
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
 */class H{static fromTimestamp(e){return new H(e)}static min(){return new H(new ae(0,0))}static max(){return new H(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Is=-1;function Tm(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=H.fromTimestamp(s===1e9?new ae(t+1,0):new ae(t,s));return new jt(r,q.empty(),e)}function Im(n){return new jt(n.readTime,n.key,Is)}class jt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new jt(H.min(),q.empty(),Is)}static max(){return new jt(H.max(),q.empty(),Is)}}function Am(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
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
 */const Sm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Bn(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==Sm)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,s)=>{t(e)})}static reject(e){return new N((t,s)=>{s(e)})}static waitFor(e){return new N((t,s)=>{let r=0,i=0,a=!1;e.forEach(c=>{++r,c.next(()=>{++i,a&&i===r&&t()},u=>s(u))}),a=!0,i===r&&t()})}static or(e){let t=N.resolve(!1);for(const s of e)t=t.next(r=>r?N.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new N((s,r)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++c,c===i&&s(a)},f=>r(f))}})}static doWhile(e,t){return new N((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}function Rm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function jn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ei{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}ei.ue=-1;/**
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
 */const Xo=-1;function ti(n){return n==null}function kr(n){return n===0&&1/n==-1/0}function Cm(n){return typeof n=="number"&&Number.isInteger(n)&&!kr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const sh="";function Pm(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=fl(e)),e=Nm(n.get(t),e);return fl(e)}function Nm(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case sh:t+="";break;default:t+=i}}return t}function fl(n){return n+sh+""}/**
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
 */function pl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function un(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function rh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class le{constructor(e,t){this.comparator=e,this.root=t||we.EMPTY}insert(e,t){return new le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lr(this.root,e,this.comparator,!1)}getReverseIterator(){return new lr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lr(this.root,e,this.comparator,!0)}}class lr{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??we.RED,this.left=r??we.EMPTY,this.right=i??we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new we(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return we.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $(43730,{key:this.key,value:this.value});if(this.right.isRed())throw $(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw $(27949);return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw $(57766)}get value(){throw $(16141)}get color(){throw $(16727)}get left(){throw $(29726)}get right(){throw $(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new we(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ge{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new gl(this.data.getIterator())}getIteratorFrom(e){return new gl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ge(this.comparator);return t.data=e,t}}class gl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ye{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new Ye([])}unionWith(e){let t=new ge(Ee.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ye(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Nn(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class ih extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ih("Invalid base64 string: "+i):i}}(e);return new Te(t)}static fromUint8Array(e){const t=function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i}(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const Mm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qt(n){if(ne(!!n,39018),typeof n=="string"){let e=0;const t=Mm.exec(n);if(ne(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:he(n.seconds),nanos:he(n.nanos)}}function he(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function $t(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
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
 */const oh="server_timestamp",ah="__type__",ch="__previous_value__",lh="__local_write_time__";function Jo(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[ah])===null||t===void 0?void 0:t.stringValue)===oh}function ni(n){const e=n.mapValue.fields[ch];return Jo(e)?ni(e):e}function As(n){const e=qt(n.mapValue.fields[lh].timestampValue);return new ae(e.seconds,e.nanos)}/**
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
 */class km{constructor(e,t,s,r,i,a,c,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const Or="(default)";class Ss{constructor(e,t){this.projectId=e,this.database=t||Or}static empty(){return new Ss("","")}get isDefaultDatabase(){return this.database===Or}isEqual(e){return e instanceof Ss&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const uh="__type__",Om="__max__",ur={mapValue:{}},hh="__vector__",Dr="value";function Wt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Jo(n)?4:Vm(n)?9007199254740991:Dm(n)?10:11:$(28295,{value:n})}function ct(n,e){if(n===e)return!0;const t=Wt(n);if(t!==Wt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return As(n).isEqual(As(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=qt(r.timestampValue),c=qt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return $t(r.bytesValue).isEqual($t(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return he(r.geoPointValue.latitude)===he(i.geoPointValue.latitude)&&he(r.geoPointValue.longitude)===he(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return he(r.integerValue)===he(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=he(r.doubleValue),c=he(i.doubleValue);return a===c?kr(a)===kr(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Nn(n.arrayValue.values||[],e.arrayValue.values||[],ct);case 10:case 11:return function(r,i){const a=r.mapValue.fields||{},c=i.mapValue.fields||{};if(pl(a)!==pl(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!ct(a[u],c[u])))return!1;return!0}(n,e);default:return $(52216,{left:n})}}function bs(n,e){return(n.values||[]).find(t=>ct(t,e))!==void 0}function Mn(n,e){if(n===e)return 0;const t=Wt(n),s=Wt(e);if(t!==s)return Q(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=he(i.integerValue||i.doubleValue),u=he(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return ml(n.timestampValue,e.timestampValue);case 4:return ml(As(n),As(e));case 5:return vo(n.stringValue,e.stringValue);case 6:return function(i,a){const c=$t(i),u=$t(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=Q(c[h],u[h]);if(f!==0)return f}return Q(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=Q(he(i.latitude),he(a.latitude));return c!==0?c:Q(he(i.longitude),he(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return _l(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,u,h,f;const g=i.fields||{},_=a.fields||{},I=(c=g[Dr])===null||c===void 0?void 0:c.arrayValue,w=(u=_[Dr])===null||u===void 0?void 0:u.arrayValue,P=Q(((h=I?.values)===null||h===void 0?void 0:h.length)||0,((f=w?.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:_l(I,w)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===ur.mapValue&&a===ur.mapValue)return 0;if(i===ur.mapValue)return 1;if(a===ur.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const _=vo(u[g],f[g]);if(_!==0)return _;const I=Mn(c[u[g]],h[f[g]]);if(I!==0)return I}return Q(u.length,f.length)}(n.mapValue,e.mapValue);default:throw $(23264,{le:t})}}function ml(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=qt(n),s=qt(e),r=Q(t.seconds,s.seconds);return r!==0?r:Q(t.nanos,s.nanos)}function _l(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=Mn(t[r],s[r]);if(i)return i}return Q(t.length,s.length)}function kn(n){return wo(n)}function wo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=qt(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return $t(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=wo(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${wo(t.fields[a])}`;return r+"}"}(n.mapValue):$(61005,{value:n})}function wr(n){switch(Wt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ni(n);return e?16+wr(e):16;case 5:return 2*n.stringValue.length;case 6:return $t(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+wr(i),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return un(s.fields,(i,a)=>{r+=i.length+wr(a)}),r}(n.mapValue);default:throw $(13486,{value:n})}}function Eo(n){return!!n&&"integerValue"in n}function Zo(n){return!!n&&"arrayValue"in n}function yl(n){return!!n&&"nullValue"in n}function vl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Er(n){return!!n&&"mapValue"in n}function Dm(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[uh])===null||t===void 0?void 0:t.stringValue)===hh}function gs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return un(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=gs(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=gs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Vm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Om}/**
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
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Er(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=gs(t)}setAll(e){let t=Ee.emptyPath(),s={},r=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,s,r),s={},r=[],t=c.popLast()}a?s[c.lastSegment()]=gs(a):r.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Er(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ct(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Er(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){un(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new qe(gs(this.value))}}function dh(n){const e=[];return un(n.fields,(t,s)=>{const r=new Ee([t]);if(Er(s)){const i=dh(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)}),new Ye(e)}/**
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
 */class Pe{constructor(e,t,s,r,i,a,c){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Pe(e,0,H.min(),H.min(),H.min(),qe.empty(),0)}static newFoundDocument(e,t,s,r){return new Pe(e,1,t,H.min(),s,r,0)}static newNoDocument(e,t){return new Pe(e,2,t,H.min(),H.min(),qe.empty(),0)}static newUnknownDocument(e,t){return new Pe(e,3,t,H.min(),H.min(),qe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vr{constructor(e,t){this.position=e,this.inclusive=t}}function wl(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],a=n.position[r];if(i.field.isKeyField()?s=q.comparator(q.fromName(a.referenceValue),t.key):s=Mn(a,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function El(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ct(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class xr{constructor(e,t="asc"){this.field=e,this.dir=t}}function xm(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class fh{}class pe extends fh{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Lm(e,t,s):t==="array-contains"?new jm(e,s):t==="in"?new qm(e,s):t==="not-in"?new $m(e,s):t==="array-contains-any"?new Wm(e,s):new pe(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Um(e,s):new Bm(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Mn(t,this.value)):t!==null&&Wt(this.value)===Wt(t)&&this.matchesComparison(Mn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class lt extends fh{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new lt(e,t)}matches(e){return ph(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function ph(n){return n.op==="and"}function gh(n){return Fm(n)&&ph(n)}function Fm(n){for(const e of n.filters)if(e instanceof lt)return!1;return!0}function To(n){if(n instanceof pe)return n.field.canonicalString()+n.op.toString()+kn(n.value);if(gh(n))return n.filters.map(e=>To(e)).join(",");{const e=n.filters.map(t=>To(t)).join(",");return`${n.op}(${e})`}}function mh(n,e){return n instanceof pe?function(s,r){return r instanceof pe&&s.op===r.op&&s.field.isEqual(r.field)&&ct(s.value,r.value)}(n,e):n instanceof lt?function(s,r){return r instanceof lt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,a,c)=>i&&mh(a,r.filters[c]),!0):!1}(n,e):void $(19439)}function _h(n){return n instanceof pe?function(t){return`${t.field.canonicalString()} ${t.op} ${kn(t.value)}`}(n):n instanceof lt?function(t){return t.op.toString()+" {"+t.getFilters().map(_h).join(" ,")+"}"}(n):"Filter"}class Lm extends pe{constructor(e,t,s){super(e,t,s),this.key=q.fromName(s.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class Um extends pe{constructor(e,t){super(e,"in",t),this.keys=yh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Bm extends pe{constructor(e,t){super(e,"not-in",t),this.keys=yh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function yh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>q.fromName(s.referenceValue))}class jm extends pe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Zo(t)&&bs(t.arrayValue,this.value)}}class qm extends pe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&bs(this.value.arrayValue,t)}}class $m extends pe{constructor(e,t){super(e,"not-in",t)}matches(e){if(bs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!bs(this.value.arrayValue,t)}}class Wm extends pe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Zo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>bs(this.value.arrayValue,s))}}/**
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
 */class Hm{constructor(e,t=null,s=[],r=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function Tl(n,e=null,t=[],s=[],r=null,i=null,a=null){return new Hm(n,e,t,s,r,i,a)}function ea(n){const e=K(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>To(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),ti(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>kn(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>kn(s)).join(",")),e.Pe=t}return e.Pe}function ta(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!xm(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!mh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!El(n.startAt,e.startAt)&&El(n.endAt,e.endAt)}function Io(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class si{constructor(e,t=null,s=[],r=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function zm(n,e,t,s,r,i,a,c){return new si(n,e,t,s,r,i,a,c)}function na(n){return new si(n)}function Il(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gm(n){return n.collectionGroup!==null}function ms(n){const e=K(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ge(Ee.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new xr(i,s))}),t.has(Ee.keyField().canonicalString())||e.Te.push(new xr(Ee.keyField(),s))}return e.Te}function nt(n){const e=K(n);return e.Ie||(e.Ie=Km(e,ms(n))),e.Ie}function Km(n,e){if(n.limitType==="F")return Tl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new xr(r.field,i)});const t=n.endAt?new Vr(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Vr(n.startAt.position,n.startAt.inclusive):null;return Tl(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Ao(n,e,t){return new si(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ri(n,e){return ta(nt(n),nt(e))&&n.limitType===e.limitType}function vh(n){return`${ea(nt(n))}|lt:${n.limitType}`}function wn(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>_h(r)).join(", ")}]`),ti(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>kn(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>kn(r)).join(",")),`Target(${s})`}(nt(n))}; limitType=${n.limitType})`}function ii(n,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):q.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,e)&&function(s,r){for(const i of ms(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(a,c,u){const h=wl(a,c,u);return a.inclusive?h<=0:h<0}(s.startAt,ms(s),r)||s.endAt&&!function(a,c,u){const h=wl(a,c,u);return a.inclusive?h>=0:h>0}(s.endAt,ms(s),r))}(n,e)}function Qm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function wh(n){return(e,t)=>{let s=!1;for(const r of ms(n)){const i=Ym(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Ym(n,e,t){const s=n.field.isKeyField()?q.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),h=c.data.field(i);return u!==null&&h!==null?Mn(u,h):$(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return $(19790,{direction:n.dir})}}/**
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
 */class hn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){un(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return rh(this.inner)}size(){return this.innerSize}}/**
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
 */const Xm=new le(q.comparator);function Et(){return Xm}const Eh=new le(q.comparator);function hs(...n){let e=Eh;for(const t of n)e=e.insert(t.key,t);return e}function Th(n){let e=Eh;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Zt(){return _s()}function Ih(){return _s()}function _s(){return new hn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Jm=new le(q.comparator),Zm=new ge(q.comparator);function J(...n){let e=Zm;for(const t of n)e=e.add(t);return e}const e_=new ge(Q);function t_(){return e_}/**
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
 */function sa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kr(e)?"-0":e}}function Ah(n){return{integerValue:""+n}}function n_(n,e){return Cm(e)?Ah(e):sa(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class oi{constructor(){this._=void 0}}function s_(n,e,t){return n instanceof Fr?function(r,i){const a={fields:{[ah]:{stringValue:oh},[lh]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Jo(i)&&(i=ni(i)),i&&(a.fields[ch]=i),{mapValue:a}}(t,e):n instanceof Rs?bh(n,e):n instanceof Cs?Rh(n,e):function(r,i){const a=Sh(r,i),c=Al(a)+Al(r.Ee);return Eo(a)&&Eo(r.Ee)?Ah(c):sa(r.serializer,c)}(n,e)}function r_(n,e,t){return n instanceof Rs?bh(n,e):n instanceof Cs?Rh(n,e):t}function Sh(n,e){return n instanceof Lr?function(s){return Eo(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Fr extends oi{}class Rs extends oi{constructor(e){super(),this.elements=e}}function bh(n,e){const t=Ch(e);for(const s of n.elements)t.some(r=>ct(r,s))||t.push(s);return{arrayValue:{values:t}}}class Cs extends oi{constructor(e){super(),this.elements=e}}function Rh(n,e){let t=Ch(e);for(const s of n.elements)t=t.filter(r=>!ct(r,s));return{arrayValue:{values:t}}}class Lr extends oi{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Al(n){return he(n.integerValue||n.doubleValue)}function Ch(n){return Zo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function i_(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof Rs&&r instanceof Rs||s instanceof Cs&&r instanceof Cs?Nn(s.elements,r.elements,ct):s instanceof Lr&&r instanceof Lr?ct(s.Ee,r.Ee):s instanceof Fr&&r instanceof Fr}(n.transform,e.transform)}class o_{constructor(e,t){this.version=e,this.transformResults=t}}class yt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new yt}static exists(e){return new yt(void 0,e)}static updateTime(e){return new yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ai{}function Ph(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Mh(n.key,yt.none()):new xs(n.key,n.data,yt.none());{const t=n.data,s=qe.empty();let r=new ge(Ee.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new dn(n.key,s,new Ye(r.toArray()),yt.none())}}function a_(n,e,t){n instanceof xs?function(r,i,a){const c=r.value.clone(),u=bl(r.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof dn?function(r,i,a){if(!Tr(r.precondition,i))return void i.convertToUnknownDocument(a.version);const c=bl(r.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Nh(r)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ys(n,e,t,s){return n instanceof xs?function(i,a,c,u){if(!Tr(i.precondition,a))return c;const h=i.value.clone(),f=Rl(i.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,s):n instanceof dn?function(i,a,c,u){if(!Tr(i.precondition,a))return c;const h=Rl(i.fieldTransforms,u,a),f=a.data;return f.setAll(Nh(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,s):function(i,a,c){return Tr(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function c_(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=Sh(s.transform,r||null);i!=null&&(t===null&&(t=qe.empty()),t.set(s.field,i))}return t||null}function Sl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Nn(s,r,(i,a)=>i_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class xs extends ai{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class dn extends ai{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Nh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function bl(n,e,t){const s=new Map;ne(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let r=0;r<t.length;r++){const i=n[r],a=i.transform,c=e.data.field(i.field);s.set(i.field,r_(a,c,t[r]))}return s}function Rl(n,e,t){const s=new Map;for(const r of n){const i=r.transform,a=t.data.field(r.field);s.set(r.field,s_(i,a,e))}return s}class Mh extends ai{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class l_ extends ai{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class u_{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&a_(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ys(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ys(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Ih();return this.mutations.forEach(r=>{const i=e.get(r.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(r.key)?null:c;const u=Ph(a,c);u!==null&&s.set(r.key,u),a.isValidDocument()||a.convertToNoDocument(H.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),J())}isEqual(e){return this.batchId===e.batchId&&Nn(this.mutations,e.mutations,(t,s)=>Sl(t,s))&&Nn(this.baseMutations,e.baseMutations,(t,s)=>Sl(t,s))}}class ra{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){ne(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let r=function(){return Jm}();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new ra(e,t,s,r)}}/**
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
 */class h_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class d_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var de,Z;function f_(n){switch(n){case M.OK:return $(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return $(15467,{code:n})}}function kh(n){if(n===void 0)return wt("GRPC error has no .code"),M.UNKNOWN;switch(n){case de.OK:return M.OK;case de.CANCELLED:return M.CANCELLED;case de.UNKNOWN:return M.UNKNOWN;case de.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case de.INTERNAL:return M.INTERNAL;case de.UNAVAILABLE:return M.UNAVAILABLE;case de.UNAUTHENTICATED:return M.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case de.NOT_FOUND:return M.NOT_FOUND;case de.ALREADY_EXISTS:return M.ALREADY_EXISTS;case de.PERMISSION_DENIED:return M.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case de.ABORTED:return M.ABORTED;case de.OUT_OF_RANGE:return M.OUT_OF_RANGE;case de.UNIMPLEMENTED:return M.UNIMPLEMENTED;case de.DATA_LOSS:return M.DATA_LOSS;default:return $(39323,{code:n})}}(Z=de||(de={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const p_=new Ft([4294967295,4294967295],0);function Cl(n){const e=th().encode(n),t=new Gu;return t.update(e),new Uint8Array(t.digest())}function Pl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ft([t,s],0),new Ft([r,i],0)]}class ia{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ds(`Invalid padding: ${t}`);if(s<0)throw new ds(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ds(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ds(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ft.fromNumber(this.fe)}pe(e,t,s){let r=e.add(t.multiply(Ft.fromNumber(s)));return r.compare(p_)===1&&(r=new Ft([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Cl(e),[s,r]=Pl(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(s,r,i);if(!this.ye(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ia(i,r,t);return s.forEach(c=>a.insert(c)),a}insert(e){if(this.fe===0)return;const t=Cl(e),[s,r]=Pl(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(s,r,i);this.we(a)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ci{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Fs.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ci(H.min(),r,new le(Q),Et(),J())}}class Fs{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Fs(s,t,J(),J(),J())}}/**
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
 */class Ir{constructor(e,t,s,r){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=r}}class Oh{constructor(e,t){this.targetId=e,this.De=t}}class Dh{constructor(e,t,s=Te.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Nl{constructor(){this.ve=0,this.Ce=Ml(),this.Fe=Te.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=J(),t=J(),s=J();return this.Ce.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:$(38017,{changeType:i})}}),new Fs(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=Ml()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ne(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class g_{constructor(e){this.We=e,this.Ge=new Map,this.ze=Et(),this.je=hr(),this.Je=hr(),this.He=new le(Q)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:$(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((s,r)=>{this.nt(r)&&t(r)})}it(e){const t=e.targetId,s=e.De.count,r=this.st(t);if(r){const i=r.target;if(Io(i))if(s===0){const a=new q(i.path);this.Xe(t,a,Pe.newNoDocument(a,H.min()))}else ne(s===1,20013,{expectedCount:s});else{const a=this.ot(t);if(a!==s){const c=this._t(e),u=c?this.ut(c,e,a):1;if(u!==0){this.rt(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let a,c;try{a=$t(s).toUint8Array()}catch(u){if(u instanceof ih)return Bt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new ia(a,r,i)}catch(u){return Bt(u instanceof ds?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.fe===0?null:c}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),r++)}),r}Pt(e){const t=new Map;this.Ge.forEach((i,a)=>{const c=this.st(a);if(c){if(i.current&&Io(c.target)){const u=new q(c.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,Pe.newNoDocument(u,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}});let s=J();this.Je.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(s=s.add(i))}),this.ze.forEach((i,a)=>a.setReadTime(e));const r=new ci(e,t,this.He,this.ze,s);return this.ze=Et(),this.je=hr(),this.Je=hr(),this.He=new le(Q),r}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const r=this.tt(e);this.It(e,t)?r.qe(t,1):r.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Nl,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new ge(Q),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new ge(Q),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Nl),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function hr(){return new le(q.comparator)}function Ml(){return new le(q.comparator)}const m_={asc:"ASCENDING",desc:"DESCENDING"},__={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},y_={and:"AND",or:"OR"};class v_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function So(n,e){return n.useProto3Json||ti(e)?e:{value:e}}function Ur(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function w_(n,e){return Ur(n,e.toTimestamp())}function st(n){return ne(!!n,49232),H.fromTimestamp(function(t){const s=qt(t);return new ae(s.seconds,s.nanos)}(n))}function oa(n,e){return bo(n,e).canonicalString()}function bo(n,e){const t=function(r){return new ce(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function xh(n){const e=ce.fromString(n);return ne(jh(e),10190,{key:e.toString()}),e}function Ro(n,e){return oa(n.databaseId,e.path)}function Xi(n,e){const t=xh(e);if(t.get(1)!==n.databaseId.projectId)throw new j(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(Lh(t))}function Fh(n,e){return oa(n.databaseId,e)}function E_(n){const e=xh(n);return e.length===4?ce.emptyPath():Lh(e)}function Co(n){return new ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Lh(n){return ne(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function kl(n,e,t){return{name:Ro(n,e),fields:t.value.mapValue.fields}}function T_(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:$(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(ne(f===void 0||typeof f=="string",58123),Te.fromBase64String(f||"")):(ne(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Te.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?M.UNKNOWN:kh(h.code);return new j(f,h.message||"")}(a);t=new Dh(s,r,i,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Xi(n,s.document.name),i=st(s.document.updateTime),a=s.document.createTime?st(s.document.createTime):H.min(),c=new qe({mapValue:{fields:s.document.fields}}),u=Pe.newFoundDocument(r,i,a,c),h=s.targetIds||[],f=s.removedTargetIds||[];t=new Ir(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Xi(n,s.document),i=s.readTime?st(s.readTime):H.min(),a=Pe.newNoDocument(r,i),c=s.removedTargetIds||[];t=new Ir([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Xi(n,s.document),i=s.removedTargetIds||[];t=new Ir([],i,r,null)}else{if(!("filter"in e))return $(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new d_(r,i),c=s.targetId;t=new Oh(c,a)}}return t}function I_(n,e){let t;if(e instanceof xs)t={update:kl(n,e.key,e.value)};else if(e instanceof Mh)t={delete:Ro(n,e.key)};else if(e instanceof dn)t={update:kl(n,e.key,e.data),updateMask:k_(e.fieldMask)};else{if(!(e instanceof l_))return $(16599,{Rt:e.type});t={verify:Ro(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,a){const c=a.transform;if(c instanceof Fr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Rs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Cs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Lr)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw $(20930,{transform:a.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:w_(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$(27497)}(n,e.precondition)),t}function A_(n,e){return n&&n.length>0?(ne(e!==void 0,14353),n.map(t=>function(r,i){let a=r.updateTime?st(r.updateTime):st(i);return a.isEqual(H.min())&&(a=st(i)),new o_(a,r.transformResults||[])}(t,e))):[]}function S_(n,e){return{documents:[Fh(n,e.path)]}}function b_(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Fh(n,r);const i=function(h){if(h.length!==0)return Bh(lt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:En(_.field),direction:P_(_.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=So(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:t,parent:r}}function R_(n){let e=E_(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){ne(s===1,65062);const f=t.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(g){const _=Uh(g);return _ instanceof lt&&gh(_)?_.getFilters():[_]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(_=>function(w){return new xr(Tn(w.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(g){let _;return _=typeof g=="object"?g.value:g,ti(_)?null:_}(t.limit));let u=null;t.startAt&&(u=function(g){const _=!!g.before,I=g.values||[];return new Vr(I,_)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const _=!g.before,I=g.values||[];return new Vr(I,_)}(t.endAt)),zm(e,r,a,i,c,"F",u,h)}function C_(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Uh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Tn(t.unaryFilter.field);return pe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Tn(t.unaryFilter.field);return pe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Tn(t.unaryFilter.field);return pe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Tn(t.unaryFilter.field);return pe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return $(61313);default:return $(60726)}}(n):n.fieldFilter!==void 0?function(t){return pe.create(Tn(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return $(58110);default:return $(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return lt.create(t.compositeFilter.filters.map(s=>Uh(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return $(1026)}}(t.compositeFilter.op))}(n):$(30097,{filter:n})}function P_(n){return m_[n]}function N_(n){return __[n]}function M_(n){return y_[n]}function En(n){return{fieldPath:n.canonicalString()}}function Tn(n){return Ee.fromServerFormat(n.fieldPath)}function Bh(n){return n instanceof pe?function(t){if(t.op==="=="){if(vl(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NAN"}};if(yl(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vl(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NAN"}};if(yl(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:En(t.field),op:N_(t.op),value:t.value}}}(n):n instanceof lt?function(t){const s=t.getFilters().map(r=>Bh(r));return s.length===1?s[0]:{compositeFilter:{op:M_(t.op),filters:s}}}(n):$(54877,{filter:n})}function k_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function jh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ot{constructor(e,t,s,r,i=H.min(),a=H.min(),c=Te.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Ot(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ot(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class O_{constructor(e){this.gt=e}}function D_(n){const e=R_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ao(e,e.limit,"L"):e}/**
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
 */class V_{constructor(){this.Dn=new x_}addToCollectionParentIndex(e,t){return this.Dn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(jt.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(jt.min())}updateCollectionGroup(e,t,s){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class x_{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new ge(ce.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ge(ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Ol={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},qh=41943040;class De{static withCacheSize(e){return new De(e,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */De.DEFAULT_COLLECTION_PERCENTILE=10,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,De.DEFAULT=new De(qh,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),De.DISABLED=new De(-1,0,0);/**
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
 */class On{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new On(0)}static ur(){return new On(-1)}}/**
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
 */const Dl="LruGarbageCollector",F_=1048576;function Vl([n,e],[t,s]){const r=Q(n,t);return r===0?Q(e,s):r}class L_{constructor(e){this.Tr=e,this.buffer=new ge(Vl),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Vl(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class U_{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){x(Dl,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){jn(t)?x(Dl,"Ignoring IndexedDB error during garbage collection: ",t):await Bn(t)}await this.Rr(3e5)})}}class B_{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return N.resolve(ei.ue);const s=new L_(t);return this.Vr.forEachTarget(e,r=>s.Er(r.sequenceNumber)).next(()=>this.Vr.gr(e,r=>s.Er(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Ol)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ol):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,r,i,a,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),r=this.params.maximumSequenceNumbersToCollect):r=g,a=Date.now(),this.nthSequenceNumber(e,r))).next(g=>(s=g,c=Date.now(),this.removeTargets(e,s,t))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,s))).next(g=>(h=Date.now(),vn()<=X.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${r} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${g} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:g})))}}function j_(n,e){return new B_(n,e)}/**
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
 */class q_{constructor(){this.changes=new hn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?N.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class W_{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&ys(s.mutation,r,Ye.empty(),ae.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,J()).next(()=>s))}getLocalViewOfDocuments(e,t,s=J()){const r=Zt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let a=hs();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const s=Zt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,J()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,s,r){let i=Et();const a=_s(),c=function(){return _s()}();return t.forEach((u,h)=>{const f=s.get(h.key);r.has(h.key)&&(f===void 0||f.mutation instanceof dn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),ys(f.mutation,h,f.mutation.getFieldMask(),ae.now())):a.set(h.key,Ye.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var g;return c.set(h,new $_(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,t){const s=_s();let r=new le((a,c)=>a-c),i=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=s.get(u)||Ye.empty();f=c.applyToLocalView(h,f),s.set(u,f);const g=(r.get(c.batchId)||J()).add(u);r=r.insert(c.batchId,g)})}).next(()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,g=Ih();f.forEach(_=>{if(!i.has(_)){const I=Ph(t.get(_),s.get(_));I!==null&&g.set(_,I),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return N.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):N.resolve(Zt());let c=Is,u=i;return a.next(h=>N.forEach(h,(f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,J())).next(f=>({batchId:c,changes:Th(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(s=>{let r=hs();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let a=hs();return this.indexManager.getCollectionParents(e,i).next(c=>N.forEach(c,u=>{const h=function(g,_){return new si(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next(f=>{f.forEach((g,_)=>{a=a.insert(g,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r))).next(a=>{i.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Pe.newInvalidDocument(f)))});let c=hs();return a.forEach((u,h)=>{const f=i.get(u);f!==void 0&&ys(f.mutation,h,Ye.empty(),ae.now()),ii(t,h)&&(c=c.insert(u,h))}),c})}}/**
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
 */class H_{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return N.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(r){return{id:r.id,version:r.version,createTime:st(r.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(r){return{name:r.name,query:D_(r.bundledQuery),readTime:st(r.readTime)}}(t)),N.resolve()}}/**
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
 */class z_{constructor(){this.overlays=new le(q.comparator),this.kr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Zt();return N.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.wt(e,t,i)}),N.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.kr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(s)),N.resolve()}getOverlaysForCollection(e,t,s){const r=Zt(),i=t.length+1,a=new q(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return N.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new le((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>s){let f=i.get(h.largestBatchId);f===null&&(f=Zt(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Zt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=r)););return N.resolve(c)}wt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.kr.get(r.largestBatchId).delete(s.key);this.kr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new h_(t,s));let i=this.kr.get(t);i===void 0&&(i=J(),this.kr.set(t,i)),this.kr.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class G_{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class aa{constructor(){this.qr=new ge(me.Qr),this.$r=new ge(me.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new me(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new me(e,t))}Gr(e,t){e.forEach(s=>this.removeReference(s,t))}zr(e){const t=new q(new ce([])),s=new me(t,e),r=new me(t,e+1),i=[];return this.$r.forEachInRange([s,r],a=>{this.Wr(a),i.push(a.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new q(new ce([])),s=new me(t,e),r=new me(t,e+1);let i=J();return this.$r.forEachInRange([s,r],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new me(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class me{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return q.comparator(e.key,t.key)||Q(e.Hr,t.Hr)}static Ur(e,t){return Q(e.Hr,t.Hr)||q.comparator(e.key,t.key)}}/**
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
 */class K_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new ge(me.Qr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new u_(i,t,s,r);this.mutationQueue.push(a);for(const c of r)this.Yr=this.Yr.add(new me(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),i=r<0?0:r;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?Xo:this.er-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new me(t,0),r=new me(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([s,r],a=>{const c=this.Zr(a.Hr);i.push(c)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ge(Q);return t.forEach(r=>{const i=new me(r,0),a=new me(r,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],c=>{s=s.add(c.Hr)})}),N.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;q.isDocumentKey(i)||(i=i.child(""));const a=new me(new q(i),0);let c=new ge(Q);return this.Yr.forEachWhile(u=>{const h=u.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(c=c.add(u.Hr)),!0)},a),N.resolve(this.ei(c))}ei(e){const t=[];return e.forEach(s=>{const r=this.Zr(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){ne(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return N.forEach(t.mutations,r=>{const i=new me(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Yr=s})}rr(e){}containsKey(e,t){const s=new me(t,0),r=this.Yr.firstAfterOrEqual(s);return N.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Q_{constructor(e){this.ni=e,this.docs=function(){return new le(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,a=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return N.resolve(s?s.document.mutableCopy():Pe.newInvalidDocument(t))}getEntries(e,t){let s=Et();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Pe.newInvalidDocument(r))}),N.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=Et();const a=t.path,c=new q(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Am(Im(f),s)<=0||(r.has(f.key)||ii(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,t,s,r){$(9500)}ri(e,t){return N.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Y_(this)}getSize(e){return N.resolve(this.size)}}class Y_ extends q_{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Or.addEntry(e,r)):this.Or.removeEntry(s)}),N.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class X_{constructor(e){this.persistence=e,this.ii=new hn(t=>ea(t),ta),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.si=0,this.oi=new aa,this.targetCount=0,this._i=On.ar()}forEachTarget(e,t){return this.ii.forEach((s,r)=>t(r)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),N.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new On(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.hr(t),N.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.ii.forEach((a,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)}),N.waitFor(i).next(()=>r)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return N.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),N.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(a=>{i.push(r.markPotentiallyOrphaned(e,a))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return N.resolve(s)}containsKey(e,t){return N.resolve(this.oi.containsKey(t))}}/**
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
 */class $h{constructor(e,t){this.ai={},this.overlays={},this.ui=new ei(0),this.ci=!1,this.ci=!0,this.li=new G_,this.referenceDelegate=e(this),this.hi=new X_(this),this.indexManager=new V_,this.remoteDocumentCache=function(r){return new Q_(r)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new O_(t),this.Ti=new H_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new z_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new K_(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){x("MemoryPersistence","Starting transaction:",e);const r=new J_(this.ui.next());return this.referenceDelegate.Ii(),s(r).next(i=>this.referenceDelegate.di(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ei(e,t){return N.or(Object.values(this.ai).map(s=>()=>s.containsKey(e,t)))}}class J_ extends bm{constructor(e){super(),this.currentSequenceNumber=e}}class ca{constructor(e){this.persistence=e,this.Ai=new aa,this.Ri=null}static Vi(e){return new ca(e)}get mi(){if(this.Ri)return this.Ri;throw $(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),N.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),N.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(r=>this.mi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.mi.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.mi,s=>{const r=q.fromPath(s);return this.fi(e,r).next(i=>{i||t.removeEntry(r,H.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return N.or([()=>N.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Br{constructor(e,t){this.persistence=e,this.gi=new hn(s=>Pm(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=j_(this,t)}static Vi(e,t){return new Br(e,t)}Ii(){}di(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}yr(e){let t=0;return this.gr(e,s=>{t++}).next(()=>t)}gr(e,t){return N.forEach(this.gi,(s,r)=>this.Sr(e,s,r).next(i=>i?N.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ri(e,a=>this.Sr(e,a,t).next(c=>{c||(s++,i.removeEntry(a,H.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),N.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),N.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=wr(e.data.value)),t}Sr(e,t,s){return N.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.gi.get(t);return N.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class la{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=r}static Es(e,t){let s=J(),r=J();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new la(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Z_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ey{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Hp()?8:Rm(Ne())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.ps(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ys(e,t,r,s).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Z_;return this.ws(e,t,a).next(c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)})}).next(()=>i.result)}Ss(e,t,s,r){return s.documentReadCount<this.Vs?(vn()<=X.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",wn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),N.resolve()):(vn()<=X.DEBUG&&x("QueryEngine","Query:",wn(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.fs*r?(vn()<=X.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",wn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nt(t))):N.resolve())}ps(e,t){if(Il(t))return N.resolve(null);let s=nt(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Ao(t,null,"F"),s=nt(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const a=J(...i);return this.gs.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,s).next(u=>{const h=this.bs(t,c);return this.Ds(t,h,a,u.readTime)?this.ps(e,Ao(t,null,"F")):this.vs(e,h,t,u)}))})))}ys(e,t,s,r){return Il(t)||r.isEqual(H.min())?N.resolve(null):this.gs.getDocuments(e,s).next(i=>{const a=this.bs(t,i);return this.Ds(t,a,s,r)?N.resolve(null):(vn()<=X.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),wn(t)),this.vs(e,a,t,Tm(r,Is)).next(c=>c))})}bs(e,t){let s=new ge(wh(e));return t.forEach((r,i)=>{ii(e,i)&&(s=s.add(i))}),s}Ds(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ws(e,t,s){return vn()<=X.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",wn(t)),this.gs.getDocumentsMatchingQuery(e,t,jt.min(),s)}vs(e,t,s,r){return this.gs.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const ua="LocalStore",ty=3e8;class ny{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.Fs=new le(Q),this.Ms=new hn(i=>ea(i),ta),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new W_(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function sy(n,e,t,s){return new ny(n,e,t,s)}async function Wh(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const a=[],c=[];let u=J();for(const h of r){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(s,u).next(h=>({Bs:h,removedBatchIds:a,addedBatchIds:c}))})})}function ry(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const g=h.batch,_=g.keys();let I=N.resolve();return _.forEach(w=>{I=I.next(()=>f.getEntry(u,w)).next(P=>{const R=h.docVersions.get(w);ne(R!==null,48541),P.version.compareTo(R)<0&&(g.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),I.next(()=>c.mutationQueue.removeMutationBatch(u,g))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(c){let u=J();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function Hh(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function iy(n,e){const t=K(n),s=e.snapshotVersion;let r=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});r=t.Fs;const c=[];e.targetChanges.forEach((f,g)=>{const _=r.get(g);if(!_)return;c.push(t.hi.removeMatchingKeys(i,f.removedDocuments,g).next(()=>t.hi.addMatchingKeys(i,f.addedDocuments,g)));let I=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?I=I.withResumeToken(Te.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,s)),r=r.insert(g,I),function(P,R,B){return P.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=ty?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(_,I,f)&&c.push(t.hi.updateTargetData(i,I))});let u=Et(),h=J();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(oy(i,a,e.documentUpdates).next(f=>{u=f.Ls,h=f.ks})),!s.isEqual(H.min())){const f=t.hi.getLastRemoteSnapshotVersion(i).next(g=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,s));c.push(f)}return N.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.Fs=r,i))}function oy(n,e,t){let s=J(),r=J();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let a=Et();return t.forEach((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(c)),u.isNoDocument()&&u.version.isEqual(H.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):x(ua,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Ls:a,ks:r}})}function ay(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Xo),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function cy(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.hi.getTargetData(s,e).next(i=>i?(r=i,N.resolve(r)):t.hi.allocateTargetId(s).next(a=>(r=new Ot(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.Fs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s})}async function Po(n,e,t){const s=K(n),r=s.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,a=>s.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!jn(a))throw a;x(ua,`Failed to update sequence numbers for target ${e}: ${a}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(r.target)}function xl(n,e,t){const s=K(n);let r=H.min(),i=J();return s.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const g=K(u),_=g.Ms.get(f);return _!==void 0?N.resolve(g.Fs.get(_)):g.hi.getTargetData(h,f)}(s,a,nt(e)).next(c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>s.Cs.getDocumentsMatchingQuery(a,e,t?r:H.min(),t?i:J())).next(c=>(ly(s,Qm(e),c),{documents:c,qs:i})))}function ly(n,e,t){let s=n.xs.get(e)||H.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.xs.set(e,s)}class Fl{constructor(){this.activeTargetIds=t_()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uy{constructor(){this.Fo=new Fl,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Fl,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class hy{xo(e){}shutdown(){}}/**
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
 */const Ll="ConnectivityMonitor";class Ul{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){x(Ll,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){x(Ll,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let dr=null;function No(){return dr===null?dr=function(){return 268435456+Math.round(2147483648*Math.random())}():dr++,"0x"+dr.toString(16)}/**
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
 */const Ji="RestConnection",dy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class fy{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.Ko=this.databaseId.database===Or?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,i){const a=No(),c=this.Go(e,t.toUriEncodedString());x(Ji,`Sending RPC '${e}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,r,i);const{host:h}=new URL(c),f=Fn(h);return this.jo(e,c,u,s,f).then(g=>(x(Ji,`Received RPC '${e}' ${a}: `,g),g),g=>{throw Bt(Ji,`RPC '${e}' ${a} failed with error: `,g,"url: ",c,"request:",s),g})}Jo(e,t,s,r,i,a){return this.Wo(e,t,s,r,i)}zo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Un}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Go(e,t){const s=dy[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
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
 */class py{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Re="WebChannelConnection";class gy extends fy{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,r,i){const a=No();return new Promise((c,u)=>{const h=new Ku;h.setWithCredentials(!0),h.listenOnce(Qu.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case vr.NO_ERROR:const g=h.getResponseJson();x(Re,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),c(g);break;case vr.TIMEOUT:x(Re,`RPC '${e}' ${a} timed out`),u(new j(M.DEADLINE_EXCEEDED,"Request time out"));break;case vr.HTTP_ERROR:const _=h.getStatus();if(x(Re,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const w=I?.error;if(w&&w.status&&w.message){const P=function(B){const F=B.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(F)>=0?F:M.UNKNOWN}(w.status);u(new j(P,w.message))}else u(new j(M.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new j(M.UNAVAILABLE,"Connection failed."));break;default:$(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{x(Re,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(r);x(Re,`RPC '${e}' ${a} sending request:`,r),h.send(t,"POST",f,s,15)})}P_(e,t,s){const r=No(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Ju(),c=Xu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,s),u.encodeInitMessageHeaders=!0;const f=i.join("");x(Re,`Creating RPC '${e}' stream ${r}: ${f}`,u);const g=a.createWebChannel(f,u);this.T_(g);let _=!1,I=!1;const w=new py({Ho:R=>{I?x(Re,`Not sending because RPC '${e}' stream ${r} is closed:`,R):(_||(x(Re,`Opening RPC '${e}' stream ${r} transport.`),g.open(),_=!0),x(Re,`RPC '${e}' stream ${r} sending:`,R),g.send(R))},Yo:()=>g.close()}),P=(R,B,F)=>{R.listen(B,V=>{try{F(V)}catch(L){setTimeout(()=>{throw L},0)}})};return P(g,us.EventType.OPEN,()=>{I||(x(Re,`RPC '${e}' stream ${r} transport opened.`),w.s_())}),P(g,us.EventType.CLOSE,()=>{I||(I=!0,x(Re,`RPC '${e}' stream ${r} transport closed`),w.__(),this.I_(g))}),P(g,us.EventType.ERROR,R=>{I||(I=!0,Bt(Re,`RPC '${e}' stream ${r} transport errored. Name:`,R.name,"Message:",R.message),w.__(new j(M.UNAVAILABLE,"The operation could not be completed")))}),P(g,us.EventType.MESSAGE,R=>{var B;if(!I){const F=R.data[0];ne(!!F,16349);const V=F,L=V?.error||((B=V[0])===null||B===void 0?void 0:B.error);if(L){x(Re,`RPC '${e}' stream ${r} received error:`,L);const Y=L.status;let U=function(y){const T=de[y];if(T!==void 0)return kh(T)}(Y),E=L.message;U===void 0&&(U=M.INTERNAL,E="Unknown error status: "+Y+" with message "+L.message),I=!0,w.__(new j(U,E)),g.close()}else x(Re,`RPC '${e}' stream ${r} received:`,F),w.a_(F)}}),P(c,Yu.STAT_EVENT,R=>{R.stat===yo.PROXY?x(Re,`RPC '${e}' stream ${r} detected buffering proxy`):R.stat===yo.NOPROXY&&x(Re,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{w.o_()},0),w}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function Zi(){return typeof document<"u"?document:null}/**
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
 */function li(n){return new v_(n,!0)}/**
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
 */class zh{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=r,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),r=Math.max(0,t-s);r>0&&x("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,r,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Bl="PersistentStream";class Gh{constructor(e,t,s,r,i,a,c,u){this.Fi=e,this.w_=s,this.S_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new zh(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(wt(t.toString()),wt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.b_===t&&this.W_(s,r)},s=>{e(()=>{const r=new j(M.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(r)})})}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(r=>{s(()=>this.G_(r))}),this.stream.onMessage(r=>{s(()=>++this.C_==1?this.j_(r):this.onNext(r))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return x(Bl,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(x(Bl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class my extends Gh{constructor(e,t,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=T_(this.serializer,e),s=function(i){if(!("targetChange"in i))return H.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?st(a.readTime):H.min()}(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Co(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=Io(u)?{documents:S_(i,u)}:{query:b_(i,u).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Vh(i,a.resumeToken);const h=So(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(H.min())>0){c.readTime=Ur(i,a.snapshotVersion.toTimestamp());const h=So(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const s=C_(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Co(this.serializer),t.removeTarget=e,this.k_(t)}}class _y extends Gh{constructor(e,t,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=A_(e.writeResults,e.commitTime),s=st(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Co(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>I_(this.serializer,s))};this.k_(t)}}/**
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
 */class yy{}class vy extends yy{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new j(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,bo(t,s),r,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(M.UNKNOWN,i.toString())})}Jo(e,t,s,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Jo(e,bo(t,s),r,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(M.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class wy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(wt(t),this._a=!1):x("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const an="RemoteStore";class Ey{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(a=>{s.enqueueAndForget(async()=>{fn(this)&&(x(an,"Restarting streams for network reachability change."),await async function(u){const h=K(u);h.Ia.add(4),await Ls(h),h.Aa.set("Unknown"),h.Ia.delete(4),await ui(h)}(this))})}),this.Aa=new wy(s,r)}}async function ui(n){if(fn(n))for(const e of n.da)await e(!0)}async function Ls(n){for(const e of n.da)await e(!1)}function Kh(n,e){const t=K(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),pa(t)?fa(t):qn(t).x_()&&da(t,e))}function ha(n,e){const t=K(n),s=qn(t);t.Ta.delete(e),s.x_()&&Qh(t,e),t.Ta.size===0&&(s.x_()?s.B_():fn(t)&&t.Aa.set("Unknown"))}function da(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}qn(n).H_(e)}function Qh(n,e){n.Ra.$e(e),qn(n).Y_(e)}function fa(n){n.Ra=new g_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),qn(n).start(),n.Aa.aa()}function pa(n){return fn(n)&&!qn(n).M_()&&n.Ta.size>0}function fn(n){return K(n).Ia.size===0}function Yh(n){n.Ra=void 0}async function Ty(n){n.Aa.set("Online")}async function Iy(n){n.Ta.forEach((e,t)=>{da(n,e)})}async function Ay(n,e){Yh(n),pa(n)?(n.Aa.la(e),fa(n)):n.Aa.set("Unknown")}async function Sy(n,e,t){if(n.Aa.set("Online"),e instanceof Dh&&e.state===2&&e.cause)try{await async function(r,i){const a=i.cause;for(const c of i.targetIds)r.Ta.has(c)&&(await r.remoteSyncer.rejectListen(c,a),r.Ta.delete(c),r.Ra.removeTarget(c))}(n,e)}catch(s){x(an,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await jr(n,s)}else if(e instanceof Ir?n.Ra.Ye(e):e instanceof Oh?n.Ra.it(e):n.Ra.et(e),!t.isEqual(H.min()))try{const s=await Hh(n.localStore);t.compareTo(s)>=0&&await function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ta.get(h);f&&i.Ta.set(h,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,h)=>{const f=i.Ta.get(u);if(!f)return;i.Ta.set(u,f.withResumeToken(Te.EMPTY_BYTE_STRING,f.snapshotVersion)),Qh(i,u);const g=new Ot(f.target,u,h,f.sequenceNumber);da(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(s){x(an,"Failed to raise snapshot:",s),await jr(n,s)}}async function jr(n,e,t){if(!jn(e))throw e;n.Ia.add(1),await Ls(n),n.Aa.set("Offline"),t||(t=()=>Hh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x(an,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await ui(n)})}function Xh(n,e){return e().catch(t=>jr(n,t,e))}async function hi(n){const e=K(n),t=Ht(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Xo;for(;by(e);)try{const r=await ay(e.localStore,s);if(r===null){e.Pa.length===0&&t.B_();break}s=r.batchId,Ry(e,r)}catch(r){await jr(e,r)}Jh(e)&&Zh(e)}function by(n){return fn(n)&&n.Pa.length<10}function Ry(n,e){n.Pa.push(e);const t=Ht(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Jh(n){return fn(n)&&!Ht(n).M_()&&n.Pa.length>0}function Zh(n){Ht(n).start()}async function Cy(n){Ht(n).na()}async function Py(n){const e=Ht(n);for(const t of n.Pa)e.X_(t.mutations)}async function Ny(n,e,t){const s=n.Pa.shift(),r=ra.from(s,e,t);await Xh(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await hi(n)}async function My(n,e){e&&Ht(n).Z_&&await async function(s,r){if(function(a){return f_(a)&&a!==M.ABORTED}(r.code)){const i=s.Pa.shift();Ht(s).N_(),await Xh(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await hi(s)}}(n,e),Jh(n)&&Zh(n)}async function jl(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),x(an,"RemoteStore received new credentials");const s=fn(t);t.Ia.add(3),await Ls(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await ui(t)}async function ky(n,e){const t=K(n);e?(t.Ia.delete(2),await ui(t)):e||(t.Ia.add(2),await Ls(t),t.Aa.set("Unknown"))}function qn(n){return n.Va||(n.Va=function(t,s,r){const i=K(t);return i.ia(),new my(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:Ty.bind(null,n),e_:Iy.bind(null,n),n_:Ay.bind(null,n),J_:Sy.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),pa(n)?fa(n):n.Aa.set("Unknown")):(await n.Va.stop(),Yh(n))})),n.Va}function Ht(n){return n.ma||(n.ma=function(t,s,r){const i=K(t);return i.ia(),new _y(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Cy.bind(null,n),n_:My.bind(null,n),ea:Py.bind(null,n),ta:Ny.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await hi(n)):(await n.ma.stop(),n.Pa.length>0&&(x(an,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
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
 */class ga{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const a=Date.now()+s,c=new ga(e,t,a,r,i);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ma(n,e){if(wt("AsyncQueue",`${e}: ${n}`),jn(n))return new j(M.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class In{static emptySet(e){return new In(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||q.comparator(t.key,s.key):(t,s)=>q.comparator(t.key,s.key),this.keyedMap=hs(),this.sortedSet=new le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof In)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new In;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class ql{constructor(){this.fa=new le(q.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):$(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,s)=>{e.push(s)}),e}}class Dn{constructor(e,t,s,r,i,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,s,r,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Dn(e,t,In.emptySet(t),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ri(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Oy{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class Dy{constructor(){this.queries=$l(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const r=K(t),i=r.queries;r.queries=$l(),i.forEach((a,c)=>{for(const u of c.wa)u.onError(s)})})(this,new j(M.ABORTED,"Firestore shutting down"))}}function $l(){return new hn(n=>vh(n),ri)}async function Vy(n,e){const t=K(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Sa()&&e.ba()&&(s=2):(i=new Oy,s=e.ba()?0:1);try{switch(s){case 0:i.ya=await t.onListen(r,!0);break;case 1:i.ya=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const c=ma(a,`Initialization of query '${wn(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&_a(t)}async function xy(n,e){const t=K(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?r=e.ba()?0:1:!i.Sa()&&e.ba()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Fy(n,e){const t=K(n);let s=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(r)&&(s=!0);a.ya=r}}s&&_a(t)}function Ly(n,e,t){const s=K(n),r=s.queries.get(e);if(r)for(const i of r.wa)i.onError(t);s.queries.delete(e)}function _a(n){n.Da.forEach(e=>{e.next()})}var Mo,Wl;(Wl=Mo||(Mo={})).Fa="default",Wl.Cache="cache";class Uy{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Dn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Dn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Mo.Cache}}/**
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
 */class ed{constructor(e){this.key=e}}class td{constructor(e){this.key=e}}class By{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=J(),this.mutatedKeys=J(),this.Xa=wh(e),this.eu=new In(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new ql,r=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,c=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((f,g)=>{const _=r.get(f),I=ii(this.query,g)?g:null,w=!!_&&this.mutatedKeys.has(_.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let R=!1;_&&I?_.data.isEqual(I.data)?w!==P&&(s.track({type:3,doc:I}),R=!0):this.iu(_,I)||(s.track({type:2,doc:I}),R=!0,(u&&this.Xa(I,u)>0||h&&this.Xa(I,h)<0)&&(c=!0)):!_&&I?(s.track({type:0,doc:I}),R=!0):_&&!I&&(s.track({type:1,doc:_}),R=!0,(u||h)&&(c=!0)),R&&(I?(a=a.add(I),i=P?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),s.track({type:1,doc:f})}return{eu:a,ru:s,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort((f,g)=>function(I,w){const P=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $(20277,{At:R})}};return P(I)-P(w)}(f.type,g.type)||this.Xa(f.doc,g.doc)),this.su(s),r=r!=null&&r;const c=t&&!r?this.ou():[],u=this.Za.size===0&&this.current&&!r?1:0,h=u!==this.Ya;return this.Ya=u,a.length!==0||h?{snapshot:new Dn(this.query,e.eu,i,a,e.mutatedKeys,u===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ql,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=J(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});const t=[];return e.forEach(s=>{this.Za.has(s)||t.push(new td(s))}),this.Za.forEach(s=>{e.has(s)||t.push(new ed(s))}),t}uu(e){this.Ha=e.qs,this.Za=J();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Dn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ya="SyncEngine";class jy{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class qy{constructor(e){this.key=e,this.lu=!1}}class $y{constructor(e,t,s,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new hn(c=>vh(c),ri),this.Tu=new Map,this.Iu=new Set,this.du=new le(q.comparator),this.Eu=new Map,this.Au=new aa,this.Ru={},this.Vu=new Map,this.mu=On.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Wy(n,e,t=!0){const s=ad(n);let r;const i=s.Pu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.cu()):r=await nd(s,e,t,!0),r}async function Hy(n,e){const t=ad(n);await nd(t,e,!0,!1)}async function nd(n,e,t,s){const r=await cy(n.localStore,nt(e)),i=r.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return s&&(c=await zy(n,e,i,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&Kh(n.remoteStore,r),c}async function zy(n,e,t,s,r){n.gu=(g,_,I)=>async function(P,R,B,F){let V=R.view.nu(B);V.Ds&&(V=await xl(P.localStore,R.query,!1).then(({documents:E})=>R.view.nu(E,V)));const L=F&&F.targetChanges.get(R.targetId),Y=F&&F.targetMismatches.get(R.targetId)!=null,U=R.view.applyChanges(V,P.isPrimaryClient,L,Y);return zl(P,R.targetId,U._u),U.snapshot}(n,g,_,I);const i=await xl(n.localStore,e,!0),a=new By(e,i.qs),c=a.nu(i.documents),u=Fs.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),h=a.applyChanges(c,n.isPrimaryClient,u);zl(n,t,h._u);const f=new jy(e,t,a);return n.Pu.set(e,f),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function Gy(n,e,t){const s=K(n),r=s.Pu.get(e),i=s.Tu.get(r.targetId);if(i.length>1)return s.Tu.set(r.targetId,i.filter(a=>!ri(a,e))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Po(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&ha(s.remoteStore,r.targetId),ko(s,r.targetId)}).catch(Bn)):(ko(s,r.targetId),await Po(s.localStore,r.targetId,!0))}async function Ky(n,e){const t=K(n),s=t.Pu.get(e),r=t.Tu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),ha(t.remoteStore,s.targetId))}async function Qy(n,e,t){const s=nv(n);try{const r=await function(a,c){const u=K(a),h=ae.now(),f=c.reduce((I,w)=>I.add(w.key),J());let g,_;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let w=Et(),P=J();return u.Os.getEntries(I,f).next(R=>{w=R,w.forEach((B,F)=>{F.isValidDocument()||(P=P.add(B))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,w)).next(R=>{g=R;const B=[];for(const F of c){const V=c_(F,g.get(F.key).overlayedDocument);V!=null&&B.push(new dn(F.key,V,dh(V.value.mapValue),yt.exists(!0)))}return u.mutationQueue.addMutationBatch(I,h,B,c)}).next(R=>{_=R;const B=R.applyToLocalDocumentSet(g,P);return u.documentOverlayCache.saveOverlays(I,R.batchId,B)})}).then(()=>({batchId:_.batchId,changes:Th(g)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(a,c,u){let h=a.Ru[a.currentUser.toKey()];h||(h=new le(Q)),h=h.insert(c,u),a.Ru[a.currentUser.toKey()]=h}(s,r.batchId,t),await Us(s,r.changes),await hi(s.remoteStore)}catch(r){const i=ma(r,"Failed to persist write");t.reject(i)}}async function sd(n,e){const t=K(n);try{const s=await iy(t.localStore,e);e.targetChanges.forEach((r,i)=>{const a=t.Eu.get(i);a&&(ne(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.lu=!0:r.modifiedDocuments.size>0?ne(a.lu,14607):r.removedDocuments.size>0&&(ne(a.lu,42227),a.lu=!1))}),await Us(t,s,e)}catch(s){await Bn(s)}}function Hl(n,e,t){const s=K(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Pu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&r.push(c.snapshot)}),function(a,c){const u=K(a);u.onlineState=c;let h=!1;u.queries.forEach((f,g)=>{for(const _ of g.wa)_.va(c)&&(h=!0)}),h&&_a(u)}(s.eventManager,e),r.length&&s.hu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Yy(n,e,t){const s=K(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Eu.get(e),i=r&&r.key;if(i){let a=new le(q.comparator);a=a.insert(i,Pe.newNoDocument(i,H.min()));const c=J().add(i),u=new ci(H.min(),new Map,new le(Q),a,c);await sd(s,u),s.du=s.du.remove(i),s.Eu.delete(e),va(s)}else await Po(s.localStore,e,!1).then(()=>ko(s,e,t)).catch(Bn)}async function Xy(n,e){const t=K(n),s=e.batch.batchId;try{const r=await ry(t.localStore,e);id(t,s,null),rd(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Us(t,r)}catch(r){await Bn(r)}}async function Jy(n,e,t){const s=K(n);try{const r=await function(a,c){const u=K(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(g=>(ne(g!==null,37113),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(s.localStore,e);id(s,e,t),rd(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Us(s,r)}catch(r){await Bn(r)}}function rd(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function id(n,e,t){const s=K(n);let r=s.Ru[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.Ru[s.currentUser.toKey()]=r}}function ko(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Tu.get(e))n.Pu.delete(s),t&&n.hu.pu(s,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(s=>{n.Au.containsKey(s)||od(n,s)})}function od(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(ha(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),va(n))}function zl(n,e,t){for(const s of t)s instanceof ed?(n.Au.addReference(s.key,e),Zy(n,s)):s instanceof td?(x(ya,"Document no longer in limbo: "+s.key),n.Au.removeReference(s.key,e),n.Au.containsKey(s.key)||od(n,s.key)):$(19791,{yu:s})}function Zy(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Iu.has(s)||(x(ya,"New document in limbo: "+t),n.Iu.add(s),va(n))}function va(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new q(ce.fromString(e)),s=n.mu.next();n.Eu.set(s,new qy(t)),n.du=n.du.insert(t,s),Kh(n.remoteStore,new Ot(nt(na(t.path)),s,"TargetPurposeLimboResolution",ei.ue))}}async function Us(n,e,t){const s=K(n),r=[],i=[],a=[];s.Pu.isEmpty()||(s.Pu.forEach((c,u)=>{a.push(s.gu(u,e,t).then(h=>{var f;if((h||t)&&s.isPrimaryClient){const g=h?!h.fromCache:(f=t?.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;s.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){r.push(h);const g=la.Es(u.targetId,h);i.push(g)}}))}),await Promise.all(a),s.hu.J_(r),await async function(u,h){const f=K(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>N.forEach(h,_=>N.forEach(_.Is,I=>f.persistence.referenceDelegate.addReference(g,_.targetId,I)).next(()=>N.forEach(_.ds,I=>f.persistence.referenceDelegate.removeReference(g,_.targetId,I)))))}catch(g){if(!jn(g))throw g;x(ua,"Failed to update sequence numbers: "+g)}for(const g of h){const _=g.targetId;if(!g.fromCache){const I=f.Fs.get(_),w=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(w);f.Fs=f.Fs.insert(_,P)}}}(s.localStore,i))}async function ev(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){x(ya,"User change. New user:",e.toKey());const s=await Wh(t.localStore,e);t.currentUser=e,function(i,a){i.Vu.forEach(c=>{c.forEach(u=>{u.reject(new j(M.CANCELLED,a))})}),i.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Us(t,s.Bs)}}function tv(n,e){const t=K(n),s=t.Eu.get(e);if(s&&s.lu)return J().add(s.key);{let r=J();const i=t.Tu.get(e);if(!i)return r;for(const a of i){const c=t.Pu.get(a);r=r.unionWith(c.view.tu)}return r}}function ad(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=sd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Yy.bind(null,e),e.hu.J_=Fy.bind(null,e.eventManager),e.hu.pu=Ly.bind(null,e.eventManager),e}function nv(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Xy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Jy.bind(null,e),e}class qr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=li(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return sy(this.persistence,new ey,e.initialUser,this.serializer)}Du(e){return new $h(ca.Vi,this.serializer)}bu(e){return new uy}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qr.provider={build:()=>new qr};class sv extends qr{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){ne(this.persistence.referenceDelegate instanceof Br,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new U_(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new $h(s=>Br.Vi(s,t),this.serializer)}}class Oo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Hl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ev.bind(null,this.syncEngine),await ky(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Dy}()}createDatastore(e){const t=li(e.databaseInfo.databaseId),s=function(i){return new gy(i)}(e.databaseInfo);return function(i,a,c,u){return new vy(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,i,a,c){return new Ey(s,r,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Hl(this.syncEngine,t,0),function(){return Ul.C()?new Ul:new hy}())}createSyncEngine(e,t){return function(r,i,a,c,u,h,f){const g=new $y(r,i,a,c,u,h);return f&&(g.fu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const i=K(r);x(an,"RemoteStore shutting down."),i.Ia.add(5),await Ls(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Oo.provider={build:()=>new Oo};/**
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
 */class rv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):wt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const zt="FirestoreClient";class iv{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=Ce.UNAUTHENTICATED,this.clientId=Qo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async a=>{x(zt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(s,a=>(x(zt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ma(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function eo(n,e){n.asyncQueue.verifyOperationInProgress(),x(zt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Wh(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>{Bt("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{x("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(r=>{Bt("Terminating Firestore due to IndexedDb database deletion failed",r)})}),n._offlineComponents=e}async function Gl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ov(n);x(zt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>jl(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>jl(e.remoteStore,r)),n._onlineComponents=e}async function ov(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x(zt,"Using user provided OfflineComponentProvider");try{await eo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===M.FAILED_PRECONDITION||r.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;Bt("Error using user provided cache. Falling back to memory cache: "+t),await eo(n,new qr)}}else x(zt,"Using default OfflineComponentProvider"),await eo(n,new sv(void 0));return n._offlineComponents}async function cd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x(zt,"Using user provided OnlineComponentProvider"),await Gl(n,n._uninitializedComponentsProvider._online)):(x(zt,"Using default OnlineComponentProvider"),await Gl(n,new Oo))),n._onlineComponents}function av(n){return cd(n).then(e=>e.syncEngine)}async function cv(n){const e=await cd(n),t=e.eventManager;return t.onListen=Wy.bind(null,e.syncEngine),t.onUnlisten=Gy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Hy.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ky.bind(null,e.syncEngine),t}function lv(n,e,t={}){const s=new Lt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,h){const f=new rv({next:_=>{f.Ou(),a.enqueueAndForget(()=>xy(i,g));const I=_.docs.has(c);!I&&_.fromCache?h.reject(new j(M.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&_.fromCache&&u&&u.source==="server"?h.reject(new j(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new Uy(na(c.path),f,{includeMetadataChanges:!0,ka:!0});return Vy(i,g)}(await cv(n),n.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function ld(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Kl=new Map;/**
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
 */const ud="firestore.googleapis.com",Ql=!0;class Yl{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new j(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ud,this.ssl=Ql}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Ql;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=qh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<F_)throw new j(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Em("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ld((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wa{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new hm;switch(s.type){case"firstParty":return new gm(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new j(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Kl.get(t);s&&(x("ComponentProvider","Removing Datastore"),Kl.delete(t),s.terminate())}(this),Promise.resolve()}}function uv(n,e,t,s={}){var r;n=Ts(n,wa);const i=Fn(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;i&&(Uu(`https://${u}`),Bu("Firestore",!0)),a.host!==ud&&a.host!==u&&Bt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:u,ssl:i,emulatorOptions:s});if(!sn(h,c)&&(n._setSettings(h),s.mockUserToken)){let f,g;if(typeof s.mockUserToken=="string")f=s.mockUserToken,g=Ce.MOCK_USER;else{f=xp(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new j(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ce(_)}n._authCredentials=new dm(new eh(f,g))}}/**
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
 */class Ea{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ea(this.firestore,e,this._query)}}class ye{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ps(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ye(this.firestore,e,this._key)}toJSON(){return{type:ye._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Vs(t,ye._jsonSchema))return new ye(e,s||null,new q(ce.fromString(t.referencePath)))}}ye._jsonSchemaVersion="firestore/documentReference/1.0",ye._jsonSchema={type:fe("string",ye._jsonSchemaVersion),referencePath:fe("string")};class Ps extends Ea{constructor(e,t,s){super(e,t,na(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ye(this.firestore,null,new q(e))}withConverter(e){return new Ps(this.firestore,e,this._path)}}function hd(n,e,...t){if(n=We(n),arguments.length===1&&(e=Qo.newId()),wm("doc","path",e),n instanceof wa){const s=ce.fromString(e,...t);return ul(s),new ye(n,null,new q(s))}{if(!(n instanceof ye||n instanceof Ps))throw new j(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ce.fromString(e,...t));return ul(s),new ye(n.firestore,n instanceof Ps?n.converter:null,new q(s))}}/**
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
 */const Xl="AsyncQueue";class Jl{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new zh(this,"async_queue_retry"),this.oc=()=>{const s=Zi();s&&x(Xl,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=Zi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Zi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Lt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!jn(e))throw e;x(Xl,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,wt("INTERNAL UNHANDLED ERROR: ",Zl(s)),s}).then(s=>(this.nc=!1,s))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const r=ga.createAndSchedule(this,e,t,s,i=>this.lc(i));return this.ec.push(r),r}ac(){this.tc&&$(47125,{hc:Zl(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Zl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ta extends wa{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Jl,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jl(e),this._firestoreClient=void 0,await e}}}function hv(n,e){const t=typeof n=="object"?n:Wu(),s=typeof n=="string"?n:Or,r=Go(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Dp("firestore");i&&uv(r,...i)}return r}function dd(n){if(n._terminated)throw new j(M.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||dv(n),n._firestoreClient}function dv(n){var e,t,s;const r=n._freezeSettings(),i=function(c,u,h,f){return new km(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ld(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new iv(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const u=c?._online.build();return{_offline:c?._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class $e{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $e(Te.fromBase64String(e))}catch(t){throw new j(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new $e(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:$e._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Vs(e,$e._jsonSchema))return $e.fromBase64String(e.bytes)}}$e._jsonSchemaVersion="firestore/bytes/1.0",$e._jsonSchema={type:fe("string",$e._jsonSchemaVersion),bytes:fe("string")};/**
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
 */class Ia{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class fd{constructor(e){this._methodName=e}}/**
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
 */class rt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rt._jsonSchemaVersion}}static fromJSON(e){if(Vs(e,rt._jsonSchema))return new rt(e.latitude,e.longitude)}}rt._jsonSchemaVersion="firestore/geoPoint/1.0",rt._jsonSchema={type:fe("string",rt._jsonSchemaVersion),latitude:fe("number"),longitude:fe("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class it{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:it._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Vs(e,it._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new it(e.vectorValues);throw new j(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}it._jsonSchemaVersion="firestore/vectorValue/1.0",it._jsonSchema={type:fe("string",it._jsonSchemaVersion),vectorValues:fe("object")};/**
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
 */const fv=/^__.*__$/;class pv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new dn(e,this.data,this.fieldMask,t,this.fieldTransforms):new xs(e,this.data,t,this.fieldTransforms)}}function pd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $(40011,{Ec:n})}}class Aa{constructor(e,t,s,r,i,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Aa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Rc({path:s,mc:!1});return r.fc(e),r}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Rc({path:s,mc:!1});return r.Ac(),r}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return $r(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(pd(this.Ec)&&fv.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class gv{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||li(e)}Dc(e,t,s,r=!1){return new Aa({Ec:e,methodName:t,bc:s,path:Ee.emptyPath(),mc:!1,Sc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mv(n){const e=n._freezeSettings(),t=li(n._databaseId);return new gv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function _v(n,e,t,s,r,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,r);yd("Data must be an object, but it was:",a,s);const c=md(s,a);let u,h;if(i.merge)u=new Ye(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const _=yv(e,g,t);if(!a.contains(_))throw new j(M.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);wv(f,_)||f.push(_)}u=new Ye(f),h=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=a.fieldTransforms;return new pv(new qe(c),u,h)}function gd(n,e){if(_d(n=We(n)))return yd("Unsupported field value:",e,n),md(n,e);if(n instanceof fd)return function(s,r){if(!pd(r.Ec))throw r.wc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.wc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(s,r){const i=[];let a=0;for(const c of s){let u=gd(c,r.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(s,r){if((s=We(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return n_(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=ae.fromDate(s);return{timestampValue:Ur(r.serializer,i)}}if(s instanceof ae){const i=new ae(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ur(r.serializer,i)}}if(s instanceof rt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof $e)return{bytesValue:Vh(r.serializer,s._byteString)};if(s instanceof ye){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:oa(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof it)return function(a,c){return{mapValue:{fields:{[uh]:{stringValue:hh},[Dr]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return sa(c.serializer,h)})}}}}}}(s,r);throw r.wc(`Unsupported field value: ${Yo(s)}`)}(n,e)}function md(n,e){const t={};return rh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):un(n,(s,r)=>{const i=gd(r,e.Vc(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function _d(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ae||n instanceof rt||n instanceof $e||n instanceof ye||n instanceof fd||n instanceof it)}function yd(n,e,t){if(!_d(t)||!nh(t)){const s=Yo(t);throw s==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+s)}}function yv(n,e,t){if((e=We(e))instanceof Ia)return e._internalPath;if(typeof e=="string")return vd(n,e);throw $r("Field path arguments must be of type string or ",n,!1,void 0,t)}const vv=new RegExp("[~\\*/\\[\\]]");function vd(n,e,t){if(e.search(vv)>=0)throw $r(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ia(...e.split("."))._internalPath}catch{throw $r(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function $r(n,e,t,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${s}`),a&&(u+=` in document ${r}`),u+=")"),new j(M.INVALID_ARGUMENT,c+n+u)}function wv(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class wd{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ev(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ed("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ev extends wd{data(){return super.data()}}function Ed(n,e){return typeof e=="string"?vd(n,e):e instanceof Ia?e._internalPath:e._delegate._internalPath}class Tv{convertValue(e,t="none"){switch(Wt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes($t(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return un(e,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertVectorValue(e){var t,s,r;const i=(r=(s=(t=e.fields)===null||t===void 0?void 0:t[Dr].arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(a=>he(a.doubleValue));return new it(i)}convertGeoPoint(e){return new rt(he(e.latitude),he(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=ni(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(As(e));default:return null}}convertTimestamp(e){const t=qt(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ce.fromString(e);ne(jh(s),9688,{name:e});const r=new Ss(s.get(1),s.get(3)),i=new q(s.popFirst(5));return r.isEqual(t)||wt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Iv(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class fs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nn extends wd{constructor(e,t,s,r,i,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ar(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ed("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=nn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}nn._jsonSchemaVersion="firestore/documentSnapshot/1.0",nn._jsonSchema={type:fe("string",nn._jsonSchemaVersion),bundleSource:fe("string","DocumentSnapshot"),bundleName:fe("string"),bundle:fe("string")};class Ar extends nn{data(e={}){return super.data(e)}}class vs{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new fs(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Ar(this._firestore,this._userDataWriter,s.key,s,new fs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(c=>{const u=new Ar(r._firestore,r._userDataWriter,c.doc.key,c.doc,new fs(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Ar(r._firestore,r._userDataWriter,c.doc.key,c.doc,new fs(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:Av(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Qo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Av(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $(61501,{type:n})}}/**
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
 */function Sv(n){n=Ts(n,ye);const e=Ts(n.firestore,Ta);return lv(dd(e),n._key).then(t=>Pv(e,n,t))}vs._jsonSchemaVersion="firestore/querySnapshot/1.0",vs._jsonSchema={type:fe("string",vs._jsonSchemaVersion),bundleSource:fe("string","QuerySnapshot"),bundleName:fe("string"),bundle:fe("string")};class bv extends Tv{constructor(e){super(),this.firestore=e}convertBytes(e){return new $e(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ye(this.firestore,null,t)}}function Rv(n,e,t){n=Ts(n,ye);const s=Ts(n.firestore,Ta),r=Iv(n.converter,e);return Cv(s,[_v(mv(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,yt.none())])}function Cv(n,e){return function(s,r){const i=new Lt;return s.asyncQueue.enqueueAndForget(async()=>Qy(await av(s),r,i)),i.promise}(dd(n),e)}function Pv(n,e,t){const s=t.docs.get(e._key),r=new bv(n);return new nn(n,r,e._key,s,new fs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(r){Un=r})(Ln),Pn(new rn("firestore",(s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),c=new Ta(new fm(s.getProvider("auth-internal")),new mm(a,s.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new j(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ss(h.options.projectId,f)}(a,r),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),xt(il,ol,e),xt(il,ol,"esm2017")})();function Sa(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t}function Td(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Nv=Td,Id=new Os("auth","Firebase",Td());/**
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
 */const Wr=new Ho("@firebase/auth");function Mv(n,...e){Wr.logLevel<=X.WARN&&Wr.warn(`Auth (${Ln}): ${n}`,...e)}function Sr(n,...e){Wr.logLevel<=X.ERROR&&Wr.error(`Auth (${Ln}): ${n}`,...e)}/**
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
 */function ut(n,...e){throw Ra(n,...e)}function Je(n,...e){return Ra(n,...e)}function ba(n,e,t){const s=Object.assign(Object.assign({},Nv()),{[e]:t});return new Os("auth","Firebase",s).create(e,{appName:n.name})}function Ut(n){return ba(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ad(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&ut(n,"argument-error"),ba(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ra(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Id.create(n,...e)}function W(n,e,...t){if(!n)throw Ra(e,...t)}function mt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Sr(e),new Error(e)}function Tt(n,e){n||mt(e)}/**
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
 */function Do(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function kv(){return eu()==="http:"||eu()==="https:"}function eu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Ov(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kv()||qp()||"connection"in navigator)?navigator.onLine:!0}function Dv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Bs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Tt(t>e,"Short delay should be less than long delay!"),this.isMobile=Up()||$p()}get(){return Ov()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ca(n,e){Tt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Sd{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Vv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Fv=new Bs(3e4,6e4);function Pa(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function $n(n,e,t,s,r={}){return bd(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=Ds(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:u},i);return jp()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Fn(n.emulatorConfig.host)&&(h.credentials="include"),Sd.fetch()(await Rd(n,n.config.apiHost,t,c),h)})}async function bd(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Vv),e);try{const r=new Uv(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw fr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw fr(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw fr(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw fr(n,"user-disabled",a);const f=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw ba(n,f,h);ut(n,f)}}catch(r){if(r instanceof It)throw r;ut(n,"network-request-failed",{message:String(r)})}}async function Lv(n,e,t,s,r={}){const i=await $n(n,e,t,s,r);return"mfaPendingCredential"in i&&ut(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Rd(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?Ca(n.config,r):`${n.config.apiScheme}://${r}`;return xv.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class Uv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Je(this.auth,"network-request-failed")),Fv.get())})}}function fr(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=Je(n,e,s);return r.customData._tokenResponse=t,r}/**
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
 */async function Bv(n,e){return $n(n,"POST","/v1/accounts:delete",e)}async function Hr(n,e){return $n(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ws(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jv(n,e=!1){const t=We(n),s=await t.getIdToken(e),r=Na(s);W(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i?.sign_in_provider;return{claims:r,token:s,authTime:ws(to(r.auth_time)),issuedAtTime:ws(to(r.iat)),expirationTime:ws(to(r.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function to(n){return Number(n)*1e3}function Na(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Sr("JWT malformed, contained fewer than 3 sections"),null;try{const r=Vu(t);return r?JSON.parse(r):(Sr("Failed to decode base64 JWT payload"),null)}catch(r){return Sr("Caught error parsing JWT payload as JSON",r?.toString()),null}}function tu(n){const e=Na(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ns(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof It&&qv(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function qv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class $v{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ws(this.lastLoginAt),this.creationTime=ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zr(n){var e;const t=n.auth,s=await n.getIdToken(),r=await Ns(n,Hr(t,{idToken:s}));W(r?.users.length,t,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Cd(i.providerUserInfo):[],c=Hv(n.providerData,a),u=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!c?.length,f=u?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Vo(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function Wv(n){const e=We(n);await zr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hv(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Cd(n){return n.map(e=>{var{providerId:t}=e,s=Sa(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function zv(n,e){const t=await bd(n,{},async()=>{const s=Ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await Rd(n,r,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:s};return n.emulatorConfig&&Fn(n.emulatorConfig.host)&&(u.credentials="include"),Sd.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Gv(n,e){return $n(n,"POST","/v2/accounts:revokeToken",Pa(n,e))}/**
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
 */class An{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=tu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await zv(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new An;return s&&(W(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(W(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(W(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new An,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
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
 */function Pt(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Xe{constructor(e){var{uid:t,auth:s,stsTokenManager:r}=e,i=Sa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $v(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ns(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return jv(this,e)}reload(){return Wv(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Xe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await zr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(je(this.auth.app))return Promise.reject(Ut(this.auth));const e=await this.getIdToken();return await Ns(this,Bv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,r,i,a,c,u,h,f;const g=(s=t.displayName)!==null&&s!==void 0?s:void 0,_=(r=t.email)!==null&&r!==void 0?r:void 0,I=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,w=(a=t.photoURL)!==null&&a!==void 0?a:void 0,P=(c=t.tenantId)!==null&&c!==void 0?c:void 0,R=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,B=(h=t.createdAt)!==null&&h!==void 0?h:void 0,F=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:V,emailVerified:L,isAnonymous:Y,providerData:U,stsTokenManager:E}=t;W(V&&E,e,"internal-error");const m=An.fromJSON(this.name,E);W(typeof V=="string",e,"internal-error"),Pt(g,e.name),Pt(_,e.name),W(typeof L=="boolean",e,"internal-error"),W(typeof Y=="boolean",e,"internal-error"),Pt(I,e.name),Pt(w,e.name),Pt(P,e.name),Pt(R,e.name),Pt(B,e.name),Pt(F,e.name);const y=new Xe({uid:V,auth:e,email:_,emailVerified:L,displayName:g,isAnonymous:Y,photoURL:w,phoneNumber:I,tenantId:P,stsTokenManager:m,createdAt:B,lastLoginAt:F});return U&&Array.isArray(U)&&(y.providerData=U.map(T=>Object.assign({},T))),R&&(y._redirectEventId=R),y}static async _fromIdTokenResponse(e,t,s=!1){const r=new An;r.updateFromServerResponse(t);const i=new Xe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await zr(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];W(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Cd(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!i?.length,c=new An;c.updateFromIdToken(s);const u=new Xe({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Vo(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(u,h),u}}/**
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
 */const nu=new Map;function _t(n){Tt(n instanceof Function,"Expected a class definition");let e=nu.get(n);return e?(Tt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,nu.set(n,e),e)}/**
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
 */class Pd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Pd.type="NONE";const su=Pd;/**
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
 */function br(n,e,t){return`firebase:${n}:${e}:${t}`}class Sn{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=br(this.userKey,r.apiKey,i),this.fullPersistenceKey=br("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Hr(this.auth,{idToken:e}).catch(()=>{});return t?Xe._fromGetAccountInfoResponse(this.auth,t,e):null}return Xe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Sn(_t(su),e,s);const r=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=r[0]||_t(su);const a=br(s,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){let g;if(typeof f=="string"){const _=await Hr(e,{idToken:f}).catch(()=>{});if(!_)break;g=await Xe._fromGetAccountInfoResponse(e,_,f)}else g=Xe._fromJSON(e,f);h!==i&&(c=g),i=h;break}}catch{}const u=r.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Sn(i,e,s):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Sn(i,e,s))}}/**
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
 */function ru(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Od(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vd(e))return"Blackberry";if(xd(e))return"Webos";if(Md(e))return"Safari";if((e.includes("chrome/")||kd(e))&&!e.includes("edge/"))return"Chrome";if(Dd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function Nd(n=Ne()){return/firefox\//i.test(n)}function Md(n=Ne()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kd(n=Ne()){return/crios\//i.test(n)}function Od(n=Ne()){return/iemobile/i.test(n)}function Dd(n=Ne()){return/android/i.test(n)}function Vd(n=Ne()){return/blackberry/i.test(n)}function xd(n=Ne()){return/webos/i.test(n)}function Ma(n=Ne()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Kv(n=Ne()){var e;return Ma(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qv(){return Wp()&&document.documentMode===10}function Fd(n=Ne()){return Ma(n)||Dd(n)||xd(n)||Vd(n)||/windows phone/i.test(n)||Od(n)}/**
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
 */function Ld(n,e=[]){let t;switch(n){case"Browser":t=ru(Ne());break;case"Worker":t=`${ru(Ne())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ln}/${s}`}/**
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
 */class Yv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Xv(n,e={}){return $n(n,"GET","/v2/passwordPolicy",Pa(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Jv=6;class Zv{constructor(e){var t,s,r,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Jv,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,r,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(s=u.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(r=u.containsLowercaseLetter)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ew{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iu(this),this.idTokenSubscription=new iu(this),this.beforeStateQueue=new Yv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Id,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_t(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await Sn.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Hr(this,{idToken:e}),s=await Xe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(je(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=r?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&u?.user&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zr(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(je(this.app))return Promise.reject(Ut(this));const t=e?We(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return je(this.app)?Promise.reject(Ut(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return je(this.app)?Promise.reject(Ut(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Xv(this),t=new Zv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Os("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Gv(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_t(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await Sn.create(this,[_t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,s,r);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ld(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Mv(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Wn(n){return We(n)}class iu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jp(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ka={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tw(n){ka=n}function nw(n){return ka.loadJS(n)}function sw(){return ka.gapiScript}function rw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function iw(n,e){const t=Go(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(sn(i,e??{}))return r;ut(r,"already-initialized")}return t.initialize({options:e})}function ow(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(_t);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function aw(n,e,t){const s=Wn(n);W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Ud(e),{host:a,port:c}=cw(e),u=c===null?"":`:${c}`,h={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){W(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),W(sn(h,s.config.emulator)&&sn(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=h,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,Fn(a)?(Uu(`${i}//${a}${u}`),Bu("Auth",!0)):lw()}function Ud(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function cw(n){const e=Ud(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:ou(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:ou(a)}}}function ou(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function lw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Bd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mt("not implemented")}_getIdTokenResponse(e){return mt("not implemented")}_linkToIdToken(e,t){return mt("not implemented")}_getReauthenticationResolver(e){return mt("not implemented")}}/**
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
 */async function bn(n,e){return Lv(n,"POST","/v1/accounts:signInWithIdp",Pa(n,e))}/**
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
 */const uw="http://localhost";class cn extends Bd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ut("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=t,i=Sa(t,["providerId","signInMethod"]);if(!s||!r)return null;const a=new cn(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return bn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,bn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bn(e,t)}buildRequest(){const e={requestUri:uw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ds(t)}return e}}/**
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
 */class di{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class js extends di{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Nt extends js{constructor(){super("facebook.com")}static credential(e){return cn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch{return null}}}Nt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nt.PROVIDER_ID="facebook.com";/**
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
 */class gt extends js{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cn._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return gt.credential(t,s)}catch{return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com";gt.PROVIDER_ID="google.com";/**
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
 */class Mt extends js{constructor(){super("github.com")}static credential(e){return cn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.GITHUB_SIGN_IN_METHOD="github.com";Mt.PROVIDER_ID="github.com";/**
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
 */class kt extends js{constructor(){super("twitter.com")}static credential(e,t){return cn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return kt.credential(t,s)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
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
 */class Vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await Xe._fromIdTokenResponse(e,s,r),a=au(s);return new Vn({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=au(s);return new Vn({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function au(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Gr extends It{constructor(e,t,s,r){var i;super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Gr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new Gr(e,t,s,r)}}function jd(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Gr._fromErrorAndOperation(n,i,e,s):i})}async function hw(n,e,t=!1){const s=await Ns(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Vn._forOperation(n,"link",s)}/**
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
 */async function dw(n,e,t=!1){const{auth:s}=n;if(je(s.app))return Promise.reject(Ut(s));const r="reauthenticate";try{const i=await Ns(n,jd(s,r,e,n),t);W(i.idToken,s,"internal-error");const a=Na(i.idToken);W(a,s,"internal-error");const{sub:c}=a;return W(n.uid===c,s,"user-mismatch"),Vn._forOperation(n,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&ut(s,"user-mismatch"),i}}/**
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
 */async function fw(n,e,t=!1){if(je(n.app))return Promise.reject(Ut(n));const s="signIn",r=await jd(n,s,e),i=await Vn._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}function pw(n,e,t,s){return We(n).onIdTokenChanged(e,t,s)}function gw(n,e,t){return We(n).beforeAuthStateChanged(e,t)}function mw(n,e,t,s){return We(n).onAuthStateChanged(e,t,s)}function _w(n){return We(n).signOut()}const Kr="__sak";/**
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
 */class qd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Kr,"1"),this.storage.removeItem(Kr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const yw=1e3,vw=10;class $d extends qd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);Qv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,vw):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},yw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$d.type="LOCAL";const ww=$d;/**
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
 */class Wd extends qd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Wd.type="SESSION";const Hd=Wd;/**
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
 */function Ew(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class fi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new fi(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async h=>h(t.origin,i)),u=await Ew(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fi.receivers=[];/**
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
 */function Oa(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Tw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const h=Oa("",20);r.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(g){const _=g;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function ot(){return window}function Iw(n){ot().location.href=n}/**
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
 */function zd(){return typeof ot().WorkerGlobalScope<"u"&&typeof ot().importScripts=="function"}async function Aw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sw(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function bw(){return zd()?self:null}/**
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
 */const Gd="firebaseLocalStorageDb",Rw=1,Qr="firebaseLocalStorage",Kd="fbase_key";class qs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function pi(n,e){return n.transaction([Qr],e?"readwrite":"readonly").objectStore(Qr)}function Cw(){const n=indexedDB.deleteDatabase(Gd);return new qs(n).toPromise()}function xo(){const n=indexedDB.open(Gd,Rw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Qr,{keyPath:Kd})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Qr)?e(s):(s.close(),await Cw(),e(await xo()))})})}async function cu(n,e,t){const s=pi(n,!0).put({[Kd]:e,value:t});return new qs(s).toPromise()}async function Pw(n,e){const t=pi(n,!1).get(e),s=await new qs(t).toPromise();return s===void 0?null:s.value}function lu(n,e){const t=pi(n,!0).delete(e);return new qs(t).toPromise()}const Nw=800,Mw=3;class Qd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Mw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fi._getInstance(bw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Aw(),!this.activeServiceWorker)return;this.sender=new Tw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xo();return await cu(e,Kr,"1"),await lu(e,Kr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>cu(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Pw(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>lu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=pi(r,!1).getAll();return new qs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qd.type="LOCAL";const kw=Qd;new Bs(3e4,6e4);/**
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
 */function Da(n,e){return e?_t(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Va extends Bd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ow(n){return fw(n.auth,new Va(n),n.bypassAuthState)}function Dw(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),dw(t,new Va(n),n.bypassAuthState)}async function Vw(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),hw(t,new Va(n),n.bypassAuthState)}/**
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
 */class Yd{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ow;case"linkViaPopup":case"linkViaRedirect":return Vw;case"reauthViaPopup":case"reauthViaRedirect":return Dw;default:ut(this.auth,"internal-error")}}resolve(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xw=new Bs(2e3,1e4);async function Fw(n,e,t){if(je(n.app))return Promise.reject(Je(n,"operation-not-supported-in-this-environment"));const s=Wn(n);Ad(n,e,di);const r=Da(s,t);return new en(s,"signInViaPopup",e,r).executeNotNull()}class en extends Yd{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,en.currentPopupAction&&en.currentPopupAction.cancel(),en.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Tt(this.filter.length===1,"Popup operations only handle one event");const e=Oa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,en.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xw.get())};e()}}en.currentPopupAction=null;/**
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
 */const Lw="pendingRedirect",Rr=new Map;class Uw extends Yd{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Rr.get(this.auth._key());if(!e){try{const s=await Bw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Rr.set(this.auth._key(),e)}return this.bypassAuthState||Rr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bw(n,e){const t=Jd(e),s=Xd(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}async function jw(n,e){return Xd(n)._set(Jd(e),"true")}function qw(n,e){Rr.set(n._key(),e)}function Xd(n){return _t(n._redirectPersistence)}function Jd(n){return br(Lw,n.config.apiKey,n.name)}/**
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
 */function $w(n,e,t){return Ww(n,e,t)}async function Ww(n,e,t){if(je(n.app))return Promise.reject(Ut(n));const s=Wn(n);Ad(n,e,di),await s._initializationPromise;const r=Da(s,t);return await jw(r,s),r._openRedirect(s,e,"signInViaRedirect")}async function Hw(n,e){return await Wn(n)._initializationPromise,Zd(n,e,!1)}async function Zd(n,e,t=!1){if(je(n.app))return Promise.reject(Ut(n));const s=Wn(n),r=Da(s,e),a=await new Uw(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
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
 */const zw=10*60*1e3;class Gw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Kw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!ef(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Je(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zw&&this.cachedEventUids.clear(),this.cachedEventUids.has(uu(e))}saveEventToCache(e){this.cachedEventUids.add(uu(e)),this.lastProcessedEventTime=Date.now()}}function uu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ef({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Kw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ef(n);default:return!1}}/**
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
 */async function Qw(n,e={}){return $n(n,"GET","/v1/projects",e)}/**
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
 */const Yw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xw=/^https?/;async function Jw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Qw(n);for(const t of e)try{if(Zw(t))return}catch{}ut(n,"unauthorized-domain")}function Zw(n){const e=Do(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!Xw.test(t))return!1;if(Yw.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const eE=new Bs(3e4,6e4);function hu(){const n=ot().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function tE(n){return new Promise((e,t)=>{var s,r,i;function a(){hu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hu(),t(Je(n,"network-request-failed"))},timeout:eE.get()})}if(!((r=(s=ot().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=ot().gapi)===null||i===void 0)&&i.load)a();else{const c=rw("iframefcb");return ot()[c]=()=>{gapi.load?a():t(Je(n,"network-request-failed"))},nw(`${sw()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Cr=null,e})}let Cr=null;function nE(n){return Cr=Cr||tE(n),Cr}/**
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
 */const sE=new Bs(5e3,15e3),rE="__/auth/iframe",iE="emulator/auth/iframe",oE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cE(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ca(e,iE):`https://${n.config.authDomain}/${rE}`,s={apiKey:e.apiKey,appName:n.name,v:Ln},r=aE.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Ds(s).slice(1)}`}async function lE(n){const e=await nE(n),t=ot().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:cE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oE,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=Je(n,"network-request-failed"),c=ot().setTimeout(()=>{i(a)},sE.get());function u(){ot().clearTimeout(c),r(s)}s.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const uE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hE=500,dE=600,fE="_blank",pE="http://localhost";class du{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gE(n,e,t,s=hE,r=dE){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u=Object.assign(Object.assign({},uE),{width:s.toString(),height:r.toString(),top:i,left:a}),h=Ne().toLowerCase();t&&(c=kd(h)?fE:t),Nd(h)&&(e=e||pE,u.scrollbars="yes");const f=Object.entries(u).reduce((_,[I,w])=>`${_}${I}=${w},`,"");if(Kv(h)&&c!=="_self")return mE(e||"",c),new du(null);const g=window.open(e||"",c,f);W(g,n,"popup-blocked");try{g.focus()}catch{}return new du(g)}function mE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const _E="__/auth/handler",yE="emulator/auth/handler",vE=encodeURIComponent("fac");async function fu(n,e,t,s,r,i){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Ln,eventId:r};if(e instanceof di){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Xp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof js){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),h=u?`#${vE}=${encodeURIComponent(u)}`:"";return`${wE(n)}?${Ds(c).slice(1)}${h}`}function wE({config:n}){return n.emulator?Ca(n,yE):`https://${n.authDomain}/${_E}`}/**
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
 */const no="webStorageSupport";class EE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hd,this._completeRedirectFn=Zd,this._overrideRedirectResult=qw}async _openPopup(e,t,s,r){var i;Tt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await fu(e,t,s,Do(),r);return gE(e,a,Oa())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await fu(e,t,s,Do(),r);return Iw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(Tt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await lE(e),s=new Gw(e);return t.register("authEvent",r=>(W(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(no,{type:no},r=>{var i;const a=(i=r?.[0])===null||i===void 0?void 0:i[no];a!==void 0&&t(!!a),ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Jw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fd()||Md()||Ma()}}const TE=EE;var pu="@firebase/auth",gu="1.10.8";/**
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
 */class IE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function AE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SE(n){Pn(new rn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ld(n)},h=new ew(s,r,i,u);return ow(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Pn(new rn("auth-internal",e=>{const t=Wn(e.getProvider("auth").getImmediate());return(s=>new IE(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(pu,gu,AE(n)),xt(pu,gu,"esm2017")}/**
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
 */const bE=5*60,RE=Lu("authIdTokenMaxAge")||bE;let mu=null;const CE=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>RE)return;const r=t?.token;mu!==r&&(mu=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function PE(n=Wu()){const e=Go(n,"auth");if(e.isInitialized())return e.getImmediate();const t=iw(n,{popupRedirectResolver:TE,persistence:[kw,ww,Hd]}),s=Lu("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=CE(i.toString());gw(t,a,()=>a(t.currentUser)),pw(t,c=>a(c))}}const r=xu("auth");return r&&aw(t,`http://${r}`),t}function NE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}tw({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=Je("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",NE().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SE("Browser");const ME={apiKey:"AIzaSyCmmMBXWcWmljEO9lWGK7VNqrvNI3Zu1bI",authDomain:"chess-openings-7a1b2.firebaseapp.com",projectId:"chess-openings-7a1b2",storageBucket:"chess-openings-7a1b2.firebasestorage.app",messagingSenderId:"800214788543",appId:"1:800214788543:web:85b95d62fd65068180d90a"},tf=$u(ME),nf=hv(tf),ln=PE(tf),sf=new gt,xe=new pt(null),xa=new pt(!1),aI=new Promise(n=>{xa.link(e=>{e&&n()})}),cI=new Promise(n=>{xe.link(e=>{e&&n(e)})});mw(ln,n=>{n?xe.value=n:xe.value=null,xa.value=!0});(async()=>{const n=await kE();n&&(xe.value=n,xa.value=!0)})();async function lI(){console.log(`current user ${ln.currentUser}`);const n=await Fw(ln,sf);return console.log("User signed in:",n.user),console.log("User ID (uid):",n.user.uid),n.user}async function uI(){console.log(`current user ${ln.currentUser}`),await $w(ln,sf)}async function kE(){const n=await Hw(ln);return n?(console.log("User signed in:",n.user),console.log("User ID (uid):",n.user.uid),n.user):(console.log("No user signed in."),null)}async function hI(){try{await _w(ln),console.log("User logged out")}catch(n){console.error("Error logging out:",n)}}async function rf(n,e){await Rv(hd(nf,"users",n),{state:e}),console.log("User state saved successfully!")}async function dI(n){const e=await Sv(hd(nf,"users",n));return e.exists()?(console.log("User state:",e.data().state),e.data().state):(console.log("No user state found."),null)}window.manualSave=async n=>{await rf(xe.value.uid,n)};const Ve=(n,e)=>{const t=new Nu.Position(n);if(!t.play(e))throw new Error(`Invalid move: ${e} at position ${n}`);return t.fen()},fI=Object.freeze(Object.defineProperty({__proto__:null,getFenAfterMove:Ve},Symbol.toStringTag,{value:"Module"})),Ue=n=>n.split(" ")[1]==="w",pI=Object.freeze(Object.defineProperty({__proto__:null,isFenWhiteToMove:Ue},Symbol.toStringTag,{value:"Module"})),of=n=>`${n.split(" ").slice(0,-2).join(" ")} 0 1`,gI=Object.freeze(Object.defineProperty({__proto__:null,sanitizeFen:of},Symbol.toStringTag,{value:"Module"})),af=n=>of(n.fen()),mI=Object.freeze(Object.defineProperty({__proto__:null,getFen:af},Symbol.toStringTag,{value:"Module"})),oe=af(new Jr),_I=Object.freeze(Object.defineProperty({__proto__:null,initialFen:oe},Symbol.toStringTag,{value:"Module"})),gi=n=>{const e=new Nu.Position(n);return e.moves().map(t=>e.notation(t))},yI=Object.freeze(Object.defineProperty({__proto__:null,getFenMoves:gi},Symbol.toStringTag,{value:"Module"})),so=n=>n.state==="openingExplore",OE=n=>n.state==="endgameExplore",DE=n=>n.state==="openingReviewUserMove",VE=n=>n.state==="openingReviewAutoMovePending",xE=n=>n.state==="endgameReviewUserMove",FE=n=>n.state==="endgameReviewAutoMovePending",ze=n=>"isOpening"in n&&n.isOpening,xn=n=>"isEndgame"in n&&n.isEndgame,Be=n=>"isReviewing"in n&&n.isReviewing,Fo=n=>"isPendingAutoMove"in n&&n.isPendingAutoMove,cf=n=>ze(n)&&Be(n),vI=n=>Be(n)&&!!n.previousChessNode&&!!n.previousFen,Ms=n=>({repository:n.repository,isWhite:n.isWhite,fen:n.fen,stack:n.stack,stackPosition:n.stackPosition,chessNode:n.chessNode,failedMoves:n.failedMoves}),_u=n=>({isEndgame:n.isEndgame,baseFen:n.baseFen}),pr=n=>({isReviewing:n.isReviewing,previousChessNode:n.previousChessNode,previousHistory:n.previousHistory,previousBaseFen:n.previousBaseFen,previousFen:n.previousFen,previousGrade:n.previousGrade,previousWasCramming:n.previousWasCramming,previousFailedReview:n.previousFailedReview,nextFailedReview:n.nextFailedReview,nextTimestampStart:n.nextTimestampStart,prefix:n.prefix,statistics:n.statistics}),LE=n=>({isReviewing:n.isReviewing,previousChessNode:n.previousChessNode,previousHistory:n.previousHistory,previousBaseFen:n.previousBaseFen,previousFen:n.previousFen,previousGrade:n.previousGrade,previousWasCramming:n.previousWasCramming,previousFailedReview:n.previousFailedReview,nextFailedReview:n.nextFailedReview,nextTimestampStart:n.nextTimestampStart,prefix:n.prefix}),yu=n=>({isOpening:n.isOpening,isReviewing:n.isReviewing,initialHistory:n.initialHistory,targetHistory:n.targetHistory}),Lo=n=>xn(n)?n.baseFen:oe,ro=n=>n.stack.slice(0,n.stackPosition).map(e=>e.move),Uo=(n,e)=>{const t=Ue(e);return xn(n)&&(e=at(e)),n.repository.getChessNode(e,t===n.isWhite)},lf=n=>n.stackPosition===0?null:n.stack[n.stackPosition-1],gr=n=>{const e=lf(n),t=e?e.fen:xn(n)?n.baseFen:oe;return Uo(n,t)},wI=n=>{const e=lf(n);return e?e.fenBeforeMove:null},UE=n=>n.stack.slice(0,n.stackPosition).map(e=>e.move),io=(n,e,t)=>{const s=Ve(n.fen,e);let r=null;if(n.chessNode){const a=n.chessNode.isOpening?e:uo(n.fen,e);n.chessNode.moveMap[a]&&(r=n.chessNode.moveMap[a])}r||(r=n.repository.getChessNode(t?s:at(s),Ue(s)===n.isWhite)??null);const i=!n.stack[n.stackPosition]||n.stack[n.stackPosition].move!==e;return{...Ms(n),fen:s,stack:i?[...n.stack.slice(0,n.stackPosition),{fen:s,fenBeforeMove:n.fen,move:e}]:n.stack,stackPosition:n.stackPosition+1,chessNode:r,failedMoves:[]}},yn=(n,e)=>{let t;if(e===0)t=Lo(n);else{const r=n.stack[e-1].fenBeforeMove,i=n.stack[e-1].move;t=Ve(r,i)}const s=n.repository.getChessNode(t,Ue(t)===n.isWhite)??null;return{...Ms(n),fen:t,stackPosition:e,chessNode:s,failedMoves:[]}},BE=n=>{const e=!n.isWhite,t=n.repository.getChessNode(n.fen,Ue(n.fen)===e)??null;return{...Ms(n),isWhite:e,chessNode:t,failedMoves:[]}},vu=(n,e)=>{const t=n.getInitialChessNode(e)??null;return{repository:n,isWhite:e,fen:oe,stack:[],stackPosition:0,chessNode:t,failedMoves:[]}},wu=(n,e)=>({repository:n,isWhite:!0,fen:e,stack:[],stackPosition:0,chessNode:n.getChessNode(at(e),!0)??null,failedMoves:[]}),Eu=(n,e)=>({isReviewing:!0,previousChessNode:null,previousHistory:null,previousBaseFen:null,previousFen:null,previousGrade:null,previousWasCramming:!1,previousFailedReview:!1,nextFailedReview:!1,nextTimestampStart:Date.now(),prefix:n,statistics:e}),mr=()=>({isOpening:!0}),oo=n=>({isEndgame:!0,baseFen:n}),jE=n=>{if(!n.repository)throw new Error("State is missing repository");if(typeof n.isWhite!="boolean")throw new Error("State is missing isWhite");if(typeof n.fen!="string")throw new Error("State is missing fen");const e=gi(n.fen);if(!Array.isArray(n.stack))throw new Error("State stack is not an array");if(n.chessNode){if(n.chessNode.isOpening){if(n.chessNode.fen!==n.fen)throw new Error(`State chessNode fen ${n.chessNode.fen} does not match state fen ${n.fen}`)}else if(n.chessNode.fen!==at(n.fen))throw new Error(`State chessNode fen ${n.chessNode.fen} does not match canonical fen ${at(n.fen)} for state fen ${n.fen}`);const t=Ue(n.fen),s=n.isWhite,r=n.chessNode.isUserMove,i=t===s;if(r!==i)throw new Error(`State chessNode isUserMove ${r} does not match expected ${i} based on fen ${n.fen} and isWhite ${n.isWhite}`)}if(n.stack.forEach(t=>{if(typeof t.fen!="string")throw new Error("State stack entry is missing fen");if(typeof t.fenBeforeMove!="string")throw new Error("State stack entry is missing fenBeforeMove");if(typeof t.move!="string")throw new Error("State stack entry is missing move");if(Ve(t.fenBeforeMove,t.move)!==t.fen)throw new Error(`State stack entry move does not match fens: ${t.move} from ${t.fenBeforeMove} should yield ${Ve(t.fenBeforeMove,t.move)}, but got ${t.fen}`)}),typeof n.stackPosition!="number")throw new Error("State is missing stackPosition");if(n.stackPosition<0)throw new Error("State stackPosition is negative");if(n.stackPosition>n.stack.length)throw new Error("State stackPosition is greater than stack length");if(!Array.isArray(n.failedMoves))throw new Error("State failedMoves is not an array");n.failedMoves.forEach(t=>{if(!e.includes(t))throw new Error(`State failedMoves entry ${t} is not a legal move for fen ${n.fen}`)})},qE=n=>{if(typeof n.baseFen!="string")throw new Error("Endgame state is missing baseFen");if(n.baseFen===oe)throw new Error("Endgame state baseFen cannot be the initial fen")},$E=n=>{if(typeof n.pendingAutoMove!="string")throw new Error("Pending auto move state is missing pendingAutoMove");if(!gi(n.fen).includes(n.pendingAutoMove))throw new Error(`Pending auto move ${n.pendingAutoMove} is not a legal move for fen ${n.fen}`)},WE=n=>{if(n.targetHistory.length<=n.initialHistory.length)throw new Error("Reviewing opening state targetHistory must be longer than initialHistory");let e=n.repository.getInitialChessNode(n.isWhite);if(!e)throw new Error(`Reviewing opening state could not find initial chess node for isWhite ${n.isWhite}`);for(let t=0;t<n.targetHistory.length;t++){const s=n.targetHistory[t];if(t<n.initialHistory.length){const r=n.initialHistory[t];if(s!==r)throw new Error(`Reviewing opening state targetHistory move ${s} does not match initialHistory move ${r} at index ${t}`)}if(e=e.moveMap[s],!e)throw new Error(`Reviewing opening state targetHistory move ${s} at index ${t} is not a legal move from the previous moves`)}},HE=n=>{if(!n.chessNode)throw new Error("Reviewing state is missing chessNode");if(n.previousChessNode===void 0)throw new Error("Reviewing state is missing previousChessNode");if(n.previousFen===void 0)throw new Error("Reviewing state is missing previousFen");if(n.previousHistory===void 0)throw new Error("Reviewing state is missing previousHistory");if(n.previousBaseFen===void 0)throw new Error("Reviewing state is missing previousBaseFen");if(n.previousGrade!==null&&typeof n.previousGrade!="number")throw new Error("Reviewing state previousGrade must be a number or null");if(typeof n.previousWasCramming!="boolean")throw new Error("Reviewing state is missing previousWasCramming");if(typeof n.previousFailedReview!="boolean")throw new Error("Reviewing state is missing previousFailedReview");if(typeof n.nextFailedReview!="boolean")throw new Error("Reviewing state is missing nextFailedReview");if(typeof n.nextTimestampStart!="number")throw new Error("Reviewing state is missing nextTimestampStart");if(n.prefix!==null&&typeof n.prefix!="object")throw new Error("Reviewing state prefix must be an object or null");if(typeof n.statistics!="object")throw new Error("Reviewing state is missing statistics")},zE=n=>{jE(n),xn(n)&&qE(n),Fo(n)&&$E(n),cf(n)&&WE(n),Be(n)&&HE(n)},GE=n=>50+50*(2/(1+Math.exp(-.00368208*n))-1),EI=n=>{const e=.00368208,t=n/100;return Math.log(t/(1-t))/e},TI=(n,e)=>{const t=e?n.s:-n.s;return n.m==="mate"?t>=0?100:0:GE(t)},KE=(n,e)=>n.m==="mate"&&e.m==="mate"?0:n.m==="mate"?-1:e.m==="mate"?1:n.s===e.s?0:n.s>e.s?1:-1,Tu=(n,e)=>KE(n,e)===-1,II=(n,e)=>{const t=e?n.s:-n.s;return n.m==="mate"?t===0?"#":`#${t>0?Math.ceil(t/2):Math.floor(t/2)}`:t===0?"0":`${t>0?"+":""}${(t/100).toFixed(2)}`};var z=(n=>(n[n.New=0]="New",n[n.Learning=1]="Learning",n[n.Review=2]="Review",n[n.Relearning=3]="Relearning",n))(z||{}),D=(n=>(n[n.Manual=0]="Manual",n[n.Again=1]="Again",n[n.Hard=2]="Hard",n[n.Good=3]="Good",n[n.Easy=4]="Easy",n))(D||{});class G{static card(e){return{...e,state:G.state(e.state),due:G.time(e.due),last_review:e.last_review?G.time(e.last_review):void 0}}static rating(e){if(typeof e=="string"){const t=e.charAt(0).toUpperCase(),s=e.slice(1).toLowerCase(),r=D[`${t}${s}`];if(r===void 0)throw new Error(`Invalid rating:[${e}]`);return r}else if(typeof e=="number")return e;throw new Error(`Invalid rating:[${e}]`)}static state(e){if(typeof e=="string"){const t=e.charAt(0).toUpperCase(),s=e.slice(1).toLowerCase(),r=z[`${t}${s}`];if(r===void 0)throw new Error(`Invalid state:[${e}]`);return r}else if(typeof e=="number")return e;throw new Error(`Invalid state:[${e}]`)}static time(e){const t=new Date(e);if(typeof e=="object"&&e!==null&&!Number.isNaN(Date.parse(e)||+t))return t;if(typeof e=="string"){const s=Date.parse(e);if(Number.isNaN(s))throw new Error(`Invalid date:[${e}]`);return new Date(s)}else if(typeof e=="number")return new Date(e);throw new Error(`Invalid date:[${e}]`)}static review_log(e){return{...e,due:G.time(e.due),rating:G.rating(e.rating),state:G.state(e.state),review:G.time(e.review)}}}Date.prototype.scheduler=function(n,e){return Ge(this,n,e)};Date.prototype.diff=function(n,e){return Rn(this,n,e)};Date.prototype.format=function(){return QE(this)};Date.prototype.dueFormat=function(n,e,t){return YE(this,n,e,t)};function Ge(n,e,t){return new Date(t?G.time(n).getTime()+e*24*60*60*1e3:G.time(n).getTime()+e*60*1e3)}function Rn(n,e,t){if(!n||!e)throw new Error("Invalid date");const s=G.time(n).getTime()-G.time(e).getTime();let r=0;switch(t){case"days":r=Math.floor(s/(24*60*60*1e3));break;case"minutes":r=Math.floor(s/(60*1e3));break}return r}function QE(n){const e=G.time(n),t=e.getFullYear(),s=e.getMonth()+1,r=e.getDate(),i=e.getHours(),a=e.getMinutes(),c=e.getSeconds();return`${t}-${cs(s)}-${cs(r)} ${cs(i)}:${cs(a)}:${cs(c)}`}function cs(n){return n<10?`0${n}`:`${n}`}const ao=[60,60,24,31,12],co=["second","min","hour","day","month","year"];function YE(n,e,t,s=co){n=G.time(n),e=G.time(e),s.length!==co.length&&(s=co);let r=n.getTime()-e.getTime(),i=0;for(r/=1e3,i=0;i<ao.length&&!(r<ao[i]);i++)r/=ao[i];return`${Math.floor(r)}${t?s[i]:""}`}const XE=Object.freeze([D.Again,D.Hard,D.Good,D.Easy]),JE=[{start:2.5,end:7,factor:.15},{start:7,end:20,factor:.1},{start:20,end:1/0,factor:.05}];function ZE(n,e,t){let s=1;for(const a of JE)s+=a.factor*Math.max(Math.min(n,a.end)-a.start,0);n=Math.min(n,t);let r=Math.max(2,Math.round(n-s));const i=Math.min(Math.round(n+s),t);return n>e&&(r=Math.max(r,e+1)),r=Math.min(r,i),{min_ivl:r,max_ivl:i}}function Oe(n,e,t){return Math.min(Math.max(n,e),t)}function eT(n,e){const t=Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()),s=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate());return Math.floor((s-t)/864e5)}const tT=n=>{const e=n.slice(-1),t=parseInt(n.slice(0,-1),10);if(Number.isNaN(t)||!Number.isFinite(t)||t<0)throw new Error(`Invalid step value: ${n}`);switch(e){case"m":return t;case"h":return t*60;case"d":return t*1440;default:throw new Error(`Invalid step unit: ${n}, expected m/h/d`)}},nT=(n,e,t)=>{const s=e===z.Relearning||e===z.Review?n.relearning_steps:n.learning_steps,r=s.length;if(r===0||t>=r)return{};const i=s[0],a=tT,c=()=>a(i),u=()=>{if(r===1)return Math.round(a(i)*1.5);const I=s[1];return Math.round((a(i)+a(I))/2)},h=I=>I<0||I>=r?null:s[I],f=I=>a(I),g={},_=h(Math.max(0,t));if(e===z.Review)return g[D.Again]={scheduled_minutes:a(_),next_step:0},g;{g[D.Again]={scheduled_minutes:c(),next_step:0},g[D.Hard]={scheduled_minutes:u(),next_step:t};const I=h(t+1);if(I){const w=f(I);w&&(g[D.Good]={scheduled_minutes:Math.round(w),next_step:t+1})}}return g};function sT(){const n=this.review_time.getTime(),e=this.current.reps,t=this.current.difficulty*this.current.stability;return`${n}_${e}_${t}`}var mi=(n=>(n.SCHEDULER="Scheduler",n.LEARNING_STEPS="LearningSteps",n.SEED="Seed",n))(mi||{});class uf{last;current;review_time;next=new Map;algorithm;strategies;elapsed_days=0;constructor(e,t,s,r){this.algorithm=s,this.last=G.card(e),this.current=G.card(e),this.review_time=G.time(t),this.strategies=r,this.init()}checkGrade(e){if(!Number.isFinite(e)||e<0||e>4)throw new Error(`Invalid grade "${e}",expected 1-4`)}init(){const{state:e,last_review:t}=this.current;let s=0;e!==z.New&&t&&(s=eT(t,this.review_time)),this.current.last_review=this.review_time,this.elapsed_days=s,this.current.elapsed_days=s,this.current.reps+=1;let r=sT;if(this.strategies){const i=this.strategies.get(mi.SEED);i&&(r=i)}this.algorithm.seed=r.call(this)}preview(){return{[D.Again]:this.review(D.Again),[D.Hard]:this.review(D.Hard),[D.Good]:this.review(D.Good),[D.Easy]:this.review(D.Easy),[Symbol.iterator]:this.previewIterator.bind(this)}}*previewIterator(){for(const e of XE)yield this.review(e)}review(e){const{state:t}=this.last;let s;switch(this.checkGrade(e),t){case z.New:s=this.newState(e);break;case z.Learning:case z.Relearning:s=this.learningState(e);break;case z.Review:s=this.reviewState(e);break}return s}buildLog(e){const{last_review:t,due:s,elapsed_days:r}=this.last;return{rating:e,state:this.current.state,due:t||s,stability:this.current.stability,difficulty:this.current.difficulty,elapsed_days:this.elapsed_days,last_elapsed_days:r,scheduled_days:this.current.scheduled_days,learning_steps:this.current.learning_steps,review:this.review_time}}}class rT{c;s0;s1;s2;constructor(e){const t=iT();this.c=1,this.s0=t(" "),this.s1=t(" "),this.s2=t(" "),e==null&&(e=Date.now()),this.s0-=t(e),this.s0<0&&(this.s0+=1),this.s1-=t(e),this.s1<0&&(this.s1+=1),this.s2-=t(e),this.s2<0&&(this.s2+=1)}next(){const e=2091639*this.s0+this.c*23283064365386963e-26;return this.s0=this.s1,this.s1=this.s2,this.c=e|0,this.s2=e-this.c,this.s2}set state(e){this.c=e.c,this.s0=e.s0,this.s1=e.s1,this.s2=e.s2}get state(){return{c:this.c,s0:this.s0,s1:this.s1,s2:this.s2}}}function iT(){let n=4022871197;return function(t){t=String(t);for(let s=0;s<t.length;s++){n+=t.charCodeAt(s);let r=.02519603282416938*n;n=r>>>0,r-=n,r*=n,n=r>>>0,r-=n,n+=r*4294967296}return(n>>>0)*23283064365386963e-26}}function oT(n){const e=new rT(n),t=()=>e.next();return t.int32=()=>e.next()*4294967296|0,t.double=()=>t()+(t()*2097152|0)*11102230246251565e-32,t.state=()=>e.state,t.importState=s=>(e.state=s,t),t}const aT=.9,cT=36500,lT=!1,_i=!0,uT=Object.freeze(["1m","10m"]),hT=Object.freeze(["10m"]),Ke=.001,_r=100,Iu=.5,dT=.1542,Au=Object.freeze([.212,1.2931,2.3065,8.2956,6.4133,.8334,3.0194,.001,1.8722,.1666,.796,1.4835,.0614,.2629,1.6483,.6014,1.8729,.5425,.0912,.0658,dT]),fT=2,pT=(n,e=_i)=>[[Ke,_r],[Ke,_r],[Ke,_r],[Ke,_r],[1,10],[.001,4],[.001,4],[.001,.75],[0,4.5],[0,.8],[.001,3.5],[.001,5],[.001,.25],[.001,.9],[0,4],[0,1],[1,6],[0,n],[0,n],[e?.01:0,.8],[.1,.8]],lo=(n,e,t=_i)=>{let s=fT;if(Math.max(0,e)>1){const i=-(Math.log(n[11])+Math.log(Math.pow(2,n[13])-1)+n[14]*.3)/e;s=Oe(+i.toFixed(8),.01,2)}return pT(s,t).slice(0,n.length).map(([i,a],c)=>Oe(n[c]||0,i,a))},Fa=(n,e=0,t=_i)=>{if(n===void 0)return[...Au];switch(n.length){case 21:return lo(Array.from(n),e,t);case 19:return console.debug("[FSRS-6]auto fill w from 19 to 21 length"),lo(Array.from(n),e,t).concat([0,Iu]);case 17:{const s=lo(Array.from(n),e,t);return s[4]=+(s[5]*2+s[4]).toFixed(8),s[5]=+(Math.log(s[5]*3+1)/3).toFixed(8),s[6]=+(s[6]+.5).toFixed(8),console.debug("[FSRS-6]auto fill w from 17 to 21 length"),s.concat([0,0,0,Iu])}default:return console.warn("[FSRS]Invalid parameters length, using default parameters"),[...Au]}},Bo=n=>{const e=Array.isArray(n?.learning_steps)?n.learning_steps:uT,t=Array.isArray(n?.relearning_steps)?n.relearning_steps:hT,s=n?.enable_short_term??_i,r=Fa(n?.w,t.length,s);return{request_retention:n?.request_retention||aT,maximum_interval:n?.maximum_interval||cT,w:r,enable_fuzz:n?.enable_fuzz??lT,enable_short_term:s,learning_steps:e,relearning_steps:t}};function Yr(n,e){return{due:n?G.time(n):new Date,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:0,lapses:0,learning_steps:0,state:z.New,last_review:void 0}}const La=n=>{const e=typeof n=="number"?-n:-n[20],t=Math.exp(Math.pow(e,-1)*Math.log(.9))-1;return{decay:e,factor:+t.toFixed(8)}};function jo(n,e,t){const{decay:s,factor:r}=La(n);return+Math.pow(1+r*e/t,s).toFixed(8)}class gT{param;intervalModifier;_seed;constructor(e){this.param=new Proxy(Bo(e),this.params_handler_proxy()),this.intervalModifier=this.calculate_interval_modifier(this.param.request_retention),this.forgetting_curve=jo.bind(this,this.param.w)}get interval_modifier(){return this.intervalModifier}set seed(e){this._seed=e}calculate_interval_modifier(e){if(e<=0||e>1)throw new Error("Requested retention rate should be in the range (0,1]");const{decay:t,factor:s}=La(this.param.w);return+((Math.pow(e,1/t)-1)/s).toFixed(8)}get parameters(){return this.param}set parameters(e){this.update_parameters(e)}params_handler_proxy(){const e=this;return{set:function(t,s,r){return s==="request_retention"&&Number.isFinite(r)?e.intervalModifier=e.calculate_interval_modifier(Number(r)):s==="w"&&(r=Fa(r,t.relearning_steps.length,t.enable_short_term),e.forgetting_curve=jo.bind(this,r),e.intervalModifier=e.calculate_interval_modifier(Number(t.request_retention))),Reflect.set(t,s,r),!0}}}update_parameters(e){const t=Bo(e);for(const s in t){const r=s;this.param[r]=t[r]}}init_stability(e){return Math.max(this.param.w[e-1],.1)}init_difficulty(e){return+(this.param.w[4]-Math.exp((e-1)*this.param.w[5])+1).toFixed(8)}apply_fuzz(e,t){if(!this.param.enable_fuzz||e<2.5)return Math.round(e);const r=oT(this._seed)(),{min_ivl:i,max_ivl:a}=ZE(e,t,this.param.maximum_interval);return Math.floor(r*(a-i+1)+i)}next_interval(e,t){const s=Math.min(Math.max(1,Math.round(e*this.intervalModifier)),this.param.maximum_interval);return this.apply_fuzz(s,t)}linear_damping(e,t){return+(e*(10-t)/9).toFixed(8)}next_difficulty(e,t){const s=-this.param.w[6]*(t-3),r=e+this.linear_damping(s,e);return Oe(this.mean_reversion(this.init_difficulty(D.Easy),r),1,10)}mean_reversion(e,t){return+(this.param.w[7]*e+(1-this.param.w[7])*t).toFixed(8)}next_recall_stability(e,t,s,r){const i=D.Hard===r?this.param.w[15]:1,a=D.Easy===r?this.param.w[16]:1;return+Oe(t*(1+Math.exp(this.param.w[8])*(11-e)*Math.pow(t,-this.param.w[9])*(Math.exp((1-s)*this.param.w[10])-1)*i*a),Ke,36500).toFixed(8)}next_forget_stability(e,t,s){return+Oe(this.param.w[11]*Math.pow(e,-this.param.w[12])*(Math.pow(t+1,this.param.w[13])-1)*Math.exp((1-s)*this.param.w[14]),Ke,36500).toFixed(8)}next_short_term_stability(e,t){const s=Math.pow(e,-this.param.w[19])*Math.exp(this.param.w[17]*(t-3+this.param.w[18])),r=t>=3?Math.max(s,1):s;return+Oe(e*r,Ke,36500).toFixed(8)}forgetting_curve;next_state(e,t,s){const{difficulty:r,stability:i}=e??{difficulty:0,stability:0};if(t<0)throw new Error(`Invalid delta_t "${t}"`);if(s<0||s>4)throw new Error(`Invalid grade "${s}"`);if(r===0&&i===0)return{difficulty:Oe(this.init_difficulty(s),1,10),stability:this.init_stability(s)};if(s===0)return{difficulty:r,stability:i};if(r<1||i<Ke)throw new Error(`Invalid memory state { difficulty: ${r}, stability: ${i} }`);const a=this.forgetting_curve(t,i),c=this.next_recall_stability(r,i,a,s),u=this.next_forget_stability(r,i,a),h=this.next_short_term_stability(i,s);let f=c;if(s===1){let[_,I]=[0,0];this.param.enable_short_term&&(_=this.param.w[17],I=this.param.w[18]);const w=i/Math.exp(_*I);f=Oe(+w.toFixed(8),Ke,u)}return t===0&&this.param.enable_short_term&&(f=h),{difficulty:this.next_difficulty(r,s),stability:f}}}class Su extends uf{learningStepsStrategy;constructor(e,t,s,r){super(e,t,s,r);let i=nT;if(this.strategies){const a=this.strategies.get(mi.LEARNING_STEPS);a&&(i=a)}this.learningStepsStrategy=i}getLearningInfo(e,t){const s=this.algorithm.parameters;e.learning_steps=e.learning_steps||0;const r=this.learningStepsStrategy(s,e.state,(this.current.state===z.Learning&&t!==D.Again&&t!==D.Hard,e.learning_steps)),i=Math.max(0,r[t]?.scheduled_minutes??0),a=Math.max(0,r[t]?.next_step??0);return{scheduled_minutes:i,next_steps:a}}applyLearningSteps(e,t,s){const{scheduled_minutes:r,next_steps:i}=this.getLearningInfo(this.current,t);if(r>0&&r<1440)e.learning_steps=i,e.scheduled_days=0,e.state=s,e.due=Ge(this.review_time,Math.round(r),!1);else if(e.state=z.Review,r>=1440)e.learning_steps=i,e.due=Ge(this.review_time,Math.round(r),!1),e.scheduled_days=Math.floor(r/1440);else{e.learning_steps=0;const a=this.algorithm.next_interval(e.stability,this.elapsed_days);e.scheduled_days=a,e.due=Ge(this.review_time,a,!0)}}newState(e){const t=this.next.get(e);if(t)return t;const s=G.card(this.current);s.difficulty=Oe(this.algorithm.init_difficulty(e),1,10),s.stability=this.algorithm.init_stability(e),this.applyLearningSteps(s,e,z.Learning);const r={card:s,log:this.buildLog(e)};return this.next.set(e,r),r}learningState(e){const t=this.next.get(e);if(t)return t;const{state:s,difficulty:r,stability:i}=this.last,a=G.card(this.current);a.difficulty=this.algorithm.next_difficulty(r,e),a.stability=this.algorithm.next_short_term_stability(i,e),this.applyLearningSteps(a,e,s);const c={card:a,log:this.buildLog(e)};return this.next.set(e,c),c}reviewState(e){const t=this.next.get(e);if(t)return t;const s=this.elapsed_days,{difficulty:r,stability:i}=this.last,a=this.algorithm.forgetting_curve(s,i),c=G.card(this.current),u=G.card(this.current),h=G.card(this.current),f=G.card(this.current);this.next_ds(c,u,h,f,r,i,a),this.next_interval(u,h,f,s),this.next_state(u,h,f),this.applyLearningSteps(c,D.Again,z.Relearning),c.lapses+=1;const g={card:c,log:this.buildLog(D.Again)},_={card:u,log:super.buildLog(D.Hard)},I={card:h,log:super.buildLog(D.Good)},w={card:f,log:super.buildLog(D.Easy)};return this.next.set(D.Again,g),this.next.set(D.Hard,_),this.next.set(D.Good,I),this.next.set(D.Easy,w),this.next.get(e)}next_ds(e,t,s,r,i,a,c){e.difficulty=this.algorithm.next_difficulty(i,D.Again);const u=a/Math.exp(this.algorithm.parameters.w[17]*this.algorithm.parameters.w[18]),h=this.algorithm.next_forget_stability(i,a,c);e.stability=Oe(+u.toFixed(8),Ke,h),t.difficulty=this.algorithm.next_difficulty(i,D.Hard),t.stability=this.algorithm.next_recall_stability(i,a,c,D.Hard),s.difficulty=this.algorithm.next_difficulty(i,D.Good),s.stability=this.algorithm.next_recall_stability(i,a,c,D.Good),r.difficulty=this.algorithm.next_difficulty(i,D.Easy),r.stability=this.algorithm.next_recall_stability(i,a,c,D.Easy)}next_interval(e,t,s,r){let i,a;i=this.algorithm.next_interval(e.stability,r),a=this.algorithm.next_interval(t.stability,r),i=Math.min(i,a),a=Math.max(a,i+1);const c=Math.max(this.algorithm.next_interval(s.stability,r),a+1);e.scheduled_days=i,e.due=Ge(this.review_time,i,!0),t.scheduled_days=a,t.due=Ge(this.review_time,a,!0),s.scheduled_days=c,s.due=Ge(this.review_time,c,!0)}next_state(e,t,s){e.state=z.Review,e.learning_steps=0,t.state=z.Review,t.learning_steps=0,s.state=z.Review,s.learning_steps=0}}class bu extends uf{newState(e){const t=this.next.get(e);if(t)return t;this.current.scheduled_days=0,this.current.elapsed_days=0;const s=G.card(this.current),r=G.card(this.current),i=G.card(this.current),a=G.card(this.current);return this.init_ds(s,r,i,a),this.next_interval(s,r,i,a,0),this.next_state(s,r,i,a),this.update_next(s,r,i,a),this.next.get(e)}init_ds(e,t,s,r){e.difficulty=Oe(this.algorithm.init_difficulty(D.Again),1,10),e.stability=this.algorithm.init_stability(D.Again),t.difficulty=Oe(this.algorithm.init_difficulty(D.Hard),1,10),t.stability=this.algorithm.init_stability(D.Hard),s.difficulty=Oe(this.algorithm.init_difficulty(D.Good),1,10),s.stability=this.algorithm.init_stability(D.Good),r.difficulty=Oe(this.algorithm.init_difficulty(D.Easy),1,10),r.stability=this.algorithm.init_stability(D.Easy)}learningState(e){return this.reviewState(e)}reviewState(e){const t=this.next.get(e);if(t)return t;const s=this.elapsed_days,{difficulty:r,stability:i}=this.last,a=this.algorithm.forgetting_curve(s,i),c=G.card(this.current),u=G.card(this.current),h=G.card(this.current),f=G.card(this.current);return this.next_ds(c,u,h,f,r,i,a),this.next_interval(c,u,h,f,s),this.next_state(c,u,h,f),c.lapses+=1,this.update_next(c,u,h,f),this.next.get(e)}next_ds(e,t,s,r,i,a,c){e.difficulty=this.algorithm.next_difficulty(i,D.Again);const u=this.algorithm.next_forget_stability(i,a,c);e.stability=Oe(a,Ke,u),t.difficulty=this.algorithm.next_difficulty(i,D.Hard),t.stability=this.algorithm.next_recall_stability(i,a,c,D.Hard),s.difficulty=this.algorithm.next_difficulty(i,D.Good),s.stability=this.algorithm.next_recall_stability(i,a,c,D.Good),r.difficulty=this.algorithm.next_difficulty(i,D.Easy),r.stability=this.algorithm.next_recall_stability(i,a,c,D.Easy)}next_interval(e,t,s,r,i){let a,c,u,h;a=this.algorithm.next_interval(e.stability,i),c=this.algorithm.next_interval(t.stability,i),u=this.algorithm.next_interval(s.stability,i),h=this.algorithm.next_interval(r.stability,i),a=Math.min(a,c),c=Math.max(c,a+1),u=Math.max(u,c+1),h=Math.max(h,u+1),e.scheduled_days=a,e.due=Ge(this.review_time,a,!0),t.scheduled_days=c,t.due=Ge(this.review_time,c,!0),s.scheduled_days=u,s.due=Ge(this.review_time,u,!0),r.scheduled_days=h,r.due=Ge(this.review_time,h,!0)}next_state(e,t,s,r){e.state=z.Review,e.learning_steps=0,t.state=z.Review,t.learning_steps=0,s.state=z.Review,s.learning_steps=0,r.state=z.Review,r.learning_steps=0}update_next(e,t,s,r){const i={card:e,log:this.buildLog(D.Again)},a={card:t,log:super.buildLog(D.Hard)},c={card:s,log:super.buildLog(D.Good)},u={card:r,log:super.buildLog(D.Easy)};this.next.set(D.Again,i),this.next.set(D.Hard,a),this.next.set(D.Good,c),this.next.set(D.Easy,u)}}class mT{fsrs;constructor(e){this.fsrs=e}replay(e,t,s){return this.fsrs.next(e,t,s)}handleManualRating(e,t,s,r,i,a,c){if(typeof t>"u")throw new Error("reschedule: state is required for manual rating");let u,h;if(t===z.New)u={rating:D.Manual,state:t,due:c??s,stability:e.stability,difficulty:e.difficulty,elapsed_days:r,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:s},h=Yr(s),h.last_review=s;else{if(typeof c>"u")throw new Error("reschedule: due is required for manual rating");const f=Rn(c,s,"days");u={rating:D.Manual,state:e.state,due:e.last_review||e.due,stability:e.stability,difficulty:e.difficulty,elapsed_days:r,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:s},h={...e,state:t,due:c,last_review:s,stability:i||e.stability,difficulty:a||e.difficulty,elapsed_days:r,scheduled_days:f,reps:e.reps+1}}return{card:h,log:u}}reschedule(e,t){const s=[];let r=Yr(e.due);for(const i of t){let a;if(i.review=G.time(i.review),i.rating===D.Manual){let c=0;r.state!==z.New&&r.last_review&&(c=Rn(i.review,r.last_review,"days")),a=this.handleManualRating(r,i.state,i.review,c,i.stability,i.difficulty,i.due?G.time(i.due):void 0)}else a=this.replay(r,i.review,i.rating);s.push(a),r=a.card}return s}calculateManualRecord(e,t,s,r){if(!s)return null;const{card:i,log:a}=s,c=G.card(e);return c.due.getTime()===i.due.getTime()?null:(c.scheduled_days=Rn(i.due,c.due,"days"),this.handleManualRating(c,i.state,G.time(t),a.elapsed_days,r?i.stability:void 0,r?i.difficulty:void 0,i.due))}}let _T=class extends gT{strategyHandler=new Map;Scheduler;constructor(e){super(e);const{enable_short_term:t}=this.parameters;this.Scheduler=t?Su:bu}params_handler_proxy(){const e=this;return{set:function(t,s,r){return s==="request_retention"&&Number.isFinite(r)?e.intervalModifier=e.calculate_interval_modifier(Number(r)):s==="enable_short_term"?e.Scheduler=r===!0?Su:bu:s==="w"&&(r=Fa(r,t.relearning_steps.length,t.enable_short_term),e.forgetting_curve=jo.bind(this,r),e.intervalModifier=e.calculate_interval_modifier(Number(t.request_retention))),Reflect.set(t,s,r),!0}}}useStrategy(e,t){return this.strategyHandler.set(e,t),this}clearStrategy(e){return e?this.strategyHandler.delete(e):this.strategyHandler.clear(),this}getScheduler(e,t){const r=this.strategyHandler.get(mi.SCHEDULER)||this.Scheduler;return new r(e,t,this,this.strategyHandler)}repeat(e,t,s){const i=this.getScheduler(e,t).preview();return s&&typeof s=="function"?s(i):i}next(e,t,s,r){const i=this.getScheduler(e,t),a=G.rating(s);if(a===D.Manual)throw new Error("Cannot review a manual rating");const c=i.review(a);return r&&typeof r=="function"?r(c):c}get_retrievability(e,t,s=!0){const r=G.card(e);t=t?G.time(t):new Date;const i=r.state!==z.New?Math.max(Rn(t,r.last_review,"days"),0):0,a=r.state!==z.New?this.forgetting_curve(i,+r.stability.toFixed(8)):0;return s?`${(a*100).toFixed(2)}%`:a}rollback(e,t,s){const r=G.card(e),i=G.review_log(t);if(i.rating===D.Manual)throw new Error("Cannot rollback a manual rating");let a,c,u;switch(i.state){case z.New:a=i.due,c=void 0,u=0;break;case z.Learning:case z.Relearning:case z.Review:a=i.review,c=i.due,u=r.lapses-(i.rating===D.Again&&i.state===z.Review?1:0);break}const h={...r,due:a,stability:i.stability,difficulty:i.difficulty,elapsed_days:i.last_elapsed_days,scheduled_days:i.scheduled_days,reps:Math.max(0,r.reps-1),lapses:Math.max(0,u),learning_steps:i.learning_steps,state:i.state,last_review:c};return s&&typeof s=="function"?s(h):h}forget(e,t,s=!1,r){const i=G.card(e);t=G.time(t);const a=i.state===z.New?0:Rn(t,i.due,"days"),c={rating:D.Manual,state:i.state,due:i.due,stability:i.stability,difficulty:i.difficulty,elapsed_days:0,last_elapsed_days:i.elapsed_days,scheduled_days:a,learning_steps:i.learning_steps,review:t},h={card:{...i,due:t,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:s?0:i.reps,lapses:s?0:i.lapses,learning_steps:0,state:z.New,last_review:i.last_review},log:c};return r&&typeof r=="function"?r(h):h}reschedule(e,t=[],s={}){const{recordLogHandler:r,reviewsOrderBy:i,skipManual:a=!0,now:c=new Date,update_memory_state:u=!1}=s;i&&typeof i=="function"&&t.sort(i),a&&(t=t.filter(w=>w.rating!==D.Manual));const h=new mT(this),f=h.reschedule(s.first_card||Yr(),t),g=f.length,_=G.card(e),I=h.calculateManualRecord(_,c,g?f[g-1]:void 0,u);return r&&typeof r=="function"?{collections:f.map(r),reschedule_item:I?r(I):null}:{collections:f,reschedule_item:I}}};const yT=n=>new _T(n||{}),hf=(n,e,t)=>{t||(e?t=e.getSubtreeNodes():t=n.getAllChessNodes()),t=t.filter(a=>a.isNewLearnable());const s=t.filter(a=>a.isOpening),r=t.filter(a=>!a.isOpening);let i;if(s.length>0&&r.length>0)Math.random()<.8?(i=!0,t=s):(i=!1,t=r);else if(s.length)i=!0,t=s;else if(r.length)i=!1,t=r;else return null;if(i){t=_e.sortBy(t,a=>-a.totalFrequency);for(const a of t)if(a.hasNewLearnableOpeningTrail())return a;i=!1,t=r}if(t.length){let a=_e.sample(t);for(;a.parents.length===1&&a.parents[0].parents.length===1&&a.parents[0].parents[0].isNewLearnable();)a=a.parents[0].parents[0];return a}return null},df=(n,e,t)=>{t||(e?t=e.getSubtreeNodes():t=n.getAllChessNodes());const s=new Date().getTime();return t.filter(r=>r.sequenceCard&&r.sequenceCard.isDue(s)&&r.totalFrequency!==0)},ff=(n,e,t)=>{if(t||(e?t=e.getSubtreeNodes():t=n.getAllChessNodes()),t=t.filter(r=>!!r.sequenceCard),t.length===0)return null;const s=new Date;return _e.minBy(t,r=>ja(r.sequenceCard.getSchedulingCard(),s))},Ua=n=>n.length===0?null:_e.minBy(n,e=>e.sequenceCard.getJitteredReviewTime()),pf=(n,e,t)=>{let s;e?s=e.getSubtreeNodes():s=n.getAllChessNodes();const r=df(n,e,s),i=hf(n,e,s),a=t.mixNewCards?!!i&&Math.random()<1/(r.length+1):!1,c={chessNode:null,statistics:{newCardsDue:0,learningCardsDue:0,reviewCardsDue:0,relearningCardsDue:0,totalOpeningCards:0,totalEndgameCards:0,totalNewLearnableCards:0}},u=c.statistics;for(const h of r){const f=h.sequenceCard.getState();f===z.New?u.newCardsDue+=1:f===z.Learning?u.learningCardsDue+=1:f===z.Relearning?u.relearningCardsDue+=1:f===z.Review&&(u.reviewCardsDue+=1)}for(const h of s)h.sequenceCard?h.isOpening?u.totalOpeningCards+=1:u.totalEndgameCards+=1:h.isNewLearnable()&&(u.totalNewLearnableCards+=1);if(i&&(a||r.length===0))i.sequenceCard=Ze.createEmptyCard(i,"sequence"),c.chessNode=i;else if(r.length)c.chessNode=Ua(r);else{const h=ff(n,e,s);if(h)c.chessNode=h;else throw new Error("getNextFSRS: no new nodes, no due nodes, and no nodes to cram!")}return c},Ba=Bo({enable_fuzz:!0,enable_short_term:!0,learning_steps:["1m","10m","30m","1h","6h","12h"],relearning_steps:["10m","1h","6h"],request_retention:.94}),gf=yT(Ba),Pr=(n,e,t=new Date)=>gf.next(n,t,e).card,ja=(n,e=new Date)=>{if(!n.last_review)return 0;if(!n.stability||n.stability<=0)throw new Error("Card must have positive stability");const t=1e3*60*60*24,s=Math.max(0,(e.getTime()-n.last_review.getTime())/t),{decay:r,factor:i}=La(Ba.w);return Math.pow(1+i*s/n.stability,r)},SI=Object.freeze(Object.defineProperty({__proto__:null,fsrsGenerator:gf,fsrsGeneratorParameters:Ba,getCardRetrievability:ja,getCramFSRSChessNode:ff,getDueFSRSChessNodes:df,getNewFSRSChessNode:hf,getNextFSRS:pf,getReviewedCard:Pr,selectDueFSRSChessNode:Ua},Symbol.toStringTag,{value:"Module"}));class Ze{constructor(e,t,s){this.card=e,this.node=t,this.type=s,this.temporaryCard=null,this.lastCard=null,this.lastReviewDate=null,this.isLastCardTemporary=!1}beforeReview(){this.lastReviewDate=new Date,this.isUsingTemporaryCard(this.lastReviewDate)?(this.temporaryCard||(this.temporaryCard=this.card),this.lastCard=this.temporaryCard,this.isLastCardTemporary=!0):(this.lastCard=this.card,this.isLastCardTemporary=!1)}review(e){if(!this.lastReviewDate||!this.lastCard)throw new Error("Cannot review without a last review date and card");this.isLastCardTemporary?this.temporaryCard=Pr(this.lastCard,e,this.lastReviewDate):(this.card=Pr(this.lastCard,e,this.lastReviewDate),this.temporaryCard=null)}getRereviewedCard(e){if(!this.lastReviewDate||!this.lastCard)throw new Error("Cannot review without a last review date and card");return Pr(this.lastCard,e,this.lastReviewDate)}getLastCard(){if(!this.lastCard)throw new Error("No last card available");return this.lastCard}wasLastCardTemporary(){return this.isLastCardTemporary}getSchedulingCard(){return this.isUsingTemporaryCard()?(this.temporaryCard||(this.temporaryCard=this.card),this.temporaryCard):this.card}isSolid(){const e=(this.card.due.getTime()-Date.now())/864e5;return this.card.reps>=20&&this.card.state===2&&e>1.5&&ja(this.card)>.999}isCardNew(){return this.card.state===z.New}isCardLearning(){return this.card.state===z.Learning}isCardLongReview(){return this.card.state===z.Review}isCardRelearning(){return this.card.state===z.Relearning}isCardUsingLearningSteps(){return this.isCardLearning()||this.isCardRelearning()}isUsingTemporaryCard(e=new Date){return e.getTime()<this.card.due.getTime()&&!this.isCardLongReview()}getState(){return this.card.state}getLearningStep(){return this.isCardUsingLearningSteps()?this.card.learning_steps:null}getJitteredReviewTime(){const e=12e5*Math.random();return this.card.due.getTime()+e}isDue(e=Date.now()){return this.card.due.getTime()<=e}isCramming(){return this.card.due.getTime()>Date.now()}hasEasyDefault(e){return!1}serialize(){return[this.card.difficulty,this.card.due.getTime(),this.card.elapsed_days,this.card.lapses,this.card.last_review?.getTime()??null,this.card.learning_steps,this.card.reps,this.card.scheduled_days,this.card.stability,this.card.state]}equalsOtherNode(e){return this.type===e.type&&this.serialize().every((t,s)=>t===e.serialize()[s])}static createEmptyCard(e,t){return new Ze(Yr(new Date),e,t)}static deserialize(e,t,s){return new Ze({difficulty:s[0],due:new Date(s[1]),elapsed_days:s[2],lapses:s[3],last_review:s[4]?new Date(s[4]):void 0,learning_steps:s[5],reps:s[6],scheduled_days:s[7],stability:s[8],state:s[9]},e,t)}}const bI=Object.freeze(Object.defineProperty({__proto__:null,NodeCard:Ze},Symbol.toStringTag,{value:"Module"}));class Le{constructor(e,t,s,r){if(this.fen=e,this.repository=t,this.isOpening=s,this.isUserMove=r,this.moves=[],this.name=null,this.sequenceCard=null,this.isTournamentReady=!0,this.children=[],this.parents=[],this.moveMap={},this.pairedNode=null,this.allDistribution=null,this.totalFrequency=null,this.stockfishEntry=null,this.smartDistribution=null,!s&&e!==at(e))throw new Error("Endgame nodes must be created with canonical FENs");this.isWhite=Ue(e),e===oe&&(this.name="Initial Position"),this.allMoves=gi(this.fen)}addMove(e){if(this.moves.includes(e))return this.moveMap[e];this.moves.push(e);let t=Ve(this.fen,e);this.isOpening||(t=at(t));const s=this.repository.ensureChessNode(t,!this.isUserMove,this.isOpening);return Le.connect(this,s,e),this.isUserMove&&this.moves.length>1&&this.sequenceCard&&(this.sequenceCard=null),s}setName(e){this.name=e,this.sequenceCard&&(this.sequenceCard=Ze.createEmptyCard(this,"sequence")),this.pairedNode&&(this.pairedNode.name=e,this.pairedNode.sequenceCard&&(this.pairedNode.sequenceCard=Ze.createEmptyCard(this.pairedNode,"sequence")))}deleteName(){this.name=null,this.pairedNode&&(this.pairedNode.name=null)}isLearnable(){return this.isUserMove&&(!this.isOpening||this.moves.length===1)}isNewLearnable(){return this.isLearnable()&&!this.sequenceCard}isOpeningOpponentForcedMove(){return this.isOpening&&!this.isUserMove&&this.moves.length===1&&(this.allDistribution?.[this.moves[0]]??0)>=.95}getMappedMoves(e){return this.isOpening?this.moves:this.moves.map(t=>ho(e,t))}getOnlyMove(){if(this.moves.length!==1)throw new Error("Node does not have exactly one move");return this.moves[0]}allowLearningBelow(){return this.isUserMove?!!this.sequenceCard||this.moves.length>1:!0}static isTrailLearnable(e){const t=e[e.length-1];return e.every(s=>s===t||s.allowLearningBelow())}getOpeningChildMove(e){if(!this.children.includes(e))throw new Error("Child not found");for(const t of Object.keys(this.moveMap))if(this.moveMap[t]===e)return t;throw new Error("Move not found")}getChildMoves(e){if(!this.children.includes(e))throw new Error("Child not found");const t=[];for(const s of Object.keys(this.moveMap))this.moveMap[s]===e&&t.push(s);return t}getChildNode(e){if(!this.moves.includes(e))throw new Error("Move not found");const t=this.moveMap[e];if(!t)throw new Error("Child node not found for move "+e);return t}isWhiteTurn(){return new Jr(this.fen).turn()==="w"}getOpeningHistories(){return this.isOpening?this.parents.length===0?[[]]:this.parents.flatMap(e=>{const t=e.getOpeningChildMove(this);return e.getOpeningHistories().map(s=>[...s,t])}):[]}getOpeningTrails(){return this.isOpening?this.parents.length===0?[[this]]:this.parents.flatMap(e=>e.getOpeningTrails().map(t=>[...t,this])):[]}hasNewLearnableOpeningTrail(){if(!this.isOpening||!this.isNewLearnable())return!1;const e=t=>t.allowLearningBelow()?t.parents.length===0&&t.fen===oe?!0:t.parents.some(e):!1;return this.parents.some(e)}static getOpeningTrailFrequency(e){let t=1;for(let s=0;s<e.length-1;s++){const r=e[s];if(r.isUserMove){const i=e[s+1],a=r.getChildMoves(i);for(const c of a)t*=r.allDistribution[c]}}return t}static getOpeningHistoryFromTrail(e){if(e.length===0)throw new Error("Trail must have at least one node");const t=[];for(let s=0;s<e.length-1;s++){const r=e[s],i=e[s+1],a=r.getChildMoves(i);if(a.length!==1)throw new Error("There should be no symmetry causing move disambiguation");t.push(a[0])}return t}getOpeningMostPopularHistory(){if(!this.isOpening)return[];if(this.parents.length===0)return[];{const e=t=>{if(t.parents.length===0)return{history:[],frequency:1};let s=[],r=-1;for(const i of t.parents){const a=i.getChildMoves(t),c=e(i);for(const u of a){const h=c.frequency*(i.isUserMove?1:i.allDistribution[u]);h>r&&(r=h,s=[...c.history,u])}}return{history:s,frequency:r}};return e(this).history}}getSubtreeNodes(){const e=new Set,t=s=>{if(!e.has(s)){e.add(s);for(const r of s.children)t(r)}};return t(this),[...e]}getOpeningSubtreeStats(){if(!this.isOpening)throw new Error("getOpeningSubtreeStats can only be called on opening nodes");let e=0,t=0,s=0,r=0,i=0,a=0,c=null,u=null,h=0,f=0,g=0,_=0,I=0,w=0,P=0,R=0;const B=new Set,F=V=>{if(!B.has(V)){if(B.add(V),t++,V.isUserMove){if(e++,V.name===null&&(s++,V.totalFrequency>i&&(i=V.totalFrequency),V.parents.some(L=>L.moves.length>1)&&r++),V.sequenceCard){const L=V.sequenceCard.getState(),Y=V.sequenceCard.isDue();L===z.New?(I++,Y&&h++):L===z.Learning?(w++,Y&&f++):L===z.Review?(P++,Y&&g++):L===z.Relearning&&(R++,Y&&_++)}}else{for(const L of V.allMoves){if(V.moves.includes(L))continue;const Y=V.allDistribution[L]*V.totalFrequency;Y>a&&(a=Y)}if(V.children.length===0){const L=V.stockfishEntry;L!==null&&((c===null||Tu(L,c))&&(c=L),(u===null||Tu(u,L))&&(u=L))}}for(const L of V.children)F(L)}};return F(this),{userMoveNodeCount:e,nodeCount:t,unnamedUserMoveCount:s,unnamedNontrivialUserMoveCount:r,maxFrequencyUnnamedUserMoveCount:i,maxLeafFrequency:a,minLeafStockfishEntry:c,maxLeafStockfishEntry:u,dueNew:h,dueLearning:f,dueReview:g,dueRelearning:_,totalNew:I,totalLearning:w,totalReview:P,totalRelearning:R}}getOurCardState(){return this.isUserMove?this.sequenceCard?.getState()||(this.moves.length>1?"branch":null):null}static connect(e,t,s){if(e.isUserMove===t.isUserMove)throw new Error("Cannot connect nodes with the same isUserMove value");e.children.includes(t)||e.children.push(t),t.parents.includes(e)||t.parents.push(e),e.moveMap[s]=t}static disconnect(e,t){const s=e.getChildMoves(t);for(const r of s)delete e.moveMap[r];e.moves=e.moves.filter(r=>!s.includes(r)),e.children=e.children.filter(r=>r!==t),t.parents=t.parents.filter(r=>r!==e)}static pair(e,t){if(e.fen!==t.fen)throw new Error("Cannot pair nodes with different FENs");if(e.isUserMove===t.isUserMove)throw new Error("Cannot pair nodes with the same isUserMove value");if(e.pairedNode=t,t.pairedNode=e,e.name==="Queen's Gambit Declined"&&t.name==="QGD"&&(t.name=e.name),e.name&&t.name&&e.name!==t.name)throw new Error("Cannot pair nodes with different names: "+e.name+" vs "+t.name);e.name&&!t.name?t.name=e.name:!e.name&&t.name&&(e.name=t.name)}static unpair(e,t){e.pairedNode=null,t.pairedNode=null}}const mf=n=>{let e="";for(let t=0;t<n.length;t++)t>0&&(e+=" "),t%2===0?e+=`${Math.floor(t/2)+1}. ${n[t]}`:e+=n[t];return e},RI=Object.freeze(Object.defineProperty({__proto__:null,getSimplePGN:mf},Symbol.toStringTag,{value:"Module"})),vT=n=>{if(n>60)return 1;{const e=1-Math.exp(-1.68);return(1-Math.exp(-.028*n))/e}},wT=n=>{if(n>1e3)return 1;{const e=1-Math.exp(-5);return Math.pow((1-Math.exp(-.005*n))/e,3)}};function ET(n,e,t){const s=Math.min(Math.max((n-e)/(t-e),0),1);return s*s*(3-2*s)}function _f(n,e,t){return 1/(1+Math.exp(-t*(n-e)))}const yf=n=>Math.max(.01,ET(n,1350,1700)),vf=n=>Math.max(1e-5,_f(n,2e3,.01)),wf=n=>Math.max(1e-5,_f(n,2300,.015)),TT=n=>Math.floor(n*1e5)/1e5,CI=Object.freeze(Object.defineProperty({__proto__:null,frequencyRounder:TT,getEndgameFrequencyTimeScrambleFactor:vT,getFrequencyEliteEloFactor:wf,getFrequencyHighEloFactor:vf,getFrequencyMidEloFactor:yf,getOpeningFrequencyTimeScrambleFactor:wT},Symbol.toStringTag,{value:"Module"})),Xr=(n,e=Number.POSITIVE_INFINITY)=>{const t={},s=_e.sortBy(Object.keys(n),i=>-n[i]);let r=0;for(const i of s){if(r++===e)break;t[i]=n[i]}return t},Ef=(n,e,t)=>{t||(t=e.map(()=>1/e.length));const s=e.map((h,f)=>qa(n,h));let r=_e.sum(e.map(h=>h.userWhiteFrequency)),i=_e.sum(e.map(h=>h.userBlackFrequency));const a=r+i;a>1e-15&&(r/=a,i/=a);let c=[0,0,0,0];for(const h of e){const f=h.userWhiteFrequency+h.userBlackFrequency;for(let g=0;g<4;g++)c[g]+=h.fallbackMix[g]*f}const u=_e.sum(c);for(let h=0;h<4;h++)c[h]/=u;return yi(n,{get(h){const f={},g=[];let _=0;for(let I=0;I<e.length;I++){const w=t[I]*s[I].get(h);g.push(w),_+=w}if(_>1e-15)for(let I=0;I<g.length;I++)g[I]/=_;for(let I=0;I<e.length;I++){const w=e[I].get(h);for(const P of Object.keys(w))f[P]=(f[P]??0)+w[P]*g[I]}return f},userWhiteFrequency:r,userBlackFrequency:i,fallbackMix:c})},yi=(n,e)=>{const t=new Map;for(const s of n.getAllOpeningChessNodes())t.set(s,e.get(s));return{get(s){const r=t.get(s);return r||vi(e.fallbackMix,e.userWhiteFrequency,e.userBlackFrequency).get(s)},userWhiteFrequency:e.userWhiteFrequency,userBlackFrequency:e.userBlackFrequency,fallbackMix:e.fallbackMix,map:t}},Tf=(n,e)=>e.map?e.map:yi(n,e).map,IT=(n,e)=>{const t={},s=Tf(n,e);for(const r of n.getAllOpeningChessNodes().filter(i=>!i.isUserMove)){const i=s.get(r);i&&(t[r.fen]=Xr(i))}return{distributions:t,userWhiteFrequency:e.userWhiteFrequency,userBlackFrequency:e.userBlackFrequency,fallbackMix:e.fallbackMix}},If=(n,e)=>yi(n,{get(t){if(!t.isUserMove){const s=e.distributions[t.fen];if(s)return s}return vi(e.fallbackMix,e.userWhiteFrequency,e.userBlackFrequency).get(t)},userWhiteFrequency:e.userWhiteFrequency,userBlackFrequency:e.userBlackFrequency,fallbackMix:e.fallbackMix}),Af={get(n){const e=n.smartDistribution?.mid;if(!e)throw new Error("midRepoDistribution requested for chess node with no mid distribution");return e},userWhiteFrequency:.5,userBlackFrequency:.5,fallbackMix:[1,0,0,0]},Sf={get(n){const e=n.smartDistribution?.high;if(!e)throw new Error("highRepoDistribution requested for chess node with no high distribution");return e},userWhiteFrequency:.5,userBlackFrequency:.5,fallbackMix:[0,1,0,0]},bf={get(n){const e=n.smartDistribution?.otbHigh;if(!e)throw new Error("otbHighRepoDistribution requested for chess node with no otbHigh distribution");return e},userWhiteFrequency:.5,userBlackFrequency:.5,fallbackMix:[0,0,1,0]},Rf={get(n){const e=n.smartDistribution?.otbElite;if(!e)throw new Error("otbEliteRepoDistribution requested for chess node with no otbElite distribution");return e},userWhiteFrequency:.5,userBlackFrequency:.5,fallbackMix:[0,0,0,1]},vi=(n,e=.5,t=.5)=>({get(s){const r={},i=(a,c)=>{for(const u of Object.keys(a))r[u]=(r[u]??0)+a[u]*c};return n[0]>0&&i(Af.get(s),n[0]),n[1]>0&&i(Sf.get(s),n[1]),n[2]>0&&i(bf.get(s),n[2]),n[3]>0&&i(Rf.get(s),n[3]),r},userWhiteFrequency:e,userBlackFrequency:t,fallbackMix:n});class AT{constructor(e,t){if(this.fen=e,this.moves=t,t.length>30)throw new Error("using bitsets, do not do that");this.fullBits=2**t.length-1}createBits(e){const t=this.moves.indexOf(e);if(t===-1)throw new Error("move not found in branch moves");return 1<<t}invertBits(e){return this.fullBits&~e}bitsToString(e){const t=[];for(let s=0;s<this.moves.length;s++)e&1<<s&&t.push(this.moves[s]);return t.join(", ")}}class Jt{constructor(e,t){this.branch=e,this.bits=t}toString(){return`(${this.branch.fen} with moves ${this.branch.bitsToString(this.bits)})`}}class Cn{constructor(e){this.choices=e}withChoice(e){return new Cn([...this.choices,e])}intersection(e){const t=[];for(const s of this.choices){const r=e.choices.find(i=>i.branch===s.branch)??null;if(r){const i=s.bits&r.bits;if(i===0)return null;t.push(new Jt(s.branch,i))}else t.push(s)}for(const s of e.choices)(this.choices.find(i=>i.branch===s.branch)??null)||t.push(s);return new Cn(t)}minus(e){const t=[],s=_e.uniq([...this.choices.map(i=>i.branch),...e.choices.map(i=>i.branch)]),r=[];for(let i=0;i<s.length;i++){const a=s[i];let c=this.choices.find(I=>I.branch===a)??null,u=e.choices.find(I=>I.branch===a)??null;if(!c&&u&&(c=new Jt(u.branch,u.branch.fullBits)),c&&!u&&(u=new Jt(c.branch,c.branch.fullBits)),!c||!u)throw new Error("unexpected, both choices should be non-null after this point");let h=null,f=null;const g=c.bits&u.bits,_=c.bits&~u.bits;if(g!==0&&(f=new Jt(c.branch,g)),_!==0&&(h=new Jt(c.branch,_)),h&&t.push(new Cn([...r,h,...s.slice(i+1).map(I=>this.choices.find(w=>w.branch===I)).filter(I=>I)])),f)r.push(f);else break}return t}}class tn{constructor(e,t){this.slice=e,this.frequency=t}withChoice(e){return new tn(this.slice.withChoice(e),this.frequency)}multiplied(e){return new tn(this.slice,this.frequency*e)}additiveIntersection(e){const t=this.slice.intersection(e.slice);return t?new tn(t,this.frequency+e.frequency):null}additiveDifference(e){return this.slice.minus(e.slice).map(s=>new tn(s,this.frequency))}toString(){return`  FrequencyChunk ${this.frequency}
${this.slice.choices.map(e=>`    ${e.toString()}`).join(`
`)}`}}class tt{constructor(e){this.chunks=e}getMaxFrequency(){return Math.max(0,...this.chunks.map(e=>e.frequency))}combine(e){let t=this.chunks.slice(),s=e.chunks.slice();for(;s.length;){const r=s.pop();let i=!1;for(const a of t){const c=r.additiveIntersection(a);if(c){t=t.filter(u=>u!==a),t.push(c),t.push(...a.additiveDifference(r)),s.push(...r.additiveDifference(a)),i=!0;break}}i||t.push(r)}return new tt(t)}multiplied(e){return new tt(this.chunks.map(t=>t.multiplied(e)))}withBranch(e,t){const s=e.createBits(t),r=new Jt(e,s);return new tt(this.chunks.map(i=>i.withChoice(r)))}toString(){return`FrequencySplit
${this.chunks.map(e=>e.toString()).join(`
`)}`}static getInitialFrequencySplit(e=1){return new tt([new tn(new Cn([]),e)])}static getZeroFrequencySplit(){return tt.getInitialFrequencySplit(0)}}const qa=(n,e,t=!1)=>{const s=new Map;for(const r of[!0,!1]){const i=n.getOpeningTopologicalSort(r),a=n.getInitialChessNode(r),c=new Map,u=(h,f)=>{if(!f)throw new Error("unexpected, frequency split should always be defined");c.set(h,f),s.set(h,f.getMaxFrequency())};for(const h of i)if(h===a)u(h,tt.getInitialFrequencySplit(r?e.userWhiteFrequency:e.userBlackFrequency));else if(t&&!h.isTournamentReady)u(h,tt.getZeroFrequencySplit());else{if(h.parents.length===0)throw new Error("unexpected, all non-initial nodes should have parents");if(h.parents.length===1){const f=h.parents[0],g=c.get(f);if(f.isUserMove)u(h,g);else{const I=e.get(f)[f.getOpeningChildMove(h)]??0;u(h,g.multiplied(I))}}else{let f=tt.getZeroFrequencySplit();for(const g of h.parents){const _=c.get(g);if(g.isUserMove)f=f.combine(_);else{const w=e.get(g)[g.getOpeningChildMove(h)]??0;f=f.combine(_.multiplied(w))}}u(h,f)}}}return s},qo=(n,e,t,s,r=.5,i=.5,a=5,c=2e3)=>{let u;if(n.rating){const g=yf(n.rating+200),_=vf(n.rating+200),I=wf(n.rating),w=R=>Math.max(0,Math.min(1,R));u=[w(g-_),w(_-I),2*I,I];const P=_e.sum(u);P>1e-15&&(u=u.map(R=>R/P))}else u=[.9,.1,0,0];const h=new Map;for(const g of[!0,!1])for(const _ of g?t:s){let I=oe;try{const w=[I];for(const P of _.moves)w.push(Ve(w[w.length-1],P))}catch{continue}for(const w of _.moves){const P=Ve(I,w);if(Ue(I)===g){const B=e.getChessNode(I,!1);if(B){const F=h.get(B)??{};let V=1;if(_.date){const L=new Date(_.date),Y=1e3*60*60*24,U=Math.abs(new Date().getTime()-L.getTime())/Y;V*=Math.exp(-U/c)}else V*=.4;(_.source==="otb"||_.source==="dgtlive")&&(V*=2),F[w]=(F[w]??0)+V,h.set(B,F)}}I=P}}const f=vi(u,r,i);return console.log("initial top 4 counts",Xr(h.get(e.getInitialChessNode(!1))??{},4)),console.log("after d4 top 4 counts",Xr(h.get(e.getChessNode(Ve(oe,"d4"),!1))??{},4)),{get(g){const _=f.get(g),I=h.get(g)??null;if(!I)return _;const w={};for(const R of Object.keys(_))w[R]=_[R]*a;for(const R of Object.keys(I))w[R]=(w[R]??0)+I[R];const P=_e.sum(Object.values(w));if(P>1e-15)for(const R of Object.keys(w))w[R]/=P;return w},userWhiteFrequency:r,userBlackFrequency:i,fallbackMix:u}},ST=(n,e,t,s,r=.5,i=.5)=>Ef(e,[qo(n,e,t,s,r,i,1,100),qo(n,e,t,s,r,i,7,2e3)],[.5,.5]),PI=Object.freeze(Object.defineProperty({__proto__:null,FrequencyBranch:AT,FrequencyChoice:Jt,FrequencyChunk:tn,FrequencySlice:Cn,FrequencySplit:tt,computedRepoDistribution:yi,frequencyBlendRepoDistributions:Ef,getFallbackRepoDistribution:vi,getPlayerCompositeRepoDistribution:ST,getPlayerRepoDistribution:qo,getRepoDistributionFrequencyMap:qa,getRepoDistributionFromOpponentRecord:If,getRepoDistributionMap:Tf,getRepoDistributionOpponentRecord:IT,getSortedDistribution:Xr,highRepoDistribution:Sf,midRepoDistribution:Af,otbEliteRepoDistribution:Rf,otbHighRepoDistribution:bf},Symbol.toStringTag,{value:"Module"}));class Cf{constructor(e){if(this.userMoveMap={},this.nonUserMoveMap={},e)if(Pf(e))console.log("loading old save state"),this.loadSaveState1(e);else if(Nf(e))this.loadSaveState2(e);else throw new Error("invalid save state version");this.ensureChessNode(oe,!0,!0),this.ensureChessNode(oe,!1,!0);for(const t of this.getAllChessNodes()){if(t.isUserMove&&t.children.length===0&&t.fen!==oe)throw new Error(`User move node ${t.fen} has no children`);if(!t.isUserMove&&t.parents.length===0&&t.fen!==oe)throw new Error(`Non-user move node ${t.fen} has no parents and is not the initial position`)}}updateDistributionsAndFrequencies(e,t=!1){const s=If(this,e),r=qa(this,s,t);for(const i of this.getAllOpeningChessNodes())i.allDistribution=s.get(i),i.totalFrequency=r.get(i)??0}equals(e){if(Object.keys(this.userMoveMap).length!==Object.keys(e.userMoveMap).length)return console.log("userMoveMap length mismatch",Object.keys(this.userMoveMap).length,Object.keys(e.userMoveMap).length),!1;if(Object.keys(this.nonUserMoveMap).length!==Object.keys(e.nonUserMoveMap).length)return console.log("nonUserMoveMap length mismatch",Object.keys(this.nonUserMoveMap).length,Object.keys(e.nonUserMoveMap).length),!1;for(const t of[this.userMoveMap,this.nonUserMoveMap])for(const s of Object.values(t)){const r=e.getChessNode(s.fen,s.isUserMove);if(!r||s.fen!==r.fen||s.isUserMove!==r.isUserMove||s.name!==r.name||s.moves.length!==r.moves.length)return console.log("node mismatch",s,r),!1;if(s.sequenceCard===null!=(r.sequenceCard===null)||s.sequenceCard&&r.sequenceCard&&!s.sequenceCard.equalsOtherNode(r.sequenceCard))return!1;for(const i of s.moves){if(!r.moves.includes(i))return console.log("move mismatch",i,s.fen),!1;const a=s.moveMap[i],c=r.moveMap[i];if(!a||!c)return console.log("child node missing for move",i,s.fen),!1;if(a.fen!==c.fen)return console.log("child node fen mismatch",i,s.fen,a.fen,c.fen),!1}}return!0}getChessNode(e,t){return(t?this.userMoveMap:this.nonUserMoveMap)[e]??null}getInitialChessNode(e){const t=this.getChessNode(oe,e);if(!t)throw new Error(`No initial chess node for ${oe} ${e}`);return t}hasFen(e){return!!this.getChessNode(e,!0)||!!this.getChessNode(e,!1)}getAllChessNodes(){return[...Object.values(this.userMoveMap),...Object.values(this.nonUserMoveMap)]}getAllOpeningChessNodes(){return[...Object.values(this.userMoveMap).filter(e=>e.isOpening),...Object.values(this.nonUserMoveMap).filter(e=>e.isOpening)]}getAllOpeningChessNodesWithInitialColor(e){return[...Object.values(this.userMoveMap).filter(t=>t.isOpening&&t.isWhite===e),...Object.values(this.nonUserMoveMap).filter(t=>t.isOpening&&t.isWhite!==e)]}ensureChessNode(e,t,s){const r=this.getChessNode(e,t);if(r)return r;const i=new Le(e,this,s,t);return this.addChessNode(i),i}addChessNode(e){const t=e.fen,s=e.isUserMove?this.userMoveMap:this.nonUserMoveMap;if(s[t]&&s[t]!==e)throw new Error(`Already have a different node for ${t} ${e.isUserMove}`);s[t]=e;const r=this.getChessNode(t,!e.isUserMove);r&&Le.pair(e,r)}deleteChessNode(e){const t=e.fen,s=e.isUserMove?this.userMoveMap:this.nonUserMoveMap;if(s[t]!==e)throw new Error(`Trying to delete a node that doesn't exist or doesn't match for ${t} ${e.isUserMove}`);for(const r of e.parents)Le.disconnect(r,e);for(const r of e.children)Le.disconnect(e,r);delete s[t],e.pairedNode&&Le.unpair(e,e.pairedNode)}connectNodes(){for(const e of[...Object.values(this.userMoveMap),...Object.values(this.nonUserMoveMap)])for(const t of e.moves){let s=Ve(e.fen,t);e.isOpening||(s=at(s));const r=this.getChessNode(s,!e.isUserMove);if(!r)throw new Error(`No child node for ${s} after move ${t} from ${e.fen}`);Le.connect(e,r,t)}}loadSaveState1(e){const t=(r,i)=>{const a=r.map(()=>"");a[0]=oe;const c=r.map(()=>!1);c[0]=i,r.forEach((u,h)=>{const f=a[h];if(!f)throw new Error("No fen?");const g=c[h];if(this.getChessNode(f,g))throw new Error(`duplicate ${h} ${f}`);const _=new Le(f,this,!0,g);if(u.n&&(_.name=u.n),u.m)for(let I=0;I<u.m.length;I+=2){const w=u.m[I],P=u.m[I+1];if(_.moves.includes(w))throw new Error(`duplicate move ${w} ${f}`);_.moves.includes(w)||_.moves.push(w);const R=Ve(f,w);if(a[P]&&a[P]!==R)throw new Error(`Fen mismatch? ${a[P]} vs ${R}`);a[P]=R,c[P]=!g}this.addChessNode(_)})};t(e.white,!0),t(e.black,!1),this.connectNodes();const s=["r1b2b1r/ppp2kpp/3p4/5qB1/8/2N2Q2/PPP2PPP/2KRR3 w - - 0 1"];for(const r of s){const i=this.getChessNode(r,!0);i&&this.deleteChessNode(i)}}loadSaveState2(e){const t=new Array(e.chessNodes.length).fill(null),s=new Array(e.chessNodes.length).fill(null),r=new Array(e.chessNodes.length).fill(null),i=new Array(e.chessNodes.length).fill(null);for(let a=0;a<e.chessNodes.length;a++){const c=e.chessNodes[a];let u;if(c.f){const f=!!c.u;u=new Le(c.f,this,c.f===oe,f),s[a]=c.f,r[a]=f}else{const f=s[a];if(!f)throw new Error(`No fen for non-root node at index ${a}`);const g=r[a];if(g===null)throw new Error(`No isUserMove for non-root node at index ${a}`);const _=i[a];if(_===null)throw new Error(`No isOpening for non-root node at index ${a}`);u=new Le(f,this,_,g)}t[a]=u;let h=u.fen;if(c.n&&(u.name=c.n),c.nt&&(u.isTournamentReady=!1),c.c&&(u.sequenceCard=Ze.deserialize(u,"sequence",c.c)),c.m)for(let f=0;f<c.m.length;f+=2){const g=c.m[f],_=c.m[f+1];if(u.moves.includes(g))throw new Error(`duplicate move ${g} ${h}`);u.moves.push(g);let I=Ve(h,g);if(u.isOpening||(I=at(I)),s[_]&&s[_]!==I)throw new Error(`Fen mismatch? ${s[_]} vs ${I}`);if(s[_]=I,r[_]!==null&&r[_]!==!u.isUserMove)throw new Error(`isUserMove mismatch for id ${_} at fen ${I}`);if(r[_]=!u.isUserMove,i[_]!==null&&i[_]!==u.isOpening)throw new Error(`isOpening mismatch for id ${_} at fen ${I}`);i[_]=u.isOpening}this.addChessNode(u)}for(let a=0;a<t.length;a++)if(!t[a])throw new Error(`No chess node at index ${a}`);this.connectNodes()}getSaveState(){const e={version:2,chessNodes:[]},t=[],s=this.getAllChessNodes();for(const c of s)c.serializationId=-1;let r=0;const a=[...s.filter(c=>c.parents.length===0)];for(;a.length;){const c=a.shift();c.serializationId===-1&&(c.serializationId=r++,t.push(c));for(const u of c.children)u.serializationId===-1&&a.push(u)}return e.chessNodes=t.map(c=>{const u={};return c.moves.length&&(u.m=_e.flatten(c.moves.map(h=>[h,c.moveMap[h].serializationId]))),c.name!==null&&(u.n=c.name),c.isTournamentReady||(u.nt=!0),c.sequenceCard&&(u.c=c.sequenceCard.serialize()),c.parents.length===0&&(u.f=c.fen,u.u=c.isUserMove),u}),e}getOpeningHistoriesMap(e){const t=this.getChessNode(oe,e);if(!t)throw new Error(`No root node for ${oe} ${e}`);const s=new Map,r=(i,a)=>{let c=s.get(i);c||(c=[],s.set(i,c)),c.push(a);for(const u of i.moves){const h=i.moveMap[u];r(h,[...a,u])}};return r(t,[]),s}getChessNodeLookup(e,t){for(const s of t){if(!e||!e.moveMap[s])return null;e=e.moveMap[s]}return e}getOpeningNodesLookup(e,t){return this.getChessNodeLookup(this.getChessNode(oe,e),t)}getOpeningFens(){const e=t=>t.isOpening;return _e.uniq([...Object.values(this.userMoveMap).filter(e).map(t=>t.fen),...Object.values(this.nonUserMoveMap).filter(e).map(t=>t.fen)])}getOpeningFensWithoutLeaves(){const e=t=>t.isOpening&&t.moves.length>0;return _e.uniq([...Object.values(this.userMoveMap).filter(e).map(t=>t.fen),...Object.values(this.nonUserMoveMap).filter(e).map(t=>t.fen)])}getOpeningTopologicalSort(e){const t=this.getAllOpeningChessNodesWithInitialColor(e),s=[];for(const i of t)i.sortIndegreeRemaining=i.parents.length,i.sortIndegreeRemaining===0&&s.push(i);const r=[];for(;s.length;){const i=s.pop();r.push(i);for(const a of i.children)a.sortIndegreeRemaining-=1,a.sortIndegreeRemaining===0&&s.push(a)}if(r.length!==t.length)throw new Error(`Topological sort failed, expected ${t.length} nodes but got ${r.length}`);return r}getNodesInSubtree(e){const t=new Set,s=r=>{if(!t.has(r)){t.add(r);for(const i of r.children)s(i)}};return s(e),Array.from(t)}}const Pf=n=>!("version"in n),Nf=n=>"version"in n&&n.version===2,bT=n=>"version"in n?n.version:1,NI=Object.freeze(Object.defineProperty({__proto__:null,Repository:Cf,getSaveStateVersion:bT,isSaveState1:Pf,isSaveState2:Nf},Symbol.toStringTag,{value:"Module"}));class te extends $o{static{this.MOVE=new te}static{this.NAME=new te}static{this.WIN_STATISTICS=new te}static{this.WIN_DRAW_STATISTICS=new te}static{this.STOCKFISH_EVAL=new te}static{this.MINIMAX=new te}static{this.POPULARITY_STATISTICS=new te}static{this.FREQUENCY=new te}static{this.NODE_COUNT=new te}static{this.UNNAMED_COUNT=new te}static{this.UNNAMED_NONTRIVIAL_COUNT=new te}static{this.MAX_UNNAMED_FREQUENCY_COUNT=new te}static{this.MAX_LEAF_FREQUENCY_COUNT=new te}static{this.WORST_STOCKFISH=new te}static{this.enumeration=new Wo(te)}}const MI=Object.freeze(Object.defineProperty({__proto__:null,MoveColumnSort:te},Symbol.toStringTag,{value:"Module"})),RT=35,CT=120,PT=45,NT=55,MT=100,kT=45,OT=35,DT=35,VT=35,xT=45,FT=45,LT=45,kI=3,OI=5,DI=2,UT=new yr(150),BT=new ls([UT],n=>n+1);class k extends $o{static{this.MOVE=new k}static{this.NAME=new k}static{this.NODE_COUNT=new k}static{this.WIN_STATISTICS=new k}static{this.STOCKFISH_EVAL=new k}static{this.MINIMAX=new k}static{this.POPULARITY_STATISTICS=new k}static{this.FREQUENCY=new k}static{this.UNNAMED_COUNT=new k}static{this.UNNAMED_NONTRIVIAL_COUNT=new k}static{this.MAX_UNNAMED_FREQUENCY_COUNT=new k}static{this.MAX_LEAF_FREQUENCY_COUNT=new k}static{this.WORST_STOCKFISH=new k}static{this.enumeration=new Wo(k)}}const jT=new Map([[k.MOVE,"Move"],[k.NAME,"Name"],[k.NODE_COUNT,"Nodes"],[k.WIN_STATISTICS,"Win Stats"],[k.STOCKFISH_EVAL,"Eval"],[k.MINIMAX,"Minimax"],[k.POPULARITY_STATISTICS,"Popularity"],[k.FREQUENCY,"Frequency"],[k.UNNAMED_COUNT,"!Name"],[k.UNNAMED_NONTRIVIAL_COUNT,"!Nont"],[k.MAX_UNNAMED_FREQUENCY_COUNT,"!Freq"],[k.MAX_LEAF_FREQUENCY_COUNT,"Leaf"],[k.WORST_STOCKFISH,"Worst"]]),qT=new Map([[k.MOVE,"Move names (SAN format)"],[k.NAME,"Opening Name"],[k.NODE_COUNT,"Number of nodes in this subtree"],[k.WIN_STATISTICS,"Win/draw/loss statistics"],[k.STOCKFISH_EVAL,"Stockfish evaluation of the position after this move"],[k.MINIMAX,"Minimax evaluation of the position after this move"],[k.POPULARITY_STATISTICS,"Popularity of this move in the lichess database"],[k.FREQUENCY,"Reciprocal total-frequency of this move in your opening tree"],[k.UNNAMED_COUNT,"Number of unnamed positions of our-color-to-move in this subtree"],[k.UNNAMED_NONTRIVIAL_COUNT,"Number of unnamed positions with nontrivial decisions in this subtree"],[k.MAX_UNNAMED_FREQUENCY_COUNT,"Maximum frequency of unnamed positions in this subtree"],[k.MAX_LEAF_FREQUENCY_COUNT,"Maximum frequency of leaf positions in this subtree"],[k.WORST_STOCKFISH,"Worst Stockfish evaluation of positions in this subtree"]]),$T=new Map([[k.MOVE,[te.MOVE]],[k.NAME,[te.NAME]],[k.NODE_COUNT,[te.NODE_COUNT]],[k.WIN_STATISTICS,[te.WIN_STATISTICS,te.WIN_DRAW_STATISTICS]],[k.STOCKFISH_EVAL,[te.STOCKFISH_EVAL]],[k.MINIMAX,[te.MINIMAX]],[k.POPULARITY_STATISTICS,[te.POPULARITY_STATISTICS]],[k.FREQUENCY,[te.FREQUENCY]],[k.UNNAMED_COUNT,[te.UNNAMED_COUNT]],[k.UNNAMED_NONTRIVIAL_COUNT,[te.UNNAMED_NONTRIVIAL_COUNT]],[k.MAX_UNNAMED_FREQUENCY_COUNT,[te.MAX_UNNAMED_FREQUENCY_COUNT]],[k.MAX_LEAF_FREQUENCY_COUNT,[te.MAX_LEAF_FREQUENCY_COUNT]],[k.WORST_STOCKFISH,[te.WORST_STOCKFISH]]]),WT=new Map([[k.MOVE,RT],[k.NAME,CT],[k.NODE_COUNT,OT],[k.WIN_STATISTICS,BT],[k.STOCKFISH_EVAL,PT],[k.MINIMAX,NT],[k.POPULARITY_STATISTICS,MT],[k.FREQUENCY,kT],[k.UNNAMED_COUNT,DT],[k.UNNAMED_NONTRIVIAL_COUNT,VT],[k.MAX_UNNAMED_FREQUENCY_COUNT,xT],[k.MAX_LEAF_FREQUENCY_COUNT,FT],[k.WORST_STOCKFISH,LT]]),Mf=[k.MOVE,k.NAME,k.NODE_COUNT,k.WIN_STATISTICS,k.STOCKFISH_EVAL,k.MINIMAX,k.POPULARITY_STATISTICS,k.FREQUENCY],HT=[k.MOVE,k.NAME,k.NODE_COUNT,k.WIN_STATISTICS,k.STOCKFISH_EVAL,k.MINIMAX,k.POPULARITY_STATISTICS,k.FREQUENCY,k.UNNAMED_COUNT,k.UNNAMED_NONTRIVIAL_COUNT,k.MAX_UNNAMED_FREQUENCY_COUNT,k.MAX_LEAF_FREQUENCY_COUNT,k.WORST_STOCKFISH],VI=Object.freeze(Object.defineProperty({__proto__:null,MOVE_COLUMNS_INITIAL_VISIBLE:Mf,MOVE_COLUMN_ORDER:HT,MoveColumn:k,moveColumnDescriptionMap:qT,moveColumnShorthandNameMap:jT,moveColumnSortMap:$T,moveColumnWidthMap:WT},Symbol.toStringTag,{value:"Module"})),zT=async()=>{const n=await fetch(`https://opening-api.jonathanolson.net/save/${xe.value.uid}`);if(!n.ok)throw new Error(`Failed to fetch save state: ${n.statusText}`);return await n.json()},kf=async n=>{const e=JSON.stringify(n);console.log(e);const t=await fetch(`https://opening-api.jonathanolson.net/save/${xe.value.uid}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:e});if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const s=await t.json();if(s.ok!==!0)throw new Error(`Unexpected response message: ${s}`)},Of=async()=>{const n=await fetch(`https://opening-api.jonathanolson.net/distribution/package/all/${xe.value.uid}`);if(!n.ok)throw new Error(`Failed to fetch save state: ${n.statusText}`);return await n.json()},GT=async n=>{const e=await fetch(`https://opening-api.jonathanolson.net/distribution/package/${n}/${xe.value.uid}`);if(!e.ok)throw new Error(`Failed to fetch save state: ${e.statusText}`);return await e.json()},KT=async n=>{const e=await fetch(`https://opening-api.jonathanolson.net/distribution/package/${n}/${xe.value.uid}`);if(!e.ok)throw new Error(`Failed to fetch save state: ${e.statusText}`);return await e.json()},QT=async n=>{const e=await fetch(`https://opening-api.jonathanolson.net/distribution/player-package/${n}/${xe.value.uid}`);if(!e.ok)throw new Error(`Failed to fetch save state: ${e.statusText}`);return await e.json()},Df=async()=>{const n=await fetch(`https://opening-api.jonathanolson.net/stockfish/package/${xe.value.uid}`);if(!n.ok)throw new Error(`Failed to fetch save state: ${n.statusText}`);return await n.json()},YT=async()=>{const n=await fetch(`https://opening-api.jonathanolson.net/player-metadata/${xe.value.uid}`);if(!n.ok)throw new Error(`Failed to fetch save state: ${n.statusText}`);return await n.json()};class Vf{constructor(){this.socket=wp("https://opening-api.jonathanolson.net"),this.cache=new Mu({max:25e4})}getCacheKey(e,t){return`${e}:${JSON.stringify(t)}`}getCached(e,t){const s=this.cache.get(e);if(s)return s;const r=t().catch(i=>{throw this.cache.delete(e),i});return this.cache.set(e,r),r}async getStockfishEntry(e){const t=this.getCacheKey("openingStockfish",[e]);return this.getCached(t,()=>this.socket.timeout(5e5).emitWithAck("openingStockfish",e))}getOpeningInfo(e,t){const s=this.getCacheKey("openingInfo",[e,t]);return this.getCached(s,()=>this.socket.timeout(5e5).emitWithAck("openingInfo",{fen:e,tauDays:t}))}getOpeningDistribution(e,t,s,r){const i=this.getCacheKey("openingDistribution",[e,t,s,r]);return this.getCached(i,()=>this.socket.timeout(5e5).emitWithAck("openingDistribution",{fen:e,high:t,smoothing:s,tauDays:r}))}getExploreInfo(e){const t=this.getCacheKey("exploreInfo",[e]);return this.getCached(t,()=>this.socket.timeout(5e5).emitWithAck("exploreInfo",e))}getMinimaxFallback(e,t,s,r,i){const a=this.getCacheKey("minimaxFallback",[e,t,s,r,i]);return this.getCached(a,()=>this.socket.timeout(5e5).emitWithAck("minimaxFallback",{fen:e,high:t,type:s,alphaIndex:r,depth:i}))}}const wi=new Vf,$a=new Mu({max:5e4}),ks=async n=>{const e=await wi.getExploreInfo(n);return $a.set(n,e),e},XT=n=>{const e=$a.get(n);return e||(ks(n),null)},JT=n=>{const e=$a.get(n);return e||ks(n)};window.openingSocket=wi;const xI=Object.freeze(Object.defineProperty({__proto__:null,OpeningSocket:Vf,getDistributionPackageAll:Of,getDistributionPackageSingle:GT,getExploreInfo:ks,getExploreInfoSync:XT,getExploreInfoSyncOrPromise:JT,getOpeningAPISaveState:zT,getOpponentDistributionResult:KT,getPlayerMetadataPackage:YT,getPlayerOpponentDistributionResult:QT,getStockfishPackage:Df,openingSocket:wi,setOpeningAPISaveState:kf},Symbol.toStringTag,{value:"Module"}));class ZT{value;next;constructor(e){this.value=e}}class eI{#e;#t;#n;constructor(){this.clear()}enqueue(e){const t=new ZT(e);this.#e?(this.#t.next=t,this.#t=t):(this.#e=t,this.#t=t),this.#n++}dequeue(){const e=this.#e;if(e)return this.#e=this.#e.next,this.#n--,this.#e||(this.#t=void 0),e.value}peek(){if(this.#e)return this.#e.value}clear(){this.#e=void 0,this.#t=void 0,this.#n=0}get size(){return this.#n}*[Symbol.iterator](){let e=this.#e;for(;e;)yield e.value,e=e.next}*drain(){for(;this.#e;)yield this.dequeue()}}function Ru(n){Cu(n);const e=new eI;let t=0;const s=()=>{t<n&&e.size>0&&(e.dequeue()(),t++)},r=()=>{t--,s()},i=async(u,h,f)=>{const g=(async()=>u(...f))();h(g);try{await g}catch{}r()},a=(u,h,f)=>{new Promise(g=>{e.enqueue(g)}).then(i.bind(void 0,u,h,f)),(async()=>(await Promise.resolve(),t<n&&s()))()},c=(u,...h)=>new Promise(f=>{a(u,f,h)});return Object.defineProperties(c,{activeCount:{get:()=>t},pendingCount:{get:()=>e.size},clearQueue:{value(){e.clear()}},concurrency:{get:()=>n,set(u){Cu(u),n=u,queueMicrotask(()=>{for(;t<n&&e.size>0;)s()})}}}),c}function Cu(n){if(!((Number.isInteger(n)||n===Number.POSITIVE_INFINITY)&&n>0))throw new TypeError("Expected `concurrency` to be a number from 1 and up")}const ie=(...n)=>{};class Qe extends $o{static{this.NORMAL=new Qe}static{this.SAVING=new Qe}static{this.SUCCESS=new Qe}static{this.FAILURE=new Qe}static{this.enumeration=new Wo(Qe)}}class tI{constructor(e){this.repositoryUpdatedEmitter=new Hc,this.repositoryUpdatedIncrementingProperty=new yr(0),this.isOpeningWhiteProperty=new pt(!0),this.hoveredPotentialVerboseMoveProperty=new pt(null),this.mixNewCardsProperty=new Ct(!0),this.autoPlaySolidMovesProperty=new Ct(!0),this.lockDrillToColorProperty=new Ct(!1),this.moveRowSortProperty=new zc(te.POPULARITY_STATISTICS),this.moveRowSortIncludedFirstProperty=new Ct(!0),this.magnifyWinStatisticsProperty=new Ct(!1),this.columnVisibilityPropertyMap=new Map(k.enumeration.values.map(t=>[t,new Ct(Mf.includes(t))])),this.saveStatusProperty=new zc(Qe.NORMAL),this.popupSingleChessNodeEmitter=new Hc,this.showMoveSettingsProperty=new Ct(!1),this.distributionNameProperty=new pt("mid"),this.evalTypeProperty=new pt("expectation"),this.alphaSelectorProperty=new yr(2),this.depthProperty=new yr(1e3),this.fallbackDistributionNameProperty=new ls([this.distributionNameProperty],t=>t==="mid"?"mid":"high"),this.opponentDistributionResultProperty=new pt(null),this.tournamentReadyProperty=new Ct(!1),this.loadedAllDistributions=!1,this.loadedAllStockfish=!1,this.repository=new Cf(e),this.stateProperty=new pt({state:"openingExplore",...vu(this.repository,!0),...mr()}),this.stateProperty.link((t,s)=>zE(t)),this.isOpeningProperty=new ls([this.stateProperty],t=>ze(t)),this.isWhiteProperty=new ls([this.stateProperty],t=>t.isWhite),this.stateProperty.link(t=>{ie(t)}),this.currentChessNodeProperty=new ls([this.stateProperty],t=>gr(t)),this.repositoryUpdatedEmitter.addListener(()=>{const t=this.currentChessNodeProperty.value;this.currentChessNodeProperty.recomputeDerivation(),t===this.currentChessNodeProperty.value&&this.currentChessNodeProperty.notifyListenersStatic(),this.repositoryUpdatedIncrementingProperty.value++}),this.isOpeningWhiteProperty.lazyLink(t=>{const s=this.stateProperty.value;ze(s)&&!Be(s)&&s.isWhite!==t&&this.userSwitchedColor(t)}),this.opponentDistributionResultProperty.lazyLink(this.updateOpponentDistributionResult.bind(this)),this.tournamentReadyProperty.lazyLink(this.updateOpponentDistributionResult.bind(this))}getCompactState(){return this.repository.getSaveState()}updateOpponentDistributionResult(){const e=this.opponentDistributionResultProperty.value;e&&(console.log("updating distribution result"),this.repository.updateDistributionsAndFrequencies(e,this.tournamentReadyProperty.value),console.log("updated distribution result")),this.repositoryUpdatedEmitter.emit()}getReviewStateAfterMove(e,t){if(!Be(e))throw new Error("Can only get review state after move if we are currently reviewing???");const s=io(e,t,ze(e)),r=s.chessNode;if(ze(e)){let i=!r.isUserMove||r.moves.length>1;if(this.autoPlaySolidMovesProperty.value&&r.isUserMove&&r.moves.length===1&&r.sequenceCard&&r.sequenceCard.isSolid()&&(i=!0,ie("auto-playing solid move")),i){const a=e.targetHistory[s.stack.length];return{state:"openingReviewAutoMovePending",...s,...pr(e),...yu(e),isPendingAutoMove:!0,pendingAutoMove:a}}else return{state:"openingReviewUserMove",...s,...pr(e),...yu(e)}}else if(!r.isUserMove){const a=ho(s.fen,_e.sample(r.moves));return{state:"endgameReviewAutoMovePending",...s,..._u(e),...pr(e),isPendingAutoMove:!0,pendingAutoMove:a}}else return{state:"endgameReviewUserMove",...s,..._u(e),...pr(e)}}fastForwardCommonState(e,t){for(;e.stackPosition<e.stack.length;){const s=e.stack[e.stackPosition].move;e=io(e,s,t)}return e}getReviewUpdateState(e){const t=e.chessNode;t.sequenceCard||(t.sequenceCard=Ze.createEmptyCard(t,"sequence"));const s=t.sequenceCard,r=Date.now()-e.nextTimestampStart,i=s.isCramming();s.beforeReview();let a=e.nextFailedReview?D.Again:s.hasEasyDefault(r)?D.Easy:D.Good;return s.review(a),{...LE(e),previousChessNode:t,previousFen:e.fen,previousHistory:ro(e),previousBaseFen:xn(e)?e.baseFen:oe,previousGrade:a,previousWasCramming:i,previousFailedReview:e.nextFailedReview,nextFailedReview:!1,nextTimestampStart:Date.now()}}userPlayMove(e){const t=this.stateProperty.value;if(so(t)||OE(t))ie(`${e}: Exploring ${so(t)?"opening":"endgame"}`),this.stateProperty.value={...t,...io(t,e,ze(t))};else if(Be(t)&&t.stackPosition<t.stack.length)ie("Ignoring move because we are not at the end of the stack"),this.stateProperty.value={...t,...this.fastForwardCommonState(t,ze(t))};else if(DE(t)){const s=t.targetHistory[t.stack.length];if(e===s){const r=this.getReviewUpdateState(t);if(t.stack.length===t.targetHistory.length-1){ie(`${e}: Correct, final move!`);const a=this.getNextReviewState();this.stateProperty.value={...a,...r},this.postReviewStateUpdate()}else{ie(`${e}: Correct, continuing`);const a=this.getReviewStateAfterMove(t,e);this.stateProperty.value={...a,...r},this.postReviewStateUpdate()}}else ie(`${e}: Incorrect`),this.popupSingleChessNodeEmitter.emit(t.chessNode,t.fen),this.stateProperty.value={...t,nextFailedReview:!0,failedMoves:[s]}}else if(xE(t)){const s=t.chessNode.moves.map(r=>ho(t.fen,r));if(s.includes(e)){const r=this.getReviewUpdateState(t);if(t.chessNode.moveMap[uo(t.fen,e)].moves.length){ie(`${e}: Correct, continuing`);const a=this.getReviewStateAfterMove(t,e);this.stateProperty.value={...a,...r},this.postReviewStateUpdate()}else{ie(`${e}: Correct, final move!`);const a=this.getNextReviewState();this.stateProperty.value={...a,...r},this.postReviewStateUpdate()}}else ie(`${e}: Incorrect`),this.popupSingleChessNodeEmitter.emit(t.chessNode,t.fen),this.stateProperty.value={...t,nextFailedReview:!0,failedMoves:s}}else throw VE(t)||FE(t)?new Error("Should not have been able to move while in auto-move pending state???"):new Error(`Unknown state type: ${t.state}`)}userPopupPreviousChessNode(){const e=this.stateProperty.value;!Be(e)||!e.previousChessNode||!e.previousFen||this.popupSingleChessNodeEmitter.emit(e.previousChessNode,e.previousFen)}userGoFullBack(){ie("Going full back"),this.stateProperty.value={...this.stateProperty.value,...yn(this.stateProperty.value,0)}}userGoBack(){ie("Going back"),this.stateProperty.value.stackPosition>0&&(this.stateProperty.value={...this.stateProperty.value,...yn(this.stateProperty.value,this.stateProperty.value.stackPosition-1)})}userGoForward(){ie("Going forward"),this.stateProperty.value.stack.length>this.stateProperty.value.stackPosition&&(this.stateProperty.value={...this.stateProperty.value,...yn(this.stateProperty.value,this.stateProperty.value.stackPosition+1)})}userGoFullForward(){ie("Going full forward"),this.stateProperty.value={...this.stateProperty.value,...yn(this.stateProperty.value,this.stateProperty.value.stack.length)}}userSetBaseFen(e){if(e===oe){ie("Switching to initial position opening");const t=this.isOpeningWhiteProperty.value;this.stateProperty.value={state:"openingExplore",...vu(this.repository,t),...mr()}}else ie('Switching to "endgame" fen'),Ue(e)||(e=Ep.mapFen(Tp.mapFen(e))),this.stateProperty.value={state:"endgameExplore",...oo(e),...wu(this.repository,e)},this.isOpeningWhiteProperty.value=!0}userSetPGN(e){const t=new Jr;t.loadPgn(e);const s=t.history(),r=[];let i=oe;for(const u of s){const h=Ve(i,u);r.push({fen:h,fenBeforeMove:i,move:u}),i=h}const a=this.isOpeningWhiteProperty.value;ie("Setting PGN");const c=this.repository.getChessNode(i,Ue(i)===a)??null;this.stateProperty.value={state:"openingExplore",isOpening:!0,repository:this.repository,isWhite:a,fen:i,stack:r,stackPosition:r.length,chessNode:c,failedMoves:[]}}userSwitchedColor(e){if(so(this.stateProperty.value)&&e!==this.stateProperty.value.isWhite)ie("Switching opening explore color"),this.stateProperty.value={...this.stateProperty.value,...BE(this.stateProperty.value)};else throw new Error("Color switching is only supported in the opening explorer for now")}userSelectStackIndex(e){this.stateProperty.value={...this.stateProperty.value,...yn(this.stateProperty.value,e+1)}}getCurrentPGN(){const e=UE(this.stateProperty.value);return e.length?mf(e):""}getMappedFen(e){return this.isOpeningProperty.value?e:at(e)}isBaseUserMove(){return this.isOpeningProperty.value?this.isOpeningWhiteProperty.value:!0}getBaseChessNode(){return this.repository.getChessNode(this.getMappedFen(Lo(this.stateProperty.value)),this.isBaseUserMove())}ensureBaseChessNode(){return this.repository.ensureChessNode(this.getMappedFen(Lo(this.stateProperty.value)),this.isBaseUserMove(),this.isOpeningProperty.value)}async saveTree(){const e=this.stateProperty.value,t=e.stack,s=e.stackPosition,r={};{const i=[];Hi.start();const a=new Set,c=u=>{a.has(u)||(a.add(u),i.push((async()=>{r[u]=await ks(u),Hi.inc()})()))};for(const u of t.slice(0,s))c(u.fenBeforeMove),c(u.fen);await Promise.all(i),Hi.done()}{let i=this.ensureBaseChessNode();for(let a=0;a<s&&!(a===s-1&&!i.isUserMove);a++){const c=ze(e)?t[a].move:uo(t[a].fenBeforeMove,t[a].move);if(i=i.addMove(c),!i.smartDistribution){const u=i,h=r[u.fen];if(!h)throw new Error(`Missing explore info for fen ${u.fen} when saving tree???`);u.smartDistribution=h.smartDistribution,u.stockfishEntry=h.stockfishEval}}}this.updateOpponentDistributionResult(),this.repositoryUpdatedEmitter.emit()}deleteTree(){const e=this.stateProperty.value,t=ze(e),s=e.stack,r=e.stackPosition;if(r>0){const i=s[r-1],a=Uo(e,i.fen);if(!a)return;const c=r>1?Uo(e,s[r-2].fen):this.getBaseChessNode();if(!c||!c.isUserMove)return;Le.disconnect(c,a),c.moves.length===0&&this.repository.deleteChessNode(c);const u=h=>{if(h.parents.length===0){for(const f of h.children)Le.disconnect(h,f),t&&u(f);this.repository.deleteChessNode(h)}};u(a)}this.updateOpponentDistributionResult(),this.repositoryUpdatedEmitter.emit()}getNextReviewState(e=this.stateProperty.value){let t;if(Be(e))t=e.prefix;else if(ze(e)&&e.fen!==oe){if(t=gr(e),t){const a=t.isUserMove===Ue(t.fen);let u=this.repository.getInitialChessNode(a);for(const h of ro(e))u.isNewLearnable()&&(u.sequenceCard=Ze.createEmptyCard(u,"sequence")),u=u.moveMap[h]}}else xn(e)?t=gr(e):t=this.lockDrillToColorProperty.value?gr(e):null;const s=pf(this.repository,t,{mixNewCards:this.mixNewCardsProperty.value}),r=s.chessNode,i=s.statistics;if(!r)throw new Error("No chess node found for review???");if(r.isOpening){const a=r.isUserMove===Ue(r.fen),c=this.repository.getInitialChessNode(a),u=cf(e)?e.initialHistory:Be(e)?[]:ro(e),h=r.getOpeningHistories().filter(U=>{if(U.length<u.length)return!1;for(let E=0;E<u.length;E++)if(U[E]!==u[E])return!1;return!0});if(h.length===0)throw new Error("No possible histories found for review???");const f=h.map(U=>{let E=1,m=c;for(const y of U)m.isUserMove||(E*=m.allDistribution?.[y]??.2),m=m.moveMap[y];return E}),g=_e.sum(f)+1e-15,I=f.map(U=>U/g).map(U=>U+.05),w=_e.sum(I),P=I.map(U=>U/w);let R=[...h[Ap(P)],r.getOnlyMove()];{let U=r;const E=new Date().getTime();for(;;){const m=U.moveMap[U.getOnlyMove()],y=m.children.filter(T=>T.sequenceCard&&T.sequenceCard.isDue(E));if(y.length!==0){const T=Ua(y);T&&(R.push(m.getOpeningChildMove(T)),R.push(T.getOnlyMove()),U=T),ie(`Following due move! ${R}`)}else break}for(;U.children[0].isOpeningOpponentForcedMove()&&U.children[0].children[0].isLearnable();)R.push(U.children[0].getOnlyMove()),R.push(U.children[0].children[0].getOnlyMove()),U=U.children[0].children[0]}{let U=c;for(const E of R)U.isNewLearnable()&&(U.sequenceCard=Ze.createEmptyCard(U,"sequence")),U=U.moveMap[E]}const B=[];let F=c;for(const U of u){const E=F.moveMap[U];B.push({fen:E.fen,fenBeforeMove:F.fen,move:U}),F=E}const V=!F.isUserMove||F.moves.length>1,L=R[u.length],Y={repository:this.repository,isWhite:c.isUserMove,fen:F.fen,stack:B,stackPosition:B.length,chessNode:F,failedMoves:[],initialHistory:u,targetHistory:R,...mr(),...Eu(t,i)};return V?{state:"openingReviewAutoMovePending",...Y,isPendingAutoMove:!0,pendingAutoMove:L}:{state:"openingReviewUserMove",...Y}}else{const u=Ip(r.fen).map(f=>f.mapFen(r.fen)).filter(Ue);if(u.length===0)throw new Error("No valid symmetries found for endgame review???");const h=_e.sample(u);return{state:"endgameReviewUserMove",...wu(this.repository,h),...oo(h),...Eu(t,i)}}}postReviewStateUpdate(){Fo(this.stateProperty.value)&&setTimeout(()=>this.autoMoveForReview(),100),this.isOpeningWhiteProperty.value=this.stateProperty.value.isWhite}userToggleReview(e){let t=this.stateProperty.value;e||(t={...t,...yn(t,0)}),Be(t)?(ie("Exiting review mode"),ze(t)?this.stateProperty.value={state:"openingExplore",...mr(),...Ms(t)}:this.stateProperty.value={state:"endgameExplore",...oo(t.baseFen),...Ms(t)},this.postReviewStateUpdate()):(ie("Entering review mode"),this.stateProperty.value=this.getNextReviewState(t),this.postReviewStateUpdate())}userExplorePreviousCard(){const e=this.stateProperty.value;if(!Be(e)||!e.previousChessNode)return;const t=e.previousBaseFen===oe,s=e.previousBaseFen,r=[];let i=s;for(const c of e.previousHistory){const u=Ve(i,c);r.push({fen:u,fenBeforeMove:i,move:c}),i=u}const a={repository:this.repository,isWhite:e.previousChessNode.isWhite,fen:e.previousFen,stack:r,stackPosition:r.length,chessNode:e.previousChessNode,failedMoves:[]};t?(ie("Exploring previous opening card in opening explorer"),this.stateProperty.value={state:"openingExplore",isOpening:!0,...a}):(ie("Exploring previous endgame card in opening explorer"),this.stateProperty.value={state:"endgameExplore",isEndgame:!0,baseFen:s,...a}),this.postReviewStateUpdate()}autoMoveForReview(){const e=this.stateProperty.value;Fo(e)&&(ie(`${e.pendingAutoMove}: Auto-Move`),this.stateProperty.value=this.getReviewStateAfterMove(e,e.pendingAutoMove),this.postReviewStateUpdate())}userReview(e){ie(`Grading review: ${e}`);const t=this.stateProperty.value;if(Be(t)){const s=t.previousChessNode.sequenceCard;e===D.Again&&t.previousGrade!==e&&this.popupSingleChessNodeEmitter.emit(t.previousChessNode,t.previousFen),s.review(e),this.stateProperty.value={...t,previousGrade:e}}}toggleTournamentReady(){const e=this.currentChessNodeProperty.value;e&&(e.isTournamentReady=!e.isTournamentReady,this.repositoryUpdatedEmitter.emit())}async exportState(){const e=this.getCompactState();this.saveStatusProperty.value=Qe.SAVING;try{await kf(e),this.saveStatusProperty.value=Qe.SUCCESS}catch(t){console.error("Failed to save!"),console.error(t),this.saveStatusProperty.value=Qe.FAILURE}await rf(xe.value.uid,e)}async loadAllDistributions(e){const t=this.repository.getAllOpeningChessNodes(),s=[],r=this.loadedAllDistributions?null:await Of();for(const i of t){if(i.smartDistribution)continue;const a=r?.[i.fen]??null;a?i.smartDistribution=a:s.push(i)}if(r&&(this.loadedAllDistributions=!0),s.length){console.log(`Loading missing distributions for ${s.length} chess nodes...`);const i=Ru(10);let a=0;e&&e(a,s.length),await Promise.all(s.map(c=>(async()=>{await i(async()=>{const u=await ks(c.fen);c.smartDistribution=u.smartDistribution,e&&e(++a,s.length)})})()))}else e&&e(0,0)}async loadAllStockfish(e){const t=this.repository.getAllOpeningChessNodes(),s=[],r=this.loadedAllStockfish?null:await Df();for(const i of t){if(i.stockfishEntry)continue;const a=r?.[i.fen]??null;a?i.stockfishEntry=a:s.push(i)}if(r&&(this.loadedAllStockfish=!0),s.length){console.log(`Loading missing Stockfish entries for ${s.length} chess nodes...`);const i=Ru(10);let a=0;e&&e(a,s.length),await Promise.all(s.map(c=>(async()=>{await i(async()=>{c.stockfishEntry=await wi.getStockfishEntry(c.fen),e&&e(++a,s.length)})})()))}else e&&e(0,0)}}const FI=Object.freeze(Object.defineProperty({__proto__:null,Model:tI,SaveStatus:Qe},Symbol.toStringTag,{value:"Module"})),nI=await(await fetch("./data/eco.json")).json(),Pu=nI,sI=n=>{const e=[],t=new Jr,s=()=>{e.push(t.fen())};s();for(const r of n)t.move(r),s();for(let r=e.length-1;r>=0;r--){const i=e[r];if(Pu[i])return Pu[i]}return null},LI=Object.freeze(Object.defineProperty({__proto__:null,getOpeningInfo:sI},Symbol.toStringTag,{value:"Module"}));export{aI as $,DT as A,VT as B,xT as C,FT as D,II as E,LT as F,kI as G,z as H,OI as I,DI as J,BT as K,WT as L,HT as M,$T as N,JT as O,te as P,KE as Q,wi as R,Qe as S,gr as T,gi as U,XT as V,D as W,ja as X,vI as Y,wI as Z,Hi as _,uI as a,cI as a0,zT as a1,tI as a2,KT as a3,pI as a4,fI as a5,yI as a6,CI as a7,SI as a8,mI as a9,LI as aa,RI as ab,_I as ac,FI as ad,VI as ae,MI as af,bI as ag,xI as ah,NI as ai,PI as aj,gI as ak,dI as al,Cf as am,Uo as b,qT as c,Ue as d,oe as e,xn as f,ro as g,sI as h,Be as i,Ve as j,UT as k,hI as l,jT as m,GE as n,MT as o,TI as p,k as q,RT as r,lI as s,CT as t,xe as u,PT as v,EI as w,NT as x,kT as y,OT as z};
