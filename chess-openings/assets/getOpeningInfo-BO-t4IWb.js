import{P as Kt,b as jc,W as rp,l as Iu,C as kn,X as so,w as it,_ as $e,Y as ro,Z as is,f as io,$ as Fo,a0 as Uo,N as Au,e as _r,B as fn,a1 as ip,a2 as op,a3 as ap}from"./Symmetry-VIlJOQ_F.js";import{s as cp}from"./copyToClipboard-BTnIORKj.js";class Bc extends Kt{constructor(e,t){const s=jc()({enumeration:e.enumeration},t),r=jc()({validValues:s.enumeration.values,phetioValueType:rp({enumeration:s.enumeration})},s);super(e,r)}}const lp=()=>{};var $c={};/**
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
 */const Su=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},up=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],c=n[t++],u=((r&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Ru={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,c=a?n[r+1]:0,u=r+2<n.length,d=u?n[r+2]:0,f=i>>2,_=(i&3)<<4|c>>4;let g=(c&15)<<2|d>>6,A=d&63;u||(A=64,a||(g=64)),s.push(t[f],t[_],t[g],t[A])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Su(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):up(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const d=r<n.length?t[n.charAt(r)]:64;++r;const _=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||c==null||d==null||_==null)throw new hp;const g=i<<2|c>>4;if(s.push(g),d!==64){const A=c<<4&240|d>>2;if(s.push(A),_!==64){const P=d<<6&192|_;s.push(P)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class hp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dp=function(n){const e=Su(n);return Ru.encodeByteArray(e,!0)},Pr=function(n){return dp(n).replace(/\./g,"")},bu=function(n){try{return Ru.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pp=()=>fp().__FIREBASE_DEFAULTS__,mp=()=>{if(typeof process>"u"||typeof $c>"u")return;const n=$c.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},gp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&bu(n[1]);return e&&JSON.parse(e)},Yr=()=>{try{return lp()||pp()||mp()||gp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Cu=n=>{var e,t;return(t=(e=Yr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},_p=n=>{const e=Cu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Pu=()=>{var n;return(n=Yr())===null||n===void 0?void 0:n.config},Nu=n=>{var e;return(e=Yr())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class yp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Dn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Mu(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function vp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Pr(JSON.stringify(t)),Pr(JSON.stringify(a)),""].join(".")}const ds={};function wp(){const n={prod:[],emulator:[]};for(const e of Object.keys(ds))ds[e]?n.emulator.push(e):n.prod.push(e);return n}function Ep(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let qc=!1;function Ou(n,e){if(typeof window>"u"||typeof document>"u"||!Dn(window.location.host)||ds[n]===e||ds[n]||qc)return;ds[n]=e;function t(g){return`__firebase__banner__${g}`}const s="__firebase__banner",i=wp().prod.length>0;function a(){const g=document.getElementById(s);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,A){g.setAttribute("width","24"),g.setAttribute("id",A),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function d(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{qc=!0,a()},g}function f(g,A){g.setAttribute("id",A),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function _(){const g=Ep(s),A=t("text"),P=document.getElementById(A)||document.createElement("span"),D=t("learnmore"),N=document.getElementById(D)||document.createElement("a"),G=t("preprendIcon"),L=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const H=g.element;c(H),f(N,D);const ne=d();u(L,G),H.append(L,P,N,ne),document.body.appendChild(H)}i?(P.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
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
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Ip(){var n;const e=(n=Yr())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ap(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Sp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Rp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bp(){const n=Ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Cp(){return!Ip()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pp(){try{return typeof indexedDB=="object"}catch{return!1}}function Np(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Mp="FirebaseError";class wt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Mp,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Os.prototype.create)}}class Os{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Op(i,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new wt(r,c,s)}}function Op(n,e){return n.replace(kp,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const kp=/\{\$([^}]+)}/g;function Dp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Jt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if(Hc(i)&&Hc(a)){if(!Jt(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Hc(n){return n!==null&&typeof n=="object"}/**
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
 */function ks(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Vp(n,e){const t=new xp(n,e);return t.subscribe.bind(t)}class xp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Lp(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Ui),r.error===void 0&&(r.error=Ui),r.complete===void 0&&(r.complete=Ui);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ui(){}/**
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
 */function He(n){return n&&n._delegate?n._delegate:n}class Zt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Fp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new yp;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),r=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jp(e))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gt){return this.instances.has(e)}getOptions(e=Gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&a.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Up(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gt){return this.component?this.component.multipleInstances?e:Gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Up(n){return n===Gt?void 0:n}function jp(n){return n.instantiationMode==="EAGER"}/**
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
 */class Bp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Fp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const $p={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},qp=Q.INFO,Hp={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Wp=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Hp[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jo{constructor(e){this.name=e,this._logLevel=qp,this._logHandler=Wp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$p[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const zp=(n,e)=>e.some(t=>n instanceof t);let Wc,zc;function Gp(){return Wc||(Wc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kp(){return zc||(zc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ku=new WeakMap,oo=new WeakMap,Du=new WeakMap,ji=new WeakMap,Bo=new WeakMap;function Qp(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Nt(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ku.set(t,n)}).catch(()=>{}),Bo.set(e,n),e}function Yp(n){if(oo.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});oo.set(n,e)}let ao={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return oo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Du.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Nt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Xp(n){ao=n(ao)}function Jp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Bi(this),e,...t);return Du.set(s,e.sort?e.sort():[e]),Nt(s)}:Kp().includes(n)?function(...e){return n.apply(Bi(this),e),Nt(ku.get(this))}:function(...e){return Nt(n.apply(Bi(this),e))}}function Zp(n){return typeof n=="function"?Jp(n):(n instanceof IDBTransaction&&Yp(n),zp(n,Gp())?new Proxy(n,ao):n)}function Nt(n){if(n instanceof IDBRequest)return Qp(n);if(ji.has(n))return ji.get(n);const e=Zp(n);return e!==n&&(ji.set(n,e),Bo.set(e,n)),e}const Bi=n=>Bo.get(n);function em(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),c=Nt(a);return s&&a.addEventListener("upgradeneeded",u=>{s(Nt(a.result),u.oldVersion,u.newVersion,Nt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const tm=["get","getKey","getAll","getAllKeys","count"],nm=["put","add","delete","clear"],$i=new Map;function Gc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($i.get(e))return $i.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=nm.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||tm.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,r?"readwrite":"readonly");let d=u.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),r&&u.done]))[0]};return $i.set(e,i),i}Xp(n=>({...n,get:(e,t,s)=>Gc(e,t)||n.get(e,t,s),has:(e,t)=>!!Gc(e,t)||n.has(e,t)}));/**
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
 */class sm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(rm(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function rm(n){const e=n.getComponent();return e?.type==="VERSION"}const co="@firebase/app",Kc="0.13.2";/**
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
 */const gt=new jo("@firebase/app"),im="@firebase/app-compat",om="@firebase/analytics-compat",am="@firebase/analytics",cm="@firebase/app-check-compat",lm="@firebase/app-check",um="@firebase/auth",hm="@firebase/auth-compat",dm="@firebase/database",fm="@firebase/data-connect",pm="@firebase/database-compat",mm="@firebase/functions",gm="@firebase/functions-compat",_m="@firebase/installations",ym="@firebase/installations-compat",vm="@firebase/messaging",wm="@firebase/messaging-compat",Em="@firebase/performance",Tm="@firebase/performance-compat",Im="@firebase/remote-config",Am="@firebase/remote-config-compat",Sm="@firebase/storage",Rm="@firebase/storage-compat",bm="@firebase/firestore",Cm="@firebase/ai",Pm="@firebase/firestore-compat",Nm="firebase",Mm="11.10.0";/**
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
 */const lo="[DEFAULT]",Om={[co]:"fire-core",[im]:"fire-core-compat",[am]:"fire-analytics",[om]:"fire-analytics-compat",[lm]:"fire-app-check",[cm]:"fire-app-check-compat",[um]:"fire-auth",[hm]:"fire-auth-compat",[dm]:"fire-rtdb",[fm]:"fire-data-connect",[pm]:"fire-rtdb-compat",[mm]:"fire-fn",[gm]:"fire-fn-compat",[_m]:"fire-iid",[ym]:"fire-iid-compat",[vm]:"fire-fcm",[wm]:"fire-fcm-compat",[Em]:"fire-perf",[Tm]:"fire-perf-compat",[Im]:"fire-rc",[Am]:"fire-rc-compat",[Sm]:"fire-gcs",[Rm]:"fire-gcs-compat",[bm]:"fire-fst",[Pm]:"fire-fst-compat",[Cm]:"fire-vertex","fire-js":"fire-js",[Nm]:"fire-js-all"};/**
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
 */const Nr=new Map,km=new Map,uo=new Map;function Qc(n,e){try{n.container.addComponent(e)}catch(t){gt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function An(n){const e=n.name;if(uo.has(e))return gt.debug(`There were multiple attempts to register component ${e}.`),!1;uo.set(e,n);for(const t of Nr.values())Qc(t,n);for(const t of km.values())Qc(t,n);return!0}function $o(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Le(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Dm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mt=new Os("app","Firebase",Dm);/**
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
 */class Vm{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
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
 */const Vn=Mm;function Vu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:lo,automaticDataCollectionEnabled:!0},e),r=s.name;if(typeof r!="string"||!r)throw Mt.create("bad-app-name",{appName:String(r)});if(t||(t=Pu()),!t)throw Mt.create("no-options");const i=Nr.get(r);if(i){if(Jt(t,i.options)&&Jt(s,i.config))return i;throw Mt.create("duplicate-app",{appName:r})}const a=new Bp(r);for(const u of uo.values())a.addComponent(u);const c=new Vm(t,s,a);return Nr.set(r,c),c}function xu(n=lo){const e=Nr.get(n);if(!e&&n===lo&&Pu())return Vu();if(!e)throw Mt.create("no-app",{appName:n});return e}function Ot(n,e,t){var s;let r=(s=Om[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gt.warn(c.join(" "));return}An(new Zt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const xm="firebase-heartbeat-database",Lm=1,vs="firebase-heartbeat-store";let qi=null;function Lu(){return qi||(qi=em(xm,Lm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(vs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Mt.create("idb-open",{originalErrorMessage:n.message})})),qi}async function Fm(n){try{const t=(await Lu()).transaction(vs),s=await t.objectStore(vs).get(Fu(n));return await t.done,s}catch(e){if(e instanceof wt)gt.warn(e.message);else{const t=Mt.create("idb-get",{originalErrorMessage:e?.message});gt.warn(t.message)}}}async function Yc(n,e){try{const s=(await Lu()).transaction(vs,"readwrite");await s.objectStore(vs).put(e,Fu(n)),await s.done}catch(t){if(t instanceof wt)gt.warn(t.message);else{const s=Mt.create("idb-set",{originalErrorMessage:t?.message});gt.warn(s.message)}}}function Fu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Um=1024,jm=30;class Bm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qm(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>jm){const a=Hm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){gt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xc(),{heartbeatsToSend:s,unsentEntries:r}=$m(this._heartbeatsCache.heartbeats),i=Pr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return gt.warn(t),""}}}function Xc(){return new Date().toISOString().substring(0,10)}function $m(n,e=Um){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),Jc(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Jc(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class qm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pp()?Np().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Fm(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Yc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Yc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Jc(n){return Pr(JSON.stringify({version:2,heartbeats:n})).length}function Hm(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Wm(n){An(new Zt("platform-logger",e=>new sm(e),"PRIVATE")),An(new Zt("heartbeat",e=>new Bm(e),"PRIVATE")),Ot(co,Kc,n),Ot(co,Kc,"esm2017"),Ot("fire-js","")}Wm("");var zm="firebase",Gm="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(zm,Gm,"app");var Zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kt,Uu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,m){function y(){}y.prototype=m.prototype,E.D=m.prototype,E.prototype=new y,E.prototype.constructor=E,E.C=function(w,T,S){for(var v=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)v[lt-2]=arguments[lt];return m.prototype[T].apply(w,v)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(E,m,y){y||(y=0);var w=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)w[T]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(T=0;16>T;++T)w[T]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=E.g[0],y=E.g[1],T=E.g[2];var S=E.g[3],v=m+(S^y&(T^S))+w[0]+3614090360&4294967295;m=y+(v<<7&4294967295|v>>>25),v=S+(T^m&(y^T))+w[1]+3905402710&4294967295,S=m+(v<<12&4294967295|v>>>20),v=T+(y^S&(m^y))+w[2]+606105819&4294967295,T=S+(v<<17&4294967295|v>>>15),v=y+(m^T&(S^m))+w[3]+3250441966&4294967295,y=T+(v<<22&4294967295|v>>>10),v=m+(S^y&(T^S))+w[4]+4118548399&4294967295,m=y+(v<<7&4294967295|v>>>25),v=S+(T^m&(y^T))+w[5]+1200080426&4294967295,S=m+(v<<12&4294967295|v>>>20),v=T+(y^S&(m^y))+w[6]+2821735955&4294967295,T=S+(v<<17&4294967295|v>>>15),v=y+(m^T&(S^m))+w[7]+4249261313&4294967295,y=T+(v<<22&4294967295|v>>>10),v=m+(S^y&(T^S))+w[8]+1770035416&4294967295,m=y+(v<<7&4294967295|v>>>25),v=S+(T^m&(y^T))+w[9]+2336552879&4294967295,S=m+(v<<12&4294967295|v>>>20),v=T+(y^S&(m^y))+w[10]+4294925233&4294967295,T=S+(v<<17&4294967295|v>>>15),v=y+(m^T&(S^m))+w[11]+2304563134&4294967295,y=T+(v<<22&4294967295|v>>>10),v=m+(S^y&(T^S))+w[12]+1804603682&4294967295,m=y+(v<<7&4294967295|v>>>25),v=S+(T^m&(y^T))+w[13]+4254626195&4294967295,S=m+(v<<12&4294967295|v>>>20),v=T+(y^S&(m^y))+w[14]+2792965006&4294967295,T=S+(v<<17&4294967295|v>>>15),v=y+(m^T&(S^m))+w[15]+1236535329&4294967295,y=T+(v<<22&4294967295|v>>>10),v=m+(T^S&(y^T))+w[1]+4129170786&4294967295,m=y+(v<<5&4294967295|v>>>27),v=S+(y^T&(m^y))+w[6]+3225465664&4294967295,S=m+(v<<9&4294967295|v>>>23),v=T+(m^y&(S^m))+w[11]+643717713&4294967295,T=S+(v<<14&4294967295|v>>>18),v=y+(S^m&(T^S))+w[0]+3921069994&4294967295,y=T+(v<<20&4294967295|v>>>12),v=m+(T^S&(y^T))+w[5]+3593408605&4294967295,m=y+(v<<5&4294967295|v>>>27),v=S+(y^T&(m^y))+w[10]+38016083&4294967295,S=m+(v<<9&4294967295|v>>>23),v=T+(m^y&(S^m))+w[15]+3634488961&4294967295,T=S+(v<<14&4294967295|v>>>18),v=y+(S^m&(T^S))+w[4]+3889429448&4294967295,y=T+(v<<20&4294967295|v>>>12),v=m+(T^S&(y^T))+w[9]+568446438&4294967295,m=y+(v<<5&4294967295|v>>>27),v=S+(y^T&(m^y))+w[14]+3275163606&4294967295,S=m+(v<<9&4294967295|v>>>23),v=T+(m^y&(S^m))+w[3]+4107603335&4294967295,T=S+(v<<14&4294967295|v>>>18),v=y+(S^m&(T^S))+w[8]+1163531501&4294967295,y=T+(v<<20&4294967295|v>>>12),v=m+(T^S&(y^T))+w[13]+2850285829&4294967295,m=y+(v<<5&4294967295|v>>>27),v=S+(y^T&(m^y))+w[2]+4243563512&4294967295,S=m+(v<<9&4294967295|v>>>23),v=T+(m^y&(S^m))+w[7]+1735328473&4294967295,T=S+(v<<14&4294967295|v>>>18),v=y+(S^m&(T^S))+w[12]+2368359562&4294967295,y=T+(v<<20&4294967295|v>>>12),v=m+(y^T^S)+w[5]+4294588738&4294967295,m=y+(v<<4&4294967295|v>>>28),v=S+(m^y^T)+w[8]+2272392833&4294967295,S=m+(v<<11&4294967295|v>>>21),v=T+(S^m^y)+w[11]+1839030562&4294967295,T=S+(v<<16&4294967295|v>>>16),v=y+(T^S^m)+w[14]+4259657740&4294967295,y=T+(v<<23&4294967295|v>>>9),v=m+(y^T^S)+w[1]+2763975236&4294967295,m=y+(v<<4&4294967295|v>>>28),v=S+(m^y^T)+w[4]+1272893353&4294967295,S=m+(v<<11&4294967295|v>>>21),v=T+(S^m^y)+w[7]+4139469664&4294967295,T=S+(v<<16&4294967295|v>>>16),v=y+(T^S^m)+w[10]+3200236656&4294967295,y=T+(v<<23&4294967295|v>>>9),v=m+(y^T^S)+w[13]+681279174&4294967295,m=y+(v<<4&4294967295|v>>>28),v=S+(m^y^T)+w[0]+3936430074&4294967295,S=m+(v<<11&4294967295|v>>>21),v=T+(S^m^y)+w[3]+3572445317&4294967295,T=S+(v<<16&4294967295|v>>>16),v=y+(T^S^m)+w[6]+76029189&4294967295,y=T+(v<<23&4294967295|v>>>9),v=m+(y^T^S)+w[9]+3654602809&4294967295,m=y+(v<<4&4294967295|v>>>28),v=S+(m^y^T)+w[12]+3873151461&4294967295,S=m+(v<<11&4294967295|v>>>21),v=T+(S^m^y)+w[15]+530742520&4294967295,T=S+(v<<16&4294967295|v>>>16),v=y+(T^S^m)+w[2]+3299628645&4294967295,y=T+(v<<23&4294967295|v>>>9),v=m+(T^(y|~S))+w[0]+4096336452&4294967295,m=y+(v<<6&4294967295|v>>>26),v=S+(y^(m|~T))+w[7]+1126891415&4294967295,S=m+(v<<10&4294967295|v>>>22),v=T+(m^(S|~y))+w[14]+2878612391&4294967295,T=S+(v<<15&4294967295|v>>>17),v=y+(S^(T|~m))+w[5]+4237533241&4294967295,y=T+(v<<21&4294967295|v>>>11),v=m+(T^(y|~S))+w[12]+1700485571&4294967295,m=y+(v<<6&4294967295|v>>>26),v=S+(y^(m|~T))+w[3]+2399980690&4294967295,S=m+(v<<10&4294967295|v>>>22),v=T+(m^(S|~y))+w[10]+4293915773&4294967295,T=S+(v<<15&4294967295|v>>>17),v=y+(S^(T|~m))+w[1]+2240044497&4294967295,y=T+(v<<21&4294967295|v>>>11),v=m+(T^(y|~S))+w[8]+1873313359&4294967295,m=y+(v<<6&4294967295|v>>>26),v=S+(y^(m|~T))+w[15]+4264355552&4294967295,S=m+(v<<10&4294967295|v>>>22),v=T+(m^(S|~y))+w[6]+2734768916&4294967295,T=S+(v<<15&4294967295|v>>>17),v=y+(S^(T|~m))+w[13]+1309151649&4294967295,y=T+(v<<21&4294967295|v>>>11),v=m+(T^(y|~S))+w[4]+4149444226&4294967295,m=y+(v<<6&4294967295|v>>>26),v=S+(y^(m|~T))+w[11]+3174756917&4294967295,S=m+(v<<10&4294967295|v>>>22),v=T+(m^(S|~y))+w[2]+718787259&4294967295,T=S+(v<<15&4294967295|v>>>17),v=y+(S^(T|~m))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(T+(v<<21&4294967295|v>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+S&4294967295}s.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var y=m-this.blockSize,w=this.B,T=this.h,S=0;S<m;){if(T==0)for(;S<=y;)r(this,E,S),S+=this.blockSize;if(typeof E=="string"){for(;S<m;)if(w[T++]=E.charCodeAt(S++),T==this.blockSize){r(this,w),T=0;break}}else for(;S<m;)if(w[T++]=E[S++],T==this.blockSize){r(this,w),T=0;break}}this.h=T,this.o+=m},s.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var y=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=y&255,y/=256;for(this.u(E),E=Array(16),m=y=0;4>m;++m)for(var w=0;32>w;w+=8)E[y++]=this.g[m]>>>w&255;return E};function i(E,m){var y=c;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=m(E)}function a(E,m){this.h=m;for(var y=[],w=!0,T=E.length-1;0<=T;T--){var S=E[T]|0;w&&S==m||(y[T]=S,w=!1)}this.g=y}var c={};function u(E){return-128<=E&&128>E?i(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return _;if(0>E)return N(d(-E));for(var m=[],y=1,w=0;E>=y;w++)m[w]=E/y|0,y*=4294967296;return new a(m,0)}function f(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return N(f(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(m,8)),w=_,T=0;T<E.length;T+=8){var S=Math.min(8,E.length-T),v=parseInt(E.substring(T,T+S),m);8>S?(S=d(Math.pow(m,S)),w=w.j(S).add(d(v))):(w=w.j(y),w=w.add(d(v)))}return w}var _=u(0),g=u(1),A=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-N(this).m();for(var E=0,m=1,y=0;y<this.g.length;y++){var w=this.i(y);E+=(0<=w?w:4294967296+w)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(D(this))return"-"+N(this).toString(E);for(var m=d(Math.pow(E,6)),y=this,w="";;){var T=ne(y,m).g;y=G(y,T.j(m));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(E);if(y=T,P(y))return S+w;for(;6>S.length;)S="0"+S;w=S+w}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function D(E){return E.h==-1}n.l=function(E){return E=G(this,E),D(E)?-1:P(E)?0:1};function N(E){for(var m=E.g.length,y=[],w=0;w<m;w++)y[w]=~E.g[w];return new a(y,~E.h).add(g)}n.abs=function(){return D(this)?N(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],w=0,T=0;T<=m;T++){var S=w+(this.i(T)&65535)+(E.i(T)&65535),v=(S>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);w=v>>>16,S&=65535,v&=65535,y[T]=v<<16|S}return new a(y,y[y.length-1]&-2147483648?-1:0)};function G(E,m){return E.add(N(m))}n.j=function(E){if(P(this)||P(E))return _;if(D(this))return D(E)?N(this).j(N(E)):N(N(this).j(E));if(D(E))return N(this.j(N(E)));if(0>this.l(A)&&0>E.l(A))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,y=[],w=0;w<2*m;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var T=0;T<E.g.length;T++){var S=this.i(w)>>>16,v=this.i(w)&65535,lt=E.i(T)>>>16,$n=E.i(T)&65535;y[2*w+2*T]+=v*$n,L(y,2*w+2*T),y[2*w+2*T+1]+=S*$n,L(y,2*w+2*T+1),y[2*w+2*T+1]+=v*lt,L(y,2*w+2*T+1),y[2*w+2*T+2]+=S*lt,L(y,2*w+2*T+2)}for(w=0;w<m;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=m;w<2*m;w++)y[w]=0;return new a(y,0)};function L(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function H(E,m){this.g=E,this.h=m}function ne(E,m){if(P(m))throw Error("division by zero");if(P(E))return new H(_,_);if(D(E))return m=ne(N(E),m),new H(N(m.g),N(m.h));if(D(m))return m=ne(E,N(m)),new H(N(m.g),m.h);if(30<E.g.length){if(D(E)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var y=g,w=m;0>=w.l(E);)y=Pe(y),w=Pe(w);var T=U(y,1),S=U(w,1);for(w=U(w,2),y=U(y,2);!P(w);){var v=S.add(w);0>=v.l(E)&&(T=T.add(y),S=v),w=U(w,1),y=U(y,1)}return m=G(E,T.j(m)),new H(T,m)}for(T=_;0<=E.l(m);){for(y=Math.max(1,Math.floor(E.m()/m.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),S=d(y),v=S.j(m);D(v)||0<v.l(E);)y-=w,S=d(y),v=S.j(m);P(S)&&(S=g),T=T.add(S),E=G(E,v)}return new H(T,E)}n.A=function(E){return ne(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)&E.i(w);return new a(y,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)|E.i(w);return new a(y,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)^E.i(w);return new a(y,this.h^E.h)};function Pe(E){for(var m=E.g.length+1,y=[],w=0;w<m;w++)y[w]=E.i(w)<<1|E.i(w-1)>>>31;return new a(y,E.h)}function U(E,m){var y=m>>5;m%=32;for(var w=E.g.length-y,T=[],S=0;S<w;S++)T[S]=0<m?E.i(S+y)>>>m|E.i(S+y+1)<<32-m:E.i(S+y);return new a(T,E.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Uu=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,kt=a}).apply(typeof Zc<"u"?Zc:typeof self<"u"?self:typeof window<"u"?window:{});var ar=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ju,as,Bu,yr,ho,$u,qu,Hu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ar=="object"&&ar];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=t(this);function r(o,l){if(l)e:{var h=s;o=o.split(".");for(var p=0;p<o.length-1;p++){var I=o[p];if(!(I in h))break e;h=h[I]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,p=!1,I={next:function(){if(!p&&h<o.length){var R=h++;return{value:l(R,o[R]),done:!1}}return p=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}r("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,h){return o.call.apply(o.bind,arguments)}function _(o,l,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,p),o.apply(l,I)}}return function(){return o.apply(l,arguments)}}function g(o,l,h){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:_,g.apply(null,arguments)}function A(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function P(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,I,R){for(var O=Array(arguments.length-2),te=2;te<arguments.length;te++)O[te-2]=arguments[te];return l.prototype[I].apply(p,O)}}function D(o){const l=o.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function N(o,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const I=o.length||0,R=p.length||0;o.length=I+R;for(let O=0;O<R;O++)o[I+O]=p[O]}else o.push(p)}}class G{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function L(o){return/^[\s\xa0]*$/.test(o)}function H(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function ne(o){return ne[" "](o),o}ne[" "]=function(){};var Pe=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function U(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function E(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function m(o){const l={};for(const h in o)l[h]=o[h];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,l){let h,p;for(let I=1;I<arguments.length;I++){p=arguments[I];for(h in p)o[h]=p[h];for(let R=0;R<y.length;R++)h=y[R],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function T(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function S(o){c.setTimeout(()=>{throw o},0)}function v(){var o=mi;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class lt{constructor(){this.h=this.g=null}add(l,h){const p=$n.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var $n=new G(()=>new If,o=>o.reset());class If{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let qn,Hn=!1,mi=new lt,ja=()=>{const o=c.Promise.resolve(void 0);qn=()=>{o.then(Af)}};var Af=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(h){S(h)}var l=$n;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Hn=!1};function Et(){this.s=this.s,this.C=this.C}Et.prototype.s=!1,Et.prototype.ma=function(){this.s||(this.s=!0,this.N())},Et.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var Sf=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o}();function Wn(o,l){if(Ee.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(Pe){e:{try{ne(l.nodeName);var I=!0;break e}catch{}I=!1}I||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Rf[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Wn.aa.h.call(this)}}P(Wn,Ee);var Rf={2:"touch",3:"pen",4:"mouse"};Wn.prototype.h=function(){Wn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var $s="closure_listenable_"+(1e6*Math.random()|0),bf=0;function Cf(o,l,h,p,I){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=I,this.key=++bf,this.da=this.fa=!1}function qs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Hs(o){this.src=o,this.g={},this.h=0}Hs.prototype.add=function(o,l,h,p,I){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var O=_i(o,l,p,I);return-1<O?(l=o[O],h||(l.fa=!1)):(l=new Cf(l,this.src,R,!!p,I),l.fa=h,o.push(l)),l};function gi(o,l){var h=l.type;if(h in o.g){var p=o.g[h],I=Array.prototype.indexOf.call(p,l,void 0),R;(R=0<=I)&&Array.prototype.splice.call(p,I,1),R&&(qs(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function _i(o,l,h,p){for(var I=0;I<o.length;++I){var R=o[I];if(!R.da&&R.listener==l&&R.capture==!!h&&R.ha==p)return I}return-1}var yi="closure_lm_"+(1e6*Math.random()|0),vi={};function Ba(o,l,h,p,I){if(Array.isArray(l)){for(var R=0;R<l.length;R++)Ba(o,l[R],h,p,I);return null}return h=Ha(h),o&&o[$s]?o.K(l,h,d(p)?!!p.capture:!1,I):Pf(o,l,h,!1,p,I)}function Pf(o,l,h,p,I,R){if(!l)throw Error("Invalid event type");var O=d(I)?!!I.capture:!!I,te=Ei(o);if(te||(o[yi]=te=new Hs(o)),h=te.add(l,h,p,O,R),h.proxy)return h;if(p=Nf(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Sf||(I=O),I===void 0&&(I=!1),o.addEventListener(l.toString(),p,I);else if(o.attachEvent)o.attachEvent(qa(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Nf(){function o(h){return l.call(o.src,o.listener,h)}const l=Mf;return o}function $a(o,l,h,p,I){if(Array.isArray(l))for(var R=0;R<l.length;R++)$a(o,l[R],h,p,I);else p=d(p)?!!p.capture:!!p,h=Ha(h),o&&o[$s]?(o=o.i,l=String(l).toString(),l in o.g&&(R=o.g[l],h=_i(R,h,p,I),-1<h&&(qs(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete o.g[l],o.h--)))):o&&(o=Ei(o))&&(l=o.g[l.toString()],o=-1,l&&(o=_i(l,h,p,I)),(h=-1<o?l[o]:null)&&wi(h))}function wi(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[$s])gi(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(qa(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=Ei(l))?(gi(h,o),h.h==0&&(h.src=null,l[yi]=null)):qs(o)}}}function qa(o){return o in vi?vi[o]:vi[o]="on"+o}function Mf(o,l){if(o.da)o=!0;else{l=new Wn(l,this);var h=o.listener,p=o.ha||o.src;o.fa&&wi(o),o=h.call(p,l)}return o}function Ei(o){return o=o[yi],o instanceof Hs?o:null}var Ti="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ha(o){return typeof o=="function"?o:(o[Ti]||(o[Ti]=function(l){return o.handleEvent(l)}),o[Ti])}function Te(){Et.call(this),this.i=new Hs(this),this.M=this,this.F=null}P(Te,Et),Te.prototype[$s]=!0,Te.prototype.removeEventListener=function(o,l,h,p){$a(this,o,l,h,p)};function Ne(o,l){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new Ee(l,o);else if(l instanceof Ee)l.target=l.target||o;else{var I=l;l=new Ee(p,o),w(l,I)}if(I=!0,h)for(var R=h.length-1;0<=R;R--){var O=l.g=h[R];I=Ws(O,p,!0,l)&&I}if(O=l.g=o,I=Ws(O,p,!0,l)&&I,I=Ws(O,p,!1,l)&&I,h)for(R=0;R<h.length;R++)O=l.g=h[R],I=Ws(O,p,!1,l)&&I}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],p=0;p<h.length;p++)qs(h[p]);delete o.g[l],o.h--}}this.F=null},Te.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},Te.prototype.L=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function Ws(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var I=!0,R=0;R<l.length;++R){var O=l[R];if(O&&!O.da&&O.capture==h){var te=O.listener,_e=O.ha||O.src;O.fa&&gi(o.i,O),I=te.call(_e,p)!==!1&&I}}return I&&!p.defaultPrevented}function Wa(o,l,h){if(typeof o=="function")h&&(o=g(o,h));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function za(o){o.g=Wa(()=>{o.g=null,o.i&&(o.i=!1,za(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Of extends Et{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:za(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zn(o){Et.call(this),this.h=o,this.g={}}P(zn,Et);var Ga=[];function Ka(o){U(o.g,function(l,h){this.g.hasOwnProperty(h)&&wi(l)},o),o.g={}}zn.prototype.N=function(){zn.aa.N.call(this),Ka(this)},zn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ii=c.JSON.stringify,kf=c.JSON.parse,Df=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Ai(){}Ai.prototype.h=null;function Qa(o){return o.h||(o.h=o.i())}function Ya(){}var Gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Si(){Ee.call(this,"d")}P(Si,Ee);function Ri(){Ee.call(this,"c")}P(Ri,Ee);var qt={},Xa=null;function zs(){return Xa=Xa||new Te}qt.La="serverreachability";function Ja(o){Ee.call(this,qt.La,o)}P(Ja,Ee);function Kn(o){const l=zs();Ne(l,new Ja(l))}qt.STAT_EVENT="statevent";function Za(o,l){Ee.call(this,qt.STAT_EVENT,o),this.stat=l}P(Za,Ee);function Me(o){const l=zs();Ne(l,new Za(l,o))}qt.Ma="timingevent";function ec(o,l){Ee.call(this,qt.Ma,o),this.size=l}P(ec,Ee);function Qn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function Yn(){this.g=!0}Yn.prototype.xa=function(){this.g=!1};function Vf(o,l,h,p,I,R){o.info(function(){if(o.g)if(R)for(var O="",te=R.split("&"),_e=0;_e<te.length;_e++){var J=te[_e].split("=");if(1<J.length){var Ie=J[0];J=J[1];var Ae=Ie.split("_");O=2<=Ae.length&&Ae[1]=="type"?O+(Ie+"="+J+"&"):O+(Ie+"=redacted&")}}else O=null;else O=R;return"XMLHTTP REQ ("+p+") [attempt "+I+"]: "+l+`
`+h+`
`+O})}function xf(o,l,h,p,I,R,O){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+I+"]: "+l+`
`+h+`
`+R+" "+O})}function ln(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Ff(o,h)+(p?" "+p:"")})}function Lf(o,l){o.info(function(){return"TIMEOUT: "+l})}Yn.prototype.info=function(){};function Ff(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var I=p[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var O=1;O<I.length;O++)I[O]=""}}}}return Ii(h)}catch{return l}}var Gs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},tc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},bi;function Ks(){}P(Ks,Ai),Ks.prototype.g=function(){return new XMLHttpRequest},Ks.prototype.i=function(){return{}},bi=new Ks;function Tt(o,l,h,p){this.j=o,this.i=l,this.l=h,this.R=p||1,this.U=new zn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new nc}function nc(){this.i=null,this.g="",this.h=!1}var sc={},Ci={};function Pi(o,l,h){o.L=1,o.v=Js(ut(l)),o.m=h,o.P=!0,rc(o,null)}function rc(o,l){o.F=Date.now(),Qs(o),o.A=ut(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),yc(h.i,"t",p),o.C=0,h=o.j.J,o.h=new nc,o.g=xc(o.j,h?l:null,!o.m),0<o.O&&(o.M=new Of(g(o.Y,o,o.g),o.O)),l=o.U,h=o.g,p=o.ca;var I="readystatechange";Array.isArray(I)||(I&&(Ga[0]=I.toString()),I=Ga);for(var R=0;R<I.length;R++){var O=Ba(h,I[R],p||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Kn(),Vf(o.i,o.u,o.A,o.l,o.R,o.m)}Tt.prototype.ca=function(o){o=o.target;const l=this.M;l&&ht(o)==3?l.j():this.Y(o)},Tt.prototype.Y=function(o){try{if(o==this.g)e:{const Ae=ht(this.g);var l=this.g.Ba();const dn=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||Sc(this.g)))){this.J||Ae!=4||l==7||(l==8||0>=dn?Kn(3):Kn(2)),Ni(this);var h=this.g.Z();this.X=h;t:if(ic(this)){var p=Sc(this.g);o="";var I=p.length,R=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ht(this),Xn(this);var O="";break t}this.h.i=new c.TextDecoder}for(l=0;l<I;l++)this.h.h=!0,o+=this.h.i.decode(p[l],{stream:!(R&&l==I-1)});p.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=h==200,xf(this.i,this.u,this.A,this.l,this.R,Ae,h),this.o){if(this.T&&!this.K){t:{if(this.g){var te,_e=this.g;if((te=_e.g?_e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(te)){var J=te;break t}}J=null}if(h=J)ln(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mi(this,h);else{this.o=!1,this.s=3,Me(12),Ht(this),Xn(this);break e}}if(this.P){h=!0;let We;for(;!this.J&&this.C<O.length;)if(We=Uf(this,O),We==Ci){Ae==4&&(this.s=4,Me(14),h=!1),ln(this.i,this.l,null,"[Incomplete Response]");break}else if(We==sc){this.s=4,Me(15),ln(this.i,this.l,O,"[Invalid Chunk]"),h=!1;break}else ln(this.i,this.l,We,null),Mi(this,We);if(ic(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||O.length!=0||this.h.h||(this.s=1,Me(16),h=!1),this.o=this.o&&h,!h)ln(this.i,this.l,O,"[Invalid Chunked Response]"),Ht(this),Xn(this);else if(0<O.length&&!this.W){this.W=!0;var Ie=this.j;Ie.g==this&&Ie.ba&&!Ie.M&&(Ie.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Li(Ie),Ie.M=!0,Me(11))}}else ln(this.i,this.l,O,null),Mi(this,O);Ae==4&&Ht(this),this.o&&!this.J&&(Ae==4?Oc(this.j,this):(this.o=!1,Qs(this)))}else np(this.g),h==400&&0<O.indexOf("Unknown SID")?(this.s=3,Me(12)):(this.s=0,Me(13)),Ht(this),Xn(this)}}}catch{}finally{}};function ic(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Uf(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?Ci:(h=Number(l.substring(h,p)),isNaN(h)?sc:(p+=1,p+h>l.length?Ci:(l=l.slice(p,p+h),o.C=p+h,l)))}Tt.prototype.cancel=function(){this.J=!0,Ht(this)};function Qs(o){o.S=Date.now()+o.I,oc(o,o.I)}function oc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Qn(g(o.ba,o),l)}function Ni(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Tt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Lf(this.i,this.A),this.L!=2&&(Kn(),Me(17)),Ht(this),this.s=2,Xn(this)):oc(this,this.S-o)};function Xn(o){o.j.G==0||o.J||Oc(o.j,o)}function Ht(o){Ni(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Ka(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Mi(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||Oi(h.h,o))){if(!o.K&&Oi(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var I=p;if(I[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)rr(h),nr(h);else break e;xi(h),Me(18)}}else h.za=I[1],0<h.za-h.T&&37500>I[2]&&h.F&&h.v==0&&!h.C&&(h.C=Qn(g(h.Za,h),6e3));if(1>=lc(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else zt(h,11)}else if((o.K||h.g==o)&&rr(h),!L(l))for(I=h.Da.g.parse(l),l=0;l<I.length;l++){let J=I[l];if(h.T=J[0],J=J[1],h.G==2)if(J[0]=="c"){h.K=J[1],h.ia=J[2];const Ie=J[3];Ie!=null&&(h.la=Ie,h.j.info("VER="+h.la));const Ae=J[4];Ae!=null&&(h.Aa=Ae,h.j.info("SVER="+h.Aa));const dn=J[5];dn!=null&&typeof dn=="number"&&0<dn&&(p=1.5*dn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const We=o.g;if(We){const or=We.g?We.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(or){var R=p.h;R.g||or.indexOf("spdy")==-1&&or.indexOf("quic")==-1&&or.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ki(R,R.h),R.h=null))}if(p.D){const Fi=We.g?We.g.getResponseHeader("X-HTTP-Session-Id"):null;Fi&&(p.ya=Fi,se(p.I,p.D,Fi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var O=o;if(p.qa=Vc(p,p.J?p.ia:null,p.W),O.K){uc(p.h,O);var te=O,_e=p.L;_e&&(te.I=_e),te.B&&(Ni(te),Qs(te)),p.g=O}else Nc(p);0<h.i.length&&sr(h)}else J[0]!="stop"&&J[0]!="close"||zt(h,7);else h.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?zt(h,7):Vi(h):J[0]!="noop"&&h.l&&h.l.ta(J),h.v=0)}}Kn(4)}catch{}}var jf=class{constructor(o,l){this.g=o,this.map=l}};function ac(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function lc(o){return o.h?1:o.g?o.g.size:0}function Oi(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function ki(o,l){o.g?o.g.add(l):o.h=l}function uc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}ac.prototype.cancel=function(){if(this.i=hc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function hc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return D(o.i)}function Bf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,p=0;p<h;p++)l.push(o[p]);return l}l=[],h=0;for(p in o)l[h++]=o[p];return l}function $f(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const p in o)l[h++]=p;return l}}}function dc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=$f(o),p=Bf(o),I=p.length,R=0;R<I;R++)l.call(void 0,p[R],h&&h[R],o)}var fc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qf(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),I=null;if(0<=p){var R=o[h].substring(0,p);I=o[h].substring(p+1)}else R=o[h];l(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function Wt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Wt){this.h=o.h,Ys(this,o.j),this.o=o.o,this.g=o.g,Xs(this,o.s),this.l=o.l;var l=o.i,h=new es;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),pc(this,h),this.m=o.m}else o&&(l=String(o).match(fc))?(this.h=!1,Ys(this,l[1]||"",!0),this.o=Jn(l[2]||""),this.g=Jn(l[3]||"",!0),Xs(this,l[4]),this.l=Jn(l[5]||"",!0),pc(this,l[6]||"",!0),this.m=Jn(l[7]||"")):(this.h=!1,this.i=new es(null,this.h))}Wt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Zn(l,mc,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Zn(l,mc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Zn(h,h.charAt(0)=="/"?zf:Wf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Zn(h,Kf)),o.join("")};function ut(o){return new Wt(o)}function Ys(o,l,h){o.j=h?Jn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Xs(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function pc(o,l,h){l instanceof es?(o.i=l,Qf(o.i,o.h)):(h||(l=Zn(l,Gf)),o.i=new es(l,o.h))}function se(o,l,h){o.i.set(l,h)}function Js(o){return se(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Jn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Zn(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,Hf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Hf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var mc=/[#\/\?@]/g,Wf=/[#\?:]/g,zf=/[#\?]/g,Gf=/[#\?@]/g,Kf=/#/g;function es(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function It(o){o.g||(o.g=new Map,o.h=0,o.i&&qf(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=es.prototype,n.add=function(o,l){It(this),this.i=null,o=un(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function gc(o,l){It(o),l=un(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function _c(o,l){return It(o),l=un(o,l),o.g.has(l)}n.forEach=function(o,l){It(this),this.g.forEach(function(h,p){h.forEach(function(I){o.call(l,I,p,this)},this)},this)},n.na=function(){It(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const I=o[p];for(let R=0;R<I.length;R++)h.push(l[p])}return h},n.V=function(o){It(this);let l=[];if(typeof o=="string")_c(this,o)&&(l=l.concat(this.g.get(un(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return It(this),this.i=null,o=un(this,o),_c(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function yc(o,l,h){gc(o,l),0<h.length&&(o.i=null,o.g.set(un(o,l),D(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const R=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var I=R;O[p]!==""&&(I+="="+encodeURIComponent(String(O[p]))),o.push(I)}}return this.i=o.join("&")};function un(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Qf(o,l){l&&!o.j&&(It(o),o.i=null,o.g.forEach(function(h,p){var I=p.toLowerCase();p!=I&&(gc(this,p),yc(this,I,h))},o)),o.j=l}function Yf(o,l){const h=new Yn;if(c.Image){const p=new Image;p.onload=A(At,h,"TestLoadImage: loaded",!0,l,p),p.onerror=A(At,h,"TestLoadImage: error",!1,l,p),p.onabort=A(At,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=A(At,h,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function Xf(o,l){const h=new Yn,p=new AbortController,I=setTimeout(()=>{p.abort(),At(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(R=>{clearTimeout(I),R.ok?At(h,"TestPingServer: ok",!0,l):At(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(I),At(h,"TestPingServer: error",!1,l)})}function At(o,l,h,p,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),p(h)}catch{}}function Jf(){this.g=new Df}function Zf(o,l,h){const p=h||"";try{dc(o,function(I,R){let O=I;d(I)&&(O=Ii(I)),l.push(p+R+"="+encodeURIComponent(O))})}catch(I){throw l.push(p+"type="+encodeURIComponent("_badmap")),I}}function Zs(o){this.l=o.Ub||null,this.j=o.eb||!1}P(Zs,Ai),Zs.prototype.g=function(){return new er(this.l,this.j)},Zs.prototype.i=function(o){return function(){return o}}({});function er(o,l){Te.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(er,Te),n=er.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,ns(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ts(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ns(this)),this.g&&(this.readyState=3,ns(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function vc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?ts(this):ns(this),this.readyState==3&&vc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,ts(this))},n.Qa=function(o){this.g&&(this.response=o,ts(this))},n.ga=function(){this.g&&ts(this)};function ts(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ns(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function ns(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(er.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function wc(o){let l="";return U(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function Di(o,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=wc(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):se(o,l,h))}function le(o){Te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(le,Te);var ep=/^https?$/i,tp=["POST","PUT"];n=le.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():bi.g(),this.v=this.o?Qa(this.o):Qa(bi),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(R){Ec(this,R);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var I in p)h.set(I,p[I]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const R of p.keys())h.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),I=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(tp,l,void 0))||p||I||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,O]of h)this.g.setRequestHeader(R,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ac(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){Ec(this,R)}};function Ec(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Tc(o),tr(o)}function Tc(o){o.A||(o.A=!0,Ne(o,"complete"),Ne(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ne(this,"complete"),Ne(this,"abort"),tr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tr(this,!0)),le.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ic(this):this.bb())},n.bb=function(){Ic(this)};function Ic(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ht(o)!=4||o.Z()!=2)){if(o.u&&ht(o)==4)Wa(o.Ea,0,o);else if(Ne(o,"readystatechange"),ht(o)==4){o.h=!1;try{const O=o.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=O===0){var I=String(o.D).match(fc)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),p=!ep.test(I?I.toLowerCase():"")}h=p}if(h)Ne(o,"complete"),Ne(o,"success");else{o.m=6;try{var R=2<ht(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",Tc(o)}}finally{tr(o)}}}}function tr(o,l){if(o.g){Ac(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Ne(o,"ready");try{h.onreadystatechange=p}catch{}}}function Ac(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function ht(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),kf(l)}};function Sc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function np(o){const l={};o=(o.g&&2<=ht(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(L(o[p]))continue;var h=T(o[p]);const I=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=l[I]||[];l[I]=R,R.push(h)}E(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ss(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function Rc(o){this.Aa=0,this.i=[],this.j=new Yn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ss("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ss("baseRetryDelayMs",5e3,o),this.cb=ss("retryDelaySeedMs",1e4,o),this.Wa=ss("forwardChannelMaxRetries",2,o),this.wa=ss("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ac(o&&o.concurrentRequestLimit),this.Da=new Jf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Rc.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,p){Me(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Vc(this,null,this.W),sr(this)};function Vi(o){if(bc(o),o.G==3){var l=o.U++,h=ut(o.I);if(se(h,"SID",o.K),se(h,"RID",l),se(h,"TYPE","terminate"),rs(o,h),l=new Tt(o,o.j,l),l.L=2,l.v=Js(ut(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=xc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Qs(l)}Dc(o)}function nr(o){o.g&&(Li(o),o.g.cancel(),o.g=null)}function bc(o){nr(o),o.u&&(c.clearTimeout(o.u),o.u=null),rr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function sr(o){if(!cc(o.h)&&!o.s){o.s=!0;var l=o.Ga;qn||ja(),Hn||(qn(),Hn=!0),mi.add(l,o),o.B=0}}function sp(o,l){return lc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Qn(g(o.Ga,o,l),kc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const I=new Tt(this,this.j,o);let R=this.o;if(this.S&&(R?(R=m(R),w(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Pc(this,I,l),h=ut(this.I),se(h,"RID",o),se(h,"CVER",22),this.D&&se(h,"X-HTTP-Session-Id",this.D),rs(this,h),R&&(this.O?l="headers="+encodeURIComponent(String(wc(R)))+"&"+l:this.m&&Di(h,this.m,R)),ki(this.h,I),this.Ua&&se(h,"TYPE","init"),this.P?(se(h,"$req",l),se(h,"SID","null"),I.T=!0,Pi(I,h,null)):Pi(I,h,l),this.G=2}}else this.G==3&&(o?Cc(this,o):this.i.length==0||cc(this.h)||Cc(this))};function Cc(o,l){var h;l?h=l.l:h=o.U++;const p=ut(o.I);se(p,"SID",o.K),se(p,"RID",h),se(p,"AID",o.T),rs(o,p),o.m&&o.o&&Di(p,o.m,o.o),h=new Tt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Pc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ki(o.h,h),Pi(h,p,l)}function rs(o,l){o.H&&U(o.H,function(h,p){se(l,p,h)}),o.l&&dc({},function(h,p){se(l,p,h)})}function Pc(o,l,h){h=Math.min(o.i.length,h);var p=o.l?g(o.l.Na,o.l,o):null;e:{var I=o.i;let R=-1;for(;;){const O=["count="+h];R==-1?0<h?(R=I[0].g,O.push("ofs="+R)):R=0:O.push("ofs="+R);let te=!0;for(let _e=0;_e<h;_e++){let J=I[_e].g;const Ie=I[_e].map;if(J-=R,0>J)R=Math.max(0,I[_e].g-100),te=!1;else try{Zf(Ie,O,"req"+J+"_")}catch{p&&p(Ie)}}if(te){p=O.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,p}function Nc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;qn||ja(),Hn||(qn(),Hn=!0),mi.add(l,o),o.v=0}}function xi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Qn(g(o.Fa,o),kc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Mc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Qn(g(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Me(10),nr(this),Mc(this))};function Li(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Mc(o){o.g=new Tt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=ut(o.qa);se(l,"RID","rpc"),se(l,"SID",o.K),se(l,"AID",o.T),se(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&se(l,"TO",o.ja),se(l,"TYPE","xmlhttp"),rs(o,l),o.m&&o.o&&Di(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Js(ut(l)),h.m=null,h.P=!0,rc(h,o)}n.Za=function(){this.C!=null&&(this.C=null,nr(this),xi(this),Me(19))};function rr(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Oc(o,l){var h=null;if(o.g==l){rr(o),Li(o),o.g=null;var p=2}else if(Oi(o.h,l))h=l.D,uc(o.h,l),p=1;else return;if(o.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var I=o.B;p=zs(),Ne(p,new ec(p,h)),sr(o)}else Nc(o);else if(I=l.s,I==3||I==0&&0<l.X||!(p==1&&sp(o,l)||p==2&&xi(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),I){case 1:zt(o,5);break;case 4:zt(o,10);break;case 3:zt(o,6);break;default:zt(o,2)}}}function kc(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function zt(o,l){if(o.j.info("Error code "+l),l==2){var h=g(o.fb,o),p=o.Xa;const I=!p;p=new Wt(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ys(p,"https"),Js(p),I?Yf(p.toString(),h):Xf(p.toString(),h)}else Me(2);o.G=0,o.l&&o.l.sa(l),Dc(o),bc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function Dc(o){if(o.G=0,o.ka=[],o.l){const l=hc(o.h);(l.length!=0||o.i.length!=0)&&(N(o.ka,l),N(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Vc(o,l,h){var p=h instanceof Wt?ut(h):new Wt(h);if(p.g!="")l&&(p.g=l+"."+p.g),Xs(p,p.s);else{var I=c.location;p=I.protocol,l=l?l+"."+I.hostname:I.hostname,I=+I.port;var R=new Wt(null);p&&Ys(R,p),l&&(R.g=l),I&&Xs(R,I),h&&(R.l=h),p=R}return h=o.D,l=o.ya,h&&l&&se(p,h,l),se(p,"VER",o.la),rs(o,p),p}function xc(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new le(new Zs({eb:h})):new le(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lc(){}n=Lc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ir(){}ir.prototype.g=function(o,l){return new De(o,l)};function De(o,l){Te.call(this),this.g=new Rc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!L(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!L(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new hn(this)}P(De,Te),De.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},De.prototype.close=function(){Vi(this.g)},De.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ii(o),o=h);l.i.push(new jf(l.Ya++,o)),l.G==3&&sr(l)},De.prototype.N=function(){this.g.l=null,delete this.j,Vi(this.g),delete this.g,De.aa.N.call(this)};function Fc(o){Si.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}P(Fc,Si);function Uc(){Ri.call(this),this.status=1}P(Uc,Ri);function hn(o){this.g=o}P(hn,Lc),hn.prototype.ua=function(){Ne(this.g,"a")},hn.prototype.ta=function(o){Ne(this.g,new Fc(o))},hn.prototype.sa=function(o){Ne(this.g,new Uc)},hn.prototype.ra=function(){Ne(this.g,"b")},ir.prototype.createWebChannel=ir.prototype.g,De.prototype.send=De.prototype.o,De.prototype.open=De.prototype.m,De.prototype.close=De.prototype.close,Hu=function(){return new ir},qu=function(){return zs()},$u=qt,ho={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gs.NO_ERROR=0,Gs.TIMEOUT=8,Gs.HTTP_ERROR=6,yr=Gs,tc.COMPLETE="complete",Bu=tc,Ya.EventType=Gn,Gn.OPEN="a",Gn.CLOSE="b",Gn.ERROR="c",Gn.MESSAGE="d",Te.prototype.listen=Te.prototype.K,as=Ya,le.prototype.listenOnce=le.prototype.L,le.prototype.getLastError=le.prototype.Ka,le.prototype.getLastErrorCode=le.prototype.Ba,le.prototype.getStatus=le.prototype.Z,le.prototype.getResponseJson=le.prototype.Oa,le.prototype.getResponseText=le.prototype.oa,le.prototype.send=le.prototype.ea,le.prototype.setWithCredentials=le.prototype.Ha,ju=le}).apply(typeof ar<"u"?ar:typeof self<"u"?self:typeof window<"u"?window:{});const el="@firebase/firestore",tl="4.8.0";/**
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
 */class Re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Re.UNAUTHENTICATED=new Re(null),Re.GOOGLE_CREDENTIALS=new Re("google-credentials-uid"),Re.FIRST_PARTY=new Re("first-party-uid"),Re.MOCK_USER=new Re("mock-user");/**
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
 */let xn="11.10.0";/**
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
 */const en=new jo("@firebase/firestore");function mn(){return en.logLevel}function V(n,...e){if(en.logLevel<=Q.DEBUG){const t=e.map(qo);en.debug(`Firestore (${xn}): ${n}`,...t)}}function _t(n,...e){if(en.logLevel<=Q.ERROR){const t=e.map(qo);en.error(`Firestore (${xn}): ${n}`,...t)}}function xt(n,...e){if(en.logLevel<=Q.WARN){const t=e.map(qo);en.warn(`Firestore (${xn}): ${n}`,...t)}}function qo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function j(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Wu(n,s,t)}function Wu(n,e,t){let s=`FIRESTORE (${xn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw _t(s),new Error(s)}function ee(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Wu(e,r,s)}function W(n,e){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends wt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Dt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class zu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Km{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Re.UNAUTHENTICATED))}shutdown(){}}class Qm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Ym{constructor(e){this.t=e,this.currentUser=Re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ee(this.o===void 0,42304);let s=this.i;const r=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let i=new Dt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Dt,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},c=u=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Dt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ee(typeof s.accessToken=="string",31837,{l:s}),new zu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string",2055,{h:e}),new Re(e)}}class Xm{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Jm{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Xm(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zm{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Le(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ee(this.o===void 0,3512);const s=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new nl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ee(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new nl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function Gu(){return new TextEncoder}/**
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
 */class Ho{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=eg(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function K(n,e){return n<e?-1:n>e?1:0}function fo(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),r=e.codePointAt(t);if(s!==r){if(s<128&&r<128)return K(s,r);{const i=Gu(),a=tg(i.encode(sl(n,t)),i.encode(sl(e,t)));return a!==0?a:K(s,r)}}t+=s>65535?2:1}return K(n.length,e.length)}function sl(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function tg(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return K(n[t],e[t]);return K(n.length,e.length)}function Sn(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
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
 */const rl="__name__";class Ze{constructor(e,t,s){t===void 0?t=0:t>e.length&&j(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&j(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ze.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ze?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=Ze.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return K(e.length,t.length)}static compareSegments(e,t){const s=Ze.isNumericId(e),r=Ze.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?Ze.extractNumericId(e).compare(Ze.extractNumericId(t)):fo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return kt.fromString(e.substring(4,e.length-2))}}class ae extends Ze{construct(e,t,s){return new ae(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new x(C.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new ae(t)}static emptyPath(){return new ae([])}}const ng=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ve extends Ze{construct(e,t,s){return new ve(e,t,s)}static isValidIdentifier(e){return ng.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===rl}static keyField(){return new ve([rl])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new x(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new x(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new x(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(i(),r++)}if(i(),a)throw new x(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ve(t)}static emptyPath(){return new ve([])}}/**
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
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(ae.fromString(e))}static fromName(e){return new F(ae.fromString(e).popFirst(5))}static empty(){return new F(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ae.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new ae(e.slice()))}}/**
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
 */function sg(n,e,t){if(!t)throw new x(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function rg(n,e,t,s){if(e===!0&&s===!0)throw new x(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function il(n){if(!F.isDocumentKey(n))throw new x(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ku(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Wo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":j(12329,{type:typeof n})}function ws(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new x(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Wo(n);throw new x(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function de(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ds(n,e){if(!Ku(n))throw new x(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new x(C.INVALID_ARGUMENT,t);return!0}/**
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
 */const ol=-62135596800,al=1e6;class ie{static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*al);return new ie(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ol)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/al}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ds(e,ie._jsonSchema))return new ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ol;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ie._jsonSchemaVersion="firestore/timestamp/1.0",ie._jsonSchema={type:de("string",ie._jsonSchemaVersion),seconds:de("number"),nanoseconds:de("number")};/**
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
 */class ${static fromTimestamp(e){return new $(e)}static min(){return new $(new ie(0,0))}static max(){return new $(new ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Es=-1;function ig(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=$.fromTimestamp(s===1e9?new ie(t+1,0):new ie(t,s));return new Lt(r,F.empty(),e)}function og(n){return new Lt(n.readTime,n.key,Es)}class Lt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Lt($.min(),F.empty(),Es)}static max(){return new Lt($.max(),F.empty(),Es)}}function ag(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(n.documentKey,e.documentKey),t!==0?t:K(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ln(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==cg)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&j(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof b?t:b.resolve(t)}catch(t){return b.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):b.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):b.reject(t)}static resolve(e){return new b((t,s)=>{t(e)})}static reject(e){return new b((t,s)=>{s(e)})}static waitFor(e){return new b((t,s)=>{let r=0,i=0,a=!1;e.forEach(c=>{++r,c.next(()=>{++i,a&&i===r&&t()},u=>s(u))}),a=!0,i===r&&t()})}static or(e){let t=b.resolve(!1);for(const s of e)t=t.next(r=>r?b.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new b((s,r)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(f=>{a[d]=f,++c,c===i&&s(a)},f=>r(f))}})}static doWhile(e,t){return new b((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}function ug(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Fn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Xr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Xr.ue=-1;/**
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
 */const zo=-1;function Jr(n){return n==null}function Mr(n){return n===0&&1/n==-1/0}function hg(n){return typeof n=="number"&&Number.isInteger(n)&&!Mr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Qu="";function dg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=cl(e)),e=fg(n.get(t),e);return cl(e)}function fg(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case Qu:t+="";break;default:t+=i}}return t}function cl(n){return n+Qu+""}/**
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
 */function ll(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function rn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Yu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ce{constructor(e,t){this.comparator=e,this.root=t||ye.EMPTY}insert(e,t){return new ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cr(this.root,e,this.comparator,!1)}getReverseIterator(){return new cr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cr(this.root,e,this.comparator,!0)}}class cr{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??ye.RED,this.left=r??ye.EMPTY,this.right=i??ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new ye(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return ye.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw j(43730,{key:this.key,value:this.value});if(this.right.isRed())throw j(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw j(27949);return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw j(57766)}get value(){throw j(16141)}get color(){throw j(16727)}get left(){throw j(29726)}get right(){throw j(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pe{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ul(this.data.getIterator())}getIteratorFrom(e){return new ul(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pe(this.comparator);return t.data=e,t}}class ul{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.fields=e,e.sort(ve.comparator)}static empty(){return new Qe([])}unionWith(e){let t=new pe(ve.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Sn(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class Xu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Xu("Invalid base64 string: "+i):i}}(e);return new we(t)}static fromUint8Array(e){const t=function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i}(e);return new we(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}we.EMPTY_BYTE_STRING=new we("");const pg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ft(n){if(ee(!!n,39018),typeof n=="string"){let e=0;const t=pg.exec(n);if(ee(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ue(n.seconds),nanos:ue(n.nanos)}}function ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ut(n){return typeof n=="string"?we.fromBase64String(n):we.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="server_timestamp",Zu="__type__",eh="__previous_value__",th="__local_write_time__";function Go(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Zu])===null||t===void 0?void 0:t.stringValue)===Ju}function Zr(n){const e=n.mapValue.fields[eh];return Go(e)?Zr(e):e}function Ts(n){const e=Ft(n.mapValue.fields[th].timestampValue);return new ie(e.seconds,e.nanos)}/**
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
 */class mg{constructor(e,t,s,r,i,a,c,u,d,f){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f}}const Or="(default)";class Is{constructor(e,t){this.projectId=e,this.database=t||Or}static empty(){return new Is("","")}get isDefaultDatabase(){return this.database===Or}isEqual(e){return e instanceof Is&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="__type__",gg="__max__",lr={mapValue:{}},sh="__vector__",kr="value";function jt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Go(n)?4:yg(n)?9007199254740991:_g(n)?10:11:j(28295,{value:n})}function ot(n,e){if(n===e)return!0;const t=jt(n);if(t!==jt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ts(n).isEqual(Ts(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=Ft(r.timestampValue),c=Ft(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return Ut(r.bytesValue).isEqual(Ut(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return ue(r.geoPointValue.latitude)===ue(i.geoPointValue.latitude)&&ue(r.geoPointValue.longitude)===ue(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ue(r.integerValue)===ue(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=ue(r.doubleValue),c=ue(i.doubleValue);return a===c?Mr(a)===Mr(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Sn(n.arrayValue.values||[],e.arrayValue.values||[],ot);case 10:case 11:return function(r,i){const a=r.mapValue.fields||{},c=i.mapValue.fields||{};if(ll(a)!==ll(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!ot(a[u],c[u])))return!1;return!0}(n,e);default:return j(52216,{left:n})}}function As(n,e){return(n.values||[]).find(t=>ot(t,e))!==void 0}function Rn(n,e){if(n===e)return 0;const t=jt(n),s=jt(e);if(t!==s)return K(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=ue(i.integerValue||i.doubleValue),u=ue(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return hl(n.timestampValue,e.timestampValue);case 4:return hl(Ts(n),Ts(e));case 5:return fo(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Ut(i),u=Ut(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const f=K(c[d],u[d]);if(f!==0)return f}return K(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=K(ue(i.latitude),ue(a.latitude));return c!==0?c:K(ue(i.longitude),ue(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return dl(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,u,d,f;const _=i.fields||{},g=a.fields||{},A=(c=_[kr])===null||c===void 0?void 0:c.arrayValue,P=(u=g[kr])===null||u===void 0?void 0:u.arrayValue,D=K(((d=A?.values)===null||d===void 0?void 0:d.length)||0,((f=P?.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:dl(A,P)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===lr.mapValue&&a===lr.mapValue)return 0;if(i===lr.mapValue)return 1;if(a===lr.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let _=0;_<u.length&&_<f.length;++_){const g=fo(u[_],f[_]);if(g!==0)return g;const A=Rn(c[u[_]],d[f[_]]);if(A!==0)return A}return K(u.length,f.length)}(n.mapValue,e.mapValue);default:throw j(23264,{le:t})}}function hl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return K(n,e);const t=Ft(n),s=Ft(e),r=K(t.seconds,s.seconds);return r!==0?r:K(t.nanos,s.nanos)}function dl(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=Rn(t[r],s[r]);if(i)return i}return K(t.length,s.length)}function bn(n){return po(n)}function po(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Ft(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ut(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return F.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=po(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${po(t.fields[a])}`;return r+"}"}(n.mapValue):j(61005,{value:n})}function vr(n){switch(jt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zr(n);return e?16+vr(e):16;case 5:return 2*n.stringValue.length;case 6:return Ut(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+vr(i),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return rn(s.fields,(i,a)=>{r+=i.length+vr(a)}),r}(n.mapValue);default:throw j(13486,{value:n})}}function mo(n){return!!n&&"integerValue"in n}function Ko(n){return!!n&&"arrayValue"in n}function fl(n){return!!n&&"nullValue"in n}function pl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function wr(n){return!!n&&"mapValue"in n}function _g(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[nh])===null||t===void 0?void 0:t.stringValue)===sh}function fs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return rn(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=fs(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=fs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function yg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===gg}/**
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
 */class Fe{constructor(e){this.value=e}static empty(){return new Fe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!wr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=fs(t)}setAll(e){let t=ve.emptyPath(),s={},r=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,s,r),s={},r=[],t=c.popLast()}a?s[c.lastSegment()]=fs(a):r.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());wr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];wr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){rn(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Fe(fs(this.value))}}function rh(n){const e=[];return rn(n.fields,(t,s)=>{const r=new ve([t]);if(wr(s)){const i=rh(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)}),new Qe(e)}/**
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
 */class be{constructor(e,t,s,r,i,a,c){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new be(e,0,$.min(),$.min(),$.min(),Fe.empty(),0)}static newFoundDocument(e,t,s,r){return new be(e,1,t,$.min(),s,r,0)}static newNoDocument(e,t){return new be(e,2,t,$.min(),$.min(),Fe.empty(),0)}static newUnknownDocument(e,t){return new be(e,3,t,$.min(),$.min(),Fe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Fe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Fe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Dr{constructor(e,t){this.position=e,this.inclusive=t}}function ml(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],a=n.position[r];if(i.field.isKeyField()?s=F.comparator(F.fromName(a.referenceValue),t.key):s=Rn(a,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function gl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ot(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Vr{constructor(e,t="asc"){this.field=e,this.dir=t}}function vg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class ih{}class fe extends ih{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Eg(e,t,s):t==="array-contains"?new Ag(e,s):t==="in"?new Sg(e,s):t==="not-in"?new Rg(e,s):t==="array-contains-any"?new bg(e,s):new fe(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Tg(e,s):new Ig(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Rn(t,this.value)):t!==null&&jt(this.value)===jt(t)&&this.matchesComparison(Rn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class at extends ih{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new at(e,t)}matches(e){return oh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function oh(n){return n.op==="and"}function ah(n){return wg(n)&&oh(n)}function wg(n){for(const e of n.filters)if(e instanceof at)return!1;return!0}function go(n){if(n instanceof fe)return n.field.canonicalString()+n.op.toString()+bn(n.value);if(ah(n))return n.filters.map(e=>go(e)).join(",");{const e=n.filters.map(t=>go(t)).join(",");return`${n.op}(${e})`}}function ch(n,e){return n instanceof fe?function(s,r){return r instanceof fe&&s.op===r.op&&s.field.isEqual(r.field)&&ot(s.value,r.value)}(n,e):n instanceof at?function(s,r){return r instanceof at&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,a,c)=>i&&ch(a,r.filters[c]),!0):!1}(n,e):void j(19439)}function lh(n){return n instanceof fe?function(t){return`${t.field.canonicalString()} ${t.op} ${bn(t.value)}`}(n):n instanceof at?function(t){return t.op.toString()+" {"+t.getFilters().map(lh).join(" ,")+"}"}(n):"Filter"}class Eg extends fe{constructor(e,t,s){super(e,t,s),this.key=F.fromName(s.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class Tg extends fe{constructor(e,t){super(e,"in",t),this.keys=uh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ig extends fe{constructor(e,t){super(e,"not-in",t),this.keys=uh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function uh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>F.fromName(s.referenceValue))}class Ag extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ko(t)&&As(t.arrayValue,this.value)}}class Sg extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&As(this.value.arrayValue,t)}}class Rg extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(As(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!As(this.value.arrayValue,t)}}class bg extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ko(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>As(this.value.arrayValue,s))}}/**
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
 */class Cg{constructor(e,t=null,s=[],r=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function _l(n,e=null,t=[],s=[],r=null,i=null,a=null){return new Cg(n,e,t,s,r,i,a)}function Qo(n){const e=W(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>go(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Jr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>bn(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>bn(s)).join(",")),e.Pe=t}return e.Pe}function Yo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!vg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ch(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!gl(n.startAt,e.startAt)&&gl(n.endAt,e.endAt)}function _o(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ei{constructor(e,t=null,s=[],r=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Pg(n,e,t,s,r,i,a,c){return new ei(n,e,t,s,r,i,a,c)}function Xo(n){return new ei(n)}function yl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ng(n){return n.collectionGroup!==null}function ps(n){const e=W(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new pe(ve.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Vr(i,s))}),t.has(ve.keyField().canonicalString())||e.Te.push(new Vr(ve.keyField(),s))}return e.Te}function et(n){const e=W(n);return e.Ie||(e.Ie=Mg(e,ps(n))),e.Ie}function Mg(n,e){if(n.limitType==="F")return _l(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Vr(r.field,i)});const t=n.endAt?new Dr(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Dr(n.startAt.position,n.startAt.inclusive):null;return _l(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function yo(n,e,t){return new ei(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ti(n,e){return Yo(et(n),et(e))&&n.limitType===e.limitType}function hh(n){return`${Qo(et(n))}|lt:${n.limitType}`}function gn(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>lh(r)).join(", ")}]`),Jr(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>bn(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>bn(r)).join(",")),`Target(${s})`}(et(n))}; limitType=${n.limitType})`}function ni(n,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):F.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,e)&&function(s,r){for(const i of ps(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(a,c,u){const d=ml(a,c,u);return a.inclusive?d<=0:d<0}(s.startAt,ps(s),r)||s.endAt&&!function(a,c,u){const d=ml(a,c,u);return a.inclusive?d>=0:d>0}(s.endAt,ps(s),r))}(n,e)}function Og(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function dh(n){return(e,t)=>{let s=!1;for(const r of ps(n)){const i=kg(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function kg(n,e,t){const s=n.field.isKeyField()?F.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?Rn(u,d):j(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return j(19790,{direction:n.dir})}}/**
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
 */class on{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){rn(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Yu(this.inner)}size(){return this.innerSize}}/**
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
 */const Dg=new ce(F.comparator);function yt(){return Dg}const fh=new ce(F.comparator);function cs(...n){let e=fh;for(const t of n)e=e.insert(t.key,t);return e}function ph(n){let e=fh;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Qt(){return ms()}function mh(){return ms()}function ms(){return new on(n=>n.toString(),(n,e)=>n.isEqual(e))}const Vg=new ce(F.comparator),xg=new pe(F.comparator);function Y(...n){let e=xg;for(const t of n)e=e.add(t);return e}const Lg=new pe(K);function Fg(){return Lg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mr(e)?"-0":e}}function gh(n){return{integerValue:""+n}}function Ug(n,e){return hg(e)?gh(e):Jo(n,e)}/**
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
 */class si{constructor(){this._=void 0}}function jg(n,e,t){return n instanceof xr?function(r,i){const a={fields:{[Zu]:{stringValue:Ju},[th]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Go(i)&&(i=Zr(i)),i&&(a.fields[eh]=i),{mapValue:a}}(t,e):n instanceof Ss?yh(n,e):n instanceof Rs?vh(n,e):function(r,i){const a=_h(r,i),c=vl(a)+vl(r.Ee);return mo(a)&&mo(r.Ee)?gh(c):Jo(r.serializer,c)}(n,e)}function Bg(n,e,t){return n instanceof Ss?yh(n,e):n instanceof Rs?vh(n,e):t}function _h(n,e){return n instanceof Lr?function(s){return mo(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class xr extends si{}class Ss extends si{constructor(e){super(),this.elements=e}}function yh(n,e){const t=wh(e);for(const s of n.elements)t.some(r=>ot(r,s))||t.push(s);return{arrayValue:{values:t}}}class Rs extends si{constructor(e){super(),this.elements=e}}function vh(n,e){let t=wh(e);for(const s of n.elements)t=t.filter(r=>!ot(r,s));return{arrayValue:{values:t}}}class Lr extends si{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function vl(n){return ue(n.integerValue||n.doubleValue)}function wh(n){return Ko(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function $g(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof Ss&&r instanceof Ss||s instanceof Rs&&r instanceof Rs?Sn(s.elements,r.elements,ot):s instanceof Lr&&r instanceof Lr?ot(s.Ee,r.Ee):s instanceof xr&&r instanceof xr}(n.transform,e.transform)}class qg{constructor(e,t){this.version=e,this.transformResults=t}}class mt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new mt}static exists(e){return new mt(void 0,e)}static updateTime(e){return new mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Er(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ri{}function Eh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ih(n.key,mt.none()):new Vs(n.key,n.data,mt.none());{const t=n.data,s=Fe.empty();let r=new pe(ve.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new an(n.key,s,new Qe(r.toArray()),mt.none())}}function Hg(n,e,t){n instanceof Vs?function(r,i,a){const c=r.value.clone(),u=El(r.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof an?function(r,i,a){if(!Er(r.precondition,i))return void i.convertToUnknownDocument(a.version);const c=El(r.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Th(r)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function gs(n,e,t,s){return n instanceof Vs?function(i,a,c,u){if(!Er(i.precondition,a))return c;const d=i.value.clone(),f=Tl(i.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,s):n instanceof an?function(i,a,c,u){if(!Er(i.precondition,a))return c;const d=Tl(i.fieldTransforms,u,a),f=a.data;return f.setAll(Th(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(_=>_.field))}(n,e,t,s):function(i,a,c){return Er(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Wg(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=_h(s.transform,r||null);i!=null&&(t===null&&(t=Fe.empty()),t.set(s.field,i))}return t||null}function wl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Sn(s,r,(i,a)=>$g(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Vs extends ri{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class an extends ri{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Th(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function El(n,e,t){const s=new Map;ee(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let r=0;r<t.length;r++){const i=n[r],a=i.transform,c=e.data.field(i.field);s.set(i.field,Bg(a,c,t[r]))}return s}function Tl(n,e,t){const s=new Map;for(const r of n){const i=r.transform,a=t.data.field(r.field);s.set(r.field,jg(i,a,e))}return s}class Ih extends ri{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zg extends ri{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Gg{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Hg(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=gs(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=gs(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=mh();return this.mutations.forEach(r=>{const i=e.get(r.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(r.key)?null:c;const u=Eh(a,c);u!==null&&s.set(r.key,u),a.isValidDocument()||a.convertToNoDocument($.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Y())}isEqual(e){return this.batchId===e.batchId&&Sn(this.mutations,e.mutations,(t,s)=>wl(t,s))&&Sn(this.baseMutations,e.baseMutations,(t,s)=>wl(t,s))}}class Zo{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){ee(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let r=function(){return Vg}();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new Zo(e,t,s,r)}}/**
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
 */class Kg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Qg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var he,X;function Yg(n){switch(n){case C.OK:return j(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return j(15467,{code:n})}}function Ah(n){if(n===void 0)return _t("GRPC error has no .code"),C.UNKNOWN;switch(n){case he.OK:return C.OK;case he.CANCELLED:return C.CANCELLED;case he.UNKNOWN:return C.UNKNOWN;case he.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case he.INTERNAL:return C.INTERNAL;case he.UNAVAILABLE:return C.UNAVAILABLE;case he.UNAUTHENTICATED:return C.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case he.NOT_FOUND:return C.NOT_FOUND;case he.ALREADY_EXISTS:return C.ALREADY_EXISTS;case he.PERMISSION_DENIED:return C.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case he.ABORTED:return C.ABORTED;case he.OUT_OF_RANGE:return C.OUT_OF_RANGE;case he.UNIMPLEMENTED:return C.UNIMPLEMENTED;case he.DATA_LOSS:return C.DATA_LOSS;default:return j(39323,{code:n})}}(X=he||(he={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Xg=new kt([4294967295,4294967295],0);function Il(n){const e=Gu().encode(n),t=new Uu;return t.update(e),new Uint8Array(t.digest())}function Al(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new kt([t,s],0),new kt([r,i],0)]}class ea{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ls(`Invalid padding: ${t}`);if(s<0)throw new ls(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ls(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ls(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=kt.fromNumber(this.fe)}pe(e,t,s){let r=e.add(t.multiply(kt.fromNumber(s)));return r.compare(Xg)===1&&(r=new kt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Il(e),[s,r]=Al(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(s,r,i);if(!this.ye(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ea(i,r,t);return s.forEach(c=>a.insert(c)),a}insert(e){if(this.fe===0)return;const t=Il(e),[s,r]=Al(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(s,r,i);this.we(a)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ls extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ii{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,xs.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ii($.min(),r,new ce(K),yt(),Y())}}class xs{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new xs(s,t,Y(),Y(),Y())}}/**
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
 */class Tr{constructor(e,t,s,r){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=r}}class Sh{constructor(e,t){this.targetId=e,this.De=t}}class Rh{constructor(e,t,s=we.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Sl{constructor(){this.ve=0,this.Ce=Rl(),this.Fe=we.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Y(),t=Y(),s=Y();return this.Ce.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:j(38017,{changeType:i})}}),new xs(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=Rl()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ee(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Jg{constructor(e){this.We=e,this.Ge=new Map,this.ze=yt(),this.je=ur(),this.Je=ur(),this.He=new ce(K)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:j(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((s,r)=>{this.nt(r)&&t(r)})}it(e){const t=e.targetId,s=e.De.count,r=this.st(t);if(r){const i=r.target;if(_o(i))if(s===0){const a=new F(i.path);this.Xe(t,a,be.newNoDocument(a,$.min()))}else ee(s===1,20013,{expectedCount:s});else{const a=this.ot(t);if(a!==s){const c=this._t(e),u=c?this.ut(c,e,a):1;if(u!==0){this.rt(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let a,c;try{a=Ut(s).toUint8Array()}catch(u){if(u instanceof Xu)return xt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new ea(a,r,i)}catch(u){return xt(u instanceof ls?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.fe===0?null:c}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),r++)}),r}Pt(e){const t=new Map;this.Ge.forEach((i,a)=>{const c=this.st(a);if(c){if(i.current&&_o(c.target)){const u=new F(c.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,be.newNoDocument(u,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}});let s=Y();this.Je.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const d=this.st(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(s=s.add(i))}),this.ze.forEach((i,a)=>a.setReadTime(e));const r=new ii(e,t,this.He,this.ze,s);return this.ze=yt(),this.je=ur(),this.Je=ur(),this.He=new ce(K),r}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const r=this.tt(e);this.It(e,t)?r.qe(t,1):r.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Sl,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new pe(K),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new pe(K),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Sl),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function ur(){return new ce(F.comparator)}function Rl(){return new ce(F.comparator)}const Zg={asc:"ASCENDING",desc:"DESCENDING"},e_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},t_={and:"AND",or:"OR"};class n_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vo(n,e){return n.useProto3Json||Jr(e)?e:{value:e}}function Fr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function s_(n,e){return Fr(n,e.toTimestamp())}function tt(n){return ee(!!n,49232),$.fromTimestamp(function(t){const s=Ft(t);return new ie(s.seconds,s.nanos)}(n))}function ta(n,e){return wo(n,e).canonicalString()}function wo(n,e){const t=function(r){return new ae(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Ch(n){const e=ae.fromString(n);return ee(kh(e),10190,{key:e.toString()}),e}function Eo(n,e){return ta(n.databaseId,e.path)}function Hi(n,e){const t=Ch(e);if(t.get(1)!==n.databaseId.projectId)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new F(Nh(t))}function Ph(n,e){return ta(n.databaseId,e)}function r_(n){const e=Ch(n);return e.length===4?ae.emptyPath():Nh(e)}function To(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Nh(n){return ee(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function bl(n,e,t){return{name:Eo(n,e),fields:t.value.mapValue.fields}}function i_(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:j(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(ee(f===void 0||typeof f=="string",58123),we.fromBase64String(f||"")):(ee(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),we.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const f=d.code===void 0?C.UNKNOWN:Ah(d.code);return new x(f,d.message||"")}(a);t=new Rh(s,r,i,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Hi(n,s.document.name),i=tt(s.document.updateTime),a=s.document.createTime?tt(s.document.createTime):$.min(),c=new Fe({mapValue:{fields:s.document.fields}}),u=be.newFoundDocument(r,i,a,c),d=s.targetIds||[],f=s.removedTargetIds||[];t=new Tr(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Hi(n,s.document),i=s.readTime?tt(s.readTime):$.min(),a=be.newNoDocument(r,i),c=s.removedTargetIds||[];t=new Tr([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Hi(n,s.document),i=s.removedTargetIds||[];t=new Tr([],i,r,null)}else{if(!("filter"in e))return j(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new Qg(r,i),c=s.targetId;t=new Sh(c,a)}}return t}function o_(n,e){let t;if(e instanceof Vs)t={update:bl(n,e.key,e.value)};else if(e instanceof Ih)t={delete:Eo(n,e.key)};else if(e instanceof an)t={update:bl(n,e.key,e.data),updateMask:m_(e.fieldMask)};else{if(!(e instanceof zg))return j(16599,{Rt:e.type});t={verify:Eo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,a){const c=a.transform;if(c instanceof xr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ss)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Rs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Lr)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw j(20930,{transform:a.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:s_(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:j(27497)}(n,e.precondition)),t}function a_(n,e){return n&&n.length>0?(ee(e!==void 0,14353),n.map(t=>function(r,i){let a=r.updateTime?tt(r.updateTime):tt(i);return a.isEqual($.min())&&(a=tt(i)),new qg(a,r.transformResults||[])}(t,e))):[]}function c_(n,e){return{documents:[Ph(n,e.path)]}}function l_(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Ph(n,r);const i=function(d){if(d.length!==0)return Oh(at.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(g){return{field:_n(g.field),direction:d_(g.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=vo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{Vt:t,parent:r}}function u_(n){let e=r_(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){ee(s===1,65062);const f=t.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(_){const g=Mh(_);return g instanceof at&&ah(g)?g.getFilters():[g]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(g=>function(P){return new Vr(yn(P.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(t.orderBy));let c=null;t.limit&&(c=function(_){let g;return g=typeof _=="object"?_.value:_,Jr(g)?null:g}(t.limit));let u=null;t.startAt&&(u=function(_){const g=!!_.before,A=_.values||[];return new Dr(A,g)}(t.startAt));let d=null;return t.endAt&&(d=function(_){const g=!_.before,A=_.values||[];return new Dr(A,g)}(t.endAt)),Pg(e,r,a,i,c,"F",u,d)}function h_(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Mh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=yn(t.unaryFilter.field);return fe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=yn(t.unaryFilter.field);return fe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=yn(t.unaryFilter.field);return fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=yn(t.unaryFilter.field);return fe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return j(61313);default:return j(60726)}}(n):n.fieldFilter!==void 0?function(t){return fe.create(yn(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return j(58110);default:return j(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return at.create(t.compositeFilter.filters.map(s=>Mh(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return j(1026)}}(t.compositeFilter.op))}(n):j(30097,{filter:n})}function d_(n){return Zg[n]}function f_(n){return e_[n]}function p_(n){return t_[n]}function _n(n){return{fieldPath:n.canonicalString()}}function yn(n){return ve.fromServerFormat(n.fieldPath)}function Oh(n){return n instanceof fe?function(t){if(t.op==="=="){if(pl(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NAN"}};if(fl(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(pl(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NOT_NAN"}};if(fl(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_n(t.field),op:f_(t.op),value:t.value}}}(n):n instanceof at?function(t){const s=t.getFilters().map(r=>Oh(r));return s.length===1?s[0]:{compositeFilter:{op:p_(t.op),filters:s}}}(n):j(54877,{filter:n})}function m_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function kh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Pt{constructor(e,t,s,r,i=$.min(),a=$.min(),c=we.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Pt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class g_{constructor(e){this.gt=e}}function __(n){const e=u_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?yo(e,e.limit,"L"):e}/**
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
 */class y_{constructor(){this.Dn=new v_}addToCollectionParentIndex(e,t){return this.Dn.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(Lt.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(Lt.min())}updateCollectionGroup(e,t,s){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}}class v_{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new pe(ae.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new pe(ae.comparator)).toArray()}}/**
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
 */const Cl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Dh=41943040;class ke{static withCacheSize(e){return new ke(e,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */ke.DEFAULT_COLLECTION_PERCENTILE=10,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ke.DEFAULT=new ke(Dh,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ke.DISABLED=new ke(-1,0,0);/**
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
 */class Cn{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Cn(0)}static ur(){return new Cn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="LruGarbageCollector",w_=1048576;function Nl([n,e],[t,s]){const r=K(n,t);return r===0?K(e,s):r}class E_{constructor(e){this.Tr=e,this.buffer=new pe(Nl),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Nl(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class T_{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){V(Pl,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Fn(t)?V(Pl,"Ignoring IndexedDB error during garbage collection: ",t):await Ln(t)}await this.Rr(3e5)})}}class I_{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return b.resolve(Xr.ue);const s=new E_(t);return this.Vr.forEachTarget(e,r=>s.Er(r.sequenceNumber)).next(()=>this.Vr.gr(e,r=>s.Er(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Cl)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Cl):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,r,i,a,c,u,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),r=this.params.maximumSequenceNumbersToCollect):r=_,a=Date.now(),this.nthSequenceNumber(e,r))).next(_=>(s=_,c=Date.now(),this.removeTargets(e,s,t))).next(_=>(i=_,u=Date.now(),this.removeOrphanedDocuments(e,s))).next(_=>(d=Date.now(),mn()<=Q.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${r} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${_} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:_})))}}function A_(n,e){return new I_(n,e)}/**
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
 */class S_{constructor(){this.changes=new on(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?b.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class R_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class b_{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&gs(s.mutation,r,Qe.empty(),ie.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Y()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Y()){const r=Qt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let a=cs();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const s=Qt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Y()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,s,r){let i=yt();const a=ms(),c=function(){return ms()}();return t.forEach((u,d)=>{const f=s.get(d.key);r.has(d.key)&&(f===void 0||f.mutation instanceof an)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),gs(f.mutation,d,f.mutation.getFieldMask(),ie.now())):a.set(d.key,Qe.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var _;return c.set(d,new R_(f,(_=a.get(d))!==null&&_!==void 0?_:null))}),c))}recalculateAndSaveOverlays(e,t){const s=ms();let r=new ce((a,c)=>a-c),i=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let f=s.get(u)||Qe.empty();f=c.applyToLocalView(d,f),s.set(u,f);const _=(r.get(c.batchId)||Y()).add(u);r=r.insert(c.batchId,_)})}).next(()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,f=u.value,_=mh();f.forEach(g=>{if(!i.has(g)){const A=Eh(t.get(g),s.get(g));A!==null&&_.set(g,A),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,_))}return b.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ng(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):b.resolve(Qt());let c=Es,u=i;return a.next(d=>b.forEach(d,(f,_)=>(c<_.largestBatchId&&(c=_.largestBatchId),i.get(f)?b.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,Y())).next(f=>({batchId:c,changes:ph(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next(s=>{let r=cs();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let a=cs();return this.indexManager.getCollectionParents(e,i).next(c=>b.forEach(c,u=>{const d=function(_,g){return new ei(g,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,s,r).next(f=>{f.forEach((_,g)=>{a=a.insert(_,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r))).next(a=>{i.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,be.newInvalidDocument(f)))});let c=cs();return a.forEach((u,d)=>{const f=i.get(u);f!==void 0&&gs(f.mutation,d,Qe.empty(),ie.now()),ni(t,d)&&(c=c.insert(u,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return b.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(r){return{id:r.id,version:r.version,createTime:tt(r.createTime)}}(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(r){return{name:r.name,query:__(r.bundledQuery),readTime:tt(r.readTime)}}(t)),b.resolve()}}/**
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
 */class P_{constructor(){this.overlays=new ce(F.comparator),this.kr=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Qt();return b.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.wt(e,t,i)}),b.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.kr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(s)),b.resolve()}getOverlaysForCollection(e,t,s){const r=Qt(),i=t.length+1,a=new F(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return b.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new ce((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let f=i.get(d.largestBatchId);f===null&&(f=Qt(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=Qt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=r)););return b.resolve(c)}wt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.kr.get(r.largestBatchId).delete(s.key);this.kr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new Kg(t,s));let i=this.kr.get(t);i===void 0&&(i=Y(),this.kr.set(t,i)),this.kr.set(t,i.add(s.key))}}/**
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
 */class N_{constructor(){this.sessionToken=we.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,b.resolve()}}/**
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
 */class na{constructor(){this.qr=new pe(me.Qr),this.$r=new pe(me.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new me(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new me(e,t))}Gr(e,t){e.forEach(s=>this.removeReference(s,t))}zr(e){const t=new F(new ae([])),s=new me(t,e),r=new me(t,e+1),i=[];return this.$r.forEachInRange([s,r],a=>{this.Wr(a),i.push(a.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new F(new ae([])),s=new me(t,e),r=new me(t,e+1);let i=Y();return this.$r.forEachInRange([s,r],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new me(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class me{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return F.comparator(e.key,t.key)||K(e.Hr,t.Hr)}static Ur(e,t){return K(e.Hr,t.Hr)||F.comparator(e.key,t.key)}}/**
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
 */class M_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new pe(me.Qr)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Gg(i,t,s,r);this.mutationQueue.push(a);for(const c of r)this.Yr=this.Yr.add(new me(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return b.resolve(a)}lookupMutationBatch(e,t){return b.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),i=r<0?0:r;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?zo:this.er-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new me(t,0),r=new me(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([s,r],a=>{const c=this.Zr(a.Hr);i.push(c)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new pe(K);return t.forEach(r=>{const i=new me(r,0),a=new me(r,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],c=>{s=s.add(c.Hr)})}),b.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;F.isDocumentKey(i)||(i=i.child(""));const a=new me(new F(i),0);let c=new pe(K);return this.Yr.forEachWhile(u=>{const d=u.key.path;return!!s.isPrefixOf(d)&&(d.length===r&&(c=c.add(u.Hr)),!0)},a),b.resolve(this.ei(c))}ei(e){const t=[];return e.forEach(s=>{const r=this.Zr(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){ee(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return b.forEach(t.mutations,r=>{const i=new me(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Yr=s})}rr(e){}containsKey(e,t){const s=new me(t,0),r=this.Yr.firstAfterOrEqual(s);return b.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class O_{constructor(e){this.ni=e,this.docs=function(){return new ce(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,a=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return b.resolve(s?s.document.mutableCopy():be.newInvalidDocument(t))}getEntries(e,t){let s=yt();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():be.newInvalidDocument(r))}),b.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=yt();const a=t.path,c=new F(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||ag(og(f),s)<=0||(r.has(f.key)||ni(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,t,s,r){j(9500)}ri(e,t){return b.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new k_(this)}getSize(e){return b.resolve(this.size)}}class k_ extends S_{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Or.addEntry(e,r)):this.Or.removeEntry(s)}),b.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class D_{constructor(e){this.persistence=e,this.ii=new on(t=>Qo(t),Yo),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.si=0,this.oi=new na,this.targetCount=0,this._i=Cn.ar()}forEachTarget(e,t){return this.ii.forEach((s,r)=>t(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),b.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Cn(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.hr(t),b.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.ii.forEach((a,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return b.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),b.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(a=>{i.push(r.markPotentiallyOrphaned(e,a))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),b.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return b.resolve(s)}containsKey(e,t){return b.resolve(this.oi.containsKey(t))}}/**
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
 */class Vh{constructor(e,t){this.ai={},this.overlays={},this.ui=new Xr(0),this.ci=!1,this.ci=!0,this.li=new N_,this.referenceDelegate=e(this),this.hi=new D_(this),this.indexManager=new y_,this.remoteDocumentCache=function(r){return new O_(r)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new g_(t),this.Ti=new C_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new P_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new M_(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){V("MemoryPersistence","Starting transaction:",e);const r=new V_(this.ui.next());return this.referenceDelegate.Ii(),s(r).next(i=>this.referenceDelegate.di(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ei(e,t){return b.or(Object.values(this.ai).map(s=>()=>s.containsKey(e,t)))}}class V_ extends lg{constructor(e){super(),this.currentSequenceNumber=e}}class sa{constructor(e){this.persistence=e,this.Ai=new na,this.Ri=null}static Vi(e){return new sa(e)}get mi(){if(this.Ri)return this.Ri;throw j(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),b.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),b.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(r=>this.mi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.mi.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.mi,s=>{const r=F.fromPath(s);return this.fi(e,r).next(i=>{i||t.removeEntry(r,$.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return b.or([()=>b.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ur{constructor(e,t){this.persistence=e,this.gi=new on(s=>dg(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=A_(this,t)}static Vi(e,t){return new Ur(e,t)}Ii(){}di(e){return b.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}yr(e){let t=0;return this.gr(e,s=>{t++}).next(()=>t)}gr(e,t){return b.forEach(this.gi,(s,r)=>this.Sr(e,s,r).next(i=>i?b.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ri(e,a=>this.Sr(e,a,t).next(c=>{c||(s++,i.removeEntry(a,$.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),b.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),b.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),b.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=vr(e.data.value)),t}Sr(e,t,s){return b.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.gi.get(t);return b.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ra{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=r}static Es(e,t){let s=Y(),r=Y();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ra(e,t.fromCache,s,r)}}/**
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
 */class x_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class L_{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Cp()?8:ug(Ce())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.ps(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ys(e,t,r,s).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new x_;return this.ws(e,t,a).next(c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)})}).next(()=>i.result)}Ss(e,t,s,r){return s.documentReadCount<this.Vs?(mn()<=Q.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",gn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),b.resolve()):(mn()<=Q.DEBUG&&V("QueryEngine","Query:",gn(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.fs*r?(mn()<=Q.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",gn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,et(t))):b.resolve())}ps(e,t){if(yl(t))return b.resolve(null);let s=et(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=yo(t,null,"F"),s=et(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const a=Y(...i);return this.gs.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,s).next(u=>{const d=this.bs(t,c);return this.Ds(t,d,a,u.readTime)?this.ps(e,yo(t,null,"F")):this.vs(e,d,t,u)}))})))}ys(e,t,s,r){return yl(t)||r.isEqual($.min())?b.resolve(null):this.gs.getDocuments(e,s).next(i=>{const a=this.bs(t,i);return this.Ds(t,a,s,r)?b.resolve(null):(mn()<=Q.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),gn(t)),this.vs(e,a,t,ig(r,Es)).next(c=>c))})}bs(e,t){let s=new pe(dh(e));return t.forEach((r,i)=>{ni(e,i)&&(s=s.add(i))}),s}Ds(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ws(e,t,s){return mn()<=Q.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",gn(t)),this.gs.getDocumentsMatchingQuery(e,t,Lt.min(),s)}vs(e,t,s,r){return this.gs.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="LocalStore",F_=3e8;class U_{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.Fs=new ce(K),this.Ms=new on(i=>Qo(i),Yo),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new b_(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function j_(n,e,t,s){return new U_(n,e,t,s)}async function xh(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const a=[],c=[];let u=Y();for(const d of r){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(s,u).next(d=>({Bs:d,removedBatchIds:a,addedBatchIds:c}))})})}function B_(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return function(c,u,d,f){const _=d.batch,g=_.keys();let A=b.resolve();return g.forEach(P=>{A=A.next(()=>f.getEntry(u,P)).next(D=>{const N=d.docVersions.get(P);ee(N!==null,48541),D.version.compareTo(N)<0&&(_.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))})}),A.next(()=>c.mutationQueue.removeMutationBatch(u,_))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(c){let u=Y();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function Lh(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function $_(n,e){const t=W(n),s=e.snapshotVersion;let r=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});r=t.Fs;const c=[];e.targetChanges.forEach((f,_)=>{const g=r.get(_);if(!g)return;c.push(t.hi.removeMatchingKeys(i,f.removedDocuments,_).next(()=>t.hi.addMatchingKeys(i,f.addedDocuments,_)));let A=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(_)!==null?A=A.withResumeToken(we.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,s)),r=r.insert(_,A),function(D,N,G){return D.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=F_?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(g,A,f)&&c.push(t.hi.updateTargetData(i,A))});let u=yt(),d=Y();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(q_(i,a,e.documentUpdates).next(f=>{u=f.Ls,d=f.ks})),!s.isEqual($.min())){const f=t.hi.getLastRemoteSnapshotVersion(i).next(_=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,s));c.push(f)}return b.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.Fs=r,i))}function q_(n,e,t){let s=Y(),r=Y();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let a=yt();return t.forEach((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(r=r.add(c)),u.isNoDocument()&&u.version.isEqual($.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):V(ia,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{Ls:a,ks:r}})}function H_(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=zo),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function W_(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.hi.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):t.hi.allocateTargetId(s).next(a=>(r=new Pt(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.Fs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s})}async function Io(n,e,t){const s=W(n),r=s.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,a=>s.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!Fn(a))throw a;V(ia,`Failed to update sequence numbers for target ${e}: ${a}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(r.target)}function Ml(n,e,t){const s=W(n);let r=$.min(),i=Y();return s.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const _=W(u),g=_.Ms.get(f);return g!==void 0?b.resolve(_.Fs.get(g)):_.hi.getTargetData(d,f)}(s,a,et(e)).next(c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>s.Cs.getDocumentsMatchingQuery(a,e,t?r:$.min(),t?i:Y())).next(c=>(z_(s,Og(e),c),{documents:c,qs:i})))}function z_(n,e,t){let s=n.xs.get(e)||$.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.xs.set(e,s)}class Ol{constructor(){this.activeTargetIds=Fg()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class G_{constructor(){this.Fo=new Ol,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Ol,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class K_{xo(e){}shutdown(){}}/**
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
 */const kl="ConnectivityMonitor";class Dl{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){V(kl,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){V(kl,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hr=null;function Ao(){return hr===null?hr=function(){return 268435456+Math.round(2147483648*Math.random())}():hr++,"0x"+hr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="RestConnection",Q_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Y_{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.Ko=this.databaseId.database===Or?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,i){const a=Ao(),c=this.Go(e,t.toUriEncodedString());V(Wi,`Sending RPC '${e}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,r,i);const{host:d}=new URL(c),f=Dn(d);return this.jo(e,c,u,s,f).then(_=>(V(Wi,`Received RPC '${e}' ${a}: `,_),_),_=>{throw xt(Wi,`RPC '${e}' ${a} failed with error: `,_,"url: ",c,"request:",s),_})}Jo(e,t,s,r,i,a){return this.Wo(e,t,s,r,i)}zo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Go(e,t){const s=Q_[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
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
 */class X_{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Se="WebChannelConnection";class J_ extends Y_{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,r,i){const a=Ao();return new Promise((c,u)=>{const d=new ju;d.setWithCredentials(!0),d.listenOnce(Bu.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case yr.NO_ERROR:const _=d.getResponseJson();V(Se,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(_)),c(_);break;case yr.TIMEOUT:V(Se,`RPC '${e}' ${a} timed out`),u(new x(C.DEADLINE_EXCEEDED,"Request time out"));break;case yr.HTTP_ERROR:const g=d.getStatus();if(V(Se,`RPC '${e}' ${a} failed with status:`,g,"response text:",d.getResponseText()),g>0){let A=d.getResponseJson();Array.isArray(A)&&(A=A[0]);const P=A?.error;if(P&&P.status&&P.message){const D=function(G){const L=G.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(L)>=0?L:C.UNKNOWN}(P.status);u(new x(D,P.message))}else u(new x(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new x(C.UNAVAILABLE,"Connection failed."));break;default:j(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{V(Se,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(r);V(Se,`RPC '${e}' ${a} sending request:`,r),d.send(t,"POST",f,s,15)})}P_(e,t,s){const r=Ao(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Hu(),c=qu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,s),u.encodeInitMessageHeaders=!0;const f=i.join("");V(Se,`Creating RPC '${e}' stream ${r}: ${f}`,u);const _=a.createWebChannel(f,u);this.T_(_);let g=!1,A=!1;const P=new X_({Ho:N=>{A?V(Se,`Not sending because RPC '${e}' stream ${r} is closed:`,N):(g||(V(Se,`Opening RPC '${e}' stream ${r} transport.`),_.open(),g=!0),V(Se,`RPC '${e}' stream ${r} sending:`,N),_.send(N))},Yo:()=>_.close()}),D=(N,G,L)=>{N.listen(G,H=>{try{L(H)}catch(ne){setTimeout(()=>{throw ne},0)}})};return D(_,as.EventType.OPEN,()=>{A||(V(Se,`RPC '${e}' stream ${r} transport opened.`),P.s_())}),D(_,as.EventType.CLOSE,()=>{A||(A=!0,V(Se,`RPC '${e}' stream ${r} transport closed`),P.__(),this.I_(_))}),D(_,as.EventType.ERROR,N=>{A||(A=!0,xt(Se,`RPC '${e}' stream ${r} transport errored. Name:`,N.name,"Message:",N.message),P.__(new x(C.UNAVAILABLE,"The operation could not be completed")))}),D(_,as.EventType.MESSAGE,N=>{var G;if(!A){const L=N.data[0];ee(!!L,16349);const H=L,ne=H?.error||((G=H[0])===null||G===void 0?void 0:G.error);if(ne){V(Se,`RPC '${e}' stream ${r} received error:`,ne);const Pe=ne.status;let U=function(y){const w=he[y];if(w!==void 0)return Ah(w)}(Pe),E=ne.message;U===void 0&&(U=C.INTERNAL,E="Unknown error status: "+Pe+" with message "+ne.message),A=!0,P.__(new x(U,E)),_.close()}else V(Se,`RPC '${e}' stream ${r} received:`,L),P.a_(L)}}),D(c,$u.STAT_EVENT,N=>{N.stat===ho.PROXY?V(Se,`RPC '${e}' stream ${r} detected buffering proxy`):N.stat===ho.NOPROXY&&V(Se,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{P.o_()},0),P}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function zi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(n){return new n_(n,!0)}/**
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
 */class Fh{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=r,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),r=Math.max(0,t-s);r>0&&V("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,r,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Vl="PersistentStream";class Uh{constructor(e,t,s,r,i,a,c,u){this.Fi=e,this.w_=s,this.S_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Fh(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(_t(t.toString()),_t("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.b_===t&&this.W_(s,r)},s=>{e(()=>{const r=new x(C.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(r)})})}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(r=>{s(()=>this.G_(r))}),this.stream.onMessage(r=>{s(()=>++this.C_==1?this.j_(r):this.onNext(r))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return V(Vl,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(V(Vl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Z_ extends Uh{constructor(e,t,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=i_(this.serializer,e),s=function(i){if(!("targetChange"in i))return $.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?$.min():a.readTime?tt(a.readTime):$.min()}(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=To(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=_o(u)?{documents:c_(i,u)}:{query:l_(i,u).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=bh(i,a.resumeToken);const d=vo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo($.min())>0){c.readTime=Fr(i,a.snapshotVersion.toTimestamp());const d=vo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const s=h_(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=To(this.serializer),t.removeTarget=e,this.k_(t)}}class ey extends Uh{constructor(e,t,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return ee(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ee(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ee(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=a_(e.writeResults,e.commitTime),s=tt(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=To(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>o_(this.serializer,s))};this.k_(t)}}/**
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
 */class ty{}class ny extends ty{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,wo(t,s),r,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(C.UNKNOWN,i.toString())})}Jo(e,t,s,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Jo(e,wo(t,s),r,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(C.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class sy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(_t(t),this._a=!1):V("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const tn="RemoteStore";class ry{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(a=>{s.enqueueAndForget(async()=>{cn(this)&&(V(tn,"Restarting streams for network reachability change."),await async function(u){const d=W(u);d.Ia.add(4),await Ls(d),d.Aa.set("Unknown"),d.Ia.delete(4),await ai(d)}(this))})}),this.Aa=new sy(s,r)}}async function ai(n){if(cn(n))for(const e of n.da)await e(!0)}async function Ls(n){for(const e of n.da)await e(!1)}function jh(n,e){const t=W(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),la(t)?ca(t):Un(t).x_()&&aa(t,e))}function oa(n,e){const t=W(n),s=Un(t);t.Ta.delete(e),s.x_()&&Bh(t,e),t.Ta.size===0&&(s.x_()?s.B_():cn(t)&&t.Aa.set("Unknown"))}function aa(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Un(n).H_(e)}function Bh(n,e){n.Ra.$e(e),Un(n).Y_(e)}function ca(n){n.Ra=new Jg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Un(n).start(),n.Aa.aa()}function la(n){return cn(n)&&!Un(n).M_()&&n.Ta.size>0}function cn(n){return W(n).Ia.size===0}function $h(n){n.Ra=void 0}async function iy(n){n.Aa.set("Online")}async function oy(n){n.Ta.forEach((e,t)=>{aa(n,e)})}async function ay(n,e){$h(n),la(n)?(n.Aa.la(e),ca(n)):n.Aa.set("Unknown")}async function cy(n,e,t){if(n.Aa.set("Online"),e instanceof Rh&&e.state===2&&e.cause)try{await async function(r,i){const a=i.cause;for(const c of i.targetIds)r.Ta.has(c)&&(await r.remoteSyncer.rejectListen(c,a),r.Ta.delete(c),r.Ra.removeTarget(c))}(n,e)}catch(s){V(tn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await jr(n,s)}else if(e instanceof Tr?n.Ra.Ye(e):e instanceof Sh?n.Ra.it(e):n.Ra.et(e),!t.isEqual($.min()))try{const s=await Lh(n.localStore);t.compareTo(s)>=0&&await function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ta.get(d);f&&i.Ta.set(d,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{const f=i.Ta.get(u);if(!f)return;i.Ta.set(u,f.withResumeToken(we.EMPTY_BYTE_STRING,f.snapshotVersion)),Bh(i,u);const _=new Pt(f.target,u,d,f.sequenceNumber);aa(i,_)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(s){V(tn,"Failed to raise snapshot:",s),await jr(n,s)}}async function jr(n,e,t){if(!Fn(e))throw e;n.Ia.add(1),await Ls(n),n.Aa.set("Offline"),t||(t=()=>Lh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V(tn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await ai(n)})}function qh(n,e){return e().catch(t=>jr(n,t,e))}async function ci(n){const e=W(n),t=Bt(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:zo;for(;ly(e);)try{const r=await H_(e.localStore,s);if(r===null){e.Pa.length===0&&t.B_();break}s=r.batchId,uy(e,r)}catch(r){await jr(e,r)}Hh(e)&&Wh(e)}function ly(n){return cn(n)&&n.Pa.length<10}function uy(n,e){n.Pa.push(e);const t=Bt(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Hh(n){return cn(n)&&!Bt(n).M_()&&n.Pa.length>0}function Wh(n){Bt(n).start()}async function hy(n){Bt(n).na()}async function dy(n){const e=Bt(n);for(const t of n.Pa)e.X_(t.mutations)}async function fy(n,e,t){const s=n.Pa.shift(),r=Zo.from(s,e,t);await qh(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await ci(n)}async function py(n,e){e&&Bt(n).Z_&&await async function(s,r){if(function(a){return Yg(a)&&a!==C.ABORTED}(r.code)){const i=s.Pa.shift();Bt(s).N_(),await qh(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await ci(s)}}(n,e),Hh(n)&&Wh(n)}async function xl(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),V(tn,"RemoteStore received new credentials");const s=cn(t);t.Ia.add(3),await Ls(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await ai(t)}async function my(n,e){const t=W(n);e?(t.Ia.delete(2),await ai(t)):e||(t.Ia.add(2),await Ls(t),t.Aa.set("Unknown"))}function Un(n){return n.Va||(n.Va=function(t,s,r){const i=W(t);return i.ia(),new Z_(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:iy.bind(null,n),e_:oy.bind(null,n),n_:ay.bind(null,n),J_:cy.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),la(n)?ca(n):n.Aa.set("Unknown")):(await n.Va.stop(),$h(n))})),n.Va}function Bt(n){return n.ma||(n.ma=function(t,s,r){const i=W(t);return i.ia(),new ey(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:hy.bind(null,n),n_:py.bind(null,n),ea:dy.bind(null,n),ta:fy.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await ci(n)):(await n.ma.stop(),n.Pa.length>0&&(V(tn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
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
 */class ua{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const a=Date.now()+s,c=new ua(e,t,a,r,i);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ha(n,e){if(_t("AsyncQueue",`${e}: ${n}`),Fn(n))return new x(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class vn{static emptySet(e){return new vn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||F.comparator(t.key,s.key):(t,s)=>F.comparator(t.key,s.key),this.keyedMap=cs(),this.sortedSet=new ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof vn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new vn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Ll{constructor(){this.fa=new ce(F.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):j(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,s)=>{e.push(s)}),e}}class Pn{constructor(e,t,s,r,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,r,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Pn(e,t,vn.emptySet(t),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ti(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class gy{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class _y{constructor(){this.queries=Fl(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const r=W(t),i=r.queries;r.queries=Fl(),i.forEach((a,c)=>{for(const u of c.wa)u.onError(s)})})(this,new x(C.ABORTED,"Firestore shutting down"))}}function Fl(){return new on(n=>hh(n),ti)}async function yy(n,e){const t=W(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Sa()&&e.ba()&&(s=2):(i=new gy,s=e.ba()?0:1);try{switch(s){case 0:i.ya=await t.onListen(r,!0);break;case 1:i.ya=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const c=ha(a,`Initialization of query '${gn(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&da(t)}async function vy(n,e){const t=W(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?r=e.ba()?0:1:!i.Sa()&&e.ba()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function wy(n,e){const t=W(n);let s=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(r)&&(s=!0);a.ya=r}}s&&da(t)}function Ey(n,e,t){const s=W(n),r=s.queries.get(e);if(r)for(const i of r.wa)i.onError(t);s.queries.delete(e)}function da(n){n.Da.forEach(e=>{e.next()})}var So,Ul;(Ul=So||(So={})).Fa="default",Ul.Cache="cache";class Ty{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Pn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Pn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==So.Cache}}/**
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
 */class zh{constructor(e){this.key=e}}class Gh{constructor(e){this.key=e}}class Iy{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Y(),this.mutatedKeys=Y(),this.Xa=dh(e),this.eu=new vn(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new Ll,r=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,c=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,d=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((f,_)=>{const g=r.get(f),A=ni(this.query,_)?_:null,P=!!g&&this.mutatedKeys.has(g.key),D=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let N=!1;g&&A?g.data.isEqual(A.data)?P!==D&&(s.track({type:3,doc:A}),N=!0):this.iu(g,A)||(s.track({type:2,doc:A}),N=!0,(u&&this.Xa(A,u)>0||d&&this.Xa(A,d)<0)&&(c=!0)):!g&&A?(s.track({type:0,doc:A}),N=!0):g&&!A&&(s.track({type:1,doc:g}),N=!0,(u||d)&&(c=!0)),N&&(A?(a=a.add(A),i=D?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),s.track({type:1,doc:f})}return{eu:a,ru:s,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort((f,_)=>function(A,P){const D=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j(20277,{At:N})}};return D(A)-D(P)}(f.type,_.type)||this.Xa(f.doc,_.doc)),this.su(s),r=r!=null&&r;const c=t&&!r?this.ou():[],u=this.Za.size===0&&this.current&&!r?1:0,d=u!==this.Ya;return this.Ya=u,a.length!==0||d?{snapshot:new Pn(this.query,e.eu,i,a,e.mutatedKeys,u===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Ll,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Y(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});const t=[];return e.forEach(s=>{this.Za.has(s)||t.push(new Gh(s))}),this.Za.forEach(s=>{e.has(s)||t.push(new zh(s))}),t}uu(e){this.Ha=e.qs,this.Za=Y();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Pn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const fa="SyncEngine";class Ay{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Sy{constructor(e){this.key=e,this.lu=!1}}class Ry{constructor(e,t,s,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new on(c=>hh(c),ti),this.Tu=new Map,this.Iu=new Set,this.du=new ce(F.comparator),this.Eu=new Map,this.Au=new na,this.Ru={},this.Vu=new Map,this.mu=Cn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function by(n,e,t=!0){const s=Zh(n);let r;const i=s.Pu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.cu()):r=await Kh(s,e,t,!0),r}async function Cy(n,e){const t=Zh(n);await Kh(t,e,!0,!1)}async function Kh(n,e,t,s){const r=await W_(n.localStore,et(e)),i=r.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return s&&(c=await Py(n,e,i,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&jh(n.remoteStore,r),c}async function Py(n,e,t,s,r){n.gu=(_,g,A)=>async function(D,N,G,L){let H=N.view.nu(G);H.Ds&&(H=await Ml(D.localStore,N.query,!1).then(({documents:E})=>N.view.nu(E,H)));const ne=L&&L.targetChanges.get(N.targetId),Pe=L&&L.targetMismatches.get(N.targetId)!=null,U=N.view.applyChanges(H,D.isPrimaryClient,ne,Pe);return Bl(D,N.targetId,U._u),U.snapshot}(n,_,g,A);const i=await Ml(n.localStore,e,!0),a=new Iy(e,i.qs),c=a.nu(i.documents),u=xs.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),d=a.applyChanges(c,n.isPrimaryClient,u);Bl(n,t,d._u);const f=new Ay(e,t,a);return n.Pu.set(e,f),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function Ny(n,e,t){const s=W(n),r=s.Pu.get(e),i=s.Tu.get(r.targetId);if(i.length>1)return s.Tu.set(r.targetId,i.filter(a=>!ti(a,e))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Io(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&oa(s.remoteStore,r.targetId),Ro(s,r.targetId)}).catch(Ln)):(Ro(s,r.targetId),await Io(s.localStore,r.targetId,!0))}async function My(n,e){const t=W(n),s=t.Pu.get(e),r=t.Tu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),oa(t.remoteStore,s.targetId))}async function Oy(n,e,t){const s=Uy(n);try{const r=await function(a,c){const u=W(a),d=ie.now(),f=c.reduce((A,P)=>A.add(P.key),Y());let _,g;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let P=yt(),D=Y();return u.Os.getEntries(A,f).next(N=>{P=N,P.forEach((G,L)=>{L.isValidDocument()||(D=D.add(G))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,P)).next(N=>{_=N;const G=[];for(const L of c){const H=Wg(L,_.get(L.key).overlayedDocument);H!=null&&G.push(new an(L.key,H,rh(H.value.mapValue),mt.exists(!0)))}return u.mutationQueue.addMutationBatch(A,d,G,c)}).next(N=>{g=N;const G=N.applyToLocalDocumentSet(_,D);return u.documentOverlayCache.saveOverlays(A,N.batchId,G)})}).then(()=>({batchId:g.batchId,changes:ph(_)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(a,c,u){let d=a.Ru[a.currentUser.toKey()];d||(d=new ce(K)),d=d.insert(c,u),a.Ru[a.currentUser.toKey()]=d}(s,r.batchId,t),await Fs(s,r.changes),await ci(s.remoteStore)}catch(r){const i=ha(r,"Failed to persist write");t.reject(i)}}async function Qh(n,e){const t=W(n);try{const s=await $_(t.localStore,e);e.targetChanges.forEach((r,i)=>{const a=t.Eu.get(i);a&&(ee(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.lu=!0:r.modifiedDocuments.size>0?ee(a.lu,14607):r.removedDocuments.size>0&&(ee(a.lu,42227),a.lu=!1))}),await Fs(t,s,e)}catch(s){await Ln(s)}}function jl(n,e,t){const s=W(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Pu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&r.push(c.snapshot)}),function(a,c){const u=W(a);u.onlineState=c;let d=!1;u.queries.forEach((f,_)=>{for(const g of _.wa)g.va(c)&&(d=!0)}),d&&da(u)}(s.eventManager,e),r.length&&s.hu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ky(n,e,t){const s=W(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Eu.get(e),i=r&&r.key;if(i){let a=new ce(F.comparator);a=a.insert(i,be.newNoDocument(i,$.min()));const c=Y().add(i),u=new ii($.min(),new Map,new ce(K),a,c);await Qh(s,u),s.du=s.du.remove(i),s.Eu.delete(e),pa(s)}else await Io(s.localStore,e,!1).then(()=>Ro(s,e,t)).catch(Ln)}async function Dy(n,e){const t=W(n),s=e.batch.batchId;try{const r=await B_(t.localStore,e);Xh(t,s,null),Yh(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Fs(t,r)}catch(r){await Ln(r)}}async function Vy(n,e,t){const s=W(n);try{const r=await function(a,c){const u=W(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,c).next(_=>(ee(_!==null,37113),f=_.keys(),u.mutationQueue.removeMutationBatch(d,_))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(s.localStore,e);Xh(s,e,t),Yh(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Fs(s,r)}catch(r){await Ln(r)}}function Yh(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function Xh(n,e,t){const s=W(n);let r=s.Ru[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.Ru[s.currentUser.toKey()]=r}}function Ro(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Tu.get(e))n.Pu.delete(s),t&&n.hu.pu(s,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(s=>{n.Au.containsKey(s)||Jh(n,s)})}function Jh(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(oa(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),pa(n))}function Bl(n,e,t){for(const s of t)s instanceof zh?(n.Au.addReference(s.key,e),xy(n,s)):s instanceof Gh?(V(fa,"Document no longer in limbo: "+s.key),n.Au.removeReference(s.key,e),n.Au.containsKey(s.key)||Jh(n,s.key)):j(19791,{yu:s})}function xy(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Iu.has(s)||(V(fa,"New document in limbo: "+t),n.Iu.add(s),pa(n))}function pa(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new F(ae.fromString(e)),s=n.mu.next();n.Eu.set(s,new Sy(t)),n.du=n.du.insert(t,s),jh(n.remoteStore,new Pt(et(Xo(t.path)),s,"TargetPurposeLimboResolution",Xr.ue))}}async function Fs(n,e,t){const s=W(n),r=[],i=[],a=[];s.Pu.isEmpty()||(s.Pu.forEach((c,u)=>{a.push(s.gu(u,e,t).then(d=>{var f;if((d||t)&&s.isPrimaryClient){const _=d?!d.fromCache:(f=t?.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;s.sharedClientState.updateQueryState(u.targetId,_?"current":"not-current")}if(d){r.push(d);const _=ra.Es(u.targetId,d);i.push(_)}}))}),await Promise.all(a),s.hu.J_(r),await async function(u,d){const f=W(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>b.forEach(d,g=>b.forEach(g.Is,A=>f.persistence.referenceDelegate.addReference(_,g.targetId,A)).next(()=>b.forEach(g.ds,A=>f.persistence.referenceDelegate.removeReference(_,g.targetId,A)))))}catch(_){if(!Fn(_))throw _;V(ia,"Failed to update sequence numbers: "+_)}for(const _ of d){const g=_.targetId;if(!_.fromCache){const A=f.Fs.get(g),P=A.snapshotVersion,D=A.withLastLimboFreeSnapshotVersion(P);f.Fs=f.Fs.insert(g,D)}}}(s.localStore,i))}async function Ly(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){V(fa,"User change. New user:",e.toKey());const s=await xh(t.localStore,e);t.currentUser=e,function(i,a){i.Vu.forEach(c=>{c.forEach(u=>{u.reject(new x(C.CANCELLED,a))})}),i.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Fs(t,s.Bs)}}function Fy(n,e){const t=W(n),s=t.Eu.get(e);if(s&&s.lu)return Y().add(s.key);{let r=Y();const i=t.Tu.get(e);if(!i)return r;for(const a of i){const c=t.Pu.get(a);r=r.unionWith(c.view.tu)}return r}}function Zh(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ky.bind(null,e),e.hu.J_=wy.bind(null,e.eventManager),e.hu.pu=Ey.bind(null,e.eventManager),e}function Uy(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Dy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Vy.bind(null,e),e}class Br{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oi(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return j_(this.persistence,new L_,e.initialUser,this.serializer)}Du(e){return new Vh(sa.Vi,this.serializer)}bu(e){return new G_}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Br.provider={build:()=>new Br};class jy extends Br{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){ee(this.persistence.referenceDelegate instanceof Ur,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new T_(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?ke.withCacheSize(this.cacheSizeBytes):ke.DEFAULT;return new Vh(s=>Ur.Vi(s,t),this.serializer)}}class bo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>jl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ly.bind(null,this.syncEngine),await my(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _y}()}createDatastore(e){const t=oi(e.databaseInfo.databaseId),s=function(i){return new J_(i)}(e.databaseInfo);return function(i,a,c,u){return new ny(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,i,a,c){return new ry(s,r,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>jl(this.syncEngine,t,0),function(){return Dl.C()?new Dl:new K_}())}createSyncEngine(e,t){return function(r,i,a,c,u,d,f){const _=new Ry(r,i,a,c,u,d);return f&&(_.fu=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const i=W(r);V(tn,"RemoteStore shutting down."),i.Ia.add(5),await Ls(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}bo.provider={build:()=>new bo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class By{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):_t("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const $t="FirestoreClient";class $y{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=Re.UNAUTHENTICATED,this.clientId=Ho.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async a=>{V($t,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(s,a=>(V($t,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ha(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Gi(n,e){n.asyncQueue.verifyOperationInProgress(),V($t,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await xh(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>{xt("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{V("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(r=>{xt("Terminating Firestore due to IndexedDb database deletion failed",r)})}),n._offlineComponents=e}async function $l(n,e){n.asyncQueue.verifyOperationInProgress();const t=await qy(n);V($t,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>xl(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>xl(e.remoteStore,r)),n._onlineComponents=e}async function qy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V($t,"Using user provided OfflineComponentProvider");try{await Gi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===C.FAILED_PRECONDITION||r.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;xt("Error using user provided cache. Falling back to memory cache: "+t),await Gi(n,new Br)}}else V($t,"Using default OfflineComponentProvider"),await Gi(n,new jy(void 0));return n._offlineComponents}async function ed(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V($t,"Using user provided OnlineComponentProvider"),await $l(n,n._uninitializedComponentsProvider._online)):(V($t,"Using default OnlineComponentProvider"),await $l(n,new bo))),n._onlineComponents}function Hy(n){return ed(n).then(e=>e.syncEngine)}async function Wy(n){const e=await ed(n),t=e.eventManager;return t.onListen=by.bind(null,e.syncEngine),t.onUnlisten=Ny.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Cy.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=My.bind(null,e.syncEngine),t}function zy(n,e,t={}){const s=new Dt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const f=new By({next:g=>{f.Ou(),a.enqueueAndForget(()=>vy(i,_));const A=g.docs.has(c);!A&&g.fromCache?d.reject(new x(C.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&g.fromCache&&u&&u.source==="server"?d.reject(new x(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),_=new Ty(Xo(c.path),f,{includeMetadataChanges:!0,ka:!0});return yy(i,_)}(await Wy(n),n.asyncQueue,e,t,s)),s.promise}/**
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
 */function td(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="firestore.googleapis.com",Hl=!0;class Wl{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new x(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nd,this.ssl=Hl}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Hl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Dh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<w_)throw new x(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=td((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ma{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Km;switch(s.type){case"firstParty":return new Jm(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new x(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=ql.get(t);s&&(V("ComponentProvider","Removing Datastore"),ql.delete(t),s.terminate())}(this),Promise.resolve()}}function Gy(n,e,t,s={}){var r;n=ws(n,ma);const i=Dn(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;i&&(Mu(`https://${u}`),Ou("Firestore",!0)),a.host!==nd&&a.host!==u&&xt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:u,ssl:i,emulatorOptions:s});if(!Jt(d,c)&&(n._setSettings(d),s.mockUserToken)){let f,_;if(typeof s.mockUserToken=="string")f=s.mockUserToken,_=Re.MOCK_USER;else{f=vp(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const g=s.mockUserToken.sub||s.mockUserToken.user_id;if(!g)throw new x(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new Re(g)}n._authCredentials=new Qm(new zu(f,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ga(this.firestore,e,this._query)}}class ge{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ge(this.firestore,e,this._key)}toJSON(){return{type:ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ds(t,ge._jsonSchema))return new ge(e,s||null,new F(ae.fromString(t.referencePath)))}}ge._jsonSchemaVersion="firestore/documentReference/1.0",ge._jsonSchema={type:de("string",ge._jsonSchemaVersion),referencePath:de("string")};class bs extends ga{constructor(e,t,s){super(e,t,Xo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ge(this.firestore,null,new F(e))}withConverter(e){return new bs(this.firestore,e,this._path)}}function sd(n,e,...t){if(n=He(n),arguments.length===1&&(e=Ho.newId()),sg("doc","path",e),n instanceof ma){const s=ae.fromString(e,...t);return il(s),new ge(n,null,new F(s))}{if(!(n instanceof ge||n instanceof bs))throw new x(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ae.fromString(e,...t));return il(s),new ge(n.firestore,n instanceof bs?n.converter:null,new F(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="AsyncQueue";class Gl{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Fh(this,"async_queue_retry"),this.oc=()=>{const s=zi();s&&V(zl,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=zi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=zi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Dt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Fn(e))throw e;V(zl,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,_t("INTERNAL UNHANDLED ERROR: ",Kl(s)),s}).then(s=>(this.nc=!1,s))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const r=ua.createAndSchedule(this,e,t,s,i=>this.lc(i));return this.ec.push(r),r}ac(){this.tc&&j(47125,{hc:Kl(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Kl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class _a extends ma{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Gl,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gl(e),this._firestoreClient=void 0,await e}}}function Ky(n,e){const t=typeof n=="object"?n:xu(),s=typeof n=="string"?n:Or,r=$o(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=_p("firestore");i&&Gy(r,...i)}return r}function rd(n){if(n._terminated)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Qy(n),n._firestoreClient}function Qy(n){var e,t,s;const r=n._freezeSettings(),i=function(c,u,d,f){return new mg(c,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,td(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new $y(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const u=c?._online.build();return{_offline:c?._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ue(we.fromBase64String(e))}catch(t){throw new x(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ue(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ue._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ds(e,Ue._jsonSchema))return Ue.fromBase64String(e.bytes)}}Ue._jsonSchemaVersion="firestore/bytes/1.0",Ue._jsonSchema={type:de("string",Ue._jsonSchemaVersion),bytes:de("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this._methodName=e}}/**
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
 */class nt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:nt._jsonSchemaVersion}}static fromJSON(e){if(Ds(e,nt._jsonSchema))return new nt(e.latitude,e.longitude)}}nt._jsonSchemaVersion="firestore/geoPoint/1.0",nt._jsonSchema={type:de("string",nt._jsonSchemaVersion),latitude:de("number"),longitude:de("number")};/**
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
 */class st{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:st._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ds(e,st._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new st(e.vectorValues);throw new x(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}st._jsonSchemaVersion="firestore/vectorValue/1.0",st._jsonSchema={type:de("string",st._jsonSchemaVersion),vectorValues:de("object")};/**
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
 */const Yy=/^__.*__$/;class Xy{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new an(e,this.data,this.fieldMask,t,this.fieldTransforms):new Vs(e,this.data,t,this.fieldTransforms)}}function od(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j(40011,{Ec:n})}}class va{constructor(e,t,s,r,i,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new va(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Rc({path:s,mc:!1});return r.fc(e),r}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Rc({path:s,mc:!1});return r.Ac(),r}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return $r(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(od(this.Ec)&&Yy.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Jy{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||oi(e)}Dc(e,t,s,r=!1){return new va({Ec:e,methodName:t,bc:s,path:ve.emptyPath(),mc:!1,Sc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zy(n){const e=n._freezeSettings(),t=oi(n._databaseId);return new Jy(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ev(n,e,t,s,r,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,r);ud("Data must be an object, but it was:",a,s);const c=cd(s,a);let u,d;if(i.merge)u=new Qe(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const _ of i.mergeFields){const g=tv(e,_,t);if(!a.contains(g))throw new x(C.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);sv(f,g)||f.push(g)}u=new Qe(f),d=a.fieldTransforms.filter(_=>u.covers(_.field))}else u=null,d=a.fieldTransforms;return new Xy(new Fe(c),u,d)}function ad(n,e){if(ld(n=He(n)))return ud("Unsupported field value:",e,n),cd(n,e);if(n instanceof id)return function(s,r){if(!od(r.Ec))throw r.wc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.wc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(s,r){const i=[];let a=0;for(const c of s){let u=ad(c,r.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(s,r){if((s=He(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Ug(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=ie.fromDate(s);return{timestampValue:Fr(r.serializer,i)}}if(s instanceof ie){const i=new ie(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Fr(r.serializer,i)}}if(s instanceof nt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ue)return{bytesValue:bh(r.serializer,s._byteString)};if(s instanceof ge){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ta(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof st)return function(a,c){return{mapValue:{fields:{[nh]:{stringValue:sh},[kr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.wc("VectorValues must only contain numeric values.");return Jo(c.serializer,d)})}}}}}}(s,r);throw r.wc(`Unsupported field value: ${Wo(s)}`)}(n,e)}function cd(n,e){const t={};return Yu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rn(n,(s,r)=>{const i=ad(r,e.Vc(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function ld(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ie||n instanceof nt||n instanceof Ue||n instanceof ge||n instanceof id||n instanceof st)}function ud(n,e,t){if(!ld(t)||!Ku(t)){const s=Wo(t);throw s==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+s)}}function tv(n,e,t){if((e=He(e))instanceof ya)return e._internalPath;if(typeof e=="string")return hd(n,e);throw $r("Field path arguments must be of type string or ",n,!1,void 0,t)}const nv=new RegExp("[~\\*/\\[\\]]");function hd(n,e,t){if(e.search(nv)>=0)throw $r(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ya(...e.split("."))._internalPath}catch{throw $r(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function $r(n,e,t,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${s}`),a&&(u+=` in document ${r}`),u+=")"),new x(C.INVALID_ARGUMENT,c+n+u)}function sv(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(fd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class rv extends dd{data(){return super.data()}}function fd(n,e){return typeof e=="string"?hd(n,e):e instanceof ya?e._internalPath:e._delegate._internalPath}class iv{convertValue(e,t="none"){switch(jt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ut(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw j(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return rn(e,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertVectorValue(e){var t,s,r;const i=(r=(s=(t=e.fields)===null||t===void 0?void 0:t[kr].arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(a=>ue(a.doubleValue));return new st(i)}convertGeoPoint(e){return new nt(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Zr(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ts(e));default:return null}}convertTimestamp(e){const t=Ft(e);return new ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ae.fromString(e);ee(kh(s),9688,{name:e});const r=new Is(s.get(1),s.get(3)),i=new F(s.popFirst(5));return r.isEqual(t)||_t(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class us{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xt extends dd{constructor(e,t,s,r,i,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ir(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(fd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new x(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Xt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Xt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Xt._jsonSchema={type:de("string",Xt._jsonSchemaVersion),bundleSource:de("string","DocumentSnapshot"),bundleName:de("string"),bundle:de("string")};class Ir extends Xt{data(e={}){return super.data(e)}}class _s{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new us(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Ir(this._firestore,this._userDataWriter,s.key,s,new us(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(c=>{const u=new Ir(r._firestore,r._userDataWriter,c.doc.key,c.doc,new us(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Ir(r._firestore,r._userDataWriter,c.doc.key,c.doc,new us(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:av(c.type),doc:u,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new x(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_s._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ho.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function av(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(n){n=ws(n,ge);const e=ws(n.firestore,_a);return zy(rd(e),n._key).then(t=>dv(e,n,t))}_s._jsonSchemaVersion="firestore/querySnapshot/1.0",_s._jsonSchema={type:de("string",_s._jsonSchemaVersion),bundleSource:de("string","QuerySnapshot"),bundleName:de("string"),bundle:de("string")};class lv extends iv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ue(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ge(this.firestore,null,t)}}function uv(n,e,t){n=ws(n,ge);const s=ws(n.firestore,_a),r=ov(n.converter,e);return hv(s,[ev(Zy(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,mt.none())])}function hv(n,e){return function(s,r){const i=new Dt;return s.asyncQueue.enqueueAndForget(async()=>Oy(await Hy(s),r,i)),i.promise}(rd(n),e)}function dv(n,e,t){const s=t.docs.get(e._key),r=new lv(n);return new Xt(n,r,e._key,s,new us(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(r){xn=r})(Vn),An(new Zt("firestore",(s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),c=new _a(new Ym(s.getProvider("auth-internal")),new Zm(a,s.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Is(d.options.projectId,f)}(a,r),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ot(el,tl,e),Ot(el,tl,"esm2017")})();function wa(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t}function pd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fv=pd,md=new Os("auth","Firebase",pd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new jo("@firebase/auth");function pv(n,...e){qr.logLevel<=Q.WARN&&qr.warn(`Auth (${Vn}): ${n}`,...e)}function Ar(n,...e){qr.logLevel<=Q.ERROR&&qr.error(`Auth (${Vn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(n,...e){throw Ta(n,...e)}function Xe(n,...e){return Ta(n,...e)}function Ea(n,e,t){const s=Object.assign(Object.assign({},fv()),{[e]:t});return new Os("auth","Firebase",s).create(e,{appName:n.name})}function Vt(n){return Ea(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gd(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&ct(n,"argument-error"),Ea(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ta(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return md.create(n,...e)}function B(n,e,...t){if(!n)throw Ta(e,...t)}function ft(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ar(e),new Error(e)}function vt(n,e){n||ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function mv(){return Ql()==="http:"||Ql()==="https:"}function Ql(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mv()||Sp()||"connection"in navigator)?navigator.onLine:!0}function _v(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t){this.shortDelay=e,this.longDelay=t,vt(t>e,"Short delay should be less than long delay!"),this.isMobile=Tp()||Rp()}get(){return gv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(n,e){vt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wv=new Us(3e4,6e4);function Aa(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function jn(n,e,t,s,r={}){return yd(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=ks(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},i);return Ap()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Dn(n.emulatorConfig.host)&&(d.credentials="include"),_d.fetch()(await vd(n,n.config.apiHost,t,c),d)})}async function yd(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},yv),e);try{const r=new Tv(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw dr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw dr(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw dr(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw dr(n,"user-disabled",a);const f=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ea(n,f,d);ct(n,f)}}catch(r){if(r instanceof wt)throw r;ct(n,"network-request-failed",{message:String(r)})}}async function Ev(n,e,t,s,r={}){const i=await jn(n,e,t,s,r);return"mfaPendingCredential"in i&&ct(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function vd(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?Ia(n.config,r):`${n.config.apiScheme}://${r}`;return vv.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class Tv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Xe(this.auth,"network-request-failed")),wv.get())})}}function dr(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=Xe(n,e,s);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iv(n,e){return jn(n,"POST","/v1/accounts:delete",e)}async function Hr(n,e){return jn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Av(n,e=!1){const t=He(n),s=await t.getIdToken(e),r=Sa(s);B(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i?.sign_in_provider;return{claims:r,token:s,authTime:ys(Ki(r.auth_time)),issuedAtTime:ys(Ki(r.iat)),expirationTime:ys(Ki(r.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ki(n){return Number(n)*1e3}function Sa(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Ar("JWT malformed, contained fewer than 3 sections"),null;try{const r=bu(t);return r?JSON.parse(r):(Ar("Failed to decode base64 JWT payload"),null)}catch(r){return Ar("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Yl(n){const e=Sa(n);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof wt&&Sv(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Sv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ys(this.lastLoginAt),this.creationTime=ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wr(n){var e;const t=n.auth,s=await n.getIdToken(),r=await Cs(n,Hr(t,{idToken:s}));B(r?.users.length,t,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?wd(i.providerUserInfo):[],c=Cv(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!c?.length,f=u?d:!1,_={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Po(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,_)}async function bv(n){const e=He(n);await Wr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cv(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function wd(n){return n.map(e=>{var{providerId:t}=e,s=wa(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pv(n,e){const t=await yd(n,{},async()=>{const s=ks({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await vd(n,r,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:s};return n.emulatorConfig&&Dn(n.emulatorConfig.host)&&(u.credentials="include"),_d.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Nv(n,e){return jn(n,"POST","/v2/accounts:revokeToken",Aa(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){B(e.length!==0,"internal-error");const t=Yl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await Pv(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new wn;return s&&(B(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(B(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(B(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wn,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(n,e){B(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ye{constructor(e){var{uid:t,auth:s,stsTokenManager:r}=e,i=wa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Rv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Po(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Cs(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Av(this,e)}reload(){return bv(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ye(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Wr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(Vt(this.auth));const e=await this.getIdToken();return await Cs(this,Iv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,r,i,a,c,u,d,f;const _=(s=t.displayName)!==null&&s!==void 0?s:void 0,g=(r=t.email)!==null&&r!==void 0?r:void 0,A=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,P=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(c=t.tenantId)!==null&&c!==void 0?c:void 0,N=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,G=(d=t.createdAt)!==null&&d!==void 0?d:void 0,L=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:H,emailVerified:ne,isAnonymous:Pe,providerData:U,stsTokenManager:E}=t;B(H&&E,e,"internal-error");const m=wn.fromJSON(this.name,E);B(typeof H=="string",e,"internal-error"),St(_,e.name),St(g,e.name),B(typeof ne=="boolean",e,"internal-error"),B(typeof Pe=="boolean",e,"internal-error"),St(A,e.name),St(P,e.name),St(D,e.name),St(N,e.name),St(G,e.name),St(L,e.name);const y=new Ye({uid:H,auth:e,email:g,emailVerified:ne,displayName:_,isAnonymous:Pe,photoURL:P,phoneNumber:A,tenantId:D,stsTokenManager:m,createdAt:G,lastLoginAt:L});return U&&Array.isArray(U)&&(y.providerData=U.map(w=>Object.assign({},w))),N&&(y._redirectEventId=N),y}static async _fromIdTokenResponse(e,t,s=!1){const r=new wn;r.updateFromServerResponse(t);const i=new Ye({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Wr(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];B(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?wd(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!i?.length,c=new wn;c.updateFromIdToken(s);const u=new Ye({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Po(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=new Map;function pt(n){vt(n instanceof Function,"Expected a class definition");let e=Xl.get(n);return e?(vt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Xl.set(n,e),e)}/**
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
 */class Ed{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ed.type="NONE";const Jl=Ed;/**
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
 */function Sr(n,e,t){return`firebase:${n}:${e}:${t}`}class En{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Sr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Sr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Hr(this.auth,{idToken:e}).catch(()=>{});return t?Ye._fromGetAccountInfoResponse(this.auth,t,e):null}return Ye._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new En(pt(Jl),e,s);const r=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=r[0]||pt(Jl);const a=Sr(s,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(a);if(f){let _;if(typeof f=="string"){const g=await Hr(e,{idToken:f}).catch(()=>{});if(!g)break;_=await Ye._fromGetAccountInfoResponse(e,g,f)}else _=Ye._fromJSON(e,f);d!==i&&(c=_),i=d;break}}catch{}const u=r.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new En(i,e,s):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new En(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Td(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bd(e))return"Blackberry";if(Cd(e))return"Webos";if(Id(e))return"Safari";if((e.includes("chrome/")||Ad(e))&&!e.includes("edge/"))return"Chrome";if(Rd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function Td(n=Ce()){return/firefox\//i.test(n)}function Id(n=Ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ad(n=Ce()){return/crios\//i.test(n)}function Sd(n=Ce()){return/iemobile/i.test(n)}function Rd(n=Ce()){return/android/i.test(n)}function bd(n=Ce()){return/blackberry/i.test(n)}function Cd(n=Ce()){return/webos/i.test(n)}function Ra(n=Ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Mv(n=Ce()){var e;return Ra(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ov(){return bp()&&document.documentMode===10}function Pd(n=Ce()){return Ra(n)||Rd(n)||Cd(n)||bd(n)||/windows phone/i.test(n)||Sd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(n,e=[]){let t;switch(n){case"Browser":t=Zl(Ce());break;case"Worker":t=`${Zl(Ce())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vn}/${s}`}/**
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
 */class kv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function Dv(n,e={}){return jn(n,"GET","/v2/passwordPolicy",Aa(n,e))}/**
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
 */const Vv=6;class xv{constructor(e){var t,s,r,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Vv,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,r,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(s=u.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(r=u.containsLowercaseLetter)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eu(this),this.idTokenSubscription=new eu(this),this.beforeStateQueue=new kv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=md,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pt(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await En.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Hr(this,{idToken:e}),s=await Ye._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Le(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=r?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&u?.user&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Wr(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_v()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Le(this.app))return Promise.reject(Vt(this));const t=e?He(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(Vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Le(this.app)?Promise.reject(Vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Dv(this),t=new xv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Os("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Nv(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pt(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=await En.create(this,[pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,s,r);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(Le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&pv(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Bn(n){return He(n)}class eu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vp(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ba={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Fv(n){ba=n}function Uv(n){return ba.loadJS(n)}function jv(){return ba.gapiScript}function Bv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(n,e){const t=$o(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Jt(i,e??{}))return r;ct(r,"already-initialized")}return t.initialize({options:e})}function qv(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(pt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function Hv(n,e,t){const s=Bn(n);B(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Md(e),{host:a,port:c}=Wv(e),u=c===null?"":`:${c}`,d={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){B(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),B(Jt(d,s.config.emulator)&&Jt(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,Dn(a)?(Mu(`${i}//${a}${u}`),Ou("Auth",!0)):zv()}function Md(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Wv(n){const e=Md(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:tu(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:tu(a)}}}function tu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function zv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,t){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(n,e){return Ev(n,"POST","/v1/accounts:signInWithIdp",Aa(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="http://localhost";class nn extends Od{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ct("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=t,i=wa(t,["providerId","signInMethod"]);if(!s||!r)return null;const a=new nn(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Tn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Tn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tn(e,t)}buildRequest(){const e={requestUri:Gv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ks(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class js extends li{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends js{constructor(){super("facebook.com")}static credential(e){return nn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends js{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nn._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return dt.credential(t,s)}catch{return null}}}dt.GOOGLE_SIGN_IN_METHOD="google.com";dt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends js{constructor(){super("github.com")}static credential(e){return nn._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com";bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends js{constructor(){super("twitter.com")}static credential(e,t){return nn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ct.credential(t,s)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await Ye._fromIdTokenResponse(e,s,r),a=nu(s);return new Nn({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=nu(s);return new Nn({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function nu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends wt{constructor(e,t,s,r){var i;super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,zr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new zr(e,t,s,r)}}function kd(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zr._fromErrorAndOperation(n,i,e,s):i})}async function Kv(n,e,t=!1){const s=await Cs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Nn._forOperation(n,"link",s)}/**
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
 */async function Qv(n,e,t=!1){const{auth:s}=n;if(Le(s.app))return Promise.reject(Vt(s));const r="reauthenticate";try{const i=await Cs(n,kd(s,r,e,n),t);B(i.idToken,s,"internal-error");const a=Sa(i.idToken);B(a,s,"internal-error");const{sub:c}=a;return B(n.uid===c,s,"user-mismatch"),Nn._forOperation(n,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&ct(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yv(n,e,t=!1){if(Le(n.app))return Promise.reject(Vt(n));const s="signIn",r=await kd(n,s,e),i=await Nn._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}function Xv(n,e,t,s){return He(n).onIdTokenChanged(e,t,s)}function Jv(n,e,t){return He(n).beforeAuthStateChanged(e,t)}function Zv(n,e,t,s){return He(n).onAuthStateChanged(e,t,s)}function ew(n){return He(n).signOut()}const Gr="__sak";/**
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
 */class Dd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Gr,"1"),this.storage.removeItem(Gr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=1e3,nw=10;class Vd extends Dd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);Ov()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,nw):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},tw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vd.type="LOCAL";const sw=Vd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd extends Dd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xd.type="SESSION";const Ld=xd;/**
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
 */function rw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ui{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new ui(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await rw(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ui.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class iw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=Ca("",20);r.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(_){const g=_;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function ow(n){rt().location.href=n}/**
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
 */function Fd(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function aw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cw(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function lw(){return Fd()?self:null}/**
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
 */const Ud="firebaseLocalStorageDb",uw=1,Kr="firebaseLocalStorage",jd="fbase_key";class Bs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function hi(n,e){return n.transaction([Kr],e?"readwrite":"readonly").objectStore(Kr)}function hw(){const n=indexedDB.deleteDatabase(Ud);return new Bs(n).toPromise()}function No(){const n=indexedDB.open(Ud,uw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Kr,{keyPath:jd})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Kr)?e(s):(s.close(),await hw(),e(await No()))})})}async function su(n,e,t){const s=hi(n,!0).put({[jd]:e,value:t});return new Bs(s).toPromise()}async function dw(n,e){const t=hi(n,!1).get(e),s=await new Bs(t).toPromise();return s===void 0?null:s.value}function ru(n,e){const t=hi(n,!0).delete(e);return new Bs(t).toPromise()}const fw=800,pw=3;class Bd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await No(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>pw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ui._getInstance(lw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await aw(),!this.activeServiceWorker)return;this.sender=new iw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await No();return await su(e,Gr,"1"),await ru(e,Gr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>su(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>dw(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ru(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=hi(r,!1).getAll();return new Bs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bd.type="LOCAL";const mw=Bd;new Us(3e4,6e4);/**
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
 */function Pa(n,e){return e?pt(e):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Na extends Od{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Tn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function gw(n){return Yv(n.auth,new Na(n),n.bypassAuthState)}function _w(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),Qv(t,new Na(n),n.bypassAuthState)}async function yw(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),Kv(t,new Na(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gw;case"linkViaPopup":case"linkViaRedirect":return yw;case"reauthViaPopup":case"reauthViaRedirect":return _w;default:ct(this.auth,"internal-error")}}resolve(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=new Us(2e3,1e4);async function ww(n,e,t){if(Le(n.app))return Promise.reject(Xe(n,"operation-not-supported-in-this-environment"));const s=Bn(n);gd(n,e,li);const r=Pa(s,t);return new Yt(s,"signInViaPopup",e,r).executeNotNull()}class Yt extends $d{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Yt.currentPopupAction&&Yt.currentPopupAction.cancel(),Yt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const e=Ca();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vw.get())};e()}}Yt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="pendingRedirect",Rr=new Map;class Tw extends $d{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Rr.get(this.auth._key());if(!e){try{const s=await Iw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Rr.set(this.auth._key(),e)}return this.bypassAuthState||Rr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Iw(n,e){const t=Hd(e),s=qd(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}async function Aw(n,e){return qd(n)._set(Hd(e),"true")}function Sw(n,e){Rr.set(n._key(),e)}function qd(n){return pt(n._redirectPersistence)}function Hd(n){return Sr(Ew,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(n,e,t){return bw(n,e,t)}async function bw(n,e,t){if(Le(n.app))return Promise.reject(Vt(n));const s=Bn(n);gd(n,e,li),await s._initializationPromise;const r=Pa(s,t);return await Aw(r,s),r._openRedirect(s,e,"signInViaRedirect")}async function Cw(n,e){return await Bn(n)._initializationPromise,Wd(n,e,!1)}async function Wd(n,e,t=!1){if(Le(n.app))return Promise.reject(Vt(n));const s=Bn(n),r=Pa(s,e),a=await new Tw(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=10*60*1e3;class Nw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!zd(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Xe(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pw&&this.cachedEventUids.clear(),this.cachedEventUids.has(iu(e))}saveEventToCache(e){this.cachedEventUids.add(iu(e)),this.lastProcessedEventTime=Date.now()}}function iu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function zd({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Mw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ow(n,e={}){return jn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Dw=/^https?/;async function Vw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ow(n);for(const t of e)try{if(xw(t))return}catch{}ct(n,"unauthorized-domain")}function xw(n){const e=Co(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!Dw.test(t))return!1;if(kw.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Lw=new Us(3e4,6e4);function ou(){const n=rt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Fw(n){return new Promise((e,t)=>{var s,r,i;function a(){ou(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ou(),t(Xe(n,"network-request-failed"))},timeout:Lw.get()})}if(!((r=(s=rt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=rt().gapi)===null||i===void 0)&&i.load)a();else{const c=Bv("iframefcb");return rt()[c]=()=>{gapi.load?a():t(Xe(n,"network-request-failed"))},Uv(`${jv()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw br=null,e})}let br=null;function Uw(n){return br=br||Fw(n),br}/**
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
 */const jw=new Us(5e3,15e3),Bw="__/auth/iframe",$w="emulator/auth/iframe",qw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ww(n){const e=n.config;B(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ia(e,$w):`https://${n.config.authDomain}/${Bw}`,s={apiKey:e.apiKey,appName:n.name,v:Vn},r=Hw.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${ks(s).slice(1)}`}async function zw(n){const e=await Uw(n),t=rt().gapi;return B(t,n,"internal-error"),e.open({where:document.body,url:Ww(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qw,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=Xe(n,"network-request-failed"),c=rt().setTimeout(()=>{i(a)},jw.get());function u(){rt().clearTimeout(c),r(s)}s.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const Gw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kw=500,Qw=600,Yw="_blank",Xw="http://localhost";class au{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jw(n,e,t,s=Kw,r=Qw){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Gw),{width:s.toString(),height:r.toString(),top:i,left:a}),d=Ce().toLowerCase();t&&(c=Ad(d)?Yw:t),Td(d)&&(e=e||Xw,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[A,P])=>`${g}${A}=${P},`,"");if(Mv(d)&&c!=="_self")return Zw(e||"",c),new au(null);const _=window.open(e||"",c,f);B(_,n,"popup-blocked");try{_.focus()}catch{}return new au(_)}function Zw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const eE="__/auth/handler",tE="emulator/auth/handler",nE=encodeURIComponent("fac");async function cu(n,e,t,s,r,i){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Vn,eventId:r};if(e instanceof li){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Dp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,_]of Object.entries({}))a[f]=_}if(e instanceof js){const f=e.getScopes().filter(_=>_!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),d=u?`#${nE}=${encodeURIComponent(u)}`:"";return`${sE(n)}?${ks(c).slice(1)}${d}`}function sE({config:n}){return n.emulator?Ia(n,tE):`https://${n.authDomain}/${eE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi="webStorageSupport";class rE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ld,this._completeRedirectFn=Wd,this._overrideRedirectResult=Sw}async _openPopup(e,t,s,r){var i;vt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await cu(e,t,s,Co(),r);return Jw(e,a,Ca())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await cu(e,t,s,Co(),r);return ow(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(vt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await zw(e),s=new Nw(e);return t.register("authEvent",r=>(B(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qi,{type:Qi},r=>{var i;const a=(i=r?.[0])===null||i===void 0?void 0:i[Qi];a!==void 0&&t(!!a),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Vw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Pd()||Id()||Ra()}}const iE=rE;var lu="@firebase/auth",uu="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cE(n){An(new Zt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nd(n)},d=new Lv(s,r,i,u);return qv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),An(new Zt("auth-internal",e=>{const t=Bn(e.getProvider("auth").getImmediate());return(s=>new oE(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(lu,uu,aE(n)),Ot(lu,uu,"esm2017")}/**
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
 */const lE=5*60,uE=Nu("authIdTokenMaxAge")||lE;let hu=null;const hE=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>uE)return;const r=t?.token;hu!==r&&(hu=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function dE(n=xu()){const e=$o(n,"auth");if(e.isInitialized())return e.getImmediate();const t=$v(n,{popupRedirectResolver:iE,persistence:[mw,sw,Ld]}),s=Nu("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=hE(i.toString());Jv(t,a,()=>a(t.currentUser)),Xv(t,c=>a(c))}}const r=Cu("auth");return r&&Hv(t,`http://${r}`),t}function fE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Fv({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=Xe("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",fE().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cE("Browser");const pE={apiKey:"AIzaSyCmmMBXWcWmljEO9lWGK7VNqrvNI3Zu1bI",authDomain:"chess-openings-7a1b2.firebaseapp.com",projectId:"chess-openings-7a1b2",storageBucket:"chess-openings-7a1b2.firebasestorage.app",messagingSenderId:"800214788543",appId:"1:800214788543:web:85b95d62fd65068180d90a"},Gd=Vu(pE),Kd=Ky(Gd),sn=dE(Gd),Qd=new dt,Mn=new Kt(null),Ma=new Kt(!1),DT=new Promise(n=>{Ma.link(e=>{e&&n()})}),VT=new Promise(n=>{Mn.link(e=>{e&&n(e)})});Zv(sn,n=>{n?Mn.value=n:Mn.value=null,Ma.value=!0});(async()=>{const n=await mE();n&&(Mn.value=n,Ma.value=!0)})();async function xT(){console.log(`current user ${sn.currentUser}`);const n=await ww(sn,Qd);return console.log("User signed in:",n.user),console.log("User ID (uid):",n.user.uid),n.user}async function LT(){console.log(`current user ${sn.currentUser}`),await Rw(sn,Qd)}async function mE(){const n=await Cw(sn);return n?(console.log("User signed in:",n.user),console.log("User ID (uid):",n.user.uid),n.user):(console.log("No user signed in."),null)}async function FT(){try{await ew(sn),console.log("User logged out")}catch(n){console.error("Error logging out:",n)}}async function Yd(n,e){await uv(sd(Kd,"users",n),{state:e}),console.log("User state saved successfully!")}async function UT(n){const e=await cv(sd(Kd,"users",n));return e.exists()?(console.log("User state:",e.data().state),e.data().state):(console.log("No user state found."),null)}window.manualSave=async n=>{await Yd(Mn.value.uid,n)};const qe=(n,e)=>{const t=new Iu.Position(n);if(!t.play(e))throw new Error(`Invalid move: ${e} at position ${n}`);return t.fen()},jT=Object.freeze(Object.defineProperty({__proto__:null,getFenAfterMove:qe},Symbol.toStringTag,{value:"Module"})),je=n=>n.split(" ")[1]==="w",BT=Object.freeze(Object.defineProperty({__proto__:null,isFenWhiteToMove:je},Symbol.toStringTag,{value:"Module"})),Xd=n=>`${n.split(" ").slice(0,-2).join(" ")} 0 1`,$T=Object.freeze(Object.defineProperty({__proto__:null,sanitizeFen:Xd},Symbol.toStringTag,{value:"Module"})),Jd=n=>Xd(n.fen()),qT=Object.freeze(Object.defineProperty({__proto__:null,getFen:Jd},Symbol.toStringTag,{value:"Module"})),oe=Jd(new kn),HT=Object.freeze(Object.defineProperty({__proto__:null,initialFen:oe},Symbol.toStringTag,{value:"Module"})),di=n=>{const e=new Iu.Position(n);return e.moves().map(t=>e.notation(t))},WT=Object.freeze(Object.defineProperty({__proto__:null,getFenMoves:di},Symbol.toStringTag,{value:"Module"})),Yi=n=>n.state==="openingExplore",gE=n=>n.state==="endgameExplore",_E=n=>n.state==="openingReviewUserMove",yE=n=>n.state==="openingReviewAutoMovePending",vE=n=>n.state==="endgameReviewUserMove",wE=n=>n.state==="endgameReviewAutoMovePending",ze=n=>"isOpening"in n&&n.isOpening,On=n=>"isEndgame"in n&&n.isEndgame,xe=n=>"isReviewing"in n&&n.isReviewing,Mo=n=>"isPendingAutoMove"in n&&n.isPendingAutoMove,Zd=n=>ze(n)&&xe(n),zT=n=>xe(n)&&!!n.previousChessNode&&!!n.previousFen,Ps=n=>({repository:n.repository,isWhite:n.isWhite,fen:n.fen,stack:n.stack,stackPosition:n.stackPosition,chessNode:n.chessNode,failedMoves:n.failedMoves}),du=n=>({isEndgame:n.isEndgame,baseFen:n.baseFen}),fr=n=>({isReviewing:n.isReviewing,previousChessNode:n.previousChessNode,previousHistory:n.previousHistory,previousBaseFen:n.previousBaseFen,previousFen:n.previousFen,previousGrade:n.previousGrade,previousWasCramming:n.previousWasCramming,previousFailedReview:n.previousFailedReview,nextFailedReview:n.nextFailedReview,nextTimestampStart:n.nextTimestampStart,prefix:n.prefix,statistics:n.statistics}),EE=n=>({isReviewing:n.isReviewing,previousChessNode:n.previousChessNode,previousHistory:n.previousHistory,previousBaseFen:n.previousBaseFen,previousFen:n.previousFen,previousGrade:n.previousGrade,previousWasCramming:n.previousWasCramming,previousFailedReview:n.previousFailedReview,nextFailedReview:n.nextFailedReview,nextTimestampStart:n.nextTimestampStart,prefix:n.prefix}),fu=n=>({isOpening:n.isOpening,isReviewing:n.isReviewing,initialHistory:n.initialHistory,targetHistory:n.targetHistory}),Oo=n=>On(n)?n.baseFen:oe,Xi=n=>n.stack.slice(0,n.stackPosition).map(e=>e.move),ko=(n,e)=>{const t=je(e);return On(n)&&(e=it(e)),n.repository.getChessNode(e,t===n.isWhite)},ef=n=>n.stackPosition===0?null:n.stack[n.stackPosition-1],pr=n=>{const e=ef(n),t=e?e.fen:On(n)?n.baseFen:oe;return ko(n,t)},GT=n=>{const e=ef(n);return e?e.fenBeforeMove:null},TE=n=>n.stack.slice(0,n.stackPosition).map(e=>e.move),Ji=(n,e,t)=>{const s=qe(n.fen,e);let r=null;if(n.chessNode){const a=n.chessNode.isOpening?e:so(n.fen,e);n.chessNode.moveMap[a]&&(r=n.chessNode.moveMap[a])}r||(r=n.repository.getChessNode(t?s:it(s),je(s)===n.isWhite)??null);const i=!n.stack[n.stackPosition]||n.stack[n.stackPosition].move!==e;return{...Ps(n),fen:s,stack:i?[...n.stack.slice(0,n.stackPosition),{fen:s,fenBeforeMove:n.fen,move:e}]:n.stack,stackPosition:n.stackPosition+1,chessNode:r,failedMoves:[]}},pn=(n,e)=>{let t;if(e===0)t=Oo(n);else{const r=n.stack[e-1].fenBeforeMove,i=n.stack[e-1].move;t=qe(r,i)}const s=n.repository.getChessNode(t,je(t)===n.isWhite)??null;return{...Ps(n),fen:t,stackPosition:e,chessNode:s,failedMoves:[]}},IE=n=>{const e=!n.isWhite,t=n.repository.getChessNode(n.fen,je(n.fen)===e)??null;return{...Ps(n),isWhite:e,chessNode:t,failedMoves:[]}},pu=(n,e)=>{const t=n.getInitialChessNode(e)??null;return{repository:n,isWhite:e,fen:oe,stack:[],stackPosition:0,chessNode:t,failedMoves:[]}},mu=(n,e)=>({repository:n,isWhite:!0,fen:e,stack:[],stackPosition:0,chessNode:n.getChessNode(it(e),!0)??null,failedMoves:[]}),gu=(n,e)=>({isReviewing:!0,previousChessNode:null,previousHistory:null,previousBaseFen:null,previousFen:null,previousGrade:null,previousWasCramming:!1,previousFailedReview:!1,nextFailedReview:!1,nextTimestampStart:Date.now(),prefix:n,statistics:e}),mr=()=>({isOpening:!0}),Zi=n=>({isEndgame:!0,baseFen:n}),AE=n=>{if(!n.repository)throw new Error("State is missing repository");if(typeof n.isWhite!="boolean")throw new Error("State is missing isWhite");if(typeof n.fen!="string")throw new Error("State is missing fen");const e=di(n.fen);if(!Array.isArray(n.stack))throw new Error("State stack is not an array");if(n.chessNode){if(n.chessNode.isOpening){if(n.chessNode.fen!==n.fen)throw new Error(`State chessNode fen ${n.chessNode.fen} does not match state fen ${n.fen}`)}else if(n.chessNode.fen!==it(n.fen))throw new Error(`State chessNode fen ${n.chessNode.fen} does not match canonical fen ${it(n.fen)} for state fen ${n.fen}`);const t=je(n.fen),s=n.isWhite,r=n.chessNode.isUserMove,i=t===s;if(r!==i)throw new Error(`State chessNode isUserMove ${r} does not match expected ${i} based on fen ${n.fen} and isWhite ${n.isWhite}`)}if(n.stack.forEach(t=>{if(typeof t.fen!="string")throw new Error("State stack entry is missing fen");if(typeof t.fenBeforeMove!="string")throw new Error("State stack entry is missing fenBeforeMove");if(typeof t.move!="string")throw new Error("State stack entry is missing move");if(qe(t.fenBeforeMove,t.move)!==t.fen)throw new Error(`State stack entry move does not match fens: ${t.move} from ${t.fenBeforeMove} should yield ${qe(t.fenBeforeMove,t.move)}, but got ${t.fen}`)}),typeof n.stackPosition!="number")throw new Error("State is missing stackPosition");if(n.stackPosition<0)throw new Error("State stackPosition is negative");if(n.stackPosition>n.stack.length)throw new Error("State stackPosition is greater than stack length");if(!Array.isArray(n.failedMoves))throw new Error("State failedMoves is not an array");n.failedMoves.forEach(t=>{if(!e.includes(t))throw new Error(`State failedMoves entry ${t} is not a legal move for fen ${n.fen}`)})},SE=n=>{if(typeof n.baseFen!="string")throw new Error("Endgame state is missing baseFen");if(n.baseFen===oe)throw new Error("Endgame state baseFen cannot be the initial fen")},RE=n=>{if(typeof n.pendingAutoMove!="string")throw new Error("Pending auto move state is missing pendingAutoMove");if(!di(n.fen).includes(n.pendingAutoMove))throw new Error(`Pending auto move ${n.pendingAutoMove} is not a legal move for fen ${n.fen}`)},bE=n=>{if(n.targetHistory.length<=n.initialHistory.length)throw new Error("Reviewing opening state targetHistory must be longer than initialHistory");let e=n.repository.getInitialChessNode(n.isWhite);if(!e)throw new Error(`Reviewing opening state could not find initial chess node for isWhite ${n.isWhite}`);for(let t=0;t<n.targetHistory.length;t++){const s=n.targetHistory[t];if(t<n.initialHistory.length){const r=n.initialHistory[t];if(s!==r)throw new Error(`Reviewing opening state targetHistory move ${s} does not match initialHistory move ${r} at index ${t}`)}if(e=e.moveMap[s],!e)throw new Error(`Reviewing opening state targetHistory move ${s} at index ${t} is not a legal move from the previous moves`)}},CE=n=>{if(!n.chessNode)throw new Error("Reviewing state is missing chessNode");if(n.previousChessNode===void 0)throw new Error("Reviewing state is missing previousChessNode");if(n.previousFen===void 0)throw new Error("Reviewing state is missing previousFen");if(n.previousHistory===void 0)throw new Error("Reviewing state is missing previousHistory");if(n.previousBaseFen===void 0)throw new Error("Reviewing state is missing previousBaseFen");if(n.previousGrade!==null&&typeof n.previousGrade!="number")throw new Error("Reviewing state previousGrade must be a number or null");if(typeof n.previousWasCramming!="boolean")throw new Error("Reviewing state is missing previousWasCramming");if(typeof n.previousFailedReview!="boolean")throw new Error("Reviewing state is missing previousFailedReview");if(typeof n.nextFailedReview!="boolean")throw new Error("Reviewing state is missing nextFailedReview");if(typeof n.nextTimestampStart!="number")throw new Error("Reviewing state is missing nextTimestampStart");if(n.prefix!==null&&typeof n.prefix!="object")throw new Error("Reviewing state prefix must be an object or null");if(typeof n.statistics!="object")throw new Error("Reviewing state is missing statistics")},PE=n=>{AE(n),On(n)&&SE(n),Mo(n)&&RE(n),Zd(n)&&bE(n),xe(n)&&CE(n)},NE=n=>50+50*(2/(1+Math.exp(-.00368208*n))-1),KT=(n,e)=>{const t=e?n.s:-n.s;return n.m==="mate"?t>=0?100:0:NE(t)},ME=(n,e)=>n.m==="mate"&&e.m==="mate"?0:n.m==="mate"?-1:e.m==="mate"?1:n.s===e.s?0:n.s>e.s?1:-1,_u=(n,e)=>ME(n,e)===-1,QT=(n,e)=>{const t=e?n.s:-n.s;return n.m==="mate"?t===0?"#":`#${t>0?Math.ceil(t/2):Math.floor(t/2)}`:t===0?"0":`${t>0?"+":""}${(t/100).toFixed(2)}`};var z=(n=>(n[n.New=0]="New",n[n.Learning=1]="Learning",n[n.Review=2]="Review",n[n.Relearning=3]="Relearning",n))(z||{}),k=(n=>(n[n.Manual=0]="Manual",n[n.Again=1]="Again",n[n.Hard=2]="Hard",n[n.Good=3]="Good",n[n.Easy=4]="Easy",n))(k||{});class q{static card(e){return{...e,state:q.state(e.state),due:q.time(e.due),last_review:e.last_review?q.time(e.last_review):void 0}}static rating(e){if(typeof e=="string"){const t=e.charAt(0).toUpperCase(),s=e.slice(1).toLowerCase(),r=k[`${t}${s}`];if(r===void 0)throw new Error(`Invalid rating:[${e}]`);return r}else if(typeof e=="number")return e;throw new Error(`Invalid rating:[${e}]`)}static state(e){if(typeof e=="string"){const t=e.charAt(0).toUpperCase(),s=e.slice(1).toLowerCase(),r=z[`${t}${s}`];if(r===void 0)throw new Error(`Invalid state:[${e}]`);return r}else if(typeof e=="number")return e;throw new Error(`Invalid state:[${e}]`)}static time(e){const t=new Date(e);if(typeof e=="object"&&e!==null&&!Number.isNaN(Date.parse(e)||+t))return t;if(typeof e=="string"){const s=Date.parse(e);if(Number.isNaN(s))throw new Error(`Invalid date:[${e}]`);return new Date(s)}else if(typeof e=="number")return new Date(e);throw new Error(`Invalid date:[${e}]`)}static review_log(e){return{...e,due:q.time(e.due),rating:q.rating(e.rating),state:q.state(e.state),review:q.time(e.review)}}}Date.prototype.scheduler=function(n,e){return Ge(this,n,e)};Date.prototype.diff=function(n,e){return In(this,n,e)};Date.prototype.format=function(){return OE(this)};Date.prototype.dueFormat=function(n,e,t){return kE(this,n,e,t)};function Ge(n,e,t){return new Date(t?q.time(n).getTime()+e*24*60*60*1e3:q.time(n).getTime()+e*60*1e3)}function In(n,e,t){if(!n||!e)throw new Error("Invalid date");const s=q.time(n).getTime()-q.time(e).getTime();let r=0;switch(t){case"days":r=Math.floor(s/(24*60*60*1e3));break;case"minutes":r=Math.floor(s/(60*1e3));break}return r}function OE(n){const e=q.time(n),t=e.getFullYear(),s=e.getMonth()+1,r=e.getDate(),i=e.getHours(),a=e.getMinutes(),c=e.getSeconds();return`${t}-${os(s)}-${os(r)} ${os(i)}:${os(a)}:${os(c)}`}function os(n){return n<10?`0${n}`:`${n}`}const eo=[60,60,24,31,12],to=["second","min","hour","day","month","year"];function kE(n,e,t,s=to){n=q.time(n),e=q.time(e),s.length!==to.length&&(s=to);let r=n.getTime()-e.getTime(),i=0;for(r/=1e3,i=0;i<eo.length&&!(r<eo[i]);i++)r/=eo[i];return`${Math.floor(r)}${t?s[i]:""}`}const DE=Object.freeze([k.Again,k.Hard,k.Good,k.Easy]),VE=[{start:2.5,end:7,factor:.15},{start:7,end:20,factor:.1},{start:20,end:1/0,factor:.05}];function xE(n,e,t){let s=1;for(const a of VE)s+=a.factor*Math.max(Math.min(n,a.end)-a.start,0);n=Math.min(n,t);let r=Math.max(2,Math.round(n-s));const i=Math.min(Math.round(n+s),t);return n>e&&(r=Math.max(r,e+1)),r=Math.min(r,i),{min_ivl:r,max_ivl:i}}function Oe(n,e,t){return Math.min(Math.max(n,e),t)}function LE(n,e){const t=Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()),s=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate());return Math.floor((s-t)/864e5)}const FE=n=>{const e=n.slice(-1),t=parseInt(n.slice(0,-1),10);if(Number.isNaN(t)||!Number.isFinite(t)||t<0)throw new Error(`Invalid step value: ${n}`);switch(e){case"m":return t;case"h":return t*60;case"d":return t*1440;default:throw new Error(`Invalid step unit: ${n}, expected m/h/d`)}},UE=(n,e,t)=>{const s=e===z.Relearning||e===z.Review?n.relearning_steps:n.learning_steps,r=s.length;if(r===0||t>=r)return{};const i=s[0],a=FE,c=()=>a(i),u=()=>{if(r===1)return Math.round(a(i)*1.5);const A=s[1];return Math.round((a(i)+a(A))/2)},d=A=>A<0||A>=r?null:s[A],f=A=>a(A),_={},g=d(Math.max(0,t));if(e===z.Review)return _[k.Again]={scheduled_minutes:a(g),next_step:0},_;{_[k.Again]={scheduled_minutes:c(),next_step:0},_[k.Hard]={scheduled_minutes:u(),next_step:t};const A=d(t+1);if(A){const P=f(A);P&&(_[k.Good]={scheduled_minutes:Math.round(P),next_step:t+1})}}return _};function jE(){const n=this.review_time.getTime(),e=this.current.reps,t=this.current.difficulty*this.current.stability;return`${n}_${e}_${t}`}var fi=(n=>(n.SCHEDULER="Scheduler",n.LEARNING_STEPS="LearningSteps",n.SEED="Seed",n))(fi||{});class tf{last;current;review_time;next=new Map;algorithm;strategies;elapsed_days=0;constructor(e,t,s,r){this.algorithm=s,this.last=q.card(e),this.current=q.card(e),this.review_time=q.time(t),this.strategies=r,this.init()}checkGrade(e){if(!Number.isFinite(e)||e<0||e>4)throw new Error(`Invalid grade "${e}",expected 1-4`)}init(){const{state:e,last_review:t}=this.current;let s=0;e!==z.New&&t&&(s=LE(t,this.review_time)),this.current.last_review=this.review_time,this.elapsed_days=s,this.current.elapsed_days=s,this.current.reps+=1;let r=jE;if(this.strategies){const i=this.strategies.get(fi.SEED);i&&(r=i)}this.algorithm.seed=r.call(this)}preview(){return{[k.Again]:this.review(k.Again),[k.Hard]:this.review(k.Hard),[k.Good]:this.review(k.Good),[k.Easy]:this.review(k.Easy),[Symbol.iterator]:this.previewIterator.bind(this)}}*previewIterator(){for(const e of DE)yield this.review(e)}review(e){const{state:t}=this.last;let s;switch(this.checkGrade(e),t){case z.New:s=this.newState(e);break;case z.Learning:case z.Relearning:s=this.learningState(e);break;case z.Review:s=this.reviewState(e);break}return s}buildLog(e){const{last_review:t,due:s,elapsed_days:r}=this.last;return{rating:e,state:this.current.state,due:t||s,stability:this.current.stability,difficulty:this.current.difficulty,elapsed_days:this.elapsed_days,last_elapsed_days:r,scheduled_days:this.current.scheduled_days,learning_steps:this.current.learning_steps,review:this.review_time}}}class BE{c;s0;s1;s2;constructor(e){const t=$E();this.c=1,this.s0=t(" "),this.s1=t(" "),this.s2=t(" "),e==null&&(e=Date.now()),this.s0-=t(e),this.s0<0&&(this.s0+=1),this.s1-=t(e),this.s1<0&&(this.s1+=1),this.s2-=t(e),this.s2<0&&(this.s2+=1)}next(){const e=2091639*this.s0+this.c*23283064365386963e-26;return this.s0=this.s1,this.s1=this.s2,this.c=e|0,this.s2=e-this.c,this.s2}set state(e){this.c=e.c,this.s0=e.s0,this.s1=e.s1,this.s2=e.s2}get state(){return{c:this.c,s0:this.s0,s1:this.s1,s2:this.s2}}}function $E(){let n=4022871197;return function(t){t=String(t);for(let s=0;s<t.length;s++){n+=t.charCodeAt(s);let r=.02519603282416938*n;n=r>>>0,r-=n,r*=n,n=r>>>0,r-=n,n+=r*4294967296}return(n>>>0)*23283064365386963e-26}}function qE(n){const e=new BE(n),t=()=>e.next();return t.int32=()=>e.next()*4294967296|0,t.double=()=>t()+(t()*2097152|0)*11102230246251565e-32,t.state=()=>e.state,t.importState=s=>(e.state=s,t),t}const HE=.9,WE=36500,zE=!1,pi=!0,GE=Object.freeze(["1m","10m"]),KE=Object.freeze(["10m"]),Ke=.001,gr=100,yu=.5,QE=.1542,vu=Object.freeze([.212,1.2931,2.3065,8.2956,6.4133,.8334,3.0194,.001,1.8722,.1666,.796,1.4835,.0614,.2629,1.6483,.6014,1.8729,.5425,.0912,.0658,QE]),YE=2,XE=(n,e=pi)=>[[Ke,gr],[Ke,gr],[Ke,gr],[Ke,gr],[1,10],[.001,4],[.001,4],[.001,.75],[0,4.5],[0,.8],[.001,3.5],[.001,5],[.001,.25],[.001,.9],[0,4],[0,1],[1,6],[0,n],[0,n],[e?.01:0,.8],[.1,.8]],no=(n,e,t=pi)=>{let s=YE;if(Math.max(0,e)>1){const i=-(Math.log(n[11])+Math.log(Math.pow(2,n[13])-1)+n[14]*.3)/e;s=Oe(+i.toFixed(8),.01,2)}return XE(s,t).slice(0,n.length).map(([i,a],c)=>Oe(n[c]||0,i,a))},Oa=(n,e=0,t=pi)=>{if(n===void 0)return[...vu];switch(n.length){case 21:return no(Array.from(n),e,t);case 19:return console.debug("[FSRS-6]auto fill w from 19 to 21 length"),no(Array.from(n),e,t).concat([0,yu]);case 17:{const s=no(Array.from(n),e,t);return s[4]=+(s[5]*2+s[4]).toFixed(8),s[5]=+(Math.log(s[5]*3+1)/3).toFixed(8),s[6]=+(s[6]+.5).toFixed(8),console.debug("[FSRS-6]auto fill w from 17 to 21 length"),s.concat([0,0,0,yu])}default:return console.warn("[FSRS]Invalid parameters length, using default parameters"),[...vu]}},Do=n=>{const e=Array.isArray(n?.learning_steps)?n.learning_steps:GE,t=Array.isArray(n?.relearning_steps)?n.relearning_steps:KE,s=n?.enable_short_term??pi,r=Oa(n?.w,t.length,s);return{request_retention:n?.request_retention||HE,maximum_interval:n?.maximum_interval||WE,w:r,enable_fuzz:n?.enable_fuzz??zE,enable_short_term:s,learning_steps:e,relearning_steps:t}};function Qr(n,e){return{due:n?q.time(n):new Date,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:0,lapses:0,learning_steps:0,state:z.New,last_review:void 0}}const ka=n=>{const e=typeof n=="number"?-n:-n[20],t=Math.exp(Math.pow(e,-1)*Math.log(.9))-1;return{decay:e,factor:+t.toFixed(8)}};function Vo(n,e,t){const{decay:s,factor:r}=ka(n);return+Math.pow(1+r*e/t,s).toFixed(8)}class JE{param;intervalModifier;_seed;constructor(e){this.param=new Proxy(Do(e),this.params_handler_proxy()),this.intervalModifier=this.calculate_interval_modifier(this.param.request_retention),this.forgetting_curve=Vo.bind(this,this.param.w)}get interval_modifier(){return this.intervalModifier}set seed(e){this._seed=e}calculate_interval_modifier(e){if(e<=0||e>1)throw new Error("Requested retention rate should be in the range (0,1]");const{decay:t,factor:s}=ka(this.param.w);return+((Math.pow(e,1/t)-1)/s).toFixed(8)}get parameters(){return this.param}set parameters(e){this.update_parameters(e)}params_handler_proxy(){const e=this;return{set:function(t,s,r){return s==="request_retention"&&Number.isFinite(r)?e.intervalModifier=e.calculate_interval_modifier(Number(r)):s==="w"&&(r=Oa(r,t.relearning_steps.length,t.enable_short_term),e.forgetting_curve=Vo.bind(this,r),e.intervalModifier=e.calculate_interval_modifier(Number(t.request_retention))),Reflect.set(t,s,r),!0}}}update_parameters(e){const t=Do(e);for(const s in t){const r=s;this.param[r]=t[r]}}init_stability(e){return Math.max(this.param.w[e-1],.1)}init_difficulty(e){return+(this.param.w[4]-Math.exp((e-1)*this.param.w[5])+1).toFixed(8)}apply_fuzz(e,t){if(!this.param.enable_fuzz||e<2.5)return Math.round(e);const r=qE(this._seed)(),{min_ivl:i,max_ivl:a}=xE(e,t,this.param.maximum_interval);return Math.floor(r*(a-i+1)+i)}next_interval(e,t){const s=Math.min(Math.max(1,Math.round(e*this.intervalModifier)),this.param.maximum_interval);return this.apply_fuzz(s,t)}linear_damping(e,t){return+(e*(10-t)/9).toFixed(8)}next_difficulty(e,t){const s=-this.param.w[6]*(t-3),r=e+this.linear_damping(s,e);return Oe(this.mean_reversion(this.init_difficulty(k.Easy),r),1,10)}mean_reversion(e,t){return+(this.param.w[7]*e+(1-this.param.w[7])*t).toFixed(8)}next_recall_stability(e,t,s,r){const i=k.Hard===r?this.param.w[15]:1,a=k.Easy===r?this.param.w[16]:1;return+Oe(t*(1+Math.exp(this.param.w[8])*(11-e)*Math.pow(t,-this.param.w[9])*(Math.exp((1-s)*this.param.w[10])-1)*i*a),Ke,36500).toFixed(8)}next_forget_stability(e,t,s){return+Oe(this.param.w[11]*Math.pow(e,-this.param.w[12])*(Math.pow(t+1,this.param.w[13])-1)*Math.exp((1-s)*this.param.w[14]),Ke,36500).toFixed(8)}next_short_term_stability(e,t){const s=Math.pow(e,-this.param.w[19])*Math.exp(this.param.w[17]*(t-3+this.param.w[18])),r=t>=3?Math.max(s,1):s;return+Oe(e*r,Ke,36500).toFixed(8)}forgetting_curve;next_state(e,t,s){const{difficulty:r,stability:i}=e??{difficulty:0,stability:0};if(t<0)throw new Error(`Invalid delta_t "${t}"`);if(s<0||s>4)throw new Error(`Invalid grade "${s}"`);if(r===0&&i===0)return{difficulty:Oe(this.init_difficulty(s),1,10),stability:this.init_stability(s)};if(s===0)return{difficulty:r,stability:i};if(r<1||i<Ke)throw new Error(`Invalid memory state { difficulty: ${r}, stability: ${i} }`);const a=this.forgetting_curve(t,i),c=this.next_recall_stability(r,i,a,s),u=this.next_forget_stability(r,i,a),d=this.next_short_term_stability(i,s);let f=c;if(s===1){let[g,A]=[0,0];this.param.enable_short_term&&(g=this.param.w[17],A=this.param.w[18]);const P=i/Math.exp(g*A);f=Oe(+P.toFixed(8),Ke,u)}return t===0&&this.param.enable_short_term&&(f=d),{difficulty:this.next_difficulty(r,s),stability:f}}}class wu extends tf{learningStepsStrategy;constructor(e,t,s,r){super(e,t,s,r);let i=UE;if(this.strategies){const a=this.strategies.get(fi.LEARNING_STEPS);a&&(i=a)}this.learningStepsStrategy=i}getLearningInfo(e,t){const s=this.algorithm.parameters;e.learning_steps=e.learning_steps||0;const r=this.learningStepsStrategy(s,e.state,(this.current.state===z.Learning&&t!==k.Again&&t!==k.Hard,e.learning_steps)),i=Math.max(0,r[t]?.scheduled_minutes??0),a=Math.max(0,r[t]?.next_step??0);return{scheduled_minutes:i,next_steps:a}}applyLearningSteps(e,t,s){const{scheduled_minutes:r,next_steps:i}=this.getLearningInfo(this.current,t);if(r>0&&r<1440)e.learning_steps=i,e.scheduled_days=0,e.state=s,e.due=Ge(this.review_time,Math.round(r),!1);else if(e.state=z.Review,r>=1440)e.learning_steps=i,e.due=Ge(this.review_time,Math.round(r),!1),e.scheduled_days=Math.floor(r/1440);else{e.learning_steps=0;const a=this.algorithm.next_interval(e.stability,this.elapsed_days);e.scheduled_days=a,e.due=Ge(this.review_time,a,!0)}}newState(e){const t=this.next.get(e);if(t)return t;const s=q.card(this.current);s.difficulty=Oe(this.algorithm.init_difficulty(e),1,10),s.stability=this.algorithm.init_stability(e),this.applyLearningSteps(s,e,z.Learning);const r={card:s,log:this.buildLog(e)};return this.next.set(e,r),r}learningState(e){const t=this.next.get(e);if(t)return t;const{state:s,difficulty:r,stability:i}=this.last,a=q.card(this.current);a.difficulty=this.algorithm.next_difficulty(r,e),a.stability=this.algorithm.next_short_term_stability(i,e),this.applyLearningSteps(a,e,s);const c={card:a,log:this.buildLog(e)};return this.next.set(e,c),c}reviewState(e){const t=this.next.get(e);if(t)return t;const s=this.elapsed_days,{difficulty:r,stability:i}=this.last,a=this.algorithm.forgetting_curve(s,i),c=q.card(this.current),u=q.card(this.current),d=q.card(this.current),f=q.card(this.current);this.next_ds(c,u,d,f,r,i,a),this.next_interval(u,d,f,s),this.next_state(u,d,f),this.applyLearningSteps(c,k.Again,z.Relearning),c.lapses+=1;const _={card:c,log:this.buildLog(k.Again)},g={card:u,log:super.buildLog(k.Hard)},A={card:d,log:super.buildLog(k.Good)},P={card:f,log:super.buildLog(k.Easy)};return this.next.set(k.Again,_),this.next.set(k.Hard,g),this.next.set(k.Good,A),this.next.set(k.Easy,P),this.next.get(e)}next_ds(e,t,s,r,i,a,c){e.difficulty=this.algorithm.next_difficulty(i,k.Again);const u=a/Math.exp(this.algorithm.parameters.w[17]*this.algorithm.parameters.w[18]),d=this.algorithm.next_forget_stability(i,a,c);e.stability=Oe(+u.toFixed(8),Ke,d),t.difficulty=this.algorithm.next_difficulty(i,k.Hard),t.stability=this.algorithm.next_recall_stability(i,a,c,k.Hard),s.difficulty=this.algorithm.next_difficulty(i,k.Good),s.stability=this.algorithm.next_recall_stability(i,a,c,k.Good),r.difficulty=this.algorithm.next_difficulty(i,k.Easy),r.stability=this.algorithm.next_recall_stability(i,a,c,k.Easy)}next_interval(e,t,s,r){let i,a;i=this.algorithm.next_interval(e.stability,r),a=this.algorithm.next_interval(t.stability,r),i=Math.min(i,a),a=Math.max(a,i+1);const c=Math.max(this.algorithm.next_interval(s.stability,r),a+1);e.scheduled_days=i,e.due=Ge(this.review_time,i,!0),t.scheduled_days=a,t.due=Ge(this.review_time,a,!0),s.scheduled_days=c,s.due=Ge(this.review_time,c,!0)}next_state(e,t,s){e.state=z.Review,e.learning_steps=0,t.state=z.Review,t.learning_steps=0,s.state=z.Review,s.learning_steps=0}}class Eu extends tf{newState(e){const t=this.next.get(e);if(t)return t;this.current.scheduled_days=0,this.current.elapsed_days=0;const s=q.card(this.current),r=q.card(this.current),i=q.card(this.current),a=q.card(this.current);return this.init_ds(s,r,i,a),this.next_interval(s,r,i,a,0),this.next_state(s,r,i,a),this.update_next(s,r,i,a),this.next.get(e)}init_ds(e,t,s,r){e.difficulty=Oe(this.algorithm.init_difficulty(k.Again),1,10),e.stability=this.algorithm.init_stability(k.Again),t.difficulty=Oe(this.algorithm.init_difficulty(k.Hard),1,10),t.stability=this.algorithm.init_stability(k.Hard),s.difficulty=Oe(this.algorithm.init_difficulty(k.Good),1,10),s.stability=this.algorithm.init_stability(k.Good),r.difficulty=Oe(this.algorithm.init_difficulty(k.Easy),1,10),r.stability=this.algorithm.init_stability(k.Easy)}learningState(e){return this.reviewState(e)}reviewState(e){const t=this.next.get(e);if(t)return t;const s=this.elapsed_days,{difficulty:r,stability:i}=this.last,a=this.algorithm.forgetting_curve(s,i),c=q.card(this.current),u=q.card(this.current),d=q.card(this.current),f=q.card(this.current);return this.next_ds(c,u,d,f,r,i,a),this.next_interval(c,u,d,f,s),this.next_state(c,u,d,f),c.lapses+=1,this.update_next(c,u,d,f),this.next.get(e)}next_ds(e,t,s,r,i,a,c){e.difficulty=this.algorithm.next_difficulty(i,k.Again);const u=this.algorithm.next_forget_stability(i,a,c);e.stability=Oe(a,Ke,u),t.difficulty=this.algorithm.next_difficulty(i,k.Hard),t.stability=this.algorithm.next_recall_stability(i,a,c,k.Hard),s.difficulty=this.algorithm.next_difficulty(i,k.Good),s.stability=this.algorithm.next_recall_stability(i,a,c,k.Good),r.difficulty=this.algorithm.next_difficulty(i,k.Easy),r.stability=this.algorithm.next_recall_stability(i,a,c,k.Easy)}next_interval(e,t,s,r,i){let a,c,u,d;a=this.algorithm.next_interval(e.stability,i),c=this.algorithm.next_interval(t.stability,i),u=this.algorithm.next_interval(s.stability,i),d=this.algorithm.next_interval(r.stability,i),a=Math.min(a,c),c=Math.max(c,a+1),u=Math.max(u,c+1),d=Math.max(d,u+1),e.scheduled_days=a,e.due=Ge(this.review_time,a,!0),t.scheduled_days=c,t.due=Ge(this.review_time,c,!0),s.scheduled_days=u,s.due=Ge(this.review_time,u,!0),r.scheduled_days=d,r.due=Ge(this.review_time,d,!0)}next_state(e,t,s,r){e.state=z.Review,e.learning_steps=0,t.state=z.Review,t.learning_steps=0,s.state=z.Review,s.learning_steps=0,r.state=z.Review,r.learning_steps=0}update_next(e,t,s,r){const i={card:e,log:this.buildLog(k.Again)},a={card:t,log:super.buildLog(k.Hard)},c={card:s,log:super.buildLog(k.Good)},u={card:r,log:super.buildLog(k.Easy)};this.next.set(k.Again,i),this.next.set(k.Hard,a),this.next.set(k.Good,c),this.next.set(k.Easy,u)}}class ZE{fsrs;constructor(e){this.fsrs=e}replay(e,t,s){return this.fsrs.next(e,t,s)}handleManualRating(e,t,s,r,i,a,c){if(typeof t>"u")throw new Error("reschedule: state is required for manual rating");let u,d;if(t===z.New)u={rating:k.Manual,state:t,due:c??s,stability:e.stability,difficulty:e.difficulty,elapsed_days:r,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:s},d=Qr(s),d.last_review=s;else{if(typeof c>"u")throw new Error("reschedule: due is required for manual rating");const f=In(c,s,"days");u={rating:k.Manual,state:e.state,due:e.last_review||e.due,stability:e.stability,difficulty:e.difficulty,elapsed_days:r,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:s},d={...e,state:t,due:c,last_review:s,stability:i||e.stability,difficulty:a||e.difficulty,elapsed_days:r,scheduled_days:f,reps:e.reps+1}}return{card:d,log:u}}reschedule(e,t){const s=[];let r=Qr(e.due);for(const i of t){let a;if(i.review=q.time(i.review),i.rating===k.Manual){let c=0;r.state!==z.New&&r.last_review&&(c=In(i.review,r.last_review,"days")),a=this.handleManualRating(r,i.state,i.review,c,i.stability,i.difficulty,i.due?q.time(i.due):void 0)}else a=this.replay(r,i.review,i.rating);s.push(a),r=a.card}return s}calculateManualRecord(e,t,s,r){if(!s)return null;const{card:i,log:a}=s,c=q.card(e);return c.due.getTime()===i.due.getTime()?null:(c.scheduled_days=In(i.due,c.due,"days"),this.handleManualRating(c,i.state,q.time(t),a.elapsed_days,r?i.stability:void 0,r?i.difficulty:void 0,i.due))}}let eT=class extends JE{strategyHandler=new Map;Scheduler;constructor(e){super(e);const{enable_short_term:t}=this.parameters;this.Scheduler=t?wu:Eu}params_handler_proxy(){const e=this;return{set:function(t,s,r){return s==="request_retention"&&Number.isFinite(r)?e.intervalModifier=e.calculate_interval_modifier(Number(r)):s==="enable_short_term"?e.Scheduler=r===!0?wu:Eu:s==="w"&&(r=Oa(r,t.relearning_steps.length,t.enable_short_term),e.forgetting_curve=Vo.bind(this,r),e.intervalModifier=e.calculate_interval_modifier(Number(t.request_retention))),Reflect.set(t,s,r),!0}}}useStrategy(e,t){return this.strategyHandler.set(e,t),this}clearStrategy(e){return e?this.strategyHandler.delete(e):this.strategyHandler.clear(),this}getScheduler(e,t){const r=this.strategyHandler.get(fi.SCHEDULER)||this.Scheduler;return new r(e,t,this,this.strategyHandler)}repeat(e,t,s){const i=this.getScheduler(e,t).preview();return s&&typeof s=="function"?s(i):i}next(e,t,s,r){const i=this.getScheduler(e,t),a=q.rating(s);if(a===k.Manual)throw new Error("Cannot review a manual rating");const c=i.review(a);return r&&typeof r=="function"?r(c):c}get_retrievability(e,t,s=!0){const r=q.card(e);t=t?q.time(t):new Date;const i=r.state!==z.New?Math.max(In(t,r.last_review,"days"),0):0,a=r.state!==z.New?this.forgetting_curve(i,+r.stability.toFixed(8)):0;return s?`${(a*100).toFixed(2)}%`:a}rollback(e,t,s){const r=q.card(e),i=q.review_log(t);if(i.rating===k.Manual)throw new Error("Cannot rollback a manual rating");let a,c,u;switch(i.state){case z.New:a=i.due,c=void 0,u=0;break;case z.Learning:case z.Relearning:case z.Review:a=i.review,c=i.due,u=r.lapses-(i.rating===k.Again&&i.state===z.Review?1:0);break}const d={...r,due:a,stability:i.stability,difficulty:i.difficulty,elapsed_days:i.last_elapsed_days,scheduled_days:i.scheduled_days,reps:Math.max(0,r.reps-1),lapses:Math.max(0,u),learning_steps:i.learning_steps,state:i.state,last_review:c};return s&&typeof s=="function"?s(d):d}forget(e,t,s=!1,r){const i=q.card(e);t=q.time(t);const a=i.state===z.New?0:In(t,i.due,"days"),c={rating:k.Manual,state:i.state,due:i.due,stability:i.stability,difficulty:i.difficulty,elapsed_days:0,last_elapsed_days:i.elapsed_days,scheduled_days:a,learning_steps:i.learning_steps,review:t},d={card:{...i,due:t,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:s?0:i.reps,lapses:s?0:i.lapses,learning_steps:0,state:z.New,last_review:i.last_review},log:c};return r&&typeof r=="function"?r(d):d}reschedule(e,t=[],s={}){const{recordLogHandler:r,reviewsOrderBy:i,skipManual:a=!0,now:c=new Date,update_memory_state:u=!1}=s;i&&typeof i=="function"&&t.sort(i),a&&(t=t.filter(P=>P.rating!==k.Manual));const d=new ZE(this),f=d.reschedule(s.first_card||Qr(),t),_=f.length,g=q.card(e),A=d.calculateManualRecord(g,c,_?f[_-1]:void 0,u);return r&&typeof r=="function"?{collections:f.map(r),reschedule_item:A?r(A):null}:{collections:f,reschedule_item:A}}};const tT=n=>new eT(n||{}),nf=(n,e,t)=>{t||(e?t=e.getSubtreeNodes():t=n.getAllChessNodes()),t=t.filter(a=>a.isNewLearnable());const s=t.filter(a=>a.isOpening),r=t.filter(a=>!a.isOpening);let i;if(s.length>0&&r.length>0)Math.random()<.8?(i=!0,t=s):(i=!1,t=r);else if(s.length)i=!0,t=s;else if(r.length)i=!1,t=r;else return null;if(i){t=$e.sortBy(t,a=>-a.totalFrequency);for(const a of t)if(a.hasNewLearnableOpeningTrail())return a;i=!1,t=r}if(t.length){let a=$e.sample(t);for(;a.parents.length===1&&a.parents[0].parents.length===1&&a.parents[0].parents[0].isNewLearnable();)a=a.parents[0].parents[0];return a}return null},sf=(n,e,t)=>{t||(e?t=e.getSubtreeNodes():t=n.getAllChessNodes());const s=new Date().getTime();return t.filter(r=>r.sequenceCard&&r.sequenceCard.isDue(s))},rf=(n,e,t)=>{if(t||(e?t=e.getSubtreeNodes():t=n.getAllChessNodes()),t=t.filter(r=>!!r.sequenceCard),t.length===0)return null;const s=new Date;return $e.minBy(t,r=>xa(r.sequenceCard.getSchedulingCard(),s))},Da=n=>n.length===0?null:$e.minBy(n,e=>e.sequenceCard.getJitteredReviewTime()),of=(n,e,t)=>{let s;e?s=e.getSubtreeNodes():s=n.getAllChessNodes();const r=sf(n,e,s),i=nf(n,e,s),a=t.mixNewCards?!!i&&Math.random()<1/(r.length+1):!1,c={chessNode:null,statistics:{newCardsDue:0,learningCardsDue:0,reviewCardsDue:0,relearningCardsDue:0,totalOpeningCards:0,totalEndgameCards:0,totalNewLearnableCards:0}},u=c.statistics;for(const d of r){const f=d.sequenceCard.getState();f===z.New?u.newCardsDue+=1:f===z.Learning?u.learningCardsDue+=1:f===z.Relearning?u.relearningCardsDue+=1:f===z.Review&&(u.reviewCardsDue+=1)}for(const d of s)d.sequenceCard?d.isOpening?u.totalOpeningCards+=1:u.totalEndgameCards+=1:d.isNewLearnable()&&(u.totalNewLearnableCards+=1);if(i&&(a||r.length===0))i.sequenceCard=Je.createEmptyCard(i,"sequence"),c.chessNode=i;else if(r.length)c.chessNode=Da(r);else{const d=rf(n,e,s);if(d)c.chessNode=d;else throw new Error("getNextFSRS: no new nodes, no due nodes, and no nodes to cram!")}return c},Va=Do({enable_fuzz:!0,enable_short_term:!0,learning_steps:["1m","10m","30m","1h","6h","12h"],relearning_steps:["10m","1h","6h"],request_retention:.94}),af=tT(Va),Cr=(n,e,t=new Date)=>af.next(n,t,e).card,xa=(n,e=new Date)=>{if(!n.last_review)return 0;if(!n.stability||n.stability<=0)throw new Error("Card must have positive stability");const t=1e3*60*60*24,s=Math.max(0,(e.getTime()-n.last_review.getTime())/t),{decay:r,factor:i}=ka(Va.w);return Math.pow(1+i*s/n.stability,r)},XT=Object.freeze(Object.defineProperty({__proto__:null,fsrsGenerator:af,fsrsGeneratorParameters:Va,getCardRetrievability:xa,getCramFSRSChessNode:rf,getDueFSRSChessNodes:sf,getNewFSRSChessNode:nf,getNextFSRS:of,getReviewedCard:Cr,selectDueFSRSChessNode:Da},Symbol.toStringTag,{value:"Module"}));class Je{constructor(e,t,s){this.card=e,this.node=t,this.type=s,this.temporaryCard=null,this.lastCard=null,this.lastReviewDate=null,this.isLastCardTemporary=!1}beforeReview(){this.lastReviewDate=new Date,this.isUsingTemporaryCard(this.lastReviewDate)?(this.temporaryCard||(this.temporaryCard=this.card),this.lastCard=this.temporaryCard,this.isLastCardTemporary=!0):(this.lastCard=this.card,this.isLastCardTemporary=!1)}review(e){if(!this.lastReviewDate||!this.lastCard)throw new Error("Cannot review without a last review date and card");this.isLastCardTemporary?this.temporaryCard=Cr(this.lastCard,e,this.lastReviewDate):(this.card=Cr(this.lastCard,e,this.lastReviewDate),this.temporaryCard=null)}getRereviewedCard(e){if(!this.lastReviewDate||!this.lastCard)throw new Error("Cannot review without a last review date and card");return Cr(this.lastCard,e,this.lastReviewDate)}getLastCard(){if(!this.lastCard)throw new Error("No last card available");return this.lastCard}wasLastCardTemporary(){return this.isLastCardTemporary}getSchedulingCard(){return this.isUsingTemporaryCard()?(this.temporaryCard||(this.temporaryCard=this.card),this.temporaryCard):this.card}isSolid(){const e=(this.card.due.getTime()-Date.now())/864e5;return this.card.reps>=20&&this.card.state===2&&e>1.5&&xa(this.card)>.999}isCardNew(){return this.card.state===z.New}isCardLearning(){return this.card.state===z.Learning}isCardLongReview(){return this.card.state===z.Review}isCardRelearning(){return this.card.state===z.Relearning}isCardUsingLearningSteps(){return this.isCardLearning()||this.isCardRelearning()}isUsingTemporaryCard(e=new Date){return e.getTime()<this.card.due.getTime()&&!this.isCardLongReview()}getState(){return this.card.state}getLearningStep(){return this.isCardUsingLearningSteps()?this.card.learning_steps:null}getJitteredReviewTime(){const e=12e5*Math.random();return this.card.due.getTime()+e}isDue(e=Date.now()){return this.card.due.getTime()<=e}isCramming(){return this.card.due.getTime()>Date.now()}hasEasyDefault(e){return!1}serialize(){return[this.card.difficulty,this.card.due.getTime(),this.card.elapsed_days,this.card.lapses,this.card.last_review?.getTime()??null,this.card.learning_steps,this.card.reps,this.card.scheduled_days,this.card.stability,this.card.state]}equalsOtherNode(e){return this.type===e.type&&this.serialize().every((t,s)=>t===e.serialize()[s])}static createEmptyCard(e,t){return new Je(Qr(new Date),e,t)}static deserialize(e,t,s){return new Je({difficulty:s[0],due:new Date(s[1]),elapsed_days:s[2],lapses:s[3],last_review:s[4]?new Date(s[4]):void 0,learning_steps:s[5],reps:s[6],scheduled_days:s[7],stability:s[8],state:s[9]},e,t)}}const JT=Object.freeze(Object.defineProperty({__proto__:null,NodeCard:Je},Symbol.toStringTag,{value:"Module"})),cf=n=>{const e=[],t=new kn,s=r=>r.promotion?r.from+r.to+r.promotion:r.from+r.to;for(const r of n){const i=t.move(r);e.push(s(i))}return encodeURIComponent(e.join(","))},ZT=Object.freeze(Object.defineProperty({__proto__:null,getLichessMovesString:cf},Symbol.toStringTag,{value:"Module"})),hs={},La={masters:"masters?variant=standard",blitzLow:"lichess?variant=standard&speeds=blitz&ratings=1400,1600,1800",blitzHigh:"lichess?variant=standard&speeds=blitz&ratings=2000,2200,2500",rapidLow:"lichess?variant=standard&speeds=rapid&ratings=1400,1600,1800",rapidHigh:"lichess?variant=standard&speeds=rapid&ratings=2000,2200,2500"},Fa=Object.keys(La),nT={blitzLow:"lichessExploreBlitzLow",blitzHigh:"lichessExploreBlitzHigh",masters:"lichessExploreMasters",rapidLow:"lichessExploreRapidLow",rapidHigh:"lichessExploreRapidHigh"},lf=async(n,e="blitzLow")=>{const t=n.join(",")+","+e;if(hs[t])return hs[t];const s=`https://explorer.lichess.ovh/${La[e]}&play=${cf(n)}&fen=rnbqkbnr%2Fpppppppp%2F8%2F8%2F8%2F8%2FPPPPPPPP%2FRNBQKBNR+w+KQkq+-+0+1&topGames=0&recentGames=0&moves=500`;try{const r=await fetch(s);try{hs[t]=r.json()}catch(i){throw console.error(`Error fetching lichess explore for ${t}:`,i),console.error(r.text()),i}}catch(r){throw console.error(`getLichessExplore failure ${t}:`,r),console.log(s),r}return hs[t]},sT=(n,e)=>{for(const t of e){if(!n||!n.m||!n.m[t])return null;n=n.m[t]}return n},xo=(n,e)=>n.m&&n.m[e]?n.m[e].d[0]+n.m[e].d[1]+n.m[e].d[2]:0,rT=(n,e,t)=>{const s=new kn;let r=1;for(let i=0;i<e.length;i++){const a=e[i];let c=0;if(n&&n.m){const u=n,d=Object.keys(n.m).reduce((f,_)=>f+xo(u,_),0);d>0&&(c=xo(n,a)/d)}t!==(s.turn()==="w")&&(r*=c),s.move(a),n=n?.m?.[a]??null}return r},uf=(n,e)=>{const t={d:n.d};if(n.m)if(e.m){const s=$e.uniq([...Object.keys(n.m),...Object.keys(e.m)]),r={};for(const i of s)n.m[i]&&e.m[i]?r[i]=uf(n.m[i],e.m[i]):n.m[i]?r[i]=n.m[i]:r[i]=e.m[i];t.m=r}else t.m=n.m;else e.m&&(t.m=e.m);return t},eI=Object.freeze(Object.defineProperty({__proto__:null,combineCompactLichessExplore:uf,getExploreHistoryProbability:rT,getExploreLookup:sT,getExploreMoveCount:xo,getLichessExplore:lf,lichessExplore:hs,lichessExploreTypeFileMap:nT,lichessExploreTypeMap:La,lichessExploreTypes:Fa},Symbol.toStringTag,{value:"Module"}));class Ve{constructor(e,t,s,r){if(this.fen=e,this.repository=t,this.isOpening=s,this.isUserMove=r,this.moves=[],this.name=null,this.sequenceCard=null,this.children=[],this.parents=[],this.moveMap={},this.pairedNode=null,this.cachedStockfishEntry=null,this.cachedExploreStatisticsMap=null,this.distribution=null,this.allDistribution=null,this.totalFrequency=null,!s&&e!==it(e))throw new Error("Endgame nodes must be created with canonical FENs");this.isWhite=je(e),e===oe&&(this.name="Initial Position"),this.allMoves=di(this.fen)}addMove(e){if(this.moves.includes(e))return this.moveMap[e];this.moves.push(e);let t=qe(this.fen,e);this.isOpening||(t=it(t));const s=this.repository.ensureChessNode(t,!this.isUserMove,this.isOpening);return Ve.connect(this,s,e),this.isUserMove&&this.moves.length>1&&this.sequenceCard&&(this.sequenceCard=null),s}setName(e){this.name=e,this.sequenceCard&&(this.sequenceCard=Je.createEmptyCard(this,"sequence")),this.pairedNode&&(this.pairedNode.name=e,this.pairedNode.sequenceCard&&(this.pairedNode.sequenceCard=Je.createEmptyCard(this.pairedNode,"sequence")))}deleteName(){this.name=null,this.pairedNode&&(this.pairedNode.name=null)}isLearnable(){return this.isUserMove&&(!this.isOpening||this.moves.length===1)}isNewLearnable(){return this.isLearnable()&&!this.sequenceCard}isOpeningOpponentForcedMove(){return this.isOpening&&!this.isUserMove&&this.moves.length===1&&(this.allDistribution?.[this.moves[0]]??0)>=.95}getMappedMoves(e){return this.isOpening?this.moves:this.moves.map(t=>ro(e,t))}getOnlyMove(){if(this.moves.length!==1)throw new Error("Node does not have exactly one move");return this.moves[0]}allowLearningBelow(){return this.isUserMove?!!this.sequenceCard||this.moves.length>1:!0}static isTrailLearnable(e){const t=e[e.length-1];return e.every(s=>s===t||s.allowLearningBelow())}getOpeningChildMove(e){if(!this.children.includes(e))throw new Error("Child not found");for(const t of Object.keys(this.moveMap))if(this.moveMap[t]===e)return t;throw new Error("Move not found")}getChildMoves(e){if(!this.children.includes(e))throw new Error("Child not found");const t=[];for(const s of Object.keys(this.moveMap))this.moveMap[s]===e&&t.push(s);return t}getChildNode(e){if(!this.moves.includes(e))throw new Error("Move not found");const t=this.moveMap[e];if(!t)throw new Error("Child node not found for move "+e);return t}isWhiteTurn(){return new kn(this.fen).turn()==="w"}getOpeningHistories(){return this.isOpening?this.parents.length===0?[[]]:this.parents.flatMap(e=>{const t=e.getOpeningChildMove(this);return e.getOpeningHistories().map(s=>[...s,t])}):[]}getOpeningTrails(){return this.isOpening?this.parents.length===0?[[this]]:this.parents.flatMap(e=>e.getOpeningTrails().map(t=>[...t,this])):[]}hasNewLearnableOpeningTrail(){if(!this.isOpening||!this.isNewLearnable())return!1;const e=t=>t.allowLearningBelow()?t.parents.length===0&&t.fen===oe?!0:t.parents.some(e):!1;return this.parents.some(e)}static getOpeningTrailFrequency(e){let t=1;for(let s=0;s<e.length-1;s++){const r=e[s];if(r.isUserMove){const i=e[s+1],a=r.getChildMoves(i);for(const c of a)t*=r.distribution[c]}}return t}static getOpeningHistoryFromTrail(e){if(e.length===0)throw new Error("Trail must have at least one node");const t=[];for(let s=0;s<e.length-1;s++){const r=e[s],i=e[s+1],a=r.getChildMoves(i);if(a.length!==1)throw new Error("There should be no symmetry causing move disambiguation");t.push(a[0])}return t}getOpeningMostPopularHistory(){if(!this.isOpening)return[];if(this.parents.length===0)return[];{const e=t=>{if(t.parents.length===0)return{history:[],frequency:1};let s=[],r=-1;for(const i of t.parents){const a=i.getChildMoves(t),c=e(i);for(const u of a){const d=c.frequency*(i.isUserMove?1:i.distribution[u]);d>r&&(r=d,s=[...c.history,u])}}return{history:s,frequency:r}};return e(this).history}}getSubtreeNodes(){const e=new Set,t=s=>{if(!e.has(s)){e.add(s);for(const r of s.children)t(r)}};return t(this),[...e]}getOpeningSubtreeStats(){if(!this.isOpening)throw new Error("getOpeningSubtreeStats can only be called on opening nodes");let e=0,t=0,s=0,r=0,i=0,a=0,c=null,u=null;const d=new Set,f=_=>{if(!d.has(_)){if(d.add(_),t++,_.isUserMove)e++,_.name===null&&(s++,_.totalFrequency>i&&(i=_.totalFrequency),_.parents.some(g=>g.moves.length>1)&&r++);else{for(const g of _.allMoves){if(_.moves.includes(g))continue;const A=_.allDistribution[g]*_.totalFrequency;A>a&&(a=A)}if(_.children.length===0){const g=_.cachedStockfishEntry;g!==null&&g!==1&&g!==2&&((c===null||_u(g,c))&&(c=g),(u===null||_u(u,g))&&(u=g))}}for(const g of _.children)f(g)}};return f(this),{userMoveNodeCount:e,nodeCount:t,unnamedUserMoveCount:s,unnamedNontrivialUserMoveCount:r,maxFrequencyUnnamedUserMoveCount:i,maxLeafFrequency:a,minLeafStockfishEntry:c,maxLeafStockfishEntry:u}}recomputeDistribution(){if(this.moves.length===0)this.distribution={};else if(this.moves.length===1)this.distribution={[this.moves[0]]:1};else if(this.cachedExploreStatisticsMap&&this.cachedExploreStatisticsMap!==1&&this.cachedExploreStatisticsMap!==2){this.distribution={};let t=0;for(const s of this.moves){let r=2;for(const i of Fa){const a=this.cachedExploreStatisticsMap[i];a&&(r+=a.getMixCount(s))}this.distribution[s]=r,t+=r}for(const s of this.moves)this.distribution[s]/=t}else{this.distribution={};for(const t of this.moves)this.distribution[t]=1/this.moves.length}const e=this.cachedExploreStatisticsMap&&this.cachedExploreStatisticsMap!==1&&this.cachedExploreStatisticsMap!==2&&this.cachedExploreStatisticsMap.rapidHigh&&this.cachedExploreStatisticsMap.rapidHigh.summary?this.cachedExploreStatisticsMap.rapidHigh:null;if(e)this.allDistribution=e.getDistribution();else{this.allDistribution={};for(const t of this.allMoves)this.allDistribution[t]=1/this.allMoves.length}}static connect(e,t,s){if(e.isUserMove===t.isUserMove)throw new Error("Cannot connect nodes with the same isUserMove value");e.children.includes(t)||e.children.push(t),t.parents.includes(e)||t.parents.push(e),e.moveMap[s]=t}static disconnect(e,t){const s=e.getChildMoves(t);for(const r of s)delete e.moveMap[r];e.moves=e.moves.filter(r=>!s.includes(r)),e.children=e.children.filter(r=>r!==t),t.parents=t.parents.filter(r=>r!==e)}static pair(e,t){if(e.fen!==t.fen)throw new Error("Cannot pair nodes with different FENs");if(e.isUserMove===t.isUserMove)throw new Error("Cannot pair nodes with the same isUserMove value");if(e.pairedNode=t,t.pairedNode=e,e.name==="Queen's Gambit Declined"&&t.name==="QGD"&&(t.name=e.name),e.name&&t.name&&e.name!==t.name)throw new Error("Cannot pair nodes with different names: "+e.name+" vs "+t.name);e.name&&!t.name?t.name=e.name:!e.name&&t.name&&(e.name=t.name)}static unpair(e,t){e.pairedNode=null,t.pairedNode=null}}var hf={exports:{}};(function(n,e){(function(t,s){s()})(is,function(){function t(d,f){return typeof f>"u"?f={autoBom:!1}:typeof f!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),f={autoBom:!f}),f.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(d.type)?new Blob(["\uFEFF",d],{type:d.type}):d}function s(d,f,_){var g=new XMLHttpRequest;g.open("GET",d),g.responseType="blob",g.onload=function(){u(g.response,f,_)},g.onerror=function(){console.error("could not download file")},g.send()}function r(d){var f=new XMLHttpRequest;f.open("HEAD",d,!1);try{f.send()}catch{}return 200<=f.status&&299>=f.status}function i(d){try{d.dispatchEvent(new MouseEvent("click"))}catch{var f=document.createEvent("MouseEvents");f.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),d.dispatchEvent(f)}}var a=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof is=="object"&&is.global===is?is:void 0,c=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=a.saveAs||(typeof window!="object"||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(d,f,_){var g=a.URL||a.webkitURL,A=document.createElement("a");f=f||d.name||"download",A.download=f,A.rel="noopener",typeof d=="string"?(A.href=d,A.origin===location.origin?i(A):r(A.href)?s(d,f,_):i(A,A.target="_blank")):(A.href=g.createObjectURL(d),setTimeout(function(){g.revokeObjectURL(A.href)},4e4),setTimeout(function(){i(A)},0))}:"msSaveOrOpenBlob"in navigator?function(d,f,_){if(f=f||d.name||"download",typeof d!="string")navigator.msSaveOrOpenBlob(t(d,_),f);else if(r(d))s(d,f,_);else{var g=document.createElement("a");g.href=d,g.target="_blank",setTimeout(function(){i(g)})}}:function(d,f,_,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),typeof d=="string")return s(d,f,_);var A=d.type==="application/octet-stream",P=/constructor/i.test(a.HTMLElement)||a.safari,D=/CriOS\/[\d]+/.test(navigator.userAgent);if((D||A&&P||c)&&typeof FileReader<"u"){var N=new FileReader;N.onloadend=function(){var H=N.result;H=D?H:H.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=H:location=H,g=null},N.readAsDataURL(d)}else{var G=a.URL||a.webkitURL,L=G.createObjectURL(d);g?g.location=L:location.href=L,g=null,setTimeout(function(){G.revokeObjectURL(L)},4e4)}});a.saveAs=u.saveAs=u,n.exports=u})})(hf);var iT=hf.exports;const df=n=>{let e="";for(let t=0;t<n.length;t++)t>0&&(e+=" "),t%2===0?e+=`${Math.floor(t/2)+1}. ${n[t]}`:e+=n[t];return e},tI=Object.freeze(Object.defineProperty({__proto__:null,getSimplePGN:df},Symbol.toStringTag,{value:"Module"}));class ff{constructor(e){if(this.userMoveMap={},this.nonUserMoveMap={},e)if(pf(e))console.log("loading old save state"),this.loadSaveState1(e);else if(mf(e))this.loadSaveState2(e);else throw new Error("invalid save state version");this.ensureChessNode(oe,!0,!0),this.ensureChessNode(oe,!1,!0);for(const t of this.getAllChessNodes()){if(t.isUserMove&&t.children.length===0&&t.fen!==oe)throw new Error(`User move node ${t.fen} has no children`);if(!t.isUserMove&&t.parents.length===0&&t.fen!==oe)throw new Error(`Non-user move node ${t.fen} has no parents and is not the initial position`)}}equals(e){if(Object.keys(this.userMoveMap).length!==Object.keys(e.userMoveMap).length)return console.log("userMoveMap length mismatch",Object.keys(this.userMoveMap).length,Object.keys(e.userMoveMap).length),!1;if(Object.keys(this.nonUserMoveMap).length!==Object.keys(e.nonUserMoveMap).length)return console.log("nonUserMoveMap length mismatch",Object.keys(this.nonUserMoveMap).length,Object.keys(e.nonUserMoveMap).length),!1;for(const t of[this.userMoveMap,this.nonUserMoveMap])for(const s of Object.values(t)){const r=e.getChessNode(s.fen,s.isUserMove);if(!r||s.fen!==r.fen||s.isUserMove!==r.isUserMove||s.name!==r.name||s.moves.length!==r.moves.length)return console.log("node mismatch",s,r),!1;if(s.sequenceCard===null!=(r.sequenceCard===null)||s.sequenceCard&&r.sequenceCard&&!s.sequenceCard.equalsOtherNode(r.sequenceCard))return!1;for(const i of s.moves){if(!r.moves.includes(i))return console.log("move mismatch",i,s.fen),!1;const a=s.moveMap[i],c=r.moveMap[i];if(!a||!c)return console.log("child node missing for move",i,s.fen),!1;if(a.fen!==c.fen)return console.log("child node fen mismatch",i,s.fen,a.fen,c.fen),!1}}return!0}getChessNode(e,t){return(t?this.userMoveMap:this.nonUserMoveMap)[e]??null}getInitialChessNode(e){const t=this.getChessNode(oe,e);if(!t)throw new Error(`No initial chess node for ${oe} ${e}`);return t}hasFen(e){return!!this.getChessNode(e,!0)||!!this.getChessNode(e,!1)}getAllChessNodes(){return[...Object.values(this.userMoveMap),...Object.values(this.nonUserMoveMap)]}getAllOpeningChessNodes(){return[...Object.values(this.userMoveMap).filter(e=>e.isOpening),...Object.values(this.nonUserMoveMap).filter(e=>e.isOpening)]}getAllOpeningChessNodesWithInitialColor(e){return[...Object.values(this.userMoveMap).filter(t=>t.isOpening&&t.isWhite===e),...Object.values(this.nonUserMoveMap).filter(t=>t.isOpening&&t.isWhite!==e)]}ensureChessNode(e,t,s){const r=this.getChessNode(e,t);if(r)return r;const i=new Ve(e,this,s,t);return this.addChessNode(i),i}addChessNode(e){const t=e.fen,s=e.isUserMove?this.userMoveMap:this.nonUserMoveMap;if(s[t]&&s[t]!==e)throw new Error(`Already have a different node for ${t} ${e.isUserMove}`);s[t]=e;const r=this.getChessNode(t,!e.isUserMove);r&&Ve.pair(e,r)}deleteChessNode(e){const t=e.fen,s=e.isUserMove?this.userMoveMap:this.nonUserMoveMap;if(s[t]!==e)throw new Error(`Trying to delete a node that doesn't exist or doesn't match for ${t} ${e.isUserMove}`);for(const r of e.parents)Ve.disconnect(r,e);for(const r of e.children)Ve.disconnect(e,r);delete s[t],e.pairedNode&&Ve.unpair(e,e.pairedNode)}connectNodes(){for(const e of[...Object.values(this.userMoveMap),...Object.values(this.nonUserMoveMap)])for(const t of e.moves){let s=qe(e.fen,t);e.isOpening||(s=it(s));const r=this.getChessNode(s,!e.isUserMove);if(!r)throw new Error(`No child node for ${s} after move ${t} from ${e.fen}`);Ve.connect(e,r,t)}}loadSaveState1(e){const t=(r,i)=>{const a=r.map(()=>"");a[0]=oe;const c=r.map(()=>!1);c[0]=i,r.forEach((u,d)=>{const f=a[d];if(!f)throw new Error("No fen?");const _=c[d];if(this.getChessNode(f,_))throw new Error(`duplicate ${d} ${f}`);const g=new Ve(f,this,!0,_);if(u.n&&(g.name=u.n),u.m)for(let A=0;A<u.m.length;A+=2){const P=u.m[A],D=u.m[A+1];if(g.moves.includes(P))throw new Error(`duplicate move ${P} ${f}`);g.moves.includes(P)||g.moves.push(P);const N=qe(f,P);if(a[D]&&a[D]!==N)throw new Error(`Fen mismatch? ${a[D]} vs ${N}`);a[D]=N,c[D]=!_}this.addChessNode(g)})};t(e.white,!0),t(e.black,!1),this.connectNodes();const s=["r1b2b1r/ppp2kpp/3p4/5qB1/8/2N2Q2/PPP2PPP/2KRR3 w - - 0 1"];for(const r of s){const i=this.getChessNode(r,!0);i&&this.deleteChessNode(i)}}loadSaveState2(e){const t=new Array(e.chessNodes.length).fill(null),s=new Array(e.chessNodes.length).fill(null),r=new Array(e.chessNodes.length).fill(null),i=new Array(e.chessNodes.length).fill(null);for(let a=0;a<e.chessNodes.length;a++){const c=e.chessNodes[a];let u;if(c.f){const f=!!c.u;u=new Ve(c.f,this,c.f===oe,f),s[a]=c.f,r[a]=f}else{const f=s[a];if(!f)throw new Error(`No fen for non-root node at index ${a}`);const _=r[a];if(_===null)throw new Error(`No isUserMove for non-root node at index ${a}`);const g=i[a];if(g===null)throw new Error(`No isOpening for non-root node at index ${a}`);u=new Ve(f,this,g,_)}t[a]=u;let d=u.fen;if(c.n&&(u.name=c.n),c.c&&(u.sequenceCard=Je.deserialize(u,"sequence",c.c)),c.m)for(let f=0;f<c.m.length;f+=2){const _=c.m[f],g=c.m[f+1];if(u.moves.includes(_))throw new Error(`duplicate move ${_} ${d}`);u.moves.push(_);let A=qe(d,_);if(u.isOpening||(A=it(A)),s[g]&&s[g]!==A)throw new Error(`Fen mismatch? ${s[g]} vs ${A}`);if(s[g]=A,r[g]!==null&&r[g]!==!u.isUserMove)throw new Error(`isUserMove mismatch for id ${g} at fen ${A}`);if(r[g]=!u.isUserMove,i[g]!==null&&i[g]!==u.isOpening)throw new Error(`isOpening mismatch for id ${g} at fen ${A}`);i[g]=u.isOpening}this.addChessNode(u)}for(let a=0;a<t.length;a++)if(!t[a])throw new Error(`No chess node at index ${a}`);this.connectNodes()}getSaveState(){const e={version:2,chessNodes:[]},t=[],s=this.getAllChessNodes();for(const c of s)c.serializationId=-1;let r=0;const a=[...s.filter(c=>c.parents.length===0)];for(;a.length;){const c=a.shift();c.serializationId===-1&&(c.serializationId=r++,t.push(c));for(const u of c.children)u.serializationId===-1&&a.push(u)}return e.chessNodes=t.map(c=>{const u={};return c.moves.length&&(u.m=$e.flatten(c.moves.map(d=>[d,c.moveMap[d].serializationId]))),c.name!==null&&(u.n=c.name),c.sequenceCard&&(u.c=c.sequenceCard.serialize()),c.parents.length===0&&(u.f=c.fen,u.u=c.isUserMove),u}),e}getOpeningHistoriesMap(e){const t=this.getChessNode(oe,e);if(!t)throw new Error(`No root node for ${oe} ${e}`);const s=new Map,r=(i,a)=>{let c=s.get(i);c||(c=[],s.set(i,c)),c.push(a);for(const u of i.moves){const d=i.moveMap[u];r(d,[...a,u])}};return r(t,[]),s}getChessNodeLookup(e,t){for(const s of t){if(!e||!e.moveMap[s])return null;e=e.moveMap[s]}return e}getOpeningNodesLookup(e,t){return this.getChessNodeLookup(this.getChessNode(oe,e),t)}getOpeningFens(){const e=t=>t.isOpening;return $e.uniq([...Object.values(this.userMoveMap).filter(e).map(t=>t.fen),...Object.values(this.nonUserMoveMap).filter(e).map(t=>t.fen)])}getOpeningFensWithoutLeaves(){const e=t=>t.isOpening&&t.moves.length>0;return $e.uniq([...Object.values(this.userMoveMap).filter(e).map(t=>t.fen),...Object.values(this.nonUserMoveMap).filter(e).map(t=>t.fen)])}getOpeningTopologicalSort(e){const t=this.getAllOpeningChessNodesWithInitialColor(e),s=[];for(const i of t)i.sortIndegreeRemaining=i.parents.length,i.sortIndegreeRemaining===0&&s.push(i);const r=[];for(;s.length;){const i=s.pop();r.push(i);for(const a of i.children)a.sortIndegreeRemaining-=1,a.sortIndegreeRemaining===0&&s.push(a)}if(r.length!==t.length)throw new Error(`Topological sort failed, expected ${t.length} nodes but got ${r.length}`);return r}getNodesInSubtree(e){const t=new Set,s=r=>{if(!t.has(r)){t.add(r);for(const i of r.children)s(i)}};return s(e),Array.from(t)}}const pf=n=>!("version"in n),mf=n=>"version"in n&&n.version===2,oT=n=>"version"in n?n.version:1,nI=Object.freeze(Object.defineProperty({__proto__:null,Repository:ff,getSaveStateVersion:oT,isSaveState1:pf,isSaveState2:mf},Symbol.toStringTag,{value:"Module"})),gf={blitzLow:"bl",blitzHigh:"bh",masters:"ma",rapidLow:"rl",rapidHigh:"rh"},_f={masters:5,rapidHigh:1,rapidLow:.05,blitzHigh:.005,blitzLow:5e-4};class Ua{constructor(e,t,s){this.summary=e,this.type=t,this.hasTranspositions=s}getMixCount(e){return this.summary[e]?_f[this.type]*(this.summary[e].whiteWins+this.summary[e].draws+this.summary[e].blackWins):0}getDistribution(){const e={};let t=0;for(const s in this.summary){const r=this.summary[s],i=r.whiteWins+r.draws+r.blackWins;e[s]=i,t+=i}for(const s in e)e[s]/=t;return e}}const sI=Object.freeze(Object.defineProperty({__proto__:null,ExploreStatistics:Ua,exploreMix:_f,exploreStatisticsShorthandMap:gf},Symbol.toStringTag,{value:"Module"})),rI=(n,e,t=!1)=>{let s=Ns[0];for(const i of n){if(!s||!s.m||!s.m[i]){s=null;break}const a=s.m[i].i;if(a===void 0){s=null;break}s=Ns[a]}const r=s?yf(s,e):null;return r||(t=!1,t?new Promise(i=>{(async()=>{const a=await lf(n,e),c={};for(const u of a.moves)c[u.san]={whiteWins:u.white,draws:u.draws,blackWins:u.black};i(new Ua(c,e,!1))})()}):null)},yf=(n,e)=>{if(n&&n.m){const t=gf[e],s={};let r=!1;for(const i of Object.keys(n.m)){const a=n.m[i];if(a[t]){const c=a[t];s[i]={whiteWins:c[0],draws:c[1],blackWins:c[2]},r=!0}}if(r)return new Ua(s,e,!0)}return null},aT=await(await fetch("./data/fenDataBase.json")).json();let Ns=aT;const Lo={},vf={};let Ms=!1;const wf=new io,Ef=n=>{const e=n.map(()=>!0),t=(s,r)=>{if(e[r]){e[r]=!1;const i=n[r];if(i.m){const a={rapidHigh:null,rapidLow:null,blitzHigh:null,blitzLow:null,masters:null};for(const c of Fa)a[c]=yf(i,c);(a.rapidHigh||a.rapidLow||a.blitzHigh||a.blitzLow||a.masters)&&(vf[s]=a)}if(i.s!==void 0&&(Lo[s]={d:36,s:i.s},i.sm&&(Lo[s].m=i.sm),i.m))for(const a of Object.keys(i.m)){const c=i.m[a].i;if(c!==void 0&&n[c].s!==void 0){const u=qe(s,a);t(u,c)}}}};t(oe,0)};Ef(Ns);const cT=n=>{const e=Lo[n];return e||(Ms?2:1)},lT=n=>{const e=vf[n];return e||(Ms?2:1)},iI=async()=>{Ns=await(await fetch("./data/fenDataFull.json")).json(),Ms=!0,Ef(Ns),wf.emit()};class Z extends Fo{static{this.MOVE=new Z}static{this.NAME=new Z}static{this.WIN_STATISTICS=new Z}static{this.WIN_DRAW_STATISTICS=new Z}static{this.STOCKFISH_EVAL=new Z}static{this.POPULARITY_STATISTICS=new Z}static{this.FREQUENCY=new Z}static{this.NODE_COUNT=new Z}static{this.UNNAMED_COUNT=new Z}static{this.UNNAMED_NONTRIVIAL_COUNT=new Z}static{this.MAX_UNNAMED_FREQUENCY_COUNT=new Z}static{this.MAX_LEAF_FREQUENCY_COUNT=new Z}static{this.WORST_STOCKFISH=new Z}static{this.enumeration=new Uo(Z)}}const oI=Object.freeze(Object.defineProperty({__proto__:null,MoveColumnSort:Z},Symbol.toStringTag,{value:"Module"})),uT=35,hT=120,dT=45,fT=100,pT=45,mT=35,gT=35,_T=35,yT=45,vT=45,wT=45,aI=3,cI=5,lI=2,ET=new Au(150),TT=new _r([ET],n=>n+1);class M extends Fo{static{this.MOVE=new M}static{this.NAME=new M}static{this.NODE_COUNT=new M}static{this.WIN_STATISTICS=new M}static{this.STOCKFISH_EVAL=new M}static{this.POPULARITY_STATISTICS=new M}static{this.FREQUENCY=new M}static{this.UNNAMED_COUNT=new M}static{this.UNNAMED_NONTRIVIAL_COUNT=new M}static{this.MAX_UNNAMED_FREQUENCY_COUNT=new M}static{this.MAX_LEAF_FREQUENCY_COUNT=new M}static{this.WORST_STOCKFISH=new M}static{this.enumeration=new Uo(M)}}const IT=new Map([[M.MOVE,"Move"],[M.NAME,"Name"],[M.NODE_COUNT,"Nodes"],[M.WIN_STATISTICS,"Win Stats"],[M.STOCKFISH_EVAL,"Eval"],[M.POPULARITY_STATISTICS,"Popularity"],[M.FREQUENCY,"Frequency"],[M.UNNAMED_COUNT,"!Name"],[M.UNNAMED_NONTRIVIAL_COUNT,"!Nont"],[M.MAX_UNNAMED_FREQUENCY_COUNT,"!Freq"],[M.MAX_LEAF_FREQUENCY_COUNT,"Leaf"],[M.WORST_STOCKFISH,"Worst"]]),AT=new Map([[M.MOVE,"Move names (SAN format)"],[M.NAME,"Opening Name"],[M.NODE_COUNT,"Number of nodes in this subtree"],[M.WIN_STATISTICS,"Win/draw/loss statistics"],[M.STOCKFISH_EVAL,"Stockfish evaluation of the position after this move"],[M.POPULARITY_STATISTICS,"Popularity of this move in the lichess database"],[M.FREQUENCY,"Reciprocal total-frequency of this move in your opening tree"],[M.UNNAMED_COUNT,"Number of unnamed positions of our-color-to-move in this subtree"],[M.UNNAMED_NONTRIVIAL_COUNT,"Number of unnamed positions with nontrivial decisions in this subtree"],[M.MAX_UNNAMED_FREQUENCY_COUNT,"Maximum frequency of unnamed positions in this subtree"],[M.MAX_LEAF_FREQUENCY_COUNT,"Maximum frequency of leaf positions in this subtree"],[M.WORST_STOCKFISH,"Worst Stockfish evaluation of positions in this subtree"]]),ST=new Map([[M.MOVE,[Z.MOVE]],[M.NAME,[Z.NAME]],[M.NODE_COUNT,[Z.NODE_COUNT]],[M.WIN_STATISTICS,[Z.WIN_STATISTICS,Z.WIN_DRAW_STATISTICS]],[M.STOCKFISH_EVAL,[Z.STOCKFISH_EVAL]],[M.POPULARITY_STATISTICS,[Z.POPULARITY_STATISTICS]],[M.FREQUENCY,[Z.FREQUENCY]],[M.UNNAMED_COUNT,[Z.UNNAMED_COUNT]],[M.UNNAMED_NONTRIVIAL_COUNT,[Z.UNNAMED_NONTRIVIAL_COUNT]],[M.MAX_UNNAMED_FREQUENCY_COUNT,[Z.MAX_UNNAMED_FREQUENCY_COUNT]],[M.MAX_LEAF_FREQUENCY_COUNT,[Z.MAX_LEAF_FREQUENCY_COUNT]],[M.WORST_STOCKFISH,[Z.WORST_STOCKFISH]]]),RT=new Map([[M.MOVE,uT],[M.NAME,hT],[M.NODE_COUNT,mT],[M.WIN_STATISTICS,TT],[M.STOCKFISH_EVAL,dT],[M.POPULARITY_STATISTICS,fT],[M.FREQUENCY,pT],[M.UNNAMED_COUNT,gT],[M.UNNAMED_NONTRIVIAL_COUNT,_T],[M.MAX_UNNAMED_FREQUENCY_COUNT,yT],[M.MAX_LEAF_FREQUENCY_COUNT,vT],[M.WORST_STOCKFISH,wT]]),Tf=[M.MOVE,M.NAME,M.NODE_COUNT,M.WIN_STATISTICS,M.STOCKFISH_EVAL,M.POPULARITY_STATISTICS,M.FREQUENCY],bT=[M.MOVE,M.NAME,M.NODE_COUNT,M.WIN_STATISTICS,M.STOCKFISH_EVAL,M.POPULARITY_STATISTICS,M.FREQUENCY,M.UNNAMED_COUNT,M.UNNAMED_NONTRIVIAL_COUNT,M.MAX_UNNAMED_FREQUENCY_COUNT,M.MAX_LEAF_FREQUENCY_COUNT,M.WORST_STOCKFISH],uI=Object.freeze(Object.defineProperty({__proto__:null,MOVE_COLUMNS_INITIAL_VISIBLE:Tf,MOVE_COLUMN_ORDER:bT,MoveColumn:M,moveColumnDescriptionMap:AT,moveColumnShorthandNameMap:IT,moveColumnSortMap:ST,moveColumnWidthMap:RT},Symbol.toStringTag,{value:"Module"})),re=(...n)=>{};class Be extends Fo{static{this.NORMAL=new Be}static{this.SAVING=new Be}static{this.SUCCESS=new Be}static{this.FAILURE=new Be}static{this.enumeration=new Uo(Be)}}class CT{constructor(e,t){this.usedOnlineChessOpenings=t,this.repositoryUpdatedEmitter=new io,this.repositoryUpdatedIncrementingProperty=new Au(0),this.isOpeningWhiteProperty=new Kt(!0),this.hoveredPotentialVerboseMoveProperty=new Kt(null),this.mixNewCardsProperty=new fn(!0),this.autoPlaySolidMovesProperty=new fn(!0),this.lockDrillToColorProperty=new fn(!1),this.lichessExploreTypeProperty=new Kt("rapidHigh"),this.moveRowSortProperty=new Bc(Z.POPULARITY_STATISTICS),this.moveRowSortIncludedFirstProperty=new fn(!0),this.magnifyWinStatisticsProperty=new fn(!1),this.columnVisibilityPropertyMap=new Map(M.enumeration.values.map(s=>[s,new fn(Tf.includes(s))])),this.saveStatusProperty=new Bc(Be.NORMAL),this.popupSingleChessNodeEmitter=new io,this.repository=new ff(e),this.fillStockfishEvalCache(),this.fillExploreCache(),this.fillDistributionFrequencyCache(),this.stateProperty=new Kt({state:"openingExplore",...pu(this.repository,!0),...mr()}),this.stateProperty.link((s,r)=>PE(s)),this.isOpeningProperty=new _r([this.stateProperty],s=>ze(s)),this.isWhiteProperty=new _r([this.stateProperty],s=>s.isWhite),this.stateProperty.link(s=>{re(s)}),wf.addListener(()=>this.fillStockfishEvalCache()),this.currentChessNodeProperty=new _r([this.stateProperty],s=>pr(s)),this.repositoryUpdatedEmitter.addListener(()=>{const s=this.currentChessNodeProperty.value;this.currentChessNodeProperty.recomputeDerivation(),s===this.currentChessNodeProperty.value&&this.currentChessNodeProperty.notifyListenersStatic(),this.repositoryUpdatedIncrementingProperty.value++}),this.isOpeningWhiteProperty.lazyLink(s=>{const r=this.stateProperty.value;ze(r)&&!xe(r)&&r.isWhite!==s&&this.userSwitchedColor(s)})}getCompactState(){return this.repository.getSaveState()}fillStockfishEvalCache(){const e=Ms?[null,1]:[null];for(const t of this.repository.getAllOpeningChessNodes()){const s=t.cachedStockfishEntry;e.includes(s)&&(t.cachedStockfishEntry=cT(t.fen))}}fillExploreCache(){const e=Ms?[null,1]:[null];for(const t of this.repository.getAllOpeningChessNodes()){const s=t.cachedExploreStatisticsMap;e.includes(s)&&(t.cachedExploreStatisticsMap=lT(t.fen))}}fillDistributionFrequencyCache(){for(const e of[!0,!1]){const t=this.repository.getOpeningTopologicalSort(e);for(const s of t)s.recomputeDistribution(),s.totalFrequency=s.parents.length?0:1;for(const s of t)for(const r of s.parents){let i;if(r.isUserMove)i=1;else{i=0;for(const a of r.getChildMoves(s))i+=r.allDistribution[a]}s.totalFrequency+=i*r.totalFrequency}}}getReviewStateAfterMove(e,t){if(!xe(e))throw new Error("Can only get review state after move if we are currently reviewing???");const s=Ji(e,t,ze(e)),r=s.chessNode;if(ze(e)){let i=!r.isUserMove||r.moves.length>1;if(this.autoPlaySolidMovesProperty.value&&r.isUserMove&&r.moves.length===1&&r.sequenceCard&&r.sequenceCard.isSolid()&&(i=!0,re("auto-playing solid move")),i){const a=e.targetHistory[s.stack.length];return{state:"openingReviewAutoMovePending",...s,...fr(e),...fu(e),isPendingAutoMove:!0,pendingAutoMove:a}}else return{state:"openingReviewUserMove",...s,...fr(e),...fu(e)}}else if(!r.isUserMove){const a=ro(s.fen,$e.sample(r.moves));return{state:"endgameReviewAutoMovePending",...s,...du(e),...fr(e),isPendingAutoMove:!0,pendingAutoMove:a}}else return{state:"endgameReviewUserMove",...s,...du(e),...fr(e)}}fastForwardCommonState(e,t){for(;e.stackPosition<e.stack.length;){const s=e.stack[e.stackPosition].move;e=Ji(e,s,t)}return e}getReviewUpdateState(e){const t=e.chessNode;t.sequenceCard||(t.sequenceCard=Je.createEmptyCard(t,"sequence"));const s=t.sequenceCard,r=Date.now()-e.nextTimestampStart,i=s.isCramming();s.beforeReview();let a=e.nextFailedReview?k.Again:s.hasEasyDefault(r)?k.Easy:k.Good;return s.review(a),{...EE(e),previousChessNode:t,previousFen:e.fen,previousHistory:Xi(e),previousBaseFen:On(e)?e.baseFen:oe,previousGrade:a,previousWasCramming:i,previousFailedReview:e.nextFailedReview,nextFailedReview:!1,nextTimestampStart:Date.now()}}userPlayMove(e){const t=this.stateProperty.value;if(Yi(t)||gE(t))re(`${e}: Exploring ${Yi(t)?"opening":"endgame"}`),this.stateProperty.value={...t,...Ji(t,e,ze(t))};else if(xe(t)&&t.stackPosition<t.stack.length)re("Ignoring move because we are not at the end of the stack"),this.stateProperty.value={...t,...this.fastForwardCommonState(t,ze(t))};else if(_E(t)){const s=t.targetHistory[t.stack.length];if(e===s){const r=this.getReviewUpdateState(t);if(t.stack.length===t.targetHistory.length-1){re(`${e}: Correct, final move!`);const a=this.getNextReviewState();this.stateProperty.value={...a,...r},this.postReviewStateUpdate()}else{re(`${e}: Correct, continuing`);const a=this.getReviewStateAfterMove(t,e);this.stateProperty.value={...a,...r},this.postReviewStateUpdate()}}else re(`${e}: Incorrect`),this.popupSingleChessNodeEmitter.emit(t.chessNode,t.fen),this.stateProperty.value={...t,nextFailedReview:!0,failedMoves:[s]}}else if(vE(t)){const s=t.chessNode.moves.map(r=>ro(t.fen,r));if(s.includes(e)){const r=this.getReviewUpdateState(t);if(t.chessNode.moveMap[so(t.fen,e)].moves.length){re(`${e}: Correct, continuing`);const a=this.getReviewStateAfterMove(t,e);this.stateProperty.value={...a,...r},this.postReviewStateUpdate()}else{re(`${e}: Correct, final move!`);const a=this.getNextReviewState();this.stateProperty.value={...a,...r},this.postReviewStateUpdate()}}else re(`${e}: Incorrect`),this.popupSingleChessNodeEmitter.emit(t.chessNode,t.fen),this.stateProperty.value={...t,nextFailedReview:!0,failedMoves:s}}else throw yE(t)||wE(t)?new Error("Should not have been able to move while in auto-move pending state???"):new Error(`Unknown state type: ${t.state}`)}userPopupPreviousChessNode(){const e=this.stateProperty.value;!xe(e)||!e.previousChessNode||!e.previousFen||this.popupSingleChessNodeEmitter.emit(e.previousChessNode,e.previousFen)}userGoFullBack(){re("Going full back"),this.stateProperty.value={...this.stateProperty.value,...pn(this.stateProperty.value,0)}}userGoBack(){re("Going back"),this.stateProperty.value.stackPosition>0&&(this.stateProperty.value={...this.stateProperty.value,...pn(this.stateProperty.value,this.stateProperty.value.stackPosition-1)})}userGoForward(){re("Going forward"),this.stateProperty.value.stack.length>this.stateProperty.value.stackPosition&&(this.stateProperty.value={...this.stateProperty.value,...pn(this.stateProperty.value,this.stateProperty.value.stackPosition+1)})}userGoFullForward(){re("Going full forward"),this.stateProperty.value={...this.stateProperty.value,...pn(this.stateProperty.value,this.stateProperty.value.stack.length)}}userSetBaseFen(e){if(e===oe){re("Switching to initial position opening");const t=this.isOpeningWhiteProperty.value;this.stateProperty.value={state:"openingExplore",...pu(this.repository,t),...mr()}}else re('Switching to "endgame" fen'),je(e)||(e=ip.mapFen(op.mapFen(e))),this.stateProperty.value={state:"endgameExplore",...Zi(e),...mu(this.repository,e)},this.isOpeningWhiteProperty.value=!0}userSetPGN(e){const t=new kn;t.loadPgn(e);const s=t.history(),r=[];let i=oe;for(const u of s){const d=qe(i,u);r.push({fen:d,fenBeforeMove:i,move:u}),i=d}const a=this.isOpeningWhiteProperty.value;re("Setting PGN");const c=this.repository.getChessNode(i,je(i)===a)??null;this.stateProperty.value={state:"openingExplore",isOpening:!0,repository:this.repository,isWhite:a,fen:i,stack:r,stackPosition:r.length,chessNode:c,failedMoves:[]}}userSwitchedColor(e){if(Yi(this.stateProperty.value)&&e!==this.stateProperty.value.isWhite)re("Switching opening explore color"),this.stateProperty.value={...this.stateProperty.value,...IE(this.stateProperty.value)};else throw new Error("Color switching is only supported in the opening explorer for now")}userSelectStackIndex(e){this.stateProperty.value={...this.stateProperty.value,...pn(this.stateProperty.value,e+1)}}getCurrentPGN(){const e=TE(this.stateProperty.value);return e.length?df(e):""}getMappedFen(e){return this.isOpeningProperty.value?e:it(e)}isBaseUserMove(){return this.isOpeningProperty.value?this.isOpeningWhiteProperty.value:!0}getBaseChessNode(){return this.repository.getChessNode(this.getMappedFen(Oo(this.stateProperty.value)),this.isBaseUserMove())}ensureBaseChessNode(){return this.repository.ensureChessNode(this.getMappedFen(Oo(this.stateProperty.value)),this.isBaseUserMove(),this.isOpeningProperty.value)}saveTree(){const e=this.stateProperty.value,t=e.stack,s=e.stackPosition;let r=this.ensureBaseChessNode();for(let i=0;i<s&&!(i===s-1&&!r.isUserMove);i++){const a=ze(e)?t[i].move:so(t[i].fenBeforeMove,t[i].move);r=r.addMove(a)}this.fillStockfishEvalCache(),this.fillExploreCache(),this.fillDistributionFrequencyCache(),this.repositoryUpdatedEmitter.emit()}deleteTree(){const e=this.stateProperty.value,t=ze(e),s=e.stack,r=e.stackPosition;if(r>0){const i=s[r-1],a=ko(e,i.fen);if(!a)return;const c=r>1?ko(e,s[r-2].fen):this.getBaseChessNode();if(!c||!c.isUserMove)return;Ve.disconnect(c,a),c.moves.length===0&&this.repository.deleteChessNode(c);const u=d=>{if(d.parents.length===0){for(const f of d.children)Ve.disconnect(d,f),t&&u(f);this.repository.deleteChessNode(d)}};u(a)}this.repositoryUpdatedEmitter.emit()}getNextReviewState(e=this.stateProperty.value){let t;if(xe(e))t=e.prefix;else if(ze(e)&&e.fen!==oe){if(t=pr(e),t){const a=t.isUserMove===je(t.fen);let u=this.repository.getInitialChessNode(a);for(const d of Xi(e))u.isNewLearnable()&&(u.sequenceCard=Je.createEmptyCard(u,"sequence")),u=u.moveMap[d]}}else On(e)?t=pr(e):t=this.lockDrillToColorProperty.value?pr(e):null;const s=of(this.repository,t,{mixNewCards:this.mixNewCardsProperty.value}),r=s.chessNode,i=s.statistics;if(!r)throw new Error("No chess node found for review???");if(r.isOpening){const a=r.isUserMove===je(r.fen),c=this.repository.getInitialChessNode(a),u=Zd(e)?e.initialHistory:xe(e)?[]:Xi(e),d=r.getOpeningHistories().filter(U=>{if(U.length<u.length)return!1;for(let E=0;E<u.length;E++)if(U[E]!==u[E])return!1;return!0});if(d.length===0)throw new Error("No possible histories found for review???");const f=d.map(U=>{let E=1,m=c;for(const y of U)m.isUserMove||(E*=m.allDistribution?.[y]??.2),m=m.moveMap[y];return E}),_=$e.sum(f)+1e-15,A=f.map(U=>U/_).map(U=>U+.05),P=$e.sum(A),D=A.map(U=>U/P);let N=[...d[cp(D)],r.getOnlyMove()];{let U=r;const E=new Date().getTime();for(;;){const m=U.moveMap[U.getOnlyMove()],y=m.children.filter(w=>w.sequenceCard&&w.sequenceCard.isDue(E));if(y.length!==0){const w=Da(y);w&&(N.push(m.getOpeningChildMove(w)),N.push(w.getOnlyMove()),U=w),re(`Following due move! ${N}`)}else break}for(;U.children[0].isOpeningOpponentForcedMove()&&U.children[0].children[0].isLearnable();)N.push(U.children[0].getOnlyMove()),N.push(U.children[0].children[0].getOnlyMove()),U=U.children[0].children[0]}{let U=c;for(const E of N)U.isNewLearnable()&&(U.sequenceCard=Je.createEmptyCard(U,"sequence")),U=U.moveMap[E]}const G=[];let L=c;for(const U of u){const E=L.moveMap[U];G.push({fen:E.fen,fenBeforeMove:L.fen,move:U}),L=E}const H=!L.isUserMove||L.moves.length>1,ne=N[u.length],Pe={repository:this.repository,isWhite:c.isUserMove,fen:L.fen,stack:G,stackPosition:G.length,chessNode:L,failedMoves:[],initialHistory:u,targetHistory:N,...mr(),...gu(t,i)};return H?{state:"openingReviewAutoMovePending",...Pe,isPendingAutoMove:!0,pendingAutoMove:ne}:{state:"openingReviewUserMove",...Pe}}else{const u=ap(r.fen).map(f=>f.mapFen(r.fen)).filter(je);if(u.length===0)throw new Error("No valid symmetries found for endgame review???");const d=$e.sample(u);return{state:"endgameReviewUserMove",...mu(this.repository,d),...Zi(d),...gu(t,i)}}}postReviewStateUpdate(){Mo(this.stateProperty.value)&&setTimeout(()=>this.autoMoveForReview(),100),this.isOpeningWhiteProperty.value=this.stateProperty.value.isWhite}userToggleReview(e){let t=this.stateProperty.value;e||(t={...t,...pn(t,0)}),xe(t)?(re("Exiting review mode"),ze(t)?this.stateProperty.value={state:"openingExplore",...mr(),...Ps(t)}:this.stateProperty.value={state:"endgameExplore",...Zi(t.baseFen),...Ps(t)},this.postReviewStateUpdate()):(re("Entering review mode"),this.stateProperty.value=this.getNextReviewState(t),this.postReviewStateUpdate())}userExplorePreviousCard(){const e=this.stateProperty.value;if(!xe(e)||!e.previousChessNode)return;const t=e.previousBaseFen===oe,s=e.previousBaseFen,r=[];let i=s;for(const c of e.previousHistory){const u=qe(i,c);r.push({fen:u,fenBeforeMove:i,move:c}),i=u}const a={repository:this.repository,isWhite:e.previousChessNode.isWhite,fen:e.previousFen,stack:r,stackPosition:r.length,chessNode:e.previousChessNode,failedMoves:[]};t?(re("Exploring previous opening card in opening explorer"),this.stateProperty.value={state:"openingExplore",isOpening:!0,...a}):(re("Exploring previous endgame card in opening explorer"),this.stateProperty.value={state:"endgameExplore",isEndgame:!0,baseFen:s,...a}),this.postReviewStateUpdate()}autoMoveForReview(){const e=this.stateProperty.value;Mo(e)&&(re(`${e.pendingAutoMove}: Auto-Move`),this.stateProperty.value=this.getReviewStateAfterMove(e,e.pendingAutoMove),this.postReviewStateUpdate())}userReview(e){re(`Grading review: ${e}`);const t=this.stateProperty.value;if(xe(t)){const s=t.previousChessNode.sequenceCard;e===k.Again&&t.previousGrade!==e&&this.popupSingleChessNodeEmitter.emit(t.previousChessNode,t.previousFen),s.review(e),this.stateProperty.value={...t,previousGrade:e}}}async exportState(){const e=this.getCompactState(),t=JSON.stringify(e);if(console.log(t),!this.usedOnlineChessOpenings)iT.saveAs(new Blob([t],{type:"application/json;charset=utf-8"}),"chessOpenings.json"),this.saveStatusProperty.value=Be.NORMAL;else{this.saveStatusProperty.value=Be.SAVING;try{await Yd(Mn.value.uid,e),this.saveStatusProperty.value=Be.SUCCESS}catch(s){console.error("Failed to save!"),console.error(s),this.saveStatusProperty.value=Be.FAILURE}}return t}}const hI=Object.freeze(Object.defineProperty({__proto__:null,Model:CT,SaveStatus:Be},Symbol.toStringTag,{value:"Module"})),PT=await(await fetch("./data/eco.json")).json(),Tu=PT,NT=n=>{const e=[],t=new kn,s=()=>{e.push(t.fen())};s();for(const r of n)t.move(r),s();for(let r=e.length-1;r>=0;r--){const i=e[r];if(Tu[i])return Tu[i]}return null},dI=Object.freeze(Object.defineProperty({__proto__:null,getOpeningInfo:NT},Symbol.toStringTag,{value:"Module"}));export{zT as $,mT as A,gT as B,_T as C,yT as D,vT as E,wT as F,aI as G,cI as H,lI as I,TT as J,RT as K,ST as L,bT as M,pr as N,TE as O,rI as P,Ua as Q,di as R,Be as S,Jd as T,KT as U,Z as V,ME as W,Yi as X,k as Y,z as Z,xa as _,LT as a,GT as a0,DT as a1,VT as a2,UT as a3,CT as a4,BT as a5,jT as a6,WT as a7,sI as a8,XT as a9,qT as aa,eI as ab,ZT as ac,dI as ad,tI as ae,HT as af,hI as ag,uI as ah,oI as ai,JT as aj,nI as ak,$T as al,ff as am,ko as b,AT as c,je as d,iI as e,wf as f,oe as g,On as h,xe as i,Xi as j,NT as k,FT as l,IT as m,qe as n,ET as o,NE as p,fT as q,M as r,xT as s,uT as t,Mn as u,hT as v,Lo as w,QT as x,dT as y,pT as z};
