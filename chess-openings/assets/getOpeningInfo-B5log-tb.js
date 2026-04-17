import{P as ft,d as Yc,Y as Rp,l as Du,C as Ln,Z as lo,x as ot,_ as ge,$ as uo,g as ho,a0 as zo,a1 as Go,N as wr,f as us,a2 as Cp,B as Yt,a3 as Pp,a4 as Np,a5 as Mp}from"./index-BsP4UZjJ.js";import{L as Vu,s as kp}from"./copyToClipboard-D4z6cNCF.js";class Xc extends ft{constructor(e,t){const s=Yc()({enumeration:e.enumeration},t),r=Yc()({validValues:s.enumeration.values,phetioValueType:Rp({enumeration:s.enumeration})},s);super(e,r)}}const Op=()=>{};var Jc={};/**
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
 */const xu=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Dp=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],c=n[t++],u=((r&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Lu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,c=a?n[r+1]:0,u=r+2<n.length,h=u?n[r+2]:0,f=i>>2,g=(i&3)<<4|c>>4;let _=(c&15)<<2|h>>6,T=h&63;u||(T=64,a||(_=64)),s.push(t[f],t[g],t[_],t[T])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(xu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Dp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const h=r<n.length?t[n.charAt(r)]:64;++r;const g=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||c==null||h==null||g==null)throw new Vp;const _=i<<2|c>>4;if(s.push(_),h!==64){const T=c<<4&240|h>>2;if(s.push(T),g!==64){const R=h<<6&192|g;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Vp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xp=function(n){const e=xu(n);return Lu.encodeByteArray(e,!0)},kr=function(n){return xp(n).replace(/\./g,"")},Fu=function(n){try{return Lu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Lp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fp=()=>Lp().__FIREBASE_DEFAULTS__,Up=()=>{if(typeof process>"u"||typeof Jc>"u")return;const n=Jc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},jp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Fu(n[1]);return e&&JSON.parse(e)},ei=()=>{try{return Op()||Fp()||Up()||jp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Uu=n=>{var e,t;return(t=(e=ei())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Bp=n=>{const e=Uu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ju=()=>{var n;return(n=ei())===null||n===void 0?void 0:n.config},Bu=n=>{var e;return(e=ei())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class qp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Fn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function qu(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function $p(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[kr(JSON.stringify(t)),kr(JSON.stringify(a)),""].join(".")}const ms={};function Wp(){const n={prod:[],emulator:[]};for(const e of Object.keys(ms))ms[e]?n.emulator.push(e):n.prod.push(e);return n}function Hp(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Zc=!1;function $u(n,e){if(typeof window>"u"||typeof document>"u"||!Fn(window.location.host)||ms[n]===e||ms[n]||Zc)return;ms[n]=e;function t(_){return`__firebase__banner__${_}`}const s="__firebase__banner",i=Wp().prod.length>0;function a(){const _=document.getElementById(s);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function u(_,T){_.setAttribute("width","24"),_.setAttribute("id",T),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Zc=!0,a()},_}function f(_,T){_.setAttribute("id",T),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function g(){const _=Hp(s),T=t("text"),R=document.getElementById(T)||document.createElement("span"),k=t("learnmore"),P=document.getElementById(k)||document.createElement("a"),G=t("preprendIcon"),F=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const x=_.element;c(x),f(P,k);const q=h();u(F,G),x.append(F,R,P,q),document.body.appendChild(x)}i?(R.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function Gp(){var n;const e=(n=ei())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Kp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Yp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xp(){const n=Ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Jp(){return!Gp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zp(){try{return typeof indexedDB=="object"}catch{return!1}}function eg(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const tg="FirebaseError";class It extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=tg,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vs.prototype.create)}}class Vs{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?ng(i,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new It(r,c,s)}}function ng(n,e){return n.replace(sg,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const sg=/\{\$([^}]+)}/g;function rg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function sn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if(el(i)&&el(a)){if(!sn(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function el(n){return n!==null&&typeof n=="object"}/**
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
 */function xs(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ig(n,e){const t=new og(n,e);return t.subscribe.bind(t)}class og{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");ag(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Hi),r.error===void 0&&(r.error=Hi),r.complete===void 0&&(r.complete=Hi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ag(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Hi(){}/**
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
 */function $e(n){return n&&n._delegate?n._delegate:n}class rn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class cg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new qp;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),r=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ug(e))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xt){return this.instances.has(e)}getOptions(e=Xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&a.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:lg(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xt){return this.component?this.component.multipleInstances?e:Xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lg(n){return n===Xt?void 0:n}function ug(n){return n.instantiationMode==="EAGER"}/**
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
 */class hg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const dg={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},fg=Y.INFO,pg={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},gg=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=pg[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ko{constructor(e){this.name=e,this._logLevel=fg,this._logHandler=gg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const mg=(n,e)=>e.some(t=>n instanceof t);let tl,nl;function _g(){return tl||(tl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yg(){return nl||(nl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wu=new WeakMap,fo=new WeakMap,Hu=new WeakMap,zi=new WeakMap,Qo=new WeakMap;function vg(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Ot(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Wu.set(t,n)}).catch(()=>{}),Qo.set(e,n),e}function wg(n){if(fo.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});fo.set(n,e)}let po={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return fo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Hu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ot(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Eg(n){po=n(po)}function Tg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Gi(this),e,...t);return Hu.set(s,e.sort?e.sort():[e]),Ot(s)}:yg().includes(n)?function(...e){return n.apply(Gi(this),e),Ot(Wu.get(this))}:function(...e){return Ot(n.apply(Gi(this),e))}}function Ig(n){return typeof n=="function"?Tg(n):(n instanceof IDBTransaction&&wg(n),mg(n,_g())?new Proxy(n,po):n)}function Ot(n){if(n instanceof IDBRequest)return vg(n);if(zi.has(n))return zi.get(n);const e=Ig(n);return e!==n&&(zi.set(n,e),Qo.set(e,n)),e}const Gi=n=>Qo.get(n);function Ag(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),c=Ot(a);return s&&a.addEventListener("upgradeneeded",u=>{s(Ot(a.result),u.oldVersion,u.newVersion,Ot(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const bg=["get","getKey","getAll","getAllKeys","count"],Sg=["put","add","delete","clear"],Ki=new Map;function sl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ki.get(e))return Ki.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Sg.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||bg.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,r?"readwrite":"readonly");let h=u.store;return s&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),r&&u.done]))[0]};return Ki.set(e,i),i}Eg(n=>({...n,get:(e,t,s)=>sl(e,t)||n.get(e,t,s),has:(e,t)=>!!sl(e,t)||n.has(e,t)}));/**
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
 */class Rg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Cg(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Cg(n){const e=n.getComponent();return e?.type==="VERSION"}const go="@firebase/app",rl="0.13.2";/**
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
 */const vt=new Ko("@firebase/app"),Pg="@firebase/app-compat",Ng="@firebase/analytics-compat",Mg="@firebase/analytics",kg="@firebase/app-check-compat",Og="@firebase/app-check",Dg="@firebase/auth",Vg="@firebase/auth-compat",xg="@firebase/database",Lg="@firebase/data-connect",Fg="@firebase/database-compat",Ug="@firebase/functions",jg="@firebase/functions-compat",Bg="@firebase/installations",qg="@firebase/installations-compat",$g="@firebase/messaging",Wg="@firebase/messaging-compat",Hg="@firebase/performance",zg="@firebase/performance-compat",Gg="@firebase/remote-config",Kg="@firebase/remote-config-compat",Qg="@firebase/storage",Yg="@firebase/storage-compat",Xg="@firebase/firestore",Jg="@firebase/ai",Zg="@firebase/firestore-compat",em="firebase",tm="11.10.0";/**
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
 */const mo="[DEFAULT]",nm={[go]:"fire-core",[Pg]:"fire-core-compat",[Mg]:"fire-analytics",[Ng]:"fire-analytics-compat",[Og]:"fire-app-check",[kg]:"fire-app-check-compat",[Dg]:"fire-auth",[Vg]:"fire-auth-compat",[xg]:"fire-rtdb",[Lg]:"fire-data-connect",[Fg]:"fire-rtdb-compat",[Ug]:"fire-fn",[jg]:"fire-fn-compat",[Bg]:"fire-iid",[qg]:"fire-iid-compat",[$g]:"fire-fcm",[Wg]:"fire-fcm-compat",[Hg]:"fire-perf",[zg]:"fire-perf-compat",[Gg]:"fire-rc",[Kg]:"fire-rc-compat",[Qg]:"fire-gcs",[Yg]:"fire-gcs-compat",[Xg]:"fire-fst",[Zg]:"fire-fst-compat",[Jg]:"fire-vertex","fire-js":"fire-js",[em]:"fire-js-all"};/**
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
 */const Or=new Map,sm=new Map,_o=new Map;function il(n,e){try{n.container.addComponent(e)}catch(t){vt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Pn(n){const e=n.name;if(_o.has(e))return vt.debug(`There were multiple attempts to register component ${e}.`),!1;_o.set(e,n);for(const t of Or.values())il(t,n);for(const t of sm.values())il(t,n);return!0}function Yo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function je(n){return n==null?!1:n.settings!==void 0}/**
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
 */const rm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dt=new Vs("app","Firebase",rm);/**
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
 */class im{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
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
 */const Un=tm;function zu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:mo,automaticDataCollectionEnabled:!0},e),r=s.name;if(typeof r!="string"||!r)throw Dt.create("bad-app-name",{appName:String(r)});if(t||(t=ju()),!t)throw Dt.create("no-options");const i=Or.get(r);if(i){if(sn(t,i.options)&&sn(s,i.config))return i;throw Dt.create("duplicate-app",{appName:r})}const a=new hg(r);for(const u of _o.values())a.addComponent(u);const c=new im(t,s,a);return Or.set(r,c),c}function Gu(n=mo){const e=Or.get(n);if(!e&&n===mo&&ju())return zu();if(!e)throw Dt.create("no-app",{appName:n});return e}function Vt(n,e,t){var s;let r=(s=nm[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vt.warn(c.join(" "));return}Pn(new rn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const om="firebase-heartbeat-database",am=1,Is="firebase-heartbeat-store";let Qi=null;function Ku(){return Qi||(Qi=Ag(om,am,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Is)}catch(t){console.warn(t)}}}}).catch(n=>{throw Dt.create("idb-open",{originalErrorMessage:n.message})})),Qi}async function cm(n){try{const t=(await Ku()).transaction(Is),s=await t.objectStore(Is).get(Qu(n));return await t.done,s}catch(e){if(e instanceof It)vt.warn(e.message);else{const t=Dt.create("idb-get",{originalErrorMessage:e?.message});vt.warn(t.message)}}}async function ol(n,e){try{const s=(await Ku()).transaction(Is,"readwrite");await s.objectStore(Is).put(e,Qu(n)),await s.done}catch(t){if(t instanceof It)vt.warn(t.message);else{const s=Dt.create("idb-set",{originalErrorMessage:t?.message});vt.warn(s.message)}}}function Qu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const lm=1024,um=30;class hm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fm(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=al();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>um){const a=pm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){vt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=al(),{heartbeatsToSend:s,unsentEntries:r}=dm(this._heartbeatsCache.heartbeats),i=kr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return vt.warn(t),""}}}function al(){return new Date().toISOString().substring(0,10)}function dm(n,e=lm){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),cl(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),cl(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class fm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zp()?eg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await cm(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return ol(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return ol(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function cl(n){return kr(JSON.stringify({version:2,heartbeats:n})).length}function pm(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function gm(n){Pn(new rn("platform-logger",e=>new Rg(e),"PRIVATE")),Pn(new rn("heartbeat",e=>new hm(e),"PRIVATE")),Vt(go,rl,n),Vt(go,rl,"esm2017"),Vt("fire-js","")}gm("");var mm="firebase",_m="11.10.0";/**
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
 */Vt(mm,_m,"app");var ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xt,Yu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,m){function y(){}y.prototype=m.prototype,E.D=m.prototype,E.prototype=new y,E.prototype.constructor=E,E.C=function(w,I,b){for(var v=Array(arguments.length-2),ut=2;ut<arguments.length;ut++)v[ut-2]=arguments[ut];return m.prototype[I].apply(w,v)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(E,m,y){y||(y=0);var w=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)w[I]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(I=0;16>I;++I)w[I]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=E.g[0],y=E.g[1],I=E.g[2];var b=E.g[3],v=m+(b^y&(I^b))+w[0]+3614090360&4294967295;m=y+(v<<7&4294967295|v>>>25),v=b+(I^m&(y^I))+w[1]+3905402710&4294967295,b=m+(v<<12&4294967295|v>>>20),v=I+(y^b&(m^y))+w[2]+606105819&4294967295,I=b+(v<<17&4294967295|v>>>15),v=y+(m^I&(b^m))+w[3]+3250441966&4294967295,y=I+(v<<22&4294967295|v>>>10),v=m+(b^y&(I^b))+w[4]+4118548399&4294967295,m=y+(v<<7&4294967295|v>>>25),v=b+(I^m&(y^I))+w[5]+1200080426&4294967295,b=m+(v<<12&4294967295|v>>>20),v=I+(y^b&(m^y))+w[6]+2821735955&4294967295,I=b+(v<<17&4294967295|v>>>15),v=y+(m^I&(b^m))+w[7]+4249261313&4294967295,y=I+(v<<22&4294967295|v>>>10),v=m+(b^y&(I^b))+w[8]+1770035416&4294967295,m=y+(v<<7&4294967295|v>>>25),v=b+(I^m&(y^I))+w[9]+2336552879&4294967295,b=m+(v<<12&4294967295|v>>>20),v=I+(y^b&(m^y))+w[10]+4294925233&4294967295,I=b+(v<<17&4294967295|v>>>15),v=y+(m^I&(b^m))+w[11]+2304563134&4294967295,y=I+(v<<22&4294967295|v>>>10),v=m+(b^y&(I^b))+w[12]+1804603682&4294967295,m=y+(v<<7&4294967295|v>>>25),v=b+(I^m&(y^I))+w[13]+4254626195&4294967295,b=m+(v<<12&4294967295|v>>>20),v=I+(y^b&(m^y))+w[14]+2792965006&4294967295,I=b+(v<<17&4294967295|v>>>15),v=y+(m^I&(b^m))+w[15]+1236535329&4294967295,y=I+(v<<22&4294967295|v>>>10),v=m+(I^b&(y^I))+w[1]+4129170786&4294967295,m=y+(v<<5&4294967295|v>>>27),v=b+(y^I&(m^y))+w[6]+3225465664&4294967295,b=m+(v<<9&4294967295|v>>>23),v=I+(m^y&(b^m))+w[11]+643717713&4294967295,I=b+(v<<14&4294967295|v>>>18),v=y+(b^m&(I^b))+w[0]+3921069994&4294967295,y=I+(v<<20&4294967295|v>>>12),v=m+(I^b&(y^I))+w[5]+3593408605&4294967295,m=y+(v<<5&4294967295|v>>>27),v=b+(y^I&(m^y))+w[10]+38016083&4294967295,b=m+(v<<9&4294967295|v>>>23),v=I+(m^y&(b^m))+w[15]+3634488961&4294967295,I=b+(v<<14&4294967295|v>>>18),v=y+(b^m&(I^b))+w[4]+3889429448&4294967295,y=I+(v<<20&4294967295|v>>>12),v=m+(I^b&(y^I))+w[9]+568446438&4294967295,m=y+(v<<5&4294967295|v>>>27),v=b+(y^I&(m^y))+w[14]+3275163606&4294967295,b=m+(v<<9&4294967295|v>>>23),v=I+(m^y&(b^m))+w[3]+4107603335&4294967295,I=b+(v<<14&4294967295|v>>>18),v=y+(b^m&(I^b))+w[8]+1163531501&4294967295,y=I+(v<<20&4294967295|v>>>12),v=m+(I^b&(y^I))+w[13]+2850285829&4294967295,m=y+(v<<5&4294967295|v>>>27),v=b+(y^I&(m^y))+w[2]+4243563512&4294967295,b=m+(v<<9&4294967295|v>>>23),v=I+(m^y&(b^m))+w[7]+1735328473&4294967295,I=b+(v<<14&4294967295|v>>>18),v=y+(b^m&(I^b))+w[12]+2368359562&4294967295,y=I+(v<<20&4294967295|v>>>12),v=m+(y^I^b)+w[5]+4294588738&4294967295,m=y+(v<<4&4294967295|v>>>28),v=b+(m^y^I)+w[8]+2272392833&4294967295,b=m+(v<<11&4294967295|v>>>21),v=I+(b^m^y)+w[11]+1839030562&4294967295,I=b+(v<<16&4294967295|v>>>16),v=y+(I^b^m)+w[14]+4259657740&4294967295,y=I+(v<<23&4294967295|v>>>9),v=m+(y^I^b)+w[1]+2763975236&4294967295,m=y+(v<<4&4294967295|v>>>28),v=b+(m^y^I)+w[4]+1272893353&4294967295,b=m+(v<<11&4294967295|v>>>21),v=I+(b^m^y)+w[7]+4139469664&4294967295,I=b+(v<<16&4294967295|v>>>16),v=y+(I^b^m)+w[10]+3200236656&4294967295,y=I+(v<<23&4294967295|v>>>9),v=m+(y^I^b)+w[13]+681279174&4294967295,m=y+(v<<4&4294967295|v>>>28),v=b+(m^y^I)+w[0]+3936430074&4294967295,b=m+(v<<11&4294967295|v>>>21),v=I+(b^m^y)+w[3]+3572445317&4294967295,I=b+(v<<16&4294967295|v>>>16),v=y+(I^b^m)+w[6]+76029189&4294967295,y=I+(v<<23&4294967295|v>>>9),v=m+(y^I^b)+w[9]+3654602809&4294967295,m=y+(v<<4&4294967295|v>>>28),v=b+(m^y^I)+w[12]+3873151461&4294967295,b=m+(v<<11&4294967295|v>>>21),v=I+(b^m^y)+w[15]+530742520&4294967295,I=b+(v<<16&4294967295|v>>>16),v=y+(I^b^m)+w[2]+3299628645&4294967295,y=I+(v<<23&4294967295|v>>>9),v=m+(I^(y|~b))+w[0]+4096336452&4294967295,m=y+(v<<6&4294967295|v>>>26),v=b+(y^(m|~I))+w[7]+1126891415&4294967295,b=m+(v<<10&4294967295|v>>>22),v=I+(m^(b|~y))+w[14]+2878612391&4294967295,I=b+(v<<15&4294967295|v>>>17),v=y+(b^(I|~m))+w[5]+4237533241&4294967295,y=I+(v<<21&4294967295|v>>>11),v=m+(I^(y|~b))+w[12]+1700485571&4294967295,m=y+(v<<6&4294967295|v>>>26),v=b+(y^(m|~I))+w[3]+2399980690&4294967295,b=m+(v<<10&4294967295|v>>>22),v=I+(m^(b|~y))+w[10]+4293915773&4294967295,I=b+(v<<15&4294967295|v>>>17),v=y+(b^(I|~m))+w[1]+2240044497&4294967295,y=I+(v<<21&4294967295|v>>>11),v=m+(I^(y|~b))+w[8]+1873313359&4294967295,m=y+(v<<6&4294967295|v>>>26),v=b+(y^(m|~I))+w[15]+4264355552&4294967295,b=m+(v<<10&4294967295|v>>>22),v=I+(m^(b|~y))+w[6]+2734768916&4294967295,I=b+(v<<15&4294967295|v>>>17),v=y+(b^(I|~m))+w[13]+1309151649&4294967295,y=I+(v<<21&4294967295|v>>>11),v=m+(I^(y|~b))+w[4]+4149444226&4294967295,m=y+(v<<6&4294967295|v>>>26),v=b+(y^(m|~I))+w[11]+3174756917&4294967295,b=m+(v<<10&4294967295|v>>>22),v=I+(m^(b|~y))+w[2]+718787259&4294967295,I=b+(v<<15&4294967295|v>>>17),v=y+(b^(I|~m))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(I+(v<<21&4294967295|v>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+b&4294967295}s.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var y=m-this.blockSize,w=this.B,I=this.h,b=0;b<m;){if(I==0)for(;b<=y;)r(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<m;)if(w[I++]=E.charCodeAt(b++),I==this.blockSize){r(this,w),I=0;break}}else for(;b<m;)if(w[I++]=E[b++],I==this.blockSize){r(this,w),I=0;break}}this.h=I,this.o+=m},s.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var y=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=y&255,y/=256;for(this.u(E),E=Array(16),m=y=0;4>m;++m)for(var w=0;32>w;w+=8)E[y++]=this.g[m]>>>w&255;return E};function i(E,m){var y=c;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=m(E)}function a(E,m){this.h=m;for(var y=[],w=!0,I=E.length-1;0<=I;I--){var b=E[I]|0;w&&b==m||(y[I]=b,w=!1)}this.g=y}var c={};function u(E){return-128<=E&&128>E?i(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return P(h(-E));for(var m=[],y=1,w=0;E>=y;w++)m[w]=E/y|0,y*=4294967296;return new a(m,0)}function f(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return P(f(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(m,8)),w=g,I=0;I<E.length;I+=8){var b=Math.min(8,E.length-I),v=parseInt(E.substring(I,I+b),m);8>b?(b=h(Math.pow(m,b)),w=w.j(b).add(h(v))):(w=w.j(y),w=w.add(h(v)))}return w}var g=u(0),_=u(1),T=u(16777216);n=a.prototype,n.m=function(){if(k(this))return-P(this).m();for(var E=0,m=1,y=0;y<this.g.length;y++){var w=this.i(y);E+=(0<=w?w:4294967296+w)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(k(this))return"-"+P(this).toString(E);for(var m=h(Math.pow(E,6)),y=this,w="";;){var I=q(y,m).g;y=G(y,I.j(m));var b=((0<y.g.length?y.g[0]:y.h)>>>0).toString(E);if(y=I,R(y))return b+w;for(;6>b.length;)b="0"+b;w=b+w}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function k(E){return E.h==-1}n.l=function(E){return E=G(this,E),k(E)?-1:R(E)?0:1};function P(E){for(var m=E.g.length,y=[],w=0;w<m;w++)y[w]=~E.g[w];return new a(y,~E.h).add(_)}n.abs=function(){return k(this)?P(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],w=0,I=0;I<=m;I++){var b=w+(this.i(I)&65535)+(E.i(I)&65535),v=(b>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);w=v>>>16,b&=65535,v&=65535,y[I]=v<<16|b}return new a(y,y[y.length-1]&-2147483648?-1:0)};function G(E,m){return E.add(P(m))}n.j=function(E){if(R(this)||R(E))return g;if(k(this))return k(E)?P(this).j(P(E)):P(P(this).j(E));if(k(E))return P(this.j(P(E)));if(0>this.l(T)&&0>E.l(T))return h(this.m()*E.m());for(var m=this.g.length+E.g.length,y=[],w=0;w<2*m;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var I=0;I<E.g.length;I++){var b=this.i(w)>>>16,v=this.i(w)&65535,ut=E.i(I)>>>16,zn=E.i(I)&65535;y[2*w+2*I]+=v*zn,F(y,2*w+2*I),y[2*w+2*I+1]+=b*zn,F(y,2*w+2*I+1),y[2*w+2*I+1]+=v*ut,F(y,2*w+2*I+1),y[2*w+2*I+2]+=b*ut,F(y,2*w+2*I+2)}for(w=0;w<m;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=m;w<2*m;w++)y[w]=0;return new a(y,0)};function F(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function x(E,m){this.g=E,this.h=m}function q(E,m){if(R(m))throw Error("division by zero");if(R(E))return new x(g,g);if(k(E))return m=q(P(E),m),new x(P(m.g),P(m.h));if(k(m))return m=q(E,P(m)),new x(P(m.g),m.h);if(30<E.g.length){if(k(E)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var y=_,w=m;0>=w.l(E);)y=re(y),w=re(w);var I=U(y,1),b=U(w,1);for(w=U(w,2),y=U(y,2);!R(w);){var v=b.add(w);0>=v.l(E)&&(I=I.add(y),b=v),w=U(w,1),y=U(y,1)}return m=G(E,I.j(m)),new x(I,m)}for(I=g;0<=E.l(m);){for(y=Math.max(1,Math.floor(E.m()/m.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),b=h(y),v=b.j(m);k(v)||0<v.l(E);)y-=w,b=h(y),v=b.j(m);R(b)&&(b=_),I=I.add(b),E=G(E,v)}return new x(I,E)}n.A=function(E){return q(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)&E.i(w);return new a(y,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)|E.i(w);return new a(y,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)^E.i(w);return new a(y,this.h^E.h)};function re(E){for(var m=E.g.length+1,y=[],w=0;w<m;w++)y[w]=E.i(w)<<1|E.i(w-1)>>>31;return new a(y,E.h)}function U(E,m){var y=m>>5;m%=32;for(var w=E.g.length-y,I=[],b=0;b<w;b++)I[b]=0<m?E.i(b+y)>>>m|E.i(b+y+1)<<32-m:E.i(b+y);return new a(I,E.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Yu=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,xt=a}).apply(typeof ll<"u"?ll:typeof self<"u"?self:typeof window<"u"?window:{});var ur=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xu,hs,Ju,Er,yo,Zu,eh,th;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ur=="object"&&ur];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=t(this);function r(o,l){if(l)e:{var d=s;o=o.split(".");for(var p=0;p<o.length-1;p++){var A=o[p];if(!(A in d))break e;d=d[A]}o=o[o.length-1],p=d[o],l=l(p),l!=p&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var d=0,p=!1,A={next:function(){if(!p&&d<o.length){var S=d++;return{value:l(S,o[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}r("Array.prototype.values",function(o){return o||function(){return i(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,d){return o.call.apply(o.bind,arguments)}function g(o,l,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,p),o.apply(l,A)}}return function(){return o.apply(l,arguments)}}function _(o,l,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,_.apply(null,arguments)}function T(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function R(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,A,S){for(var O=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)O[ne-2]=arguments[ne];return l.prototype[A].apply(p,O)}}function k(o){const l=o.length;if(0<l){const d=Array(l);for(let p=0;p<l;p++)d[p]=o[p];return d}return[]}function P(o,l){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const A=o.length||0,S=p.length||0;o.length=A+S;for(let O=0;O<S;O++)o[A+O]=p[O]}else o.push(p)}}class G{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function F(o){return/^[\s\xa0]*$/.test(o)}function x(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function q(o){return q[" "](o),o}q[" "]=function(){};var re=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function U(o,l,d){for(const p in o)l.call(d,o[p],p,o)}function E(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function m(o){const l={};for(const d in o)l[d]=o[d];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,l){let d,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(d in p)o[d]=p[d];for(let S=0;S<y.length;S++)d=y[S],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function I(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function b(o){c.setTimeout(()=>{throw o},0)}function v(){var o=Ei;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class ut{constructor(){this.h=this.g=null}add(l,d){const p=zn.get();p.set(l,d),this.h?this.h.next=p:this.g=p,this.h=p}}var zn=new G(()=>new zf,o=>o.reset());class zf{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Gn,Kn=!1,Ei=new ut,Ya=()=>{const o=c.Promise.resolve(void 0);Gn=()=>{o.then(Gf)}};var Gf=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(d){b(d)}var l=zn;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Kn=!1};function At(){this.s=this.s,this.C=this.C}At.prototype.s=!1,At.prototype.ma=function(){this.s||(this.s=!0,this.N())},At.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Kf=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return o}();function Qn(o,l){if(Ie.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(re){e:{try{q(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Qf[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Qn.aa.h.call(this)}}R(Qn,Ie);var Qf={2:"touch",3:"pen",4:"mouse"};Qn.prototype.h=function(){Qn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Hs="closure_listenable_"+(1e6*Math.random()|0),Yf=0;function Xf(o,l,d,p,A){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!p,this.ha=A,this.key=++Yf,this.da=this.fa=!1}function zs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Gs(o){this.src=o,this.g={},this.h=0}Gs.prototype.add=function(o,l,d,p,A){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var O=Ii(o,l,p,A);return-1<O?(l=o[O],d||(l.fa=!1)):(l=new Xf(l,this.src,S,!!p,A),l.fa=d,o.push(l)),l};function Ti(o,l){var d=l.type;if(d in o.g){var p=o.g[d],A=Array.prototype.indexOf.call(p,l,void 0),S;(S=0<=A)&&Array.prototype.splice.call(p,A,1),S&&(zs(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Ii(o,l,d,p){for(var A=0;A<o.length;++A){var S=o[A];if(!S.da&&S.listener==l&&S.capture==!!d&&S.ha==p)return A}return-1}var Ai="closure_lm_"+(1e6*Math.random()|0),bi={};function Xa(o,l,d,p,A){if(Array.isArray(l)){for(var S=0;S<l.length;S++)Xa(o,l[S],d,p,A);return null}return d=ec(d),o&&o[Hs]?o.K(l,d,h(p)?!!p.capture:!1,A):Jf(o,l,d,!1,p,A)}function Jf(o,l,d,p,A,S){if(!l)throw Error("Invalid event type");var O=h(A)?!!A.capture:!!A,ne=Ri(o);if(ne||(o[Ai]=ne=new Gs(o)),d=ne.add(l,d,p,O,S),d.proxy)return d;if(p=Zf(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)Kf||(A=O),A===void 0&&(A=!1),o.addEventListener(l.toString(),p,A);else if(o.attachEvent)o.attachEvent(Za(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Zf(){function o(d){return l.call(o.src,o.listener,d)}const l=ep;return o}function Ja(o,l,d,p,A){if(Array.isArray(l))for(var S=0;S<l.length;S++)Ja(o,l[S],d,p,A);else p=h(p)?!!p.capture:!!p,d=ec(d),o&&o[Hs]?(o=o.i,l=String(l).toString(),l in o.g&&(S=o.g[l],d=Ii(S,d,p,A),-1<d&&(zs(S[d]),Array.prototype.splice.call(S,d,1),S.length==0&&(delete o.g[l],o.h--)))):o&&(o=Ri(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Ii(l,d,p,A)),(d=-1<o?l[o]:null)&&Si(d))}function Si(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Hs])Ti(l.i,o);else{var d=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(d,p,o.capture):l.detachEvent?l.detachEvent(Za(d),p):l.addListener&&l.removeListener&&l.removeListener(p),(d=Ri(l))?(Ti(d,o),d.h==0&&(d.src=null,l[Ai]=null)):zs(o)}}}function Za(o){return o in bi?bi[o]:bi[o]="on"+o}function ep(o,l){if(o.da)o=!0;else{l=new Qn(l,this);var d=o.listener,p=o.ha||o.src;o.fa&&Si(o),o=d.call(p,l)}return o}function Ri(o){return o=o[Ai],o instanceof Gs?o:null}var Ci="__closure_events_fn_"+(1e9*Math.random()>>>0);function ec(o){return typeof o=="function"?o:(o[Ci]||(o[Ci]=function(l){return o.handleEvent(l)}),o[Ci])}function Ae(){At.call(this),this.i=new Gs(this),this.M=this,this.F=null}R(Ae,At),Ae.prototype[Hs]=!0,Ae.prototype.removeEventListener=function(o,l,d,p){Ja(this,o,l,d,p)};function Me(o,l){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new Ie(l,o);else if(l instanceof Ie)l.target=l.target||o;else{var A=l;l=new Ie(p,o),w(l,A)}if(A=!0,d)for(var S=d.length-1;0<=S;S--){var O=l.g=d[S];A=Ks(O,p,!0,l)&&A}if(O=l.g=o,A=Ks(O,p,!0,l)&&A,A=Ks(O,p,!1,l)&&A,d)for(S=0;S<d.length;S++)O=l.g=d[S],A=Ks(O,p,!1,l)&&A}Ae.prototype.N=function(){if(Ae.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],p=0;p<d.length;p++)zs(d[p]);delete o.g[l],o.h--}}this.F=null},Ae.prototype.K=function(o,l,d,p){return this.i.add(String(o),l,!1,d,p)},Ae.prototype.L=function(o,l,d,p){return this.i.add(String(o),l,!0,d,p)};function Ks(o,l,d,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,S=0;S<l.length;++S){var O=l[S];if(O&&!O.da&&O.capture==d){var ne=O.listener,ve=O.ha||O.src;O.fa&&Ti(o.i,O),A=ne.call(ve,p)!==!1&&A}}return A&&!p.defaultPrevented}function tc(o,l,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function nc(o){o.g=tc(()=>{o.g=null,o.i&&(o.i=!1,nc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class tp extends At{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:nc(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yn(o){At.call(this),this.h=o,this.g={}}R(Yn,At);var sc=[];function rc(o){U(o.g,function(l,d){this.g.hasOwnProperty(d)&&Si(l)},o),o.g={}}Yn.prototype.N=function(){Yn.aa.N.call(this),rc(this)},Yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pi=c.JSON.stringify,np=c.JSON.parse,sp=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Ni(){}Ni.prototype.h=null;function ic(o){return o.h||(o.h=o.i())}function oc(){}var Xn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mi(){Ie.call(this,"d")}R(Mi,Ie);function ki(){Ie.call(this,"c")}R(ki,Ie);var zt={},ac=null;function Qs(){return ac=ac||new Ae}zt.La="serverreachability";function cc(o){Ie.call(this,zt.La,o)}R(cc,Ie);function Jn(o){const l=Qs();Me(l,new cc(l))}zt.STAT_EVENT="statevent";function lc(o,l){Ie.call(this,zt.STAT_EVENT,o),this.stat=l}R(lc,Ie);function ke(o){const l=Qs();Me(l,new lc(l,o))}zt.Ma="timingevent";function uc(o,l){Ie.call(this,zt.Ma,o),this.size=l}R(uc,Ie);function Zn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function es(){this.g=!0}es.prototype.xa=function(){this.g=!1};function rp(o,l,d,p,A,S){o.info(function(){if(o.g)if(S)for(var O="",ne=S.split("&"),ve=0;ve<ne.length;ve++){var Z=ne[ve].split("=");if(1<Z.length){var be=Z[0];Z=Z[1];var Se=be.split("_");O=2<=Se.length&&Se[1]=="type"?O+(be+"="+Z+"&"):O+(be+"=redacted&")}}else O=null;else O=S;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+l+`
`+d+`
`+O})}function ip(o,l,d,p,A,S,O){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+l+`
`+d+`
`+S+" "+O})}function pn(o,l,d,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+ap(o,d)+(p?" "+p:"")})}function op(o,l){o.info(function(){return"TIMEOUT: "+l})}es.prototype.info=function(){};function ap(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var A=p[1];if(Array.isArray(A)&&!(1>A.length)){var S=A[0];if(S!="noop"&&S!="stop"&&S!="close")for(var O=1;O<A.length;O++)A[O]=""}}}}return Pi(d)}catch{return l}}var Ys={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},hc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Oi;function Xs(){}R(Xs,Ni),Xs.prototype.g=function(){return new XMLHttpRequest},Xs.prototype.i=function(){return{}},Oi=new Xs;function bt(o,l,d,p){this.j=o,this.i=l,this.l=d,this.R=p||1,this.U=new Yn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new dc}function dc(){this.i=null,this.g="",this.h=!1}var fc={},Di={};function Vi(o,l,d){o.L=1,o.v=tr(ht(l)),o.m=d,o.P=!0,pc(o,null)}function pc(o,l){o.F=Date.now(),Js(o),o.A=ht(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Cc(d.i,"t",p),o.C=0,d=o.j.J,o.h=new dc,o.g=zc(o.j,d?l:null,!o.m),0<o.O&&(o.M=new tp(_(o.Y,o,o.g),o.O)),l=o.U,d=o.g,p=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(sc[0]=A.toString()),A=sc);for(var S=0;S<A.length;S++){var O=Xa(d,A[S],p||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Jn(),rp(o.i,o.u,o.A,o.l,o.R,o.m)}bt.prototype.ca=function(o){o=o.target;const l=this.M;l&&dt(o)==3?l.j():this.Y(o)},bt.prototype.Y=function(o){try{if(o==this.g)e:{const Se=dt(this.g);var l=this.g.Ba();const _n=this.g.Z();if(!(3>Se)&&(Se!=3||this.g&&(this.h.h||this.g.oa()||Vc(this.g)))){this.J||Se!=4||l==7||(l==8||0>=_n?Jn(3):Jn(2)),xi(this);var d=this.g.Z();this.X=d;t:if(gc(this)){var p=Vc(this.g);o="";var A=p.length,S=dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gt(this),ts(this);var O="";break t}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,o+=this.h.i.decode(p[l],{stream:!(S&&l==A-1)});p.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,ip(this.i,this.u,this.A,this.l,this.R,Se,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ne,ve=this.g;if((ne=ve.g?ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(ne)){var Z=ne;break t}}Z=null}if(d=Z)pn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Li(this,d);else{this.o=!1,this.s=3,ke(12),Gt(this),ts(this);break e}}if(this.P){d=!0;let We;for(;!this.J&&this.C<O.length;)if(We=cp(this,O),We==Di){Se==4&&(this.s=4,ke(14),d=!1),pn(this.i,this.l,null,"[Incomplete Response]");break}else if(We==fc){this.s=4,ke(15),pn(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else pn(this.i,this.l,We,null),Li(this,We);if(gc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||O.length!=0||this.h.h||(this.s=1,ke(16),d=!1),this.o=this.o&&d,!d)pn(this.i,this.l,O,"[Invalid Chunked Response]"),Gt(this),ts(this);else if(0<O.length&&!this.W){this.W=!0;var be=this.j;be.g==this&&be.ba&&!be.M&&(be.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),$i(be),be.M=!0,ke(11))}}else pn(this.i,this.l,O,null),Li(this,O);Se==4&&Gt(this),this.o&&!this.J&&(Se==4?qc(this.j,this):(this.o=!1,Js(this)))}else bp(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),Gt(this),ts(this)}}}catch{}finally{}};function gc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function cp(o,l){var d=o.C,p=l.indexOf(`
`,d);return p==-1?Di:(d=Number(l.substring(d,p)),isNaN(d)?fc:(p+=1,p+d>l.length?Di:(l=l.slice(p,p+d),o.C=p+d,l)))}bt.prototype.cancel=function(){this.J=!0,Gt(this)};function Js(o){o.S=Date.now()+o.I,mc(o,o.I)}function mc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Zn(_(o.ba,o),l)}function xi(o){o.B&&(c.clearTimeout(o.B),o.B=null)}bt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(op(this.i,this.A),this.L!=2&&(Jn(),ke(17)),Gt(this),this.s=2,ts(this)):mc(this,this.S-o)};function ts(o){o.j.G==0||o.J||qc(o.j,o)}function Gt(o){xi(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,rc(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Li(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||Fi(d.h,o))){if(!o.K&&Fi(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ar(d),ir(d);else break e;qi(d),ke(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=Zn(_(d.Za,d),6e3));if(1>=vc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Qt(d,11)}else if((o.K||d.g==o)&&ar(d),!F(l))for(A=d.Da.g.parse(l),l=0;l<A.length;l++){let Z=A[l];if(d.T=Z[0],Z=Z[1],d.G==2)if(Z[0]=="c"){d.K=Z[1],d.ia=Z[2];const be=Z[3];be!=null&&(d.la=be,d.j.info("VER="+d.la));const Se=Z[4];Se!=null&&(d.Aa=Se,d.j.info("SVER="+d.Aa));const _n=Z[5];_n!=null&&typeof _n=="number"&&0<_n&&(p=1.5*_n,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const We=o.g;if(We){const lr=We.g?We.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(lr){var S=p.h;S.g||lr.indexOf("spdy")==-1&&lr.indexOf("quic")==-1&&lr.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Ui(S,S.h),S.h=null))}if(p.D){const Wi=We.g?We.g.getResponseHeader("X-HTTP-Session-Id"):null;Wi&&(p.ya=Wi,ie(p.I,p.D,Wi))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var O=o;if(p.qa=Hc(p,p.J?p.ia:null,p.W),O.K){wc(p.h,O);var ne=O,ve=p.L;ve&&(ne.I=ve),ne.B&&(xi(ne),Js(ne)),p.g=O}else jc(p);0<d.i.length&&or(d)}else Z[0]!="stop"&&Z[0]!="close"||Qt(d,7);else d.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?Qt(d,7):Bi(d):Z[0]!="noop"&&d.l&&d.l.ta(Z),d.v=0)}}Jn(4)}catch{}}var lp=class{constructor(o,l){this.g=o,this.map=l}};function _c(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function vc(o){return o.h?1:o.g?o.g.size:0}function Fi(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Ui(o,l){o.g?o.g.add(l):o.h=l}function wc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}_c.prototype.cancel=function(){if(this.i=Ec(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ec(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return k(o.i)}function up(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],d=o.length,p=0;p<d;p++)l.push(o[p]);return l}l=[],d=0;for(p in o)l[d++]=o[p];return l}function hp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const p in o)l[d++]=p;return l}}}function Tc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=hp(o),p=up(o),A=p.length,S=0;S<A;S++)l.call(void 0,p[S],d&&d[S],o)}var Ic=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dp(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),A=null;if(0<=p){var S=o[d].substring(0,p);A=o[d].substring(p+1)}else S=o[d];l(S,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Kt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Kt){this.h=o.h,Zs(this,o.j),this.o=o.o,this.g=o.g,er(this,o.s),this.l=o.l;var l=o.i,d=new rs;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Ac(this,d),this.m=o.m}else o&&(l=String(o).match(Ic))?(this.h=!1,Zs(this,l[1]||"",!0),this.o=ns(l[2]||""),this.g=ns(l[3]||"",!0),er(this,l[4]),this.l=ns(l[5]||"",!0),Ac(this,l[6]||"",!0),this.m=ns(l[7]||"")):(this.h=!1,this.i=new rs(null,this.h))}Kt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(ss(l,bc,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(ss(l,bc,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(ss(d,d.charAt(0)=="/"?gp:pp,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",ss(d,_p)),o.join("")};function ht(o){return new Kt(o)}function Zs(o,l,d){o.j=d?ns(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function er(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Ac(o,l,d){l instanceof rs?(o.i=l,yp(o.i,o.h)):(d||(l=ss(l,mp)),o.i=new rs(l,o.h))}function ie(o,l,d){o.i.set(l,d)}function tr(o){return ie(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ns(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ss(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,fp),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function fp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var bc=/[#\/\?@]/g,pp=/[#\?:]/g,gp=/[#\?]/g,mp=/[#\?@]/g,_p=/#/g;function rs(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function St(o){o.g||(o.g=new Map,o.h=0,o.i&&dp(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=rs.prototype,n.add=function(o,l){St(this),this.i=null,o=gn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function Sc(o,l){St(o),l=gn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Rc(o,l){return St(o),l=gn(o,l),o.g.has(l)}n.forEach=function(o,l){St(this),this.g.forEach(function(d,p){d.forEach(function(A){o.call(l,A,p,this)},this)},this)},n.na=function(){St(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let p=0;p<l.length;p++){const A=o[p];for(let S=0;S<A.length;S++)d.push(l[p])}return d},n.V=function(o){St(this);let l=[];if(typeof o=="string")Rc(this,o)&&(l=l.concat(this.g.get(gn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},n.set=function(o,l){return St(this),this.i=null,o=gn(this,o),Rc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Cc(o,l,d){Sc(o,l),0<d.length&&(o.i=null,o.g.set(gn(o,l),k(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var p=l[d];const S=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var A=S;O[p]!==""&&(A+="="+encodeURIComponent(String(O[p]))),o.push(A)}}return this.i=o.join("&")};function gn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function yp(o,l){l&&!o.j&&(St(o),o.i=null,o.g.forEach(function(d,p){var A=p.toLowerCase();p!=A&&(Sc(this,p),Cc(this,A,d))},o)),o.j=l}function vp(o,l){const d=new es;if(c.Image){const p=new Image;p.onload=T(Rt,d,"TestLoadImage: loaded",!0,l,p),p.onerror=T(Rt,d,"TestLoadImage: error",!1,l,p),p.onabort=T(Rt,d,"TestLoadImage: abort",!1,l,p),p.ontimeout=T(Rt,d,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function wp(o,l){const d=new es,p=new AbortController,A=setTimeout(()=>{p.abort(),Rt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(A),S.ok?Rt(d,"TestPingServer: ok",!0,l):Rt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Rt(d,"TestPingServer: error",!1,l)})}function Rt(o,l,d,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(d)}catch{}}function Ep(){this.g=new sp}function Tp(o,l,d){const p=d||"";try{Tc(o,function(A,S){let O=A;h(A)&&(O=Pi(A)),l.push(p+S+"="+encodeURIComponent(O))})}catch(A){throw l.push(p+"type="+encodeURIComponent("_badmap")),A}}function nr(o){this.l=o.Ub||null,this.j=o.eb||!1}R(nr,Ni),nr.prototype.g=function(){return new sr(this.l,this.j)},nr.prototype.i=function(o){return function(){return o}}({});function sr(o,l){Ae.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(sr,Ae),n=sr.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,os(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,is(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,os(this)),this.g&&(this.readyState=3,os(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?is(this):os(this),this.readyState==3&&Pc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,is(this))},n.Qa=function(o){this.g&&(this.response=o,is(this))},n.ga=function(){this.g&&is(this)};function is(o){o.readyState=4,o.l=null,o.j=null,o.v=null,os(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function os(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(sr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Nc(o){let l="";return U(o,function(d,p){l+=p,l+=":",l+=d,l+=`\r
`}),l}function ji(o,l,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Nc(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ie(o,l,d))}function ue(o){Ae.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(ue,Ae);var Ip=/^https?$/i,Ap=["POST","PUT"];n=ue.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Oi.g(),this.v=this.o?ic(this.o):ic(Oi),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){Mc(this,S);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)d.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())d.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),A=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ap,l,void 0))||p||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,O]of d)this.g.setRequestHeader(S,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Dc(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){Mc(this,S)}};function Mc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,kc(o),rr(o)}function kc(o){o.A||(o.A=!0,Me(o,"complete"),Me(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Me(this,"complete"),Me(this,"abort"),rr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rr(this,!0)),ue.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Oc(this):this.bb())},n.bb=function(){Oc(this)};function Oc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||dt(o)!=4||o.Z()!=2)){if(o.u&&dt(o)==4)tc(o.Ea,0,o);else if(Me(o,"readystatechange"),dt(o)==4){o.h=!1;try{const O=o.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var p;if(p=O===0){var A=String(o.D).match(Ic)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),p=!Ip.test(A?A.toLowerCase():"")}d=p}if(d)Me(o,"complete"),Me(o,"success");else{o.m=6;try{var S=2<dt(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",kc(o)}}finally{rr(o)}}}}function rr(o,l){if(o.g){Dc(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Me(o,"ready");try{d.onreadystatechange=p}catch{}}}function Dc(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function dt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<dt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),np(l)}};function Vc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function bp(o){const l={};o=(o.g&&2<=dt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(F(o[p]))continue;var d=I(o[p]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=l[A]||[];l[A]=S,S.push(d)}E(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function as(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function xc(o){this.Aa=0,this.i=[],this.j=new es,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=as("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=as("baseRetryDelayMs",5e3,o),this.cb=as("retryDelaySeedMs",1e4,o),this.Wa=as("forwardChannelMaxRetries",2,o),this.wa=as("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new _c(o&&o.concurrentRequestLimit),this.Da=new Ep,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=xc.prototype,n.la=8,n.G=1,n.connect=function(o,l,d,p){ke(0),this.W=o,this.H=l||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Hc(this,null,this.W),or(this)};function Bi(o){if(Lc(o),o.G==3){var l=o.U++,d=ht(o.I);if(ie(d,"SID",o.K),ie(d,"RID",l),ie(d,"TYPE","terminate"),cs(o,d),l=new bt(o,o.j,l),l.L=2,l.v=tr(ht(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=zc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Js(l)}Wc(o)}function ir(o){o.g&&($i(o),o.g.cancel(),o.g=null)}function Lc(o){ir(o),o.u&&(c.clearTimeout(o.u),o.u=null),ar(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function or(o){if(!yc(o.h)&&!o.s){o.s=!0;var l=o.Ga;Gn||Ya(),Kn||(Gn(),Kn=!0),Ei.add(l,o),o.B=0}}function Sp(o,l){return vc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Zn(_(o.Ga,o,l),$c(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new bt(this,this.j,o);let S=this.o;if(this.S&&(S?(S=m(S),w(S,this.S)):S=this.S),this.m!==null||this.O||(A.H=S,S=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Uc(this,A,l),d=ht(this.I),ie(d,"RID",o),ie(d,"CVER",22),this.D&&ie(d,"X-HTTP-Session-Id",this.D),cs(this,d),S&&(this.O?l="headers="+encodeURIComponent(String(Nc(S)))+"&"+l:this.m&&ji(d,this.m,S)),Ui(this.h,A),this.Ua&&ie(d,"TYPE","init"),this.P?(ie(d,"$req",l),ie(d,"SID","null"),A.T=!0,Vi(A,d,null)):Vi(A,d,l),this.G=2}}else this.G==3&&(o?Fc(this,o):this.i.length==0||yc(this.h)||Fc(this))};function Fc(o,l){var d;l?d=l.l:d=o.U++;const p=ht(o.I);ie(p,"SID",o.K),ie(p,"RID",d),ie(p,"AID",o.T),cs(o,p),o.m&&o.o&&ji(p,o.m,o.o),d=new bt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Uc(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ui(o.h,d),Vi(d,p,l)}function cs(o,l){o.H&&U(o.H,function(d,p){ie(l,p,d)}),o.l&&Tc({},function(d,p){ie(l,p,d)})}function Uc(o,l,d){d=Math.min(o.i.length,d);var p=o.l?_(o.l.Na,o.l,o):null;e:{var A=o.i;let S=-1;for(;;){const O=["count="+d];S==-1?0<d?(S=A[0].g,O.push("ofs="+S)):S=0:O.push("ofs="+S);let ne=!0;for(let ve=0;ve<d;ve++){let Z=A[ve].g;const be=A[ve].map;if(Z-=S,0>Z)S=Math.max(0,A[ve].g-100),ne=!1;else try{Tp(be,O,"req"+Z+"_")}catch{p&&p(be)}}if(ne){p=O.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,p}function jc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Gn||Ya(),Kn||(Gn(),Kn=!0),Ei.add(l,o),o.v=0}}function qi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Zn(_(o.Fa,o),$c(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Bc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Zn(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),ir(this),Bc(this))};function $i(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Bc(o){o.g=new bt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=ht(o.qa);ie(l,"RID","rpc"),ie(l,"SID",o.K),ie(l,"AID",o.T),ie(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&ie(l,"TO",o.ja),ie(l,"TYPE","xmlhttp"),cs(o,l),o.m&&o.o&&ji(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=tr(ht(l)),d.m=null,d.P=!0,pc(d,o)}n.Za=function(){this.C!=null&&(this.C=null,ir(this),qi(this),ke(19))};function ar(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function qc(o,l){var d=null;if(o.g==l){ar(o),$i(o),o.g=null;var p=2}else if(Fi(o.h,l))d=l.D,wc(o.h,l),p=1;else return;if(o.G!=0){if(l.o)if(p==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var A=o.B;p=Qs(),Me(p,new uc(p,d)),or(o)}else jc(o);else if(A=l.s,A==3||A==0&&0<l.X||!(p==1&&Sp(o,l)||p==2&&qi(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),A){case 1:Qt(o,5);break;case 4:Qt(o,10);break;case 3:Qt(o,6);break;default:Qt(o,2)}}}function $c(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function Qt(o,l){if(o.j.info("Error code "+l),l==2){var d=_(o.fb,o),p=o.Xa;const A=!p;p=new Kt(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Zs(p,"https"),tr(p),A?vp(p.toString(),d):wp(p.toString(),d)}else ke(2);o.G=0,o.l&&o.l.sa(l),Wc(o),Lc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function Wc(o){if(o.G=0,o.ka=[],o.l){const l=Ec(o.h);(l.length!=0||o.i.length!=0)&&(P(o.ka,l),P(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function Hc(o,l,d){var p=d instanceof Kt?ht(d):new Kt(d);if(p.g!="")l&&(p.g=l+"."+p.g),er(p,p.s);else{var A=c.location;p=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var S=new Kt(null);p&&Zs(S,p),l&&(S.g=l),A&&er(S,A),d&&(S.l=d),p=S}return d=o.D,l=o.ya,d&&l&&ie(p,d,l),ie(p,"VER",o.la),cs(o,p),p}function zc(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ue(new nr({eb:d})):new ue(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gc(){}n=Gc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function cr(){}cr.prototype.g=function(o,l){return new xe(o,l)};function xe(o,l){Ae.call(this),this.g=new xc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!F(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!F(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new mn(this)}R(xe,Ae),xe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xe.prototype.close=function(){Bi(this.g)},xe.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Pi(o),o=d);l.i.push(new lp(l.Ya++,o)),l.G==3&&or(l)},xe.prototype.N=function(){this.g.l=null,delete this.j,Bi(this.g),delete this.g,xe.aa.N.call(this)};function Kc(o){Mi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}R(Kc,Mi);function Qc(){ki.call(this),this.status=1}R(Qc,ki);function mn(o){this.g=o}R(mn,Gc),mn.prototype.ua=function(){Me(this.g,"a")},mn.prototype.ta=function(o){Me(this.g,new Kc(o))},mn.prototype.sa=function(o){Me(this.g,new Qc)},mn.prototype.ra=function(){Me(this.g,"b")},cr.prototype.createWebChannel=cr.prototype.g,xe.prototype.send=xe.prototype.o,xe.prototype.open=xe.prototype.m,xe.prototype.close=xe.prototype.close,th=function(){return new cr},eh=function(){return Qs()},Zu=zt,yo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ys.NO_ERROR=0,Ys.TIMEOUT=8,Ys.HTTP_ERROR=6,Er=Ys,hc.COMPLETE="complete",Ju=hc,oc.EventType=Xn,Xn.OPEN="a",Xn.CLOSE="b",Xn.ERROR="c",Xn.MESSAGE="d",Ae.prototype.listen=Ae.prototype.K,hs=oc,ue.prototype.listenOnce=ue.prototype.L,ue.prototype.getLastError=ue.prototype.Ka,ue.prototype.getLastErrorCode=ue.prototype.Ba,ue.prototype.getStatus=ue.prototype.Z,ue.prototype.getResponseJson=ue.prototype.Oa,ue.prototype.getResponseText=ue.prototype.oa,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Ha,Xu=ue}).apply(typeof ur<"u"?ur:typeof self<"u"?self:typeof window<"u"?window:{});const ul="@firebase/firestore",hl="4.8.0";/**
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
 */let jn="11.10.0";/**
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
 */const on=new Ko("@firebase/firestore");function vn(){return on.logLevel}function V(n,...e){if(on.logLevel<=Y.DEBUG){const t=e.map(Xo);on.debug(`Firestore (${jn}): ${n}`,...t)}}function wt(n,...e){if(on.logLevel<=Y.ERROR){const t=e.map(Xo);on.error(`Firestore (${jn}): ${n}`,...t)}}function Ut(n,...e){if(on.logLevel<=Y.WARN){const t=e.map(Xo);on.warn(`Firestore (${jn}): ${n}`,...t)}}function Xo(n){if(typeof n=="string")return n;try{/**
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
 */function B(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,nh(n,s,t)}function nh(n,e,t){let s=`FIRESTORE (${jn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw wt(s),new Error(s)}function te(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||nh(e,r,s)}function K(n,e){return n}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends It{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class sh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ym{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ce.UNAUTHENTICATED))}shutdown(){}}class vm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class wm{constructor(e){this.t=e,this.currentUser=Ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){te(this.o===void 0,42304);let s=this.i;const r=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let i=new Lt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Lt,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},c=u=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Lt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(te(typeof s.accessToken=="string",31837,{l:s}),new sh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string",2055,{h:e}),new Ce(e)}}class Em{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ce.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Tm{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Em(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Im{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,je(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){te(this.o===void 0,3512);const s=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new dl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(te(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new dl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Am(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function rh(){return new TextEncoder}/**
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
 */class Jo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=Am(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function Q(n,e){return n<e?-1:n>e?1:0}function vo(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),r=e.codePointAt(t);if(s!==r){if(s<128&&r<128)return Q(s,r);{const i=rh(),a=bm(i.encode(fl(n,t)),i.encode(fl(e,t)));return a!==0?a:Q(s,r)}}t+=s>65535?2:1}return Q(n.length,e.length)}function fl(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function bm(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Q(n[t],e[t]);return Q(n.length,e.length)}function Nn(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
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
 */const pl="__name__";class et{constructor(e,t,s){t===void 0?t=0:t>e.length&&B(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&B(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return et.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof et?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=et.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return Q(e.length,t.length)}static compareSegments(e,t){const s=et.isNumericId(e),r=et.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?et.extractNumericId(e).compare(et.extractNumericId(t)):vo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xt.fromString(e.substring(4,e.length-2))}}class ce extends et{construct(e,t,s){return new ce(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new L(N.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new ce(t)}static emptyPath(){return new ce([])}}const Sm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends et{construct(e,t,s){return new Ee(e,t,s)}static isValidIdentifier(e){return Sm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pl}static keyField(){return new Ee([pl])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new L(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new L(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(i(),r++)}if(i(),a)throw new L(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(t)}static emptyPath(){return new Ee([])}}/**
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
 */function Rm(n,e,t){if(!t)throw new L(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Cm(n,e,t,s){if(e===!0&&s===!0)throw new L(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function gl(n){if(!j.isDocumentKey(n))throw new L(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ih(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Zo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B(12329,{type:typeof n})}function As(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Zo(n);throw new L(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function fe(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ls(n,e){if(!ih(n))throw new L(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new L(N.INVALID_ARGUMENT,t);return!0}/**
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
 */const ml=-62135596800,_l=1e6;class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*_l);return new ae(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ml)throw new L(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_l}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ls(e,ae._jsonSchema))return new ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ml;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ae._jsonSchemaVersion="firestore/timestamp/1.0",ae._jsonSchema={type:fe("string",ae._jsonSchemaVersion),seconds:fe("number"),nanoseconds:fe("number")};/**
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
 */class W{static fromTimestamp(e){return new W(e)}static min(){return new W(new ae(0,0))}static max(){return new W(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const bs=-1;function Pm(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=W.fromTimestamp(s===1e9?new ae(t+1,0):new ae(t,s));return new jt(r,j.empty(),e)}function Nm(n){return new jt(n.readTime,n.key,bs)}class jt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new jt(W.min(),j.empty(),bs)}static max(){return new jt(W.max(),j.empty(),bs)}}function Mm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
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
 */const km="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Om{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Bn(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==km)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,s)=>{t(e)})}static reject(e){return new C((t,s)=>{s(e)})}static waitFor(e){return new C((t,s)=>{let r=0,i=0,a=!1;e.forEach(c=>{++r,c.next(()=>{++i,a&&i===r&&t()},u=>s(u))}),a=!0,i===r&&t()})}static or(e){let t=C.resolve(!1);for(const s of e)t=t.next(r=>r?C.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new C((s,r)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++c,c===i&&s(a)},f=>r(f))}})}static doWhile(e,t){return new C((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}function Dm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function qn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ti{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}ti.ue=-1;/**
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
 */const ea=-1;function ni(n){return n==null}function Dr(n){return n===0&&1/n==-1/0}function Vm(n){return typeof n=="number"&&Number.isInteger(n)&&!Dr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const oh="";function xm(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=yl(e)),e=Lm(n.get(t),e);return yl(e)}function Lm(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case oh:t+="";break;default:t+=i}}return t}function yl(n){return n+oh+""}/**
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
 */function vl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function un(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ah(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class le{constructor(e,t){this.comparator=e,this.root=t||we.EMPTY}insert(e,t){return new le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hr(this.root,e,this.comparator,!1)}getReverseIterator(){return new hr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hr(this.root,e,this.comparator,!0)}}class hr{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??we.RED,this.left=r??we.EMPTY,this.right=i??we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new we(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return we.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw B(43730,{key:this.key,value:this.value});if(this.right.isRed())throw B(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw B(27949);return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw B(57766)}get value(){throw B(16141)}get color(){throw B(16727)}get left(){throw B(29726)}get right(){throw B(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new we(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class me{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wl(this.data.getIterator())}getIteratorFrom(e){return new wl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new me(this.comparator);return t.data=e,t}}class wl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qe{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new Qe([])}unionWith(e){let t=new me(Ee.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Nn(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class ch extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ch("Invalid base64 string: "+i):i}}(e);return new Te(t)}static fromUint8Array(e){const t=function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i}(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const Fm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bt(n){if(te(!!n,39018),typeof n=="string"){let e=0;const t=Fm.exec(n);if(te(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:he(n.seconds),nanos:he(n.nanos)}}function he(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function qt(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
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
 */const lh="server_timestamp",uh="__type__",hh="__previous_value__",dh="__local_write_time__";function ta(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[uh])===null||t===void 0?void 0:t.stringValue)===lh}function si(n){const e=n.mapValue.fields[hh];return ta(e)?si(e):e}function Ss(n){const e=Bt(n.mapValue.fields[dh].timestampValue);return new ae(e.seconds,e.nanos)}/**
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
 */class Um{constructor(e,t,s,r,i,a,c,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const Vr="(default)";class Rs{constructor(e,t){this.projectId=e,this.database=t||Vr}static empty(){return new Rs("","")}get isDefaultDatabase(){return this.database===Vr}isEqual(e){return e instanceof Rs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const fh="__type__",jm="__max__",dr={mapValue:{}},ph="__vector__",xr="value";function $t(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ta(n)?4:qm(n)?9007199254740991:Bm(n)?10:11:B(28295,{value:n})}function at(n,e){if(n===e)return!0;const t=$t(n);if(t!==$t(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ss(n).isEqual(Ss(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=Bt(r.timestampValue),c=Bt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return qt(r.bytesValue).isEqual(qt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return he(r.geoPointValue.latitude)===he(i.geoPointValue.latitude)&&he(r.geoPointValue.longitude)===he(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return he(r.integerValue)===he(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=he(r.doubleValue),c=he(i.doubleValue);return a===c?Dr(a)===Dr(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Nn(n.arrayValue.values||[],e.arrayValue.values||[],at);case 10:case 11:return function(r,i){const a=r.mapValue.fields||{},c=i.mapValue.fields||{};if(vl(a)!==vl(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!at(a[u],c[u])))return!1;return!0}(n,e);default:return B(52216,{left:n})}}function Cs(n,e){return(n.values||[]).find(t=>at(t,e))!==void 0}function Mn(n,e){if(n===e)return 0;const t=$t(n),s=$t(e);if(t!==s)return Q(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=he(i.integerValue||i.doubleValue),u=he(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return El(n.timestampValue,e.timestampValue);case 4:return El(Ss(n),Ss(e));case 5:return vo(n.stringValue,e.stringValue);case 6:return function(i,a){const c=qt(i),u=qt(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=Q(c[h],u[h]);if(f!==0)return f}return Q(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=Q(he(i.latitude),he(a.latitude));return c!==0?c:Q(he(i.longitude),he(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Tl(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,u,h,f;const g=i.fields||{},_=a.fields||{},T=(c=g[xr])===null||c===void 0?void 0:c.arrayValue,R=(u=_[xr])===null||u===void 0?void 0:u.arrayValue,k=Q(((h=T?.values)===null||h===void 0?void 0:h.length)||0,((f=R?.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:Tl(T,R)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===dr.mapValue&&a===dr.mapValue)return 0;if(i===dr.mapValue)return 1;if(a===dr.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const _=vo(u[g],f[g]);if(_!==0)return _;const T=Mn(c[u[g]],h[f[g]]);if(T!==0)return T}return Q(u.length,f.length)}(n.mapValue,e.mapValue);default:throw B(23264,{le:t})}}function El(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=Bt(n),s=Bt(e),r=Q(t.seconds,s.seconds);return r!==0?r:Q(t.nanos,s.nanos)}function Tl(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=Mn(t[r],s[r]);if(i)return i}return Q(t.length,s.length)}function kn(n){return wo(n)}function wo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Bt(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return qt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return j.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=wo(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${wo(t.fields[a])}`;return r+"}"}(n.mapValue):B(61005,{value:n})}function Tr(n){switch($t(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=si(n);return e?16+Tr(e):16;case 5:return 2*n.stringValue.length;case 6:return qt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+Tr(i),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return un(s.fields,(i,a)=>{r+=i.length+Tr(a)}),r}(n.mapValue);default:throw B(13486,{value:n})}}function Eo(n){return!!n&&"integerValue"in n}function na(n){return!!n&&"arrayValue"in n}function Il(n){return!!n&&"nullValue"in n}function Al(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ir(n){return!!n&&"mapValue"in n}function Bm(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[fh])===null||t===void 0?void 0:t.stringValue)===ph}function _s(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return un(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=_s(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=_s(n.arrayValue.values[t]);return e}return Object.assign({},n)}function qm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===jm}/**
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
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ir(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_s(t)}setAll(e){let t=Ee.emptyPath(),s={},r=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,s,r),s={},r=[],t=c.popLast()}a?s[c.lastSegment()]=_s(a):r.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Ir(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return at(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Ir(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){un(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Be(_s(this.value))}}function gh(n){const e=[];return un(n.fields,(t,s)=>{const r=new Ee([t]);if(Ir(s)){const i=gh(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)}),new Qe(e)}/**
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
 */class Pe{constructor(e,t,s,r,i,a,c){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Pe(e,0,W.min(),W.min(),W.min(),Be.empty(),0)}static newFoundDocument(e,t,s,r){return new Pe(e,1,t,W.min(),s,r,0)}static newNoDocument(e,t){return new Pe(e,2,t,W.min(),W.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new Pe(e,3,t,W.min(),W.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lr{constructor(e,t){this.position=e,this.inclusive=t}}function bl(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],a=n.position[r];if(i.field.isKeyField()?s=j.comparator(j.fromName(a.referenceValue),t.key):s=Mn(a,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Sl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!at(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Fr{constructor(e,t="asc"){this.field=e,this.dir=t}}function $m(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class mh{}class pe extends mh{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Hm(e,t,s):t==="array-contains"?new Km(e,s):t==="in"?new Qm(e,s):t==="not-in"?new Ym(e,s):t==="array-contains-any"?new Xm(e,s):new pe(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new zm(e,s):new Gm(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Mn(t,this.value)):t!==null&&$t(this.value)===$t(t)&&this.matchesComparison(Mn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ct extends mh{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new ct(e,t)}matches(e){return _h(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function _h(n){return n.op==="and"}function yh(n){return Wm(n)&&_h(n)}function Wm(n){for(const e of n.filters)if(e instanceof ct)return!1;return!0}function To(n){if(n instanceof pe)return n.field.canonicalString()+n.op.toString()+kn(n.value);if(yh(n))return n.filters.map(e=>To(e)).join(",");{const e=n.filters.map(t=>To(t)).join(",");return`${n.op}(${e})`}}function vh(n,e){return n instanceof pe?function(s,r){return r instanceof pe&&s.op===r.op&&s.field.isEqual(r.field)&&at(s.value,r.value)}(n,e):n instanceof ct?function(s,r){return r instanceof ct&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,a,c)=>i&&vh(a,r.filters[c]),!0):!1}(n,e):void B(19439)}function wh(n){return n instanceof pe?function(t){return`${t.field.canonicalString()} ${t.op} ${kn(t.value)}`}(n):n instanceof ct?function(t){return t.op.toString()+" {"+t.getFilters().map(wh).join(" ,")+"}"}(n):"Filter"}class Hm extends pe{constructor(e,t,s){super(e,t,s),this.key=j.fromName(s.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class zm extends pe{constructor(e,t){super(e,"in",t),this.keys=Eh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Gm extends pe{constructor(e,t){super(e,"not-in",t),this.keys=Eh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Eh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>j.fromName(s.referenceValue))}class Km extends pe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return na(t)&&Cs(t.arrayValue,this.value)}}class Qm extends pe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Cs(this.value.arrayValue,t)}}class Ym extends pe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Cs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Cs(this.value.arrayValue,t)}}class Xm extends pe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!na(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Cs(this.value.arrayValue,s))}}/**
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
 */class Jm{constructor(e,t=null,s=[],r=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function Rl(n,e=null,t=[],s=[],r=null,i=null,a=null){return new Jm(n,e,t,s,r,i,a)}function sa(n){const e=K(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>To(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),ni(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>kn(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>kn(s)).join(",")),e.Pe=t}return e.Pe}function ra(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!$m(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!vh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Sl(n.startAt,e.startAt)&&Sl(n.endAt,e.endAt)}function Io(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ri{constructor(e,t=null,s=[],r=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Zm(n,e,t,s,r,i,a,c){return new ri(n,e,t,s,r,i,a,c)}function ia(n){return new ri(n)}function Cl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function e_(n){return n.collectionGroup!==null}function ys(n){const e=K(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new me(Ee.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Fr(i,s))}),t.has(Ee.keyField().canonicalString())||e.Te.push(new Fr(Ee.keyField(),s))}return e.Te}function tt(n){const e=K(n);return e.Ie||(e.Ie=t_(e,ys(n))),e.Ie}function t_(n,e){if(n.limitType==="F")return Rl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Fr(r.field,i)});const t=n.endAt?new Lr(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Lr(n.startAt.position,n.startAt.inclusive):null;return Rl(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Ao(n,e,t){return new ri(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ii(n,e){return ra(tt(n),tt(e))&&n.limitType===e.limitType}function Th(n){return`${sa(tt(n))}|lt:${n.limitType}`}function wn(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>wh(r)).join(", ")}]`),ni(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>kn(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>kn(r)).join(",")),`Target(${s})`}(tt(n))}; limitType=${n.limitType})`}function oi(n,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):j.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,e)&&function(s,r){for(const i of ys(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(a,c,u){const h=bl(a,c,u);return a.inclusive?h<=0:h<0}(s.startAt,ys(s),r)||s.endAt&&!function(a,c,u){const h=bl(a,c,u);return a.inclusive?h>=0:h>0}(s.endAt,ys(s),r))}(n,e)}function n_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ih(n){return(e,t)=>{let s=!1;for(const r of ys(n)){const i=s_(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function s_(n,e,t){const s=n.field.isKeyField()?j.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),h=c.data.field(i);return u!==null&&h!==null?Mn(u,h):B(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return B(19790,{direction:n.dir})}}/**
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
 */class hn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){un(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return ah(this.inner)}size(){return this.innerSize}}/**
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
 */const r_=new le(j.comparator);function Et(){return r_}const Ah=new le(j.comparator);function ds(...n){let e=Ah;for(const t of n)e=e.insert(t.key,t);return e}function bh(n){let e=Ah;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Zt(){return vs()}function Sh(){return vs()}function vs(){return new hn(n=>n.toString(),(n,e)=>n.isEqual(e))}const i_=new le(j.comparator),o_=new me(j.comparator);function X(...n){let e=o_;for(const t of n)e=e.add(t);return e}const a_=new me(Q);function c_(){return a_}/**
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
 */function oa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dr(e)?"-0":e}}function Rh(n){return{integerValue:""+n}}function l_(n,e){return Vm(e)?Rh(e):oa(n,e)}/**
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
 */class ai{constructor(){this._=void 0}}function u_(n,e,t){return n instanceof Ur?function(r,i){const a={fields:{[uh]:{stringValue:lh},[dh]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&ta(i)&&(i=si(i)),i&&(a.fields[hh]=i),{mapValue:a}}(t,e):n instanceof Ps?Ph(n,e):n instanceof Ns?Nh(n,e):function(r,i){const a=Ch(r,i),c=Pl(a)+Pl(r.Ee);return Eo(a)&&Eo(r.Ee)?Rh(c):oa(r.serializer,c)}(n,e)}function h_(n,e,t){return n instanceof Ps?Ph(n,e):n instanceof Ns?Nh(n,e):t}function Ch(n,e){return n instanceof jr?function(s){return Eo(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Ur extends ai{}class Ps extends ai{constructor(e){super(),this.elements=e}}function Ph(n,e){const t=Mh(e);for(const s of n.elements)t.some(r=>at(r,s))||t.push(s);return{arrayValue:{values:t}}}class Ns extends ai{constructor(e){super(),this.elements=e}}function Nh(n,e){let t=Mh(e);for(const s of n.elements)t=t.filter(r=>!at(r,s));return{arrayValue:{values:t}}}class jr extends ai{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Pl(n){return he(n.integerValue||n.doubleValue)}function Mh(n){return na(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function d_(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof Ps&&r instanceof Ps||s instanceof Ns&&r instanceof Ns?Nn(s.elements,r.elements,at):s instanceof jr&&r instanceof jr?at(s.Ee,r.Ee):s instanceof Ur&&r instanceof Ur}(n.transform,e.transform)}class f_{constructor(e,t){this.version=e,this.transformResults=t}}class yt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new yt}static exists(e){return new yt(void 0,e)}static updateTime(e){return new yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ar(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ci{}function kh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Dh(n.key,yt.none()):new Fs(n.key,n.data,yt.none());{const t=n.data,s=Be.empty();let r=new me(Ee.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new dn(n.key,s,new Qe(r.toArray()),yt.none())}}function p_(n,e,t){n instanceof Fs?function(r,i,a){const c=r.value.clone(),u=Ml(r.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof dn?function(r,i,a){if(!Ar(r.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Ml(r.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Oh(r)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ws(n,e,t,s){return n instanceof Fs?function(i,a,c,u){if(!Ar(i.precondition,a))return c;const h=i.value.clone(),f=kl(i.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,s):n instanceof dn?function(i,a,c,u){if(!Ar(i.precondition,a))return c;const h=kl(i.fieldTransforms,u,a),f=a.data;return f.setAll(Oh(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,s):function(i,a,c){return Ar(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function g_(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=Ch(s.transform,r||null);i!=null&&(t===null&&(t=Be.empty()),t.set(s.field,i))}return t||null}function Nl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Nn(s,r,(i,a)=>d_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Fs extends ci{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class dn extends ci{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Oh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Ml(n,e,t){const s=new Map;te(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let r=0;r<t.length;r++){const i=n[r],a=i.transform,c=e.data.field(i.field);s.set(i.field,h_(a,c,t[r]))}return s}function kl(n,e,t){const s=new Map;for(const r of n){const i=r.transform,a=t.data.field(r.field);s.set(r.field,u_(i,a,e))}return s}class Dh extends ci{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class m_ extends ci{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class __{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&p_(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ws(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ws(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Sh();return this.mutations.forEach(r=>{const i=e.get(r.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(r.key)?null:c;const u=kh(a,c);u!==null&&s.set(r.key,u),a.isValidDocument()||a.convertToNoDocument(W.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),X())}isEqual(e){return this.batchId===e.batchId&&Nn(this.mutations,e.mutations,(t,s)=>Nl(t,s))&&Nn(this.baseMutations,e.baseMutations,(t,s)=>Nl(t,s))}}class aa{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){te(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let r=function(){return i_}();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new aa(e,t,s,r)}}/**
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
 */class y_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class v_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var de,J;function w_(n){switch(n){case N.OK:return B(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return B(15467,{code:n})}}function Vh(n){if(n===void 0)return wt("GRPC error has no .code"),N.UNKNOWN;switch(n){case de.OK:return N.OK;case de.CANCELLED:return N.CANCELLED;case de.UNKNOWN:return N.UNKNOWN;case de.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case de.INTERNAL:return N.INTERNAL;case de.UNAVAILABLE:return N.UNAVAILABLE;case de.UNAUTHENTICATED:return N.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case de.NOT_FOUND:return N.NOT_FOUND;case de.ALREADY_EXISTS:return N.ALREADY_EXISTS;case de.PERMISSION_DENIED:return N.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case de.ABORTED:return N.ABORTED;case de.OUT_OF_RANGE:return N.OUT_OF_RANGE;case de.UNIMPLEMENTED:return N.UNIMPLEMENTED;case de.DATA_LOSS:return N.DATA_LOSS;default:return B(39323,{code:n})}}(J=de||(de={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const E_=new xt([4294967295,4294967295],0);function Ol(n){const e=rh().encode(n),t=new Yu;return t.update(e),new Uint8Array(t.digest())}function Dl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new xt([t,s],0),new xt([r,i],0)]}class ca{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new fs(`Invalid padding: ${t}`);if(s<0)throw new fs(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new fs(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new fs(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=xt.fromNumber(this.fe)}pe(e,t,s){let r=e.add(t.multiply(xt.fromNumber(s)));return r.compare(E_)===1&&(r=new xt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Ol(e),[s,r]=Dl(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(s,r,i);if(!this.ye(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ca(i,r,t);return s.forEach(c=>a.insert(c)),a}insert(e){if(this.fe===0)return;const t=Ol(e),[s,r]=Dl(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(s,r,i);this.we(a)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class li{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Us.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new li(W.min(),r,new le(Q),Et(),X())}}class Us{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Us(s,t,X(),X(),X())}}/**
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
 */class br{constructor(e,t,s,r){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=r}}class xh{constructor(e,t){this.targetId=e,this.De=t}}class Lh{constructor(e,t,s=Te.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Vl{constructor(){this.ve=0,this.Ce=xl(),this.Fe=Te.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=X(),t=X(),s=X();return this.Ce.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:B(38017,{changeType:i})}}),new Us(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=xl()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,te(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class T_{constructor(e){this.We=e,this.Ge=new Map,this.ze=Et(),this.je=fr(),this.Je=fr(),this.He=new le(Q)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:B(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((s,r)=>{this.nt(r)&&t(r)})}it(e){const t=e.targetId,s=e.De.count,r=this.st(t);if(r){const i=r.target;if(Io(i))if(s===0){const a=new j(i.path);this.Xe(t,a,Pe.newNoDocument(a,W.min()))}else te(s===1,20013,{expectedCount:s});else{const a=this.ot(t);if(a!==s){const c=this._t(e),u=c?this.ut(c,e,a):1;if(u!==0){this.rt(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let a,c;try{a=qt(s).toUint8Array()}catch(u){if(u instanceof ch)return Ut("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new ca(a,r,i)}catch(u){return Ut(u instanceof fs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.fe===0?null:c}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),r++)}),r}Pt(e){const t=new Map;this.Ge.forEach((i,a)=>{const c=this.st(a);if(c){if(i.current&&Io(c.target)){const u=new j(c.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,Pe.newNoDocument(u,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}});let s=X();this.Je.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(s=s.add(i))}),this.ze.forEach((i,a)=>a.setReadTime(e));const r=new li(e,t,this.He,this.ze,s);return this.ze=Et(),this.je=fr(),this.Je=fr(),this.He=new le(Q),r}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const r=this.tt(e);this.It(e,t)?r.qe(t,1):r.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Vl,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new me(Q),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new me(Q),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Vl),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function fr(){return new le(j.comparator)}function xl(){return new le(j.comparator)}const I_={asc:"ASCENDING",desc:"DESCENDING"},A_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},b_={and:"AND",or:"OR"};class S_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function bo(n,e){return n.useProto3Json||ni(e)?e:{value:e}}function Br(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function R_(n,e){return Br(n,e.toTimestamp())}function nt(n){return te(!!n,49232),W.fromTimestamp(function(t){const s=Bt(t);return new ae(s.seconds,s.nanos)}(n))}function la(n,e){return So(n,e).canonicalString()}function So(n,e){const t=function(r){return new ce(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Uh(n){const e=ce.fromString(n);return te(Wh(e),10190,{key:e.toString()}),e}function Ro(n,e){return la(n.databaseId,e.path)}function Yi(n,e){const t=Uh(e);if(t.get(1)!==n.databaseId.projectId)throw new L(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j(Bh(t))}function jh(n,e){return la(n.databaseId,e)}function C_(n){const e=Uh(n);return e.length===4?ce.emptyPath():Bh(e)}function Co(n){return new ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Bh(n){return te(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ll(n,e,t){return{name:Ro(n,e),fields:t.value.mapValue.fields}}function P_(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:B(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(te(f===void 0||typeof f=="string",58123),Te.fromBase64String(f||"")):(te(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Te.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?N.UNKNOWN:Vh(h.code);return new L(f,h.message||"")}(a);t=new Lh(s,r,i,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Yi(n,s.document.name),i=nt(s.document.updateTime),a=s.document.createTime?nt(s.document.createTime):W.min(),c=new Be({mapValue:{fields:s.document.fields}}),u=Pe.newFoundDocument(r,i,a,c),h=s.targetIds||[],f=s.removedTargetIds||[];t=new br(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Yi(n,s.document),i=s.readTime?nt(s.readTime):W.min(),a=Pe.newNoDocument(r,i),c=s.removedTargetIds||[];t=new br([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Yi(n,s.document),i=s.removedTargetIds||[];t=new br([],i,r,null)}else{if(!("filter"in e))return B(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new v_(r,i),c=s.targetId;t=new xh(c,a)}}return t}function N_(n,e){let t;if(e instanceof Fs)t={update:Ll(n,e.key,e.value)};else if(e instanceof Dh)t={delete:Ro(n,e.key)};else if(e instanceof dn)t={update:Ll(n,e.key,e.data),updateMask:U_(e.fieldMask)};else{if(!(e instanceof m_))return B(16599,{Rt:e.type});t={verify:Ro(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,a){const c=a.transform;if(c instanceof Ur)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ps)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ns)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof jr)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw B(20930,{transform:a.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:R_(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B(27497)}(n,e.precondition)),t}function M_(n,e){return n&&n.length>0?(te(e!==void 0,14353),n.map(t=>function(r,i){let a=r.updateTime?nt(r.updateTime):nt(i);return a.isEqual(W.min())&&(a=nt(i)),new f_(a,r.transformResults||[])}(t,e))):[]}function k_(n,e){return{documents:[jh(n,e.path)]}}function O_(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=jh(n,r);const i=function(h){if(h.length!==0)return $h(ct.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:En(_.field),direction:x_(_.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=bo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:t,parent:r}}function D_(n){let e=C_(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){te(s===1,65062);const f=t.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(g){const _=qh(g);return _ instanceof ct&&yh(_)?_.getFilters():[_]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(_=>function(R){return new Fr(Tn(R.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(g){let _;return _=typeof g=="object"?g.value:g,ni(_)?null:_}(t.limit));let u=null;t.startAt&&(u=function(g){const _=!!g.before,T=g.values||[];return new Lr(T,_)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const _=!g.before,T=g.values||[];return new Lr(T,_)}(t.endAt)),Zm(e,r,a,i,c,"F",u,h)}function V_(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function qh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Tn(t.unaryFilter.field);return pe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Tn(t.unaryFilter.field);return pe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Tn(t.unaryFilter.field);return pe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Tn(t.unaryFilter.field);return pe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return B(61313);default:return B(60726)}}(n):n.fieldFilter!==void 0?function(t){return pe.create(Tn(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return B(58110);default:return B(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ct.create(t.compositeFilter.filters.map(s=>qh(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return B(1026)}}(t.compositeFilter.op))}(n):B(30097,{filter:n})}function x_(n){return I_[n]}function L_(n){return A_[n]}function F_(n){return b_[n]}function En(n){return{fieldPath:n.canonicalString()}}function Tn(n){return Ee.fromServerFormat(n.fieldPath)}function $h(n){return n instanceof pe?function(t){if(t.op==="=="){if(Al(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NAN"}};if(Il(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Al(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NAN"}};if(Il(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:En(t.field),op:L_(t.op),value:t.value}}}(n):n instanceof ct?function(t){const s=t.getFilters().map(r=>$h(r));return s.length===1?s[0]:{compositeFilter:{op:F_(t.op),filters:s}}}(n):B(54877,{filter:n})}function U_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Wh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class kt{constructor(e,t,s,r,i=W.min(),a=W.min(),c=Te.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new kt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class j_{constructor(e){this.gt=e}}function B_(n){const e=D_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ao(e,e.limit,"L"):e}/**
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
 */class q_{constructor(){this.Dn=new $_}addToCollectionParentIndex(e,t){return this.Dn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(jt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(jt.min())}updateCollectionGroup(e,t,s){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class $_{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new me(ce.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new me(ce.comparator)).toArray()}}/**
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
 */const Fl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hh=41943040;class Ve{static withCacheSize(e){return new Ve(e,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Ve.DEFAULT_COLLECTION_PERCENTILE=10,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ve.DEFAULT=new Ve(Hh,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ve.DISABLED=new Ve(-1,0,0);/**
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
 */const Ul="LruGarbageCollector",W_=1048576;function jl([n,e],[t,s]){const r=Q(n,t);return r===0?Q(e,s):r}class H_{constructor(e){this.Tr=e,this.buffer=new me(jl),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();jl(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class z_{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){V(Ul,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){qn(t)?V(Ul,"Ignoring IndexedDB error during garbage collection: ",t):await Bn(t)}await this.Rr(3e5)})}}class G_{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return C.resolve(ti.ue);const s=new H_(t);return this.Vr.forEachTarget(e,r=>s.Er(r.sequenceNumber)).next(()=>this.Vr.gr(e,r=>s.Er(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Fl)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fl):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,r,i,a,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),r=this.params.maximumSequenceNumbersToCollect):r=g,a=Date.now(),this.nthSequenceNumber(e,r))).next(g=>(s=g,c=Date.now(),this.removeTargets(e,s,t))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,s))).next(g=>(h=Date.now(),vn()<=Y.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${r} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${g} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:g})))}}function K_(n,e){return new G_(n,e)}/**
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
 */class Q_{constructor(){this.changes=new hn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?C.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Y_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class X_{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&ws(s.mutation,r,Qe.empty(),ae.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,X()).next(()=>s))}getLocalViewOfDocuments(e,t,s=X()){const r=Zt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let a=ds();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const s=Zt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,X()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,s,r){let i=Et();const a=vs(),c=function(){return vs()}();return t.forEach((u,h)=>{const f=s.get(h.key);r.has(h.key)&&(f===void 0||f.mutation instanceof dn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),ws(f.mutation,h,f.mutation.getFieldMask(),ae.now())):a.set(h.key,Qe.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var g;return c.set(h,new Y_(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,t){const s=vs();let r=new le((a,c)=>a-c),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=s.get(u)||Qe.empty();f=c.applyToLocalView(h,f),s.set(u,f);const g=(r.get(c.batchId)||X()).add(u);r=r.insert(c.batchId,g)})}).next(()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,g=Sh();f.forEach(_=>{if(!i.has(_)){const T=kh(t.get(_),s.get(_));T!==null&&g.set(_,T),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return C.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return function(a){return j.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):e_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):C.resolve(Zt());let c=bs,u=i;return a.next(h=>C.forEach(h,(f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(f)?C.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,X())).next(f=>({batchId:c,changes:bh(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next(s=>{let r=ds();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let a=ds();return this.indexManager.getCollectionParents(e,i).next(c=>C.forEach(c,u=>{const h=function(g,_){return new ri(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next(f=>{f.forEach((g,_)=>{a=a.insert(g,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r))).next(a=>{i.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Pe.newInvalidDocument(f)))});let c=ds();return a.forEach((u,h)=>{const f=i.get(u);f!==void 0&&ws(f.mutation,h,Qe.empty(),ae.now()),oi(t,h)&&(c=c.insert(u,h))}),c})}}/**
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
 */class J_{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return C.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(r){return{id:r.id,version:r.version,createTime:nt(r.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(r){return{name:r.name,query:B_(r.bundledQuery),readTime:nt(r.readTime)}}(t)),C.resolve()}}/**
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
 */class Z_{constructor(){this.overlays=new le(j.comparator),this.kr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Zt();return C.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.wt(e,t,i)}),C.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.kr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(s)),C.resolve()}getOverlaysForCollection(e,t,s){const r=Zt(),i=t.length+1,a=new j(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return C.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new le((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>s){let f=i.get(h.largestBatchId);f===null&&(f=Zt(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Zt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=r)););return C.resolve(c)}wt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.kr.get(r.largestBatchId).delete(s.key);this.kr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new y_(t,s));let i=this.kr.get(t);i===void 0&&(i=X(),this.kr.set(t,i)),this.kr.set(t,i.add(s.key))}}/**
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
 */class ey{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
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
 */class ua{constructor(){this.qr=new me(_e.Qr),this.$r=new me(_e.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new _e(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new _e(e,t))}Gr(e,t){e.forEach(s=>this.removeReference(s,t))}zr(e){const t=new j(new ce([])),s=new _e(t,e),r=new _e(t,e+1),i=[];return this.$r.forEachInRange([s,r],a=>{this.Wr(a),i.push(a.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new j(new ce([])),s=new _e(t,e),r=new _e(t,e+1);let i=X();return this.$r.forEachInRange([s,r],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new _e(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class _e{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return j.comparator(e.key,t.key)||Q(e.Hr,t.Hr)}static Ur(e,t){return Q(e.Hr,t.Hr)||j.comparator(e.key,t.key)}}/**
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
 */class ty{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new me(_e.Qr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new __(i,t,s,r);this.mutationQueue.push(a);for(const c of r)this.Yr=this.Yr.add(new _e(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),i=r<0?0:r;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?ea:this.er-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new _e(t,0),r=new _e(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([s,r],a=>{const c=this.Zr(a.Hr);i.push(c)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new me(Q);return t.forEach(r=>{const i=new _e(r,0),a=new _e(r,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],c=>{s=s.add(c.Hr)})}),C.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;j.isDocumentKey(i)||(i=i.child(""));const a=new _e(new j(i),0);let c=new me(Q);return this.Yr.forEachWhile(u=>{const h=u.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(c=c.add(u.Hr)),!0)},a),C.resolve(this.ei(c))}ei(e){const t=[];return e.forEach(s=>{const r=this.Zr(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){te(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return C.forEach(t.mutations,r=>{const i=new _e(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Yr=s})}rr(e){}containsKey(e,t){const s=new _e(t,0),r=this.Yr.firstAfterOrEqual(s);return C.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class ny{constructor(e){this.ni=e,this.docs=function(){return new le(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,a=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return C.resolve(s?s.document.mutableCopy():Pe.newInvalidDocument(t))}getEntries(e,t){let s=Et();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Pe.newInvalidDocument(r))}),C.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=Et();const a=t.path,c=new j(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Mm(Nm(f),s)<=0||(r.has(f.key)||oi(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,t,s,r){B(9500)}ri(e,t){return C.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new sy(this)}getSize(e){return C.resolve(this.size)}}class sy extends Q_{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Or.addEntry(e,r)):this.Or.removeEntry(s)}),C.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class ry{constructor(e){this.persistence=e,this.ii=new hn(t=>sa(t),ra),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.si=0,this.oi=new ua,this.targetCount=0,this._i=On.ar()}forEachTarget(e,t){return this.ii.forEach((s,r)=>t(r)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),C.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new On(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.hr(t),C.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.ii.forEach((a,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)}),C.waitFor(i).next(()=>r)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return C.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),C.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(a=>{i.push(r.markPotentiallyOrphaned(e,a))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return C.resolve(s)}containsKey(e,t){return C.resolve(this.oi.containsKey(t))}}/**
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
 */class zh{constructor(e,t){this.ai={},this.overlays={},this.ui=new ti(0),this.ci=!1,this.ci=!0,this.li=new ey,this.referenceDelegate=e(this),this.hi=new ry(this),this.indexManager=new q_,this.remoteDocumentCache=function(r){return new ny(r)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new j_(t),this.Ti=new J_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Z_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new ty(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){V("MemoryPersistence","Starting transaction:",e);const r=new iy(this.ui.next());return this.referenceDelegate.Ii(),s(r).next(i=>this.referenceDelegate.di(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ei(e,t){return C.or(Object.values(this.ai).map(s=>()=>s.containsKey(e,t)))}}class iy extends Om{constructor(e){super(),this.currentSequenceNumber=e}}class ha{constructor(e){this.persistence=e,this.Ai=new ua,this.Ri=null}static Vi(e){return new ha(e)}get mi(){if(this.Ri)return this.Ri;throw B(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),C.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(r=>this.mi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.mi.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.mi,s=>{const r=j.fromPath(s);return this.fi(e,r).next(i=>{i||t.removeEntry(r,W.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return C.or([()=>C.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class qr{constructor(e,t){this.persistence=e,this.gi=new hn(s=>xm(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=K_(this,t)}static Vi(e,t){return new qr(e,t)}Ii(){}di(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}yr(e){let t=0;return this.gr(e,s=>{t++}).next(()=>t)}gr(e,t){return C.forEach(this.gi,(s,r)=>this.Sr(e,s,r).next(i=>i?C.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ri(e,a=>this.Sr(e,a,t).next(c=>{c||(s++,i.removeEntry(a,W.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),C.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),C.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Tr(e.data.value)),t}Sr(e,t,s){return C.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.gi.get(t);return C.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class da{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=r}static Es(e,t){let s=X(),r=X();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new da(e,t.fromCache,s,r)}}/**
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
 */class oy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ay{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Jp()?8:Dm(Ne())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.ps(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ys(e,t,r,s).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new oy;return this.ws(e,t,a).next(c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)})}).next(()=>i.result)}Ss(e,t,s,r){return s.documentReadCount<this.Vs?(vn()<=Y.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",wn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(vn()<=Y.DEBUG&&V("QueryEngine","Query:",wn(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.fs*r?(vn()<=Y.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",wn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tt(t))):C.resolve())}ps(e,t){if(Cl(t))return C.resolve(null);let s=tt(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Ao(t,null,"F"),s=tt(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const a=X(...i);return this.gs.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,s).next(u=>{const h=this.bs(t,c);return this.Ds(t,h,a,u.readTime)?this.ps(e,Ao(t,null,"F")):this.vs(e,h,t,u)}))})))}ys(e,t,s,r){return Cl(t)||r.isEqual(W.min())?C.resolve(null):this.gs.getDocuments(e,s).next(i=>{const a=this.bs(t,i);return this.Ds(t,a,s,r)?C.resolve(null):(vn()<=Y.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),wn(t)),this.vs(e,a,t,Pm(r,bs)).next(c=>c))})}bs(e,t){let s=new me(Ih(e));return t.forEach((r,i)=>{oi(e,i)&&(s=s.add(i))}),s}Ds(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ws(e,t,s){return vn()<=Y.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",wn(t)),this.gs.getDocumentsMatchingQuery(e,t,jt.min(),s)}vs(e,t,s,r){return this.gs.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const fa="LocalStore",cy=3e8;class ly{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.Fs=new le(Q),this.Ms=new hn(i=>sa(i),ra),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new X_(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function uy(n,e,t,s){return new ly(n,e,t,s)}async function Gh(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const a=[],c=[];let u=X();for(const h of r){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(s,u).next(h=>({Bs:h,removedBatchIds:a,addedBatchIds:c}))})})}function hy(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const g=h.batch,_=g.keys();let T=C.resolve();return _.forEach(R=>{T=T.next(()=>f.getEntry(u,R)).next(k=>{const P=h.docVersions.get(R);te(P!==null,48541),k.version.compareTo(P)<0&&(g.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),T.next(()=>c.mutationQueue.removeMutationBatch(u,g))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(c){let u=X();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function Kh(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function dy(n,e){const t=K(n),s=e.snapshotVersion;let r=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});r=t.Fs;const c=[];e.targetChanges.forEach((f,g)=>{const _=r.get(g);if(!_)return;c.push(t.hi.removeMatchingKeys(i,f.removedDocuments,g).next(()=>t.hi.addMatchingKeys(i,f.addedDocuments,g)));let T=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?T=T.withResumeToken(Te.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,s)),r=r.insert(g,T),function(k,P,G){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=cy?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(_,T,f)&&c.push(t.hi.updateTargetData(i,T))});let u=Et(),h=X();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(fy(i,a,e.documentUpdates).next(f=>{u=f.Ls,h=f.ks})),!s.isEqual(W.min())){const f=t.hi.getLastRemoteSnapshotVersion(i).next(g=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,s));c.push(f)}return C.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.Fs=r,i))}function fy(n,e,t){let s=X(),r=X();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let a=Et();return t.forEach((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(c)),u.isNoDocument()&&u.version.isEqual(W.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):V(fa,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Ls:a,ks:r}})}function py(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=ea),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function gy(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.hi.getTargetData(s,e).next(i=>i?(r=i,C.resolve(r)):t.hi.allocateTargetId(s).next(a=>(r=new kt(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.Fs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s})}async function Po(n,e,t){const s=K(n),r=s.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,a=>s.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!qn(a))throw a;V(fa,`Failed to update sequence numbers for target ${e}: ${a}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(r.target)}function Bl(n,e,t){const s=K(n);let r=W.min(),i=X();return s.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const g=K(u),_=g.Ms.get(f);return _!==void 0?C.resolve(g.Fs.get(_)):g.hi.getTargetData(h,f)}(s,a,tt(e)).next(c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>s.Cs.getDocumentsMatchingQuery(a,e,t?r:W.min(),t?i:X())).next(c=>(my(s,n_(e),c),{documents:c,qs:i})))}function my(n,e,t){let s=n.xs.get(e)||W.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.xs.set(e,s)}class ql{constructor(){this.activeTargetIds=c_()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _y{constructor(){this.Fo=new ql,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new ql,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yy{xo(e){}shutdown(){}}/**
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
 */const $l="ConnectivityMonitor";class Wl{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){V($l,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){V($l,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pr=null;function No(){return pr===null?pr=function(){return 268435456+Math.round(2147483648*Math.random())}():pr++,"0x"+pr.toString(16)}/**
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
 */const Xi="RestConnection",vy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class wy{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.Ko=this.databaseId.database===Vr?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,i){const a=No(),c=this.Go(e,t.toUriEncodedString());V(Xi,`Sending RPC '${e}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,r,i);const{host:h}=new URL(c),f=Fn(h);return this.jo(e,c,u,s,f).then(g=>(V(Xi,`Received RPC '${e}' ${a}: `,g),g),g=>{throw Ut(Xi,`RPC '${e}' ${a} failed with error: `,g,"url: ",c,"request:",s),g})}Jo(e,t,s,r,i,a){return this.Wo(e,t,s,r,i)}zo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+jn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Go(e,t){const s=vy[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
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
 */class Ey{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Re="WebChannelConnection";class Ty extends wy{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,r,i){const a=No();return new Promise((c,u)=>{const h=new Xu;h.setWithCredentials(!0),h.listenOnce(Ju.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Er.NO_ERROR:const g=h.getResponseJson();V(Re,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),c(g);break;case Er.TIMEOUT:V(Re,`RPC '${e}' ${a} timed out`),u(new L(N.DEADLINE_EXCEEDED,"Request time out"));break;case Er.HTTP_ERROR:const _=h.getStatus();if(V(Re,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let T=h.getResponseJson();Array.isArray(T)&&(T=T[0]);const R=T?.error;if(R&&R.status&&R.message){const k=function(G){const F=G.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(F)>=0?F:N.UNKNOWN}(R.status);u(new L(k,R.message))}else u(new L(N.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new L(N.UNAVAILABLE,"Connection failed."));break;default:B(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{V(Re,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(r);V(Re,`RPC '${e}' ${a} sending request:`,r),h.send(t,"POST",f,s,15)})}P_(e,t,s){const r=No(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=th(),c=eh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,s),u.encodeInitMessageHeaders=!0;const f=i.join("");V(Re,`Creating RPC '${e}' stream ${r}: ${f}`,u);const g=a.createWebChannel(f,u);this.T_(g);let _=!1,T=!1;const R=new Ey({Ho:P=>{T?V(Re,`Not sending because RPC '${e}' stream ${r} is closed:`,P):(_||(V(Re,`Opening RPC '${e}' stream ${r} transport.`),g.open(),_=!0),V(Re,`RPC '${e}' stream ${r} sending:`,P),g.send(P))},Yo:()=>g.close()}),k=(P,G,F)=>{P.listen(G,x=>{try{F(x)}catch(q){setTimeout(()=>{throw q},0)}})};return k(g,hs.EventType.OPEN,()=>{T||(V(Re,`RPC '${e}' stream ${r} transport opened.`),R.s_())}),k(g,hs.EventType.CLOSE,()=>{T||(T=!0,V(Re,`RPC '${e}' stream ${r} transport closed`),R.__(),this.I_(g))}),k(g,hs.EventType.ERROR,P=>{T||(T=!0,Ut(Re,`RPC '${e}' stream ${r} transport errored. Name:`,P.name,"Message:",P.message),R.__(new L(N.UNAVAILABLE,"The operation could not be completed")))}),k(g,hs.EventType.MESSAGE,P=>{var G;if(!T){const F=P.data[0];te(!!F,16349);const x=F,q=x?.error||((G=x[0])===null||G===void 0?void 0:G.error);if(q){V(Re,`RPC '${e}' stream ${r} received error:`,q);const re=q.status;let U=function(y){const w=de[y];if(w!==void 0)return Vh(w)}(re),E=q.message;U===void 0&&(U=N.INTERNAL,E="Unknown error status: "+re+" with message "+q.message),T=!0,R.__(new L(U,E)),g.close()}else V(Re,`RPC '${e}' stream ${r} received:`,F),R.a_(F)}}),k(c,Zu.STAT_EVENT,P=>{P.stat===yo.PROXY?V(Re,`RPC '${e}' stream ${r} detected buffering proxy`):P.stat===yo.NOPROXY&&V(Re,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{R.o_()},0),R}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function Ji(){return typeof document<"u"?document:null}/**
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
 */function ui(n){return new S_(n,!0)}/**
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
 */class Qh{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=r,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),r=Math.max(0,t-s);r>0&&V("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,r,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Hl="PersistentStream";class Yh{constructor(e,t,s,r,i,a,c,u){this.Fi=e,this.w_=s,this.S_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Qh(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(wt(t.toString()),wt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.b_===t&&this.W_(s,r)},s=>{e(()=>{const r=new L(N.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(r)})})}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(r=>{s(()=>this.G_(r))}),this.stream.onMessage(r=>{s(()=>++this.C_==1?this.j_(r):this.onNext(r))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return V(Hl,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(V(Hl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Iy extends Yh{constructor(e,t,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=P_(this.serializer,e),s=function(i){if(!("targetChange"in i))return W.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?W.min():a.readTime?nt(a.readTime):W.min()}(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Co(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=Io(u)?{documents:k_(i,u)}:{query:O_(i,u).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Fh(i,a.resumeToken);const h=bo(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(W.min())>0){c.readTime=Br(i,a.snapshotVersion.toTimestamp());const h=bo(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const s=V_(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Co(this.serializer),t.removeTarget=e,this.k_(t)}}class Ay extends Yh{constructor(e,t,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=M_(e.writeResults,e.commitTime),s=nt(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Co(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>N_(this.serializer,s))};this.k_(t)}}/**
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
 */class by{}class Sy extends by{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new L(N.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,So(t,s),r,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(N.UNKNOWN,i.toString())})}Jo(e,t,s,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Jo(e,So(t,s),r,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(N.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Ry{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(wt(t),this._a=!1):V("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const an="RemoteStore";class Cy{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(a=>{s.enqueueAndForget(async()=>{fn(this)&&(V(an,"Restarting streams for network reachability change."),await async function(u){const h=K(u);h.Ia.add(4),await js(h),h.Aa.set("Unknown"),h.Ia.delete(4),await hi(h)}(this))})}),this.Aa=new Ry(s,r)}}async function hi(n){if(fn(n))for(const e of n.da)await e(!0)}async function js(n){for(const e of n.da)await e(!1)}function Xh(n,e){const t=K(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),_a(t)?ma(t):$n(t).x_()&&ga(t,e))}function pa(n,e){const t=K(n),s=$n(t);t.Ta.delete(e),s.x_()&&Jh(t,e),t.Ta.size===0&&(s.x_()?s.B_():fn(t)&&t.Aa.set("Unknown"))}function ga(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}$n(n).H_(e)}function Jh(n,e){n.Ra.$e(e),$n(n).Y_(e)}function ma(n){n.Ra=new T_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),$n(n).start(),n.Aa.aa()}function _a(n){return fn(n)&&!$n(n).M_()&&n.Ta.size>0}function fn(n){return K(n).Ia.size===0}function Zh(n){n.Ra=void 0}async function Py(n){n.Aa.set("Online")}async function Ny(n){n.Ta.forEach((e,t)=>{ga(n,e)})}async function My(n,e){Zh(n),_a(n)?(n.Aa.la(e),ma(n)):n.Aa.set("Unknown")}async function ky(n,e,t){if(n.Aa.set("Online"),e instanceof Lh&&e.state===2&&e.cause)try{await async function(r,i){const a=i.cause;for(const c of i.targetIds)r.Ta.has(c)&&(await r.remoteSyncer.rejectListen(c,a),r.Ta.delete(c),r.Ra.removeTarget(c))}(n,e)}catch(s){V(an,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await $r(n,s)}else if(e instanceof br?n.Ra.Ye(e):e instanceof xh?n.Ra.it(e):n.Ra.et(e),!t.isEqual(W.min()))try{const s=await Kh(n.localStore);t.compareTo(s)>=0&&await function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ta.get(h);f&&i.Ta.set(h,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,h)=>{const f=i.Ta.get(u);if(!f)return;i.Ta.set(u,f.withResumeToken(Te.EMPTY_BYTE_STRING,f.snapshotVersion)),Jh(i,u);const g=new kt(f.target,u,h,f.sequenceNumber);ga(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(s){V(an,"Failed to raise snapshot:",s),await $r(n,s)}}async function $r(n,e,t){if(!qn(e))throw e;n.Ia.add(1),await js(n),n.Aa.set("Offline"),t||(t=()=>Kh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V(an,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await hi(n)})}function ed(n,e){return e().catch(t=>$r(n,t,e))}async function di(n){const e=K(n),t=Wt(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:ea;for(;Oy(e);)try{const r=await py(e.localStore,s);if(r===null){e.Pa.length===0&&t.B_();break}s=r.batchId,Dy(e,r)}catch(r){await $r(e,r)}td(e)&&nd(e)}function Oy(n){return fn(n)&&n.Pa.length<10}function Dy(n,e){n.Pa.push(e);const t=Wt(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function td(n){return fn(n)&&!Wt(n).M_()&&n.Pa.length>0}function nd(n){Wt(n).start()}async function Vy(n){Wt(n).na()}async function xy(n){const e=Wt(n);for(const t of n.Pa)e.X_(t.mutations)}async function Ly(n,e,t){const s=n.Pa.shift(),r=aa.from(s,e,t);await ed(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await di(n)}async function Fy(n,e){e&&Wt(n).Z_&&await async function(s,r){if(function(a){return w_(a)&&a!==N.ABORTED}(r.code)){const i=s.Pa.shift();Wt(s).N_(),await ed(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await di(s)}}(n,e),td(n)&&nd(n)}async function zl(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),V(an,"RemoteStore received new credentials");const s=fn(t);t.Ia.add(3),await js(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await hi(t)}async function Uy(n,e){const t=K(n);e?(t.Ia.delete(2),await hi(t)):e||(t.Ia.add(2),await js(t),t.Aa.set("Unknown"))}function $n(n){return n.Va||(n.Va=function(t,s,r){const i=K(t);return i.ia(),new Iy(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:Py.bind(null,n),e_:Ny.bind(null,n),n_:My.bind(null,n),J_:ky.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),_a(n)?ma(n):n.Aa.set("Unknown")):(await n.Va.stop(),Zh(n))})),n.Va}function Wt(n){return n.ma||(n.ma=function(t,s,r){const i=K(t);return i.ia(),new Ay(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Vy.bind(null,n),n_:Fy.bind(null,n),ea:xy.bind(null,n),ta:Ly.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await di(n)):(await n.ma.stop(),n.Pa.length>0&&(V(an,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
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
 */class ya{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const a=Date.now()+s,c=new ya(e,t,a,r,i);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function va(n,e){if(wt("AsyncQueue",`${e}: ${n}`),qn(n))return new L(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class In{static emptySet(e){return new In(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||j.comparator(t.key,s.key):(t,s)=>j.comparator(t.key,s.key),this.keyedMap=ds(),this.sortedSet=new le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof In)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Gl{constructor(){this.fa=new le(j.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):B(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,s)=>{e.push(s)}),e}}class Dn{constructor(e,t,s,r,i,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,s,r,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Dn(e,t,In.emptySet(t),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ii(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class jy{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class By{constructor(){this.queries=Kl(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const r=K(t),i=r.queries;r.queries=Kl(),i.forEach((a,c)=>{for(const u of c.wa)u.onError(s)})})(this,new L(N.ABORTED,"Firestore shutting down"))}}function Kl(){return new hn(n=>Th(n),ii)}async function qy(n,e){const t=K(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Sa()&&e.ba()&&(s=2):(i=new jy,s=e.ba()?0:1);try{switch(s){case 0:i.ya=await t.onListen(r,!0);break;case 1:i.ya=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const c=va(a,`Initialization of query '${wn(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&wa(t)}async function $y(n,e){const t=K(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?r=e.ba()?0:1:!i.Sa()&&e.ba()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Wy(n,e){const t=K(n);let s=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(r)&&(s=!0);a.ya=r}}s&&wa(t)}function Hy(n,e,t){const s=K(n),r=s.queries.get(e);if(r)for(const i of r.wa)i.onError(t);s.queries.delete(e)}function wa(n){n.Da.forEach(e=>{e.next()})}var Mo,Ql;(Ql=Mo||(Mo={})).Fa="default",Ql.Cache="cache";class zy{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Dn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Dn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Mo.Cache}}/**
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
 */class sd{constructor(e){this.key=e}}class rd{constructor(e){this.key=e}}class Gy{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=X(),this.mutatedKeys=X(),this.Xa=Ih(e),this.eu=new In(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new Gl,r=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,c=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((f,g)=>{const _=r.get(f),T=oi(this.query,g)?g:null,R=!!_&&this.mutatedKeys.has(_.key),k=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let P=!1;_&&T?_.data.isEqual(T.data)?R!==k&&(s.track({type:3,doc:T}),P=!0):this.iu(_,T)||(s.track({type:2,doc:T}),P=!0,(u&&this.Xa(T,u)>0||h&&this.Xa(T,h)<0)&&(c=!0)):!_&&T?(s.track({type:0,doc:T}),P=!0):_&&!T&&(s.track({type:1,doc:_}),P=!0,(u||h)&&(c=!0)),P&&(T?(a=a.add(T),i=k?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),s.track({type:1,doc:f})}return{eu:a,ru:s,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort((f,g)=>function(T,R){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B(20277,{At:P})}};return k(T)-k(R)}(f.type,g.type)||this.Xa(f.doc,g.doc)),this.su(s),r=r!=null&&r;const c=t&&!r?this.ou():[],u=this.Za.size===0&&this.current&&!r?1:0,h=u!==this.Ya;return this.Ya=u,a.length!==0||h?{snapshot:new Dn(this.query,e.eu,i,a,e.mutatedKeys,u===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Gl,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=X(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});const t=[];return e.forEach(s=>{this.Za.has(s)||t.push(new rd(s))}),this.Za.forEach(s=>{e.has(s)||t.push(new sd(s))}),t}uu(e){this.Ha=e.qs,this.Za=X();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Dn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ea="SyncEngine";class Ky{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Qy{constructor(e){this.key=e,this.lu=!1}}class Yy{constructor(e,t,s,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new hn(c=>Th(c),ii),this.Tu=new Map,this.Iu=new Set,this.du=new le(j.comparator),this.Eu=new Map,this.Au=new ua,this.Ru={},this.Vu=new Map,this.mu=On.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Xy(n,e,t=!0){const s=ud(n);let r;const i=s.Pu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.cu()):r=await id(s,e,t,!0),r}async function Jy(n,e){const t=ud(n);await id(t,e,!0,!1)}async function id(n,e,t,s){const r=await gy(n.localStore,tt(e)),i=r.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return s&&(c=await Zy(n,e,i,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&Xh(n.remoteStore,r),c}async function Zy(n,e,t,s,r){n.gu=(g,_,T)=>async function(k,P,G,F){let x=P.view.nu(G);x.Ds&&(x=await Bl(k.localStore,P.query,!1).then(({documents:E})=>P.view.nu(E,x)));const q=F&&F.targetChanges.get(P.targetId),re=F&&F.targetMismatches.get(P.targetId)!=null,U=P.view.applyChanges(x,k.isPrimaryClient,q,re);return Xl(k,P.targetId,U._u),U.snapshot}(n,g,_,T);const i=await Bl(n.localStore,e,!0),a=new Gy(e,i.qs),c=a.nu(i.documents),u=Us.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),h=a.applyChanges(c,n.isPrimaryClient,u);Xl(n,t,h._u);const f=new Ky(e,t,a);return n.Pu.set(e,f),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function ev(n,e,t){const s=K(n),r=s.Pu.get(e),i=s.Tu.get(r.targetId);if(i.length>1)return s.Tu.set(r.targetId,i.filter(a=>!ii(a,e))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Po(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&pa(s.remoteStore,r.targetId),ko(s,r.targetId)}).catch(Bn)):(ko(s,r.targetId),await Po(s.localStore,r.targetId,!0))}async function tv(n,e){const t=K(n),s=t.Pu.get(e),r=t.Tu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),pa(t.remoteStore,s.targetId))}async function nv(n,e,t){const s=lv(n);try{const r=await function(a,c){const u=K(a),h=ae.now(),f=c.reduce((T,R)=>T.add(R.key),X());let g,_;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let R=Et(),k=X();return u.Os.getEntries(T,f).next(P=>{R=P,R.forEach((G,F)=>{F.isValidDocument()||(k=k.add(G))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,R)).next(P=>{g=P;const G=[];for(const F of c){const x=g_(F,g.get(F.key).overlayedDocument);x!=null&&G.push(new dn(F.key,x,gh(x.value.mapValue),yt.exists(!0)))}return u.mutationQueue.addMutationBatch(T,h,G,c)}).next(P=>{_=P;const G=P.applyToLocalDocumentSet(g,k);return u.documentOverlayCache.saveOverlays(T,P.batchId,G)})}).then(()=>({batchId:_.batchId,changes:bh(g)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(a,c,u){let h=a.Ru[a.currentUser.toKey()];h||(h=new le(Q)),h=h.insert(c,u),a.Ru[a.currentUser.toKey()]=h}(s,r.batchId,t),await Bs(s,r.changes),await di(s.remoteStore)}catch(r){const i=va(r,"Failed to persist write");t.reject(i)}}async function od(n,e){const t=K(n);try{const s=await dy(t.localStore,e);e.targetChanges.forEach((r,i)=>{const a=t.Eu.get(i);a&&(te(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.lu=!0:r.modifiedDocuments.size>0?te(a.lu,14607):r.removedDocuments.size>0&&(te(a.lu,42227),a.lu=!1))}),await Bs(t,s,e)}catch(s){await Bn(s)}}function Yl(n,e,t){const s=K(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Pu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&r.push(c.snapshot)}),function(a,c){const u=K(a);u.onlineState=c;let h=!1;u.queries.forEach((f,g)=>{for(const _ of g.wa)_.va(c)&&(h=!0)}),h&&wa(u)}(s.eventManager,e),r.length&&s.hu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function sv(n,e,t){const s=K(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Eu.get(e),i=r&&r.key;if(i){let a=new le(j.comparator);a=a.insert(i,Pe.newNoDocument(i,W.min()));const c=X().add(i),u=new li(W.min(),new Map,new le(Q),a,c);await od(s,u),s.du=s.du.remove(i),s.Eu.delete(e),Ta(s)}else await Po(s.localStore,e,!1).then(()=>ko(s,e,t)).catch(Bn)}async function rv(n,e){const t=K(n),s=e.batch.batchId;try{const r=await hy(t.localStore,e);cd(t,s,null),ad(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Bs(t,r)}catch(r){await Bn(r)}}async function iv(n,e,t){const s=K(n);try{const r=await function(a,c){const u=K(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(g=>(te(g!==null,37113),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(s.localStore,e);cd(s,e,t),ad(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Bs(s,r)}catch(r){await Bn(r)}}function ad(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function cd(n,e,t){const s=K(n);let r=s.Ru[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.Ru[s.currentUser.toKey()]=r}}function ko(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Tu.get(e))n.Pu.delete(s),t&&n.hu.pu(s,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(s=>{n.Au.containsKey(s)||ld(n,s)})}function ld(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(pa(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Ta(n))}function Xl(n,e,t){for(const s of t)s instanceof sd?(n.Au.addReference(s.key,e),ov(n,s)):s instanceof rd?(V(Ea,"Document no longer in limbo: "+s.key),n.Au.removeReference(s.key,e),n.Au.containsKey(s.key)||ld(n,s.key)):B(19791,{yu:s})}function ov(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Iu.has(s)||(V(Ea,"New document in limbo: "+t),n.Iu.add(s),Ta(n))}function Ta(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new j(ce.fromString(e)),s=n.mu.next();n.Eu.set(s,new Qy(t)),n.du=n.du.insert(t,s),Xh(n.remoteStore,new kt(tt(ia(t.path)),s,"TargetPurposeLimboResolution",ti.ue))}}async function Bs(n,e,t){const s=K(n),r=[],i=[],a=[];s.Pu.isEmpty()||(s.Pu.forEach((c,u)=>{a.push(s.gu(u,e,t).then(h=>{var f;if((h||t)&&s.isPrimaryClient){const g=h?!h.fromCache:(f=t?.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;s.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){r.push(h);const g=da.Es(u.targetId,h);i.push(g)}}))}),await Promise.all(a),s.hu.J_(r),await async function(u,h){const f=K(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>C.forEach(h,_=>C.forEach(_.Is,T=>f.persistence.referenceDelegate.addReference(g,_.targetId,T)).next(()=>C.forEach(_.ds,T=>f.persistence.referenceDelegate.removeReference(g,_.targetId,T)))))}catch(g){if(!qn(g))throw g;V(fa,"Failed to update sequence numbers: "+g)}for(const g of h){const _=g.targetId;if(!g.fromCache){const T=f.Fs.get(_),R=T.snapshotVersion,k=T.withLastLimboFreeSnapshotVersion(R);f.Fs=f.Fs.insert(_,k)}}}(s.localStore,i))}async function av(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){V(Ea,"User change. New user:",e.toKey());const s=await Gh(t.localStore,e);t.currentUser=e,function(i,a){i.Vu.forEach(c=>{c.forEach(u=>{u.reject(new L(N.CANCELLED,a))})}),i.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Bs(t,s.Bs)}}function cv(n,e){const t=K(n),s=t.Eu.get(e);if(s&&s.lu)return X().add(s.key);{let r=X();const i=t.Tu.get(e);if(!i)return r;for(const a of i){const c=t.Pu.get(a);r=r.unionWith(c.view.tu)}return r}}function ud(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=od.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sv.bind(null,e),e.hu.J_=Wy.bind(null,e.eventManager),e.hu.pu=Hy.bind(null,e.eventManager),e}function lv(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iv.bind(null,e),e}class Wr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ui(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return uy(this.persistence,new ay,e.initialUser,this.serializer)}Du(e){return new zh(ha.Vi,this.serializer)}bu(e){return new _y}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wr.provider={build:()=>new Wr};class uv extends Wr{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){te(this.persistence.referenceDelegate instanceof qr,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new z_(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Ve.withCacheSize(this.cacheSizeBytes):Ve.DEFAULT;return new zh(s=>qr.Vi(s,t),this.serializer)}}class Oo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Yl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=av.bind(null,this.syncEngine),await Uy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new By}()}createDatastore(e){const t=ui(e.databaseInfo.databaseId),s=function(i){return new Ty(i)}(e.databaseInfo);return function(i,a,c,u){return new Sy(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,i,a,c){return new Cy(s,r,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Yl(this.syncEngine,t,0),function(){return Wl.C()?new Wl:new yy}())}createSyncEngine(e,t){return function(r,i,a,c,u,h,f){const g=new Yy(r,i,a,c,u,h);return f&&(g.fu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const i=K(r);V(an,"RemoteStore shutting down."),i.Ia.add(5),await js(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Oo.provider={build:()=>new Oo};/**
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
 */class hv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):wt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Ht="FirestoreClient";class dv{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=Ce.UNAUTHENTICATED,this.clientId=Jo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async a=>{V(Ht,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(s,a=>(V(Ht,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=va(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Zi(n,e){n.asyncQueue.verifyOperationInProgress(),V(Ht,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Gh(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>{Ut("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{V("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(r=>{Ut("Terminating Firestore due to IndexedDb database deletion failed",r)})}),n._offlineComponents=e}async function Jl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await fv(n);V(Ht,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>zl(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>zl(e.remoteStore,r)),n._onlineComponents=e}async function fv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Ht,"Using user provided OfflineComponentProvider");try{await Zi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===N.FAILED_PRECONDITION||r.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;Ut("Error using user provided cache. Falling back to memory cache: "+t),await Zi(n,new Wr)}}else V(Ht,"Using default OfflineComponentProvider"),await Zi(n,new uv(void 0));return n._offlineComponents}async function hd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Ht,"Using user provided OnlineComponentProvider"),await Jl(n,n._uninitializedComponentsProvider._online)):(V(Ht,"Using default OnlineComponentProvider"),await Jl(n,new Oo))),n._onlineComponents}function pv(n){return hd(n).then(e=>e.syncEngine)}async function gv(n){const e=await hd(n),t=e.eventManager;return t.onListen=Xy.bind(null,e.syncEngine),t.onUnlisten=ev.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Jy.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=tv.bind(null,e.syncEngine),t}function mv(n,e,t={}){const s=new Lt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,h){const f=new hv({next:_=>{f.Ou(),a.enqueueAndForget(()=>$y(i,g));const T=_.docs.has(c);!T&&_.fromCache?h.reject(new L(N.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&_.fromCache&&u&&u.source==="server"?h.reject(new L(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new zy(ia(c.path),f,{includeMetadataChanges:!0,ka:!0});return qy(i,g)}(await gv(n),n.asyncQueue,e,t,s)),s.promise}/**
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
 */function dd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Zl=new Map;/**
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
 */const fd="firestore.googleapis.com",eu=!0;class tu{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new L(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fd,this.ssl=eu}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:eu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Hh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<W_)throw new L(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Cm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dd((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ia{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new ym;switch(s.type){case"firstParty":return new Tm(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new L(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Zl.get(t);s&&(V("ComponentProvider","Removing Datastore"),Zl.delete(t),s.terminate())}(this),Promise.resolve()}}function _v(n,e,t,s={}){var r;n=As(n,Ia);const i=Fn(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;i&&(qu(`https://${u}`),$u("Firestore",!0)),a.host!==fd&&a.host!==u&&Ut("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:u,ssl:i,emulatorOptions:s});if(!sn(h,c)&&(n._setSettings(h),s.mockUserToken)){let f,g;if(typeof s.mockUserToken=="string")f=s.mockUserToken,g=Ce.MOCK_USER;else{f=$p(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new L(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ce(_)}n._authCredentials=new vm(new sh(f,g))}}/**
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
 */class Aa{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Aa(this.firestore,e,this._query)}}class ye{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ms(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ye(this.firestore,e,this._key)}toJSON(){return{type:ye._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ls(t,ye._jsonSchema))return new ye(e,s||null,new j(ce.fromString(t.referencePath)))}}ye._jsonSchemaVersion="firestore/documentReference/1.0",ye._jsonSchema={type:fe("string",ye._jsonSchemaVersion),referencePath:fe("string")};class Ms extends Aa{constructor(e,t,s){super(e,t,ia(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ye(this.firestore,null,new j(e))}withConverter(e){return new Ms(this.firestore,e,this._path)}}function pd(n,e,...t){if(n=$e(n),arguments.length===1&&(e=Jo.newId()),Rm("doc","path",e),n instanceof Ia){const s=ce.fromString(e,...t);return gl(s),new ye(n,null,new j(s))}{if(!(n instanceof ye||n instanceof Ms))throw new L(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ce.fromString(e,...t));return gl(s),new ye(n.firestore,n instanceof Ms?n.converter:null,new j(s))}}/**
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
 */const nu="AsyncQueue";class su{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Qh(this,"async_queue_retry"),this.oc=()=>{const s=Ji();s&&V(nu,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=Ji();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Ji();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Lt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!qn(e))throw e;V(nu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,wt("INTERNAL UNHANDLED ERROR: ",ru(s)),s}).then(s=>(this.nc=!1,s))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const r=ya.createAndSchedule(this,e,t,s,i=>this.lc(i));return this.ec.push(r),r}ac(){this.tc&&B(47125,{hc:ru(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function ru(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ba extends Ia{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new su,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new su(e),this._firestoreClient=void 0,await e}}}function yv(n,e){const t=typeof n=="object"?n:Gu(),s=typeof n=="string"?n:Vr,r=Yo(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Bp("firestore");i&&_v(r,...i)}return r}function gd(n){if(n._terminated)throw new L(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||vv(n),n._firestoreClient}function vv(n){var e,t,s;const r=n._freezeSettings(),i=function(c,u,h,f){return new Um(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,dd(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new dv(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const u=c?._online.build();return{_offline:c?._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class qe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qe(Te.fromBase64String(e))}catch(t){throw new L(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qe(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:qe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ls(e,qe._jsonSchema))return qe.fromBase64String(e.bytes)}}qe._jsonSchemaVersion="firestore/bytes/1.0",qe._jsonSchema={type:fe("string",qe._jsonSchemaVersion),bytes:fe("string")};/**
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
 */class Sa{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class md{constructor(e){this._methodName=e}}/**
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
 */class st{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:st._jsonSchemaVersion}}static fromJSON(e){if(Ls(e,st._jsonSchema))return new st(e.latitude,e.longitude)}}st._jsonSchemaVersion="firestore/geoPoint/1.0",st._jsonSchema={type:fe("string",st._jsonSchemaVersion),latitude:fe("number"),longitude:fe("number")};/**
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
 */class rt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:rt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ls(e,rt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new rt(e.vectorValues);throw new L(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}rt._jsonSchemaVersion="firestore/vectorValue/1.0",rt._jsonSchema={type:fe("string",rt._jsonSchemaVersion),vectorValues:fe("object")};/**
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
 */const wv=/^__.*__$/;class Ev{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new dn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Fs(e,this.data,t,this.fieldTransforms)}}function _d(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B(40011,{Ec:n})}}class Ra{constructor(e,t,s,r,i,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Ra(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Rc({path:s,mc:!1});return r.fc(e),r}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Rc({path:s,mc:!1});return r.Ac(),r}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Hr(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(_d(this.Ec)&&wv.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Tv{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||ui(e)}Dc(e,t,s,r=!1){return new Ra({Ec:e,methodName:t,bc:s,path:Ee.emptyPath(),mc:!1,Sc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Iv(n){const e=n._freezeSettings(),t=ui(n._databaseId);return new Tv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Av(n,e,t,s,r,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,r);Ed("Data must be an object, but it was:",a,s);const c=vd(s,a);let u,h;if(i.merge)u=new Qe(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const _=bv(e,g,t);if(!a.contains(_))throw new L(N.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Rv(f,_)||f.push(_)}u=new Qe(f),h=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=a.fieldTransforms;return new Ev(new Be(c),u,h)}function yd(n,e){if(wd(n=$e(n)))return Ed("Unsupported field value:",e,n),vd(n,e);if(n instanceof md)return function(s,r){if(!_d(r.Ec))throw r.wc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.wc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(s,r){const i=[];let a=0;for(const c of s){let u=yd(c,r.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(s,r){if((s=$e(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return l_(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=ae.fromDate(s);return{timestampValue:Br(r.serializer,i)}}if(s instanceof ae){const i=new ae(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Br(r.serializer,i)}}if(s instanceof st)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof qe)return{bytesValue:Fh(r.serializer,s._byteString)};if(s instanceof ye){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:la(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof rt)return function(a,c){return{mapValue:{fields:{[fh]:{stringValue:ph},[xr]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return oa(c.serializer,h)})}}}}}}(s,r);throw r.wc(`Unsupported field value: ${Zo(s)}`)}(n,e)}function vd(n,e){const t={};return ah(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):un(n,(s,r)=>{const i=yd(r,e.Vc(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function wd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ae||n instanceof st||n instanceof qe||n instanceof ye||n instanceof md||n instanceof rt)}function Ed(n,e,t){if(!wd(t)||!ih(t)){const s=Zo(t);throw s==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+s)}}function bv(n,e,t){if((e=$e(e))instanceof Sa)return e._internalPath;if(typeof e=="string")return Td(n,e);throw Hr("Field path arguments must be of type string or ",n,!1,void 0,t)}const Sv=new RegExp("[~\\*/\\[\\]]");function Td(n,e,t){if(e.search(Sv)>=0)throw Hr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Sa(...e.split("."))._internalPath}catch{throw Hr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Hr(n,e,t,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${s}`),a&&(u+=` in document ${r}`),u+=")"),new L(N.INVALID_ARGUMENT,c+n+u)}function Rv(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Id{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Cv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ad("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Cv extends Id{data(){return super.data()}}function Ad(n,e){return typeof e=="string"?Td(n,e):e instanceof Sa?e._internalPath:e._delegate._internalPath}class Pv{convertValue(e,t="none"){switch($t(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(qt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw B(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return un(e,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertVectorValue(e){var t,s,r;const i=(r=(s=(t=e.fields)===null||t===void 0?void 0:t[xr].arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(a=>he(a.doubleValue));return new rt(i)}convertGeoPoint(e){return new st(he(e.latitude),he(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=si(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ss(e));default:return null}}convertTimestamp(e){const t=Bt(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ce.fromString(e);te(Wh(s),9688,{name:e});const r=new Rs(s.get(1),s.get(3)),i=new j(s.popFirst(5));return r.isEqual(t)||wt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Nv(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class ps{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nn extends Id{constructor(e,t,s,r,i,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Sr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ad("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=nn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}nn._jsonSchemaVersion="firestore/documentSnapshot/1.0",nn._jsonSchema={type:fe("string",nn._jsonSchemaVersion),bundleSource:fe("string","DocumentSnapshot"),bundleName:fe("string"),bundle:fe("string")};class Sr extends nn{data(e={}){return super.data(e)}}class Es{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ps(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Sr(this._firestore,this._userDataWriter,s.key,s,new ps(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(c=>{const u=new Sr(r._firestore,r._userDataWriter,c.doc.key,c.doc,new ps(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Sr(r._firestore,r._userDataWriter,c.doc.key,c.doc,new ps(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:Mv(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Es._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Jo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Mv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B(61501,{type:n})}}/**
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
 */function kv(n){n=As(n,ye);const e=As(n.firestore,ba);return mv(gd(e),n._key).then(t=>xv(e,n,t))}Es._jsonSchemaVersion="firestore/querySnapshot/1.0",Es._jsonSchema={type:fe("string",Es._jsonSchemaVersion),bundleSource:fe("string","QuerySnapshot"),bundleName:fe("string"),bundle:fe("string")};class Ov extends Pv{constructor(e){super(),this.firestore=e}convertBytes(e){return new qe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ye(this.firestore,null,t)}}function Dv(n,e,t){n=As(n,ye);const s=As(n.firestore,ba),r=Nv(n.converter,e);return Vv(s,[Av(Iv(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,yt.none())])}function Vv(n,e){return function(s,r){const i=new Lt;return s.asyncQueue.enqueueAndForget(async()=>nv(await pv(s),r,i)),i.promise}(gd(n),e)}function xv(n,e,t){const s=t.docs.get(e._key),r=new Ov(n);return new nn(n,r,e._key,s,new ps(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(r){jn=r})(Un),Pn(new rn("firestore",(s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),c=new ba(new wm(s.getProvider("auth-internal")),new Im(a,s.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new L(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rs(h.options.projectId,f)}(a,r),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Vt(ul,hl,e),Vt(ul,hl,"esm2017")})();function Ca(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t}function bd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lv=bd,Sd=new Vs("auth","Firebase",bd());/**
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
 */const zr=new Ko("@firebase/auth");function Fv(n,...e){zr.logLevel<=Y.WARN&&zr.warn(`Auth (${Un}): ${n}`,...e)}function Rr(n,...e){zr.logLevel<=Y.ERROR&&zr.error(`Auth (${Un}): ${n}`,...e)}/**
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
 */function lt(n,...e){throw Na(n,...e)}function Xe(n,...e){return Na(n,...e)}function Pa(n,e,t){const s=Object.assign(Object.assign({},Lv()),{[e]:t});return new Vs("auth","Firebase",s).create(e,{appName:n.name})}function Ft(n){return Pa(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rd(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&lt(n,"argument-error"),Pa(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Na(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Sd.create(n,...e)}function $(n,e,...t){if(!n)throw Na(e,...t)}function mt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Rr(e),new Error(e)}function Tt(n,e){n||mt(e)}/**
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
 */function Do(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Uv(){return iu()==="http:"||iu()==="https:"}function iu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function jv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uv()||Qp()||"connection"in navigator)?navigator.onLine:!0}function Bv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class qs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Tt(t>e,"Short delay should be less than long delay!"),this.isMobile=zp()||Yp()}get(){return jv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ma(n,e){Tt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Cd{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const $v=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Wv=new qs(3e4,6e4);function ka(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Wn(n,e,t,s,r={}){return Pd(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=xs(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:u},i);return Kp()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Fn(n.emulatorConfig.host)&&(h.credentials="include"),Cd.fetch()(await Nd(n,n.config.apiHost,t,c),h)})}async function Pd(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},qv),e);try{const r=new zv(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw gr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw gr(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw gr(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw gr(n,"user-disabled",a);const f=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Pa(n,f,h);lt(n,f)}}catch(r){if(r instanceof It)throw r;lt(n,"network-request-failed",{message:String(r)})}}async function Hv(n,e,t,s,r={}){const i=await Wn(n,e,t,s,r);return"mfaPendingCredential"in i&&lt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Nd(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?Ma(n.config,r):`${n.config.apiScheme}://${r}`;return $v.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class zv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Xe(this.auth,"network-request-failed")),Wv.get())})}}function gr(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=Xe(n,e,s);return r.customData._tokenResponse=t,r}/**
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
 */async function Gv(n,e){return Wn(n,"POST","/v1/accounts:delete",e)}async function Gr(n,e){return Wn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ts(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Kv(n,e=!1){const t=$e(n),s=await t.getIdToken(e),r=Oa(s);$(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i?.sign_in_provider;return{claims:r,token:s,authTime:Ts(eo(r.auth_time)),issuedAtTime:Ts(eo(r.iat)),expirationTime:Ts(eo(r.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function eo(n){return Number(n)*1e3}function Oa(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Rr("JWT malformed, contained fewer than 3 sections"),null;try{const r=Fu(t);return r?JSON.parse(r):(Rr("Failed to decode base64 JWT payload"),null)}catch(r){return Rr("Caught error parsing JWT payload as JSON",r?.toString()),null}}function ou(n){const e=Oa(n);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ks(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof It&&Qv(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Qv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Yv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ts(this.lastLoginAt),this.creationTime=Ts(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Kr(n){var e;const t=n.auth,s=await n.getIdToken(),r=await ks(n,Gr(t,{idToken:s}));$(r?.users.length,t,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Md(i.providerUserInfo):[],c=Jv(n.providerData,a),u=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!c?.length,f=u?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Vo(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function Xv(n){const e=$e(n);await Kr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jv(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Md(n){return n.map(e=>{var{providerId:t}=e,s=Ca(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Zv(n,e){const t=await Pd(n,{},async()=>{const s=xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await Nd(n,r,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:s};return n.emulatorConfig&&Fn(n.emulatorConfig.host)&&(u.credentials="include"),Cd.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ew(n,e){return Wn(n,"POST","/v2/accounts:revokeToken",ka(n,e))}/**
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
 */class An{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ou(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){$(e.length!==0,"internal-error");const t=ou(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await Zv(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new An;return s&&($(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&($(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&($(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new An,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
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
 */function Ct(n,e){$(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ye{constructor(e){var{uid:t,auth:s,stsTokenManager:r}=e,i=Ca(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ks(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Kv(this,e)}reload(){return Xv(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ye(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Kr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(je(this.auth.app))return Promise.reject(Ft(this.auth));const e=await this.getIdToken();return await ks(this,Gv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,r,i,a,c,u,h,f;const g=(s=t.displayName)!==null&&s!==void 0?s:void 0,_=(r=t.email)!==null&&r!==void 0?r:void 0,T=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,R=(a=t.photoURL)!==null&&a!==void 0?a:void 0,k=(c=t.tenantId)!==null&&c!==void 0?c:void 0,P=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,G=(h=t.createdAt)!==null&&h!==void 0?h:void 0,F=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:q,isAnonymous:re,providerData:U,stsTokenManager:E}=t;$(x&&E,e,"internal-error");const m=An.fromJSON(this.name,E);$(typeof x=="string",e,"internal-error"),Ct(g,e.name),Ct(_,e.name),$(typeof q=="boolean",e,"internal-error"),$(typeof re=="boolean",e,"internal-error"),Ct(T,e.name),Ct(R,e.name),Ct(k,e.name),Ct(P,e.name),Ct(G,e.name),Ct(F,e.name);const y=new Ye({uid:x,auth:e,email:_,emailVerified:q,displayName:g,isAnonymous:re,photoURL:R,phoneNumber:T,tenantId:k,stsTokenManager:m,createdAt:G,lastLoginAt:F});return U&&Array.isArray(U)&&(y.providerData=U.map(w=>Object.assign({},w))),P&&(y._redirectEventId=P),y}static async _fromIdTokenResponse(e,t,s=!1){const r=new An;r.updateFromServerResponse(t);const i=new Ye({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Kr(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];$(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Md(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!i?.length,c=new An;c.updateFromIdToken(s);const u=new Ye({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Vo(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(u,h),u}}/**
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
 */const au=new Map;function _t(n){Tt(n instanceof Function,"Expected a class definition");let e=au.get(n);return e?(Tt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,au.set(n,e),e)}/**
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
 */class kd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}kd.type="NONE";const cu=kd;/**
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
 */function Cr(n,e,t){return`firebase:${n}:${e}:${t}`}class bn{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Cr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Cr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Gr(this.auth,{idToken:e}).catch(()=>{});return t?Ye._fromGetAccountInfoResponse(this.auth,t,e):null}return Ye._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new bn(_t(cu),e,s);const r=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=r[0]||_t(cu);const a=Cr(s,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){let g;if(typeof f=="string"){const _=await Gr(e,{idToken:f}).catch(()=>{});if(!_)break;g=await Ye._fromGetAccountInfoResponse(e,_,f)}else g=Ye._fromJSON(e,f);h!==i&&(c=g),i=h;break}}catch{}const u=r.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new bn(i,e,s):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new bn(i,e,s))}}/**
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
 */function lu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Od(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fd(e))return"Blackberry";if(Ud(e))return"Webos";if(Dd(e))return"Safari";if((e.includes("chrome/")||Vd(e))&&!e.includes("edge/"))return"Chrome";if(Ld(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function Od(n=Ne()){return/firefox\//i.test(n)}function Dd(n=Ne()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vd(n=Ne()){return/crios\//i.test(n)}function xd(n=Ne()){return/iemobile/i.test(n)}function Ld(n=Ne()){return/android/i.test(n)}function Fd(n=Ne()){return/blackberry/i.test(n)}function Ud(n=Ne()){return/webos/i.test(n)}function Da(n=Ne()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function tw(n=Ne()){var e;return Da(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nw(){return Xp()&&document.documentMode===10}function jd(n=Ne()){return Da(n)||Ld(n)||Ud(n)||Fd(n)||/windows phone/i.test(n)||xd(n)}/**
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
 */function Bd(n,e=[]){let t;switch(n){case"Browser":t=lu(Ne());break;case"Worker":t=`${lu(Ne())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Un}/${s}`}/**
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
 */class sw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function rw(n,e={}){return Wn(n,"GET","/v2/passwordPolicy",ka(n,e))}/**
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
 */const iw=6;class ow{constructor(e){var t,s,r,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:iw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,r,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(s=u.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(r=u.containsLowercaseLetter)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class aw{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uu(this),this.idTokenSubscription=new uu(this),this.beforeStateQueue=new sw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_t(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await bn.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Gr(this,{idToken:e}),s=await Ye._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(je(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=r?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&u?.user&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Kr(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(je(this.app))return Promise.reject(Ft(this));const t=e?$e(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return je(this.app)?Promise.reject(Ft(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return je(this.app)?Promise.reject(Ft(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rw(this),t=new ow(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Vs("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await ew(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_t(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await bn.create(this,[_t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if($(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,s,r);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Fv(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Hn(n){return $e(n)}class uu{constructor(e){this.auth=e,this.observer=null,this.addObserver=ig(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Va={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cw(n){Va=n}function lw(n){return Va.loadJS(n)}function uw(){return Va.gapiScript}function hw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function dw(n,e){const t=Yo(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(sn(i,e??{}))return r;lt(r,"already-initialized")}return t.initialize({options:e})}function fw(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(_t);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function pw(n,e,t){const s=Hn(n);$(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=qd(e),{host:a,port:c}=gw(e),u=c===null?"":`:${c}`,h={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){$(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),$(sn(h,s.config.emulator)&&sn(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=h,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,Fn(a)?(qu(`${i}//${a}${u}`),$u("Auth",!0)):mw()}function qd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function gw(n){const e=qd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:hu(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:hu(a)}}}function hu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function mw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class $d{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mt("not implemented")}_getIdTokenResponse(e){return mt("not implemented")}_linkToIdToken(e,t){return mt("not implemented")}_getReauthenticationResolver(e){return mt("not implemented")}}/**
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
 */async function Sn(n,e){return Hv(n,"POST","/v1/accounts:signInWithIdp",ka(n,e))}/**
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
 */const _w="http://localhost";class cn extends $d{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):lt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=t,i=Ca(t,["providerId","signInMethod"]);if(!s||!r)return null;const a=new cn(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Sn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Sn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Sn(e,t)}buildRequest(){const e={requestUri:_w,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=xs(t)}return e}}/**
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
 */class fi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $s extends fi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pt extends $s{constructor(){super("facebook.com")}static credential(e){return cn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pt.PROVIDER_ID="facebook.com";/**
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
 */class pt extends $s{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cn._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return pt.credential(t,s)}catch{return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com";pt.PROVIDER_ID="google.com";/**
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
 */class Nt extends $s{constructor(){super("github.com")}static credential(e){return cn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch{return null}}}Nt.GITHUB_SIGN_IN_METHOD="github.com";Nt.PROVIDER_ID="github.com";/**
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
 */class Mt extends $s{constructor(){super("twitter.com")}static credential(e,t){return cn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Mt.credential(t,s)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
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
 */class Vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await Ye._fromIdTokenResponse(e,s,r),a=du(s);return new Vn({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=du(s);return new Vn({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function du(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Qr extends It{constructor(e,t,s,r){var i;super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Qr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new Qr(e,t,s,r)}}function Wd(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qr._fromErrorAndOperation(n,i,e,s):i})}async function yw(n,e,t=!1){const s=await ks(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Vn._forOperation(n,"link",s)}/**
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
 */async function vw(n,e,t=!1){const{auth:s}=n;if(je(s.app))return Promise.reject(Ft(s));const r="reauthenticate";try{const i=await ks(n,Wd(s,r,e,n),t);$(i.idToken,s,"internal-error");const a=Oa(i.idToken);$(a,s,"internal-error");const{sub:c}=a;return $(n.uid===c,s,"user-mismatch"),Vn._forOperation(n,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&lt(s,"user-mismatch"),i}}/**
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
 */async function ww(n,e,t=!1){if(je(n.app))return Promise.reject(Ft(n));const s="signIn",r=await Wd(n,s,e),i=await Vn._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}function Ew(n,e,t,s){return $e(n).onIdTokenChanged(e,t,s)}function Tw(n,e,t){return $e(n).beforeAuthStateChanged(e,t)}function Iw(n,e,t,s){return $e(n).onAuthStateChanged(e,t,s)}function Aw(n){return $e(n).signOut()}const Yr="__sak";/**
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
 */class Hd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yr,"1"),this.storage.removeItem(Yr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const bw=1e3,Sw=10;class zd extends Hd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);nw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Sw):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},bw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zd.type="LOCAL";const Rw=zd;/**
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
 */class Gd extends Hd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gd.type="SESSION";const Kd=Gd;/**
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
 */function Cw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class pi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new pi(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async h=>h(t.origin,i)),u=await Cw(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pi.receivers=[];/**
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
 */function xa(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Pw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const h=xa("",20);r.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(g){const _=g;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function it(){return window}function Nw(n){it().location.href=n}/**
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
 */function Qd(){return typeof it().WorkerGlobalScope<"u"&&typeof it().importScripts=="function"}async function Mw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kw(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ow(){return Qd()?self:null}/**
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
 */const Yd="firebaseLocalStorageDb",Dw=1,Xr="firebaseLocalStorage",Xd="fbase_key";class Ws{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function gi(n,e){return n.transaction([Xr],e?"readwrite":"readonly").objectStore(Xr)}function Vw(){const n=indexedDB.deleteDatabase(Yd);return new Ws(n).toPromise()}function xo(){const n=indexedDB.open(Yd,Dw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Xr,{keyPath:Xd})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Xr)?e(s):(s.close(),await Vw(),e(await xo()))})})}async function fu(n,e,t){const s=gi(n,!0).put({[Xd]:e,value:t});return new Ws(s).toPromise()}async function xw(n,e){const t=gi(n,!1).get(e),s=await new Ws(t).toPromise();return s===void 0?null:s.value}function pu(n,e){const t=gi(n,!0).delete(e);return new Ws(t).toPromise()}const Lw=800,Fw=3;class Jd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Fw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pi._getInstance(Ow()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Mw(),!this.activeServiceWorker)return;this.sender=new Pw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xo();return await fu(e,Yr,"1"),await pu(e,Yr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>fu(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>xw(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>pu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=gi(r,!1).getAll();return new Ws(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Lw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jd.type="LOCAL";const Uw=Jd;new qs(3e4,6e4);/**
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
 */function La(n,e){return e?_t(e):($(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Fa extends $d{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Sn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function jw(n){return ww(n.auth,new Fa(n),n.bypassAuthState)}function Bw(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),vw(t,new Fa(n),n.bypassAuthState)}async function qw(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),yw(t,new Fa(n),n.bypassAuthState)}/**
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
 */class Zd{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jw;case"linkViaPopup":case"linkViaRedirect":return qw;case"reauthViaPopup":case"reauthViaRedirect":return Bw;default:lt(this.auth,"internal-error")}}resolve(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $w=new qs(2e3,1e4);async function Ww(n,e,t){if(je(n.app))return Promise.reject(Xe(n,"operation-not-supported-in-this-environment"));const s=Hn(n);Rd(n,e,fi);const r=La(s,t);return new en(s,"signInViaPopup",e,r).executeNotNull()}class en extends Zd{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,en.currentPopupAction&&en.currentPopupAction.cancel(),en.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Tt(this.filter.length===1,"Popup operations only handle one event");const e=xa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,en.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$w.get())};e()}}en.currentPopupAction=null;/**
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
 */const Hw="pendingRedirect",Pr=new Map;class zw extends Zd{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Pr.get(this.auth._key());if(!e){try{const s=await Gw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Pr.set(this.auth._key(),e)}return this.bypassAuthState||Pr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gw(n,e){const t=tf(e),s=ef(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}async function Kw(n,e){return ef(n)._set(tf(e),"true")}function Qw(n,e){Pr.set(n._key(),e)}function ef(n){return _t(n._redirectPersistence)}function tf(n){return Cr(Hw,n.config.apiKey,n.name)}/**
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
 */function Yw(n,e,t){return Xw(n,e,t)}async function Xw(n,e,t){if(je(n.app))return Promise.reject(Ft(n));const s=Hn(n);Rd(n,e,fi),await s._initializationPromise;const r=La(s,t);return await Kw(r,s),r._openRedirect(s,e,"signInViaRedirect")}async function Jw(n,e){return await Hn(n)._initializationPromise,nf(n,e,!1)}async function nf(n,e,t=!1){if(je(n.app))return Promise.reject(Ft(n));const s=Hn(n),r=La(s,e),a=await new zw(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
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
 */const Zw=10*60*1e3;class eE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!sf(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Xe(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zw&&this.cachedEventUids.clear(),this.cachedEventUids.has(gu(e))}saveEventToCache(e){this.cachedEventUids.add(gu(e)),this.lastProcessedEventTime=Date.now()}}function gu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function sf({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function tE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sf(n);default:return!1}}/**
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
 */async function nE(n,e={}){return Wn(n,"GET","/v1/projects",e)}/**
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
 */const sE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rE=/^https?/;async function iE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await nE(n);for(const t of e)try{if(oE(t))return}catch{}lt(n,"unauthorized-domain")}function oE(n){const e=Do(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!rE.test(t))return!1;if(sE.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const aE=new qs(3e4,6e4);function mu(){const n=it().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function cE(n){return new Promise((e,t)=>{var s,r,i;function a(){mu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mu(),t(Xe(n,"network-request-failed"))},timeout:aE.get()})}if(!((r=(s=it().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=it().gapi)===null||i===void 0)&&i.load)a();else{const c=hw("iframefcb");return it()[c]=()=>{gapi.load?a():t(Xe(n,"network-request-failed"))},lw(`${uw()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Nr=null,e})}let Nr=null;function lE(n){return Nr=Nr||cE(n),Nr}/**
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
 */const uE=new qs(5e3,15e3),hE="__/auth/iframe",dE="emulator/auth/iframe",fE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gE(n){const e=n.config;$(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ma(e,dE):`https://${n.config.authDomain}/${hE}`,s={apiKey:e.apiKey,appName:n.name,v:Un},r=pE.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${xs(s).slice(1)}`}async function mE(n){const e=await lE(n),t=it().gapi;return $(t,n,"internal-error"),e.open({where:document.body,url:gE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fE,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=Xe(n,"network-request-failed"),c=it().setTimeout(()=>{i(a)},uE.get());function u(){it().clearTimeout(c),r(s)}s.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const _E={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yE=500,vE=600,wE="_blank",EE="http://localhost";class _u{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TE(n,e,t,s=yE,r=vE){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u=Object.assign(Object.assign({},_E),{width:s.toString(),height:r.toString(),top:i,left:a}),h=Ne().toLowerCase();t&&(c=Vd(h)?wE:t),Od(h)&&(e=e||EE,u.scrollbars="yes");const f=Object.entries(u).reduce((_,[T,R])=>`${_}${T}=${R},`,"");if(tw(h)&&c!=="_self")return IE(e||"",c),new _u(null);const g=window.open(e||"",c,f);$(g,n,"popup-blocked");try{g.focus()}catch{}return new _u(g)}function IE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const AE="__/auth/handler",bE="emulator/auth/handler",SE=encodeURIComponent("fac");async function yu(n,e,t,s,r,i){$(n.config.authDomain,n,"auth-domain-config-required"),$(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Un,eventId:r};if(e instanceof fi){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",rg(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof $s){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),h=u?`#${SE}=${encodeURIComponent(u)}`:"";return`${RE(n)}?${xs(c).slice(1)}${h}`}function RE({config:n}){return n.emulator?Ma(n,bE):`https://${n.authDomain}/${AE}`}/**
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
 */const to="webStorageSupport";class CE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kd,this._completeRedirectFn=nf,this._overrideRedirectResult=Qw}async _openPopup(e,t,s,r){var i;Tt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await yu(e,t,s,Do(),r);return TE(e,a,xa())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await yu(e,t,s,Do(),r);return Nw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(Tt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await mE(e),s=new eE(e);return t.register("authEvent",r=>($(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(to,{type:to},r=>{var i;const a=(i=r?.[0])===null||i===void 0?void 0:i[to];a!==void 0&&t(!!a),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return jd()||Dd()||Da()}}const PE=CE;var vu="@firebase/auth",wu="1.10.8";/**
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
 */class NE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ME(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kE(n){Pn(new rn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;$(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bd(n)},h=new aw(s,r,i,u);return fw(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Pn(new rn("auth-internal",e=>{const t=Hn(e.getProvider("auth").getImmediate());return(s=>new NE(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(vu,wu,ME(n)),Vt(vu,wu,"esm2017")}/**
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
 */const OE=5*60,DE=Bu("authIdTokenMaxAge")||OE;let Eu=null;const VE=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>DE)return;const r=t?.token;Eu!==r&&(Eu=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function xE(n=Gu()){const e=Yo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=dw(n,{popupRedirectResolver:PE,persistence:[Uw,Rw,Kd]}),s=Bu("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=VE(i.toString());Tw(t,a,()=>a(t.currentUser)),Ew(t,c=>a(c))}}const r=Uu("auth");return r&&pw(t,`http://${r}`),t}function LE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}cw({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=Xe("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",LE().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kE("Browser");const FE={apiKey:"AIzaSyCmmMBXWcWmljEO9lWGK7VNqrvNI3Zu1bI",authDomain:"chess-openings-7a1b2.firebaseapp.com",projectId:"chess-openings-7a1b2",storageBucket:"chess-openings-7a1b2.firebasestorage.app",messagingSenderId:"800214788543",appId:"1:800214788543:web:85b95d62fd65068180d90a"},rf=zu(FE),of=yv(rf),ln=xE(rf),af=new pt,Ze=new ft(null),Ua=new ft(!1),wI=new Promise(n=>{Ua.link(e=>{e&&n()})}),EI=new Promise(n=>{Ze.link(e=>{e&&n(e)})});Iw(ln,n=>{n?Ze.value=n:Ze.value=null,Ua.value=!0});(async()=>{const n=await UE();n&&(Ze.value=n,Ua.value=!0)})();async function TI(){console.log(`current user ${ln.currentUser}`);const n=await Ww(ln,af);return console.log("User signed in:",n.user),console.log("User ID (uid):",n.user.uid),n.user}async function II(){console.log(`current user ${ln.currentUser}`),await Yw(ln,af)}async function UE(){const n=await Jw(ln);return n?(console.log("User signed in:",n.user),console.log("User ID (uid):",n.user.uid),n.user):(console.log("No user signed in."),null)}async function AI(){try{await Aw(ln),console.log("User logged out")}catch(n){console.error("Error logging out:",n)}}async function cf(n,e){await Dv(pd(of,"users",n),{state:e}),console.log("User state saved successfully!")}async function bI(n){const e=await kv(pd(of,"users",n));return e.exists()?(console.log("User state:",e.data().state),e.data().state):(console.log("No user state found."),null)}window.manualSave=async n=>{await cf(Ze.value.uid,n)};const De=(n,e)=>{const t=new Du.Position(n);if(!t.play(e))throw new Error(`Invalid move: ${e} at position ${n}`);return t.fen()},SI=Object.freeze(Object.defineProperty({__proto__:null,getFenAfterMove:De},Symbol.toStringTag,{value:"Module"})),Fe=n=>n.split(" ")[1]==="w",RI=Object.freeze(Object.defineProperty({__proto__:null,isFenWhiteToMove:Fe},Symbol.toStringTag,{value:"Module"})),lf=n=>`${n.split(" ").slice(0,-2).join(" ")} 0 1`,CI=Object.freeze(Object.defineProperty({__proto__:null,sanitizeFen:lf},Symbol.toStringTag,{value:"Module"})),uf=n=>lf(n.fen()),PI=Object.freeze(Object.defineProperty({__proto__:null,getFen:uf},Symbol.toStringTag,{value:"Module"})),se=uf(new Ln),NI=Object.freeze(Object.defineProperty({__proto__:null,initialFen:se},Symbol.toStringTag,{value:"Module"})),mi=n=>{const e=new Du.Position(n);return e.moves().map(t=>e.notation(t))},MI=Object.freeze(Object.defineProperty({__proto__:null,getFenMoves:mi},Symbol.toStringTag,{value:"Module"})),no=n=>n.state==="openingExplore",jE=n=>n.state==="endgameExplore",BE=n=>n.state==="openingReviewUserMove",qE=n=>n.state==="openingReviewAutoMovePending",$E=n=>n.state==="endgameReviewUserMove",WE=n=>n.state==="endgameReviewAutoMovePending",He=n=>"isOpening"in n&&n.isOpening,xn=n=>"isEndgame"in n&&n.isEndgame,Ue=n=>"isReviewing"in n&&n.isReviewing,Lo=n=>"isPendingAutoMove"in n&&n.isPendingAutoMove,hf=n=>He(n)&&Ue(n),kI=n=>Ue(n)&&!!n.previousChessNode&&!!n.previousFen,Os=n=>({repository:n.repository,isWhite:n.isWhite,fen:n.fen,stack:n.stack,stackPosition:n.stackPosition,chessNode:n.chessNode,failedMoves:n.failedMoves}),Tu=n=>({isEndgame:n.isEndgame,baseFen:n.baseFen}),mr=n=>({isReviewing:n.isReviewing,previousChessNode:n.previousChessNode,previousHistory:n.previousHistory,previousBaseFen:n.previousBaseFen,previousFen:n.previousFen,previousGrade:n.previousGrade,previousWasCramming:n.previousWasCramming,previousFailedReview:n.previousFailedReview,nextFailedReview:n.nextFailedReview,nextTimestampStart:n.nextTimestampStart,prefix:n.prefix,statistics:n.statistics}),HE=n=>({isReviewing:n.isReviewing,previousChessNode:n.previousChessNode,previousHistory:n.previousHistory,previousBaseFen:n.previousBaseFen,previousFen:n.previousFen,previousGrade:n.previousGrade,previousWasCramming:n.previousWasCramming,previousFailedReview:n.previousFailedReview,nextFailedReview:n.nextFailedReview,nextTimestampStart:n.nextTimestampStart,prefix:n.prefix}),Iu=n=>({isOpening:n.isOpening,isReviewing:n.isReviewing,initialHistory:n.initialHistory,targetHistory:n.targetHistory}),Fo=n=>xn(n)?n.baseFen:se,so=n=>n.stack.slice(0,n.stackPosition).map(e=>e.move),Uo=(n,e)=>{const t=Fe(e);return xn(n)&&(e=ot(e)),n.repository.getChessNode(e,t===n.isWhite)},df=n=>n.stackPosition===0?null:n.stack[n.stackPosition-1],_r=n=>{const e=df(n),t=e?e.fen:xn(n)?n.baseFen:se;return Uo(n,t)},OI=n=>{const e=df(n);return e?e.fenBeforeMove:null},zE=n=>n.stack.slice(0,n.stackPosition).map(e=>e.move),ro=(n,e,t)=>{const s=De(n.fen,e);let r=null;if(n.chessNode){const a=n.chessNode.isOpening?e:lo(n.fen,e);n.chessNode.moveMap[a]&&(r=n.chessNode.moveMap[a])}r||(r=n.repository.getChessNode(t?s:ot(s),Fe(s)===n.isWhite)??null);const i=!n.stack[n.stackPosition]||n.stack[n.stackPosition].move!==e;return{...Os(n),fen:s,stack:i?[...n.stack.slice(0,n.stackPosition),{fen:s,fenBeforeMove:n.fen,move:e}]:n.stack,stackPosition:n.stackPosition+1,chessNode:r,failedMoves:[]}},yn=(n,e)=>{let t;if(e===0)t=Fo(n);else{const r=n.stack[e-1].fenBeforeMove,i=n.stack[e-1].move;t=De(r,i)}const s=n.repository.getChessNode(t,Fe(t)===n.isWhite)??null;return{...Os(n),fen:t,stackPosition:e,chessNode:s,failedMoves:[]}},GE=n=>{const e=!n.isWhite,t=n.repository.getChessNode(n.fen,Fe(n.fen)===e)??null;return{...Os(n),isWhite:e,chessNode:t,failedMoves:[]}},Au=(n,e)=>{const t=n.getInitialChessNode(e)??null;return{repository:n,isWhite:e,fen:se,stack:[],stackPosition:0,chessNode:t,failedMoves:[]}},bu=(n,e)=>({repository:n,isWhite:!0,fen:e,stack:[],stackPosition:0,chessNode:n.getChessNode(ot(e),!0)??null,failedMoves:[]}),Su=(n,e)=>({isReviewing:!0,previousChessNode:null,previousHistory:null,previousBaseFen:null,previousFen:null,previousGrade:null,previousWasCramming:!1,previousFailedReview:!1,nextFailedReview:!1,nextTimestampStart:Date.now(),prefix:n,statistics:e}),yr=()=>({isOpening:!0}),io=n=>({isEndgame:!0,baseFen:n}),KE=n=>{if(!n.repository)throw new Error("State is missing repository");if(typeof n.isWhite!="boolean")throw new Error("State is missing isWhite");if(typeof n.fen!="string")throw new Error("State is missing fen");const e=mi(n.fen);if(!Array.isArray(n.stack))throw new Error("State stack is not an array");if(n.chessNode){if(n.chessNode.isOpening){if(n.chessNode.fen!==n.fen)throw new Error(`State chessNode fen ${n.chessNode.fen} does not match state fen ${n.fen}`)}else if(n.chessNode.fen!==ot(n.fen))throw new Error(`State chessNode fen ${n.chessNode.fen} does not match canonical fen ${ot(n.fen)} for state fen ${n.fen}`);const t=Fe(n.fen),s=n.isWhite,r=n.chessNode.isUserMove,i=t===s;if(r!==i)throw new Error(`State chessNode isUserMove ${r} does not match expected ${i} based on fen ${n.fen} and isWhite ${n.isWhite}`)}if(n.stack.forEach(t=>{if(typeof t.fen!="string")throw new Error("State stack entry is missing fen");if(typeof t.fenBeforeMove!="string")throw new Error("State stack entry is missing fenBeforeMove");if(typeof t.move!="string")throw new Error("State stack entry is missing move");if(De(t.fenBeforeMove,t.move)!==t.fen)throw new Error(`State stack entry move does not match fens: ${t.move} from ${t.fenBeforeMove} should yield ${De(t.fenBeforeMove,t.move)}, but got ${t.fen}`)}),typeof n.stackPosition!="number")throw new Error("State is missing stackPosition");if(n.stackPosition<0)throw new Error("State stackPosition is negative");if(n.stackPosition>n.stack.length)throw new Error("State stackPosition is greater than stack length");if(!Array.isArray(n.failedMoves))throw new Error("State failedMoves is not an array");n.failedMoves.forEach(t=>{if(!e.includes(t))throw new Error(`State failedMoves entry ${t} is not a legal move for fen ${n.fen}`)})},QE=n=>{if(typeof n.baseFen!="string")throw new Error("Endgame state is missing baseFen");if(n.baseFen===se)throw new Error("Endgame state baseFen cannot be the initial fen")},YE=n=>{if(typeof n.pendingAutoMove!="string")throw new Error("Pending auto move state is missing pendingAutoMove");if(!mi(n.fen).includes(n.pendingAutoMove))throw new Error(`Pending auto move ${n.pendingAutoMove} is not a legal move for fen ${n.fen}`)},XE=n=>{if(n.targetHistory.length<=n.initialHistory.length)throw new Error("Reviewing opening state targetHistory must be longer than initialHistory");let e=n.repository.getInitialChessNode(n.isWhite);if(!e)throw new Error(`Reviewing opening state could not find initial chess node for isWhite ${n.isWhite}`);for(let t=0;t<n.targetHistory.length;t++){const s=n.targetHistory[t];if(t<n.initialHistory.length){const r=n.initialHistory[t];if(s!==r)throw new Error(`Reviewing opening state targetHistory move ${s} does not match initialHistory move ${r} at index ${t}`)}if(e=e.moveMap[s],!e)throw new Error(`Reviewing opening state targetHistory move ${s} at index ${t} is not a legal move from the previous moves`)}},JE=n=>{if(!n.chessNode)throw new Error("Reviewing state is missing chessNode");if(n.previousChessNode===void 0)throw new Error("Reviewing state is missing previousChessNode");if(n.previousFen===void 0)throw new Error("Reviewing state is missing previousFen");if(n.previousHistory===void 0)throw new Error("Reviewing state is missing previousHistory");if(n.previousBaseFen===void 0)throw new Error("Reviewing state is missing previousBaseFen");if(n.previousGrade!==null&&typeof n.previousGrade!="number")throw new Error("Reviewing state previousGrade must be a number or null");if(typeof n.previousWasCramming!="boolean")throw new Error("Reviewing state is missing previousWasCramming");if(typeof n.previousFailedReview!="boolean")throw new Error("Reviewing state is missing previousFailedReview");if(typeof n.nextFailedReview!="boolean")throw new Error("Reviewing state is missing nextFailedReview");if(typeof n.nextTimestampStart!="number")throw new Error("Reviewing state is missing nextTimestampStart");if(n.prefix!==null&&typeof n.prefix!="object")throw new Error("Reviewing state prefix must be an object or null");if(typeof n.statistics!="object")throw new Error("Reviewing state is missing statistics")},ZE=n=>{KE(n),xn(n)&&QE(n),Lo(n)&&YE(n),hf(n)&&XE(n),Ue(n)&&JE(n)},eT=n=>50+50*(2/(1+Math.exp(-.00368208*n))-1),DI=n=>{const e=.00368208,t=n/100;return Math.log(t/(1-t))/e},VI=(n,e)=>{const t=e?n.s:-n.s;return n.m==="mate"?t>=0?100:0:eT(t)},tT=(n,e)=>n.m==="mate"&&e.m==="mate"?0:n.m==="mate"?-1:e.m==="mate"?1:n.s===e.s?0:n.s>e.s?1:-1,Ru=(n,e)=>tT(n,e)===-1,xI=(n,e)=>{const t=e?n.s:-n.s;return n.m==="mate"?t===0?"#":`#${t>0?Math.ceil(t/2):Math.floor(t/2)}`:t===0?"0":`${t>0?"+":""}${(t/100).toFixed(2)}`};var H=(n=>(n[n.New=0]="New",n[n.Learning=1]="Learning",n[n.Review=2]="Review",n[n.Relearning=3]="Relearning",n))(H||{}),D=(n=>(n[n.Manual=0]="Manual",n[n.Again=1]="Again",n[n.Hard=2]="Hard",n[n.Good=3]="Good",n[n.Easy=4]="Easy",n))(D||{});class z{static card(e){return{...e,state:z.state(e.state),due:z.time(e.due),last_review:e.last_review?z.time(e.last_review):void 0}}static rating(e){if(typeof e=="string"){const t=e.charAt(0).toUpperCase(),s=e.slice(1).toLowerCase(),r=D[`${t}${s}`];if(r===void 0)throw new Error(`Invalid rating:[${e}]`);return r}else if(typeof e=="number")return e;throw new Error(`Invalid rating:[${e}]`)}static state(e){if(typeof e=="string"){const t=e.charAt(0).toUpperCase(),s=e.slice(1).toLowerCase(),r=H[`${t}${s}`];if(r===void 0)throw new Error(`Invalid state:[${e}]`);return r}else if(typeof e=="number")return e;throw new Error(`Invalid state:[${e}]`)}static time(e){const t=new Date(e);if(typeof e=="object"&&e!==null&&!Number.isNaN(Date.parse(e)||+t))return t;if(typeof e=="string"){const s=Date.parse(e);if(Number.isNaN(s))throw new Error(`Invalid date:[${e}]`);return new Date(s)}else if(typeof e=="number")return new Date(e);throw new Error(`Invalid date:[${e}]`)}static review_log(e){return{...e,due:z.time(e.due),rating:z.rating(e.rating),state:z.state(e.state),review:z.time(e.review)}}}Date.prototype.scheduler=function(n,e){return ze(this,n,e)};Date.prototype.diff=function(n,e){return Rn(this,n,e)};Date.prototype.format=function(){return nT(this)};Date.prototype.dueFormat=function(n,e,t){return sT(this,n,e,t)};function ze(n,e,t){return new Date(t?z.time(n).getTime()+e*24*60*60*1e3:z.time(n).getTime()+e*60*1e3)}function Rn(n,e,t){if(!n||!e)throw new Error("Invalid date");const s=z.time(n).getTime()-z.time(e).getTime();let r=0;switch(t){case"days":r=Math.floor(s/(24*60*60*1e3));break;case"minutes":r=Math.floor(s/(60*1e3));break}return r}function nT(n){const e=z.time(n),t=e.getFullYear(),s=e.getMonth()+1,r=e.getDate(),i=e.getHours(),a=e.getMinutes(),c=e.getSeconds();return`${t}-${ls(s)}-${ls(r)} ${ls(i)}:${ls(a)}:${ls(c)}`}function ls(n){return n<10?`0${n}`:`${n}`}const oo=[60,60,24,31,12],ao=["second","min","hour","day","month","year"];function sT(n,e,t,s=ao){n=z.time(n),e=z.time(e),s.length!==ao.length&&(s=ao);let r=n.getTime()-e.getTime(),i=0;for(r/=1e3,i=0;i<oo.length&&!(r<oo[i]);i++)r/=oo[i];return`${Math.floor(r)}${t?s[i]:""}`}const rT=Object.freeze([D.Again,D.Hard,D.Good,D.Easy]),iT=[{start:2.5,end:7,factor:.15},{start:7,end:20,factor:.1},{start:20,end:1/0,factor:.05}];function oT(n,e,t){let s=1;for(const a of iT)s+=a.factor*Math.max(Math.min(n,a.end)-a.start,0);n=Math.min(n,t);let r=Math.max(2,Math.round(n-s));const i=Math.min(Math.round(n+s),t);return n>e&&(r=Math.max(r,e+1)),r=Math.min(r,i),{min_ivl:r,max_ivl:i}}function Oe(n,e,t){return Math.min(Math.max(n,e),t)}function aT(n,e){const t=Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()),s=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate());return Math.floor((s-t)/864e5)}const cT=n=>{const e=n.slice(-1),t=parseInt(n.slice(0,-1),10);if(Number.isNaN(t)||!Number.isFinite(t)||t<0)throw new Error(`Invalid step value: ${n}`);switch(e){case"m":return t;case"h":return t*60;case"d":return t*1440;default:throw new Error(`Invalid step unit: ${n}, expected m/h/d`)}},lT=(n,e,t)=>{const s=e===H.Relearning||e===H.Review?n.relearning_steps:n.learning_steps,r=s.length;if(r===0||t>=r)return{};const i=s[0],a=cT,c=()=>a(i),u=()=>{if(r===1)return Math.round(a(i)*1.5);const T=s[1];return Math.round((a(i)+a(T))/2)},h=T=>T<0||T>=r?null:s[T],f=T=>a(T),g={},_=h(Math.max(0,t));if(e===H.Review)return g[D.Again]={scheduled_minutes:a(_),next_step:0},g;{g[D.Again]={scheduled_minutes:c(),next_step:0},g[D.Hard]={scheduled_minutes:u(),next_step:t};const T=h(t+1);if(T){const R=f(T);R&&(g[D.Good]={scheduled_minutes:Math.round(R),next_step:t+1})}}return g};function uT(){const n=this.review_time.getTime(),e=this.current.reps,t=this.current.difficulty*this.current.stability;return`${n}_${e}_${t}`}var _i=(n=>(n.SCHEDULER="Scheduler",n.LEARNING_STEPS="LearningSteps",n.SEED="Seed",n))(_i||{});class ff{last;current;review_time;next=new Map;algorithm;strategies;elapsed_days=0;constructor(e,t,s,r){this.algorithm=s,this.last=z.card(e),this.current=z.card(e),this.review_time=z.time(t),this.strategies=r,this.init()}checkGrade(e){if(!Number.isFinite(e)||e<0||e>4)throw new Error(`Invalid grade "${e}",expected 1-4`)}init(){const{state:e,last_review:t}=this.current;let s=0;e!==H.New&&t&&(s=aT(t,this.review_time)),this.current.last_review=this.review_time,this.elapsed_days=s,this.current.elapsed_days=s,this.current.reps+=1;let r=uT;if(this.strategies){const i=this.strategies.get(_i.SEED);i&&(r=i)}this.algorithm.seed=r.call(this)}preview(){return{[D.Again]:this.review(D.Again),[D.Hard]:this.review(D.Hard),[D.Good]:this.review(D.Good),[D.Easy]:this.review(D.Easy),[Symbol.iterator]:this.previewIterator.bind(this)}}*previewIterator(){for(const e of rT)yield this.review(e)}review(e){const{state:t}=this.last;let s;switch(this.checkGrade(e),t){case H.New:s=this.newState(e);break;case H.Learning:case H.Relearning:s=this.learningState(e);break;case H.Review:s=this.reviewState(e);break}return s}buildLog(e){const{last_review:t,due:s,elapsed_days:r}=this.last;return{rating:e,state:this.current.state,due:t||s,stability:this.current.stability,difficulty:this.current.difficulty,elapsed_days:this.elapsed_days,last_elapsed_days:r,scheduled_days:this.current.scheduled_days,learning_steps:this.current.learning_steps,review:this.review_time}}}class hT{c;s0;s1;s2;constructor(e){const t=dT();this.c=1,this.s0=t(" "),this.s1=t(" "),this.s2=t(" "),e==null&&(e=Date.now()),this.s0-=t(e),this.s0<0&&(this.s0+=1),this.s1-=t(e),this.s1<0&&(this.s1+=1),this.s2-=t(e),this.s2<0&&(this.s2+=1)}next(){const e=2091639*this.s0+this.c*23283064365386963e-26;return this.s0=this.s1,this.s1=this.s2,this.c=e|0,this.s2=e-this.c,this.s2}set state(e){this.c=e.c,this.s0=e.s0,this.s1=e.s1,this.s2=e.s2}get state(){return{c:this.c,s0:this.s0,s1:this.s1,s2:this.s2}}}function dT(){let n=4022871197;return function(t){t=String(t);for(let s=0;s<t.length;s++){n+=t.charCodeAt(s);let r=.02519603282416938*n;n=r>>>0,r-=n,r*=n,n=r>>>0,r-=n,n+=r*4294967296}return(n>>>0)*23283064365386963e-26}}function fT(n){const e=new hT(n),t=()=>e.next();return t.int32=()=>e.next()*4294967296|0,t.double=()=>t()+(t()*2097152|0)*11102230246251565e-32,t.state=()=>e.state,t.importState=s=>(e.state=s,t),t}const pT=.9,gT=36500,mT=!1,yi=!0,_T=Object.freeze(["1m","10m"]),yT=Object.freeze(["10m"]),Ge=.001,vr=100,Cu=.5,vT=.1542,Pu=Object.freeze([.212,1.2931,2.3065,8.2956,6.4133,.8334,3.0194,.001,1.8722,.1666,.796,1.4835,.0614,.2629,1.6483,.6014,1.8729,.5425,.0912,.0658,vT]),wT=2,ET=(n,e=yi)=>[[Ge,vr],[Ge,vr],[Ge,vr],[Ge,vr],[1,10],[.001,4],[.001,4],[.001,.75],[0,4.5],[0,.8],[.001,3.5],[.001,5],[.001,.25],[.001,.9],[0,4],[0,1],[1,6],[0,n],[0,n],[e?.01:0,.8],[.1,.8]],co=(n,e,t=yi)=>{let s=wT;if(Math.max(0,e)>1){const i=-(Math.log(n[11])+Math.log(Math.pow(2,n[13])-1)+n[14]*.3)/e;s=Oe(+i.toFixed(8),.01,2)}return ET(s,t).slice(0,n.length).map(([i,a],c)=>Oe(n[c]||0,i,a))},ja=(n,e=0,t=yi)=>{if(n===void 0)return[...Pu];switch(n.length){case 21:return co(Array.from(n),e,t);case 19:return console.debug("[FSRS-6]auto fill w from 19 to 21 length"),co(Array.from(n),e,t).concat([0,Cu]);case 17:{const s=co(Array.from(n),e,t);return s[4]=+(s[5]*2+s[4]).toFixed(8),s[5]=+(Math.log(s[5]*3+1)/3).toFixed(8),s[6]=+(s[6]+.5).toFixed(8),console.debug("[FSRS-6]auto fill w from 17 to 21 length"),s.concat([0,0,0,Cu])}default:return console.warn("[FSRS]Invalid parameters length, using default parameters"),[...Pu]}},jo=n=>{const e=Array.isArray(n?.learning_steps)?n.learning_steps:_T,t=Array.isArray(n?.relearning_steps)?n.relearning_steps:yT,s=n?.enable_short_term??yi,r=ja(n?.w,t.length,s);return{request_retention:n?.request_retention||pT,maximum_interval:n?.maximum_interval||gT,w:r,enable_fuzz:n?.enable_fuzz??mT,enable_short_term:s,learning_steps:e,relearning_steps:t}};function Jr(n,e){return{due:n?z.time(n):new Date,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:0,lapses:0,learning_steps:0,state:H.New,last_review:void 0}}const Ba=n=>{const e=typeof n=="number"?-n:-n[20],t=Math.exp(Math.pow(e,-1)*Math.log(.9))-1;return{decay:e,factor:+t.toFixed(8)}};function Bo(n,e,t){const{decay:s,factor:r}=Ba(n);return+Math.pow(1+r*e/t,s).toFixed(8)}class TT{param;intervalModifier;_seed;constructor(e){this.param=new Proxy(jo(e),this.params_handler_proxy()),this.intervalModifier=this.calculate_interval_modifier(this.param.request_retention),this.forgetting_curve=Bo.bind(this,this.param.w)}get interval_modifier(){return this.intervalModifier}set seed(e){this._seed=e}calculate_interval_modifier(e){if(e<=0||e>1)throw new Error("Requested retention rate should be in the range (0,1]");const{decay:t,factor:s}=Ba(this.param.w);return+((Math.pow(e,1/t)-1)/s).toFixed(8)}get parameters(){return this.param}set parameters(e){this.update_parameters(e)}params_handler_proxy(){const e=this;return{set:function(t,s,r){return s==="request_retention"&&Number.isFinite(r)?e.intervalModifier=e.calculate_interval_modifier(Number(r)):s==="w"&&(r=ja(r,t.relearning_steps.length,t.enable_short_term),e.forgetting_curve=Bo.bind(this,r),e.intervalModifier=e.calculate_interval_modifier(Number(t.request_retention))),Reflect.set(t,s,r),!0}}}update_parameters(e){const t=jo(e);for(const s in t){const r=s;this.param[r]=t[r]}}init_stability(e){return Math.max(this.param.w[e-1],.1)}init_difficulty(e){return+(this.param.w[4]-Math.exp((e-1)*this.param.w[5])+1).toFixed(8)}apply_fuzz(e,t){if(!this.param.enable_fuzz||e<2.5)return Math.round(e);const r=fT(this._seed)(),{min_ivl:i,max_ivl:a}=oT(e,t,this.param.maximum_interval);return Math.floor(r*(a-i+1)+i)}next_interval(e,t){const s=Math.min(Math.max(1,Math.round(e*this.intervalModifier)),this.param.maximum_interval);return this.apply_fuzz(s,t)}linear_damping(e,t){return+(e*(10-t)/9).toFixed(8)}next_difficulty(e,t){const s=-this.param.w[6]*(t-3),r=e+this.linear_damping(s,e);return Oe(this.mean_reversion(this.init_difficulty(D.Easy),r),1,10)}mean_reversion(e,t){return+(this.param.w[7]*e+(1-this.param.w[7])*t).toFixed(8)}next_recall_stability(e,t,s,r){const i=D.Hard===r?this.param.w[15]:1,a=D.Easy===r?this.param.w[16]:1;return+Oe(t*(1+Math.exp(this.param.w[8])*(11-e)*Math.pow(t,-this.param.w[9])*(Math.exp((1-s)*this.param.w[10])-1)*i*a),Ge,36500).toFixed(8)}next_forget_stability(e,t,s){return+Oe(this.param.w[11]*Math.pow(e,-this.param.w[12])*(Math.pow(t+1,this.param.w[13])-1)*Math.exp((1-s)*this.param.w[14]),Ge,36500).toFixed(8)}next_short_term_stability(e,t){const s=Math.pow(e,-this.param.w[19])*Math.exp(this.param.w[17]*(t-3+this.param.w[18])),r=t>=3?Math.max(s,1):s;return+Oe(e*r,Ge,36500).toFixed(8)}forgetting_curve;next_state(e,t,s){const{difficulty:r,stability:i}=e??{difficulty:0,stability:0};if(t<0)throw new Error(`Invalid delta_t "${t}"`);if(s<0||s>4)throw new Error(`Invalid grade "${s}"`);if(r===0&&i===0)return{difficulty:Oe(this.init_difficulty(s),1,10),stability:this.init_stability(s)};if(s===0)return{difficulty:r,stability:i};if(r<1||i<Ge)throw new Error(`Invalid memory state { difficulty: ${r}, stability: ${i} }`);const a=this.forgetting_curve(t,i),c=this.next_recall_stability(r,i,a,s),u=this.next_forget_stability(r,i,a),h=this.next_short_term_stability(i,s);let f=c;if(s===1){let[_,T]=[0,0];this.param.enable_short_term&&(_=this.param.w[17],T=this.param.w[18]);const R=i/Math.exp(_*T);f=Oe(+R.toFixed(8),Ge,u)}return t===0&&this.param.enable_short_term&&(f=h),{difficulty:this.next_difficulty(r,s),stability:f}}}class Nu extends ff{learningStepsStrategy;constructor(e,t,s,r){super(e,t,s,r);let i=lT;if(this.strategies){const a=this.strategies.get(_i.LEARNING_STEPS);a&&(i=a)}this.learningStepsStrategy=i}getLearningInfo(e,t){const s=this.algorithm.parameters;e.learning_steps=e.learning_steps||0;const r=this.learningStepsStrategy(s,e.state,(this.current.state===H.Learning&&t!==D.Again&&t!==D.Hard,e.learning_steps)),i=Math.max(0,r[t]?.scheduled_minutes??0),a=Math.max(0,r[t]?.next_step??0);return{scheduled_minutes:i,next_steps:a}}applyLearningSteps(e,t,s){const{scheduled_minutes:r,next_steps:i}=this.getLearningInfo(this.current,t);if(r>0&&r<1440)e.learning_steps=i,e.scheduled_days=0,e.state=s,e.due=ze(this.review_time,Math.round(r),!1);else if(e.state=H.Review,r>=1440)e.learning_steps=i,e.due=ze(this.review_time,Math.round(r),!1),e.scheduled_days=Math.floor(r/1440);else{e.learning_steps=0;const a=this.algorithm.next_interval(e.stability,this.elapsed_days);e.scheduled_days=a,e.due=ze(this.review_time,a,!0)}}newState(e){const t=this.next.get(e);if(t)return t;const s=z.card(this.current);s.difficulty=Oe(this.algorithm.init_difficulty(e),1,10),s.stability=this.algorithm.init_stability(e),this.applyLearningSteps(s,e,H.Learning);const r={card:s,log:this.buildLog(e)};return this.next.set(e,r),r}learningState(e){const t=this.next.get(e);if(t)return t;const{state:s,difficulty:r,stability:i}=this.last,a=z.card(this.current);a.difficulty=this.algorithm.next_difficulty(r,e),a.stability=this.algorithm.next_short_term_stability(i,e),this.applyLearningSteps(a,e,s);const c={card:a,log:this.buildLog(e)};return this.next.set(e,c),c}reviewState(e){const t=this.next.get(e);if(t)return t;const s=this.elapsed_days,{difficulty:r,stability:i}=this.last,a=this.algorithm.forgetting_curve(s,i),c=z.card(this.current),u=z.card(this.current),h=z.card(this.current),f=z.card(this.current);this.next_ds(c,u,h,f,r,i,a),this.next_interval(u,h,f,s),this.next_state(u,h,f),this.applyLearningSteps(c,D.Again,H.Relearning),c.lapses+=1;const g={card:c,log:this.buildLog(D.Again)},_={card:u,log:super.buildLog(D.Hard)},T={card:h,log:super.buildLog(D.Good)},R={card:f,log:super.buildLog(D.Easy)};return this.next.set(D.Again,g),this.next.set(D.Hard,_),this.next.set(D.Good,T),this.next.set(D.Easy,R),this.next.get(e)}next_ds(e,t,s,r,i,a,c){e.difficulty=this.algorithm.next_difficulty(i,D.Again);const u=a/Math.exp(this.algorithm.parameters.w[17]*this.algorithm.parameters.w[18]),h=this.algorithm.next_forget_stability(i,a,c);e.stability=Oe(+u.toFixed(8),Ge,h),t.difficulty=this.algorithm.next_difficulty(i,D.Hard),t.stability=this.algorithm.next_recall_stability(i,a,c,D.Hard),s.difficulty=this.algorithm.next_difficulty(i,D.Good),s.stability=this.algorithm.next_recall_stability(i,a,c,D.Good),r.difficulty=this.algorithm.next_difficulty(i,D.Easy),r.stability=this.algorithm.next_recall_stability(i,a,c,D.Easy)}next_interval(e,t,s,r){let i,a;i=this.algorithm.next_interval(e.stability,r),a=this.algorithm.next_interval(t.stability,r),i=Math.min(i,a),a=Math.max(a,i+1);const c=Math.max(this.algorithm.next_interval(s.stability,r),a+1);e.scheduled_days=i,e.due=ze(this.review_time,i,!0),t.scheduled_days=a,t.due=ze(this.review_time,a,!0),s.scheduled_days=c,s.due=ze(this.review_time,c,!0)}next_state(e,t,s){e.state=H.Review,e.learning_steps=0,t.state=H.Review,t.learning_steps=0,s.state=H.Review,s.learning_steps=0}}class Mu extends ff{newState(e){const t=this.next.get(e);if(t)return t;this.current.scheduled_days=0,this.current.elapsed_days=0;const s=z.card(this.current),r=z.card(this.current),i=z.card(this.current),a=z.card(this.current);return this.init_ds(s,r,i,a),this.next_interval(s,r,i,a,0),this.next_state(s,r,i,a),this.update_next(s,r,i,a),this.next.get(e)}init_ds(e,t,s,r){e.difficulty=Oe(this.algorithm.init_difficulty(D.Again),1,10),e.stability=this.algorithm.init_stability(D.Again),t.difficulty=Oe(this.algorithm.init_difficulty(D.Hard),1,10),t.stability=this.algorithm.init_stability(D.Hard),s.difficulty=Oe(this.algorithm.init_difficulty(D.Good),1,10),s.stability=this.algorithm.init_stability(D.Good),r.difficulty=Oe(this.algorithm.init_difficulty(D.Easy),1,10),r.stability=this.algorithm.init_stability(D.Easy)}learningState(e){return this.reviewState(e)}reviewState(e){const t=this.next.get(e);if(t)return t;const s=this.elapsed_days,{difficulty:r,stability:i}=this.last,a=this.algorithm.forgetting_curve(s,i),c=z.card(this.current),u=z.card(this.current),h=z.card(this.current),f=z.card(this.current);return this.next_ds(c,u,h,f,r,i,a),this.next_interval(c,u,h,f,s),this.next_state(c,u,h,f),c.lapses+=1,this.update_next(c,u,h,f),this.next.get(e)}next_ds(e,t,s,r,i,a,c){e.difficulty=this.algorithm.next_difficulty(i,D.Again);const u=this.algorithm.next_forget_stability(i,a,c);e.stability=Oe(a,Ge,u),t.difficulty=this.algorithm.next_difficulty(i,D.Hard),t.stability=this.algorithm.next_recall_stability(i,a,c,D.Hard),s.difficulty=this.algorithm.next_difficulty(i,D.Good),s.stability=this.algorithm.next_recall_stability(i,a,c,D.Good),r.difficulty=this.algorithm.next_difficulty(i,D.Easy),r.stability=this.algorithm.next_recall_stability(i,a,c,D.Easy)}next_interval(e,t,s,r,i){let a,c,u,h;a=this.algorithm.next_interval(e.stability,i),c=this.algorithm.next_interval(t.stability,i),u=this.algorithm.next_interval(s.stability,i),h=this.algorithm.next_interval(r.stability,i),a=Math.min(a,c),c=Math.max(c,a+1),u=Math.max(u,c+1),h=Math.max(h,u+1),e.scheduled_days=a,e.due=ze(this.review_time,a,!0),t.scheduled_days=c,t.due=ze(this.review_time,c,!0),s.scheduled_days=u,s.due=ze(this.review_time,u,!0),r.scheduled_days=h,r.due=ze(this.review_time,h,!0)}next_state(e,t,s,r){e.state=H.Review,e.learning_steps=0,t.state=H.Review,t.learning_steps=0,s.state=H.Review,s.learning_steps=0,r.state=H.Review,r.learning_steps=0}update_next(e,t,s,r){const i={card:e,log:this.buildLog(D.Again)},a={card:t,log:super.buildLog(D.Hard)},c={card:s,log:super.buildLog(D.Good)},u={card:r,log:super.buildLog(D.Easy)};this.next.set(D.Again,i),this.next.set(D.Hard,a),this.next.set(D.Good,c),this.next.set(D.Easy,u)}}class IT{fsrs;constructor(e){this.fsrs=e}replay(e,t,s){return this.fsrs.next(e,t,s)}handleManualRating(e,t,s,r,i,a,c){if(typeof t>"u")throw new Error("reschedule: state is required for manual rating");let u,h;if(t===H.New)u={rating:D.Manual,state:t,due:c??s,stability:e.stability,difficulty:e.difficulty,elapsed_days:r,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:s},h=Jr(s),h.last_review=s;else{if(typeof c>"u")throw new Error("reschedule: due is required for manual rating");const f=Rn(c,s,"days");u={rating:D.Manual,state:e.state,due:e.last_review||e.due,stability:e.stability,difficulty:e.difficulty,elapsed_days:r,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:s},h={...e,state:t,due:c,last_review:s,stability:i||e.stability,difficulty:a||e.difficulty,elapsed_days:r,scheduled_days:f,reps:e.reps+1}}return{card:h,log:u}}reschedule(e,t){const s=[];let r=Jr(e.due);for(const i of t){let a;if(i.review=z.time(i.review),i.rating===D.Manual){let c=0;r.state!==H.New&&r.last_review&&(c=Rn(i.review,r.last_review,"days")),a=this.handleManualRating(r,i.state,i.review,c,i.stability,i.difficulty,i.due?z.time(i.due):void 0)}else a=this.replay(r,i.review,i.rating);s.push(a),r=a.card}return s}calculateManualRecord(e,t,s,r){if(!s)return null;const{card:i,log:a}=s,c=z.card(e);return c.due.getTime()===i.due.getTime()?null:(c.scheduled_days=Rn(i.due,c.due,"days"),this.handleManualRating(c,i.state,z.time(t),a.elapsed_days,r?i.stability:void 0,r?i.difficulty:void 0,i.due))}}let AT=class extends TT{strategyHandler=new Map;Scheduler;constructor(e){super(e);const{enable_short_term:t}=this.parameters;this.Scheduler=t?Nu:Mu}params_handler_proxy(){const e=this;return{set:function(t,s,r){return s==="request_retention"&&Number.isFinite(r)?e.intervalModifier=e.calculate_interval_modifier(Number(r)):s==="enable_short_term"?e.Scheduler=r===!0?Nu:Mu:s==="w"&&(r=ja(r,t.relearning_steps.length,t.enable_short_term),e.forgetting_curve=Bo.bind(this,r),e.intervalModifier=e.calculate_interval_modifier(Number(t.request_retention))),Reflect.set(t,s,r),!0}}}useStrategy(e,t){return this.strategyHandler.set(e,t),this}clearStrategy(e){return e?this.strategyHandler.delete(e):this.strategyHandler.clear(),this}getScheduler(e,t){const r=this.strategyHandler.get(_i.SCHEDULER)||this.Scheduler;return new r(e,t,this,this.strategyHandler)}repeat(e,t,s){const i=this.getScheduler(e,t).preview();return s&&typeof s=="function"?s(i):i}next(e,t,s,r){const i=this.getScheduler(e,t),a=z.rating(s);if(a===D.Manual)throw new Error("Cannot review a manual rating");const c=i.review(a);return r&&typeof r=="function"?r(c):c}get_retrievability(e,t,s=!0){const r=z.card(e);t=t?z.time(t):new Date;const i=r.state!==H.New?Math.max(Rn(t,r.last_review,"days"),0):0,a=r.state!==H.New?this.forgetting_curve(i,+r.stability.toFixed(8)):0;return s?`${(a*100).toFixed(2)}%`:a}rollback(e,t,s){const r=z.card(e),i=z.review_log(t);if(i.rating===D.Manual)throw new Error("Cannot rollback a manual rating");let a,c,u;switch(i.state){case H.New:a=i.due,c=void 0,u=0;break;case H.Learning:case H.Relearning:case H.Review:a=i.review,c=i.due,u=r.lapses-(i.rating===D.Again&&i.state===H.Review?1:0);break}const h={...r,due:a,stability:i.stability,difficulty:i.difficulty,elapsed_days:i.last_elapsed_days,scheduled_days:i.scheduled_days,reps:Math.max(0,r.reps-1),lapses:Math.max(0,u),learning_steps:i.learning_steps,state:i.state,last_review:c};return s&&typeof s=="function"?s(h):h}forget(e,t,s=!1,r){const i=z.card(e);t=z.time(t);const a=i.state===H.New?0:Rn(t,i.due,"days"),c={rating:D.Manual,state:i.state,due:i.due,stability:i.stability,difficulty:i.difficulty,elapsed_days:0,last_elapsed_days:i.elapsed_days,scheduled_days:a,learning_steps:i.learning_steps,review:t},h={card:{...i,due:t,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:s?0:i.reps,lapses:s?0:i.lapses,learning_steps:0,state:H.New,last_review:i.last_review},log:c};return r&&typeof r=="function"?r(h):h}reschedule(e,t=[],s={}){const{recordLogHandler:r,reviewsOrderBy:i,skipManual:a=!0,now:c=new Date,update_memory_state:u=!1}=s;i&&typeof i=="function"&&t.sort(i),a&&(t=t.filter(R=>R.rating!==D.Manual));const h=new IT(this),f=h.reschedule(s.first_card||Jr(),t),g=f.length,_=z.card(e),T=h.calculateManualRecord(_,c,g?f[g-1]:void 0,u);return r&&typeof r=="function"?{collections:f.map(r),reschedule_item:T?r(T):null}:{collections:f,reschedule_item:T}}};const bT=n=>new AT(n||{}),pf=(n,e,t)=>{t||(e?t=e.getSubtreeNodes():t=n.getAllChessNodes()),t=t.filter(a=>a.isNewLearnable());const s=t.filter(a=>a.isOpening),r=t.filter(a=>!a.isOpening);let i;if(s.length>0&&r.length>0)Math.random()<.8?(i=!0,t=s):(i=!1,t=r);else if(s.length)i=!0,t=s;else if(r.length)i=!1,t=r;else return null;if(i){t=ge.sortBy(t,a=>-a.totalFrequency);for(const a of t)if(a.hasNewLearnableOpeningTrail())return a;i=!1,t=r}if(t.length){let a=ge.sample(t);for(;a.parents.length===1&&a.parents[0].parents.length===1&&a.parents[0].parents[0].isNewLearnable();)a=a.parents[0].parents[0];return a}return null},gf=(n,e,t)=>{t||(e?t=e.getSubtreeNodes():t=n.getAllChessNodes());const s=new Date().getTime();return t.filter(r=>r.sequenceCard&&r.sequenceCard.isDue(s))},mf=(n,e,t)=>{if(t||(e?t=e.getSubtreeNodes():t=n.getAllChessNodes()),t=t.filter(r=>!!r.sequenceCard),t.length===0)return null;const s=new Date;return ge.minBy(t,r=>Wa(r.sequenceCard.getSchedulingCard(),s))},qa=n=>n.length===0?null:ge.minBy(n,e=>e.sequenceCard.getJitteredReviewTime()),_f=(n,e,t)=>{let s;e?s=e.getSubtreeNodes():s=n.getAllChessNodes();const r=gf(n,e,s),i=pf(n,e,s),a=t.mixNewCards?!!i&&Math.random()<1/(r.length+1):!1,c={chessNode:null,statistics:{newCardsDue:0,learningCardsDue:0,reviewCardsDue:0,relearningCardsDue:0,totalOpeningCards:0,totalEndgameCards:0,totalNewLearnableCards:0}},u=c.statistics;for(const h of r){const f=h.sequenceCard.getState();f===H.New?u.newCardsDue+=1:f===H.Learning?u.learningCardsDue+=1:f===H.Relearning?u.relearningCardsDue+=1:f===H.Review&&(u.reviewCardsDue+=1)}for(const h of s)h.sequenceCard?h.isOpening?u.totalOpeningCards+=1:u.totalEndgameCards+=1:h.isNewLearnable()&&(u.totalNewLearnableCards+=1);if(i&&(a||r.length===0))i.sequenceCard=Je.createEmptyCard(i,"sequence"),c.chessNode=i;else if(r.length)c.chessNode=qa(r);else{const h=mf(n,e,s);if(h)c.chessNode=h;else throw new Error("getNextFSRS: no new nodes, no due nodes, and no nodes to cram!")}return c},$a=jo({enable_fuzz:!0,enable_short_term:!0,learning_steps:["1m","10m","30m","1h","6h","12h"],relearning_steps:["10m","1h","6h"],request_retention:.94}),yf=bT($a),Mr=(n,e,t=new Date)=>yf.next(n,t,e).card,Wa=(n,e=new Date)=>{if(!n.last_review)return 0;if(!n.stability||n.stability<=0)throw new Error("Card must have positive stability");const t=1e3*60*60*24,s=Math.max(0,(e.getTime()-n.last_review.getTime())/t),{decay:r,factor:i}=Ba($a.w);return Math.pow(1+i*s/n.stability,r)},FI=Object.freeze(Object.defineProperty({__proto__:null,fsrsGenerator:yf,fsrsGeneratorParameters:$a,getCardRetrievability:Wa,getCramFSRSChessNode:mf,getDueFSRSChessNodes:gf,getNewFSRSChessNode:pf,getNextFSRS:_f,getReviewedCard:Mr,selectDueFSRSChessNode:qa},Symbol.toStringTag,{value:"Module"}));class Je{constructor(e,t,s){this.card=e,this.node=t,this.type=s,this.temporaryCard=null,this.lastCard=null,this.lastReviewDate=null,this.isLastCardTemporary=!1}beforeReview(){this.lastReviewDate=new Date,this.isUsingTemporaryCard(this.lastReviewDate)?(this.temporaryCard||(this.temporaryCard=this.card),this.lastCard=this.temporaryCard,this.isLastCardTemporary=!0):(this.lastCard=this.card,this.isLastCardTemporary=!1)}review(e){if(!this.lastReviewDate||!this.lastCard)throw new Error("Cannot review without a last review date and card");this.isLastCardTemporary?this.temporaryCard=Mr(this.lastCard,e,this.lastReviewDate):(this.card=Mr(this.lastCard,e,this.lastReviewDate),this.temporaryCard=null)}getRereviewedCard(e){if(!this.lastReviewDate||!this.lastCard)throw new Error("Cannot review without a last review date and card");return Mr(this.lastCard,e,this.lastReviewDate)}getLastCard(){if(!this.lastCard)throw new Error("No last card available");return this.lastCard}wasLastCardTemporary(){return this.isLastCardTemporary}getSchedulingCard(){return this.isUsingTemporaryCard()?(this.temporaryCard||(this.temporaryCard=this.card),this.temporaryCard):this.card}isSolid(){const e=(this.card.due.getTime()-Date.now())/864e5;return this.card.reps>=20&&this.card.state===2&&e>1.5&&Wa(this.card)>.999}isCardNew(){return this.card.state===H.New}isCardLearning(){return this.card.state===H.Learning}isCardLongReview(){return this.card.state===H.Review}isCardRelearning(){return this.card.state===H.Relearning}isCardUsingLearningSteps(){return this.isCardLearning()||this.isCardRelearning()}isUsingTemporaryCard(e=new Date){return e.getTime()<this.card.due.getTime()&&!this.isCardLongReview()}getState(){return this.card.state}getLearningStep(){return this.isCardUsingLearningSteps()?this.card.learning_steps:null}getJitteredReviewTime(){const e=12e5*Math.random();return this.card.due.getTime()+e}isDue(e=Date.now()){return this.card.due.getTime()<=e}isCramming(){return this.card.due.getTime()>Date.now()}hasEasyDefault(e){return!1}serialize(){return[this.card.difficulty,this.card.due.getTime(),this.card.elapsed_days,this.card.lapses,this.card.last_review?.getTime()??null,this.card.learning_steps,this.card.reps,this.card.scheduled_days,this.card.stability,this.card.state]}equalsOtherNode(e){return this.type===e.type&&this.serialize().every((t,s)=>t===e.serialize()[s])}static createEmptyCard(e,t){return new Je(Jr(new Date),e,t)}static deserialize(e,t,s){return new Je({difficulty:s[0],due:new Date(s[1]),elapsed_days:s[2],lapses:s[3],last_review:s[4]?new Date(s[4]):void 0,learning_steps:s[5],reps:s[6],scheduled_days:s[7],stability:s[8],state:s[9]},e,t)}}const UI=Object.freeze(Object.defineProperty({__proto__:null,NodeCard:Je},Symbol.toStringTag,{value:"Module"}));class Le{constructor(e,t,s,r){if(this.fen=e,this.repository=t,this.isOpening=s,this.isUserMove=r,this.moves=[],this.name=null,this.sequenceCard=null,this.children=[],this.parents=[],this.moveMap={},this.pairedNode=null,this.cachedStockfishEntry=null,this.allDistribution=null,this.totalFrequency=null,this.smartDistribution=null,!s&&e!==ot(e))throw new Error("Endgame nodes must be created with canonical FENs");this.isWhite=Fe(e),e===se&&(this.name="Initial Position"),this.allMoves=mi(this.fen)}addMove(e){if(this.moves.includes(e))return this.moveMap[e];this.moves.push(e);let t=De(this.fen,e);this.isOpening||(t=ot(t));const s=this.repository.ensureChessNode(t,!this.isUserMove,this.isOpening);return Le.connect(this,s,e),this.isUserMove&&this.moves.length>1&&this.sequenceCard&&(this.sequenceCard=null),s}setName(e){this.name=e,this.sequenceCard&&(this.sequenceCard=Je.createEmptyCard(this,"sequence")),this.pairedNode&&(this.pairedNode.name=e,this.pairedNode.sequenceCard&&(this.pairedNode.sequenceCard=Je.createEmptyCard(this.pairedNode,"sequence")))}deleteName(){this.name=null,this.pairedNode&&(this.pairedNode.name=null)}isLearnable(){return this.isUserMove&&(!this.isOpening||this.moves.length===1)}isNewLearnable(){return this.isLearnable()&&!this.sequenceCard}isOpeningOpponentForcedMove(){return this.isOpening&&!this.isUserMove&&this.moves.length===1&&(this.allDistribution?.[this.moves[0]]??0)>=.95}getMappedMoves(e){return this.isOpening?this.moves:this.moves.map(t=>uo(e,t))}getOnlyMove(){if(this.moves.length!==1)throw new Error("Node does not have exactly one move");return this.moves[0]}allowLearningBelow(){return this.isUserMove?!!this.sequenceCard||this.moves.length>1:!0}static isTrailLearnable(e){const t=e[e.length-1];return e.every(s=>s===t||s.allowLearningBelow())}getOpeningChildMove(e){if(!this.children.includes(e))throw new Error("Child not found");for(const t of Object.keys(this.moveMap))if(this.moveMap[t]===e)return t;throw new Error("Move not found")}getChildMoves(e){if(!this.children.includes(e))throw new Error("Child not found");const t=[];for(const s of Object.keys(this.moveMap))this.moveMap[s]===e&&t.push(s);return t}getChildNode(e){if(!this.moves.includes(e))throw new Error("Move not found");const t=this.moveMap[e];if(!t)throw new Error("Child node not found for move "+e);return t}isWhiteTurn(){return new Ln(this.fen).turn()==="w"}getOpeningHistories(){return this.isOpening?this.parents.length===0?[[]]:this.parents.flatMap(e=>{const t=e.getOpeningChildMove(this);return e.getOpeningHistories().map(s=>[...s,t])}):[]}getOpeningTrails(){return this.isOpening?this.parents.length===0?[[this]]:this.parents.flatMap(e=>e.getOpeningTrails().map(t=>[...t,this])):[]}hasNewLearnableOpeningTrail(){if(!this.isOpening||!this.isNewLearnable())return!1;const e=t=>t.allowLearningBelow()?t.parents.length===0&&t.fen===se?!0:t.parents.some(e):!1;return this.parents.some(e)}static getOpeningTrailFrequency(e){let t=1;for(let s=0;s<e.length-1;s++){const r=e[s];if(r.isUserMove){const i=e[s+1],a=r.getChildMoves(i);for(const c of a)t*=r.allDistribution[c]}}return t}static getOpeningHistoryFromTrail(e){if(e.length===0)throw new Error("Trail must have at least one node");const t=[];for(let s=0;s<e.length-1;s++){const r=e[s],i=e[s+1],a=r.getChildMoves(i);if(a.length!==1)throw new Error("There should be no symmetry causing move disambiguation");t.push(a[0])}return t}getOpeningMostPopularHistory(){if(!this.isOpening)return[];if(this.parents.length===0)return[];{const e=t=>{if(t.parents.length===0)return{history:[],frequency:1};let s=[],r=-1;for(const i of t.parents){const a=i.getChildMoves(t),c=e(i);for(const u of a){const h=c.frequency*(i.isUserMove?1:i.allDistribution[u]);h>r&&(r=h,s=[...c.history,u])}}return{history:s,frequency:r}};return e(this).history}}getSubtreeNodes(){const e=new Set,t=s=>{if(!e.has(s)){e.add(s);for(const r of s.children)t(r)}};return t(this),[...e]}getOpeningSubtreeStats(){if(!this.isOpening)throw new Error("getOpeningSubtreeStats can only be called on opening nodes");let e=0,t=0,s=0,r=0,i=0,a=0,c=null,u=null,h=0,f=0,g=0,_=0,T=0,R=0,k=0,P=0;const G=new Set,F=x=>{if(!G.has(x)){if(G.add(x),t++,x.isUserMove){if(e++,x.name===null&&(s++,x.totalFrequency>i&&(i=x.totalFrequency),x.parents.some(q=>q.moves.length>1)&&r++),x.sequenceCard){const q=x.sequenceCard.getState(),re=x.sequenceCard.isDue();q===H.New?(T++,re&&h++):q===H.Learning?(R++,re&&f++):q===H.Review?(k++,re&&g++):q===H.Relearning&&(P++,re&&_++)}}else{for(const q of x.allMoves){if(x.moves.includes(q))continue;const re=x.allDistribution[q]*x.totalFrequency;re>a&&(a=re)}if(x.children.length===0){const q=x.cachedStockfishEntry;q!==null&&q!==1&&q!==2&&((c===null||Ru(q,c))&&(c=q),(u===null||Ru(u,q))&&(u=q))}}for(const q of x.children)F(q)}};return F(this),{userMoveNodeCount:e,nodeCount:t,unnamedUserMoveCount:s,unnamedNontrivialUserMoveCount:r,maxFrequencyUnnamedUserMoveCount:i,maxLeafFrequency:a,minLeafStockfishEntry:c,maxLeafStockfishEntry:u,dueNew:h,dueLearning:f,dueReview:g,dueRelearning:_,totalNew:T,totalLearning:R,totalReview:k,totalRelearning:P}}getOurCardState(){return this.isUserMove?this.sequenceCard?.getState()||(this.moves.length>1?"branch":null):null}static connect(e,t,s){if(e.isUserMove===t.isUserMove)throw new Error("Cannot connect nodes with the same isUserMove value");e.children.includes(t)||e.children.push(t),t.parents.includes(e)||t.parents.push(e),e.moveMap[s]=t}static disconnect(e,t){const s=e.getChildMoves(t);for(const r of s)delete e.moveMap[r];e.moves=e.moves.filter(r=>!s.includes(r)),e.children=e.children.filter(r=>r!==t),t.parents=t.parents.filter(r=>r!==e)}static pair(e,t){if(e.fen!==t.fen)throw new Error("Cannot pair nodes with different FENs");if(e.isUserMove===t.isUserMove)throw new Error("Cannot pair nodes with the same isUserMove value");if(e.pairedNode=t,t.pairedNode=e,e.name==="Queen's Gambit Declined"&&t.name==="QGD"&&(t.name=e.name),e.name&&t.name&&e.name!==t.name)throw new Error("Cannot pair nodes with different names: "+e.name+" vs "+t.name);e.name&&!t.name?t.name=e.name:!e.name&&t.name&&(e.name=t.name)}static unpair(e,t){e.pairedNode=null,t.pairedNode=null}}const vf=n=>{let e="";for(let t=0;t<n.length;t++)t>0&&(e+=" "),t%2===0?e+=`${Math.floor(t/2)+1}. ${n[t]}`:e+=n[t];return e},jI=Object.freeze(Object.defineProperty({__proto__:null,getSimplePGN:vf},Symbol.toStringTag,{value:"Module"})),ST=n=>{if(n>60)return 1;{const e=1-Math.exp(-1.68);return(1-Math.exp(-.028*n))/e}},RT=n=>{if(n>1e3)return 1;{const e=1-Math.exp(-5);return Math.pow((1-Math.exp(-.005*n))/e,3)}};function CT(n,e,t){const s=Math.min(Math.max((n-e)/(t-e),0),1);return s*s*(3-2*s)}function wf(n,e,t){return 1/(1+Math.exp(-t*(n-e)))}const Ef=n=>Math.max(.01,CT(n,1350,1700)),Tf=n=>Math.max(1e-5,wf(n,2e3,.01)),If=n=>Math.max(1e-5,wf(n,2300,.015)),PT=n=>Math.floor(n*1e5)/1e5,BI=Object.freeze(Object.defineProperty({__proto__:null,frequencyRounder:PT,getEndgameFrequencyTimeScrambleFactor:ST,getFrequencyEliteEloFactor:If,getFrequencyHighEloFactor:Tf,getFrequencyMidEloFactor:Ef,getOpeningFrequencyTimeScrambleFactor:RT},Symbol.toStringTag,{value:"Module"})),Zr=(n,e=Number.POSITIVE_INFINITY)=>{const t={},s=ge.sortBy(Object.keys(n),i=>-n[i]);let r=0;for(const i of s){if(r++===e)break;t[i]=n[i]}return t},Af=(n,e,t)=>{t||(t=e.map(()=>1/e.length));const s=e.map((h,f)=>Ha(n,h));let r=ge.sum(e.map(h=>h.userWhiteFrequency)),i=ge.sum(e.map(h=>h.userBlackFrequency));const a=r+i;a>1e-15&&(r/=a,i/=a);let c=[0,0,0,0];for(const h of e){const f=h.userWhiteFrequency+h.userBlackFrequency;for(let g=0;g<4;g++)c[g]+=h.fallbackMix[g]*f}const u=ge.sum(c);for(let h=0;h<4;h++)c[h]/=u;return vi(n,{get(h){const f={},g=[];let _=0;for(let T=0;T<e.length;T++){const R=t[T]*s[T].get(h);g.push(R),_+=R}if(_>1e-15)for(let T=0;T<g.length;T++)g[T]/=_;for(let T=0;T<e.length;T++){const R=e[T].get(h);for(const k of Object.keys(R))f[k]=(f[k]??0)+R[k]*g[T]}return f},userWhiteFrequency:r,userBlackFrequency:i,fallbackMix:c})},vi=(n,e)=>{const t=new Map;for(const s of n.getAllOpeningChessNodes())t.set(s,e.get(s));return{get(s){const r=t.get(s);return r||wi(e.fallbackMix,e.userWhiteFrequency,e.userBlackFrequency).get(s)},userWhiteFrequency:e.userWhiteFrequency,userBlackFrequency:e.userBlackFrequency,fallbackMix:e.fallbackMix,map:t}},bf=(n,e)=>e.map?e.map:vi(n,e).map,NT=(n,e)=>{const t={},s=bf(n,e);for(const r of n.getAllOpeningChessNodes().filter(i=>!i.isUserMove)){const i=s.get(r);i&&(t[r.fen]=Zr(i))}return{distributions:t,userWhiteFrequency:e.userWhiteFrequency,userBlackFrequency:e.userBlackFrequency,fallbackMix:e.fallbackMix}},Sf=(n,e)=>vi(n,{get(t){if(!t.isUserMove){const s=e.distributions[t.fen];if(s)return s}return wi(e.fallbackMix,e.userWhiteFrequency,e.userBlackFrequency).get(t)},userWhiteFrequency:e.userWhiteFrequency,userBlackFrequency:e.userBlackFrequency,fallbackMix:e.fallbackMix}),Rf={get(n){const e=n.smartDistribution?.mid;if(!e)throw new Error("midRepoDistribution requested for chess node with no mid distribution");return e},userWhiteFrequency:.5,userBlackFrequency:.5,fallbackMix:[1,0,0,0]},Cf={get(n){const e=n.smartDistribution?.high;if(!e)throw new Error("highRepoDistribution requested for chess node with no high distribution");return e},userWhiteFrequency:.5,userBlackFrequency:.5,fallbackMix:[0,1,0,0]},Pf={get(n){const e=n.smartDistribution?.otbHigh;if(!e)throw new Error("otbHighRepoDistribution requested for chess node with no otbHigh distribution");return e},userWhiteFrequency:.5,userBlackFrequency:.5,fallbackMix:[0,0,1,0]},Nf={get(n){const e=n.smartDistribution?.otbElite;if(!e)throw new Error("otbEliteRepoDistribution requested for chess node with no otbElite distribution");return e},userWhiteFrequency:.5,userBlackFrequency:.5,fallbackMix:[0,0,0,1]},wi=(n,e=.5,t=.5)=>({get(s){const r={},i=(a,c)=>{for(const u of Object.keys(a))r[u]=(r[u]??0)+a[u]*c};return n[0]>0&&i(Rf.get(s),n[0]),n[1]>0&&i(Cf.get(s),n[1]),n[2]>0&&i(Pf.get(s),n[2]),n[3]>0&&i(Nf.get(s),n[3]),r},userWhiteFrequency:e,userBlackFrequency:t,fallbackMix:n});class MT{constructor(e,t){if(this.fen=e,this.moves=t,t.length>30)throw new Error("using bitsets, do not do that");this.fullBits=2**t.length-1}createBits(e){const t=this.moves.indexOf(e);if(t===-1)throw new Error("move not found in branch moves");return 1<<t}invertBits(e){return this.fullBits&~e}bitsToString(e){const t=[];for(let s=0;s<this.moves.length;s++)e&1<<s&&t.push(this.moves[s]);return t.join(", ")}}class Jt{constructor(e,t){this.branch=e,this.bits=t}toString(){return`(${this.branch.fen} with moves ${this.branch.bitsToString(this.bits)})`}}class Cn{constructor(e){this.choices=e}withChoice(e){return new Cn([...this.choices,e])}intersection(e){const t=[];for(const s of this.choices){const r=e.choices.find(i=>i.branch===s.branch)??null;if(r){const i=s.bits&r.bits;if(i===0)return null;t.push(new Jt(s.branch,i))}else t.push(s)}for(const s of e.choices)(this.choices.find(i=>i.branch===s.branch)??null)||t.push(s);return new Cn(t)}minus(e){const t=[],s=ge.uniq([...this.choices.map(i=>i.branch),...e.choices.map(i=>i.branch)]),r=[];for(let i=0;i<s.length;i++){const a=s[i];let c=this.choices.find(T=>T.branch===a)??null,u=e.choices.find(T=>T.branch===a)??null;if(!c&&u&&(c=new Jt(u.branch,u.branch.fullBits)),c&&!u&&(u=new Jt(c.branch,c.branch.fullBits)),!c||!u)throw new Error("unexpected, both choices should be non-null after this point");let h=null,f=null;const g=c.bits&u.bits,_=c.bits&~u.bits;if(g!==0&&(f=new Jt(c.branch,g)),_!==0&&(h=new Jt(c.branch,_)),h&&t.push(new Cn([...r,h,...s.slice(i+1).map(T=>this.choices.find(R=>R.branch===T)).filter(T=>T)])),f)r.push(f);else break}return t}}class tn{constructor(e,t){this.slice=e,this.frequency=t}withChoice(e){return new tn(this.slice.withChoice(e),this.frequency)}multiplied(e){return new tn(this.slice,this.frequency*e)}additiveIntersection(e){const t=this.slice.intersection(e.slice);return t?new tn(t,this.frequency+e.frequency):null}additiveDifference(e){return this.slice.minus(e.slice).map(s=>new tn(s,this.frequency))}toString(){return`  FrequencyChunk ${this.frequency}
${this.slice.choices.map(e=>`    ${e.toString()}`).join(`
`)}`}}class gt{constructor(e){this.chunks=e}getMaxFrequency(){return Math.max(0,...this.chunks.map(e=>e.frequency))}combine(e){let t=this.chunks.slice(),s=e.chunks.slice();for(;s.length;){const r=s.pop();let i=!1;for(const a of t){const c=r.additiveIntersection(a);if(c){t=t.filter(u=>u!==a),t.push(c),t.push(...a.additiveDifference(r)),s.push(...r.additiveDifference(a)),i=!0;break}}i||t.push(r)}return new gt(t)}multiplied(e){return new gt(this.chunks.map(t=>t.multiplied(e)))}withBranch(e,t){const s=e.createBits(t),r=new Jt(e,s);return new gt(this.chunks.map(i=>i.withChoice(r)))}toString(){return`FrequencySplit
${this.chunks.map(e=>e.toString()).join(`
`)}`}static getInitialFrequencySplit(e=1){return new gt([new tn(new Cn([]),e)])}static getZeroFrequencySplit(){return gt.getInitialFrequencySplit(0)}}const Ha=(n,e)=>{const t=new Map;for(const s of[!0,!1]){const r=n.getOpeningTopologicalSort(s),i=n.getInitialChessNode(s),a=new Map,c=(u,h)=>{if(!h)throw new Error("unexpected, frequency split should always be defined");a.set(u,h),t.set(u,h.getMaxFrequency())};for(const u of r)if(u===i)c(u,gt.getInitialFrequencySplit(s?e.userWhiteFrequency:e.userBlackFrequency));else{if(u.parents.length===0)throw new Error("unexpected, all non-initial nodes should have parents");if(u.parents.length===1){const h=u.parents[0],f=a.get(h);if(h.isUserMove)c(u,f);else{const _=e.get(h)[h.getOpeningChildMove(u)]??0;c(u,f.multiplied(_))}}else{let h=gt.getZeroFrequencySplit();for(const f of u.parents){const g=a.get(f);if(f.isUserMove)h=h.combine(g);else{const T=e.get(f)[f.getOpeningChildMove(u)]??0;h=h.combine(g.multiplied(T))}}c(u,h)}}}return t},qo=(n,e,t,s,r=.5,i=.5,a=5,c=2e3)=>{let u;if(n.rating){const g=Ef(n.rating+200),_=Tf(n.rating+200),T=If(n.rating),R=P=>Math.max(0,Math.min(1,P));u=[R(g-_),R(_-T),2*T,T];const k=ge.sum(u);k>1e-15&&(u=u.map(P=>P/k))}else u=[.9,.1,0,0];const h=new Map;for(const g of[!0,!1])for(const _ of g?t:s){let T=se;try{const R=[T];for(const k of _.moves)R.push(De(R[R.length-1],k))}catch{continue}for(const R of _.moves){const k=De(T,R);if(Fe(T)===g){const G=e.getChessNode(T,!1);if(G){const F=h.get(G)??{};let x=1;if(_.date){const q=new Date(_.date),re=1e3*60*60*24,U=Math.abs(new Date().getTime()-q.getTime())/re;x*=Math.exp(-U/c)}else x*=.4;(_.source==="otb"||_.source==="dgtlive")&&(x*=2),F[R]=(F[R]??0)+x,h.set(G,F)}}T=k}}const f=wi(u,r,i);return console.log("initial top 4 counts",Zr(h.get(e.getInitialChessNode(!1))??{},4)),console.log("after d4 top 4 counts",Zr(h.get(e.getChessNode(De(se,"d4"),!1))??{},4)),{get(g){const _=f.get(g),T=h.get(g)??null;if(!T)return _;const R={};for(const P of Object.keys(_))R[P]=_[P]*a;for(const P of Object.keys(T))R[P]=(R[P]??0)+T[P];const k=ge.sum(Object.values(R));if(k>1e-15)for(const P of Object.keys(R))R[P]/=k;return R},userWhiteFrequency:r,userBlackFrequency:i,fallbackMix:u}},kT=(n,e,t,s,r=.5,i=.5)=>Af(e,[qo(n,e,t,s,r,i,1,100),qo(n,e,t,s,r,i,7,2e3)],[.5,.5]),qI=Object.freeze(Object.defineProperty({__proto__:null,FrequencyBranch:MT,FrequencyChoice:Jt,FrequencyChunk:tn,FrequencySlice:Cn,FrequencySplit:gt,computedRepoDistribution:vi,frequencyBlendRepoDistributions:Af,getFallbackRepoDistribution:wi,getPlayerCompositeRepoDistribution:kT,getPlayerRepoDistribution:qo,getRepoDistributionFrequencyMap:Ha,getRepoDistributionFromOpponentRecord:Sf,getRepoDistributionMap:bf,getRepoDistributionOpponentRecord:NT,getSortedDistribution:Zr,highRepoDistribution:Cf,midRepoDistribution:Rf,otbEliteRepoDistribution:Nf,otbHighRepoDistribution:Pf},Symbol.toStringTag,{value:"Module"}));class Mf{constructor(e){if(this.userMoveMap={},this.nonUserMoveMap={},e)if(kf(e))console.log("loading old save state"),this.loadSaveState1(e);else if(Of(e))this.loadSaveState2(e);else throw new Error("invalid save state version");this.ensureChessNode(se,!0,!0),this.ensureChessNode(se,!1,!0);for(const t of this.getAllChessNodes()){if(t.isUserMove&&t.children.length===0&&t.fen!==se)throw new Error(`User move node ${t.fen} has no children`);if(!t.isUserMove&&t.parents.length===0&&t.fen!==se)throw new Error(`Non-user move node ${t.fen} has no parents and is not the initial position`)}}updateDistributionsAndFrequencies(e){const t=Sf(this,e),s=Ha(this,t);for(const r of this.getAllOpeningChessNodes())r.allDistribution=t.get(r),r.totalFrequency=s.get(r)??0}equals(e){if(Object.keys(this.userMoveMap).length!==Object.keys(e.userMoveMap).length)return console.log("userMoveMap length mismatch",Object.keys(this.userMoveMap).length,Object.keys(e.userMoveMap).length),!1;if(Object.keys(this.nonUserMoveMap).length!==Object.keys(e.nonUserMoveMap).length)return console.log("nonUserMoveMap length mismatch",Object.keys(this.nonUserMoveMap).length,Object.keys(e.nonUserMoveMap).length),!1;for(const t of[this.userMoveMap,this.nonUserMoveMap])for(const s of Object.values(t)){const r=e.getChessNode(s.fen,s.isUserMove);if(!r||s.fen!==r.fen||s.isUserMove!==r.isUserMove||s.name!==r.name||s.moves.length!==r.moves.length)return console.log("node mismatch",s,r),!1;if(s.sequenceCard===null!=(r.sequenceCard===null)||s.sequenceCard&&r.sequenceCard&&!s.sequenceCard.equalsOtherNode(r.sequenceCard))return!1;for(const i of s.moves){if(!r.moves.includes(i))return console.log("move mismatch",i,s.fen),!1;const a=s.moveMap[i],c=r.moveMap[i];if(!a||!c)return console.log("child node missing for move",i,s.fen),!1;if(a.fen!==c.fen)return console.log("child node fen mismatch",i,s.fen,a.fen,c.fen),!1}}return!0}getChessNode(e,t){return(t?this.userMoveMap:this.nonUserMoveMap)[e]??null}getInitialChessNode(e){const t=this.getChessNode(se,e);if(!t)throw new Error(`No initial chess node for ${se} ${e}`);return t}hasFen(e){return!!this.getChessNode(e,!0)||!!this.getChessNode(e,!1)}getAllChessNodes(){return[...Object.values(this.userMoveMap),...Object.values(this.nonUserMoveMap)]}getAllOpeningChessNodes(){return[...Object.values(this.userMoveMap).filter(e=>e.isOpening),...Object.values(this.nonUserMoveMap).filter(e=>e.isOpening)]}getAllOpeningChessNodesWithInitialColor(e){return[...Object.values(this.userMoveMap).filter(t=>t.isOpening&&t.isWhite===e),...Object.values(this.nonUserMoveMap).filter(t=>t.isOpening&&t.isWhite!==e)]}ensureChessNode(e,t,s){const r=this.getChessNode(e,t);if(r)return r;const i=new Le(e,this,s,t);return this.addChessNode(i),i}addChessNode(e){const t=e.fen,s=e.isUserMove?this.userMoveMap:this.nonUserMoveMap;if(s[t]&&s[t]!==e)throw new Error(`Already have a different node for ${t} ${e.isUserMove}`);s[t]=e;const r=this.getChessNode(t,!e.isUserMove);r&&Le.pair(e,r)}deleteChessNode(e){const t=e.fen,s=e.isUserMove?this.userMoveMap:this.nonUserMoveMap;if(s[t]!==e)throw new Error(`Trying to delete a node that doesn't exist or doesn't match for ${t} ${e.isUserMove}`);for(const r of e.parents)Le.disconnect(r,e);for(const r of e.children)Le.disconnect(e,r);delete s[t],e.pairedNode&&Le.unpair(e,e.pairedNode)}connectNodes(){for(const e of[...Object.values(this.userMoveMap),...Object.values(this.nonUserMoveMap)])for(const t of e.moves){let s=De(e.fen,t);e.isOpening||(s=ot(s));const r=this.getChessNode(s,!e.isUserMove);if(!r)throw new Error(`No child node for ${s} after move ${t} from ${e.fen}`);Le.connect(e,r,t)}}loadSaveState1(e){const t=(r,i)=>{const a=r.map(()=>"");a[0]=se;const c=r.map(()=>!1);c[0]=i,r.forEach((u,h)=>{const f=a[h];if(!f)throw new Error("No fen?");const g=c[h];if(this.getChessNode(f,g))throw new Error(`duplicate ${h} ${f}`);const _=new Le(f,this,!0,g);if(u.n&&(_.name=u.n),u.m)for(let T=0;T<u.m.length;T+=2){const R=u.m[T],k=u.m[T+1];if(_.moves.includes(R))throw new Error(`duplicate move ${R} ${f}`);_.moves.includes(R)||_.moves.push(R);const P=De(f,R);if(a[k]&&a[k]!==P)throw new Error(`Fen mismatch? ${a[k]} vs ${P}`);a[k]=P,c[k]=!g}this.addChessNode(_)})};t(e.white,!0),t(e.black,!1),this.connectNodes();const s=["r1b2b1r/ppp2kpp/3p4/5qB1/8/2N2Q2/PPP2PPP/2KRR3 w - - 0 1"];for(const r of s){const i=this.getChessNode(r,!0);i&&this.deleteChessNode(i)}}loadSaveState2(e){const t=new Array(e.chessNodes.length).fill(null),s=new Array(e.chessNodes.length).fill(null),r=new Array(e.chessNodes.length).fill(null),i=new Array(e.chessNodes.length).fill(null);for(let a=0;a<e.chessNodes.length;a++){const c=e.chessNodes[a];let u;if(c.f){const f=!!c.u;u=new Le(c.f,this,c.f===se,f),s[a]=c.f,r[a]=f}else{const f=s[a];if(!f)throw new Error(`No fen for non-root node at index ${a}`);const g=r[a];if(g===null)throw new Error(`No isUserMove for non-root node at index ${a}`);const _=i[a];if(_===null)throw new Error(`No isOpening for non-root node at index ${a}`);u=new Le(f,this,_,g)}t[a]=u;let h=u.fen;if(c.n&&(u.name=c.n),c.c&&(u.sequenceCard=Je.deserialize(u,"sequence",c.c)),c.m)for(let f=0;f<c.m.length;f+=2){const g=c.m[f],_=c.m[f+1];if(u.moves.includes(g))throw new Error(`duplicate move ${g} ${h}`);u.moves.push(g);let T=De(h,g);if(u.isOpening||(T=ot(T)),s[_]&&s[_]!==T)throw new Error(`Fen mismatch? ${s[_]} vs ${T}`);if(s[_]=T,r[_]!==null&&r[_]!==!u.isUserMove)throw new Error(`isUserMove mismatch for id ${_} at fen ${T}`);if(r[_]=!u.isUserMove,i[_]!==null&&i[_]!==u.isOpening)throw new Error(`isOpening mismatch for id ${_} at fen ${T}`);i[_]=u.isOpening}this.addChessNode(u)}for(let a=0;a<t.length;a++)if(!t[a])throw new Error(`No chess node at index ${a}`);this.connectNodes()}getSaveState(){const e={version:2,chessNodes:[]},t=[],s=this.getAllChessNodes();for(const c of s)c.serializationId=-1;let r=0;const a=[...s.filter(c=>c.parents.length===0)];for(;a.length;){const c=a.shift();c.serializationId===-1&&(c.serializationId=r++,t.push(c));for(const u of c.children)u.serializationId===-1&&a.push(u)}return e.chessNodes=t.map(c=>{const u={};return c.moves.length&&(u.m=ge.flatten(c.moves.map(h=>[h,c.moveMap[h].serializationId]))),c.name!==null&&(u.n=c.name),c.sequenceCard&&(u.c=c.sequenceCard.serialize()),c.parents.length===0&&(u.f=c.fen,u.u=c.isUserMove),u}),e}getOpeningHistoriesMap(e){const t=this.getChessNode(se,e);if(!t)throw new Error(`No root node for ${se} ${e}`);const s=new Map,r=(i,a)=>{let c=s.get(i);c||(c=[],s.set(i,c)),c.push(a);for(const u of i.moves){const h=i.moveMap[u];r(h,[...a,u])}};return r(t,[]),s}getChessNodeLookup(e,t){for(const s of t){if(!e||!e.moveMap[s])return null;e=e.moveMap[s]}return e}getOpeningNodesLookup(e,t){return this.getChessNodeLookup(this.getChessNode(se,e),t)}getOpeningFens(){const e=t=>t.isOpening;return ge.uniq([...Object.values(this.userMoveMap).filter(e).map(t=>t.fen),...Object.values(this.nonUserMoveMap).filter(e).map(t=>t.fen)])}getOpeningFensWithoutLeaves(){const e=t=>t.isOpening&&t.moves.length>0;return ge.uniq([...Object.values(this.userMoveMap).filter(e).map(t=>t.fen),...Object.values(this.nonUserMoveMap).filter(e).map(t=>t.fen)])}getOpeningTopologicalSort(e){const t=this.getAllOpeningChessNodesWithInitialColor(e),s=[];for(const i of t)i.sortIndegreeRemaining=i.parents.length,i.sortIndegreeRemaining===0&&s.push(i);const r=[];for(;s.length;){const i=s.pop();r.push(i);for(const a of i.children)a.sortIndegreeRemaining-=1,a.sortIndegreeRemaining===0&&s.push(a)}if(r.length!==t.length)throw new Error(`Topological sort failed, expected ${t.length} nodes but got ${r.length}`);return r}getNodesInSubtree(e){const t=new Set,s=r=>{if(!t.has(r)){t.add(r);for(const i of r.children)s(i)}};return s(e),Array.from(t)}}const kf=n=>!("version"in n),Of=n=>"version"in n&&n.version===2,OT=n=>"version"in n?n.version:1,$I=Object.freeze(Object.defineProperty({__proto__:null,Repository:Mf,getSaveStateVersion:OT,isSaveState1:kf,isSaveState2:Of},Symbol.toStringTag,{value:"Module"})),Df=n=>{const e=[],t=new Ln,s=r=>r.promotion?r.from+r.to+r.promotion:r.from+r.to;for(const r of n){const i=t.move(r);e.push(s(i))}return encodeURIComponent(e.join(","))},WI=Object.freeze(Object.defineProperty({__proto__:null,getLichessMovesString:Df},Symbol.toStringTag,{value:"Module"})),gs={},za={masters:"masters?variant=standard",blitzLow:"lichess?variant=standard&speeds=blitz&ratings=1400,1600,1800",blitzHigh:"lichess?variant=standard&speeds=blitz&ratings=2000,2200,2500",rapidLow:"lichess?variant=standard&speeds=rapid&ratings=1400,1600,1800",rapidHigh:"lichess?variant=standard&speeds=rapid&ratings=2000,2200,2500"},Vf=Object.keys(za),DT={blitzLow:"lichessExploreBlitzLow",blitzHigh:"lichessExploreBlitzHigh",masters:"lichessExploreMasters",rapidLow:"lichessExploreRapidLow",rapidHigh:"lichessExploreRapidHigh"},VT=async(n,e="blitzLow")=>{const t=n.join(",")+","+e;if(gs[t])return gs[t];const s=`https://explorer.lichess.ovh/${za[e]}&play=${Df(n)}&fen=rnbqkbnr%2Fpppppppp%2F8%2F8%2F8%2F8%2FPPPPPPPP%2FRNBQKBNR+w+KQkq+-+0+1&topGames=0&recentGames=0&moves=500`;try{const r=await fetch(s);try{gs[t]=r.json()}catch(i){throw console.error(`Error fetching lichess explore for ${t}:`,i),console.error(r.text()),i}}catch(r){throw console.error(`getLichessExplore failure ${t}:`,r),console.log(s),r}return gs[t]},xT=(n,e)=>{for(const t of e){if(!n||!n.m||!n.m[t])return null;n=n.m[t]}return n},$o=(n,e)=>n.m&&n.m[e]?n.m[e].d[0]+n.m[e].d[1]+n.m[e].d[2]:0,LT=(n,e,t)=>{const s=new Ln;let r=1;for(let i=0;i<e.length;i++){const a=e[i];let c=0;if(n&&n.m){const u=n,h=Object.keys(n.m).reduce((f,g)=>f+$o(u,g),0);h>0&&(c=$o(n,a)/h)}t!==(s.turn()==="w")&&(r*=c),s.move(a),n=n?.m?.[a]??null}return r},xf=(n,e)=>{const t={d:n.d};if(n.m)if(e.m){const s=ge.uniq([...Object.keys(n.m),...Object.keys(e.m)]),r={};for(const i of s)n.m[i]&&e.m[i]?r[i]=xf(n.m[i],e.m[i]):n.m[i]?r[i]=n.m[i]:r[i]=e.m[i];t.m=r}else t.m=n.m;else e.m&&(t.m=e.m);return t},HI=Object.freeze(Object.defineProperty({__proto__:null,combineCompactLichessExplore:xf,getExploreHistoryProbability:LT,getExploreLookup:xT,getExploreMoveCount:$o,getLichessExplore:VT,lichessExplore:gs,lichessExploreTypeFileMap:DT,lichessExploreTypeMap:za,lichessExploreTypes:Vf},Symbol.toStringTag,{value:"Module"})),Lf={blitzLow:"bl",blitzHigh:"bh",masters:"ma",rapidLow:"rl",rapidHigh:"rh"},Ff={masters:5,rapidHigh:1,rapidLow:.05,blitzHigh:.005,blitzLow:5e-4};class Uf{constructor(e,t,s){this.summary=e,this.type=t,this.hasTranspositions=s}getMixCount(e){return this.summary[e]?Ff[this.type]*(this.summary[e].whiteWins+this.summary[e].draws+this.summary[e].blackWins):0}getDistribution(){const e={};let t=0;for(const s in this.summary){const r=this.summary[s],i=r.whiteWins+r.draws+r.blackWins;e[s]=i,t+=i}for(const s in e)e[s]/=t;return e}}const zI=Object.freeze(Object.defineProperty({__proto__:null,ExploreStatistics:Uf,exploreMix:Ff,exploreStatisticsShorthandMap:Lf},Symbol.toStringTag,{value:"Module"})),FT=(n,e)=>{if(n&&n.m){const t=Lf[e],s={};let r=!1;for(const i of Object.keys(n.m)){const a=n.m[i];if(a[t]){const c=a[t];s[i]={whiteWins:c[0],draws:c[1],blackWins:c[2]},r=!0}}if(r)return new Uf(s,e,!0)}return null},UT=await(await fetch("./data/fenDataBase.json")).json();let Wo=UT;const Ho={};let Ga=!1;const jf=new ho,Bf=n=>{const e=n.map(()=>!0),t=(s,r)=>{if(e[r]){e[r]=!1;const i=n[r];if(i.m){const a={rapidHigh:null,rapidLow:null,blitzHigh:null,blitzLow:null,masters:null};for(const c of Vf)a[c]=FT(i,c);a.rapidHigh||a.rapidLow||a.blitzHigh||a.blitzLow||a.masters}if(i.s!==void 0&&(Ho[s]={d:36,s:i.s},i.sm&&(Ho[s].m=i.sm),i.m))for(const a of Object.keys(i.m)){const c=i.m[a].i;if(c!==void 0&&n[c].s!==void 0){const u=De(s,a);t(u,c)}}}};t(se,0)};Bf(Wo);const jT=n=>{const e=Ho[n];return e||(Ga?2:1)},GI=async()=>{Wo=await(await fetch("./data/fenDataFull.json")).json(),Ga=!0,Bf(Wo),jf.emit()};class ee extends zo{static{this.MOVE=new ee}static{this.NAME=new ee}static{this.WIN_STATISTICS=new ee}static{this.WIN_DRAW_STATISTICS=new ee}static{this.STOCKFISH_EVAL=new ee}static{this.MINIMAX=new ee}static{this.POPULARITY_STATISTICS=new ee}static{this.FREQUENCY=new ee}static{this.NODE_COUNT=new ee}static{this.UNNAMED_COUNT=new ee}static{this.UNNAMED_NONTRIVIAL_COUNT=new ee}static{this.MAX_UNNAMED_FREQUENCY_COUNT=new ee}static{this.MAX_LEAF_FREQUENCY_COUNT=new ee}static{this.WORST_STOCKFISH=new ee}static{this.enumeration=new Go(ee)}}const KI=Object.freeze(Object.defineProperty({__proto__:null,MoveColumnSort:ee},Symbol.toStringTag,{value:"Module"})),BT=35,qT=120,$T=45,WT=55,HT=100,zT=45,GT=35,KT=35,QT=35,YT=45,XT=45,JT=45,QI=3,YI=5,XI=2,ZT=new wr(150),eI=new us([ZT],n=>n+1);class M extends zo{static{this.MOVE=new M}static{this.NAME=new M}static{this.NODE_COUNT=new M}static{this.WIN_STATISTICS=new M}static{this.STOCKFISH_EVAL=new M}static{this.MINIMAX=new M}static{this.POPULARITY_STATISTICS=new M}static{this.FREQUENCY=new M}static{this.UNNAMED_COUNT=new M}static{this.UNNAMED_NONTRIVIAL_COUNT=new M}static{this.MAX_UNNAMED_FREQUENCY_COUNT=new M}static{this.MAX_LEAF_FREQUENCY_COUNT=new M}static{this.WORST_STOCKFISH=new M}static{this.enumeration=new Go(M)}}const tI=new Map([[M.MOVE,"Move"],[M.NAME,"Name"],[M.NODE_COUNT,"Nodes"],[M.WIN_STATISTICS,"Win Stats"],[M.STOCKFISH_EVAL,"Eval"],[M.MINIMAX,"Minimax"],[M.POPULARITY_STATISTICS,"Popularity"],[M.FREQUENCY,"Frequency"],[M.UNNAMED_COUNT,"!Name"],[M.UNNAMED_NONTRIVIAL_COUNT,"!Nont"],[M.MAX_UNNAMED_FREQUENCY_COUNT,"!Freq"],[M.MAX_LEAF_FREQUENCY_COUNT,"Leaf"],[M.WORST_STOCKFISH,"Worst"]]),nI=new Map([[M.MOVE,"Move names (SAN format)"],[M.NAME,"Opening Name"],[M.NODE_COUNT,"Number of nodes in this subtree"],[M.WIN_STATISTICS,"Win/draw/loss statistics"],[M.STOCKFISH_EVAL,"Stockfish evaluation of the position after this move"],[M.MINIMAX,"Minimax evaluation of the position after this move"],[M.POPULARITY_STATISTICS,"Popularity of this move in the lichess database"],[M.FREQUENCY,"Reciprocal total-frequency of this move in your opening tree"],[M.UNNAMED_COUNT,"Number of unnamed positions of our-color-to-move in this subtree"],[M.UNNAMED_NONTRIVIAL_COUNT,"Number of unnamed positions with nontrivial decisions in this subtree"],[M.MAX_UNNAMED_FREQUENCY_COUNT,"Maximum frequency of unnamed positions in this subtree"],[M.MAX_LEAF_FREQUENCY_COUNT,"Maximum frequency of leaf positions in this subtree"],[M.WORST_STOCKFISH,"Worst Stockfish evaluation of positions in this subtree"]]),sI=new Map([[M.MOVE,[ee.MOVE]],[M.NAME,[ee.NAME]],[M.NODE_COUNT,[ee.NODE_COUNT]],[M.WIN_STATISTICS,[ee.WIN_STATISTICS,ee.WIN_DRAW_STATISTICS]],[M.STOCKFISH_EVAL,[ee.STOCKFISH_EVAL]],[M.MINIMAX,[ee.MINIMAX]],[M.POPULARITY_STATISTICS,[ee.POPULARITY_STATISTICS]],[M.FREQUENCY,[ee.FREQUENCY]],[M.UNNAMED_COUNT,[ee.UNNAMED_COUNT]],[M.UNNAMED_NONTRIVIAL_COUNT,[ee.UNNAMED_NONTRIVIAL_COUNT]],[M.MAX_UNNAMED_FREQUENCY_COUNT,[ee.MAX_UNNAMED_FREQUENCY_COUNT]],[M.MAX_LEAF_FREQUENCY_COUNT,[ee.MAX_LEAF_FREQUENCY_COUNT]],[M.WORST_STOCKFISH,[ee.WORST_STOCKFISH]]]),rI=new Map([[M.MOVE,BT],[M.NAME,qT],[M.NODE_COUNT,GT],[M.WIN_STATISTICS,eI],[M.STOCKFISH_EVAL,$T],[M.MINIMAX,WT],[M.POPULARITY_STATISTICS,HT],[M.FREQUENCY,zT],[M.UNNAMED_COUNT,KT],[M.UNNAMED_NONTRIVIAL_COUNT,QT],[M.MAX_UNNAMED_FREQUENCY_COUNT,YT],[M.MAX_LEAF_FREQUENCY_COUNT,XT],[M.WORST_STOCKFISH,JT]]),qf=[M.MOVE,M.NAME,M.NODE_COUNT,M.WIN_STATISTICS,M.STOCKFISH_EVAL,M.MINIMAX,M.POPULARITY_STATISTICS,M.FREQUENCY],iI=[M.MOVE,M.NAME,M.NODE_COUNT,M.WIN_STATISTICS,M.STOCKFISH_EVAL,M.MINIMAX,M.POPULARITY_STATISTICS,M.FREQUENCY,M.UNNAMED_COUNT,M.UNNAMED_NONTRIVIAL_COUNT,M.MAX_UNNAMED_FREQUENCY_COUNT,M.MAX_LEAF_FREQUENCY_COUNT,M.WORST_STOCKFISH],JI=Object.freeze(Object.defineProperty({__proto__:null,MOVE_COLUMNS_INITIAL_VISIBLE:qf,MOVE_COLUMN_ORDER:iI,MoveColumn:M,moveColumnDescriptionMap:nI,moveColumnShorthandNameMap:tI,moveColumnSortMap:sI,moveColumnWidthMap:rI},Symbol.toStringTag,{value:"Module"})),oI=async()=>{const n=await fetch(`https://opening-api.jonathanolson.net/save/${Ze.value.uid}`);if(!n.ok)throw new Error(`Failed to fetch save state: ${n.statusText}`);return await n.json()},$f=async n=>{const e=JSON.stringify(n);console.log(e);const t=await fetch(`https://opening-api.jonathanolson.net/save/${Ze.value.uid}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:e});if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const s=await t.json();if(s.ok!==!0)throw new Error(`Unexpected response message: ${s}`)},Wf=async()=>{const n=await fetch(`https://opening-api.jonathanolson.net/distribution/package/all/${Ze.value.uid}`);if(!n.ok)throw new Error(`Failed to fetch save state: ${n.statusText}`);return await n.json()},aI=async n=>{const e=await fetch(`https://opening-api.jonathanolson.net/distribution/package/${n}/${Ze.value.uid}`);if(!e.ok)throw new Error(`Failed to fetch save state: ${e.statusText}`);return await e.json()},cI=async n=>{const e=await fetch(`https://opening-api.jonathanolson.net/distribution/package/${n}/${Ze.value.uid}`);if(!e.ok)throw new Error(`Failed to fetch save state: ${e.statusText}`);return await e.json()};class Hf{constructor(){this.socket=Cp("https://opening-api.jonathanolson.net"),this.cache=new Vu({max:25e4})}getCacheKey(e,t){return`${e}:${JSON.stringify(t)}`}getCached(e,t){const s=this.cache.get(e);if(s)return s;const r=t().catch(i=>{throw this.cache.delete(e),i});return this.cache.set(e,r),r}async getStockfishEntry(e){const t=this.getCacheKey("openingStockfish",[e]);return this.getCached(t,()=>this.socket.timeout(5e5).emitWithAck("openingStockfish",e))}getOpeningInfo(e,t){const s=this.getCacheKey("openingInfo",[e,t]);return this.getCached(s,()=>this.socket.timeout(5e5).emitWithAck("openingInfo",{fen:e,tauDays:t}))}getOpeningDistribution(e,t,s,r){const i=this.getCacheKey("openingDistribution",[e,t,s,r]);return this.getCached(i,()=>this.socket.timeout(5e5).emitWithAck("openingDistribution",{fen:e,high:t,smoothing:s,tauDays:r}))}getExploreInfo(e){const t=this.getCacheKey("exploreInfo",[e]);return this.getCached(t,()=>this.socket.timeout(5e5).emitWithAck("exploreInfo",e))}getMinimaxFallback(e,t,s,r,i){const a=this.getCacheKey("minimaxFallback",[e,t,s,r,i]);return this.getCached(a,()=>this.socket.timeout(5e5).emitWithAck("minimaxFallback",{fen:e,high:t,type:s,alphaIndex:r,depth:i}))}}const Ka=new Hf,Qa=new Vu({max:5e4}),Ds=async n=>{const e=await Ka.getExploreInfo(n);return Qa.set(n,e),e},lI=n=>{const e=Qa.get(n);return e||(Ds(n),null)},uI=n=>{const e=Qa.get(n);return e||Ds(n)};window.openingSocket=Ka;const ZI=Object.freeze(Object.defineProperty({__proto__:null,OpeningSocket:Hf,getDistributionPackageAll:Wf,getDistributionPackageSingle:aI,getExploreInfo:Ds,getExploreInfoSync:lI,getExploreInfoSyncOrPromise:uI,getOpeningAPISaveState:oI,getOpponentDistributionResult:cI,openingSocket:Ka,setOpeningAPISaveState:$f},Symbol.toStringTag,{value:"Module"}));class hI{value;next;constructor(e){this.value=e}}class dI{#e;#t;#n;constructor(){this.clear()}enqueue(e){const t=new hI(e);this.#e?(this.#t.next=t,this.#t=t):(this.#e=t,this.#t=t),this.#n++}dequeue(){const e=this.#e;if(e)return this.#e=this.#e.next,this.#n--,this.#e||(this.#t=void 0),e.value}peek(){if(this.#e)return this.#e.value}clear(){this.#e=void 0,this.#t=void 0,this.#n=0}get size(){return this.#n}*[Symbol.iterator](){let e=this.#e;for(;e;)yield e.value,e=e.next}*drain(){for(;this.#e;)yield this.dequeue()}}function fI(n){ku(n);const e=new dI;let t=0;const s=()=>{t<n&&e.size>0&&(e.dequeue()(),t++)},r=()=>{t--,s()},i=async(u,h,f)=>{const g=(async()=>u(...f))();h(g);try{await g}catch{}r()},a=(u,h,f)=>{new Promise(g=>{e.enqueue(g)}).then(i.bind(void 0,u,h,f)),(async()=>(await Promise.resolve(),t<n&&s()))()},c=(u,...h)=>new Promise(f=>{a(u,f,h)});return Object.defineProperties(c,{activeCount:{get:()=>t},pendingCount:{get:()=>e.size},clearQueue:{value(){e.clear()}},concurrency:{get:()=>n,set(u){ku(u),n=u,queueMicrotask(()=>{for(;t<n&&e.size>0;)s()})}}}),c}function ku(n){if(!((Number.isInteger(n)||n===Number.POSITIVE_INFINITY)&&n>0))throw new TypeError("Expected `concurrency` to be a number from 1 and up")}const oe=(...n)=>{};class Ke extends zo{static{this.NORMAL=new Ke}static{this.SAVING=new Ke}static{this.SUCCESS=new Ke}static{this.FAILURE=new Ke}static{this.enumeration=new Go(Ke)}}class pI{constructor(e){this.repositoryUpdatedEmitter=new ho,this.repositoryUpdatedIncrementingProperty=new wr(0),this.isOpeningWhiteProperty=new ft(!0),this.hoveredPotentialVerboseMoveProperty=new ft(null),this.mixNewCardsProperty=new Yt(!0),this.autoPlaySolidMovesProperty=new Yt(!0),this.lockDrillToColorProperty=new Yt(!1),this.moveRowSortProperty=new Xc(ee.POPULARITY_STATISTICS),this.moveRowSortIncludedFirstProperty=new Yt(!0),this.magnifyWinStatisticsProperty=new Yt(!1),this.columnVisibilityPropertyMap=new Map(M.enumeration.values.map(t=>[t,new Yt(qf.includes(t))])),this.saveStatusProperty=new Xc(Ke.NORMAL),this.popupSingleChessNodeEmitter=new ho,this.showMoveSettingsProperty=new Yt(!1),this.distributionNameProperty=new ft("mid"),this.evalTypeProperty=new ft("expectation"),this.alphaSelectorProperty=new wr(2),this.depthProperty=new wr(1e3),this.fallbackDistributionNameProperty=new us([this.distributionNameProperty],t=>t==="mid"?"mid":"high"),this.opponentDistributionResultProperty=new ft(null),this.loadedAllDistributions=!1,this.repository=new Mf(e),this.fillStockfishEvalCache(),this.stateProperty=new ft({state:"openingExplore",...Au(this.repository,!0),...yr()}),this.stateProperty.link((t,s)=>ZE(t)),this.isOpeningProperty=new us([this.stateProperty],t=>He(t)),this.isWhiteProperty=new us([this.stateProperty],t=>t.isWhite),this.stateProperty.link(t=>{oe(t)}),jf.addListener(()=>this.fillStockfishEvalCache()),this.currentChessNodeProperty=new us([this.stateProperty],t=>_r(t)),this.repositoryUpdatedEmitter.addListener(()=>{const t=this.currentChessNodeProperty.value;this.currentChessNodeProperty.recomputeDerivation(),t===this.currentChessNodeProperty.value&&this.currentChessNodeProperty.notifyListenersStatic(),this.repositoryUpdatedIncrementingProperty.value++}),this.isOpeningWhiteProperty.lazyLink(t=>{const s=this.stateProperty.value;He(s)&&!Ue(s)&&s.isWhite!==t&&this.userSwitchedColor(t)}),this.opponentDistributionResultProperty.lazyLink(this.updateOpponentDistributionResult.bind(this))}getCompactState(){return this.repository.getSaveState()}fillStockfishEvalCache(){const e=Ga?[null,1]:[null];for(const t of this.repository.getAllOpeningChessNodes()){const s=t.cachedStockfishEntry;e.includes(s)&&(t.cachedStockfishEntry=jT(t.fen))}}updateOpponentDistributionResult(){const e=this.opponentDistributionResultProperty.value;e&&(console.log("updating distribution result"),this.repository.updateDistributionsAndFrequencies(e),console.log("updated distribution result"))}getReviewStateAfterMove(e,t){if(!Ue(e))throw new Error("Can only get review state after move if we are currently reviewing???");const s=ro(e,t,He(e)),r=s.chessNode;if(He(e)){let i=!r.isUserMove||r.moves.length>1;if(this.autoPlaySolidMovesProperty.value&&r.isUserMove&&r.moves.length===1&&r.sequenceCard&&r.sequenceCard.isSolid()&&(i=!0,oe("auto-playing solid move")),i){const a=e.targetHistory[s.stack.length];return{state:"openingReviewAutoMovePending",...s,...mr(e),...Iu(e),isPendingAutoMove:!0,pendingAutoMove:a}}else return{state:"openingReviewUserMove",...s,...mr(e),...Iu(e)}}else if(!r.isUserMove){const a=uo(s.fen,ge.sample(r.moves));return{state:"endgameReviewAutoMovePending",...s,...Tu(e),...mr(e),isPendingAutoMove:!0,pendingAutoMove:a}}else return{state:"endgameReviewUserMove",...s,...Tu(e),...mr(e)}}fastForwardCommonState(e,t){for(;e.stackPosition<e.stack.length;){const s=e.stack[e.stackPosition].move;e=ro(e,s,t)}return e}getReviewUpdateState(e){const t=e.chessNode;t.sequenceCard||(t.sequenceCard=Je.createEmptyCard(t,"sequence"));const s=t.sequenceCard,r=Date.now()-e.nextTimestampStart,i=s.isCramming();s.beforeReview();let a=e.nextFailedReview?D.Again:s.hasEasyDefault(r)?D.Easy:D.Good;return s.review(a),{...HE(e),previousChessNode:t,previousFen:e.fen,previousHistory:so(e),previousBaseFen:xn(e)?e.baseFen:se,previousGrade:a,previousWasCramming:i,previousFailedReview:e.nextFailedReview,nextFailedReview:!1,nextTimestampStart:Date.now()}}userPlayMove(e){const t=this.stateProperty.value;if(no(t)||jE(t))oe(`${e}: Exploring ${no(t)?"opening":"endgame"}`),this.stateProperty.value={...t,...ro(t,e,He(t))};else if(Ue(t)&&t.stackPosition<t.stack.length)oe("Ignoring move because we are not at the end of the stack"),this.stateProperty.value={...t,...this.fastForwardCommonState(t,He(t))};else if(BE(t)){const s=t.targetHistory[t.stack.length];if(e===s){const r=this.getReviewUpdateState(t);if(t.stack.length===t.targetHistory.length-1){oe(`${e}: Correct, final move!`);const a=this.getNextReviewState();this.stateProperty.value={...a,...r},this.postReviewStateUpdate()}else{oe(`${e}: Correct, continuing`);const a=this.getReviewStateAfterMove(t,e);this.stateProperty.value={...a,...r},this.postReviewStateUpdate()}}else oe(`${e}: Incorrect`),this.popupSingleChessNodeEmitter.emit(t.chessNode,t.fen),this.stateProperty.value={...t,nextFailedReview:!0,failedMoves:[s]}}else if($E(t)){const s=t.chessNode.moves.map(r=>uo(t.fen,r));if(s.includes(e)){const r=this.getReviewUpdateState(t);if(t.chessNode.moveMap[lo(t.fen,e)].moves.length){oe(`${e}: Correct, continuing`);const a=this.getReviewStateAfterMove(t,e);this.stateProperty.value={...a,...r},this.postReviewStateUpdate()}else{oe(`${e}: Correct, final move!`);const a=this.getNextReviewState();this.stateProperty.value={...a,...r},this.postReviewStateUpdate()}}else oe(`${e}: Incorrect`),this.popupSingleChessNodeEmitter.emit(t.chessNode,t.fen),this.stateProperty.value={...t,nextFailedReview:!0,failedMoves:s}}else throw qE(t)||WE(t)?new Error("Should not have been able to move while in auto-move pending state???"):new Error(`Unknown state type: ${t.state}`)}userPopupPreviousChessNode(){const e=this.stateProperty.value;!Ue(e)||!e.previousChessNode||!e.previousFen||this.popupSingleChessNodeEmitter.emit(e.previousChessNode,e.previousFen)}userGoFullBack(){oe("Going full back"),this.stateProperty.value={...this.stateProperty.value,...yn(this.stateProperty.value,0)}}userGoBack(){oe("Going back"),this.stateProperty.value.stackPosition>0&&(this.stateProperty.value={...this.stateProperty.value,...yn(this.stateProperty.value,this.stateProperty.value.stackPosition-1)})}userGoForward(){oe("Going forward"),this.stateProperty.value.stack.length>this.stateProperty.value.stackPosition&&(this.stateProperty.value={...this.stateProperty.value,...yn(this.stateProperty.value,this.stateProperty.value.stackPosition+1)})}userGoFullForward(){oe("Going full forward"),this.stateProperty.value={...this.stateProperty.value,...yn(this.stateProperty.value,this.stateProperty.value.stack.length)}}userSetBaseFen(e){if(e===se){oe("Switching to initial position opening");const t=this.isOpeningWhiteProperty.value;this.stateProperty.value={state:"openingExplore",...Au(this.repository,t),...yr()}}else oe('Switching to "endgame" fen'),Fe(e)||(e=Pp.mapFen(Np.mapFen(e))),this.stateProperty.value={state:"endgameExplore",...io(e),...bu(this.repository,e)},this.isOpeningWhiteProperty.value=!0}userSetPGN(e){const t=new Ln;t.loadPgn(e);const s=t.history(),r=[];let i=se;for(const u of s){const h=De(i,u);r.push({fen:h,fenBeforeMove:i,move:u}),i=h}const a=this.isOpeningWhiteProperty.value;oe("Setting PGN");const c=this.repository.getChessNode(i,Fe(i)===a)??null;this.stateProperty.value={state:"openingExplore",isOpening:!0,repository:this.repository,isWhite:a,fen:i,stack:r,stackPosition:r.length,chessNode:c,failedMoves:[]}}userSwitchedColor(e){if(no(this.stateProperty.value)&&e!==this.stateProperty.value.isWhite)oe("Switching opening explore color"),this.stateProperty.value={...this.stateProperty.value,...GE(this.stateProperty.value)};else throw new Error("Color switching is only supported in the opening explorer for now")}userSelectStackIndex(e){this.stateProperty.value={...this.stateProperty.value,...yn(this.stateProperty.value,e+1)}}getCurrentPGN(){const e=zE(this.stateProperty.value);return e.length?vf(e):""}getMappedFen(e){return this.isOpeningProperty.value?e:ot(e)}isBaseUserMove(){return this.isOpeningProperty.value?this.isOpeningWhiteProperty.value:!0}getBaseChessNode(){return this.repository.getChessNode(this.getMappedFen(Fo(this.stateProperty.value)),this.isBaseUserMove())}ensureBaseChessNode(){return this.repository.ensureChessNode(this.getMappedFen(Fo(this.stateProperty.value)),this.isBaseUserMove(),this.isOpeningProperty.value)}async saveTree(){const e=this.stateProperty.value,t=e.stack,s=e.stackPosition,r={};{const i=[],a=new Set,c=u=>{a.has(u)||(a.add(u),i.push((async()=>{r[u]=await Ds(u)})()))};for(const u of t.slice(0,s))c(u.fenBeforeMove),c(u.fen);await Promise.all(i)}{let i=this.ensureBaseChessNode();for(let a=0;a<s&&!(a===s-1&&!i.isUserMove);a++){const c=He(e)?t[a].move:lo(t[a].fenBeforeMove,t[a].move);if(i=i.addMove(c),!i.smartDistribution){const u=i,h=r[u.fen];if(!h)throw new Error(`Missing explore info for fen ${u.fen} when saving tree???`);u.smartDistribution=h.smartDistribution}}}this.fillStockfishEvalCache(),this.updateOpponentDistributionResult(),this.repositoryUpdatedEmitter.emit()}deleteTree(){const e=this.stateProperty.value,t=He(e),s=e.stack,r=e.stackPosition;if(r>0){const i=s[r-1],a=Uo(e,i.fen);if(!a)return;const c=r>1?Uo(e,s[r-2].fen):this.getBaseChessNode();if(!c||!c.isUserMove)return;Le.disconnect(c,a),c.moves.length===0&&this.repository.deleteChessNode(c);const u=h=>{if(h.parents.length===0){for(const f of h.children)Le.disconnect(h,f),t&&u(f);this.repository.deleteChessNode(h)}};u(a)}this.updateOpponentDistributionResult(),this.repositoryUpdatedEmitter.emit()}getNextReviewState(e=this.stateProperty.value){let t;if(Ue(e))t=e.prefix;else if(He(e)&&e.fen!==se){if(t=_r(e),t){const a=t.isUserMove===Fe(t.fen);let u=this.repository.getInitialChessNode(a);for(const h of so(e))u.isNewLearnable()&&(u.sequenceCard=Je.createEmptyCard(u,"sequence")),u=u.moveMap[h]}}else xn(e)?t=_r(e):t=this.lockDrillToColorProperty.value?_r(e):null;const s=_f(this.repository,t,{mixNewCards:this.mixNewCardsProperty.value}),r=s.chessNode,i=s.statistics;if(!r)throw new Error("No chess node found for review???");if(r.isOpening){const a=r.isUserMove===Fe(r.fen),c=this.repository.getInitialChessNode(a),u=hf(e)?e.initialHistory:Ue(e)?[]:so(e),h=r.getOpeningHistories().filter(U=>{if(U.length<u.length)return!1;for(let E=0;E<u.length;E++)if(U[E]!==u[E])return!1;return!0});if(h.length===0)throw new Error("No possible histories found for review???");const f=h.map(U=>{let E=1,m=c;for(const y of U)m.isUserMove||(E*=m.allDistribution?.[y]??.2),m=m.moveMap[y];return E}),g=ge.sum(f)+1e-15,T=f.map(U=>U/g).map(U=>U+.05),R=ge.sum(T),k=T.map(U=>U/R);let P=[...h[kp(k)],r.getOnlyMove()];{let U=r;const E=new Date().getTime();for(;;){const m=U.moveMap[U.getOnlyMove()],y=m.children.filter(w=>w.sequenceCard&&w.sequenceCard.isDue(E));if(y.length!==0){const w=qa(y);w&&(P.push(m.getOpeningChildMove(w)),P.push(w.getOnlyMove()),U=w),oe(`Following due move! ${P}`)}else break}for(;U.children[0].isOpeningOpponentForcedMove()&&U.children[0].children[0].isLearnable();)P.push(U.children[0].getOnlyMove()),P.push(U.children[0].children[0].getOnlyMove()),U=U.children[0].children[0]}{let U=c;for(const E of P)U.isNewLearnable()&&(U.sequenceCard=Je.createEmptyCard(U,"sequence")),U=U.moveMap[E]}const G=[];let F=c;for(const U of u){const E=F.moveMap[U];G.push({fen:E.fen,fenBeforeMove:F.fen,move:U}),F=E}const x=!F.isUserMove||F.moves.length>1,q=P[u.length],re={repository:this.repository,isWhite:c.isUserMove,fen:F.fen,stack:G,stackPosition:G.length,chessNode:F,failedMoves:[],initialHistory:u,targetHistory:P,...yr(),...Su(t,i)};return x?{state:"openingReviewAutoMovePending",...re,isPendingAutoMove:!0,pendingAutoMove:q}:{state:"openingReviewUserMove",...re}}else{const u=Mp(r.fen).map(f=>f.mapFen(r.fen)).filter(Fe);if(u.length===0)throw new Error("No valid symmetries found for endgame review???");const h=ge.sample(u);return{state:"endgameReviewUserMove",...bu(this.repository,h),...io(h),...Su(t,i)}}}postReviewStateUpdate(){Lo(this.stateProperty.value)&&setTimeout(()=>this.autoMoveForReview(),100),this.isOpeningWhiteProperty.value=this.stateProperty.value.isWhite}userToggleReview(e){let t=this.stateProperty.value;e||(t={...t,...yn(t,0)}),Ue(t)?(oe("Exiting review mode"),He(t)?this.stateProperty.value={state:"openingExplore",...yr(),...Os(t)}:this.stateProperty.value={state:"endgameExplore",...io(t.baseFen),...Os(t)},this.postReviewStateUpdate()):(oe("Entering review mode"),this.stateProperty.value=this.getNextReviewState(t),this.postReviewStateUpdate())}userExplorePreviousCard(){const e=this.stateProperty.value;if(!Ue(e)||!e.previousChessNode)return;const t=e.previousBaseFen===se,s=e.previousBaseFen,r=[];let i=s;for(const c of e.previousHistory){const u=De(i,c);r.push({fen:u,fenBeforeMove:i,move:c}),i=u}const a={repository:this.repository,isWhite:e.previousChessNode.isWhite,fen:e.previousFen,stack:r,stackPosition:r.length,chessNode:e.previousChessNode,failedMoves:[]};t?(oe("Exploring previous opening card in opening explorer"),this.stateProperty.value={state:"openingExplore",isOpening:!0,...a}):(oe("Exploring previous endgame card in opening explorer"),this.stateProperty.value={state:"endgameExplore",isEndgame:!0,baseFen:s,...a}),this.postReviewStateUpdate()}autoMoveForReview(){const e=this.stateProperty.value;Lo(e)&&(oe(`${e.pendingAutoMove}: Auto-Move`),this.stateProperty.value=this.getReviewStateAfterMove(e,e.pendingAutoMove),this.postReviewStateUpdate())}userReview(e){oe(`Grading review: ${e}`);const t=this.stateProperty.value;if(Ue(t)){const s=t.previousChessNode.sequenceCard;e===D.Again&&t.previousGrade!==e&&this.popupSingleChessNodeEmitter.emit(t.previousChessNode,t.previousFen),s.review(e),this.stateProperty.value={...t,previousGrade:e}}}async exportState(){const e=this.getCompactState();this.saveStatusProperty.value=Ke.SAVING;try{await $f(e),this.saveStatusProperty.value=Ke.SUCCESS}catch(t){console.error("Failed to save!"),console.error(t),this.saveStatusProperty.value=Ke.FAILURE}await cf(Ze.value.uid,e)}async loadAllDistributions(e){const t=[],s=this.loadedAllDistributions?null:await Wf();for(const r of this.repository.getAllOpeningChessNodes()){if(r.smartDistribution||r.moves.length===0)continue;const i=s?.[r.fen]??null;i?r.smartDistribution=i:t.push(r)}if(s&&(this.loadedAllDistributions=!0),t.length){const r=fI(10);let i=0;e&&e(i,t.length),await Promise.all(t.map(a=>(async()=>{await r(async()=>{const c=await Ds(a.fen);a.smartDistribution=c.smartDistribution,e&&e(++i,t.length)})})()))}else e&&e(0,0)}}const e0=Object.freeze(Object.defineProperty({__proto__:null,Model:pI,SaveStatus:Ke},Symbol.toStringTag,{value:"Module"})),gI=await(await fetch("./data/eco.json")).json(),Ou=gI,mI=n=>{const e=[],t=new Ln,s=()=>{e.push(t.fen())};s();for(const r of n)t.move(r),s();for(let r=e.length-1;r>=0;r--){const i=e[r];if(Ou[i])return Ou[i]}return null},t0=Object.freeze(Object.defineProperty({__proto__:null,getOpeningInfo:mI},Symbol.toStringTag,{value:"Module"}));export{OI as $,zT as A,GT as B,KT as C,QT as D,YT as E,XT as F,xI as G,JT as H,QI as I,H as J,YI as K,XI as L,iI as M,eI as N,rI as O,sI as P,uI as Q,ee as R,Ke as S,tT as T,Ka as U,_r as V,mi as W,lI as X,D as Y,Wa as Z,kI as _,II as a,wI as a0,EI as a1,oI as a2,pI as a3,cI as a4,RI as a5,SI as a6,MI as a7,zI as a8,BI as a9,FI as aa,PI as ab,HI as ac,WI as ad,t0 as ae,jI as af,NI as ag,e0 as ah,JI as ai,KI as aj,UI as ak,ZI as al,$I as am,qI as an,CI as ao,bI as ap,Mf as aq,Uo as b,nI as c,Fe as d,GI as e,jf as f,se as g,xn as h,Ue as i,so as j,mI as k,AI as l,tI as m,De as n,ZT as o,eT as p,HT as q,VI as r,TI as s,M as t,Ze as u,BT as v,DI as w,qT as x,$T as y,WT as z};
