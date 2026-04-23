import{h as wp,$ as Ep,P as gt,d as Hc,a0 as Tp,l as Nl,C as ti,a1 as lo,y as at,_ as _e,a2 as ho,a3 as Wo,a4 as Ho,N as Er,f as ls,a5 as Ip,g as fo,B as pt,S as Ap,a6 as Sp,a7 as bp,a8 as Rp}from"./index-DGWtHn4p.js";import{L as Ml,s as Cp}from"./copyToClipboard-D4z6cNCF.js";var kl={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(n,e){(function(t,s){n.exports=s()})(wp,function(){var t={};t.version="0.2.0";var s=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};t.configure=function(w){var P,R;for(P in w)R=w[P],R!==void 0&&w.hasOwnProperty(P)&&(s[P]=R);return this},t.status=null,t.set=function(w){var P=t.isStarted();w=r(w,s.minimum,1),t.status=w===1?null:w;var R=t.render(!P),U=R.querySelector(s.barSelector),L=s.speed,V=s.easing;return R.offsetWidth,c(function(F){s.positionUsing===""&&(s.positionUsing=t.getPositioningCSS()),l(U,a(w,L,V)),w===1?(l(R,{transition:"none",opacity:1}),R.offsetWidth,setTimeout(function(){l(R,{transition:"all "+L+"ms linear",opacity:0}),setTimeout(function(){t.remove(),F()},L)},L)):setTimeout(F,L)}),this},t.isStarted=function(){return typeof t.status=="number"},t.start=function(){t.status||t.set(0);var w=function(){setTimeout(function(){t.status&&(t.trickle(),w())},s.trickleSpeed)};return s.trickle&&w(),this},t.done=function(w){return!w&&!t.status?this:t.inc(.3+.5*Math.random()).set(1)},t.inc=function(w){var P=t.status;return P?(typeof w!="number"&&(w=(1-P)*r(Math.random()*P,.1,.95)),P=r(P+w,0,.994),t.set(P)):t.start()},t.trickle=function(){return t.inc(Math.random()*s.trickleRate)},function(){var w=0,P=0;t.promise=function(R){return!R||R.state()==="resolved"?this:(P===0&&t.start(),w++,P++,R.always(function(){P--,P===0?(w=0,t.done()):t.set((w-P)/w)}),this)}}(),t.render=function(w){if(t.isRendered())return document.getElementById("nprogress");f(document.documentElement,"nprogress-busy");var P=document.createElement("div");P.id="nprogress",P.innerHTML=s.template;var R=P.querySelector(s.barSelector),U=w?"-100":i(t.status||0),L=document.querySelector(s.parent),V;return l(R,{transition:"all 0 linear",transform:"translate3d("+U+"%,0,0)"}),s.showSpinner||(V=P.querySelector(s.spinnerSelector),V&&I(V)),L!=document.body&&f(L,"nprogress-custom-parent"),L.appendChild(P),P},t.remove=function(){m(document.documentElement,"nprogress-busy"),m(document.querySelector(s.parent),"nprogress-custom-parent");var w=document.getElementById("nprogress");w&&I(w)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var w=document.body.style,P="WebkitTransform"in w?"Webkit":"MozTransform"in w?"Moz":"msTransform"in w?"ms":"OTransform"in w?"O":"";return P+"Perspective"in w?"translate3d":P+"Transform"in w?"translate":"margin"};function r(w,P,R){return w<P?P:w>R?R:w}function i(w){return(-1+w)*100}function a(w,P,R){var U;return s.positionUsing==="translate3d"?U={transform:"translate3d("+i(w)+"%,0,0)"}:s.positionUsing==="translate"?U={transform:"translate("+i(w)+"%,0)"}:U={"margin-left":i(w)+"%"},U.transition="all "+P+"ms "+R,U}var c=function(){var w=[];function P(){var R=w.shift();R&&R(P)}return function(R){w.push(R),w.length==1&&P()}}(),l=function(){var w=["Webkit","O","Moz","ms"],P={};function R(F){return F.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(X,B){return B.toUpperCase()})}function U(F){var X=document.body.style;if(F in X)return F;for(var B=w.length,E=F.charAt(0).toUpperCase()+F.slice(1),g;B--;)if(g=w[B]+E,g in X)return g;return F}function L(F){return F=R(F),P[F]||(P[F]=U(F))}function V(F,X,B){X=L(X),F.style[X]=B}return function(F,X){var B=arguments,E,g;if(B.length==2)for(E in X)g=X[E],g!==void 0&&X.hasOwnProperty(E)&&V(F,E,g);else V(F,B[1],B[2])}}();function h(w,P){var R=typeof w=="string"?w:_(w);return R.indexOf(" "+P+" ")>=0}function f(w,P){var R=_(w),U=R+P;h(R,P)||(w.className=U.substring(1))}function m(w,P){var R=_(w),U;h(w,P)&&(U=R.replace(" "+P+" "," "),w.className=U.substring(1,U.length-1))}function _(w){return(" "+(w.className||"")+" ").replace(/\s+/gi," ")}function I(w){w&&w.parentNode&&w.parentNode.removeChild(w)}return t})})(kl);var Pp=kl.exports;const Yt=Ep(Pp);class zc extends gt{constructor(e,t){const s=Hc()({enumeration:e.enumeration},t),r=Hc()({validValues:s.enumeration.values,phetioValueType:Tp({enumeration:s.enumeration})},s);super(e,r)}}const Np=()=>{};var Gc={};/**
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
 */const Ol=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Mp=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],c=n[t++],l=((r&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Dl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,c=a?n[r+1]:0,l=r+2<n.length,h=l?n[r+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let _=(c&15)<<2|h>>6,I=h&63;l||(I=64,a||(_=64)),s.push(t[f],t[m],t[_],t[I])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ol(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Mp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const h=r<n.length?t[n.charAt(r)]:64;++r;const m=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||c==null||h==null||m==null)throw new kp;const _=i<<2|c>>4;if(s.push(_),h!==64){const I=c<<4&240|h>>2;if(s.push(I),m!==64){const w=h<<6&192|m;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class kp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Op=function(n){const e=Ol(n);return Dl.encodeByteArray(e,!0)},Or=function(n){return Op(n).replace(/\./g,"")},Vl=function(n){try{return Dl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Dp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vp=()=>Dp().__FIREBASE_DEFAULTS__,xp=()=>{if(typeof process>"u"||typeof Gc>"u")return;const n=Gc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Lp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Vl(n[1]);return e&&JSON.parse(e)},ni=()=>{try{return Np()||Vp()||xp()||Lp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xl=n=>{var e,t;return(t=(e=ni())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Fp=n=>{const e=xl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ll=()=>{var n;return(n=ni())===null||n===void 0?void 0:n.config},Fl=n=>{var e;return(e=ni())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Up{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Fn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ul(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Bp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Or(JSON.stringify(t)),Or(JSON.stringify(a)),""].join(".")}const gs={};function $p(){const n={prod:[],emulator:[]};for(const e of Object.keys(gs))gs[e]?n.emulator.push(e):n.prod.push(e);return n}function jp(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Kc=!1;function Bl(n,e){if(typeof window>"u"||typeof document>"u"||!Fn(window.location.host)||gs[n]===e||gs[n]||Kc)return;gs[n]=e;function t(_){return`__firebase__banner__${_}`}const s="__firebase__banner",i=$p().prod.length>0;function a(){const _=document.getElementById(s);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function l(_,I){_.setAttribute("width","24"),_.setAttribute("id",I),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Kc=!0,a()},_}function f(_,I){_.setAttribute("id",I),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function m(){const _=jp(s),I=t("text"),w=document.getElementById(I)||document.createElement("span"),P=t("learnmore"),R=document.getElementById(P)||document.createElement("a"),U=t("preprendIcon"),L=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const V=_.element;c(V),f(R,P);const F=h();l(L,U),V.append(L,w,R,F),document.body.appendChild(V)}i?(w.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function Wp(){var n;const e=(n=ni())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Gp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kp(){const n=Ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Qp(){return!Wp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xp(){try{return typeof indexedDB=="object"}catch{return!1}}function Yp(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Jp="FirebaseError";class At extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Jp,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vs.prototype.create)}}class Vs{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Zp(i,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new At(r,c,s)}}function Zp(n,e){return n.replace(eg,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const eg=/\{\$([^}]+)}/g;function tg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function rn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if(Qc(i)&&Qc(a)){if(!rn(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Qc(n){return n!==null&&typeof n=="object"}/**
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
 */function xs(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ng(n,e){const t=new sg(n,e);return t.subscribe.bind(t)}class sg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");rg(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=zi),r.error===void 0&&(r.error=zi),r.complete===void 0&&(r.complete=zi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function zi(){}/**
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
 */function We(n){return n&&n._delegate?n._delegate:n}class on{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jt="[DEFAULT]";/**
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
 */class ig{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Up;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),r=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ag(e))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jt){return this.instances.has(e)}getOptions(e=Jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&a.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:og(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Jt){return this.component?this.component.multipleInstances?e:Jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function og(n){return n===Jt?void 0:n}function ag(n){return n.instantiationMode==="EAGER"}/**
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
 */class cg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ig(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const ug={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},lg=Y.INFO,hg={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},dg=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=hg[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zo{constructor(e){this.name=e,this._logLevel=lg,this._logHandler=dg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ug[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const fg=(n,e)=>e.some(t=>n instanceof t);let Xc,Yc;function pg(){return Xc||(Xc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gg(){return Yc||(Yc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $l=new WeakMap,po=new WeakMap,jl=new WeakMap,Gi=new WeakMap,Go=new WeakMap;function mg(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Dt(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&$l.set(t,n)}).catch(()=>{}),Go.set(e,n),e}function _g(n){if(po.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});po.set(n,e)}let go={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return po.get(n);if(e==="objectStoreNames")return n.objectStoreNames||jl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Dt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function yg(n){go=n(go)}function vg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Ki(this),e,...t);return jl.set(s,e.sort?e.sort():[e]),Dt(s)}:gg().includes(n)?function(...e){return n.apply(Ki(this),e),Dt($l.get(this))}:function(...e){return Dt(n.apply(Ki(this),e))}}function wg(n){return typeof n=="function"?vg(n):(n instanceof IDBTransaction&&_g(n),fg(n,pg())?new Proxy(n,go):n)}function Dt(n){if(n instanceof IDBRequest)return mg(n);if(Gi.has(n))return Gi.get(n);const e=wg(n);return e!==n&&(Gi.set(n,e),Go.set(e,n)),e}const Ki=n=>Go.get(n);function Eg(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),c=Dt(a);return s&&a.addEventListener("upgradeneeded",l=>{s(Dt(a.result),l.oldVersion,l.newVersion,Dt(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Tg=["get","getKey","getAll","getAllKeys","count"],Ig=["put","add","delete","clear"],Qi=new Map;function Jc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qi.get(e))return Qi.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Ig.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Tg.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,r?"readwrite":"readonly");let h=l.store;return s&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),r&&l.done]))[0]};return Qi.set(e,i),i}yg(n=>({...n,get:(e,t,s)=>Jc(e,t)||n.get(e,t,s),has:(e,t)=>!!Jc(e,t)||n.has(e,t)}));/**
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
 */class Ag{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Sg(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Sg(n){const e=n.getComponent();return e?.type==="VERSION"}const mo="@firebase/app",Zc="0.13.2";/**
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
 */const wt=new zo("@firebase/app"),bg="@firebase/app-compat",Rg="@firebase/analytics-compat",Cg="@firebase/analytics",Pg="@firebase/app-check-compat",Ng="@firebase/app-check",Mg="@firebase/auth",kg="@firebase/auth-compat",Og="@firebase/database",Dg="@firebase/data-connect",Vg="@firebase/database-compat",xg="@firebase/functions",Lg="@firebase/functions-compat",Fg="@firebase/installations",Ug="@firebase/installations-compat",Bg="@firebase/messaging",$g="@firebase/messaging-compat",jg="@firebase/performance",qg="@firebase/performance-compat",Wg="@firebase/remote-config",Hg="@firebase/remote-config-compat",zg="@firebase/storage",Gg="@firebase/storage-compat",Kg="@firebase/firestore",Qg="@firebase/ai",Xg="@firebase/firestore-compat",Yg="firebase",Jg="11.10.0";/**
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
 */const _o="[DEFAULT]",Zg={[mo]:"fire-core",[bg]:"fire-core-compat",[Cg]:"fire-analytics",[Rg]:"fire-analytics-compat",[Ng]:"fire-app-check",[Pg]:"fire-app-check-compat",[Mg]:"fire-auth",[kg]:"fire-auth-compat",[Og]:"fire-rtdb",[Dg]:"fire-data-connect",[Vg]:"fire-rtdb-compat",[xg]:"fire-fn",[Lg]:"fire-fn-compat",[Fg]:"fire-iid",[Ug]:"fire-iid-compat",[Bg]:"fire-fcm",[$g]:"fire-fcm-compat",[jg]:"fire-perf",[qg]:"fire-perf-compat",[Wg]:"fire-rc",[Hg]:"fire-rc-compat",[zg]:"fire-gcs",[Gg]:"fire-gcs-compat",[Kg]:"fire-fst",[Xg]:"fire-fst-compat",[Qg]:"fire-vertex","fire-js":"fire-js",[Yg]:"fire-js-all"};/**
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
 */const Dr=new Map,em=new Map,yo=new Map;function eu(n,e){try{n.container.addComponent(e)}catch(t){wt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Nn(n){const e=n.name;if(yo.has(e))return wt.debug(`There were multiple attempts to register component ${e}.`),!1;yo.set(e,n);for(const t of Dr.values())eu(t,n);for(const t of em.values())eu(t,n);return!0}function Ko(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $e(n){return n==null?!1:n.settings!==void 0}/**
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
 */const tm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vt=new Vs("app","Firebase",tm);/**
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
 */class nm{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new on("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
 */const Un=Jg;function ql(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:_o,automaticDataCollectionEnabled:!0},e),r=s.name;if(typeof r!="string"||!r)throw Vt.create("bad-app-name",{appName:String(r)});if(t||(t=Ll()),!t)throw Vt.create("no-options");const i=Dr.get(r);if(i){if(rn(t,i.options)&&rn(s,i.config))return i;throw Vt.create("duplicate-app",{appName:r})}const a=new cg(r);for(const l of yo.values())a.addComponent(l);const c=new nm(t,s,a);return Dr.set(r,c),c}function Wl(n=_o){const e=Dr.get(n);if(!e&&n===_o&&Ll())return ql();if(!e)throw Vt.create("no-app",{appName:n});return e}function xt(n,e,t){var s;let r=(s=Zg[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wt.warn(c.join(" "));return}Nn(new on(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const sm="firebase-heartbeat-database",rm=1,Ts="firebase-heartbeat-store";let Xi=null;function Hl(){return Xi||(Xi=Eg(sm,rm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ts)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vt.create("idb-open",{originalErrorMessage:n.message})})),Xi}async function im(n){try{const t=(await Hl()).transaction(Ts),s=await t.objectStore(Ts).get(zl(n));return await t.done,s}catch(e){if(e instanceof At)wt.warn(e.message);else{const t=Vt.create("idb-get",{originalErrorMessage:e?.message});wt.warn(t.message)}}}async function tu(n,e){try{const s=(await Hl()).transaction(Ts,"readwrite");await s.objectStore(Ts).put(e,zl(n)),await s.done}catch(t){if(t instanceof At)wt.warn(t.message);else{const s=Vt.create("idb-set",{originalErrorMessage:t?.message});wt.warn(s.message)}}}function zl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const om=1024,am=30;class cm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lm(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=nu();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>am){const a=hm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){wt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nu(),{heartbeatsToSend:s,unsentEntries:r}=um(this._heartbeatsCache.heartbeats),i=Or(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return wt.warn(t),""}}}function nu(){return new Date().toISOString().substring(0,10)}function um(n,e=om){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),su(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),su(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class lm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xp()?Yp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await im(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return tu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return tu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function su(n){return Or(JSON.stringify({version:2,heartbeats:n})).length}function hm(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function dm(n){Nn(new on("platform-logger",e=>new Ag(e),"PRIVATE")),Nn(new on("heartbeat",e=>new cm(e),"PRIVATE")),xt(mo,Zc,n),xt(mo,Zc,"esm2017"),xt("fire-js","")}dm("");var fm="firebase",pm="11.10.0";/**
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
 */xt(fm,pm,"app");var ru=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lt,Gl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function y(){}y.prototype=g.prototype,E.D=g.prototype,E.prototype=new y,E.prototype.constructor=E,E.C=function(T,A,b){for(var v=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)v[ht-2]=arguments[ht];return g.prototype[A].apply(T,v)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(E,g,y){y||(y=0);var T=Array(16);if(typeof g=="string")for(var A=0;16>A;++A)T[A]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(A=0;16>A;++A)T[A]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=E.g[0],y=E.g[1],A=E.g[2];var b=E.g[3],v=g+(b^y&(A^b))+T[0]+3614090360&4294967295;g=y+(v<<7&4294967295|v>>>25),v=b+(A^g&(y^A))+T[1]+3905402710&4294967295,b=g+(v<<12&4294967295|v>>>20),v=A+(y^b&(g^y))+T[2]+606105819&4294967295,A=b+(v<<17&4294967295|v>>>15),v=y+(g^A&(b^g))+T[3]+3250441966&4294967295,y=A+(v<<22&4294967295|v>>>10),v=g+(b^y&(A^b))+T[4]+4118548399&4294967295,g=y+(v<<7&4294967295|v>>>25),v=b+(A^g&(y^A))+T[5]+1200080426&4294967295,b=g+(v<<12&4294967295|v>>>20),v=A+(y^b&(g^y))+T[6]+2821735955&4294967295,A=b+(v<<17&4294967295|v>>>15),v=y+(g^A&(b^g))+T[7]+4249261313&4294967295,y=A+(v<<22&4294967295|v>>>10),v=g+(b^y&(A^b))+T[8]+1770035416&4294967295,g=y+(v<<7&4294967295|v>>>25),v=b+(A^g&(y^A))+T[9]+2336552879&4294967295,b=g+(v<<12&4294967295|v>>>20),v=A+(y^b&(g^y))+T[10]+4294925233&4294967295,A=b+(v<<17&4294967295|v>>>15),v=y+(g^A&(b^g))+T[11]+2304563134&4294967295,y=A+(v<<22&4294967295|v>>>10),v=g+(b^y&(A^b))+T[12]+1804603682&4294967295,g=y+(v<<7&4294967295|v>>>25),v=b+(A^g&(y^A))+T[13]+4254626195&4294967295,b=g+(v<<12&4294967295|v>>>20),v=A+(y^b&(g^y))+T[14]+2792965006&4294967295,A=b+(v<<17&4294967295|v>>>15),v=y+(g^A&(b^g))+T[15]+1236535329&4294967295,y=A+(v<<22&4294967295|v>>>10),v=g+(A^b&(y^A))+T[1]+4129170786&4294967295,g=y+(v<<5&4294967295|v>>>27),v=b+(y^A&(g^y))+T[6]+3225465664&4294967295,b=g+(v<<9&4294967295|v>>>23),v=A+(g^y&(b^g))+T[11]+643717713&4294967295,A=b+(v<<14&4294967295|v>>>18),v=y+(b^g&(A^b))+T[0]+3921069994&4294967295,y=A+(v<<20&4294967295|v>>>12),v=g+(A^b&(y^A))+T[5]+3593408605&4294967295,g=y+(v<<5&4294967295|v>>>27),v=b+(y^A&(g^y))+T[10]+38016083&4294967295,b=g+(v<<9&4294967295|v>>>23),v=A+(g^y&(b^g))+T[15]+3634488961&4294967295,A=b+(v<<14&4294967295|v>>>18),v=y+(b^g&(A^b))+T[4]+3889429448&4294967295,y=A+(v<<20&4294967295|v>>>12),v=g+(A^b&(y^A))+T[9]+568446438&4294967295,g=y+(v<<5&4294967295|v>>>27),v=b+(y^A&(g^y))+T[14]+3275163606&4294967295,b=g+(v<<9&4294967295|v>>>23),v=A+(g^y&(b^g))+T[3]+4107603335&4294967295,A=b+(v<<14&4294967295|v>>>18),v=y+(b^g&(A^b))+T[8]+1163531501&4294967295,y=A+(v<<20&4294967295|v>>>12),v=g+(A^b&(y^A))+T[13]+2850285829&4294967295,g=y+(v<<5&4294967295|v>>>27),v=b+(y^A&(g^y))+T[2]+4243563512&4294967295,b=g+(v<<9&4294967295|v>>>23),v=A+(g^y&(b^g))+T[7]+1735328473&4294967295,A=b+(v<<14&4294967295|v>>>18),v=y+(b^g&(A^b))+T[12]+2368359562&4294967295,y=A+(v<<20&4294967295|v>>>12),v=g+(y^A^b)+T[5]+4294588738&4294967295,g=y+(v<<4&4294967295|v>>>28),v=b+(g^y^A)+T[8]+2272392833&4294967295,b=g+(v<<11&4294967295|v>>>21),v=A+(b^g^y)+T[11]+1839030562&4294967295,A=b+(v<<16&4294967295|v>>>16),v=y+(A^b^g)+T[14]+4259657740&4294967295,y=A+(v<<23&4294967295|v>>>9),v=g+(y^A^b)+T[1]+2763975236&4294967295,g=y+(v<<4&4294967295|v>>>28),v=b+(g^y^A)+T[4]+1272893353&4294967295,b=g+(v<<11&4294967295|v>>>21),v=A+(b^g^y)+T[7]+4139469664&4294967295,A=b+(v<<16&4294967295|v>>>16),v=y+(A^b^g)+T[10]+3200236656&4294967295,y=A+(v<<23&4294967295|v>>>9),v=g+(y^A^b)+T[13]+681279174&4294967295,g=y+(v<<4&4294967295|v>>>28),v=b+(g^y^A)+T[0]+3936430074&4294967295,b=g+(v<<11&4294967295|v>>>21),v=A+(b^g^y)+T[3]+3572445317&4294967295,A=b+(v<<16&4294967295|v>>>16),v=y+(A^b^g)+T[6]+76029189&4294967295,y=A+(v<<23&4294967295|v>>>9),v=g+(y^A^b)+T[9]+3654602809&4294967295,g=y+(v<<4&4294967295|v>>>28),v=b+(g^y^A)+T[12]+3873151461&4294967295,b=g+(v<<11&4294967295|v>>>21),v=A+(b^g^y)+T[15]+530742520&4294967295,A=b+(v<<16&4294967295|v>>>16),v=y+(A^b^g)+T[2]+3299628645&4294967295,y=A+(v<<23&4294967295|v>>>9),v=g+(A^(y|~b))+T[0]+4096336452&4294967295,g=y+(v<<6&4294967295|v>>>26),v=b+(y^(g|~A))+T[7]+1126891415&4294967295,b=g+(v<<10&4294967295|v>>>22),v=A+(g^(b|~y))+T[14]+2878612391&4294967295,A=b+(v<<15&4294967295|v>>>17),v=y+(b^(A|~g))+T[5]+4237533241&4294967295,y=A+(v<<21&4294967295|v>>>11),v=g+(A^(y|~b))+T[12]+1700485571&4294967295,g=y+(v<<6&4294967295|v>>>26),v=b+(y^(g|~A))+T[3]+2399980690&4294967295,b=g+(v<<10&4294967295|v>>>22),v=A+(g^(b|~y))+T[10]+4293915773&4294967295,A=b+(v<<15&4294967295|v>>>17),v=y+(b^(A|~g))+T[1]+2240044497&4294967295,y=A+(v<<21&4294967295|v>>>11),v=g+(A^(y|~b))+T[8]+1873313359&4294967295,g=y+(v<<6&4294967295|v>>>26),v=b+(y^(g|~A))+T[15]+4264355552&4294967295,b=g+(v<<10&4294967295|v>>>22),v=A+(g^(b|~y))+T[6]+2734768916&4294967295,A=b+(v<<15&4294967295|v>>>17),v=y+(b^(A|~g))+T[13]+1309151649&4294967295,y=A+(v<<21&4294967295|v>>>11),v=g+(A^(y|~b))+T[4]+4149444226&4294967295,g=y+(v<<6&4294967295|v>>>26),v=b+(y^(g|~A))+T[11]+3174756917&4294967295,b=g+(v<<10&4294967295|v>>>22),v=A+(g^(b|~y))+T[2]+718787259&4294967295,A=b+(v<<15&4294967295|v>>>17),v=y+(b^(A|~g))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(A+(v<<21&4294967295|v>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+b&4294967295}s.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var y=g-this.blockSize,T=this.B,A=this.h,b=0;b<g;){if(A==0)for(;b<=y;)r(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<g;)if(T[A++]=E.charCodeAt(b++),A==this.blockSize){r(this,T),A=0;break}}else for(;b<g;)if(T[A++]=E[b++],A==this.blockSize){r(this,T),A=0;break}}this.h=A,this.o+=g},s.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var y=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=y&255,y/=256;for(this.u(E),E=Array(16),g=y=0;4>g;++g)for(var T=0;32>T;T+=8)E[y++]=this.g[g]>>>T&255;return E};function i(E,g){var y=c;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=g(E)}function a(E,g){this.h=g;for(var y=[],T=!0,A=E.length-1;0<=A;A--){var b=E[A]|0;T&&b==g||(y[A]=b,T=!1)}this.g=y}var c={};function l(E){return-128<=E&&128>E?i(E,function(g){return new a([g|0],0>g?-1:0)}):new a([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return R(h(-E));for(var g=[],y=1,T=0;E>=y;T++)g[T]=E/y|0,y*=4294967296;return new a(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return R(f(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(g,8)),T=m,A=0;A<E.length;A+=8){var b=Math.min(8,E.length-A),v=parseInt(E.substring(A,A+b),g);8>b?(b=h(Math.pow(g,b)),T=T.j(b).add(h(v))):(T=T.j(y),T=T.add(h(v)))}return T}var m=l(0),_=l(1),I=l(16777216);n=a.prototype,n.m=function(){if(P(this))return-R(this).m();for(var E=0,g=1,y=0;y<this.g.length;y++){var T=this.i(y);E+=(0<=T?T:4294967296+T)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(w(this))return"0";if(P(this))return"-"+R(this).toString(E);for(var g=h(Math.pow(E,6)),y=this,T="";;){var A=F(y,g).g;y=U(y,A.j(g));var b=((0<y.g.length?y.g[0]:y.h)>>>0).toString(E);if(y=A,w(y))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function w(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function P(E){return E.h==-1}n.l=function(E){return E=U(this,E),P(E)?-1:w(E)?0:1};function R(E){for(var g=E.g.length,y=[],T=0;T<g;T++)y[T]=~E.g[T];return new a(y,~E.h).add(_)}n.abs=function(){return P(this)?R(this):this},n.add=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],T=0,A=0;A<=g;A++){var b=T+(this.i(A)&65535)+(E.i(A)&65535),v=(b>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);T=v>>>16,b&=65535,v&=65535,y[A]=v<<16|b}return new a(y,y[y.length-1]&-2147483648?-1:0)};function U(E,g){return E.add(R(g))}n.j=function(E){if(w(this)||w(E))return m;if(P(this))return P(E)?R(this).j(R(E)):R(R(this).j(E));if(P(E))return R(this.j(R(E)));if(0>this.l(I)&&0>E.l(I))return h(this.m()*E.m());for(var g=this.g.length+E.g.length,y=[],T=0;T<2*g;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<E.g.length;A++){var b=this.i(T)>>>16,v=this.i(T)&65535,ht=E.i(A)>>>16,zn=E.i(A)&65535;y[2*T+2*A]+=v*zn,L(y,2*T+2*A),y[2*T+2*A+1]+=b*zn,L(y,2*T+2*A+1),y[2*T+2*A+1]+=v*ht,L(y,2*T+2*A+1),y[2*T+2*A+2]+=b*ht,L(y,2*T+2*A+2)}for(T=0;T<g;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=g;T<2*g;T++)y[T]=0;return new a(y,0)};function L(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function V(E,g){this.g=E,this.h=g}function F(E,g){if(w(g))throw Error("division by zero");if(w(E))return new V(m,m);if(P(E))return g=F(R(E),g),new V(R(g.g),R(g.h));if(P(g))return g=F(E,R(g)),new V(R(g.g),g.h);if(30<E.g.length){if(P(E)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var y=_,T=g;0>=T.l(E);)y=X(y),T=X(T);var A=B(y,1),b=B(T,1);for(T=B(T,2),y=B(y,2);!w(T);){var v=b.add(T);0>=v.l(E)&&(A=A.add(y),b=v),T=B(T,1),y=B(y,1)}return g=U(E,A.j(g)),new V(A,g)}for(A=m;0<=E.l(g);){for(y=Math.max(1,Math.floor(E.m()/g.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=h(y),v=b.j(g);P(v)||0<v.l(E);)y-=T,b=h(y),v=b.j(g);w(b)&&(b=_),A=A.add(b),E=U(E,v)}return new V(A,E)}n.A=function(E){return F(this,E).h},n.and=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)&E.i(T);return new a(y,this.h&E.h)},n.or=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)|E.i(T);return new a(y,this.h|E.h)},n.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)^E.i(T);return new a(y,this.h^E.h)};function X(E){for(var g=E.g.length+1,y=[],T=0;T<g;T++)y[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(y,E.h)}function B(E,g){var y=g>>5;g%=32;for(var T=E.g.length-y,A=[],b=0;b<T;b++)A[b]=0<g?E.i(b+y)>>>g|E.i(b+y+1)<<32-g:E.i(b+y);return new a(A,E.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Gl=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Lt=a}).apply(typeof ru<"u"?ru:typeof self<"u"?self:typeof window<"u"?window:{});var hr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kl,hs,Ql,Tr,vo,Xl,Yl,Jl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof hr=="object"&&hr];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=t(this);function r(o,u){if(u)e:{var d=s;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in d))break e;d=d[S]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,p=!1,S={next:function(){if(!p&&d<o.length){var C=d++;return{value:u(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}r("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function m(o,u,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,p),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function _(o,u,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function I(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function w(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,S,C){for(var O=Array(arguments.length-2),se=2;se<arguments.length;se++)O[se-2]=arguments[se];return u.prototype[S].apply(p,O)}}function P(o){const u=o.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function R(o,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(l(p)){const S=o.length||0,C=p.length||0;o.length=S+C;for(let O=0;O<C;O++)o[S+O]=p[O]}else o.push(p)}}class U{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function L(o){return/^[\s\xa0]*$/.test(o)}function V(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function F(o){return F[" "](o),o}F[" "]=function(){};var X=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function B(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function E(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function g(o){const u={};for(const d in o)u[d]=o[d];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let d,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(d in p)o[d]=p[d];for(let C=0;C<y.length;C++)d=y[C],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function A(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function b(o){c.setTimeout(()=>{throw o},0)}function v(){var o=Ti;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ht{constructor(){this.h=this.g=null}add(u,d){const p=zn.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var zn=new U(()=>new Uf,o=>o.reset());class Uf{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Gn,Kn=!1,Ti=new ht,Ha=()=>{const o=c.Promise.resolve(void 0);Gn=()=>{o.then(Bf)}};var Bf=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(d){b(d)}var u=zn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Kn=!1};function St(){this.s=this.s,this.C=this.C}St.prototype.s=!1,St.prototype.ma=function(){this.s||(this.s=!0,this.N())},St.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var $f=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return o}();function Qn(o,u){if(Ie.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(X){e:{try{F(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:jf[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Qn.aa.h.call(this)}}w(Qn,Ie);var jf={2:"touch",3:"pen",4:"mouse"};Qn.prototype.h=function(){Qn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var zs="closure_listenable_"+(1e6*Math.random()|0),qf=0;function Wf(o,u,d,p,S){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=S,this.key=++qf,this.da=this.fa=!1}function Gs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ks(o){this.src=o,this.g={},this.h=0}Ks.prototype.add=function(o,u,d,p,S){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var O=Ai(o,u,p,S);return-1<O?(u=o[O],d||(u.fa=!1)):(u=new Wf(u,this.src,C,!!p,S),u.fa=d,o.push(u)),u};function Ii(o,u){var d=u.type;if(d in o.g){var p=o.g[d],S=Array.prototype.indexOf.call(p,u,void 0),C;(C=0<=S)&&Array.prototype.splice.call(p,S,1),C&&(Gs(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Ai(o,u,d,p){for(var S=0;S<o.length;++S){var C=o[S];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==p)return S}return-1}var Si="closure_lm_"+(1e6*Math.random()|0),bi={};function za(o,u,d,p,S){if(Array.isArray(u)){for(var C=0;C<u.length;C++)za(o,u[C],d,p,S);return null}return d=Qa(d),o&&o[zs]?o.K(u,d,h(p)?!!p.capture:!1,S):Hf(o,u,d,!1,p,S)}function Hf(o,u,d,p,S,C){if(!u)throw Error("Invalid event type");var O=h(S)?!!S.capture:!!S,se=Ci(o);if(se||(o[Si]=se=new Ks(o)),d=se.add(u,d,p,O,C),d.proxy)return d;if(p=zf(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)$f||(S=O),S===void 0&&(S=!1),o.addEventListener(u.toString(),p,S);else if(o.attachEvent)o.attachEvent(Ka(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function zf(){function o(d){return u.call(o.src,o.listener,d)}const u=Gf;return o}function Ga(o,u,d,p,S){if(Array.isArray(u))for(var C=0;C<u.length;C++)Ga(o,u[C],d,p,S);else p=h(p)?!!p.capture:!!p,d=Qa(d),o&&o[zs]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],d=Ai(C,d,p,S),-1<d&&(Gs(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=Ci(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Ai(u,d,p,S)),(d=-1<o?u[o]:null)&&Ri(d))}function Ri(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[zs])Ii(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(Ka(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=Ci(u))?(Ii(d,o),d.h==0&&(d.src=null,u[Si]=null)):Gs(o)}}}function Ka(o){return o in bi?bi[o]:bi[o]="on"+o}function Gf(o,u){if(o.da)o=!0;else{u=new Qn(u,this);var d=o.listener,p=o.ha||o.src;o.fa&&Ri(o),o=d.call(p,u)}return o}function Ci(o){return o=o[Si],o instanceof Ks?o:null}var Pi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qa(o){return typeof o=="function"?o:(o[Pi]||(o[Pi]=function(u){return o.handleEvent(u)}),o[Pi])}function Ae(){St.call(this),this.i=new Ks(this),this.M=this,this.F=null}w(Ae,St),Ae.prototype[zs]=!0,Ae.prototype.removeEventListener=function(o,u,d,p){Ga(this,o,u,d,p)};function Me(o,u){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Ie(u,o);else if(u instanceof Ie)u.target=u.target||o;else{var S=u;u=new Ie(p,o),T(u,S)}if(S=!0,d)for(var C=d.length-1;0<=C;C--){var O=u.g=d[C];S=Qs(O,p,!0,u)&&S}if(O=u.g=o,S=Qs(O,p,!0,u)&&S,S=Qs(O,p,!1,u)&&S,d)for(C=0;C<d.length;C++)O=u.g=d[C],S=Qs(O,p,!1,u)&&S}Ae.prototype.N=function(){if(Ae.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],p=0;p<d.length;p++)Gs(d[p]);delete o.g[u],o.h--}}this.F=null},Ae.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},Ae.prototype.L=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function Qs(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,C=0;C<u.length;++C){var O=u[C];if(O&&!O.da&&O.capture==d){var se=O.listener,ve=O.ha||O.src;O.fa&&Ii(o.i,O),S=se.call(ve,p)!==!1&&S}}return S&&!p.defaultPrevented}function Xa(o,u,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Ya(o){o.g=Xa(()=>{o.g=null,o.i&&(o.i=!1,Ya(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Kf extends St{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ya(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xn(o){St.call(this),this.h=o,this.g={}}w(Xn,St);var Ja=[];function Za(o){B(o.g,function(u,d){this.g.hasOwnProperty(d)&&Ri(u)},o),o.g={}}Xn.prototype.N=function(){Xn.aa.N.call(this),Za(this)},Xn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ni=c.JSON.stringify,Qf=c.JSON.parse,Xf=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Mi(){}Mi.prototype.h=null;function ec(o){return o.h||(o.h=o.i())}function tc(){}var Yn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ki(){Ie.call(this,"d")}w(ki,Ie);function Oi(){Ie.call(this,"c")}w(Oi,Ie);var Gt={},nc=null;function Xs(){return nc=nc||new Ae}Gt.La="serverreachability";function sc(o){Ie.call(this,Gt.La,o)}w(sc,Ie);function Jn(o){const u=Xs();Me(u,new sc(u))}Gt.STAT_EVENT="statevent";function rc(o,u){Ie.call(this,Gt.STAT_EVENT,o),this.stat=u}w(rc,Ie);function ke(o){const u=Xs();Me(u,new rc(u,o))}Gt.Ma="timingevent";function ic(o,u){Ie.call(this,Gt.Ma,o),this.size=u}w(ic,Ie);function Zn(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function es(){this.g=!0}es.prototype.xa=function(){this.g=!1};function Yf(o,u,d,p,S,C){o.info(function(){if(o.g)if(C)for(var O="",se=C.split("&"),ve=0;ve<se.length;ve++){var te=se[ve].split("=");if(1<te.length){var Se=te[0];te=te[1];var be=Se.split("_");O=2<=be.length&&be[1]=="type"?O+(Se+"="+te+"&"):O+(Se+"=redacted&")}}else O=null;else O=C;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+u+`
`+d+`
`+O})}function Jf(o,u,d,p,S,C,O){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+u+`
`+d+`
`+C+" "+O})}function gn(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+ep(o,d)+(p?" "+p:"")})}function Zf(o,u){o.info(function(){return"TIMEOUT: "+u})}es.prototype.info=function(){};function ep(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var S=p[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var O=1;O<S.length;O++)S[O]=""}}}}return Ni(d)}catch{return u}}var Ys={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},oc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Di;function Js(){}w(Js,Mi),Js.prototype.g=function(){return new XMLHttpRequest},Js.prototype.i=function(){return{}},Di=new Js;function bt(o,u,d,p){this.j=o,this.i=u,this.l=d,this.R=p||1,this.U=new Xn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ac}function ac(){this.i=null,this.g="",this.h=!1}var cc={},Vi={};function xi(o,u,d){o.L=1,o.v=nr(dt(u)),o.m=d,o.P=!0,uc(o,null)}function uc(o,u){o.F=Date.now(),Zs(o),o.A=dt(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Ic(d.i,"t",p),o.C=0,d=o.j.J,o.h=new ac,o.g=$c(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Kf(_(o.Y,o,o.g),o.O)),u=o.U,d=o.g,p=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(Ja[0]=S.toString()),S=Ja);for(var C=0;C<S.length;C++){var O=za(d,S[C],p||u.handleEvent,!1,u.h||u);if(!O)break;u.g[O.key]=O}u=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Jn(),Yf(o.i,o.u,o.A,o.l,o.R,o.m)}bt.prototype.ca=function(o){o=o.target;const u=this.M;u&&ft(o)==3?u.j():this.Y(o)},bt.prototype.Y=function(o){try{if(o==this.g)e:{const be=ft(this.g);var u=this.g.Ba();const yn=this.g.Z();if(!(3>be)&&(be!=3||this.g&&(this.h.h||this.g.oa()||Nc(this.g)))){this.J||be!=4||u==7||(u==8||0>=yn?Jn(3):Jn(2)),Li(this);var d=this.g.Z();this.X=d;t:if(lc(this)){var p=Nc(this.g);o="";var S=p.length,C=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kt(this),ts(this);var O="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(C&&u==S-1)});p.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,Jf(this.i,this.u,this.A,this.l,this.R,be,d),this.o){if(this.T&&!this.K){t:{if(this.g){var se,ve=this.g;if((se=ve.g?ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(se)){var te=se;break t}}te=null}if(d=te)gn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fi(this,d);else{this.o=!1,this.s=3,ke(12),Kt(this),ts(this);break e}}if(this.P){d=!0;let He;for(;!this.J&&this.C<O.length;)if(He=tp(this,O),He==Vi){be==4&&(this.s=4,ke(14),d=!1),gn(this.i,this.l,null,"[Incomplete Response]");break}else if(He==cc){this.s=4,ke(15),gn(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else gn(this.i,this.l,He,null),Fi(this,He);if(lc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||O.length!=0||this.h.h||(this.s=1,ke(16),d=!1),this.o=this.o&&d,!d)gn(this.i,this.l,O,"[Invalid Chunked Response]"),Kt(this),ts(this);else if(0<O.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Wi(Se),Se.M=!0,ke(11))}}else gn(this.i,this.l,O,null),Fi(this,O);be==4&&Kt(this),this.o&&!this.J&&(be==4?Lc(this.j,this):(this.o=!1,Zs(this)))}else yp(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),Kt(this),ts(this)}}}catch{}finally{}};function lc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function tp(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?Vi:(d=Number(u.substring(d,p)),isNaN(d)?cc:(p+=1,p+d>u.length?Vi:(u=u.slice(p,p+d),o.C=p+d,u)))}bt.prototype.cancel=function(){this.J=!0,Kt(this)};function Zs(o){o.S=Date.now()+o.I,hc(o,o.I)}function hc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Zn(_(o.ba,o),u)}function Li(o){o.B&&(c.clearTimeout(o.B),o.B=null)}bt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Zf(this.i,this.A),this.L!=2&&(Jn(),ke(17)),Kt(this),this.s=2,ts(this)):hc(this,this.S-o)};function ts(o){o.j.G==0||o.J||Lc(o.j,o)}function Kt(o){Li(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Za(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Fi(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Ui(d.h,o))){if(!o.K&&Ui(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)cr(d),or(d);else break e;qi(d),ke(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=Zn(_(d.Za,d),6e3));if(1>=pc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Xt(d,11)}else if((o.K||d.g==o)&&cr(d),!L(u))for(S=d.Da.g.parse(u),u=0;u<S.length;u++){let te=S[u];if(d.T=te[0],te=te[1],d.G==2)if(te[0]=="c"){d.K=te[1],d.ia=te[2];const Se=te[3];Se!=null&&(d.la=Se,d.j.info("VER="+d.la));const be=te[4];be!=null&&(d.Aa=be,d.j.info("SVER="+d.Aa));const yn=te[5];yn!=null&&typeof yn=="number"&&0<yn&&(p=1.5*yn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const He=o.g;if(He){const lr=He.g?He.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(lr){var C=p.h;C.g||lr.indexOf("spdy")==-1&&lr.indexOf("quic")==-1&&lr.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Bi(C,C.h),C.h=null))}if(p.D){const Hi=He.g?He.g.getResponseHeader("X-HTTP-Session-Id"):null;Hi&&(p.ya=Hi,re(p.I,p.D,Hi))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var O=o;if(p.qa=Bc(p,p.J?p.ia:null,p.W),O.K){gc(p.h,O);var se=O,ve=p.L;ve&&(se.I=ve),se.B&&(Li(se),Zs(se)),p.g=O}else Vc(p);0<d.i.length&&ar(d)}else te[0]!="stop"&&te[0]!="close"||Xt(d,7);else d.G==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?Xt(d,7):ji(d):te[0]!="noop"&&d.l&&d.l.ta(te),d.v=0)}}Jn(4)}catch{}}var np=class{constructor(o,u){this.g=o,this.map=u}};function dc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function pc(o){return o.h?1:o.g?o.g.size:0}function Ui(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Bi(o,u){o.g?o.g.add(u):o.h=u}function gc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}dc.prototype.cancel=function(){if(this.i=mc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function mc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return P(o.i)}function sp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],d=o.length,p=0;p<d;p++)u.push(o[p]);return u}u=[],d=0;for(p in o)u[d++]=o[p];return u}function rp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const p in o)u[d++]=p;return u}}}function _c(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=rp(o),p=sp(o),S=p.length,C=0;C<S;C++)u.call(void 0,p[C],d&&d[C],o)}var yc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ip(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),S=null;if(0<=p){var C=o[d].substring(0,p);S=o[d].substring(p+1)}else C=o[d];u(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Qt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Qt){this.h=o.h,er(this,o.j),this.o=o.o,this.g=o.g,tr(this,o.s),this.l=o.l;var u=o.i,d=new rs;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),vc(this,d),this.m=o.m}else o&&(u=String(o).match(yc))?(this.h=!1,er(this,u[1]||"",!0),this.o=ns(u[2]||""),this.g=ns(u[3]||"",!0),tr(this,u[4]),this.l=ns(u[5]||"",!0),vc(this,u[6]||"",!0),this.m=ns(u[7]||"")):(this.h=!1,this.i=new rs(null,this.h))}Qt.prototype.toString=function(){var o=[],u=this.j;u&&o.push(ss(u,wc,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ss(u,wc,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(ss(d,d.charAt(0)=="/"?cp:ap,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",ss(d,lp)),o.join("")};function dt(o){return new Qt(o)}function er(o,u,d){o.j=d?ns(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function tr(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function vc(o,u,d){u instanceof rs?(o.i=u,hp(o.i,o.h)):(d||(u=ss(u,up)),o.i=new rs(u,o.h))}function re(o,u,d){o.i.set(u,d)}function nr(o){return re(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ns(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ss(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,op),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function op(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var wc=/[#\/\?@]/g,ap=/[#\?:]/g,cp=/[#\?]/g,up=/[#\?@]/g,lp=/#/g;function rs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Rt(o){o.g||(o.g=new Map,o.h=0,o.i&&ip(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=rs.prototype,n.add=function(o,u){Rt(this),this.i=null,o=mn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Ec(o,u){Rt(o),u=mn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Tc(o,u){return Rt(o),u=mn(o,u),o.g.has(u)}n.forEach=function(o,u){Rt(this),this.g.forEach(function(d,p){d.forEach(function(S){o.call(u,S,p,this)},this)},this)},n.na=function(){Rt(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const S=o[p];for(let C=0;C<S.length;C++)d.push(u[p])}return d},n.V=function(o){Rt(this);let u=[];if(typeof o=="string")Tc(this,o)&&(u=u.concat(this.g.get(mn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return Rt(this),this.i=null,o=mn(this,o),Tc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Ic(o,u,d){Ec(o,u),0<d.length&&(o.i=null,o.g.set(mn(o,u),P(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const C=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var S=C;O[p]!==""&&(S+="="+encodeURIComponent(String(O[p]))),o.push(S)}}return this.i=o.join("&")};function mn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function hp(o,u){u&&!o.j&&(Rt(o),o.i=null,o.g.forEach(function(d,p){var S=p.toLowerCase();p!=S&&(Ec(this,p),Ic(this,S,d))},o)),o.j=u}function dp(o,u){const d=new es;if(c.Image){const p=new Image;p.onload=I(Ct,d,"TestLoadImage: loaded",!0,u,p),p.onerror=I(Ct,d,"TestLoadImage: error",!1,u,p),p.onabort=I(Ct,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=I(Ct,d,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function fp(o,u){const d=new es,p=new AbortController,S=setTimeout(()=>{p.abort(),Ct(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(S),C.ok?Ct(d,"TestPingServer: ok",!0,u):Ct(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Ct(d,"TestPingServer: error",!1,u)})}function Ct(o,u,d,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(d)}catch{}}function pp(){this.g=new Xf}function gp(o,u,d){const p=d||"";try{_c(o,function(S,C){let O=S;h(S)&&(O=Ni(S)),u.push(p+C+"="+encodeURIComponent(O))})}catch(S){throw u.push(p+"type="+encodeURIComponent("_badmap")),S}}function sr(o){this.l=o.Ub||null,this.j=o.eb||!1}w(sr,Mi),sr.prototype.g=function(){return new rr(this.l,this.j)},sr.prototype.i=function(o){return function(){return o}}({});function rr(o,u){Ae.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(rr,Ae),n=rr.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,os(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,is(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,os(this)),this.g&&(this.readyState=3,os(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ac(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ac(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?is(this):os(this),this.readyState==3&&Ac(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,is(this))},n.Qa=function(o){this.g&&(this.response=o,is(this))},n.ga=function(){this.g&&is(this)};function is(o){o.readyState=4,o.l=null,o.j=null,o.v=null,os(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function os(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(rr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Sc(o){let u="";return B(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function $i(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Sc(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):re(o,u,d))}function le(o){Ae.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(le,Ae);var mp=/^https?$/i,_p=["POST","PUT"];n=le.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Di.g(),this.v=this.o?ec(this.o):ec(Di),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){bc(this,C);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)d.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())d.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),S=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(_p,u,void 0))||p||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,O]of d)this.g.setRequestHeader(C,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pc(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){bc(this,C)}};function bc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Rc(o),ir(o)}function Rc(o){o.A||(o.A=!0,Me(o,"complete"),Me(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Me(this,"complete"),Me(this,"abort"),ir(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ir(this,!0)),le.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Cc(this):this.bb())},n.bb=function(){Cc(this)};function Cc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ft(o)!=4||o.Z()!=2)){if(o.u&&ft(o)==4)Xa(o.Ea,0,o);else if(Me(o,"readystatechange"),ft(o)==4){o.h=!1;try{const O=o.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=O===0){var S=String(o.D).match(yc)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),p=!mp.test(S?S.toLowerCase():"")}d=p}if(d)Me(o,"complete"),Me(o,"success");else{o.m=6;try{var C=2<ft(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Rc(o)}}finally{ir(o)}}}}function ir(o,u){if(o.g){Pc(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Me(o,"ready");try{d.onreadystatechange=p}catch{}}}function Pc(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function ft(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Qf(u)}};function Nc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function yp(o){const u={};o=(o.g&&2<=ft(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(L(o[p]))continue;var d=A(o[p]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[S]||[];u[S]=C,C.push(d)}E(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function as(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Mc(o){this.Aa=0,this.i=[],this.j=new es,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=as("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=as("baseRetryDelayMs",5e3,o),this.cb=as("retryDelaySeedMs",1e4,o),this.Wa=as("forwardChannelMaxRetries",2,o),this.wa=as("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new dc(o&&o.concurrentRequestLimit),this.Da=new pp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Mc.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,p){ke(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Bc(this,null,this.W),ar(this)};function ji(o){if(kc(o),o.G==3){var u=o.U++,d=dt(o.I);if(re(d,"SID",o.K),re(d,"RID",u),re(d,"TYPE","terminate"),cs(o,d),u=new bt(o,o.j,u),u.L=2,u.v=nr(dt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=$c(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Zs(u)}Uc(o)}function or(o){o.g&&(Wi(o),o.g.cancel(),o.g=null)}function kc(o){or(o),o.u&&(c.clearTimeout(o.u),o.u=null),cr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function ar(o){if(!fc(o.h)&&!o.s){o.s=!0;var u=o.Ga;Gn||Ha(),Kn||(Gn(),Kn=!0),Ti.add(u,o),o.B=0}}function vp(o,u){return pc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Zn(_(o.Ga,o,u),Fc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new bt(this,this.j,o);let C=this.o;if(this.S&&(C?(C=g(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Dc(this,S,u),d=dt(this.I),re(d,"RID",o),re(d,"CVER",22),this.D&&re(d,"X-HTTP-Session-Id",this.D),cs(this,d),C&&(this.O?u="headers="+encodeURIComponent(String(Sc(C)))+"&"+u:this.m&&$i(d,this.m,C)),Bi(this.h,S),this.Ua&&re(d,"TYPE","init"),this.P?(re(d,"$req",u),re(d,"SID","null"),S.T=!0,xi(S,d,null)):xi(S,d,u),this.G=2}}else this.G==3&&(o?Oc(this,o):this.i.length==0||fc(this.h)||Oc(this))};function Oc(o,u){var d;u?d=u.l:d=o.U++;const p=dt(o.I);re(p,"SID",o.K),re(p,"RID",d),re(p,"AID",o.T),cs(o,p),o.m&&o.o&&$i(p,o.m,o.o),d=new bt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Dc(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Bi(o.h,d),xi(d,p,u)}function cs(o,u){o.H&&B(o.H,function(d,p){re(u,p,d)}),o.l&&_c({},function(d,p){re(u,p,d)})}function Dc(o,u,d){d=Math.min(o.i.length,d);var p=o.l?_(o.l.Na,o.l,o):null;e:{var S=o.i;let C=-1;for(;;){const O=["count="+d];C==-1?0<d?(C=S[0].g,O.push("ofs="+C)):C=0:O.push("ofs="+C);let se=!0;for(let ve=0;ve<d;ve++){let te=S[ve].g;const Se=S[ve].map;if(te-=C,0>te)C=Math.max(0,S[ve].g-100),se=!1;else try{gp(Se,O,"req"+te+"_")}catch{p&&p(Se)}}if(se){p=O.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,p}function Vc(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Gn||Ha(),Kn||(Gn(),Kn=!0),Ti.add(u,o),o.v=0}}function qi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Zn(_(o.Fa,o),Fc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,xc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Zn(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),or(this),xc(this))};function Wi(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function xc(o){o.g=new bt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=dt(o.qa);re(u,"RID","rpc"),re(u,"SID",o.K),re(u,"AID",o.T),re(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&re(u,"TO",o.ja),re(u,"TYPE","xmlhttp"),cs(o,u),o.m&&o.o&&$i(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=nr(dt(u)),d.m=null,d.P=!0,uc(d,o)}n.Za=function(){this.C!=null&&(this.C=null,or(this),qi(this),ke(19))};function cr(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Lc(o,u){var d=null;if(o.g==u){cr(o),Wi(o),o.g=null;var p=2}else if(Ui(o.h,u))d=u.D,gc(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;p=Xs(),Me(p,new ic(p,d)),ar(o)}else Vc(o);else if(S=u.s,S==3||S==0&&0<u.X||!(p==1&&vp(o,u)||p==2&&qi(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),S){case 1:Xt(o,5);break;case 4:Xt(o,10);break;case 3:Xt(o,6);break;default:Xt(o,2)}}}function Fc(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function Xt(o,u){if(o.j.info("Error code "+u),u==2){var d=_(o.fb,o),p=o.Xa;const S=!p;p=new Qt(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||er(p,"https"),nr(p),S?dp(p.toString(),d):fp(p.toString(),d)}else ke(2);o.G=0,o.l&&o.l.sa(u),Uc(o),kc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function Uc(o){if(o.G=0,o.ka=[],o.l){const u=mc(o.h);(u.length!=0||o.i.length!=0)&&(R(o.ka,u),R(o.ka,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.ra()}}function Bc(o,u,d){var p=d instanceof Qt?dt(d):new Qt(d);if(p.g!="")u&&(p.g=u+"."+p.g),tr(p,p.s);else{var S=c.location;p=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var C=new Qt(null);p&&er(C,p),u&&(C.g=u),S&&tr(C,S),d&&(C.l=d),p=C}return d=o.D,u=o.ya,d&&u&&re(p,d,u),re(p,"VER",o.la),cs(o,p),p}function $c(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new le(new sr({eb:d})):new le(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function jc(){}n=jc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ur(){}ur.prototype.g=function(o,u){return new Le(o,u)};function Le(o,u){Ae.call(this),this.g=new Mc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!L(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!L(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new _n(this)}w(Le,Ae),Le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Le.prototype.close=function(){ji(this.g)},Le.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Ni(o),o=d);u.i.push(new np(u.Ya++,o)),u.G==3&&ar(u)},Le.prototype.N=function(){this.g.l=null,delete this.j,ji(this.g),delete this.g,Le.aa.N.call(this)};function qc(o){ki.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}w(qc,ki);function Wc(){Oi.call(this),this.status=1}w(Wc,Oi);function _n(o){this.g=o}w(_n,jc),_n.prototype.ua=function(){Me(this.g,"a")},_n.prototype.ta=function(o){Me(this.g,new qc(o))},_n.prototype.sa=function(o){Me(this.g,new Wc)},_n.prototype.ra=function(){Me(this.g,"b")},ur.prototype.createWebChannel=ur.prototype.g,Le.prototype.send=Le.prototype.o,Le.prototype.open=Le.prototype.m,Le.prototype.close=Le.prototype.close,Jl=function(){return new ur},Yl=function(){return Xs()},Xl=Gt,vo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ys.NO_ERROR=0,Ys.TIMEOUT=8,Ys.HTTP_ERROR=6,Tr=Ys,oc.COMPLETE="complete",Ql=oc,tc.EventType=Yn,Yn.OPEN="a",Yn.CLOSE="b",Yn.ERROR="c",Yn.MESSAGE="d",Ae.prototype.listen=Ae.prototype.K,hs=tc,le.prototype.listenOnce=le.prototype.L,le.prototype.getLastError=le.prototype.Ka,le.prototype.getLastErrorCode=le.prototype.Ba,le.prototype.getStatus=le.prototype.Z,le.prototype.getResponseJson=le.prototype.Oa,le.prototype.getResponseText=le.prototype.oa,le.prototype.send=le.prototype.ea,le.prototype.setWithCredentials=le.prototype.Ha,Kl=le}).apply(typeof hr<"u"?hr:typeof self<"u"?self:typeof window<"u"?window:{});const iu="@firebase/firestore",ou="4.8.0";/**
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
 */let Bn="11.10.0";/**
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
 */const an=new zo("@firebase/firestore");function wn(){return an.logLevel}function x(n,...e){if(an.logLevel<=Y.DEBUG){const t=e.map(Qo);an.debug(`Firestore (${Bn}): ${n}`,...t)}}function Et(n,...e){if(an.logLevel<=Y.ERROR){const t=e.map(Qo);an.error(`Firestore (${Bn}): ${n}`,...t)}}function Bt(n,...e){if(an.logLevel<=Y.WARN){const t=e.map(Qo);an.warn(`Firestore (${Bn}): ${n}`,...t)}}function Qo(n){if(typeof n=="string")return n;try{/**
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
 */function q(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Zl(n,s,t)}function Zl(n,e,t){let s=`FIRESTORE (${Bn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Et(s),new Error(s)}function ne(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Zl(e,r,s)}function K(n,e){return n}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends At{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ft{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class eh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ce.UNAUTHENTICATED))}shutdown(){}}class mm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class _m{constructor(e){this.t=e,this.currentUser=Ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ne(this.o===void 0,42304);let s=this.i;const r=l=>this.i!==s?(s=this.i,t(l)):Promise.resolve();let i=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ft,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},c=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ft)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ne(typeof s.accessToken=="string",31837,{l:s}),new eh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string",2055,{h:e}),new Ce(e)}}class ym{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ce.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class vm{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new ym(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class au{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wm{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$e(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ne(this.o===void 0,3512);const s=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new au(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ne(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new au(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Em(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Xo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=Em(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function Q(n,e){return n<e?-1:n>e?1:0}function wo(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),r=e.codePointAt(t);if(s!==r){if(s<128&&r<128)return Q(s,r);{const i=th(),a=Tm(i.encode(cu(n,t)),i.encode(cu(e,t)));return a!==0?a:Q(s,r)}}t+=s>65535?2:1}return Q(n.length,e.length)}function cu(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Tm(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Q(n[t],e[t]);return Q(n.length,e.length)}function Mn(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
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
 */const uu="__name__";class et{constructor(e,t,s){t===void 0?t=0:t>e.length&&q(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&q(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return et.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof et?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=et.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return Q(e.length,t.length)}static compareSegments(e,t){const s=et.isNumericId(e),r=et.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?et.extractNumericId(e).compare(et.extractNumericId(t)):wo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Lt.fromString(e.substring(4,e.length-2))}}class ce extends et{construct(e,t,s){return new ce(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new $(M.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new ce(t)}static emptyPath(){return new ce([])}}const Im=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends et{construct(e,t,s){return new Ee(e,t,s)}static isValidIdentifier(e){return Im.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===uu}static keyField(){return new Ee([uu])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new $(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(i(),r++)}if(i(),a)throw new $(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(t)}static emptyPath(){return new Ee([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(ce.fromString(e))}static fromName(e){return new j(ce.fromString(e).popFirst(5))}static empty(){return new j(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new ce(e.slice()))}}/**
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
 */function Am(n,e,t){if(!t)throw new $(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Sm(n,e,t,s){if(e===!0&&s===!0)throw new $(M.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function lu(n){if(!j.isDocumentKey(n))throw new $(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function nh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Yo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q(12329,{type:typeof n})}function Is(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new $(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Yo(n);throw new $(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function fe(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ls(n,e){if(!nh(n))throw new $(M.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new $(M.INVALID_ARGUMENT,t);return!0}/**
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
 */const hu=-62135596800,du=1e6;class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*du);return new ae(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<hu)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/du}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ls(e,ae._jsonSchema))return new ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ae._jsonSchemaVersion="firestore/timestamp/1.0",ae._jsonSchema={type:fe("string",ae._jsonSchemaVersion),seconds:fe("number"),nanoseconds:fe("number")};/**
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
 */const As=-1;function bm(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=H.fromTimestamp(s===1e9?new ae(t+1,0):new ae(t,s));return new $t(r,j.empty(),e)}function Rm(n){return new $t(n.readTime,n.key,As)}class $t{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new $t(H.min(),j.empty(),As)}static max(){return new $t(H.max(),j.empty(),As)}}function Cm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
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
 */const Pm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function $n(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==Pm)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,s)=>{t(e)})}static reject(e){return new N((t,s)=>{s(e)})}static waitFor(e){return new N((t,s)=>{let r=0,i=0,a=!1;e.forEach(c=>{++r,c.next(()=>{++i,a&&i===r&&t()},l=>s(l))}),a=!0,i===r&&t()})}static or(e){let t=N.resolve(!1);for(const s of e)t=t.next(r=>r?N.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new N((s,r)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{a[h]=f,++c,c===i&&s(a)},f=>r(f))}})}static doWhile(e,t){return new N((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}function Mm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function jn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class si{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}si.ue=-1;/**
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
 */const Jo=-1;function ri(n){return n==null}function Vr(n){return n===0&&1/n==-1/0}function km(n){return typeof n=="number"&&Number.isInteger(n)&&!Vr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const sh="";function Om(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=fu(e)),e=Dm(n.get(t),e);return fu(e)}function Dm(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case sh:t+="";break;default:t+=i}}return t}function fu(n){return n+sh+""}/**
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
 */function pu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function hn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function rh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ue{constructor(e,t){this.comparator=e,this.root=t||we.EMPTY}insert(e,t){return new ue(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new dr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new dr(this.root,e,this.comparator,!1)}getReverseIterator(){return new dr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new dr(this.root,e,this.comparator,!0)}}class dr{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??we.RED,this.left=r??we.EMPTY,this.right=i??we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new we(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return we.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new we(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ge{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new gu(this.data.getIterator())}getIteratorFrom(e){return new gu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ge(this.comparator);return t.data=e,t}}class gu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xe{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new Xe([])}unionWith(e){let t=new ge(Ee.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Mn(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ih("Invalid base64 string: "+i):i}}(e);return new Te(t)}static fromUint8Array(e){const t=function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i}(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const Vm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(n){if(ne(!!n,39018),typeof n=="string"){let e=0;const t=Vm.exec(n);if(ne(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:he(n.seconds),nanos:he(n.nanos)}}function he(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function qt(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
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
 */const oh="server_timestamp",ah="__type__",ch="__previous_value__",uh="__local_write_time__";function Zo(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[ah])===null||t===void 0?void 0:t.stringValue)===oh}function ii(n){const e=n.mapValue.fields[ch];return Zo(e)?ii(e):e}function Ss(n){const e=jt(n.mapValue.fields[uh].timestampValue);return new ae(e.seconds,e.nanos)}/**
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
 */class xm{constructor(e,t,s,r,i,a,c,l,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const xr="(default)";class bs{constructor(e,t){this.projectId=e,this.database=t||xr}static empty(){return new bs("","")}get isDefaultDatabase(){return this.database===xr}isEqual(e){return e instanceof bs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const lh="__type__",Lm="__max__",fr={mapValue:{}},hh="__vector__",Lr="value";function Wt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zo(n)?4:Um(n)?9007199254740991:Fm(n)?10:11:q(28295,{value:n})}function ct(n,e){if(n===e)return!0;const t=Wt(n);if(t!==Wt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ss(n).isEqual(Ss(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=jt(r.timestampValue),c=jt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return qt(r.bytesValue).isEqual(qt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return he(r.geoPointValue.latitude)===he(i.geoPointValue.latitude)&&he(r.geoPointValue.longitude)===he(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return he(r.integerValue)===he(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=he(r.doubleValue),c=he(i.doubleValue);return a===c?Vr(a)===Vr(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Mn(n.arrayValue.values||[],e.arrayValue.values||[],ct);case 10:case 11:return function(r,i){const a=r.mapValue.fields||{},c=i.mapValue.fields||{};if(pu(a)!==pu(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!ct(a[l],c[l])))return!1;return!0}(n,e);default:return q(52216,{left:n})}}function Rs(n,e){return(n.values||[]).find(t=>ct(t,e))!==void 0}function kn(n,e){if(n===e)return 0;const t=Wt(n),s=Wt(e);if(t!==s)return Q(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=he(i.integerValue||i.doubleValue),l=he(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return mu(n.timestampValue,e.timestampValue);case 4:return mu(Ss(n),Ss(e));case 5:return wo(n.stringValue,e.stringValue);case 6:return function(i,a){const c=qt(i),l=qt(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=Q(c[h],l[h]);if(f!==0)return f}return Q(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=Q(he(i.latitude),he(a.latitude));return c!==0?c:Q(he(i.longitude),he(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return _u(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,h,f;const m=i.fields||{},_=a.fields||{},I=(c=m[Lr])===null||c===void 0?void 0:c.arrayValue,w=(l=_[Lr])===null||l===void 0?void 0:l.arrayValue,P=Q(((h=I?.values)===null||h===void 0?void 0:h.length)||0,((f=w?.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:_u(I,w)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===fr.mapValue&&a===fr.mapValue)return 0;if(i===fr.mapValue)return 1;if(a===fr.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){const _=wo(l[m],f[m]);if(_!==0)return _;const I=kn(c[l[m]],h[f[m]]);if(I!==0)return I}return Q(l.length,f.length)}(n.mapValue,e.mapValue);default:throw q(23264,{le:t})}}function mu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=jt(n),s=jt(e),r=Q(t.seconds,s.seconds);return r!==0?r:Q(t.nanos,s.nanos)}function _u(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=kn(t[r],s[r]);if(i)return i}return Q(t.length,s.length)}function On(n){return Eo(n)}function Eo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=jt(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return qt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return j.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=Eo(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${Eo(t.fields[a])}`;return r+"}"}(n.mapValue):q(61005,{value:n})}function Ir(n){switch(Wt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ii(n);return e?16+Ir(e):16;case 5:return 2*n.stringValue.length;case 6:return qt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+Ir(i),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return hn(s.fields,(i,a)=>{r+=i.length+Ir(a)}),r}(n.mapValue);default:throw q(13486,{value:n})}}function To(n){return!!n&&"integerValue"in n}function ea(n){return!!n&&"arrayValue"in n}function yu(n){return!!n&&"nullValue"in n}function vu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ar(n){return!!n&&"mapValue"in n}function Fm(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[lh])===null||t===void 0?void 0:t.stringValue)===hh}function ms(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return hn(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=ms(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ms(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Um(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Lm}/**
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
 */class je{constructor(e){this.value=e}static empty(){return new je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ar(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ms(t)}setAll(e){let t=Ee.emptyPath(),s={},r=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,s,r),s={},r=[],t=c.popLast()}a?s[c.lastSegment()]=ms(a):r.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Ar(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ct(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Ar(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){hn(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new je(ms(this.value))}}function dh(n){const e=[];return hn(n.fields,(t,s)=>{const r=new Ee([t]);if(Ar(s)){const i=dh(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)}),new Xe(e)}/**
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
 */class Pe{constructor(e,t,s,r,i,a,c){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Pe(e,0,H.min(),H.min(),H.min(),je.empty(),0)}static newFoundDocument(e,t,s,r){return new Pe(e,1,t,H.min(),s,r,0)}static newNoDocument(e,t){return new Pe(e,2,t,H.min(),H.min(),je.empty(),0)}static newUnknownDocument(e,t){return new Pe(e,3,t,H.min(),H.min(),je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fr{constructor(e,t){this.position=e,this.inclusive=t}}function wu(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],a=n.position[r];if(i.field.isKeyField()?s=j.comparator(j.fromName(a.referenceValue),t.key):s=kn(a,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Eu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ct(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ur{constructor(e,t="asc"){this.field=e,this.dir=t}}function Bm(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class fh{}class pe extends fh{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new jm(e,t,s):t==="array-contains"?new Hm(e,s):t==="in"?new zm(e,s):t==="not-in"?new Gm(e,s):t==="array-contains-any"?new Km(e,s):new pe(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new qm(e,s):new Wm(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(kn(t,this.value)):t!==null&&Wt(this.value)===Wt(t)&&this.matchesComparison(kn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ut extends fh{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new ut(e,t)}matches(e){return ph(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function ph(n){return n.op==="and"}function gh(n){return $m(n)&&ph(n)}function $m(n){for(const e of n.filters)if(e instanceof ut)return!1;return!0}function Io(n){if(n instanceof pe)return n.field.canonicalString()+n.op.toString()+On(n.value);if(gh(n))return n.filters.map(e=>Io(e)).join(",");{const e=n.filters.map(t=>Io(t)).join(",");return`${n.op}(${e})`}}function mh(n,e){return n instanceof pe?function(s,r){return r instanceof pe&&s.op===r.op&&s.field.isEqual(r.field)&&ct(s.value,r.value)}(n,e):n instanceof ut?function(s,r){return r instanceof ut&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,a,c)=>i&&mh(a,r.filters[c]),!0):!1}(n,e):void q(19439)}function _h(n){return n instanceof pe?function(t){return`${t.field.canonicalString()} ${t.op} ${On(t.value)}`}(n):n instanceof ut?function(t){return t.op.toString()+" {"+t.getFilters().map(_h).join(" ,")+"}"}(n):"Filter"}class jm extends pe{constructor(e,t,s){super(e,t,s),this.key=j.fromName(s.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class qm extends pe{constructor(e,t){super(e,"in",t),this.keys=yh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Wm extends pe{constructor(e,t){super(e,"not-in",t),this.keys=yh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function yh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>j.fromName(s.referenceValue))}class Hm extends pe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ea(t)&&Rs(t.arrayValue,this.value)}}class zm extends pe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Rs(this.value.arrayValue,t)}}class Gm extends pe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Rs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Rs(this.value.arrayValue,t)}}class Km extends pe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ea(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Rs(this.value.arrayValue,s))}}/**
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
 */class Qm{constructor(e,t=null,s=[],r=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function Tu(n,e=null,t=[],s=[],r=null,i=null,a=null){return new Qm(n,e,t,s,r,i,a)}function ta(n){const e=K(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Io(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),ri(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>On(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>On(s)).join(",")),e.Pe=t}return e.Pe}function na(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Bm(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!mh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Eu(n.startAt,e.startAt)&&Eu(n.endAt,e.endAt)}function Ao(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class oi{constructor(e,t=null,s=[],r=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Xm(n,e,t,s,r,i,a,c){return new oi(n,e,t,s,r,i,a,c)}function sa(n){return new oi(n)}function Iu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ym(n){return n.collectionGroup!==null}function _s(n){const e=K(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ge(Ee.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Ur(i,s))}),t.has(Ee.keyField().canonicalString())||e.Te.push(new Ur(Ee.keyField(),s))}return e.Te}function nt(n){const e=K(n);return e.Ie||(e.Ie=Jm(e,_s(n))),e.Ie}function Jm(n,e){if(n.limitType==="F")return Tu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Ur(r.field,i)});const t=n.endAt?new Fr(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Fr(n.startAt.position,n.startAt.inclusive):null;return Tu(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function So(n,e,t){return new oi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ai(n,e){return na(nt(n),nt(e))&&n.limitType===e.limitType}function vh(n){return`${ta(nt(n))}|lt:${n.limitType}`}function En(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>_h(r)).join(", ")}]`),ri(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>On(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>On(r)).join(",")),`Target(${s})`}(nt(n))}; limitType=${n.limitType})`}function ci(n,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):j.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,e)&&function(s,r){for(const i of _s(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(a,c,l){const h=wu(a,c,l);return a.inclusive?h<=0:h<0}(s.startAt,_s(s),r)||s.endAt&&!function(a,c,l){const h=wu(a,c,l);return a.inclusive?h>=0:h>0}(s.endAt,_s(s),r))}(n,e)}function Zm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function wh(n){return(e,t)=>{let s=!1;for(const r of _s(n)){const i=e_(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function e_(n,e,t){const s=n.field.isKeyField()?j.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?kn(l,h):q(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return q(19790,{direction:n.dir})}}/**
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
 */class dn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){hn(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return rh(this.inner)}size(){return this.innerSize}}/**
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
 */const t_=new ue(j.comparator);function Tt(){return t_}const Eh=new ue(j.comparator);function ds(...n){let e=Eh;for(const t of n)e=e.insert(t.key,t);return e}function Th(n){let e=Eh;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function en(){return ys()}function Ih(){return ys()}function ys(){return new dn(n=>n.toString(),(n,e)=>n.isEqual(e))}const n_=new ue(j.comparator),s_=new ge(j.comparator);function J(...n){let e=s_;for(const t of n)e=e.add(t);return e}const r_=new ge(Q);function i_(){return r_}/**
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
 */function ra(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vr(e)?"-0":e}}function Ah(n){return{integerValue:""+n}}function o_(n,e){return km(e)?Ah(e):ra(n,e)}/**
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
 */class ui{constructor(){this._=void 0}}function a_(n,e,t){return n instanceof Br?function(r,i){const a={fields:{[ah]:{stringValue:oh},[uh]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Zo(i)&&(i=ii(i)),i&&(a.fields[ch]=i),{mapValue:a}}(t,e):n instanceof Cs?bh(n,e):n instanceof Ps?Rh(n,e):function(r,i){const a=Sh(r,i),c=Au(a)+Au(r.Ee);return To(a)&&To(r.Ee)?Ah(c):ra(r.serializer,c)}(n,e)}function c_(n,e,t){return n instanceof Cs?bh(n,e):n instanceof Ps?Rh(n,e):t}function Sh(n,e){return n instanceof $r?function(s){return To(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Br extends ui{}class Cs extends ui{constructor(e){super(),this.elements=e}}function bh(n,e){const t=Ch(e);for(const s of n.elements)t.some(r=>ct(r,s))||t.push(s);return{arrayValue:{values:t}}}class Ps extends ui{constructor(e){super(),this.elements=e}}function Rh(n,e){let t=Ch(e);for(const s of n.elements)t=t.filter(r=>!ct(r,s));return{arrayValue:{values:t}}}class $r extends ui{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Au(n){return he(n.integerValue||n.doubleValue)}function Ch(n){return ea(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function u_(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof Cs&&r instanceof Cs||s instanceof Ps&&r instanceof Ps?Mn(s.elements,r.elements,ct):s instanceof $r&&r instanceof $r?ct(s.Ee,r.Ee):s instanceof Br&&r instanceof Br}(n.transform,e.transform)}class l_{constructor(e,t){this.version=e,this.transformResults=t}}class vt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new vt}static exists(e){return new vt(void 0,e)}static updateTime(e){return new vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class li{}function Ph(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Mh(n.key,vt.none()):new Fs(n.key,n.data,vt.none());{const t=n.data,s=je.empty();let r=new ge(Ee.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new fn(n.key,s,new Xe(r.toArray()),vt.none())}}function h_(n,e,t){n instanceof Fs?function(r,i,a){const c=r.value.clone(),l=bu(r.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof fn?function(r,i,a){if(!Sr(r.precondition,i))return void i.convertToUnknownDocument(a.version);const c=bu(r.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Nh(r)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function vs(n,e,t,s){return n instanceof Fs?function(i,a,c,l){if(!Sr(i.precondition,a))return c;const h=i.value.clone(),f=Ru(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,s):n instanceof fn?function(i,a,c,l){if(!Sr(i.precondition,a))return c;const h=Ru(i.fieldTransforms,l,a),f=a.data;return f.setAll(Nh(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,s):function(i,a,c){return Sr(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function d_(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=Sh(s.transform,r||null);i!=null&&(t===null&&(t=je.empty()),t.set(s.field,i))}return t||null}function Su(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Mn(s,r,(i,a)=>u_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Fs extends li{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class fn extends li{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Nh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function bu(n,e,t){const s=new Map;ne(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let r=0;r<t.length;r++){const i=n[r],a=i.transform,c=e.data.field(i.field);s.set(i.field,c_(a,c,t[r]))}return s}function Ru(n,e,t){const s=new Map;for(const r of n){const i=r.transform,a=t.data.field(r.field);s.set(r.field,a_(i,a,e))}return s}class Mh extends li{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class f_ extends li{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class p_{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&h_(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=vs(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=vs(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Ih();return this.mutations.forEach(r=>{const i=e.get(r.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(r.key)?null:c;const l=Ph(a,c);l!==null&&s.set(r.key,l),a.isValidDocument()||a.convertToNoDocument(H.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),J())}isEqual(e){return this.batchId===e.batchId&&Mn(this.mutations,e.mutations,(t,s)=>Su(t,s))&&Mn(this.baseMutations,e.baseMutations,(t,s)=>Su(t,s))}}class ia{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){ne(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let r=function(){return n_}();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new ia(e,t,s,r)}}/**
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
 */class g_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class m_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var de,Z;function __(n){switch(n){case M.OK:return q(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return q(15467,{code:n})}}function kh(n){if(n===void 0)return Et("GRPC error has no .code"),M.UNKNOWN;switch(n){case de.OK:return M.OK;case de.CANCELLED:return M.CANCELLED;case de.UNKNOWN:return M.UNKNOWN;case de.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case de.INTERNAL:return M.INTERNAL;case de.UNAVAILABLE:return M.UNAVAILABLE;case de.UNAUTHENTICATED:return M.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case de.NOT_FOUND:return M.NOT_FOUND;case de.ALREADY_EXISTS:return M.ALREADY_EXISTS;case de.PERMISSION_DENIED:return M.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case de.ABORTED:return M.ABORTED;case de.OUT_OF_RANGE:return M.OUT_OF_RANGE;case de.UNIMPLEMENTED:return M.UNIMPLEMENTED;case de.DATA_LOSS:return M.DATA_LOSS;default:return q(39323,{code:n})}}(Z=de||(de={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const y_=new Lt([4294967295,4294967295],0);function Cu(n){const e=th().encode(n),t=new Gl;return t.update(e),new Uint8Array(t.digest())}function Pu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Lt([t,s],0),new Lt([r,i],0)]}class oa{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new fs(`Invalid padding: ${t}`);if(s<0)throw new fs(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new fs(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new fs(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Lt.fromNumber(this.fe)}pe(e,t,s){let r=e.add(t.multiply(Lt.fromNumber(s)));return r.compare(y_)===1&&(r=new Lt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Cu(e),[s,r]=Pu(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(s,r,i);if(!this.ye(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new oa(i,r,t);return s.forEach(c=>a.insert(c)),a}insert(e){if(this.fe===0)return;const t=Cu(e),[s,r]=Pu(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(s,r,i);this.we(a)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class hi{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Us.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new hi(H.min(),r,new ue(Q),Tt(),J())}}class Us{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Us(s,t,J(),J(),J())}}/**
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
 */class br{constructor(e,t,s,r){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=r}}class Oh{constructor(e,t){this.targetId=e,this.De=t}}class Dh{constructor(e,t,s=Te.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Nu{constructor(){this.ve=0,this.Ce=Mu(),this.Fe=Te.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=J(),t=J(),s=J();return this.Ce.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:q(38017,{changeType:i})}}),new Us(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=Mu()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ne(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class v_{constructor(e){this.We=e,this.Ge=new Map,this.ze=Tt(),this.je=pr(),this.Je=pr(),this.He=new ue(Q)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:q(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((s,r)=>{this.nt(r)&&t(r)})}it(e){const t=e.targetId,s=e.De.count,r=this.st(t);if(r){const i=r.target;if(Ao(i))if(s===0){const a=new j(i.path);this.Xe(t,a,Pe.newNoDocument(a,H.min()))}else ne(s===1,20013,{expectedCount:s});else{const a=this.ot(t);if(a!==s){const c=this._t(e),l=c?this.ut(c,e,a):1;if(l!==0){this.rt(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let a,c;try{a=qt(s).toUint8Array()}catch(l){if(l instanceof ih)return Bt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new oa(a,r,i)}catch(l){return Bt(l instanceof fs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),r++)}),r}Pt(e){const t=new Map;this.Ge.forEach((i,a)=>{const c=this.st(a);if(c){if(i.current&&Ao(c.target)){const l=new j(c.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,Pe.newNoDocument(l,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}});let s=J();this.Je.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.st(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(s=s.add(i))}),this.ze.forEach((i,a)=>a.setReadTime(e));const r=new hi(e,t,this.He,this.ze,s);return this.ze=Tt(),this.je=pr(),this.Je=pr(),this.He=new ue(Q),r}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const r=this.tt(e);this.It(e,t)?r.qe(t,1):r.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Nu,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new ge(Q),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new ge(Q),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Nu),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function pr(){return new ue(j.comparator)}function Mu(){return new ue(j.comparator)}const w_={asc:"ASCENDING",desc:"DESCENDING"},E_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},T_={and:"AND",or:"OR"};class I_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function bo(n,e){return n.useProto3Json||ri(e)?e:{value:e}}function jr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function A_(n,e){return jr(n,e.toTimestamp())}function st(n){return ne(!!n,49232),H.fromTimestamp(function(t){const s=jt(t);return new ae(s.seconds,s.nanos)}(n))}function aa(n,e){return Ro(n,e).canonicalString()}function Ro(n,e){const t=function(r){return new ce(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function xh(n){const e=ce.fromString(n);return ne($h(e),10190,{key:e.toString()}),e}function Co(n,e){return aa(n.databaseId,e.path)}function Yi(n,e){const t=xh(e);if(t.get(1)!==n.databaseId.projectId)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j(Fh(t))}function Lh(n,e){return aa(n.databaseId,e)}function S_(n){const e=xh(n);return e.length===4?ce.emptyPath():Fh(e)}function Po(n){return new ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Fh(n){return ne(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ku(n,e,t){return{name:Co(n,e),fields:t.value.mapValue.fields}}function b_(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(ne(f===void 0||typeof f=="string",58123),Te.fromBase64String(f||"")):(ne(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Te.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?M.UNKNOWN:kh(h.code);return new $(f,h.message||"")}(a);t=new Dh(s,r,i,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Yi(n,s.document.name),i=st(s.document.updateTime),a=s.document.createTime?st(s.document.createTime):H.min(),c=new je({mapValue:{fields:s.document.fields}}),l=Pe.newFoundDocument(r,i,a,c),h=s.targetIds||[],f=s.removedTargetIds||[];t=new br(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Yi(n,s.document),i=s.readTime?st(s.readTime):H.min(),a=Pe.newNoDocument(r,i),c=s.removedTargetIds||[];t=new br([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Yi(n,s.document),i=s.removedTargetIds||[];t=new br([],i,r,null)}else{if(!("filter"in e))return q(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new m_(r,i),c=s.targetId;t=new Oh(c,a)}}return t}function R_(n,e){let t;if(e instanceof Fs)t={update:ku(n,e.key,e.value)};else if(e instanceof Mh)t={delete:Co(n,e.key)};else if(e instanceof fn)t={update:ku(n,e.key,e.data),updateMask:x_(e.fieldMask)};else{if(!(e instanceof f_))return q(16599,{Rt:e.type});t={verify:Co(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,a){const c=a.transform;if(c instanceof Br)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Cs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ps)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof $r)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw q(20930,{transform:a.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:A_(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q(27497)}(n,e.precondition)),t}function C_(n,e){return n&&n.length>0?(ne(e!==void 0,14353),n.map(t=>function(r,i){let a=r.updateTime?st(r.updateTime):st(i);return a.isEqual(H.min())&&(a=st(i)),new l_(a,r.transformResults||[])}(t,e))):[]}function P_(n,e){return{documents:[Lh(n,e.path)]}}function N_(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Lh(n,r);const i=function(h){if(h.length!==0)return Bh(ut.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:Tn(_.field),direction:O_(_.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=bo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:t,parent:r}}function M_(n){let e=S_(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){ne(s===1,65062);const f=t.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(m){const _=Uh(m);return _ instanceof ut&&gh(_)?_.getFilters():[_]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(_=>function(w){return new Ur(In(w.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(m){let _;return _=typeof m=="object"?m.value:m,ri(_)?null:_}(t.limit));let l=null;t.startAt&&(l=function(m){const _=!!m.before,I=m.values||[];return new Fr(I,_)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const _=!m.before,I=m.values||[];return new Fr(I,_)}(t.endAt)),Xm(e,r,a,i,c,"F",l,h)}function k_(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Uh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=In(t.unaryFilter.field);return pe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=In(t.unaryFilter.field);return pe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=In(t.unaryFilter.field);return pe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=In(t.unaryFilter.field);return pe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}}(n):n.fieldFilter!==void 0?function(t){return pe.create(In(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ut.create(t.compositeFilter.filters.map(s=>Uh(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return q(1026)}}(t.compositeFilter.op))}(n):q(30097,{filter:n})}function O_(n){return w_[n]}function D_(n){return E_[n]}function V_(n){return T_[n]}function Tn(n){return{fieldPath:n.canonicalString()}}function In(n){return Ee.fromServerFormat(n.fieldPath)}function Bh(n){return n instanceof pe?function(t){if(t.op==="=="){if(vu(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NAN"}};if(yu(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vu(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NOT_NAN"}};if(yu(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tn(t.field),op:D_(t.op),value:t.value}}}(n):n instanceof ut?function(t){const s=t.getFilters().map(r=>Bh(r));return s.length===1?s[0]:{compositeFilter:{op:V_(t.op),filters:s}}}(n):q(54877,{filter:n})}function x_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function $h(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ot{constructor(e,t,s,r,i=H.min(),a=H.min(),c=Te.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Ot(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ot(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class L_{constructor(e){this.gt=e}}function F_(n){const e=M_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?So(e,e.limit,"L"):e}/**
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
 */class U_{constructor(){this.Dn=new B_}addToCollectionParentIndex(e,t){return this.Dn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve($t.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve($t.min())}updateCollectionGroup(e,t,s){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class B_{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new ge(ce.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ge(ce.comparator)).toArray()}}/**
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
 */const Ou={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jh=41943040;class De{static withCacheSize(e){return new De(e,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */De.DEFAULT_COLLECTION_PERCENTILE=10,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,De.DEFAULT=new De(jh,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),De.DISABLED=new De(-1,0,0);/**
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
 */class Dn{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Dn(0)}static ur(){return new Dn(-1)}}/**
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
 */const Du="LruGarbageCollector",$_=1048576;function Vu([n,e],[t,s]){const r=Q(n,t);return r===0?Q(e,s):r}class j_{constructor(e){this.Tr=e,this.buffer=new ge(Vu),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Vu(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class q_{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){x(Du,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){jn(t)?x(Du,"Ignoring IndexedDB error during garbage collection: ",t):await $n(t)}await this.Rr(3e5)})}}class W_{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return N.resolve(si.ue);const s=new j_(t);return this.Vr.forEachTarget(e,r=>s.Er(r.sequenceNumber)).next(()=>this.Vr.gr(e,r=>s.Er(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Ou)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ou):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,r,i,a,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),r=this.params.maximumSequenceNumbersToCollect):r=m,a=Date.now(),this.nthSequenceNumber(e,r))).next(m=>(s=m,c=Date.now(),this.removeTargets(e,s,t))).next(m=>(i=m,l=Date.now(),this.removeOrphanedDocuments(e,s))).next(m=>(h=Date.now(),wn()<=Y.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${r} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${m} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:m})))}}function H_(n,e){return new W_(n,e)}/**
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
 */class z_{constructor(){this.changes=new dn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?N.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class G_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class K_{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&vs(s.mutation,r,Xe.empty(),ae.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,J()).next(()=>s))}getLocalViewOfDocuments(e,t,s=J()){const r=en();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let a=ds();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const s=en();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,J()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,s,r){let i=Tt();const a=ys(),c=function(){return ys()}();return t.forEach((l,h)=>{const f=s.get(h.key);r.has(h.key)&&(f===void 0||f.mutation instanceof fn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),vs(f.mutation,h,f.mutation.getFieldMask(),ae.now())):a.set(h.key,Xe.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var m;return c.set(h,new G_(f,(m=a.get(h))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,t){const s=ys();let r=new ue((a,c)=>a-c),i=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=s.get(l)||Xe.empty();f=c.applyToLocalView(h,f),s.set(l,f);const m=(r.get(c.batchId)||J()).add(l);r=r.insert(c.batchId,m)})}).next(()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,m=Ih();f.forEach(_=>{if(!i.has(_)){const I=Ph(t.get(_),s.get(_));I!==null&&m.set(_,I),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return N.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return function(a){return j.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ym(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):N.resolve(en());let c=As,l=i;return a.next(h=>N.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{l=l.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,J())).next(f=>({batchId:c,changes:Th(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next(s=>{let r=ds();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let a=ds();return this.indexManager.getCollectionParents(e,i).next(c=>N.forEach(c,l=>{const h=function(m,_){return new oi(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next(f=>{f.forEach((m,_)=>{a=a.insert(m,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r))).next(a=>{i.forEach((l,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Pe.newInvalidDocument(f)))});let c=ds();return a.forEach((l,h)=>{const f=i.get(l);f!==void 0&&vs(f.mutation,h,Xe.empty(),ae.now()),ci(t,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class Q_{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return N.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(r){return{id:r.id,version:r.version,createTime:st(r.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(r){return{name:r.name,query:F_(r.bundledQuery),readTime:st(r.readTime)}}(t)),N.resolve()}}/**
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
 */class X_{constructor(){this.overlays=new ue(j.comparator),this.kr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const s=en();return N.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.wt(e,t,i)}),N.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.kr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(s)),N.resolve()}getOverlaysForCollection(e,t,s){const r=en(),i=t.length+1,a=new j(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return N.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new ue((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>s){let f=i.get(h.largestBatchId);f===null&&(f=en(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=en(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=r)););return N.resolve(c)}wt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.kr.get(r.largestBatchId).delete(s.key);this.kr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new g_(t,s));let i=this.kr.get(t);i===void 0&&(i=J(),this.kr.set(t,i)),this.kr.set(t,i.add(s.key))}}/**
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
 */class Y_{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class ca{constructor(){this.qr=new ge(me.Qr),this.$r=new ge(me.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new me(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new me(e,t))}Gr(e,t){e.forEach(s=>this.removeReference(s,t))}zr(e){const t=new j(new ce([])),s=new me(t,e),r=new me(t,e+1),i=[];return this.$r.forEachInRange([s,r],a=>{this.Wr(a),i.push(a.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new j(new ce([])),s=new me(t,e),r=new me(t,e+1);let i=J();return this.$r.forEachInRange([s,r],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new me(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class me{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return j.comparator(e.key,t.key)||Q(e.Hr,t.Hr)}static Ur(e,t){return Q(e.Hr,t.Hr)||j.comparator(e.key,t.key)}}/**
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
 */class J_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new ge(me.Qr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new p_(i,t,s,r);this.mutationQueue.push(a);for(const c of r)this.Yr=this.Yr.add(new me(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),i=r<0?0:r;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?Jo:this.er-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new me(t,0),r=new me(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([s,r],a=>{const c=this.Zr(a.Hr);i.push(c)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ge(Q);return t.forEach(r=>{const i=new me(r,0),a=new me(r,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],c=>{s=s.add(c.Hr)})}),N.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;j.isDocumentKey(i)||(i=i.child(""));const a=new me(new j(i),0);let c=new ge(Q);return this.Yr.forEachWhile(l=>{const h=l.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(c=c.add(l.Hr)),!0)},a),N.resolve(this.ei(c))}ei(e){const t=[];return e.forEach(s=>{const r=this.Zr(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){ne(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return N.forEach(t.mutations,r=>{const i=new me(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Yr=s})}rr(e){}containsKey(e,t){const s=new me(t,0),r=this.Yr.firstAfterOrEqual(s);return N.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Z_{constructor(e){this.ni=e,this.docs=function(){return new ue(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,a=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return N.resolve(s?s.document.mutableCopy():Pe.newInvalidDocument(t))}getEntries(e,t){let s=Tt();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Pe.newInvalidDocument(r))}),N.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=Tt();const a=t.path,c=new j(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Cm(Rm(f),s)<=0||(r.has(f.key)||ci(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,t,s,r){q(9500)}ri(e,t){return N.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new ey(this)}getSize(e){return N.resolve(this.size)}}class ey extends z_{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Or.addEntry(e,r)):this.Or.removeEntry(s)}),N.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class ty{constructor(e){this.persistence=e,this.ii=new dn(t=>ta(t),na),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.si=0,this.oi=new ca,this.targetCount=0,this._i=Dn.ar()}forEachTarget(e,t){return this.ii.forEach((s,r)=>t(r)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),N.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Dn(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.hr(t),N.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.ii.forEach((a,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)}),N.waitFor(i).next(()=>r)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return N.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),N.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(a=>{i.push(r.markPotentiallyOrphaned(e,a))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return N.resolve(s)}containsKey(e,t){return N.resolve(this.oi.containsKey(t))}}/**
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
 */class qh{constructor(e,t){this.ai={},this.overlays={},this.ui=new si(0),this.ci=!1,this.ci=!0,this.li=new Y_,this.referenceDelegate=e(this),this.hi=new ty(this),this.indexManager=new U_,this.remoteDocumentCache=function(r){return new Z_(r)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new L_(t),this.Ti=new Q_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new X_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new J_(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){x("MemoryPersistence","Starting transaction:",e);const r=new ny(this.ui.next());return this.referenceDelegate.Ii(),s(r).next(i=>this.referenceDelegate.di(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ei(e,t){return N.or(Object.values(this.ai).map(s=>()=>s.containsKey(e,t)))}}class ny extends Nm{constructor(e){super(),this.currentSequenceNumber=e}}class ua{constructor(e){this.persistence=e,this.Ai=new ca,this.Ri=null}static Vi(e){return new ua(e)}get mi(){if(this.Ri)return this.Ri;throw q(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),N.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),N.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(r=>this.mi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.mi.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.mi,s=>{const r=j.fromPath(s);return this.fi(e,r).next(i=>{i||t.removeEntry(r,H.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return N.or([()=>N.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class qr{constructor(e,t){this.persistence=e,this.gi=new dn(s=>Om(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=H_(this,t)}static Vi(e,t){return new qr(e,t)}Ii(){}di(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}yr(e){let t=0;return this.gr(e,s=>{t++}).next(()=>t)}gr(e,t){return N.forEach(this.gi,(s,r)=>this.Sr(e,s,r).next(i=>i?N.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ri(e,a=>this.Sr(e,a,t).next(c=>{c||(s++,i.removeEntry(a,H.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),N.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),N.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ir(e.data.value)),t}Sr(e,t,s){return N.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.gi.get(t);return N.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class sy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ry{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Qp()?8:Mm(Ne())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.ps(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ys(e,t,r,s).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new sy;return this.ws(e,t,a).next(c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)})}).next(()=>i.result)}Ss(e,t,s,r){return s.documentReadCount<this.Vs?(wn()<=Y.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",En(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),N.resolve()):(wn()<=Y.DEBUG&&x("QueryEngine","Query:",En(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.fs*r?(wn()<=Y.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",En(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nt(t))):N.resolve())}ps(e,t){if(Iu(t))return N.resolve(null);let s=nt(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=So(t,null,"F"),s=nt(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const a=J(...i);return this.gs.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,s).next(l=>{const h=this.bs(t,c);return this.Ds(t,h,a,l.readTime)?this.ps(e,So(t,null,"F")):this.vs(e,h,t,l)}))})))}ys(e,t,s,r){return Iu(t)||r.isEqual(H.min())?N.resolve(null):this.gs.getDocuments(e,s).next(i=>{const a=this.bs(t,i);return this.Ds(t,a,s,r)?N.resolve(null):(wn()<=Y.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),En(t)),this.vs(e,a,t,bm(r,As)).next(c=>c))})}bs(e,t){let s=new ge(wh(e));return t.forEach((r,i)=>{ci(e,i)&&(s=s.add(i))}),s}Ds(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ws(e,t,s){return wn()<=Y.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",En(t)),this.gs.getDocumentsMatchingQuery(e,t,$t.min(),s)}vs(e,t,s,r){return this.gs.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const ha="LocalStore",iy=3e8;class oy{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.Fs=new ue(Q),this.Ms=new dn(i=>ta(i),na),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new K_(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function ay(n,e,t,s){return new oy(n,e,t,s)}async function Wh(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const a=[],c=[];let l=J();for(const h of r){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(s,l).next(h=>({Bs:h,removedBatchIds:a,addedBatchIds:c}))})})}function cy(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const m=h.batch,_=m.keys();let I=N.resolve();return _.forEach(w=>{I=I.next(()=>f.getEntry(l,w)).next(P=>{const R=h.docVersions.get(w);ne(R!==null,48541),P.version.compareTo(R)<0&&(m.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),I.next(()=>c.mutationQueue.removeMutationBatch(l,m))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(c){let l=J();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function Hh(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function uy(n,e){const t=K(n),s=e.snapshotVersion;let r=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});r=t.Fs;const c=[];e.targetChanges.forEach((f,m)=>{const _=r.get(m);if(!_)return;c.push(t.hi.removeMatchingKeys(i,f.removedDocuments,m).next(()=>t.hi.addMatchingKeys(i,f.addedDocuments,m)));let I=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(Te.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,s)),r=r.insert(m,I),function(P,R,U){return P.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=iy?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(_,I,f)&&c.push(t.hi.updateTargetData(i,I))});let l=Tt(),h=J();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(ly(i,a,e.documentUpdates).next(f=>{l=f.Ls,h=f.ks})),!s.isEqual(H.min())){const f=t.hi.getLastRemoteSnapshotVersion(i).next(m=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,s));c.push(f)}return N.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.Fs=r,i))}function ly(n,e,t){let s=J(),r=J();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let a=Tt();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(c)),l.isNoDocument()&&l.version.isEqual(H.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):x(ha,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ls:a,ks:r}})}function hy(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Jo),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function dy(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.hi.getTargetData(s,e).next(i=>i?(r=i,N.resolve(r)):t.hi.allocateTargetId(s).next(a=>(r=new Ot(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.Fs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s})}async function No(n,e,t){const s=K(n),r=s.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,a=>s.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!jn(a))throw a;x(ha,`Failed to update sequence numbers for target ${e}: ${a}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(r.target)}function xu(n,e,t){const s=K(n);let r=H.min(),i=J();return s.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,f){const m=K(l),_=m.Ms.get(f);return _!==void 0?N.resolve(m.Fs.get(_)):m.hi.getTargetData(h,f)}(s,a,nt(e)).next(c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>s.Cs.getDocumentsMatchingQuery(a,e,t?r:H.min(),t?i:J())).next(c=>(fy(s,Zm(e),c),{documents:c,qs:i})))}function fy(n,e,t){let s=n.xs.get(e)||H.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.xs.set(e,s)}class Lu{constructor(){this.activeTargetIds=i_()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class py{constructor(){this.Fo=new Lu,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Lu,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gy{xo(e){}shutdown(){}}/**
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
 */const Fu="ConnectivityMonitor";class Uu{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){x(Fu,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){x(Fu,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gr=null;function Mo(){return gr===null?gr=function(){return 268435456+Math.round(2147483648*Math.random())}():gr++,"0x"+gr.toString(16)}/**
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
 */const Ji="RestConnection",my={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class _y{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.Ko=this.databaseId.database===xr?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,i){const a=Mo(),c=this.Go(e,t.toUriEncodedString());x(Ji,`Sending RPC '${e}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,r,i);const{host:h}=new URL(c),f=Fn(h);return this.jo(e,c,l,s,f).then(m=>(x(Ji,`Received RPC '${e}' ${a}: `,m),m),m=>{throw Bt(Ji,`RPC '${e}' ${a} failed with error: `,m,"url: ",c,"request:",s),m})}Jo(e,t,s,r,i,a){return this.Wo(e,t,s,r,i)}zo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Go(e,t){const s=my[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
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
 */class yy{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Re="WebChannelConnection";class vy extends _y{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,r,i){const a=Mo();return new Promise((c,l)=>{const h=new Kl;h.setWithCredentials(!0),h.listenOnce(Ql.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Tr.NO_ERROR:const m=h.getResponseJson();x(Re,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),c(m);break;case Tr.TIMEOUT:x(Re,`RPC '${e}' ${a} timed out`),l(new $(M.DEADLINE_EXCEEDED,"Request time out"));break;case Tr.HTTP_ERROR:const _=h.getStatus();if(x(Re,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const w=I?.error;if(w&&w.status&&w.message){const P=function(U){const L=U.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(L)>=0?L:M.UNKNOWN}(w.status);l(new $(P,w.message))}else l(new $(M.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new $(M.UNAVAILABLE,"Connection failed."));break;default:q(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{x(Re,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(r);x(Re,`RPC '${e}' ${a} sending request:`,r),h.send(t,"POST",f,s,15)})}P_(e,t,s){const r=Mo(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Jl(),c=Yl(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,s),l.encodeInitMessageHeaders=!0;const f=i.join("");x(Re,`Creating RPC '${e}' stream ${r}: ${f}`,l);const m=a.createWebChannel(f,l);this.T_(m);let _=!1,I=!1;const w=new yy({Ho:R=>{I?x(Re,`Not sending because RPC '${e}' stream ${r} is closed:`,R):(_||(x(Re,`Opening RPC '${e}' stream ${r} transport.`),m.open(),_=!0),x(Re,`RPC '${e}' stream ${r} sending:`,R),m.send(R))},Yo:()=>m.close()}),P=(R,U,L)=>{R.listen(U,V=>{try{L(V)}catch(F){setTimeout(()=>{throw F},0)}})};return P(m,hs.EventType.OPEN,()=>{I||(x(Re,`RPC '${e}' stream ${r} transport opened.`),w.s_())}),P(m,hs.EventType.CLOSE,()=>{I||(I=!0,x(Re,`RPC '${e}' stream ${r} transport closed`),w.__(),this.I_(m))}),P(m,hs.EventType.ERROR,R=>{I||(I=!0,Bt(Re,`RPC '${e}' stream ${r} transport errored. Name:`,R.name,"Message:",R.message),w.__(new $(M.UNAVAILABLE,"The operation could not be completed")))}),P(m,hs.EventType.MESSAGE,R=>{var U;if(!I){const L=R.data[0];ne(!!L,16349);const V=L,F=V?.error||((U=V[0])===null||U===void 0?void 0:U.error);if(F){x(Re,`RPC '${e}' stream ${r} received error:`,F);const X=F.status;let B=function(y){const T=de[y];if(T!==void 0)return kh(T)}(X),E=F.message;B===void 0&&(B=M.INTERNAL,E="Unknown error status: "+X+" with message "+F.message),I=!0,w.__(new $(B,E)),m.close()}else x(Re,`RPC '${e}' stream ${r} received:`,L),w.a_(L)}}),P(c,Xl.STAT_EVENT,R=>{R.stat===vo.PROXY?x(Re,`RPC '${e}' stream ${r} detected buffering proxy`):R.stat===vo.NOPROXY&&x(Re,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{w.o_()},0),w}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function Zi(){return typeof document<"u"?document:null}/**
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
 */function di(n){return new I_(n,!0)}/**
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
 */const Bu="PersistentStream";class Gh{constructor(e,t,s,r,i,a,c,l){this.Fi=e,this.w_=s,this.S_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new zh(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(Et(t.toString()),Et("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.b_===t&&this.W_(s,r)},s=>{e(()=>{const r=new $(M.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(r)})})}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(r=>{s(()=>this.G_(r))}),this.stream.onMessage(r=>{s(()=>++this.C_==1?this.j_(r):this.onNext(r))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return x(Bu,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(x(Bu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wy extends Gh{constructor(e,t,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=b_(this.serializer,e),s=function(i){if(!("targetChange"in i))return H.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?st(a.readTime):H.min()}(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Po(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=Ao(l)?{documents:P_(i,l)}:{query:N_(i,l).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Vh(i,a.resumeToken);const h=bo(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(H.min())>0){c.readTime=jr(i,a.snapshotVersion.toTimestamp());const h=bo(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const s=k_(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Po(this.serializer),t.removeTarget=e,this.k_(t)}}class Ey extends Gh{constructor(e,t,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=C_(e.writeResults,e.commitTime),s=st(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Po(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>R_(this.serializer,s))};this.k_(t)}}/**
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
 */class Ty{}class Iy extends Ty{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,Ro(t,s),r,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(M.UNKNOWN,i.toString())})}Jo(e,t,s,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Jo(e,Ro(t,s),r,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new $(M.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Ay{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Et(t),this._a=!1):x("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const cn="RemoteStore";class Sy{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(a=>{s.enqueueAndForget(async()=>{pn(this)&&(x(cn,"Restarting streams for network reachability change."),await async function(l){const h=K(l);h.Ia.add(4),await Bs(h),h.Aa.set("Unknown"),h.Ia.delete(4),await fi(h)}(this))})}),this.Aa=new Ay(s,r)}}async function fi(n){if(pn(n))for(const e of n.da)await e(!0)}async function Bs(n){for(const e of n.da)await e(!1)}function Kh(n,e){const t=K(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),ga(t)?pa(t):qn(t).x_()&&fa(t,e))}function da(n,e){const t=K(n),s=qn(t);t.Ta.delete(e),s.x_()&&Qh(t,e),t.Ta.size===0&&(s.x_()?s.B_():pn(t)&&t.Aa.set("Unknown"))}function fa(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}qn(n).H_(e)}function Qh(n,e){n.Ra.$e(e),qn(n).Y_(e)}function pa(n){n.Ra=new v_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),qn(n).start(),n.Aa.aa()}function ga(n){return pn(n)&&!qn(n).M_()&&n.Ta.size>0}function pn(n){return K(n).Ia.size===0}function Xh(n){n.Ra=void 0}async function by(n){n.Aa.set("Online")}async function Ry(n){n.Ta.forEach((e,t)=>{fa(n,e)})}async function Cy(n,e){Xh(n),ga(n)?(n.Aa.la(e),pa(n)):n.Aa.set("Unknown")}async function Py(n,e,t){if(n.Aa.set("Online"),e instanceof Dh&&e.state===2&&e.cause)try{await async function(r,i){const a=i.cause;for(const c of i.targetIds)r.Ta.has(c)&&(await r.remoteSyncer.rejectListen(c,a),r.Ta.delete(c),r.Ra.removeTarget(c))}(n,e)}catch(s){x(cn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Wr(n,s)}else if(e instanceof br?n.Ra.Ye(e):e instanceof Oh?n.Ra.it(e):n.Ra.et(e),!t.isEqual(H.min()))try{const s=await Hh(n.localStore);t.compareTo(s)>=0&&await function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ta.get(h);f&&i.Ta.set(h,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const f=i.Ta.get(l);if(!f)return;i.Ta.set(l,f.withResumeToken(Te.EMPTY_BYTE_STRING,f.snapshotVersion)),Qh(i,l);const m=new Ot(f.target,l,h,f.sequenceNumber);fa(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(s){x(cn,"Failed to raise snapshot:",s),await Wr(n,s)}}async function Wr(n,e,t){if(!jn(e))throw e;n.Ia.add(1),await Bs(n),n.Aa.set("Offline"),t||(t=()=>Hh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x(cn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await fi(n)})}function Yh(n,e){return e().catch(t=>Wr(n,t,e))}async function pi(n){const e=K(n),t=Ht(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Jo;for(;Ny(e);)try{const r=await hy(e.localStore,s);if(r===null){e.Pa.length===0&&t.B_();break}s=r.batchId,My(e,r)}catch(r){await Wr(e,r)}Jh(e)&&Zh(e)}function Ny(n){return pn(n)&&n.Pa.length<10}function My(n,e){n.Pa.push(e);const t=Ht(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Jh(n){return pn(n)&&!Ht(n).M_()&&n.Pa.length>0}function Zh(n){Ht(n).start()}async function ky(n){Ht(n).na()}async function Oy(n){const e=Ht(n);for(const t of n.Pa)e.X_(t.mutations)}async function Dy(n,e,t){const s=n.Pa.shift(),r=ia.from(s,e,t);await Yh(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await pi(n)}async function Vy(n,e){e&&Ht(n).Z_&&await async function(s,r){if(function(a){return __(a)&&a!==M.ABORTED}(r.code)){const i=s.Pa.shift();Ht(s).N_(),await Yh(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await pi(s)}}(n,e),Jh(n)&&Zh(n)}async function $u(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),x(cn,"RemoteStore received new credentials");const s=pn(t);t.Ia.add(3),await Bs(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await fi(t)}async function xy(n,e){const t=K(n);e?(t.Ia.delete(2),await fi(t)):e||(t.Ia.add(2),await Bs(t),t.Aa.set("Unknown"))}function qn(n){return n.Va||(n.Va=function(t,s,r){const i=K(t);return i.ia(),new wy(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:by.bind(null,n),e_:Ry.bind(null,n),n_:Cy.bind(null,n),J_:Py.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),ga(n)?pa(n):n.Aa.set("Unknown")):(await n.Va.stop(),Xh(n))})),n.Va}function Ht(n){return n.ma||(n.ma=function(t,s,r){const i=K(t);return i.ia(),new Ey(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:ky.bind(null,n),n_:Vy.bind(null,n),ea:Oy.bind(null,n),ta:Dy.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await pi(n)):(await n.ma.stop(),n.Pa.length>0&&(x(cn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
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
 */class ma{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const a=Date.now()+s,c=new ma(e,t,a,r,i);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _a(n,e){if(Et("AsyncQueue",`${e}: ${n}`),jn(n))return new $(M.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class An{static emptySet(e){return new An(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||j.comparator(t.key,s.key):(t,s)=>j.comparator(t.key,s.key),this.keyedMap=ds(),this.sortedSet=new ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof An)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new An;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class ju{constructor(){this.fa=new ue(j.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):q(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,s)=>{e.push(s)}),e}}class Vn{constructor(e,t,s,r,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,s,r,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Vn(e,t,An.emptySet(t),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ai(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Ly{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class Fy{constructor(){this.queries=qu(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const r=K(t),i=r.queries;r.queries=qu(),i.forEach((a,c)=>{for(const l of c.wa)l.onError(s)})})(this,new $(M.ABORTED,"Firestore shutting down"))}}function qu(){return new dn(n=>vh(n),ai)}async function Uy(n,e){const t=K(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Sa()&&e.ba()&&(s=2):(i=new Ly,s=e.ba()?0:1);try{switch(s){case 0:i.ya=await t.onListen(r,!0);break;case 1:i.ya=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const c=_a(a,`Initialization of query '${En(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&ya(t)}async function By(n,e){const t=K(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?r=e.ba()?0:1:!i.Sa()&&e.ba()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function $y(n,e){const t=K(n);let s=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(r)&&(s=!0);a.ya=r}}s&&ya(t)}function jy(n,e,t){const s=K(n),r=s.queries.get(e);if(r)for(const i of r.wa)i.onError(t);s.queries.delete(e)}function ya(n){n.Da.forEach(e=>{e.next()})}var ko,Wu;(Wu=ko||(ko={})).Fa="default",Wu.Cache="cache";class qy{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Vn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Vn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ko.Cache}}/**
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
 */class ed{constructor(e){this.key=e}}class td{constructor(e){this.key=e}}class Wy{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=J(),this.mutatedKeys=J(),this.Xa=wh(e),this.eu=new An(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new ju,r=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,c=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((f,m)=>{const _=r.get(f),I=ci(this.query,m)?m:null,w=!!_&&this.mutatedKeys.has(_.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let R=!1;_&&I?_.data.isEqual(I.data)?w!==P&&(s.track({type:3,doc:I}),R=!0):this.iu(_,I)||(s.track({type:2,doc:I}),R=!0,(l&&this.Xa(I,l)>0||h&&this.Xa(I,h)<0)&&(c=!0)):!_&&I?(s.track({type:0,doc:I}),R=!0):_&&!I&&(s.track({type:1,doc:_}),R=!0,(l||h)&&(c=!0)),R&&(I?(a=a.add(I),i=P?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),s.track({type:1,doc:f})}return{eu:a,ru:s,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort((f,m)=>function(I,w){const P=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{At:R})}};return P(I)-P(w)}(f.type,m.type)||this.Xa(f.doc,m.doc)),this.su(s),r=r!=null&&r;const c=t&&!r?this.ou():[],l=this.Za.size===0&&this.current&&!r?1:0,h=l!==this.Ya;return this.Ya=l,a.length!==0||h?{snapshot:new Vn(this.query,e.eu,i,a,e.mutatedKeys,l===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ju,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=J(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});const t=[];return e.forEach(s=>{this.Za.has(s)||t.push(new td(s))}),this.Za.forEach(s=>{e.has(s)||t.push(new ed(s))}),t}uu(e){this.Ha=e.qs,this.Za=J();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Vn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const va="SyncEngine";class Hy{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class zy{constructor(e){this.key=e,this.lu=!1}}class Gy{constructor(e,t,s,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new dn(c=>vh(c),ai),this.Tu=new Map,this.Iu=new Set,this.du=new ue(j.comparator),this.Eu=new Map,this.Au=new ca,this.Ru={},this.Vu=new Map,this.mu=Dn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Ky(n,e,t=!0){const s=ad(n);let r;const i=s.Pu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.cu()):r=await nd(s,e,t,!0),r}async function Qy(n,e){const t=ad(n);await nd(t,e,!0,!1)}async function nd(n,e,t,s){const r=await dy(n.localStore,nt(e)),i=r.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return s&&(c=await Xy(n,e,i,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&Kh(n.remoteStore,r),c}async function Xy(n,e,t,s,r){n.gu=(m,_,I)=>async function(P,R,U,L){let V=R.view.nu(U);V.Ds&&(V=await xu(P.localStore,R.query,!1).then(({documents:E})=>R.view.nu(E,V)));const F=L&&L.targetChanges.get(R.targetId),X=L&&L.targetMismatches.get(R.targetId)!=null,B=R.view.applyChanges(V,P.isPrimaryClient,F,X);return zu(P,R.targetId,B._u),B.snapshot}(n,m,_,I);const i=await xu(n.localStore,e,!0),a=new Wy(e,i.qs),c=a.nu(i.documents),l=Us.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),h=a.applyChanges(c,n.isPrimaryClient,l);zu(n,t,h._u);const f=new Hy(e,t,a);return n.Pu.set(e,f),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function Yy(n,e,t){const s=K(n),r=s.Pu.get(e),i=s.Tu.get(r.targetId);if(i.length>1)return s.Tu.set(r.targetId,i.filter(a=>!ai(a,e))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await No(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&da(s.remoteStore,r.targetId),Oo(s,r.targetId)}).catch($n)):(Oo(s,r.targetId),await No(s.localStore,r.targetId,!0))}async function Jy(n,e){const t=K(n),s=t.Pu.get(e),r=t.Tu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),da(t.remoteStore,s.targetId))}async function Zy(n,e,t){const s=ov(n);try{const r=await function(a,c){const l=K(a),h=ae.now(),f=c.reduce((I,w)=>I.add(w.key),J());let m,_;return l.persistence.runTransaction("Locally write mutations","readwrite",I=>{let w=Tt(),P=J();return l.Os.getEntries(I,f).next(R=>{w=R,w.forEach((U,L)=>{L.isValidDocument()||(P=P.add(U))})}).next(()=>l.localDocuments.getOverlayedDocuments(I,w)).next(R=>{m=R;const U=[];for(const L of c){const V=d_(L,m.get(L.key).overlayedDocument);V!=null&&U.push(new fn(L.key,V,dh(V.value.mapValue),vt.exists(!0)))}return l.mutationQueue.addMutationBatch(I,h,U,c)}).next(R=>{_=R;const U=R.applyToLocalDocumentSet(m,P);return l.documentOverlayCache.saveOverlays(I,R.batchId,U)})}).then(()=>({batchId:_.batchId,changes:Th(m)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(a,c,l){let h=a.Ru[a.currentUser.toKey()];h||(h=new ue(Q)),h=h.insert(c,l),a.Ru[a.currentUser.toKey()]=h}(s,r.batchId,t),await $s(s,r.changes),await pi(s.remoteStore)}catch(r){const i=_a(r,"Failed to persist write");t.reject(i)}}async function sd(n,e){const t=K(n);try{const s=await uy(t.localStore,e);e.targetChanges.forEach((r,i)=>{const a=t.Eu.get(i);a&&(ne(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.lu=!0:r.modifiedDocuments.size>0?ne(a.lu,14607):r.removedDocuments.size>0&&(ne(a.lu,42227),a.lu=!1))}),await $s(t,s,e)}catch(s){await $n(s)}}function Hu(n,e,t){const s=K(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Pu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&r.push(c.snapshot)}),function(a,c){const l=K(a);l.onlineState=c;let h=!1;l.queries.forEach((f,m)=>{for(const _ of m.wa)_.va(c)&&(h=!0)}),h&&ya(l)}(s.eventManager,e),r.length&&s.hu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ev(n,e,t){const s=K(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Eu.get(e),i=r&&r.key;if(i){let a=new ue(j.comparator);a=a.insert(i,Pe.newNoDocument(i,H.min()));const c=J().add(i),l=new hi(H.min(),new Map,new ue(Q),a,c);await sd(s,l),s.du=s.du.remove(i),s.Eu.delete(e),wa(s)}else await No(s.localStore,e,!1).then(()=>Oo(s,e,t)).catch($n)}async function tv(n,e){const t=K(n),s=e.batch.batchId;try{const r=await cy(t.localStore,e);id(t,s,null),rd(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await $s(t,r)}catch(r){await $n(r)}}async function nv(n,e,t){const s=K(n);try{const r=await function(a,c){const l=K(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(m=>(ne(m!==null,37113),f=m.keys(),l.mutationQueue.removeMutationBatch(h,m))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(s.localStore,e);id(s,e,t),rd(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await $s(s,r)}catch(r){await $n(r)}}function rd(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function id(n,e,t){const s=K(n);let r=s.Ru[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.Ru[s.currentUser.toKey()]=r}}function Oo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Tu.get(e))n.Pu.delete(s),t&&n.hu.pu(s,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(s=>{n.Au.containsKey(s)||od(n,s)})}function od(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(da(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),wa(n))}function zu(n,e,t){for(const s of t)s instanceof ed?(n.Au.addReference(s.key,e),sv(n,s)):s instanceof td?(x(va,"Document no longer in limbo: "+s.key),n.Au.removeReference(s.key,e),n.Au.containsKey(s.key)||od(n,s.key)):q(19791,{yu:s})}function sv(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Iu.has(s)||(x(va,"New document in limbo: "+t),n.Iu.add(s),wa(n))}function wa(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new j(ce.fromString(e)),s=n.mu.next();n.Eu.set(s,new zy(t)),n.du=n.du.insert(t,s),Kh(n.remoteStore,new Ot(nt(sa(t.path)),s,"TargetPurposeLimboResolution",si.ue))}}async function $s(n,e,t){const s=K(n),r=[],i=[],a=[];s.Pu.isEmpty()||(s.Pu.forEach((c,l)=>{a.push(s.gu(l,e,t).then(h=>{var f;if((h||t)&&s.isPrimaryClient){const m=h?!h.fromCache:(f=t?.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;s.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(h){r.push(h);const m=la.Es(l.targetId,h);i.push(m)}}))}),await Promise.all(a),s.hu.J_(r),await async function(l,h){const f=K(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>N.forEach(h,_=>N.forEach(_.Is,I=>f.persistence.referenceDelegate.addReference(m,_.targetId,I)).next(()=>N.forEach(_.ds,I=>f.persistence.referenceDelegate.removeReference(m,_.targetId,I)))))}catch(m){if(!jn(m))throw m;x(ha,"Failed to update sequence numbers: "+m)}for(const m of h){const _=m.targetId;if(!m.fromCache){const I=f.Fs.get(_),w=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(w);f.Fs=f.Fs.insert(_,P)}}}(s.localStore,i))}async function rv(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){x(va,"User change. New user:",e.toKey());const s=await Wh(t.localStore,e);t.currentUser=e,function(i,a){i.Vu.forEach(c=>{c.forEach(l=>{l.reject(new $(M.CANCELLED,a))})}),i.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await $s(t,s.Bs)}}function iv(n,e){const t=K(n),s=t.Eu.get(e);if(s&&s.lu)return J().add(s.key);{let r=J();const i=t.Tu.get(e);if(!i)return r;for(const a of i){const c=t.Pu.get(a);r=r.unionWith(c.view.tu)}return r}}function ad(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=sd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ev.bind(null,e),e.hu.J_=$y.bind(null,e.eventManager),e.hu.pu=jy.bind(null,e.eventManager),e}function ov(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nv.bind(null,e),e}class Hr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=di(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return ay(this.persistence,new ry,e.initialUser,this.serializer)}Du(e){return new qh(ua.Vi,this.serializer)}bu(e){return new py}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hr.provider={build:()=>new Hr};class av extends Hr{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){ne(this.persistence.referenceDelegate instanceof qr,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new q_(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new qh(s=>qr.Vi(s,t),this.serializer)}}class Do{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Hu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=rv.bind(null,this.syncEngine),await xy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Fy}()}createDatastore(e){const t=di(e.databaseInfo.databaseId),s=function(i){return new vy(i)}(e.databaseInfo);return function(i,a,c,l){return new Iy(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,i,a,c){return new Sy(s,r,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Hu(this.syncEngine,t,0),function(){return Uu.C()?new Uu:new gy}())}createSyncEngine(e,t){return function(r,i,a,c,l,h,f){const m=new Gy(r,i,a,c,l,h);return f&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const i=K(r);x(cn,"RemoteStore shutting down."),i.Ia.add(5),await Bs(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Do.provider={build:()=>new Do};/**
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
 */class cv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Et("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const zt="FirestoreClient";class uv{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=Ce.UNAUTHENTICATED,this.clientId=Xo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async a=>{x(zt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(s,a=>(x(zt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=_a(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function eo(n,e){n.asyncQueue.verifyOperationInProgress(),x(zt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Wh(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>{Bt("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{x("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(r=>{Bt("Terminating Firestore due to IndexedDb database deletion failed",r)})}),n._offlineComponents=e}async function Gu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await lv(n);x(zt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>$u(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>$u(e.remoteStore,r)),n._onlineComponents=e}async function lv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x(zt,"Using user provided OfflineComponentProvider");try{await eo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===M.FAILED_PRECONDITION||r.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;Bt("Error using user provided cache. Falling back to memory cache: "+t),await eo(n,new Hr)}}else x(zt,"Using default OfflineComponentProvider"),await eo(n,new av(void 0));return n._offlineComponents}async function cd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x(zt,"Using user provided OnlineComponentProvider"),await Gu(n,n._uninitializedComponentsProvider._online)):(x(zt,"Using default OnlineComponentProvider"),await Gu(n,new Do))),n._onlineComponents}function hv(n){return cd(n).then(e=>e.syncEngine)}async function dv(n){const e=await cd(n),t=e.eventManager;return t.onListen=Ky.bind(null,e.syncEngine),t.onUnlisten=Yy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Qy.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Jy.bind(null,e.syncEngine),t}function fv(n,e,t={}){const s=new Ft;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new cv({next:_=>{f.Ou(),a.enqueueAndForget(()=>By(i,m));const I=_.docs.has(c);!I&&_.fromCache?h.reject(new $(M.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&_.fromCache&&l&&l.source==="server"?h.reject(new $(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new qy(sa(c.path),f,{includeMetadataChanges:!0,ka:!0});return Uy(i,m)}(await dv(n),n.asyncQueue,e,t,s)),s.promise}/**
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
 */function ud(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Ku=new Map;/**
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
 */const ld="firestore.googleapis.com",Qu=!0;class Xu{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new $(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ld,this.ssl=Qu}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Qu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<$_)throw new $(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Sm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ud((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ea{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new gm;switch(s.type){case"firstParty":return new vm(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new $(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Ku.get(t);s&&(x("ComponentProvider","Removing Datastore"),Ku.delete(t),s.terminate())}(this),Promise.resolve()}}function pv(n,e,t,s={}){var r;n=Is(n,Ea);const i=Fn(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i&&(Ul(`https://${l}`),Bl("Firestore",!0)),a.host!==ld&&a.host!==l&&Bt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:l,ssl:i,emulatorOptions:s});if(!rn(h,c)&&(n._setSettings(h),s.mockUserToken)){let f,m;if(typeof s.mockUserToken=="string")f=s.mockUserToken,m=Ce.MOCK_USER;else{f=Bp(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new $(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ce(_)}n._authCredentials=new mm(new eh(f,m))}}/**
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
 */class Ta{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ta(this.firestore,e,this._query)}}class ye{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ns(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ye(this.firestore,e,this._key)}toJSON(){return{type:ye._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ls(t,ye._jsonSchema))return new ye(e,s||null,new j(ce.fromString(t.referencePath)))}}ye._jsonSchemaVersion="firestore/documentReference/1.0",ye._jsonSchema={type:fe("string",ye._jsonSchemaVersion),referencePath:fe("string")};class Ns extends Ta{constructor(e,t,s){super(e,t,sa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ye(this.firestore,null,new j(e))}withConverter(e){return new Ns(this.firestore,e,this._path)}}function hd(n,e,...t){if(n=We(n),arguments.length===1&&(e=Xo.newId()),Am("doc","path",e),n instanceof Ea){const s=ce.fromString(e,...t);return lu(s),new ye(n,null,new j(s))}{if(!(n instanceof ye||n instanceof Ns))throw new $(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ce.fromString(e,...t));return lu(s),new ye(n.firestore,n instanceof Ns?n.converter:null,new j(s))}}/**
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
 */const Yu="AsyncQueue";class Ju{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new zh(this,"async_queue_retry"),this.oc=()=>{const s=Zi();s&&x(Yu,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=Zi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Zi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Ft;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!jn(e))throw e;x(Yu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,Et("INTERNAL UNHANDLED ERROR: ",Zu(s)),s}).then(s=>(this.nc=!1,s))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const r=ma.createAndSchedule(this,e,t,s,i=>this.lc(i));return this.ec.push(r),r}ac(){this.tc&&q(47125,{hc:Zu(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Zu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ia extends Ea{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Ju,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ju(e),this._firestoreClient=void 0,await e}}}function gv(n,e){const t=typeof n=="object"?n:Wl(),s=typeof n=="string"?n:xr,r=Ko(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Fp("firestore");i&&pv(r,...i)}return r}function dd(n){if(n._terminated)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||mv(n),n._firestoreClient}function mv(n){var e,t,s;const r=n._freezeSettings(),i=function(c,l,h,f){return new xm(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ud(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new uv(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}/**
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
 */class qe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qe(Te.fromBase64String(e))}catch(t){throw new $(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qe(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:qe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ls(e,qe._jsonSchema))return qe.fromBase64String(e.bytes)}}qe._jsonSchemaVersion="firestore/bytes/1.0",qe._jsonSchema={type:fe("string",qe._jsonSchemaVersion),bytes:fe("string")};/**
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
 */class Aa{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class rt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rt._jsonSchemaVersion}}static fromJSON(e){if(Ls(e,rt._jsonSchema))return new rt(e.latitude,e.longitude)}}rt._jsonSchemaVersion="firestore/geoPoint/1.0",rt._jsonSchema={type:fe("string",rt._jsonSchemaVersion),latitude:fe("number"),longitude:fe("number")};/**
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
 */class it{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:it._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ls(e,it._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new it(e.vectorValues);throw new $(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}it._jsonSchemaVersion="firestore/vectorValue/1.0",it._jsonSchema={type:fe("string",it._jsonSchemaVersion),vectorValues:fe("object")};/**
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
 */const _v=/^__.*__$/;class yv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new fn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Fs(e,this.data,t,this.fieldTransforms)}}function pd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{Ec:n})}}class Sa{constructor(e,t,s,r,i,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Sa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Rc({path:s,mc:!1});return r.fc(e),r}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Rc({path:s,mc:!1});return r.Ac(),r}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return zr(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(pd(this.Ec)&&_v.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class vv{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||di(e)}Dc(e,t,s,r=!1){return new Sa({Ec:e,methodName:t,bc:s,path:Ee.emptyPath(),mc:!1,Sc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wv(n){const e=n._freezeSettings(),t=di(n._databaseId);return new vv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ev(n,e,t,s,r,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,r);yd("Data must be an object, but it was:",a,s);const c=md(s,a);let l,h;if(i.merge)l=new Xe(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const _=Tv(e,m,t);if(!a.contains(_))throw new $(M.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Av(f,_)||f.push(_)}l=new Xe(f),h=a.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,h=a.fieldTransforms;return new yv(new je(c),l,h)}function gd(n,e){if(_d(n=We(n)))return yd("Unsupported field value:",e,n),md(n,e);if(n instanceof fd)return function(s,r){if(!pd(r.Ec))throw r.wc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.wc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(s,r){const i=[];let a=0;for(const c of s){let l=gd(c,r.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(s,r){if((s=We(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return o_(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=ae.fromDate(s);return{timestampValue:jr(r.serializer,i)}}if(s instanceof ae){const i=new ae(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:jr(r.serializer,i)}}if(s instanceof rt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof qe)return{bytesValue:Vh(r.serializer,s._byteString)};if(s instanceof ye){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:aa(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof it)return function(a,c){return{mapValue:{fields:{[lh]:{stringValue:hh},[Lr]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return ra(c.serializer,h)})}}}}}}(s,r);throw r.wc(`Unsupported field value: ${Yo(s)}`)}(n,e)}function md(n,e){const t={};return rh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hn(n,(s,r)=>{const i=gd(r,e.Vc(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function _d(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ae||n instanceof rt||n instanceof qe||n instanceof ye||n instanceof fd||n instanceof it)}function yd(n,e,t){if(!_d(t)||!nh(t)){const s=Yo(t);throw s==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+s)}}function Tv(n,e,t){if((e=We(e))instanceof Aa)return e._internalPath;if(typeof e=="string")return vd(n,e);throw zr("Field path arguments must be of type string or ",n,!1,void 0,t)}const Iv=new RegExp("[~\\*/\\[\\]]");function vd(n,e,t){if(e.search(Iv)>=0)throw zr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Aa(...e.split("."))._internalPath}catch{throw zr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function zr(n,e,t,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${s}`),a&&(l+=` in document ${r}`),l+=")"),new $(M.INVALID_ARGUMENT,c+n+l)}function Av(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class wd{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Sv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ed("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Sv extends wd{data(){return super.data()}}function Ed(n,e){return typeof e=="string"?vd(n,e):e instanceof Aa?e._internalPath:e._delegate._internalPath}class bv{convertValue(e,t="none"){switch(Wt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(qt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return hn(e,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertVectorValue(e){var t,s,r;const i=(r=(s=(t=e.fields)===null||t===void 0?void 0:t[Lr].arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(a=>he(a.doubleValue));return new it(i)}convertGeoPoint(e){return new rt(he(e.latitude),he(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=ii(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ss(e));default:return null}}convertTimestamp(e){const t=jt(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ce.fromString(e);ne($h(s),9688,{name:e});const r=new bs(s.get(1),s.get(3)),i=new j(s.popFirst(5));return r.isEqual(t)||Et(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Rv(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class ps{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sn extends wd{constructor(e,t,s,r,i,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Rr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ed("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=sn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}sn._jsonSchemaVersion="firestore/documentSnapshot/1.0",sn._jsonSchema={type:fe("string",sn._jsonSchemaVersion),bundleSource:fe("string","DocumentSnapshot"),bundleName:fe("string"),bundle:fe("string")};class Rr extends sn{data(e={}){return super.data(e)}}class ws{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ps(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Rr(this._firestore,this._userDataWriter,s.key,s,new ps(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(c=>{const l=new Rr(r._firestore,r._userDataWriter,c.doc.key,c.doc,new ps(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Rr(r._firestore,r._userDataWriter,c.doc.key,c.doc,new ps(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:Cv(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ws._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Xo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Cv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:n})}}/**
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
 */function Pv(n){n=Is(n,ye);const e=Is(n.firestore,Ia);return fv(dd(e),n._key).then(t=>Ov(e,n,t))}ws._jsonSchemaVersion="firestore/querySnapshot/1.0",ws._jsonSchema={type:fe("string",ws._jsonSchemaVersion),bundleSource:fe("string","QuerySnapshot"),bundleName:fe("string"),bundle:fe("string")};class Nv extends bv{constructor(e){super(),this.firestore=e}convertBytes(e){return new qe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ye(this.firestore,null,t)}}function Mv(n,e,t){n=Is(n,ye);const s=Is(n.firestore,Ia),r=Rv(n.converter,e);return kv(s,[Ev(wv(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,vt.none())])}function kv(n,e){return function(s,r){const i=new Ft;return s.asyncQueue.enqueueAndForget(async()=>Zy(await hv(s),r,i)),i.promise}(dd(n),e)}function Ov(n,e,t){const s=t.docs.get(e._key),r=new Nv(n);return new sn(n,r,e._key,s,new ps(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(r){Bn=r})(Un),Nn(new on("firestore",(s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),c=new Ia(new _m(s.getProvider("auth-internal")),new wm(a,s.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new $(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bs(h.options.projectId,f)}(a,r),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),xt(iu,ou,e),xt(iu,ou,"esm2017")})();function ba(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t}function Td(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dv=Td,Id=new Vs("auth","Firebase",Td());/**
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
 */const Gr=new zo("@firebase/auth");function Vv(n,...e){Gr.logLevel<=Y.WARN&&Gr.warn(`Auth (${Un}): ${n}`,...e)}function Cr(n,...e){Gr.logLevel<=Y.ERROR&&Gr.error(`Auth (${Un}): ${n}`,...e)}/**
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
 */function lt(n,...e){throw Ca(n,...e)}function Je(n,...e){return Ca(n,...e)}function Ra(n,e,t){const s=Object.assign(Object.assign({},Dv()),{[e]:t});return new Vs("auth","Firebase",s).create(e,{appName:n.name})}function Ut(n){return Ra(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ad(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&lt(n,"argument-error"),Ra(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ca(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Id.create(n,...e)}function W(n,e,...t){if(!n)throw Ca(e,...t)}function _t(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Cr(e),new Error(e)}function It(n,e){n||_t(e)}/**
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
 */function Vo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function xv(){return el()==="http:"||el()==="https:"}function el(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Lv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xv()||zp()||"connection"in navigator)?navigator.onLine:!0}function Fv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class js{constructor(e,t){this.shortDelay=e,this.longDelay=t,It(t>e,"Short delay should be less than long delay!"),this.isMobile=qp()||Gp()}get(){return Lv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pa(n,e){It(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Sd{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Uv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Bv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$v=new js(3e4,6e4);function Na(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Wn(n,e,t,s,r={}){return bd(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=xs(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return Hp()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Fn(n.emulatorConfig.host)&&(h.credentials="include"),Sd.fetch()(await Rd(n,n.config.apiHost,t,c),h)})}async function bd(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Uv),e);try{const r=new qv(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw mr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw mr(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw mr(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw mr(n,"user-disabled",a);const f=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ra(n,f,h);lt(n,f)}}catch(r){if(r instanceof At)throw r;lt(n,"network-request-failed",{message:String(r)})}}async function jv(n,e,t,s,r={}){const i=await Wn(n,e,t,s,r);return"mfaPendingCredential"in i&&lt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Rd(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?Pa(n.config,r):`${n.config.apiScheme}://${r}`;return Bv.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class qv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Je(this.auth,"network-request-failed")),$v.get())})}}function mr(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=Je(n,e,s);return r.customData._tokenResponse=t,r}/**
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
 */async function Wv(n,e){return Wn(n,"POST","/v1/accounts:delete",e)}async function Kr(n,e){return Wn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Es(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hv(n,e=!1){const t=We(n),s=await t.getIdToken(e),r=Ma(s);W(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i?.sign_in_provider;return{claims:r,token:s,authTime:Es(to(r.auth_time)),issuedAtTime:Es(to(r.iat)),expirationTime:Es(to(r.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function to(n){return Number(n)*1e3}function Ma(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Cr("JWT malformed, contained fewer than 3 sections"),null;try{const r=Vl(t);return r?JSON.parse(r):(Cr("Failed to decode base64 JWT payload"),null)}catch(r){return Cr("Caught error parsing JWT payload as JSON",r?.toString()),null}}function tl(n){const e=Ma(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ms(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof At&&zv(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function zv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Gv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Es(this.lastLoginAt),this.creationTime=Es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qr(n){var e;const t=n.auth,s=await n.getIdToken(),r=await Ms(n,Kr(t,{idToken:s}));W(r?.users.length,t,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Cd(i.providerUserInfo):[],c=Qv(n.providerData,a),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!c?.length,f=l?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new xo(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function Kv(n){const e=We(n);await Qr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qv(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Cd(n){return n.map(e=>{var{providerId:t}=e,s=ba(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Xv(n,e){const t=await bd(n,{},async()=>{const s=xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await Rd(n,r,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:s};return n.emulatorConfig&&Fn(n.emulatorConfig.host)&&(l.credentials="include"),Sd.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Yv(n,e){return Wn(n,"POST","/v2/accounts:revokeToken",Na(n,e))}/**
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
 */class Sn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=tl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await Xv(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new Sn;return s&&(W(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(W(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(W(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Sn,this.toJSON())}_performRefresh(){return _t("not implemented")}}/**
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
 */function Pt(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ye{constructor(e){var{uid:t,auth:s,stsTokenManager:r}=e,i=ba(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ms(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Hv(this,e)}reload(){return Kv(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ye(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Qr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($e(this.auth.app))return Promise.reject(Ut(this.auth));const e=await this.getIdToken();return await Ms(this,Wv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,r,i,a,c,l,h,f;const m=(s=t.displayName)!==null&&s!==void 0?s:void 0,_=(r=t.email)!==null&&r!==void 0?r:void 0,I=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,w=(a=t.photoURL)!==null&&a!==void 0?a:void 0,P=(c=t.tenantId)!==null&&c!==void 0?c:void 0,R=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,U=(h=t.createdAt)!==null&&h!==void 0?h:void 0,L=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:V,emailVerified:F,isAnonymous:X,providerData:B,stsTokenManager:E}=t;W(V&&E,e,"internal-error");const g=Sn.fromJSON(this.name,E);W(typeof V=="string",e,"internal-error"),Pt(m,e.name),Pt(_,e.name),W(typeof F=="boolean",e,"internal-error"),W(typeof X=="boolean",e,"internal-error"),Pt(I,e.name),Pt(w,e.name),Pt(P,e.name),Pt(R,e.name),Pt(U,e.name),Pt(L,e.name);const y=new Ye({uid:V,auth:e,email:_,emailVerified:F,displayName:m,isAnonymous:X,photoURL:w,phoneNumber:I,tenantId:P,stsTokenManager:g,createdAt:U,lastLoginAt:L});return B&&Array.isArray(B)&&(y.providerData=B.map(T=>Object.assign({},T))),R&&(y._redirectEventId=R),y}static async _fromIdTokenResponse(e,t,s=!1){const r=new Sn;r.updateFromServerResponse(t);const i=new Ye({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Qr(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];W(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Cd(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!i?.length,c=new Sn;c.updateFromIdToken(s);const l=new Ye({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new xo(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(l,h),l}}/**
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
 */const nl=new Map;function yt(n){It(n instanceof Function,"Expected a class definition");let e=nl.get(n);return e?(It(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,nl.set(n,e),e)}/**
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
 */class Pd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Pd.type="NONE";const sl=Pd;/**
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
 */function Pr(n,e,t){return`firebase:${n}:${e}:${t}`}class bn{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Pr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Pr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Kr(this.auth,{idToken:e}).catch(()=>{});return t?Ye._fromGetAccountInfoResponse(this.auth,t,e):null}return Ye._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new bn(yt(sl),e,s);const r=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=r[0]||yt(sl);const a=Pr(s,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){let m;if(typeof f=="string"){const _=await Kr(e,{idToken:f}).catch(()=>{});if(!_)break;m=await Ye._fromGetAccountInfoResponse(e,_,f)}else m=Ye._fromJSON(e,f);h!==i&&(c=m),i=h;break}}catch{}const l=r.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new bn(i,e,s):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new bn(i,e,s))}}/**
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
 */function rl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Od(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vd(e))return"Blackberry";if(xd(e))return"Webos";if(Md(e))return"Safari";if((e.includes("chrome/")||kd(e))&&!e.includes("edge/"))return"Chrome";if(Dd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function Nd(n=Ne()){return/firefox\//i.test(n)}function Md(n=Ne()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kd(n=Ne()){return/crios\//i.test(n)}function Od(n=Ne()){return/iemobile/i.test(n)}function Dd(n=Ne()){return/android/i.test(n)}function Vd(n=Ne()){return/blackberry/i.test(n)}function xd(n=Ne()){return/webos/i.test(n)}function ka(n=Ne()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Jv(n=Ne()){var e;return ka(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zv(){return Kp()&&document.documentMode===10}function Ld(n=Ne()){return ka(n)||Dd(n)||xd(n)||Vd(n)||/windows phone/i.test(n)||Od(n)}/**
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
 */function Fd(n,e=[]){let t;switch(n){case"Browser":t=rl(Ne());break;case"Worker":t=`${rl(Ne())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Un}/${s}`}/**
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
 */class ew{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function tw(n,e={}){return Wn(n,"GET","/v2/passwordPolicy",Na(n,e))}/**
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
 */const nw=6;class sw{constructor(e){var t,s,r,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:nw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,r,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class rw{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new il(this),this.idTokenSubscription=new il(this),this.beforeStateQueue=new ew(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Id,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=yt(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await bn.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Kr(this,{idToken:e}),s=await Ye._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if($e(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&l?.user&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qr(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($e(this.app))return Promise.reject(Ut(this));const t=e?We(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $e(this.app)?Promise.reject(Ut(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $e(this.app)?Promise.reject(Ut(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tw(this),t=new sw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Vs("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Yv(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&yt(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await bn.create(this,[yt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,s,r);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if($e(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Vv(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Hn(n){return We(n)}class il{constructor(e){this.auth=e,this.observer=null,this.addObserver=ng(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Oa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iw(n){Oa=n}function ow(n){return Oa.loadJS(n)}function aw(){return Oa.gapiScript}function cw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function uw(n,e){const t=Ko(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(rn(i,e??{}))return r;lt(r,"already-initialized")}return t.initialize({options:e})}function lw(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(yt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function hw(n,e,t){const s=Hn(n);W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Ud(e),{host:a,port:c}=dw(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){W(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),W(rn(h,s.config.emulator)&&rn(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=h,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,Fn(a)?(Ul(`${i}//${a}${l}`),Bl("Auth",!0)):fw()}function Ud(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function dw(n){const e=Ud(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:ol(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:ol(a)}}}function ol(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function fw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Bd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _t("not implemented")}_getIdTokenResponse(e){return _t("not implemented")}_linkToIdToken(e,t){return _t("not implemented")}_getReauthenticationResolver(e){return _t("not implemented")}}/**
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
 */async function Rn(n,e){return jv(n,"POST","/v1/accounts:signInWithIdp",Na(n,e))}/**
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
 */const pw="http://localhost";class un extends Bd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):lt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=t,i=ba(t,["providerId","signInMethod"]);if(!s||!r)return null;const a=new un(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Rn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Rn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Rn(e,t)}buildRequest(){const e={requestUri:pw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=xs(t)}return e}}/**
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
 */class gi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qs extends gi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Nt extends qs{constructor(){super("facebook.com")}static credential(e){return un._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch{return null}}}Nt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nt.PROVIDER_ID="facebook.com";/**
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
 */class mt extends qs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return un._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return mt.credential(t,s)}catch{return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com";mt.PROVIDER_ID="google.com";/**
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
 */class Mt extends qs{constructor(){super("github.com")}static credential(e){return un._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.GITHUB_SIGN_IN_METHOD="github.com";Mt.PROVIDER_ID="github.com";/**
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
 */class kt extends qs{constructor(){super("twitter.com")}static credential(e,t){return un._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return kt.credential(t,s)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
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
 */class xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await Ye._fromIdTokenResponse(e,s,r),a=al(s);return new xn({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=al(s);return new xn({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function al(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Xr extends At{constructor(e,t,s,r){var i;super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Xr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new Xr(e,t,s,r)}}function $d(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xr._fromErrorAndOperation(n,i,e,s):i})}async function gw(n,e,t=!1){const s=await Ms(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return xn._forOperation(n,"link",s)}/**
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
 */async function mw(n,e,t=!1){const{auth:s}=n;if($e(s.app))return Promise.reject(Ut(s));const r="reauthenticate";try{const i=await Ms(n,$d(s,r,e,n),t);W(i.idToken,s,"internal-error");const a=Ma(i.idToken);W(a,s,"internal-error");const{sub:c}=a;return W(n.uid===c,s,"user-mismatch"),xn._forOperation(n,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&lt(s,"user-mismatch"),i}}/**
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
 */async function _w(n,e,t=!1){if($e(n.app))return Promise.reject(Ut(n));const s="signIn",r=await $d(n,s,e),i=await xn._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}function yw(n,e,t,s){return We(n).onIdTokenChanged(e,t,s)}function vw(n,e,t){return We(n).beforeAuthStateChanged(e,t)}function ww(n,e,t,s){return We(n).onAuthStateChanged(e,t,s)}function Ew(n){return We(n).signOut()}const Yr="__sak";/**
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
 */class jd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yr,"1"),this.storage.removeItem(Yr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Tw=1e3,Iw=10;class qd extends jd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ld(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);Zv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Iw):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Tw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qd.type="LOCAL";const Aw=qd;/**
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
 */class Wd extends jd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Wd.type="SESSION";const Hd=Wd;/**
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
 */function Sw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class mi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new mi(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await Sw(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mi.receivers=[];/**
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
 */function Da(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class bw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Da("",20);r.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(m){const _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function ot(){return window}function Rw(n){ot().location.href=n}/**
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
 */function zd(){return typeof ot().WorkerGlobalScope<"u"&&typeof ot().importScripts=="function"}async function Cw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pw(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Nw(){return zd()?self:null}/**
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
 */const Gd="firebaseLocalStorageDb",Mw=1,Jr="firebaseLocalStorage",Kd="fbase_key";class Ws{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function _i(n,e){return n.transaction([Jr],e?"readwrite":"readonly").objectStore(Jr)}function kw(){const n=indexedDB.deleteDatabase(Gd);return new Ws(n).toPromise()}function Lo(){const n=indexedDB.open(Gd,Mw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Jr,{keyPath:Kd})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Jr)?e(s):(s.close(),await kw(),e(await Lo()))})})}async function cl(n,e,t){const s=_i(n,!0).put({[Kd]:e,value:t});return new Ws(s).toPromise()}async function Ow(n,e){const t=_i(n,!1).get(e),s=await new Ws(t).toPromise();return s===void 0?null:s.value}function ul(n,e){const t=_i(n,!0).delete(e);return new Ws(t).toPromise()}const Dw=800,Vw=3;class Qd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Vw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mi._getInstance(Nw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Cw(),!this.activeServiceWorker)return;this.sender=new bw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lo();return await cl(e,Yr,"1"),await ul(e,Yr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>cl(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Ow(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ul(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=_i(r,!1).getAll();return new Ws(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qd.type="LOCAL";const xw=Qd;new js(3e4,6e4);/**
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
 */function Va(n,e){return e?yt(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class xa extends Bd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Rn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Lw(n){return _w(n.auth,new xa(n),n.bypassAuthState)}function Fw(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),mw(t,new xa(n),n.bypassAuthState)}async function Uw(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),gw(t,new xa(n),n.bypassAuthState)}/**
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
 */class Xd{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lw;case"linkViaPopup":case"linkViaRedirect":return Uw;case"reauthViaPopup":case"reauthViaRedirect":return Fw;default:lt(this.auth,"internal-error")}}resolve(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Bw=new js(2e3,1e4);async function $w(n,e,t){if($e(n.app))return Promise.reject(Je(n,"operation-not-supported-in-this-environment"));const s=Hn(n);Ad(n,e,gi);const r=Va(s,t);return new tn(s,"signInViaPopup",e,r).executeNotNull()}class tn extends Xd{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,tn.currentPopupAction&&tn.currentPopupAction.cancel(),tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){It(this.filter.length===1,"Popup operations only handle one event");const e=Da();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bw.get())};e()}}tn.currentPopupAction=null;/**
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
 */const jw="pendingRedirect",Nr=new Map;class qw extends Xd{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Nr.get(this.auth._key());if(!e){try{const s=await Ww(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Nr.set(this.auth._key(),e)}return this.bypassAuthState||Nr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ww(n,e){const t=Jd(e),s=Yd(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}async function Hw(n,e){return Yd(n)._set(Jd(e),"true")}function zw(n,e){Nr.set(n._key(),e)}function Yd(n){return yt(n._redirectPersistence)}function Jd(n){return Pr(jw,n.config.apiKey,n.name)}/**
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
 */function Gw(n,e,t){return Kw(n,e,t)}async function Kw(n,e,t){if($e(n.app))return Promise.reject(Ut(n));const s=Hn(n);Ad(n,e,gi),await s._initializationPromise;const r=Va(s,t);return await Hw(r,s),r._openRedirect(s,e,"signInViaRedirect")}async function Qw(n,e){return await Hn(n)._initializationPromise,Zd(n,e,!1)}async function Zd(n,e,t=!1){if($e(n.app))return Promise.reject(Ut(n));const s=Hn(n),r=Va(s,e),a=await new qw(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
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
 */const Xw=10*60*1e3;class Yw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!ef(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Je(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xw&&this.cachedEventUids.clear(),this.cachedEventUids.has(ll(e))}saveEventToCache(e){this.cachedEventUids.add(ll(e)),this.lastProcessedEventTime=Date.now()}}function ll(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ef({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Jw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ef(n);default:return!1}}/**
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
 */async function Zw(n,e={}){return Wn(n,"GET","/v1/projects",e)}/**
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
 */const eE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tE=/^https?/;async function nE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Zw(n);for(const t of e)try{if(sE(t))return}catch{}lt(n,"unauthorized-domain")}function sE(n){const e=Vo(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!tE.test(t))return!1;if(eE.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const rE=new js(3e4,6e4);function hl(){const n=ot().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function iE(n){return new Promise((e,t)=>{var s,r,i;function a(){hl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hl(),t(Je(n,"network-request-failed"))},timeout:rE.get()})}if(!((r=(s=ot().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=ot().gapi)===null||i===void 0)&&i.load)a();else{const c=cw("iframefcb");return ot()[c]=()=>{gapi.load?a():t(Je(n,"network-request-failed"))},ow(`${aw()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Mr=null,e})}let Mr=null;function oE(n){return Mr=Mr||iE(n),Mr}/**
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
 */const aE=new js(5e3,15e3),cE="__/auth/iframe",uE="emulator/auth/iframe",lE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dE(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Pa(e,uE):`https://${n.config.authDomain}/${cE}`,s={apiKey:e.apiKey,appName:n.name,v:Un},r=hE.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${xs(s).slice(1)}`}async function fE(n){const e=await oE(n),t=ot().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:dE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lE,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=Je(n,"network-request-failed"),c=ot().setTimeout(()=>{i(a)},aE.get());function l(){ot().clearTimeout(c),r(s)}s.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const pE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gE=500,mE=600,_E="_blank",yE="http://localhost";class dl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vE(n,e,t,s=gE,r=mE){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l=Object.assign(Object.assign({},pE),{width:s.toString(),height:r.toString(),top:i,left:a}),h=Ne().toLowerCase();t&&(c=kd(h)?_E:t),Nd(h)&&(e=e||yE,l.scrollbars="yes");const f=Object.entries(l).reduce((_,[I,w])=>`${_}${I}=${w},`,"");if(Jv(h)&&c!=="_self")return wE(e||"",c),new dl(null);const m=window.open(e||"",c,f);W(m,n,"popup-blocked");try{m.focus()}catch{}return new dl(m)}function wE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const EE="__/auth/handler",TE="emulator/auth/handler",IE=encodeURIComponent("fac");async function fl(n,e,t,s,r,i){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Un,eventId:r};if(e instanceof gi){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",tg(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof qs){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${IE}=${encodeURIComponent(l)}`:"";return`${AE(n)}?${xs(c).slice(1)}${h}`}function AE({config:n}){return n.emulator?Pa(n,TE):`https://${n.authDomain}/${EE}`}/**
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
 */const no="webStorageSupport";class SE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hd,this._completeRedirectFn=Zd,this._overrideRedirectResult=zw}async _openPopup(e,t,s,r){var i;It((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await fl(e,t,s,Vo(),r);return vE(e,a,Da())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await fl(e,t,s,Vo(),r);return Rw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(It(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await fE(e),s=new Yw(e);return t.register("authEvent",r=>(W(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(no,{type:no},r=>{var i;const a=(i=r?.[0])===null||i===void 0?void 0:i[no];a!==void 0&&t(!!a),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=nE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ld()||Md()||ka()}}const bE=SE;var pl="@firebase/auth",gl="1.10.8";/**
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
 */class RE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function CE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PE(n){Nn(new on("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fd(n)},h=new rw(s,r,i,l);return lw(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Nn(new on("auth-internal",e=>{const t=Hn(e.getProvider("auth").getImmediate());return(s=>new RE(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(pl,gl,CE(n)),xt(pl,gl,"esm2017")}/**
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
 */const NE=5*60,ME=Fl("authIdTokenMaxAge")||NE;let ml=null;const kE=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>ME)return;const r=t?.token;ml!==r&&(ml=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function OE(n=Wl()){const e=Ko(n,"auth");if(e.isInitialized())return e.getImmediate();const t=uw(n,{popupRedirectResolver:bE,persistence:[xw,Aw,Hd]}),s=Fl("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=kE(i.toString());vw(t,a,()=>a(t.currentUser)),yw(t,c=>a(c))}}const r=xl("auth");return r&&hw(t,`http://${r}`),t}function DE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}iw({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=Je("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",DE().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PE("Browser");const VE={apiKey:"AIzaSyCmmMBXWcWmljEO9lWGK7VNqrvNI3Zu1bI",authDomain:"chess-openings-7a1b2.firebaseapp.com",projectId:"chess-openings-7a1b2",storageBucket:"chess-openings-7a1b2.firebasestorage.app",messagingSenderId:"800214788543",appId:"1:800214788543:web:85b95d62fd65068180d90a"},tf=ql(VE),nf=gv(tf),ln=OE(tf),sf=new mt,xe=new gt(null),La=new gt(!1),hI=new Promise(n=>{La.link(e=>{e&&n()})}),dI=new Promise(n=>{xe.link(e=>{e&&n(e)})});ww(ln,n=>{n?xe.value=n:xe.value=null,La.value=!0});(async()=>{const n=await xE();n&&(xe.value=n,La.value=!0)})();async function fI(){console.log(`current user ${ln.currentUser}`);const n=await $w(ln,sf);return console.log("User signed in:",n.user),console.log("User ID (uid):",n.user.uid),n.user}async function pI(){console.log(`current user ${ln.currentUser}`),await Gw(ln,sf)}async function xE(){const n=await Qw(ln);return n?(console.log("User signed in:",n.user),console.log("User ID (uid):",n.user.uid),n.user):(console.log("No user signed in."),null)}async function gI(){try{await Ew(ln),console.log("User logged out")}catch(n){console.error("Error logging out:",n)}}async function rf(n,e){await Mv(hd(nf,"users",n),{state:e}),console.log("User state saved successfully!")}async function mI(n){const e=await Pv(hd(nf,"users",n));return e.exists()?(console.log("User state:",e.data().state),e.data().state):(console.log("No user state found."),null)}window.manualSave=async n=>{await rf(xe.value.uid,n)};const Ve=(n,e)=>{const t=new Nl.Position(n);if(!t.play(e))throw new Error(`Invalid move: ${e} at position ${n}`);return t.fen()},_I=Object.freeze(Object.defineProperty({__proto__:null,getFenAfterMove:Ve},Symbol.toStringTag,{value:"Module"})),Ue=n=>n.split(" ")[1]==="w",yI=Object.freeze(Object.defineProperty({__proto__:null,isFenWhiteToMove:Ue},Symbol.toStringTag,{value:"Module"})),of=n=>`${n.split(" ").slice(0,-2).join(" ")} 0 1`,vI=Object.freeze(Object.defineProperty({__proto__:null,sanitizeFen:of},Symbol.toStringTag,{value:"Module"})),af=n=>of(n.fen()),wI=Object.freeze(Object.defineProperty({__proto__:null,getFen:af},Symbol.toStringTag,{value:"Module"})),oe=af(new ti),EI=Object.freeze(Object.defineProperty({__proto__:null,initialFen:oe},Symbol.toStringTag,{value:"Module"})),yi=n=>{const e=new Nl.Position(n);return e.moves().map(t=>e.notation(t))},TI=Object.freeze(Object.defineProperty({__proto__:null,getFenMoves:yi},Symbol.toStringTag,{value:"Module"})),so=n=>n.state==="openingExplore",LE=n=>n.state==="endgameExplore",FE=n=>n.state==="openingReviewUserMove",UE=n=>n.state==="openingReviewAutoMovePending",BE=n=>n.state==="endgameReviewUserMove",$E=n=>n.state==="endgameReviewAutoMovePending",ze=n=>"isOpening"in n&&n.isOpening,Ln=n=>"isEndgame"in n&&n.isEndgame,Be=n=>"isReviewing"in n&&n.isReviewing,Fo=n=>"isPendingAutoMove"in n&&n.isPendingAutoMove,cf=n=>ze(n)&&Be(n),II=n=>Be(n)&&!!n.previousChessNode&&!!n.previousFen,ks=n=>({repository:n.repository,isWhite:n.isWhite,fen:n.fen,stack:n.stack,stackPosition:n.stackPosition,chessNode:n.chessNode,failedMoves:n.failedMoves}),_l=n=>({isEndgame:n.isEndgame,baseFen:n.baseFen}),_r=n=>({isReviewing:n.isReviewing,previousChessNode:n.previousChessNode,previousHistory:n.previousHistory,previousBaseFen:n.previousBaseFen,previousFen:n.previousFen,previousGrade:n.previousGrade,previousWasCramming:n.previousWasCramming,previousFailedReview:n.previousFailedReview,nextFailedReview:n.nextFailedReview,nextTimestampStart:n.nextTimestampStart,prefix:n.prefix,statistics:n.statistics}),jE=n=>({isReviewing:n.isReviewing,previousChessNode:n.previousChessNode,previousHistory:n.previousHistory,previousBaseFen:n.previousBaseFen,previousFen:n.previousFen,previousGrade:n.previousGrade,previousWasCramming:n.previousWasCramming,previousFailedReview:n.previousFailedReview,nextFailedReview:n.nextFailedReview,nextTimestampStart:n.nextTimestampStart,prefix:n.prefix}),yl=n=>({isOpening:n.isOpening,isReviewing:n.isReviewing,initialHistory:n.initialHistory,targetHistory:n.targetHistory}),Uo=n=>Ln(n)?n.baseFen:oe,ro=n=>n.stack.slice(0,n.stackPosition).map(e=>e.move),Bo=(n,e)=>{const t=Ue(e);return Ln(n)&&(e=at(e)),n.repository.getChessNode(e,t===n.isWhite)},uf=n=>n.stackPosition===0?null:n.stack[n.stackPosition-1],yr=n=>{const e=uf(n),t=e?e.fen:Ln(n)?n.baseFen:oe;return Bo(n,t)},AI=n=>{const e=uf(n);return e?e.fenBeforeMove:null},qE=n=>n.stack.slice(0,n.stackPosition).map(e=>e.move),io=(n,e,t)=>{const s=Ve(n.fen,e);let r=null;if(n.chessNode){const a=n.chessNode.isOpening?e:lo(n.fen,e);n.chessNode.moveMap[a]&&(r=n.chessNode.moveMap[a])}r||(r=n.repository.getChessNode(t?s:at(s),Ue(s)===n.isWhite)??null);const i=!n.stack[n.stackPosition]||n.stack[n.stackPosition].move!==e;return{...ks(n),fen:s,stack:i?[...n.stack.slice(0,n.stackPosition),{fen:s,fenBeforeMove:n.fen,move:e}]:n.stack,stackPosition:n.stackPosition+1,chessNode:r,failedMoves:[]}},vn=(n,e)=>{let t;if(e===0)t=Uo(n);else{const r=n.stack[e-1].fenBeforeMove,i=n.stack[e-1].move;t=Ve(r,i)}const s=n.repository.getChessNode(t,Ue(t)===n.isWhite)??null;return{...ks(n),fen:t,stackPosition:e,chessNode:s,failedMoves:[]}},WE=n=>{const e=!n.isWhite,t=n.repository.getChessNode(n.fen,Ue(n.fen)===e)??null;return{...ks(n),isWhite:e,chessNode:t,failedMoves:[]}},vl=(n,e)=>{const t=n.getInitialChessNode(e)??null;return{repository:n,isWhite:e,fen:oe,stack:[],stackPosition:0,chessNode:t,failedMoves:[]}},wl=(n,e)=>({repository:n,isWhite:!0,fen:e,stack:[],stackPosition:0,chessNode:n.getChessNode(at(e),!0)??null,failedMoves:[]}),El=(n,e)=>({isReviewing:!0,previousChessNode:null,previousHistory:null,previousBaseFen:null,previousFen:null,previousGrade:null,previousWasCramming:!1,previousFailedReview:!1,nextFailedReview:!1,nextTimestampStart:Date.now(),prefix:n,statistics:e}),vr=()=>({isOpening:!0}),oo=n=>({isEndgame:!0,baseFen:n}),HE=n=>{if(!n.repository)throw new Error("State is missing repository");if(typeof n.isWhite!="boolean")throw new Error("State is missing isWhite");if(typeof n.fen!="string")throw new Error("State is missing fen");const e=yi(n.fen);if(!Array.isArray(n.stack))throw new Error("State stack is not an array");if(n.chessNode){if(n.chessNode.isOpening){if(n.chessNode.fen!==n.fen)throw new Error(`State chessNode fen ${n.chessNode.fen} does not match state fen ${n.fen}`)}else if(n.chessNode.fen!==at(n.fen))throw new Error(`State chessNode fen ${n.chessNode.fen} does not match canonical fen ${at(n.fen)} for state fen ${n.fen}`);const t=Ue(n.fen),s=n.isWhite,r=n.chessNode.isUserMove,i=t===s;if(r!==i)throw new Error(`State chessNode isUserMove ${r} does not match expected ${i} based on fen ${n.fen} and isWhite ${n.isWhite}`)}if(n.stack.forEach(t=>{if(typeof t.fen!="string")throw new Error("State stack entry is missing fen");if(typeof t.fenBeforeMove!="string")throw new Error("State stack entry is missing fenBeforeMove");if(typeof t.move!="string")throw new Error("State stack entry is missing move");if(Ve(t.fenBeforeMove,t.move)!==t.fen)throw new Error(`State stack entry move does not match fens: ${t.move} from ${t.fenBeforeMove} should yield ${Ve(t.fenBeforeMove,t.move)}, but got ${t.fen}`)}),typeof n.stackPosition!="number")throw new Error("State is missing stackPosition");if(n.stackPosition<0)throw new Error("State stackPosition is negative");if(n.stackPosition>n.stack.length)throw new Error("State stackPosition is greater than stack length");if(!Array.isArray(n.failedMoves))throw new Error("State failedMoves is not an array");n.failedMoves.forEach(t=>{if(!e.includes(t))throw new Error(`State failedMoves entry ${t} is not a legal move for fen ${n.fen}`)})},zE=n=>{if(typeof n.baseFen!="string")throw new Error("Endgame state is missing baseFen");if(n.baseFen===oe)throw new Error("Endgame state baseFen cannot be the initial fen")},GE=n=>{if(typeof n.pendingAutoMove!="string")throw new Error("Pending auto move state is missing pendingAutoMove");if(!yi(n.fen).includes(n.pendingAutoMove))throw new Error(`Pending auto move ${n.pendingAutoMove} is not a legal move for fen ${n.fen}`)},KE=n=>{if(n.targetHistory.length<=n.initialHistory.length)throw new Error("Reviewing opening state targetHistory must be longer than initialHistory");let e=n.repository.getInitialChessNode(n.isWhite);if(!e)throw new Error(`Reviewing opening state could not find initial chess node for isWhite ${n.isWhite}`);for(let t=0;t<n.targetHistory.length;t++){const s=n.targetHistory[t];if(t<n.initialHistory.length){const r=n.initialHistory[t];if(s!==r)throw new Error(`Reviewing opening state targetHistory move ${s} does not match initialHistory move ${r} at index ${t}`)}if(e=e.moveMap[s],!e)throw new Error(`Reviewing opening state targetHistory move ${s} at index ${t} is not a legal move from the previous moves`)}},QE=n=>{if(!n.chessNode)throw new Error("Reviewing state is missing chessNode");if(n.previousChessNode===void 0)throw new Error("Reviewing state is missing previousChessNode");if(n.previousFen===void 0)throw new Error("Reviewing state is missing previousFen");if(n.previousHistory===void 0)throw new Error("Reviewing state is missing previousHistory");if(n.previousBaseFen===void 0)throw new Error("Reviewing state is missing previousBaseFen");if(n.previousGrade!==null&&typeof n.previousGrade!="number")throw new Error("Reviewing state previousGrade must be a number or null");if(typeof n.previousWasCramming!="boolean")throw new Error("Reviewing state is missing previousWasCramming");if(typeof n.previousFailedReview!="boolean")throw new Error("Reviewing state is missing previousFailedReview");if(typeof n.nextFailedReview!="boolean")throw new Error("Reviewing state is missing nextFailedReview");if(typeof n.nextTimestampStart!="number")throw new Error("Reviewing state is missing nextTimestampStart");if(n.prefix!==null&&typeof n.prefix!="object")throw new Error("Reviewing state prefix must be an object or null");if(typeof n.statistics!="object")throw new Error("Reviewing state is missing statistics")},XE=n=>{HE(n),Ln(n)&&zE(n),Fo(n)&&GE(n),cf(n)&&KE(n),Be(n)&&QE(n)},YE=n=>50+50*(2/(1+Math.exp(-.00368208*n))-1),SI=n=>{const e=.00368208,t=n/100;return Math.log(t/(1-t))/e},bI=(n,e)=>{const t=e?n.s:-n.s;return n.m==="mate"?t>=0?100:0:YE(t)},JE=(n,e)=>n.m==="mate"&&e.m==="mate"?0:n.m==="mate"?-1:e.m==="mate"?1:n.s===e.s?0:n.s>e.s?1:-1,Tl=(n,e)=>JE(n,e)===-1,RI=(n,e)=>{const t=e?n.s:-n.s;return n.m==="mate"?t===0?"#":`#${t>0?Math.ceil(t/2):Math.floor(t/2)}`:t===0?"0":`${t>0?"+":""}${(t/100).toFixed(2)}`};var z=(n=>(n[n.New=0]="New",n[n.Learning=1]="Learning",n[n.Review=2]="Review",n[n.Relearning=3]="Relearning",n))(z||{}),D=(n=>(n[n.Manual=0]="Manual",n[n.Again=1]="Again",n[n.Hard=2]="Hard",n[n.Good=3]="Good",n[n.Easy=4]="Easy",n))(D||{});class G{static card(e){return{...e,state:G.state(e.state),due:G.time(e.due),last_review:e.last_review?G.time(e.last_review):void 0}}static rating(e){if(typeof e=="string"){const t=e.charAt(0).toUpperCase(),s=e.slice(1).toLowerCase(),r=D[`${t}${s}`];if(r===void 0)throw new Error(`Invalid rating:[${e}]`);return r}else if(typeof e=="number")return e;throw new Error(`Invalid rating:[${e}]`)}static state(e){if(typeof e=="string"){const t=e.charAt(0).toUpperCase(),s=e.slice(1).toLowerCase(),r=z[`${t}${s}`];if(r===void 0)throw new Error(`Invalid state:[${e}]`);return r}else if(typeof e=="number")return e;throw new Error(`Invalid state:[${e}]`)}static time(e){const t=new Date(e);if(typeof e=="object"&&e!==null&&!Number.isNaN(Date.parse(e)||+t))return t;if(typeof e=="string"){const s=Date.parse(e);if(Number.isNaN(s))throw new Error(`Invalid date:[${e}]`);return new Date(s)}else if(typeof e=="number")return new Date(e);throw new Error(`Invalid date:[${e}]`)}static review_log(e){return{...e,due:G.time(e.due),rating:G.rating(e.rating),state:G.state(e.state),review:G.time(e.review)}}}Date.prototype.scheduler=function(n,e){return Ge(this,n,e)};Date.prototype.diff=function(n,e){return Cn(this,n,e)};Date.prototype.format=function(){return ZE(this)};Date.prototype.dueFormat=function(n,e,t){return eT(this,n,e,t)};function Ge(n,e,t){return new Date(t?G.time(n).getTime()+e*24*60*60*1e3:G.time(n).getTime()+e*60*1e3)}function Cn(n,e,t){if(!n||!e)throw new Error("Invalid date");const s=G.time(n).getTime()-G.time(e).getTime();let r=0;switch(t){case"days":r=Math.floor(s/(24*60*60*1e3));break;case"minutes":r=Math.floor(s/(60*1e3));break}return r}function ZE(n){const e=G.time(n),t=e.getFullYear(),s=e.getMonth()+1,r=e.getDate(),i=e.getHours(),a=e.getMinutes(),c=e.getSeconds();return`${t}-${us(s)}-${us(r)} ${us(i)}:${us(a)}:${us(c)}`}function us(n){return n<10?`0${n}`:`${n}`}const ao=[60,60,24,31,12],co=["second","min","hour","day","month","year"];function eT(n,e,t,s=co){n=G.time(n),e=G.time(e),s.length!==co.length&&(s=co);let r=n.getTime()-e.getTime(),i=0;for(r/=1e3,i=0;i<ao.length&&!(r<ao[i]);i++)r/=ao[i];return`${Math.floor(r)}${t?s[i]:""}`}const tT=Object.freeze([D.Again,D.Hard,D.Good,D.Easy]),nT=[{start:2.5,end:7,factor:.15},{start:7,end:20,factor:.1},{start:20,end:1/0,factor:.05}];function sT(n,e,t){let s=1;for(const a of nT)s+=a.factor*Math.max(Math.min(n,a.end)-a.start,0);n=Math.min(n,t);let r=Math.max(2,Math.round(n-s));const i=Math.min(Math.round(n+s),t);return n>e&&(r=Math.max(r,e+1)),r=Math.min(r,i),{min_ivl:r,max_ivl:i}}function Oe(n,e,t){return Math.min(Math.max(n,e),t)}function rT(n,e){const t=Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()),s=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate());return Math.floor((s-t)/864e5)}const iT=n=>{const e=n.slice(-1),t=parseInt(n.slice(0,-1),10);if(Number.isNaN(t)||!Number.isFinite(t)||t<0)throw new Error(`Invalid step value: ${n}`);switch(e){case"m":return t;case"h":return t*60;case"d":return t*1440;default:throw new Error(`Invalid step unit: ${n}, expected m/h/d`)}},oT=(n,e,t)=>{const s=e===z.Relearning||e===z.Review?n.relearning_steps:n.learning_steps,r=s.length;if(r===0||t>=r)return{};const i=s[0],a=iT,c=()=>a(i),l=()=>{if(r===1)return Math.round(a(i)*1.5);const I=s[1];return Math.round((a(i)+a(I))/2)},h=I=>I<0||I>=r?null:s[I],f=I=>a(I),m={},_=h(Math.max(0,t));if(e===z.Review)return m[D.Again]={scheduled_minutes:a(_),next_step:0},m;{m[D.Again]={scheduled_minutes:c(),next_step:0},m[D.Hard]={scheduled_minutes:l(),next_step:t};const I=h(t+1);if(I){const w=f(I);w&&(m[D.Good]={scheduled_minutes:Math.round(w),next_step:t+1})}}return m};function aT(){const n=this.review_time.getTime(),e=this.current.reps,t=this.current.difficulty*this.current.stability;return`${n}_${e}_${t}`}var vi=(n=>(n.SCHEDULER="Scheduler",n.LEARNING_STEPS="LearningSteps",n.SEED="Seed",n))(vi||{});class lf{last;current;review_time;next=new Map;algorithm;strategies;elapsed_days=0;constructor(e,t,s,r){this.algorithm=s,this.last=G.card(e),this.current=G.card(e),this.review_time=G.time(t),this.strategies=r,this.init()}checkGrade(e){if(!Number.isFinite(e)||e<0||e>4)throw new Error(`Invalid grade "${e}",expected 1-4`)}init(){const{state:e,last_review:t}=this.current;let s=0;e!==z.New&&t&&(s=rT(t,this.review_time)),this.current.last_review=this.review_time,this.elapsed_days=s,this.current.elapsed_days=s,this.current.reps+=1;let r=aT;if(this.strategies){const i=this.strategies.get(vi.SEED);i&&(r=i)}this.algorithm.seed=r.call(this)}preview(){return{[D.Again]:this.review(D.Again),[D.Hard]:this.review(D.Hard),[D.Good]:this.review(D.Good),[D.Easy]:this.review(D.Easy),[Symbol.iterator]:this.previewIterator.bind(this)}}*previewIterator(){for(const e of tT)yield this.review(e)}review(e){const{state:t}=this.last;let s;switch(this.checkGrade(e),t){case z.New:s=this.newState(e);break;case z.Learning:case z.Relearning:s=this.learningState(e);break;case z.Review:s=this.reviewState(e);break}return s}buildLog(e){const{last_review:t,due:s,elapsed_days:r}=this.last;return{rating:e,state:this.current.state,due:t||s,stability:this.current.stability,difficulty:this.current.difficulty,elapsed_days:this.elapsed_days,last_elapsed_days:r,scheduled_days:this.current.scheduled_days,learning_steps:this.current.learning_steps,review:this.review_time}}}class cT{c;s0;s1;s2;constructor(e){const t=uT();this.c=1,this.s0=t(" "),this.s1=t(" "),this.s2=t(" "),e==null&&(e=Date.now()),this.s0-=t(e),this.s0<0&&(this.s0+=1),this.s1-=t(e),this.s1<0&&(this.s1+=1),this.s2-=t(e),this.s2<0&&(this.s2+=1)}next(){const e=2091639*this.s0+this.c*23283064365386963e-26;return this.s0=this.s1,this.s1=this.s2,this.c=e|0,this.s2=e-this.c,this.s2}set state(e){this.c=e.c,this.s0=e.s0,this.s1=e.s1,this.s2=e.s2}get state(){return{c:this.c,s0:this.s0,s1:this.s1,s2:this.s2}}}function uT(){let n=4022871197;return function(t){t=String(t);for(let s=0;s<t.length;s++){n+=t.charCodeAt(s);let r=.02519603282416938*n;n=r>>>0,r-=n,r*=n,n=r>>>0,r-=n,n+=r*4294967296}return(n>>>0)*23283064365386963e-26}}function lT(n){const e=new cT(n),t=()=>e.next();return t.int32=()=>e.next()*4294967296|0,t.double=()=>t()+(t()*2097152|0)*11102230246251565e-32,t.state=()=>e.state,t.importState=s=>(e.state=s,t),t}const hT=.9,dT=36500,fT=!1,wi=!0,pT=Object.freeze(["1m","10m"]),gT=Object.freeze(["10m"]),Ke=.001,wr=100,Il=.5,mT=.1542,Al=Object.freeze([.212,1.2931,2.3065,8.2956,6.4133,.8334,3.0194,.001,1.8722,.1666,.796,1.4835,.0614,.2629,1.6483,.6014,1.8729,.5425,.0912,.0658,mT]),_T=2,yT=(n,e=wi)=>[[Ke,wr],[Ke,wr],[Ke,wr],[Ke,wr],[1,10],[.001,4],[.001,4],[.001,.75],[0,4.5],[0,.8],[.001,3.5],[.001,5],[.001,.25],[.001,.9],[0,4],[0,1],[1,6],[0,n],[0,n],[e?.01:0,.8],[.1,.8]],uo=(n,e,t=wi)=>{let s=_T;if(Math.max(0,e)>1){const i=-(Math.log(n[11])+Math.log(Math.pow(2,n[13])-1)+n[14]*.3)/e;s=Oe(+i.toFixed(8),.01,2)}return yT(s,t).slice(0,n.length).map(([i,a],c)=>Oe(n[c]||0,i,a))},Fa=(n,e=0,t=wi)=>{if(n===void 0)return[...Al];switch(n.length){case 21:return uo(Array.from(n),e,t);case 19:return console.debug("[FSRS-6]auto fill w from 19 to 21 length"),uo(Array.from(n),e,t).concat([0,Il]);case 17:{const s=uo(Array.from(n),e,t);return s[4]=+(s[5]*2+s[4]).toFixed(8),s[5]=+(Math.log(s[5]*3+1)/3).toFixed(8),s[6]=+(s[6]+.5).toFixed(8),console.debug("[FSRS-6]auto fill w from 17 to 21 length"),s.concat([0,0,0,Il])}default:return console.warn("[FSRS]Invalid parameters length, using default parameters"),[...Al]}},$o=n=>{const e=Array.isArray(n?.learning_steps)?n.learning_steps:pT,t=Array.isArray(n?.relearning_steps)?n.relearning_steps:gT,s=n?.enable_short_term??wi,r=Fa(n?.w,t.length,s);return{request_retention:n?.request_retention||hT,maximum_interval:n?.maximum_interval||dT,w:r,enable_fuzz:n?.enable_fuzz??fT,enable_short_term:s,learning_steps:e,relearning_steps:t}};function Zr(n,e){return{due:n?G.time(n):new Date,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:0,lapses:0,learning_steps:0,state:z.New,last_review:void 0}}const Ua=n=>{const e=typeof n=="number"?-n:-n[20],t=Math.exp(Math.pow(e,-1)*Math.log(.9))-1;return{decay:e,factor:+t.toFixed(8)}};function jo(n,e,t){const{decay:s,factor:r}=Ua(n);return+Math.pow(1+r*e/t,s).toFixed(8)}class vT{param;intervalModifier;_seed;constructor(e){this.param=new Proxy($o(e),this.params_handler_proxy()),this.intervalModifier=this.calculate_interval_modifier(this.param.request_retention),this.forgetting_curve=jo.bind(this,this.param.w)}get interval_modifier(){return this.intervalModifier}set seed(e){this._seed=e}calculate_interval_modifier(e){if(e<=0||e>1)throw new Error("Requested retention rate should be in the range (0,1]");const{decay:t,factor:s}=Ua(this.param.w);return+((Math.pow(e,1/t)-1)/s).toFixed(8)}get parameters(){return this.param}set parameters(e){this.update_parameters(e)}params_handler_proxy(){const e=this;return{set:function(t,s,r){return s==="request_retention"&&Number.isFinite(r)?e.intervalModifier=e.calculate_interval_modifier(Number(r)):s==="w"&&(r=Fa(r,t.relearning_steps.length,t.enable_short_term),e.forgetting_curve=jo.bind(this,r),e.intervalModifier=e.calculate_interval_modifier(Number(t.request_retention))),Reflect.set(t,s,r),!0}}}update_parameters(e){const t=$o(e);for(const s in t){const r=s;this.param[r]=t[r]}}init_stability(e){return Math.max(this.param.w[e-1],.1)}init_difficulty(e){return+(this.param.w[4]-Math.exp((e-1)*this.param.w[5])+1).toFixed(8)}apply_fuzz(e,t){if(!this.param.enable_fuzz||e<2.5)return Math.round(e);const r=lT(this._seed)(),{min_ivl:i,max_ivl:a}=sT(e,t,this.param.maximum_interval);return Math.floor(r*(a-i+1)+i)}next_interval(e,t){const s=Math.min(Math.max(1,Math.round(e*this.intervalModifier)),this.param.maximum_interval);return this.apply_fuzz(s,t)}linear_damping(e,t){return+(e*(10-t)/9).toFixed(8)}next_difficulty(e,t){const s=-this.param.w[6]*(t-3),r=e+this.linear_damping(s,e);return Oe(this.mean_reversion(this.init_difficulty(D.Easy),r),1,10)}mean_reversion(e,t){return+(this.param.w[7]*e+(1-this.param.w[7])*t).toFixed(8)}next_recall_stability(e,t,s,r){const i=D.Hard===r?this.param.w[15]:1,a=D.Easy===r?this.param.w[16]:1;return+Oe(t*(1+Math.exp(this.param.w[8])*(11-e)*Math.pow(t,-this.param.w[9])*(Math.exp((1-s)*this.param.w[10])-1)*i*a),Ke,36500).toFixed(8)}next_forget_stability(e,t,s){return+Oe(this.param.w[11]*Math.pow(e,-this.param.w[12])*(Math.pow(t+1,this.param.w[13])-1)*Math.exp((1-s)*this.param.w[14]),Ke,36500).toFixed(8)}next_short_term_stability(e,t){const s=Math.pow(e,-this.param.w[19])*Math.exp(this.param.w[17]*(t-3+this.param.w[18])),r=t>=3?Math.max(s,1):s;return+Oe(e*r,Ke,36500).toFixed(8)}forgetting_curve;next_state(e,t,s){const{difficulty:r,stability:i}=e??{difficulty:0,stability:0};if(t<0)throw new Error(`Invalid delta_t "${t}"`);if(s<0||s>4)throw new Error(`Invalid grade "${s}"`);if(r===0&&i===0)return{difficulty:Oe(this.init_difficulty(s),1,10),stability:this.init_stability(s)};if(s===0)return{difficulty:r,stability:i};if(r<1||i<Ke)throw new Error(`Invalid memory state { difficulty: ${r}, stability: ${i} }`);const a=this.forgetting_curve(t,i),c=this.next_recall_stability(r,i,a,s),l=this.next_forget_stability(r,i,a),h=this.next_short_term_stability(i,s);let f=c;if(s===1){let[_,I]=[0,0];this.param.enable_short_term&&(_=this.param.w[17],I=this.param.w[18]);const w=i/Math.exp(_*I);f=Oe(+w.toFixed(8),Ke,l)}return t===0&&this.param.enable_short_term&&(f=h),{difficulty:this.next_difficulty(r,s),stability:f}}}class Sl extends lf{learningStepsStrategy;constructor(e,t,s,r){super(e,t,s,r);let i=oT;if(this.strategies){const a=this.strategies.get(vi.LEARNING_STEPS);a&&(i=a)}this.learningStepsStrategy=i}getLearningInfo(e,t){const s=this.algorithm.parameters;e.learning_steps=e.learning_steps||0;const r=this.learningStepsStrategy(s,e.state,(this.current.state===z.Learning&&t!==D.Again&&t!==D.Hard,e.learning_steps)),i=Math.max(0,r[t]?.scheduled_minutes??0),a=Math.max(0,r[t]?.next_step??0);return{scheduled_minutes:i,next_steps:a}}applyLearningSteps(e,t,s){const{scheduled_minutes:r,next_steps:i}=this.getLearningInfo(this.current,t);if(r>0&&r<1440)e.learning_steps=i,e.scheduled_days=0,e.state=s,e.due=Ge(this.review_time,Math.round(r),!1);else if(e.state=z.Review,r>=1440)e.learning_steps=i,e.due=Ge(this.review_time,Math.round(r),!1),e.scheduled_days=Math.floor(r/1440);else{e.learning_steps=0;const a=this.algorithm.next_interval(e.stability,this.elapsed_days);e.scheduled_days=a,e.due=Ge(this.review_time,a,!0)}}newState(e){const t=this.next.get(e);if(t)return t;const s=G.card(this.current);s.difficulty=Oe(this.algorithm.init_difficulty(e),1,10),s.stability=this.algorithm.init_stability(e),this.applyLearningSteps(s,e,z.Learning);const r={card:s,log:this.buildLog(e)};return this.next.set(e,r),r}learningState(e){const t=this.next.get(e);if(t)return t;const{state:s,difficulty:r,stability:i}=this.last,a=G.card(this.current);a.difficulty=this.algorithm.next_difficulty(r,e),a.stability=this.algorithm.next_short_term_stability(i,e),this.applyLearningSteps(a,e,s);const c={card:a,log:this.buildLog(e)};return this.next.set(e,c),c}reviewState(e){const t=this.next.get(e);if(t)return t;const s=this.elapsed_days,{difficulty:r,stability:i}=this.last,a=this.algorithm.forgetting_curve(s,i),c=G.card(this.current),l=G.card(this.current),h=G.card(this.current),f=G.card(this.current);this.next_ds(c,l,h,f,r,i,a),this.next_interval(l,h,f,s),this.next_state(l,h,f),this.applyLearningSteps(c,D.Again,z.Relearning),c.lapses+=1;const m={card:c,log:this.buildLog(D.Again)},_={card:l,log:super.buildLog(D.Hard)},I={card:h,log:super.buildLog(D.Good)},w={card:f,log:super.buildLog(D.Easy)};return this.next.set(D.Again,m),this.next.set(D.Hard,_),this.next.set(D.Good,I),this.next.set(D.Easy,w),this.next.get(e)}next_ds(e,t,s,r,i,a,c){e.difficulty=this.algorithm.next_difficulty(i,D.Again);const l=a/Math.exp(this.algorithm.parameters.w[17]*this.algorithm.parameters.w[18]),h=this.algorithm.next_forget_stability(i,a,c);e.stability=Oe(+l.toFixed(8),Ke,h),t.difficulty=this.algorithm.next_difficulty(i,D.Hard),t.stability=this.algorithm.next_recall_stability(i,a,c,D.Hard),s.difficulty=this.algorithm.next_difficulty(i,D.Good),s.stability=this.algorithm.next_recall_stability(i,a,c,D.Good),r.difficulty=this.algorithm.next_difficulty(i,D.Easy),r.stability=this.algorithm.next_recall_stability(i,a,c,D.Easy)}next_interval(e,t,s,r){let i,a;i=this.algorithm.next_interval(e.stability,r),a=this.algorithm.next_interval(t.stability,r),i=Math.min(i,a),a=Math.max(a,i+1);const c=Math.max(this.algorithm.next_interval(s.stability,r),a+1);e.scheduled_days=i,e.due=Ge(this.review_time,i,!0),t.scheduled_days=a,t.due=Ge(this.review_time,a,!0),s.scheduled_days=c,s.due=Ge(this.review_time,c,!0)}next_state(e,t,s){e.state=z.Review,e.learning_steps=0,t.state=z.Review,t.learning_steps=0,s.state=z.Review,s.learning_steps=0}}class bl extends lf{newState(e){const t=this.next.get(e);if(t)return t;this.current.scheduled_days=0,this.current.elapsed_days=0;const s=G.card(this.current),r=G.card(this.current),i=G.card(this.current),a=G.card(this.current);return this.init_ds(s,r,i,a),this.next_interval(s,r,i,a,0),this.next_state(s,r,i,a),this.update_next(s,r,i,a),this.next.get(e)}init_ds(e,t,s,r){e.difficulty=Oe(this.algorithm.init_difficulty(D.Again),1,10),e.stability=this.algorithm.init_stability(D.Again),t.difficulty=Oe(this.algorithm.init_difficulty(D.Hard),1,10),t.stability=this.algorithm.init_stability(D.Hard),s.difficulty=Oe(this.algorithm.init_difficulty(D.Good),1,10),s.stability=this.algorithm.init_stability(D.Good),r.difficulty=Oe(this.algorithm.init_difficulty(D.Easy),1,10),r.stability=this.algorithm.init_stability(D.Easy)}learningState(e){return this.reviewState(e)}reviewState(e){const t=this.next.get(e);if(t)return t;const s=this.elapsed_days,{difficulty:r,stability:i}=this.last,a=this.algorithm.forgetting_curve(s,i),c=G.card(this.current),l=G.card(this.current),h=G.card(this.current),f=G.card(this.current);return this.next_ds(c,l,h,f,r,i,a),this.next_interval(c,l,h,f,s),this.next_state(c,l,h,f),c.lapses+=1,this.update_next(c,l,h,f),this.next.get(e)}next_ds(e,t,s,r,i,a,c){e.difficulty=this.algorithm.next_difficulty(i,D.Again);const l=this.algorithm.next_forget_stability(i,a,c);e.stability=Oe(a,Ke,l),t.difficulty=this.algorithm.next_difficulty(i,D.Hard),t.stability=this.algorithm.next_recall_stability(i,a,c,D.Hard),s.difficulty=this.algorithm.next_difficulty(i,D.Good),s.stability=this.algorithm.next_recall_stability(i,a,c,D.Good),r.difficulty=this.algorithm.next_difficulty(i,D.Easy),r.stability=this.algorithm.next_recall_stability(i,a,c,D.Easy)}next_interval(e,t,s,r,i){let a,c,l,h;a=this.algorithm.next_interval(e.stability,i),c=this.algorithm.next_interval(t.stability,i),l=this.algorithm.next_interval(s.stability,i),h=this.algorithm.next_interval(r.stability,i),a=Math.min(a,c),c=Math.max(c,a+1),l=Math.max(l,c+1),h=Math.max(h,l+1),e.scheduled_days=a,e.due=Ge(this.review_time,a,!0),t.scheduled_days=c,t.due=Ge(this.review_time,c,!0),s.scheduled_days=l,s.due=Ge(this.review_time,l,!0),r.scheduled_days=h,r.due=Ge(this.review_time,h,!0)}next_state(e,t,s,r){e.state=z.Review,e.learning_steps=0,t.state=z.Review,t.learning_steps=0,s.state=z.Review,s.learning_steps=0,r.state=z.Review,r.learning_steps=0}update_next(e,t,s,r){const i={card:e,log:this.buildLog(D.Again)},a={card:t,log:super.buildLog(D.Hard)},c={card:s,log:super.buildLog(D.Good)},l={card:r,log:super.buildLog(D.Easy)};this.next.set(D.Again,i),this.next.set(D.Hard,a),this.next.set(D.Good,c),this.next.set(D.Easy,l)}}class wT{fsrs;constructor(e){this.fsrs=e}replay(e,t,s){return this.fsrs.next(e,t,s)}handleManualRating(e,t,s,r,i,a,c){if(typeof t>"u")throw new Error("reschedule: state is required for manual rating");let l,h;if(t===z.New)l={rating:D.Manual,state:t,due:c??s,stability:e.stability,difficulty:e.difficulty,elapsed_days:r,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:s},h=Zr(s),h.last_review=s;else{if(typeof c>"u")throw new Error("reschedule: due is required for manual rating");const f=Cn(c,s,"days");l={rating:D.Manual,state:e.state,due:e.last_review||e.due,stability:e.stability,difficulty:e.difficulty,elapsed_days:r,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:s},h={...e,state:t,due:c,last_review:s,stability:i||e.stability,difficulty:a||e.difficulty,elapsed_days:r,scheduled_days:f,reps:e.reps+1}}return{card:h,log:l}}reschedule(e,t){const s=[];let r=Zr(e.due);for(const i of t){let a;if(i.review=G.time(i.review),i.rating===D.Manual){let c=0;r.state!==z.New&&r.last_review&&(c=Cn(i.review,r.last_review,"days")),a=this.handleManualRating(r,i.state,i.review,c,i.stability,i.difficulty,i.due?G.time(i.due):void 0)}else a=this.replay(r,i.review,i.rating);s.push(a),r=a.card}return s}calculateManualRecord(e,t,s,r){if(!s)return null;const{card:i,log:a}=s,c=G.card(e);return c.due.getTime()===i.due.getTime()?null:(c.scheduled_days=Cn(i.due,c.due,"days"),this.handleManualRating(c,i.state,G.time(t),a.elapsed_days,r?i.stability:void 0,r?i.difficulty:void 0,i.due))}}let ET=class extends vT{strategyHandler=new Map;Scheduler;constructor(e){super(e);const{enable_short_term:t}=this.parameters;this.Scheduler=t?Sl:bl}params_handler_proxy(){const e=this;return{set:function(t,s,r){return s==="request_retention"&&Number.isFinite(r)?e.intervalModifier=e.calculate_interval_modifier(Number(r)):s==="enable_short_term"?e.Scheduler=r===!0?Sl:bl:s==="w"&&(r=Fa(r,t.relearning_steps.length,t.enable_short_term),e.forgetting_curve=jo.bind(this,r),e.intervalModifier=e.calculate_interval_modifier(Number(t.request_retention))),Reflect.set(t,s,r),!0}}}useStrategy(e,t){return this.strategyHandler.set(e,t),this}clearStrategy(e){return e?this.strategyHandler.delete(e):this.strategyHandler.clear(),this}getScheduler(e,t){const r=this.strategyHandler.get(vi.SCHEDULER)||this.Scheduler;return new r(e,t,this,this.strategyHandler)}repeat(e,t,s){const i=this.getScheduler(e,t).preview();return s&&typeof s=="function"?s(i):i}next(e,t,s,r){const i=this.getScheduler(e,t),a=G.rating(s);if(a===D.Manual)throw new Error("Cannot review a manual rating");const c=i.review(a);return r&&typeof r=="function"?r(c):c}get_retrievability(e,t,s=!0){const r=G.card(e);t=t?G.time(t):new Date;const i=r.state!==z.New?Math.max(Cn(t,r.last_review,"days"),0):0,a=r.state!==z.New?this.forgetting_curve(i,+r.stability.toFixed(8)):0;return s?`${(a*100).toFixed(2)}%`:a}rollback(e,t,s){const r=G.card(e),i=G.review_log(t);if(i.rating===D.Manual)throw new Error("Cannot rollback a manual rating");let a,c,l;switch(i.state){case z.New:a=i.due,c=void 0,l=0;break;case z.Learning:case z.Relearning:case z.Review:a=i.review,c=i.due,l=r.lapses-(i.rating===D.Again&&i.state===z.Review?1:0);break}const h={...r,due:a,stability:i.stability,difficulty:i.difficulty,elapsed_days:i.last_elapsed_days,scheduled_days:i.scheduled_days,reps:Math.max(0,r.reps-1),lapses:Math.max(0,l),learning_steps:i.learning_steps,state:i.state,last_review:c};return s&&typeof s=="function"?s(h):h}forget(e,t,s=!1,r){const i=G.card(e);t=G.time(t);const a=i.state===z.New?0:Cn(t,i.due,"days"),c={rating:D.Manual,state:i.state,due:i.due,stability:i.stability,difficulty:i.difficulty,elapsed_days:0,last_elapsed_days:i.elapsed_days,scheduled_days:a,learning_steps:i.learning_steps,review:t},h={card:{...i,due:t,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:s?0:i.reps,lapses:s?0:i.lapses,learning_steps:0,state:z.New,last_review:i.last_review},log:c};return r&&typeof r=="function"?r(h):h}reschedule(e,t=[],s={}){const{recordLogHandler:r,reviewsOrderBy:i,skipManual:a=!0,now:c=new Date,update_memory_state:l=!1}=s;i&&typeof i=="function"&&t.sort(i),a&&(t=t.filter(w=>w.rating!==D.Manual));const h=new wT(this),f=h.reschedule(s.first_card||Zr(),t),m=f.length,_=G.card(e),I=h.calculateManualRecord(_,c,m?f[m-1]:void 0,l);return r&&typeof r=="function"?{collections:f.map(r),reschedule_item:I?r(I):null}:{collections:f,reschedule_item:I}}};const TT=n=>new ET(n||{}),hf=(n,e,t)=>{t||(e?t=e.getSubtreeNodes():t=n.getAllChessNodes()),t=t.filter(a=>a.isNewLearnable());const s=t.filter(a=>a.isOpening),r=t.filter(a=>!a.isOpening);let i;if(s.length>0&&r.length>0)Math.random()<.8?(i=!0,t=s):(i=!1,t=r);else if(s.length)i=!0,t=s;else if(r.length)i=!1,t=r;else return null;if(i){t=_e.sortBy(t,a=>-a.totalFrequency);for(const a of t)if(a.hasNewLearnableOpeningTrail())return a;i=!1,t=r}if(t.length){let a=_e.sample(t);for(;a.parents.length===1&&a.parents[0].parents.length===1&&a.parents[0].parents[0].isNewLearnable();)a=a.parents[0].parents[0];return a}return null},df=(n,e,t)=>{t||(e?t=e.getSubtreeNodes():t=n.getAllChessNodes());const s=new Date().getTime();return t.filter(r=>r.sequenceCard&&r.sequenceCard.isDue(s)&&r.totalFrequency!==0)},ff=(n,e,t)=>{if(t||(e?t=e.getSubtreeNodes():t=n.getAllChessNodes()),t=t.filter(r=>!!r.sequenceCard),t.length===0)return null;const s=new Date;return _e.minBy(t,r=>ja(r.sequenceCard.getSchedulingCard(),s))},Ba=n=>n.length===0?null:_e.minBy(n,e=>e.sequenceCard.getJitteredReviewTime()),pf=(n,e,t)=>{let s;e?s=e.getSubtreeNodes():s=n.getAllChessNodes();const r=df(n,e,s),i=hf(n,e,s),a=t.mixNewCards?!!i&&Math.random()<1/(r.length+1):!1,c={chessNode:null,statistics:{newCardsDue:0,learningCardsDue:0,reviewCardsDue:0,relearningCardsDue:0,totalOpeningCards:0,totalEndgameCards:0,totalNewLearnableCards:0}},l=c.statistics;for(const h of r){const f=h.sequenceCard.getState();f===z.New?l.newCardsDue+=1:f===z.Learning?l.learningCardsDue+=1:f===z.Relearning?l.relearningCardsDue+=1:f===z.Review&&(l.reviewCardsDue+=1)}for(const h of s)h.sequenceCard?h.isOpening?l.totalOpeningCards+=1:l.totalEndgameCards+=1:h.isNewLearnable()&&(l.totalNewLearnableCards+=1);if(i&&(a||r.length===0))i.sequenceCard=Ze.createEmptyCard(i,"sequence"),c.chessNode=i;else if(r.length)c.chessNode=Ba(r);else{const h=ff(n,e,s);if(h)c.chessNode=h;else throw new Error("getNextFSRS: no new nodes, no due nodes, and no nodes to cram!")}return c},$a=$o({enable_fuzz:!0,enable_short_term:!0,learning_steps:["1m","10m","30m","1h","6h","12h"],relearning_steps:["10m","1h","6h"],request_retention:.94}),gf=TT($a),kr=(n,e,t=new Date)=>gf.next(n,t,e).card,ja=(n,e=new Date)=>{if(!n.last_review)return 0;if(!n.stability||n.stability<=0)throw new Error("Card must have positive stability");const t=1e3*60*60*24,s=Math.max(0,(e.getTime()-n.last_review.getTime())/t),{decay:r,factor:i}=Ua($a.w);return Math.pow(1+i*s/n.stability,r)},PI=Object.freeze(Object.defineProperty({__proto__:null,fsrsGenerator:gf,fsrsGeneratorParameters:$a,getCardRetrievability:ja,getCramFSRSChessNode:ff,getDueFSRSChessNodes:df,getNewFSRSChessNode:hf,getNextFSRS:pf,getReviewedCard:kr,selectDueFSRSChessNode:Ba},Symbol.toStringTag,{value:"Module"}));class Ze{constructor(e,t,s){this.card=e,this.node=t,this.type=s,this.temporaryCard=null,this.lastCard=null,this.lastReviewDate=null,this.isLastCardTemporary=!1}beforeReview(){this.lastReviewDate=new Date,this.isUsingTemporaryCard(this.lastReviewDate)?(this.temporaryCard||(this.temporaryCard=this.card),this.lastCard=this.temporaryCard,this.isLastCardTemporary=!0):(this.lastCard=this.card,this.isLastCardTemporary=!1)}review(e){if(!this.lastReviewDate||!this.lastCard)throw new Error("Cannot review without a last review date and card");this.isLastCardTemporary?this.temporaryCard=kr(this.lastCard,e,this.lastReviewDate):(this.card=kr(this.lastCard,e,this.lastReviewDate),this.temporaryCard=null)}getRereviewedCard(e){if(!this.lastReviewDate||!this.lastCard)throw new Error("Cannot review without a last review date and card");return kr(this.lastCard,e,this.lastReviewDate)}getLastCard(){if(!this.lastCard)throw new Error("No last card available");return this.lastCard}wasLastCardTemporary(){return this.isLastCardTemporary}getSchedulingCard(){return this.isUsingTemporaryCard()?(this.temporaryCard||(this.temporaryCard=this.card),this.temporaryCard):this.card}isSolid(){const e=(this.card.due.getTime()-Date.now())/864e5;return this.card.reps>=20&&this.card.state===2&&e>1.5&&ja(this.card)>.999}isCardNew(){return this.card.state===z.New}isCardLearning(){return this.card.state===z.Learning}isCardLongReview(){return this.card.state===z.Review}isCardRelearning(){return this.card.state===z.Relearning}isCardUsingLearningSteps(){return this.isCardLearning()||this.isCardRelearning()}isUsingTemporaryCard(e=new Date){return e.getTime()<this.card.due.getTime()&&!this.isCardLongReview()}getState(){return this.card.state}getLearningStep(){return this.isCardUsingLearningSteps()?this.card.learning_steps:null}getJitteredReviewTime(){const e=12e5*Math.random();return this.card.due.getTime()+e}isDue(e=Date.now()){return this.card.due.getTime()<=e}isCramming(){return this.card.due.getTime()>Date.now()}hasEasyDefault(e){return!1}serialize(){return[this.card.difficulty,this.card.due.getTime(),this.card.elapsed_days,this.card.lapses,this.card.last_review?.getTime()??null,this.card.learning_steps,this.card.reps,this.card.scheduled_days,this.card.stability,this.card.state]}equalsOtherNode(e){return this.type===e.type&&this.serialize().every((t,s)=>t===e.serialize()[s])}static createEmptyCard(e,t){return new Ze(Zr(new Date),e,t)}static deserialize(e,t,s){return new Ze({difficulty:s[0],due:new Date(s[1]),elapsed_days:s[2],lapses:s[3],last_review:s[4]?new Date(s[4]):void 0,learning_steps:s[5],reps:s[6],scheduled_days:s[7],stability:s[8],state:s[9]},e,t)}}const NI=Object.freeze(Object.defineProperty({__proto__:null,NodeCard:Ze},Symbol.toStringTag,{value:"Module"}));class Fe{constructor(e,t,s,r){if(this.fen=e,this.repository=t,this.isOpening=s,this.isUserMove=r,this.moves=[],this.name=null,this.sequenceCard=null,this.isTournamentReady=!0,this.children=[],this.parents=[],this.moveMap={},this.pairedNode=null,this.allDistribution=null,this.totalFrequency=null,this.stockfishEntry=null,this.smartDistribution=null,!s&&e!==at(e))throw new Error("Endgame nodes must be created with canonical FENs");this.isWhite=Ue(e),e===oe&&(this.name="Initial Position"),this.allMoves=yi(this.fen)}addMove(e){if(this.moves.includes(e))return this.moveMap[e];this.moves.push(e);let t=Ve(this.fen,e);this.isOpening||(t=at(t));const s=this.repository.ensureChessNode(t,!this.isUserMove,this.isOpening);return Fe.connect(this,s,e),this.isUserMove&&this.moves.length>1&&this.sequenceCard&&(this.sequenceCard=null),s}setName(e){this.name=e,this.sequenceCard&&(this.sequenceCard=Ze.createEmptyCard(this,"sequence")),this.pairedNode&&(this.pairedNode.name=e,this.pairedNode.sequenceCard&&(this.pairedNode.sequenceCard=Ze.createEmptyCard(this.pairedNode,"sequence")))}deleteName(){this.name=null,this.pairedNode&&(this.pairedNode.name=null)}isLearnable(){return this.isUserMove&&(!this.isOpening||this.moves.length===1)}isNewLearnable(){return this.isLearnable()&&!this.sequenceCard}isOpeningOpponentForcedMove(){return this.isOpening&&!this.isUserMove&&this.moves.length===1&&(this.allDistribution?.[this.moves[0]]??0)>=.95}getMappedMoves(e){return this.isOpening?this.moves:this.moves.map(t=>ho(e,t))}getOnlyMove(){if(this.moves.length!==1)throw new Error("Node does not have exactly one move");return this.moves[0]}allowLearningBelow(){return this.isUserMove?!!this.sequenceCard||this.moves.length>1:!0}static isTrailLearnable(e){const t=e[e.length-1];return e.every(s=>s===t||s.allowLearningBelow())}getOpeningChildMove(e){if(!this.children.includes(e))throw new Error("Child not found");for(const t of Object.keys(this.moveMap))if(this.moveMap[t]===e)return t;throw new Error("Move not found")}getChildMoves(e){if(!this.children.includes(e))throw new Error("Child not found");const t=[];for(const s of Object.keys(this.moveMap))this.moveMap[s]===e&&t.push(s);return t}getChildNode(e){if(!this.moves.includes(e))throw new Error("Move not found");const t=this.moveMap[e];if(!t)throw new Error("Child node not found for move "+e);return t}isWhiteTurn(){return new ti(this.fen).turn()==="w"}getOpeningHistories(){return this.isOpening?this.parents.length===0?[[]]:this.parents.flatMap(e=>{const t=e.getOpeningChildMove(this);return e.getOpeningHistories().map(s=>[...s,t])}):[]}getOpeningTrails(){return this.isOpening?this.parents.length===0?[[this]]:this.parents.flatMap(e=>e.getOpeningTrails().map(t=>[...t,this])):[]}hasNewLearnableOpeningTrail(){if(!this.isOpening||!this.isNewLearnable())return!1;const e=t=>t.allowLearningBelow()?t.parents.length===0&&t.fen===oe?!0:t.parents.some(e):!1;return this.parents.some(e)}static getOpeningTrailFrequency(e){let t=1;for(let s=0;s<e.length-1;s++){const r=e[s];if(r.isUserMove){const i=e[s+1],a=r.getChildMoves(i);for(const c of a)t*=r.allDistribution[c]}}return t}static getOpeningHistoryFromTrail(e){if(e.length===0)throw new Error("Trail must have at least one node");const t=[];for(let s=0;s<e.length-1;s++){const r=e[s],i=e[s+1],a=r.getChildMoves(i);if(a.length!==1)throw new Error("There should be no symmetry causing move disambiguation");t.push(a[0])}return t}getOpeningMostPopularHistory(){if(!this.isOpening)return[];if(this.parents.length===0)return[];{const e=t=>{if(t.parents.length===0)return{history:[],frequency:1};let s=[],r=-1;for(const i of t.parents){const a=i.getChildMoves(t),c=e(i);for(const l of a){const h=c.frequency*(i.isUserMove?1:i.allDistribution[l]);h>r&&(r=h,s=[...c.history,l])}}return{history:s,frequency:r}};return e(this).history}}getSubtreeNodes(){const e=new Set,t=s=>{if(!e.has(s)){e.add(s);for(const r of s.children)t(r)}};return t(this),[...e]}getOpeningSubtreeStats(){if(!this.isOpening)throw new Error("getOpeningSubtreeStats can only be called on opening nodes");let e=0,t=0,s=0,r=0,i=0,a=0,c=null,l=null,h=0,f=0,m=0,_=0,I=0,w=0,P=0,R=0;const U=new Set,L=V=>{if(!U.has(V)){if(U.add(V),t++,V.isUserMove){if(e++,V.name===null&&(s++,V.totalFrequency>i&&(i=V.totalFrequency),V.parents.some(F=>F.moves.length>1)&&r++),V.sequenceCard){const F=V.sequenceCard.getState(),X=V.sequenceCard.isDue();F===z.New?(I++,X&&h++):F===z.Learning?(w++,X&&f++):F===z.Review?(P++,X&&m++):F===z.Relearning&&(R++,X&&_++)}}else{for(const F of V.allMoves){if(V.moves.includes(F))continue;const X=V.allDistribution[F]*V.totalFrequency;X>a&&(a=X)}if(V.children.length===0){const F=V.stockfishEntry;F!==null&&((c===null||Tl(F,c))&&(c=F),(l===null||Tl(l,F))&&(l=F))}}for(const F of V.children)L(F)}};return L(this),{userMoveNodeCount:e,nodeCount:t,unnamedUserMoveCount:s,unnamedNontrivialUserMoveCount:r,maxFrequencyUnnamedUserMoveCount:i,maxLeafFrequency:a,minLeafStockfishEntry:c,maxLeafStockfishEntry:l,dueNew:h,dueLearning:f,dueReview:m,dueRelearning:_,totalNew:I,totalLearning:w,totalReview:P,totalRelearning:R}}getOurCardState(){return this.isUserMove?this.sequenceCard?.getState()||(this.moves.length>1?"branch":null):null}static connect(e,t,s){if(e.isUserMove===t.isUserMove)throw new Error("Cannot connect nodes with the same isUserMove value");e.children.includes(t)||e.children.push(t),t.parents.includes(e)||t.parents.push(e),e.moveMap[s]=t}static disconnect(e,t){const s=e.getChildMoves(t);for(const r of s)delete e.moveMap[r];e.moves=e.moves.filter(r=>!s.includes(r)),e.children=e.children.filter(r=>r!==t),t.parents=t.parents.filter(r=>r!==e)}static pair(e,t){if(e.fen!==t.fen)throw new Error("Cannot pair nodes with different FENs");if(e.isUserMove===t.isUserMove)throw new Error("Cannot pair nodes with the same isUserMove value");if(e.pairedNode=t,t.pairedNode=e,e.name==="Queen's Gambit Declined"&&t.name==="QGD"&&(t.name=e.name),e.name&&t.name&&e.name!==t.name)throw new Error("Cannot pair nodes with different names: "+e.name+" vs "+t.name);e.name&&!t.name?t.name=e.name:!e.name&&t.name&&(e.name=t.name)}static unpair(e,t){e.pairedNode=null,t.pairedNode=null}}const mf=n=>{let e="";for(let t=0;t<n.length;t++)t>0&&(e+=" "),t%2===0?e+=`${Math.floor(t/2)+1}. ${n[t]}`:e+=n[t];return e},MI=Object.freeze(Object.defineProperty({__proto__:null,getSimplePGN:mf},Symbol.toStringTag,{value:"Module"})),IT=n=>{if(n>60)return 1;{const e=1-Math.exp(-1.68);return(1-Math.exp(-.028*n))/e}},AT=n=>{if(n>1e3)return 1;{const e=1-Math.exp(-5);return Math.pow((1-Math.exp(-.005*n))/e,3)}};function ST(n,e,t){const s=Math.min(Math.max((n-e)/(t-e),0),1);return s*s*(3-2*s)}function _f(n,e,t){return 1/(1+Math.exp(-t*(n-e)))}const yf=n=>Math.max(.01,ST(n,1350,1700)),vf=n=>Math.max(1e-5,_f(n,2e3,.01)),wf=n=>Math.max(1e-5,_f(n,2300,.015)),bT=n=>Math.floor(n*1e5)/1e5,kI=Object.freeze(Object.defineProperty({__proto__:null,frequencyRounder:bT,getEndgameFrequencyTimeScrambleFactor:IT,getFrequencyEliteEloFactor:wf,getFrequencyHighEloFactor:vf,getFrequencyMidEloFactor:yf,getOpeningFrequencyTimeScrambleFactor:AT},Symbol.toStringTag,{value:"Module"})),ei=(n,e=Number.POSITIVE_INFINITY)=>{const t={},s=_e.sortBy(Object.keys(n),i=>-n[i]);let r=0;for(const i of s){if(r++===e)break;t[i]=n[i]}return t},Ef=(n,e,t)=>{t||(t=e.map(()=>1/e.length));const s=e.map((h,f)=>qa(n,h));let r=_e.sum(e.map(h=>h.userWhiteFrequency)),i=_e.sum(e.map(h=>h.userBlackFrequency));const a=r+i;a>1e-15&&(r/=a,i/=a);let c=[0,0,0,0];for(const h of e){const f=h.userWhiteFrequency+h.userBlackFrequency;for(let m=0;m<4;m++)c[m]+=h.fallbackMix[m]*f}const l=_e.sum(c);for(let h=0;h<4;h++)c[h]/=l;return Ei(n,{get(h){const f={},m=[];let _=0;for(let I=0;I<e.length;I++){const w=t[I]*s[I].get(h);m.push(w),_+=w}if(_>1e-15)for(let I=0;I<m.length;I++)m[I]/=_;for(let I=0;I<e.length;I++){const w=e[I].get(h);for(const P of Object.keys(w))f[P]=(f[P]??0)+w[P]*m[I]}return f},userWhiteFrequency:r,userBlackFrequency:i,fallbackMix:c})},Ei=(n,e)=>{const t=new Map;for(const s of n.getAllOpeningChessNodes())t.set(s,e.get(s));return{get(s){const r=t.get(s);return r||Hs(e.fallbackMix,e.userWhiteFrequency,e.userBlackFrequency).get(s)},userWhiteFrequency:e.userWhiteFrequency,userBlackFrequency:e.userBlackFrequency,fallbackMix:e.fallbackMix,map:t}},RT=(n,e,t)=>({get(s){return n.get(s)},userWhiteFrequency:e,userBlackFrequency:t,fallbackMix:n.fallbackMix}),CT=(n,e)=>({get(t){return n.get(t)},userWhiteFrequency:n.userWhiteFrequency,userBlackFrequency:n.userBlackFrequency,fallbackMix:e}),Tf=(n,e)=>e.map?e.map:Ei(n,e).map,If=(n,e)=>{const t={},s=Tf(n,e);for(const r of n.getAllOpeningChessNodes().filter(i=>!i.isUserMove)){const i=s.get(r);i&&(t[r.fen]=ei(i))}return{distributions:t,userWhiteFrequency:e.userWhiteFrequency,userBlackFrequency:e.userBlackFrequency,fallbackMix:e.fallbackMix}},Af=(n,e)=>Ei(n,{get(t){if(!t.isUserMove){const s=e.distributions[t.fen];if(s)return s}return Hs(e.fallbackMix,e.userWhiteFrequency,e.userBlackFrequency).get(t)},userWhiteFrequency:e.userWhiteFrequency,userBlackFrequency:e.userBlackFrequency,fallbackMix:e.fallbackMix}),Sf={get(n){const e=n.smartDistribution?.mid;if(!e)throw new Error("midRepoDistribution requested for chess node with no mid distribution");return e},userWhiteFrequency:.5,userBlackFrequency:.5,fallbackMix:[1,0,0,0]},bf={get(n){const e=n.smartDistribution?.high;if(!e)throw new Error("highRepoDistribution requested for chess node with no high distribution");return e},userWhiteFrequency:.5,userBlackFrequency:.5,fallbackMix:[0,1,0,0]},Rf={get(n){const e=n.smartDistribution?.otbHigh;if(!e)throw new Error("otbHighRepoDistribution requested for chess node with no otbHigh distribution");return e},userWhiteFrequency:.5,userBlackFrequency:.5,fallbackMix:[0,0,1,0]},Cf={get(n){const e=n.smartDistribution?.otbElite;if(!e)throw new Error("otbEliteRepoDistribution requested for chess node with no otbElite distribution");return e},userWhiteFrequency:.5,userBlackFrequency:.5,fallbackMix:[0,0,0,1]},Hs=(n,e=.5,t=.5)=>({get(s){const r={},i=(a,c)=>{for(const l of Object.keys(a))r[l]=(r[l]??0)+a[l]*c};return n[0]>0&&i(Sf.get(s),n[0]),n[1]>0&&i(bf.get(s),n[1]),n[2]>0&&i(Rf.get(s),n[2]),n[3]>0&&i(Cf.get(s),n[3]),r},userWhiteFrequency:e,userBlackFrequency:t,fallbackMix:n});class PT{constructor(e,t){if(this.fen=e,this.moves=t,t.length>30)throw new Error("using bitsets, do not do that");this.fullBits=2**t.length-1}createBits(e){const t=this.moves.indexOf(e);if(t===-1)throw new Error("move not found in branch moves");return 1<<t}invertBits(e){return this.fullBits&~e}bitsToString(e){const t=[];for(let s=0;s<this.moves.length;s++)e&1<<s&&t.push(this.moves[s]);return t.join(", ")}}class Zt{constructor(e,t){this.branch=e,this.bits=t}toString(){return`(${this.branch.fen} with moves ${this.branch.bitsToString(this.bits)})`}}class Pn{constructor(e){this.choices=e}withChoice(e){return new Pn([...this.choices,e])}intersection(e){const t=[];for(const s of this.choices){const r=e.choices.find(i=>i.branch===s.branch)??null;if(r){const i=s.bits&r.bits;if(i===0)return null;t.push(new Zt(s.branch,i))}else t.push(s)}for(const s of e.choices)(this.choices.find(i=>i.branch===s.branch)??null)||t.push(s);return new Pn(t)}minus(e){const t=[],s=_e.uniq([...this.choices.map(i=>i.branch),...e.choices.map(i=>i.branch)]),r=[];for(let i=0;i<s.length;i++){const a=s[i];let c=this.choices.find(I=>I.branch===a)??null,l=e.choices.find(I=>I.branch===a)??null;if(!c&&l&&(c=new Zt(l.branch,l.branch.fullBits)),c&&!l&&(l=new Zt(c.branch,c.branch.fullBits)),!c||!l)throw new Error("unexpected, both choices should be non-null after this point");let h=null,f=null;const m=c.bits&l.bits,_=c.bits&~l.bits;if(m!==0&&(f=new Zt(c.branch,m)),_!==0&&(h=new Zt(c.branch,_)),h&&t.push(new Pn([...r,h,...s.slice(i+1).map(I=>this.choices.find(w=>w.branch===I)).filter(I=>I)])),f)r.push(f);else break}return t}}class nn{constructor(e,t){this.slice=e,this.frequency=t}withChoice(e){return new nn(this.slice.withChoice(e),this.frequency)}multiplied(e){return new nn(this.slice,this.frequency*e)}additiveIntersection(e){const t=this.slice.intersection(e.slice);return t?new nn(t,this.frequency+e.frequency):null}additiveDifference(e){return this.slice.minus(e.slice).map(s=>new nn(s,this.frequency))}toString(){return`  FrequencyChunk ${this.frequency}
${this.slice.choices.map(e=>`    ${e.toString()}`).join(`
`)}`}}class tt{constructor(e){this.chunks=e}getMaxFrequency(){return Math.max(0,...this.chunks.map(e=>e.frequency))}combine(e){let t=this.chunks.slice(),s=e.chunks.slice();for(;s.length;){const r=s.pop();let i=!1;for(const a of t){const c=r.additiveIntersection(a);if(c){t=t.filter(l=>l!==a),t.push(c),t.push(...a.additiveDifference(r)),s.push(...r.additiveDifference(a)),i=!0;break}}i||t.push(r)}return new tt(t)}multiplied(e){return new tt(this.chunks.map(t=>t.multiplied(e)))}withBranch(e,t){const s=e.createBits(t),r=new Zt(e,s);return new tt(this.chunks.map(i=>i.withChoice(r)))}toString(){return`FrequencySplit
${this.chunks.map(e=>e.toString()).join(`
`)}`}static getInitialFrequencySplit(e=1){return new tt([new nn(new Pn([]),e)])}static getZeroFrequencySplit(){return tt.getInitialFrequencySplit(0)}}const qa=(n,e,t=!1)=>{const s=new Map;for(const r of[!0,!1]){const i=n.getOpeningTopologicalSort(r),a=n.getInitialChessNode(r),c=new Map,l=(h,f)=>{if(!f)throw new Error("unexpected, frequency split should always be defined");c.set(h,f),s.set(h,f.getMaxFrequency())};for(const h of i)if(h===a)l(h,tt.getInitialFrequencySplit(r?e.userWhiteFrequency:e.userBlackFrequency));else if(t&&!h.isTournamentReady)l(h,tt.getZeroFrequencySplit());else{if(h.parents.length===0)throw new Error("unexpected, all non-initial nodes should have parents");if(h.parents.length===1){const f=h.parents[0],m=c.get(f);if(f.isUserMove)l(h,m);else{const I=e.get(f)[f.getOpeningChildMove(h)]??0;l(h,m.multiplied(I))}}else{let f=tt.getZeroFrequencySplit();for(const m of h.parents){const _=c.get(m);if(m.isUserMove)f=f.combine(_);else{const w=e.get(m)[m.getOpeningChildMove(h)]??0;f=f.combine(_.multiplied(w))}}l(h,f)}}}return s},qo=(n,e,t,s,r=.5,i=.5,a=5,c=2e3)=>{let l;if(n.rating){const m=yf(n.rating+200),_=vf(n.rating+200),I=wf(n.rating),w=R=>Math.max(0,Math.min(1,R));l=[w(m-_),w(_-I),2*I,I];const P=_e.sum(l);P>1e-15&&(l=l.map(R=>R/P))}else l=[.9,.1,0,0];const h=new Map;for(const m of[!0,!1])for(const _ of m?t:s){let I=oe;try{const w=[I];for(const P of _.moves)w.push(Ve(w[w.length-1],P))}catch{continue}for(const w of _.moves){const P=Ve(I,w);if(Ue(I)===m){const U=e.getChessNode(I,!1);if(U){const L=h.get(U)??{};let V=1;if(_.date){const F=new Date(_.date),X=1e3*60*60*24,B=Math.abs(new Date().getTime()-F.getTime())/X;V*=Math.exp(-B/c)}else V*=.4;(_.source==="otb"||_.source==="dgtlive")&&(V*=2),L[w]=(L[w]??0)+V,h.set(U,L)}}I=P}}const f=Hs(l,r,i);return console.log("initial top 4 counts",ei(h.get(e.getInitialChessNode(!1))??{},4)),console.log("after d4 top 4 counts",ei(h.get(e.getChessNode(Ve(oe,"d4"),!1))??{},4)),{get(m){const _=f.get(m),I=h.get(m)??null;if(!I)return _;const w={};for(const R of Object.keys(_))w[R]=_[R]*a;for(const R of Object.keys(I))w[R]=(w[R]??0)+I[R];const P=_e.sum(Object.values(w));if(P>1e-15)for(const R of Object.keys(w))w[R]/=P;return w},userWhiteFrequency:r,userBlackFrequency:i,fallbackMix:l}},NT=(n,e,t,s,r=.5,i=.5)=>Ef(e,[qo(n,e,t,s,r,i,1,100),qo(n,e,t,s,r,i,7,2e3)],[.5,.5]),OI=Object.freeze(Object.defineProperty({__proto__:null,FrequencyBranch:PT,FrequencyChoice:Zt,FrequencyChunk:nn,FrequencySlice:Pn,FrequencySplit:tt,computedRepoDistribution:Ei,frequencyBlendRepoDistributions:Ef,getFallbackRepoDistribution:Hs,getPlayerCompositeRepoDistribution:NT,getPlayerRepoDistribution:qo,getRepoDistributionFrequencyMap:qa,getRepoDistributionFromOpponentRecord:Af,getRepoDistributionMap:Tf,getRepoDistributionOpponentRecord:If,getSortedDistribution:ei,highRepoDistribution:bf,midRepoDistribution:Sf,otbEliteRepoDistribution:Cf,otbHighRepoDistribution:Rf,refallbackedRepoDistribution:CT,refrequenciedRepoDistribution:RT},Symbol.toStringTag,{value:"Module"}));class Pf{constructor(e){if(this.userMoveMap={},this.nonUserMoveMap={},this.id=0,e)if(Nf(e))console.log("loading old save state"),this.loadSaveState1(e);else if(Mf(e))this.loadSaveState2(e);else throw new Error("invalid save state version");this.ensureChessNode(oe,!0,!0),this.ensureChessNode(oe,!1,!0);for(const t of this.getAllChessNodes()){if(t.isUserMove&&t.children.length===0&&t.fen!==oe)throw new Error(`User move node ${t.fen} has no children`);if(!t.isUserMove&&t.parents.length===0&&t.fen!==oe)throw new Error(`Non-user move node ${t.fen} has no parents and is not the initial position`)}}updateDistributionsAndFrequencies(e,t=!1){const s=Af(this,e),r=qa(this,s,t);for(const i of this.getAllOpeningChessNodes())i.allDistribution=s.get(i),i.totalFrequency=r.get(i)??0}equals(e){if(Object.keys(this.userMoveMap).length!==Object.keys(e.userMoveMap).length)return console.log("userMoveMap length mismatch",Object.keys(this.userMoveMap).length,Object.keys(e.userMoveMap).length),!1;if(Object.keys(this.nonUserMoveMap).length!==Object.keys(e.nonUserMoveMap).length)return console.log("nonUserMoveMap length mismatch",Object.keys(this.nonUserMoveMap).length,Object.keys(e.nonUserMoveMap).length),!1;for(const t of[this.userMoveMap,this.nonUserMoveMap])for(const s of Object.values(t)){const r=e.getChessNode(s.fen,s.isUserMove);if(!r||s.fen!==r.fen||s.isUserMove!==r.isUserMove||s.name!==r.name||s.moves.length!==r.moves.length)return console.log("node mismatch",s,r),!1;if(s.sequenceCard===null!=(r.sequenceCard===null)||s.sequenceCard&&r.sequenceCard&&!s.sequenceCard.equalsOtherNode(r.sequenceCard))return!1;for(const i of s.moves){if(!r.moves.includes(i))return console.log("move mismatch",i,s.fen),!1;const a=s.moveMap[i],c=r.moveMap[i];if(!a||!c)return console.log("child node missing for move",i,s.fen),!1;if(a.fen!==c.fen)return console.log("child node fen mismatch",i,s.fen,a.fen,c.fen),!1}}return!0}getChessNode(e,t){return(t?this.userMoveMap:this.nonUserMoveMap)[e]??null}getInitialChessNode(e){const t=this.getChessNode(oe,e);if(!t)throw new Error(`No initial chess node for ${oe} ${e}`);return t}hasFen(e){return!!this.getChessNode(e,!0)||!!this.getChessNode(e,!1)}getAllChessNodes(){return[...Object.values(this.userMoveMap),...Object.values(this.nonUserMoveMap)]}getAllOpeningChessNodes(){return[...Object.values(this.userMoveMap).filter(e=>e.isOpening),...Object.values(this.nonUserMoveMap).filter(e=>e.isOpening)]}getAllOpeningChessNodesWithInitialColor(e){return[...Object.values(this.userMoveMap).filter(t=>t.isOpening&&t.isWhite===e),...Object.values(this.nonUserMoveMap).filter(t=>t.isOpening&&t.isWhite!==e)]}ensureChessNode(e,t,s){const r=this.getChessNode(e,t);if(r)return r;const i=new Fe(e,this,s,t);return this.addChessNode(i),i}addChessNode(e){const t=e.fen,s=e.isUserMove?this.userMoveMap:this.nonUserMoveMap;if(s[t]&&s[t]!==e)throw new Error(`Already have a different node for ${t} ${e.isUserMove}`);s[t]=e;const r=this.getChessNode(t,!e.isUserMove);r&&Fe.pair(e,r)}deleteChessNode(e){const t=e.fen,s=e.isUserMove?this.userMoveMap:this.nonUserMoveMap;if(s[t]!==e)throw new Error(`Trying to delete a node that doesn't exist or doesn't match for ${t} ${e.isUserMove}`);for(const r of e.parents)Fe.disconnect(r,e);for(const r of e.children)Fe.disconnect(e,r);delete s[t],e.pairedNode&&Fe.unpair(e,e.pairedNode)}connectNodes(){for(const e of[...Object.values(this.userMoveMap),...Object.values(this.nonUserMoveMap)])for(const t of e.moves){let s=Ve(e.fen,t);e.isOpening||(s=at(s));const r=this.getChessNode(s,!e.isUserMove);if(!r)throw new Error(`No child node for ${s} after move ${t} from ${e.fen}`);Fe.connect(e,r,t)}}loadSaveState1(e){const t=(r,i)=>{const a=r.map(()=>"");a[0]=oe;const c=r.map(()=>!1);c[0]=i,r.forEach((l,h)=>{const f=a[h];if(!f)throw new Error("No fen?");const m=c[h];if(this.getChessNode(f,m))throw new Error(`duplicate ${h} ${f}`);const _=new Fe(f,this,!0,m);if(l.n&&(_.name=l.n),l.m)for(let I=0;I<l.m.length;I+=2){const w=l.m[I],P=l.m[I+1];if(_.moves.includes(w))throw new Error(`duplicate move ${w} ${f}`);_.moves.includes(w)||_.moves.push(w);const R=Ve(f,w);if(a[P]&&a[P]!==R)throw new Error(`Fen mismatch? ${a[P]} vs ${R}`);a[P]=R,c[P]=!m}this.addChessNode(_)})};t(e.white,!0),t(e.black,!1),this.connectNodes();const s=["r1b2b1r/ppp2kpp/3p4/5qB1/8/2N2Q2/PPP2PPP/2KRR3 w - - 0 1"];for(const r of s){const i=this.getChessNode(r,!0);i&&this.deleteChessNode(i)}}loadSaveState2(e){this.id=e.id??1,console.log(`loaded state save #${this.id}`);const t=new Array(e.chessNodes.length).fill(null),s=new Array(e.chessNodes.length).fill(null),r=new Array(e.chessNodes.length).fill(null),i=new Array(e.chessNodes.length).fill(null);for(let a=0;a<e.chessNodes.length;a++){const c=e.chessNodes[a];let l;if(c.f){const f=!!c.u;l=new Fe(c.f,this,c.f===oe,f),s[a]=c.f,r[a]=f}else{const f=s[a];if(!f)throw new Error(`No fen for non-root node at index ${a}`);const m=r[a];if(m===null)throw new Error(`No isUserMove for non-root node at index ${a}`);const _=i[a];if(_===null)throw new Error(`No isOpening for non-root node at index ${a}`);l=new Fe(f,this,_,m)}t[a]=l;let h=l.fen;if(c.n&&(l.name=c.n),c.nt&&(l.isTournamentReady=!1),c.c&&(l.sequenceCard=Ze.deserialize(l,"sequence",c.c)),c.m)for(let f=0;f<c.m.length;f+=2){const m=c.m[f],_=c.m[f+1];if(l.moves.includes(m))throw new Error(`duplicate move ${m} ${h}`);l.moves.push(m);let I=Ve(h,m);if(l.isOpening||(I=at(I)),s[_]&&s[_]!==I)throw new Error(`Fen mismatch? ${s[_]} vs ${I}`);if(s[_]=I,r[_]!==null&&r[_]!==!l.isUserMove)throw new Error(`isUserMove mismatch for id ${_} at fen ${I}`);if(r[_]=!l.isUserMove,i[_]!==null&&i[_]!==l.isOpening)throw new Error(`isOpening mismatch for id ${_} at fen ${I}`);i[_]=l.isOpening}this.addChessNode(l)}for(let a=0;a<t.length;a++)if(!t[a])throw new Error(`No chess node at index ${a}`);this.connectNodes()}getSaveState(){this.id+=1;const e={version:2,chessNodes:[],id:this.id},t=[],s=this.getAllChessNodes();for(const c of s)c.serializationId=-1;let r=0;const a=[...s.filter(c=>c.parents.length===0)];for(;a.length;){const c=a.shift();c.serializationId===-1&&(c.serializationId=r++,t.push(c));for(const l of c.children)l.serializationId===-1&&a.push(l)}return e.chessNodes=t.map(c=>{const l={};return c.moves.length&&(l.m=_e.flatten(c.moves.map(h=>[h,c.moveMap[h].serializationId]))),c.name!==null&&(l.n=c.name),c.isTournamentReady||(l.nt=!0),c.sequenceCard&&(l.c=c.sequenceCard.serialize()),c.parents.length===0&&(l.f=c.fen,l.u=c.isUserMove),l}),e}getOpeningHistoriesMap(e){const t=this.getChessNode(oe,e);if(!t)throw new Error(`No root node for ${oe} ${e}`);const s=new Map,r=(i,a)=>{let c=s.get(i);c||(c=[],s.set(i,c)),c.push(a);for(const l of i.moves){const h=i.moveMap[l];r(h,[...a,l])}};return r(t,[]),s}getChessNodeLookup(e,t){for(const s of t){if(!e||!e.moveMap[s])return null;e=e.moveMap[s]}return e}getOpeningNodesLookup(e,t){return this.getChessNodeLookup(this.getChessNode(oe,e),t)}getOpeningFens(){const e=t=>t.isOpening;return _e.uniq([...Object.values(this.userMoveMap).filter(e).map(t=>t.fen),...Object.values(this.nonUserMoveMap).filter(e).map(t=>t.fen)])}getOpeningFensWithoutLeaves(){const e=t=>t.isOpening&&t.moves.length>0;return _e.uniq([...Object.values(this.userMoveMap).filter(e).map(t=>t.fen),...Object.values(this.nonUserMoveMap).filter(e).map(t=>t.fen)])}getOpeningTopologicalSort(e){const t=this.getAllOpeningChessNodesWithInitialColor(e),s=[];for(const i of t)i.sortIndegreeRemaining=i.parents.length,i.sortIndegreeRemaining===0&&s.push(i);const r=[];for(;s.length;){const i=s.pop();r.push(i);for(const a of i.children)a.sortIndegreeRemaining-=1,a.sortIndegreeRemaining===0&&s.push(a)}if(r.length!==t.length)throw new Error(`Topological sort failed, expected ${t.length} nodes but got ${r.length}`);return r}getNodesInSubtree(e){const t=new Set,s=r=>{if(!t.has(r)){t.add(r);for(const i of r.children)s(i)}};return s(e),Array.from(t)}}const Nf=n=>!("version"in n),Mf=n=>"version"in n&&n.version===2,MT=n=>"version"in n?n.version:1,DI=Object.freeze(Object.defineProperty({__proto__:null,Repository:Pf,getSaveStateVersion:MT,isSaveState1:Nf,isSaveState2:Mf},Symbol.toStringTag,{value:"Module"}));class ee extends Wo{static{this.MOVE=new ee}static{this.NAME=new ee}static{this.WIN_STATISTICS=new ee}static{this.WIN_DRAW_STATISTICS=new ee}static{this.STOCKFISH_EVAL=new ee}static{this.MINIMAX=new ee}static{this.POPULARITY_STATISTICS=new ee}static{this.DISTRIBUTION_STATISTICS=new ee}static{this.FREQUENCY=new ee}static{this.NODE_COUNT=new ee}static{this.UNNAMED_COUNT=new ee}static{this.UNNAMED_NONTRIVIAL_COUNT=new ee}static{this.MAX_UNNAMED_FREQUENCY_COUNT=new ee}static{this.MAX_LEAF_FREQUENCY_COUNT=new ee}static{this.WORST_STOCKFISH=new ee}static{this.enumeration=new Ho(ee)}}const VI=Object.freeze(Object.defineProperty({__proto__:null,MoveColumnSort:ee},Symbol.toStringTag,{value:"Module"})),kT=35,OT=120,DT=45,VT=55,xT=60,LT=100,FT=45,UT=35,BT=35,$T=35,jT=45,qT=45,WT=45,xI=3,LI=5,FI=2,HT=new Er(150),zT=new ls([HT],n=>n+1);class k extends Wo{static{this.MOVE=new k}static{this.NAME=new k}static{this.NODE_COUNT=new k}static{this.WIN_STATISTICS=new k}static{this.STOCKFISH_EVAL=new k}static{this.MINIMAX=new k}static{this.POPULARITY_STATISTICS=new k}static{this.DISTRIBUTION_STATISTICS=new k}static{this.FREQUENCY=new k}static{this.UNNAMED_COUNT=new k}static{this.UNNAMED_NONTRIVIAL_COUNT=new k}static{this.MAX_UNNAMED_FREQUENCY_COUNT=new k}static{this.MAX_LEAF_FREQUENCY_COUNT=new k}static{this.WORST_STOCKFISH=new k}static{this.enumeration=new Ho(k)}}const GT=new Map([[k.MOVE,"Move"],[k.NAME,"Name"],[k.NODE_COUNT,"Nodes"],[k.WIN_STATISTICS,"Win Stats"],[k.STOCKFISH_EVAL,"Eval"],[k.MINIMAX,"Minimax"],[k.POPULARITY_STATISTICS,"Popularity"],[k.DISTRIBUTION_STATISTICS,"Distribution"],[k.FREQUENCY,"Frequency"],[k.UNNAMED_COUNT,"!Name"],[k.UNNAMED_NONTRIVIAL_COUNT,"!Nont"],[k.MAX_UNNAMED_FREQUENCY_COUNT,"!Freq"],[k.MAX_LEAF_FREQUENCY_COUNT,"Leaf"],[k.WORST_STOCKFISH,"Worst"]]),KT=new Map([[k.MOVE,"Move names (SAN format)"],[k.NAME,"Opening Name"],[k.NODE_COUNT,"Number of nodes in this subtree"],[k.WIN_STATISTICS,"Win/draw/loss statistics"],[k.STOCKFISH_EVAL,"Stockfish evaluation of the position after this move"],[k.MINIMAX,"Minimax evaluation of the position after this move"],[k.POPULARITY_STATISTICS,"Popularity of this move in the lichess database"],[k.DISTRIBUTION_STATISTICS,"Target and Reference distribution of this move (target with blue, or minus red)"],[k.FREQUENCY,"Reciprocal total-frequency of this move in your opening tree"],[k.UNNAMED_COUNT,"Number of unnamed positions of our-color-to-move in this subtree"],[k.UNNAMED_NONTRIVIAL_COUNT,"Number of unnamed positions with nontrivial decisions in this subtree"],[k.MAX_UNNAMED_FREQUENCY_COUNT,"Maximum frequency of unnamed positions in this subtree"],[k.MAX_LEAF_FREQUENCY_COUNT,"Maximum frequency of leaf positions in this subtree"],[k.WORST_STOCKFISH,"Worst Stockfish evaluation of positions in this subtree"]]),QT=new Map([[k.MOVE,[ee.MOVE]],[k.NAME,[ee.NAME]],[k.NODE_COUNT,[ee.NODE_COUNT]],[k.WIN_STATISTICS,[ee.WIN_STATISTICS,ee.WIN_DRAW_STATISTICS]],[k.STOCKFISH_EVAL,[ee.STOCKFISH_EVAL]],[k.MINIMAX,[ee.MINIMAX]],[k.POPULARITY_STATISTICS,[ee.POPULARITY_STATISTICS]],[k.DISTRIBUTION_STATISTICS,[ee.DISTRIBUTION_STATISTICS]],[k.FREQUENCY,[ee.FREQUENCY]],[k.UNNAMED_COUNT,[ee.UNNAMED_COUNT]],[k.UNNAMED_NONTRIVIAL_COUNT,[ee.UNNAMED_NONTRIVIAL_COUNT]],[k.MAX_UNNAMED_FREQUENCY_COUNT,[ee.MAX_UNNAMED_FREQUENCY_COUNT]],[k.MAX_LEAF_FREQUENCY_COUNT,[ee.MAX_LEAF_FREQUENCY_COUNT]],[k.WORST_STOCKFISH,[ee.WORST_STOCKFISH]]]),XT=new Map([[k.MOVE,kT],[k.NAME,OT],[k.NODE_COUNT,UT],[k.WIN_STATISTICS,zT],[k.STOCKFISH_EVAL,DT],[k.MINIMAX,VT],[k.POPULARITY_STATISTICS,xT],[k.DISTRIBUTION_STATISTICS,LT],[k.FREQUENCY,FT],[k.UNNAMED_COUNT,BT],[k.UNNAMED_NONTRIVIAL_COUNT,$T],[k.MAX_UNNAMED_FREQUENCY_COUNT,jT],[k.MAX_LEAF_FREQUENCY_COUNT,qT],[k.WORST_STOCKFISH,WT]]),kf=[k.MOVE,k.NAME,k.NODE_COUNT,k.WIN_STATISTICS,k.STOCKFISH_EVAL,k.MINIMAX,k.POPULARITY_STATISTICS,k.DISTRIBUTION_STATISTICS,k.FREQUENCY],YT=[k.MOVE,k.NAME,k.NODE_COUNT,k.WIN_STATISTICS,k.STOCKFISH_EVAL,k.MINIMAX,k.DISTRIBUTION_STATISTICS,k.POPULARITY_STATISTICS,k.FREQUENCY,k.UNNAMED_COUNT,k.UNNAMED_NONTRIVIAL_COUNT,k.MAX_UNNAMED_FREQUENCY_COUNT,k.MAX_LEAF_FREQUENCY_COUNT,k.WORST_STOCKFISH],UI=Object.freeze(Object.defineProperty({__proto__:null,MOVE_COLUMNS_INITIAL_VISIBLE:kf,MOVE_COLUMN_ORDER:YT,MoveColumn:k,moveColumnDescriptionMap:KT,moveColumnShorthandNameMap:GT,moveColumnSortMap:QT,moveColumnWidthMap:XT},Symbol.toStringTag,{value:"Module"})),JT=async()=>{const n=await fetch(`https://opening-api.jonathanolson.net/save/${xe.value.uid}`);if(!n.ok)throw new Error(`Failed to fetch save state: ${n.statusText}`);return await n.json()},Of=async n=>{const e=JSON.stringify(n);console.log(e);const t=await fetch(`https://opening-api.jonathanolson.net/save/${xe.value.uid}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:e});if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const s=await t.json();if(s.ok!==!0)throw new Error(`Unexpected response message: ${s}`)},Df=async()=>{const n=await fetch(`https://opening-api.jonathanolson.net/distribution/package/all/${xe.value.uid}`);if(!n.ok)throw new Error(`Failed to fetch save state: ${n.statusText}`);return await n.json()},ZT=async n=>{const e=await fetch(`https://opening-api.jonathanolson.net/distribution/package/${n}/${xe.value.uid}`);if(!e.ok)throw new Error(`Failed to fetch save state: ${e.statusText}`);return await e.json()},Vf=async n=>{const e=await fetch(`https://opening-api.jonathanolson.net/distribution/package/${n}/${xe.value.uid}`);if(!e.ok)throw new Error(`Failed to fetch save state: ${e.statusText}`);return await e.json()},xf=async n=>{const e=await fetch(`https://opening-api.jonathanolson.net/distribution/player-package/${n}/${xe.value.uid}`);if(!e.ok)throw new Error(`Failed to fetch save state: ${e.statusText}`);return await e.json()},Lf=async()=>{const n=await fetch(`https://opening-api.jonathanolson.net/stockfish/package/${xe.value.uid}`);if(!n.ok)throw new Error(`Failed to fetch save state: ${n.statusText}`);return await n.json()},eI=async()=>{const n=await fetch(`https://opening-api.jonathanolson.net/player-metadata/${xe.value.uid}`);if(!n.ok)throw new Error(`Failed to fetch save state: ${n.statusText}`);return await n.json()};class Ff{constructor(){this.socket=Ip("https://opening-api.jonathanolson.net"),this.cache=new Ml({max:25e4}),this.repositorySavedEmitter=new fo,this.socket.on("repositorySaved",({id:e})=>{console.log(`Received repositorySaved event with id: ${e}`),this.repositorySavedEmitter.emit(e)})}getCacheKey(e,t){return`${e}:${JSON.stringify(t)}`}getCached(e,t){const s=this.cache.get(e);if(s)return s;const r=t().catch(i=>{throw this.cache.delete(e),i});return this.cache.set(e,r),r}async getStockfishEntry(e){const t=this.getCacheKey("openingStockfish",[e]);return this.getCached(t,()=>this.socket.timeout(5e5).emitWithAck("openingStockfish",e))}getOpeningInfo(e,t){const s=this.getCacheKey("openingInfo",[e,t]);return this.getCached(s,()=>this.socket.timeout(5e5).emitWithAck("openingInfo",{fen:e,tauDays:t}))}getOpeningDistribution(e,t,s,r){const i=this.getCacheKey("openingDistribution",[e,t,s,r]);return this.getCached(i,()=>this.socket.timeout(5e5).emitWithAck("openingDistribution",{fen:e,high:t,smoothing:s,tauDays:r}))}getExploreInfo(e){const t=this.getCacheKey("exploreInfo",[e]);return this.getCached(t,()=>this.socket.timeout(5e5).emitWithAck("exploreInfo",e))}getMinimaxFallback(e,t,s,r,i){const a=this.getCacheKey("minimaxFallback",[e,t,s,r,i]);return this.getCached(a,()=>this.socket.timeout(5e5).emitWithAck("minimaxFallback",{fen:e,high:t,type:s,alphaIndex:r,depth:i}))}}const Os=new Ff,Wa=new Ml({max:5e4}),Ds=async n=>{const e=await Os.getExploreInfo(n);return Wa.set(n,e),e},tI=n=>{const e=Wa.get(n);return e||(Ds(n),null)},nI=n=>{const e=Wa.get(n);return e||Ds(n)};window.openingSocket=Os;const BI=Object.freeze(Object.defineProperty({__proto__:null,OpeningSocket:Ff,getDistributionPackageAll:Df,getDistributionPackageSingle:ZT,getExploreInfo:Ds,getExploreInfoSync:tI,getExploreInfoSyncOrPromise:nI,getOpeningAPISaveState:JT,getOpponentDistributionResult:Vf,getPlayerMetadataPackage:eI,getPlayerOpponentDistributionResult:xf,getStockfishPackage:Lf,openingSocket:Os,setOpeningAPISaveState:Of},Symbol.toStringTag,{value:"Module"}));class sI{value;next;constructor(e){this.value=e}}class rI{#e;#t;#n;constructor(){this.clear()}enqueue(e){const t=new sI(e);this.#e?(this.#t.next=t,this.#t=t):(this.#e=t,this.#t=t),this.#n++}dequeue(){const e=this.#e;if(e)return this.#e=this.#e.next,this.#n--,this.#e||(this.#t=void 0),e.value}peek(){if(this.#e)return this.#e.value}clear(){this.#e=void 0,this.#t=void 0,this.#n=0}get size(){return this.#n}*[Symbol.iterator](){let e=this.#e;for(;e;)yield e.value,e=e.next}*drain(){for(;this.#e;)yield this.dequeue()}}function Rl(n){Cl(n);const e=new rI;let t=0;const s=()=>{t<n&&e.size>0&&(e.dequeue()(),t++)},r=()=>{t--,s()},i=async(l,h,f)=>{const m=(async()=>l(...f))();h(m);try{await m}catch{}r()},a=(l,h,f)=>{new Promise(m=>{e.enqueue(m)}).then(i.bind(void 0,l,h,f)),(async()=>(await Promise.resolve(),t<n&&s()))()},c=(l,...h)=>new Promise(f=>{a(l,f,h)});return Object.defineProperties(c,{activeCount:{get:()=>t},pendingCount:{get:()=>e.size},clearQueue:{value(){e.clear()}},concurrency:{get:()=>n,set(l){Cl(l),n=l,queueMicrotask(()=>{for(;t<n&&e.size>0;)s()})}}}),c}function Cl(n){if(!((Number.isInteger(n)||n===Number.POSITIVE_INFINITY)&&n>0))throw new TypeError("Expected `concurrency` to be a number from 1 and up")}const ie=(...n)=>{};class Qe extends Wo{static{this.NORMAL=new Qe}static{this.SAVING=new Qe}static{this.SUCCESS=new Qe}static{this.FAILURE=new Qe}static{this.enumeration=new Ho(Qe)}}class iI{constructor(e){this.repositoryUpdatedEmitter=new fo,this.repositoryUpdatedIncrementingProperty=new Er(0),this.isOpeningWhiteProperty=new gt(!0),this.hoveredPotentialVerboseMoveProperty=new gt(null),this.mixNewCardsProperty=new pt(!0),this.autoPlaySolidMovesProperty=new pt(!0),this.lockDrillToColorProperty=new pt(!1),this.moveRowSortProperty=new zc(ee.DISTRIBUTION_STATISTICS),this.moveRowSortIncludedFirstProperty=new pt(!0),this.magnifyWinStatisticsProperty=new pt(!1),this.columnVisibilityPropertyMap=new Map(k.enumeration.values.map(t=>[t,new pt(kf.includes(t))])),this.saveStatusProperty=new zc(Qe.NORMAL),this.popupSingleChessNodeEmitter=new fo,this.showMoveSettingsProperty=new pt(!1),this.distributionNameProperty=new gt("mid"),this.evalTypeProperty=new gt("expectation"),this.alphaSelectorProperty=new Er(2),this.depthProperty=new Er(1e3),this.fallbackDistributionNameProperty=new ls([this.distributionNameProperty],t=>t==="mid"?"mid":"high"),this.opponentDistributionNameProperty=new Ap("dcc default?"),this.opponentDistributionResultProperty=new gt(null),this.tournamentReadyProperty=new pt(!1),this.loadedAllDistributions=!1,this.loadedAllStockfish=!1,this.hadLikelyExternalSaveProperty=new pt(!1),this.repository=new Pf(e),this.stateProperty=new gt({state:"openingExplore",...vl(this.repository,!0),...vr()}),this.stateProperty.link((t,s)=>XE(t)),Os.repositorySavedEmitter.addListener(t=>{typeof t=="number"&&this.repository.id<t&&(this.hadLikelyExternalSaveProperty.value=!0)}),this.isOpeningProperty=new ls([this.stateProperty],t=>ze(t)),this.isWhiteProperty=new ls([this.stateProperty],t=>t.isWhite),this.stateProperty.link(t=>{ie(t)}),this.currentChessNodeProperty=new ls([this.stateProperty],t=>yr(t)),this.repositoryUpdatedEmitter.addListener(()=>{const t=this.currentChessNodeProperty.value;this.currentChessNodeProperty.recomputeDerivation(),t===this.currentChessNodeProperty.value&&this.currentChessNodeProperty.notifyListenersStatic(),this.repositoryUpdatedIncrementingProperty.value++}),this.isOpeningWhiteProperty.lazyLink(t=>{const s=this.stateProperty.value;ze(s)&&!Be(s)&&s.isWhite!==t&&this.userSwitchedColor(t)}),this.opponentDistributionResultProperty.lazyLink(this.updateOpponentDistributionResult.bind(this)),this.tournamentReadyProperty.lazyLink(this.updateOpponentDistributionResult.bind(this))}getCompactState(){return this.repository.getSaveState()}updateOpponentDistributionResult(){const e=this.opponentDistributionResultProperty.value;e&&(console.log("updating distribution result"),this.repository.updateDistributionsAndFrequencies(e,this.tournamentReadyProperty.value),console.log("updated distribution result")),this.repositoryUpdatedEmitter.emit()}getReviewStateAfterMove(e,t){if(!Be(e))throw new Error("Can only get review state after move if we are currently reviewing???");const s=io(e,t,ze(e)),r=s.chessNode;if(ze(e)){let i=!r.isUserMove||r.moves.length>1;if(this.autoPlaySolidMovesProperty.value&&r.isUserMove&&r.moves.length===1&&r.sequenceCard&&r.sequenceCard.isSolid()&&(i=!0,ie("auto-playing solid move")),i){const a=e.targetHistory[s.stack.length];if(!a)throw new Error("Expected there to be a next move to autoplay, since we determined we needed autoplay, but there wasn't one???");return{state:"openingReviewAutoMovePending",...s,..._r(e),...yl(e),isPendingAutoMove:!0,pendingAutoMove:a}}else return{state:"openingReviewUserMove",...s,..._r(e),...yl(e)}}else if(!r.isUserMove){const a=ho(s.fen,_e.sample(r.moves));if(!a)throw new Error("Expected there to be a next move to autoplay, since we determined we needed autoplay, but there wasn't one???");return{state:"endgameReviewAutoMovePending",...s,..._l(e),..._r(e),isPendingAutoMove:!0,pendingAutoMove:a}}else return{state:"endgameReviewUserMove",...s,..._l(e),..._r(e)}}fastForwardCommonState(e,t){for(;e.stackPosition<e.stack.length;){const s=e.stack[e.stackPosition].move;e=io(e,s,t)}return e}getReviewUpdateState(e){const t=e.chessNode;t.sequenceCard||(t.sequenceCard=Ze.createEmptyCard(t,"sequence"));const s=t.sequenceCard,r=Date.now()-e.nextTimestampStart,i=s.isCramming();s.beforeReview();let a=e.nextFailedReview?D.Again:s.hasEasyDefault(r)?D.Easy:D.Good;return s.review(a),{...jE(e),previousChessNode:t,previousFen:e.fen,previousHistory:ro(e),previousBaseFen:Ln(e)?e.baseFen:oe,previousGrade:a,previousWasCramming:i,previousFailedReview:e.nextFailedReview,nextFailedReview:!1,nextTimestampStart:Date.now()}}userPlayMove(e){const t=this.stateProperty.value;if(so(t)||LE(t))ie(`${e}: Exploring ${so(t)?"opening":"endgame"}`),this.stateProperty.value={...t,...io(t,e,ze(t))};else if(Be(t)&&t.stackPosition<t.stack.length)ie("Ignoring move because we are not at the end of the stack"),this.stateProperty.value={...t,...this.fastForwardCommonState(t,ze(t))};else if(FE(t)){const s=t.targetHistory[t.stack.length];if(e===s){const r=this.getReviewUpdateState(t);if(t.stack.length===t.targetHistory.length-1){ie(`${e}: Correct, final move!`);const a=this.getNextReviewState();this.stateProperty.value={...a,...r},this.postReviewStateUpdate()}else{ie(`${e}: Correct, continuing`);const a=this.getReviewStateAfterMove(t,e);this.stateProperty.value={...a,...r},this.postReviewStateUpdate()}}else ie(`${e}: Incorrect`),this.popupSingleChessNodeEmitter.emit(t.chessNode,t.fen),this.stateProperty.value={...t,nextFailedReview:!0,failedMoves:[s]}}else if(BE(t)){const s=t.chessNode.moves.map(r=>ho(t.fen,r));if(s.includes(e)){const r=this.getReviewUpdateState(t);if(t.chessNode.moveMap[lo(t.fen,e)].moves.length){ie(`${e}: Correct, continuing`);const a=this.getReviewStateAfterMove(t,e);this.stateProperty.value={...a,...r},this.postReviewStateUpdate()}else{ie(`${e}: Correct, final move!`);const a=this.getNextReviewState();this.stateProperty.value={...a,...r},this.postReviewStateUpdate()}}else ie(`${e}: Incorrect`),this.popupSingleChessNodeEmitter.emit(t.chessNode,t.fen),this.stateProperty.value={...t,nextFailedReview:!0,failedMoves:s}}else throw UE(t)||$E(t)?new Error("Should not have been able to move while in auto-move pending state???"):new Error(`Unknown state type: ${t.state}`)}userPopupPreviousChessNode(){const e=this.stateProperty.value;!Be(e)||!e.previousChessNode||!e.previousFen||this.popupSingleChessNodeEmitter.emit(e.previousChessNode,e.previousFen)}userGoFullBack(){ie("Going full back"),this.stateProperty.value={...this.stateProperty.value,...vn(this.stateProperty.value,0)}}userGoBack(){ie("Going back"),this.stateProperty.value.stackPosition>0&&(this.stateProperty.value={...this.stateProperty.value,...vn(this.stateProperty.value,this.stateProperty.value.stackPosition-1)})}userGoForward(){ie("Going forward"),this.stateProperty.value.stack.length>this.stateProperty.value.stackPosition&&(this.stateProperty.value={...this.stateProperty.value,...vn(this.stateProperty.value,this.stateProperty.value.stackPosition+1)})}userGoFullForward(){ie("Going full forward"),this.stateProperty.value={...this.stateProperty.value,...vn(this.stateProperty.value,this.stateProperty.value.stack.length)}}userSetBaseFen(e){if(e===oe){ie("Switching to initial position opening");const t=this.isOpeningWhiteProperty.value;this.stateProperty.value={state:"openingExplore",...vl(this.repository,t),...vr()}}else ie('Switching to "endgame" fen'),Ue(e)||(e=Sp.mapFen(bp.mapFen(e))),this.stateProperty.value={state:"endgameExplore",...oo(e),...wl(this.repository,e)},this.isOpeningWhiteProperty.value=!0}userSetPGN(e){const t=new ti;t.loadPgn(e);const s=t.history(),r=[];let i=oe;for(const l of s){const h=Ve(i,l);r.push({fen:h,fenBeforeMove:i,move:l}),i=h}const a=this.isOpeningWhiteProperty.value;ie("Setting PGN");const c=this.repository.getChessNode(i,Ue(i)===a)??null;this.stateProperty.value={state:"openingExplore",isOpening:!0,repository:this.repository,isWhite:a,fen:i,stack:r,stackPosition:r.length,chessNode:c,failedMoves:[]}}userSetFallbackTargetDistribution(e,t,s){this.opponentDistributionResultProperty.value=If(this.repository,Hs(e,t,s)),this.opponentDistributionNameProperty.value=`fallback (${e}, ${t}, ${s})`}async userSetGeneralTargetDistribution(e,t,s,r){Yt.start();let i=await Vf(e);if(t||s||r){const a={...i};t&&(a.fallbackMix=t),s!==void 0&&(a.userWhiteFrequency=s),r!==void 0&&(a.userBlackFrequency=r),i=a}this.opponentDistributionResultProperty.value=i,this.opponentDistributionNameProperty.value=`${e} (${s??.5}, ${r??.5})`,Yt.done()}async userSetPlayerTargetDistribution(e,t,s){if(Yt.start(),!e.uscf)throw new Error("Player does not have USCF ID");let r=await xf(e.uscf);if(t||s){const i={...r};t!==void 0&&(i.userWhiteFrequency=t),s!==void 0&&(i.userBlackFrequency=s),r=i}this.opponentDistributionResultProperty.value=r,this.opponentDistributionNameProperty.value=`player (${e.name}, ${t??.5}, ${s??.5})`,Yt.done()}userSwitchedColor(e){if(so(this.stateProperty.value)&&e!==this.stateProperty.value.isWhite)ie("Switching opening explore color"),this.stateProperty.value={...this.stateProperty.value,...WE(this.stateProperty.value)};else throw new Error("Color switching is only supported in the opening explorer for now")}userSelectStackIndex(e){this.stateProperty.value={...this.stateProperty.value,...vn(this.stateProperty.value,e+1)}}getCurrentPGN(){const e=qE(this.stateProperty.value);return e.length?mf(e):""}getMappedFen(e){return this.isOpeningProperty.value?e:at(e)}isBaseUserMove(){return this.isOpeningProperty.value?this.isOpeningWhiteProperty.value:!0}getBaseChessNode(){return this.repository.getChessNode(this.getMappedFen(Uo(this.stateProperty.value)),this.isBaseUserMove())}ensureBaseChessNode(){return this.repository.ensureChessNode(this.getMappedFen(Uo(this.stateProperty.value)),this.isBaseUserMove(),this.isOpeningProperty.value)}async saveTree(){const e=this.stateProperty.value,t=e.stack,s=e.stackPosition,r={};{const i=[];Yt.start();const a=new Set,c=l=>{a.has(l)||(a.add(l),i.push((async()=>{r[l]=await Ds(l),Yt.inc()})()))};for(const l of t.slice(0,s))c(l.fenBeforeMove),c(l.fen);await Promise.all(i),Yt.done()}{let i=this.ensureBaseChessNode();for(let a=0;a<s&&!(a===s-1&&!i.isUserMove);a++){const c=ze(e)?t[a].move:lo(t[a].fenBeforeMove,t[a].move);if(i=i.addMove(c),!i.smartDistribution){const l=i,h=r[l.fen];if(!h)throw new Error(`Missing explore info for fen ${l.fen} when saving tree???`);l.smartDistribution=h.smartDistribution,l.stockfishEntry=h.stockfishEval}}}this.updateOpponentDistributionResult(),this.repositoryUpdatedEmitter.emit()}deleteTree(){const e=this.stateProperty.value,t=ze(e),s=e.stack,r=e.stackPosition;if(r>0){const i=s[r-1],a=Bo(e,i.fen);if(!a)return;const c=r>1?Bo(e,s[r-2].fen):this.getBaseChessNode();if(!c||!c.isUserMove)return;Fe.disconnect(c,a),c.moves.length===0&&this.repository.deleteChessNode(c);const l=h=>{if(h.parents.length===0){for(const f of h.children)Fe.disconnect(h,f),t&&l(f);this.repository.deleteChessNode(h)}};l(a)}this.updateOpponentDistributionResult(),this.repositoryUpdatedEmitter.emit()}getNextReviewState(e=this.stateProperty.value){let t;if(Be(e))t=e.prefix;else if(ze(e)&&e.fen!==oe){if(t=yr(e),t){const a=t.isUserMove===Ue(t.fen);let l=this.repository.getInitialChessNode(a);for(const h of ro(e))l.isNewLearnable()&&(l.sequenceCard=Ze.createEmptyCard(l,"sequence")),l=l.moveMap[h]}}else Ln(e)?t=yr(e):t=this.lockDrillToColorProperty.value?yr(e):null;const s=pf(this.repository,t,{mixNewCards:this.mixNewCardsProperty.value}),r=s.chessNode,i=s.statistics;if(!r)throw new Error("No chess node found for review???");if(r.isOpening){const a=r.isUserMove===Ue(r.fen),c=this.repository.getInitialChessNode(a),l=cf(e)?e.initialHistory:Be(e)?[]:ro(e),h=r.getOpeningHistories().filter(B=>{if(B.length<l.length)return!1;for(let E=0;E<l.length;E++)if(B[E]!==l[E])return!1;return!0});if(h.length===0)throw new Error("No possible histories found for review???");const f=h.map(B=>{let E=1,g=c;for(const y of B)g.isUserMove||(E*=g.allDistribution?.[y]??.2),g=g.moveMap[y];return E}),m=_e.sum(f)+1e-15,I=f.map(B=>B/m).map(B=>B+.05),w=_e.sum(I),P=I.map(B=>B/w),R=[...h[Cp(P)],r.getOnlyMove()];{let B=r;const E=new Date().getTime();for(;;){const g=B.moveMap[B.getOnlyMove()],y=g.children.filter(T=>T.sequenceCard&&T.sequenceCard.isDue(E));if(y.length!==0){const T=Ba(y);T&&(R.push(g.getOpeningChildMove(T)),R.push(T.getOnlyMove()),B=T),ie(`Following due move! ${R}`)}else break}for(;;){const g=B.children[0],y=g?.children[0];if(!g?.isOpeningOpponentForcedMove()||!y?.isLearnable()||!y.sequenceCard?.isDue(E))break;R.push(g.getOnlyMove()),R.push(y.getOnlyMove()),B=y}}{let B=c;for(const E of R)B.isNewLearnable()&&(B.sequenceCard=Ze.createEmptyCard(B,"sequence")),B=B.moveMap[E]}const U=[];let L=c;for(const B of l){const E=L.moveMap[B];U.push({fen:E.fen,fenBeforeMove:L.fen,move:B}),L=E}const V=!L.isUserMove||L.moves.length>1,F=R[l.length],X={repository:this.repository,isWhite:c.isUserMove,fen:L.fen,stack:U,stackPosition:U.length,chessNode:L,failedMoves:[],initialHistory:l,targetHistory:R,...vr(),...El(t,i)};return V?{state:"openingReviewAutoMovePending",...X,isPendingAutoMove:!0,pendingAutoMove:F}:{state:"openingReviewUserMove",...X}}else{const l=Rp(r.fen).map(f=>f.mapFen(r.fen)).filter(Ue);if(l.length===0)throw new Error("No valid symmetries found for endgame review???");const h=_e.sample(l);return{state:"endgameReviewUserMove",...wl(this.repository,h),...oo(h),...El(t,i)}}}postReviewStateUpdate(){Fo(this.stateProperty.value)&&setTimeout(()=>this.autoMoveForReview(),100),this.isOpeningWhiteProperty.value=this.stateProperty.value.isWhite}userToggleReview(e){let t=this.stateProperty.value;e||(t={...t,...vn(t,0)}),Be(t)?(ie("Exiting review mode"),ze(t)?this.stateProperty.value={state:"openingExplore",...vr(),...ks(t)}:this.stateProperty.value={state:"endgameExplore",...oo(t.baseFen),...ks(t)},this.postReviewStateUpdate()):(ie("Entering review mode"),this.stateProperty.value=this.getNextReviewState(t),this.postReviewStateUpdate())}userExplorePreviousCard(){const e=this.stateProperty.value;if(!Be(e)||!e.previousChessNode)return;const t=e.previousBaseFen===oe,s=e.previousBaseFen,r=[];let i=s;for(const c of e.previousHistory){const l=Ve(i,c);r.push({fen:l,fenBeforeMove:i,move:c}),i=l}const a={repository:this.repository,isWhite:e.previousChessNode.isWhite,fen:e.previousFen,stack:r,stackPosition:r.length,chessNode:e.previousChessNode,failedMoves:[]};t?(ie("Exploring previous opening card in opening explorer"),this.stateProperty.value={state:"openingExplore",isOpening:!0,...a}):(ie("Exploring previous endgame card in opening explorer"),this.stateProperty.value={state:"endgameExplore",isEndgame:!0,baseFen:s,...a}),this.postReviewStateUpdate()}autoMoveForReview(){const e=this.stateProperty.value;Fo(e)&&(ie(`${e.pendingAutoMove}: Auto-Move`),this.stateProperty.value=this.getReviewStateAfterMove(e,e.pendingAutoMove),this.postReviewStateUpdate())}userReview(e){ie(`Grading review: ${e}`);const t=this.stateProperty.value;if(Be(t)){const s=t.previousChessNode.sequenceCard;e===D.Again&&t.previousGrade!==e&&this.popupSingleChessNodeEmitter.emit(t.previousChessNode,t.previousFen),s.review(e),this.stateProperty.value={...t,previousGrade:e}}}toggleTournamentReady(){const e=this.currentChessNodeProperty.value;e&&(e.isTournamentReady=!e.isTournamentReady,this.repositoryUpdatedEmitter.emit())}async exportState(){const e=this.getCompactState();this.saveStatusProperty.value=Qe.SAVING;try{await Of(e),this.saveStatusProperty.value=Qe.SUCCESS}catch(t){console.error("Failed to save!"),console.error(t),this.saveStatusProperty.value=Qe.FAILURE}await rf(xe.value.uid,e)}async loadAllDistributions(e,t){const s=this.repository.getAllOpeningChessNodes(),r=[],i=this.loadedAllDistributions?null:e?await e:await Df();for(const a of s){if(a.smartDistribution)continue;const c=i?.[a.fen]??null;c?a.smartDistribution=c:r.push(a)}if(i&&(this.loadedAllDistributions=!0),r.length){console.log(`Loading missing distributions for ${r.length} chess nodes...`);const a=Rl(10);let c=0;t&&t(c,r.length),await Promise.all(r.map(l=>(async()=>{await a(async()=>{const h=await Ds(l.fen);l.smartDistribution=h.smartDistribution,t&&t(++c,r.length)})})()))}else t&&t(0,0)}async loadAllStockfish(e,t){const s=this.repository.getAllOpeningChessNodes(),r=[],i=this.loadedAllStockfish?null:e?await e:await Lf();for(const a of s){if(a.stockfishEntry)continue;const c=i?.[a.fen]??null;c?a.stockfishEntry=c:r.push(a)}if(i&&(this.loadedAllStockfish=!0),r.length){console.log(`Loading missing Stockfish entries for ${r.length} chess nodes...`);const a=Rl(10);let c=0;t&&t(c,r.length),await Promise.all(r.map(l=>(async()=>{await a(async()=>{l.stockfishEntry=await Os.getStockfishEntry(l.fen),t&&t(++c,r.length)})})()))}else t&&t(0,0)}}const $I=Object.freeze(Object.defineProperty({__proto__:null,Model:iI,SaveStatus:Qe},Symbol.toStringTag,{value:"Module"})),oI=await(await fetch("./data/eco.json")).json(),Pl=oI,aI=n=>{const e=[],t=new ti,s=()=>{e.push(t.fen())};s();for(const r of n)t.move(r),s();for(let r=e.length-1;r>=0;r--){const i=e[r];if(Pl[i])return Pl[i]}return null},jI=Object.freeze(Object.defineProperty({__proto__:null,getOpeningInfo:aI},Symbol.toStringTag,{value:"Module"}));export{AI as $,FT as A,UT as B,BT as C,$T as D,jT as E,qT as F,RI as G,WT as H,xI as I,z as J,LI as K,FI as L,YT as M,zT as N,XT as O,QT as P,nI as Q,ee as R,Qe as S,JE as T,Os as U,yr as V,yi as W,tI as X,D as Y,ja as Z,II as _,pI as a,Yt as a0,hI as a1,dI as a2,JT as a3,Df as a4,Lf as a5,Vf as a6,iI as a7,yI as a8,_I as a9,TI as aa,kI as ab,PI as ac,wI as ad,jI as ae,MI as af,EI as ag,$I as ah,UI as ai,VI as aj,NI as ak,BI as al,DI as am,OI as an,vI as ao,mI as ap,Pf as aq,Bo as b,KT as c,Ue as d,oe as e,Ln as f,eI as g,ro as h,Be as i,aI as j,Ve as k,gI as l,GT as m,HT as n,YE as o,xT as p,LT as q,bI as r,fI as s,k as t,xe as u,kT as v,SI as w,OT as x,DT as y,VT as z};
